import Layout from "@/components/Layout.jsx";
import styles from "@/styles/ourProduct.module.css";

export default function ourProduct() {
  return (
    <Layout title="Our Product">
      <div className={styles.content}>
        <h1>How it works</h1>
        <p>
          We use bluetooth beans linked to a fire alarm to locate people along
          with sensing the fire
        </p>
      </div>
    </Layout>
  );
}
