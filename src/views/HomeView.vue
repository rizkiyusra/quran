<template>
  <div class="container">
    <div class="row mt-5 align-items-center">
      <div class="col-md-6">
        <div class="mb-5 mb-lg-0 text-center text-md-start">
          <h1 class="display-1 lh-1 mb-3 fw-bold">Qur'an</h1>
          <p class="lead fw-normal text-muted mb-5">Berisikan surah dan juz yang lengkap</p>
          <a href="#features" class="px-5 py-2 text-decoration-none btn-first rounded-pill fs-5 text-lg-center">Lebih lanjut<i class="bi bi-arrow-down ms-1"></i></a>
        </div>
      </div>
      <div class="col-md-6">
        <img src="/img/read-quran1.svg" alt="reading quran" class="img-fluid" style="max-height: 50%;">
      </div>
    </div>
  </div>

  <section id="features" class="py-5 bg-light">
    <div class="container">
      <div class="h3 col-lg-12 display-5 lh-1 text-black fw-bold mb-5 text-center">Layanan Kami
        <span class="d-block heading-line2"></span>
      </div>
      <div class="row justify-content-center gap-3 gap-lg-0">
        <div class="col-md-4">
          <!-- Feature item-->
          <div class="text-center">
            <i class="bi-book-half icon-feature text-gradient d-block mb-3"></i>
            <h3 class="fw-semibold">Surah dan Juz</h3>
            <p class="text-muted mb-0">Berisikan surah dan juz yang lengkap</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <!-- Feature item-->
          <div class="text-center">
            <i class="bi-translate icon-feature text-gradient d-block mb-3"></i>
            <h3 class="fw-semibold">Terjemahan</h3>
            <p class="text-muted mb-0">Setiap ayat memiliki terjemahan indonesia</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta" style="background-image: url('/img/quran.jpg')">
    <div class="cta-content">
      <div class="container ms-3 ms-lg-5">
        <h1 class="text-white display-1 lh-1 fw-bold mb-3">
          Mulai melihat surah
        </h1>
        <RouterLink class="btn btn-outline-light py-3 px-4 rounded-pill" :to="{ name: 'surah' }">Surah</RouterLink>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>

</style>