var video;

function getVid(){
	video = document.querySelector("#myVideo");
	var play = document.querySelectorAll("button");
	//console.log(play[0]);
	play[0].innerHTML = '<img src="images/playbutton.png" alt="">Play Video';
	play[1].innerHTML = '<img src="images/pausebutton.png" alt="">Pause Video';
	// button images source - designed by Bonnie Jiang
}

function playVid() {
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume *100 +"%";
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
		video.playbackRate *= 0.8;
  	console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
  video.playbackRate *= 1.25
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	if (video.currentTime +60 > video.duration){
		video.currentTime = 0;
		video.pause();
		video.playbackRate = 1;
	}
	else {
		video.currentTime += 60;
	}
	console.log("Current location is "+ video.currentTime);
}


function mute() {
		var mute = document.querySelector("#mute")
  	if (video.muted){
		  mute.innerHTML="Mute";
			video.muted = false;
  		console.log("Changing to Unmuted");
  	}
  	else{
			mute.innerHTML="Unmute";
			video.muted = true;
      console.log("Changing to Muted");
  	}
}

function changeVolume() {
	let vol = document.querySelector("#volume");
	var volume = document.querySelector("#volumeSlider").value/100;
	video.volume = volume;
	vol.innerHTML=video.volume *100 +"%";
	console.log("Volume is " + volume*100 +"%");
}


function gray() {

	console.log("In grayscale")
	video.classList.add("grayscale");
}

function color() {
	console.log("In color")
	video.classList.remove("grayscale");
}
