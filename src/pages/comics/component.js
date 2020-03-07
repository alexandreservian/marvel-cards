import React, { memo } from 'react';
import PageCollection from 'pages/page-collection';

const Page = props => <PageCollection title="Comics" icon="book-open" {...props} />;

export default memo(Page);
