// const thumbnailSample = document.querySelector('#picture')
//   .content.querySelector('.picture');

// const container = document.querySelector('.pictures');

// const createThumbnailImg = ({ url, description, comments, likes }) => {
//   const thumbnail = thumbnailSample.cloneNode(true);

//   thumbnail.querySelector('.picture__img').src = url;
//   thumbnail.querySelector('.picture__img').alt = description;
//   thumbnail.querySelector('.picture__likes').textContent = likes;

//   const commentsCount = comments && comments.length !== undefined ? comments.length : 0;
//   thumbnail.querySelector('.picture__comments').textContent = commentsCount;

//   return thumbnail;
// };

// const formThumbnails = (pictures) => {
//   const fragment = document.createDocumentFragment();
//   pictures.forEach((picture) => {
//     const thumbnail = createThumbnailImg(picture);
//     fragment.append(thumbnail);
//   });

//   container.appendChild(fragment);
// };

// export { formThumbnails };

