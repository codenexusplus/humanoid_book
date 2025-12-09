import React from 'react';
import Layout from '@theme/Layout'; // Assuming Docusaurus Layout

function Home() {
  return (
    <Layout
      title={`Welcome to the Physical AI Textbook`}
      description="A textbook on Physical AI, Robotics, and Embodied Intelligence.">
      <header
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4rem 0',
          backgroundColor: 'var(--ifm-color-primary-darkest)',
          color: 'white',
        }}>
        <div className="container">
          <h1 className="hero__title">Physical AI Textbook</h1>
          <p className="hero__subtitle">Your journey into Embodied Intelligence starts here.</p>
          <div className="text--center">
            <a
              className="button button--secondary button--lg"
              href="/docs/intro">
              Start Reading 📖
            </a>
          </div>
        </div>
      </header>
      <main>
        <section style={{ padding: '2rem 0', textAlign: 'center' }}>
          <div className="container">
            <h2>Explore the World of Physical AI</h2>
            <p>
              Dive deep into robotics, machine learning for physical systems, and embodied intelligence.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
