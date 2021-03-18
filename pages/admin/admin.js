import { Navbar } from '../../components/NavbarComponent.js'
import { addProduct, getProducts } from '../../api/products.api.js'
import { TableContainer } from '../../components/TableContainer.js'
import { AddProductForm } from '../../components/AddProductFormComponent.js'


const AdminPage = {
  onMount: function () {
    window.onload = function () {
      const submitBtn = document.getElementById('add-product')
      const name = document.getElementById('form-input-product-name')
      const brand = document.getElementById('form-input-product-brand')
      const price = document.getElementById('form-input-product-price')
      const image_url = document.getElementById('form-input-product-image-url')
      const description = document.getElementById('form-input-product-description')

      submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const product = {
          name: name.value,
          brand: brand.value,
          price: price.value,
          imageUrl: image_url.value,
          description: description.value
        }

        addProduct(product)

      })
    }
  },
  render: function () {
    this.onMount()
    const routes = {
      home: '/',
      admin: 'admin.html'
    }




    return /*html*/ `
      ${Navbar(routes)}
      ${AddProductForm()}
      <div id="output">${TableContainer('#output', getProducts)}</div>
    `
  }
}

document.getElementById('root').innerHTML = AdminPage.render()
