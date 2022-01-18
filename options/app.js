'use strict';

const bumblebeeWeight = document.querySelector('#bumblebeeWeight');
const hummingbirdWeight = document.querySelector('#hummingbirdWeight');
const dragonWeight = document.querySelector('#dragonWeight');

const bumblebee = new Convert(150);
bumblebeeWeight.textContent = bumblebee.inMg().toString();

const hummingbird = new Convert(4, { units: 'g' });
hummingbirdWeight.textContent = hummingbird.inG().toString();

try {
  const dragon = new Convert(5, { units: 'dragonKg' });
  dragonWeight.textContent = dragon.inKg().toString();
} catch {
  dragonWeight.textContent = "There's no such thing as a dragon kilogram!";
}
