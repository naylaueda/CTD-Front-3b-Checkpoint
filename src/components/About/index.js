import "./styles.css";
import FotoPerfil from "../../assets/foto_about.jpeg"

export default function About() {
  return (
      <div className="container_about" id="about">
        <div className="itens_about">
          <div className="container_foto">
            <img id="foto_about" src={FotoPerfil} alt="foto_perfil" />
          </div>
          <div className="container_texto">
            <h1 id="title_about">Olá</h1>
            <p id="text_about">Publicitária com experiência de 8 anos na área de comunição, em transição de carreira para Full Stack Developer.</p>
          </div>
        </div>
      </div>
  );
}
