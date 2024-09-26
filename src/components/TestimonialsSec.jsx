import React, { useState } from 'react';
import styles from '../css/TestimonialsSec.module.css';

const testimonials = [
  {
    id: '1',
    text: 'I love Return Queen. They have taken one large weekly chore out of my life. Having them pick up my returns and handle the process has given me valuable time. The days of waiting in line at my UPS store are behind me. Thank you Return Queen for making returns so much easier!!!',
    author: 'Ivy Joy Strausberg',
  },
  {
    id: '2',
    text: 'Just do the math — for years we would miss “return windows” or end up giving away items we paid for, but we “never got to return” … too busy, printer out of ink, didn’t have the right box, etc. Using Return Queen, those issues are GONE! Thank you. I put my returns out, your folks pick them up. Done.',
    author: 'PJ B.',
  },
  {
    id: '3',
    text: 'This might be my first review ever about an app but I literally came on here to tell ppl it’s the best money I ever spent. I missed one return date last year and it would be worth just that.',
    author: 'Wifeandmommy',
  },
  {
    id: '4',
    text: 'Genius App!! So excited to have all my online returns taken care of so efficiency. I used to have boxes of returns lying around for days. Now I can just pop them into the RQ bag a few taps on my app, leave it at my door and it is gone!!',
    author: 'Rebecca B.',
  },
  {
    id: '5',
    text: 'Love it!! So so easy to return stuff. All the stress is gone! Super intuitive app and amazing service!',
    author: 'Estie F.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.testimonials}>
      <h3 className={styles.uppercaseHeader}>OUR COMMUNITY</h3>
      <h1 className={styles.mainHeader}>
        “A total online shopping game changer”
      </h1>

      <div className={styles.testimonialContent}>
        <p className={styles.testimonialText}>
          {testimonials[currentIndex].text}
        </p>
        <p className={styles.author}>- {testimonials[currentIndex].author}</p>
      </div>

      {/* Dots for navigating testimonials */}
      <div className={styles.dotsContainer}>
        {testimonials.map((testimonial, index) => (
          <span
            key={`testimonial-dot-${testimonial.id}`} // Using unique testimonial id as key
            role="button"
            tabIndex={0}
            onClick={() => selectTestimonial(index)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                selectTestimonial(index);
              }
            }}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
