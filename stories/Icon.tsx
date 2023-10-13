import React, { ReactElement, ComponentType, HTMLAttributes } from 'react';

export interface TIconProps {
  glyph: ComponentType<HTMLAttributes<SVGSVGElement>>;
  size?: number;
}

export const Icon = ({ glyph: Glyph, size }: TIconProps): ReactElement => (
  <span
    style={{
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Glyph style={{ width: '100%', height: '100%' }} />
  </span>
);
