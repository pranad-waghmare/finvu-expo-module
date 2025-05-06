import { NativeModule, requireNativeModule } from 'expo';

import { FinvuModuleEvents } from './Finvu.types';

declare class FinvuModule extends NativeModule<FinvuModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<FinvuModule>('Finvu');
