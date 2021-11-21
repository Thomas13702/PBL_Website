import Layout from "@/components/Layout.jsx";
import styles from "@/styles/contactUs.module.css";

export default function about() {
  return (
    <Layout title="Contact Us">
      <div className={styles.content}>
        <h1>Contact Us</h1>
        <ul>
          <li>Email: enquiries@eva.com</li>
          <li>Phone: 0800 00 1066</li>
        </ul>
      </div>
    </Layout>
  );
}
