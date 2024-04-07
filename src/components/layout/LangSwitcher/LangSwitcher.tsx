import LanguageSwitcher from "@/components/utils/LanguageSwitcher";
import React from "react";

const LangSwitcher = () => {
  return (
    <>
      <div>
        <div className="flex gap-4">
          <LanguageSwitcher className={""} locale={"ru"}>
            Ру
          </LanguageSwitcher>
          <LanguageSwitcher className={""} locale={"en"}>
            En
          </LanguageSwitcher>
          <LanguageSwitcher className={""} locale={"uz"}>
            Uz
          </LanguageSwitcher>
        </div>
      </div>
    </>
  );
};

export default LangSwitcher;
