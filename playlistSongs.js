let playbar = document.querySelector(".playbar");
let backBtn = playbar.querySelector(".backBtn");
let playBtn = playbar.querySelector(".playBtn");
let forwardBtn = playbar.querySelector(".forwardBtn");
let seekbar = playbar.querySelector(".seekbar");
let circle = seekbar.querySelector(".circle");
let playIcon = document.querySelector(".playIcon");

// reset the cards border color
function resetBorder() {
  if (document.querySelectorAll(".card")) {
    document
      .querySelectorAll(".card")
      .forEach((card) => (card.style.borderColor = "var(--pure-white)"));
  }
}

// function to get the formatted time
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  if (isNaN(min) || isNaN(sec)) return "00:00";
  return `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
}
// looping
let loopBtn = playbar.querySelector(".loop");
loopBtn.addEventListener("click", () => {
  loopBtn.classList.toggle("inloop");
});
// To generate the cards of songs
let myAudio;
function generateCards(song) {
  let card = document.createElement("div");
  card.classList.add("card", ...song.playlist);
  let fileName = song["file"]
    .split("/")
    .pop()
    .split("__")[0]
    .replace(/_/g, " ");
  card.innerHTML = `
    <input type="checkbox" class="addToLibrary" title="Add to Library" />
    <img src="https://raw.githubusercontent.com/Abrar822/Songify.A/main/imgs/${song["image"]}" alt="image">
    <span>${fileName}</span>`;
  // to prevent the song starting by clicking the checkbox
  card.querySelector(".addToLibrary").addEventListener("click", (e) => {
    e.stopPropagation();
  });
  card.addEventListener("click", () => {
    document.querySelector("#songifyLoader").style.display = "flex";
    setTimeout(() => {
      resetBorder();
      card.style.borderColor = "var(--logo-color)";
      // displaying the playbar and the playbtn in the playing state
      playbar.style.display = "flex";
      playBtn.innerHTML = '<i class="fa-solid fa-pause">';
      if (myAudio) myAudio.pause();
      // myAudio = new Audio(`Songs/${song["file"]}`);
      myAudio = new Audio(`${song["file"]}`);
      myAudio.play();
      // displaying the current song
      showCurrentSong(song);
      // automatically updating the time of the song
      myAudio.addEventListener("timeupdate", () => {
        playbar.querySelector(".songTime").innerHTML = `${formatTime(
          myAudio.currentTime
        )} / ${formatTime(myAudio.duration)}`;
        // to move the circle corresponding to the music
        circle.style.left = `${
          (myAudio.currentTime / myAudio.duration) * 100
        }%`;
      });
      // when the song ends
      myAudio.addEventListener("ended", () => {
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        // introducing the looping mechanism in library section
        if (loopBtn.classList.contains("inloop")) {
          myAudio.play();
          playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
          // for overall looping
          forwardBtn.click();
        }
      });
      document.querySelector("#songifyLoader").style.display = "none";
    }, 400);
  });
  // dealing with the conflict between the librarySongs and the songCards in the file library.html
  if (document.querySelector(".content .librarySongs")) {
    document.querySelector(".content .librarySongs").append(card);
  } else {
    document.querySelector(".songCards").append(card);
  }
}
if (!document.querySelector(".content .librarySongs")) {
  songs.forEach((song) => {
    generateCards(song);
  });
}

// For displaying the respective cards
let params = new URLSearchParams(window.location.search);
let playlist = params.get("playlist");
if (playlist === "all") {
  document.querySelectorAll(".content .card").forEach((card) => {
    card.style.display = "inline-block";
    document.querySelector(".content h2").style.display = "inline-block";
  });
} else {
  document.querySelectorAll(".content .card").forEach((card) => {
    if (card.classList.contains(playlist)) {
      card.style.display = "inline-block";
    }
  });
  // For heading of the playlists
  document.querySelectorAll(".content h2").forEach((heading) => {
    if (heading.classList.contains(playlist)) {
      heading.style.display = "inline-block";
    }
  });
}

// Event listener for the playbtn to stop the song
playBtn.addEventListener("click", () => {
  if (myAudio.paused) {
    myAudio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    myAudio.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

// displaying the current song in the playbar
function showCurrentSong(song) {
  playbar.querySelector(
    ".songName"
  ).innerHTML = `<span>${song["title"]}</span>`;
}

// For the seekbar and circle sliding
seekbar.addEventListener("click", (e) => {
  const rect = seekbar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const percent = clickX / width;
  console.log(rect, percent);
  myAudio.currentTime = percent * myAudio.duration;
  circle.style.left = `${percent * 100}%`;
});

// for forward button
forwardBtn.addEventListener("click", () => {
  let cards = document.querySelectorAll(".content .card");
  console.log(cards);
  let cardsArr = Array.from(cards).filter((card) => {
    return getComputedStyle(card).display !== "none";
  });
  console.log(cardsArr);
  let currIdx = cardsArr.findIndex((card) => {
    return getComputedStyle(card).borderColor === "rgb(29, 185, 84)";
  });
  console.log(currIdx);
  let nextIdx = (currIdx + 1) % cardsArr.length;
  cardsArr[nextIdx].click();
});

// For backward button
backBtn.addEventListener("click", () => {
  let cards = document.querySelectorAll(".content .card");
  let cardsArr = Array.from(cards).filter((card) => {
    return getComputedStyle(card).display !== "none";
  });
  console.log(cardsArr);
  let currIdx = cardsArr.findIndex((card) => {
    return getComputedStyle(card).borderColor === "rgb(29, 185, 84)";
  });
  console.log(currIdx);
  let prevIdx = (currIdx - 1 + cardsArr.length) % cardsArr.length;
  cardsArr[prevIdx].click();
});

// showing the songs in library
window.addEventListener("load", () => {
  let savedLibrary = JSON.parse(localStorage.getItem("library")) || [];
  if (savedLibrary.length > 0) genLibrary(savedLibrary);
});

// --- Drag and Drop for Circle on Seekbar ---
let isDragging = false;
circle.addEventListener("mousedown", startDrag);
circle.addEventListener("touchstart", startDrag);
function startDrag(e) {
  if (window.innerWidth <= 680) {
    isDragging = true;
    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchmove", onDrag);
    document.addEventListener("touchend", stopDrag);
  }
}
function onDrag(e) {
  if (window.innerWidth <= 680) {
    if (!isDragging || !myAudio) return;
    // For both touch and mouse
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const rect = seekbar.getBoundingClientRect();
    let percent = (clientX - rect.left) / rect.width;
    percent = Math.min(Math.max(percent, 0), 1); // clamp 0–1
    // Update circle visually
    circle.style.left = `${percent * 100}%`;
    // Update time display live
    const newTime = percent * myAudio.duration;
    playbar.querySelector(".songTime").innerHTML = `${formatTime(
      newTime
    )} / ${formatTime(myAudio.duration)}`;
  }
}
function stopDrag(e) {
  if (window.innerWidth <= 680) {
    if (!isDragging) return;
    isDragging = false;
    document.removeEventListener("mousemove", onDrag);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchmove", onDrag);
    document.removeEventListener("touchend", stopDrag);
    // Set audio current time after releasing
    const rect = seekbar.getBoundingClientRect();
    const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    let percent = (clientX - rect.left) / rect.width;
    percent = Math.min(Math.max(percent, 0), 1);
    myAudio.currentTime = percent * myAudio.duration;
  }
}
