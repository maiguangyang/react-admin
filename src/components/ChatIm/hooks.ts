import { useState } from 'react';
import { createGlobalStore } from 'hox';

export const [useChatImStore] = createGlobalStore(() => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleIsActiveChange = () => {
    setIsActive(!isActive);
  };

  return {
    value,
    setValue,
    isActive,
    setIsActive,
    handleIsActiveChange,
  };
});
