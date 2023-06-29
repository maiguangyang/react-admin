import { ReactNode } from 'react';

export interface LayoutWrapperProps {
  element: React.ReactElement<any, string | React.JSXElementConstructor<any>> | null
}