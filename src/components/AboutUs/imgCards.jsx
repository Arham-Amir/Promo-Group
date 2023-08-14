const ImgCards = (props) => {
  return (
      <div className="bg-white shadow-lg h-full box-sizing-content rounded-xl">
        <img src={props.img} alt="accountant_image" loading="lazy"
          className="rounded-xl object-fit w-full h-full" />
      </div>
  );
}

export default ImgCards;
