function createPhotoElement(url, desc) {
  const photoElement = document.createElement("div");
  photoElement.className = "photo";

  const anchorElement = document.createElement("a");
  anchorElement.className = "photo-lightbox";
  anchorElement.href = url;
  anchorElement.setAttribute("data-lightbox", "models");

  const imageElement = document.createElement("img");
  imageElement.src = url;

  const paragraphElement = document.createElement("p");
  const paragraphText = document.createTextNode(desc);
  paragraphElement.appendChild(paragraphText);
  paragraphElement.className = "img-overlay";

  anchorElement.appendChild(paragraphElement);
  anchorElement.appendChild(imageElement);
  photoElement.appendChild(anchorElement);

  return photoElement;
}

fetch("descriptions-beauty.json")
  .then((response) => response.json())
  .catch((_) => console.log("Something went wrong with json file"))
  .then((data) => {
    data.forEach((p) => {
      let url = p.photo;
      let desc = p.description;
      const photoElement = createPhotoElement(url, desc);

      document.body.querySelector(".gallery").appendChild(photoElement);
    });
  })
  .catch((_) =>
    console.log("Something went wrong with images or json's content")
  );



  // for (let i = 1; i <= 8; i++) {
//   let url = "";
//   if (i < 10) {
//     url = `images/beauty/b00${i}.jpg`;
//   } else {
//     url = `images/beauty/b0${i}.jpg`;
//   }

//   const photoElement = createPhotoElement(url);
//   document.body.querySelector(".gallery").appendChild(photoElement);
// }