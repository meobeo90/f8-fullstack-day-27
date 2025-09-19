const video = document.querySelector(".capture-video");
const photo = document.querySelector(".photo");
const canvas = document.createElement("canvas");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const takePhotoBtn = document.querySelector(".take-photo-btn");
const downloadBtn = document.querySelector(".download-btn");

let stream;
console.log(canvas);

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //   Yêu cầu quyền truy cập camera
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((mediaStream) => {
      stream = mediaStream;
      video.srcObject = stream;
      video.play();
    })
    .catch((error) => {
      alert(
        "Không thể truy cập camera. Vui lòng cấp quyền hoặc kiểm tra lại thiết bị."
      );
    });
});
stopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    video.srcObject = null;
    stream = null;
  }
});
takePhotoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!stream) return alert("Vui lòng bật camera để thực hiện chức năng này!");
  //   Thiết lập kích thước của canvas bằng kích thước video hiện tại
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0);
  photo.src = canvas.toDataURL("image/png");
});

downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //   Nếu chưa có ảnh được chụp thoát hàm
  if (!photo.src) return;
  //   Tạo mới thẻ <a> để kích hoạt quá trình tải xuống
  const link = document.createElement("a");
  link.href = photo.src;
  link.download = "photo.png";
  link.click();
});
