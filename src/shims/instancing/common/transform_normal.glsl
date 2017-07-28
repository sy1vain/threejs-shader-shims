#if defined(INSTANCING) && !defined(INSTANCING_TRANSFORMED_NORMAL)
  #define INSTANCING_TRANSFORMED_NORMAL
  transformedNormal = vertex_instance_normal(transformedNormal);
#endif
