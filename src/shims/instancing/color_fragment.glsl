#ifdef USE_COLOR

#ifdef INSTANCING
  #ifdef INSTANCING_USE_COLOR
    diffuseColor.rgb *= vInstanceColor;
  #endif
#endif

#endif
