#if defined(INSTANCING) && !defined(INSTANCING_TRANSFORMED_POSITION)
  #define INSTANCING_TRANSFORMED_POSITION
  transformed = vertex_instance_position(transformed);
#endif
