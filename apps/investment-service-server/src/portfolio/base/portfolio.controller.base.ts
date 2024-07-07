/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PortfolioService } from "../portfolio.service";
import { PortfolioCreateInput } from "./PortfolioCreateInput";
import { Portfolio } from "./Portfolio";
import { PortfolioFindManyArgs } from "./PortfolioFindManyArgs";
import { PortfolioWhereUniqueInput } from "./PortfolioWhereUniqueInput";
import { PortfolioUpdateInput } from "./PortfolioUpdateInput";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";

export class PortfolioControllerBase {
  constructor(protected readonly service: PortfolioService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Portfolio })
  async createPortfolio(
    @common.Body() data: PortfolioCreateInput
  ): Promise<Portfolio> {
    return await this.service.createPortfolio({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Portfolio] })
  @ApiNestedQuery(PortfolioFindManyArgs)
  async portfolios(@common.Req() request: Request): Promise<Portfolio[]> {
    const args = plainToClass(PortfolioFindManyArgs, request.query);
    return this.service.portfolios({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Portfolio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async portfolio(
    @common.Param() params: PortfolioWhereUniqueInput
  ): Promise<Portfolio | null> {
    const result = await this.service.portfolio({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Portfolio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePortfolio(
    @common.Param() params: PortfolioWhereUniqueInput,
    @common.Body() data: PortfolioUpdateInput
  ): Promise<Portfolio | null> {
    try {
      return await this.service.updatePortfolio({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Portfolio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePortfolio(
    @common.Param() params: PortfolioWhereUniqueInput
  ): Promise<Portfolio | null> {
    try {
      return await this.service.deletePortfolio({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/transactions")
  @ApiNestedQuery(TransactionFindManyArgs)
  async findTransactions(
    @common.Req() request: Request,
    @common.Param() params: PortfolioWhereUniqueInput
  ): Promise<Transaction[]> {
    const query = plainToClass(TransactionFindManyArgs, request.query);
    const results = await this.service.findTransactions(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        transactionDate: true,
        typeField: true,
        quantity: true,
        price: true,

        stock: {
          select: {
            id: true,
          },
        },

        portfolio: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transactions")
  async connectTransactions(
    @common.Param() params: PortfolioWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        connect: body,
      },
    };
    await this.service.updatePortfolio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transactions")
  async updateTransactions(
    @common.Param() params: PortfolioWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        set: body,
      },
    };
    await this.service.updatePortfolio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transactions")
  async disconnectTransactions(
    @common.Param() params: PortfolioWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        disconnect: body,
      },
    };
    await this.service.updatePortfolio({
      where: params,
      data,
      select: { id: true },
    });
  }
}
