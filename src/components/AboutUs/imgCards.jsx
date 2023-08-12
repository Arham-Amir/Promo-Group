const ImgCards = (props) => {
  return (
    <div className="m-4 p-4 md:basis-1/2 sm:w-[75%] xs:w-[90%]">
      <div className="bg-white shadow-lg flex flex-col h-auto box-sizing-content rounded-xl">
        <div className="">
          <img src={props.img} alt="accountant_image"
          className="rounded-t-xl object-fit w-full 3xl:h-[450px] 2xl:h-[350px] xl:h-[300px] md:h-[350px] xs:h-[270px] " />
        </div>
        <div className="flex flex-col items-center gap-1 p-3 ">
          <h1 className="2xl:text-2xl text-lg font-bold">{props.name}</h1>
          <p className="xs:text-center">{props.position} @ Promo Group</p>
        </div>
      </div>
    </div>
  );
}

export default ImgCards;
