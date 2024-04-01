//////
// Media Editor Widget
//
// Add publicIds
// Add cloudName
//////
const myEditor = cloudinary.mediaEditor();
myEditor.update({
  publicIds: ["publicId", "publicId"],
  cloudName: "cloudName",
});

document.getElementById("media_editor").addEventListener(
  "click",
  function () {
    myEditor.show();
  },
  false
);

myEditor.on("export", function (data) {
  console.log(data);
});
