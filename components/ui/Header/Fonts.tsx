import React, { FunctionComponent, Fragment } from 'react';

import { PRELOADED_FONTS } from '@portfolio/constants';

export const Fonts: FunctionComponent<{}> = () => {
  return (
    <Fragment>
      {/* prettier-ignore */}
      {PRELOADED_FONTS.map(value => {
        return (
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href={value}
            key={value}
            crossOrigin="anonymous"
          />
        );
      })}
    </Fragment>
  );
};
