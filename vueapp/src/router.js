import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/views/Movie.vue'
import MovieDetail from '@/views/MovieDetail.vue'
import Music from '@/views/Music.vue'
import MusicList from '@/views/MusicList.vue'
import Book from '@/views/Book.vue'
import Photo from '@/views/Photo.vue'
import PhotoDetail from '@/views/PhotoDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/movie',
      component:Movie
    },
    {
      path:'/moviedetail/:id',
      component:MovieDetail
    },
    {
      path:'/music',
      component:Music
    },
    {
      path:'/musiclist',
      component:MusicList
    },
    {
      path:'/book',
      component:Book
    },
    {
      path:'/photo',
      component:Photo,
    },
    {
      path:'/photodetail/:index',
      component:PhotoDetail
    },
    {
      path:'/',
      redirect:'/movie'
    }
  ]
})
