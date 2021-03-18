export async function getProducts() {
  const resp = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZTUwYjg5YzI2ZjAwMTU3ZjljMjUiLCJpYXQiOjE2MTU5Nzk3ODgsImV4cCI6MTYxNzE4OTM4OH0.WcP_JTyt41dgu6od_ZVyVXJajUjqEzvVn1c4VmExnsI'
    }
  })

  return await resp.json()
}

export async function addProduct(product) {
  try {
    const resp = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZTUwYjg5YzI2ZjAwMTU3ZjljMjUiLCJpYXQiOjE2MTU5Nzk3ODgsImV4cCI6MTYxNzE4OTM4OH0.WcP_JTyt41dgu6od_ZVyVXJajUjqEzvVn1c4VmExnsI'
      },
      method: 'POST',
      body: JSON.stringify(product)
    })

    if (resp.ok) {
      console.log('success:', resp)
    }

    const data = await resp.json(product)
  } catch (err) {
    console.error(err)
  }

}
