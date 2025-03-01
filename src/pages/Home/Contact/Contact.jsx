import React from "react";
import styles from "./Contact.module.css";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import EarthCanvas from "../../../components/EarthCanvas/EarthCanvas";
import Form from "./Form/Form";
import StarBackgroundImage from "./StarBackgroundImage/StarBackgroundImage";
// import StarsCanvas from '../../../components/StarCanvas/StarCanvas';

const Contact = ({ children }) => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.heading_1}>
        <p className={styles.heading_2}>Get In Touch</p>
        <h2 className={styles.headText}>Say Hello</h2>
      </div>
      <div className={styles.container}>
        <Form className={styles.dsizeF} />
        <EarthCanvas className={styles.dsizeE} />
      </div>
      {/* <StarsCanvas /> */}
      <StarBackgroundImage />
      {children}
    </section>
  );
};

export default Contact;
