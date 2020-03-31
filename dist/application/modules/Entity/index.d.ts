/// <reference types="react" />
import { IEntityProps, ENTITY_SORT_DIRS } from '../../types/entity';
import { Page } from '../Page';
import { CancellablePromise } from 'mobx/lib/api/flow';
import { RouteComponentProps } from 'react-router-dom';
export declare class Entity extends Page {
    api: IEntityProps['api'];
    fields: IEntityProps['fields'];
    filters: IEntityProps['filters'];
    editable: IEntityProps['editable'];
    viewable: IEntityProps['viewable'];
    fetchItemsFn: IEntityProps['fetchItemsFn'];
    updateItemsFn: IEntityProps['updateItemsFn'];
    createItemsFn: IEntityProps['createItemsFn'];
    getItemsFn: IEntityProps['getItemsFn'];
    isLoading: boolean;
    itemsPerPage: number[];
    items: number;
    totalCount: number;
    page: number;
    data: Record<string, any>[];
    error?: string | null;
    sortBy: string;
    sortDir: typeof ENTITY_SORT_DIRS[keyof typeof ENTITY_SORT_DIRS];
    editorFieldErrors: Record<string, string>;
    editorData: Record<string, any>;
    constructor(fields?: Partial<IEntityProps>);
    setFilters: (filters: {
        current: string;
        value: any;
    }) => void;
    setPage: (page: number) => void;
    setPerPage: (items: number) => void;
    setSort: (field: string) => void;
    fetchItemsInstance?: CancellablePromise<any>;
    fetchItems: () => void;
    fetchItemsCancel: () => void;
    updateItemInstance?: CancellablePromise<any>;
    updateItem: () => void;
    createItem: () => void;
    resetFieldError: (field: string) => void;
    validateSubmitFields: (data: Record<string, any>) => boolean;
    getItemsInstance?: CancellablePromise<any>;
    getItem: (id: any) => void;
    getItemsCancel: () => void;
    setEditorData: (data: Record<string, any>) => void;
    createEmptyItem: () => void;
    onMount: () => void;
    onUnmount: () => void;
    get ListHead(): () => JSX.Element;
    get ListBody(): () => JSX.Element;
    get ListFooter(): () => JSX.Element;
    get List(): () => JSX.Element;
    get Viewer(): ({ match: { params: { id }, }, }: RouteComponentProps<{
        id: string;
    }, import("react-router").StaticContext, import("history").History.PoorMansUnknown>) => JSX.Element;
    get Editor(): ({ match: { params: { id }, }, }: RouteComponentProps<{
        id: string;
    }, import("react-router").StaticContext, import("history").History.PoorMansUnknown>) => JSX.Element;
    get Creator(): ({ match: { params: { id }, }, }: RouteComponentProps<{
        id: string;
    }, import("react-router").StaticContext, import("history").History.PoorMansUnknown>) => JSX.Element;
    get output(): () => JSX.Element;
}
