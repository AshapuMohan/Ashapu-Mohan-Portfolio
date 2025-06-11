import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Mohan Ashapu | Ashapu Mohan | Full Stack Developer</title>
      <meta name="description" content="Portfolio of Mohan Ashapu (also known as Ashapu Mohan), a passionate web developer skilled in React, Node.js, and modern web technologies." />
      <meta name="keywords" content="Mohan Ashapu, Ashapu Mohan, Ashapu, Mohan, Web Developer Portfolio, React Developer, Indian Developer, Indian Coder, BTech IT" />
      <meta name="author" content="Mohan Ashapu" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ashapumohanportfolio.netlify.app/" />
      <meta property="og:title" content="Mohan Ashapu | Developer Portfolio" />
      <meta property="og:description" content="Explore the projects, skills, and contact information of Mohan Ashapu." />
      <meta property="og:image" content="https://ashapumohanportfolio.netlify.app/portfolio.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mohan Ashapu | Full Stack Developer Portfolio" />
      <meta name="twitter:description" content="Portfolio of Mohan Ashapu - projects, resume, skills, and contact info." />
      <meta name="twitter:image" content="https://ashapumohanportfolio.netlify.app/og-image.png" />
      <meta name="google-site-verification" content="RhShA_HOE53noCZ9CARDpANtFAKAUcJab2388EfmHs0" />
    </Helmet>
  );
};

export default SEO;
