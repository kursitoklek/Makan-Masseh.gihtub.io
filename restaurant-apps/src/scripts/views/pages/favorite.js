import FavoriteRestoIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section>
    <div class="title-restourant">
        <h2>Restorant Favorit Anda</h2>
        <div id="loading"></div>
        <div class="list-resto" id="list-resto">

        </div>
    </div>
    </section>
      `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const restaurantsSection = document.querySelector('#list-resto');

    loading.innerHTML = '<div class="lds-roller"><div>';

    try {
      const restaurantMain = await FavoriteRestoIdb.getAllRestaurants();

      if (restaurantMain.length === 0) {
        restaurantsSection.innerHTML = `
      You don't have any Favorite Restaurant
      `;
      }

      restaurantMain.forEach((resto) => {
        restaurantsSection.innerHTML
                    += createRestaurantItemTemplate(resto);
      });
      loading.style.display = 'none';
    } catch (err) {
      loading.style.display = 'none';
      restaurantsSection.innerHTML = `Error: ${err}, swipe up to refresh!`;
    }
  },
};

export default Favorite;
