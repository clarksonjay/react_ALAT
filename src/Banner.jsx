

const Banner = ()=>{
  return(
    <div className='banner'>
      <div id="social-links">
        <div className='intro'>
          <h3>Talk to Us</h3>
          <p>We're happy to assist</p>
        </div>

        <div className="icon">
          <i className="fa-solid fa-envelope"></i>
          <a href="#">help&#64;alat.ng</a>

          <i className='bx bxs-phone-call'></i><span>070022552528</span>
        </div>

        <div className="social-links">
          <a href="">
            <i className='bx bxl-instagram'></i>
          </a>
          <a href="">
            <i className='bx bxl-facebook' ></i>
          </a>
          <a href="">
            <i className='bx bxl-twitter' ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner