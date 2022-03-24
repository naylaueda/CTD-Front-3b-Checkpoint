import "./styles.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";

export default function Social() {
  return (
    <footer id="social">
      <div>
        <a href="https://www.linkedin.com/in/nayla-ueda/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin className="icon_size" size={40} color="#023047" />
        </a>
        <a href="https://github.com/naylaueda" target="_blank" rel="noopener noreferrer">
          <BsGithub className="icon_size"size={40} color="#023047" />
        </a>
        <OverlayTrigger trigger="click" placement="top" overlay={
          <Popover id="popover-basic">
            <Popover.Body>#2394</Popover.Body>
          </Popover>}>
          <Button  id="discord" variant="muted"><FaDiscord className="icon_size" size={40} color="#023047" /></Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="top" overlay={
          <Popover id="popover-basic">
            <Popover.Body>nayla_ueda@yahoo.com.br</Popover.Body>
          </Popover>}>
          <Button id="email" variant="muted"><MdEmail className="icon_size" size={40} color="#023047" /></Button>
        </OverlayTrigger>
      </div>
    </footer>
  );
}
