import React from "react";
import Banner from "./components/banner/banner";
import useGetNewProduct from "./service/query/useGetNewProduct";
import { ProdactBanner } from "../../components/slider/prodact-banner/product-banner";
import ProdactCard from "../../components/card/prodect-card/prodact-card";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import Skeleton from "react-loading-skeleton";
import useGetCatalog from "../../main-layout/header/components/service/query/useGetCatalog";
import { brandData } from "../../components/brand/brand";
import { Brand } from "../../components/brand/brand-card";
import { Link } from "react-router-dom";
import ProdactCard2 from "../../components/card/prodect-card/prodact-cart2";
import { useGetNewProduct2 } from "./service/query/useGetNewProdact2";
export const Home = () => {
  const { data, isLoading } = useGetNewProduct("phones");
  const { data: data2, isLoading: isLoading2 } = useGetNewProduct("notebook ");
  const { data: data3, isLoading: isLoading3 } = useGetCatalog();
  const { data: data4, isLoading: isLoading4 } = useGetNewProduct2("phones");
  const { data: data5, isLoading: isLoading5 } = useGetNewProduct2("notebook");

  return (
    <div>
      {isLoading ? <Skeleton count={1} height={460} /> : <Banner />}

      <div className="container mt-10">
        <h1 className="text-new3">Смартфоны и планшеты</h1>
        <div>
          <div>
            <ProdactBanner>
              {data3?.map((item) => (
                <Link to={`/category/${item.name}`} key={item.id}>
                  <div className="flex items-center w-[241px] h-[124px] gap-4 p-[2] bg-bg1 justify-center hover:shadow-md">
                    <div>
                      {isLoading ? (
                        <Skeleton height={96} width={96} count={1} />
                      ) : (
                        <div>
                          <img className="w-[96px]" src={item.img} alt="img" />
                        </div>
                      )}
                    </div>
                    <div>
                      {isLoading ? (
                        <Skeleton height={48} width={120} count={1} />
                      ) : (
                        <div>
                          <p className="text-cart2">{item.text}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </ProdactBanner>
          </div>
        </div>
      </div>
      <div className="container mt-10">
        <h1 className="text-new3">Смартфоны и планшеты</h1>
        <div>
          <ProdactBanner>
            {data?.map((item) => (
              <ProdactCard key={item.id} {...item} />
            ))}
          </ProdactBanner>
        </div>
      </div>
      <div className="bg-primary mt-[100px] ">
        <h1 className="ml-[50px] pt-[20px] text-cart3">Акции</h1>
        <div className="flex justify-center gap-1 p-2  ">
          <img className="w-[30%] " src={img1} alt="img" />
          <img className="w-[30%] " src={img2} alt="img" />
          <img className="w-[30%] " src={img3} alt="img" />
        </div>
      </div>
      <div className="container flex gap-[34px] mt-[32px] p-[15px]">
        <div>
          <h1>Смартфоны и планшеты</h1>
          <hr className="mt-[14px] mb-8" />
          {data4?.map((item) => (
            <ProdactCard2 key={item.id} {...item} />
          ))}
        </div>
        <div>
          <h1>Ноутбуки, планшеты и компьютеры</h1>
          <hr className="mt-[14px] mb-8" />
          {data5?.map((item) => (
            <ProdactCard2 key={item.id} {...item} />
          ))}
        </div>

        <div>
          <h1>Смартфоны и планшеты</h1>
          <hr className="mt-[14px] mb-8" />
          {data4?.map((item) => (
            <ProdactCard2 key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="mt-9 container">
        <div className="mt-10">
          <h1 className="text-new3">Смартфоны и планшеты</h1>
          <ProdactBanner>
            {data?.map((item) => (
              <ProdactCard key={item.id} {...item} />
            ))}
          </ProdactBanner>
        </div>
        <div className="mt-10">
          <h1 className="text-new3">Ноутбуки, планшеты и компьютеры</h1>
          <ProdactBanner>
            {data2?.map((item) => (
              <ProdactCard key={item.id} {...item} />
            ))}
          </ProdactBanner>
        </div>
      </div>
      <div className="container mt-[52px]  ">
        <h1>Популярные бренды</h1>
        <div className="mt-[24px] grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {brandData.map((item) => (
            <Brand key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
