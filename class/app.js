'use strict';

const hummingbird = new Convert(4000);
const conversions = Object.getOwnPropertyNames(Convert.prototype);

for (const conversion of conversions) {
  const placeholder = document.getElementById(conversion);
  if (!placeholder) continue;
  placeholder.textContent = hummingbird[conversion]().toString();
}
