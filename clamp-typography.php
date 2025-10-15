<?php
/**
 * Plugin Name:       Fluid Type Options
 * Description:       Have precise control over the clamp output on the core/heading blocks.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       clamp-typography
 *
 * @package Clamptype
 */

namespace ClampTypography;

function init() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
	wp_enqueue_script(
		'clamp-typography',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\init' );

/**
 * Get the preferred (current) font size from block attributes
 */
function get_preferred_font_size( $attrs ) {
	// Check for custom font size first
	if ( ! empty( $attrs['style']['typography']['fontSize'] ) ) {
		return $attrs['style']['typography']['fontSize'];
	}
	
	// Check for preset font size
	if ( ! empty( $attrs['fontSize'] ) ) {
		// Use WordPress function to resolve preset to actual value
		if ( function_exists( 'wp_get_typography_font_size_value' ) ) {
			$font_size_value = \wp_get_typography_font_size_value( $attrs );
			if ( $font_size_value ) {
				return $font_size_value;
			}
		}
		
		// Fallback: try to get preset value from theme settings
		if ( function_exists( 'wp_get_global_settings' ) ) {
			$font_sizes = \wp_get_global_settings( array( 'typography', 'fontSizes' ) );
		} else {
			$font_sizes = null;
		}
		if ( $font_sizes ) {
			foreach ( $font_sizes as $size ) {
				if ( $size['slug'] === $attrs['fontSize'] ) {
					return $size['size'];
				}
			}
		}
		
		// Last fallback: return the slug with 'var()' wrapper
		return sprintf( 'var(--wp--preset--font-size--%s)', $attrs['fontSize'] );
	}
	
	// Default fallback
	return '1rem';
}

function filter_heading_font_size( $block_content, $block ) {
	// Debug: Log the block attributes
	error_log( 'Clamp Typography - Block attrs: ' . print_r( $block['attrs'] ?? [], true ) );
	
	// Check if this block has clamp typography enabled
	if ( empty( $block['attrs']['clampTypographyEnabled'] ) || 
		 empty( $block['attrs']['clampTypographyMin'] ) || 
		 empty( $block['attrs']['clampTypographyMax'] ) ) {
		error_log( 'Clamp Typography - Not enabled or missing values' );
		return $block_content;
	}

	$min_size = $block['attrs']['clampTypographyMin'];
	$max_size = $block['attrs']['clampTypographyMax'];
	
	// Get the preferred (current) font size using WordPress function
	$preferred_size = get_preferred_font_size( $block['attrs'] );
	
	// Create the clamp CSS function
	$clamp_value = sprintf( 'clamp(%s, %s, %s)', $min_size, $preferred_size, $max_size );
	
	error_log( sprintf( 'Clamp Typography - Applying: %s', $clamp_value ) );
	
	// Process the HTML content (WP 6.2+)
	if ( class_exists( 'WP_HTML_Tag_Processor' ) ) {
		$p = new \WP_HTML_Tag_Processor( $block_content );
		
		if ( $p->next_tag() ) {
			$existing_style = $p->get_attribute( 'style' ) ?: '';
			
			// Remove any existing font-size declarations
			$cleaned_style = preg_replace( '/font-size\s*:\s*[^;]+;?/i', '', $existing_style );
			
			// Add our clamp font-size
			$new_style = trim( $cleaned_style );
			if ( ! empty( $new_style ) && ! str_ends_with( $new_style, ';' ) ) {
				$new_style .= ';';
			}
			$new_style .= sprintf( 'font-size:%s;', $clamp_value );
			
			$p->set_attribute( 'style', $new_style );
			
			return $p->get_updated_html();
		}
	} else {
		// Fallback for older WordPress versions
		error_log( 'Clamp Typography - Using regex fallback for older WP' );
		
		// Use regex to add/replace font-size in style attribute
		if ( preg_match( '/<([^>]+)style="([^"]*)"([^>]*)>/i', $block_content, $matches ) ) {
			$existing_style = $matches[2];
			$cleaned_style = preg_replace( '/font-size\s*:\s*[^;]+;?/i', '', $existing_style );
			
			$new_style = trim( $cleaned_style );
			if ( ! empty( $new_style ) && ! str_ends_with( $new_style, ';' ) ) {
				$new_style .= ';';
			}
			$new_style .= sprintf( 'font-size:%s;', $clamp_value );
			
			return preg_replace( 
				'/(<[^>]+)style="[^"]*"([^>]*>)/i', 
				'$1style="' . \esc_attr( $new_style ) . '"$2', 
				$block_content 
			);
		} else {
			// Add style attribute if it doesn't exist
			return preg_replace(
				'/(<[^>]+)(>)/i',
				'$1 style="font-size:' . \esc_attr( $clamp_value ) . ';"$2',
				$block_content,
				1
			);
		}
	}

	return $block_content;
}

\add_filter('render_block_core/heading', __NAMESPACE__ . '\filter_heading_font_size', 10, 2);