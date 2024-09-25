import React from 'react';
import Header from './components/Header.jsx';
import LandingIntro from './components/LandingIntro.jsx';
import RetailerLogos from './components/RetailerLogos.jsx';
import SyncAllPurchase from './components/SyncAllPurchase.jsx';

export default function App() {
  return (
    <div className="App">
      <Header />
      <LandingIntro />
      <SyncAllPurchase />
      {/* <RetailerLogos /> */}
    </div>
  );
}
