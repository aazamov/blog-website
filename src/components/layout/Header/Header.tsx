import Link from "next/link";
import React from "react";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import { FormattedMessage } from "react-intl";
import { ROUTES } from "@/config/routes";

const Header = () => {
  return (
    <div className="bg-dark-1 m-auto mt-6 flex w-[94%] items-center justify-between rounded-2xl px-8 py-4 text-white">
      <div>
        <Link className="text-[32px]" href={"/"}>
          Logo
        </Link>
      </div>
      <nav>
        <ul className="flex items-center gap-10">
          <li>
            <Link className="hover:underline" href={ROUTES.MAIN}>
              <FormattedMessage id="home" />
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={ROUTES.BLOG.BLOGS}>
              <FormattedMessage id="blog" />
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={ROUTES.CATEGORY.CATEGORIES}>
              <FormattedMessage id="category" />
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={ROUTES.NEWS.NEWSPAGE}>
              <FormattedMessage id="news" />
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={ROUTES.SAVED}>
              <FormattedMessage id="saved" />
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Header;
