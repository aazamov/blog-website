import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark-1 m-auto mb-10 mt-6 flex w-[94%] items-center justify-between rounded-2xl px-8 py-4 text-white">
      <Link className="text-[32px]" href={"/"}>
        Loga
      </Link>
      <div>© Sevimli 2024. All rights reserved</div>
    </div>
  );
};

export default Footer;
