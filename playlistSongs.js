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

// To generate the cards of songs
let myAudio;
function generateCards(song) {
  let card = document.createElement("div");
  card.classList.add("card", ...song.playlist);
  card.innerHTML = `
    <img src="https://raw.githubusercontent.com/Abrar822/Songify.A/main/imgs/${song["image"]}" alt="image">
    <span>${song["file"]}</span>`;
  card.addEventListener("click", () => {
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
      circle.style.left = `${(myAudio.currentTime / myAudio.duration) * 100}%`;
    });
    // when the song ends
    myAudio.addEventListener("ended", () => {
      playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    });
  });

  document.querySelector(".songCards").append(card);
}
songs.forEach((song) => {
  generateCards(song);
});

// For displaying the respective cards
let params = new URLSearchParams(window.location.search);
let playlist = params.get("playlist");
if (playlist === "all") {
  document.querySelectorAll(".songCards .card").forEach((card) => {
    card.style.display = "inline-block";
  });
} else {
  document.querySelectorAll(".songCards .card").forEach((card) => {
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
  myAudio.currentTime = percent * myAudio.duration;
  circle.style.left = `${percent * 100}%`;
});

// for forward button
forwardBtn.addEventListener('click', () => {
  let cards = document.querySelectorAll('.songCards .card');
  let cardsArr = Array.from(cards).filter((card) => {
    return getComputedStyle(card).display !== 'none';
  })
  let currIdx = cardsArr.findIndex((card) => {
    return getComputedStyle(card).borderColor === 'rgb(29, 185, 84)';
  })
  let nextIdx = (currIdx + 1) % cardsArr.length;
  cardsArr[nextIdx].click();
})

// For backward button
backBtn.addEventListener('click', () => {
  let cards = document.querySelectorAll('.songCards .card');
  let cardsArr = Array.from(cards).filter((card) => {
    return getComputedStyle(card).display !== 'none';
  })
  let currIdx = cardsArr.findIndex((card) => {
    return getComputedStyle(card).borderColor === 'rgb(29, 185, 84)';
  })
  let prevIdx = (currIdx - 1 + cardsArr.length) % cardsArr.length;
  cardsArr[prevIdx].click();
})
