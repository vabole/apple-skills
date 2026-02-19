---
title: Product
description: Information about a product that you configure in App Store Connect.
source: https://developer.apple.com/documentation/storekit/product
timestamp: 2026-02-19T07:52:37.023Z
---

**Navigation:** [Storekit](/documentation/storekit)

**Structure**

# Product

**Available on:** iOS 15.0+, iPadOS 15.0+, macOS 12.0+, tvOS 15.0+, visionOS 1.0+, watchOS 8.0+

> Information about a product that you configure in App Store Connect.

```swift
struct Product
```

## Overview

The `Product` type represents the in-app purchases that you configure in App Store Connect and make available for purchase within your app. Use `Product` to perform all product-related tasks in your app, from displaying in-app purchases and offers to making a purchase and getting transaction and subscription status information.

To get a `Product` instance, call [products(for:)](/documentation/storekit/product/products(for:)) and provide one or more in-app purchase product identifiers. Use a `Product` instance to display in-app purchases and subscription offers in your store, as follows:

- Show the localized name, description, and pricing information using [display Name](/documentation/storekit/product/displayname), [description](/documentation/storekit/product/description), and [display Price](/documentation/storekit/product/displayprice), respectively.
- Determine whether a user is eligible for an introductory offer for the product using [is Eligible For Intro Offer](/documentation/storekit/product/subscriptioninfo/iseligibleforintrooffer).
- Display your subscription offers using the subscription information in [subscription](/documentation/storekit/product/subscription).

When users initiate a purchase, call [purchase(options:)](/documentation/storekit/product/purchase(options:)) or [purchase(confirmIn:options:)](/documentation/storekit/product/purchase(confirmin:options:)-3bivf) on the product instance. If your app uses SwiftUI, you can also use [Purchase Action](/documentation/storekit/purchaseaction). Set purchase options ([Purchase Option](/documentation/storekit/product/purchaseoption)) to define an optional app account token, apply a promotional offer, or set a product quantity. Purchase options can also simulate an Ask to Buy scenario when you’re testing your app in the sandbox environment.

Use a `Product` instance to learn whether a user is entitled to a product by checking [current Entitlement](/documentation/storekit/product/currententitlement), which holds the transaction that entitles the user to the product. This transaction information, as well as the transaction in [latest Transaction](/documentation/storekit/product/latesttransaction), are cryptographically signed by the App Store in JSON Web Signature (JWS) format.

If the product is an auto-renewable subscription, use the [status-swift.property](/documentation/storekit/product/subscriptioninfo/status-swift.property) and [renewal Info](/documentation/storekit/product/subscriptioninfo/status-swift.struct/renewalinfo) in the [subscription](/documentation/storekit/product/subscription) information to help manage subscriptions and inform business decisions, such as presenting subscription offers.

