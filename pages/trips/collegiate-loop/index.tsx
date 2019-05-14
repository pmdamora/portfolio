import React, { FunctionComponent } from 'react';

import { Page } from '@portfolio/components/shared/Page';
import { Preview } from '@portfolio/components/shared/Preview';

function importAll(r) {
  return r.keys().map(r);
}

const previewItems = importAll(require.context('./', false, /.mdx$/));

const items = previewItems.map(({ meta }, index) => {
  return <Preview key={meta.title} prefetch={index < 3} {...meta} />;
});

const CollegiateLoopPage: FunctionComponent<{}> = () => {
  const title = 'Collegiate Loop';
  const description =
    'The Collegiate Loop combines two distinct sections of the Colorado Trail in the Collegiate Peaks, namely the Collegiate East and the Collegiate West to form a roughly 163 mile loop trail.';

  return (
    <Page title={title} description={description} showHeading>
      {items}
    </Page>
  );
};

export default CollegiateLoopPage;
