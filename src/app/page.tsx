'use client';

import React from 'react';
import { useDeviceMode } from '@/hooks/useDeviceMode';
import { DesktopLayout } from '@/components/desktop/DesktopLayout';
import { MobileLayout } from '@/components/mobile/MobileLayout';
import { BatterySaverBanner } from '@/components/shared/BatterySaverBanner';

export default function HomePage() {
  const {
    isMobile,
    isPowerSaving,
    batteryLevel,
    overridePowerSaving
  } = useDeviceMode();

  return (
    <>
      {isPowerSaving && (
        <BatterySaverBanner
          batteryLevel={batteryLevel}
          onOverride={overridePowerSaving}
        />
      )}

      {isMobile ? (
        <MobileLayout />
      ) : (
        <DesktopLayout />
      )}
    </>
  );
}
