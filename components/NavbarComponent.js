export const Navbar = (routes) => {
  return `
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="${routes.home}">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="${routes.admin}">Admin</a>
    </li>
  </ul>
  `
}
