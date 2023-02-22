import Databiz from "../assets/images/client-databiz.svg";
import Audiophile from "../assets/images/client-audiophile.svg";
import Meet from "../assets/images/client-meet.svg";
import Maker from "../assets/images/client-maker.svg";
import IntroImgDesktop from "../assets/images/image-hero-desktop.png";
import IntroImgMobile from "../assets/images/image-hero-mobile.png";

import "../assets/styles/intro.css";

const Intro = () => {
  return (
    <>
      <div className="layout-main layout">
        <div className="intro">
          <div className="intro-img">
            <picture>
              <source media="(min-width: 1024px)" srcSet={IntroImgDesktop} />
              <img
                src={IntroImgMobile}
                alt="Guy with his laptop observing the beauty of React js"
                width={375}
                height={500}
              />
            </picture>
          </div>

          <div className="intro-body">
            <div className="intro-main">
              <h1 className="intro-title">
                Make <span className="lead">remote work</span>
              </h1>
              <p className="intro-text">
                Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch
                productivity soar.
              </p>
              <a className="btn" href="#">
                Learn more
              </a>
            </div>

            <div className="intro-company">
              <img src={Databiz} alt="databiz" />
              <img src={Audiophile} alt="Audiophile" />
              <img src={Meet} alt="Meet" />
              <img src={Maker} alt="Maker" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
