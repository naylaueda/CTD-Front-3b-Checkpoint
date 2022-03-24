import "./styles.css";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";

const data = [
  {
    id: "1",
    name: "Card",
    image: "projeto01",
    link: "https://naylaueda.github.io/frontend2_checkpoint1/",
    title:"Star War",
    resume:"Exercício para a prática de montagem de cards",
  },
  {
    id: "2",
    name: "Site",
    image: "projeto02",
    link: "https://naylaueda.github.io/FrontEnd_aula22/",
    title:"Carlos Barbosa",
    resume:"Site elaborado com HTML e CSS",
  },
  {
    id: "3",
    name: "Site",
    image: "projeto03",
    link: "https://diegodecrescenzo.github.io/checkpoint3/",
    title:"Mamma Mia",
    resume:"Site elaborado para o projeto final de bimestre",
  },
  {
    id: "4",
    name: "List",
    image: "projeto04",
    link: "https://lui7henrique.github.io/dh-front-end-II-checkpint/",
    title:"To-Do",
    resume:"Aplicação de uma lista de tarefas",
  },

];

export default function Coder() {
  return (
    <div className="content-coder" id="coder">
      <h1 className="title-coder" id="coder-title">&#60;coder&#62;</h1>
      <ul className="list-coder">
        {data.map(({ image, name, link, title, resume }) => (
          <li className="item-list-coder">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={require("../../assets/" + image + ".PNG")} width={350} alt={name} />
            </a>
            <div id="popover">
              <OverlayTrigger trigger="click" placement="top" overlay={
                <Popover id="popover-basic">
                  <Popover.Header as="h3">{title}</Popover.Header>
                  <Popover.Body>{resume}</Popover.Body>
                </Popover>}>
                <Button variant="muted">{name}</Button>
              </OverlayTrigger>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
