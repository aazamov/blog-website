import LangSwitcher from "@/components/layout/LangSwitcher/LangSwitcher";
import React from "react";
import { FormattedMessage } from "react-intl";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <FormattedMessage id="home" />
    </div>
  );
};

export default HomePage;
