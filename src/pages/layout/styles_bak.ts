import { css } from '@emotion/react';

export default {
  layout: css({
    height: '100%',
  }),

  header: css({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '55px',
    lineHeight: '55px',
  }),

  headerRight: css({
    height: '100%',
  }),

  logo: css({
    width: 120,
    height: 31,
    background: 'rgba(255, 255, 255, 0.3)',
  }),

  menuGroup: css({
    paddingLeft: 30,
  }),

  menuItem: css({
    padding: '0 30px',
    display: 'inline-block',
    color: 'hsla(0,0%,100%,.65)',
    transition: 'all .5s',

    '&:hover, &.active': {
      color: '#ff',
      // background-color: @hoverColor,
    },
  }),

  linkGroup: css({
    paddingRight: 30,
  }),

  company: css({
    marginLeft: 5,
  }),
};
