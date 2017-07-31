{shader}
#if defined( MATCAP ) && defined ( USE_MAP )
  calculateMatCapNormalEye(transformed, modelViewMatrix, objectNormal, normalMatrix);
#endif
