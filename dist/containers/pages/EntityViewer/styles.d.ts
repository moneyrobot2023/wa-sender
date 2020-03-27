/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import { Theme } from '@material-ui/core';
declare const _default: (theme: Theme) => {
    wrap: {
        marginBottom: number;
    };
    field: {
        color: string;
        fontSize: string;
        fontWeight: number;
        fontFamily: string | undefined;
        padding: string;
        borderBottom: string;
        '& > .label': {
            display: string;
            color: string;
            fontSize: string;
        };
        '& > .field': {
            marginTop: number;
            display: string;
        };
    };
    breadcrumbs: {
        marginBottom: number;
        height: number;
        alignItems: string;
        display: string;
    };
};
export default _default;
