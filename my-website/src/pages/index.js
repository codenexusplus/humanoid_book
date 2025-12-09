import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css'; // Assuming custom styles for the landing page

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome to Your Physical AI Book!</h1>
        <p className="hero__subtitle">Embark on a 13-week journey into ROS 2, Digital Twins, Isaac Sim, and VLA Humanoids.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Reading Now!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Welcome`}
      description="The definitive guide to Physical AI, covering ROS 2, Digital Twins, Isaac Sim, and VLA Humanoids.">
      <HomepageHeader />
      <main>
        {/* You can add more sections here, e.g., features, testimonials, etc. */}
      </main>
    </Layout>
  );
}
