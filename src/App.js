import './App.css';

function App() {
  return (
    <body>
      <div className=''>
        <video class="bg-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"><source src="assets/mp4/bg.mp4" type="video/mp4" /></video>
        {/* <!-- Masthead--> */}
        <div className="masthead vh-100 d-flex align-items-center justify-content-center">
        <div className="masthead-content text-white text-center">
          <div className="container-fluid px-4 px-lg-0">
            <h1 className="fst-italic lh-1 mb-4">We Are Coming Soon...</h1>
            <p className="mb-5">
              We are a talented women-led creative start-up ready to channelize your business
              goals through advanced tools and techniques. Collaborate with us to get the best
              digital marketing & IT services. We are launching our new venture on 25 October
              2024. Let's meet in Kochi to begin the business journey!
            </p>
          </div>
        </div>
      </div>
        {/* <!-- Social Icons-->
        <!-- For more icon options, visit https://fontawesome.com/icons?d=gallery&p=2&s=brands--> */}
        <div class="social-icons">
            <div class="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
                <a class="btn btn-dark m-3" href="https://wa.me/9074429360"><i class="fa-brands fa-whatsapp"></i></a>
                <a class="btn btn-dark m-3" href="https://www.instagram.com/tree_information_technology?igsh=bGwzamN5ZHNqb2ls"><i class="fab fa-instagram"></i></a>
                <a class="btn btn-dark m-3" href="https://www.facebook.com/treeinformationtechnologycompany?mibextid=8HI2vyzhxhZ0rFJs"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-dark m-3" href="mailto:tree_india@icloud.com"><i class="fa-solid fa-envelope"></i></a>
            </div>
        </div>
 
    </div>
    </body>
  );
}

export default App;
