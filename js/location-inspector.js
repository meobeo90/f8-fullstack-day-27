const locationProperties = [
  "href",
  "protocol",
  "hostname",
  "port",
  "pathname",
  "search",
  "hash",
  "origin",
];

const tbody = document.querySelector(".location-table tbody");
locationProperties.forEach((property) => {
  const tr = document.createElement("tr");
  const tdProperty = document.createElement("td");
  const tdValue = document.createElement("td");
  tdProperty.textContent = "location." + property;
  tdValue.textContent = location[property];
  tr.appendChild(tdProperty);
  tr.appendChild(tdValue);
  tbody.appendChild(tr);
});
