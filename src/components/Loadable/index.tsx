import React, { JSXElementConstructor, Suspense } from 'react';

import Loader from '@/components/Loader';

const Loadable =
  <T extends JSX.IntrinsicAttributes>(Component: JSXElementConstructor<T>) =>
  (props: T) =>
    (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;
