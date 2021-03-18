export const TableRows = async (targetElement, getProducts) => {
  const data = await getProducts()

  console.table(data)

  const element = document.querySelector(targetElement)
  const renderRows = data
    .map(
      (product, i) => /*html*/ `

        <tr>
          <th scope="row">${i}</th>
          <td>${product._id}</td>
          <td>${product.name}</td>
          <td>${product.description}</td>
          <td>${product.brand}</td>
          <td>${product.imageUrl}</td>
          <td>${product.price}</td>
          <td>${product.userId}</td>
          <td>${product.createdAt}</td>
          <td>${product.updatedAt}</td>
        </tr>`
    )
    .join('')

  element.innerHTML = renderRows
}
