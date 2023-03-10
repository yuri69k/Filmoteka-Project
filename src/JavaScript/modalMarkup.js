export function createMarkupModal({
  genres,
  vote_count,
  original_title,
  popularity,
  vote_average,
  title,
  overview,
  poster_path,
  id,
  release_date,
}) {
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : `https://placehold.co/500x750?text=No+Image`;
    console.log(poster_path);
  const genresList = genres.map(item => item.name).join(', ');
  return `<div class="modal_container" data-id="${id}">
          <div class="modal__img-thumb">
            <img class="modal__img" src="${poster}" alt="${title}" />
          </div>
          <div class="modal__about-movie">
            <h2 class="modal__title">${title}</h2>
            <ul class="modal__list"  id=${release_date}>
              <li class="modal__item">
                <p class="modal__item-vote">Vote / Votes</p>
                <p class="modal__item-votes">
                  <span class="modal__item-votes-span">${vote_average.toFixed(
                    1
                  )}</span>/ ${vote_count}
                </p>
              </li>
              <li class="modal__item">
                <p class="modal__item-popularity">Popularity</p>
                <p class="modal__item-popularity-value">${popularity.toFixed(
                  1
                )}</p>
              </li>
              <li class="modal__item">
                <p class="modal__item-original-title">Original Title</p>
                <p class="modal__item-original-title-value">
                  ${original_title}
                </p>
              </li>
              <li class="modal__item">
                <p class="modal__item-genre">Genre</p>
                <p class="modal__item-genre-value">${genresList}</p>
              </li>
            </ul>
            <h3 class="modal__about-title">About</h3>
            <p class="modal__about">
              ${overview}
            </p>
            <div class="modal__btn">
              <button class="modal__add-to-watched modal__btn-add">
                ADD TO WATCHED
              </button>
              <button class="modal__add-to-queueu modal__btn-add">
                ADD TO QUEUE
              </button>
            </div>
          </div>
        </div>`;
}
