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
          title: 'Merchant Solution',
          items: [
            {
              label: 'Blueprint',
              to: 'docs/merchant-configuration'
            },
            {
              label: 'Business Flow',
              to: 'docs/merchant-configuration'
            },
            {
              label: 'Appendix',
              to: 'docs/merchant-configuration'
            }
          ],
        },
        {
          title: 'Infrastructure',
          items: [
            {
              label: 'Server',
              to: 'docs/merchant-configuration'
            },
            {
              label: 'Database',
              to: 'docs/merchant-configuration'
            },
            {
              label: 'API',
              to: 'docs/merchant-configuration'
            }
          ],
        },
        {
          title: 'Learn',
          items: [
            {
              label: 'Quick Start',
              to: 'docs/merchant-configuration'
            },
            {
              label: 'Guides',
              to: 'docs/merchant-configuration'
            },
            {
              label: 'Blog',
              to: 'blog'
            }
          ],
        },
        {
          title: 'Contact Us',
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
