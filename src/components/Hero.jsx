const Hero = () => {
  return (
    <div className="max-w-[1600px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full max-h-[500px] bg-black/50 flex flex-col justify-center pl-8">
          <h1 className="text-4xl md:text-7xl font-bold text-white">
            Best <span className="text-orange-600">Food</span> <br /> Delivered to you
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
          className="w-full max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
