/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */
import React, { useCallback } from 'react';
import { DateTimePicker } from '@material-ui/pickers';
import format from 'date-fns/format';
var EntityFieldDateTime = function (_a) {
    var value = _a.value, handler = _a.handler, label = _a.label, error = _a.error, isEditing = _a.isEditing, onClick = _a.onClick;
    var onChange = useCallback(function (value) {
        if (!handler)
            return;
        handler(value === null || value === void 0 ? void 0 : value.toISOString());
    }, [value, handler]);
    return isEditing ? (React.createElement("div", null,
        React.createElement(DateTimePicker, { value: value ? new Date(value) : null, onChange: onChange, format: "dd.MM.yyyy HH:ii", error: !!error, helperText: error, inputVariant: "outlined", label: label }))) : (React.createElement("div", { onClick: onClick }, value ? format(new Date(value), 'dd.MM.yyyy HH:ii') : React.createElement("div", null, "\u00A0")));
};
export { EntityFieldDateTime };