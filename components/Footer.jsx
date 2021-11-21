import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  const footer = () => {
    if (router.pathname === "/") {
      return "footerGrey";
    } else {
      return "footerWhite";
    }
  };

  return (
    <footer className={footer()}>
      <p>Copyright &copy; EVA LTD {new Date().getFullYear()}</p>
    </footer>
  );
}
