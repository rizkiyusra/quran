<template>
  <sidebar />
  <div class="container mb-5">
    <div class="row">
      <div class="col-12 mt-3">
        <RouterLink
          :to="{name: 'surah-single', params: { id: this.$route.params.id}}"
          class="text-decoration-none rounded-3"
          style="color: var(--third-color)">
          <i class="bi bi-chevron-left me-1"></i>Kembali membaca surah {{ surahDetail.name_simple }}
        </RouterLink>
      </div>
      <div class="col-12 mt-4">
        <h2 class="text-center fw-bold mb-4" style="color: var(--third-color)">{{ surahDetail.name_complex }}</h2>
        <p v-html="info.text" class="text-muted f"></p>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue"
import axios from "axios"

export default {
  name: "InfoSurah",
  components: {
    Sidebar,
  },
  data() {
    return {
      surahDetail: [],
      info: [],
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
          console.log(response.data.chapter)
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
          console.log(response.data.chapter_info)
        })
        .catch(error => {
          console.log(error)
        })
  }
}
</script>

<style scoped>

</style>