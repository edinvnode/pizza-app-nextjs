import "../styles/globals.css";
import { ReactNode, FC } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ReduxProvider from "@/redux/ReduxProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "👧 Torte od papira Mery 🎂",
  description:
    "Unikatne papirne torte koje se mogu puniti slatkišima, sitnicama i iznenađenjima — savršene za rođendane, vrtiće, mature, diplome i sve posebne prilike. Svaka torta dolazi s čestitkom i može biti prazna ili puna — po vašoj želji.",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          {children}
          <Toaster
            containerStyle={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            toastOptions={{
              className:
                "bg-gradient-to-br from-blue-400 to-pink-400 text-white font-bold rounded-3xl p-8 text-2xl shadow-2xl w-96 text-center",
              duration: 2000,
            }}
          />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
