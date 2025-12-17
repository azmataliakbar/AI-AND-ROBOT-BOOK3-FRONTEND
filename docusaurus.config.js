// docosaurce.config.js

// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI and Robotics Book',
  tagline: 'An interactive AI-powered book platform featuring 37 chapters across 4 modules covering ROS 2, Gazebo/Unity simulation, NVIDIA Isaac, and Vision-Language-Action models',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'AI Robotics',
  projectName: 'ai-robotics-book',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      
      // ============================================
      // NAVBAR DISABLED - Using Custom Navbar
      // Custom navbar: src/theme/Navbar/index.js
      // ============================================
      /*
      navbar: {
        title: '🤖AI Robotics Book',
        
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'bookSidebar',
            position: 'left',
            label: '📚 Book',
          },
          {
            to: '/blog',
            label: '📝 Blog',
            position: 'left'
          },
          {
            to: '/chat',
            label: '💬 Chat',
            position: 'left'
          },
          {
            to: '/search',
            label: '🔍 Search',
            position: 'right'
          },
          {
            href: 'https://github.com/azmataliakbar',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      */
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Book Modules',
            items: [
              {
                label: 'Module 1: ROS 2',
                to: '/docs/module1/chapter01',
              },
              {
                label: 'Module 2: Gazebo/Unity',
                to: '/docs/module2/chapter11',
              },
              {
                label: 'Module 3: NVIDIA Isaac',
                to: '/docs/module3/chapter19',
              },
              {
                label: 'Module 4: VLA Models',
                to: '/docs/module4/chapter29',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/ros2',
              },
              {
                label: 'Robotics Stack Exchange',
                href: 'https://robotics.stackexchange.com/',
              },
              {
                label: 'ROS Discourse',
                href: 'https://discourse.ros.org/',
              },
            ],
          },
          {
            title: 'Author Information',
            items: [
              {
                label: 'Azmat Ali',
                href: 'mailto:azmataliakbar@gmail.com',
              },
              {
                label: 'GitHub Profile',
                href: 'https://github.com/azmataliakbar',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI and Robotics Book Platform. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;