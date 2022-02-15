class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
            <header>
                <h1>This is my Header</h1>
            </header>
        `
    }
}

customElements.define('site-header', SiteHeader)

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                &copy; 2022 Wayne Thompson
            </footer>
        `
    }
}

customElements.define('site-footer', SiteFooter)
