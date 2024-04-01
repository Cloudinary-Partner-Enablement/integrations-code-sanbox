//////
// Product Gallery
//
// Make sure client side asset lists are enabled
// Settings > Security > Restricted media types and
// make sure that the Resource List checkbox is clear.
// Click SAVE at the bottom of the page to save any changes.
//
// Add cloudName
// Add publicID for images you want to add
//////
document.getElementById("product_gallery").addEventListener(
  "click",
  function () {
    if (document.getElementById("pg").style.display === "none") {
      document.getElementById("pg").style.display = "block";

      // Product Gallery Code
      const myGallery = cloudinary.galleryWidget({
        container: "#my-gallery",
        cloudName: "cloudName",
        mediaAssets: [
          { publicId: "publicId" },
          { publicId: "publicId" },
          { publicId: "publicId" },
        ],
      });

      myGallery.render();
    } else {
      document.getElementById("pg").style.display = "none";
    }
  },
  false
);
