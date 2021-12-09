
export default function Product() {
  return (
    <div className="col mb-4">
      <div className="card card-bordered shadow-none text-center h-100">
        <div className="card-pinned">
          <img className="card-img-top" src="/assets/img/300x180/img3.jpg" alt="Image Description" />
          <div className="card-pinned-top-start">
            <span className="badge bg-danger rounded-pill">25%</span>
          </div>
          <div className="card-pinned-top-end">
            <button type="button" className="btn btn-outline-secondary btn-xs btn-icon rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Save for later">
              <i className="bi-heart" />
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="mb-1">
            <a className="link-sm link-secondary" href="#">Jerawat</a>
          </div>
          <a className="text-body" href="/katalog/herschel-backpack-in-dark-blue">Herschel backpack in dark blue</a>
          <p className="card-text text-dark mt-3">$56.99</p>
        </div>
        <div className="card-footer pt-0">
          {/* Rating */}
          <a className="d-inline-flex align-items-center mb-3" href="#">
            <div className="d-flex gap-1 me-2">
              <img src="/assets/svg/illustrations/star.svg" alt="Review" style={{ width: 16 }} />
              <img src="/assets/svg/illustrations/star.svg" alt="Review" style={{ width: 16 }} />
              <img src="/assets/svg/illustrations/star.svg" alt="Review" style={{ width: 16 }} />
              <img src="/assets/svg/illustrations/star.svg" alt="Review" style={{ width: 16 }} />
              <img src="/assets/svg/illustrations/star-muted.svg" alt="Review" style={{ width: 16 }} />
            </div>
          </a>
          <br />
          {/* End Rating */}
          <button type="button" className="btn btn-outline-primary btn-sm rounded-pill">Add to cart</button>
        </div>
      </div>
    </div>
  )
}