import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.fadeIn}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Discover Your Perfect Home Appliances</h1>
          <p className={styles.heroSubtitle}>
            Enhance your living space with our range of modern and efficient electronic home appliances.
          </p>
          <button className={`${styles.callToAction} ${styles.hoverEffect}`}>Shop Now</button>
        </div>
      </section>

      {/* Featured Products/Benefits Section */}
      <section className={styles.featuresSection}>
        <h2 className={`${styles.featuresTitle} ${styles.fadeIn}`}>Why Choose Us?</h2>
        <div className={styles.featureGrid}>
          <div className={`${styles.featureItem} ${styles.fadeInUp}`}>
            <h3>Smart Technology</h3>
            <p>Experience the future with our AI-powered smart appliances.</p>
          </div>
          <div className={`${styles.featureItem} ${styles.fadeInUp} ${styles.delay1}`}>
            <h3>Energy Efficient</h3>
            <p>Save on bills with our eco-friendly and energy-efficient products.</p>
          </div>
          <div className={`${styles.featureItem} ${styles.fadeInUp} ${styles.delay2}`}>
            <h3>Sleek Design</h3>
            <p>Appliances that blend seamlessly with your home decor.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={`${styles.ctaSection} ${styles.fadeIn}`}>
        <h2 className={styles.ctaTitle}>Ready to Upgrade Your Home?</h2>
        <button className={`${styles.callToAction} ${styles.hoverEffect}`}>Explore Collections</button>
      </section>
    </div>
  );
}