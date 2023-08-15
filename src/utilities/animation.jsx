'use client'
import { animate, motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react';

const RevealUp = ({ children }) => {

  return (
    <section className='overflow-hidden'>
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView={'visible'}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.section>
    </section>
  );
}
const RevealRight = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])
  return (
    <section ref={ref} className='overflow-hidden'>
      <motion.section
        variants={{
          hidden: { x: -200 },
          visible: { x: 0 }
        }}
        initial="hidden"
        whileInView={'visible'}
        exit="hidden"
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.section>
    </section>
  );
}


const RevealLarger = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])
  return (
    <section ref={ref} className='overflow-hidden'>
      <motion.section
        variants={{
          hidden: { scale: 0.6, opacity: 0, rotateX: 10 },
          visible: { scale: 1, opacity: 1, rotateX: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.section>
    </section>
  );
}


export { RevealUp, RevealRight };
