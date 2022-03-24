import "./styles.css";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";

const data = [
  {
    id: "1",
    name: "Ilustração",
    image: "ilustracao",
    title: "Bearly Awake",
    resume: "Illustração feita em perpectiva 3D no Adobe Illustrator.",
  },
  {
    id: "2",
    name: "Anúncio",
    image: "anuncio",
    title: "Baby Center",
    resume: "Campanha publicitária experimental desenvolvida para a Johnson's.",
  },
  {
    id: "3",
    name: "Comunicado",
    image: "comunicado",
    title: "Sustentabilidade",
    resume: "Comunicado criado para a área de Sustentabilidade da SPDM/PAIS.",
  },
  {
    id: "4",
    name: "Folder",
    image: "folder",
    title: "SAMU 2 anos",
    resume: "Folder com os principais assuntos sobre o SAMU/SC.",
  },
  {
    id: "5",
    name: "Logotipo",
    image: "logotipo",
    title: "Humaniza HF",
    resume: "Logotipo elaborado para o Hospital Florianópolis/SC.",
  },
];

export default function Designer() {
  return (
    <div className="content-designer" id="designer">
      <h1 id="designer-title">Designer</h1>
      <ul className="list-designer">
        {data.map(({ image, name, resume, title }) => (
          <li className="item-list-designer">
            <img src={require("../../assets/" + image + ".png")} width={350} alt={name} />
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
