export function all(THREE){
  instancing(THREE);
  matcap(THREE);
}

export function instancing(THREE){
  shim(THREE, 'instancing');
}

export function matcap(THREE){
  shim(THREE, 'matcap');
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

  if(!shaders) shaders = Object.keys(THREE.ShaderChunk);

  shaders.forEach(function(shader){
    try {
      THREE.ShaderChunk[ shader ] = require(`./shims/${type}/${shader}.glsl`).replace('{shader}', THREE.ShaderChunk[ shader ]);
    }catch(e){}
  })

  setShimmed(THREE, type);
}
