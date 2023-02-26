import QR_IMAGE from "./assets/image-qr-code.png";

export default function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center md:w-1/2 lg:w-[23%] md:h-[75%] lg:h-[65%] mx-8 md:mx-0 bg-white rounded-3xl p-5 pb-1">
        <div className="">
          <img src={QR_IMAGE} alt="QR code image" className="rounded-xl" />
        </div>
        <div className="flex flex-col justify-around grow mx-1  md:mx-8 py-6 text-center">
          <h1 className="text-xl  md:text-2xl font-bold text-dark-blue">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-base text-grayish-blue mx-1 mt-4  md:mt-0">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
