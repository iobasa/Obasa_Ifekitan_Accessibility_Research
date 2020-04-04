// create a couple of component we can request and render
import landingComponent from "./modules/landingComponent.js";
import signUpComponent from "./modules/signUpComponent.js";
import MusicPlayer from "./modules/MusicPlayer.js";
import Movie1Component from "./modules/Movie1Component.js";
import Movie2Component from "./modules/Movie2Component.js";
import ErrorComponent from "./modules/ErrorComponent.js";
// these are the same as Express routes -> router.get('/', ... do something with the request)
const routes = [
    { path: '/', name: 'landing', component: landingComponent },
    { path: '/signUp', name: 'signUp', component: signUpComponent },
    { path: '*', name: 'error', component: ErrorComponent },
    { path: '/music', name: 'music', component: MusicPlayer },
    { path: '/tiff', name: 'tiff', component: Movie1Component },
    { path: '/fresh', name: 'fresh', component: Movie2Component }
]

const router = new VueRouter({
    routes // short for routes: routes
})

const vm = new Vue ({
    data: {

    },

    methods: {

    },

    router
}).$mount("#app");

var subtitles = document.getElementById('subtitles');

for (var i = 0; i < video.textTracks.length; i++) {
    video.textTracks[i].mode = 'hidden';
 }

 var subtitlesMenu;
if (video.textTracks) {
   var df = document.createDocumentFragment();
   var subtitlesMenu = df.appendChild(document.createElement('ul'));
   subtitlesMenu.className = 'subtitles-menu';
   subtitlesMenu.appendChild(createMenuItem('subtitles-off', '', 'Off'));
   for (var i = 0; i < video.textTracks.length; i++) {
      subtitlesMenu.appendChild(createMenuItem('subtitles-' + video.textTracks[i].language, video.textTracks[i].language, video.textTracks[i].label));
   }
   videoContainer.appendChild(subtitlesMenu);
}

var subtitleMenuButtons = [];
var createMenuItem = function(id, lang, label) {
   var listItem = document.createElement('li');
   var button = listItem.appendChild(document.createElement('button'));
   button.setAttribute('id', id);
   button.className = 'subtitles-button';
   if (lang.length > 0) button.setAttribute('lang', lang);
   button.value = label;
   button.setAttribute('data-state', 'inactive');
   button.appendChild(document.createTextNode(label));
   button.addEventListener('click', function(e) {
      // Set all buttons to inactive
      subtitleMenuButtons.map(function(v, i, a) {
         subtitleMenuButtons[i].setAttribute('data-state', 'inactive');
      });
      // Find the language to activate
      var lang = this.getAttribute('lang');
      for (var i = 0; i < video.textTracks.length; i++) {
         // For the 'subtitles-off' button, the first condition will never match so all will subtitles be turned off
         if (video.textTracks[i].language == lang) {
            video.textTracks[i].mode = 'showing';
            this.setAttribute('data-state', 'active');
         }
         else {
            video.textTracks[i].mode = 'hidden';
         }
      }
      subtitlesMenu.style.display = 'none';
   });
   subtitleMenuButtons.push(button);
   return listItem;
}

subtitles.addEventListener('click', function(e) {
    if (subtitlesMenu) {
       subtitlesMenu.style.display = (subtitlesMenu.style.display == 'block' ? 'none' : 'block');
    }
 });