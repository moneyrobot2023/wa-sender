import { FC, MouseEventHandler } from 'react';
declare type IProps = {
    value: any;
    isEditing?: boolean;
    handler?: (val: any) => void;
    onClick?: MouseEventHandler<HTMLDivElement>;
} & Record<string, any>;
declare const EntityFieldDate: FC<IProps>;
export { EntityFieldDate };
