import React, { Component } from 'react';
import Avatar from './components/Avatar'
import logo from './logo.svg';
import './App.css';
import Badge from "./components/Badge";
import Product from "./components/Product";

class App extends Component {
  render() {
      const images = [
          {
            avatarUrl: "/monkey_1x.jpg",
            avatarAlt: "monkey",
          },
          {
            avatarUrl: "/snake_1x.jpg",
            avatarAlt: "snake",
          },
          {
            avatarUrl: "/tiger_1x.jpg",
            avatarAlt: "tiger",
          },
      ];

      const avatarComponents = images.map((image) =>{
          return <Avatar
              avatarUrl={image.avatarUrl}
              name={image.avatarAlt}
              alt={image.avatarAlt}
              key={image.avatarUrl}
          />
      });

      const notifications = [10, 30, 300, 95, 10002];
      const notiComponents = notifications.map((notice) => {
          return <Badge
              count={notice}
          />
      });

      const products = [
          {
              name: "shirt",
              price: 30,
              discount: 15,
              image: "https://static1.squarespace.com/static/54715a5ee4b0222913424334/58b1ef83b3db2b9cf99f0d8e/57c64ec42e69cf3a289c183f/1538583237553/unnamed-2.jpg?format=1000w"
         },
          {
              name: "shoes",
              price: 89,
              discount: 0,
              image: "https://cdn.shopify.com/s/files/1/1218/8046/products/Boots_LightBrown_Side_1024x1024.png?v=1505571450"
          }
      ];
      const productComponents = products.map((prod) =>{
          return <Product
              name={prod.name}
              photo={prod.image}
              price={prod.price}
              discountPrice={prod.price * (100 - prod.discount)}
              alt={prod.name}
              />

      });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
            <div id="avatars">
                <section className="avatars">
                    {avatarComponents}
                </section>
                <p>
                    Credit to: <a href='https://dribbble.com/neetika/projects/315975-Animal-Avatars'>Designed by Neetika Agarwal</a>
                </p>
            </div>

            <div id="badges">
                <section className="badges">
                    {notiComponents}
                </section>
            </div>

            <div id="products">
                <section className="products">
                    {productComponents}
                </section>
            </div>



        </main>

      </div>
    );
  }
}

export default App;
