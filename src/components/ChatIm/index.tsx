import React, { FC, memo, useEffect, useRef, useState } from 'react';
import { Input, Spin } from 'antd';

import ChatIcon from '~@/assets/icon/chat_icon.png';
import { useChatImStore } from './hooks';
import { useGraphql } from '~@/hooks/useGraphql';
import { useAntdAction } from '~@/hooks/useAntd';
import { IChatImComponentProps } from './types';

import styles from './index.module.less';

const { TextArea } = Input;

// ChatImIcon ...
const ChatImIcon: FC = () => {
  const { handleIsActiveChange } = useChatImStore();

  return (
    <div className={styles.chatImIcon} onClick={handleIsActiveChange}>
      <img src={ChatIcon} />
    </div>
  );
};

// ChatImInput ...
const ChatImInput: FC<IChatImComponentProps> = ({ id, callback }) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const { handleIsActiveChange } = useChatImStore();
  const [value, setValue] = useState<string>('');
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const { message } = useAntdAction();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [mutation] = useGraphql(`mutation ChatGPT($text: String!) {
    chatGPT(text: $text)
  }`).Mutation();

  // 组件挂载时自动聚焦
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current?.focus();
    }
  }, []);

  // handleBlur ...
  const handleBlur = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!isSubmit) {
      timerRef.current = setTimeout(() => {
        handleIsActiveChange();
      }, 1000 * 5);
    }
  };

  // handleInput ...
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target || {};
    setValue(target.value);
  };

  // onPressEnter ...
  const handlePressEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setIsSubmit(true);
    const text = id ? `id为${id}的项目，${value}` : value;

    // 请求接口 ...
    mutation({ variables: { text } })
      .then((res) => {
        const data = res.data as { chatGPT: null | object };
        if (data.chatGPT !== null) {
          message.success('创建成功');
          setValue('');
          callback();
          handleIsActiveChange();
        }
      })
      .catch(() => {
        message.error('操作失败，请重试');
      })
      .finally(() => {
        setIsSubmit(false);
        textAreaRef.current?.focus();
      });
  };

  return (
    <div className={styles.textArea}>
      { isSubmit ? <Spin className={styles.spin} /> : null }
      <TextArea ref={textAreaRef} value={value}
        onBlur={handleBlur}
        onChange={handleInput}
        onPressEnter={handlePressEnter}
        placeholder="请输入聊天内容：创建一个xxx系统"
        readOnly={isSubmit}
        autoSize={{ minRows: 2, maxRows: 6 }}
      />
    </div>
  );
};

// ChatImComponent ...
const ChatImComponent: FC<IChatImComponentProps> = ({ id, callback }) => {
  const { isActive } = useChatImStore((store) => [store.isActive]);

  return (
    <div className={styles.chatImComponent}>
      { isActive ? <ChatImInput id={id} callback={callback} /> : <ChatImIcon /> }
    </div>
  );
};

export default memo(ChatImComponent);
