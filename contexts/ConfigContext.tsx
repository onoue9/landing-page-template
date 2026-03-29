'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import type { SiteConfig, ContentConfig, ThemeConfig } from '@/types/config-types';
import { site as staticSite, content as staticContent, theme as staticTheme } from '@/lib/config';

export interface ConfigContextValue {
  site: SiteConfig;
  content: ContentConfig;
  theme: ThemeConfig;
}

interface ConfigContextInternal extends ConfigContextValue {
  setConfig: (value: ConfigContextValue) => void;
}

const ConfigContext = createContext<ConfigContextInternal>({
  site: staticSite,
  content: staticContent,
  theme: staticTheme,
  setConfig: () => {},
});

export function ConfigProvider({
  children,
  value: initialValue,
}: {
  children: React.ReactNode;
  value: ConfigContextValue;
}) {
  const [value, setValue] = useState<ConfigContextValue>(initialValue);

  const setConfig = useCallback((newValue: ConfigContextValue) => {
    setValue(newValue);
  }, []);

  return (
    <ConfigContext.Provider value={{ ...value, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig(): ConfigContextValue {
  const { site, content, theme } = useContext(ConfigContext);
  return { site, content, theme };
}

export function useSetConfig(): (value: ConfigContextValue) => void {
  return useContext(ConfigContext).setConfig;
}
