import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { FiCopy } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { Button } from "../../components/componentIndex";

import styles from "./authorProfileCard.module.css";
import images from "../../img";

export default function AuthorProfileCard() {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const copyAddress = () => {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };

  const openShare = () => {
    setShare(!share);
    setReport(false);
  };

  const openReport = () => {
    setReport(!report);
    setShare(false);
  };

  return (
    <div className={styles.AuthorProfileCard}>
      <div className={styles.AuthorProfileCard_box}>
        <div className={styles.AuthorProfileCard_box_img}>
          <Image
            src={images.nft_image_1}
            alt="user"
            className={styles.AuthorProfileCard_box_img_img}
            width={220}
            height={220}
            objectFit="cover"
          />
        </div>

        <div className={styles.AuthorProfileCard_box_info}>
          <h2>
            ThuatDev{" "}
            <span>
              <MdVerified />
            </span>
          </h2>

          <div className={styles.AuthorProfileCard_box_info_address}>
            <input
              type="text"
              value="0xBd34f8f32...9c3876363784d88"
              name=""
              id="myInput"
              onChange={() => {}}
            />
            <FiCopy
              onClick={() => copyAddress()}
              className={styles.AuthorProfileCard_box_info_address_icon}
            />
          </div>
          <p>
            Đây là sàn Marketplace chuyên mua bán và đấu giá các tài sản số NFT
          </p>

          <div className={styles.AuthorProfileCard_box_info_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={styles.AuthorProfileCard_box_share}>
          <Button btnName="Follow" handleClick={() => {}} />
          <MdCloudUpload
            onClick={() => openShare()}
            className={styles.AuthorProfileCard_box_share_icon}
          />
          {share && (
            <div className={styles.AuthorProfileCard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>{" "}
                Facebook
              </p>
              <p>
                <span>
                  <TiSocialLinkedin />
                </span>{" "}
                Linkedin
              </p>
              <p>
                <span>
                  <TiSocialYoutube />
                </span>{" "}
                Youtube
              </p>
              <p>
                <span>
                  <TiSocialInstagram />
                </span>{" "}
                Instagram
              </p>
            </div>
          )}
          <BsThreeDots
            onClick={() => openReport()}
            className={styles.AuthorProfileCard_box_share_icon}
          />
          {report && (
            <p className={styles.AuthorProfileCard_box_share_report}>
              <span>
                <MdOutlineReportProblem />
              </span>
              Report abouse
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
