import Layout from "components/Layout";
import Product from "components/Product";

export default function Katalog() {
  return (
    <Layout>
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role="main">
        {/* Breadcrumb */}
        <div className="bg-light">
          <div className="container py-4">
            <div className="row">
              <div className="col-sm">
                <h4 className="mb-0">Products Grid</h4>
              </div>
              {/* End Col */}
              <div className="col-sm-auto">
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">Shop</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="products-grid.html">Products</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Grid</li>
                  </ol>
                </nav>
                {/* End Breadcrumb */}
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
        </div>
        {/* End Breadcrumb */}
        {/* Card Grid */}
        <div className="container content-space-t-1 content-space-t-md-1 content-space-b-1 content-space-b-lg-1">
          <div className="row">
            <div className="col-lg-3">
              {/* Navbar */}
              <div className="navbar-expand-lg mb-5">
                {/* Navbar Toggle */}
                <div className="d-grid">
                  <button type="button" className="navbar-toggler btn btn-white mb-3" data-bs-toggle="collapse" data-bs-target="#navbarVerticalNavMenu" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarVerticalNavMenu">
                    <span className="d-flex justify-content-between align-items-center">
                      <span className="text-dark">Filter</span>
                      <span className="navbar-toggler-default">
                        <i className="bi-list" />
                      </span>
                      <span className="navbar-toggler-toggled">
                        <i className="bi-x" />
                      </span>
                    </span>
                  </button>
                </div>
                {/* End Navbar Toggle */}
                {/* Navbar Collapse */}
                <div id="navbarVerticalNavMenu" className="collapse navbar-collapse">
                  <div className="w-100">
                    {/* Form */}
                    <form>
                      <div className="border-bottom pb-4 mb-4">
                        <h5>Gender</h5>
                        <div className="d-grid gap-2">
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="menCheckbox" defaultChecked />
                            <label className="form-check-label d-flex" htmlFor="menCheckbox">Men <span className="ms-auto">(73)</span></label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="womenCheckbox" defaultChecked />
                            <label className="form-check-label d-flex" htmlFor="womenCheckbox">Women <span className="ms-auto">(51)</span></label>
                          </div>
                          {/* End Checkboxes */}
                        </div>
                      </div>
                      <div className="border-bottom pb-4 mb-4">
                        <h5>Brand</h5>
                        <div className="d-grid gap-2">
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="adidasCheckbox" />
                            <label className="form-check-label d-flex" htmlFor="adidasCheckbox">Adidas <span className="ms-auto">(16)</span></label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="newBalanceCheckbox" />
                            <label className="form-check-label d-flex" htmlFor="newBalanceCheckbox">New Balance <span className="ms-auto">(8)</span></label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="nikeCheckbox" />
                            <label className="form-check-label d-flex" htmlFor="nikeCheckbox">Nike <span className="ms-auto">(35)</span></label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="fredPerryCheckbox" />
                            <label className="form-check-label d-flex" htmlFor="fredPerryCheckbox">Fred Perry <span className="ms-auto">(5)</span></label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="tnfCheckbox" />
                            <label className="form-check-label d-flex" htmlFor="tnfCheckbox">The North Face <span className="ms-auto">(1)</span></label>
                          </div>
                          {/* End Checkboxes */}
                        </div>
                        {/* View More - Collapse */}
                        <div className="collapse" id="collapseBrand">
                          <div className="d-grid gap-2">
                            {/* Checkboxes */}
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox"  id="gucciCheckbox" />
                              <label className="form-check-label d-flex" htmlFor="gucciCheckbox">Gucci <span className="ms-auto">(5)</span></label>
                            </div>
                            {/* End Checkboxes */}
                            {/* Checkboxes */}
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox"  id="mangoCheckbox" />
                              <label className="form-check-label d-flex" htmlFor="mangoCheckbox">Mango <span className="ms-auto">(1)</span></label>
                            </div>
                            {/* End Checkboxes */}
                          </div>
                        </div>
                        {/* End View More - Collapse */}
                        {/* Link */}
                        <a className="link-sm link-collapse" href="products-grid.html#collapseBrand" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseBrand">
                          <span className="link-collapse-default">View more</span>
                          <span className="link-collapse-active">View less</span>
                        </a>
                        {/* End Link */}
                      </div>
                      <div className="border-bottom pb-4 mb-4">
                        <h5>Size</h5>
                        <div className="d-grid gap-2">
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="sizeSCheckbox" defaultChecked />
                            <label className="form-check-label d-flex" htmlFor="sizeSCheckbox">S <span className="ms-auto">(27)</span></label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="sizeMCheckbox" />
                            <label className="form-check-label d-flex" htmlFor="sizeMCheckbox">M <span className="ms-auto">(18)</span></label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="sizeLCheckbox" defaultChecked />
                            <label className="form-check-label d-flex" htmlFor="sizeLCheckbox">L <span className="ms-auto">(0)</span></label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="sizeXLCheckbox" />
                            <label className="form-check-label d-flex" htmlFor="sizeXLCheckbox">XL <span className="ms-auto">(1)</span></label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="sizeXXLCheckbox" />
                            <label className="form-check-label d-flex" htmlFor="sizeXXLCheckbox">XXL <span className="ms-auto">(2)</span></label>
                          </div>
                          {/* End Checkboxes */}
                        </div>
                      </div>
                      <div className="border-bottom pb-4 mb-4">
                        <h5>Category</h5>
                        <div className="d-grid gap-2">
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="tshirtCheckbox" defaultChecked />
                            <label className="form-check-label d-flex" htmlFor="tshirtCheckbox">T-shirt <span className="ms-auto">(73)</span></label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="shoesCheckbox" />
                            <label className="form-check-label d-flex" htmlFor="shoesCheckbox">Shoes <span className="ms-auto">(0)</span></label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="accessoriesCheckbox" defaultChecked />
                            <label className="form-check-label d-flex" htmlFor="accessoriesCheckbox">Accessories <span className="ms-auto">(51)</span></label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="topsCheckbox" defaultChecked />
                            <label className="form-check-label d-flex" htmlFor="topsCheckbox">Tops <span className="ms-auto">(5)</span></label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="bottomCheckbox" />
                            <label className="form-check-label d-flex" htmlFor="bottomCheckbox">Bottom <span className="ms-auto">(11)</span></label>
                          </div>
                          {/* End Checkboxes */}
                        </div>
                        {/* View More - Collapse */}
                        <div className="collapse" id="collapseCategory">
                          <div className="d-grid gap-2">
                            {/* Checkboxes */}
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox"  id="shortsCheckbox" />
                              <label className="form-check-label d-flex" htmlFor="shortsCheckbox">Shorts <span className="ms-auto">(6)</span></label>
                            </div>
                            {/* End Checkboxes */}
                            {/* Checkboxes */}
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox"  id="hatsCheckbox" />
                              <label className="form-check-label d-flex" htmlFor="hatsCheckbox">Hats <span className="ms-auto">(3)</span></label>
                            </div>
                            {/* End Checkboxes */}
                            {/* Checkboxes */}
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox"  id="socksCheckbox" />
                              <label className="form-check-label d-flex" htmlFor="socksCheckbox">Socks <span className="ms-auto">(8)</span></label>
                            </div>
                            {/* End Checkboxes */}
                          </div>
                        </div>
                        {/* End View More - Collapse */}
                        {/* Link */}
                        <a className="link-sm link-collapse" href="products-grid.html#collapseCategory" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseCategory">
                          <span className="link-collapse-default">View more</span>
                          <span className="link-collapse-active">View less</span>
                        </a>
                        {/* End Link */}
                      </div>
                      <div className="border-bottom pb-4 mb-4">
                        <h5>Rating</h5>
                        <div className="d-grid gap-2">
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="1starCheckbox" />
                            <label className="form-check-label" htmlFor="1starCheckbox">
                              <span className="d-flex gap-1">
                                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                                <img src="/assets/svg/illustrations/star-muted.svg" alt="Review rating" style={{ width: 16 }} />
                                <img src="/assets/svg/illustrations/star-muted.svg" alt="Review rating" style={{ width: 16 }} />
                                <img src="/assets/svg/illustrations/star-muted.svg" alt="Review rating" style={{ width: 16 }} />
                                <img src="/assets/svg/illustrations/star-muted.svg" alt="Review rating" style={{ width: 16 }} />
                                (3)
                              </span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="2starCheckbox" />
                            <label className="form-check-label" htmlFor="2starCheckbox">
                              <span className="d-flex gap-1">
                                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                                <img src="/assets/svg/illustrations/star-muted.svg" alt="Review rating" style={{ width: 16 }} />
                                <img src="/assets/svg/illustrations/star-muted.svg" alt="Review rating" style={{ width: 16 }} />
                                <img src="/assets/svg/illustrations/star-muted.svg" alt="Review rating" style={{ width: 16 }} />
                                (10)
                              </span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="3starCheckbox" />
                            <label className="form-check-label" htmlFor="3starCheckbox">
                              <span className="d-flex gap-1">
                                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                                <img src="/assets/svg/illustrations/star-muted.svg" alt="Review rating" style={{ width: 16 }} />
                                <img src="/assets/svg/illustrations/star-muted.svg" alt="Review rating" style={{ width: 16 }} />
                                (3)
                              </span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="4starCheckbox" />
                            <label className="form-check-label" htmlFor="4starCheckbox">
                              <span className="d-flex gap-1">
                                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                                <img src="/assets/svg/illustrations/star-muted.svg" alt="Review rating" style={{ width: 16 }} />
                                (34)
                              </span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="5starCheckbox" />
                            <label className="form-check-label" htmlFor="5starCheckbox">
                              <span className="d-flex gap-1">
                                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                                (120)
                              </span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                        </div>
                      </div>
                      <div className="d-grid">
                        <button type="button" className="btn btn-white btn-transition">Clear all</button>
                      </div>
                    </form>
                    {/* End Form */}
                  </div>
                </div>
                {/* End Navbar Collapse */}
              </div>
              {/* End Navbar */}
            </div>
            {/* End Col */}
            <div className="col-lg-9">
              <div className="row align-items-center mb-5">
                <div className="col-sm mb-3 mb-sm-0">
                  <h6 className="mb-0">110 products</h6>
                </div>
                <div className="col-sm-auto">
                  <div className="d-sm-flex justify-content-sm-end align-items-center">
                    {/* Select */}
                    <div className="mb-2 mb-sm-0 me-sm-2">
                      <select className="form-select form-select-sm">
                        <option value="Relevance" selected>Relevance</option>
                        <option value="mostRecent">Most recent</option>
                      </select>
                    </div>
                    {/* End Select */}
                    {/* Select */}
                    <div className="mb-2 mb-sm-0 me-sm-2">
                      <select className="form-select form-select-sm">
                        <option value="alphabeticalOrderSelect1" selected>A-to-Z</option>
                        <option value="alphabeticalOrderSelect2">Z-to-A</option>
                      </select>
                    </div>
                    {/* End Select */}
                    {/* Nav */}
                    <ul className="nav nav-segment">
                      <li className="nav-item">
                        <a className="nav-link active" href="products-grid.html">
                          <i className="bi-grid-fill" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="products-list.html">
                          <i className="bi-list" />
                        </a>
                      </li>
                    </ul>
                    {/* End Nav */}
                  </div>
                </div>
              </div>
              {/* End Row */}
              <div className="row row-cols-sm-2 row-cols-md-3 mb-10">
                {
                  [1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                    <Product />
                  ))
                }
              </div>
              {/* End Row */}
              {/* Pagination */}
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="products-grid.html#" aria-label="Previous">
                      <span aria-hidden="true">
                        <i className="bi-chevron-double-left small" />
                      </span>
                    </a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="products-grid.html#">1</a></li>
                  <li className="page-item"><a className="page-link" href="products-grid.html#">2</a></li>
                  <li className="page-item"><a className="page-link" href="products-grid.html#">3</a></li>
                  <li className="page-item disabled"><a className="page-link" href="products-grid.html#">...</a></li>
                  <li className="page-item"><a className="page-link" href="products-grid.html#">5</a></li>
                  <li className="page-item">
                    <a className="page-link" href="products-grid.html#" aria-label="Next">
                      <span aria-hidden="true">
                        <i className="bi-chevron-double-right small" />
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* End Pagination */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Card Grid */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
    </Layout>
  )
}