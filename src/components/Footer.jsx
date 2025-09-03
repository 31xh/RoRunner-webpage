const Footer = () => {
  return (
    <>
      <footer class="py-5 background-color ro-runner-sub-title-footer">
        <ul class="nav justify-content-center py-3 my-3 text-white">
          <li class="nav-item">
            <a href="#" class="nav-link text-white px-4">| Home |</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-white px-4">| Features |</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-white px-4">| Pricing |</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-white px-4">| FAQs |</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-white px-4">| About |</a>
          </li>
        </ul>
        <div className="d-flex align-items-center justify-content-center pb-5">
          <img src="https://res.cloudinary.com/dhpjybus4/image/upload/v1755971007/MS_White_txzsw3.png" className="img-fluid logo-footer" alt="" />
        </div>
        <p class="text-center">© 2025 Moogley Studios. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default Footer
