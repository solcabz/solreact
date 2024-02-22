import projImage from "../../assets/tictac.png";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="card-wrapper">
        <a href="https://tic-tac-toe-sol.netlify.app/">
          <img
            src={projImage}
            alt=""
            style={{
              width: "250px",
              borderRadius: "8px",
            }}
          ></img>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
