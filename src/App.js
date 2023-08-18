import {
  AccountBalanceRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import "./App.css";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";
import BannerName from "./components/BannerName";
import deliveryboy from "./images/deliveryboy.png";
import SubmenuContainer from "./components/SubmenuContainer";
import MenuCard from "./components/MenuCard";
import { MenuItems, Items } from "../src/components/Data";
import ItemCard from "./components/ItemCard";
import foodone from "../src/images/foodone.png";
import { useEffect, useState } from "react";
import DebitCard from "./components/DebitCard";
import CartMenuContainer from "./components/CartMenuContainer";
import CartItem from "./components/CartItem";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );

  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // Menucard Active toggle
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData, cart]);

  const setdata = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };

  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Main Section  */}
      <main>
        <div className="mainContainer">
          {/* Banner */}
          <div className="banner">
            <BannerName name={"Nadir Ali"} discount={"20"} link={"#"} />
            <img className="deliveryboy" src={deliveryboy} alt="" />
          </div>

          {/* dish container */}
          <div className="dishContainer">
            <div className="menuCard">
              <SubmenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setdata(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id == 1 ? true : false}
                    />
                  </div>
                ))}
            </div>
            <div className="dishitemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitcardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>
          <div className="menuCard">
            <SubmenuContainer name={"Cart Items"} />
          </div>
          {!cart ? (
            <div className="empty"><h3>Add some Products</h3></div>
           ) : ( 
            <div className="cartCheckoutContainer">
            <div className="cartContainer">
              <CartMenuContainer name={"Cart Items"} />
              <div className="carItems">
                {cart && 
                 cart.map((data) => (
                  <CartItem
                  key={data.id}
                  itemId={data.itemId}
                  name={data.name}
                  imgSrc={data.imgSrc}
                  price={data.price}
                />
                 ))}
              </div>
            </div>
            <div className="totalSection">
              <h3>Total</h3>
              <p>
                <span>$</span>45.0
              </p>
            </div>
            <button className="checkout">Checkout</button>
          </div>
          )} 
            
          
        </div>
      </main>

      {/* bootom menu  */}
      <div className="bottomContainer">
        <div className="bottomMenu">
          
          <ul id="menu">
            {/* prettier-ignore */}
            <MenuContainer link={'#'} icon={<HomeRounded />} isHome />
            {/* prettier-ignore */}
            <MenuContainer link={'#'} icon={<Chat />} />
            {/* prettier-ignore */}
            <MenuContainer link={'#'} icon={<AccountBalanceRounded />} />
            {/* prettier-ignore */}
            <MenuContainer link={'#'} icon={<Favorite />} />
            {/* prettier-ignore */}
            <MenuContainer link={'#'} icon={<SummarizeRounded />} />
            {/* prettier-ignore */}
            <MenuContainer link={'#'} icon={<Settings />} />

            <div className="indicator"></div>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default App;
