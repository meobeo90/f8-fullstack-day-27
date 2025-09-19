const homeLink = document.querySelector(".home-link");
const aboutLink = document.querySelector(".about-link");
const serviceLink = document.querySelector(".service-link");
const contactLink = document.querySelector(".contact-link");
const historyLength = document.querySelector("#history-length");

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });
  const targetPage = document.querySelector(pageId);
  if (targetPage) {
    targetPage.classList.add("active");
  } else {
    console.error(`Không tìm thấy trang với id: ${pageId}`);
  }
}
// Hàm cập nhật đường dẫn
function handleNav(hash, pageId) {
  showPage(pageId);
  history.pushState(null, null, hash);
}
// Xử lý khi người dùng ấn back/forward
window.addEventListener("popstate", () => {
  const currentHash = window.location.hash;
  if (currentHash === "#about") {
    showPage("#service-container");
  } else if (currentHash === "#service") {
    showPage("#service-container");
  } else if (currentHash === "#contact") {
    showPage("#contact-container");
  } else {
    showPage("#home-container");
  }
  updateHistoryLength();
});
document.addEventListener("DOMContentLoaded", () => {
  const currentHash = window.location.hash || "#home";
  //   xác định trang hiện tại bằng URL
  if (currentHash === "#about") {
    showPage("#service-container");
  } else if (currentHash === "#service") {
    showPage("#service-container");
  } else if (currentHash === "#contact") {
    showPage("#contact-container");
  } else {
    showPage("#home-container");
  }
  //   Thêm lịch sử khi tải trang lần đầu
  history.replaceState(null, null, currentHash);
  updateHistoryLength();
});
// Hàm cập nhật history length
function updateHistoryLength() {
  historyLength.textContent = window.history.length;
}

document.addEventListener("DOMContentLoaded", updateHistoryLength);
window.addEventListener("popstate", updateHistoryLength);
// Gắn sự kiện cho liên kết
homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  handleNav("#home", "#home-container");
  updateHistoryLength();
});
aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  handleNav("#about", "#about-container");
  updateHistoryLength();
});

serviceLink.addEventListener("click", (e) => {
  e.preventDefault();
  handleNav("#service", "#service-container");
  updateHistoryLength();
});

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  handleNav("#contact", "#contact-container");
  updateHistoryLength();
});
