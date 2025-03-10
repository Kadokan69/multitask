import * as React from 'react';
import style from './Info.module.scss';
import { Heading } from '../Heading';

export interface IInfoProps {
  title: string;
  description: string;
  button?: React.ReactElement;
  tag?: React.ElementType;
  className?: string;
}

export function Info(props: IInfoProps) {
  return (
    <div
      className={
        props.className ? `${props.className} ${style.main}` : style.main
      }
    >
      <Heading tag={props.tag}>{props.title}</Heading>
      <p>{props.description}</p>
      {props.button}
    </div>
  );
}
