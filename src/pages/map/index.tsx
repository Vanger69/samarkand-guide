import { useLocation } from '@docusaurus/router';
import SidebarStyles from '@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css';
import { ThemeClassNames } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getPlacemarkItems, getSidebarItems } from '@site/map';
import { placemarkMatchesUrl } from '@site/src/pages/map/lib/helpers';
import DocSidebar from '@theme/DocSidebar';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import FullMap from './components/FullMap';
import styles from './styles.module.css';

const placemarks = getPlacemarkItems();

export default function Map() {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  useMenuHighlighting();

  const sidebarItems = getSidebarItems(location.hash);

  const routePath = location.hash.slice(2);
  const selectedPlacemarks = placemarks.filter((placemark) => {
    return placemarkMatchesUrl(placemark, routePath);
  });

  return (
    <Layout
      noFooter
      title={`Карта Самарканда | ${siteConfig.title}`}
      wrapperClassName={styles.container}
    >
      <main className={styles.main}>
        <aside
          className={clsx(
            ThemeClassNames.docs.docSidebarContainer,
            SidebarStyles.docSidebarContainer,
          )}
        >
          <DocSidebar
            sidebar={sidebarItems}
            isHidden={false}
            onCollapse={() => {}}
            path="/map"
          />
        </aside>
        <FullMap placemarks={selectedPlacemarks} />
      </main>
    </Layout>
  );
}

function useMenuHighlighting() {
  const ACTIVE_CLASS = 'menu__link--active';
  const location = useLocation();

  useEffect(() => {
    const $links = document.querySelectorAll('.menu__link');
    const $menu = document.querySelector('.menu');

    $menu?.addEventListener('click', onMenuClick);
    $links.forEach(($link) => {
      if ($link.getAttribute('href') === location.hash) {
        $link.classList.add(ACTIVE_CLASS);
      }
    });

    function onMenuClick(e) {
      document
        .querySelectorAll('.menu__link')
        .forEach((l) => l.classList.remove(ACTIVE_CLASS));
      e.target.classList?.add(ACTIVE_CLASS);
    }

    return () => {
      $menu?.removeEventListener('click', onMenuClick);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
