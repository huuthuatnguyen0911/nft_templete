import React from "react";

import { DropZone, UploadNFT } from "../uploadNFTPage/uploadNFTindex";

import styles from "../styles/upload_nft.module.css";

export default function uploadNft() {
  return (
    <div className={styles.uploadNFT}>
      <div className={styles.uploadNFT_box}>
        <div className={styles.uploadNFT_box_heading}>
          <h1>Create New NFT</h1>
          <p>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
        </div>

        <div className={styles.uploadNFT_box_title}>
          <h2>Image, Video, Audio, or 3D Model</h2>
          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 5 MB
          </p>
        </div>

        <div className={styles.uploadNFT_box_form}>
          <UploadNFT />
        </div>
      </div>
    </div>
  );
}
