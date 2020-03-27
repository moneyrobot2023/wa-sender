import React from 'react';
import { Config } from '../Config';
import { WithStyles } from '@material-ui/core';
import styles from './styles';
declare type IProps = WithStyles<typeof styles> & {
    config: Config;
};
declare const Application: React.ComponentType<Pick<IProps, "config"> & import("@material-ui/core").StyledComponentProps<"wrapper">>;
export { Application };
