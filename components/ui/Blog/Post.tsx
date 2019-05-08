import { MDXProvider } from '@mdx-js/tag';

import Page from '@portfolio/components/shared/Page';
import { Box } from '@portfolio/components/shared/Box';

export default (meta: any) => ({ children }) => {
  return (
    <Page>
      <Box boxWidth="80%" boxDirection="column" margin="0 auto">
        <MDXProvider components={{}}>
          <main>{children}</main>
        </MDXProvider>
      </Box>
    </Page>
  );
};
