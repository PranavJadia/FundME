import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center text-white flex-col items-center h-[44vh] gap-4">
      <div className="font-bold text-5xl flex items-center justify-center">FundMe!<span><img src="gif/fund.gif" width={70} alt="" /></span></div>
      <p>A crowd funding platform for Creators | Help you Favorite Creator!</p>
      <div>
      <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now!</button>
      <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div className="container mx-auto py-16">
      <h1 className="text-white text-2xl font-bold text-center my-2 mb-4">Your Fans Can Donate You</h1>
      <div className="flex gap-5 justify-around">
      <div className="item space-y-3 flex flex-col items-center justify-center">
          <img width={88} className="  bg-slate-400 p-2 rounded-full" src="/gif/programmer.gif" alt="" />
          <p className="text-white font-bold  text-center">Fans want to help!</p>
          <p className="text-white text-center">Your Fans are available to help you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img width={88} className=" bg-slate-400 p-2 rounded-full" src="/gif/rupee.gif" alt="" />
          <p className="text-white font-bold  text-center">Fans want to help!</p>
          <p className="text-white text-center">Your Fans are available to help you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img width={88} className=" bg-slate-400 p-2 rounded-full" src="/gif/teamwork.gif" alt="" />
          <p className="text-white font-bold  text-center">Fans want to help!</p>
          <p className="text-white text-center">Your Fans are available to help you</p>
        </div>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div className="container mx-auto py-16">
      <h1 className="text-white text-2xl font-bold text-center my-2 mb-4 ">Learn More About Us</h1>
      <div className="flex gap-5 justify-around">
      <div className="item space-y-3 flex flex-col items-center justify-center">
          <img width={88} className="  bg-slate-400 p-2 rounded-full" src="/gif/programmer.gif" alt="" />
          <p className="text-white font-bold  text-center">Fans want to help!</p>
          <p className="text-white text-center">Your Fans are available to help you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img width={88} className=" bg-slate-400 p-2 rounded-full" src="/gif/rupee.gif" alt="" />
          <p className="text-white font-bold  text-center">Fans want to help!</p>
          <p className="text-white text-center">Your Fans are available to help you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img width={88} className=" bg-slate-400 p-2 rounded-full" src="/gif/teamwork.gif" alt="" />
          <p className="text-white font-bold  text-center">Fans want to help!</p>
          <p className="text-white text-center">Your Fans are available to help you</p>
        </div>
      </div>
    </div>
    </>
  );
}
