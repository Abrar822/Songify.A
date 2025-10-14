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
        window.location.href = `playlistSongs.html?playlist=${playlistMapper[playlist]}`;
      });
    });
  });
});
// To switch to different tabs
let mapper = {
  home: "index.html",
  search: "playlistSongs.html?playlist=all"
};
Object.keys(mapper).forEach((tab) => {
  document.querySelectorAll(`.${tab}`).forEach((t) => {
    t.addEventListener("click", () => {
      if(window.innerWidth > 680) {
        window.location.href = mapper[tab];
      }
    });
  });
});

// closing the sidebar
let crossBtn = document.querySelector(".crossBtn");
crossBtn.addEventListener("click", () => {
  document.querySelector(".left").classList.remove('active')
});

// opening the sidebar
let menuBtn = document.querySelector('.menuBtn');
menuBtn.addEventListener('click', () => {
  document.querySelector(".left").classList.add('active');
})

// clicking the search btn
let searchBtn = document.querySelector(".search");
searchBtn.addEventListener("click", () => {
  if(window.innerWidth <= 680) {
    document.querySelector(".left").classList.remove('active');
    setTimeout(() => {
      window.location.href = `playlistSongs.html?playlist=all`;
    }, 300);
  }
});

// dealing with the pages in the mobile view
let homeBtn = document.querySelector('.home');
homeBtn.addEventListener('click', () => {
  if(window.innerWidth <= 680) {
    document.querySelector(".left").classList.remove('active');
    setTimeout(() => {
      window.location.href = `index.html`;
    }, 300);
  }
})