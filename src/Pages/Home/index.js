// import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../commons/components/Layout";
import Header from "../../commons/components/Header";
import Footer from "../../commons/components/Footer";

import styles from "../../commons/styles/Home.module.css";
import imgDefault from "../../commons/assets/images/default_vehicle.png";

function Home() {
  return (
    <Layout title='Vehicle Rental | Home'>
      <Header />

      <section className={styles.jumbroton}>jumbroton</section>
      <Footer />
    </Layout>
  );
}

export default Home;
