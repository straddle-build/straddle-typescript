# Changelog

## [1.0.3](https://github.com/straddle-build/straddle-typescript/compare/v1.0.0...v1.0.3) (2026-09-03)


### ⚠ BREAKING CHANGES

* **api:** 4 breaking changes to the SDK surface.
    - Property `embed_error_response.data` type changed from `unknown | null` to `unknown`.
    - Schema `customer_address` shape changed.
    - Schema `unmasked_compliance_profile` shape changed.
    - Schema `compliance_profile` shape changed.
* **api:** 34 breaking changes to the SDK surface.
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
    - Removed operation `bridge.createTanPaykey` (`POST /v1/bridge/tan`).
    - Removed operation `bridge.createSpeedchexPaykey` (`POST /v1/bridge/speedchex`).
    - Removed operation `reports.createCustomerStatusTotals` (`POST /v1/reports/total_customers_by_status`).
    - Property `update_payout_status_request.reason` is no longer required.
    - Property `update_payout_status_request.reason` type changed from `string` to `string | null`.
    - Property `refund_charge_request.amount` is no longer required.
    - Removed schema `customer_status_totals`.
    - Removed schema `customer_status_totals_response`.
    - Removed schema `create_tan_paykey_request`.
    - Removed schema `create_speedchex_paykey_request`.
* **api:** 7 breaking changes to the SDK surface.
    - Body field `amount` on `charges.refund` is now required.
    - Body field `reason` on `payouts.hold` is now required.
    - Body field `reason` on `payouts.release` is now required.
    - Body field `reason` on `payouts.cancel` is now required.
    - Property `update_payout_status_request.reason` is now required.
    - Property `update_payout_status_request.reason` type changed from `string | null` to `string`.
    - Property `refund_charge_request.amount` is now required.

### Features

* **api:** update property embed_error_response.data (+3 more changes) ([4ad658e](https://github.com/straddle-build/straddle-typescript/commit/4ad658ecfa4114c67f909a6e958dcf68a8d77c0e))
* **api:** update request body of accounts.update (+33 more changes) ([9dac789](https://github.com/straddle-build/straddle-typescript/commit/9dac78995bbf86ae0144fa029c335f108c0f2cd8))
* **api:** update SDK surface (14 changes) ([2d3e5e0](https://github.com/straddle-build/straddle-typescript/commit/2d3e5e0f34bb3c2388d0550cc9b669d7388f835c))


### Bug Fixes

* recover npm 1.0 publishing ([#3](https://github.com/straddle-build/straddle-typescript/issues/3)) ([0ff7206](https://github.com/straddle-build/straddle-typescript/commit/0ff7206aaaa830f5a1deb6d515320001f5e18846))


### Chores

* **api:** regenerate SDK ([ed0d78b](https://github.com/straddle-build/straddle-typescript/commit/ed0d78b11fcad8f8f40986f38543a514ded7128f))
* release 1.0.3 ([b901272](https://github.com/straddle-build/straddle-typescript/commit/b901272342c7635694b14d4435250875c3539621))
* release 1.0.3 ([17e1264](https://github.com/straddle-build/straddle-typescript/commit/17e12642fc1784eff071a753a32f88cdac31ba21))
* remove npm recovery path ([#5](https://github.com/straddle-build/straddle-typescript/issues/5)) ([1873671](https://github.com/straddle-build/straddle-typescript/commit/18736710e5d01cd4c838b7e0dd3725ca682c2f6c))

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
