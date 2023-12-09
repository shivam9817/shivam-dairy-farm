import React, { useState } from 'react'
import { FormControl, Input, Heading, FormLabel, Button, useToast, Flex, Box, Image, Stack, Text } from '@chakra-ui/react'


// "id": 30,
// "img": "https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/jozxpcicvvlzl5vciwil/evum-dark-chocolate-cookie.jpg",
// "name": "Evum Dark Chocolate Cookie",
// "description": "jar of 170 gm Cookie",
// "categories": "2.6",
// "stock_quantity": 3400,
// "price": 3700


const initForm = {
  description: '',
  name: '',
  stock_quantity: '',
  price: '',
  categories: '',
  reviews:[] 
}
const AddProducts = () => {

  const toast = useToast();

  const [form, setForm] = useState(initForm);
  const formChangeHandler = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.description]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.stock_quantity]: e.target.value,
      [e.target.price]: e.target.value,
      [e.target.categories]: e.target.value,
    });
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const uid = localStorage.getItem("user_id");
      const token = localStorage.getItem('access_token'); // Assuming you store the access token in localStorage
      console.log('Access Token:', token, "user ID:", uid);
      if (!token) {
        // Handle the case where the user is not authenticated
        console.error('User not authenticated');
        return;
      }
  
      const response = await fetch('http://localhost:8080/product/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `${token}`, // Include the access token in the Authorization header
        },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        // Product created successfully
        toast({
          title: 'Product Created',
          description: 'Product created successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        // Handle error
        const data = await response.json();
        toast({
          title: 'Error',
          description: data.msg || 'Failed to create product',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error creating product:', error);
      // Show a more user-friendly error message
      toast({
        title: 'Error',
        description: 'Failed to create product. Please try again later.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };
  
  

  return (
    <Box bg={"gray.300"} pl={80 } pr={80} w={"100%"} >
      <Heading size='md' color={"gray.900"} >Add New Product</Heading>
      <Box  >
        <form onSubmit={formSubmitHandler}>
          <Stack  >
            <FormControl isRequired>
              <FormLabel m={2} color={"gray.900"}>Product Description</FormLabel>
              <Input m={2} type='text'
                name='description'
                background='#fff'
                onChange={formChangeHandler}
                value={form.description}
                placeholder="Enter Product Description"
              />

              <FormLabel m={2} color={"gray.900"} > Product Name</FormLabel>
              <Input m={2} type='text' name='name' background='#fff' onChange={formChangeHandler}
                value={form.name}
                placeholder="Enter Product Name" />
              <FormLabel color={"gray.900"} >Product Quantiy</FormLabel>

              <Input m={2} type='number' name='stock_quantity' background='#fff' 
              onChange={formChangeHandler} 
              value={form.stock_quantity} 
              placeholder="Enter Product Quantity"
              />
              <FormLabel m={2} color={"gray.900"} >Product Price</FormLabel>

              <Input m={2} type='number' name='price' background='#fff' onChange={formChangeHandler} value={form.price} 
               placeholder="Enter  Price"
              />
              <FormLabel color={"gray.900"} >Product Categories</FormLabel>

              <Input m={2} type='text' name='categories' background='#fff'
               onChange={formChangeHandler} 
               value={form.categories}
               placeholder="Enter Product categories"
              />
              <Button m={2} type='submit' colorScheme='blue' marginTop='2' color={"gray.100"}>Add New Product</Button>
            </FormControl>
          </Stack>
        </form>
      </Box>
    </Box>
  )
}

export default AddProducts;