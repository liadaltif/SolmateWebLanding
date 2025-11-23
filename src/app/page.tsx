"use client";

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  const IPHONE_IMG = "/solmatePhotos/iphone.png";
  const LOGO_IMG = "/solmatePhotos/logo.png";
  const TESTFLIGHT_IMG = "/solmatePhotos/testflight.png";

  return (
    <main className={styles.hero}>
      {/* Logo */}
      <div className={styles.logoTop}>
        <Image
          src={LOGO_IMG}
          alt="Solmate logo"
          className={`${styles.logoImg} ${styles.noDrag}`}
          width={28}
          height={28}
          priority
        />
        <span className={`${styles.brandText} ${styles.noClick}`}>Solmate</span>
      </div>

      {/* Text + CTA */}
      <div className={styles.contentLeft}>
        <h1 className={styles.headline}>
          <span className={styles.headlineTop}>Music based</span>
          <br />
          matchmaking.
        </h1>

        <a
          href="https://testflight.apple.com/join/oscYikr0"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.storeButton}
        >
          <span className={styles.storeInner}>
            <span className={styles.storeIconWrap}>
              <Image
                src={TESTFLIGHT_IMG}
                alt="TestFlight"
                className={`${styles.storeIcon} ${styles.noDrag}`}
                width={28}
                height={28}
                priority
              />
            </span>
            <span className={styles.storeLabel}>Download via TestFlight</span>
          </span>
        </a>

        <p className={styles.downloadCaption}>
          By downloading you acknowledge Solmate&apos;s{" "}
          <a href="/privacy" className={styles.captionLink}>
            Privacy Policy.
          </a>
        </p>
      </div>

      {/* Phone */}
      <div className={styles.contentRight}>
        <Image
          src={IPHONE_IMG}
          alt="Solmate app"
          className={`${styles.iphone} ${styles.noDrag}`}
          width={430}
          height={900}
          priority
          sizes="(max-width: 900px) 55vw, 28vw"
        />
      </div>
    </main>
  );
}