import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pt-16">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}
