import { TableRows } from './TableRows.js'


export const TableContainer = async (targetElement, getProducts) => {
  const products = await getProducts()

  const element = document.querySelector(targetElement)
  element.innerHTML = /*html*/`
  <div class="container">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">_id</th>
          <th scope="col">name</th>
          <th scope="col">description</th>
          <th scope="col">brand</th>
          <th scope="col">imageUrl</th>
          <th scope="col">price</th>
          <th scope="col">userId</th>
          <th scope="col">createdAt</th>
          <th scope="col">updatedAt</th>
        </tr>
      </thead>
      <tbody id="tablerows">
       ${TableRows('#tablerows', getProducts)}
      </tbody>
    </table>
    </div>
  </div>
  `
}
