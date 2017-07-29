#if defined(MATCAP)
  #ifdef USE_MAP
    vec4 texelColor = vec4(vUv, 1., 1.); //added to prevent warning
    texelColor = matcapSampleColor(map);
    texelColor = mapTexelToLinear( texelColor );
  	diffuseColor *= texelColor;

  #endif

#else

  {shader}

#endif
