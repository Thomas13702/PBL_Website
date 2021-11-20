import styles from "@/styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; EVA LTD {new Date().getFullYear()}</p>
    </footer>
  );
}
