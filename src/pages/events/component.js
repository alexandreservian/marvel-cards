import React, { memo } from 'react';
import PageCollection from 'pages/page-collection';

const Page = props => <PageCollection title="Events" icon="calendar" {...props} />;

export default memo(Page);
