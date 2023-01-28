<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col text-center align-items-center">
        <img src="/public/img/404.svg" alt="404 Page Not Found" class="img-fluid mt-1">
        <div class="h4 mt-2">Halaman yang anda cari tidak dapat ditemukan</div>
        <RouterLink :to="{ name: 'home' }" class="btn btn-secondary mt-2 mt-md-0 mb-5 mb-md-0">Halaman Utama</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error404"
}
</script>

<style scoped>

</style>