import { Navbar } from '../../components/NavbarComponent.js'
import { addProduct, getProducts } from '../../api/products.api.js'
import { TableContainer } from '../../components/TableContainer.js'
import { AddProductForm } from '../../components/AddProductFormComponent.js'
import { LoadingComponent } from '../../components/LoadingComponent.js'



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


      const element = document.getElementById("delete-row")
      console.log(element)

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
      <div class="d-flex container">
      <img width="300" src="https://www.clipartmax.com/png/middle/315-3159325_amazon-icon-amazon-logo-png-icon.png" alt="Amazon Icon - Amazon Logo Png Icon@clipartmax.com">
      ${AddProductForm()}
      </div>
      <div id="output">
         <div class="d-flex mt-5 justify-content-center align-item-center">
            ${LoadingComponent()}
          </div >
          ${TableContainer('#output', getProducts)}
       </div >
  `
  }
}

document.getElementById('root').innerHTML = AdminPage.render()
