const songs = [
  { title: "A Stroll", artist: "Density & Time", file: "A Stroll - The Grey Room _ Density & Time.mp3", playlist: ["chillVibes", "mixedMood"], image: "s1.jpg" },
  { title: "At All Costs", artist: "Golden Palms", file: "At All Costs - The Grey Room _ Golden Palms.mp3", playlist: ["goldenBeats"], image: "s2.jpg" },
  { title: "Boogie Down", artist: "Golden Palms", file: "Boogie Down - The Grey Room _ Golden Palms.mp3", playlist: ["goldenBeats", "mixedMood"], image: "s3.jpg" },
  { title: "By Myself", artist: "Clark Sims", file: "By Myself - The Grey Room _ Clark Sims.mp3", playlist: ["clarkClassics"], image: "s4.jpg" },
  { title: "Claim To Fame", artist: "Clark Sims", file: "Claim To Fame - The Grey Room _ Clark Sims.mp3", playlist: ["clarkClassics"], image: "s5.jpg" },
  { title: "Down The Rabbit Hole", artist: "Density & Time", file: "Down The Rabbit Hole - The Grey Room _ Density & Time.mp3", playlist: ["chillVibes"], image: "s6.jpg" },
  { title: "Flutter", artist: "Clark Sims", file: "Flutter - The Grey Room _ Clark Sims.mp3", playlist: ["clarkClassics"], image: "s7.jpg" },
  { title: "Futile", artist: "Golden Palms", file: "Futile - The Grey Room _ Golden Palms.mp3", playlist: ["goldenBeats"], image: "s8.jpg" },
  { title: "In The Morning", artist: "Clark Sims", file: "In The Morning - The Grey Room _ Clark Sims.mp3", playlist: ["clarkClassics", "mixedMood"], image: "s9.jpg" },
  { title: "On The Flip", artist: "Density & Time", file: "On The Flip - The Grey Room _ Density & Time.mp3", playlist: ["chillVibes"], image: "s10.jpg" },
  { title: "Pawn", artist: "Golden Palms", file: "Pawn - The Grey Room _ Golden Palms.mp3", playlist: ["goldenBeats", "mixedMood"], image: "s11.jpg" },
  { title: "Purple Desire", artist: "Clark Sims", file: "Purple Desire - The Grey Room _ Clark Sims.mp3", playlist: ["nightDrive"], image: "s12.jpg" },
  { title: "Resolution Or Reflection", artist: "Clark Sims", file: "Resolution Or Reflection - The Grey Room _ Clark Sims.mp3", playlist: ["nightDrive"], image: "s13.jpg" },
  { title: "Ruff Money", artist: "Clark Sims", file: "Ruff Money - The Grey Room _ Clark Sims.mp3", playlist: ["nightDrive"], image: "s14.jpg" }
];


const playlists = [
  {
    name: "Chill Vibes",
    songs: [songs[0], songs[5], songs[9]]
  },
  {
    name: "Golden Beats",
    songs: [songs[1], songs[2], songs[7], songs[10]]
  },
  {
    name: "Clark Classics",
    songs: [songs[3], songs[4], songs[6], songs[8]]
  },
  {
    name: "Night Drive",
    songs: [songs[11], songs[12], songs[13]]
  },
  {
    name: "Mixed Mood",
    songs: [songs[0], songs[2], songs[8], songs[10]]
  }
];
