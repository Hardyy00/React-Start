import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    id: "i1",
    title: "Apple",
    price: 6,
    description: "Eat a day, keep doctor away",
  },
  { id: "i2", title: "Banana", price: 12, description: "Good for your health" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => (
          <ProductItem {...item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
