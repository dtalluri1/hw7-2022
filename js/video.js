var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video = this.document.querySelector('video');
	video.autoplay = false;
	video.loop = false;
	video.load();
});
document.querySelector("#play").addEventListener("click", function () {
	console.log("play video");
	video.play();
	document.getElementById("volume").innerHTML = (video.volume * 100).toString() + '%';
});
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate = video.playbackRate * 0.9;
	console.log(video.playbackRate);
});
document.querySelector("#pause").addEventListener("click", function () {
	console.log("pause video");
	video.pause();
});
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate = video.playbackRate / 0.9;
	console.log(video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip Video");
	if (video.currentTime + 10 >= video.duration) { video.currentTime = 0; }
	else { video.currentTime = video.currentTime + 10; }
	console.log(video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted == false) { video.muted = true; }
	else { video.muted = false; }
});
document.querySelector("#slider").addEventListener("click", function () {
	video.volume = slider.value / 100;
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});
document.querySelector('#orig').addEventListener("click", function () {
	video.classList.remove('oldSchool');
});
document.querySelector('#vintage').addEventListener("click", function () {
	video.classList.add('oldSchool');
});
