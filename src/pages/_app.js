import { Provider } from 'react-redux'
import Store from '../../Store/Store'
import '@/styles/globals.scss'
import '@/styles/tailwind.scss'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={Store}>

      <Component {...pageProps} />

    </Provider>
  );
}
