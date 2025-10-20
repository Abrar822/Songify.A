// To switch to the specific playlist
let playlistMapper = {
  chillVibes: "chillVibes",
  goldenBeats: "goldenBeats",
  clarkClassics: "clarkClassics",
  nightDrive: "nightDrive",
  mixedMood: "mixedMood",
};
Object.keys(playlistMapper).forEach((playlist) => {
  document.querySelectorAll(`.${playlist}`).forEach((card) => {
    card.querySelectorAll(".playIcon").forEach((icon) => {
      icon.addEventListener("click", () => {
        document.querySelector('#songifyLoader').style.display = 'flex';
        setTimeout(() => {
          window.location.href = `playlistSongs.html?playlist=${playlistMapper[playlist]}`;
          document.querySelector('#songifyLoader').style.display = 'none';
        }, 200);
      });
    });
  });
});
// To switch to different tabs
let mapper = {
  home: "index.html",
  addBtn: `songSelection.html?playlist=all&showbox=1`,
  goToLibrary: `library.html?showLibrarySongs=1`,
};
Object.keys(mapper).forEach((tab) => {
  document.querySelectorAll(`.${tab}`).forEach((t) => {
    t.addEventListener("click", () => {
      if (window.innerWidth > 680) {
        document.querySelector('#songifyLoader').style.display = 'flex';
        setTimeout(() => {
          window.location.href = mapper[tab];
          document.querySelector('#songifyLoader').style.display = 'none';
        }, 200);
      }
    });
  });
});

// closing the sidebar
let crossBtn = document.querySelector(".crossBtn");
crossBtn.addEventListener("click", () => {
  document.querySelector(".left").classList.remove("active");
});

// opening the sidebar
let menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener("click", () => {
  document.querySelector(".left").classList.add("active");
});

// clicking the library btn
let libraryBtn = document.querySelector(".goToLibrary");
libraryBtn.addEventListener("click", () => {
  if (window.innerWidth <= 680) {
    document.querySelector(".left").classList.remove("active");
    document.querySelector('#songifyLoader').style.display = 'flex';
    setTimeout(() => {
      window.location.href = `library.html?showLibrarySongs=1`;
      document.querySelector('#songifyLoader').style.display = 'none';
    }, 200);
  }
});

// dealing with the pages in the mobile view
let homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", () => {
  if (window.innerWidth <= 680) {
    document.querySelector(".left").classList.remove("active");
    document.querySelector('#songifyLoader').style.display = 'flex';
    setTimeout(() => {
      window.location.href = `index.html`;
      document.querySelector('#songifyLoader').style.display = 'none';
    }, 200);
  }
});

// dealing with the addBtn in mobile view
let addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", () => {
  if (window.innerWidth <= 680) {
    document.querySelector(".left").classList.remove("active");
    document.querySelector('#songifyLoader').style.display = 'flex';
    setTimeout(() => {
      window.location.href = "songSelection.html?playlist=all&showbox=1";
      document.querySelector('#songifyLoader').style.display = 'none';
    }, 200);
  }
});

// dealing with the go to library btn in leftcard2
let goToLibrary = document.querySelector(".leftCard2 .goToLibrary");
goToLibrary.addEventListener("click", () => {
  if (window.innerWidth <= 680) {
    document.querySelector(".left").classList.remove("active");
    document.querySelector('#songifyLoader').style.display = 'flex';
    setTimeout(() => {
      window.location.href = "library.html?showLibrarySongs=1";
      document.querySelector('#songifyLoader').style.display = 'flex';
    }, 200);
  }
});