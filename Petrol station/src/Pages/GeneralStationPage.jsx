import React from "react";
import DefaultHeader from "../Layout/DefaultHeader";
import searchImg from "../../public/searchpage.svg";
import StationSearchCard from "../Component/Station/StationSearchCard";

const GeneralStationPage = () => {
  return (
    <>
      <section
        className="h-screen overflow-y-hidden bg-center backdrop-brightness-50 relative after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-black/30 after:-z-10"
        style={{ backgroundImage: `url(${searchImg})` }}
      >
        <DefaultHeader hasBg={false} />
        <div className="container_limiter h-[100vh] overflow-hidden flex justify-center">
            <div className="flex flex-col gap-y-2 items-center max-w-xl overflow-y-scroll dashboard_scroll px-3 mb-24">
                <div className="bg-primColor rounded-tl-lg rounded-tr-lg w-full px-8 py-4 font-pt text-white text-center text-xl">Filling stations closest to you</div>
                <StationSearchCard
                    address={"124 st marian street, Goldy"}
                    clickFunction={()=> {}}
                    dieselPrice={320}
                    distance={"3.1"}
                    kerosinePrice={234}
                    petrolPrice={100}
                    openingTime={"12-3pm"}
                    rating={"4.3"}
                />
                <StationSearchCard
                    address={"124 st marian street, Goldy"}
                    clickFunction={()=> {}}
                    dieselPrice={320}
                    distance={"3.1"}
                    kerosinePrice={234}
                    petrolPrice={100}
                    openingTime={"12-3pm"}
                    rating={"4.3"}
                />
                <StationSearchCard
                    address={"124 st marian street, Goldy"}
                    clickFunction={()=> {}}
                    dieselPrice={320}
                    distance={"3.1"}
                    kerosinePrice={234}
                    petrolPrice={100}
                    openingTime={"12-3pm"}
                    rating={"4.3"}
                />
                <StationSearchCard
                    address={"124 st marian street, Goldy"}
                    clickFunction={()=> {}}
                    dieselPrice={320}
                    distance={"3.1"}
                    kerosinePrice={234}
                    petrolPrice={100}
                    openingTime={"12-3pm"}
                    rating={"4.3"}
                />
                <StationSearchCard
                    address={"124 st marian street, Goldy"}
                    clickFunction={()=> {}}
                    dieselPrice={320}
                    distance={"3.1"}
                    kerosinePrice={234}
                    petrolPrice={100}
                    openingTime={"12-3pm"}
                    rating={"4.3"}
                />
            </div>
        </div>
      </section>
    </>
  );
};

export default GeneralStationPage;
