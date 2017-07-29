#ifdef MATCAP

  #if defined( USE_MAP )
    // calculateMatCapNormalEye();

  vMatCapEye = normalize( vec3( modelViewMatrix * vec4( position, 1. ) ) );
  vMatCapNormal = normalize( normalMatrix * normal );

  vec3 r = reflect( vMatCapEye, vMatCapNormal );
  float m = 2. * sqrt(
    pow( r.x, 2. ) +
    pow( r.y, 2. ) +
    pow( r.z + 1., 2. )
  );
  vMatCapUv = r.xy / m + .5;

  #endif

#endif
