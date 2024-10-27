import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import styles from "./nftDetailsImg.module.css";
import images from "../../img";

export default function NFTDetailsImg() {
  const [like, setLike] = useState(false);
  const [details, setDetails] = useState(false);
  const [description, setDescription] = useState(false);

  const likeNFT = () => {
    setLike(!like);
  };

  const openDetails = () => {
    setDetails(!details);
  };

  const openDescription = () => {
    setDescription(!description);
  };

  return (
    <div className={styles.NFTDetailsImg}>
      <div className={styles.NFTDetailsImg_box}>
        <div className={styles.NFTDetailsImg_box_NFT}>
          <div className={styles.NFTDetailsImg_box_NFT_like}>
            <BsImages className={styles.NFTDetailsImg_box_NFT_like_icon} />
            <p onClick={() => likeNFT()}>
              {like ? (
                <AiOutlineHeart
                  className={styles.NFTDetailsImg_box_NFT_like_icon}
                />
              ) : (
                <AiFillHeart
                  className={styles.NFTDetailsImg_box_NFT_like_icon}
                />
              )}
              <span>23</span>
            </p>
          </div>

          <div className={styles.NFTDetailsImg_box_NFT_img}>
            <Image
              src={images.nft_image_1}
              className={styles.NFTDetailsImg_box_NFT_img_img}
              width={700}
              height={800}
              objectFit="cover"
            />
          </div>
        </div>

        <div
          className={styles.NFTDetailsImg_box_description}
          onClick={() => openDescription()}
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {description && (
          <div className={styles.NFTDetailsImg_box_description_box}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eget semper nunc. In hac habitasse platea dictumst. Nam in
              fermentum purus. Sed nec mi ut ligula aliquam ultricies. Sed
              tincidunt, nunc nec tincidunt ultrices, nunc eros ultricies nunc,
              vel ultricies nisi nunc nec nunc. Donec eget semper nunc. In hac
              habitasse platea dictumst. Nam in fermentum purus. Sed nec mi ut
              ligula aliquam ultricies. Sed tincidunt, nunc nec tincidunt
              ultrices, nunc eros ultricies nunc, vel ultricies nisi nunc nec
              nunc. Donec eget semper nunc. In hac habitasse platea dictumst.
              Nam in fermentum purus. Sed nec mi ut ligula aliquam ultricies.
              Sed tincidunt, nunc nec tincidunt ultrices, nunc eros ultricies
              nunc, vel ultricies nisi nunc nec nunc.
            </p>
          </div>
        )}
        <div
          className={styles.NFTDetailsImg_box_details}
          onClick={() => openDetails()}
        >
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {details && (
          <div className={styles.NFTDetailsImg_box_details_box}>
            <small>2000 x 2000 px.Image(600KB)</small>
            <p>
              <small>Contract Address</small>
              <br />
              0x2102E55a27B657965354bE7Ce223f35c5Ff1266E
            </p>
            <p>
              <small>Token ID</small>
              <br />1
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
