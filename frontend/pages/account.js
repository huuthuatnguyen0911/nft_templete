import React, { useCallback, useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

import styles from "../styles/account.module.css";
import images from "../img";
import Form from "../accountPage/Form/Form";

export default function account() {
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
    <div className={styles.account}>
      <div className={styles.account_info}>
        <h1>Profile Settings</h1>
        <p>
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
      </div>

      <div className={styles.account_box}>
        <div className={styles.account_box_img} {...getRootProps()}>
          <input type="file" {...getInputProps()} hidden />
          <Image
            src={images.user1}
            alt="avatar"
            width={150}
            height={150}
            className={styles.account_box_img_img}
          />
          <p className={styles.account_box_img_para}>Change Image</p>
        </div>
        <div className={styles.account_box_form}>
          <Form />
        </div>
      </div>
    </div>
  );
}
