import React from "react";
import imagenDeskot from "../../img/illustration-woman-online-desktop.svg";
import imagenDeskotPattern from "../../img/bg-pattern-desktop.svg";
import imagenDeskotBox from "../../img/illustration-box-desktop.svg";
import imagenMovil from "../../img/illustration-woman-online-mobile.svg";

const Grafico = ({ isMobile }) => {
  
  //console.log ("isMobile ", isMobile)

  return (
    <div className="">
      {isMobile === true ? (
        <div className="h-10">
          <img
          className="w-11/12 h-11/12 translate-y-[-120px] translate-x-[13px]"
          src={imagenMovil}
          alt="movile"
        />
        </div>
      ) : (
        <div className="w-full h-full flex items-center">
          <figure className="relative w-full h-full overflow-hidden transform translate-y-[75px]">
            <img
              className="absolute inset-0 w-full h-full scale-[200%] translate-y-[-160px] translate-x-[-320px]"
              src={imagenDeskotPattern}
              alt=""
            />
            <img
              className="transform translate-y-[10px] translate-x-[-80px]"
              src={imagenDeskot}
              alt=""
            />
          </figure>
          <img
            className="absolute z-10 transform translate-y-[55px] translate-x-[-95px]"
            src={imagenDeskotBox}
            alt="box"
          />
        </div>
      )}
    </div>
  );
};

export { Grafico };
