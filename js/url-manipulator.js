const protocolSelect = document.querySelector("#protocol-select");
const hostNameInput = document.querySelector("#host-name");
const portInput = document.querySelector("#port-input");
const pathNameInput = document.querySelector("#path-name");
const queryInput = document.querySelector("#query-input");
const hashInput = document.querySelector("#hash-input");

const navigateBtn = document.querySelector("#navigate-btn");
const replaceBtn = document.querySelector("#replace-btn");
const reloadBtn = document.querySelector("#reload-btn");

function getURLForm() {
  const protocol = protocolSelect.value;
  const hostname = hostNameInput.value;
  const port = portInput.value;
  const pathName = pathNameInput.value;
  const query = queryInput.value;
  const hash = hashInput.value;
  if (!protocol || !hostname) {
    alert("URL không hợp lệ. Vui lòng nhập cả Protocol và Hostname");
    return;
  }

  let url = `${protocol}//${hostname}`;

  if (port) {
    url += `:${port}`;
  }
  if (pathName) {
    url += pathName.startsWith("/") ? pathName : `/${pathName}`;
  }
  if (query) {
    url += query.startsWith("?") ? query : `?${query}`;
  }
  if (hash) {
    url += hash.startsWith("#") ? hash : `#${hash}`;
  }
  return url;
}

navigateBtn.addEventListener("click", () => {
  const url = getURLForm();
  if (url) {
    window.location.assign(url);
  }
});
replaceBtn.addEventListener("click", () => {
  const url = getURLForm();
  if (url) {
    window.location.replace(url);
  }
});

reloadBtn.addEventListener("click", () => {
  window.location.reload();
});
