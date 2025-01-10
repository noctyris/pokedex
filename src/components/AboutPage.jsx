function AboutPage(props) {
  return (
    <div className="about">
      <h1>About</h1>
      <h2>Contributeurs</h2>
      <section>
        <div className="data">
          Développement
          <br />
          <br />
          <a href="https://github.com/noctyris">Noctyris</a>
        </div>
        <div className="data">
          Recherche
          <br />
          <br />
          <a href="https://github.com/jf2-0">jf2-0</a>
        </div>
      </section>
      <h2>Code</h2>
      <h3>Frameworks</h3>
      <section>
        <div className="data">
          <img width="200px" src="/other/react.svg" />
          <p
            style={{
              backgroundColor: "#53c1de",
              width: "fit-content",
              margin: "auto",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            React
          </p>
        </div>
        <div className="data">
          <img width="200px" src="/other/vite-js.svg" />
          <p
            style={{
              backgroundColor: "#b73cfe",
              width: "fit-content",
              margin: "auto",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            Vite.js
          </p>
        </div>
      </section>
      <h2>Sources</h2>
      <h3>Images</h3>
      <section>
        <ul className="data">
          <li>À compléter</li>
        </ul>
      </section>
      <h2>Images</h2>
      <section>
        <ul className="data">
          <li>À compléter</li>
        </ul>
      </section>
      <a id="quit" onClick={() => props.quit(false)}>
        &#x2715;
      </a>
    </div>
  );
}

export default AboutPage;
