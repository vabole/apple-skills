---
title: StoreView
description: A view that merchandises a collection of In-App Purchase products.
source: https://developer.apple.com/documentation/storekit/storeview
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/documentation/storekit/storeview.json
timestamp: 2026-04-14T13:14:30.564Z
---

**Navigation:** [StoreKit](/documentation/storekit)

**Structure**

# StoreView

**Available on:** iOS 17.0+, iPadOS 17.0+, macOS 14.0+, tvOS 17.0+, visionOS 1.0+, watchOS 10.0+

> A view that merchandises a collection of In-App Purchase products.

```swift
@MainActor @preconcurrency struct StoreView<Icon, PlaceholderIcon> where Icon : View, PlaceholderIcon : View
```

## Overview

A `StoreView` displays a collection of in-app purchase products, including their localized names, descriptions, and prices, and displays a purchase button.

Create a store view by providing a collection of product identifiers for the view to load from the App Store, or a collection of [Product](/documentation/storekit/product) values you previously loaded. If you provide product identifiers, the store view automatically loads the product information from the App Store, and updates the view when the products are available.

You can provide a view to use as an icon or image for each individual product. If you provide product identifiers, you can optionally provide placeholder icons for the system to use instead of the automatic placeholder icon.

If you set up promoted images for your products in App Store Connect, you can choose to display those images for your products.

### Manage the store layout

The `StoreView` arranges products in rows. If the view has enough horizontal space available, the store adds columns. In tvOS, the view arranges the products in columns and adds rows as space permits.

The store view grows to fit its container, and scrolls when the container doesn’t have enough space to display all the products. Use the [fixedSize(horizontal:vertical:)](/documentation/SwiftUI/View/fixedSize(horizontal:vertical:)) modifier to change this behavior.

To achieve a custom layout, you can compose [ProductView](/documentation/storekit/productview) instances with other container views instead of using the `StoreView`.

### Customize the store

You can customize the store by displaying additional buttons, and applying styles.

To display a button that syncs in-app purchase entitlements with the App Store, modify the in-app store view or an ancestor view using the `storeButton(_:for:)` modifier with the parameters [Visibility.visible](/documentation/SwiftUI/Visibility/visible) and [restorePurchases](/documentation/storekit/storebuttonkind/restorepurchases). The app calls the [sync()](/documentation/storekit/appstore/sync()) method when people use this button.

You can customize the appearance of the products using product view styles, such as [CompactProductViewStyle](/documentation/storekit/compactproductviewstyle), [LargeProductViewStyle](/documentation/storekit/largeproductviewstyle), and [RegularProductViewStyle](/documentation/storekit/regularproductviewstyle). To apply the style, call the [productViewStyle(_:)](/documentation/SwiftUI/View/productViewStyle(_:)) modifier.

## Conforms To

- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)
- [View](/documentation/SwiftUI/View)

## Creating store views that load products

- [init(ids:prefersPromotionalIcon:)](/documentation/storekit/storeview/init(ids:preferspromotionalicon:)) Creates a view to load and merchandise a collection of products from the App Store using product identifiers.
- [init(ids:prefersPromotionalIcon:icon:)](/documentation/storekit/storeview/init(ids:preferspromotionalicon:icon:)) Creates a view to load a collection of products from the App Store using product identifiers, and merchandise them using a custom image.
- [init(ids:prefersPromotionalIcon:icon:placeholderIcon:)](/documentation/storekit/storeview/init(ids:preferspromotionalicon:icon:placeholdericon:)) Creates a view to load a collection of products from the App Store using product identifiers, and merchandise them using an image and a custom placeholder icon.
- [init(ids:icon:placeholderIcon:)](/documentation/storekit/storeview/init(ids:icon:placeholdericon:)) Creates a view to load a collection of products from the App Store using product identifiers, and merchandise them using their promotional images and a custom placeholder icon.

## Creating store views with preloaded products

- [init(products:prefersPromotionalIcon:)](/documentation/storekit/storeview/init(products:preferspromotionalicon:)) Creates a view to load and merchandise a collection of products from the App Store.
- [init(products:prefersPromotionalIcon:icon:)](/documentation/storekit/storeview/init(products:preferspromotionalicon:icon:)) Creates a view to merchandise a collection of products using a custom icon.
- [init(products:icon:)](/documentation/storekit/storeview/init(products:icon:)) Creates a view to merchandise a collection of products with promotional images.

## Loading promotional images

- [ProductIconPhase](/documentation/storekit/producticonphase) The current phase of the asynchronous loading operation of a product’s promotional image.

## Merchandising In-App Purchases, subscriptions, and offers

- [ProductView](/documentation/storekit/productview) A view that merchandises an individual In-App Purchase product.
- [SubscriptionStoreView](/documentation/storekit/subscriptionstoreview) A view that merchandises a collection of auto-renewable subscription options that belong to the same subscription group.
- [SubscriptionOfferView](/documentation/storekit/subscriptionofferview)
- [Backyard Birds: Building an app with SwiftData and widgets](/documentation/SwiftUI/Backyard-birds-sample) Create an app with persistent data, interactive widgets, and an all new in-app purchase experience.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*
