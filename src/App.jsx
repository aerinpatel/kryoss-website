import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}
