import ProductList from "./components/ProductList";
import Header from "./components/Header";
import StickySuggestButton from "./components/StickySuggestButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoriteProductList from "./components/FavoriteProductList";
import ViewHistory from "./components/ViewHistory";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/favorite" element={<FavoriteProductList />}></Route>
        <Route path="/view-history" element={<ViewHistory />}></Route>
      </Routes>
      <StickySuggestButton></StickySuggestButton>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
