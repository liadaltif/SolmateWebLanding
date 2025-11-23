"use client";

export default function Page() {
  const IPHONE_IMG = "/solmatePhotos/iphone.png";
  const LOGO_IMG = "/solmatePhotos/logo.png";
  const TESTFLIGHT_IMG = "/solmatePhotos/testflight.png";

  return (
    <main className="hero">
      {/* Top-left logo */}
      <div className="logoTop">
        <img src={LOGO_IMG} alt="Solmate logo" className="logoImg noDrag" />
        <span className="brandText noClick">Solmate</span>
      </div>

      {/* LEFT CONTENT PART */}
      <div className="contentLeft">
        <h1 className="headline">
          <span className="headlineTop">Music based</span>
          <br />
          matchmaking.
        </h1>

        <a
          href="https://testflight.apple.com/join/oscYikr0"
          target="_blank"
          rel="noopener noreferrer"
          className="storeButton"
        >
          <span className="storeInner">
            <span className="storeIconWrap">
              <img
                src={TESTFLIGHT_IMG}
                alt="TestFlight"
                className="storeIcon noDrag"
              />
            </span>
            <span className="storeLabel">Download via TestFlight</span>
          </span>
        </a>

        <p className="downloadCaption">
          By downloading you acknowledge Solmate&apos;s{" "}
          <a href="/privacy" className="captionLink">
            Privacy Policy.
          </a>
        </p>
      </div>

      {/* RIGHT CONTENT */}
      <div className="contentRight">
        <img src={IPHONE_IMG} alt="Solmate app" className="iphone noDrag" />
      </div>

      <style jsx>{`
        .hero {
          height: 100vh;
          width: 100%;
          background: #141413;
          display: grid;
          grid-template-columns: 1fr 1fr; /* balanced columns */
          column-gap: 120px; /* middle gap */
          padding: 40px 70px;
          position: relative;
          font-family: var(--font-poppins);
          color: #faf9f5;
          overflow: hidden;
          align-items: center;
        }

        /* LOGO TOP LEFT */
        .logoTop {
          position: absolute;
          top: 20px;
          left: 26px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 3;
        }

        .logoImg {
          width: 28px;
          height: auto;
          object-fit: contain;
        }

        .brandText {
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: #faf9f5;
        }

        /* LEFT SIDE */
        .contentLeft {
          max-width: 520px;
          justify-self: end;
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: translateY(-24px); /* lifted up a bit */
        }

        .headline {
          color: #faf9f5;
          font-size: clamp(36px, 4vw, 56px);
          line-height: 1.05;
          margin: 0 0 36px;
          font-weight: 700;
          /* even more letter spacing */
          letter-spacing: 0.02em;
          text-align: center;
        }

        .headlineTop {
          white-space: nowrap;
        }

        /* BUTTON */
        .storeButton {
          margin-top: 4px;
          display: inline-flex;
          border-radius: 999px;
          background: #ffffff;
          /* a little longer now */
          padding: 10px 48px;
          min-width: 380px;
          justify-content: center;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.7);
          text-decoration: none;
        }

        .storeInner {
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .storeIconWrap {
          width: 28px;
          height: 28px;
          border-radius: 6px; /* not round */
          overflow: hidden;
          flex-shrink: 0;
        }

        .storeIcon {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .storeLabel {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #141413;
          white-space: nowrap;
        }

        .downloadCaption {
          margin-top: 10px;
          font-size: 11px;
          color: #a39e93;
          text-align: center;
        }

        .captionLink {
          color: #dcd6c7;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        /* RIGHT SIDE (IPHONE) */
        .contentRight {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .iphone {
          width: clamp(260px, 28vw, 430px);
          height: auto;
          display: block;
          filter: none; /* no glow, no tilt */
        }

        .noClick {
          pointer-events: none;
          user-select: none;
        }

        .noDrag {
          -webkit-user-drag: none;
          user-drag: none;
          user-select: none;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            column-gap: 0;
            padding: 28px 22px 40px;
          }

          .contentLeft {
            justify-self: center;
            transform: none;
          }

          .headline {
            font-size: clamp(28px, 7vw, 38px);
            margin-bottom: 28px;
            letter-spacing: 0.015em;
          }

          .contentRight {
            justify-content: center;
            margin-top: 40px;
          }

          .iphone {
            filter: none;
          }

          .logoTop {
            top: 18px;
            left: 18px;
          }
        }
      `}</style>
    </main>
  );
}
