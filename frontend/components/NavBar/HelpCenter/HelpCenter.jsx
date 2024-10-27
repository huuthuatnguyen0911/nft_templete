import React from "react";
import Link from "next/link";

import Style from "./HelpCenter.module.css";

export default function HelpCenter() {
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact us",
      link: "contact-us",
    },
    {
      name: "Sign up",
      link: "sign-up",
    },
    {
      name: "Sign in",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  return (
    <div className={Style.box}>
      {helpCenter.map((item, index) => (
        <div className={Style.helpCenter} key={index + 1}>
          <Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}
