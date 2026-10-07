# Straddle TypeScript SDK

Use Straddle's Pay by Bank and Embed APIs from server-side TypeScript or JavaScript. The SDK provides typed requests and responses, authentication, retries, and access to response metadata.

## Install

Use Node.js 20 or later with built-in `fetch`. The package includes TypeScript declarations and supports ESM and CommonJS.

```sh
npm install @straddlecom/straddle
```

The npm package is [`@straddlecom/straddle`](https://www.npmjs.com/package/@straddlecom/straddle). Its source lives in `straddle-build/straddle-typescript`.

## Make your first request

Create a sandbox API key in the [Straddle Dashboard](https://dashboard.straddle.com), then set it in your server environment. See [API authentication](https://docs.straddle.com/api-reference/authentication) for the setup steps.

```sh
export STRADDLE_API_KEY="YOUR_SANDBOX_API_KEY"
```

Save the following example as `quickstart.mjs`. It requests the first page of customers from the sandbox:

```js
import StraddleAPI from '@straddlecom/straddle';

const apiKey = process.env.STRADDLE_API_KEY;
if (!apiKey) throw new Error('Set STRADDLE_API_KEY to your sandbox API key.');

const client = new StraddleAPI({
  bearer: apiKey,
  baseURL: 'https://sandbox.straddle.com',
});

const page = await client.customers.list({ page_number: 1, page_size: 10 });
console.log(`Customers on this page: ${page.data.length}`);
```

For a SaaS platform key, add `'Straddle-Account-Id': 'YOUR_EMBEDDED_ACCOUNT_ID'` to the `list` parameters before running the example. This selects the embedded account whose customers you want to read. Direct accounts and marketplaces list customers without that header. See [platform account scoping](https://docs.straddle.com/guides/embed/api-headers).

Run the example:

```sh
node quickstart.mjs
```

A successful request prints the number of customers on the page. `Customers on this page: 0` is valid for an empty account. Customer records are in `page.data`; pagination and request metadata are in `page.meta`.

The remaining examples use this `client`.

## Configure authentication and environments

The example passes `STRADDLE_API_KEY` explicitly as `bearer`. If you omit `bearer`, the client reads `BEARER`. It also accepts a function that returns a token or a promise of a token.

Set `baseURL` explicitly to select an environment. If you omit it, the client reads `STRADDLE_BASE_URL`, then defaults to `https://sandbox.straddle.com`. Production uses `https://production.straddle.com` and a production API key. See [environments](https://docs.straddle.com/api-reference/environments).

## Read additional pages

List methods return one response page. Choose the next `page_number` using `page.meta.total_pages`, and keep your filters and account scope the same between requests:

```ts
const nextPage = await client.customers.list({ page_number: 2, page_size: 10 });
```

See the [method reference](./api.md) for each resource's filters and response types.

## Handle errors

Catch `APIError` to inspect an HTTP error's status, headers, and response body. Connection and timeout errors also extend `APIError`; their `status` is undefined.

```ts
import { APIError } from '@straddlecom/straddle';

try {
  await client.customers.list({ page_size: 10 });
} catch (error) {
  if (error instanceof APIError) {
    console.error(error.status, error.message);
  }
  throw error;
}
```

For a `401`, check that the key matches the selected environment. For a `403`, check the key's permissions and account scope. The SDK also exports specific classes such as `NotFoundError`, `ConflictError`, `UnprocessableEntityError`, and `RateLimitError`. See [API errors](https://docs.straddle.com/api-reference/errors) for response details.

## Set retries and timeouts

The client retries connection errors, `408`, `409`, `429`, and `5xx` responses twice by default. It uses exponential backoff and honors supported `Retry-After` values. The default timeout is 60,000 milliseconds per attempt, so retries can extend the total request duration.

Override these values for an individual request:

```ts
const page = await client.customers.list(
  { page_size: 10 },
  { timeout: 30_000, maxRetries: 0 },
);
```

For write operations that accept an idempotency key, pass the operation's `'Idempotency-Key'` parameter. Reuse that value when retrying the same operation. See [idempotency](https://docs.straddle.com/api-reference/idempotency).

## Inspect raw responses

Each method returns an `APIPromise`. Await it for parsed data, or use `.withResponse()` for both the data and the underlying `Response`:

```ts
const { data: page, response } = await client.customers
  .list({ page_size: 10 })
  .withResponse();

console.log(response.status, page.meta.api_request_id);
```

## Client and request options

Set these options in the client constructor.

| Option | Purpose | Default |
| --- | --- | --- |
| `bearer` | API key or token provider | `BEARER` |
| `baseURL` | API base URL | `STRADDLE_BASE_URL`, then sandbox |
| `timeout` | Timeout per attempt, in milliseconds | `60000` |
| `maxRetries` | Retry count | `2` |
| `defaultHeaders` | Headers sent with each request | None |
| `defaultQuery` | Query parameters sent with each request | None |
| `fetchOptions` | Additional fetch options | None |
| `fetch` | Custom fetch implementation | Runtime `fetch` |
| `logLevel` | `off`, `error`, `warn`, `info`, or `debug` | `STRADDLE_LOG`, then `warn` |
| `logger` | Custom logger | `console` |

Each method also accepts a final request-options argument.

| Option | Purpose |
| --- | --- |
| `headers` | Set headers for this request |
| `query` | Add query parameters |
| `body` | Override the request body |
| `timeout` | Override the timeout in milliseconds |
| `maxRetries` | Override the retry count |
| `signal` | Cancel the request with an `AbortSignal` |
| `fetchOptions` | Set fetch options for this request |

Set `logLevel: 'debug'` to log request details, response status and headers, and retry attempts. Supply a custom `logger` to send these logs to your logging system. Set `logLevel: 'off'` to disable SDK logging.

## Reference and support

Use the following resources as you build your integration:

- [SDK method reference](./api.md): operations, parameters, and response types.
- [Straddle guides](https://docs.straddle.com): payment flows, sandbox testing, and API concepts.
- [GitHub issues](https://github.com/straddle-build/straddle-typescript/issues): SDK bugs and feature requests.
- [Versioning and contributions](./VERSIONING.md): submit customizations against `scalar-next` so Scalar carries them through regeneration.
- [Security policy](./SECURITY.md) and [Apache 2.0 license](./LICENSE).

Straddle generates this SDK with Scalar and maintains repository customizations through the workflow in `VERSIONING.md`.
