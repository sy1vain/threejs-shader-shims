#if defined(MATCAP) && !defined(MATCAP_PARS_VERTEX)
  #define MATCAP_PARS_VERTEX

  #ifdef MATCAP_USE_PHONG
    varying vec3 vMatCapEye;
    varying vec3 vMatCapNormal;
  #else
    varying vec2 vMatCapUv;
  #endif

  void calculateMatCapNormalEye(vec3 position, mat4 modelViewMatrix, vec3 normal, mat3 normalMatrix){
    vec3 e = normalize( vec3( modelViewMatrix * vec4( position, 1. ) ) );
    vec3 n = normalize( normalMatrix * normal );

    #ifdef MATCAP_USE_PHONG
      vMatCapEye = e;
      vMatCapNormal = n;
    #else
      vec3 r = reflect( e, n );
      float m = 2. * sqrt(
        pow( r.x, 2. ) +
        pow( r.y, 2. ) +
        pow( r.z + 1., 2. )
      );
      vMatCapUv = r.xy / m + .5;
    #endif
  }
#endif
