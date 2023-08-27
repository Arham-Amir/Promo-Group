import { ImWhatsapp } from 'react-icons/im';
import Link from 'next/link';

const ContactPopUpBtn = () => {
  return (
    <section className='relative'>
      <button className="fixed bottom-5 right-5 z-40 bg-transparent animate-bounce">
        <Link href={'https://wa.me/+923004439445'} target='_blank'><ImWhatsapp className='text-green-500' size={40} /></Link>
      </button>
    </section>
  );
};

export default ContactPopUpBtn;
