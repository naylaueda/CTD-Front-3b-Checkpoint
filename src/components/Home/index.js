import "./styles.css";

export default function Home() {
  return (
    <main id="home">
      <div className="container_home">
        <h1 id="title_home">Nayla Ueda</h1>
        <div className="itens_home">
          <div className="designer_home">
            <h2>designer</h2>
            <p className="text_home">Um pouco de designer que faz arte.</p>
          </div>
          <div className="coder_home">
            <h2 >&#60;coder&#62;</h2>
            <p className="text_home">Um pouco de coder que escreve códigos.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
