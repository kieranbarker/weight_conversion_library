'use strict';

const conversions = [
  'gToKg',
  'gToMg',
  'kgToG',
  'kgToMg',
  'mgToG',
  'mgToKg'
];

for (const conversion of conversions) {
  const placeholder = document.getElementById(conversion);
  placeholder.textContent = convert[conversion]().toString();
}
