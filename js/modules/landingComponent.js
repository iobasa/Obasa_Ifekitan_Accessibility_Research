export default {
        template: `<div> 
        <div id="top"><a href="#app"> ^ Back to Top ^</a></div>

        <section id="title">
        <h1 >Welcome to Roku Flashback! Your source for all classic and retro media. Indulge in some nostalgia today! </h1>
        </section>

        <section class="filter">
        <a href="#movie"><img src="images/movies.png" alt="movies"></a>
        <a href="#tv"><img src="images/TV.png" alt="tv"></a>
        <a href="#music"><img src="images/music.png" alt="music"></a>
        </section>

        <section id="check-out">
        <h2>Check out out library of movies, tv shows, and music ranging from the 50’s-90’s</h2>
        </section>

        <section id="movie" class="filter-sections">
        <h1 class="filter-head">Movies</h1>
        <router-link to="/tiff"><img  src="images/breakfast-tiffanys.png" alt="breaskfast at tiffany's"></router-link>
        </section>

        <section id="tv" class="filter-sections">
        <h1 class="filter-head">TV</h1>
        <router-link to="/fresh"><img src="images/fresh-prince.png" alt="freash prince"></router-link>
        </section>

        <section class="more">
        <h3>...And More!</h3>
        <router-link to="/login" class="login">Login to Watch</router-link>
        </section>

        <section id="music" class="filter-sections">
        <h1 class="filter-head">Music</h1>
        <router-link to="/music"><img src="images/bees-gees.png" alt="Bees Gees"></router-link>
        </section>

        <section class="more">
        <h3>...And More!</h3>
        <router-link to="/login" class="login">Login to Listen</router-link>
        </section>

        

        </div>
        `,
}