For information about configuring In-App Purchases in App Store Connect, see [overview-for-configuring-in-app](https://developer.apple.com/help/app-store-connect/configure-in-app-purchase-settings/overview-for-configuring-in-app-purchases).

## Conforms To

- [Copyable](/documentation/Swift/Copyable)
- [CustomDebugStringConvertible](/documentation/Swift/CustomDebugStringConvertible)
- [Equatable](/documentation/Swift/Equatable)
- [Escapable](/documentation/Swift/Escapable)
- [Hashable](/documentation/Swift/Hashable)
- [Identifiable](/documentation/Swift/Identifiable)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Requesting products from the App Store

- [products(for:)](/documentation/storekit/product/products(for:)) Requests product data from the App Store.

## Displaying a product description and price

- [displayName](/documentation/storekit/product/displayname) The localized display name of the product, if it exists.
- [description](/documentation/storekit/product/description) The localized description of the product.
- [displayPrice](/documentation/storekit/product/displayprice) The localized string representation of the product price, suitable for display.
- [price](/documentation/storekit/product/price) The decimal representation of the cost of the product, in local currency.
- [priceFormatStyle](/documentation/storekit/product/priceformatstyle) The format style for the numbers in the price of the product.
- [subscriptionPeriodFormatStyle](/documentation/storekit/product/subscriptionperiodformatstyle) The format style for the date components related to a subscription’s duration.
- [subscriptionPeriodUnitFormatStyle](/documentation/storekit/product/subscriptionperiodunitformatstyle) The format style for subscription period units, such as week, month, or year.

## Purchasing a product

- [purchase(options:)](/documentation/storekit/product/purchase(options:)) Initiates a purchase for the product with the App Store and displays the confirmation sheet.
- [purchase(confirmIn:options:)](/documentation/storekit/product/purchase(confirmin:options:)-6dj6y) Initiates a purchase for the product with the App Store and displays the confirmation sheet.
- [purchase(confirmIn:options:)](/documentation/storekit/product/purchase(confirmin:options:)-3bivf) Processes a purchase for the product.
- [purchase(confirmIn:options:)](/documentation/storekit/product/purchase(confirmin:options:)-8eai6) Processes a purchase for the product.
- [Product.PurchaseOption](/documentation/storekit/product/purchaseoption) Optional settings for a product purchase that add account information, purchase details, and offers, or that specify behaviors.
- [Product.PurchaseResult](/documentation/storekit/product/purchaseresult) The result of a purchase.
- [Product.PurchaseError](/documentation/storekit/product/purchaseerror) Error information for product purchase errors.

## Receiving current entitlement information

- [currentEntitlements](/documentation/storekit/product/currententitlements)

## Getting the latest transaction

- [latestTransaction](/documentation/storekit/product/latesttransaction) The most recent transaction for the product.

## Getting subscription information

- [subscription](/documentation/storekit/product/subscription) The subscription information for an auto-renewable subscripton.
- [Product.SubscriptionInfo](/documentation/storekit/product/subscriptioninfo) Information about an auto-renewable subscription, such as its status, period, subscription group, and subscription offer details.
- [Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod) Values that represent the duration of time between subscription renewals.
- [Product.SubscriptionOffer](/documentation/storekit/product/subscriptionoffer) Information about a subscription offer that you configure in App Store Connect.
- [Product.SubscriptionInfo.Status](/documentation/storekit/product/subscriptioninfo/status-swift.struct) The renewal status information for an auto-renewable subscription.

## Getting product identifiers and type

- [id](/documentation/storekit/product/id) The unique product identifier.
- [type](/documentation/storekit/product/type) The in-app purchase product type.
- [Product.ProductType](/documentation/storekit/product/producttype) The types of in-app purchases.

## Getting Family Sharing status

- [isFamilyShareable](/documentation/storekit/product/isfamilyshareable) A Boolean value that indicates whether the product is available for Family Sharing in App Store Connect.

## Managing promoted in-app purchases

- [Product.PromotionInfo](/documentation/storekit/product/promotioninfo) Information about a promoted In-App Purchase that customizes its order and visibility on the device.

## Loading products

- [Product.CollectionTaskState](/documentation/storekit/product/collectiontaskstate) The state of a task that loads a collection of products in the background.
- [Product.TaskState](/documentation/storekit/product/taskstate) The state of a task that loads a product in the background.

## Getting product info in JSON format

- [jsonRepresentation](/documentation/storekit/product/jsonrepresentation) The JSON representation of the product information.

## Getting subscription relationship

- [Product.SubscriptionRelationship](/documentation/storekit/product/subscriptionrelationship)

## Deprecated

- [currentEntitlement](/documentation/storekit/product/currententitlement) The transaction that entitles the user to the product.

## Product and subscription information

- [Implementing a store in your app using the StoreKit API](/documentation/storekit/implementing-a-store-in-your-app-using-the-storekit-api)
- [Product.SubscriptionInfo](/documentation/storekit/product/subscriptioninfo)
- [SubscriptionInfo](/documentation/storekit/subscriptioninfo)
- [SubscriptionStatus](/documentation/storekit/subscriptionstatus)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
