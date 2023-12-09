import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading, IconButton, useToast, Image, CircularProgress, Box, Grid } from '@chakra-ui/react'
import SingleProduct from './SingleProductPage';
import axios from 'axios';

const ProductPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/product', {
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



  const handleEdit = (editedProduct) => {
    setData((prevData) =>
      prevData.map((product) =>
        product._id === editedProduct._id ? editedProduct : product
      )
    );
  };



  
  const handleDelete = (productId) => {
    // Filter out the deleted product from the data array
    setData((prevData) => prevData.filter((product) => product._id !== productId));
  };

  return (
    <Box bg={"gray.300"} pl={40} w={"100%"} h={"full"}>
      <Heading size={'lg'} color={"gray.900"} mt={"20px"} mb={"20px"} >Manage Products</Heading>
<hr />
      {isLoading ? (
        <CircularProgress
          alignItems={"center"}
          m={300}
          isIndeterminate
          color='green.300'
        />
      ) : isError ? (
        <h2>Error Occurred while getting product list</h2>
      ) : (
        <TableContainer color={"gray.900"} w={"99.9%"}>
          <Table size={'lg'}>
            <Thead>
              <Tr maxH="60px">
                <Th color={"gray.900"} width="10%">Photo</Th>
                <Th color={"gray.900"} width="15%">Brand</Th>
                <Th color={"gray.900"} width="10%">Price</Th>
                <Th color={"gray.900"} width="15%">Category</Th>
                <Th color={"gray.900"} width="20%">Description</Th>
                <Th color={"gray.900"} width="10%">Quantity</Th>
                <Th color={"gray.900"} width="10%">Edit</Th>
                <Th color={"gray.900"} width="10%">Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map(product => (
                <SingleProduct
                  key={product._id}
                  product={product}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ProductPage;