import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.css";
import logoImg from "../assets/shared/logo.svg";

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
              <Link href="/">
                <a>
                  00 <span>HOME</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/destination">
                <a>
                  01 <span>DESTINATION</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/crew">
                <a>
                  02 <span>CREW</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/technology">
                <a>
                  03 <span>TECHNOLOGY</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>
                  04 <span>ABOUT</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
