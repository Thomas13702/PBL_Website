import styles from "@/styles/Showcase.module.scss";
import Link from "next/link";

export default function Showcase() {
  return (
    <div className={styles.showcase}>
      <h1>Eva</h1>
      <h2>The Smart fire alarm</h2>
      <Link href={"/our-product"}>
        <button className={styles.btn}>Learn More</button>
      </Link>
    </div>
  );
}
