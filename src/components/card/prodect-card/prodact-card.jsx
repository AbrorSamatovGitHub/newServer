import React from "react";
import KarzincaIcon from "../../../assets/icons/karzinca-icon";
import LikeIcon from "../../../assets/icons/like-icon";
import Skeleton from "react-loading-skeleton";
import useGetCingleCategory from "../../../pages/category/service/query/useGetCingleCategory";
const ProdactCard = ({ img, title, price, id }) => {
  const { data,isLoading} = useGetCingleCategory()
  return (
      <div className=" container w-[214px] h-[373px] mb-10 mt-5 p-5 relative rounded-md shadow-md hover:shadow-xl cursor-pointer flex flex-col justify-between">
        <div className="flex">
          {isLoading ? (
            <Skeleton height={158} width={158} count={1} />
          ) : (
            <div>
              <img src={img} alt="img" />
            </div>
          )}
          {isLoading ? (
            <Skeleton height={24} width={24} count={1} />
          ) : (
            <div>
              <div className="absolute right-[8px]">
                <LikeIcon />
              </div>
            </div>
          )}
        </div>
        <div>
          {isLoading ? (
            <Skeleton height={48} width={158} count={1} />
          ) : (
            <div>
              <h2 className="text-cart4 text-text1">{title}</h2>
            </div>
          )}
          {isLoading ? (
            <Skeleton height={17} width={72} count={1} />
          ) : (
            <div>
              <span className="decoration: line-through text-sum1 text-cart5 ">
                74 990 Сум
              </span>
            </div>
          )}
          <div className="flex justify-between items-center">
            {isLoading ? (
              <Skeleton height={26} width={91} count={1} />
            ) : (
              <div>
                <strong className="text-cart6 text-sum2">{price}Сум</strong>
              </div>
            )}
            {isLoading ? (
              <Skeleton height={36} width={36} count={1} />
            ) : (
              <div>
                <KarzincaIcon />
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default ProdactCard;
