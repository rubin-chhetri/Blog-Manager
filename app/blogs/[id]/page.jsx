"use client";
import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, use } from "react";

const page = ({ params }) => {
  const [data, setData] = useState(null);
  const unwrappedParams = use(params);

  const fetchBlogData = async() => {
  const response =await axios.get(`/api/blog?id=${unwrappedParams.id}`);
  setData(response.data.blog);
  };
  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center ">
         <Link href="/"><Image
            src={assets.logo}
            alt="logo"
            width={180}
            className="w-[130px] sm:w-auto"
          /></Link> 
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="arrow" width={12} />
          </button>
        </div>
        <div className="text-center my-24 ">
          <h1 className="font-bold text-3xl sm:text-5xl">{data?.title}</h1>
          <Image
            src={data?.authorImg}
            alt="blog image"
            width={100}
            height={100}
            className=" border border-white rounded-full mt-10 mx-auto"
          />
          <p className="font-medium text-sm sm:text-base mt-1">
            {data?.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data?.image}
          alt="blog image"
          width={1280}
          height={720}
          className="border-4 border-white"
        />

<div className="blog-content" dangerouslySetInnerHTML={{__html:data?.description}}></div>

      
      <div className="my-24 ">
        <p className="text-black font-semibold my-4 ">Share this article on your favorite social media platforms</p>
        <div className="flex ">
            <Image src={assets.facebook_icon} alt="facebook" width={50}/>
            <Image src={assets.twitter_icon} alt="twitter" width={50}/>
            <Image src={assets.googleplus_icon} alt="googleplus" width={50}/>
        </div>
      </div>

      </div>
      <Footer/>
    </>
  ) : (
    <></>
  );
};

export default page;
