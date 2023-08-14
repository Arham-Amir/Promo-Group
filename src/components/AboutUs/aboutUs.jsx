import ImgCards from "@components/AboutUs/imgCards";

const AboutUs = () => {
  return (
    <section id="about" className="h-auto bg-[url('/image/about.png')] flex-center text-indigo-950">
      <section className="h-[96%] sm:w-[94%] sm:p-10 xs:p-6 flex xl:flex-row xs:flex-col">
        <section className="p-4 basis-1/2 flex flex-col gap-y-8 ">
          <h1 className="hover-underline-animation after:bg-indigo-800 hover:text-indigo-800 2xl:text-4xl text-3xl font-bold w-fit">Hello, We are Promo Group</h1>
          <section className="flex flex-col gap-5 text-lg 2xl:text-2xl">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptates ducimus sapiente voluptatem praesentium repellat, est aliquid provident ut enim qui, assumenda inventore quasi.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptates ducimus sapiente voluptatem praesentium repellat, est aliquid provident ut enim qui, assumenda inventore quasi.</p>
          </section>
        </section>
        <section className="basis-1/2 h-auto">
          <ImgCards img='/image/about_pic.png' name='Ahsan Ali' position='Accountant' />
        </section>
      </section>
    </section>
  );
}

export default AboutUs;
