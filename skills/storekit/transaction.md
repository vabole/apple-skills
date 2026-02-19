---
title: Transaction
description: Information that represents the customer’s purchase of a product in your app.
source: https://developer.apple.com/documentation/storekit/transaction
timestamp: 2026-02-19T07:52:36.979Z
---

**Navigation:** [Storekit](/documentation/storekit)

**Structure**

# Transaction

**Available on:** iOS 15.0+, iPadOS 15.0+, macOS 12.0+, tvOS 15.0+, visionOS 1.0+, watchOS 8.0+

> Information that represents the customer’s purchase of a product in your app.

```swift
struct Transaction
```

## Overview

A *transaction* represents a successful In-App Purchase. The App Store generates a transaction each time a customer purchases an In-App Purchase product or renews a subscription. For each transaction that represents a current purchase, your app unlocks the purchased content or service and finishes the transaction.

Use the `Transaction` type to perform these transaction-related tasks:

- Get the customer’s transaction history, latest transactions, and current entitlements to unlock content and services.
- Access transaction properties.
- Finish a transaction after your app delivers the purchased content or service.
- Access the raw JSON Web Signature (JWS) string and supporting values to verify the transaction information.
- Listen for new transactions while the app is running.
- Begin a refund request from within your app.

### Access transaction history and current entitlements

Your app doesn’t create transaction objects. Instead, StoreKit automatically makes up-to-date transactions available to your app, including when someone launches the app for the first time.

