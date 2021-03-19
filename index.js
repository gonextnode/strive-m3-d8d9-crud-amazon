import { Navbar } from './components/NavbarComponent.js'
import { ProductGridContainer } from './components/ProductGridContainer.js'
import { getProducts } from './api/products.api.js'

const routes = {
  home: '/',
  admin: './pages/admin/admin.html'
}

const HomePage = {
  render: () => {


    return /*html*/ `
      ${Navbar(routes)}
      <div style="container">
        <div class="row flex-wrap m-5 " id="product-grid">
          ${ProductGridContainer('product-grid', getProducts)}
        </div>
      </div>
      
    `
  }
}

document.getElementById('root').innerHTML = HomePage.render()

