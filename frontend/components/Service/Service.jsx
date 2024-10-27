import React from "react";
import Image from "next/image";

import styles from "./service.module.css";
import images from "../../img";

export default function Service() {
  return (
    <div className={styles.service}>
      <div className={styles.service_box}>
        <div className={styles.service_box_item}>
          <Image src={images.service1} alt="service" width={100} height={100} />
          <p className={styles.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>

        <div className={styles.service_box_item}>
          <Image src={images.service2} alt="service" width={100} height={100} />
          <p className={styles.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>

        <div className={styles.service_box_item}>
          <Image src={images.service3} alt="service" width={100} height={100} />
          <p className={styles.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>

        <div className={styles.service_box_item}>
          <Image src={images.service4} alt="service" width={100} height={100} />
          <p className={styles.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Start trading</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
      </div>
    </div>
  );
}
