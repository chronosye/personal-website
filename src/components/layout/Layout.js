import { Fragment } from 'react';

import classes from './Layout.module.scss';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar/>
      <main className={classes.main}>{props.children}</main>
      <Footer/>
    </Fragment>
  );
};

export default Layout;