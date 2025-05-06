import { requireNativeView } from 'expo';
import * as React from 'react';

import { FinvuViewProps } from './Finvu.types';

const NativeView: React.ComponentType<FinvuViewProps> =
  requireNativeView('Finvu');

export default function FinvuView(props: FinvuViewProps) {
  return <NativeView {...props} />;
}
