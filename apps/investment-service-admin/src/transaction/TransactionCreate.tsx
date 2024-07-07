import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

import { StockTitle } from "../stock/StockTitle";
import { PortfolioTitle } from "../portfolio/PortfolioTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="transactionDate" source="transactionDate" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="price" source="price" />
        <ReferenceInput source="stock.id" reference="Stock" label="Stock">
          <SelectInput optionText={StockTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="portfolio.id"
          reference="Portfolio"
          label="Portfolio"
        >
          <SelectInput optionText={PortfolioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
