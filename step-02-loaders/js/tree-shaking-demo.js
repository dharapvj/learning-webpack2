/**
 * This function will be shaken down (will not be included in build)
 */
const shake = function() {
  console.log('shake');
};

/**
 * This function will be baked into the build
 */
const bake = function () {
  console.log('bake');
};

export {
  shake,
  bake,
};