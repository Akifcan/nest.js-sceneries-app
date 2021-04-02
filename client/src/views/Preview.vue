<script>
import { API } from '../config/constants';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
  setup() {
    const loaded = ref(false);
    const author = ref(null);
    const location = ref(null);
    const createdAt = ref('');
    const route = useRoute();

    String.prototype.withBaseUrl = function () {
      return API + this;
    };

    onMounted(() => {
      async function getRandomImage() {
        const response = await fetch(API + 'images/' + route.params.id);
        const data = await response.json();
        const {
          imageUrl,
          author: authorVal,
          location: locationVal,
          createdAt: createdAtVal,
        } = data;
        const date = new Date(createdAtVal);

        author.value = authorVal;
        location.value = locationVal;

        createdAt.value = date.toLocaleString();
        document.querySelector('img').src = imageUrl.withBaseUrl();

        loaded.value = true;
      }
      getRandomImage();
    });

    return {
      loaded,
      author,
      location,
      createdAt,
    };
  },
};
</script>

<template>
  <div class="scenery" v-show="loaded">
    <div class="info">
      <h3 class="location">📍 {{ location }}</h3>
      <p class="author">{{ author }}</p>
      <time>{{ createdAt }}</time>
    </div>

    <img src="" :alt="location" />

    <router-link :to="{ name: 'share' }">
      <div title="Paylaş" role="button" class="fab">
        <span>+</span>
      </div>
    </router-link>
  </div>
</template>


<style scoped>
.scenery {
  text-transform: capitalize;
  height: 100vh;
  background: red;
  position: relative;
}
.scenery img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.info {
  border-radius: 0.5rem;
  font-size: 1.5rem;
  padding: 1rem;
  line-height: 3;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 2;
  top: 5%;
  left: 5%;
  min-height: 10rem;
  width: 40%;
  box-shadow: 0 3px 15px rgba(255, 255, 255, 0.3);
  border-bottom: 5px solid indigo;
}

.info .location {
  font-weight: 300;
}

.fab {
  transition: transform 250ms;
  cursor: pointer;
  color: white;
  display: grid;
  font-size: 4rem;
  place-items: center;
  position: absolute;
  bottom: 5%;
  right: 5%;
  background: indigo;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
}
.fab:hover {
  transform: scale(1.2);
}
</style>