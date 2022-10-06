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
          <style jsx>{`
            .nav_destinations li:hover {
              border-bottom: 6px solid #ffffff3d;
            }
            .active {
              border-bottom: 4px #ffffff solid;
            }
          `}</style>
          <ul className="navText">
            <li>
              <ActiveLink activeClassName="active" href="/">
                <a>00 HOME</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/destination">
                <a>01 DESTINATION</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/crew">
                <a>02 CREW</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/technology">
                <a>03 TECHNOLOGY</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/about">
                <a>04 ABOUT</a>
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
