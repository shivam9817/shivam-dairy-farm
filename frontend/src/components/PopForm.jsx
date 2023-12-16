// PopUpForm.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  CSSReset,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import logo from "../asset/tagLine.png"
import popup from "../asset/popupimg.jpg"


const Form = {
  name: '',
  email: '',
  address: '',
  mobileNo: '',
  city: '',
  date: '',
  customerId: '',

}
const PopUpForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPopUp, setShowPopUp] = useState(false);
  const [form, setForm] = useState([Form]);
  const breakpointValue = useBreakpointValue({ base: "base", sm: "sm", md: "md" });

  const toast = useToast();
  const formChangeHandler = (e) => {
    e.preventDefault();
    setForm({
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.mobileNo]: e.target.value,
      [e.target.address]: e.target.value,
      [e.target.city]: e.target.value,
      [e.target.date]: e.target.value,
      [e.target.customerId]: e.target.email,
    });
  }

  useEffect(() => {
    // Show the pop-up form after 2 minutes (adjust the time as needed)
    const timeoutId = setTimeout(() => {
      setShowPopUp(true);
      onOpen();
    }, 2000); // 2 minutes = 120,000 milliseconds

    return () => clearTimeout(timeoutId);
  }, [onOpen]);

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/query/export', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast({
          title: 'Data Submitted',
          description: 'Data Submitted successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        setForm(Form)
      } else {
        // Handle error
        const data = await response.json();
        console.log(data.error)
        toast({
          title: 'Error',
          description: data.message || 'Failed to submit data',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error creating data:', error);
      // Show a more user-friendly error message
      toast({
        title: 'Error',
        description: 'Failed to submit data. Please try again later.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <ChakraProvider>
      <CSSReset />
      {showPopUp && (
        <Modal isOpen={isOpen} onClose={onClose}>

          <ModalOverlay />
          <ModalContent  bg={"#f8e4d2"} rounded={"none"} fontFamily={"'Satisfy', cursive"}>
           <Box  p={6} border={"6px solid #ffffff"} >
                <ModalHeader fontSize={"24px"}>
                  Sample Data
                </ModalHeader>
                <ModalCloseButton m={4}/>
                <ModalBody>
                  <form onSubmit={formSubmit}>
                    <FormControl>
                      <FormLabel fontSize={"18px"} mb={"0.5%"} >
                        Name:
                      </FormLabel>
                      <Input
                      borderColor={"white"}
                        name="name"
                        onChange={formChangeHandler}
                        value={form.name} rounded={"none"} type="text" />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={"18px"} mt={"3%"} mb={"0.5%"}>
                        Email:
                      </FormLabel>
                      <Input
                      borderColor={"white"}
                        name="email"
                        onChange={formChangeHandler}
                        value={form.email} rounded={"none"} type="email" />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={"18px"} mt={"3%"} mb={"0.5%"}>
                        Phone No:
                      </FormLabel>
                      <Input
                      borderColor={"white"}
                        name="mobileNo"
                        onChange={formChangeHandler}
                        value={form.mobileNo} rounded={"none"} type="text" />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={"18px"} mt={"3%"} mb={"0.5%"}>
                        Address:
                      </FormLabel>
                      <Input
                      borderColor={"white"}
                        name="address"
                        onChange={formChangeHandler}
                        value={form.address} rounded={"none"} type="text" />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={"18px"} mt={"3%"} mb={"0.5%"}>
                        City:
                      </FormLabel>
                      <Input
                      borderColor={"white"}
                        name="city"
                        onChange={formChangeHandler}
                        value={form.city} rounded={"none"} type="text" />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={"18px"} mt={"3%"} mb={"0.5%"}>
                        Date:
                      </FormLabel>
                      <Input
                      borderColor={"white"}
                        name="date"
                        onChange={formChangeHandler}
                        value={form.date} rounded={"none"} type="date" />
                    </FormControl>
                  </form>
                </ModalBody>

                <ModalFooter>
                  <Button type='submit' onClick={formSubmit} rounded={"none"} fontSize={"20px"} bg="#b2622c" w={"30%"} color={"white"} mr={3} _hover={{ transform: "scale(1.1)" }}>
                    Submit
                  </Button>
                </ModalFooter>
              </Box>
          </ModalContent>

        </Modal>
      )}
    </ChakraProvider>
  );
};

export default PopUpForm;
