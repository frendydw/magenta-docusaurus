import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Internal',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
          <a href={'docs/merchant-configuration'}>Magenta</a>
          <br/>
          <a href={'docs/merchant-case-management'}>Magenta Hotline</a>
      </>
    ),
  },
  {
    title: 'Middle',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
          <a href={'docs/single-sign-on-user-module'}>Single Sign On User Module</a>
          <br/>
          <a href={'docs/api-proxy'}>API Proxy</a>
          <br/>
          <a href={'docs/notif-gateaway'}>Notif Gateaway</a>
      </>
    ),
  },
  {
    title: 'External',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
          <a href={'docs/merchant-service-bca'}>Merchant Service BCA</a>
          <br/>
          <a href={'docs/merchant-portal'}>Merchant Portal</a>
          <br/>
          <a href={'docs/qr-merchant-service'}>QR Merchant Service</a>
          <br/>
          <a href={'docs/email-services'}>Email Services</a>
          <br/>
          <a href={'docs/merchant-api'}>Merchant API</a>
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title=''
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Merchant Solution & Support</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            {/*<Link*/}
            {/*  className={clsx(*/}
            {/*    'button button--outline button--secondary button--lg',*/}
            {/*    styles.getStarted,*/}
            {/*  )}*/}
            {/*  to={useBaseUrl('docs/merchant-configuration')}>*/}
            {/*  Internal*/}
            {/*</Link>*/}
            {/*  <Link*/}
            {/*      className={clsx(*/}
            {/*          'button button--outline button--secondary button--lg',*/}
            {/*          styles.getStarted,*/}
            {/*      )}*/}
            {/*      to={useBaseUrl('docs/single-sign-on-user-module')}>*/}
            {/*      Middle*/}
            {/*  </Link>*/}
            {/*  <Link*/}
            {/*      className={clsx(*/}
            {/*          'button button--outline button--secondary button--lg',*/}
            {/*          styles.getStarted,*/}
            {/*      )}*/}
            {/*      to={useBaseUrl('docs/merchant-service-bca')}>*/}
            {/*      External*/}
            {/*  </Link>*/}
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
