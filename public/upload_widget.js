//////
// Upload Widget
//
// Create an upload preset (if you don't have one already)
// Settings > Upload > Add Upload Preset
//
// Add your cloudName
// Add an upload preset
//////
const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "cloudname",
    uploadPreset: "preset",
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    myWidget.open();
  },
  false
);
