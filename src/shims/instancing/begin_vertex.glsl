#ifdef INSTANCING

  #ifndef INSTANCE_MATRIX
    //define matrix for further use
    mat4 _instanceMatrix = getInstanceMatrix();
    #define INSTANCE_MATRIX
  #endif

  transformed = ( _instanceMatrix * vec4( transformed , 1. )).xyz;

#endif
