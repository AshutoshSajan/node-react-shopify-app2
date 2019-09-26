import React, { Component } from 'react';


const HomePage = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <article className="blog-card">
              <div className="blog-card__background">
                <div className="card__background--wrapper">
                  <div className="card__background--main" style={{ "backgroundImage": "url('http://demo.yolotheme.com/html/motor/images/demo/demo_131.jpg')"}}>
                    <div className="card__background--layer"></div>
                  </div>
                </div>
              </div>
              <div className="blog-card__head">
                <span className="date__box">
                  <span className="date__day">11</span>
                  <span className="date__month">JAN</span>
                </span>
              </div>
              <div className="blog-card__info">
                <h5>HARVICK GETS WHAT HE NEEDS, JOHNSON AMONG THOSE</h5>
                <p>
                  <a href="#" className="icon-link mr-3"><i className="fa fa-pencil-square-o"></i> Tony Jahson</a>
                  <a href="#" className="icon-link"><i className="fa fa-comments-o"></i> 150</a>
                </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vero libero voluptatibus earum? Alias dignissimos quo cum, nulla esse facere atque, blanditiis doloribus at sunt quas, repellendus vel? Et, hic!</p>
                <a href="#" className="btn btn--with-icon"><i className="btn-icon fa fa-long-arrow-right"></i>READ MORE</a>
              </div>
            </article>
          </div>
        </div>
      </div>

      <section className="detail-page">
        <div className="container mt-5">
          
        </div>
      </section>
    </div>
  );
}

export default HomePage;
