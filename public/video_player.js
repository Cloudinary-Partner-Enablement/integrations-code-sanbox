//////
// Video Player
//
// Add cloudName
// Add a publicId for a video
//////
document.getElementById("video_player").addEventListener(
  "click",
  function () {
    if (document.getElementById("vp").style.display === "none") {
      document.getElementById("vp").style.display = "block";

      // Video Player Code
      const demoplayer = cloudinary.videoPlayer("doc-player", {
        cloudName: "cloudName",
      });
      demoplayer.source("publicId");
    } else {
      document.getElementById("vp").style.display = "none";
    }
  },
  false
);
