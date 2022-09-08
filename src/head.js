import "./head.css";

function Head() {
  return (
    <div className="head-section">
      <nav class="top-menu">
        <a className="navbar-logo">
          <img src="Pictures/logo.svg" alt="logo" />
        </a>
        <ul className="main-menu">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://web.telegram.org/"
              width="36"
              height="36"
            >
              <img src="Pictures/telegram.png" alt="telegram" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://web.whatsapp.com/"
              width="32"
              height="32"
            >
              <img src="Pictures/whatsapp.png" alt="whatsapp" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://myaccount.google.com/"
              width="30"
            >
              <img src="Pictures/mail.png" alt="mail" />
            </a>
          </li>
        </ul>
      </nav>

      <div className="desc-section">
        <div className="bot-desc">
          <h1 className="main-header desc-header">
            AI <b>PHOTO</b> RECOGNITION AND <b>COMMENT</b> GENERATION BOT
          </h1>
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
          <img
            className="logo-img"
            src="Pictures/pic.png"
            alt="bot"
          />
        </div>
      </div>
    </div>
  );
}

export default Head;