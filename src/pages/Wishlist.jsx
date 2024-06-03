import "../assets/pages/Wishlist.css";
import Header from "../components/Header";

const Wishlist = () => {
  return (
    <>
      <Header />
      <section className="App">
        <header className="App-header">
          <h1>Wishlist</h1>
        </header>
        <main className="App-main">
          <ProductCard
            image="wishlist.png" // Replace with your image paths
            details="Product Details"
            price="Rp. 0.000.000"
            name="Product Name"
          />
          <ProductCard
            image="profile1.jpg" // Replace with your image paths
            details="Product Details"
            price="Rp. 0.000.000"
            name="Product Name"
          />
        </main>
        <footer className="App-footer">
          <a href="#" className="whatsapp-link">
            <img src="./landingpage/whatsapp-icon.png" alt="WhatsApp" />
          </a>
        </footer>
      </section>
    </>
  );
};

const ProductCard = ({ image, details, price, name }) => {
  return (
    <>
      <section className="product-card">
        <img src={image} alt={name} />
        <div className="product-info">
          <p>{details}</p>
          <p>{price}</p>
        </div>
        <h2>{name}</h2>
      </section>
    </>
  );
};

export default Wishlist;
