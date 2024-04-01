//////
// Media Library Widget
//
// Add cloud_name
// Add api_key
//////
document.getElementById("media_library").addEventListener(
  "click",
  function () {
    if (document.getElementById("mlw").style.display === "none") {
      document.getElementById("mlw").style.display = "block";
      document.getElementById("widget_container").style.height = "1000px";

      // Media Library Code
      window.ml = cloudinary.openMediaLibrary(
        {
          cloud_name: "cloudName",
          api_key: "apiKey",
          inline_container: "#widget_container",
        },
        {
          insertHandler: function (data) {
            data.assets.forEach((asset) => {
              console.log("Inserted asset:", JSON.stringify(asset, null, 2));
            });
          },
        }
      );
    } else {
      document.getElementById("mlw").style.display = "none";
    }
  },
  false
);
