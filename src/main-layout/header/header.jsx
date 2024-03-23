import React from "react";
import Phone from "../../assets/header/phone";
import logo from "../../assets/header/logo.png";
import Manu from "../../assets/header/manu";
import Buttons from "./components/buttons/buttons";
import { buttonsData } from "./components/buttons/buttons-data";
import Search from "./components/search/search";
import Modal from "../../components/ui/modal";
import { useModal } from "../../hooks/useModal";
import { Link } from "react-router-dom";
import useGetCatalog from "./components/service/query/useGetCatalog";
import Skeleton from "react-loading-skeleton";
import InfoSearch from "./components/search/info-search";
import UserIcon from "../../assets/header/userIcon";
import HeartIcon from "../../assets/header/heartIcon";
import CartIcon from "../../assets/header/cartIcon";
const Header = () => {
  const { close, isOpen, open } = useModal();
  const { data, isLoading } = useGetCatalog();
  return (
    <div>
      <div className="mt-5 container  ">
        <div className=" justify-end gap-8  hidden lg:flex ">
          <p>Доставка и оплата</p>
          <p>Пункты выдачи</p>
          <p>Поддержка</p>
          <div className="flex gap-4">
            {" "}
            <span>
              <Phone />
            </span>{" "}
            <p>+998 90 253 77 53</p>
          </div>
        </div>
        <div className=" justify-between items-center py-[17px] gap-2 hidden lg:flex">
          <div className="flex items-center gap-8">
            <Modal close={close} isOpen={isOpen}>
              <div className="grid grid-cols-1 sm:grid-cols-2   sm:gap-7 lg:grid-cols-3 gap-1 ">
                {data?.map((item) => (
                  <div key={item.id}>
                    <Link to={`/category/${item.name}`}>
                      <div className="flex items-center justify-around border p-3 rounded-md w-[240px] h-[124px]  bg-bg1  hover:shadow-md cursor-pointer">
                        {isLoading ? (
                          <Skeleton height={96} width={96} count={1} />
                        ) : (
                          <div>
                            <img
                              className="w-[96px]"
                              src={item.img}
                              alt="img"
                            />
                          </div>
                        )}
                        {isLoading ? (
                          <Skeleton height={96} width={96} count={1} />
                        ) : (
                          <div>
                            <p>{item.text}</p>
                          </div>
                        )}

                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </Modal>
            <a href="#">
              <img className="max-w-[90px]" src={logo} alt="logo" />
            </a>
            <button
              onClick={open}
              className="flex items-center gap-2 py-[14px] pl-[12px] pr-[45px] bg-primary text-btn2"
            >
              {" "}
              <span>
                <Manu />
              </span>{" "}
              <p>Каталог</p>
            </button>
          </div>
          <div>
            <Search />
          </div>
          <div className="flex gap-8 ">
            {buttonsData.map((item) => (
              <Buttons key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className="p-[15px] lg:hidden ">
        <div className=" justify-end gap-8  hidden lg:flex">
          <p>Доставка и оплата</p>
          <p>Пункты выдачи</p>
          <p>Поддержка</p>
          <div className="flex gap-4">
            {" "}
            <span>
              <Phone />
            </span>{" "}
            <p>+998 90 253 77 53</p>
          </div>
        </div>

        <div className=" flex justify-between items-center">
          <div>
            <UserIcon />
          </div>
          <Link>
            <img src={logo} alt="" />
          </Link>
          <div className="flex gap-4">
            <HeartIcon />
            <div className="relative">
              <CartIcon />
              <span className="w-4 h-4 text-new2 bg-red-600 rounded-[50%] absolute text-white flex justify-center items-center top-[-1px] right-[-5px]">
                3
              </span>
            </div>
          </div>
        </div>
        <div className="flex  gap-2 items-center">
          <button
            onClick={open}
            className="flex items-center  p-[14px] bg-primary text-btn2"
          >
            {" "}
            <span>
              <Manu />
            </span>{" "}
          </button>
          <div className="w-full">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
