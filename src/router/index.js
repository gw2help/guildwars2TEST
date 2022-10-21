import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/progress',
    name: 'progress',
    component: () => import('../views/progress_view.vue')
  },
  {
    path: '/armor',
    name: 'armor',
    component: () => import('../views/armor_view.vue')
  },
  {
    path:'/build',
    name:'build',
    //component: () => import('../views/build_view.vue'),
    beforeEnter() {window.open('http://en.gw2skills.net/editor/','_blank')} // ADD LINK in router
  },
  {
    path: '/craft',
    name: 'crafting',
    component: () => import('../views/craft_view.vue')
  },
  {
    path: '/timers',
    name: 'timers',
    component: () => import('../views/timers_view.vue')
  },
  {
    path: '/killproof',
    name: 'killproof',
    component: () => import('../views/killproof_view.vue')
  },
  {
    path: '/mf_weapon_prices',
    name: 'mf_weapon_prices',
    component: () => import('../views/mf_weapon_prices_View.vue')
  },
  {
    path: '/provisioner',
    name: 'provisioner',
    component: () => import('../views/provisioner_view.vue')
  },
  {
    path: '/mf_upgrade',
    name: 'mf_upgrade',
    component: () => import('../views/mf_upgrade_view.vue')
  },
  {
    path: '/attribute',
    name: 'attribute',
    component: () => import('../views/attribute_view.vue')
  },
  {
    path: '/itemfinder',
    name: 'itemfinder',
    component: () => import('../views/item_finder_view.vue')  
  },
  {
    path: '/converters',
    name: 'converters',
    component: () => import('../views/converters_view.vue')
  },
  {
    path: '/foodies',
    name: 'foodies',
    component: () => import('../views/foodies_view.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test_view.vue')
  },
  {
    path: '/rune',
    name: 'rune',
    component: () => import('../views/rune_view.vue')
  },
  {
    path: '/sigil',
    name: 'sigil',
    component: () => import('../views/sigil_view.vue')
  },
  {
    path: '/builds',
    name: 'builds',
    component: () => import('../views/build_view.vue')
  },
  {
    path: '/salvage',
    name: 'salvage',
    component: () => import('../views/salvage_view.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router