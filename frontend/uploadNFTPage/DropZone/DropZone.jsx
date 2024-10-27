import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

import styles from "./dropZone.module.css";
import images from "../../img";

export default function DropZone({
  title,
  heading,
  subHeading,
  itemName,
  website,
  description,
  royalties,
  fileSize,
  category,
  propertie,
  image,
}) {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    setFileUrl(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });
  return (
    <div className={styles.DropZone}>
      <div className={styles.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={styles.DropZone_box_input}>
          <p>{title}</p>
          <div className={styles.DropZone_box_input_img}>
            <Image
              src={image}
              alt="upload"
              width={100}
              height={100}
              objectFit="contain"
              className={styles.DropZone_box_input_img_img}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>

      {fileUrl && (
        <aside className={styles.DropZone_box_aside}>
          <div className={styles.DropZone_box_aside_box}>
            <Image
              src={images.nft_image_1}
              alt="nft image"
              width={200}
              height={200}
              style={{ borderRadius: "10px" }}
            />

            <div className={styles.DropZone_box_aside_box_preview}>
              <div className={styles.DropZone_box_aside_box_preview_one}>
                <p>
                  <samp>NFT Name: </samp>
                  {itemName || ""}
                </p>
                <p>
                  <samp>Website: </samp>
                  {website || ""}
                </p>
              </div>

              <div className={styles.DropZone_box_aside_box_preview_two}>
                <p>
                  <span>Description: </span>
                  {description || ""}
                </p>
              </div>

              <div className={styles.DropZone_box_aside_box_preview_three}>
                <p>
                  <span>Royalties: </span>
                  {royalties || ""}
                </p>
                <p>
                  <span>FileSize: </span>
                  {fileSize || ""}
                </p>
                <p>
                  <span>Properties: </span>
                  {propertie || ""}
                </p>
                <p className={styles.p_item_category}>
                  <span>Category: </span>
                  {category || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}
