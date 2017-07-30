#if defined(INSTANCING) && !defined(INSTANCING_TRANSFORMED_NORMAL)
  #define INSTANCING_TRANSFORMED_NORMAL
  objectNormal = vertex_instance_normal(objectNormal);
#endif
