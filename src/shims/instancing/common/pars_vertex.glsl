#if defined(INSTANCING) && !defined(INSTANCING_PARS_VERTEX)
  #define INSTANCING_PARS_VERTEX

  #ifdef INSTANCING_USE_POSITION
    attribute vec3 instancePosition;
  #endif

  #ifdef INSTANCING_USE_QUATERNION
    attribute vec4 instanceQuaternion;
  #endif

  #ifdef INSTANCING_USE_SCALING
    #ifdef INSTANCING_SCALING_IS_UNIFORM
      attribute float instanceScale;
    #else
      attribute vec3 instanceScale;
    #endif
  #endif

  #ifdef INSTANCING_USE_COLOR
    attribute vec3 instanceColor;
    varying vec3 vInstanceColor;
  #endif

  vec3 vertex_instance_position(vec3 position){
    vec3 p = position;

    #ifdef  INSTANCING_USE_SCALING
      p *= vec3(instanceScale);
    #endif

    #ifdef INSTANCING_USE_QUATERNION
      p = p + 2.0 * cross(instanceQuaternion.xyz, cross(instanceQuaternion.xyz, p) + instanceQuaternion.w * p);
    #endif

    #ifdef INSTANCING_USE_POSITION
        p += instancePosition;
    #endif
    return p;
  }

  vec3 vertex_instance_normal(vec3 normal){
    vec3 n = normal;

    #ifdef  INSTANCING_USE_SCALING
      n /= normalize(vec3(instanceScale));
    #endif

    #ifdef INSTANCING_USE_QUATERNION
      n = n + 2.0 * cross(instanceQuaternion.xyz, cross(instanceQuaternion.xyz, n) + instanceQuaternion.w * n);
    #endif

    return n;
  }

#endif
