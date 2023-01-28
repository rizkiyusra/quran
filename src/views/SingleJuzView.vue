<template>
  <Sidebar />
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-12">
        <h2 class="text-center mb-5 fw-bold" style="color: var(--third-color)">Juz {{ this.$route.params.id }}</h2>
      </div>
      <div class="col-12 mt-5 mb-3 px-4 px-md-0">
        <div v-for="(data, index) in ayah" :key="data.id" class="border-bottom mb-4">
          <div class="row">
            <div class="col-3 col-md-1">
              <p class="fw-semibold" style="color: var(--sixth-color)">{{ data.verse_key }}</p>
            </div>
            <div class="col-9 col-md-11">
              <p class="text-end h2">{{ data.text_uthmani }}</p>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-md-8">
              <p v-html="translation[index].text"></p>
            </div>
            <div class="col-md-4">
              <div class="row px-3 ps-md-5 align-content-center mt-0 mt-md-3">
                <audio controls class="mb-3 float-md-end" :src="audioUrl + audioDetail[index].url"></audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue"
import axios from "axios"

export default {
  name: "SingleJuzView",
  components: {
    Sidebar,
  },
  data() {
    return {
      ayah: [],
      translation: [],
      audioDetail: [],
      audioUrl: import.meta.env.VITE_AUDIOAYAH_URL,
    }
  },
  mounted() {
    const ayahUrl = import.meta.env.VITE_AYAHJUZ_URL
    const params = this.$route.params.id
    axios
      .get(ayahUrl + params)
      .then(response => {
        this.ayah = response.data.verses
      })
      .catch(error => {
        console.log(error)
      })

    const translationUrl = import.meta.env.VITE_TRANSLATIONJUZ_URL
    axios
      .get(translationUrl + params)
      .then(response => {
        this.translation = response.data.translations
      })
      .catch(error => {
        console.log(error)
      })

    const audioJuzUrl = import.meta.env.VITE_AUDIOJUZ_URL
    const page = import.meta.env.VITE_PAGEJUZ_URL
    axios
      .get(audioJuzUrl + params + page)
      .then(response => {
        this.audioDetail = response.data.audio_files
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>