/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import { IPageProps } from './page';
import { EntityFieldString } from '~/components/pages/EntityFieldString';
import { EntityFieldBoolean } from '~/components/pages/EntityFieldBoolean';
import { EntityFieldDate } from '~/components/pages/EntityFieldDate';
import { EntityFieldSelect } from '~/components/pages/EntityFieldSelect';
import { EntityFieldPhone } from '~/components/pages/EntityFieldPhone';
import { EntityFieldRichText } from '~/components/pages/EntityFieldRichText';

export const ENTITY_FIELD_RENDERS = {
  string: EntityFieldString,
  date: EntityFieldDate,
  boolean: EntityFieldBoolean,
  select: EntityFieldSelect,
  phone: EntityFieldPhone,
  richtext: EntityFieldRichText,
};

// getFieldRenderer returns field-type specific renderer
export const getEntityFieldRenderer = (type: string = 'string') => {
  const key = Object.prototype.hasOwnProperty.call(ENTITY_FIELD_RENDERS, type)
    ? type
    : 'string';

  return ENTITY_FIELD_RENDERS[key as keyof typeof ENTITY_FIELD_RENDERS];
};

export const ENTITY_SORT_DIRS: Record<string, 'asc' | 'desc'> = {
  ASC: 'asc',
  DESC: 'desc',
};

export const ENTITY_FILTER_TYPES = {
  TEXT: 'TEXT',
  SELECT: 'SELECT',
  NUMBER: 'NUMBER',
  DATE: 'DATE',
};

export const ENTITY_ACTIONS = {
  CREATE: 'create',
  GET: 'get',
  LIST: 'list',
  DELETE: 'delete',
  UPDATE: 'update',
};

export const ENTITY_ERRORS = {
  CANT_UPDATE_ITEM: `Can't update item`,
  CANT_LOAD_ITEMS: `Can't load items`,
  FIELD_IS_REQUIRED: 'This field is required',
  INCORRECT_INPUT: 'Check all inputs',
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
  api?: Record<
    typeof ENTITY_ACTIONS[keyof typeof ENTITY_ACTIONS],
    { url: string; method: string }
  >;
  fetchItemsFn?: IEntityFetchFunction;
  updateItemsFn?: IEntityUpdateFunction;
  createItemsFn?: IEntityCreateFunction;
  getItemsFn?: IEntityGetFunction;
}

export interface IEntityFetchFunctionProps {
  url: string;
  page?: number;
  filter?: { name?: string; value?: any } | null;
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

export type IEntityFetchFunction = (
  props: IEntityFetchFunctionProps
) => Promise<IEntityFetchFunctionResult>;

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

export type IEntityUpdateFunction = (
  props: IEntityUpdateFunctionProps
) => Promise<IEntityUpdateFunctionResult>;

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

export type IEntityCreateFunction = (
  props: IEntityCreateFunctionProps
) => Promise<IEntityCreateFunctionResult>;

export interface IEntityGetFunctionProps {
  url: string;
  token?: string;
  id: any;
}

export interface IEntityGetFunctionResult {
  data: Record<string, any>;
  error?: string;
}

export type IEntityGetFunction = (
  props: IEntityGetFunctionProps
) => Promise<IEntityGetFunctionResult>;
