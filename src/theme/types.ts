import React     from 'react';
import { Theme } from '@emotion/react';

export interface ThemeFields extends Theme {
  primaryColor      : string;
  linkColor         : string;
  successColor      : string;
  warningColor      : string;
  errorColor        : string;
  fontSizeBase      : string;
  headingColor      : string;
  textColor         : string;
  textColorSecondary: string;
  disabledColor     : string;
  borderRadiusBase  : string;
  borderColorBase   : string;
  boxShadowBase     : string;
}