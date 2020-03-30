/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

/// <reference types="react" />
/// <reference types="styled-jsx" />
/// <reference types="@emotion/core" />
import { IPageProps } from './page';
export declare const ENTITY_FIELD_RENDERS: {
    string: import("react").FC<{
        label: string;
        value: any;
        isEditing?: boolean | undefined;
        handler?: ((val: any) => void) | undefined;
        error?: string | undefined;
        onClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    } & Record<string, any>>;
    date: import("react").FC<{
        label: string;
        value: any;
        isEditing?: boolean | undefined;
        error?: string | undefined;
        handler?: ((val: any) => void) | undefined;
        onClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    } & Record<string, any>>;
    boolean: import("react").FC<{
        label: string;
        value: any;
        isEditing?: boolean | undefined;
        error?: string | undefined;
        handler?: ((val: any) => void) | undefined;
        onClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    } & Record<string, any>>;
    select: import("react").FC<{
        label: string;
        value: any;
        isEditing?: boolean | undefined;
        handler?: ((val: any) => void) | undefined;
        error?: string | undefined;
        onClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        availableVariants?: Record<any, any> | undefined;
    } & Record<string, any>>;
    phone: import("react").FC<{
        label: string;
        value: any;
        isEditing?: boolean | undefined;
        handler?: ((val: any) => void) | undefined;
        error?: string | undefined;
        onClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    } & Record<string, any>>;
    richtext: import("react").FC<{
        label: string;
        value: any;
        isEditing?: boolean | undefined;
        handler?: ((val: any) => void) | undefined;
        error?: string | undefined;
        onClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    } & Record<string, any>>;
};
export declare const getEntityFieldRenderer: (type?: string) => import("react").FC<{
    label: string;
    value: any;
    isEditing?: boolean | undefined;
    handler?: ((val: any) => void) | undefined;
    error?: string | undefined;
    onClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
} & Record<string, any>> | import("react").FC<{
    label: string;
    value: any;
    isEditing?: boolean | undefined;
    error?: string | undefined;
    handler?: ((val: any) => void) | undefined;
    onClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
} & Record<string, any>> | import("react").FC<{
    label: string;
    value: any;
    isEditing?: boolean | undefined;
    error?: string | undefined;
    handler?: ((val: any) => void) | undefined;
    onClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
} & Record<string, any>> | import("react").FC<{
    label: string;
    value: any;
    isEditing?: boolean | undefined;
    handler?: ((val: any) => void) | undefined;
    error?: string | undefined;
    onClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    availableVariants?: Record<any, any> | undefined;
} & Record<string, any>> | import("react").FC<{
    label: string;
    value: any;
    isEditing?: boolean | undefined;
    handler?: ((val: any) => void) | undefined;
    error?: string | undefined;
    onClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
} & Record<string, any>> | import("react").FC<{
    label: string;
    value: any;
    isEditing?: boolean | undefined;
    handler?: ((val: any) => void) | undefined;
    error?: string | undefined;
    onClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
} & Record<string, any>>;
export declare const ENTITY_SORT_DIRS: Record<string, 'asc' | 'desc'>;
export declare const ENTITY_FILTER_TYPES: {
    TEXT: string;
    SELECT: string;
    NUMBER: string;
    DATE: string;
};
export declare const ENTITY_ACTIONS: {
    CREATE: string;
    GET: string;
    LIST: string;
    DELETE: string;
    UPDATE: string;
};
export declare const ENTITY_ERRORS: {
    CANT_UPDATE_ITEM: string;
    CANT_LOAD_ITEMS: string;
    FIELD_IS_REQUIRED: string;
    INCORRECT_INPUT: string;
};
export interface IEntityField {
    name: string;
    label?: string;
    title?: boolean;
    type: keyof typeof ENTITY_FIELD_RENDERS;
    sortable?: boolean;
    filterable?: boolean;
    required?: boolean;
    validator?: (val: any) => boolean;
    availableVariants?: Record<any, any>;
    hideInList?: boolean;
    hideInEdit?: boolean;
}
export interface IEntityProps extends IPageProps {
    fields: IEntityField[];
    editable: boolean;
    viewable: boolean;
    creatable: boolean;
    filters: {
        current: string;
        value: any;
    };
    api?: Record<typeof ENTITY_ACTIONS[keyof typeof ENTITY_ACTIONS], {
        url: string;
        method: string;
    }>;
    fetchItemsFn?: IEntityFetchFunction;
    updateItemsFn?: IEntityUpdateFunction;
    createItemsFn?: IEntityCreateFunction;
    getItemsFn?: IEntityGetFunction;
}
export interface IEntityFetchFunctionProps {
    url: string;
    page?: number;
    filter?: {
        name?: string;
        value?: any;
    } | null;
    sortBy: string;
    sortDir: string;
    count?: number;
    token?: string;
}
export interface IEntityFetchFunctionResult {
    data: {
        list: Record<string, any>[];
        totalCount?: number;
    };
    error?: string;
}
export declare type IEntityFetchFunction = (props: IEntityFetchFunctionProps) => Promise<IEntityFetchFunctionResult>;
export interface IEntityUpdateFunctionProps {
    url: string;
    id: any;
    token?: string;
    data: Record<string, any>;
}
export interface IEntityUpdateFunctionResult {
    data: Record<string, any>;
    error?: string;
}
export declare type IEntityUpdateFunction = (props: IEntityUpdateFunctionProps) => Promise<IEntityUpdateFunctionResult>;
export interface IEntityCreateFunctionProps {
    url: string;
    id: any;
    token?: string;
    data: Record<string, any>;
}
export interface IEntityCreateFunctionResult {
    data: Record<string, any>;
    error?: string;
}
export declare type IEntityCreateFunction = (props: IEntityCreateFunctionProps) => Promise<IEntityCreateFunctionResult>;
export interface IEntityGetFunctionProps {
    url: string;
    token?: string;
    id: any;
}
export interface IEntityGetFunctionResult {
    data: Record<string, any>;
    error?: string;
}
export declare type IEntityGetFunction = (props: IEntityGetFunctionProps) => Promise<IEntityGetFunctionResult>;
