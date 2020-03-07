import React, { memo } from 'react';
import PageCollection from 'pages/page-collection';

const Page = props => <PageCollection title="Series" icon="layers" {...props} />;

export default memo(Page);
