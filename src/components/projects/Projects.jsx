import "./Projects.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

function Projects() {
  const data = [
    {
      id: 1,
      name: "Dev life",
      title: "Clicking Game",
      img: "assets/bg.png",
      desc: "This game to represent the journey to become a web developer.",
      demoLink: "https://maximilianhm.github.io/Project01-ironhack/",
      RepoLink: "https://github.com/MaximilianHM/Project01-ironhack",
    },
    {
      id: 2,
      name: "Stock Overflow",
      title: "Stock Market App",
      img: "assets/card.png",
      desc: "The app provides the latest stock market from the US market, financial and business news.",
      demoLink: "https://stocksoverfloww.herokuapp.com/",
      RepoLink: "https://github.com/JCoutinho91/StockOverFlow---Module-2",
      featured: true,
    },
    {
      id: 3,
      name: "Timex",
      title: "Task Manager App",
      img: "assets/card.png",
      desc: "This application was developed to help the client to organize and manage tasks.",
      demoLink: "https://google.com",
      RepoLink: "https://github.com/MaximilianHM/organizer-client",
      RepoLink2: "https://github.com/MaximilianHM/organizer-server",
    },
  ];

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <div className="demoImg">
                <img className="demo" src={d.img} alt={d.name} />
              </div>
              <div className="demoLinks">
                <a
                  href={d.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="left"
                >
                  Demo Link
                </a>
                <a
                  href={d.RepoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="right"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
            <div className="center">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
            <div className="bottom">{d.desc}</div>
          </div>
        ))}
      </div>
      <div className="arrowDown">
        <a href="#projects">
          <BsChevronDown />
        </a>
      </div>
    </div>
  );
}

export default Projects;
