// pages/_app.js
// Minimal Next.js app wrapper — no global CSS needed (style.css is in /public)
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
