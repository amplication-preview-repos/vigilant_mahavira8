import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { STOCK_TITLE_FIELD } from "../stock/StockTitle";
import { PORTFOLIO_TITLE_FIELD } from "./PortfolioTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PortfolioShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Transaction"
          target="portfolioId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="transactionDate" source="transactionDate" />
            <TextField label="type" source="typeField" />
            <TextField label="quantity" source="quantity" />
            <TextField label="price" source="price" />
            <ReferenceField label="Stock" source="stock.id" reference="Stock">
              <TextField source={STOCK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Portfolio"
              source="portfolio.id"
              reference="Portfolio"
            >
              <TextField source={PORTFOLIO_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
