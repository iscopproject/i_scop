// pages/index.js
// ─────────────────────────────────────────────────────────────────
// The original project is a single-page HTML app.
// We serve it via a Next.js page using dangerouslySetInnerHTML
// so the existing HTML/CSS/JS from /public works without changes.
// All API calls go to /api/* Next.js routes.
// ─────────────────────────────────────────────────────────────────

import Head from 'next/head';
import fs from 'fs';
import path from 'path';

export default function Home({ htmlContent }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>School Clubs &amp; Organizations Hub</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="stylesheet" href="/style.css" />
      </Head>
      {/* 
        Render the existing HTML body content directly.
        The <head> tags inside htmlContent are ignored — we use Next.js Head above.
        We extract just the <body> inner content.
      */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <script src="/script.js" />
    </>
  );
}

// Read the HTML file at build time and extract the <body> contents
export async function getStaticProps() {
  const htmlPath = path.join(process.cwd(), 'public', 'index.html');
  const raw = fs.readFileSync(htmlPath, 'utf-8');

  // Extract the content between <body> and </body>
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  // Remove the <script src="script.js"> tag — Next.js adds it separately
  let htmlContent = bodyMatch ? bodyMatch[1] : raw;
  htmlContent = htmlContent.replace(/<script\s+src=["']script\.js["'][^>]*><\/script>/gi, '');

  return {
    props: { htmlContent },
  };
}
