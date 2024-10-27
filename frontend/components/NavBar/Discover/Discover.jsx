import React from "react";
import Link from "next/link";

import Style from "./Discover.module.css";

export default function Discover() {
  const discover = [
    {
      name: "Collections",
      link: "collections",
    },
    {
      name: "Search",
      link: "search-page",
    },
    {
      name: "Author Profile",
      link: "author",
    },
    {
      name: "NFT Details",
      link: "nft-detail",
    },
    {
      name: "Account Settings",
      link: "account",
    },
    {
      name: "Upload NFT",
      link: "upload-nft",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];

  return (
    <div>
      {discover.map((item, index) => (
        <div className={Style.discover} key={index + 1}>
          <Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}
