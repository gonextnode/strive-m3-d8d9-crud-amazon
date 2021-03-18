import { Navbar } from './components/NavbarComponent.js'
import { ProductGridContainer } from './components/ProductGridContainer.js'
import { getProducts } from './api/products.api.js'

const HomePage = {
  render: () => {
    //addProduct(state.product)

    const routes = {
      home: '/',
      admin: './pages/admin/admin.html'
    }



    return /*html*/ `
      ${Navbar(routes)}
      <div id="product-grid">${ProductGridContainer('product-grid', getProducts)}</div>
    `
  }
}

document.getElementById('root').innerHTML = HomePage.render()

