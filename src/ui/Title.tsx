import * as React from 'react';

export interface ITitleProps {
    title: string;
    description?: string;
    className?:string;
}

export function Title ({title, ...props}: ITitleProps) {
  return (
    <div className={props.className}>
      <h2>{title}</h2>
      {props.description? <p>{props.description}</p> : ''}
    </div>
  );
}
