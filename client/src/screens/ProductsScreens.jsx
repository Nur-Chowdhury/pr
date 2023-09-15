import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { products } from "../products";

const ProductsScreens = () => {
  return (
    <Wrap spacing="30px" justify="center" minHeight="100vh">
      {products.map((product) => (
        <WrapItem key={product._id}>
          <Center h="550px" w="250px">
            <ProductCard product={product} />
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default ProductsScreens;
