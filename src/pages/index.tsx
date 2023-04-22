import Head from "next/head";
import MetaTagGenerator from "../components/MetaTagGenerator";
import Header from "@/components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>SEO Meta Tag Generator</title>
        <meta
          name="description"
          content="Generate optimized meta tags for your website with my SEO Meta Tag Generator! Improve your website's search engine ranking and increase your online visibility by creating custom meta tags for your web pages."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="-mt-10 container mx-auto min-h-screen flex items-center justify-center">
        <MetaTagGenerator />
      </div>
    </>
  );
};

export default Home;
