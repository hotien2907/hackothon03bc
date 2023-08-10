import React, { useEffect, useState } from "react";
import Header from "./Header";
import ItemProduct from "./ItemProduct";
import TableCart from "./TableCart";
import swal from "sweetalert";
function HomePage() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Cola",
      price: 600000,
      image:
        "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
    },

    {
      id: 2,
      title: "Sprite",
      price: 5000000,
      image: "https://images.ofix.com/product-image/s99509_2.jpg",
    },
    {
      id: 3,
      title: "Ayran",
      price: 300000,
      image:
        "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
    },
    {
      id: 4,
      title: "Salgam",
      price: 40000000,
      image: "http://esenlik.com.tr//images/prod/5704.jpg",
    },
    {
      id: 5,
      title: "Cay",
      price: 30000,
      image:
        "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg",
    },
    {
      id: 6,
      title: "Kahve",
      price: 10000000,
      image:
        "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ=",
    },
    {
      id: 7,
      title: "Soda",
      price: 400000,
      image: "http://esenlik.com.tr//images/prod/2928.jpg",
    },

    {
      id: 8,
      title: "Lüx Kol Saati",
      price: 250000000,
      image:
        "https://www.chuphinhsanpham.vn/wp-content/uploads/2022/03/chup-anh-san-pham-dep-lon-bia-saigon-0001.jpg",
    },
    {
      id: 9,
      title: "Bugatti Chiron",
      price: 2500000,
      image:
        "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg",
    },
    {
      id: 10,
      title: "Iskender",
      price: 5000000,
      image:
        "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg",
    },
    {
      id: 11,
      title: "Lahmacun",
      price: 120000,
      image:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
    },
    {
      id: 12,
      title: "Malikane",
      price: 2500000000,
      image:
        "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg",
    },
    {
      id: 13,
      title: "Helicopter",
      price: 28750000,
      image:
        "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
    },
    {
      id: 14,
      title: "Luxury Yatch",
      price: 17500000,
      image: "https://d.neoldu.com/news/57966.jpg",
    },
    {
      id: 15,
      title: "Limosine",
      price: 1000000,
      image:
        "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
    },
    {
      id: 16,
      title: "Ada",
      price: 125000000,
      image: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
    },
    {
      id: 15,
      title: "Stadium",
      price: 2500000,
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg",
    },
    {
      id: 18,
      title: "Bitcoin",
      price: 6000000,
      image:
        "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg",
    },
  ]);
  const [isCart, setIsCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [money, setMoney] = useState(132000000000);
  const handleCart = (item, action) => {
    const existingCartItem = cart.find((cartItem) => cartItem.id === item.id);
    if (action === "ADD") {
      if (existingCartItem) {
        existingCartItem.quantity += 1;
        setCart([...cart]);
      } else {
        setCart([...cart, { ...item, quantity: 1 }]);
      }
    } else {
      if (item.quantity) {
        setCart([...cart, { ...item }]);
      }
    }
    swal("THÀNH CÔNG!", "Thêm vào giỏ hàng!", "success");
    handleTotal();
    handleMoney();
  };

  const handleDeleleCartObj = (item) => {
    let updateCart = cart.filter((product) => {
      return product.id !== item.id;
    });
    setCart(updateCart);
    handleTotal();
    handleMoney();
  };

  const handleTotal = () => {
    let newTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      newTotal += cart[i].quantity * cart[i].price;
    }
    setTotal(newTotal);
  };

  const handleUpdate = (updatedItem, action) => {
    if (action === "UP") {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === updatedItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === updatedItem.id && cartItem.quantity > 1
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }

    handleTotal();
    handleMoney();
  };

  const handleMoney = () => {
    let moneys = money - total;
    setMoney(moneys);
  };
  return (
    <div className="product">
      <Header money={money} />
      <div className="container">
        {isCart && (
          <TableCart
            cart={cart}
            handleDeleleCartObj={handleDeleleCartObj}
            handleUpdate={handleUpdate}
            total={total}
          />
        )}
      </div>

      <main>
        <div className="backGround">
          <div className="container">
            <div className="wrapper_flex">
              {data.map((item, i) => (
                <ItemProduct
                  key={i}
                  itemProduct={item}
                  handleCart={handleCart}
                  carts={cart}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="cart">
        <button onClick={() => setIsCart(!isCart)}>
          <p className="cart-p">{cart.length}</p>cart{" "}
        </button>
      </div>
    </div>
  );
}

export default HomePage;
