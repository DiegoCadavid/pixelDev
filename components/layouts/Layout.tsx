import Footer from "../UI/footer/Footer";
import Header from "../UI/header/Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      {/* Arrows */}

      

      {/* Content */}
      <div className="flex flex-col flex-grow flex-shrink-0">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
