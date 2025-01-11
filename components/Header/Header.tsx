import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import burgerBtn from "../../assets/img/burgerBtn.svg";
import Link from "next/link";
import logoutImg from "../../assets/img/logout-svgrepo-com.svg";
import cookie from "js-cookie";

const Header = () => {
  const [isBurgerButtonClicked, setBurgerButtonClicked] = useState(false);

  const router = useRouter();

  const logoutuser = () => {
    cookie.remove("jwt_token");
    router.push("/login");
  };

  const navbar = (
    <nav>
      <ul>
        <li>
          <Link href="/">Main</Link>
        </li>
        <li>
          <Link href="/ask-questio">Ask Question</Link>
        </li>
        <li>
          <button
            onClick={() => {
              logoutuser();
            }}
            className={styles.logoutBtn}
          >
            <img src={logoutImg.src} />
          </button>
        </li>
      </ul>
    </nav>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Link href="/">To do app </Link>
      </div>
      <div />
      <nav className={styles.desktopNav}>{navbar}</nav>
      <button onClick={() => setBurgerButtonClicked(!isBurgerButtonClicked)}>
        <img src={burgerBtn.src} alt="burger btn" />
      </button>

      <div
        className={`${styles.overlay} 
         ${isBurgerButtonClicked && styles.overlayOpen}`}
      >
        <nav className={styles.mobileNav}>{navbar} </nav>
      </div>
    </div>
  );
};

export default Header;
