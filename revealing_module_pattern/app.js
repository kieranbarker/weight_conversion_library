'use strict';

for (const conversion of Object.keys(convert)) {
  const placeholder = document.getElementById(conversion);
  if (!placeholder) continue;
  placeholder.textContent = convert[conversion]().toString();
}
