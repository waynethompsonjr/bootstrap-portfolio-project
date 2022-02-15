class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <!-- jumbotron-fluid is required to remove the rounded corners -->
        <header class="jumbotron jumbotron-fluid bg-success">
          <div class="container">
            <h1 class="display-4">Fluid jumbotron</h1>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>  
        </header>
        `
    }
}

customElements.define('site-header', SiteHeader)

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
            <footer>
                &copy; 2022 Wayne Thompson
            </footer>
        `
    }
}

customElements.define('site-footer', SiteFooter)


class SiteScripts extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
            <!-- build:js js/main.js -->
            <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
            <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
            <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
            <script src="js/scripts.js"></script>
            <!-- endbuild -->
        `
    }
}

customElements.define('site-scripts', SiteScripts)
