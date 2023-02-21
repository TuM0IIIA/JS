'use strict';

if (-1 || 0) alert( 'first' );  // -1
if (-1 && 0) alert( 'second' );  // 0 that's mean this alert won't print
if (null || -1 && 1) alert( 'third' );  //  1