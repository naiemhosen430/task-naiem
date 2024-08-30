import Image from "next/image";
import Header from "./_components/shared/Header";
import InformaTionCart from "./_components/carts/InformaTionCart";
import IconsCart from "./_components/carts/IconsCart";

export default function Home() {
  return (
    <main className="bg-gradient-to-br max-w-[1440px] m-auto lg:p-10 p-2 min-h-screen to-[#090021] from-[#1c0c32]">
      {/* header  */}
      <Header
        description={"Between our successful cases we have collaborated to be"}
        title={"Successful cases"}
      />

      {/* information */}
      <div className="pt-5">
        <div className="lg:flex justify-center">
          <div className="lg:flex lg:mt-[100px] lg:w-3/12 w-full lg:m-0 m-2 items-center justify-end">
            <InformaTionCart point={"55M+"} title={"Transaction in Altcoins"} />
            <div className="lg:block hidden">
              <div className="h-[5px] bg-[#260d56] w-[60px]"></div>
              <div className=" bg-[#260d56] w-[5px]"></div>
            </div>
          </div>
          <div className="lg:flex lg:w-3/12 w-full lg:m-0 m-2 items-center justify-center">
            <div className="lg:block hidden">
              <div className="h-[5px] bg-[#260d56] w-[60px]"></div>
            </div>
            <InformaTionCart point={"250M+"} title={"Transaction in Bitcoin"} />
            <div className="lg:block hidden">
              <div className="h-[5px] bg-[#260d56] w-[60px]"></div>
            </div>
          </div>
          <div className="lg:flex lg:mt-[100px] lg:w-3/12 w-full lg:m-0 m-2 items-center justify-start">
            <div className="lg:block hidden">
              <div className=" bg-[#260d56] w-[5px]"></div>
              <div className="h-[5px] bg-[#260d56] w-[60px]"></div>
            </div>
            <InformaTionCart point={"23+"} title={"Total Projects"} />
          </div>
        </div>
      </div>

      {/* icon section  */}
      <div className="flex py-6">
        <IconsCart
          icons={[
            {
              src: "/icons/icon1.png",
              alt: "icon 1",
            },
            {
              src: "/icons/icon2.png",
              alt: "icon 2",
            },
            {
              src: "/icons/icon3.png",
              alt: "icon 3",
            },
            {
              src: "/icons/icon4.png",
              alt: "icon 4",
            },
            {
              src: "/icons/icon5.jpeg",
              alt: "icon 5",
            },
            {
              src: "/icons/icon6.jpeg",
              alt: "icon 6",
            },
            {
              src: "/icons/icon7.jpeg",
              alt: "icon 7",
            },
            {
              src: "/icons/icon8.jpeg",
              alt: "icon 8",
            },
            {
              src: "/icons/icon9.jpeg",
              alt: "icon 9",
            },
            {
              src: "/icons/icon10.jpeg",
              alt: "icon 10",
            },
            {
              src: "/icons/icon11.png",
              alt: "icon 11",
            },
            {
              src: "/icons/icon12.jpeg",
              alt: "icon 12",
            },
            {
              src: "/icons/icon13.png",
              alt: "icon 13",
            },
            {
              src: "/icons/icon14.png",
              alt: "icon 14",
            },
            {
              src: "/icons/icon15.png",
              alt: "icon 15",
            },
            {
              src: "/icons/icon16.png",
              alt: "icon 16",
            },
            {
              src: "/icons/icon17.jpeg",
              alt: "icon 17",
            },
            {
              src: "/icons/icon18.png",
              alt: "icon 18",
            },
            {
              src: "/icons/icon19.png",
              alt: "icon 19",
            },
            {
              src: "/icons/icon20.png",
              alt: "icon 20",
            },
          ]}
        />
      </div>
    </main>
  );
}
