const copyArea = document.querySelector("#copy-area");
const pasteArea = document.querySelector("#paste-area");
const copyBtn = document.querySelector(".copy-btn");
const pasteBtn = document.querySelector(".paste-btn");

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userInput = copyArea.value;
  window.navigator.clipboard
    .writeText(userInput)
    .then(() => {
      alert("Đã sao chép nội dung thành công!");
    })
    .catch((error) => {
      alert("Lỗi khi sao chép:" + error.message);
    });
});

pasteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.navigator.clipboard
    .readText()
    .then((text) => {
      pasteArea.value = text;
      alert("Đã dán nội dung thành công!");
    })
    .catch((error) => {
      alert("Lỗi khi dán:" + error.message);
    });
});
