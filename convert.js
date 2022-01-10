const convert = (function() {

  'use strict';

  const defaultMass = 1;

  function gToKg(g = defaultMass) {
    return g / 1000;
  }

  function gToMg(g = defaultMass) {
    return g * 1000;
  }

  function kgToG(kg = defaultMass) {
    return kg * 1000;
  }

  function kgToMg(kg = defaultMass) {
    return kg * 1000 * 1000;
  }

  function mgToG(mg = defaultMass) {
    return mg / 1000;
  }

  function mgToKg(mg = defaultMass) {
    return mg / 1000 / 1000;
  }

  return {
    gToKg,
    gToMg,
    kgToG,
    kgToMg,
    mgToG,
    mgToKg
  };

})();
