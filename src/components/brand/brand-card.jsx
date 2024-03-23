import React from "react";
import Skeleton from "react-loading-skeleton";
import useGetCingleCategory from "../../pages/category/service/query/useGetCingleCategory";
export const Brand = ({ img }) => {
  const {  isLoading } = useGetCingleCategory();
  return (
    <div>
      {isLoading ? (
        <Skeleton height={90} width={180} count={1} />
      ) : (
        <div className="w-[180px] h-[90px] bg-brand_bg flex justify-center items-center">
          <img src={img} alt="img" />
        </div>
      )}
    </div>
  );
};

