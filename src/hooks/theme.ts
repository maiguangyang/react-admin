import { useTheme as useThemes } from '@emotion/react';
import { ThemeFields }           from '~@/theme/types';

export const useTheme = (): ThemeFields => useThemes();
