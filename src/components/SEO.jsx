import { Helmet } from "react-helmet-async";

function SEO() {
  return (
    <Helmet>
      <title>Taron | Frontend Developer React Portfolio</title>

      <meta
        name="description"
        content="Taron is a Frontend Developer specialized in React, JavaScript and Tailwind CSS. Building fast, responsive and SEO-friendly websites."
      />

      <meta
        name="keywords"
        content="Taron, Frontend Developer, React Developer, JavaScript Developer, React Portfolio, Tailwind CSS, Web Developer"
      />

      <meta name="author" content="Taron" />

      {/* Google / Social Media preview */}
      <meta
        property="og:title"
        content="Taron | Frontend Developer React Portfolio"
      />

      <meta
        property="og:description"
        content="Modern React websites, responsive design and SEO friendly applications."
      />

      <meta property="og:type" content="website" />

      <meta
        property="og:url"
        content="https://react-portfolio-delta-seven-93.vercel.app/"
      />

      <html lang="en" />
    </Helmet>
  );
}

export default SEO;
