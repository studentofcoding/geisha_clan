

const Carousel = () => {
  return (
    <div>

      <div className="carousel h-1/2 carousel-center rounded-box">
        <div className="carousel-item">
          <img style={{height: "100%"}} alt="gallery" src="./1.jpeg" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img style={{height: "100%"}} alt="gallery" src="./2.jpeg" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img style={{height: "100%"}} alt="gallery" src="./3.jpeg" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img style={{height: "100%"}} alt="gallery" src="./4.jpeg" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img style={{height: "100%"}} alt="gallery" src="./5.jpeg" className="rounded-box" />
        </div>
      </div>
      <p className="content text-center mt-3">
      The Geisha Clan is a 2,222 collection of hand-drawn characters and unique traits, generatively assembled by the Clan.
      </p>
    </div>

  )
}

export default Carousel;