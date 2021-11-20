import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import styles from "@/styles/Layout.module.css";
import Showcase from "./Showcase";

export default function Layout({
  title,
  keywords,
  description,
  children,
  uid,
}) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header uid={uid} />
      {router.pathname === "/" && <Showcase />}
      {/* checks to see if we are on the home page */}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "EVA - Emergency Vacation Assistance",
  description: "The smart fire alarm",
  keywords: "fire firealarm iot internet of things fire service safety",
};
