'use client';

import { useState } from 'react';
import PortfolioSlider from '@/components/PortfolioSlider';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <main className="relative">
      <LoadingScreen
        isLoading={isLoading}
        onLoadingComplete={handleLoadingComplete}
      />
      {!isLoading && <PortfolioSlider />}
    </main>
  );
}
