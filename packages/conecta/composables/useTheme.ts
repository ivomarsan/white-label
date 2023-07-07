interface ThemeColors {
  primary?: string;
  secondary?: string;
}

export interface UseThemeReturn {
  themeColors: ThemeColors;
}

export function useTheme(): UseThemeReturn {
  const colors: UseThemeReturn['themeColors'] = {
    primary: '#05005b',
    secondary: '#f8e96e',
  };

  return {
    themeColors: colors,
  };
}
