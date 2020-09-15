import { CrudlField } from '~/application/modules/pages/CrudlEntity/items/CrudlField';
import { observable } from 'mobx';
import React from 'react';
import { SelectFilter } from '~/application/modules/pages/CrudlEntity/components/renderers/filters/SelectFilter';

export type SelectFieldOptions = CrudlField['options'] & {
  options?: Record<any, any>;
  autocomplete?: boolean;
};

export class SelectField<
  T extends Record<string, any> = Record<string, any>
> extends CrudlField {
  constructor(
    name: CrudlField['name'],
    { options, autocomplete, ...props }: SelectFieldOptions
  ) {
    super(name, props);

    if (options) this.variants = options;
    if (!autocomplete) this.autocomplete = false;
  }

  @observable variants: Record<any, any> = {};
  @observable autocomplete = true;

  formatValue(val: any): any {
    return Object.prototype.hasOwnProperty.call(this.variants, val)
      ? this.variants[val]
      : val;
  }

  asString(val: string) {
    return this.formatValue(val);
  }

  @observable
  List: CrudlField['List'] = ({ value }) => (
    <div>{this.formatValue(value)}</div>
  );

  @observable
  Filter: CrudlField['Filter'] = ({ value, onReset, onChange }) => (
    <SelectFilter
      label={this.label}
      name={this.name}
      value={value}
      onChange={onChange}
      onReset={onReset}
      variants={this.variants}
      autocomplete={this.autocomplete}
    />
  );
}
