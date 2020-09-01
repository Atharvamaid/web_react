import React from "react";
import per_learn from "../Images/per_learn.svg";
import live_inter from "../Images/live_inter.svg";
import engg_ass from "../Images/engg_ass.svg";
import expert_teac from "../Images/expert_teac.svg";

const Features = () => {
  return (
    <div>
      <div>
        <section
          className="feature"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          <h1 className="main text-center">
            <b>
              <span className="main-title">Why</span>{" "}
              <span style={{ color: " #fa9917" }}>MissionED</span>{" "}
              <span className="main-title">Works?</span>
            </b>
          </h1>
          <br />
          <br />
          {/*Features*/}
          <div className="features ">
            <div className="container ">
              <div className="row ">
                <div
                  className="col-lg-3 center col-md-6 col-12 mt-3"
                  data-aos="flip-right"
                  data-aos-duration="1500"
                >
                  <div className="card text-center h-100 border-0 image-background">
                   <a href="/feature3"> <img
                      className="card-img-top img-fluid card01 mx-auto image-1 "
                      src={expert_teac}
                      alt=""
                    />
                    </a>
                    <div className="card-block">
                      <h4 className="card-title ct-1 card-one">
                        Expert Teachers
                      </h4>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div
                  className="col-lg-3 center col-md-6 col-12 mt-3 "
                  data-aos="flip-right"
                  data-aos-duration="1500"
                >
                  <div className="card text-center h-100 border-0 image-background">
                   <a href="/feature1"> <img
                      className="card-img-top img-fluid  card01 mx-auto image-2 "
                      src={engg_ass}
                      alt=""
                    />
                    </a>
                    <div className="card-block ">
                      <h4 className="card-title ct-1 card-two">
                        Engaging Assignments
                      </h4>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div
                  className="col-lg-3 center col-md-6 col-12 mt-3 "
                  data-aos="flip-right"
                  data-aos-duration="1500"
                >
                  <div className="card text-center h-100 border-0 image-background">
                    <a href="/feature4"><img
                      className="card-img-top img-fluid  card01 mx-auto image-3"
                      src={live_inter}
                      alt=""
                    />
                    </a>
                    <div className="card-block ">
                      <h4 className="card-title ct-1 card-three">
                        Live and Interactive
                      </h4>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div
                  className="col-lg-3 center col-md-6 col-12 mt-3 "
                  data-aos="flip-right"
                  data-aos-duration="1500"
                >
                  <div className="card text-center h-100 border-0 image-background">
                   <a href="/feature5"> <img
                      className="card-img-top img-fluid card01 mx-auto image-4 "
                      src={per_learn}
                      alt=""
                    /></a>
                    <div className="card-block ">
                      <h4 className="card-title ct-1 card-four">
                        Personalised <br></br>Learning
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="space" />
                <div className="col-lg-12 center col-md-6 col-12 mt-1 text-right explore-all">
                  <a href="/feature6" data-aos="zoom-in" data-aos-duration="1500">
                    <u>Explore more</u> <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
export default Features;