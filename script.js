// your existing code

const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// Function to download images and display them on the webpage
function downloadAndDisplayImages(imageArray) {
  // Create an array of promises for image downloading
  const downloadPromises = imageArray.map((image) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = image.url;

      img.onload = () => {
        resolve(img);
      };

      img.onerror = () => {
        reject(`Failed to load image's URL: ${image.url}`);
      };
    });
  });

  // Use Promise.all to wait for all images to be downloaded
  Promise.all(downloadPromises)
    .then((images) => {
      // Display the images on the webpage
      images.forEach((img) => {
        output.appendChild(img);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

// Add a click event listener to the button
btn.addEventListener("click", () => {
  // Call the function to download and display images on button click
  downloadAndDisplayImages(images);
});
