import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Error404 from "../views/Error404.vue"
import SurahView from "../views/SurahView.vue"
import JuzView from "../views/JuzView.vue"
import SingleJuzView from "../views/SingleJuzView.vue"
import SingleSurahView from "../views/SingleSurahView.vue"
import InfoSurah from "../views/InfoSurah.vue"

const DEFAULT_TITLE = "Qur'an";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'About'
      }
    },
    {
      path: '/surah',
      name: 'surah',
      component: SurahView,
      meta: {
        title: 'Surah'
      }
    },
    {
      path: '/surah/:id',
      name: 'surah-single',
      component: SingleSurahView,
      meta: {
        title: `Surah`,
      }
    },
    {
      path: '/surah/:id/info',
      name: 'surah-info',
      component: InfoSurah,
      meta: {
        title: `Info Surah`
      }
    },
    {
      path: '/juz',
      name: 'juz',
      component: JuzView,
      meta: {
        title: 'Juz'
      }
    },
    {
      path: '/juz/:id',
      name: 'juz-single',
      component: SingleJuzView,
      meta: {
        title: `Juz`
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Error404,
      meta: {
        title: 'Error 404'
      }
    },
  ]
})

router.beforeEach((to,from, next) => {
  const metaTitle = to.meta.title
  if (metaTitle === "Error 404") {
    document.title = metaTitle
  }
  else if (to.meta.props) {
    document.title = DEFAULT_TITLE + " - " + metaTitle + to.meta.props
  }
  else if(metaTitle){
    document.title = DEFAULT_TITLE + " - " + metaTitle
  }
  else{
    document.title = DEFAULT_TITLE;
  }
  next()
})

export default router
