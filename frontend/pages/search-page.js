import React from "react";

import styles from "../styles/search_page.module.css";
import { Slider, Brand, Filter } from "../components/componentIndex";
import { SearchBar } from "../searchPage";
import { NFTCardTwo, Banner } from "../collectionPage/collectionIndex";
import images from "../img";

export default function search_page() {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
  ];
  return (
    <div className={styles.searchPage}>
      <Banner bannerImage={images.creatorbackground4} />
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
}
