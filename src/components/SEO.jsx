import { Helmet } from "react-helmet-async";

function SEO() {
  return (
    <Helmet>
      <title>Frontend Developer | React Portfolio</title>

      <meta
        name="description"
        content="Professional Frontend Developer portfolio. React, JavaScript, Tailwind CSS and SEO friendly websites."
      />

      <meta
        name="keywords"
        content="Frontend Developer, React Developer, JavaScript, Web Developer, Portfolio"
      />

      <meta name="author" content="Frontend Developer" />
    </Helmet>
  );
}

export default SEO;
