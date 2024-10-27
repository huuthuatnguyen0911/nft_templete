import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

import styles from "./collectionProfile.module.css";
import images from "../../img";

export default function CollectionProfile() {
  const cardArray = [1, 2, 3, 4];
  return (
    <div className={styles.collectionProfile}>
      <div className={styles.collectionProfile_box}>
        <div className={styles.collectionProfile_box_left}>
          <Image
            src={images.nft_image_1}
            alt="nft images"
            width={800}
            height={800}
            className={styles.collectionProfile_box_left_img}
          />
          <div className={styles.collectionProfile_box_left_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={styles.collectionProfile_box_middle}>
          <h1>Awesome NFTs Collection</h1>
          <p>
            Karafuru is home to 5,555 generative arts where colors reign
            supreme. Leave the drab reality and enter the world of Karafuru by
            Museum of Toys.
          </p>
          <div className={styles.collectionProfile_box_middle_box}>
            {cardArray.map((card, index) => (
              <div
                className={styles.collectionProfile_box_middle_box_item}
                key={index + 1}
              >
                <small>Floor price</small>
                <p>${index + 1}95,4683</p>
                <span>+ {index + 2}.11%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
