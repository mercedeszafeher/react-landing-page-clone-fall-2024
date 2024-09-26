import React from 'react';
import Header from './components/Header.jsx';
import LandingIntro from './components/LandingIntro.jsx';
import SyncAllPurchase from './components/SyncAllPurchase.jsx';
import Testimonials from './components/TestimonialsSec.jsx';

export default function App() {
  return (
    <div className="App">
      <Header />
      <LandingIntro />
      <SyncAllPurchase />
      <Testimonials />
    </div>
  );
}
