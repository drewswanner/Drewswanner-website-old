<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u606857454_dyrat' );

/** MySQL database username */
define( 'DB_USER', 'u606857454_nuteg' );

/** MySQL database password */
define( 'DB_PASSWORD', '3pQxXsiKGtEynnmafpJm{epEqkiTfzXxoAXZuzUaskfJ' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'aa]d$ZqEM>`<zt BuN~g:A$pdQzKp[QHKjbqshKND6jE:*I5,vuu659~]yri6S%T' );
define( 'SECURE_AUTH_KEY',  'p|qh5<0{j/``R@^;+ypYB( t;d79=UfTtl,cNisD|y,,X4#o2v:Asfl9Q+-qI]&Z' );
define( 'LOGGED_IN_KEY',    '=sNOqks+D_X;hC6`qz<$ftqG0[gy=?T.n*V~GBlXemnSSp]{m=.a{3?99mr0j|AH' );
define( 'NONCE_KEY',        'Fq&D:5$];TF[ANd=YuW6}jFZ=@S@<wYc.XR,:Je|b#Gy;*I|_4#KI%3;x!PrUxHo' );
define( 'AUTH_SALT',        '2Q:Rk!t@]ip90LApXA*h*?fzeONTl4zk5azexF7EN,t.5BTA-0c~=- Ds)nX$vLm' );
define( 'SECURE_AUTH_SALT', 'TDano=t2~@HBkX*&C{nzxq(lfK1-iJOdS.eYS:{B,8@gN[~XcQYS1m3rPhUlxx&w' );
define( 'LOGGED_IN_SALT',   'QJWw=Q8UM]6>!7ww]~Gew27p9V8L`3HK()V_=Tov[h%l2P.U2o?eVas1*rBf;VIF' );
define( 'NONCE_SALT',       '+6tn!n,~ik$-,IWzasB/ GJJ+%dPKzVg&{F8@a#)Wj%3dDDX<@MhSjR8@Vk[77~O' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpdrew_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
