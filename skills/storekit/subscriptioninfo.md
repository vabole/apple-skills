---
title: Product.SubscriptionInfo
description: Information about an auto-renewable subscription, such as its status, period, subscription group, and subscription offer details.
source: https://developer.apple.com/documentation/storekit/product/subscriptioninfo
timestamp: 2026-02-19T07:52:36.986Z
---

**Navigation:** [Storekit](/documentation/storekit) › [product](/documentation/storekit/product)

**Structure**

# Product.SubscriptionInfo

**Available on:** iOS 15.0+, iPadOS 15.0+, macOS 12.0+, tvOS 15.0+, visionOS 1.0+, watchOS 8.0+

> Information about an auto-renewable subscription, such as its status, period, subscription group, and subscription offer details.

```swift
struct SubscriptionInfo
```

## Conforms To

- [Equatable](/documentation/Swift/Equatable)
- [Hashable](/documentation/Swift/Hashable)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Determining the subscription status

- [status](/documentation/storekit/product/subscriptioninfo/status-swift.property) An array that contains status information for a subscription group, including renewal and transaction information.
- [status(for:)](/documentation/storekit/product/subscriptioninfo/status(for:)) Gets the subscription status for a subscription group identifier.
- [status(transactionID:)](/documentation/storekit/product/subscriptioninfo/status(transactionid:)) Gets the subscription status for a transaction ID.
- [Product.SubscriptionInfo.Status](/documentation/storekit/product/subscriptioninfo/status-swift.struct) The renewal status information for an auto-renewable subscription.

## Identifying the subscription group

- [subscriptionGroupID](/documentation/storekit/product/subscriptioninfo/subscriptiongroupid) The subscription group identifier for this subscription.
- [groupDisplayName](/documentation/storekit/product/subscriptioninfo/groupdisplayname) The localized name of the subscription group, suitable for display.
- [groupLevel](/documentation/storekit/product/subscriptioninfo/grouplevel) The rank of the subscription relative to other subscriptions in the same subscription group.

## Getting the subscription period

- [subscriptionPeriod](/documentation/storekit/product/subscriptioninfo/subscriptionperiod) The duration of time between subscription renewals.
- [Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod) Values that represent the duration of time between subscription renewals.

## Getting introductory offer details

- [isEligibleForIntroOffer](/documentation/storekit/product/subscriptioninfo/iseligibleforintrooffer) A Boolean value that indicates whether the customer is eligible for an introductory offer.
- [isEligibleForIntroOffer(for:)](/documentation/storekit/product/subscriptioninfo/iseligibleforintrooffer(for:)) Returns a Boolean value that determines the customer’s eligibility for an introductory offer within the provided subscription group.
- [introductoryOffer](/documentation/storekit/product/subscriptioninfo/introductoryoffer) Information about the introductory offer available for the auto-renewable subscription.
- [Product.SubscriptionOffer](/documentation/storekit/product/subscriptionoffer) Information about a subscription offer that you configure in App Store Connect.

## Getting win-back offer details

- [winBackOffers](/documentation/storekit/product/subscriptioninfo/winbackoffers) An array of available win-back offers for the auto-renewable subscription that you configured in App Store Connect.

## Getting promotional offer details

- [promotionalOffers](/documentation/storekit/product/subscriptioninfo/promotionaloffers) An array of promotional offers available for the auto-renewable subscription.

## Getting subscription renewal information

- [Product.SubscriptionInfo.RenewalInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo) The renewal information for an auto-renewable subscription.
- [Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate) The renewal states of auto-renewable subscriptions.

## Product and subscription information

- [Implementing a store in your app using the StoreKit API](/documentation/storekit/implementing-a-store-in-your-app-using-the-storekit-api)
- [Product](/documentation/storekit/product)
- [SubscriptionInfo](/documentation/storekit/subscriptioninfo)
- [SubscriptionStatus](/documentation/storekit/subscriptionstatus)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
