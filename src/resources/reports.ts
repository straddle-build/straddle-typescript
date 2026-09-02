// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import type * as AccountsAPI from './accounts';
import type * as BridgeAPI from './bridge';

export class Reports extends APIResource {
  /**
   * Returns customer counts grouped by `status` for the scoped account.
   *
   * @param {ReportCreateCustomerStatusTotalsParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomerStatusTotalsResponse>} Created
   *
   * @example
   * ```ts
   * const customerStatusTotals = await client.reports.createCustomerStatusTotals();
   * ```
   */
  createCustomerStatusTotals(
    params: ReportCreateCustomerStatusTotalsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerStatusTotalsResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
    } = params ?? {};
    return this._client.post('/v1/reports/total_customers_by_status', {
      ...options,
      headers: buildHeaders([
        {
          ...(straddleAccountID !== undefined ? { 'Straddle-Account-Id': straddleAccountID } : {}),
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
        },
        options?.headers,
      ]),
    });
  }
}

export interface CustomerStatusTotalsResponse {
  /**
   * Metadata for an API request.
   */
  meta: AccountsAPI.ResponseMetadata;
  /**
   * Shape of the response envelope.
   * - `object` means `data` contains one JSON object.
   * - `array` means `data` contains an array of JSON objects.
   * - `error` means `error` contains the error details.
   * - `none` means the response contains no data.
   */
  response_type: BridgeAPI.ResponseType;
  data: CustomerStatusTotals;
}

export interface CustomerStatusTotals {
  /**
   * Number of customers with a `status` of `verified`.
   * @format int32
   */
  verified: number;
  /**
   * Number of customers with a `status` of `pending`.
   * @format int32
   */
  pending: number;
  /**
   * Number of customers with a `status` of `review`.
   * @format int32
   */
  review: number;
  /**
   * Number of customers with a `status` of `inactive`.
   * @format int32
   */
  inactive: number;
  /**
   * Number of customers with a `status` of `rejected`.
   * @format int32
   */
  rejected: number;
}

export interface ReportCreateCustomerStatusTotalsParams {
  /**
   * For platform requests, the embedded account UUID that sets the request scope.
   * @format uuid
   */
  'Straddle-Account-Id'?: string;
  /**
   * Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}
export declare namespace Reports {
  export {
    type CustomerStatusTotalsResponse as CustomerStatusTotalsResponse,
    type CustomerStatusTotals as CustomerStatusTotals,
    type ReportCreateCustomerStatusTotalsParams as ReportCreateCustomerStatusTotalsParams,
  };
}
