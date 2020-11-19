/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { observer } from 'mobx-react';
import { IEntityFieldProps, useEntity } from '~/application';

type IProps = IEntityFieldProps & {};

const EntityFieldReferenceSelect: FC<IProps> = observer(
  ({ label, name, value, handler, error, isEditing, onClick }) => {
    const entity = useEntity();
    const options = entity.referenceData[name] || {};

    const ref = useRef<HTMLLabelElement>(null);

    const onChange = useCallback(
      (event) => {
        if (!handler) return;
        handler(event.target.value);
      },
      [value, handler]
    );

    const [labelWidth, setLabelWidth] = useState(0);

    useEffect(() => {
      setLabelWidth((ref.current && ref.current.clientWidth) || 0);
    }, [ref.current]);

    return isEditing ? (
      <FormControl variant="outlined">
        <InputLabel htmlFor={label} style={{ whiteSpace: 'nowrap' }} ref={ref}>
          {label}
        </InputLabel>

        <Select
          variant="outlined"
          id={label}
          name={label}
          label={label}
          value={!value ? '' : value}
          onChange={onChange}
          error={!!error}
          inputProps={{ className: 'select' }}
          labelWidth={labelWidth}
          style={{ minWidth: labelWidth + 40 }}
        >
          <MenuItem value="">...</MenuItem>

          {options &&
            Object.keys(options).map((item) => (
              <MenuItem key={item} value={item}>
                {options[item]}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    ) : (
      <div onClick={onClick}>
        {(options && options.referenceData && options.referenceData[value]) || (
          <div>&nbsp;</div>
        )}
      </div>
    );
  }
);

export { EntityFieldReferenceSelect };
