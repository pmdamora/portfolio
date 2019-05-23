import React, { FunctionComponent } from 'react';

import { Page } from '@portfolio/components/shared/Page';
import { Preview } from '@portfolio/components/shared/Preview';
import { Props as PostProps } from '@portfolio/components/shared/Post';

interface Post {
  meta: PostProps;
}

function importAll(r) {
  return r.keys().map(r);
}

const previewItems = importAll(require.context('./', false, /.mdx$/));

function dateSortAsc(a: Post, b: Post) {
  const date1 = new Date(a.meta.publishDate);
  const date2 = new Date(b.meta.publishDate);
  if (date1 < date2) return -1;
  if (date1 > date2) return 1;
  return 0;
}

const items = previewItems
  .sort(dateSortAsc)
  .map(({ meta }: Post, index: number) => {
    return meta && <Preview key={meta.title} prefetch={index < 3} {...meta} />;
  });

const CollegiateLoopPage: FunctionComponent<{}> = () => {
  const title = 'The Long Trail';
  const description =
    'The Long Trail is a hiking trail located in Vermont, running the length of the state. It is the oldest long-distance trail in the United States, constructed between 1910 and 1930 by the Green Mountain Club.';

  return (
    <Page title={title} description={description} showHeading>
      {items}
    </Page>
  );
};

export default CollegiateLoopPage;
