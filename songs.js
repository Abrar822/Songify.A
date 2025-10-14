const songs = [
  { title: "A Stroll", artist: "Density & Time", file: "https://res.cloudinary.com/docy6d2mr/video/upload/v1760457188/A_Stroll_-_The_Grey_Room___Density_Time_kqrciv.mp3", playlist: ["chillVibes", "mixedMood"], image: "s1.jpg" },
  { title: "At All Costs", artist: "Golden Palms", file: "https://res.cloudinary.com/docy6d2mr/video/upload/v1760457197/At_All_Costs_-_The_Grey_Room___Golden_Palms_pchszs.mp3", playlist: ["goldenBeats"], image: "s2.jpg" },
  { title: "Boogie Down", artist: "Golden Palms", file: "https://res.cloudinary.com/docy6d2mr/video/upload/v1760457188/Boogie_Down_-_The_Grey_Room___Golden_Palms_ydhe71.mp3", playlist: ["goldenBeats", "mixedMood"], image: "s3.jpg" },
  { title: "By Myself", artist: "Clark Sims", file: "https://res.cloudinary.com/docy6d2mr/video/upload/v1760457188/By_Myself_-_The_Grey_Room___Clark_Sims_wqikjz.mp3", playlist: ["clarkClassics"], image: "s4.jpg" },
  { title: "Claim To Fame", artist: "Clark Sims", file: "https://res.cloudinary.com/docy6d2mr/video/upload/v1760457195/Claim_To_Fame_-_The_Grey_Room___Clark_Sims_vbpc3d.mp3", playlist: ["clarkClassics"], image: "s5.jpg" },
  { title: "Down The Rabbit Hole", artist: "Density & Time", file: "https://res.cloudinary.com/docy6d2mr/video/upload/v1760457195/Down_The_Rabbit_Hole_-_The_Grey_Room___Density_Time_gwbsgd.mp3", playlist: ["chillVibes"], image: "s6.jpg" },
  { title: "Flutter", artist: "Clark Sims", file: "https://res.cloudinary.com/docy6d2mr/video/upload/v1760457192/Flutter_-_The_Grey_Room___Clark_Sims_y9wp05.mp3", playlist: ["clarkClassics"], image: "s7.jpg" },
  { title: "Futile", artist: "Golden Palms", file: "https://res.cloudinary.com/docy6d2mr/video/upload/v1760457194/Futile_-_The_Grey_Room___Golden_Palms_jqs00r.mp3", playlist: ["goldenBeats"], image: "s8.jpg" },
  { title: "In The Morning", artist: "Clark Sims", file: "https://res.cloudinary.com/docy6d2mr/video/upload/v1760457188/In_The_Morning_-_The_Grey_Room___Clark_Sims_w5lxx6.mp3", playlist: ["clarkClassics", "mixedMood"], image: "s9.jpg" },
  { title: "On The Flip", artist: "Density & Time", file: "https://res.cloudinary.com/docy6d2mr/video/upload/v1760457189/On_The_Flip_-_The_Grey_Room___Density_Time_v076gm.mp3", playlist: ["chillVibes"], image: "s10.jpg" },
  { title: "Pawn", artist: "Golden Palms", file: "https://res.cloudinary.com/docy6d2mr/video/upload/v1760457191/Pawn_-_The_Grey_Room___Golden_Palms_xtmnwf.mp3", playlist: ["goldenBeats", "mixedMood"], image: "s11.jpg" },
  { title: "Purple Desire", artist: "Clark Sims", file: "https://res.cloudinary.com/docy6d2mr/video/upload/v1760457195/Purple_Desire_-_The_Grey_Room___Clark_Sims_dlm5qs.mp3", playlist: ["nightDrive"], image: "s12.jpg" },
  { title: "Resolution Or Reflection", artist: "Clark Sims", file: "https://res.cloudinary.com/docy6d2mr/video/upload/v176045719/Resolution_Or_Reflection_-_The_Grey_Room___Clark_Sims_ifbqzj.mp3", playlist: ["nightDrive"], image: "s13.jpg" },
  { title: "Ruff Money", artist: "Clark Sims", file: "https://res.cloudinary.com/docy6d2mr/video/upload/v1760457201/Ruff_Money_-_The_Grey_Room___Clark_Sims_hjybwt.mp3", playlist: ["nightDrive"], image: "s14.jpg" }
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
