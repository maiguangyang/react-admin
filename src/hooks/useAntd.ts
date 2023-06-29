// Entry component
import { App } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';
import type { ModalStaticFunctions } from 'antd/es/modal/confirm';
import type { NotificationInstance } from 'antd/es/notification/interface';

export const useAntdAction = () => {
  const staticFunction = App.useApp();
  const message: MessageInstance = staticFunction.message;
  const modal: Omit<ModalStaticFunctions, 'warn'> = staticFunction.modal;
  const notification: NotificationInstance = staticFunction.notification;

  return {
    message,
    notification,
    modal,
  };
};
