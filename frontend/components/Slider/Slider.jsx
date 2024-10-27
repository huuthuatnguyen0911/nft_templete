import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

import styles from "./slider.module.css";
import SliderCard from "./SliderCard/SliderCard";
import images from "../../img";

export default function Slider() {
  const sliderArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
  ];
  const [width, setWidth] = useState(0);
  const [currentTransform, setCurrentTransform] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  }, []);

  const handleScroll = (direction) => {
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
    let newTransform = currentTransform;

    if (direction === "left") {
      newTransform = Math.min(currentTransform + scrollAmount, 0);
    } else {
      newTransform = Math.max(currentTransform - scrollAmount, -width);
    }

    setCurrentTransform(newTransform);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slider_box}>
        <h2>Explore NFTs video</h2>
        <div className={styles.slider_box_button}>
          <p>Click on play icon & enjoy NFTs Video</p>
          <div className={styles.slider_box_button_btn}>
            <div
              className={styles.slider_box_button_btn_icon}
              onClick={() => handleScroll("left")}
            >
              <TiArrowLeftThick />
            </div>
            <div
              className={styles.slider_box_button_btn_icon}
              onClick={() => handleScroll("right")}
            >
              <TiArrowRightThick />
            </div>
          </div>
        </div>

        <motion.div className={styles.slider_box_itmes} ref={dragSlider}>
          <motion.div
            className={styles.slider_box_item}
            style={{ transform: `translateX(${currentTransform}px)` }}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {sliderArray.map((el, i) => (
              <SliderCard key={i + 1} el={el} i={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
