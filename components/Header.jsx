import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";

//const headings = { prop1: "account", prop2: "Logout" };

export default function NavBar() {
  const router = useRouter();

  // console.log("This is a uid " + uid);

  return (
    <nav className={styles.nav}>
      <div className={styles.width}>
        <input
          type="checkbox"
          id="nav__checkbox"
          className={styles.nav__checkbox}
        />
        <label htmlFor="nav__checkbox" className={`${styles.nav__toggle} `}>
          <svg
            className={`${styles.menu} `}
            viewBox="0 0 448 512"
            width="100"
            title="bars"
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
          </svg>
          <svg
            className={`${styles.close}  `}
            viewBox="0 0 384 512"
            width="100"
            title="times"
          >
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
          </svg>
        </label>
        <ul className={`${styles.nav__menu} `}>
          <li>
            <Link href="/">
              <Image src="/logo.png" alt="Eva Logo" width={60} height={60} />
            </Link>
          </li>
          <li>
            <Link href="/favourites">
              <a className={styles.a}>
                Favourites <FaRegStar />
              </a>
            </Link>
          </li>

          <li className={styles.logout}>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
