import React, { memo } from 'react';
import './privacy.css';

function Privacy() {
  const url = `${process.env.PUBLIC_URL}privacy.html`;
  return (
    <div>
      <iframe class="privacy-iframe" title="privacy" src={url} />
      <a href={url}>download</a>
    </div>
  );
}

export default memo(Privacy);
