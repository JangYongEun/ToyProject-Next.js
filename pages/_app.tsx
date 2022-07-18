import 'antd/dist/antd.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../src/component/Footer/Footer'
import Top from '../src/component/Top/Top'
import { useRouter } from 'next/router';
import { getIndex } from '../src/component/PageIndex/PageIndex';
import Seo from '../src/component/Seo/Seo';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageIndex: number = getIndex(router.pathname);
  return (
    <div>
      <Seo/>
      <Top index={pageIndex}/>
      <Component index={pageIndex} { ...pageProps } />
      <Footer/>
    </div>
  )
}

export default MyApp;
