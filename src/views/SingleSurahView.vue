<template>
  <Sidebar />
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-12">
        <h2 class="text-center mb-5 fw-bold" style="color: var(--third-color)">{{ surahDetail.name_complex }}</h2>
        <span class="text-muted h6" v-html="info.short_text"></span>
        <RouterLink
          class="text-decoration-none rounded-3 text-center"
          style="color: var(--third-color)"
          v-if="info.short_text == ''"
          :to="{name: 'surah-info', params: { id: this.$route.params.id}}" >
          Baca Info Surah
        </RouterLink>
        <RouterLink
          class="text-muted fw-semibold ms-1 text-decoration-none"
          v-else :to="{name: 'surah-info', params: { id: this.$route.params.id}}">
          Read More...
        </RouterLink>
      </div>
      <div class="row mt-4">
        <audio controls :src="audioFull.audio_url" class="text-end float-end" />
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
import Sidebar from "../components/Sidebar.vue"
import axios from "axios"

export default {
  name: "SingleSurahView",
  components: {
    Sidebar,
  },
  data() {
    return {
      surahDetail: [],
      ayah: [],
      info: [],
      translation: [],
      audioFull: [],
      audioDetail: [],
      audioUrl: import.meta.env.VITE_AUDIOAYAH_URL,
    }
  },
  mounted() {
    const chapterUrl = import.meta.env.VITE_CHAPTERDETAIL_URL
    const language = import.meta.env.VITE_LANGUAGE_URL
    const params = this.$route.params.id
    axios
      .get(chapterUrl + params + '?' + language)
      .then(response => {
        this.surahDetail = response.data.chapter
      })
      .catch(error => {
        console.log(error)
      })

    const ayahUrl = import.meta.env.VITE_AYAHSURAH_URL
    axios
      .get(ayahUrl + params)
      .then(response => {
        this.ayah = response.data.verses
      })
      .catch(error => {
        console.log(error)
      })

    const infoUrl = import.meta.env.VITE_INFOSURAH_URL
    const language2 = import.meta.env.VITE_INFOLANGUANGE_URL
    axios
      .get(infoUrl + params + language2)
      .then(response => {
        this.info = response.data.chapter_info
      })
      .catch(error => {
        console.log(error)
      })

    const translationUrl = import.meta.env.VITE_TRANSLATIONSURAH_URL
    axios
      .get(translationUrl + params)
      .then(response => {
        this.translation = response.data.translations
      })
      .catch(error => {
        console.log(error)
      })

    const audioSurahFullUrl = import.meta.env.VITE_AUDIOSURAH_URL
    axios
      .get(audioSurahFullUrl + params)
      .then(response => {
        this.audioFull = response.data.audio_file
      })
      .catch(error => {
        console.log(error)
      })

    const audioUrl = import.meta.env.VITE_RECITATIONS_URL
    axios
      .get(audioUrl + params)
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