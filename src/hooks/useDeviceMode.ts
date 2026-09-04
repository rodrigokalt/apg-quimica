'use client';

import { useState, useEffect } from 'react';

export interface DeviceMode {
  isMobile: boolean;
  isPowerSaving: boolean;
  batteryLevel: number | null;
  isCharging: boolean | null;
  reducedMotion: boolean;
  saveData: boolean;
  overridePowerSaving: () => void;
}

export function useDeviceMode(): DeviceMode {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isPowerSaving, setIsPowerSaving] = useState<boolean>(false);
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [isCharging, setIsCharging] = useState<boolean | null>(null);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [saveData, setSaveData] = useState<boolean>(false);
  const [userOverride, setUserOverride] = useState<boolean>(false);

  useEffect(() => {
    // 1. Viewport detection
    const checkViewport = () => {
      const width = window.innerWidth;
      const mobileBreakpoint = width < 960;
      return mobileBreakpoint;
    };

    // 2. Data Saver detection
    const checkSaveData = () => {
      const nav = navigator as unknown as { connection?: { saveData?: boolean } };
      return Boolean(nav.connection?.saveData);
    };

    // 3. Reduced motion / OS battery saver flag
    const checkReducedMotion = () => {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    };

    const hasSaveData = checkSaveData();
    const hasReducedMotion = checkReducedMotion();
    setSaveData(hasSaveData);
    setReducedMotion(hasReducedMotion);

    // Initial check
    const mobileVP = checkViewport();

    // 4. Battery Status API
    let batteryInstance: any = null;

    const handleBatteryUpdate = (battery: any) => {
      const level = battery.level;
      const charging = battery.charging;
      setBatteryLevel(Math.round(level * 100));
      setIsCharging(charging);

      // Trigger low-power mode if not charging and battery is <= 20%
      const lowBattery = !charging && level <= 0.20;
      const powerSaveActive = lowBattery || hasSaveData || hasReducedMotion;

      if (!userOverride) {
        setIsPowerSaving(powerSaveActive);
        setIsMobile(mobileVP || powerSaveActive);
      } else {
        setIsMobile(mobileVP);
      }
    };

    const nav = navigator as any;
    if (nav.getBattery) {
      nav.getBattery().then((battery: any) => {
        batteryInstance = battery;
        handleBatteryUpdate(battery);

        battery.addEventListener('levelchange', () => handleBatteryUpdate(battery));
        battery.addEventListener('chargingchange', () => handleBatteryUpdate(battery));
      }).catch(() => {
        // Fallback if getBattery fails or permission denied
        const powerSaveActive = hasSaveData || hasReducedMotion;
        setIsPowerSaving(powerSaveActive);
        setIsMobile(mobileVP || powerSaveActive);
      });
    } else {
      const powerSaveActive = hasSaveData || hasReducedMotion;
      setIsPowerSaving(powerSaveActive);
      setIsMobile(mobileVP || powerSaveActive);
    }

    const onResize = () => {
      const isNarrow = checkViewport();
      setIsMobile(isNarrow || (!userOverride && (hasSaveData || hasReducedMotion)));
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [userOverride]);

  const overridePowerSaving = () => {
    setUserOverride(prev => !prev);
  };

  return {
    isMobile,
    isPowerSaving,
    batteryLevel,
    isCharging,
    reducedMotion,
    saveData,
    overridePowerSaving
  };
}
