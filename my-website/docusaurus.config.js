// @ts-check
// @type {import('@docusaurus/types').Config}

async function createConfig() {
  return {
    title: 'My Physical AI Book',
    tagline: 'Your Journey into Physical AI, ROS 2, Digital Twins, Isaac Sim, and VLA Humanoids',
    favicon: 'img/favicon.ico',
    url: 'https://your-docusaurus-site.example.com',
    baseUrl: '/',
    organizationName: 'your-organization', // Usually your GitHub org/user name.
    projectName: 'my-website', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'), // Use require.resolve to correctly link sidebars.js
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            sidebarItemsGenerator: async function ({defaultSidebarItemsGenerator, ...args}) {
                const sidebarItems = await defaultSidebarItemsGenerator(args);
                return sidebarItems;
            },
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
          title: 'My Physical AI Book',
          logo: {
            alt: 'My Site Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'myBookSidebar', // Reference the custom sidebar
              position: 'left',
              label: 'Book',
            },
            {to: '/blog', label: 'Blog', position: 'left'},
            {
              href: 'https://github.com/facebook/docusaurus', // Placeholder, replace with actual repo
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Book Intro',
                  to: '/docs/intro',
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
                  to: '/blog',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/facebook/docusaurus', // Placeholder, replace with actual repo
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: require('prism-react-renderer/themes/github'),
          darkTheme: require('prism-react-renderer/themes/dracula'),
        },
      }),
    devServer: { // Added for proxy configuration
      proxy: {
        '/api': { // Changed from '/chat' to '/api'
          target: 'http://127.0.0.1:8000',
          changeOrigin: true,
          pathRewrite: { '^/api': '' }, // Strips '/api' before sending to backend
        },
      },
    },
  };
}

module.exports = createConfig;
