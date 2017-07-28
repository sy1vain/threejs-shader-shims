#ifdef INSTANCING

  #ifndef INSTANCE_MATRIX
    //define matrix for further use
    mat4 _instanceMatrix = getInstanceMatrix();
    #define INSTANCE_MATRIX
  #endif

  transformedNormal =  transpose( inverse( mat3( modelViewMatrix * _instanceMatrix ) ) ) * objectNormal ;

#endif
