import assert from 'node:assert/strict';
import test from 'node:test';

import { publishNpm } from './publish-npm.mjs';

test('publishes a stable version with the latest dist-tag', () => {
  const calls = [];
  const runner = (args, stdio) => {
    calls.push([args, stdio]);
    return { status: calls.length === 1 ? 1 : 0 };
  };

  publishNpm(runner, { name: '@straddlecom/straddle', version: '1.0.0' });

  assert.deepEqual(calls, [
    [['view', '@straddlecom/straddle@1.0.0', 'version'], 'ignore'],
    [['publish', '--access', 'public', '--tag', 'latest'], undefined],
  ]);
});
