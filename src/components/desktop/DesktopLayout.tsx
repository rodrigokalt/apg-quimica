'use client';

import React, { useState } from 'react';
import { DesktopNavbar } from '@/components/desktop/DesktopNavbar';
import { DesktopHero } from '@/components/desktop/DesktopHero';
import { DesktopMarketsGrid } from '@/components/desktop/DesktopMarketsGrid';
import { DesktopAntifrogen } from '@/components/desktop/DesktopAntifrogen';
import { DesktopLaboratory } from '@/components/desktop/DesktopLaboratory';
import { DesktopAbout } from '@/components/desktop/DesktopAbout';
import { DesktopFooter } from '@/components/desktop/DesktopFooter';
import { QuoteModal } from '@/components/shared/QuoteModal';

export function DesktopLayout() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState<string | undefined>(undefined);

  const handleOpenQuote = (marketId?: string) => {
    setSelectedMarket(marketId);
    setIsQuoteOpen(true);
  };

  return (
    <div className="desktop-render-tree">
      <DesktopNavbar onOpenQuote={() => handleOpenQuote()} />
      <main>
        <DesktopHero onOpenQuote={() => handleOpenQuote()} />
        <DesktopMarketsGrid onSelectMarket={(mId) => handleOpenQuote(mId)} />
        <DesktopAntifrogen onOpenQuote={() => handleOpenQuote('antifrogen')} />
        <DesktopLaboratory />
        <DesktopAbout />
      </main>
      <DesktopFooter />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedMarket={selectedMarket}
      />
    </div>
  );
}
