import React from 'react';

const HomeIndex = () => {
  return (
    <>
      <header>
        <p>This is green since its inside a header</p>
      </header>
      <p>This is turquoise since its not inside a header.</p>
      <footer>
        <div className='float-left'>float-left</div>
        <div className='float-right'>float-right</div>
      </footer>
    </>
  );
};

export default HomeIndex;
