import "./tester.css";

function Tester() {
  return (
    <div className="tester-main">
      <h2 className="secondary-header tester-header">TESTER</h2>
      <p className="bot-comment">
        Here you can try the bot. Upload any picture and the bot will generate a
        suitable comment for it.
      </p>
      <button className="main-btn">UPLOAD</button>
      <p className="btn-desc">4/5 uploads remaining</p>

      <div className="main-window">
        <div className="photo-window">
          <p>Your photo will appear here</p>
        </div>
        <div className="comment-window">
          <p>...</p>
        </div>
      </div>

      <div className="realise-notes">
        <h2 className="secondary-header release-header">RELEASE NOTES</h2>
        <div className="notes top-notes">
          <p>1.2.5 (25.07.2022)</p>
          <ul>
            <li>
              Fixed an issue that prevented an app from enabling or disabling
              Bluetooth if it didn't have the BLUETOOTH_CONNECT permission
            </li>
            <li>
              Fixed an issue that prevented an app from enabling or disabling
              Bluetooth if it didn't have the BLUETOOTH_CONNECT permission, even
              though the app was targeting an API level where the permission is
              not required. (Issue #232107689)
            </li>
          </ul>
        </div>

        <div className="notes bottom-notes">
          <p>1.2.4 (18.07.2022)</p>
          <ul>
            <li>
              Fixed an issue that prevented an app from enabling or disabling
              Bluetooth if it didn't have the BLUETOOTH_CONNECT permission
            </li>
          </ul>
        </div>

        <div className="notes bottom-notes">
          <p>1.2.3 (10.07.2022)</p>
          <ul>
            <li>Fixed an issue (Issue #232107689)</li>
          </ul>
        </div>

        <div className="notes bottom-notes">
          <p>1.2.2 (03.07.2022)</p>
          <ul>
            <li>Fixed an issue (Issue #251463663)</li>
          </ul>
        </div>
      </div>

      <div className="contact-us">
        <h2 className="secondary-header contact-header">CONTACT US</h2>
        <div className="contacts-images">
          <hr className="line-before"></hr>
          <a
            href="https://web.telegram.org/"
            target="_blank"
            width="70"
            height="70"
          >
            <img src="Pictures/telegram2.png" alt="telegram" />
          </a>
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            width="70"
            height="70"
          >
            <img src="Pictures/whatsapp2.png" alt="whatsapp" />
          </a>
          <a
            href="https://myaccount.google.com/"
            target="_blank"
            width="70"
            height="70"
          >
            <img src="Pictures/mail2.png" alt="mail" />
          </a>
          <hr className="line-after"></hr>
        </div>
      </div>
    </div>
  );
}

export default Tester;
