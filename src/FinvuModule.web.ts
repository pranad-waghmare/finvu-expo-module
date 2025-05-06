import { registerWebModule, NativeModule } from 'expo';

import { FinvuModuleEvents } from './Finvu.types';

class FinvuModule extends NativeModule<FinvuModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(FinvuModule, 'FinvuModule');
