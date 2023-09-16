import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link as ReactLink } from "react-router-dom";

const Rating = ({ rating, numberOfReviews }) => {
  const { iconSize, setIconSize } = useState("14px");
  return (
    <Flex>
      <HStack spacing={"2px"}>
        <StarIcon size={iconSize} w={"14px"} color={"orange.500"} />
        <StarIcon
          size={iconSize}
          w={"14px"}
          color={rating >= 2 ? "orange.500" : "gray.200"}
        />
        <StarIcon
          size={iconSize}
          w={"14px"}
          color={rating >= 3 ? "orange.500" : "gray.200"}
        />
        <StarIcon
          size={iconSize}
          w={"14px"}
          color={rating >= 4 ? "orange.500" : "gray.200"}
        />
        <StarIcon
          size={iconSize}
          w={"14px"}
          color={rating >= 5 ? "orange.500" : "gray.200"}
        />
      </HStack>
      <Text fontSize={"md"} fontWeight={"bold"} ml={"4px"}>
        {`${numberOfReviews} ${numberOfReviews == 1 ? "review" : "reviews"}`}
      </Text>
    </Flex>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Stack
      p={2}
      spacing={"3px"}
      bg={useColorModeValue("white", "gray.800")}
      minW={"240px"}
      h={"450px"}
      borderWidth={"1px"}
      rounded={"lg"}
      shadow={"lg"}
      position={"relative"}
    >
      {product.isNew && (
        <Circle
          size={"10px"}
          top={2}
          right={2}
          position={"absolute"}
          bg={"green.500"}
        />
      )}
      {product.stock <= 0 && (
        <Circle
          size={"10px"}
          top={2}
          right={2}
          position={"absolute"}
          bg={"red.500"}
        />
      )}
      <Image src={product.image} alt={product.name} roundedTop={"lg"} />

      <Box maxH={"5"} alignItems={"baseline"} flex={"1"}>
        {product.stock <= 0 && (
          <Badge rounded={"full"} px={2} colorScheme="red" fontSize={".8em"}>
            Soldout
          </Badge>
        )}
        {product.isNew && (
          <Badge rounded={"full"} px={2} colorScheme="green" fontSize={".8em"}>
            New
          </Badge>
        )}
      </Box>
      <Flex mt={1} justifyContent={"space-between"} alignContent={"center"}>
        <Link
          as={ReactLink}
          to={`/product/${product._id}`}
          pt={2}
          cursor={"pointer"}
        >
          <Box fontSize={"2xl"} fontWeight={"semibold"} lineHeight={"tight"}>
            {product.name}
          </Box>
        </Link>
      </Flex>
      <Flex justifyContent={"space-between"} alignContent={"center"} py={2}>
        <Rating
          rating={product.rating}
          numberOfReviews={product.numberOfReviews}
        />
      </Flex>
      <Flex mt={1} justifyContent={"space-between"}>
        <Box fontSize={"2xl"} color={useColorModeValue("gray.800", "white")}>
          <Box as="span" color={"gray.600"} fontSize={"lg"}>
            $
          </Box>
          {product.price.toFixed(2)}
        </Box>
        <Tooltip
          label="Add to cart"
          placement="top"
          bg={"white"}
          color={"gray.800"}
          fontSize={"1.2em"}
        >
          <Button
            variant={"ghost"}
            display={"flex"}
            disabled={product.stock <= 0}
          >
            <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
