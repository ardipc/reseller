import Layout from "components/Layout";
import dynamic from "next/dynamic";
// import { SliderProduct } from "components/Sliders";
import Image from "next/image";

const SliderProduct = dynamic(() => import('../components/SliderProduct'), { ssr: false });

export default function Article() {
  return (
    <Layout>
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role="main">
        <div className="bg-light">
          <div className="container py-4 w-lg-65 mx-lg-auto">
            <div className="row">
              <div className="col-sm">
                <h4 className="mb-0">Article</h4>
              </div>
              {/* End Col */}
              <div className="col-sm-auto">
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="../demo-shop/index.html">Shop</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="../demo-shop/products-grid.html">Products</a>
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

        {/* Article Description */}
        <div className="container content-space-b-1" style={{marginTop: '1rem'}}>
          <div className="w-lg-65 mx-lg-auto">
            <div className="mb-4">
              <h1 className="h2">Apa Sih Jerawat Itu ?</h1>
            </div>
            <div className="row align-items-sm-center mb-5">
              <div className="col-sm-7 mb-4 mb-sm-0">
                {/* Media */}
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img className="avatar avatar-circle" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-0">
                      <a className="text-dark" href="./blog-author-profile.html">Christina Kray</a>
                    </h5>
                    <span className="d-block small">1 day ago</span>
                  </div>
                </div>
                {/* End Media */}
              </div>
              {/* End Col */}
              <div className="col-sm-5">
                <div className="d-flex justify-content-sm-end align-items-center">
                  <span className="text-cap mb-0 me-2">Share:</span>
                  <div className="d-flex gap-2">
                    <a className="btn btn-soft-secondary btn-sm btn-icon rounded-circle" href="#">
                      <i className="bi-facebook" />
                    </a>
                    <a className="btn btn-soft-secondary btn-sm btn-icon rounded-circle" href="#">
                      <i className="bi-twitter" />
                    </a>
                    <a className="btn btn-soft-secondary btn-sm btn-icon rounded-circle" href="#">
                      <i className="bi-instagram" />
                    </a>
                    <a className="btn btn-soft-secondary btn-sm btn-icon rounded-circle" href="#">
                      <i className="bi-telegram" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Col */}
            </div>
            <p>Jerawat terjadi ketika folikel rambut atau tempat tumbuhnya rambut tersumbat oleh minyak dan sel kulit mati. Hal tersebut menyebabkan peradangan serta penyumbatan pada pori-pori kulit. Peradangan ini ditandai dengan munculnya benjolan kecil yang terkadang berisi nanah di atas kulit.</p>
            <div style={{position: 'relative', height: 400}} className="mb-3">
              <Image src="/assets/img/jerawat.jpg" layout="fill" />
            </div>
            <p>Jerawat adalah masalah kulit yang terjadi ketika folikel rambut atau tempat tumbuhnya rambut tersumbat oleh minyak dan sel kulit mati. Jerawat ditandai dengan munculnya bintik-bintik di beberapa bagian tubuh, seperti wajah, leher, punggung, dan dada.</p>
            <p>Jerawat dapat dialami oleh siapa saja, tetapi umumnya muncul pada masa pubertas, yaitu usia 10–13 tahun. Pada remaja laki-laki atau yang memiliki kulit berminyak, jerawat yang timbul cenderung lebih parah.</p>
            
            <h3>Penyebab Jerawat</h3>
            <p>Jerawat disebabkan oleh penyumbatan pada pori-pori kulit. Penyumbatan ini dapat terjadi akibat produksi sebum berlebih oleh kelenjar minyak, penumpukan kulit mati, atau penumpukan bakteri.</p>
            <p>Di setiap pori-pori kulit, terdapat folikel yang terdiri dari kelenjar minyak dan rambut. Folikel di pori-pori kulit yang tersumbat bisa membengkak dan membentuk komedo putih atau komedo hitam. Jika terkontaminasi oleh bakteri, komedo dapat meradang dan menjadi jerawat dalam bentuk pustula, papula, nodul, atau bahkan kista.</p>

            <h3>Cara Mengobati dan Mencegah Jerawat</h3>
            <p>Pengobatan jerawat disesuaikan dengan tingkat keparahan kondisinya. Metode yang digunakan bisa dengan pemberian obat oles, obat minum, atau terapi hormon. Bisa juga dengan prosedur chemical peels, terapi laser dan ekstraksi komedo.</p>
            <p>Meski sulit untuk dicegah, risiko munculnya jerawat dapat dikurangi dengan menjaga kebersihan wajah dan tubuh, menerapkan pola makan yang sehat, dan mengelola stres dengan baik.</p>
          </div>
          
          <div className="w-lg-65 mx-lg-auto">
            <p>Small teams and individual designers need a space where they can watch the design process unfold, both for themselves and for the people they work with – no matter if it's a fellow designer, product manager, developer or client. Front allows you to invite more people into the process, creating a central place for conversation around design. As those teams grow, transparency and collaboration becomes integrated in how they communicate and work together.</p>
            {/* Card */}
            <div className="card bg-dark text-center my-4" style={{backgroundImage: 'url(./assets/svg/components/wave-pattern-light.svg)'}}>
              <div className="card-body">
                <h4 className="text-white mb-4">Like what you're reading? Subscribe to our top stories.</h4>
                <div className="w-lg-75 mx-lg-auto">
                  <form>
                    {/* Input Card */}
                    <div className="input-card input-card-sm border">
                      <div className="input-card-form">
                        <label htmlFor="subscribeForm" className="form-label visually-hidden">Enter email</label>
                        <input type="text" className="form-control" id="subscribeForm" placeholder="Enter email" aria-label="Enter email" />
                      </div>
                      <button type="button" className="btn btn-primary">Subscribe</button>
                    </div>
                    {/* End Input Card */}
                  </form>
                </div>
              </div>
            </div>
            {/* End Card */}
            <p>We will continue to update <a className="link" href="#">Front</a>; if you have any questions or suggestions, please contact us!</p>
            <p>Follow us on <a className="link" href="#">Medium</a>, <a className="link" href="#">Twitter</a>, <a className="link" href="#">Facebook</a>, <a className="link" href="#">YouTube</a>, and <a className="link" href="#">Dribbble</a>.</p>
            {/* Badges */}
            <div className="mt-5">
              <a className="btn btn-soft-secondary btn-xs m-1" href="#">Ecommerce</a>
              <a className="btn btn-soft-secondary btn-xs m-1" href="#">Website</a>
              <a className="btn btn-soft-secondary btn-xs m-1" href="#">Bootstrap</a>
              <a className="btn btn-soft-secondary btn-xs m-1" href="#">Startup</a>
              <a className="btn btn-soft-secondary btn-xs m-1" href="#">Free</a>
            </div>
            {/* End Badges */}
            <div className="row justify-content-sm-between align-items-sm-center mt-5">
              <div className="col-sm mb-2 mb-sm-0">
                <div className="d-flex align-items-center">
                  <span className="text-cap mb-0 me-2">Share:</span>
                  <a className="btn btn-ghost-secondary btn-sm btn-icon rounded-circle me-2" href="#">
                    <i className="bi-facebook" />
                  </a>
                  <a className="btn btn-ghost-secondary btn-sm btn-icon rounded-circle me-2" href="#">
                    <i className="bi-twitter" />
                  </a>
                  <a className="btn btn-ghost-secondary btn-sm btn-icon rounded-circle me-2" href="#">
                    <i className="bi-instagram" />
                  </a>
                  <a className="btn btn-ghost-secondary btn-sm btn-icon rounded-circle me-2" href="#">
                    <i className="bi-telegram" />
                  </a>
                </div>
              </div>
              {/* End Col */}
              <div className="col-sm-auto">
                <a className="btn btn-soft-secondary btn-sm btn-icon rounded-circle me-2" href="#" data-toggle="tooltip" data-placement="top" title="Bookmark story">
                  <i className="bi-bookmark" />
                </a>
                <a className="btn btn-soft-secondary btn-sm btn-icon rounded-circle" href="#" data-toggle="tooltip" data-placement="top" title="Report story">
                  <i className="bi-flag" />
                </a>
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
        </div>
        {/* End Article Description */}
        {/* User Profile */}
        <div className="container mb-4">
          <div className="row justify-content-lg-center">
            <div className="col-lg-8">
              <div className="mb-5">
                <h4>About the author</h4>
              </div>
              {/* Media */}
              <div className="d-sm-flex">
                <div className="flex-shrink-0 mb-3 mb-sm-0">
                  <img className="avatar avatar-xl avatar-circle" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                </div>
                <div className="flex-grow-1 ms-sm-4">
                  {/* Media */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="mb-0">
                      <a className="text-dark" href="./blog-author-profile.html">Christina Kray</a>
                    </h3>
                    <button type="button" className="btn btn-outline-primary btn-sm">
                      <i className="bi-person-plus-fill me-1" /> Follow
                    </button>
                  </div>
                  {/* End Media */}
                  <p>Christina started his recruitment career on the agency side. Since then, she’s built a career helping customers get the most out of HR technology. She’s currently a Customer Success Specialist at Space and spends her time speaking to in-house recruiters all over the world - helping them solve their recruitment challenges, and get the most out of our talent acquisition software.</p>
                </div>
              </div>
              {/* End Media */}
            </div>
          </div>
        </div>
        {/* End User Profile */}
        
        {/* Card Grid */}
        <div className="container">
          <div className="w-lg-75 border-top content-space-2 mx-lg-auto">
            {/* Heading */}
            <div className="mb-3 mb-sm-5">
              <h2>Solusi Kami</h2>
            </div>
            {/* End Heading */}
            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mb-3">
              <SliderProduct />
            </div>
            {/* End Row */}
          </div>
        </div>
        {/* End Card Grid */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
    </Layout>
  )
}