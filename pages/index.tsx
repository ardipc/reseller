import Layout from "components/Layout";
// import { Sliders as SlidersCommon, SliderProduct } from "components/Sliders";
import dynamic from "next/dynamic";
import Link from "next/link";

const Sliders = dynamic(() => import('../components/Sliders'), { ssr: false });
const SliderProduct = dynamic(() => import('../components/SliderProduct'), { ssr: false });

export default function Home() {
  return (
    <Layout>
      <main id="content" role="main">
        <div className="container">
          <Sliders />
        </div>

        <div className="container">
          <div className="text-center m-3">
            <h1 className="mb-3">Apa Masalah Kulitmu ?</h1>
            {/* List Checked */}
            <ul className="list-inline list-checked list-checked-primary" style={{paddingRight: '14.5rem', paddingLeft: '14.5rem'}}>
              {
                ['Jerawat','Kulit Pucat','Kulit Berminyak', 'Kulit Bernoda','Strechmark','Kulit Kering','Penuaan Dini'].map((item, index) => (
                  <li key={`button-pengenalan-${index}`} className="list-inline-item my-2 mx-3">
                    <button type="button" className="btn btn-outline-primary btn-lg rounded-pill px-5">{item}</button>
                  </li>
                ))
              }
            </ul>
            {/* End List Checked */}
          </div>
        </div>

        <div className="container mt-5 p-5">
          <div className="row justify-content-lg-between align-items-md-center border">
            <div className="col-md-6 col-lg-5 content-space-1 content-space-md-2 p-8">
              <h2 className="mb-4">Apa Sih Jerawat Itu ?</h2>
              <p>Kondisi kulit yang terjadi ketika folikel rambut tersumbat minyak dan sel-sel kulit mati. Jerawat paling umum terjadi pada remaja dan dewasa muda. Gejala mulai dari komedo kepala hitam hingga jerawat nanah atau benjolan besar, kemerahan, dan lembut.</p>
              <a href="/article" className="btn btn-primary rounded-pill px-4">Jerawat</a>
            </div>
            <div className="col-md-6 p-8">
              <div className="bg-img-center h-100 rounded-2" style={{ backgroundImage: 'url(/assets/img/jerawat.jpg)', minHeight: '30rem' }} />
            </div>
          </div>
          
          <div className="content-space-t-1 content-space-t-lg-1"></div>
          
          <div className="row justify-content-lg-between align-items-md-center border">
            <div className="col-md-6 col-lg-5 order-md-2 content-space-1 content-space-md-2 p-8">
              <h2 className="mb-4">Apa Itu Kulit Kering ?</h2>
              <p>Kulit kering dapat disebabkan oleh hal-hal di luar penyakit. Contohnya meliputi lingkungan yang kering, sering mencuci tangan, hidrasi yang tidak memadai, berenang di kolam renang yang mengandung klorin, atau pekerjaan berat yang menggunakan tangan seperti mekanik atau bertani.</p>
              <a href="/article" className="btn btn-primary rounded-pill px-4">Kulit Kering</a>
            </div>
            <div className="col-md-6 order-md-1 p-8">
              <div className="bg-img-center h-100 rounded-2" style={{ backgroundImage: 'url(/assets/img/kulit-kering2.jpg)', minHeight: '30rem' }} />
            </div>
          </div>
          
          <div className="content-space-t-1 content-space-t-lg-1"></div>
          
          <div className="row justify-content-lg-between align-items-md-center border">
            <div className="col-md-6 col-lg-5 content-space-1 content-space-md-2 p-8">
              <h2 className="mb-4">Penuaan Dini ?</h2>
              <p>Penuaan kulit yang prosesnya jauh lebih cepat dari yang biasanya. Sering dijumpai orang-orang yang bisa dibilang masih muda tapi sudah terlihat tua karena timbulnya kerutan-kerutan di wajah.</p>
              <a href="/article" className="btn btn-primary rounded-pill px-4">Penuaan Dini</a>
            </div>
            <div className="col-md-6 p-8">
              <div className="bg-img-center h-100 rounded-2" style={{ backgroundImage: 'url(/assets/img/penuaan.jpg)', minHeight: '30rem' }} />
            </div>
          </div>
        </div>

        <div className="container content-space-1">
          {/* Title */}
          <div className="mb-6 text-center">
            <h2>Our Product</h2>
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
    </Layout>
  )
}