import Navbar from '@/components/Navbar'
import '@/styles/globals.scss'
import '@/styles/tailwind.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
