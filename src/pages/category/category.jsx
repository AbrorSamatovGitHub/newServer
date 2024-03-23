import React from "react";
import { useParams } from "react-router-dom";
import ProdactCard from "../../components/card/prodect-card/prodact-card";
import useGetCingleCategory from "./service/query/useGetCingleCategory";
const Category = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetCingleCategory(slug);
  console.log(data);
  return (
    <div className="container">
      <div className=" justify-center items-center flex-col  grid grid-cols-1 gap-4 md:grid-cols-3 , xl:grid-cols-4, xll:grid-cols-6 , lg:grid-cols-4 sm:grid-cols-2">
        {data?.map((item) => (
          <ProdactCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
