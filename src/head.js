import "./head.css";

function Head() {
  return (
    <div className="head-section">
      <nav class="top-menu">
        <img className="navbar-logo" src="Pictures/logo.svg" alt="logo" />
        <ul className="main-menu">
          <li className="nav-item">
            <a className="nav-link" href="https://web.telegram.org/">
              <img src="Pictures/telegram.png" alt="telegram" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://web.whatsapp.com/">
              <img src="Pictures/whatsapp.png" alt="whatsapp" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://myaccount.google.com/">
              <img src="Pictures/mail.png" alt="mail" />
            </a>
          </li>
        </ul>
      </nav>

      <div className="desc-section">
        <div className="bot-desc">
          <div className="bot-header">
            <img src="Pictures/Rectangle_1_main.svg" alt="" className="rec-1-main" />
            <img src="Pictures/Rectangle_1_1600.svg" alt="" className="rec-1-1600" />
            <img src="Pictures/Rectangle_1_770.svg" alt="" className="rec-1-770" />
            <img src="Pictures/Rectangle_1_480.svg" alt="" className="rec-1-480" />
            <h1 className="main-header desc-header">
              <b>AI</b> PHOTO <b>RECOGNITION AND</b> COMMENT{" "}
              <b>GENERATION BOT</b>
            </h1>
          </div>
          <p className="description">
            Photo recognition and comment generation technology. Photo
            recognition and comment generation technology. Photo recognition and
            comment generation technology. Photo recognition and comment
            generation technology. Photo recognition and comment generation
            technology. Photo recognition and comment generation technology.
            Photo recognition and comment generation technology.
          </p>
        </div>
        <div className="logo">
          <img className="logo-img" src="Pictures/pic.png" alt="bot" />
        </div>
      </div>
    </div>
  );
}

export default Head;