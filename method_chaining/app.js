'use strict';

const hummingbird = new Convert(4000);

const beforeEating = document.querySelector('#beforeEating');
beforeEating.textContent = hummingbird.inG().toString();

const afterEating = document.querySelector('#afterEating');
afterEating.textContent = hummingbird
  .addMg(300)
  .addG(0.7)
  .addKg(0.001)
  .inG()
  .toString();
