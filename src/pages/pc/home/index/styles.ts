import { css } from '@emotion/react';

export const IndexCss = {
  test: css({
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    '& > header': {
      color: '#f00',
    },
  }),
};
