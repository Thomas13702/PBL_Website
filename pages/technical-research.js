import Layout from "@/components/Layout.jsx";
import styles from "@/styles/technicalResearch.module.css";

export default function technicalResearch() {
  return (
    <Layout title="Technical Research">
      <div className={styles.content}>
        <h1>What technologies will we use?</h1>
        <p>
          There are many kinds of positioning technologies: Bluetooth Low Energy
          (BLE), WIFI, ultra-wideband and many more. For our application BLE
          would be the best as its range is enough for our application and it is
          low cost.​ Practically everyone has a smartphone so it would have very
          good compatibility. It can be accurate to the nearest meter or
          centimetre depending on configuration and enhancements; however we
          would only need it to the nearest meter as any greater detail would be
          unnecessarily more expensive. ​ There will also be sensors in all of
          the rooms to detect the fire and send data to the app of the precise
          location of the fire.
        </p>
      </div>
    </Layout>
  );
}
