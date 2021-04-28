function createPhotoElement(url) {
  const photoElement = document.createElement("div");
  photoElement.className = "photo";

  const anchorElement = document.createElement("a");
  anchorElement.className = "photo-lightbox";
  anchorElement.href = url;
  anchorElement.setAttribute("data-lightbox", "models");

  const imageElement = document.createElement("img");
  imageElement.src = url;

  const paragraphElement = document.createElement("p");
  const paragraphText = document.createTextNode(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et risus purus. Ut sed sem leo. Maecenas molestie condimentum lectus, vel tempus tellus dapibus at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed lacinia ipsum at nulla luctus, nec ultrices elit convallis. Nulla ut arcu consequat odio consectetur gravida eget ut diam. Maecenas elementum mauris non ullamcorper pulvinar. Nunc nec enim ultrices, fringilla tortor a, dictum lectus."
  );
  paragraphElement.appendChild(paragraphText);
  paragraphElement.className = "img-overlay";

  anchorElement.appendChild(paragraphElement);
  anchorElement.appendChild(imageElement);
  photoElement.appendChild(anchorElement);

  return photoElement;
}

for (let i = 1; i <= 25; i++) {
  let url = "";
  if (i < 10) {
    url = `images/editorial/00${i}.jpg`;
  } else {
    url = `images/editorial/0${i}.jpg`;
  }

  const photoElement = createPhotoElement(url);
  document.body.querySelector(".gallery").appendChild(photoElement);
}
