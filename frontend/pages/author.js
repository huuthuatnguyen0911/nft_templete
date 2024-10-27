import React, { useState, useEffect } from "react";

import styles from "../styles/author.module.css";
import { Banner, NFTCardTwo } from "../collectionPage/collectionIndex";

import { Brand, Title } from "../components/componentIndex";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNFTCardBox,
} from "../authorPage/componentIndex";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import images from "../img";

export default function author() {
  const popularArray = [
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
  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className={styles.banner}>
      <Banner bannerImage={images.creatorbackground1} />
      <AuthorProfileCard />
      <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNFTCardBox
        collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}
      />
      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NFT music or video"
      />
      <div className={styles.author_box}>
        {popularArray.map((item, index) => (
          <FollowerTabCard item={item} index={index} />
        ))}
      </div>
      <Brand />
    </div>
  );
}
