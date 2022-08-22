import { css } from '@emotion/react';

export const floatLeft = css({
  float: 'left',
});

export const clear = css({
  '&::after': {
    display: 'block',
    clear: 'both',
    content: '" "',
  },
});

export const flex = css({
  display: 'flex',
});

export const flexDirection = css({
  flexDirection: 'column',
});

export const flexOne = css({
  flex: '1 0 0',
});

export const flexBetween = css({
  justifyContent: 'space-between',
});

export const flexAround = css({
  justifyContent: 'space-around',
});

export const flexCenter = css({
  justifyContent: 'center',
});

export const flexEnd = css({
  justifyContent: 'flex-end',
});

export const alignCenter = css({
  alignItems: 'center',
});
