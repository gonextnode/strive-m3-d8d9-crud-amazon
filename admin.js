import { getProducts, addProduct } from './api.service.js'

const AdminPage = {
  render: function () {
    const state = {
      products: []
    }

    getProducts()

    console.log(state.products)

    return /*html*/ `
      <h3>AdminComponent</h3>
    `
  }
}

document.getElementById('root').innerHTML = AdminPage.render()
