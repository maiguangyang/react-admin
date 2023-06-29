import { Tab } from 'rc-tabs/lib/interface';

export interface IFormDataTabs {
  onChange?: ((activeKey: string) => void) | undefined
  items?: Tab[] | undefined
};
