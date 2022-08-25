import "./head.css";

function Head() {
  return (
    <div className="head-section">
      <nav class="top-menu">
        <a className="navbar-logo">
          <img src="Pictures/logo.svg" alt="logo" wigth="80" height="80" />
        </a>
        <ul className="main-menu">
          <li className="nav-item">
            <a
              href="https://web.telegram.org/"
              target="_blank"
              width="36"
              height="36"
            >
              <img src="Pictures/telegram.png" alt="telegram" />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              width="32"
              height="32"
            >
              <img src="Pictures/whatsapp.png" alt="whatsapp" />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://myaccount.google.com/" target="_blank" width="30">
              <img src="Pictures/mail.png" alt="mail" />
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <div className="bot-desc">
          <h1 className="main-header">
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
            height="631"
            width="527"
          />
        </div>
      </div>
    </div>
  );
}

export default Head;