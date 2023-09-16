import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
  Spinner,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../redux/action/productActions";

const ProductsScreens = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Wrap spacing="30px" justify="center" minHeight="100vh">
      {loading ? (
        <Stack direction={"row"} spacing={4}>
          <Spinner
            mt={20}
            thickness="2px"
            speed=".65s"
            emptyColor="gray.200"
            color="orange.600"
            size={"xl"}
          />
        </Stack>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Upps!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        products.map((product) => (
          <WrapItem key={product._id}>
            <Center h="550px" w="250px">
              <ProductCard product={product} />
            </Center>
          </WrapItem>
        ))
      )}
    </Wrap>
  );
};

export default ProductsScreens;
