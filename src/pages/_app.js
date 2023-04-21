import { Provider } from 'react-redux'
import Store from '../../Store/Store'
import Navbar from '@/components/Navbar'
import '@/styles/globals.scss'
import '@/styles/tailwind.scss'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
