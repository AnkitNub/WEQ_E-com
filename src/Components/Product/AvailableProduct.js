import classes from "./AvailableProduct.module.css";
import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";
import { useEffect, useState } from "react";

const AvailableProduct = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("https://fakestoreapi.com/Products");
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const loadedprod = [];
      for (const key in responseData) {
        loadedprod.push({
          id: key,
          name: responseData[key].title,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
        });
      }
      setProduct(loadedprod);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setIsError(error.message);
    });
  }, []);

  if (isError) {
    return (
      <section className={classes.prodError}>
        <p>{isError}</p>
      </section>
    );
  }
  if (isLoading) {
    <section>
      <p>Loading....</p>
    </section>;
  }
  const prodList = product.map((prod) => (
    <ProductItem
      key={prod.id}
      id={prod.id}
      name={prod.name}
      description={prod.description.slice(0, 140)}
      price={prod.price}
      image={prod.image}
    />
  ));
  return (
    <section className={classes.prod}>
      <Card>
        <div className={classes.grid}>{prodList}</div>
      </Card>
    </section>
  );
};

export default AvailableProduct;
