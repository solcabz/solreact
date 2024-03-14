import projImage from "../../assets/tictac.png";
import projLeo from "../../assets/leo.png";
import projHris from "../../assets/projHris.png";
import projTodo from "../../assets/todo.png";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="section portfolio">
      <div className="card-wrapper">
        <ProjectCard
          image={projImage}
          link="https://tic-tac-toe-sol.netlify.app/"
          title="Tic-Tac-Toe"
          subTitle="React"
        />

        <ProjectCard
          image={projLeo}
          link="https://www.leocasts.ph/"
          title="LeocastPH Portfolio"
          subTitle="Webflow"
        />

        <ProjectCard
          image={projHris}
          link="https://teamtngc.netlify.app/"
          title="HRIS"
          subTitle="React (Ongoing Proj)"
        />

        <ProjectCard
          image={projTodo}
          link="https://solreact-todolist.netlify.app/"
          title="Todo-list"
          subTitle="React (Ongoing Proj)"
        />
      </div>
    </section>
  );
};

const ProjectCard = ({ image, link, title, subTitle }) => {
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
      <span>{subTitle}</span>
    </div>
  );
};

export default Portfolio;
