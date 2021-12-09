import Layout from "components/Layout";
import dynamic from "next/dynamic";
// import { SliderProduct } from "components/Sliders";
import Image from "next/image";

const SliderProduct = dynamic(() => import('../../components/SliderProduct'), { ssr: false });

export default function KatalogDetail() {
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
        {/* Hero */}
        <div className="container content-space-t-1 content-space-t-sm-1">
          <div className="row">
            <div className="col-md-7 mb-7 mb-md-0">
              <div className="pe-md-4">
                <div className="card-pinned">
                  <div style={{ position: 'relative', height: 600 }}>
                    <Image src="/assets/img/600x600/img2.jpg" layout="fill" />
                  </div>
                </div>
              </div>
            </div>
            {/* End Col */}
            <div className="col-md-5">
              {/* Rating */}
              <a className="d-flex gap-1 mb-4" href="product-overview.html#reviewSection">
                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                <span className="ms-1">287 reviews</span>
              </a>
              {/* End Rating */}
              {/* Heading */}
              <div className="mb-5">
                <h1 className="h2">New Era 9Forty LA Dodgers adjustable cap in black</h1>
                <p>American label New Era manufacturing baseball hats for teams since the 1930s.</p>
              </div>
              {/* End Heading */}
              {/* Price */}
              <div className="mb-5">
                <span className="d-block mb-2">Total price:</span>
                <div className="d-flex align-items-center">
                  <h3 className="mb-0">$159.99</h3>
                  <span className="ms-2"><del>$179.99</del></span>
                </div>
              </div>
              {/* End Price */}
              {/* Quantity */}
              <div className="quantity-counter mb-3">
                <div className="js-quantity-counter row align-items-center">
                  <div className="col">
                    <span className="d-block small">Select quantity</span>
                    <input className="js-result form-control form-control-quantity-counter" type="text" defaultValue={1} />
                  </div>
                  {/* End Col */}
                  <div className="col-auto">
                    <a className="js-minus btn btn-outline-secondary btn-xs btn-icon rounded-circle" href="/">
                      <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="currentColor" />
                      </svg>
                    </a>
                    <a className="js-plus btn btn-outline-secondary btn-xs btn-icon rounded-circle" href="/">
                      <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="currentColor" />
                      </svg>
                    </a>
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
              </div>
              {/* End Quantity */}
              {/* Accordion */}
              <div className="accordion mb-5" id="shopCartAccordion">
                {/* Collapse */}
                <div className="accordion-item">
                  <a className="accordion-button collapsed" href="product-overview.html#" role="button" data-bs-toggle="collapse" data-bs-target="#shopCartAccordionCollapseOne" aria-expanded="false" aria-controls="shopCartAccordionCollapseOne">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <span className="svg-icon svg-icon-sm text-primary">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 8H16C15.4 8 15 8.4 15 9V16H10V17C10 17.6 10.4 18 11 18H16C16 16.9 16.9 16 18 16C19.1 16 20 16.9 20 18H21C21.6 18 22 17.6 22 17V13L20 8Z" fill="#035A4B" />
                            <path opacity="0.3" d="M20 18C20 19.1 19.1 20 18 20C16.9 20 16 19.1 16 18C16 16.9 16.9 16 18 16C19.1 16 20 16.9 20 18ZM15 4C15 3.4 14.6 3 14 3H3C2.4 3 2 3.4 2 4V13C2 13.6 2.4 14 3 14H15V4ZM6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16Z" fill="#035A4B" />
                          </svg>
                        </span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        Free shipping
                      </div>
                    </div>
                  </a>
                  <div id="shopCartAccordionCollapseOne" className="accordion-collapse collapse" data-bs-parent="#shopCartAccordion">
                    <div className="accordion-body">
                      <p className="mb-0">We offer free shipping anywhere in the U.S. A skilled delivery team will bring the boxes into your office.</p>
                    </div>
                  </div>
                </div>
                {/* End Collapse */}
                {/* Collapse */}
                <div className="accordion-item">
                  <a className="accordion-button collapsed" href="product-overview.html#" role="button" data-bs-toggle="collapse" data-bs-target="#shopCartAccordionCollapseTwo" aria-expanded="false" aria-controls="shopCartAccordionCollapseTwo">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <span className="svg-icon svg-icon-sm text-primary">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.3" x={3} y={3} width={18} height={18} rx={9} fill="#035A4B" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.42647 12H7.23529C7.23529 14.6315 9.36852 16.7647 12 16.7647C14.6315 16.7647 16.7647 14.6315 16.7647 12C16.7647 9.36853 14.6315 7.23529 12 7.23529C10.8231 7.23529 9.71618 7.66521 8.8607 8.4153L8.70962 8.30952C8.37305 8.07385 7.91166 8.3222 7.92302 8.73291L7.96298 10.178C7.97224 10.5127 8.30136 10.7439 8.61932 10.639L9.99538 10.1855C10.3863 10.0566 10.4628 9.53709 10.1256 9.30103L9.8755 9.12587C10.4798 8.6783 11.2189 8.42647 12 8.42647C13.9736 8.42647 15.5735 10.0264 15.5735 12C15.5735 13.9736 13.9736 15.5735 12 15.5735C10.0264 15.5735 8.42647 13.9736 8.42647 12Z" fill="#035A4B" />
                          </svg>
                        </span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        30 Days return
                      </div>
                    </div>
                  </a>
                  <div id="shopCartAccordionCollapseTwo" className="accordion-collapse collapse" data-bs-parent="#shopCartAccordion">
                    <div className="accordion-body">
                      <p className="mb-0">If you're not satisfied, return it for a full refund. We'll take care of disassembly and return shipping.</p>
                    </div>
                  </div>
                </div>
                {/* End Collapse */}
              </div>
              {/* End Accordion */}
              <div className="d-grid mb-4">
                <button type="button" className="btn btn-primary btntransition">Add to cart</button>
              </div>
              {/* Media */}
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="svg-icon svg-icon-sm text-primary">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M22.1671 18.1421C22.4827 18.4577 23.0222 18.2331 23.0206 17.7868L23.0039 13.1053V5.52632C23.0039 4.13107 21.8729 3 20.4776 3H8.68815C7.2929 3 6.16183 4.13107 6.16183 5.52632V9H13C14.6568 9 16 10.3431 16 12V15.6316H19.6565L22.1671 18.1421Z" fill="#035A4B" />
                      <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M1.98508 18V13C1.98508 11.8954 2.88051 11 3.98508 11H11.9851C13.0896 11 13.9851 11.8954 13.9851 13V18C13.9851 19.1046 13.0896 20 11.9851 20H4.10081L2.85695 21.1905C2.53895 21.4949 2.01123 21.2695 2.01123 20.8293V18.3243C1.99402 18.2187 1.98508 18.1104 1.98508 18ZM5.99999 14.5C5.99999 14.2239 6.22385 14 6.49999 14H11.5C11.7761 14 12 14.2239 12 14.5C12 14.7761 11.7761 15 11.5 15H6.49999C6.22385 15 5.99999 14.7761 5.99999 14.5ZM9.49999 16C9.22385 16 8.99999 16.2239 8.99999 16.5C8.99999 16.7761 9.22385 17 9.49999 17H11.5C11.7761 17 12 16.7761 12 16.5C12 16.2239 11.7761 16 11.5 16H9.49999Z" fill="#035A4B" />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow-1 ms-2">
                  <span className="small me-1">Need Help?</span>
                  <a className="link small" href="product-overview.html#">Chat now</a>
                </div>
              </div>
              {/* End Media */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Hero */}
        {/* Content */}
        <div className="container content-space-t-2 content-space-md-3">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <div className="pe-lg-4">
                <h3>Details</h3>
                <p>As popular off field as they are on, New Era caps are standard issue amongst those with a passion for street culture, blending progressive styles with carefully crafted design. Known for their innovative use of colour, bold designs are added season upon season, referencing everything.</p>
              </div>
            </div>
            {/* End Col */}
            <div className="col-md-6 mb-5 mb-md-0">
              <h3>Material and care</h3>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="list-py-2 mb-0">
                    <li>Main: 100% Cotton</li>
                    <li>Soft twill</li>
                    <li>Ribbed, diagonal pattern</li>
                    <li>Slightly structured</li>
                  </ul>
                </div>
                {/* End Col */}
                <div className="col-sm-6">
                  <ul className="list-py-2 mb-0">
                    <li>One size fits all</li>
                    <li>Imported</li>
                    <li>Product color: Dark greenish</li>
                    <li>Product code: #1465791</li>
                  </ul>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Content */}
        {/* Review Section */}
        <div id="reviewSection" className="container content-space-b-1 content-space-b-lg-1">
          <div className="row">
            <div className="col-md-4 mb-7 mb-md-0">
              <div className="border-bottom pb-4 mb-4">
                {/* Card */}
                <div className="card bg-primary mb-3">
                  <div className="card-body">
                    {/* Media */}
                    <div className="d-flex justify-content-center">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <span className="display-4 text-white">4.7</span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          {/* Rating */}
                          <div className="d-flex gap-1 small">
                            <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                            <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                            <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                            <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                            <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                          </div>
                          {/* End Rating */}
                          <span className="text-white">287 reviews</span>
                        </div>
                      </div>
                    </div>
                    {/* End Media */}
                  </div>
                </div>
                {/* End Card */}
                <h3>Rating breakdown</h3>
                {/* Ratings */}
                <div className="d-grid gap-1">
                  <a className="row align-items-center" href="product-overview.html#" style={{maxWidth: '25rem'}}>
                    <div className="col-3">
                      <span className="text-dark">5 stars</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-2 text-end">
                      <span>205</span>
                    </div>
                    {/* End Col */}
                  </a>
                  {/* End Row */}
                  <a className="row align-items-center" href="product-overview.html#" style={{maxWidth: '25rem'}}>
                    <div className="col-3">
                      <span className="text-dark">4 stars</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '53%'}} aria-valuenow={53} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-2 text-end">
                      <span>55</span>
                    </div>
                    {/* End Col */}
                  </a>
                  {/* End Row */}
                  <a className="row align-items-center" href="product-overview.html#" style={{maxWidth: '25rem'}}>
                    <div className="col-3">
                      <span className="text-dark">3 stars</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-2 text-end">
                      <span>23</span>
                    </div>
                    {/* End Col */}
                  </a>
                  {/* End Row */}
                  <a className="row align-items-center" href="product-overview.html#" style={{maxWidth: '25rem'}}>
                    <div className="col-3">
                      <span className="text-dark">2 stars</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-2 text-end">
                      <span>0</span>
                    </div>
                    {/* End Col */}
                  </a>
                  {/* End Row */}
                  <a className="row align-items-center" href="product-overview.html#" style={{maxWidth: '25rem'}}>
                    <div className="col-3">
                      <span className="text-dark">1 stars</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '1%'}} aria-valuenow={1} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-2 text-end">
                      <span>4</span>
                    </div>
                    {/* End Col */}
                  </a>
                  {/* End Row */}
                </div>
                {/* End Ratings */}
              </div>
              <h4 className="display-4 text-primary">77%</h4>
              <p className="small">of customers recommend this product</p>
            </div>
            {/* End Col */}
            <div className="col-md-8">
              <div className="ps-md-4">
                {/* Heading */}
                <div className="border-bottom pb-4 mb-4">
                  <div className="row align-items-center">
                    <div className="col-sm mb-2 mb-sm-0">
                      <h4 className="mb-0">Sort on</h4>
                    </div>
                    {/* End Col */}
                    <div className="col-sm-auto">
                      {/* Select */}
                      <select className="form-select form-select-sm">
                        <option value="mostRecent" selected>Most recent</option>
                        <option value="relevant">Relevant</option>
                        <option value="helpful">Helpful</option>
                        <option value="newest">Newest</option>
                      </select>
                      {/* End Select */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                {/* End Heading */}
                {/* Comment */}
                <ul className="list-comment list-comment-divider mb-5">
                  {/* Item */}
                  <li className="list-comment-item">
                    <div className="d-flex gap-1 mb-3">
                      <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                      <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                      <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                      <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                      <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                    </div>
                    {/* Media */}
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0">
                        <img className="avatar avatar-sm avatar-circle" src="https://htmlstream.com/front/assets/img/160x160/img9.jpg" alt="Image Description" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="mb-0">Christina Kray</h5>
                          <span className="d-block small text-muted">April 3, 2019</span>
                        </div>
                      </div>
                    </div>
                    {/* End Media */}
                    <div className="mb-5">
                      <p>I bought this hat for my boyfriend, but then i found out he cheated on me so I kept it and I love it!! I wear it all the time and there is no problem with the fit even though its a “mens” hat.</p>
                    </div>
                    <div className="mb-2">
                      <span className="text-dark fw-semi-bold">Christina</span>
                      <span>- Verified Purchase</span>
                    </div>
                    {/* Media */}
                    <div className="d-flex align-items-center">
                      <span className="small me-2">Was this helpful?</span>
                      <div className="d-flex gap-2">
                        <a className="btn btn-white btn-xs" href="/">
                          <i className="bi-hand-thumbs-up me-1" /> Yes <span>(45)</span>
                        </a>
                        <a className="btn btn-white btn-xs" href="/">
                          <i className="bi-hand-thumbs-down me-1" /> No <span>(21)</span>
                        </a>
                      </div>
                    </div>
                    {/* End Media */}
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="list-comment-item">
                    <div className="d-flex gap-1 mb-3">
                      <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                      <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                      <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                      <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                      <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                    </div>
                    {/* Media */}
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0">
                        <img className="avatar avatar-sm avatar-circle" src="https://htmlstream.com/front/assets/img/160x160/img1.jpg" alt="Image Description" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="mb-0">Hailey</h5>
                          <span className="d-block small text-muted">January 19, 2019</span>
                        </div>
                      </div>
                    </div>
                    {/* End Media */}
                    <div className="mb-5">
                      <p>Material is great and the hat is comfortable and stylish.</p>
                    </div>
                    <div className="mb-2">
                      <span className="text-dark fw-semi-bold">Hailey</span>
                      <span>- Verified Purchase</span>
                    </div>
                    {/* Media */}
                    <div className="d-flex align-items-center">
                      <span className="small me-2">Was this helpful?</span>
                      <div className="d-flex gap-2">
                        <a className="btn btn-white btn-xs" href="/">
                          <i className="bi-hand-thumbs-up me-1" /> Yes <span>(2)</span>
                        </a>
                        <a className="btn btn-white btn-xs" href="/">
                          <i className="bi-hand-thumbs-down me-1" /> No <span>(0)</span>
                        </a>
                      </div>
                    </div>
                    {/* End Media */}
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="list-comment-item">
                    <div className="d-flex gap-1 mb-3">
                      <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                      <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                      <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                      <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                      <img src="/assets/svg/illustrations/star.svg" alt="Review rating" style={{width: 16}} />
                    </div>
                    {/* Media */}
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0">
                        <img className="avatar avatar-sm avatar-circle" src="https://htmlstream.com/front/assets/img/160x160/img8.jpg" alt="Image Description" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="mb-0">Chrizelle</h5>
                          <span className="d-block small text-muted">December 21, 2018</span>
                        </div>
                      </div>
                    </div>
                    {/* End Media */}
                    <div className="mb-5">
                      <p>A really well built cap. It looks great and wears just as well. A great staple in ball caps.</p>
                    </div>
                    <div className="mb-2">
                      <span className="text-dark fw-semi-bold">Chrizelle</span>
                      <span>- Verified Purchase</span>
                    </div>
                    {/* Media */}
                    <div className="d-flex align-items-center">
                      <span className="small me-2">Was this helpful?</span>
                      <div className="d-flex gap-2">
                        <a className="btn btn-white btn-xs" href="/">
                          <i className="bi-hand-thumbs-up me-1" /> Yes <span>(0)</span>
                        </a>
                        <a className="btn btn-white btn-xs" href="/">
                          <i className="bi-hand-thumbs-down me-1" /> No <span>(0)</span>
                        </a>
                      </div>
                    </div>
                    {/* End Media */}
                  </li>
                  {/* End Item */}
                </ul>
                {/* End Comment */}
                <div className="d-sm-flex justify-content-sm-end gap-2">
                  <a className="btn btn-link" href="product-overview.html#">Read more <i className="bi-chevron-right small ms-1" /></a>
                  <button type="button" className="btn btn-primary btn-transition rounded-pill">Write a review</button>
                </div>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Review Section */}
        <div className="container content-space-1 bg-light">
          {/* Title */}
          <div className="mb-6 text-center">
            <h2>Related Product</h2>
          </div>
          {/* End Title */}
          <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mb-3">
            <SliderProduct />
          </div>
          {/* End Row */}
          <div className="text-center">
            <a className="btn btn-outline-primary btn-transition rounded-pill" href="#">View all products</a>
          </div>
        </div>
      </main>
      {/* ========== END MAIN CONTENT ========== */}

    </Layout>
  )
}