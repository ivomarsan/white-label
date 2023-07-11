interface ThemeColors {
  primary?: string;
  secondary?: string;
  base?: string;
}

export interface UseThemeReturn {
  themeColors: ThemeColors;
}

export function useTheme(): UseThemeReturn {
  const colors: UseThemeReturn['themeColors'] = {
    primary: '#08014e' || '#05005b',
    secondary: '#f8e96e',
    base: '#afbedb',
  };

  return {
    themeColors: colors,
  };
}
