import Layout from "@/components/Layout.jsx";
import styles from "@/styles/ourProduct.module.css";

export default function ourProduct() {
  return (
    <Layout title="Our Product">
      <div className={styles.content}>
        <h1>How it works</h1>
        <p>
          We use bluetooth beacons linked to a fire alarm to locate people along
          with sensing the fire. Since we don’t need the positioning to be
          accurate to under a meter, we would only have two beacons in each room
          that would be able to identify when the Bluetooth device (phone) is in
          range and give positional data. ​ Received signal strength indicator
          (RSSI) combined with the already known position of the beacon will
          collate to show the position of the person in the building. ​ Newer
          devices have a direction-finding feature which provides the ability to
          know the direction of the Bluetooth signal, which relies on the angle
          of arrival/departure or both of the Bluetooth signals. The app will
          contain floor plans of the whole building. This, combined with the
          Bluetooth tracing system and the sensors to detect the fire in each
          room will enable the app to plan and display the safest route out of
          the building to the user.
        </p>
      </div>
    </Layout>
  );
}
