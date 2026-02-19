---
title: SubscriptionStoreView
description: A view that merchandises a collection of auto-renewable subscription options that belong to the same subscription group.
source: https://developer.apple.com/documentation/storekit/subscriptionstoreview
timestamp: 2026-02-19T07:52:37.005Z
---

**Navigation:** [Storekit](/documentation/storekit)

**Structure**

# SubscriptionStoreView

**Available on:** iOS 17.0+, iPadOS 17.0+, macOS 14.0+, tvOS 17.0+, visionOS 1.0+, watchOS 10.0+

> A view that merchandises a collection of auto-renewable subscription options that belong to the same subscription group.

```swift
@MainActor @preconcurrency struct SubscriptionStoreView<Content> where Content : View
```

## Overview

A `SubscriptionStoreView` displays localized information about auto-renewable subscriptions, including their localized names, descriptions, and prices, as well as a purchase button.

Create a subscription store view by using one of the initializers and providing the following information:

- A subscription group identifier
- A collection of product identifiers
- A collection of product values you previously loaded from the App Store

If you provide a subscription group identifier or a collection of product identifiers, the subscription store view automatically loads the subscription data from the App Store, and updates the view when the data is available.

### Provide a background and a decorative icon

The subscription store view doesn’t draw a background by default. You can add a background as follows:

- To layer a background behind the view, use a view modifier, such as `background(alignment:content:)`.
- To set the container background of the subscription store using a view, use the `containerBackground(_:for:)` or `containerBackground(for:alignment:content:)` view modifier and specify a [Container Background Placement](/documentation/SwiftUI/ContainerBackgroundPlacement), such as [subscription Store Header](/documentation/SwiftUI/ContainerBackgroundPlacement/subscriptionStoreHeader).

You can optionally provide a view as a decorative icon next to each subscription option. Use the [subscriptionStoreControlIcon(icon:)](/documentation/SwiftUI/View/subscriptionStoreControlIcon(icon:)) view modifier to set a view that decorates individual subscription options within a subscription store.

### Order and filter subscriptions

If you create the subscription store view by providing a subscription group identifier, the system orders the subscription options according to their rank. If the customer is already subscribed, you may want to merchandise upgrade or crossgrade options. By default, the subscription store view lists all the subscriptions in the group. To hide certain subscription options, provide the `visibleRelationships` parameter in the initializer. For more information about the visible relationships, see [Subscription Relationship](/documentation/storekit/product/subscriptionrelationship).

If you create the subscription store view using one of the other initializers, the view orders the subscriptions according to the collection parameter’s order. The view excludes subscriptions that you don’t include in the collection parameter.

### Add terms of service and privacy policies

The `SubscriptionStoreView` automatically displays buttons for the terms of service and privacy policy that you submit in App Store Connect. To override the destination of these buttons with a URL to custom terms of service and privacy policy pages, or a custom view, use the modifiers [subscriptionStorePolicyDestination(url:for:)](/documentation/SwiftUI/View/subscriptionStorePolicyDestination(url:for:)) and [subscriptionStorePolicyDestination(for:destination:)](/documentation/SwiftUI/View/subscriptionStorePolicyDestination(for:destination:)).

Use modifiers, such as [subscriptionStorePolicyForegroundStyle(_:)](/documentation/SwiftUI/View/subscriptionStorePolicyForegroundStyle(_:)), to customize the button’s style, for example, to make the text more readable against your store’s background.

### Add auxiliary buttons

You can show auxiliary buttons in the subscription store using view modifiers. Specify the button’s visibility within the subscription store by using the [storeButton(_:for:)](/documentation/SwiftUI/View/storeButton(_:for:)) view modifier.

If you offer your subscription through other services, you can configure the subscription store view to display a sign-in button. Use the [subscriptionStoreSignInAction(_:)](/documentation/SwiftUI/View/subscriptionStoreSignInAction(_:)) modifier to set the function your app calls when someone uses the sign-in button.

The subscription store view automatically shows a Close button. To override this behavior, use the `storeButton(_:for:)` modifier to unconditionally show, or hide, the Close button.

### Style the subscription store view

You can further customize the subscription store’s appearance using control styles. Use subscription store control styles to customize the display of subscription options, and how people interact with your store. To try out standard styles, such as [Picker Subscription Store Control Style](/documentation/storekit/pickersubscriptionstorecontrolstyle), apply the style using the [subscriptionStoreControlStyle(_:)](/documentation/SwiftUI/View/subscriptionStoreControlStyle(_:)) modifier.

## Conforms To

- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)
- [View](/documentation/SwiftUI/View)

## Creating subscription store views with automatic marketing content

- [init(groupID:visibleRelationships:)](/documentation/storekit/subscriptionstoreview/init(groupid:visiblerelationships:)) Creates a view that loads all subscriptions in a subscription group from the App Store, and merchandises them with automatic marketing content.
- [init(productIDs:)](/documentation/storekit/subscriptionstoreview/init(productids:)) Creates a view that loads subscriptions based on a collection of product identifiers, and merchandises them with automatic marketing content.
- [init(subscriptions:)](/documentation/storekit/subscriptionstoreview/init(subscriptions:)) Creates a view that displays a collection of subscription options, and merchandises them with automatic marketing content.

## Creating subscription store views with custom marketing content

- [init(groupID:visibleRelationships:marketingContent:)](/documentation/storekit/subscriptionstoreview/init(groupid:visiblerelationships:marketingcontent:)) Creates a view that loads all the subscriptions in a subscription group from the App Store, and merchandises them with custom marketing content.
- [init(productIDs:marketingContent:)](/documentation/storekit/subscriptionstoreview/init(productids:marketingcontent:)) Creates a view that loads a collection of subscriptions from the App Store, and merchandises them with custom marketing content.
- [init(subscriptions:marketingContent:)](/documentation/storekit/subscriptionstoreview/init(subscriptions:marketingcontent:)) Creates a view that displays a collection of subscription options, and merchandises them with custom marketing content.

## Creating subscription store views with a hierarchichal structure

- [init(groupID:visibleRelationships:content:)](/documentation/storekit/subscriptionstoreview/init(groupid:visiblerelationships:content:))
- [init(productIDs:content:)](/documentation/storekit/subscriptionstoreview/init(productids:content:))
- [init(subscriptions:content:)](/documentation/storekit/subscriptionstoreview/init(subscriptions:content:))

## Supporting types

- [AutomaticSubscriptionStoreMarketingContent](/documentation/storekit/automaticsubscriptionstoremarketingcontent) A view that represents the default marketing content for a subscription store.
- [SubscriptionStoreContentView](/documentation/storekit/subscriptionstorecontentview)

## Merchandising In-App Purchases, subscriptions, and offers

- [ProductView](/documentation/storekit/productview)
- [StoreView](/documentation/storekit/storeview)
- [SubscriptionOfferView](/documentation/storekit/subscriptionofferview)
- [Backyard Birds: Building an app with SwiftData and widgets](/documentation/SwiftUI/Backyard-birds-sample)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
