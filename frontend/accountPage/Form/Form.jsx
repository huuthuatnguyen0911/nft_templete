import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineContentCopy, MdOutlineHttp } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

import styles from "./form.module.css";
import { Button } from "../../components/componentIndex";

export default function Form() {
  // copy wallet address from input field
  const copyAddress = () => {
    const address = document.getElementById("wallet_address");
    if (address === null) return;
    address.select();
    address.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + address.value);
  };
  return (
    <div className={styles.Form}>
      <div className={styles.Form_box}>
        <form action="">
          <div className={styles.Form_box_input}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Huu Thuat"
              name=""
              id=""
              className={styles.Form_box_input_userName}
            />
          </div>
          <div className={styles.Form_box_input}>
            <label htmlFor="email">Email</label>
            <div className={styles.Form_box_input_box}>
              <div className={styles.Form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input type="email" placeholder="abc@gmail.com" />
            </div>
          </div>
          <div className={styles.Form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea
              placeholder="something about yourself in few words"
              name=""
              id=""
              cols={30}
              rows={6}
            />
          </div>

          <div className={styles.Form_box_input}>
            <label htmlFor="website">Website</label>
            <div className={styles.Form_box_input_box}>
              <div className={styles.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" placeholder="website" />
            </div>
          </div>

          <div className={styles.Form_box_input_social}>
            <div className={styles.Form_box_input}>
              <label htmlFor="facebook">Facebook</label>
              <div className={styles.Form_box_input_box}>
                <div className={styles.Form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input type="text" placeholder="http://..." />
              </div>
            </div>
            <div className={styles.Form_box_input}>
              <label htmlFor="twitter">Twitter</label>
              <div className={styles.Form_box_input_box}>
                <div className={styles.Form_box_input_box_icon}>
                  <TiSocialTwitter />
                </div>
                <input type="text" placeholder="http://..." />
              </div>
            </div>
            <div className={styles.Form_box_input}>
              <label htmlFor="instagram">Instagram</label>
              <div className={styles.Form_box_input_box}>
                <div className={styles.Form_box_input_box_icon}>
                  <TiSocialInstagram />
                </div>
                <input type="text" placeholder="http://..." />
              </div>
            </div>
          </div>

          <div className={styles.Form_box_input}>
            <label htmlFor="wallet">Wallet address</label>
            <div className={styles.Form_box_input_box}>
              <div className={styles.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input
                type="text"
                placeholder="0xBd34f8f329799534aC260c8859c3876363784d88"
                id="wallet_address"
              />
              <div className={styles.Form_box_input_box_icon}>
                <MdOutlineContentCopy onClick={() => copyAddress()} />
              </div>
            </div>
          </div>

          <div className={styles.Form_box_btn}>
            <Button
              btnName="Upload profile"
              handleClick={() => {}}
              classStyle={styles.button}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
