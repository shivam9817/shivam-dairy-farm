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
        <img className="absolute top-96 object-cover z-10" src={tagline} alt="" />
        <div className="w-4/5 mx-auto mt-20">
          <h1 className="font-bold text-3xl text-blue-900 text-left">
            Our Milk  Products
          </h1>
          <div className="lg:flex flex-wrap justify-between sm:block">
            {Data.map((item, index) => (
              <div className="lg:w-1/5 sm:w-1/1">
                <img
                  className="h-96 mx-auto rounded-lg"
                  style={{ width: "100%" }}
                  src={item.prodImage}
                  alt={`Product ${index + 1}`}
                />
                <hr />
                <div >
                  <p className="text-left font-bold text-2xl text-blue-900">{item.prodName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#DBEAFE" fillOpacity="1" d="M0,288L60,256C120,224,240,160,360,122.7C480,85,600,75,720,90.7C840,107,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <div style={{ backgroundColor: "#DBEAFE" }} className="md:flex justify-between">
          <div className=" md:w-1/2 mx-auto ">
            <h1 className="text-4xl font-bold text-blue-800">About Us</h1>
            <p className="md:ml-16 md:mr-16 text-lg p-4 mx-auto text-blue-800">At Alicia Farm, we are proud to be a family-owned and operated dairy farm dedicated to delivering the freshest and highest quality dairy products to our community. With a heritage rooted in generations of farming, we have embraced modern practices to ensure that every product that reaches your table
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
        {/* <div className="flex mx-auto mb-10">
          <div className="max-w-3xl w-1/2 mx-6 rounded-3xl p-10 bg-gray-800 mx-auto  shadow-md">
            <h2 className="text-3xl text-blue-500 font-bold mb-6">Share Your Experience</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex w-full items-center justify-between text-left">
                <div className="">
                  <label htmlFor="name" className="block text-xl font-medium text-blue-500">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md bg-blue-100"
                  />
                </div>
                <div className=" mx-2">
                  <label htmlFor="image" className="block text-xl font-medium text-blue-500">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mt-1 p-2 w-full border rounded-md bg-blue-100"
                  />
                </div>
              </div>

              <div className="w-full text-left">
                <label htmlFor="testimonial" className="block text-xl font-medium text-blue-500">
                  Your Testimonial
                </label>
                <textarea
                  id="testimonial"
                  name="testimonial"
                  rows="4"
                  value={testimonial}
                  onChange={(e) => setTestimonial(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md bg-blue-100"
                ></textarea>
              </div>

              <button type="submit" className="bg-blue-600 text-white font-bold p-2 rounded-md hover:bg-blue-200 hover:text-blue-600">
                Submit Testimonial
              </button>
            </form>
          </div> */}
          {/* Testimonial Display Section */}
          {/* <div className=" bg-gray-800 mx-2 w-1/2 p-10 rounded-3xl">
            <h2 className="text-3xl text-blue-500 font-bold mb-4">TESTIMONIALS</h2>
            <div className="flex overflow-x-auto mx-auto w-96">
              <Slider {...settings}> {testimonials.map((t, index) => (
                <div key={index} className="w-full mx-4 p-4 mb-4">
                  <div className="mt-2 w-94 mx-auto bg-blue-100 p-6 flex justify-between rounded-lg">
                    {t.image && (
                      <div className="w-40">
                        <img src={URL.createObjectURL(t.image)} 
                        alt={`Testimonial ${index + 1}`} 
                        className="mt-2 w-32 h-28 rounded-full" />
                      </div>
                    )}
                    <div className="w-80 italic ">
                      <p className="text-blue-700">"{t.testimonial}"</p>
                      <p className="text-blue-500 mt-2">- {t.name}</p>
                    </div>
                  </div>
                </div>
              ))}</Slider>
              </div>
          </div>
        </div> */}
        <div className="w-100 mb-40">
          <h1 className="text-blue-800 font-bold text-3xl mt-4 mb-4">More Products</h1>
          <div className="md:flex justify-center mx-auto">
            <img src={pic1} alt="" className="md:w-1/4 w-3/4 mx-auto h-92 mx-3 mt-2 rounded-2xl" />
            <img src={pic2} alt="" className="md:w-1/4 w-3/4 mx-auto h-92 mx-3 mt-2 rounded-2xl" />
            <img src={pic3} alt="" className="md:w-1/4 w-3/4 mx-auto h-92 mx-3 mt-2 rounded-2xl" />
          </div>
        </div>
        <div className="mx-auto bg-blue-100 mt-20 p-10 w-4/5 mx-auto border border-gray-300 shadow-md rounded-3xl">
          <h1 className="text-3xl font-bold text-blue-800">Contact Us</h1>
      <form onSubmit={handleSubmit} className="md:p-6">
       <div className="md:flex justify-between"> 
        <div className="md:w-1/2 mx-6">
        <label htmlFor="name" className="block text-blue-800 text-xl text-left font-semibold">
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
            <label htmlFor="name" className="block text-blue-800 text-xl text-left font-semibold mt-2">
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

        <label htmlFor="email" className="block text-blue-800 text-xl text-left font-semibold mt-2">
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
        <label htmlFor="message" className="block text-blue-800 text-xl text-left font-semibold mt-4">
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
