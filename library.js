window.addEventListener("load", () => {
  document.querySelectorAll(".librarySongs .card").forEach((card) => {
    card.style.display = "none";
  });
  let selectedSongs = document.querySelectorAll(".songs .songCard .title");
  console.log(selectedSongs);
  if (selectedSongs.length == 0) {
    showMsg("No songs yet — start building your library now!");
  } else {
    selectedSongs.forEach((selectedSong) => {
      songs.forEach((song) => {
        if (getSongDisplayName(song).includes(selectedSong.textContent)) {
          generateCards(song);
        }
      });
    });
  }
});
function displayLibrarySongs() {
  let selectedSongs = document.querySelectorAll(".songs .songCard .title");
  document.querySelectorAll(".librarySongs .card").forEach((card) => {
    card.style.display = "none";
  });
  console.log(selectedSongs);
  if (selectedSongs.length == 0) {
    showMsg("The library is empty!");
  } else {
    selectedSongs.forEach((selectedSong) => {
      songs.forEach((song) => {
        if (getSongDisplayName(song).includes(selectedSong.textContent)) {
          generateCards(song);
        }
      });
    });
  }
}