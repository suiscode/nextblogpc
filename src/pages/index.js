import Image from "next/image";
import Layout from "./components/layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import MainArticle from "./components/home/MainArticle";
import Trending from "./components/home/Trending";
import AllBlogPost from "./components/home/AllBlogPost";

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col w-full gap-[100px] mt-[80px]">
        <MainArticle />
        <Trending />
        <AllBlogPost /> 
      </main>
    </Layout>
  );
}
