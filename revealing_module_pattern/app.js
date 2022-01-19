'use strict';

for (const conversion of Object.keys(Convert)) {
  const placeholder = document.getElementById(conversion);
  if (!placeholder) continue;
  placeholder.textContent = Convert[conversion]().toString();
}
