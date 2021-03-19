export const AddProductForm = () => {
  return /*html*/`
  <form style="max-width: 500px"class="container-fluid mt-4 mb-4">
    <div class="row">
     <div class="input-group mb-3">
      <span class="input-group-text">Product</span>
      <input id="form-input-product-name" type="text" class="form-control form-control-sm" placeholder="name" aria-label="name">
    </div>
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text">Brand</span>
      <input id="form-input-product-brand" type="text" class="form-control form-control-sm" placeholder="brand" aria-label="brand">
      <span class="input-group-text">Price</span>
      <input id='form-input-product-price' type="text" class="form-control form-control-sm" aria-label="Amount (to the nearest dollar)">
      <span class="input-group-text">.00</span>
    </div>
    <div class="row">
    <label for="basic-url" class="form-label">Image</label>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon3">Url</span>
      <input id="form-input-product-image-url" type="text" class="form-control form-control-sm" id="basic-url" aria-describedby="basic-addon3">    
    </div>

    <div class="input-group">
      <span class="input-group-text">Description</span>
      <textarea id="form-input-product-description" class="form-control form-control-sm"maria-label="With textarea"></textarea>
    </div>
    </div>
     <div class="mt-4">
      <button id="add-product" type="submit" class="btn btn-sm btn-outline-dark">+ Product</button>
     </div>
  </form> 
    `
}
