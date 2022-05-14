import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<article class="post-item">
<h2 class="post-title">${restaurant.name}</h2>
<div class="post-detail">
  <div class="post-content">
    <div class="post-thumbnail">
      <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" 
        alt="Thumbnail ${restaurant.name}">
    </div>
    <div class="post-header">
      <p> <img src="./logo/loc-logo.png" alt="" width="11">
        ${restaurant.address}, ${restaurant.city}
      </p>
      <p><img src="./logo/star-logo.png" alt="" width="11"> ${restaurant.rating}</p>
    </div>
    <p class="post-description">${restaurant.description}</p>
  </div>
  <div class="post-option">
    <div class="menus">
      <div class="detail-food">
        <h3>Food Menus</h3>
        <ul>
            ${restaurant.menus.foods.map((food) => `
              <li>${food.name}</li>
            `).join('')}
          </ul>
      </div>
      <div class="detail-drink">
        <h3>Drink Menus</h3>
        <ul>
          ${restaurant.menus.drinks.map((drink) => `
            <li>${drink.name}</li>
          `).join('')}
        </ul>
      </div>
    </div>
    <div class="reviews">
      <h3>Customer Reviews</h3>
      <div class="detail-review">
        ${restaurant.customerReviews.map((review) => `
          <div class="detail-review-item">
            <div class="review-header">
                <i class="fa fa-user-circle"></i> 
                <div>
                  <span class="review-name">${review.name}</span> .
                  <span class="review-date">${review.date}</span>
                </div>
            </div>
            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
</div>
</article>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="list_item">
        <img class="list_item_thumb" src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}" alt="gambar restorant" title="${restaurant.name}">
        <div class="city"> <img  class="lazyload" src="./logo/loc-logo.png" alt="" width="11"> ${restaurant.city}</div>
        <div class="list_item_content" id="list_item_content">
            <h1 class="list_item_title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h1>
            <p class="list_item_rating">
                Rating : ${restaurant.rating} <img src="./logo/star-logo.png" alt="" width="10">
            </p>
            <div class="list_item_desc ">${restaurant.description.slice(0, 90)}...</div>
        </div>
    </div>
   
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
