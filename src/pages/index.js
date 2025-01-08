import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/header";
import DiscoverSection from "../components/discoverySection"; // Import the new component
import ProductList from "../components/ProductListing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Header />
      <div style={{padding:'0px 20px'}}>
        <DiscoverSection />
      </div>
    </>
  );
}
