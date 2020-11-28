import Vue from 'vue'
import Vuex from 'vuex'
import jQuery from 'jquery'

Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: true,
  sidebarLeftShow: false,
  sidebarLeftClose: false,
  appDarkTheme: false
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  toggleLeftidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarLeftShow)
    state.sidebarLeftShow = sidebarOpened ? false : 'responsive'
  },
  toggleLeftSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarLeftShow)
    state.sidebarLeftShow = sidebarClosed ? true : 'responsive'
  },
  toggleAppDarkTheme (state){
    const isAppDarkTheme = [false, 'dark'].includes(state.appDarkTheme);
    state.appDarkTheme = isAppDarkTheme ? true : 'dark';
    console.log(jQuery);
    jQuery(".c-app").toggleClass("c-dark-theme");
  },
  set (state, [variable, value]) {
    state[variable] = value
  }
}

export default new Vuex.Store({
  state,
  mutations
})