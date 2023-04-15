<template>
  <div class="offcanvas offcanvas-start bg-light col-2" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header d-flex justify-content-end">
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
      <div class="offcanvas-body d-flex flex-column flex-shrink-1 p-3 bg-light">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link" :class="{ 'active' : $route.name == 'surah-single' }" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Surah</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" :class="{ 'active' : $route.name == 'juz-single' }" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Juz</button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show" :class="{ 'active' : $route.name == 'surah-single' }" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item mt-1 me-2">
                <RouterLink
                    v-for="data in surah"
                    :key="data.id"
                    :to="{ name: 'surah-single', params: { id:data.id } }"
                    class="nav-link effect2 warna"
                    active-class="active fw-semibold">
                  <div class="row">
                    <div class="col-2">{{ data.id }}</div>
                    <div class="col-10">{{ data.name_simple }}</div>
                  </div>
                </RouterLink>
              </li>
            </ul>
          </div>
          <div class="tab-pane fade show" :class="{ 'active' : $route.name == 'juz-single' }" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item mt-1 me-2">
                <RouterLink
                    v-for="data in juz"
                    :to="{ name: 'juz-single', params: { id:data.id } }"
                    class="nav-link effect2 warna"
                    active-class="active fw-semibold">
                  <div class="row">
                    <div>Juz {{ data.id }}</div>
                  </div>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>


import axios from "axios";

export default {
  name: "Sidebar",
  data() {
    return {
      surah: [],
      juz: [],
    }
  },
  mounted() {
    const chapterUrl = import.meta.env.VITE_CHAPTERLISTS_URL
    const language = import.meta.env.VITE_LANGUAGE_URL
    const juzUrl = import.meta.env.VITE_JUZLISTS_URL
    axios
        .get(chapterUrl + language)
        .then(response => {
          this.surah = response.data.chapters
        })
        .catch(error => {
          console.log(error)
        })
    axios
        .get(juzUrl)
        .then(response => {
          this.juz = response.data.juzs
        })
        .catch(error => {
          console.log(error)
        })
  }
}
</script>

<style scoped>
  .warna {
    color: black;
  }

  .effect2 {
    transition: 0.2s;
  }

  .effect2:hover {
    color: black;
    border: 0.01px solid #a29d9d;
    transform: translateX(3px);
    background-color: #ece9e6;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.01), 0 6px 20px 0 rgba(0, 0, 0, 0.09);
  }

  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    color: var(--third-color);
    background-color: var(--first-color);
  }

  .nav-link[data-bs-target] {
    color: var(--third-color);
  }
  .nav-link[data-bs-target]:hover {
    color: var(--third-color);
    background-color: var(--first-color);
    border-color: var(--bs-border-color);
  }
  .nav-link[data-bs-target].active {
    color: var(--third-color);
    font-weight: bold;
    background-color: var(--first-color);
    border-color: var(--bs-border-color);
  }
</style>