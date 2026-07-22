import { Helmet } from "react-helmet-async";

function SEO() {
  return (
    <Helmet>
      <title>Taron Badalyan | Frontend Developer | React Developer</title>

      <meta
        name="description"
        content="Taron Badalyan is a Frontend Developer specializing in React, JavaScript, Tailwind CSS and modern web applications."
      />

      <meta
        name="keywords"
        content="Taron Badalyan, Frontend Developer, React Developer, JavaScript Developer, Web Developer"
      />

      <meta name="author" content="Taron Badalyan" />
    </Helmet>
  );
}

export default SEO;
