import Car from "../components/car.webp";
import Arrow from "../components/arrow-right.png";
import Food from "../components/Food.png";
import Home from "../components/home.png";

import Work from "../components/work.png";

function Hero() {
  return (
    <>
      <div className="uber h-[100vh] py-10 px-5">
        <div className="uber">
          <div className="logo text-6xl my-10 ">Uber</div>
          <div className="search md:flex md:justify-center">
            <input type="search" className=" appearance-none  rounded md:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="London, UK" />
          </div>
          <div className="cards my-10 flex justify-start items-center md:flex md:justify-center">
            {/* card-1 car */}
            <div className="card bg-gray-200 w-44 h-64 rounded mr-4 ">
              <div className="image">
                <img className="w-full px-4" src={Car} alt="" />
              </div>
              <div className="title font-bold text-xl mt-5 pl-5">
                Get a ride
              </div>
              <div className="my-2 pl-5">
                <button>
                  <img
                    src={Arrow}
                    className="w-10 bg-black rounded-full p-1"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* card2- */}
            <div className="card bg-gray-200 w-44 h-64 rounded ">
              <div className="image w-full ">
                <img
                  className="w-28 pt-6 object-cover mx-auto"
                  src={Food}
                  alt=""
                />
              </div>
              <div className="title font-bold text-xl mt-5 pl-5">
                Get a ride
              </div>
              <div className="my-2 pl-5">
                <button>
                  <img
                    src={Arrow}
                    className="w-10 bg-black rounded-full p-1"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>

          {/* ---------- */}

          <div className="navs md:flex md:flex-col md:w-96 mx-auto md:justify-center">
            {/* home */}
            <div className="home flex justify-start items-center border-b-2 pb-4">
              <div>
                <img
                  src={Home}
                  className="w-10 bg-gray-200 rounded-full p-2 mr-4"
                  alt=""
                />
              </div>
              <div>
                <div className="font-bold text-2xl">Home</div>
                <div className="text-sm text-gray-400">California, US</div>
              </div>
            </div>
            {/* work */}
            <div className="home flex justify-start items-center py-4">
              <div>
                <img
                  src={Work}
                  className="w-10 bg-gray-200 rounded-full p-2 mr-4"
                  alt=""
                />
              </div>
              <div>
                <div className="font-bold text-2xl">Work</div>
                <div className="text-sm text-gray-400">London Eye, London Uk</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
