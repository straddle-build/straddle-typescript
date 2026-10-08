import assert from 'node:assert/strict';
import test from 'node:test';

// Exercises the built package, which `npm run build` produces before CI runs these tests.
import StraddleAPI from '../dist/esm/index.js';

const chargeParams = {
  paykey: 'paykey-token',
  description: 'Monthly subscription fee',
  amount: 10000,
  currency: 'USD',
  payment_date: '2024-01-01',
  consent_type: 'internet',
  device: { ip_address: '192.168.1.1' },
  external_id: 'charge-001',
  config: { balance_check: 'enabled' },
};

// Mocked fetch that answers with the given statuses in order and records each request's headers.
function clientWithResponses(...statuses) {
  const sent = [];
  const client = new StraddleAPI({
    bearer: 'test-key',
    baseURL: 'http://straddle.test',
    fetch: async (_url, init) => {
      sent.push(new Headers(init.headers));
      return new Response('{}', {
        status: statuses[sent.length - 1],
        headers: { 'content-type': 'application/json', 'retry-after-ms': '1' },
      });
    },
  });
  return { client, sent };
}

test('a create sends the idempotencyKey request option as Idempotency-Key on every attempt', async () => {
  const { client, sent } = clientWithResponses(500, 200);

  await client.charges.create(chargeParams, { idempotencyKey: 'order-1234-charge' });

  assert.deepEqual(
    sent.map((headers) => headers.get('idempotency-key')),
    ['order-1234-charge', 'order-1234-charge'],
  );
});

test('a create without a key sends no Idempotency-Key, including on retry', async () => {
  const { client, sent } = clientWithResponses(500, 200);

  await client.charges.create(chargeParams);

  assert.deepEqual(
    sent.map((headers) => headers.has('idempotency-key')),
    [false, false],
  );
});

test('a create sends the operation Idempotency-Key parameter', async () => {
  const { client, sent } = clientWithResponses(200);

  await client.charges.create({ ...chargeParams, 'Idempotency-Key': 'param-key-0001' });

  assert.equal(sent[0].get('idempotency-key'), 'param-key-0001');
});

test('the operation Idempotency-Key parameter wins over the idempotencyKey request option', async () => {
  const { client, sent } = clientWithResponses(200);

  await client.charges.create(
    { ...chargeParams, 'Idempotency-Key': 'param-key-0001' },
    { idempotencyKey: 'option-key-0001' },
  );

  assert.equal(sent[0].get('idempotency-key'), 'param-key-0001');
});
