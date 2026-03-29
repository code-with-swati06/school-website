function closeVideoPopup() {
  const video = document.querySelector("#videoPopup video");
  video.pause();
  video.currentTime = 0;
  document.getElementById("videoPopup").style.display = "none";
}