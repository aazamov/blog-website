import { useRouter } from "next/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

// @ts-ignore
const LanguageSwitcher = ({ className, children, locale }) => {
  const pathname = usePathname();

  return (
    <Link href={{ pathname }} locale={locale} className={className}>
      {children}
    </Link>
  );
};

export default LanguageSwitcher;
