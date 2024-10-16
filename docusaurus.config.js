'use strict';

// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const remarkIconPlugin = require('./src/plugins/remark/iconPlugin');
const remarkPlacePlugin = require('./src/plugins/remark/placePlugin');
const remarkPricePlugin = require('./src/plugins/remark/pricePlugin');
const remarkTelephonePlugin = require('./src/plugins/remark/telephonePlugin');

const remarkPlugins = [
  remarkIconPlugin,
  remarkPlacePlugin,
  remarkPricePlugin,
  remarkTelephonePlugin,
];

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Самарканд: справочник релоканта',
  url: 'https://samarkand-guide.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  organizationName: 'megahertz',
  projectName: 'samarkand-guide',

  i18n: { defaultLocale: 'ru', locales: ['ru'] },

  plugins: ['docusaurus-plugin-image-zoom'],

  headTags: [
    {
      tagName: 'link',
      attributes: { href: '/favicon.ico', rel: 'icon', sizes: 'any' },
    },
    {
      tagName: 'link',
      attributes: { href: '/img/logo.svg', rel: 'icon', type: 'image/svg+xml' },
    },
    {
      tagName: 'link',
      attributes: { href: '/img/logo-180.png', rel: 'apple-touch-icon' },
    },
    {
      tagName: 'link',
      attributes: { href: '/manifest.webmanifest', rel: 'manifest' },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/megahertz/samarkand-guide/tree/master/',
          remarkPlugins,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/megahertz/samarkand-guide/tree/master/',
        },
        gtag: { trackingID: 'G-6H7SMT618D' },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        pages: {
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.spec.{js,jsx,ts,tsx}',
            '**/__specs__/**',
            '**/components/**',
            '**/lib/**',
          ],
          remarkPlugins,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'og:image',
          content:
            'https://samarkand-guide.com/assets/images/registan1-37b86e2df0da265624c14400c2940f68.jpg',
        },
      ],
      navbar: {
        title: 'SamGuide',
        logo: { alt: 'Samarkand Guide Logo', src: 'img/logo.svg' },
        items: [
          {
            type: 'doc',
            docId: 'samarkand/index',
            position: 'left',
            label: 'Справочник',
          },
          { to: '/map', label: 'Карта', position: 'left' },
          { to: '/links', label: 'Полезные ссылки', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Разделы',
            items: [
              { label: 'Справочник', to: 'docs/samarkand/' },
              { label: 'Карта', to: 'map' },
              { label: 'Полезные ссылки', to: 'links' },
            ],
          },
          {},
          {
            title: 'Другое',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/megahertz/samarkand-guide',
              },
              {
                html: `<a class="footer__link-item" href="https://t.me/+siNb3mlgRS1hMDYy" target="_blank" rel="noopener noreferrer"><img class="root_orbT" alt="telegram" height="16" src="/img/icons/telegram.svg" width="16"> Обсуждение</a>`,
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Самарканд: справочник релоканта`,
      },
      zoom: {
        selector: '.markdown :not(a) > img',
        background: {
          light: 'rgba(240, 240, 240, 0.9)',
          dark: 'rgb(50, 50, 50, 0.9)',
        },
        config: {},
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      { hashed: true, language: ['ru'] },
    ],
  ],
};
