const VideoSection = (props = {}) => {
  return (
    <section>
      <iframe className="xs:w-[94vw] xs:h-[315px] ms:w-[450px] ms:h-[315px] md:w-[550px] md:h-[315px] 2xl:w-[850px] 2xl:h-[550px]" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>
  );
}

export default VideoSection;
