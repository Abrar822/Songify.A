function getSongDisplayName(song) {
  return song.file.split("/").pop().split("__")[0].replace(/_/g, " ");
}
// adding the checked songs to the library
let library = JSON.parse(localStorage.getItem("library")) || [];
let mySet = new Set(JSON.parse(localStorage.getItem("mySet")) || []);
let addSongs = document.querySelector(".add");
addSongs.addEventListener("click", () => {
  let emptyLibrary = true;
  let repeated = false;
  document.querySelectorAll(".songCards .card").forEach((card, idx) => {
    if (card.querySelector(".addToLibrary").checked) {
      let songName = card.querySelector("span").textContent;
      if (!mySet.has(songName)) {
        emptyLibrary = false;
        mySet.add(songName);
        library.push(songName);
      } else {
        repeated = true;
      }
    }
  });
  document.querySelector("#songifyLoader").style.display = "flex";
  setTimeout(() => {
    if (repeated) showMsg("Existing song selected!");
    else if (emptyLibrary) showMsg("No songs selected! Please select a song");
    else {
      localStorage.setItem("library", JSON.stringify(library));
      localStorage.setItem("mySet", JSON.stringify([...mySet]));
      genLibrary(library);
      showMsg("Added successfully to the library!");
    }
    // uncheck all checkboxes
    document.querySelectorAll(".songCards .card").forEach((card) => {
      card.querySelector(".addToLibrary").checked = false;
    });
    // update unselected songs
    displayUnselectedSongs();
    document.querySelector("#songifyLoader").style.display = "none";
  }, 400);
});
function showMsg(text) {
  let msg = document.createElement("div");
  msg.classList.add("msg");
  msg.innerText = text;
  document.body.append(msg);
  setTimeout(() => msg.remove(), 2000);
}
// function to generate the library cards
function genLibraryCards(card, library, songTitle) {
  card.classList.add("songCard");
  card.innerHTML = `
    <span class="title">${songTitle}</span>
    <span class="trashSpan"><i class="fa-solid fa-trash"></i></span>
    `;
  document.querySelector(".leftCard2 .songs").append(card);
}
// function to generate the library such that on clicking the song it runs
function genLibrary(library) {
  document.querySelector(".leftCard2 .songs").innerHTML = "";
  for (let i = 0; i < library.length; i++) {
    songs.forEach((song) => {
      if (
        song["file"]
          .split("/")
          .pop()
          .split("__")[0]
          .replace(/_/g, " ")
          .includes(library[i]) &&
        mySet.has(
          song["file"].split("/").pop().split("__")[0].replace(/_/g, " ")
        )
      ) {
        let card = document.createElement("div");
        genLibraryCards(card, library, library[i]);
      }
    });
  }
  // called here to prevent the execution during the library[] is empty
  enableDeletion();
}
// function to enable deletion after songs are generated
function enableDeletion() {
  document.querySelectorAll(".songs .songCard").forEach((card) => {
    let icon = card.querySelector(".trashSpan i");
    icon.addEventListener("click", deleteHandler);
  });
}
function deleteHandler(e) {
  let card = e.target.closest(".songCard");
  let title = card.querySelector(".title").textContent;
  document.querySelector("#songifyLoader").style.display = "flex";
  setTimeout(() => {
    library = library.filter((item) => item !== title);
    mySet.delete(title);
    localStorage.setItem("library", JSON.stringify(library));
    localStorage.setItem("mySet", JSON.stringify([...mySet]));
    card.remove();
    document.querySelector("#songifyLoader").style.display = "none";
    displayUnselectedSongs();
    displayLibrarySongs();
  }, 400);
}
function resetSongBorder() {
  if (document.querySelectorAll(".songs .songCard")) {
    document
      .querySelectorAll(".songs .songCard")
      .forEach((card) => (card.style.borderColor = "var(--pure-white)"));
  }
}
// onload actions
window.addEventListener("load", () => {
  let savedLibrary = JSON.parse(localStorage.getItem("library")) || [];
  if (savedLibrary.length > 0) genLibrary(savedLibrary);
  // dealing with the sidebar in mobile view regarding the deletion process
  let para = new URLSearchParams(window.location.search);
  let sidebar = para.get("sidebar");
  if (window.innerWidth <= 680 && sidebar === "1") {
    document.querySelector(".left").classList.add("active");
  }
  // calling the display unselected songs
  displayUnselectedSongs();
});
// displaying only the songs that are not saved in the library
function displayUnselectedSongs() {
  let parameters = new URLSearchParams(window.location.search);
  let showbox = parameters.get("showbox");
  if (showbox === "1") {
    document.querySelectorAll(".content .card").forEach((card) => {
      card.style.display = "block";
      let checkbox = card.querySelector(".addToLibrary");
      if (checkbox) checkbox.style.display = "inline-block";
      let cardName = card.querySelector("span").textContent;
      if (mySet.has(cardName)) {
        card.style.display = "none";
      }
    });
  }
}
