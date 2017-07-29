#if defined(MATCAP) && !defined(MATCAP_PARS_FRAGMENT)
  #define MATCAP_PARS_FRAGMENT

  #ifdef MATCAP_USE_PHONG
    varying vec3 vMatCapEye;
    varying vec3 vMatCapNormal;
  #else
    varying vec2 vMatCapUv;
  #endif

  vec4 matcapSampleColor(sampler2D map){
    #ifdef MATCAP_USE_PHONG
      vec3 r = reflect( vMatCapEye, vMatCapNormal );
      float m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );
      vec2 matcapUv = r.xy / m + .5;
    #else
      vec2 matcapUv = vMatCapUv;
    #endif

    return texture2D( map, matcapUv );
  }

#endif
