import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  getCategoryApi,
  getLocationApi
} from "../../modules/vehicle";

// import { useRouter } from "next/router";

function Footer() {
  const [location, setLocation] = useState([]);
  const [category, setCategory] = useState([]);

  const getLocation = useCallback(() => {
    getLocationApi()
      .then((res) => {
        const dataArr = res.data.result;
        let tempArr = [];
        dataArr.map((data) => {
          tempArr.push(data.location);
        });

        setLocation(tempArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getCategory = useCallback(() => {
    getCategoryApi()
      .then((res) => {
        const dataArr = res.data.result;
        let tempArr = [];
        dataArr.map((data) => {
          tempArr.push(data.category);
        });

        setCategory(tempArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getLocation();
    getCategory();
  }, [getLocation, getCategory]);

  const listCategory = () => {
    return (
      <>
        {category.length !== 0 &&
          category.map((data, index) => {
            return (
              <li key={index}>
                <Link href='#'>
                  <a className={styles["link-footer"]}>{data}</a>
                </Link>
              </li>
            );
          })}
        <li>
          <Link href='#'>
            <a className={styles["link-footer"]}>Return Times</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a className={styles["link-footer"]}>FAQs</a>
          </Link>
        </li>
      </>
    );
  };

  return (
    <footer
      className={`row p-2 justify-content-md-around ${styles.footer}`}
    >
      <div className='col-lg-5 col-md-12 p-md-4'>
        <div className={styles["logo-footer"]}>
          <Image src='/logo.svg' alt='logo' width={50} height={50} />
        </div>

        {category.length !== 0 && location.length !== 0 ? (
          <>
            <div className={styles["text-footer-about"]}>
              <p>
                Plan and book your perfect trip with expert advice,
                travel tips for vehicle information from us
              </p>
              <p>©2020 Vehicle Rental Center. All rights reserved</p>
            </div>
          </>
        ) : (
          <Skeleton count={5} />
        )}
      </div>

      <div className='mb-3 col-sm-6 col-md-2 col-xl-2'>
        <ul>
          <li className={styles["text-footer-title"]}>Destination</li>
          {location.length !== 0 ? (
            location.map((data, index) => {
              console.log(location.length);
              return (
                <li key={index}>
                  <Link href='#'>
                    <a className={styles["link-footer"]}>{data}</a>
                  </Link>
                </li>
              );
            })
          ) : (
            <Skeleton count={5} />
          )}
        </ul>
      </div>

      <div className='mb-3 col-sm-6 col-md-2 col-xl-2 '>
        <ul>
          <li className={styles["text-footer-title"]}>Vehicle</li>
          {category.length !== 0 ? (
            listCategory()
          ) : (
            <Skeleton count={5} />
          )}
        </ul>
      </div>

      <div className='mb-3 col-sm-6 col-md-2 col-xl-2 '>
        <ul>
          <li className={styles["text-footer-title"]}>Interest</li>
          {category.length !== 0 && location.length !== 0 ? (
            <>
              <li>
                <Link href='#'>
                  <a className={styles["link-footer"]}>
                    Adventure Travel
                  </a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a className={styles["link-footer"]}>
                    Art And Culture
                  </a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a className={styles["link-footer"]}>
                    Wildlife and Nature
                  </a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a className={styles["link-footer"]}>
                    Family Holidays
                  </a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a className={styles["link-footer"]}>
                    Culinary Trip
                  </a>
                </Link>
              </li>
            </>
          ) : (
            <Skeleton count={5} />
          )}
        </ul>
      </div>

      <div className='col-12'>
        <div className='col-12 d-flex justify-content-center mb-3 mt-3'>
          <div className={styles["line-footer"]}></div>
        </div>

        <div className='col-12 d-flex justify-content-center mb-5 '>
          <FontAwesomeIcon
            icon={faTwitter}
            className={styles["icon-footer"]}
          />

          <FontAwesomeIcon
            icon={faFacebook}
            className={styles["icon-footer"]}
          />

          <FontAwesomeIcon
            icon={faInstagram}
            className={styles["icon-footer"]}
          />

          <FontAwesomeIcon
            icon={faLinkedin}
            className={styles["icon-footer"]}
          />

          <FontAwesomeIcon
            icon={faYoutube}
            className={styles["icon-footer"]}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
