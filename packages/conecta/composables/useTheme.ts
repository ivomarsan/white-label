interface ThemeColors {
  primary?: string;
}

export interface UseThemeReturn {
  themeColors: ThemeColors;
}

export function useTheme(): UseThemeReturn {
  const colors: UseThemeReturn['themeColors'] = {
    primary: '#05005b',
  };

  return {
    themeColors: colors,
  };
}
