import React, { useState } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Stack,
    Input,
    FormControl,
    FormHelperText,
    useToast
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Address() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setmobileNumber] = useState();
    const [postalCode, setpostalCode] = useState();
    const [shipmentAddress, setshipmentAddress] = useState("");
    // const [street, setStreet] = useState();
    const toast = useToast();
    const uid = localStorage.getItem("user_id");
    const token = localStorage.getItem('access_token');

    const handleCheckout = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/shipment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `${uid}`,
                },
                body: JSON.stringify({
                    userID: uid,
                    email: email,
                    shipmentAddress: shipmentAddress,
                    mobilemobileNumberber: mobileNumber,
                    postalCode: postalCode,
                }),
            });

            if (response.ok) {
               
                alert("data submitted")
                setshipmentAddress("");
                setName("");
                setEmail("");
                setmobileNumber("");
                setpostalCode("");
                console.log("Shipment address saved successfully");
                // Add any other logic you want to perform after a successful save
            } else {
                const data = await response.json();
                console.error("Error:", data.error || "Failed to save shipment address");
                alert(data.error)
            }
        } catch (error) {
            console.error("Error:", error); 
          alert("Error occured")
        }

    }
    return (
        <>
            <Button
                bg="#239722"
                color="white"
                fontWeight="700"
                fontSize="16px"
                right="4"
                w="100%"
                margin="2%"
                transition="all 0.4s ease"
                rounded={"none"}
                _hover={{ transition: "all 0.6s ease", transform: "scale(1.1)" }}
                onClick={onOpen}
                variant="solid"
            >
                Continue
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                initialFocusRef={firstField}
                onClose={onClose}
                size="sm">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                        Add Delivery Address
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing="24px">
                            <form isRequired>
                                <FormControl isRequired>
                                    <Input type="text" placeholder="Deliver to" value={name} onChange={(e) => setName(e.target.value)} />
                                    <br />
                                    <br />

                                    <Input type="email" placeholder="user's email" w="40%" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <FormHelperText>
                                        For all delivery related communication.
                                    </FormHelperText>
                                    <br />
                                    <Input type="number" placeholder="Mobile no" value={mobileNumber} onChange={(e) => setmobileNumber(e.target.value)} />
                                    <br />
                                    <br />
                                    <Input type="number" placeholder="Pin Code" w="40%" value={postalCode} onChange={(e) => setpostalCode(e.target.value)} />
                                    <br />
                                    <br />
                                    <Input type="text" placeholder="Address" value={shipmentAddress} onChange={(e) => setshipmentAddress(e.target.value)} />
                                    <br />
                                    {/* <Input type="text" placeholder="Street no" value={street} onChange={(e) => setStreet(e.target.value)} /> */}
                                    <br />
                                    {" "}
                                    <Link to={"https://wa.me/918962699849"}>
                                        <Button mt={4}
                                            bg="#239722"
                                            color="white"
                                            fontWeight="700"
                                            fontSize="16px"
                                            right="4"
                                            margin="5%"
                                            transition="all 0.4s ease"
                                            _hover={{ bg: "#1d8b1d", transform: "scale(1.1)" }}
                                            rounded={"none"} type="submit" onClick={handleCheckout}>
                                            Order Now
                                        </Button>
                                    </Link>
                                </FormControl>
                            </form>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Address;