import {
  Center,
  Image,
  Button,
  FormControl,
  FormLabel,
  Input,
  Td,
  Tr,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import axios from 'axios';

import React, { useState } from 'react';

const SingleProduct = ({ product, handleEdit, handleDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const finalRef = React.useRef(null);
  const [editable, setEditable] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleEditClick = () => {
    console.log('Product:', product);
    setEditable(true);
    setEditedProduct({ ...product });
    onOpen();
  };


  const handleCancelEdit = () => {
    setEditable(false);
    onClose();
  };

  const handleSaveEdit = async () => {
    try {
      if (!editedProduct._id) {
        console.error('Product id is undefined');
        return;
      }
      const response = await axios.patch(
        `http://localhost:8080/product/update/${editedProduct._id}`,
        editedProduct,
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      );

      if (response.status === 200) {
        handleEdit(editedProduct);
        setEditable(false);
        onClose();
        toast({
          title: 'Product Updated',
          description: 'Product updated successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        console.error('Failed to update product:', response.data);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };



  const handleChange = (e) => {
    e.preventDefault();
    setEditedProduct({
      ...editedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeleteClick = () => {
    onOpen(); // Open the confirmation modal
  };

  const handleConfirmDelete = async () => {
    try {
      // Send a DELETE request to remove the product
      const response = await axios.delete(
        `http://localhost:8080/product/delete/${product._id}`, // Use product._id instead of product.id
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      );

      if (response.status === 200) {
        // Product deleted successfully
        handleDelete(product._id); // Pass the product ID to the handleDelete function
        onClose(); // Close the confirmation modal
        toast({
          title: 'Product Deleted',
          description: 'Product deleted successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        console.error('Failed to delete product:', response.data);
        // Display an error message or handle it as needed
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <Tr maxH="60px">
      <Td color={"white"} ><Image src="https://cdn.trendhunterstatic.com/thumbs/milk-bottle-design.jpeg?auto=webp" alt={product.desc} boxSize='90px' borderRadius='full' fontSize={26} /></Td>
      <Td>{product.name}</Td>
      <Td>{product.price}</Td>
      <Td>{product.categories}</Td>
      <Td>{product.description}</Td>
      <Td>{product.stock_quantity}</Td>
      <Td>
        <Center>
          <Button mt={4} colorScheme={"blue"} onClick={handleEditClick}>
            Edit
          </Button>
        </Center>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Item</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Product Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={editedProduct.name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Product Price</FormLabel>
                <Input
                  type="number"
                  name="price"
                  value={editedProduct.price}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Product Category</FormLabel>
                <Input
                  type="text"
                  name="categories"
                  value={editedProduct.categories}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Product Description</FormLabel>
                <Input
                  type="text"
                  name="description"
                  value={editedProduct.description}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Product quantity</FormLabel>
                <Input
                  type="text"
                  name="stock_quantity"
                  value={editedProduct.stock_quantity}
                  onChange={handleChange}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleCancelEdit}>
                Close
              </Button>
              <Button colorScheme="teal" onClick={handleSaveEdit}>
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Td>
      {/* <Td color={"black"}>
        <Center>
          <Button mt={4} colorScheme={"red"}>
            Remove
          </Button>
        </Center>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Item</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Are you sure you want to delete the item?</ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleConfirmDelete}>
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Td> */}
    </Tr>
  );
};

export default SingleProduct;
