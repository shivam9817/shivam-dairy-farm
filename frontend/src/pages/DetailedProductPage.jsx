import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaShareAlt, FaStar } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa";
import {
    Box,
    Button,
    Flex,
    Text,
    FormControl,
    FormLabel,
    RadioGroup,
    HStack,
    Radio,
    Select,
    Input,
    Stack,
    InputGroup,
    InputLeftAddon,
    // DatePicker,
    CircularProgress
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

function DetailedProductPage() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/product/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "appliction/json",
                        authorization: `${localStorage.getItem("access_token")}`
                    }
                });
                setData(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error.response.error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <Navbar />
            {isLoading ? (
                <CircularProgress
                    alignItems={"center"}
                    m={300}
                    isIndeterminate
                    color={'blue.800'}
                />
            ) : isError ? (
                <Text margin="10%" fontSize="28px" fontWeight="700" color="#001c99">Error Occurred while getting product list</Text>
            ) : data ? (
                <Box margin={"auto"} marginTop={"8%"} marginBottom={"8%"} px="40px" width={"60%"} boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" >

                    <Box >
                        <Flex className="product" w={"100%"} justify="space-between">
                            <Flex
                                className="img"
                                w="100%"
                                h="450px"
                                direction="column"
                                justify="space-between"
                            >
                                <Flex
                                    // overflow="hidden"
                                    h="100%"
                                    border={"2px solid #d4cdcd"}
                                    w="80%"
                                    borderRadius="md"
                                    align="center"
                                    justify="center"
                                    p="10px"
                                    cursor="pointer"
                                    margin={"3%"}
                                // background="#b4e5ff"
                                >
                                    <div className="figure" style={{ padding: "20px" }}>
                                        <img className="image-main" style={{ width: "130%" }} src={data.image} alt="" />
                                    </div>
                                </Flex>

                            </Flex>
                            <Box
                                className="description"
                                w="75%"
                                margin="auto"
                                textAlign="left"
                                color="#4f585e"
                                py="10px"
                            >
                                <Text
                                    istruncated="true"
                                    fontSize="26px"
                                    fontWeight="700"
                                    noOfLines={1}
                                    margin="2%"
                                >
                                    {data.name}
                                </Text>
                                <Flex
                                    className="price"
                                    align="center"
                                    w="40%"
                                    justify="space-between"
                                    margin="2%"
                                >
                                    <Text fontSize="22px" fontWeight="600" margin="1%" >
                                        ₹{data.o_price}{" "}
                                        {/* ₹125{" "} */}
                                    </Text>
                                    <Text fontSize="20px" fontWeight="400" margin="1%" color="#f30c0c" textDecoration="line-through">
                                        {" "}₹{data.price}{" "}
                                    </Text>

                                </Flex>
                                <Text fontSize="14px" color="#8e9ca7"
                                    margin="2%">
                                    <span style={{ color: "red" }}>*</span>Inclusive of all taxes
                                </Text>
                                {/* <Flex
                  align="center"
                  justify="start"
                  margin="10px"
                  px="25px"
                  color="white"
                  fontSize="11px"
                  fontWeight="600"
                  height="%"
                  w="36%"
                  bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
                >
                  20% OFF
                </Flex> */}

                                {/* <Flex
                                    className=" rating"
                                    paddingBottom="20px"
                                    w="35%"
                                    justify="space-between"
                                    align="center"
                                >
                                    <Flex color="#ffd344" fontSize="20px" align="center">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <TiStarHalfOutline fontSize="24px" />
                                        <FaRegStar />
                                    </Flex>
                                    <Text color="#8e9ca7" fontSize="14px">
                                        ({data.rating} ratings)
                                    </Text>
                                </Flex> */}
                                <Text fontWeight={"bold"} fontSize={"20px"}>
                                    Product Description:
                                </Text>{" "}

                                <Text textAlign="justify">{data.description}</Text>
                                {/* <Text py="14px" fontSize="12px">
                                    Delivery within <span style={{ fontWeight: "700" }}>2-3 business days</span>
                                </Text> */}
                        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
                       
                            <FormControl  marginTop={"10px"}>
                                <FormLabel fontSize={"18px"} fontWeight={"600"}>Liters</FormLabel>
                                <RadioGroup defaultValue="15L">
                                    <HStack spacing={4}>
                                        <Radio value="15L">15L</Radio>
                                        <Radio value="20L">20L</Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>

                            <FormControl>
                                <FormLabel fontSize={"18px"} fontWeight={"600"}>Type</FormLabel>
                                <RadioGroup defaultValue="farmFresh">
                                    <HStack spacing={4}>
                                        <Radio value="farmFresh">Farm Fresh</Radio>
                                        <Radio value="pasteurized">Pasteurized</Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>

                            <FormControl>
                                <FormLabel fontSize={"18px"} fontWeight={"600"}>Frequency</FormLabel>
                                <Select placeholder="Select frequency">
                                    <option value="daily">Daily</option>
                                    <option value="alternateDays">Alternate Days</option>
                                    <option value="two">Every 2 days</option>
                                    <option value="week">Weekly</option>
                                     </Select>
                            </FormControl>

                            <FormControl>
                                {/* <FormLabel fontSize={"18px"} fontWeight={"600"}>Date</FormLabel> */}
                                {/* <DatePicker /> */}
                            </FormControl>

                            <FormControl  marginBottom={"10px"}>
                                <FormLabel fontSize={"18px"} fontWeight={"600"}>Liter/Day</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon children="Liters" />
                                    <Input type="number" />
                                </InputGroup>
                            </FormControl>
                                <Button
                                    className="addToStore"
                                    variant="blue"
                                    background= "rgb(74,102,181)"
                                    // background="linear-gradient(90deg, #0140eb 0%, #002385 49%, #360000 100%)"
                                    color="white"
                                    fontWeight="700"
                                    fontSize="16px"
                                    right="4"
                                    height="2.8rem"
                                    w="9rem"
                                    margin="2%"
                                    transition="all 0.4s ease"
                                    _hover={{ transition: "all 0.6s ease", transform: "scale(1.1)" }}
                                // onClick={handleAddToCart}
                                >
                                    Order Now
                                </Button>
                                <Text fontSize="16px" py="6px">
                                    Or Visit nearby Store
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                    </Box>
            ) : (
                <Text textAlign="center" fontSize="18px" fontWeight="600" color="#001c99">
                    No product data available.
                </Text>
            )}
            <Footer />
        </>
    );
}

export default DetailedProductPage;