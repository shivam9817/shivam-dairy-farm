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
    FormHelperText
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Address() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef();
    const [name, setName] = useState("");
    const [num, setNum] = useState();
    const [pin, setPin] = useState();
    const [add, setAdd] = useState("");
    const [street, setStreet] = useState();

    const handleCheckout = () => {
        setAdd("")
        setName("");
        setNum("");
        setPin("");
        setStreet("");
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

                                    <Input type="number" placeholder="Mobile no" value={num} onChange={(e) => setNum(e.target.value)} />
                                    <FormHelperText>
                                        For all delivery related communication.
                                    </FormHelperText>
                                    <br />

                                    <Input type="number" placeholder="Pin Code" w="40%" value={pin} onChange={(e) => setPin(e.target.value)} />
                                    <br />
                                    <br />
                                    <Input type="text" placeholder="House no and building" value={add} onChange={(e) => setAdd(e.target.value)} />
                                    <br />
                                    <br />
                                    <Input type="text" placeholder="Street no" value={street} onChange={(e) => setStreet(e.target.value)} />
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
                                        _hover={{bg: "#1d8b1d", transform: "scale(1.1)"}}
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