import UrlParser from '../../routes/url-parser';
import ResrtaurentSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant container"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await ResrtaurentSource.detailRestaurant(url.id);
    const detailSection = document.querySelector('#restaurant');
    detailSection.innerHTML = createRestaurantDetailTemplate(restaurantDetail);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurantDetail.id,
        name: restaurantDetail.name,
        pictureId: restaurantDetail.pictureId,
        rating: restaurantDetail.rating,
        city: restaurantDetail.city,
        address: restaurantDetail.address,
        description: restaurantDetail.description,
        menus: restaurantDetail.menus,
        customerReview: restaurantDetail.customerReview,
      },
    });
  },
};

export default Detail;
