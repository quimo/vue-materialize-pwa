import Vue from '../node_modules/vue/dist/vue.min.js'
import VueRouter from '../node_modules/vue-router/dist/vue-router.min.js'

import Header from './header.js';
import Footer from './footer.js';
import Home from './home.js';
import Contatti from './contatti.js';

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/contatti', component: Contatti },
    ]
  })

const prod = process.env.NODE_ENV === 'production'
const shouldSW = 'serviceWorker' in navigator && prod
if (shouldSW) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
      console.log("Service Worker Registered!")
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
    
    new Vue({
        router: router,
        components: {
            app_header: Header,
            app_footer: Footer
        }
    }).$mount('#app')

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

})

//add to home screen
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  var install = document.getElementById('install');
  install.style.display = 'block';

  install.addEventListener('click', (e) => {
    install.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});

