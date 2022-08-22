import { css, Interpolation, Theme } from '@emotion/react';
import { ThemeFields } from './types';

export const theme: ThemeFields = {
  primaryColor      : '#1890ff',             // 全局主色
  linkColor         : '#1890ff',             // 链接色
  successColor      : '#52c41a',             // 成功色
  warningColor      : '#faad14',             // 警告色
  errorColor        : '#f5222d',             // 错误色
  fontSizeBase      : '14px',                // 主字号
  headingColor      : 'rgba(0, 0, 0, 0.85)', // 标题色
  textColor         : 'rgba(0, 0, 0, 0.65)', // 主文本色
  textColorSecondary: 'rgba(0, 0, 0, 0.45)', // 次文本色
  disabledColor     : 'rgba(0, 0, 0, 0.25)', // 失效色
  borderRadiusBase  : '2px',                 // 组件/浮层圆角
  borderColorBase   : '#d9d9d9',             // 边框色
  boxShadowBase     : '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)', // 浮层阴影
};

export const GlobalStyles: Interpolation<Theme> = css`
  .float-left {
    float: left;
  }
`;
