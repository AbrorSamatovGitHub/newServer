import React from "react";
import Skeleton from "react-loading-skeleton";
import useGetCingleCategory from "../../../pages/category/service/query/useGetCingleCategory";
const ProdactCard2 = ({ img, title, price, id }) => {
  const { isLoading } = useGetCingleCategory();

  return (
    <div className=" container w-[413px] h-[157px] mb-10 mt-5 p-2 relative rounded-md shadow-md hover:shadow-xl cursor-pointer flex flex-col justify-between">
      <div className="flex justify-center gap4">
        <div>
          {isLoading ? (
            <Skeleton height={140} width={140} count={1} />
          ) : (
            <div>
              <img className="h-[140px] w-[140px]" src={img} alt="img" />
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between w-[249px]">
          <div>
            {isLoading ? (
              <Skeleton height={48} width={158} count={1} />
            ) : (
              <div>
                <h2 className="text-cart4 text-text1">{title}</h2>
              </div>
            )}
          </div>
          <div className="flex gap-2 items-center">
            <div>
              {isLoading ? (
                <Skeleton height={26} width={91} count={1} />
              ) : (
                <div>
                  <strong className="text-cart6 text-sum2">{price} Сум</strong>
                </div>
              )}
            </div>
            <div>
              {isLoading ? (
                <Skeleton height={17} width={72} count={1} />
              ) : (
                <div>
                  <span className="decoration: line-through text-sum1 text-cart5 ">
                    74 990 Сум
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdactCard2;
