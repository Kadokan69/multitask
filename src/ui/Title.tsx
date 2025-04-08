import { Heading } from './Heading';

export interface ITitleProps {
  title: string;
  description?: string;
  className?: string;
}

export function Title({ title, ...props }: ITitleProps) {
  return (
    <div className={props.className}>
      <Heading tag='h2'>{title}</Heading>
      {props.description ? <p>{props.description}</p> : ''}
    </div>
  );
}
