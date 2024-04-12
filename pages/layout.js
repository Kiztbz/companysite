import styles from './layout.module.css';
import Header from './components/header';
import Footer from './components/footer';

const Layout = ({ children }) => {
  return (
    <div>
       <Head>
        <title>Your Website Title</title>
        <meta name="description" content="Your website description" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
