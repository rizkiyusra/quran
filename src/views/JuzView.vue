<template>
  <section style="background-image: url('/img/quran3.jpg')">
    <div class="py-5">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col text-center">
            <img src="/img/quran3.svg" alt="quran" width="50%">
            <h2 class="text-white display-1 lh-1 fw-bold mt-3">Daftar Juz</h2>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container mb-5">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gx-5 gx-md-3 justify-content-between">
      <RouterLink
          v-for="data in juz"
          :to="{ name: 'juz-single', params: { id: data.juz_number }}"
          class="col-md-4 mt-3 mt-lg-4 text-decoration-none">
        <div class="card effect bg-light">
          <div class="card-body">
            <div class="row d-flex justify-content-center">
              <div class="col-6 col-sm-7">
                <div class="border d-inline justify-content-center p-2 rounded" style="background-color: var(--fifth-color)">
                  <span style="color: var(--second-color)">Juz {{ data.juz_number }}</span>
                </div>
              </div>
              <div class="col-6 col-sm-5 d-flex justify-content-end align-items-center">
                <div class="mt-lg-3 mt-4">
                  <p class="small text-end text-black-50">{{ data.verses_count }} ayat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script>
import axios from "axios"

export default {
  name: "JuzView",
  data() {
    return {
      juz: [],
    }
  },
  mounted() {
    const juzUrl = import.meta.env.VITE_JUZLISTS_URL
    axios
        .get(juzUrl)
        .then(response => {
          this.juz = response.data.juzs
          console.log(response.data.juzs)
        })
        .catch(error => {
          console.log(error)
        })
  }
}
</script>

<style scoped>

</style>