import type { Components, Theme } from '@mui/material';
import { merge } from 'lodash';

import Button from './Button';
import Card from './Card';
import Grid from './Grid';
import Select from './Select';
import Tab from './Tab';
import TextField from './TextField';

const componentsOverrides = (theme: Theme) =>
  merge(Button(), Card(), Tab(), Grid(), TextField(), Select()) as Components<Omit<Theme, 'components'>>;

export default componentsOverrides;
