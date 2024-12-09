
import TopNav from "./components/topnav";
import Header from "./components/header";
import Banner from "./components/banner";
import Editor from "./components/editor";
import BestSeller from "./components/bestseller";
import ClassicProduct from "./components/classicproduct";
import Neural from "./components/neural";
import Featured from "./components/featured";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
     <TopNav/>
     <Header/>
     <Banner/>
     <Editor/>
     <BestSeller/>
     <ClassicProduct/>
     <Neural/>
     <Featured/>
     <Footer/>
    
    </div>
  );
}
