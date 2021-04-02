<script>
import { ref } from 'vue';
import { API } from '../config/constants';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();

    const author = ref(null);
    const location = ref(null);
    const image = ref(null);
    const preview = ref(null);

    async function upload() {
      const formData = new FormData();
      formData.append('image', image.value.files[0]);
      formData.append('author', author.value);
      formData.append('location', location.value);

      const response = await fetch(API + 'images', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.status == 201) {
        console.log(data);
        router.push({ name: 'preview', params: { id: data._id } });
      }
    }

    function imageSelected() {
      preview.value = window.URL.createObjectURL(image.value.files[0]);
    }

    return {
      author,
      location,
      image,
      upload,
      preview,
      imageSelected,
    };
  },
};
</script>

<template>
  <div class="share">
    <div class="upload">
      <h2>Yeni Paylaşım</h2>
      <form @submit.prevent="upload">
        <input
          v-model="author"
          type="text"
          required
          minlength="3"
          maxlength="20"
          placeholder="Adınız"
        />
        <input
          v-model="location"
          type="text"
          required
          maxlength="50"
          placeholder="Konum"
        />
        <input
          @change="imageSelected"
          ref="image"
          type="file"
          required
          accept="image/*"
        />
        <button type="submit">Paylaş 📩</button>
      </form>
    </div>
    <div class="preview">
      <img :src="preview" :alt="author" />
    </div>
  </div>
</template>


<style scoped>
.share {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
}
.preview {
  position: relative;
}
.preview img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.upload {
  background: #dedede;
  padding: 2rem;
}
form {
  margin-top: 2rem;
  line-height: 3;
}
input,
button {
  margin: 0.5rem 0;
  width: 100%;
  padding: 1rem;
  outline: none;
  border: 0;
  border-radius: 0.4rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
}
input {
  border-bottom: 5px solid indigo;
}
button {
  cursor: pointer;
  background: indigo;
  color: white;
}
button:hover {
  opacity: 0.7;
}
</style>