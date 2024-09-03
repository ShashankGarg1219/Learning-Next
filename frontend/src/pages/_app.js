 import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from "@/components/layouts/Layout";

export default function App({ Component, pageProps }) {
  return <ThemeProvider attribute="class">
    <Layout>
    <Component {...pageProps} />;
    </Layout>
  
    </ThemeProvider>
}