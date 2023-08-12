import ImgCards from "@components/AboutUs/imgCards";

const AboutUs = () => {
  return (
    <section id="about" className="h-auto bg-[url('/image/about.png')] flex-center text-indigo-950">
      <section className="h-[96%] sm:w-[94%] sm:p-10 xs:p-6 flex xl:flex-row xs:flex-col">
        <section className="p-4 basis-2/5 flex flex-col gap-y-8 ">
          <h1 className="2xl:text-4xl text-3xl font-bold">Hello, We are Promo Group</h1>
          <section className="flex flex-col gap-5 text-lg 2xl:text-2xl">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptates ducimus sapiente voluptatem praesentium repellat, est aliquid provident ut enim qui, assumenda inventore quasi.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptates ducimus sapiente voluptatem praesentium repellat, est aliquid provident ut enim qui, assumenda inventore quasi.</p>
          </section>
        </section>
        <section className="basis-3/5 h-auto flex md:flex-row xs:flex-col items-center">
          <ImgCards img='/image/accountant.jpg' name='Ahsan Ali' position='Accountant' />
          <ImgCards img='/image/accountant.jpg' name='Ahsan Ali' position='Accountant' />
        </section>
      </section>
    </section>
  );
}

export default AboutUs;
