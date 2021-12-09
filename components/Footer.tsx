
export default function Footer() {
  return (
    <footer className="border-top">
      <div className="container">
        <div className="row justify-content-lg-between content-space-t-2 content-space-b-lg-2">
          <div className="col-lg-3 mb-5">
            <div className="d-flex align-items-start flex-column h-100">
              {/* Logo */}
              <a className="w-100 mb-3 mb-lg-auto" href="index.html" aria-label="Front">
                <img className="brand" src="/assets/svg/logos/logo.svg" alt="Logo" />
              </a>
              {/* End Logo */}
              <p className="text-muted small mb-0">© Front. 2021 Htmlstream.</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 ms-lg-auto mb-5 mb-lg-0">
            <h5>Account</h5>
            {/* List */}
            <ul className="list-unstyled list-py-1">
              <li><a className="link-sm text-secondary" href="index.html#">Placing an order</a></li>
              <li><a className="link-sm text-secondary" href="index.html#">Shipping options</a></li>
              <li><a className="link-sm text-secondary" href="index.html#">Tracking a package</a></li>
              <li><a className="link-sm text-secondary" href="index.html#">Country availability</a></li>
            </ul>
            {/* End List */}
          </div>
          {/* End Col */}
          <div className="col-6 col-md-4 col-lg-3 mb-5 mb-lg-0">
            <h5>Company</h5>
            {/* List */}
            <ul className="list-unstyled list-py-1">
              <li><a className="link-sm text-secondary" href="index.html#">Financing</a></li>
              <li><a className="link-sm text-secondary" href="index.html#">Recycling</a></li>
              <li><a className="link-sm text-secondary" href="index.html#">Return policy</a></li>
            </ul>
            {/* End List */}
          </div>
          {/* End Col */}
          <div className="col-md-4 col-lg-2 mb-5 mb-lg-0">
            <h5 className="mb-3">Resources</h5>
            {/* List */}
            <ul className="list-unstyled list-py-1">
              <li><a className="link-sm link-secondary" href="index.html#"><i className="bi-question-circle-fill me-1" />
                Help</a></li>
              <li><a className="link-sm link-secondary" href="index.html#"><i className="bi-person-circle me-1" /> Your
                Account</a></li>
            </ul>
            {/* End List */}
            {/* Button Group */}
            <div className="btn-group">
              <button type="button" className="btn btn-white btn-sm dropdown-toggle" id="footerSelectLanguage" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                <span className="d-flex align-items-center">
                  <img className="avatar avatar-xss avatar-circle me-2" src="../assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Image description" width={16} />
                  <span>English (US)</span>
                </span>
              </button>
              <div className="dropdown-menu" aria-labelledby="footerSelectLanguage">
                <a className="dropdown-item d-flex align-items-center active" href="index.html#">
                  <img className="avatar avatar-xss avatar-circle me-2" src="../assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Image description" width={16} />
                  <span>English</span>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="index.html#">
                  <img className="avatar avatar-xss avatar-circle me-2" src="../assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Image description" width={16} />
                  <span>Deutsch</span>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="index.html#">
                  <img className="avatar avatar-xss avatar-circle me-2" src="../assets/vendor/flag-icon-css/flags/1x1/es.svg" alt="Image description" width={16} />
                  <span>Español</span>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="index.html#">
                  <img className="avatar avatar-xss avatar-circle me-2" src="../assets/vendor/flag-icon-css/flags/1x1/cn.svg" alt="Image description" width={16} />
                  <span>中文 (繁體)</span>
                </a>
              </div>
            </div>
            {/* End Button Group */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
        <hr className="my-0" />
        <div className="row align-items-sm-center content-space-1">
          <div className="col-sm mb-4 mb-sm-0">
            {/*Socials*/}
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-soft-secondary btn-xs btn-icon" href="index.html#">
                  <i className="bi-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-soft-secondary btn-xs btn-icon" href="index.html#">
                  <i className="bi-google" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-soft-secondary btn-xs btn-icon" href="index.html#">
                  <i className="bi-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-soft-secondary btn-xs btn-icon" href="index.html#">
                  <i className="bi-github" />
                </a>
              </li>
            </ul>
            {/*End Socials*/}
          </div>
          <div className="col-sm-auto">
            {/*List*/}
            <ul className="list-inline list-separator">
              <li className="list-inline-item">
                <a className="link-sm link-secondary" href="../page-privacy.html">Privacy &amp; policy</a>
              </li>
              <li className="list-inline-item">
                <a className="link-sm link-secondary" href="../page-terms.html">Terms &amp; conditions</a>
              </li>
              <li className="list-inline-item">
                <a className="link-sm link-secondary" href="../page-careers.html">Careers</a>
              </li>
            </ul>
            {/*End List*/}
          </div>
        </div>
      </div>
    </footer>

  )
}