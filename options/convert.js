const Convert = (function() {

  'use strict';

  class Convert {
    /**
     * Create a new instance.
     * @param {number} weight
     * @param {object} options
     * @param {string} [options.units]
     */
    constructor(weight = 0, options = {}) {
      const validUnits = [ 'mg', 'g', 'kg' ];
      const settings = { units: 'mg', ...options };

      if (!validUnits.includes(settings.units)) {
        throw new RangeError(`Invalid weight unit: ${settings.units}`);
      }

      this.weight = weightToMg(weight, settings.units);
    }

    /**
     * Return the weight in milligrams.
     * @returns {number}
     */
    inMg() {
      return this.weight;
    }

    /**
     * Return the weight in grams.
     * @returns {number}
     */
    inG() {
      return this.weight / 1000;
    }

    /**
     * Return the weight in kilograms.
     * @returns {number}
     */
    inKg() {
      return this.weight / 1000 / 1000;
    }

    /**
     * Add a number of milligrams to the weight.
     * @param {number} mg
     * @returns {Convert}
     */
    addMg(mg = 0) {
      this.weight += mg;
      return this;
    }

    /**
     * Add a number of grams to the weight.
     * @param {number} g
     * @returns {Convert}
     */
    addG(g = 0) {
      this.weight += g * 1000;
      return this;
    }

    /**
     * Add a number of kilograms to the weight.
     * @param {number} kg
     * @returns {Convert}
     */
    addKg(kg = 0) {
      this.weight += kg * 1000 * 1000;
      return this;
    }
  }

  /**
   * Convert the weight to milligrams.
   * @param {number} weight
   * @param {string} units
   * @returns {number}
   */
  function weightToMg(weight, units) {
    switch (units) {
      case 'g':
        return weight * 1000;
      case 'kg':
        return weight * 1000 * 1000;
      default:
        return weight;
    }
  }

  return Convert;

})();
