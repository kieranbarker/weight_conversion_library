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
}
