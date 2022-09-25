import CSS from "csstype";

const backgroundStyle: CSS.Properties = {
  background: `#0B0D17 no-repeat center`,
  backgroundSize: "cover",
  height: "max-content",
  width: "100%",
  position: "absolute",
};

const typography: CSS.Properties = {
  margin: "180px 0",
  display: "flex",
  justifyContent: "space-around",
  
};

const description: CSS.Properties = {
  color: "#D0D6F9",
  padding: "24px 0 0 0",
};

const pText: CSS.Properties = {
    maxWidth: "30%"
  };

const About = () => {
  return (
    <div style={backgroundStyle}>
      <div className="typography" style={typography}>
        <div className="typography_left">
          <div className="heading1">
            <p style={description}>Heading 1 - Bellefair Regular - 150px</p>
            <h1>Earth</h1>
          </div>
          <div className="heading2">
            <p style={description}>Heading 2 - Bellefair Regular - 100px</p>
            <h2>Venus</h2>
          </div>
          <div className="heading4">
            <p style={description}>Heading 3 - Bellefair Regular - 56px</p>
            <h3>Jupiter & Saturn</h3>
          </div>
          <div className="heading4">
            <p style={description}>Heading 4 - Bellefair Regular - 32px</p>
            <h4>Uranus, Neptune, & pluto</h4>
          </div>
          <div className="heading5">
            <p style={description}>
              Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space
            </p>
            <h5>So, you want to travel to space</h5>
          </div>
        </div>
        <div className="typography_right" style={pText}>
          <div className="sub_heading1">
            <p style={description}>Subheading 1 - Bellefair Regular - 28px</p>
            <h6>384,400 km</h6>
          </div>
          <div className="sub_heading2">
            <p style={description}>
              Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
              Space
            </p>
            <p className="sHeading2">AVG. Distance</p>
          </div>
          <div className="nav_text">
            <p style={description}>
              Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
            </p>
            <ul className="navText">
              <li>Europa</li>
            </ul>
          </div>
          <div className="body_text">
            <p style={description}>Body Text</p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
              nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
              nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
              libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
              mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
              aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
              mattis vel, nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
