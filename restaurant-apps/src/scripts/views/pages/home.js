import RestaurantResource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="jumbotron">
        <div class="hero-content">
            <p class="hero-welcome">Anda Lapar? </p>
            <h1 class="hero-title">Makan Dulu Masseh </h1>
            <p class="hero-tag">Temukan Restoran Paling Rekomendasi Disini</p>
        </div>
    </div>
    <section>
    <div class="title-restourant">
        <h2>Rekomendasi Restoran</h2>
        <div id="loading"></div>
        <div class="list-resto" id="list-resto">

        </div>
    </div>
    </section>
      `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const restaurantSection = document.querySelector('#list-resto');

    loading.innerHTML = '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';

    try {
      const restaurantMain = await RestaurantResource.listRestaurants();
      restaurantMain.forEach((Resto) => {
        restaurantSection.innerHTML
                    += createRestaurantItemTemplate(Resto);
      });
      loading.style.display = 'none';
    } catch (err) {
      loading.style.display = 'none';
      restaurantSection.innerHTML = `Error: ${err}, swipe up to refresh!`;
    }
  },
};

export default Home;
