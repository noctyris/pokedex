function AboutPage(props) {
  return (
    <div className="about">
      <h1>About</h1>
      <h2>Contributeurs</h2>
      <div className="sectionA">
        <div className="dataA">
          Développement
          <br />
          <br />
          <a href="https://github.com/noctyris">Noctyris</a>
        </div>
        <div className="dataA">
          Recherche
          <br />
          <br />
          <a href="https://github.com/jf2-0">jf2-0</a>
        </div>
      </div>
      <h2>Code</h2>
      <h3>Frameworks</h3>
      <div className="sectionA">
        <div className="dataA">
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
        <div className="dataA">
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
      </div>
      <h2>Sources</h2>
      <h3>Images</h3>
      <div className="sectionA">
        <ul className="dataA">
          <li>À compléter</li>
        </ul>
      </div>
      <h2>Images</h2>
      <div className="sectionA">
        <ul className="dataA">
          <li>À compléter</li>
        </ul>
      </div>
      <a id="quitA" onClick={() => props.quit(false)}>
        &#x2715;
      </a>
    </div>
  );
}

export default AboutPage;
