import React from "react";
import Slider from "react-slick";
const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              consequuntur, rerum, earum quia odio laborum quod veritatis
              impedit, ut in omnis. Ipsa rerum dignissimos odit dolorum
              corrupti! Soluta, minus obcaecati?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>

          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ca9f8d5a-a0db-4dc5-b586-451a89959724/air-max-plus-ayakkab%C4%B1s%C4%B1-xKGsF9.png"
            alt=""
            className="w-[900px] h-[800px]"
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              consequuntur, rerum, earum quia odio laborum quod veritatis
              impedit, ut in omnis. Ipsa rerum dignissimos odit dolorum
              corrupti! Soluta, minus obcaecati?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/de6c4ef8-51b0-4632-9ef9-dec056ba2765/air-max-plus-se-ayakkab%C4%B1s%C4%B1-L00qpV.png"
            alt=""
            className="w-[900px] h-[800px]"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
