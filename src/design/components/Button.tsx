import type { ButtonHTMLAttributes } from 'react';
import { buttonClass, type ButtonStyleProps } from './buttonClass';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyleProps {}

export function Button({ variant, size, className, ...rest }: ButtonProps) {
  return <button className={buttonClass({ variant, size, className })} {...rest} />;
}
