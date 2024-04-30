import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Test from './logo-slider';
import Header from './menu';
import Banner from './Banner';
import ErrorBoundary from './components/ErrorBoundary';

const targetModulesData = document.querySelectorAll(
  '.cms-react-boilerplate > script[type="application/json"]',
);
const targetModulesData1 = document.querySelectorAll(
  '.logo-slider > script[type="application/json"]',
);
const targetModulesData2 = document.querySelectorAll(
    '.cms-react-menu > script[type="application/json"]',
  );
  const targetModulesData3 = document.querySelectorAll(
    '.two-column-banner > script[type="application/json"]',
  );
targetModulesData.forEach(({ dataset, textContent }) => {
  const root = document.getElementById(`App--${dataset.moduleInstance}`);
  return ReactDOM.render(
    <ErrorBoundary>
      <>
        <App
          portalId={dataset.portalId}
          moduleData={JSON.parse(textContent)}
          moduleInstance={dataset.moduleInstance}
        />
      </>
    </ErrorBoundary>,
    root,
  );
});
targetModulesData1.forEach(({ dataset, textContent }) => {
  const testRoot = document.getElementById(`Test--${dataset.moduleInstance}`);
  return ReactDOM.render(
    <ErrorBoundary>
      <>
        <Test
          portalId={dataset.portalId}
          moduleData={JSON.parse(textContent)}
          moduleInstance={dataset.moduleInstance}
        />
      </>
    </ErrorBoundary>,
    testRoot,
  );
});
targetModulesData2.forEach(({ dataset, textContent }) => {
    const menuRoot = document.getElementById(`Header--${dataset.moduleInstance}`);
    return ReactDOM.render(
      <ErrorBoundary>
        <>
          <Header
            portalId={dataset.portalId}
            moduleData={JSON.parse(textContent)}
            moduleInstance={dataset.moduleInstance}
          />
        </>
      </ErrorBoundary>,
      menuRoot,
    );
  });
  targetModulesData3.forEach(({ dataset, textContent }) => {
    const bannerRoot = document.getElementById(`Banner--${dataset.moduleInstance}`);
    return ReactDOM.render(
      <ErrorBoundary>
        <>
          <Banner
            portalId={dataset.portalId}
            moduleData={JSON.parse(textContent)}
            moduleInstance={dataset.moduleInstance}
          />
        </>
      </ErrorBoundary>,
      bannerRoot,
    );
  });

