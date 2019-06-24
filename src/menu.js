export default {
    template: `
    <nav role="navigation">
        <div class="nav-wrapper container">
            <a id="logo-container" href="#" class="brand-logo">Logo</a>
            <ul id="slide-out" class="sidenav">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/contatti">Contatti</router-link></li>
            </ul>
            <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </div>
    </nav>
    `
}