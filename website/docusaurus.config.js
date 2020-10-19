module.exports = {
  title: 'Magenta',
  tagline: '',
  url: 'https://frendydw.github.io',
  baseUrl: '/magenta-docusaurus/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo-magenta-2.png',
  organizationName: 'frendydw', // Usually your GitHub org/user name.
  projectName: 'magenta-docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Magenta',
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
          title: 'Merchant',
          items: [
            {
              label: 'Merchant Configuration',
              to: 'docs/merchant-configuration',
            },
            {
              label: 'Merchant Management',
              to: 'docs/merchant-management/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
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
