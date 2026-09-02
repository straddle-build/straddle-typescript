# Changelog

## [1.0.0](https://github.com/straddle-build/straddle-typescript/compare/v1.0.0...v1.0.0) (2026-09-02)


### ⚠ BREAKING CHANGES

* **api:** 27 breaking changes to the SDK surface.
    - Request body of `accounts.update` is now required.
    - Request body of `accounts.create` is now required.
    - Request body of `accounts.onboard` is now required.
    - Request body of `capabilityRequests.create` is now required.
    - Request body of `linkedBankAccounts.create` is now required.
    - Request body of `linkedBankAccounts.update` is now required.
    - Request body of `organizations.create` is now required.
    - Request body of `representatives.create` is now required.
    - Request body of `representatives.update` is now required.
    - Request body of `bridge.createBankAccountPaykey` is now required.
    - Request body of `bridge.createPlaidPaykey` is now required.
    - Request body of `bridge.createToken` is now required.
    - Request body of `bridge.createQuilttPaykey` is now required.
    - Request body of `customers.update` is now required.
    - Request body of `customers.create` is now required.
    - Request body of `customers.review.setVerificationDecision` is now required.
    - Request body of `paykeys.review.setVerificationDecision` is now required.
    - Request body of `charges.update` is now required.
    - Request body of `charges.create` is now required.
    - Request body of `charges.uploadAuthorizationProof` is now required.
    - Request body of `fundingEvents.simulate` is now required.
    - Request body of `payouts.update` is now required.
    - Request body of `payouts.create` is now required.
    - Request body of `payouts.uploadAuthorizationProof` is now required.
    - Property `update_payout_status_request.reason` is no longer required.
    - Property `update_payout_status_request.reason` type changed from `string` to `string | null`.
    - Property `refund_charge_request.amount` is no longer required.

### Features

* **api:** initial SDK generation ([004b7a0](https://github.com/straddle-build/straddle-typescript/commit/004b7a0d67fdc1eb53f8dbcbcd98a805878c5364))
* **api:** update request body of accounts.update (+27 more changes) ([d235cc8](https://github.com/straddle-build/straddle-typescript/commit/d235cc82e931793383d90630ebdd7921ef747814))


### Chores

* **api:** update generated SDK content ([40b3456](https://github.com/straddle-build/straddle-typescript/commit/40b34560d6684d477aca3268aab5bff142df825f))
* release 1.0.0 ([883b975](https://github.com/straddle-build/straddle-typescript/commit/883b9756d010f8a9d0ea0ce259f441723db4bac3))
* release 1.0.0 ([9495588](https://github.com/straddle-build/straddle-typescript/commit/9495588f8ae2da85f47295f7c85bb26b6bc7a334))

## [1.0.0](https://github.com/straddle-build/straddle-typescript/compare/v0.1.0...v1.0.0) (2026-09-02)


### ⚠ BREAKING CHANGES

* **api:** 27 breaking changes to the SDK surface.
    - Request body of `accounts.update` is now required.
    - Request body of `accounts.create` is now required.
    - Request body of `accounts.onboard` is now required.
    - Request body of `capabilityRequests.create` is now required.
    - Request body of `linkedBankAccounts.create` is now required.
    - Request body of `linkedBankAccounts.update` is now required.
    - Request body of `organizations.create` is now required.
    - Request body of `representatives.create` is now required.
    - Request body of `representatives.update` is now required.
    - Request body of `bridge.createBankAccountPaykey` is now required.
    - Request body of `bridge.createPlaidPaykey` is now required.
    - Request body of `bridge.createToken` is now required.
    - Request body of `bridge.createQuilttPaykey` is now required.
    - Request body of `customers.update` is now required.
    - Request body of `customers.create` is now required.
    - Request body of `customers.review.setVerificationDecision` is now required.
    - Request body of `paykeys.review.setVerificationDecision` is now required.
    - Request body of `charges.update` is now required.
    - Request body of `charges.create` is now required.
    - Request body of `charges.uploadAuthorizationProof` is now required.
    - Request body of `fundingEvents.simulate` is now required.
    - Request body of `payouts.update` is now required.
    - Request body of `payouts.create` is now required.
    - Request body of `payouts.uploadAuthorizationProof` is now required.
    - Property `update_payout_status_request.reason` is no longer required.
    - Property `update_payout_status_request.reason` type changed from `string` to `string | null`.
    - Property `refund_charge_request.amount` is no longer required.

### Features

* **api:** initial SDK generation ([004b7a0](https://github.com/straddle-build/straddle-typescript/commit/004b7a0d67fdc1eb53f8dbcbcd98a805878c5364))
* **api:** update request body of accounts.update (+27 more changes) ([d235cc8](https://github.com/straddle-build/straddle-typescript/commit/d235cc82e931793383d90630ebdd7921ef747814))


### Chores

* **api:** update generated SDK content ([40b3456](https://github.com/straddle-build/straddle-typescript/commit/40b34560d6684d477aca3268aab5bff142df825f))
* release 1.0.0 ([883b975](https://github.com/straddle-build/straddle-typescript/commit/883b9756d010f8a9d0ea0ce259f441723db4bac3))
* release 1.0.0 ([9495588](https://github.com/straddle-build/straddle-typescript/commit/9495588f8ae2da85f47295f7c85bb26b6bc7a334))
