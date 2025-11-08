import "../styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ReduxProvider from "@/redux/ReduxProvider";

<<<<<<< HEAD
export const metadata = {
  title: "Pizza Order App",
  description: "Full stack web app",
};

=======
>>>>>>> 3a987414eb50bb2cdd972783c748cb7773135173
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
<<<<<<< HEAD
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
=======
        <Header />
        {children}
        <Footer />
>>>>>>> 3a987414eb50bb2cdd972783c748cb7773135173
      </body>
    </html>
  );
}
