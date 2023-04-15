<template>
  <footer class="pt-5 bg-light">
    <div class="container">
      <div class="row d-flex justify-content-between">
        <div class="col-6 col-sm-5 text-center">
          <h5>Tentang Qur'an</h5>
          <p class="text-muted text-start">Dibuat untuk memudahkan semua orang agar dapat membaca dan memahami arti Al-Quran dimana pun dan kapan pun.</p>
        </div>
        <div class="col-6 col-sm-5 text-center">
          <h5>Links</h5>
          <ul class="nav flex-column">
            <li class="nav-item">
              <RouterLink :to="{ name: 'home' }" class="nav-link text-black"  aria-current-value="page">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'surah' }" class="nav-link text-black" aria-current-value="page">Surah</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'juz' }" class="nav-link text-black" aria-current-value="page">Juz</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'about' }" class="nav-link text-black" aria-current-value="page">About</RouterLink>
            </li>
          </ul>
          <ul class="list-unstyled">
            <li class="nav-item">

            </li>
            <li class="nav-item">
            </li>
            <li class="nav-item">
            </li>
            <li class="nav-item">
            </li>
          </ul>
        </div>
      </div>

      <div class="d-flex flex-column flex-sm-row justify-content-between pt-3 pb-2 pb-md-4 pb-lg-0 mt-4 border-top">
        <div class="col-md-8 d-flex align-items-center justify-content-center justify-content-md-start">
          <a href="/public" class="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
            <img src="/img/icon-nobg.png" alt="icon" height="32">
          </a>
          <span class="mb-3 mb-md-0">Qur'an by <span class="fw-bold">Rizki Maulana Yusra</span> © {{ year }} </span>
        </div>
        <ul class="list-unstyled d-flex justify-content-center">
          <!-- Linkedin -->
          <a
              class="me-3 text-primary"
              target="_blank"
              href="https://www.linkedin.com/in/rizkimaulanayusra"
          ><i class="bi bi-linkedin h4"></i
          ></a>
          <!-- Github -->
          <a
              class="me-3 text-black"
              target="_blank"
              href="https://github.com/rizkiyusra"
          ><i class="bi bi-github h4"></i
          ></a>

          <!-- Instagram -->
          <a
              class="text-danger"
              target="_blank"
              href="https://www.instagram.com/rizkiyusra"
          ><i class="bi bi-instagram h4"></i
          ></a>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>

</style>