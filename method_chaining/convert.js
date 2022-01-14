class Convert {
  constructor(mg = 0) {
    this.weight = mg;
  }

  inMg() {
    return this.weight;
  }

  inG() {
    return this.weight / 1000;
  }

  inKg() {
    return this.weight / 1000 / 1000;
  }

  addMg(mg = 0) {
    this.weight += mg;
    return this;
  }

  addG(g = 0) {
    this.weight += g * 1000;
    return this;
  }

  addKg(kg = 0) {
    this.weight += kg * 1000 * 1000;
    return this;
  }
}
