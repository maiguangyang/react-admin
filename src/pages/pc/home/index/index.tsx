import { IndexCss } from './styles';
import React from 'react';
import { useTheme } from '~@/hooks/theme';

const HomeIndex = () => {
  const theme = useTheme();

  return (
    <div css={IndexCss.test}>
      <header>
        <p>This is green since its inside a header</p>
      </header>
      <p>This is turquoise since its not inside a header.</p>
      <footer css={{ color: theme.primaryColor }}>
        <div className='float-left'>float-left</div>
        <div className='float-right'>float-right</div>
      </footer>
    </div>
  );
};

export default HomeIndex;
