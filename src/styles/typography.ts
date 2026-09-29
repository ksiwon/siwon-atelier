import { css } from 'styled-components';
import type { TypeLevel } from './theme';

/** Apply one level of the type scale. */
export const typo = (level: TypeLevel) => css`
  font-size: ${({ theme }) => theme.type[level].size};
  font-weight: ${({ theme }) => theme.type[level].weight};
  line-height: ${({ theme }) => theme.type[level].line};
  letter-spacing: ${({ theme }) => theme.type[level].tracking};
`;
