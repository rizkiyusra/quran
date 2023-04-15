<template>
  <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">
        <img src="/img/icon-nobg.png" alt="Logo" width="40" height="32" class="d-inline-flex align-text-top me-1">
        <span class="align-items-center">Qur'an</span>
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink :to="{ name: 'surah' }" class="nav-link text-center" active-class="active fw-semibold" aria-current="page">
              <i class="bi bi-book me-1 d-block"></i>Surah
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'juz' }" class="nav-link text-center" active-class="active fw-semibold" aria-current="page">
              <i class="bi bi-book-half me-1 d-block"></i>Juz
            </RouterLink>
          </li>
          <li class="nav-item" v-if="$route.name == 'surah-single' || $route.name == 'juz-single'">
            <RouterLink class="nav-link text-center" data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
              <span class="bi bi-card-list me-1 d-block"></span>List
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'about' }" class="nav-link text-center" active-class="active fw-semibold" aria-current="page">
              <i class="bi bi-info-circle me-1 d-block"></i>About
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>