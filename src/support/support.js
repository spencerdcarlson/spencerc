import React, { memo } from 'react';
import './support.css';

function Support() {
  return (
    <iframe class="support-iframe" title="support" src={process.env.PUBLIC_URL + 'manifest.json'} />
  );
}

export default memo(Support);
