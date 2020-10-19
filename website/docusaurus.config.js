module.exports = {
  title: 'Merchant Solution',
  tagline: '',
  url: 'https://frendydw.github.io',
  baseUrl: '/magenta-docusaurus/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo-magenta-2.png',
  organizationName: 'frendydw', // Usually your GitHub org/user name.
  projectName: 'magenta-docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Magenta Logo',
        src: 'img/logo-magenta-2.png',
      },
      items: [
        {
          to: 'docs/merchant-configuration',
          activeBasePath: 'docs',
          label: 'Merchant Solution & Support',
          position: 'left',
        },
        {
          to: 'blog/',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'Theme',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Internal',
          items: [
            {
              label: 'Magenta',
              to: 'docs/merchant-configuration',
            },
            {
              label: 'Merchant Hotline',
              to: 'docs/merchant-case-management/',
            },
          ],
        },
        {
          title: 'Middle',
          items: [
            {
              label: 'Single Sign On User Module  ',
              to: 'docs/single-sign-on-user-module/',
            },
            {
              label: 'API Proxy',
              to: 'docs/api-proxy/',
            },
            {
              label: 'Notif Gateaway',
              to: 'docs/notif-gateaway/',
            },
          ],
        },
        {
          title: 'External',
          items: [
            {
              label: 'Merchant Service BCA',
              to: 'docs/merchant-service-bca/',
            },
            {
              label: 'Merchant Portal',
              to: 'docs/merchant-portal/',
            },
            {
              label: 'QR Merchant Service',
              to: 'docs/qr-merchant-service/',
            },
            {
              label: 'Email Services',
              to: 'docs/email-services/',
            },
            {
              label: 'Merchant API',
              to: 'docs/merchant-api/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
