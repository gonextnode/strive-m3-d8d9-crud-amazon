

export async function ProductGridContainer(targetElement, getProducts) {
  console.log(targetElement)
  const data = await getProducts()
  const element = document.getElementById(targetElement)
  const productGrid = data.map(({ name, brand, price, imageUrl, description }) => (/*html*/`
    <div class="card shadow-sm hover rounded col m-2" style="width: 18rem;">
        <img src="${imageUrl}" class="card-img-top p-4" alt="...">
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title">${name}</h5>
          <p class="card-text text-truncate">${description}</p>
          <a href="#" class="btn btn-sm btn-dark">More</a>
        </div>
      </div>
  `
  )).join("")
  element.innerHTML = productGrid
}
