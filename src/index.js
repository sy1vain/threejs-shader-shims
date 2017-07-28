export function all(THREE){
  instancing(THREE);
}

export function instancing(THREE){
  shim(THREE, 'instancing', [
    'begin_vertex'
    ,'uv_pars_vertex'
    ,'defaultnormal_vertex'
  ]);
}

function isShimmed(THREE, type){
  if(!THREE._shims_) return false;
  return !!THREE._shims_[type];
}

function setShimmed(THREE, type){
  if(!THREE._shims_) THREE._shims_ = {};
  THREE._shims_[type] = true;
}

function shim(THREE, type, shaders){
  if(isShimmed(THREE, type)) return;

  shaders.forEach(function(shader){
    THREE.ShaderChunk[ shader ] += require(`./shims/${type}/${shader}.glsl`);
  })

  setShimmed(THREE, type);
}
