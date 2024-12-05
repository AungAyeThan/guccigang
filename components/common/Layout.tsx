import { useRef, Fragment } from "react";

interface IProps {
  children: JSX.Element;
}

import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }: IProps) => {
  const ref = useRef(null);

  return (
    <Fragment>
      <Navbar />
      <div ref={ref}>{children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
