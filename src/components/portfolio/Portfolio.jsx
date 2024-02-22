import projImage from "../../assets/tictac.png";
import projLeo from "../../assets/leo.png";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="section portfolio">
      <div className="card-wrapper">
        <ProjectCard
          image={projImage}
          link="https://tic-tac-toe-sol.netlify.app/"
          title="Tic-Tac-Toe"
        />

        <ProjectCard
          image={projLeo}
          link="https://www.leocasts.ph/"
          title="LeocastPH Portfolio"
        />
      </div>
    </section>
  );
};

const ProjectCard = ({ image, link, title }) => {
  return (
    <div className="image-box">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={`Screenshot of ${title} project`}
          style={{
            width: "250px",
            borderRadius: "8px",
          }}
        />
      </a>
      <span>{title}</span>
    </div>
  );
};

export default Portfolio;
