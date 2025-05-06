import * as React from 'react';

import { FinvuViewProps } from './Finvu.types';

export default function FinvuView(props: FinvuViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
