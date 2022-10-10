import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.css";
import logoImg from "../assets/shared/logo.svg";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <div className={styles.nav_bar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src={logoImg} alt="/" />
          </a>
        </Link>
      </div>
      <div className={styles.black_bar}></div>
      <div className={styles.main_nav}>
        <div className={styles.nav_destinations}>
          <ul className="navText">
            <li>
              <ActiveLink activeClassName={styles.active} href="/">
                <a>
                  <span>00 </span>HOME
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/destination">
                <a>
                  <span>01 </span>DESTINATION
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/crew">
                <a>
                  <span>02 </span>CREW
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/technology">
                <a>
                  <span>03 </span>TECHNOLOGY
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/about">
                <a>
                  <span>04 </span>ABOUT
                </a>
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
