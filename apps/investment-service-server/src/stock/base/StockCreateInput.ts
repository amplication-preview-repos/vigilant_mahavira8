/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { TransactionCreateNestedManyWithoutStocksInput } from "./TransactionCreateNestedManyWithoutStocksInput";
import { Type } from "class-transformer";

@InputType()
class StockCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  tickerSymbol?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  companyName?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  currentPrice?: number | null;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutStocksInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutStocksInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutStocksInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutStocksInput;
}

export { StockCreateInput as StockCreateInput };
