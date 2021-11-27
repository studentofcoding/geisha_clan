

const Carousel = () => {
  return (
    <div>

      <div className="carousel h-1/2 carousel-center rounded-box">
        <div className="carousel-item">
          <img style={{height: "100%"}} alt="gallery" src="./001.png" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img style={{height: "100%"}} alt="gallery" src="./002.png" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img style={{height: "100%"}} alt="gallery" src="./003.png" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img style={{height: "100%"}} alt="gallery" src="./004.png" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img style={{height: "100%"}} alt="gallery" src="./005.png" className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img style={{height: "100%"}} alt="gallery" src="./006.png" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img style={{height: "100%"}} alt="gallery" src="./007.png" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img style={{height: "100%"}} alt="gallery" src="./008.png" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img style={{height: "100%"}} alt="gallery" src="./009.png" className="rounded-box" />
        </div>
      </div>
      <p className="content text-center mt-3">
      The Geisha Clan is a 2,222 collection of hand-drawn characters and unique traits, generatively assembled by the Clan.
      </p>
    </div>

  )
}

export default Carousel;