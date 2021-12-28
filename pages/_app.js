import '../styles/index.css';
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'next-auth/client';
import NextNProgress from 'nextjs-progressbar';
import Mainlayout from '../components/MainLayout'
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <NextNProgress height={4} />
      <Mainlayout>
        <Component {...pageProps} />
      </Mainlayout>
    </Provider>
  )
}

export default MyApp;
