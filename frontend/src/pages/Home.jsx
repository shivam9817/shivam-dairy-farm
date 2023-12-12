import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tagline from "../asset/tagLine.png";
import pic1 from "../asset/download.jpeg"
import pic2 from "../asset/1200px-004-soymilk.jpg"
import pic3 from "../asset/milk-products-dairy.webp"
import about from "../asset/about.jpg"
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const images = [
    "https://wallpapers.com/images/hd/milk-background-nn4uqvyma4v02ltr.jpg",
    "https://www.shutterstock.com/image-photo/dairy-products-bottles-milk-cheese-600nw-2252350435.jpg",
    "https://media.istockphoto.com/id/1266996550/photo/farmer-pours-milk-into-can-in-the-background-of-a-meadow-with-a-cow.jpg?s=612x612&w=0&k=20&c=cGTLxIifaYwqsGC21Du3PmZ2ua8SqnIkKN0OMZHc6yA=",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const Data = [
    {
      prodIndex: 1,
      prodImage: "https://cdn.trendhunterstatic.com/thumbs/milk-bottle-design.jpeg?auto=webp",
      category: "Powder",
      prodName: "Milk Bottle",
      star: "3",
      oldPrice: 121,
      newPrice: 54,
      body: "Milk atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
      prodIndex: 2,
      prodImage: "https://previews.123rf.com/images/limpido/limpido1612/limpido161200014/67077469-glass-cup-and-bottle-full-of-milk-on-wooden-table.jpg",
      category: "Capsule",
      prodName: "Milk Bottle",
      star: "4",
      oldPrice: 99,
      newPrice: 39,
      body: "Milk atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
      prodIndex: 3,
      prodImage: "https://4.imimg.com/data4/AP/ER/ANDROID-594987/product-500x500.jpeg",
      category: "Tablet",
      prodName: "Milk Bottle",
      star: "3.5",
      oldPrice: 89,
      newPrice: 49,
      body: "Milk atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
      prodIndex: 4,
      prodImage: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/retro-milk-bottle-and-cookies-f-helm.jpg",
      category: "Liquid",
      prodName: "Milk Bottle",
      star: "5",
      oldPrice: 135,
      newPrice: 69,
      body: "Milk atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    }
  ]

  return (
    <>
      <Navbar />
      <div className="w-full">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                className="h-96 w-full object-cover"
                style={{ height: "500px" }}
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
        {/* <img className="absolute top-96 object-cover z-10" src={tagline} alt="" /> */}
        <div className="w-4/5 mx-auto mt-20">
          <h1 className="font-bold text-3xl text-black mb-6 text-left">
            Our Milk  Products
          </h1>
          <div className="lg:flex flex-wrap justify-between sm:block">
          <AnimatePresence>
        {Data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="lg:w-1/5 sm:w-1/1"
          >
            <img
              className="h-96 mx-auto rounded-lg mb-4"
              style={{ width: "100%" }}
              src={item.prodImage}
              alt={`Product ${index + 1}`}
            />
            <div>
              <p className="text-center font-semiBold text-2xl text-black mt-4">{item.prodName}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{marginBottom:"-10px"}}>
          <path fill="#DBEAFE" fillOpacity="1" d="M0,288L60,256C120,224,240,160,360,122.7C480,85,600,75,720,90.7C840,107,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <div style={{ backgroundColor: "#DBEAFE" }} className="md:flex justify-between">
          <div className=" md:w-1/2 mx-auto ">
            <h1 className="text-4xl font-bold text-black">About Us</h1>
            <p className="md:ml-16 md:mr-16 text-lg p-4 mx-auto text-black">At Alicia Farm, we are proud to be a family-owned and operated dairy farm dedicated to delivering the freshest and highest quality dairy products to our community. With a heritage rooted in generations of farming, we have embraced modern practices to ensure that every product that reaches your table
              is a testament to our commitment to excellence. Our journey begins right here on our lush and green pastures, where our cows graze freely, enjoying a diet rich in nutrients. We believe in the importance of supporting local agriculture, and that's why we source our milk and other dairy products directly from our farm to your doorstep.
            </p>
          </div>
          <div className="mx-auto md:w-1/2 w-3/4 ">
            <img src={about} alt="" className="rounded-2xl"/>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#DBEAFE" fillOpacity="1" d="M0,160L80,138.7C160,117,320,75,480,96C640,117,800,203,960,245.3C1120,288,1280,288,1360,288L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        <div className="w-100 mb-40">
          <h1 className="text-black font-bold text-3xl mt-4 mb-4">More Products</h1>
          <div className="md:flex justify-center mx-auto">
            <img src={pic1} alt="" className="md:w-1/4 w-3/4 mx-auto h-92 mx-3 mt-2 rounded-2xl" />
            <img src={pic2} alt="" className="md:w-1/4 w-3/4 mx-auto h-92 mx-3 mt-2 rounded-2xl" />
            <img src={pic3} alt="" className="md:w-1/4 w-3/4 mx-auto h-92 mx-3 mt-2 rounded-2xl" />
          </div>
        </div>
        <div className="mx-auto bg-blue-100 mt-20 p-10 w-4/5 mx-auto border border-gray-300 shadow-md rounded-3xl">
          <h1 className="text-3xl font-bold text-black">Contact Us</h1>
      <form onSubmit={handleSubmit} className="md:p-6">
       <div className="md:flex justify-between"> 
        <div className="md:w-1/2 mx-6">
        <label htmlFor="name" className="block text-black text-xl text-left font-semibold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-800 rounded-3xl"
        />
            <label htmlFor="name" className="block text-black text-xl text-left font-semibold mt-2">
          Number:
        </label>
        <input
          type="text"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-800 rounded-3xl"
        />

        <label htmlFor="email" className="block text-black text-xl text-left font-semibold mt-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-800 rounded-3xl"
        /></div>
<div className="md:w-1/2 mx-6">
        <label htmlFor="message" className="block text-black text-xl text-left font-semibold mt-4">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full h-40 px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-800 rounded-3xl"
        ></textarea></div>
        </div>

        <button
          type="submit"
          className="md:w-1/6 mt-6 bg-blue-900 text-lg text-white font-bold py-2 px-4 rounded-3xl hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Send Message
        </button>
      </form>
    </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
