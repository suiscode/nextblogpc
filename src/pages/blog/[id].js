import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout/Layout";
import axios from "axios";
import Image from "next/image";
import { Source_Serif_4 } from "next/font/google";
import { Metadata } from "next";


const sourceserif = Source_Serif_4({ subsets: ["latin"] });

export async function generateMetadata({ params }) {
  const url = `https://dev.to/api/articles/${params.id}`;

  try {
    const response = await axios.get(url);
    const article = response.data;

    return {
      title: article.title,
      description: article.description,
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return {
      title: 'Error',
      description: 'There was an error fetching the article.',
    };
  }
}

function Page() {

    const divStyle = {
        fontFamily: `${sourceserif}, serif`,
      };

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  useEffect(() => {
    if (router.query.id) {
      const url = `https://dev.to/api/articles/${router.query.id}`;

      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [router.query.id]);



  return <Layout>{loading ? <h1>Loading...</h1> :
   <div className="w-full px-36 flex flex-col items-start gap-8 px-[550px]">
        <h1 className="text-4xl font-semibold">{data.title}</h1>
        <div className="flex items-center gap-2 mt-[-12px]">
            <Image src={data.user.profile_image_90} width={28} height={28} alt="" className="rounded-full"/>
            <p>{data.user.name}</p>
            <p>{data.readable_publish_date}, 2024</p>
        </div>
        <div className="w-full h-[462px] relative rounded-xl overflow-hidden">
        <Image src={data.social_image} fill={true} alt='mainimage'/>
        </div>
        <style jsx global>{`
        .sourceserif {
          font-family: ${sourceserif.style.fontFamily};
        }
      `}
      </style>
        <div className="w-full leading-8 sourceserif gap-8 flex flex-col" style={divStyle} dangerouslySetInnerHTML={{ __html: data.body_html }} />
    </div>}
   </Layout>;
}

export default Page;
