import React, { FC } from 'react';
import { useFeature } from '~/utils/hooks';
import { FeatureListTheadItem } from '~/application/modules/pages/Feature/components/renderers/list/FeatureListTheadItem';
import { observer } from 'mobx-react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { FeatureListEmptyRows } from '~/application/modules/pages/Feature/components/renderers/list/FeatureListEmptyRows';
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { FeatureListRow } from '~/application/modules/pages/Feature/components/renderers/list/FeatureListRow';

interface IProps {}

const FeatureListTable: FC<IProps> = observer(() => {
  const feature = useFeature();

  const {
    data: { isLoading, list },
    filters: { rows },
  } = feature;

  return (
    <TableContainer
      component={Paper}
      className={styles.container}
      elevation={0}
    >
      <Table
        className={classNames(styles.table, 'feature-list__table')}
        stickyHeader
        size="medium"
      >
        <TableHead>
          <TableRow className="feature-list__table-head-row">
            {feature.fieldsOfCurrentMode.map((field) => (
              <FeatureListTheadItem field={field} key={field.name.toString()} />
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {isLoading && (
            <FeatureListEmptyRows
              rows={rows}
              cols={feature.fieldsOfCurrentMode.length}
            />
          )}

          {!isLoading &&
            !!list &&
            list.map((item: Record<string, any>, i: number) => (
              <FeatureListRow values={item} key={`${item.id}-${i}`} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export { FeatureListTable };