> [!NOTE]
> Session 110404: [](https://developer.apple.com/videos/play/wwdc2022/110404/)

You access transactions in several ways:

- Get transaction history anytime by accessing the static [all](/documentation/storekit/transaction/all) sequence, or get just the most recent transaction for a product with the [latest Transaction](/documentation/storekit/product/latesttransaction) property of [Product](/documentation/storekit/product).
- Receive notifications for new transactions while your app is running when customers complete a purchase outside of the app, including on another device, through the transaction listener, [updates](/documentation/storekit/transaction/updates).
- Access the latest transaction for a subscription group through the subscription status API, using [transaction](/documentation/storekit/product/subscriptioninfo/status-swift.struct/transaction).
- After a successful In-App Purchase, StoreKit returns the transaction through [success(_:)](/documentation/storekit/product/purchaseresult/success(_:)).

The most important use of transaction information is for determining which In-App Purchases the customer has paid access to, so your app can unlock the content or service. The [current Entitlements](/documentation/storekit/transaction/currententitlements) API provides the information you need to unlock all of the customer’s paid content in your app. Use `currentEntitlements` to get a list of transactions for all the products the customer is currently entitled to, including non-consumable In-App Purchases and currently active subscriptions.

### Verify transactions

The App Store cryptographically signs transaction information in JWS format. StoreKit automatically validates and returns the signed information, wrapped in a [Verification Result](/documentation/storekit/verificationresult). When the `VerificationResult` wraps a `Transaction` value, it provides the raw JWS string in the [jws Representation](/documentation/storekit/verificationresult/jwsrepresentation-21vgo) property. If you get a transaction through [verified(_:)](/documentation/storekit/verificationresult/verified(_:)), the information passed validation. If you get it through [unverified(_:_:)](/documentation/storekit/verificationresult/unverified(_:_:)), the information didn’t pass StoreKit’s automatic validation. Your app can immediately access the transaction information in the [transaction](/documentation/storekit/transaction-properties).

To perform your own validation on the device, use the verification result’s [jws Representation](/documentation/storekit/verificationresult/jwsrepresentation-21vgo) string, and use the provided convenience properties [header Data](/documentation/storekit/verificationresult/headerdata-9egfp), [payload Data](/documentation/storekit/verificationresult/payloaddata-uyle), and [signature Data](/documentation/storekit/verificationresult/signaturedata-4pyv8). For added control and security, send the `jwsRepresentation` to your server to verify. Consider using the App Store Server Library to implement your verification. The library provides the functions `verifyAndDecodeTransaction` and `verifyAndDecodeRenewalInfo` in each language the library supports. For more information, see [simplifying-your-implementation-by-using-the-app-store-server](/documentation/AppStoreServerAPI/simplifying-your-implementation-by-using-the-app-store-server-library).

> [!TIP]
> The [jws Representation](/documentation/storekit/verificationresult/jwsrepresentation-21vgo) is the same as the [JWSTransaction](/documentation/AppStoreServerAPI/JWSTransaction) that the [App Store Server API](/documentation/AppStoreServerAPI) returns and to the [JWSTransaction](/documentation/AppStoreServerNotifications/JWSTransaction) that you receive in [App-Store-Server-Notifications](/documentation/AppStoreServerNotifications/App-Store-Server-Notifications-V2). You can validate them on your server in the same way.

If StoreKit returns a transaction as verified, the transaction is valid for the device. For information about performing your own verification for a device, see [device Verification](/documentation/storekit/transaction/deviceverification).

For more information about JWS, see the [rfc7515](https://datatracker.ietf.org/doc/html/rfc7515) specification.

### Access purchases made with the original API

All In-App Purchases that customers make are equally available to your app in this `Transaction` API, and in receipts using the [original-api-for-in-app](/documentation/storekit/original-api-for-in-app-purchase), as follows:

- New purchases that customers make with the original API are available immediately using the `Transaction` API.
- Purchases that customers make with the [purchase(options:)](/documentation/storekit/product/purchase(options:)) method are available in the original API when your app refreshes the receipt. For more information, see [SKReceipt Refresh Request](/documentation/storekit/skreceiptrefreshrequest).

## Conforms To

- [Copyable](/documentation/Swift/Copyable)
- [CustomDebugStringConvertible](/documentation/Swift/CustomDebugStringConvertible)
- [Equatable](/documentation/Swift/Equatable)
- [Escapable](/documentation/Swift/Escapable)
- [Hashable](/documentation/Swift/Hashable)
- [Identifiable](/documentation/Swift/Identifiable)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Transaction properties

- [Transaction properties](/documentation/storekit/transaction-properties) The properties of a transaction, including identifiers, purchase and revocation dates and details, status, and offer details.
- [appTransactionID](/documentation/storekit/transaction/apptransactionid) The unique identifier of the app download transaction.

## Monitoring transaction-related changes

- [updates](/documentation/storekit/transaction/updates) The asynchronous sequence that emits a transaction when the system creates or updates transactions that occur outside the app or on other devices.
- [Transaction.Transactions](/documentation/storekit/transaction/transactions) An asynchronous sequence of transactions.

## Getting transaction history

- [latest(for:)](/documentation/storekit/transaction/latest(for:)) Gets the customer’s most recent transaction for an In-App Purchase.
- [all](/documentation/storekit/transaction/all) A sequence that emits all the customer’s transactions for your app.
- [unfinished](/documentation/storekit/transaction/unfinished) A sequence that emits unfinished transactions for the customer.
- [SKIncludeConsumableInAppPurchaseHistory](/documentation/BundleResources/Information-Property-List/SKIncludeConsumableInAppPurchaseHistory) A Boolean value that determines whether StoreKit includes finished consumable In-App Purchases in transaction information.

## Getting current entitlements

- [currentEntitlements](/documentation/storekit/transaction/currententitlements) A sequence of the latest transactions that entitle a customer to In-App Purchases and subscriptions.

## Getting transactions for a product

- [all(for:)](/documentation/storekit/transaction/all(for:)) Gets all the transactions associated with this product ID.

## Finishing the transaction

- [finish()](/documentation/storekit/transaction/finish()) Indicates to the App Store that the app delivered the purchased content or enabled the service to finish the transaction.
- [unfinished](/documentation/storekit/transaction/unfinished) A sequence that emits unfinished transactions for the customer.

## Verifying transactions

- [deviceVerification](/documentation/storekit/transaction/deviceverification) The device verification value you use to verify whether the transaction belongs to the device.
- [deviceVerificationNonce](/documentation/storekit/transaction/deviceverificationnonce) The UUID for computing the device verification value.
- [signedDate](/documentation/storekit/transaction/signeddate) The date that the App Store signed the JWS transaction.

## Getting transaction info in JSON format

- [jsonRepresentation](/documentation/storekit/transaction/jsonrepresentation) The JSON representation of the transaction information.

## Requesting refunds

- [Testing refund requests](/documentation/storekit/testing-refund-requests) Test your app’s implementation of refund requests, and your app’s and server’s handling of approved and declined refunds.
- [beginRefundRequest(in:)](/documentation/storekit/transaction/beginrefundrequest(in:)-9k0pj) Presents the refund request sheet for the transaction in a window scene.
- [beginRefundRequest(in:)](/documentation/storekit/transaction/beginrefundrequest(in:)-63bvd) Presents the refund request sheet for the transaction in a view controller.
- [beginRefundRequest(for:in:)](/documentation/storekit/transaction/beginrefundrequest(for:in:)-65tph) Presents the refund request sheet for the specified transaction in a window scene.
- [beginRefundRequest(for:in:)](/documentation/storekit/transaction/beginrefundrequest(for:in:)-9mscy) Presents the refund request sheet for the specified transaction in a view controller.
- [Transaction.RefundRequestError](/documentation/storekit/transaction/refundrequesterror) The error codes for refund requests.
- [Transaction.RefundRequestStatus](/documentation/storekit/transaction/refundrequeststatus) The status codes for refund requests.

## Advanced Commerce transaction data

- [advancedCommerceInfo](/documentation/storekit/transaction/advancedcommerceinfo-swift.property) Metadata for transactions that use the Advanced Commerce API.
- [Transaction.AdvancedCommerceInfo](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct) Metadata for transactions that use the Advanced Commerce API.

## Getting offer types

- [Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct) The types of offers that apply to a transaction.

## Deprecated

- [currentEntitlement(for:)](/documentation/storekit/transaction/currententitlement(for:)) Gets the latest transactions that entitle the customer to a specified product.
- [currentEntitlements(for:)](/documentation/storekit/transaction/currententitlements(for:)) Gets the transactions that entitle the user to items purchased under a product ID.
- [offerPeriodStringRepresentation](/documentation/storekit/transaction/offerperiodstringrepresentation) The string representation of the offer period applied to the subscription offer for this transaction.

## Structures

- [Transaction.RevocationType](/documentation/storekit/transaction/revocationtype-swift.struct)

## Instance Properties

- [revocationPercentage](/documentation/storekit/transaction/revocationpercentage) The percentage of the transaction amount that the App Store has refunded or revoked, expressed as a decimal.
- [revocationType](/documentation/storekit/transaction/revocationtype-swift.property) The type of revocation that occurred, or  if the transaction was not revoked.
- [revocationTypeStringRepresentation](/documentation/storekit/transaction/revocationtypestringrepresentation) The string representation of the , or  if the transaction was not revoked.

## Transaction history and entitlements

- [updates](/documentation/storekit/transaction/updates)
- [all](/documentation/storekit/transaction/all)
- [currentEntitlements](/documentation/storekit/transaction/currententitlements)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
