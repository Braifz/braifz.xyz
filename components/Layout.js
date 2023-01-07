import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="w-full">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
