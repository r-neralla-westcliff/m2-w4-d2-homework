// Vue local component for header navigation
const SiteHeader = {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">Food Blog</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav"
                aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Recipes</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Lifestyles</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Videos</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `
};

new Vue({
  el: '#app',
  components: {
    'site-header': SiteHeader
  },
  data: {
    // White Chicken Chili image bound via Vue
    heroSrc: 'images/chili.jpg' // change path if needed
  }
});
