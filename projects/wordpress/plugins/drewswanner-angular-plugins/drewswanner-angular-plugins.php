<?php
/**
 * @package Drew Angular Plugin
 */

/*
Plugin Name: Drew Angular Plugin
Plugin URI: https://github.com/drewswanner/drewswanner-angular
Description: Functionality for the DrewSwanner Angular Wordpress theme.
Version: 0.1.0
Author: Drew Swanner
Author URI: http://drewswanner.com/
License: GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: drewswanner-angular
Domain Path: /languages
*/

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

add_option('drewswanner-angular', array());

class DS_Plugin {

	public static function get_option( $name, $default = false ) {
		$option = get_option( 'drewswanner-angular' );

		if ( false === $option ) {
			return $default;
		}

		if ( isset( $option[$name] ) ) {
			return $option[$name];
		} else {
			return $default;
		}
	}

	public static function update_option( $name, $value ) {
		$option = get_option( 'drewswanner-angular' );
		$option = ( false === $option ) ? array() : (array) $option;
		$option = array_merge( $option, array( $name => $value ) );
		update_option( 'drewswanner-angular', $option );
	}
}

include ('email-api-hook.php');

 ?>
