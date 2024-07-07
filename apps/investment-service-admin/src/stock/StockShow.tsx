import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { STOCK_TITLE_FIELD } from "./StockTitle";
import { PORTFOLIO_TITLE_FIELD } from "../portfolio/PortfolioTitle";

export const StockShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="tickerSymbol" source="tickerSymbol" />
        <TextField label="companyName" source="companyName" />
        <TextField label="currentPrice" source="currentPrice" />
        <ReferenceManyField
          reference="Transaction"
          target="stockId"
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
