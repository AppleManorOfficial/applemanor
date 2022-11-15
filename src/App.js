import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Homepage from './pages/homePage/HomePage';
import AboutUs from './pages/aboutUs/AboutUs';
import ProductListHandMade from './pages/productList/productList-HandMade';
import ProductListLiving from './pages/productList/productList-Living';
import ProductListHerbal from './pages/productList/productList-Herbal';
import ProductListGift from './pages/productList/productList-Gift';
import Page404 from './pages/404/Page404';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import './App.scss';
import ContatctUs from './pages/ContactUs/ContatctUs';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <ScrollToTop />
      <Routes basename="/applemanor">
        <Route path="*" element={<Page404></Page404>}></Route>
        <Route exact path="/homepage" element={<Homepage></Homepage>}></Route>
        <Route exact path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route
          exact
          path="/handmade"
          element={<ProductListHandMade></ProductListHandMade>}
        ></Route>
        <Route
          exact
          path="/herbal"
          element={<ProductListHerbal></ProductListHerbal>}
        ></Route>
        <Route
          exact
          path="/living"
          element={<ProductListLiving></ProductListLiving>}
        ></Route>
        <Route
          exact
          path="/giftbox"
          element={<ProductListGift></ProductListGift>}
        ></Route>
        <Route exact path="/contactus" element={<ContatctUs />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
