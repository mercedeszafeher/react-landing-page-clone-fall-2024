import React from 'react';
import styles from '../css/RetailerLogos.module.css';

// Dynamically import the upperline logos

// Dynamically import the downline logos

export default function RetailerLogos() {
  const [upperLogos, setUpperLogos] = useState([]);
  const [downLogos, setDownLogos] = useState([]);

  // Convert the imported images into an array on component mount
  useEffect(() => {
    setUpperLogos(Object.values(upperLineLogos));
    setDownLogos(Object.values(downLineLogos));
  }, []);

  return (
    <section>
      <div>
        <h1>
          Return items from 5,000+ of your favorite stores - including Zara,
          Amazon, Shein, and more!
        </h1>
      </div>
      <div className={styles.retailerLogos}>
        {/* Top row of logos (slides left) */}
        <div className={`${styles.logoRow} ${styles.slideLeft}`}>
          {upperLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Upper Line Logo ${index + 1}`}
              className={styles.logo}
            />
          ))}
        </div>

        {/* Bottom row of logos (slides right) */}
        <div className={`${styles.logoRow} ${styles.slideRight}`}>
          {downLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Down Line Logo ${index + 1}`}
              className={styles.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
