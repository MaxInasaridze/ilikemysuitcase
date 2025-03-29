import React from 'react';

export default function Carusel() {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.guim.co.uk/img/media/02088fb2247b13df646907d47f552dc69a236bc7/0_93_3235_3304/master/3235.jpg?width=445&dpr=1&s=none&crop=none" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/034/041/988/small/funny-surprised-cat-with-a-questioning-pose-a-cute-kitten-asks-in-surprise-where-the-treats-are-generated-ai-photo.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://media.gettyimages.com/id/1405951139/photo/cat-wearing-summer-clothing.jpg?s=612x612&w=gi&k=20&c=3VZXazStCG1Mlx-Ph7MfSeYvhMdiBFS3uotApUlPVCQ=" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}