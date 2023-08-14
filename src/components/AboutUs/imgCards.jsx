const ImgCards = (props) => {
  return (
      <div className="bg-white shadow-lg md:h-[400px] lg:h-[300px] 2xl:h-[450px] box-sizing-content rounded-xl">
        <img src={props.img} alt="accountant_image" loading="lazy"
          className="rounded-xl object-fit w-full h-full" />
      </div>
  );
}

export default ImgCards;
