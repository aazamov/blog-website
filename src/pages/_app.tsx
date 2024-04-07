import Layout from "@/components/layout/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import uz from "../locale/uz.json";
import ru from "../locale/ru.json";
import en from "../locale/en.json";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const messages = {
  ru: ru,
  uz: uz,
  en: en,
};

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <IntlProvider
      locale={locale || "uz"}
      // @ts-ignore
      messages={messages[locale]}
    >
      <Layout>
        <Component {...pageProps} />
        <PrismicPreview repositoryName={repositoryName} />
      </Layout>
    </IntlProvider>
  );
}
