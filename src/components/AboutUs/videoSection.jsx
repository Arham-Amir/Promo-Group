const VideoSection = ({ className,  classP, video, isActive, children}) => {
  return (
    <section className={`${classP } relative transition transform ease-in-out`}>
      <iframe className={`${className} `} src={video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      {children}
    </section>
  );
}

export default VideoSection;
