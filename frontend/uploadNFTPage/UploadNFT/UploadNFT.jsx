import React, { useState } from "react";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";

import styles from "./uploadNFT.module.css";
import images from "../../img";
import formStyles from "../../accountPage/Form/form.module.css";
import { Button } from "../../components/componentIndex";
import { DropZone } from "../uploadNFTindex";

export default function UploadNFT() {
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [active, setActive] = useState(0);
  const [itemName, setItemName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState(0);
  const [propertie, setPropertie] = useState("");

  const categoryArr = [
    {
      image: images.nft_image_1,
      category: "Sports",
    },
    {
      image: images.nft_image_2,
      category: "Art",
    },
    {
      image: images.nft_image_3,
      category: "Music",
    },
    {
      image: images.nft_image_1,
      category: "Digital",
    },
    {
      image: images.nft_image_2,
      category: "Time",
    },
    {
      image: images.nft_image_3,
      category: "Photography",
    },
  ];

  return (
    <div className={styles.upload}>
      <DropZone
        title="JPG, PNG, WEBM , MAX 100MB"
        heading="Drag & drop file"
        subHeading="or Browse media on your device"
        itemName={itemName}
        website={website}
        description={description}
        royalties={royalties}
        fileSize={fileSize}
        category={category}
        propertie={propertie}
        image={images.upload}
      />

      <div className={styles.upload_box}>
        <div className={formStyles.Form_box_input}>
          <label htmlFor="nft">Item Name</label>
          <input
            type="text"
            placeholder="Huu Thuat"
            name=""
            id=""
            className={formStyles.Form_box_input_userName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div className={formStyles.Form_box_input}>
          <label htmlFor="website">Website</label>
          <div className={formStyles.Form_box_input_box}>
            <div className={formStyles.Form_box_input_box_icon}>
              <MdOutlineHttp />
            </div>
            <input
              type="text"
              placeholder="website"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <p className={styles.upload_box_input_para}>
            Ciscrypt will include a link to this URL on this item's detail page,
            so that users can click to learn more about it. You are welcome to
            link to your own webpage with more details.
          </p>
        </div>

        <div className={formStyles.Form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            placeholder="something about yourself in few words"
            name=""
            id=""
            cols={30}
            rows={6}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p>
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </p>
        </div>

        <div className={formStyles.Form_box_input}>
          <label htmlFor="name">Choose collection</label>
          <p className={styles.upload_box_input_para}>
            Choose an exiting collection or create a new one
          </p>

          <div className={styles.upload_box_slider_div}>
            {categoryArr.map((item, index) => (
              <div
                className={`${styles.upload_box_slider} ${
                  active == index + 1 ? styles.active : ""
                }`}
                key={index + 1}
                onClick={() => {
                  setCategory(item.category);
                  setActive(index + 1);
                }}
              >
                <div className={styles.upload_box_slider_box}>
                  <div className={styles.upload_box_slider_box_img}>
                    <Image
                      src={item.image}
                      alt="image"
                      width={70}
                      height={70}
                      className={styles.upload_box_slider_box_img_img}
                    />
                  </div>
                  <div className={styles.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>{item.category}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={formStyles.Form_box_input_social}>
          <div className={formStyles.Form_box_input}>
            <label htmlFor="royalties">Royalties</label>
            <div className={formStyles.Form_box_input_box}>
              <div className={formStyles.Form_box_input_box_icon}>
                <FaPercent />
              </div>
              <input
                type="text"
                placeholder="20%"
                onChange={(e) => setRoyalties(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyles.Form_box_input}>
            <label htmlFor="size">Size</label>
            <div className={formStyles.Form_box_input_box}>
              <div className={formStyles.Form_box_input_box_icon}>
                <MdOutlineAttachFile />
              </div>
              <input
                type="text"
                placeholder="5 MB"
                onChange={(e) => setFileSize(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyles.Form_box_input}>
            <label htmlFor="propertie">Propertie</label>
            <div className={formStyles.Form_box_input_box}>
              <div className={formStyles.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Propertie"
                onChange={(e) => setPropertie(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={styles.upload_box_btn}>
          <Button
            btnName="Upload"
            handleClick={() => {}}
            classStyle={styles.upload_box_btn_style}
          />
          <Button
            btnName="Preview"
            handleClick={() => {}}
            classStyle={styles.upload_box_btn_style}
          />
        </div>
      </div>
    </div>
  );
}
