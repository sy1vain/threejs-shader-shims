#if defined(INSTANCING) && !defined(INSTANCING_PARS_FRAGMENT)
  #define INSTANCING_PARS_FRAGMENT

  #ifdef INSTANCING_USE_COLOR
    varying vec3 vInstanceColor;
  #endif

#endif
