import * as React from 'react';

export interface IHeadingProps {
  tag?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export function Heading(props: IHeadingProps) {
  const { tag: Tag = 'h1', children, className } = props;
  return <Tag className={className}>{children}</Tag>;
}
