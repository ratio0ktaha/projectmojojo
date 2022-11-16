import herostyles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={herostyles.first_box}>
      <div className={herostyles.identifying}>
        <h1> Social Media & Content Assistant Tool</h1>
        <div>
          Our platform provides tools and analysis features that will help you
          grow your online business.
        </div>

        <button className={herostyles.black_box_button}>Get Started at $10/mo</button>
        <div className={herostyles.rates}>
          <p className={herostyles.texters}>Trusted by 19000+ users </p>
          <div>
            {" "}
            <img src="images/star 5.png" alt="stars" />
          </div>
          <div>
            {" "}
            <img src="images/star.png" alt="stars" />
          </div>
        </div>
      </div>
      <div className={herostyles.image_target}>
        <img src="images/hero_img.png" alt="target" />
      </div>
    </div>
  );
}
