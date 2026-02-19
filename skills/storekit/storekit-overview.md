---
title: StoreKit
source: https://developer.apple.com/documentation/storekit
timestamp: 2026-02-19T07:52:17.300Z
---

## In-App Purchase

- [In-App Purchase](/documentation/storekit/in-app-purchase)

### In-App Purchase merchandising

- [StoreKit views](/documentation/storekit/storekit-views)

#### Merchandising In-App Purchases, subscriptions, and offers

- [ProductView](/documentation/storekit/productview)

##### Creating product views that load products

- [init(id: Product.ID, prefersPromotionalIcon: Bool)](/documentation/storekit/productview/init(id:preferspromotionalicon:))
- [init(id: Product.ID, prefersPromotionalIcon: Bool, icon: () -> Icon)](/documentation/storekit/productview/init(id:preferspromotionalicon:icon:))
- [init(id: Product.ID, prefersPromotionalIcon: Bool, icon: () -> Icon, placeholderIcon: () -> PlaceholderIcon)](/documentation/storekit/productview/init(id:preferspromotionalicon:icon:placeholdericon:))
- [init(id: Product.ID, icon: (ProductIconPhase) -> Icon, placeholderIcon: () -> PlaceholderIcon)](/documentation/storekit/productview/init(id:icon:placeholdericon:))

##### Creating product views with preloaded products

- [init(Product, prefersPromotionalIcon: Bool, icon: () -> Icon)](/documentation/storekit/productview/init(_:preferspromotionalicon:icon:))
- [init(Product, prefersPromotionalIcon: Bool)](/documentation/storekit/productview/init(_:preferspromotionalicon:))
- [init(Product, icon: (ProductIconPhase) -> Icon)](/documentation/storekit/productview/init(_:icon:))

##### Creating product views with a configuration

- [init(ProductViewStyleConfiguration)](/documentation/storekit/productview/init(_:))

##### Loading promotional images

- [ProductIconPhase](/documentation/storekit/producticonphase)

###### Getting the promotional image’s load phases

- [case loading](/documentation/storekit/producticonphase/loading)
- [case success(Image)](/documentation/storekit/producticonphase/success(_:))
- [case unavailable](/documentation/storekit/producticonphase/unavailable)
- [case failure(any Error)](/documentation/storekit/producticonphase/failure(_:))

###### Getting the promotional image

- [var promotionalIcon: Image?](/documentation/storekit/producticonphase/promotionalicon)

###### Getting the error

- [var error: (any Error)?](/documentation/storekit/producticonphase/error)

##### Supporting types

- [AutomaticProductPlaceholderIcon](/documentation/storekit/automaticproductplaceholdericon)
- [StoreView](/documentation/storekit/storeview)

##### Creating store views that load products

- [init(ids: some Collection<String>, prefersPromotionalIcon: Bool)](/documentation/storekit/storeview/init(ids:preferspromotionalicon:))
- [init(ids: some Collection<String>, prefersPromotionalIcon: Bool, icon: (Product) -> Icon)](/documentation/storekit/storeview/init(ids:preferspromotionalicon:icon:))
- [init(ids: some Collection<String>, prefersPromotionalIcon: Bool, icon: (Product) -> Icon, placeholderIcon: () -> PlaceholderIcon)](/documentation/storekit/storeview/init(ids:preferspromotionalicon:icon:placeholdericon:))
- [init(ids: some Collection<String>, icon: (Product, ProductIconPhase) -> Icon, placeholderIcon: () -> PlaceholderIcon)](/documentation/storekit/storeview/init(ids:icon:placeholdericon:))

##### Creating store views with preloaded products

- [init(products: some Collection<Product>, prefersPromotionalIcon: Bool)](/documentation/storekit/storeview/init(products:preferspromotionalicon:))
- [init(products: some Collection<Product>, prefersPromotionalIcon: Bool, icon: (Product) -> Icon)](/documentation/storekit/storeview/init(products:preferspromotionalicon:icon:))
- [init(products: some Collection<Product>, icon: (Product, ProductIconPhase) -> Icon)](/documentation/storekit/storeview/init(products:icon:))

##### Loading promotional images

- [ProductIconPhase](/documentation/storekit/producticonphase)

###### Getting the promotional image’s load phases

- [case loading](/documentation/storekit/producticonphase/loading)
- [case success(Image)](/documentation/storekit/producticonphase/success(_:))
- [case unavailable](/documentation/storekit/producticonphase/unavailable)
- [case failure(any Error)](/documentation/storekit/producticonphase/failure(_:))

###### Getting the promotional image

- [var promotionalIcon: Image?](/documentation/storekit/producticonphase/promotionalicon)

###### Getting the error

- [var error: (any Error)?](/documentation/storekit/producticonphase/error)
- [SubscriptionStoreView](/documentation/storekit/subscriptionstoreview)

##### Creating subscription store views with automatic marketing content

- [init(groupID: String, visibleRelationships: Product.SubscriptionRelationship)](/documentation/storekit/subscriptionstoreview/init(groupid:visiblerelationships:))
- [init(productIDs: some Collection<String>)](/documentation/storekit/subscriptionstoreview/init(productids:))
- [init(subscriptions: some Collection<Product>)](/documentation/storekit/subscriptionstoreview/init(subscriptions:))

##### Creating subscription store views with custom marketing content

- [init(groupID: String, visibleRelationships: Product.SubscriptionRelationship, marketingContent: () -> Content)](/documentation/storekit/subscriptionstoreview/init(groupid:visiblerelationships:marketingcontent:))
- [init(productIDs: some Collection<String>, marketingContent: () -> Content)](/documentation/storekit/subscriptionstoreview/init(productids:marketingcontent:))
- [init(subscriptions: some Collection<Product>, marketingContent: () -> Content)](/documentation/storekit/subscriptionstoreview/init(subscriptions:marketingcontent:))

##### Creating subscription store views with a hierarchichal structure

- [init<C>(groupID: String, visibleRelationships: Product.SubscriptionRelationship, content: () -> C)](/documentation/storekit/subscriptionstoreview/init(groupid:visiblerelationships:content:))
- [init<C>(productIDs: some Collection<String>, content: () -> C)](/documentation/storekit/subscriptionstoreview/init(productids:content:))
- [init<C>(subscriptions: some Collection<Product>, content: () -> C)](/documentation/storekit/subscriptionstoreview/init(subscriptions:content:))

##### Supporting types

- [AutomaticSubscriptionStoreMarketingContent](/documentation/storekit/automaticsubscriptionstoremarketingcontent)
- [SubscriptionStoreContentView](/documentation/storekit/subscriptionstorecontentview)
- [SubscriptionOfferView](/documentation/storekit/subscriptionofferview)

##### Initializers

- [init(SubscriptionOfferViewStyleConfiguration)](/documentation/storekit/subscriptionofferview/init(_:))
- [init(groupID: String, visibleRelationship: Product.SubscriptionRelationship)](/documentation/storekit/subscriptionofferview/init(groupid:visiblerelationship:))
- [init(groupID: String, visibleRelationship: Product.SubscriptionRelationship, icon: () -> Icon)](/documentation/storekit/subscriptionofferview/init(groupid:visiblerelationship:icon:))
- [init(groupID: String, visibleRelationship: Product.SubscriptionRelationship, icon: () -> Icon, placeholderIcon: () -> PlaceholderIcon)](/documentation/storekit/subscriptionofferview/init(groupid:visiblerelationship:icon:placeholdericon:))
- [init(groupID: String, visibleRelationship: Product.SubscriptionRelationship, useAppIcon: Bool)](/documentation/storekit/subscriptionofferview/init(groupid:visiblerelationship:useappicon:))
- [init(id: Product.ID, icon: (ProductIconPhase) -> Icon, placeholderIcon: () -> PlaceholderIcon)](/documentation/storekit/subscriptionofferview/init(id:icon:placeholdericon:))
- [init(id: Product.ID, prefersPromotionalIcon: Bool)](/documentation/storekit/subscriptionofferview/init(id:preferspromotionalicon:))
- [init(id: Product.ID, prefersPromotionalIcon: Bool, icon: () -> Icon)](/documentation/storekit/subscriptionofferview/init(id:preferspromotionalicon:icon:))
- [init(id: Product.ID, prefersPromotionalIcon: Bool, icon: () -> Icon, placeholderIcon: () -> PlaceholderIcon)](/documentation/storekit/subscriptionofferview/init(id:preferspromotionalicon:icon:placeholdericon:))
- [init(Product, icon: (ProductIconPhase) -> Icon)](/documentation/storekit/subscriptionofferview/init(_:icon:))
- [init(Product, prefersPromotionalIcon: Bool)](/documentation/storekit/subscriptionofferview/init(_:preferspromotionalicon:))
- [init(Product, prefersPromotionalIcon: Bool, icon: () -> Icon)](/documentation/storekit/subscriptionofferview/init(_:preferspromotionalicon:icon:))
- [Backyard Birds: Building an app with SwiftData and widgets](/documentation/swiftui/backyard-birds-sample)

#### Styling product views

- [func productViewStyle(some ProductViewStyle) -> some View](/documentation/swiftui/view/productviewstyle(_:))
- [func productIconBorder() -> some View](/documentation/swiftui/view/producticonborder())
- [ProductViewStyle](/documentation/storekit/productviewstyle)

##### Getting built-in product view styles

- [static var automatic: AutomaticProductViewStyle](/documentation/storekit/productviewstyle/automatic)
- [static var compact: CompactProductViewStyle](/documentation/storekit/productviewstyle/compact)
- [static var large: LargeProductViewStyle](/documentation/storekit/productviewstyle/large)
- [static var regular: RegularProductViewStyle](/documentation/storekit/productviewstyle/regular)

##### Creating custom product views

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/storekit/productviewstyle/makebody(configuration:))
- [ProductViewStyle.Configuration](/documentation/storekit/productviewstyle/configuration)
- [Body](/documentation/storekit/productviewstyle/body)

##### Supporting types

- [AutomaticProductViewStyle](/documentation/storekit/automaticproductviewstyle)

###### Creating automatic product view styles

- [init()](/documentation/storekit/automaticproductviewstyle/init())
- [CompactProductViewStyle](/documentation/storekit/compactproductviewstyle)

###### Getting the compact product view style

- [static var compact: CompactProductViewStyle](/documentation/storekit/productviewstyle/compact)

###### Creating the style

- [init()](/documentation/storekit/compactproductviewstyle/init())
- [RegularProductViewStyle](/documentation/storekit/regularproductviewstyle)

###### Getting the regular product view style

- [static var regular: RegularProductViewStyle](/documentation/storekit/productviewstyle/regular)

###### Creating the style

- [init()](/documentation/storekit/regularproductviewstyle/init())
- [LargeProductViewStyle](/documentation/storekit/largeproductviewstyle)

###### Getting the large product view style

- [static var large: LargeProductViewStyle](/documentation/storekit/productviewstyle/large)

###### Creating the style

- [init()](/documentation/storekit/largeproductviewstyle/init())
- [ProductViewStyleConfiguration](/documentation/storekit/productviewstyleconfiguration)

##### Getting a product’s information

- [var product: Product?](/documentation/storekit/productviewstyleconfiguration/product)
- [let state: Product.TaskState](/documentation/storekit/productviewstyleconfiguration/state)
- [let hasCurrentEntitlement: Bool](/documentation/storekit/productviewstyleconfiguration/hascurrententitlement)

##### Getting a product view’s icon

- [let icon: ProductViewStyleConfiguration.Icon](/documentation/storekit/productviewstyleconfiguration/icon-swift.property)
- [ProductViewStyleConfiguration.Icon](/documentation/storekit/productviewstyleconfiguration/icon-swift.struct)

##### Getting a product’s description visibility

- [let descriptionVisibility: Visibility](/documentation/storekit/productviewstyleconfiguration/descriptionvisibility)

##### Initiating a purchase

- [func purchase()](/documentation/storekit/productviewstyleconfiguration/purchase())

#### Styling subscription store controls

- [func subscriptionStoreControlStyle(some SubscriptionStoreControlStyle) -> some View](/documentation/swiftui/view/subscriptionstorecontrolstyle(_:))
- [func subscriptionStoreControlStyle<S>(S, placement: S.Placement) -> some View](/documentation/swiftui/view/subscriptionstorecontrolstyle(_:placement:))
- [SubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle)

##### Getting built-in subscription store control styles

- [static var automatic: AutomaticSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/automatic)
- [static var buttons: ButtonsSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/buttons)
- [static var picker: PickerSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/picker)
- [static var prominentPicker: ProminentPickerSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/prominentpicker)
- [static var pagedPicker: PagedPickerSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/pagedpicker)
- [static var pagedProminentPicker: PagedProminentPickerSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/pagedprominentpicker)
- [static var compactPicker: CompactPickerSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/compactpicker)

##### Creating custom subscription store control styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/storekit/subscriptionstorecontrolstyle/makebody(configuration:))
- [SubscriptionStoreControlStyle.Configuration](/documentation/storekit/subscriptionstorecontrolstyle/configuration)
- [SubscriptionStoreControlStyle.SubscribeButton](/documentation/storekit/subscriptionstorecontrolstyle/subscribebutton)
- [SubscriptionStoreControlStyle.SubscriptionPicker](/documentation/storekit/subscriptionstorecontrolstyle/subscriptionpicker)
- [SubscriptionStoreControlStyle.SubscriptionPickerOption](/documentation/storekit/subscriptionstorecontrolstyle/subscriptionpickeroption)
- [SubscriptionStoreControlPlacementKey](/documentation/storekit/subscriptionstorecontrolplacementkey)

###### Placing subscription store controls

- [static var bottom: SubscriptionStoreControlPlacementKey](/documentation/storekit/subscriptionstorecontrolplacementkey/bottom)
- [static var leading: SubscriptionStoreControlPlacementKey](/documentation/storekit/subscriptionstorecontrolplacementkey/leading)
- [static var scrollView: SubscriptionStoreControlPlacementKey](/documentation/storekit/subscriptionstorecontrolplacementkey/scrollview)
- [static var trailing: SubscriptionStoreControlPlacementKey](/documentation/storekit/subscriptionstorecontrolplacementkey/trailing)
- [static var bottomBar: SubscriptionStoreControlPlacementKey](/documentation/storekit/subscriptionstorecontrolplacementkey/bottombar)
- [static var buttonsInBottomBar: SubscriptionStoreControlPlacementKey](/documentation/storekit/subscriptionstorecontrolplacementkey/buttonsinbottombar)
- [Placement](/documentation/storekit/subscriptionstorecontrolstyle/placement)
- [Body](/documentation/storekit/subscriptionstorecontrolstyle/body)

##### Supporting types

- [AutomaticSubscriptionStoreControlStyle](/documentation/storekit/automaticsubscriptionstorecontrolstyle)

###### Getting the automatic subscription store control style

- [static var automatic: AutomaticSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/automatic)

###### Creating the style

- [init()](/documentation/storekit/automaticsubscriptionstorecontrolstyle/init())
- [ButtonsSubscriptionStoreControlStyle](/documentation/storekit/buttonssubscriptionstorecontrolstyle)

###### Getting the button subscription store style

- [static var buttons: ButtonsSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/buttons)

###### Creating the style

- [init()](/documentation/storekit/buttonssubscriptionstorecontrolstyle/init())
- [PickerSubscriptionStoreControlStyle](/documentation/storekit/pickersubscriptionstorecontrolstyle)

###### Getting the picker control style

- [static var picker: PickerSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/picker)

###### Placing the controls

- [Placement](/documentation/storekit/subscriptionstorecontrolstyle/placement)

###### Creating the style

- [init()](/documentation/storekit/pickersubscriptionstorecontrolstyle/init())
- [ProminentPickerSubscriptionStoreControlStyle](/documentation/storekit/prominentpickersubscriptionstorecontrolstyle)

###### Getting the prominent picker control style

- [static var pagedProminentPicker: PagedProminentPickerSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/pagedprominentpicker)

###### Creating the style

- [init()](/documentation/storekit/prominentpickersubscriptionstorecontrolstyle/init())

###### Placing the controls

- [Placement](/documentation/storekit/subscriptionstorecontrolstyle/placement)
- [CompactPickerSubscriptionStoreControlStyle](/documentation/storekit/compactpickersubscriptionstorecontrolstyle)

###### Getting the compact picker control style

- [static var compactPicker: CompactPickerSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/compactpicker)

###### Creating the style

- [init()](/documentation/storekit/compactpickersubscriptionstorecontrolstyle/init())

###### Placing the controls

- [CompactPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/compactpickersubscriptionstorecontrolstyle/placement)

###### Getting a placement

- [static var automatic: CompactPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/compactpickersubscriptionstorecontrolstyle/placement/automatic)
- [static var bottomBar: CompactPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/compactpickersubscriptionstorecontrolstyle/placement/bottombar)
- [static var buttonsInBottomBar: CompactPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/compactpickersubscriptionstorecontrolstyle/placement/buttonsinbottombar)
- [static var scrollView: CompactPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/compactpickersubscriptionstorecontrolstyle/placement/scrollview)
- [PagedPickerSubscriptionStoreControlStyle](/documentation/storekit/pagedpickersubscriptionstorecontrolstyle)

###### Getting the paged picker control style

- [static var pagedPicker: PagedPickerSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/pagedpicker)

###### Creating the style

- [init()](/documentation/storekit/pagedpickersubscriptionstorecontrolstyle/init())

###### Placing the controls

- [PagedPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/pagedpickersubscriptionstorecontrolstyle/placement)

###### Getting a placement

- [static var automatic: PagedPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/pagedpickersubscriptionstorecontrolstyle/placement/automatic)
- [static var bottomBar: PagedPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/pagedpickersubscriptionstorecontrolstyle/placement/bottombar)
- [static var buttonsInBottomBar: PagedPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/pagedpickersubscriptionstorecontrolstyle/placement/buttonsinbottombar)
- [static var scrollView: PagedPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/pagedpickersubscriptionstorecontrolstyle/placement/scrollview)
- [PagedProminentPickerSubscriptionStoreControlStyle](/documentation/storekit/pagedprominentpickersubscriptionstorecontrolstyle)

###### Getting the paged prominent picker control style

- [static var pagedProminentPicker: PagedProminentPickerSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/pagedprominentpicker)

###### Creating the style

- [init()](/documentation/storekit/pagedprominentpickersubscriptionstorecontrolstyle/init())

###### Placing the controls

- [PagedProminentPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/pagedprominentpickersubscriptionstorecontrolstyle/placement)
- [AutomaticSubscriptionStoreControlPlacement](/documentation/storekit/automaticsubscriptionstorecontrolplacement)

###### Getting automatic placements

- [static var automatic: AutomaticSubscriptionStoreControlPlacement](/documentation/storekit/automaticsubscriptionstorecontrolplacement/automatic)
- [static var bottomBar: AutomaticSubscriptionStoreControlPlacement](/documentation/storekit/automaticsubscriptionstorecontrolplacement/bottombar)
- [static var buttonsInBottomBar: AutomaticSubscriptionStoreControlPlacement](/documentation/storekit/automaticsubscriptionstorecontrolplacement/buttonsinbottombar)
- [static var scrollView: AutomaticSubscriptionStoreControlPlacement](/documentation/storekit/automaticsubscriptionstorecontrolplacement/scrollview)
- [static var bottom: AutomaticSubscriptionStoreControlPlacement](/documentation/storekit/automaticsubscriptionstorecontrolplacement/bottom)
- [static var leading: AutomaticSubscriptionStoreControlPlacement](/documentation/storekit/automaticsubscriptionstorecontrolplacement/leading)
- [static var trailing: AutomaticSubscriptionStoreControlPlacement](/documentation/storekit/automaticsubscriptionstorecontrolplacement/trailing)
- [SubscriptionStoreControlStyleConfiguration](/documentation/storekit/subscriptionstorecontrolstyleconfiguration)

##### Getting subscription options to merchandise

- [var options: [SubscriptionStoreControlStyleConfiguration.Option]](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/options)
- [var sections: [SubscriptionStoreControlStyleConfiguration.Section]](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/sections)
- [SubscriptionStoreControlStyleConfiguration.Option](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/option)

###### Getting the subscription product and offer

- [var subscription: Product](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/subscription)
- [var id: Product.ID](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/id)
- [var activeOffer: Product.SubscriptionOffer?](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/activeoffer)

###### Getting the icon

- [var icon: SubscriptionStoreControlStyleConfiguration.Icon?](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/icon)

###### Purchasing a subscription option

- [func subscribe()](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/subscribe())

###### Looking up dynamic members

- [subscript<T>(dynamicMember _: KeyPath<Product.SubscriptionInfo, T?>) -> T?](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/subscript(dynamicmember:)-8sl2m)
- [subscript<T>(dynamicMember _: KeyPath<Product.SubscriptionInfo, T>) -> T?](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/subscript(dynamicmember:)-wjww)
- [subscript<T>(dynamicMember _: KeyPath<Product, T>) -> T](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/subscript(dynamicmember:)-9g2sm)

###### Default Implementations

- [Identifiable Implementations](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/identifiable-implementations)

###### Instance Properties

- [var id: Product.ID](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/id)
- [SubscriptionStoreControlStyleConfiguration.PickerOption](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption)

###### Getting properties of the subscription picker option

- [var subscription: Product](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/subscription)
- [var activeOffer: Product.SubscriptionOffer?](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/activeoffer)
- [let isSelected: Bool](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/isselected)
- [var icon: SubscriptionStoreControlStyleConfiguration.Icon?](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/icon)
- [var id: Product.ID](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/id)

###### Dynamic member lookup support

- [subscript<T>(dynamicMember _: KeyPath<Product.SubscriptionInfo, T?>) -> T?](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/subscript(dynamicmember:)-2ahxy)
- [subscript<T>(dynamicMember _: KeyPath<Product.SubscriptionInfo, T>) -> T?](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/subscript(dynamicmember:)-4f3i1)
- [subscript<T>(dynamicMember _: KeyPath<Product, T>) -> T](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/subscript(dynamicmember:)-8bsxh)

###### Default Implementations

- [Identifiable Implementations](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/identifiable-implementations)

###### Instance Properties

- [var id: Product.ID](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/id)
- [SubscriptionStoreControlStyleConfiguration.Section](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/section)

###### Getting a section’s content

- [var options: [SubscriptionStoreControlStyleConfiguration.Option]](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/section/options)

###### Getting accessory views

- [var header: SubscriptionStoreControlStyleConfiguration.Section.Header?](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/section/header-swift.property)
- [var footer: SubscriptionStoreControlStyleConfiguration.Section.Footer?](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/section/footer-swift.property)
- [SubscriptionStoreControlStyleConfiguration.Section.Header](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/section/header-swift.struct)
- [SubscriptionStoreControlStyleConfiguration.Section.Footer](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/section/footer-swift.struct)

###### Identifying a section

- [SubscriptionStoreControlStyleConfiguration.Section.ID](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/section/id)
- [SubscriptionStoreControlStyleConfiguration.Icon](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/icon)

##### Getting subscription group properties

- [var groupDisplayName: String](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/groupdisplayname)
- [var autoRenewPreference: Product?](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/autorenewpreference)
- [var allOptions: [Product]](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/alloptions)

##### Getting subscription description visibility

- [var descriptionVisibility: Visibility](/documentation/storekit/subscriptionstorecontrolstyleconfiguration/descriptionvisibility)
- [SubscriptionStoreControlPlacement](/documentation/storekit/subscriptionstorecontrolplacement)

##### Getting a placement

- [static var automatic: Self](/documentation/storekit/subscriptionstorecontrolplacement/automatic)

##### Placement types

- [AutomaticSubscriptionStoreControlStyle](/documentation/storekit/automaticsubscriptionstorecontrolstyle)

###### Getting the automatic subscription store control style

- [static var automatic: AutomaticSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/automatic)

###### Creating the style

- [init()](/documentation/storekit/automaticsubscriptionstorecontrolstyle/init())
- [ButtonsSubscriptionStoreControlStyle](/documentation/storekit/buttonssubscriptionstorecontrolstyle)

###### Getting the button subscription store style

- [static var buttons: ButtonsSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/buttons)

###### Creating the style

- [init()](/documentation/storekit/buttonssubscriptionstorecontrolstyle/init())
- [PickerSubscriptionStoreControlStyle](/documentation/storekit/pickersubscriptionstorecontrolstyle)

###### Getting the picker control style

- [static var picker: PickerSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/picker)

###### Placing the controls

- [Placement](/documentation/storekit/subscriptionstorecontrolstyle/placement)

###### Creating the style

- [init()](/documentation/storekit/pickersubscriptionstorecontrolstyle/init())
- [CompactPickerSubscriptionStoreControlStyle](/documentation/storekit/compactpickersubscriptionstorecontrolstyle)

###### Getting the compact picker control style

- [static var compactPicker: CompactPickerSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/compactpicker)

###### Creating the style

- [init()](/documentation/storekit/compactpickersubscriptionstorecontrolstyle/init())

###### Placing the controls

- [CompactPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/compactpickersubscriptionstorecontrolstyle/placement)

###### Getting a placement

- [static var automatic: CompactPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/compactpickersubscriptionstorecontrolstyle/placement/automatic)
- [static var bottomBar: CompactPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/compactpickersubscriptionstorecontrolstyle/placement/bottombar)
- [static var buttonsInBottomBar: CompactPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/compactpickersubscriptionstorecontrolstyle/placement/buttonsinbottombar)
- [static var scrollView: CompactPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/compactpickersubscriptionstorecontrolstyle/placement/scrollview)
- [PagedPickerSubscriptionStoreControlStyle](/documentation/storekit/pagedpickersubscriptionstorecontrolstyle)

###### Getting the paged picker control style

- [static var pagedPicker: PagedPickerSubscriptionStoreControlStyle](/documentation/storekit/subscriptionstorecontrolstyle/pagedpicker)

###### Creating the style

- [init()](/documentation/storekit/pagedpickersubscriptionstorecontrolstyle/init())

###### Placing the controls

- [PagedPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/pagedpickersubscriptionstorecontrolstyle/placement)

###### Getting a placement

- [static var automatic: PagedPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/pagedpickersubscriptionstorecontrolstyle/placement/automatic)
- [static var bottomBar: PagedPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/pagedpickersubscriptionstorecontrolstyle/placement/bottombar)
- [static var buttonsInBottomBar: PagedPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/pagedpickersubscriptionstorecontrolstyle/placement/buttonsinbottombar)
- [static var scrollView: PagedPickerSubscriptionStoreControlStyle.Placement](/documentation/storekit/pagedpickersubscriptionstorecontrolstyle/placement/scrollview)

#### Styling subscription offer views

- [AutomaticSubscriptionOfferViewStyle](/documentation/storekit/automaticsubscriptionofferviewstyle)

##### Initializers

- [init()](/documentation/storekit/automaticsubscriptionofferviewstyle/init())
- [CompactSubscriptionOfferViewStyle](/documentation/storekit/compactsubscriptionofferviewstyle)

##### Initializers

- [init()](/documentation/storekit/compactsubscriptionofferviewstyle/init())
- [SubscriptionOfferViewStyleConfiguration](/documentation/storekit/subscriptionofferviewstyleconfiguration)

##### Structures

- [SubscriptionOfferViewStyleConfiguration.Icon](/documentation/storekit/subscriptionofferviewstyleconfiguration/icon-swift.struct)

##### Instance Properties

- [let activeOffer: Product.SubscriptionOffer?](/documentation/storekit/subscriptionofferviewstyleconfiguration/activeoffer)
- [let icon: SubscriptionOfferViewStyleConfiguration.Icon](/documentation/storekit/subscriptionofferviewstyleconfiguration/icon-swift.property)
- [let state: Product.CollectionTaskState](/documentation/storekit/subscriptionofferviewstyleconfiguration/state)
- [var subscriptionGroupDisplayName: String](/documentation/storekit/subscriptionofferviewstyleconfiguration/subscriptiongroupdisplayname)
- [let subscriptionStatus: [Product.SubscriptionInfo.Status]](/documentation/storekit/subscriptionofferviewstyleconfiguration/subscriptionstatus)
- [var subscriptions: [Product]?](/documentation/storekit/subscriptionofferviewstyleconfiguration/subscriptions)
- [var visibleSubscription: Product?](/documentation/storekit/subscriptionofferviewstyleconfiguration/visiblesubscription)

##### Instance Methods

- [func displayDetails()](/documentation/storekit/subscriptionofferviewstyleconfiguration/displaydetails())
- [func subscribe()](/documentation/storekit/subscriptionofferviewstyleconfiguration/subscribe())
- [SubscriptionOfferViewStyle](/documentation/storekit/subscriptionofferviewstyle)

##### Associated Types

- [Body](/documentation/storekit/subscriptionofferviewstyle/body)

##### Instance Methods

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/storekit/subscriptionofferviewstyle/makebody(configuration:))

##### Type Aliases

- [SubscriptionOfferViewStyle.Configuration](/documentation/storekit/subscriptionofferviewstyle/configuration)

##### Type Properties

- [static var automatic: AutomaticSubscriptionOfferViewStyle](/documentation/storekit/subscriptionofferviewstyle/automatic)
- [static var compact: CompactSubscriptionOfferViewStyle](/documentation/storekit/subscriptionofferviewstyle/compact)

#### Configuring subscription store controls

- [func subscriptionStoreControlIcon(icon: (Product, Product.SubscriptionInfo) -> some View) -> some View](/documentation/swiftui/view/subscriptionstorecontrolicon(icon:))
- [func subscriptionStorePickerItemBackground(some ShapeStyle) -> some View](/documentation/swiftui/view/subscriptionstorepickeritembackground(_:))
- [func subscriptionStorePickerItemBackground(some ShapeStyle, in: some Shape) -> some View](/documentation/swiftui/view/subscriptionstorepickeritembackground(_:in:))
- [func subscriptionStoreButtonLabel(SubscriptionStoreButtonLabel) -> some View](/documentation/swiftui/view/subscriptionstorebuttonlabel(_:))
- [SubscriptionStoreButtonLabel](/documentation/storekit/subscriptionstorebuttonlabel)

##### Instance Properties

- [var action: SubscriptionStoreButtonLabel](/documentation/storekit/subscriptionstorebuttonlabel/action-swift.property)
- [var displayName: SubscriptionStoreButtonLabel](/documentation/storekit/subscriptionstorebuttonlabel/displayname-swift.property)
- [var multiline: SubscriptionStoreButtonLabel](/documentation/storekit/subscriptionstorebuttonlabel/multiline-swift.property)
- [var price: SubscriptionStoreButtonLabel](/documentation/storekit/subscriptionstorebuttonlabel/price-swift.property)
- [var singleLine: SubscriptionStoreButtonLabel](/documentation/storekit/subscriptionstorebuttonlabel/singleline-swift.property)

##### Type Properties

- [static var action: SubscriptionStoreButtonLabel](/documentation/storekit/subscriptionstorebuttonlabel/action-swift.type.property)
- [static var automatic: SubscriptionStoreButtonLabel](/documentation/storekit/subscriptionstorebuttonlabel/automatic)
- [static var displayName: SubscriptionStoreButtonLabel](/documentation/storekit/subscriptionstorebuttonlabel/displayname-swift.type.property)
- [static var multiline: SubscriptionStoreButtonLabel](/documentation/storekit/subscriptionstorebuttonlabel/multiline-swift.type.property)
- [static var price: SubscriptionStoreButtonLabel](/documentation/storekit/subscriptionstorebuttonlabel/price-swift.type.property)
- [static var singleLine: SubscriptionStoreButtonLabel](/documentation/storekit/subscriptionstorebuttonlabel/singleline-swift.type.property)

#### Creating custom subscription store control styles

- [SubscriptionStoreButton](/documentation/storekit/subscriptionstorebutton)

##### Creating a subscription store button

- [init(SubscriptionStoreControlStyleConfiguration.Option)](/documentation/storekit/subscriptionstorebutton/init(_:))
- [SubscriptionStorePicker](/documentation/storekit/subscriptionstorepicker)

##### Creating a subscription store picker

- [init(pickerContent: () -> PickerContent, confirmation: (SubscriptionStoreControlStyleConfiguration.Option) -> ConfirmationContent)](/documentation/storekit/subscriptionstorepicker/init(pickercontent:confirmation:))
- [init(SubscriptionStoreControlStyleConfiguration, pickerOptionContent: (SubscriptionStoreControlStyleConfiguration.PickerOption) -> PickerContent, confirmation: (SubscriptionStoreControlStyleConfiguration.Option) -> ConfirmationContent)](/documentation/storekit/subscriptionstorepicker/init(_:pickeroptioncontent:confirmation:))

##### Managing a subscription picker’s selection state

- [init(selection: Binding<SubscriptionStoreControlStyleConfiguration.Option?>, pickerContent: () -> PickerContent, confirmation: (SubscriptionStoreControlStyleConfiguration.Option) -> ConfirmationContent)](/documentation/storekit/subscriptionstorepicker/init(selection:pickercontent:confirmation:))
- [init(SubscriptionStoreControlStyleConfiguration, selection: Binding<SubscriptionStoreControlStyleConfiguration.Option?>, pickerOptionContent: (SubscriptionStoreControlStyleConfiguration.PickerOption) -> PickerContent, confirmation: (SubscriptionStoreControlStyleConfiguration.Option) -> ConfirmationContent)](/documentation/storekit/subscriptionstorepicker/init(_:selection:pickeroptioncontent:confirmation:))
- [SubscriptionStorePickerOption](/documentation/storekit/subscriptionstorepickeroption)

##### Creating a subscription picker option

- [init(SubscriptionStoreControlStyleConfiguration.Option)](/documentation/storekit/subscriptionstorepickeroption/init(_:)-4cb3l)
- [init(SubscriptionStoreControlStyleConfiguration.PickerOption)](/documentation/storekit/subscriptionstorepickeroption/init(_:)-3iu97)
- [init(SubscriptionStoreControlStyleConfiguration.Option, label: (SubscriptionStoreControlStyleConfiguration.PickerOption) -> Label)](/documentation/storekit/subscriptionstorepickeroption/init(_:label:))

##### Supporting types

- [AutomaticSubscriptionStorePickerOptionLabel](/documentation/storekit/automaticsubscriptionstorepickeroptionlabel)

#### Declaring the structure of a subscription store

- [SubscriptionOptionGroup](/documentation/storekit/subscriptionoptiongroup)

##### Creating subscription option groups

- [init(LocalizedStringKey, content: () -> Content)](/documentation/storekit/subscriptionoptiongroup/init(_:content:)-2nlpw)
- [init(some StringProtocol, content: () -> Content)](/documentation/storekit/subscriptionoptiongroup/init(_:content:)-24grh)
- [init(LocalizedStringKey, content: () -> Content, marketingContent: () -> MarketingContent)](/documentation/storekit/subscriptionoptiongroup/init(_:content:marketingcontent:)-9jybc)
- [init(some StringProtocol, content: () -> Content, marketingContent: () -> MarketingContent)](/documentation/storekit/subscriptionoptiongroup/init(_:content:marketingcontent:)-550q0)
- [init(LocalizedStringKey, isIncluded: (Product) -> Bool)](/documentation/storekit/subscriptionoptiongroup/init(_:isincluded:)-uhqa)
- [init(some StringProtocol, isIncluded: (Product) -> Bool)](/documentation/storekit/subscriptionoptiongroup/init(_:isincluded:)-5f3ml)
- [init(LocalizedStringKey, isIncluded: (Product) -> Bool, marketingContent: () -> MarketingContent)](/documentation/storekit/subscriptionoptiongroup/init(_:isincluded:marketingcontent:)-8vmdm)
- [init(some StringProtocol, isIncluded: (Product) -> Bool, marketingContent: () -> MarketingContent)](/documentation/storekit/subscriptionoptiongroup/init(_:isincluded:marketingcontent:)-4d72a)
- [init(content: () -> Content)](/documentation/storekit/subscriptionoptiongroup/init(content:))
- [init(content: () -> Content, label: () -> Label)](/documentation/storekit/subscriptionoptiongroup/init(content:label:))
- [init(content: () -> Content, label: () -> Label, marketingContent: () -> MarketingContent)](/documentation/storekit/subscriptionoptiongroup/init(content:label:marketingcontent:))
- [init(content: () -> Content, marketingContent: () -> MarketingContent)](/documentation/storekit/subscriptionoptiongroup/init(content:marketingcontent:))
- [init(isIncluded: (Product) -> Bool)](/documentation/storekit/subscriptionoptiongroup/init(isincluded:))
- [init(isIncluded: (Product) -> Bool, label: () -> Label)](/documentation/storekit/subscriptionoptiongroup/init(isincluded:label:))
- [init(isIncluded: (Product) -> Bool, label: () -> Label, marketingContent: () -> MarketingContent)](/documentation/storekit/subscriptionoptiongroup/init(isincluded:label:marketingcontent:))
- [init(isIncluded: (Product) -> Bool, marketingContent: () -> MarketingContent)](/documentation/storekit/subscriptionoptiongroup/init(isincluded:marketingcontent:))

##### Supporting types

- [AutomaticSubscriptionOptionGroupLabel](/documentation/storekit/automaticsubscriptionoptiongrouplabel)
- [SubscriptionOptionGroupSet](/documentation/storekit/subscriptionoptiongroupset)

##### Creating subscription option group sets

- [init(idType: GroupID.Type, groupedBy: (Product) -> GroupID, label: (GroupID) -> Label)](/documentation/storekit/subscriptionoptiongroupset/init(idtype:groupedby:label:))
- [init(idType: GroupID.Type, groupedBy: (Product) -> GroupID, label: (GroupID) -> Label, marketingContent: (GroupID) -> MarketingContent)](/documentation/storekit/subscriptionoptiongroupset/init(idtype:groupedby:label:marketingcontent:))

##### Creating the group style

- [func subscriptionStoreOptionGroupStyle(some SubscriptionOptionGroupStyle) -> some View](/documentation/swiftui/view/subscriptionstoreoptiongroupstyle(_:))
- [SubscriptionPeriodGroupSet](/documentation/storekit/subscriptionperiodgroupset)

##### Creating subscription period group sets

- [init()](/documentation/storekit/subscriptionperiodgroupset/init())
- [init(marketingContent: (Product.SubscriptionPeriod?) -> MarketingContent)](/documentation/storekit/subscriptionperiodgroupset/init(marketingcontent:))
- [init(marketingContent: (Product.SubscriptionPeriod?) -> MarketingContent, label: (Product.SubscriptionPeriod?) -> Label)](/documentation/storekit/subscriptionperiodgroupset/init(marketingcontent:label:))

##### Creating the group style

- [func subscriptionStoreOptionGroupStyle(some SubscriptionOptionGroupStyle) -> some View](/documentation/swiftui/view/subscriptionstoreoptiongroupstyle(_:))
- [SubscriptionOptionSection](/documentation/storekit/subscriptionoptionsection)

##### Creating subscription option sections

- [init(LocalizedStringKey, isIncluded: (Product) -> Bool, footer: () -> Footer)](/documentation/storekit/subscriptionoptionsection/init(_:isincluded:footer:)-17lo3)
- [init(some StringProtocol, isIncluded: (Product) -> Bool, footer: () -> Footer)](/documentation/storekit/subscriptionoptionsection/init(_:isincluded:footer:)-36k79)
- [init(isIncluded: (Product) -> Bool, header: () -> Header, footer: () -> Footer)](/documentation/storekit/subscriptionoptionsection/init(isincluded:header:footer:))

##### Choosing a subscription option group style

- [func subscriptionStoreOptionGroupStyle(some SubscriptionOptionGroupStyle) -> some View](/documentation/swiftui/view/subscriptionstoreoptiongroupstyle(_:))
- [StoreContent](/documentation/storekit/storecontent)

##### Implementing store content

- [var body: Self.Body](/documentation/storekit/storecontent/body-swift.property)
- [Body](/documentation/storekit/storecontent/body-swift.associatedtype)

##### Configuring store content

- [func subscriptionStoreOptionGroupStyle(some SubscriptionOptionGroupStyle) -> some StoreContent](/documentation/storekit/storecontent/subscriptionstoreoptiongroupstyle(_:))
- [func subscriptionStoreButtonLabel(SubscriptionStoreButtonLabel) -> some StoreContent](/documentation/storekit/storecontent/subscriptionstorebuttonlabel(_:))
- [func storeButton(Visibility, for: StoreButtonKind...) -> some StoreContent](/documentation/storekit/storecontent/storebutton(_:for:))
- [func subscriptionStoreControlStyle<S>(S, placement: S.Placement) -> some StoreContent](/documentation/storekit/storecontent/subscriptionstorecontrolstyle(_:placement:))
- [func productDescription(Visibility) -> some StoreContent](/documentation/storekit/storecontent/productdescription(_:))

##### Configuring backgrounds

- [func subscriptionStoreControlBackground(SubscriptionStoreControlBackground) -> some StoreContent](/documentation/storekit/storecontent/subscriptionstorecontrolbackground(_:)-10hv8)
- [func subscriptionStoreControlBackground(some ShapeStyle) -> some StoreContent](/documentation/storekit/storecontent/subscriptionstorecontrolbackground(_:)-3xzai)
- [func subscriptionStorePickerItemBackground(some ShapeStyle) -> some StoreContent](/documentation/storekit/storecontent/subscriptionstorepickeritembackground(_:))
- [func subscriptionStorePickerItemBackground(some ShapeStyle, in: some Shape) -> some StoreContent](/documentation/storekit/storecontent/subscriptionstorepickeritembackground(_:in:))

##### Supporting types

- [IdentifiedStoreContent](/documentation/storekit/identifiedstorecontent)
- [StoreContentBuilder](/documentation/storekit/storecontentbuilder)

##### Building store content

- [static func buildBlock<each Content>(repeat each Content) -> TupleStoreContent<repeat each Content>](/documentation/storekit/storecontentbuilder/buildblock(_:))
- [static func buildEither<TrueContent, FalseContent>(first: TrueContent) -> _ConditionalContent<TrueContent, FalseContent>](/documentation/storekit/storecontentbuilder/buildeither(first:))
- [static func buildEither<TrueContent, FalseContent>(second: FalseContent) -> _ConditionalContent<TrueContent, FalseContent>](/documentation/storekit/storecontentbuilder/buildeither(second:))
- [static func buildExpression<Content>(Content) -> some StoreContent](/documentation/storekit/storecontentbuilder/buildexpression(_:))
- [static func buildIf<Content>(Content?) -> Content?](/documentation/storekit/storecontentbuilder/buildif(_:))
- [static func buildLimitedAvailability(any StoreContent) -> some StoreContent](/documentation/storekit/storecontentbuilder/buildlimitedavailability(_:))
- [TupleStoreContent](/documentation/storekit/tuplestorecontent)

#### Styling subscription option groups

- [func subscriptionStoreOptionGroupStyle(some SubscriptionOptionGroupStyle) -> some View](/documentation/swiftui/view/subscriptionstoreoptiongroupstyle(_:))
- [func subscriptionStoreOptionGroupStyle(some SubscriptionOptionGroupStyle) -> some StoreContent](/documentation/storekit/storecontent/subscriptionstoreoptiongroupstyle(_:))
- [SubscriptionOptionGroupStyle](/documentation/storekit/subscriptionoptiongroupstyle)

##### Getting built-in subscription option group styles

- [static var automatic: AutomaticSubscriptionOptionGroupStyle](/documentation/storekit/subscriptionoptiongroupstyle/automatic)
- [static var links: LinksSubscriptionOptionGroupStyle](/documentation/storekit/subscriptionoptiongroupstyle/links)
- [static var tabs: TabsSubscriptionOptionGroupStyle](/documentation/storekit/subscriptionoptiongroupstyle/tabs)

##### Supporting types

- [AutomaticSubscriptionOptionGroupStyle](/documentation/storekit/automaticsubscriptionoptiongroupstyle)

###### Getting the automatic style

- [static var automatic: AutomaticSubscriptionOptionGroupStyle](/documentation/storekit/subscriptionoptiongroupstyle/automatic)
- [init()](/documentation/storekit/automaticsubscriptionoptiongroupstyle/init())
- [LinksSubscriptionOptionGroupStyle](/documentation/storekit/linkssubscriptionoptiongroupstyle)

###### Getting the links style

- [static var links: LinksSubscriptionOptionGroupStyle](/documentation/storekit/subscriptionoptiongroupstyle/links)

###### Creating the style

- [init()](/documentation/storekit/linkssubscriptionoptiongroupstyle/init())
- [TabsSubscriptionOptionGroupStyle](/documentation/storekit/tabssubscriptionoptiongroupstyle)

###### Getting the tabs style

- [static var tabs: TabsSubscriptionOptionGroupStyle](/documentation/storekit/subscriptionoptiongroupstyle/tabs)

###### Creating the style

- [init()](/documentation/storekit/tabssubscriptionoptiongroupstyle/init())
- [SubscriptionOptionGroupStyleOutput](/documentation/storekit/subscriptionoptiongroupstyleoutput)

#### Adding backgrounds to subscription stores

- [func containerBackground<S>(S, for: ContainerBackgroundPlacement) -> some View](/documentation/swiftui/view/containerbackground(_:for:))
- [func containerBackground<V>(for: ContainerBackgroundPlacement, alignment: Alignment, content: () -> V) -> some View](/documentation/swiftui/view/containerbackground(for:alignment:content:))
- [func subscriptionStoreControlBackground(some ShapeStyle) -> some View](/documentation/swiftui/view/subscriptionstorecontrolbackground(_:)-7jxa9)
- [func subscriptionStoreControlBackground(SubscriptionStoreControlBackground) -> some View](/documentation/swiftui/view/subscriptionstorecontrolbackground(_:)-7ev89)
- [static var subscriptionStore: ContainerBackgroundPlacement](/documentation/swiftui/containerbackgroundplacement/subscriptionstore)
- [static var subscriptionStoreHeader: ContainerBackgroundPlacement](/documentation/swiftui/containerbackgroundplacement/subscriptionstoreheader)
- [static var subscriptionStoreFullHeight: ContainerBackgroundPlacement](/documentation/swiftui/containerbackgroundplacement/subscriptionstorefullheight)
- [SubscriptionStoreControlBackground](/documentation/storekit/subscriptionstorecontrolbackground)

##### Background types

- [static var automatic: SubscriptionStoreControlBackground](/documentation/storekit/subscriptionstorecontrolbackground/automatic)
- [static var gradientMaterial: SubscriptionStoreControlBackground](/documentation/storekit/subscriptionstorecontrolbackground/gradientmaterial)
- [static var gradientMaterialOnScroll: SubscriptionStoreControlBackground](/documentation/storekit/subscriptionstorecontrolbackground/gradientmaterialonscroll)

#### Configuring accessory buttons

- [func storeButton(Visibility, for: StoreButtonKind...) -> some View](/documentation/swiftui/view/storebutton(_:for:))
- [func subscriptionStoreSignInAction((() -> ())?) -> some View](/documentation/swiftui/view/subscriptionstoresigninaction(_:))
- [StoreButtonKind](/documentation/storekit/storebuttonkind)

##### Getting button types for store views

- [static var cancellation: StoreButtonKind](/documentation/storekit/storebuttonkind/cancellation)
- [static var restorePurchases: StoreButtonKind](/documentation/storekit/storebuttonkind/restorepurchases)

##### Getting additional button types for subscription store views

- [static var signIn: StoreButtonKind](/documentation/storekit/storebuttonkind/signin)
- [static var redeemCode: StoreButtonKind](/documentation/storekit/storebuttonkind/redeemcode)
- [static var policies: StoreButtonKind](/documentation/storekit/storebuttonkind/policies)
- [SubscriptionOfferViewButtonKind](/documentation/storekit/subscriptionofferviewbuttonkind)

##### Type Properties

- [static var detailLink: SubscriptionOfferViewButtonKind](/documentation/storekit/subscriptionofferviewbuttonkind/detaillink)

#### Configuring the subscription store policies

- [func subscriptionStorePolicyDestination(for: SubscriptionStorePolicyKind, destination: () -> some View) -> some View](/documentation/swiftui/view/subscriptionstorepolicydestination(for:destination:))
- [func subscriptionStorePolicyDestination(url: URL, for: SubscriptionStorePolicyKind) -> some View](/documentation/swiftui/view/subscriptionstorepolicydestination(url:for:))
- [func subscriptionStorePolicyForegroundStyle(some ShapeStyle) -> some View](/documentation/swiftui/view/subscriptionstorepolicyforegroundstyle(_:))
- [func subscriptionStorePolicyForegroundStyle(some ShapeStyle, some ShapeStyle) -> some View](/documentation/swiftui/view/subscriptionstorepolicyforegroundstyle(_:_:))
- [SubscriptionStorePolicyKind](/documentation/storekit/subscriptionstorepolicykind)

##### Getting policy types

- [static var privacyPolicy: SubscriptionStorePolicyKind](/documentation/storekit/subscriptionstorepolicykind/privacypolicy)
- [static var termsOfService: SubscriptionStorePolicyKind](/documentation/storekit/subscriptionstorepolicykind/termsofservice)

#### Selecting subscription offers

- [func subscriptionPromotionalOffer(offer: (Product, Product.SubscriptionInfo) -> Product.SubscriptionOffer?, signature: (Product, Product.SubscriptionInfo, Product.SubscriptionOffer) async throws -> Product.SubscriptionOffer.Signature) -> some View](/documentation/swiftui/view/subscriptionpromotionaloffer(offer:signature:))
- [func preferredSubscriptionOffer((Product, Product.SubscriptionInfo, [Product.SubscriptionOffer]) -> Product.SubscriptionOffer?) -> some View](/documentation/swiftui/view/preferredsubscriptionoffer(_:))
- [func offerCodeRedemption(isPresented: Binding<Bool>, onCompletion: (Result<Void, any Error>) -> Void) -> some View](/documentation/swiftui/view/offercoderedemption(ispresented:oncompletion:))

#### Configuring purchase options and product descriptions

- [func inAppPurchaseOptions(((Product) async -> Set<Product.PurchaseOption>)?) -> some View](/documentation/swiftui/view/inapppurchaseoptions(_:))
- [func productDescription(Visibility) -> some View](/documentation/swiftui/view/productdescription(_:))

#### Responding to store events

- [func onInAppPurchaseStart(perform: ((Product) async -> ())?) -> some View](/documentation/swiftui/view/oninapppurchasestart(perform:))
- [func onInAppPurchaseCompletion(perform: ((Product, Result<Product.PurchaseResult, any Error>) async -> ())?) -> some View](/documentation/swiftui/view/oninapppurchasecompletion(perform:))

#### Loading StoreKit data

- [func storeProductTask(for: Product.ID, priority: TaskPriority, action: (Product.TaskState) async -> ()) -> some View](/documentation/swiftui/view/storeproducttask(for:priority:action:))
- [func storeProductsTask(for: some Collection<String> & Equatable & Sendable, priority: TaskPriority, action: (Product.CollectionTaskState) async -> ()) -> some View](/documentation/swiftui/view/storeproductstask(for:priority:action:))
- [func currentEntitlementTask(for: String, priority: TaskPriority, action: (EntitlementTaskState<VerificationResult<Transaction>?>) async -> ()) -> some View](/documentation/swiftui/view/currententitlementtask(for:priority:action:))
- [func subscriptionStatusTask(for: String, priority: TaskPriority, action: (EntitlementTaskState<[Product.SubscriptionInfo.Status]>) async -> ()) -> some View](/documentation/swiftui/view/subscriptionstatustask(for:priority:action:))
- [Product.CollectionTaskState](/documentation/storekit/product/collectiontaskstate)

##### Collection task states

- [case loading](/documentation/storekit/product/collectiontaskstate/loading)
- [case success([Product], unavailable: [Product.ID])](/documentation/storekit/product/collectiontaskstate/success(_:unavailable:))
- [case failure(any Error)](/documentation/storekit/product/collectiontaskstate/failure(_:))

##### Instance Properties

- [var products: [Product]?](/documentation/storekit/product/collectiontaskstate/products)
- [Product.TaskState](/documentation/storekit/product/taskstate)

##### Task states

- [case loading](/documentation/storekit/product/taskstate/loading)
- [case success(Product)](/documentation/storekit/product/taskstate/success(_:))
- [case unavailable](/documentation/storekit/product/taskstate/unavailable)
- [case failure(any Error)](/documentation/storekit/product/taskstate/failure(_:))

##### Instance Properties

- [var product: Product?](/documentation/storekit/product/taskstate/product)
- [EntitlementTaskState](/documentation/storekit/entitlementtaskstate)

##### Getting the task state

- [case loading](/documentation/storekit/entitlementtaskstate/loading)
- [case success(Value)](/documentation/storekit/entitlementtaskstate/success(_:))
- [case failure(any Error)](/documentation/storekit/entitlementtaskstate/failure(_:))

##### Getting the transaction with the entitlement

- [var transaction: VerificationResult<Transaction>?](/documentation/storekit/entitlementtaskstate/transaction)
- [var value: Value?](/documentation/storekit/entitlementtaskstate/value)

##### Helper methods

- [func flatMap<NewValue>((Value) throws -> EntitlementTaskState<NewValue>) rethrows -> EntitlementTaskState<NewValue>](/documentation/storekit/entitlementtaskstate/flatmap(_:)-7gsnv)
- [func flatMap<NewValue>((Value) async throws -> EntitlementTaskState<NewValue>) async rethrows -> EntitlementTaskState<NewValue>](/documentation/storekit/entitlementtaskstate/flatmap(_:)-66eb8)
- [func map<NewValue>((Value) throws -> NewValue) rethrows -> EntitlementTaskState<NewValue>](/documentation/storekit/entitlementtaskstate/map(_:)-8ly3v)
- [func map<NewValue>((Value) async throws -> NewValue) async rethrows -> EntitlementTaskState<NewValue>](/documentation/storekit/entitlementtaskstate/map(_:)-250dk)

#### Requesting a refund

- [func refundRequestSheet(for: Transaction.ID, isPresented: Binding<Bool>, onDismiss: ((Result<Transaction.RefundRequestStatus, Transaction.RefundRequestError>) -> ())?) -> some View](/documentation/swiftui/view/refundrequestsheet(for:ispresented:ondismiss:))

### Product and subscription information

- [Implementing a store in your app using the StoreKit API](/documentation/storekit/implementing-a-store-in-your-app-using-the-storekit-api)
- [Product](/documentation/storekit/product)

#### Requesting products from the App Store

- [static func products<Identifiers>(for: Identifiers) async throws -> [Product]](/documentation/storekit/product/products(for:))

#### Displaying a product description and price

- [let displayName: String](/documentation/storekit/product/displayname)
- [let description: String](/documentation/storekit/product/description)
- [let displayPrice: String](/documentation/storekit/product/displayprice)
- [let price: Decimal](/documentation/storekit/product/price)
- [var priceFormatStyle: Decimal.FormatStyle.Currency](/documentation/storekit/product/priceformatstyle)
- [var subscriptionPeriodFormatStyle: Date.ComponentsFormatStyle](/documentation/storekit/product/subscriptionperiodformatstyle)
- [var subscriptionPeriodUnitFormatStyle: Product.SubscriptionPeriod.Unit.FormatStyle](/documentation/storekit/product/subscriptionperiodunitformatstyle)

#### Purchasing a product

- [func purchase(options: Set<Product.PurchaseOption>) async throws -> Product.PurchaseResult](/documentation/storekit/product/purchase(options:))
- [func purchase(confirmIn: some UIScene, options: Set<Product.PurchaseOption>) async throws -> Product.PurchaseResult](/documentation/storekit/product/purchase(confirmin:options:)-6dj6y)
- [func purchase(confirmIn: UIViewController, options: Set<Product.PurchaseOption>) async throws -> Product.PurchaseResult](/documentation/storekit/product/purchase(confirmin:options:)-3bivf)
- [func purchase(confirmIn: NSWindow, options: Set<Product.PurchaseOption>) async throws -> Product.PurchaseResult](/documentation/storekit/product/purchase(confirmin:options:)-8eai6)
- [Product.PurchaseOption](/documentation/storekit/product/purchaseoption)

##### Setting the purchase options

- [static func appAccountToken(UUID) -> Product.PurchaseOption](/documentation/storekit/product/purchaseoption/appaccounttoken(_:))
- [static func winBackOffer(Product.SubscriptionOffer) -> Product.PurchaseOption](/documentation/storekit/product/purchaseoption/winbackoffer(_:))
- [static func promotionalOffer(offerID: String, keyID: String, nonce: UUID, signature: Data, timestamp: Int) -> Product.PurchaseOption](/documentation/storekit/product/purchaseoption/promotionaloffer(offerid:keyid:nonce:signature:timestamp:))
- [static func promotionalOffer(offerID: String, signature: Product.SubscriptionOffer.Signature) -> Product.PurchaseOption](/documentation/storekit/product/purchaseoption/promotionaloffer(offerid:signature:))
- [static func quantity(Int) -> Product.PurchaseOption](/documentation/storekit/product/purchaseoption/quantity(_:))

##### Specifying the behavior for storefront changes

- [static func onStorefrontChange(shouldContinuePurchase: (Storefront) -> Bool) -> Product.PurchaseOption](/documentation/storekit/product/purchaseoption/onstorefrontchange(shouldcontinuepurchase:))

##### Specifying eligibility for an introductory offer

- [static func introductoryOfferEligibility(compactJWS: String) -> Product.PurchaseOption](/documentation/storekit/product/purchaseoption/introductoryoffereligibility(compactjws:))

##### Setting options for StoreKit Testing in Xcode

- [static func purchaseDate(Date, renewalBehavior: Product.PurchaseOption.SubscriptionRenewalBehavior) -> Product.PurchaseOption](/documentation/storekit/product/purchaseoption/purchasedate(_:renewalbehavior:))
- [Product.PurchaseOption.SubscriptionRenewalBehavior](/documentation/storekit/product/purchaseoption/subscriptionrenewalbehavior)

###### Renewal behaviors in the testing environment

- [case cancelImmediately](/documentation/storekit/product/purchaseoption/subscriptionrenewalbehavior/cancelimmediately)
- [case renewUntilNow](/documentation/storekit/product/purchaseoption/subscriptionrenewalbehavior/renewuntilnow)
- [static func codeOffer(referenceName: String) -> Product.PurchaseOption](/documentation/storekit/product/purchaseoption/codeoffer(referencename:))
- [static func promotionalOffer(id: String) -> Product.PurchaseOption](/documentation/storekit/product/purchaseoption/promotionaloffer(id:))

##### Setting options for sandbox testing

- [static func simulatesAskToBuyInSandbox(Bool) -> Product.PurchaseOption](/documentation/storekit/product/purchaseoption/simulatesasktobuyinsandbox(_:))

##### Setting custom purchase options

- [static func custom(key: String, value: Data) -> Product.PurchaseOption](/documentation/storekit/product/purchaseoption/custom(key:value:)-80cvh)
- [static func custom(key: String, value: String) -> Product.PurchaseOption](/documentation/storekit/product/purchaseoption/custom(key:value:)-3g3nc)
- [static func custom(key: String, value: Bool) -> Product.PurchaseOption](/documentation/storekit/product/purchaseoption/custom(key:value:)-8tjim)
- [static func custom(key: String, value: Double) -> Product.PurchaseOption](/documentation/storekit/product/purchaseoption/custom(key:value:)-7rju9)

##### Type Methods

- [static func promotionalOffer(String, compactJWS: String) -> [Product.PurchaseOption]](/documentation/storekit/product/purchaseoption/promotionaloffer(_:compactjws:))
- [Product.PurchaseResult](/documentation/storekit/product/purchaseresult)

##### Getting the Purchase Results

- [case success(VerificationResult<Transaction>)](/documentation/storekit/product/purchaseresult/success(_:))
- [case userCancelled](/documentation/storekit/product/purchaseresult/usercancelled)
- [case pending](/documentation/storekit/product/purchaseresult/pending)
- [Product.PurchaseError](/documentation/storekit/product/purchaseerror)

##### Getting Purchase Error Codes

- [case invalidOfferIdentifier](/documentation/storekit/product/purchaseerror/invalidofferidentifier)
- [case productUnavailable](/documentation/storekit/product/purchaseerror/productunavailable)
- [case purchaseNotAllowed](/documentation/storekit/product/purchaseerror/purchasenotallowed)
- [case ineligibleForOffer](/documentation/storekit/product/purchaseerror/ineligibleforoffer)
- [case invalidOfferPrice](/documentation/storekit/product/purchaseerror/invalidofferprice)
- [case invalidOfferSignature](/documentation/storekit/product/purchaseerror/invalidoffersignature)
- [case invalidQuantity](/documentation/storekit/product/purchaseerror/invalidquantity)
- [case missingOfferParameters](/documentation/storekit/product/purchaseerror/missingofferparameters)

#### Receiving current entitlement information

- [var currentEntitlements: Transaction.Transactions](/documentation/storekit/product/currententitlements)

#### Getting the latest transaction

- [var latestTransaction: VerificationResult<Transaction>?](/documentation/storekit/product/latesttransaction)

#### Getting subscription information

- [let subscription: Product.SubscriptionInfo?](/documentation/storekit/product/subscription)
- [Product.SubscriptionInfo](/documentation/storekit/product/subscriptioninfo)

##### Determining the subscription status

- [var status: [Product.SubscriptionInfo.Status]](/documentation/storekit/product/subscriptioninfo/status-swift.property)
- [static func status(for: String) async throws -> [Product.SubscriptionInfo.Status]](/documentation/storekit/product/subscriptioninfo/status(for:))
- [static func status(transactionID: UInt64) async throws -> SubscriptionStatus?](/documentation/storekit/product/subscriptioninfo/status(transactionid:))
- [Product.SubscriptionInfo.Status](/documentation/storekit/product/subscriptioninfo/status-swift.struct)

###### Monitoring subscription status changes

- [static var updates: Product.SubscriptionInfo.Status.Statuses](/documentation/storekit/product/subscriptioninfo/status-swift.struct/updates)
- [static var all: AsyncStream<(groupID: String, statuses: [Product.SubscriptionInfo.Status])>](/documentation/storekit/product/subscriptioninfo/status-swift.struct/all)
- [Product.SubscriptionInfo.Status.Statuses](/documentation/storekit/product/subscriptioninfo/status-swift.struct/statuses)

###### Getting subscription status information

- [let state: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/status-swift.struct/state)
- [let renewalInfo: VerificationResult<Product.SubscriptionInfo.RenewalInfo>](/documentation/storekit/product/subscriptioninfo/status-swift.struct/renewalinfo)
- [let transaction: VerificationResult<Transaction>](/documentation/storekit/product/subscriptioninfo/status-swift.struct/transaction)
- [Product.SubscriptionInfo.RenewalInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo)

###### Getting the environment

- [let environment: AppStore.Environment](/documentation/storekit/product/subscriptioninfo/renewalinfo/environment)

###### Getting the transaction ID

- [let originalTransactionID: UInt64](/documentation/storekit/product/subscriptioninfo/renewalinfo/originaltransactionid)

###### Identifying the account

- [var appAccountToken: UUID?](/documentation/storekit/product/subscriptioninfo/renewalinfo/appaccounttoken)
- [var appTransactionID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/apptransactionid)

###### Getting the product ID

- [let currentProductID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/currentproductid)

###### Getting subscription dates

- [var recentSubscriptionStartDate: Date](/documentation/storekit/product/subscriptioninfo/renewalinfo/recentsubscriptionstartdate)
- [var renewalDate: Date?](/documentation/storekit/product/subscriptioninfo/renewalinfo/renewaldate)

###### Getting the renewal or expiration state

- [let state: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/status-swift.struct/state)
- [let autoRenewPreference: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/autorenewpreference)
- [let willAutoRenew: Bool](/documentation/storekit/product/subscriptioninfo/renewalinfo/willautorenew)
- [let expirationReason: Product.SubscriptionInfo.RenewalInfo.ExpirationReason?](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct)

###### Getting the expiration reason

- [static let autoRenewDisabled: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/autorenewdisabled)
- [static let billingError: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/billingerror)
- [static let didNotConsentToPriceIncrease: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/didnotconsenttopriceincrease)
- [static let productUnavailable: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/productunavailable)
- [static let unknown: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/unknown)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/localizeddescription)

###### Getting offers

- [let offer: Transaction.Offer?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offer)
- [Transaction.Offer](/documentation/storekit/transaction/offer-swift.struct)

###### Getting offer details

- [let id: String?](/documentation/storekit/transaction/offer-swift.struct/id)
- [let type: Transaction.OfferType](/documentation/storekit/transaction/offer-swift.struct/type)
- [Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct)

###### Getting offer types

- [static let introductory: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/introductory)
- [static let promotional: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/promotional)
- [static let code: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/code)
- [static var winBack: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/winback)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/transaction/offertype-swift.struct/localizeddescription)
- [let paymentMode: Transaction.Offer.PaymentMode?](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.property)
- [Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct)

###### Getting payment modes

- [static let freeTrial: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/freetrial)
- [static let payAsYouGo: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payasyougo)
- [static let payUpFront: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payupfront)
- [static var oneTime: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/onetime)
- [let period: Product.SubscriptionPeriod?](/documentation/storekit/transaction/offer-swift.struct/period)
- [let eligibleWinBackOfferIDs: [String]](/documentation/storekit/product/subscriptioninfo/renewalinfo/eligiblewinbackofferids)

###### Getting the renewal price and currency

- [var renewalPrice: Decimal?](/documentation/storekit/product/subscriptioninfo/renewalinfo/renewalprice)
- [var currency: Locale.Currency?](/documentation/storekit/product/subscriptioninfo/renewalinfo/currency)

###### Getting billing status

- [let isInBillingRetry: Bool](/documentation/storekit/product/subscriptioninfo/renewalinfo/isinbillingretry)
- [let gracePeriodExpirationDate: Date?](/documentation/storekit/product/subscriptioninfo/renewalinfo/graceperiodexpirationdate)

###### Getting the price increase status

- [Managing Price Increases for Auto-Renewable Subscriptions](/documentation/storekit/managing-price-increases-for-auto-renewable-subscriptions)
- [let priceIncreaseStatus: Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum)

###### Getting Price Increase Status

- [case noIncreasePending](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/noincreasepending)
- [case agreed](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/agreed)
- [case pending](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/pending)

###### Getting a Localized Description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/localizeddescription)

###### Verifying subscription renewal information

- [let deviceVerification: Data](/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverification)
- [let deviceVerificationNonce: UUID](/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverificationnonce)
- [let signedDate: Date](/documentation/storekit/product/subscriptioninfo/renewalinfo/signeddate)

###### Getting subscription renewal info in JSON format

- [var jsonRepresentation: Data](/documentation/storekit/product/subscriptioninfo/renewalinfo/jsonrepresentation)

###### Getting renewal information for Advanced Commerce API

- [let advancedCommerceInfo: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo?](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item)

###### Instance Properties

- [let details: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.Details](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/details-swift.property)
- [let priceIncreaseInfo: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo?](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.property)

###### Type Aliases

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.Details](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/details-swift.typealias)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct)

###### Information about a price increase

- [let dependentSKUs: [String]](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/dependentskus)
- [let price: Decimal](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/price)
- [let status: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.property)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct)

###### Price increase status values

- [static let pending: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/pending)
- [static let accepted: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/accepted)
- [static let scheduled: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/scheduled)

###### Instance Properties

- [let consistencyToken: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/consistencytoken)
- [let description: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/description)
- [let displayName: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/displayname)
- [let items: [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item]](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/items)
- [let period: SubscriptionPeriod](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/period)
- [let requestReferenceID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/requestreferenceid)
- [let taxCode: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/taxcode)

###### Deprecated

- [var environmentStringRepresentation: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/environmentstringrepresentation)
- [var offerID: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerid)
- [var offerType: Transaction.OfferType?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offertype)
- [var currencyCode: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/currencycode)
- [var offerPaymentModeStringRepresentation: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerpaymentmodestringrepresentation)
- [var offerPeriodStringRepresentation: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerperiodstringrepresentation)
- [Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate)

###### Getting the renewal state

- [static let subscribed: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/subscribed)
- [static let expired: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/expired)
- [static let inBillingRetryPeriod: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/inbillingretryperiod)
- [static let inGracePeriod: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/ingraceperiod)
- [static let revoked: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/revoked)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalstate/localizeddescription)

##### Identifying the subscription group

- [let subscriptionGroupID: String](/documentation/storekit/product/subscriptioninfo/subscriptiongroupid)
- [var groupDisplayName: String](/documentation/storekit/product/subscriptioninfo/groupdisplayname)
- [var groupLevel: Int](/documentation/storekit/product/subscriptioninfo/grouplevel)

##### Getting the subscription period

- [let subscriptionPeriod: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptioninfo/subscriptionperiod)
- [Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod)

###### Getting the subscription period

- [let value: Int](/documentation/storekit/product/subscriptionperiod/value)
- [let unit: Product.SubscriptionPeriod.Unit](/documentation/storekit/product/subscriptionperiod/unit-swift.property)
- [Product.SubscriptionPeriod.Unit](/documentation/storekit/product/subscriptionperiod/unit-swift.enum)

###### Getting the subscription period units

- [case day](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/day)
- [case month](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/month)
- [case week](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/week)
- [case year](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/year)

###### Getting localized and debug descriptions

- [var localizedDescription: String](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/localizeddescription)

###### Getting the formatted description

- [func formatted<S>(S) -> S.FormatOutput](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/formatted(_:))
- [Product.SubscriptionPeriod.Unit.FormatStyle](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/formatstyle)

###### Formatting subscription period units

- [func format(Product.SubscriptionPeriod.Unit) -> String](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/formatstyle/format(_:))

###### Getting the period date range

- [func dateRange(referenceDate: Date) -> Range<Date>](/documentation/storekit/product/subscriptionperiod/daterange(referencedate:))

###### Getting subscription periods

- [static var everySixMonths: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/everysixmonths)
- [static var everyThreeDays: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/everythreedays)
- [static var everyThreeMonths: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/everythreemonths)
- [static var everyTwoMonths: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/everytwomonths)
- [static var everyTwoWeeks: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/everytwoweeks)
- [static var monthly: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/monthly)
- [static var weekly: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/weekly)
- [static var yearly: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/yearly)

###### Formatting the subscription period

- [func formatted<S>(S, referenceDate: Date) -> S.FormatOutput](/documentation/storekit/product/subscriptionperiod/formatted(_:referencedate:)-3t7wd)
- [func formatted<S>(S, referenceDate: Date) -> S.FormatOutput](/documentation/storekit/product/subscriptionperiod/formatted(_:referencedate:)-8s3ar)

##### Getting introductory offer details

- [var isEligibleForIntroOffer: Bool](/documentation/storekit/product/subscriptioninfo/iseligibleforintrooffer)
- [static func isEligibleForIntroOffer(for: String) async -> Bool](/documentation/storekit/product/subscriptioninfo/iseligibleforintrooffer(for:))
- [let introductoryOffer: Product.SubscriptionOffer?](/documentation/storekit/product/subscriptioninfo/introductoryoffer)
- [Product.SubscriptionOffer](/documentation/storekit/product/subscriptionoffer)

###### Getting the subscription offer identifier

- [let id: String?](/documentation/storekit/product/subscriptionoffer/id)

###### Getting the subscription offer type

- [let type: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/type)
- [Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype)

###### Getting offer types

- [static let introductory: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype/introductory)
- [static let promotional: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype/promotional)
- [static let winBack: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype/winback)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptionoffer/offertype/localizeddescription)

###### Getting price information

- [let displayPrice: String](/documentation/storekit/product/subscriptionoffer/displayprice)
- [let price: Decimal](/documentation/storekit/product/subscriptionoffer/price)
- [let paymentMode: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.property)
- [Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct)

###### Getting the payment modes

- [static let freeTrial: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/freetrial)
- [static let payAsYouGo: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/payasyougo)
- [static let payUpFront: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/payupfront)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/localizeddescription)

###### Getting the subscription duration

- [let period: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionoffer/period)
- [let periodCount: Int](/documentation/storekit/product/subscriptionoffer/periodcount)

###### Creating a subscription offer signature

- [Product.SubscriptionOffer.Signature](/documentation/storekit/product/subscriptionoffer/signature)

###### Creating subscription offer signatures

- [init(keyID: String, nonce: UUID, timestamp: Int, signature: Data)](/documentation/storekit/product/subscriptionoffer/signature/init(keyid:nonce:timestamp:signature:))

###### Getting signature elements

- [var keyID: String](/documentation/storekit/product/subscriptionoffer/signature/keyid)
- [var nonce: UUID](/documentation/storekit/product/subscriptionoffer/signature/nonce)
- [var signature: Data](/documentation/storekit/product/subscriptionoffer/signature/signature)
- [var timestamp: Int](/documentation/storekit/product/subscriptionoffer/signature/timestamp)

##### Getting win-back offer details

- [let winBackOffers: [Product.SubscriptionOffer]](/documentation/storekit/product/subscriptioninfo/winbackoffers)

##### Getting promotional offer details

- [let promotionalOffers: [Product.SubscriptionOffer]](/documentation/storekit/product/subscriptioninfo/promotionaloffers)

##### Getting subscription renewal information

- [Product.SubscriptionInfo.RenewalInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo)

###### Getting the environment

- [let environment: AppStore.Environment](/documentation/storekit/product/subscriptioninfo/renewalinfo/environment)

###### Getting the transaction ID

- [let originalTransactionID: UInt64](/documentation/storekit/product/subscriptioninfo/renewalinfo/originaltransactionid)

###### Identifying the account

- [var appAccountToken: UUID?](/documentation/storekit/product/subscriptioninfo/renewalinfo/appaccounttoken)
- [var appTransactionID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/apptransactionid)

###### Getting the product ID

- [let currentProductID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/currentproductid)

###### Getting subscription dates

- [var recentSubscriptionStartDate: Date](/documentation/storekit/product/subscriptioninfo/renewalinfo/recentsubscriptionstartdate)
- [var renewalDate: Date?](/documentation/storekit/product/subscriptioninfo/renewalinfo/renewaldate)

###### Getting the renewal or expiration state

- [let state: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/status-swift.struct/state)
- [let autoRenewPreference: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/autorenewpreference)
- [let willAutoRenew: Bool](/documentation/storekit/product/subscriptioninfo/renewalinfo/willautorenew)
- [let expirationReason: Product.SubscriptionInfo.RenewalInfo.ExpirationReason?](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct)

###### Getting the expiration reason

- [static let autoRenewDisabled: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/autorenewdisabled)
- [static let billingError: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/billingerror)
- [static let didNotConsentToPriceIncrease: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/didnotconsenttopriceincrease)
- [static let productUnavailable: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/productunavailable)
- [static let unknown: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/unknown)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/localizeddescription)

###### Getting offers

- [let offer: Transaction.Offer?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offer)
- [Transaction.Offer](/documentation/storekit/transaction/offer-swift.struct)

###### Getting offer details

- [let id: String?](/documentation/storekit/transaction/offer-swift.struct/id)
- [let type: Transaction.OfferType](/documentation/storekit/transaction/offer-swift.struct/type)
- [Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct)

###### Getting offer types

- [static let introductory: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/introductory)
- [static let promotional: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/promotional)
- [static let code: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/code)
- [static var winBack: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/winback)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/transaction/offertype-swift.struct/localizeddescription)
- [let paymentMode: Transaction.Offer.PaymentMode?](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.property)
- [Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct)

###### Getting payment modes

- [static let freeTrial: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/freetrial)
- [static let payAsYouGo: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payasyougo)
- [static let payUpFront: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payupfront)
- [static var oneTime: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/onetime)
- [let period: Product.SubscriptionPeriod?](/documentation/storekit/transaction/offer-swift.struct/period)
- [let eligibleWinBackOfferIDs: [String]](/documentation/storekit/product/subscriptioninfo/renewalinfo/eligiblewinbackofferids)

###### Getting the renewal price and currency

- [var renewalPrice: Decimal?](/documentation/storekit/product/subscriptioninfo/renewalinfo/renewalprice)
- [var currency: Locale.Currency?](/documentation/storekit/product/subscriptioninfo/renewalinfo/currency)

###### Getting billing status

- [let isInBillingRetry: Bool](/documentation/storekit/product/subscriptioninfo/renewalinfo/isinbillingretry)
- [let gracePeriodExpirationDate: Date?](/documentation/storekit/product/subscriptioninfo/renewalinfo/graceperiodexpirationdate)

###### Getting the price increase status

- [Managing Price Increases for Auto-Renewable Subscriptions](/documentation/storekit/managing-price-increases-for-auto-renewable-subscriptions)
- [let priceIncreaseStatus: Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum)

###### Getting Price Increase Status

- [case noIncreasePending](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/noincreasepending)
- [case agreed](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/agreed)
- [case pending](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/pending)

###### Getting a Localized Description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/localizeddescription)

###### Verifying subscription renewal information

- [let deviceVerification: Data](/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverification)
- [let deviceVerificationNonce: UUID](/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverificationnonce)
- [let signedDate: Date](/documentation/storekit/product/subscriptioninfo/renewalinfo/signeddate)

###### Getting subscription renewal info in JSON format

- [var jsonRepresentation: Data](/documentation/storekit/product/subscriptioninfo/renewalinfo/jsonrepresentation)

###### Getting renewal information for Advanced Commerce API

- [let advancedCommerceInfo: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo?](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item)

###### Instance Properties

- [let details: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.Details](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/details-swift.property)
- [let priceIncreaseInfo: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo?](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.property)

###### Type Aliases

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.Details](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/details-swift.typealias)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct)

###### Information about a price increase

- [let dependentSKUs: [String]](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/dependentskus)
- [let price: Decimal](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/price)
- [let status: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.property)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct)

###### Price increase status values

- [static let pending: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/pending)
- [static let accepted: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/accepted)
- [static let scheduled: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/scheduled)

###### Instance Properties

- [let consistencyToken: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/consistencytoken)
- [let description: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/description)
- [let displayName: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/displayname)
- [let items: [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item]](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/items)
- [let period: SubscriptionPeriod](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/period)
- [let requestReferenceID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/requestreferenceid)
- [let taxCode: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/taxcode)

###### Deprecated

- [var environmentStringRepresentation: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/environmentstringrepresentation)
- [var offerID: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerid)
- [var offerType: Transaction.OfferType?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offertype)
- [var currencyCode: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/currencycode)
- [var offerPaymentModeStringRepresentation: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerpaymentmodestringrepresentation)
- [var offerPeriodStringRepresentation: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerperiodstringrepresentation)
- [Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate)

###### Getting the renewal state

- [static let subscribed: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/subscribed)
- [static let expired: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/expired)
- [static let inBillingRetryPeriod: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/inbillingretryperiod)
- [static let inGracePeriod: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/ingraceperiod)
- [static let revoked: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/revoked)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalstate/localizeddescription)
- [Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod)

##### Getting the subscription period

- [let value: Int](/documentation/storekit/product/subscriptionperiod/value)
- [let unit: Product.SubscriptionPeriod.Unit](/documentation/storekit/product/subscriptionperiod/unit-swift.property)
- [Product.SubscriptionPeriod.Unit](/documentation/storekit/product/subscriptionperiod/unit-swift.enum)

###### Getting the subscription period units

- [case day](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/day)
- [case month](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/month)
- [case week](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/week)
- [case year](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/year)

###### Getting localized and debug descriptions

- [var localizedDescription: String](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/localizeddescription)

###### Getting the formatted description

- [func formatted<S>(S) -> S.FormatOutput](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/formatted(_:))
- [Product.SubscriptionPeriod.Unit.FormatStyle](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/formatstyle)

###### Formatting subscription period units

- [func format(Product.SubscriptionPeriod.Unit) -> String](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/formatstyle/format(_:))

##### Getting the period date range

- [func dateRange(referenceDate: Date) -> Range<Date>](/documentation/storekit/product/subscriptionperiod/daterange(referencedate:))

##### Getting subscription periods

- [static var everySixMonths: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/everysixmonths)
- [static var everyThreeDays: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/everythreedays)
- [static var everyThreeMonths: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/everythreemonths)
- [static var everyTwoMonths: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/everytwomonths)
- [static var everyTwoWeeks: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/everytwoweeks)
- [static var monthly: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/monthly)
- [static var weekly: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/weekly)
- [static var yearly: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/yearly)

##### Formatting the subscription period

- [func formatted<S>(S, referenceDate: Date) -> S.FormatOutput](/documentation/storekit/product/subscriptionperiod/formatted(_:referencedate:)-3t7wd)
- [func formatted<S>(S, referenceDate: Date) -> S.FormatOutput](/documentation/storekit/product/subscriptionperiod/formatted(_:referencedate:)-8s3ar)
- [Product.SubscriptionOffer](/documentation/storekit/product/subscriptionoffer)

##### Getting the subscription offer identifier

- [let id: String?](/documentation/storekit/product/subscriptionoffer/id)

##### Getting the subscription offer type

- [let type: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/type)
- [Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype)

###### Getting offer types

- [static let introductory: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype/introductory)
- [static let promotional: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype/promotional)
- [static let winBack: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype/winback)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptionoffer/offertype/localizeddescription)

##### Getting price information

- [let displayPrice: String](/documentation/storekit/product/subscriptionoffer/displayprice)
- [let price: Decimal](/documentation/storekit/product/subscriptionoffer/price)
- [let paymentMode: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.property)
- [Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct)

###### Getting the payment modes

- [static let freeTrial: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/freetrial)
- [static let payAsYouGo: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/payasyougo)
- [static let payUpFront: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/payupfront)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/localizeddescription)

##### Getting the subscription duration

- [let period: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionoffer/period)
- [let periodCount: Int](/documentation/storekit/product/subscriptionoffer/periodcount)

##### Creating a subscription offer signature

- [Product.SubscriptionOffer.Signature](/documentation/storekit/product/subscriptionoffer/signature)

###### Creating subscription offer signatures

- [init(keyID: String, nonce: UUID, timestamp: Int, signature: Data)](/documentation/storekit/product/subscriptionoffer/signature/init(keyid:nonce:timestamp:signature:))

###### Getting signature elements

- [var keyID: String](/documentation/storekit/product/subscriptionoffer/signature/keyid)
- [var nonce: UUID](/documentation/storekit/product/subscriptionoffer/signature/nonce)
- [var signature: Data](/documentation/storekit/product/subscriptionoffer/signature/signature)
- [var timestamp: Int](/documentation/storekit/product/subscriptionoffer/signature/timestamp)
- [Product.SubscriptionInfo.Status](/documentation/storekit/product/subscriptioninfo/status-swift.struct)

##### Monitoring subscription status changes

- [static var updates: Product.SubscriptionInfo.Status.Statuses](/documentation/storekit/product/subscriptioninfo/status-swift.struct/updates)
- [static var all: AsyncStream<(groupID: String, statuses: [Product.SubscriptionInfo.Status])>](/documentation/storekit/product/subscriptioninfo/status-swift.struct/all)
- [Product.SubscriptionInfo.Status.Statuses](/documentation/storekit/product/subscriptioninfo/status-swift.struct/statuses)

##### Getting subscription status information

- [let state: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/status-swift.struct/state)
- [let renewalInfo: VerificationResult<Product.SubscriptionInfo.RenewalInfo>](/documentation/storekit/product/subscriptioninfo/status-swift.struct/renewalinfo)
- [let transaction: VerificationResult<Transaction>](/documentation/storekit/product/subscriptioninfo/status-swift.struct/transaction)
- [Product.SubscriptionInfo.RenewalInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo)

###### Getting the environment

- [let environment: AppStore.Environment](/documentation/storekit/product/subscriptioninfo/renewalinfo/environment)

###### Getting the transaction ID

- [let originalTransactionID: UInt64](/documentation/storekit/product/subscriptioninfo/renewalinfo/originaltransactionid)

###### Identifying the account

- [var appAccountToken: UUID?](/documentation/storekit/product/subscriptioninfo/renewalinfo/appaccounttoken)
- [var appTransactionID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/apptransactionid)

###### Getting the product ID

- [let currentProductID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/currentproductid)

###### Getting subscription dates

- [var recentSubscriptionStartDate: Date](/documentation/storekit/product/subscriptioninfo/renewalinfo/recentsubscriptionstartdate)
- [var renewalDate: Date?](/documentation/storekit/product/subscriptioninfo/renewalinfo/renewaldate)

###### Getting the renewal or expiration state

- [let state: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/status-swift.struct/state)
- [let autoRenewPreference: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/autorenewpreference)
- [let willAutoRenew: Bool](/documentation/storekit/product/subscriptioninfo/renewalinfo/willautorenew)
- [let expirationReason: Product.SubscriptionInfo.RenewalInfo.ExpirationReason?](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct)

###### Getting the expiration reason

- [static let autoRenewDisabled: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/autorenewdisabled)
- [static let billingError: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/billingerror)
- [static let didNotConsentToPriceIncrease: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/didnotconsenttopriceincrease)
- [static let productUnavailable: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/productunavailable)
- [static let unknown: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/unknown)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/localizeddescription)

###### Getting offers

- [let offer: Transaction.Offer?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offer)
- [Transaction.Offer](/documentation/storekit/transaction/offer-swift.struct)

###### Getting offer details

- [let id: String?](/documentation/storekit/transaction/offer-swift.struct/id)
- [let type: Transaction.OfferType](/documentation/storekit/transaction/offer-swift.struct/type)
- [Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct)

###### Getting offer types

- [static let introductory: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/introductory)
- [static let promotional: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/promotional)
- [static let code: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/code)
- [static var winBack: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/winback)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/transaction/offertype-swift.struct/localizeddescription)
- [let paymentMode: Transaction.Offer.PaymentMode?](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.property)
- [Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct)

###### Getting payment modes

- [static let freeTrial: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/freetrial)
- [static let payAsYouGo: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payasyougo)
- [static let payUpFront: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payupfront)
- [static var oneTime: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/onetime)
- [let period: Product.SubscriptionPeriod?](/documentation/storekit/transaction/offer-swift.struct/period)
- [let eligibleWinBackOfferIDs: [String]](/documentation/storekit/product/subscriptioninfo/renewalinfo/eligiblewinbackofferids)

###### Getting the renewal price and currency

- [var renewalPrice: Decimal?](/documentation/storekit/product/subscriptioninfo/renewalinfo/renewalprice)
- [var currency: Locale.Currency?](/documentation/storekit/product/subscriptioninfo/renewalinfo/currency)

###### Getting billing status

- [let isInBillingRetry: Bool](/documentation/storekit/product/subscriptioninfo/renewalinfo/isinbillingretry)
- [let gracePeriodExpirationDate: Date?](/documentation/storekit/product/subscriptioninfo/renewalinfo/graceperiodexpirationdate)

###### Getting the price increase status

- [Managing Price Increases for Auto-Renewable Subscriptions](/documentation/storekit/managing-price-increases-for-auto-renewable-subscriptions)
- [let priceIncreaseStatus: Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum)

###### Getting Price Increase Status

- [case noIncreasePending](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/noincreasepending)
- [case agreed](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/agreed)
- [case pending](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/pending)

###### Getting a Localized Description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/localizeddescription)

###### Verifying subscription renewal information

- [let deviceVerification: Data](/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverification)
- [let deviceVerificationNonce: UUID](/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverificationnonce)
- [let signedDate: Date](/documentation/storekit/product/subscriptioninfo/renewalinfo/signeddate)

###### Getting subscription renewal info in JSON format

- [var jsonRepresentation: Data](/documentation/storekit/product/subscriptioninfo/renewalinfo/jsonrepresentation)

###### Getting renewal information for Advanced Commerce API

- [let advancedCommerceInfo: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo?](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item)

###### Instance Properties

- [let details: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.Details](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/details-swift.property)
- [let priceIncreaseInfo: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo?](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.property)

###### Type Aliases

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.Details](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/details-swift.typealias)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct)

###### Information about a price increase

- [let dependentSKUs: [String]](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/dependentskus)
- [let price: Decimal](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/price)
- [let status: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.property)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct)

###### Price increase status values

- [static let pending: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/pending)
- [static let accepted: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/accepted)
- [static let scheduled: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/scheduled)

###### Instance Properties

- [let consistencyToken: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/consistencytoken)
- [let description: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/description)
- [let displayName: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/displayname)
- [let items: [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item]](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/items)
- [let period: SubscriptionPeriod](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/period)
- [let requestReferenceID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/requestreferenceid)
- [let taxCode: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/taxcode)

###### Deprecated

- [var environmentStringRepresentation: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/environmentstringrepresentation)
- [var offerID: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerid)
- [var offerType: Transaction.OfferType?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offertype)
- [var currencyCode: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/currencycode)
- [var offerPaymentModeStringRepresentation: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerpaymentmodestringrepresentation)
- [var offerPeriodStringRepresentation: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerperiodstringrepresentation)
- [Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate)

###### Getting the renewal state

- [static let subscribed: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/subscribed)
- [static let expired: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/expired)
- [static let inBillingRetryPeriod: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/inbillingretryperiod)
- [static let inGracePeriod: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/ingraceperiod)
- [static let revoked: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/revoked)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalstate/localizeddescription)

#### Getting product identifiers and type

- [let id: String](/documentation/storekit/product/id)
- [let type: Product.ProductType](/documentation/storekit/product/type)
- [Product.ProductType](/documentation/storekit/product/producttype)

##### Getting the Product Type

- [static let consumable: Product.ProductType](/documentation/storekit/product/producttype/consumable)
- [static let nonConsumable: Product.ProductType](/documentation/storekit/product/producttype/nonconsumable)
- [static let nonRenewable: Product.ProductType](/documentation/storekit/product/producttype/nonrenewable)
- [static let autoRenewable: Product.ProductType](/documentation/storekit/product/producttype/autorenewable)

##### Getting a Localized Description

- [var localizedDescription: String](/documentation/storekit/product/producttype/localizeddescription)

#### Getting Family Sharing status

- [let isFamilyShareable: Bool](/documentation/storekit/product/isfamilyshareable)

#### Managing promoted in-app purchases

- [Product.PromotionInfo](/documentation/storekit/product/promotioninfo)

##### Getting the product ID

- [let productID: Product.ID](/documentation/storekit/product/promotioninfo/productid)

##### Managing promotion order

- [static func updateProductOrder(byID: some Collection<String>) async throws](/documentation/storekit/product/promotioninfo/updateproductorder(byid:))

##### Getting overridden order

- [static var currentOrder: [Product.PromotionInfo]](/documentation/storekit/product/promotioninfo/currentorder)

##### Managing promotion visibility

- [var visibility: Product.PromotionInfo.Visibility](/documentation/storekit/product/promotioninfo/visibility-swift.property)
- [Product.PromotionInfo.Visibility](/documentation/storekit/product/promotioninfo/visibility-swift.enum)

###### Getting visibility states

- [case appStoreConnectDefault](/documentation/storekit/product/promotioninfo/visibility-swift.enum/appstoreconnectdefault)
- [case hidden](/documentation/storekit/product/promotioninfo/visibility-swift.enum/hidden)
- [case visible](/documentation/storekit/product/promotioninfo/visibility-swift.enum/visible)
- [static func updateProductVisibility(Product.PromotionInfo.Visibility, for: Product.ID) async throws](/documentation/storekit/product/promotioninfo/updateproductvisibility(_:for:))

##### Updating order and visibility

- [func update() async throws](/documentation/storekit/product/promotioninfo/update())
- [static func updateAll(some Collection<Product.PromotionInfo>) async throws](/documentation/storekit/product/promotioninfo/updateall(_:))

#### Loading products

- [Product.CollectionTaskState](/documentation/storekit/product/collectiontaskstate)

##### Collection task states

- [case loading](/documentation/storekit/product/collectiontaskstate/loading)
- [case success([Product], unavailable: [Product.ID])](/documentation/storekit/product/collectiontaskstate/success(_:unavailable:))
- [case failure(any Error)](/documentation/storekit/product/collectiontaskstate/failure(_:))

##### Instance Properties

- [var products: [Product]?](/documentation/storekit/product/collectiontaskstate/products)
- [Product.TaskState](/documentation/storekit/product/taskstate)

##### Task states

- [case loading](/documentation/storekit/product/taskstate/loading)
- [case success(Product)](/documentation/storekit/product/taskstate/success(_:))
- [case unavailable](/documentation/storekit/product/taskstate/unavailable)
- [case failure(any Error)](/documentation/storekit/product/taskstate/failure(_:))

##### Instance Properties

- [var product: Product?](/documentation/storekit/product/taskstate/product)

#### Getting product info in JSON format

- [var jsonRepresentation: Data](/documentation/storekit/product/jsonrepresentation)

#### Getting subscription relationship

- [Product.SubscriptionRelationship](/documentation/storekit/product/subscriptionrelationship)

##### Getting subscription relationships

- [static let all: Product.SubscriptionRelationship](/documentation/storekit/product/subscriptionrelationship/all)
- [static let crossgrade: Product.SubscriptionRelationship](/documentation/storekit/product/subscriptionrelationship/crossgrade)
- [static let current: Product.SubscriptionRelationship](/documentation/storekit/product/subscriptionrelationship/current)
- [static let downgrade: Product.SubscriptionRelationship](/documentation/storekit/product/subscriptionrelationship/downgrade)
- [static let upgrade: Product.SubscriptionRelationship](/documentation/storekit/product/subscriptionrelationship/upgrade)

#### Deprecated

- [var currentEntitlement: VerificationResult<Transaction>?](/documentation/storekit/product/currententitlement)
- [Product.SubscriptionInfo](/documentation/storekit/product/subscriptioninfo)

#### Determining the subscription status

- [var status: [Product.SubscriptionInfo.Status]](/documentation/storekit/product/subscriptioninfo/status-swift.property)
- [static func status(for: String) async throws -> [Product.SubscriptionInfo.Status]](/documentation/storekit/product/subscriptioninfo/status(for:))
- [static func status(transactionID: UInt64) async throws -> SubscriptionStatus?](/documentation/storekit/product/subscriptioninfo/status(transactionid:))
- [Product.SubscriptionInfo.Status](/documentation/storekit/product/subscriptioninfo/status-swift.struct)

##### Monitoring subscription status changes

- [static var updates: Product.SubscriptionInfo.Status.Statuses](/documentation/storekit/product/subscriptioninfo/status-swift.struct/updates)
- [static var all: AsyncStream<(groupID: String, statuses: [Product.SubscriptionInfo.Status])>](/documentation/storekit/product/subscriptioninfo/status-swift.struct/all)
- [Product.SubscriptionInfo.Status.Statuses](/documentation/storekit/product/subscriptioninfo/status-swift.struct/statuses)

##### Getting subscription status information

- [let state: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/status-swift.struct/state)
- [let renewalInfo: VerificationResult<Product.SubscriptionInfo.RenewalInfo>](/documentation/storekit/product/subscriptioninfo/status-swift.struct/renewalinfo)
- [let transaction: VerificationResult<Transaction>](/documentation/storekit/product/subscriptioninfo/status-swift.struct/transaction)
- [Product.SubscriptionInfo.RenewalInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo)

###### Getting the environment

- [let environment: AppStore.Environment](/documentation/storekit/product/subscriptioninfo/renewalinfo/environment)

###### Getting the transaction ID

- [let originalTransactionID: UInt64](/documentation/storekit/product/subscriptioninfo/renewalinfo/originaltransactionid)

###### Identifying the account

- [var appAccountToken: UUID?](/documentation/storekit/product/subscriptioninfo/renewalinfo/appaccounttoken)
- [var appTransactionID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/apptransactionid)

###### Getting the product ID

- [let currentProductID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/currentproductid)

###### Getting subscription dates

- [var recentSubscriptionStartDate: Date](/documentation/storekit/product/subscriptioninfo/renewalinfo/recentsubscriptionstartdate)
- [var renewalDate: Date?](/documentation/storekit/product/subscriptioninfo/renewalinfo/renewaldate)

###### Getting the renewal or expiration state

- [let state: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/status-swift.struct/state)
- [let autoRenewPreference: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/autorenewpreference)
- [let willAutoRenew: Bool](/documentation/storekit/product/subscriptioninfo/renewalinfo/willautorenew)
- [let expirationReason: Product.SubscriptionInfo.RenewalInfo.ExpirationReason?](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct)

###### Getting the expiration reason

- [static let autoRenewDisabled: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/autorenewdisabled)
- [static let billingError: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/billingerror)
- [static let didNotConsentToPriceIncrease: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/didnotconsenttopriceincrease)
- [static let productUnavailable: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/productunavailable)
- [static let unknown: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/unknown)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/localizeddescription)

###### Getting offers

- [let offer: Transaction.Offer?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offer)
- [Transaction.Offer](/documentation/storekit/transaction/offer-swift.struct)

###### Getting offer details

- [let id: String?](/documentation/storekit/transaction/offer-swift.struct/id)
- [let type: Transaction.OfferType](/documentation/storekit/transaction/offer-swift.struct/type)
- [Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct)

###### Getting offer types

- [static let introductory: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/introductory)
- [static let promotional: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/promotional)
- [static let code: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/code)
- [static var winBack: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/winback)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/transaction/offertype-swift.struct/localizeddescription)
- [let paymentMode: Transaction.Offer.PaymentMode?](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.property)
- [Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct)

###### Getting payment modes

- [static let freeTrial: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/freetrial)
- [static let payAsYouGo: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payasyougo)
- [static let payUpFront: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payupfront)
- [static var oneTime: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/onetime)
- [let period: Product.SubscriptionPeriod?](/documentation/storekit/transaction/offer-swift.struct/period)
- [let eligibleWinBackOfferIDs: [String]](/documentation/storekit/product/subscriptioninfo/renewalinfo/eligiblewinbackofferids)

###### Getting the renewal price and currency

- [var renewalPrice: Decimal?](/documentation/storekit/product/subscriptioninfo/renewalinfo/renewalprice)
- [var currency: Locale.Currency?](/documentation/storekit/product/subscriptioninfo/renewalinfo/currency)

###### Getting billing status

- [let isInBillingRetry: Bool](/documentation/storekit/product/subscriptioninfo/renewalinfo/isinbillingretry)
- [let gracePeriodExpirationDate: Date?](/documentation/storekit/product/subscriptioninfo/renewalinfo/graceperiodexpirationdate)

###### Getting the price increase status

- [Managing Price Increases for Auto-Renewable Subscriptions](/documentation/storekit/managing-price-increases-for-auto-renewable-subscriptions)
- [let priceIncreaseStatus: Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum)

###### Getting Price Increase Status

- [case noIncreasePending](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/noincreasepending)
- [case agreed](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/agreed)
- [case pending](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/pending)

###### Getting a Localized Description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/localizeddescription)

###### Verifying subscription renewal information

- [let deviceVerification: Data](/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverification)
- [let deviceVerificationNonce: UUID](/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverificationnonce)
- [let signedDate: Date](/documentation/storekit/product/subscriptioninfo/renewalinfo/signeddate)

###### Getting subscription renewal info in JSON format

- [var jsonRepresentation: Data](/documentation/storekit/product/subscriptioninfo/renewalinfo/jsonrepresentation)

###### Getting renewal information for Advanced Commerce API

- [let advancedCommerceInfo: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo?](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item)

###### Instance Properties

- [let details: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.Details](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/details-swift.property)
- [let priceIncreaseInfo: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo?](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.property)

###### Type Aliases

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.Details](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/details-swift.typealias)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct)

###### Information about a price increase

- [let dependentSKUs: [String]](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/dependentskus)
- [let price: Decimal](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/price)
- [let status: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.property)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct)

###### Price increase status values

- [static let pending: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/pending)
- [static let accepted: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/accepted)
- [static let scheduled: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/scheduled)

###### Instance Properties

- [let consistencyToken: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/consistencytoken)
- [let description: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/description)
- [let displayName: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/displayname)
- [let items: [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item]](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/items)
- [let period: SubscriptionPeriod](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/period)
- [let requestReferenceID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/requestreferenceid)
- [let taxCode: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/taxcode)

###### Deprecated

- [var environmentStringRepresentation: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/environmentstringrepresentation)
- [var offerID: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerid)
- [var offerType: Transaction.OfferType?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offertype)
- [var currencyCode: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/currencycode)
- [var offerPaymentModeStringRepresentation: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerpaymentmodestringrepresentation)
- [var offerPeriodStringRepresentation: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerperiodstringrepresentation)
- [Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate)

###### Getting the renewal state

- [static let subscribed: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/subscribed)
- [static let expired: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/expired)
- [static let inBillingRetryPeriod: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/inbillingretryperiod)
- [static let inGracePeriod: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/ingraceperiod)
- [static let revoked: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/revoked)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalstate/localizeddescription)

#### Identifying the subscription group

- [let subscriptionGroupID: String](/documentation/storekit/product/subscriptioninfo/subscriptiongroupid)
- [var groupDisplayName: String](/documentation/storekit/product/subscriptioninfo/groupdisplayname)
- [var groupLevel: Int](/documentation/storekit/product/subscriptioninfo/grouplevel)

#### Getting the subscription period

- [let subscriptionPeriod: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptioninfo/subscriptionperiod)
- [Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod)

##### Getting the subscription period

- [let value: Int](/documentation/storekit/product/subscriptionperiod/value)
- [let unit: Product.SubscriptionPeriod.Unit](/documentation/storekit/product/subscriptionperiod/unit-swift.property)
- [Product.SubscriptionPeriod.Unit](/documentation/storekit/product/subscriptionperiod/unit-swift.enum)

###### Getting the subscription period units

- [case day](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/day)
- [case month](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/month)
- [case week](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/week)
- [case year](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/year)

###### Getting localized and debug descriptions

- [var localizedDescription: String](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/localizeddescription)

###### Getting the formatted description

- [func formatted<S>(S) -> S.FormatOutput](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/formatted(_:))
- [Product.SubscriptionPeriod.Unit.FormatStyle](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/formatstyle)

###### Formatting subscription period units

- [func format(Product.SubscriptionPeriod.Unit) -> String](/documentation/storekit/product/subscriptionperiod/unit-swift.enum/formatstyle/format(_:))

##### Getting the period date range

- [func dateRange(referenceDate: Date) -> Range<Date>](/documentation/storekit/product/subscriptionperiod/daterange(referencedate:))

##### Getting subscription periods

- [static var everySixMonths: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/everysixmonths)
- [static var everyThreeDays: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/everythreedays)
- [static var everyThreeMonths: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/everythreemonths)
- [static var everyTwoMonths: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/everytwomonths)
- [static var everyTwoWeeks: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/everytwoweeks)
- [static var monthly: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/monthly)
- [static var weekly: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/weekly)
- [static var yearly: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionperiod/yearly)

##### Formatting the subscription period

- [func formatted<S>(S, referenceDate: Date) -> S.FormatOutput](/documentation/storekit/product/subscriptionperiod/formatted(_:referencedate:)-3t7wd)
- [func formatted<S>(S, referenceDate: Date) -> S.FormatOutput](/documentation/storekit/product/subscriptionperiod/formatted(_:referencedate:)-8s3ar)

#### Getting introductory offer details

- [var isEligibleForIntroOffer: Bool](/documentation/storekit/product/subscriptioninfo/iseligibleforintrooffer)
- [static func isEligibleForIntroOffer(for: String) async -> Bool](/documentation/storekit/product/subscriptioninfo/iseligibleforintrooffer(for:))
- [let introductoryOffer: Product.SubscriptionOffer?](/documentation/storekit/product/subscriptioninfo/introductoryoffer)
- [Product.SubscriptionOffer](/documentation/storekit/product/subscriptionoffer)

##### Getting the subscription offer identifier

- [let id: String?](/documentation/storekit/product/subscriptionoffer/id)

##### Getting the subscription offer type

- [let type: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/type)
- [Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype)

###### Getting offer types

- [static let introductory: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype/introductory)
- [static let promotional: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype/promotional)
- [static let winBack: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype/winback)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptionoffer/offertype/localizeddescription)

##### Getting price information

- [let displayPrice: String](/documentation/storekit/product/subscriptionoffer/displayprice)
- [let price: Decimal](/documentation/storekit/product/subscriptionoffer/price)
- [let paymentMode: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.property)
- [Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct)

###### Getting the payment modes

- [static let freeTrial: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/freetrial)
- [static let payAsYouGo: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/payasyougo)
- [static let payUpFront: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/payupfront)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/localizeddescription)

##### Getting the subscription duration

- [let period: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionoffer/period)
- [let periodCount: Int](/documentation/storekit/product/subscriptionoffer/periodcount)

##### Creating a subscription offer signature

- [Product.SubscriptionOffer.Signature](/documentation/storekit/product/subscriptionoffer/signature)

###### Creating subscription offer signatures

- [init(keyID: String, nonce: UUID, timestamp: Int, signature: Data)](/documentation/storekit/product/subscriptionoffer/signature/init(keyid:nonce:timestamp:signature:))

###### Getting signature elements

- [var keyID: String](/documentation/storekit/product/subscriptionoffer/signature/keyid)
- [var nonce: UUID](/documentation/storekit/product/subscriptionoffer/signature/nonce)
- [var signature: Data](/documentation/storekit/product/subscriptionoffer/signature/signature)
- [var timestamp: Int](/documentation/storekit/product/subscriptionoffer/signature/timestamp)

#### Getting win-back offer details

- [let winBackOffers: [Product.SubscriptionOffer]](/documentation/storekit/product/subscriptioninfo/winbackoffers)

#### Getting promotional offer details

- [let promotionalOffers: [Product.SubscriptionOffer]](/documentation/storekit/product/subscriptioninfo/promotionaloffers)

#### Getting subscription renewal information

- [Product.SubscriptionInfo.RenewalInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo)

##### Getting the environment

- [let environment: AppStore.Environment](/documentation/storekit/product/subscriptioninfo/renewalinfo/environment)

##### Getting the transaction ID

- [let originalTransactionID: UInt64](/documentation/storekit/product/subscriptioninfo/renewalinfo/originaltransactionid)

##### Identifying the account

- [var appAccountToken: UUID?](/documentation/storekit/product/subscriptioninfo/renewalinfo/appaccounttoken)
- [var appTransactionID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/apptransactionid)

##### Getting the product ID

- [let currentProductID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/currentproductid)

##### Getting subscription dates

- [var recentSubscriptionStartDate: Date](/documentation/storekit/product/subscriptioninfo/renewalinfo/recentsubscriptionstartdate)
- [var renewalDate: Date?](/documentation/storekit/product/subscriptioninfo/renewalinfo/renewaldate)

##### Getting the renewal or expiration state

- [let state: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/status-swift.struct/state)
- [let autoRenewPreference: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/autorenewpreference)
- [let willAutoRenew: Bool](/documentation/storekit/product/subscriptioninfo/renewalinfo/willautorenew)
- [let expirationReason: Product.SubscriptionInfo.RenewalInfo.ExpirationReason?](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct)

###### Getting the expiration reason

- [static let autoRenewDisabled: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/autorenewdisabled)
- [static let billingError: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/billingerror)
- [static let didNotConsentToPriceIncrease: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/didnotconsenttopriceincrease)
- [static let productUnavailable: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/productunavailable)
- [static let unknown: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/unknown)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/localizeddescription)

##### Getting offers

- [let offer: Transaction.Offer?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offer)
- [Transaction.Offer](/documentation/storekit/transaction/offer-swift.struct)

###### Getting offer details

- [let id: String?](/documentation/storekit/transaction/offer-swift.struct/id)
- [let type: Transaction.OfferType](/documentation/storekit/transaction/offer-swift.struct/type)
- [Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct)

###### Getting offer types

- [static let introductory: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/introductory)
- [static let promotional: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/promotional)
- [static let code: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/code)
- [static var winBack: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/winback)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/transaction/offertype-swift.struct/localizeddescription)
- [let paymentMode: Transaction.Offer.PaymentMode?](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.property)
- [Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct)

###### Getting payment modes

- [static let freeTrial: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/freetrial)
- [static let payAsYouGo: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payasyougo)
- [static let payUpFront: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payupfront)
- [static var oneTime: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/onetime)
- [let period: Product.SubscriptionPeriod?](/documentation/storekit/transaction/offer-swift.struct/period)
- [let eligibleWinBackOfferIDs: [String]](/documentation/storekit/product/subscriptioninfo/renewalinfo/eligiblewinbackofferids)

##### Getting the renewal price and currency

- [var renewalPrice: Decimal?](/documentation/storekit/product/subscriptioninfo/renewalinfo/renewalprice)
- [var currency: Locale.Currency?](/documentation/storekit/product/subscriptioninfo/renewalinfo/currency)

##### Getting billing status

- [let isInBillingRetry: Bool](/documentation/storekit/product/subscriptioninfo/renewalinfo/isinbillingretry)
- [let gracePeriodExpirationDate: Date?](/documentation/storekit/product/subscriptioninfo/renewalinfo/graceperiodexpirationdate)

##### Getting the price increase status

- [Managing Price Increases for Auto-Renewable Subscriptions](/documentation/storekit/managing-price-increases-for-auto-renewable-subscriptions)
- [let priceIncreaseStatus: Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum)

###### Getting Price Increase Status

- [case noIncreasePending](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/noincreasepending)
- [case agreed](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/agreed)
- [case pending](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/pending)

###### Getting a Localized Description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/localizeddescription)

##### Verifying subscription renewal information

- [let deviceVerification: Data](/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverification)
- [let deviceVerificationNonce: UUID](/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverificationnonce)
- [let signedDate: Date](/documentation/storekit/product/subscriptioninfo/renewalinfo/signeddate)

##### Getting subscription renewal info in JSON format

- [var jsonRepresentation: Data](/documentation/storekit/product/subscriptioninfo/renewalinfo/jsonrepresentation)

##### Getting renewal information for Advanced Commerce API

- [let advancedCommerceInfo: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo?](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item)

###### Instance Properties

- [let details: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.Details](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/details-swift.property)
- [let priceIncreaseInfo: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo?](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.property)

###### Type Aliases

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.Details](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/details-swift.typealias)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct)

###### Information about a price increase

- [let dependentSKUs: [String]](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/dependentskus)
- [let price: Decimal](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/price)
- [let status: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.property)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct)

###### Price increase status values

- [static let pending: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/pending)
- [static let accepted: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/accepted)
- [static let scheduled: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/scheduled)

###### Instance Properties

- [let consistencyToken: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/consistencytoken)
- [let description: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/description)
- [let displayName: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/displayname)
- [let items: [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item]](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/items)
- [let period: SubscriptionPeriod](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/period)
- [let requestReferenceID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/requestreferenceid)
- [let taxCode: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/taxcode)

##### Deprecated

- [var environmentStringRepresentation: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/environmentstringrepresentation)
- [var offerID: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerid)
- [var offerType: Transaction.OfferType?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offertype)
- [var currencyCode: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/currencycode)
- [var offerPaymentModeStringRepresentation: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerpaymentmodestringrepresentation)
- [var offerPeriodStringRepresentation: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerperiodstringrepresentation)
- [Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate)

##### Getting the renewal state

- [static let subscribed: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/subscribed)
- [static let expired: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/expired)
- [static let inBillingRetryPeriod: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/inbillingretryperiod)
- [static let inGracePeriod: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/ingraceperiod)
- [static let revoked: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/revoked)

##### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalstate/localizeddescription)
- [SubscriptionInfo](/documentation/storekit/subscriptioninfo)
- [SubscriptionStatus](/documentation/storekit/subscriptionstatus)

### Purchase requests and results

- [PurchaseAction](/documentation/storekit/purchaseaction)

#### Calling the action

- [func callAsFunction(Product, options: Set<Product.PurchaseOption>) async throws -> Product.PurchaseResult](/documentation/storekit/purchaseaction/callasfunction(_:options:))

#### Instance Methods

- [func callAsFunction(AdvancedCommerceProduct, compactJWS: String, options: Set<AdvancedCommerceProduct.PurchaseOption>) async throws -> AdvancedCommerceProduct.PurchaseResult](/documentation/storekit/purchaseaction/callasfunction(_:compactjws:options:))
- [func purchase(options: Set<Product.PurchaseOption>) async throws -> Product.PurchaseResult](/documentation/storekit/product/purchase(options:))
- [Product.PurchaseResult](/documentation/storekit/product/purchaseresult)

#### Getting the Purchase Results

- [case success(VerificationResult<Transaction>)](/documentation/storekit/product/purchaseresult/success(_:))
- [case userCancelled](/documentation/storekit/product/purchaseresult/usercancelled)
- [case pending](/documentation/storekit/product/purchaseresult/pending)

### Transaction history and entitlements

- [Transaction](/documentation/storekit/transaction)

#### Transaction properties

- [Transaction properties](/documentation/storekit/transaction-properties)

##### Getting the environment and storefront

- [let environment: AppStore.Environment](/documentation/storekit/transaction/environment)
- [let storefront: Storefront](/documentation/storekit/transaction/storefront)

##### Getting the original transaction identifier

- [let originalID: UInt64](/documentation/storekit/transaction/originalid)
- [let originalPurchaseDate: Date](/documentation/storekit/transaction/originalpurchasedate)

##### Identifying a transaction

- [let id: UInt64](/documentation/storekit/transaction/id)
- [let webOrderLineItemID: String?](/documentation/storekit/transaction/weborderlineitemid)

##### Identifying the app and product

- [let appBundleID: String](/documentation/storekit/transaction/appbundleid)
- [let productID: String](/documentation/storekit/transaction/productid)
- [let productType: Product.ProductType](/documentation/storekit/transaction/producttype)
- [let subscriptionGroupID: String?](/documentation/storekit/transaction/subscriptiongroupid)

##### Getting purchase and expiration dates

- [let purchaseDate: Date](/documentation/storekit/transaction/purchasedate)
- [let expirationDate: Date?](/documentation/storekit/transaction/expirationdate)

##### Getting the product price and currency

- [var price: Decimal?](/documentation/storekit/transaction/price)
- [var currency: Locale.Currency?](/documentation/storekit/transaction/currency)

##### Getting purchase details

- [let isUpgraded: Bool](/documentation/storekit/transaction/isupgraded)
- [let ownershipType: Transaction.OwnershipType](/documentation/storekit/transaction/ownershiptype-swift.property)
- [Transaction.OwnershipType](/documentation/storekit/transaction/ownershiptype-swift.struct)

###### Getting ownership types

- [static let familyShared: Transaction.OwnershipType](/documentation/storekit/transaction/ownershiptype-swift.struct/familyshared)
- [static let purchased: Transaction.OwnershipType](/documentation/storekit/transaction/ownershiptype-swift.struct/purchased)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/transaction/ownershiptype-swift.struct/localizeddescription)
- [let purchasedQuantity: Int](/documentation/storekit/transaction/purchasedquantity)

##### Getting subscription status

- [var subscriptionStatus: Product.SubscriptionInfo.Status?](/documentation/storekit/transaction/subscriptionstatus)

##### Getting transaction reason

- [let reason: Transaction.Reason](/documentation/storekit/transaction/reason-swift.property)
- [Transaction.Reason](/documentation/storekit/transaction/reason-swift.struct)

###### Transaction reasons

- [static let purchase: Transaction.Reason](/documentation/storekit/transaction/reason-swift.struct/purchase)
- [static let renewal: Transaction.Reason](/documentation/storekit/transaction/reason-swift.struct/renewal)

##### Identifying offers

- [let offer: Transaction.Offer?](/documentation/storekit/transaction/offer-swift.property)
- [Transaction.Offer](/documentation/storekit/transaction/offer-swift.struct)

###### Getting offer details

- [let id: String?](/documentation/storekit/transaction/offer-swift.struct/id)
- [let type: Transaction.OfferType](/documentation/storekit/transaction/offer-swift.struct/type)
- [Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct)

###### Getting offer types

- [static let introductory: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/introductory)
- [static let promotional: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/promotional)
- [static let code: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/code)
- [static var winBack: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/winback)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/transaction/offertype-swift.struct/localizeddescription)
- [let paymentMode: Transaction.Offer.PaymentMode?](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.property)
- [Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct)

###### Getting payment modes

- [static let freeTrial: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/freetrial)
- [static let payAsYouGo: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payasyougo)
- [static let payUpFront: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payupfront)
- [static var oneTime: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/onetime)
- [let period: Product.SubscriptionPeriod?](/documentation/storekit/transaction/offer-swift.struct/period)

##### Getting revocation status

- [let revocationDate: Date?](/documentation/storekit/transaction/revocationdate)
- [let revocationReason: Transaction.RevocationReason?](/documentation/storekit/transaction/revocationreason-swift.property)
- [Transaction.RevocationReason](/documentation/storekit/transaction/revocationreason-swift.struct)

###### Revocation reasons

- [static let developerIssue: Transaction.RevocationReason](/documentation/storekit/transaction/revocationreason-swift.struct/developerissue)
- [static let other: Transaction.RevocationReason](/documentation/storekit/transaction/revocationreason-swift.struct/other)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/transaction/revocationreason-swift.struct/localizeddescription)

##### Correlating transactions with accounts

- [let appAccountToken: UUID?](/documentation/storekit/transaction/appaccounttoken)

##### Getting the transaction information in JSON format

- [var jsonRepresentation: Data](/documentation/storekit/transaction/jsonrepresentation)

##### Deprecated

- [var currencyCode: String?](/documentation/storekit/transaction/currencycode)
- [var environmentStringRepresentation: String](/documentation/storekit/transaction/environmentstringrepresentation)
- [var offerID: String?](/documentation/storekit/transaction/offerid)
- [var offerPaymentModeStringRepresentation: String?](/documentation/storekit/transaction/offerpaymentmodestringrepresentation)
- [var offerType: Transaction.OfferType?](/documentation/storekit/transaction/offertype-swift.property)
- [var reasonStringRepresentation: String](/documentation/storekit/transaction/reasonstringrepresentation)
- [var storefrontCountryCode: String](/documentation/storekit/transaction/storefrontcountrycode)
- [var appTransactionID: String](/documentation/storekit/transaction/apptransactionid)

#### Monitoring transaction-related changes

- [static var updates: Transaction.Transactions](/documentation/storekit/transaction/updates)
- [Transaction.Transactions](/documentation/storekit/transaction/transactions)

#### Getting transaction history

- [static func latest(for: String) async -> VerificationResult<Transaction>?](/documentation/storekit/transaction/latest(for:))
- [static var all: Transaction.Transactions](/documentation/storekit/transaction/all)
- [static var unfinished: Transaction.Transactions](/documentation/storekit/transaction/unfinished)
- [SKIncludeConsumableInAppPurchaseHistory](/documentation/bundleresources/information-property-list/skincludeconsumableinapppurchasehistory)

#### Getting current entitlements

- [static var currentEntitlements: Transaction.Transactions](/documentation/storekit/transaction/currententitlements)

#### Getting transactions for a product

- [static func all(for: String) -> Transaction.Transactions](/documentation/storekit/transaction/all(for:))

#### Finishing the transaction

- [func finish() async](/documentation/storekit/transaction/finish())
- [static var unfinished: Transaction.Transactions](/documentation/storekit/transaction/unfinished)

#### Verifying transactions

- [let deviceVerification: Data](/documentation/storekit/transaction/deviceverification)
- [let deviceVerificationNonce: UUID](/documentation/storekit/transaction/deviceverificationnonce)
- [let signedDate: Date](/documentation/storekit/transaction/signeddate)

#### Getting transaction info in JSON format

- [var jsonRepresentation: Data](/documentation/storekit/transaction/jsonrepresentation)

#### Requesting refunds

- [Testing refund requests](/documentation/storekit/testing-refund-requests)
- [func beginRefundRequest(in: UIWindowScene) async throws -> Transaction.RefundRequestStatus](/documentation/storekit/transaction/beginrefundrequest(in:)-9k0pj)
- [func beginRefundRequest(in: NSViewController) async throws -> Transaction.RefundRequestStatus](/documentation/storekit/transaction/beginrefundrequest(in:)-63bvd)
- [static func beginRefundRequest(for: UInt64, in: UIWindowScene) async throws -> Transaction.RefundRequestStatus](/documentation/storekit/transaction/beginrefundrequest(for:in:)-65tph)
- [static func beginRefundRequest(for: UInt64, in: NSViewController) async throws -> Transaction.RefundRequestStatus](/documentation/storekit/transaction/beginrefundrequest(for:in:)-9mscy)
- [Transaction.RefundRequestError](/documentation/storekit/transaction/refundrequesterror)

##### Error Enumeration

- [case duplicateRequest](/documentation/storekit/transaction/refundrequesterror/duplicaterequest)
- [case failed](/documentation/storekit/transaction/refundrequesterror/failed)
- [Transaction.RefundRequestStatus](/documentation/storekit/transaction/refundrequeststatus)

##### Getting Refund Request Status

- [case userCancelled](/documentation/storekit/transaction/refundrequeststatus/usercancelled)
- [case success](/documentation/storekit/transaction/refundrequeststatus/success)

#### Advanced Commerce transaction data

- [let advancedCommerceInfo: Transaction.AdvancedCommerceInfo?](/documentation/storekit/transaction/advancedcommerceinfo-swift.property)
- [Transaction.AdvancedCommerceInfo](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct)

##### Structures

- [Transaction.AdvancedCommerceInfo.Item](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/item)

###### Structures

- [Transaction.AdvancedCommerceInfo.Item.Details](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/item/details-swift.struct)

###### Instance Properties

- [let description: String](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/item/details-swift.struct/description)
- [let displayName: String](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/item/details-swift.struct/displayname)
- [let offer: Transaction.AdvancedCommerceInfo.Offer?](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/item/details-swift.struct/offer)
- [let price: Decimal](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/item/details-swift.struct/price)
- [let sku: String](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/item/details-swift.struct/sku)

###### Instance Properties

- [let details: Transaction.AdvancedCommerceInfo.Item.Details](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/item/details-swift.property)
- [let refunds: [Transaction.AdvancedCommerceInfo.Refund]?](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/item/refunds)
- [let revocationDate: Date?](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/item/revocationdate)
- [Transaction.AdvancedCommerceInfo.Offer](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/offer)

###### Structures

- [Transaction.AdvancedCommerceInfo.Offer.Reason](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/offer/reason-swift.struct)

###### Type Properties

- [static let acquisition: Transaction.AdvancedCommerceInfo.Offer.Reason](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/offer/reason-swift.struct/acquisition)
- [static let retention: Transaction.AdvancedCommerceInfo.Offer.Reason](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/offer/reason-swift.struct/retention)
- [static let winBack: Transaction.AdvancedCommerceInfo.Offer.Reason](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/offer/reason-swift.struct/winback)

###### Instance Properties

- [let period: SubscriptionPeriod](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/offer/period)
- [let periodCount: Int](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/offer/periodcount)
- [let price: Decimal](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/offer/price)
- [let reason: Transaction.AdvancedCommerceInfo.Offer.Reason](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/offer/reason-swift.property)
- [Transaction.AdvancedCommerceInfo.Refund](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund)

###### Structures

- [Transaction.AdvancedCommerceInfo.Refund.Reason](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/reason-swift.struct)

###### Type Properties

- [static let legal: Transaction.AdvancedCommerceInfo.Refund.Reason](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/reason-swift.struct/legal)
- [static let modifyItems: Transaction.AdvancedCommerceInfo.Refund.Reason](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/reason-swift.struct/modifyitems)
- [static let other: Transaction.AdvancedCommerceInfo.Refund.Reason](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/reason-swift.struct/other)
- [static let unfulfilled: Transaction.AdvancedCommerceInfo.Refund.Reason](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/reason-swift.struct/unfulfilled)
- [static let unintended: Transaction.AdvancedCommerceInfo.Refund.Reason](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/reason-swift.struct/unintended)
- [static let unsatisfied: Transaction.AdvancedCommerceInfo.Refund.Reason](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/reason-swift.struct/unsatisfied)
- [Transaction.AdvancedCommerceInfo.Refund.RefundType](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/refundtype)

###### Type Properties

- [static let custom: Transaction.AdvancedCommerceInfo.Refund.RefundType](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/refundtype/custom)
- [static let full: Transaction.AdvancedCommerceInfo.Refund.RefundType](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/refundtype/full)
- [static let proRated: Transaction.AdvancedCommerceInfo.Refund.RefundType](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/refundtype/prorated)

###### Instance Properties

- [let amount: Decimal](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/amount)
- [let date: Date](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/date)
- [let reason: Transaction.AdvancedCommerceInfo.Refund.Reason](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/reason-swift.property)
- [let type: Transaction.AdvancedCommerceInfo.Refund.RefundType](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/type)

##### Instance Properties

- [let description: String?](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/description)
- [let displayName: String?](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/displayname)
- [let estimatedTax: Decimal](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/estimatedtax)
- [let items: [Transaction.AdvancedCommerceInfo.Item]](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/items)
- [let period: SubscriptionPeriod?](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/period)
- [let requestReferenceID: String](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/requestreferenceid)
- [let taxCode: String](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/taxcode)
- [let taxExclusivePrice: Decimal](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/taxexclusiveprice)
- [let taxRate: Decimal](/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/taxrate)

#### Getting offer types

- [Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct)

##### Getting offer types

- [static let introductory: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/introductory)
- [static let promotional: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/promotional)
- [static let code: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/code)
- [static var winBack: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/winback)

##### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/transaction/offertype-swift.struct/localizeddescription)

#### Deprecated

- [static func currentEntitlement(for: String) async -> VerificationResult<Transaction>?](/documentation/storekit/transaction/currententitlement(for:))
- [static func currentEntitlements(for: String) -> Transaction.Transactions](/documentation/storekit/transaction/currententitlements(for:))
- [var offerPeriodStringRepresentation: String?](/documentation/storekit/transaction/offerperiodstringrepresentation)

#### Structures

- [Transaction.RevocationType](/documentation/storekit/transaction/revocationtype-swift.struct) **Beta**

##### Type Properties

- [static let familyRevocation: Transaction.RevocationType](/documentation/storekit/transaction/revocationtype-swift.struct/familyrevocation) **Beta**
- [static let fullRefund: Transaction.RevocationType](/documentation/storekit/transaction/revocationtype-swift.struct/fullrefund) **Beta**
- [static let proratedRefund: Transaction.RevocationType](/documentation/storekit/transaction/revocationtype-swift.struct/proratedrefund) **Beta**

#### Instance Properties

- [var revocationPercentage: Decimal?](/documentation/storekit/transaction/revocationpercentage)
- [let revocationType: Transaction.RevocationType?](/documentation/storekit/transaction/revocationtype-swift.property) **Beta**
- [var revocationTypeStringRepresentation: String?](/documentation/storekit/transaction/revocationtypestringrepresentation)
- [static var updates: Transaction.Transactions](/documentation/storekit/transaction/updates)
- [static var all: Transaction.Transactions](/documentation/storekit/transaction/all)
- [static var currentEntitlements: Transaction.Transactions](/documentation/storekit/transaction/currententitlements)

### JWS verification

- [VerificationResult](/documentation/storekit/verificationresult)

#### Getting the verification results

- [case verified(SignedType)](/documentation/storekit/verificationresult/verified(_:))
- [case unverified(SignedType, VerificationResult<SignedType>.VerificationError)](/documentation/storekit/verificationresult/unverified(_:_:))
- [var payloadValue: SignedType](/documentation/storekit/verificationresult/payloadvalue)
- [var unsafePayloadValue: SignedType](/documentation/storekit/verificationresult/unsafepayloadvalue)
- [VerificationResult.VerificationError](/documentation/storekit/verificationresult/verificationerror)

##### Error Codes

- [case invalidCertificateChain](/documentation/storekit/verificationresult/verificationerror/invalidcertificatechain)
- [case invalidDeviceVerification](/documentation/storekit/verificationresult/verificationerror/invaliddeviceverification)
- [case invalidEncoding](/documentation/storekit/verificationresult/verificationerror/invalidencoding)
- [case invalidSignature](/documentation/storekit/verificationresult/verificationerror/invalidsignature)
- [case missingRequiredProperties](/documentation/storekit/verificationresult/verificationerror/missingrequiredproperties)
- [case revokedCertificate](/documentation/storekit/verificationresult/verificationerror/revokedcertificate)

#### Getting properties for transactions

- [var jwsRepresentation: String](/documentation/storekit/verificationresult/jwsrepresentation-21vgo)
- [var deviceVerification: Data](/documentation/storekit/verificationresult/deviceverification-69lvx)
- [var deviceVerificationNonce: UUID](/documentation/storekit/verificationresult/deviceverificationnonce-9dfrn)
- [var signedDate: Date](/documentation/storekit/verificationresult/signeddate-8x9bg)
- [var headerData: Data](/documentation/storekit/verificationresult/headerdata-9egfp)
- [var payloadData: Data](/documentation/storekit/verificationresult/payloaddata-uyle)
- [var signedData: Data](/documentation/storekit/verificationresult/signeddata-56usp)
- [var signatureData: Data](/documentation/storekit/verificationresult/signaturedata-4pyv8)
- [var signature: P256.Signing.ECDSASignature](/documentation/storekit/verificationresult/signature-7t1ne)

#### Getting properties for subscription renewal information

- [var jwsRepresentation: String](/documentation/storekit/verificationresult/jwsrepresentation-178oj)
- [var deviceVerification: Data](/documentation/storekit/verificationresult/deviceverification-5hvi9)
- [var deviceVerificationNonce: UUID](/documentation/storekit/verificationresult/deviceverificationnonce-6mzfc)
- [var signedDate: Date](/documentation/storekit/verificationresult/signeddate-3tvo5)
- [var headerData: Data](/documentation/storekit/verificationresult/headerdata-3be0o)
- [var payloadData: Data](/documentation/storekit/verificationresult/payloaddata-abfv)
- [var signedData: Data](/documentation/storekit/verificationresult/signeddata-1t80n)
- [var signatureData: Data](/documentation/storekit/verificationresult/signaturedata-9uw8c)
- [var signature: P256.Signing.ECDSASignature](/documentation/storekit/verificationresult/signature-95r7x)

#### Getting properties for app transactions

- [var jwsRepresentation: String](/documentation/storekit/verificationresult/jwsrepresentation-6ma59)
- [var deviceVerification: Data](/documentation/storekit/verificationresult/deviceverification-6c8xu)
- [var deviceVerificationNonce: UUID](/documentation/storekit/verificationresult/deviceverificationnonce-6082b)
- [var signedDate: Date](/documentation/storekit/verificationresult/signeddate-24zch)
- [var headerData: Data](/documentation/storekit/verificationresult/headerdata-3drrl)
- [var payloadData: Data](/documentation/storekit/verificationresult/payloaddata-97acz)
- [var signedData: Data](/documentation/storekit/verificationresult/signeddata-99fyo)
- [var signatureData: Data](/documentation/storekit/verificationresult/signaturedata-4pvv0)
- [var signature: P256.Signing.ECDSASignature](/documentation/storekit/verificationresult/signature-6d5ue)
- [VerificationResult.VerificationError](/documentation/storekit/verificationresult/verificationerror)

#### Error Codes

- [case invalidCertificateChain](/documentation/storekit/verificationresult/verificationerror/invalidcertificatechain)
- [case invalidDeviceVerification](/documentation/storekit/verificationresult/verificationerror/invaliddeviceverification)
- [case invalidEncoding](/documentation/storekit/verificationresult/verificationerror/invalidencoding)
- [case invalidSignature](/documentation/storekit/verificationresult/verificationerror/invalidsignature)
- [case missingRequiredProperties](/documentation/storekit/verificationresult/verificationerror/missingrequiredproperties)
- [case revokedCertificate](/documentation/storekit/verificationresult/verificationerror/revokedcertificate)

### Subscription status and renewal information

- [Product.SubscriptionInfo.Status](/documentation/storekit/product/subscriptioninfo/status-swift.struct)

#### Monitoring subscription status changes

- [static var updates: Product.SubscriptionInfo.Status.Statuses](/documentation/storekit/product/subscriptioninfo/status-swift.struct/updates)
- [static var all: AsyncStream<(groupID: String, statuses: [Product.SubscriptionInfo.Status])>](/documentation/storekit/product/subscriptioninfo/status-swift.struct/all)
- [Product.SubscriptionInfo.Status.Statuses](/documentation/storekit/product/subscriptioninfo/status-swift.struct/statuses)

#### Getting subscription status information

- [let state: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/status-swift.struct/state)
- [let renewalInfo: VerificationResult<Product.SubscriptionInfo.RenewalInfo>](/documentation/storekit/product/subscriptioninfo/status-swift.struct/renewalinfo)
- [let transaction: VerificationResult<Transaction>](/documentation/storekit/product/subscriptioninfo/status-swift.struct/transaction)
- [Product.SubscriptionInfo.RenewalInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo)

##### Getting the environment

- [let environment: AppStore.Environment](/documentation/storekit/product/subscriptioninfo/renewalinfo/environment)

##### Getting the transaction ID

- [let originalTransactionID: UInt64](/documentation/storekit/product/subscriptioninfo/renewalinfo/originaltransactionid)

##### Identifying the account

- [var appAccountToken: UUID?](/documentation/storekit/product/subscriptioninfo/renewalinfo/appaccounttoken)
- [var appTransactionID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/apptransactionid)

##### Getting the product ID

- [let currentProductID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/currentproductid)

##### Getting subscription dates

- [var recentSubscriptionStartDate: Date](/documentation/storekit/product/subscriptioninfo/renewalinfo/recentsubscriptionstartdate)
- [var renewalDate: Date?](/documentation/storekit/product/subscriptioninfo/renewalinfo/renewaldate)

##### Getting the renewal or expiration state

- [let state: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/status-swift.struct/state)
- [let autoRenewPreference: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/autorenewpreference)
- [let willAutoRenew: Bool](/documentation/storekit/product/subscriptioninfo/renewalinfo/willautorenew)
- [let expirationReason: Product.SubscriptionInfo.RenewalInfo.ExpirationReason?](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct)

###### Getting the expiration reason

- [static let autoRenewDisabled: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/autorenewdisabled)
- [static let billingError: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/billingerror)
- [static let didNotConsentToPriceIncrease: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/didnotconsenttopriceincrease)
- [static let productUnavailable: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/productunavailable)
- [static let unknown: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/unknown)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/localizeddescription)

##### Getting offers

- [let offer: Transaction.Offer?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offer)
- [Transaction.Offer](/documentation/storekit/transaction/offer-swift.struct)

###### Getting offer details

- [let id: String?](/documentation/storekit/transaction/offer-swift.struct/id)
- [let type: Transaction.OfferType](/documentation/storekit/transaction/offer-swift.struct/type)
- [Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct)

###### Getting offer types

- [static let introductory: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/introductory)
- [static let promotional: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/promotional)
- [static let code: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/code)
- [static var winBack: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/winback)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/transaction/offertype-swift.struct/localizeddescription)
- [let paymentMode: Transaction.Offer.PaymentMode?](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.property)
- [Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct)

###### Getting payment modes

- [static let freeTrial: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/freetrial)
- [static let payAsYouGo: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payasyougo)
- [static let payUpFront: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payupfront)
- [static var oneTime: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/onetime)
- [let period: Product.SubscriptionPeriod?](/documentation/storekit/transaction/offer-swift.struct/period)
- [let eligibleWinBackOfferIDs: [String]](/documentation/storekit/product/subscriptioninfo/renewalinfo/eligiblewinbackofferids)

##### Getting the renewal price and currency

- [var renewalPrice: Decimal?](/documentation/storekit/product/subscriptioninfo/renewalinfo/renewalprice)
- [var currency: Locale.Currency?](/documentation/storekit/product/subscriptioninfo/renewalinfo/currency)

##### Getting billing status

- [let isInBillingRetry: Bool](/documentation/storekit/product/subscriptioninfo/renewalinfo/isinbillingretry)
- [let gracePeriodExpirationDate: Date?](/documentation/storekit/product/subscriptioninfo/renewalinfo/graceperiodexpirationdate)

##### Getting the price increase status

- [Managing Price Increases for Auto-Renewable Subscriptions](/documentation/storekit/managing-price-increases-for-auto-renewable-subscriptions)
- [let priceIncreaseStatus: Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum)

###### Getting Price Increase Status

- [case noIncreasePending](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/noincreasepending)
- [case agreed](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/agreed)
- [case pending](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/pending)

###### Getting a Localized Description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/localizeddescription)

##### Verifying subscription renewal information

- [let deviceVerification: Data](/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverification)
- [let deviceVerificationNonce: UUID](/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverificationnonce)
- [let signedDate: Date](/documentation/storekit/product/subscriptioninfo/renewalinfo/signeddate)

##### Getting subscription renewal info in JSON format

- [var jsonRepresentation: Data](/documentation/storekit/product/subscriptioninfo/renewalinfo/jsonrepresentation)

##### Getting renewal information for Advanced Commerce API

- [let advancedCommerceInfo: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo?](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item)

###### Instance Properties

- [let details: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.Details](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/details-swift.property)
- [let priceIncreaseInfo: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo?](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.property)

###### Type Aliases

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.Details](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/details-swift.typealias)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct)

###### Information about a price increase

- [let dependentSKUs: [String]](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/dependentskus)
- [let price: Decimal](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/price)
- [let status: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.property)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct)

###### Price increase status values

- [static let pending: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/pending)
- [static let accepted: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/accepted)
- [static let scheduled: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/scheduled)

###### Instance Properties

- [let consistencyToken: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/consistencytoken)
- [let description: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/description)
- [let displayName: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/displayname)
- [let items: [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item]](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/items)
- [let period: SubscriptionPeriod](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/period)
- [let requestReferenceID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/requestreferenceid)
- [let taxCode: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/taxcode)

##### Deprecated

- [var environmentStringRepresentation: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/environmentstringrepresentation)
- [var offerID: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerid)
- [var offerType: Transaction.OfferType?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offertype)
- [var currencyCode: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/currencycode)
- [var offerPaymentModeStringRepresentation: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerpaymentmodestringrepresentation)
- [var offerPeriodStringRepresentation: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerperiodstringrepresentation)
- [Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate)

##### Getting the renewal state

- [static let subscribed: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/subscribed)
- [static let expired: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/expired)
- [static let inBillingRetryPeriod: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/inbillingretryperiod)
- [static let inGracePeriod: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/ingraceperiod)
- [static let revoked: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/revoked)

##### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalstate/localizeddescription)
- [Product.SubscriptionInfo.RenewalInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo)

#### Getting the environment

- [let environment: AppStore.Environment](/documentation/storekit/product/subscriptioninfo/renewalinfo/environment)

#### Getting the transaction ID

- [let originalTransactionID: UInt64](/documentation/storekit/product/subscriptioninfo/renewalinfo/originaltransactionid)

#### Identifying the account

- [var appAccountToken: UUID?](/documentation/storekit/product/subscriptioninfo/renewalinfo/appaccounttoken)
- [var appTransactionID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/apptransactionid)

#### Getting the product ID

- [let currentProductID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/currentproductid)

#### Getting subscription dates

- [var recentSubscriptionStartDate: Date](/documentation/storekit/product/subscriptioninfo/renewalinfo/recentsubscriptionstartdate)
- [var renewalDate: Date?](/documentation/storekit/product/subscriptioninfo/renewalinfo/renewaldate)

#### Getting the renewal or expiration state

- [let state: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/status-swift.struct/state)
- [let autoRenewPreference: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/autorenewpreference)
- [let willAutoRenew: Bool](/documentation/storekit/product/subscriptioninfo/renewalinfo/willautorenew)
- [let expirationReason: Product.SubscriptionInfo.RenewalInfo.ExpirationReason?](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct)

##### Getting the expiration reason

- [static let autoRenewDisabled: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/autorenewdisabled)
- [static let billingError: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/billingerror)
- [static let didNotConsentToPriceIncrease: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/didnotconsenttopriceincrease)
- [static let productUnavailable: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/productunavailable)
- [static let unknown: Product.SubscriptionInfo.RenewalInfo.ExpirationReason](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/unknown)

##### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/localizeddescription)

#### Getting offers

- [let offer: Transaction.Offer?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offer)
- [Transaction.Offer](/documentation/storekit/transaction/offer-swift.struct)

##### Getting offer details

- [let id: String?](/documentation/storekit/transaction/offer-swift.struct/id)
- [let type: Transaction.OfferType](/documentation/storekit/transaction/offer-swift.struct/type)
- [Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct)

###### Getting offer types

- [static let introductory: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/introductory)
- [static let promotional: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/promotional)
- [static let code: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/code)
- [static var winBack: Transaction.OfferType](/documentation/storekit/transaction/offertype-swift.struct/winback)

###### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/transaction/offertype-swift.struct/localizeddescription)
- [let paymentMode: Transaction.Offer.PaymentMode?](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.property)
- [Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct)

###### Getting payment modes

- [static let freeTrial: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/freetrial)
- [static let payAsYouGo: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payasyougo)
- [static let payUpFront: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/payupfront)
- [static var oneTime: Transaction.Offer.PaymentMode](/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/onetime)
- [let period: Product.SubscriptionPeriod?](/documentation/storekit/transaction/offer-swift.struct/period)
- [let eligibleWinBackOfferIDs: [String]](/documentation/storekit/product/subscriptioninfo/renewalinfo/eligiblewinbackofferids)

#### Getting the renewal price and currency

- [var renewalPrice: Decimal?](/documentation/storekit/product/subscriptioninfo/renewalinfo/renewalprice)
- [var currency: Locale.Currency?](/documentation/storekit/product/subscriptioninfo/renewalinfo/currency)

#### Getting billing status

- [let isInBillingRetry: Bool](/documentation/storekit/product/subscriptioninfo/renewalinfo/isinbillingretry)
- [let gracePeriodExpirationDate: Date?](/documentation/storekit/product/subscriptioninfo/renewalinfo/graceperiodexpirationdate)

#### Getting the price increase status

- [Managing Price Increases for Auto-Renewable Subscriptions](/documentation/storekit/managing-price-increases-for-auto-renewable-subscriptions)
- [let priceIncreaseStatus: Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum)

##### Getting Price Increase Status

- [case noIncreasePending](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/noincreasepending)
- [case agreed](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/agreed)
- [case pending](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/pending)

##### Getting a Localized Description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/localizeddescription)

#### Verifying subscription renewal information

- [let deviceVerification: Data](/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverification)
- [let deviceVerificationNonce: UUID](/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverificationnonce)
- [let signedDate: Date](/documentation/storekit/product/subscriptioninfo/renewalinfo/signeddate)

#### Getting subscription renewal info in JSON format

- [var jsonRepresentation: Data](/documentation/storekit/product/subscriptioninfo/renewalinfo/jsonrepresentation)

#### Getting renewal information for Advanced Commerce API

- [let advancedCommerceInfo: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo?](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.property)
- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct)

##### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item)

###### Instance Properties

- [let details: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.Details](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/details-swift.property)
- [let priceIncreaseInfo: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo?](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.property)

###### Type Aliases

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.Details](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/details-swift.typealias)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct)

###### Information about a price increase

- [let dependentSKUs: [String]](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/dependentskus)
- [let price: Decimal](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/price)
- [let status: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.property)

###### Structures

- [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct)

###### Price increase status values

- [static let pending: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/pending)
- [static let accepted: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/accepted)
- [static let scheduled: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/scheduled)

##### Instance Properties

- [let consistencyToken: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/consistencytoken)
- [let description: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/description)
- [let displayName: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/displayname)
- [let items: [Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item]](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/items)
- [let period: SubscriptionPeriod](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/period)
- [let requestReferenceID: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/requestreferenceid)
- [let taxCode: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/taxcode)

#### Deprecated

- [var environmentStringRepresentation: String](/documentation/storekit/product/subscriptioninfo/renewalinfo/environmentstringrepresentation)
- [var offerID: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerid)
- [var offerType: Transaction.OfferType?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offertype)
- [var currencyCode: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/currencycode)
- [var offerPaymentModeStringRepresentation: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerpaymentmodestringrepresentation)
- [var offerPeriodStringRepresentation: String?](/documentation/storekit/product/subscriptioninfo/renewalinfo/offerperiodstringrepresentation)
- [SubscriptionRenewalInfo](/documentation/storekit/subscriptionrenewalinfo)
- [Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate)

#### Getting the renewal state

- [static let subscribed: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/subscribed)
- [static let expired: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/expired)
- [static let inBillingRetryPeriod: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/inbillingretryperiod)
- [static let inGracePeriod: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/ingraceperiod)
- [static let revoked: Product.SubscriptionInfo.RenewalState](/documentation/storekit/product/subscriptioninfo/renewalstate/revoked)

#### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptioninfo/renewalstate/localizeddescription)
- [SubscriptionRenewalState](/documentation/storekit/subscriptionrenewalstate)
- [SubscriptionPeriod](/documentation/storekit/subscriptionperiod)

### Offers

- [Supporting offer codes in your app](/documentation/storekit/supporting-offer-codes-in-your-app)
- [Supporting win-back offers in your app](/documentation/storekit/supporting-win-back-offers-in-your-app)
- [Merchandising win-back offers in your app](/documentation/storekit/merchandising-win-back-offers-in-your-app)
- [Product.SubscriptionOffer](/documentation/storekit/product/subscriptionoffer)

#### Getting the subscription offer identifier

- [let id: String?](/documentation/storekit/product/subscriptionoffer/id)

#### Getting the subscription offer type

- [let type: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/type)
- [Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype)

##### Getting offer types

- [static let introductory: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype/introductory)
- [static let promotional: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype/promotional)
- [static let winBack: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype/winback)

##### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptionoffer/offertype/localizeddescription)

#### Getting price information

- [let displayPrice: String](/documentation/storekit/product/subscriptionoffer/displayprice)
- [let price: Decimal](/documentation/storekit/product/subscriptionoffer/price)
- [let paymentMode: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.property)
- [Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct)

##### Getting the payment modes

- [static let freeTrial: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/freetrial)
- [static let payAsYouGo: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/payasyougo)
- [static let payUpFront: Product.SubscriptionOffer.PaymentMode](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/payupfront)

##### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/localizeddescription)

#### Getting the subscription duration

- [let period: Product.SubscriptionPeriod](/documentation/storekit/product/subscriptionoffer/period)
- [let periodCount: Int](/documentation/storekit/product/subscriptionoffer/periodcount)

#### Creating a subscription offer signature

- [Product.SubscriptionOffer.Signature](/documentation/storekit/product/subscriptionoffer/signature)

##### Creating subscription offer signatures

- [init(keyID: String, nonce: UUID, timestamp: Int, signature: Data)](/documentation/storekit/product/subscriptionoffer/signature/init(keyid:nonce:timestamp:signature:))

##### Getting signature elements

- [var keyID: String](/documentation/storekit/product/subscriptionoffer/signature/keyid)
- [var nonce: UUID](/documentation/storekit/product/subscriptionoffer/signature/nonce)
- [var signature: Data](/documentation/storekit/product/subscriptionoffer/signature/signature)
- [var timestamp: Int](/documentation/storekit/product/subscriptionoffer/signature/timestamp)
- [Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype)

#### Getting offer types

- [static let introductory: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype/introductory)
- [static let promotional: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype/promotional)
- [static let winBack: Product.SubscriptionOffer.OfferType](/documentation/storekit/product/subscriptionoffer/offertype/winback)

#### Getting a localized description

- [var localizedDescription: String](/documentation/storekit/product/subscriptionoffer/offertype/localizeddescription)

### Promoted In-App Purchases

- [Supporting promoted In-App Purchases in your app](/documentation/storekit/supporting-promoted-in-app-purchases-in-your-app)
- [PurchaseIntent](/documentation/storekit/purchaseintent)

#### Identifying the product

- [var id: Product.ID](/documentation/storekit/purchaseintent/id)
- [let product: Product](/documentation/storekit/purchaseintent/product)

#### Getting purchase intents

- [static var intents: PurchaseIntent.PurchaseIntents](/documentation/storekit/purchaseintent/intents)
- [PurchaseIntent.PurchaseIntents](/documentation/storekit/purchaseintent/purchaseintents)

#### Identifying the offer

- [let offer: Product.SubscriptionOffer?](/documentation/storekit/purchaseintent/offer)
- [Product.PromotionInfo](/documentation/storekit/product/promotioninfo)

#### Getting the product ID

- [let productID: Product.ID](/documentation/storekit/product/promotioninfo/productid)

#### Managing promotion order

- [static func updateProductOrder(byID: some Collection<String>) async throws](/documentation/storekit/product/promotioninfo/updateproductorder(byid:))

#### Getting overridden order

- [static var currentOrder: [Product.PromotionInfo]](/documentation/storekit/product/promotioninfo/currentorder)

#### Managing promotion visibility

- [var visibility: Product.PromotionInfo.Visibility](/documentation/storekit/product/promotioninfo/visibility-swift.property)
- [Product.PromotionInfo.Visibility](/documentation/storekit/product/promotioninfo/visibility-swift.enum)

##### Getting visibility states

- [case appStoreConnectDefault](/documentation/storekit/product/promotioninfo/visibility-swift.enum/appstoreconnectdefault)
- [case hidden](/documentation/storekit/product/promotioninfo/visibility-swift.enum/hidden)
- [case visible](/documentation/storekit/product/promotioninfo/visibility-swift.enum/visible)
- [static func updateProductVisibility(Product.PromotionInfo.Visibility, for: Product.ID) async throws](/documentation/storekit/product/promotioninfo/updateproductvisibility(_:for:))

#### Updating order and visibility

- [func update() async throws](/documentation/storekit/product/promotioninfo/update())
- [static func updateAll(some Collection<Product.PromotionInfo>) async throws](/documentation/storekit/product/promotioninfo/updateall(_:))
- [Testing promoted In-App Purchases](/documentation/storekit/testing-promoted-in-app-purchases)

### App Store interactions

- [AppStore](/documentation/storekit/appstore)

#### Checking the environment

- [AppStore.Environment](/documentation/storekit/appstore/environment)

##### Getting the environment value

- [static let production: AppStore.Environment](/documentation/storekit/appstore/environment/production)
- [static let sandbox: AppStore.Environment](/documentation/storekit/appstore/environment/sandbox)
- [static let xcode: AppStore.Environment](/documentation/storekit/appstore/environment/xcode)

#### Checking payment setup

- [static var canMakePayments: Bool](/documentation/storekit/appstore/canmakepayments)

#### Checking current age rating

- [static var ageRatingCode: Int?](/documentation/storekit/appstore/ageratingcode)

#### Verifying devices

- [static var deviceVerificationID: UUID?](/documentation/storekit/appstore/deviceverificationid)

#### Getting the platform

- [AppStore.Platform](/documentation/storekit/appstore/platform)

##### Getting platform values

- [static let iOS: AppStore.Platform](/documentation/storekit/appstore/platform/ios)
- [static let macOS: AppStore.Platform](/documentation/storekit/appstore/platform/macos)
- [static let tvOS: AppStore.Platform](/documentation/storekit/appstore/platform/tvos)
- [static let visionOS: AppStore.Platform](/documentation/storekit/appstore/platform/visionos)

#### Managing subscriptions

- [static func showManageSubscriptions(in: UIWindowScene) async throws](/documentation/storekit/appstore/showmanagesubscriptions(in:))
- [static func showManageSubscriptions(in: UIWindowScene, subscriptionGroupID: String) async throws](/documentation/storekit/appstore/showmanagesubscriptions(in:subscriptiongroupid:))

#### Requesting reviews

- [RequestReviewAction](/documentation/storekit/requestreviewaction)

##### Call as function

- [func callAsFunction()](/documentation/storekit/requestreviewaction/callasfunction())

##### Environment value

- [var requestReview: RequestReviewAction](/documentation/swiftui/environmentvalues/requestreview)
- [static func requestReview(in: UIWindowScene)](/documentation/storekit/appstore/requestreview(in:)-1q8qs)
- [static func requestReview(in: NSViewController)](/documentation/storekit/appstore/requestreview(in:)-4r0y9)

#### Presenting the offer code redemption sheet

- [Supporting offer codes in your app](/documentation/storekit/supporting-offer-codes-in-your-app)
- [static func presentOfferCodeRedeemSheet(in: UIWindowScene) async throws](/documentation/storekit/appstore/presentoffercoderedeemsheet(in:))
- [func offerCodeRedemption(isPresented: Binding<Bool>, onCompletion: (Result<Void, any Error>) -> Void) -> some View](/documentation/swiftui/view/offercoderedemption(ispresented:oncompletion:))
- [static func presentOfferCodeRedeemSheet(from: NSViewController) async throws](/documentation/storekit/appstore/presentoffercoderedeemsheet(from:))

#### Restoring purchases

- [static func sync() async throws](/documentation/storekit/appstore/sync())

#### Merchandising

- [AppStoreMerchandisingKind](/documentation/storekit/appstoremerchandisingkind)

##### Type methods

- [static func subscriptionBundle(String) -> AppStoreMerchandisingKind](/documentation/storekit/appstoremerchandisingkind/subscriptionbundle(_:))

##### Enumerations

- [AppStoreMerchandisingKind.PresentationResult](/documentation/storekit/appstoremerchandisingkind/presentationresult)

###### Enumeration cases

- [case dismissed](/documentation/storekit/appstoremerchandisingkind/presentationresult/dismissed)
- [case purchaseCompleted(Product.PurchaseResult)](/documentation/storekit/appstoremerchandisingkind/presentationresult/purchasecompleted(_:))

#### Type Methods

- [static func presentMerchandising(AppStoreMerchandisingKind, from: NSWindow) async throws -> AppStoreMerchandisingKind.PresentationResult](/documentation/storekit/appstore/presentmerchandising(_:from:)-8bblo)
- [static func presentMerchandising(AppStoreMerchandisingKind, from: UIViewController) async throws -> AppStoreMerchandisingKind.PresentationResult](/documentation/storekit/appstore/presentmerchandising(_:from:)-hkrd)
- [AppTransaction](/documentation/storekit/apptransaction)

#### Getting the signed app transaction

- [static var shared: VerificationResult<AppTransaction>](/documentation/storekit/apptransaction/shared)

#### Getting the app transaction identifier

- [var appTransactionID: String](/documentation/storekit/apptransaction/apptransactionid)

#### Getting the environment

- [let environment: AppStore.Environment](/documentation/storekit/apptransaction/environment)
- [AppStore.Environment](/documentation/storekit/appstore/environment)

##### Getting the environment value

- [static let production: AppStore.Environment](/documentation/storekit/appstore/environment/production)
- [static let sandbox: AppStore.Environment](/documentation/storekit/appstore/environment/sandbox)
- [static let xcode: AppStore.Environment](/documentation/storekit/appstore/environment/xcode)

#### Getting app and version information

- [let bundleID: String](/documentation/storekit/apptransaction/bundleid)
- [let appVersion: String](/documentation/storekit/apptransaction/appversion)
- [let originalAppVersion: String](/documentation/storekit/apptransaction/originalappversion)
- [let appID: UInt64?](/documentation/storekit/apptransaction/appid)
- [let appVersionID: UInt64?](/documentation/storekit/apptransaction/appversionid)

#### Getting the original platform

- [let originalPlatform: AppStore.Platform](/documentation/storekit/apptransaction/originalplatform)
- [AppStore.Platform](/documentation/storekit/appstore/platform)

##### Getting platform values

- [static let iOS: AppStore.Platform](/documentation/storekit/appstore/platform/ios)
- [static let macOS: AppStore.Platform](/documentation/storekit/appstore/platform/macos)
- [static let tvOS: AppStore.Platform](/documentation/storekit/appstore/platform/tvos)
- [static let visionOS: AppStore.Platform](/documentation/storekit/appstore/platform/visionos)

#### Getting purchase dates

- [let originalPurchaseDate: Date](/documentation/storekit/apptransaction/originalpurchasedate)
- [let preorderDate: Date?](/documentation/storekit/apptransaction/preorderdate)

#### Verifying the app transaction

- [let deviceVerification: Data](/documentation/storekit/apptransaction/deviceverification)
- [let deviceVerificationNonce: UUID](/documentation/storekit/apptransaction/deviceverificationnonce)
- [let signedDate: Date](/documentation/storekit/apptransaction/signeddate)

#### Getting app transaction information in JSON format

- [var jsonRepresentation: Data](/documentation/storekit/apptransaction/jsonrepresentation)

#### Getting app transaction from the server

- [static func refresh() async throws -> VerificationResult<AppTransaction>](/documentation/storekit/apptransaction/refresh())

#### Deprecated

- [var originalPlatformStringRepresentation: String](/documentation/storekit/apptransaction/originalplatformstringrepresentation)

### Storefront information

- [Storefront](/documentation/storekit/storefront)

#### Identifying the storefront

- [static var current: Storefront?](/documentation/storekit/storefront/current)
- [let countryCode: String](/documentation/storekit/storefront/countrycode)
- [let id: String](/documentation/storekit/storefront/id)

#### Listening for storefront changes

- [static var updates: Storefront.Storefronts](/documentation/storekit/storefront/updates)
- [Storefront.Storefronts](/documentation/storekit/storefront/storefronts)

#### Getting the currency for the storefront

- [var currency: Locale.Currency?](/documentation/storekit/storefront/currency)
- [static var current: Storefront?](/documentation/storekit/storefront/current)
- [static var updates: Storefront.Storefronts](/documentation/storekit/storefront/updates)

### In-App Purchase Testing

- [Testing at all stages of development with Xcode and the sandbox](/documentation/storekit/testing-at-all-stages-of-development-with-xcode-and-the-sandbox)
- [Testing In-App Purchases with sandbox](/documentation/storekit/testing-in-app-purchases-with-sandbox)

#### Product identifiers and requests

- [Testing fetching product identifiers](/documentation/storekit/testing-fetching-product-identifiers)
- [Testing invalid product identifier handling](/documentation/storekit/testing-invalid-product-identifier-handling)
- [Testing a product request](/documentation/storekit/testing-a-product-request)

#### Payment transactions

- [Testing purchases made outside your app](/documentation/storekit/testing-purchases-made-outside-your-app)
- [Testing win-back offers in the sandbox environment](/documentation/storekit/testing-win-back-offers-in-the-sandbox-environment)
- [Testing an interrupted purchase](/documentation/storekit/testing-an-interrupted-purchase)
- [Testing failing subscription renewals and In-App Purchases](/documentation/storekit/testing-failing-subscription-renewals-and-in-app-purchases)
- [Testing a payment request](/documentation/storekit/testing-a-payment-request)

#### Subscriptions

- [Testing an auto-renewable subscription](/documentation/storekit/testing-an-auto-renewable-subscription)
- [Testing resubscribing from the subscriptions page](/documentation/storekit/testing-resubscribing-from-the-subscriptions-page)
- [Testing disabling auto-renew](/documentation/storekit/testing-disabling-auto-renew)

#### Family Sharing

- [Testing Family Sharing](/documentation/storekit/testing-family-sharing)

#### Age Assurance

- [Testing Age Assurance in Sandbox](/documentation/storekit/testing-age-assurance-in-sandbox)

#### Refunds

- [Testing refund requests](/documentation/storekit/testing-refund-requests)

#### Server notifications

- [Testing App Store server notifications](/documentation/storekit/testing-app-store-server-notifications)

#### Transaction observer

- [Testing transaction observer code](/documentation/storekit/testing-transaction-observer-code)
- [Testing a successful transaction](/documentation/storekit/testing-a-successful-transaction)
- [Testing complete transactions](/documentation/storekit/testing-complete-transactions)
- [Testing refund requests](/documentation/storekit/testing-refund-requests)
- [Testing win-back offers in Xcode](/documentation/storekit/testing-win-back-offers-in-xcode)
- [Testing Ask to Buy in Xcode](/documentation/storekit/testing-ask-to-buy-in-xcode)

### Advanced Commerce API interactions

- [AdvancedCommerceProduct](/documentation/storekit/advancedcommerceproduct)

#### Getting the product ID and type

- [let id: AdvancedCommerceProduct.ID](/documentation/storekit/advancedcommerceproduct/id)
- [AdvancedCommerceProduct.ProductType](/documentation/storekit/advancedcommerceproduct/producttype)
- [let type: AdvancedCommerceProduct.ProductType](/documentation/storekit/advancedcommerceproduct/type)

#### Initiating purchases

- [AdvancedCommerceProduct.PurchaseOption](/documentation/storekit/advancedcommerceproduct/purchaseoption)

##### Type Methods

- [static func onStorefrontChange(shouldContinuePurchase: (Storefront) -> Bool) -> AdvancedCommerceProduct.PurchaseOption](/documentation/storekit/advancedcommerceproduct/purchaseoption/onstorefrontchange(shouldcontinuepurchase:))
- [func purchase(compactJWS: String, confirmIn: NSWindow, options: Set<AdvancedCommerceProduct.PurchaseOption>) async throws -> AdvancedCommerceProduct.PurchaseResult](/documentation/storekit/advancedcommerceproduct/purchase(compactjws:confirmin:options:)-7x4bh)
- [func purchase(compactJWS: String, confirmIn: UIViewController, options: Set<AdvancedCommerceProduct.PurchaseOption>) async throws -> AdvancedCommerceProduct.PurchaseResult](/documentation/storekit/advancedcommerceproduct/purchase(compactjws:confirmin:options:)-54lkw)
- [func purchase(compactJWS: String, options: Set<AdvancedCommerceProduct.PurchaseOption>) async throws -> AdvancedCommerceProduct.PurchaseResult](/documentation/storekit/advancedcommerceproduct/purchase(compactjws:options:))
- [AdvancedCommerceProduct.PurchaseResult](/documentation/storekit/advancedcommerceproduct/purchaseresult)

#### Getting transactions and entitlements

- [var allTransactions: Transaction.Transactions](/documentation/storekit/advancedcommerceproduct/alltransactions)
- [var currentEntitlements: Transaction.Transactions](/documentation/storekit/advancedcommerceproduct/currententitlements)
- [var latestTransaction: VerificationResult<Transaction>?](/documentation/storekit/advancedcommerceproduct/latesttransaction)

#### Initializing an instance

- [init(id: AdvancedCommerceProduct.ID) async throws](/documentation/storekit/advancedcommerceproduct/init(id:))

#### Handling errors

- [InvalidRequestError](/documentation/storekit/invalidrequesterror)

##### Instance Properties

- [let code: Int64](/documentation/storekit/invalidrequesterror/code)
- [let message: String](/documentation/storekit/invalidrequesterror/message)
- [Sending Advanced Commerce API requests from your app](/documentation/storekit/sending-advanced-commerce-api-requests-from-your-app)
- [Generating JWS to sign App Store requests](/documentation/storekit/generating-jws-to-sign-app-store-requests)

### Errors

- [StoreKitError](/documentation/storekit/storekiterror)

#### StoreKit Error Codes

- [case networkError(URLError)](/documentation/storekit/storekiterror/networkerror(_:))
- [case systemError(any Error)](/documentation/storekit/storekiterror/systemerror(_:))
- [case userCancelled](/documentation/storekit/storekiterror/usercancelled)
- [case notAvailableInStorefront](/documentation/storekit/storekiterror/notavailableinstorefront)
- [case notEntitled](/documentation/storekit/storekiterror/notentitled)
- [case unknown](/documentation/storekit/storekiterror/unknown)
- [case unsupported](/documentation/storekit/storekiterror/unsupported)

### Deprecated

- [Choosing a StoreKit API for In-App Purchases](/documentation/storekit/choosing-a-storekit-api-for-in-app-purchases)
- [Original API for In-App Purchase](/documentation/storekit/original-api-for-in-app-purchase)

#### Essentials

- [Setting up the transaction observer for the payment queue](/documentation/storekit/setting-up-the-transaction-observer-for-the-payment-queue)
- [Offering, completing, and restoring in-app purchases](/documentation/storekit/offering-completing-and-restoring-in-app-purchases)
- [SKPaymentQueue](/documentation/storekit/skpaymentqueue)

##### Determining Whether the User Can Make Payments

- [class func canMakePayments() -> Bool](/documentation/storekit/skpaymentqueue/canmakepayments())

##### Determining Store Content

- [var storefront: SKStorefront?](/documentation/storekit/skpaymentqueue/storefront)

##### Getting the Queue

- [class func `default`() -> Self](/documentation/storekit/skpaymentqueue/default())

##### Adding, Getting, and Removing Observers

- [func add(any SKPaymentTransactionObserver)](/documentation/storekit/skpaymentqueue/add(_:)-5ciz2)
- [var transactionObservers: [any SKPaymentTransactionObserver]](/documentation/storekit/skpaymentqueue/transactionobservers)
- [func remove(any SKPaymentTransactionObserver)](/documentation/storekit/skpaymentqueue/remove(_:))

##### Managing Transactions

- [var delegate: (any SKPaymentQueueDelegate)?](/documentation/storekit/skpaymentqueue/delegate)
- [var transactions: [SKPaymentTransaction]](/documentation/storekit/skpaymentqueue/transactions)
- [func add(SKPayment)](/documentation/storekit/skpaymentqueue/add(_:)-4vct1)
- [func finishTransaction(SKPaymentTransaction)](/documentation/storekit/skpaymentqueue/finishtransaction(_:))

##### Restoring Purchases

- [func restoreCompletedTransactions()](/documentation/storekit/skpaymentqueue/restorecompletedtransactions())
- [func restoreCompletedTransactions(withApplicationUsername: String?)](/documentation/storekit/skpaymentqueue/restorecompletedtransactions(withapplicationusername:))

##### Showing Price Consent

- [func showPriceConsentIfNeeded()](/documentation/storekit/skpaymentqueue/showpriceconsentifneeded())

##### Redeeming Codes

- [func presentCodeRedemptionSheet()](/documentation/storekit/skpaymentqueue/presentcoderedemptionsheet())

##### Downloading Content

- [func start([SKDownload])](/documentation/storekit/skpaymentqueue/start(_:))
- [func cancel([SKDownload])](/documentation/storekit/skpaymentqueue/cancel(_:))
- [func pause([SKDownload])](/documentation/storekit/skpaymentqueue/pause(_:))
- [func resume([SKDownload])](/documentation/storekit/skpaymentqueue/resume(_:))
- [SKPaymentTransactionObserver](/documentation/storekit/skpaymenttransactionobserver)

##### Handling transactions

- [func paymentQueue(SKPaymentQueue, updatedTransactions: [SKPaymentTransaction])](/documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:updatedtransactions:))
- [func paymentQueue(SKPaymentQueue, removedTransactions: [SKPaymentTransaction])](/documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:removedtransactions:))

##### Restoring transactions

- [func paymentQueue(SKPaymentQueue, restoreCompletedTransactionsFailedWithError: any Error)](/documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:restorecompletedtransactionsfailedwitherror:))
- [func paymentQueueRestoreCompletedTransactionsFinished(SKPaymentQueue)](/documentation/storekit/skpaymenttransactionobserver/paymentqueuerestorecompletedtransactionsfinished(_:))

##### Handling promoted in-app purchases

- [Promoting In-App Purchases](/documentation/storekit/promoting-in-app-purchases)
- [func paymentQueue(SKPaymentQueue, shouldAddStorePayment: SKPayment, for: SKProduct) -> Bool](/documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:shouldaddstorepayment:for:))

##### Revoking entitlements

- [func paymentQueue(SKPaymentQueue, didRevokeEntitlementsForProductIdentifiers: [String])](/documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:didrevokeentitlementsforproductidentifiers:))

##### Changing the storefront

- [func paymentQueueDidChangeStorefront(SKPaymentQueue)](/documentation/storekit/skpaymenttransactionobserver/paymentqueuedidchangestorefront(_:))

##### Handling download actions

- [func paymentQueue(SKPaymentQueue, updatedDownloads: [SKDownload])](/documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:updateddownloads:))
- [SKPaymentQueueDelegate](/documentation/storekit/skpaymentqueuedelegate)

##### Continuing transactions

- [func paymentQueue(SKPaymentQueue, shouldContinue: SKPaymentTransaction, in: SKStorefront) -> Bool](/documentation/storekit/skpaymentqueuedelegate/paymentqueue(_:shouldcontinue:in:))

##### Showing price consent

- [func paymentQueueShouldShowPriceConsent(SKPaymentQueue) -> Bool](/documentation/storekit/skpaymentqueuedelegate/paymentqueueshouldshowpriceconsent(_:))
- [SKRequest](/documentation/storekit/skrequest)

##### Controlling the Request

- [func start()](/documentation/storekit/skrequest/start())
- [func cancel()](/documentation/storekit/skrequest/cancel())

##### Accessing the Delegate

- [var delegate: (any SKRequestDelegate)?](/documentation/storekit/skrequest/delegate)
- [SKRequestDelegate](/documentation/storekit/skrequestdelegate)

###### Completing Requests

- [func requestDidFinish(SKRequest)](/documentation/storekit/skrequestdelegate/requestdidfinish(_:))

###### Handling Errors

- [func request(SKRequest, didFailWithError: any Error)](/documentation/storekit/skrequestdelegate/request(_:didfailwitherror:))

#### Product information

- [Loading in-app product identifiers](/documentation/storekit/loading-in-app-product-identifiers)
- [Fetching product information from the App Store](/documentation/storekit/fetching-product-information-from-the-app-store)
- [SKProductsRequest](/documentation/storekit/skproductsrequest)

##### Initializing a Products Request

- [init(productIdentifiers: Set<String>)](/documentation/storekit/skproductsrequest/init(productidentifiers:))

##### Setting the Delegate

- [var delegate: (any SKProductsRequestDelegate)?](/documentation/storekit/skproductsrequest/delegate)
- [SKProductsRequestDelegate](/documentation/storekit/skproductsrequestdelegate)

###### Receiving the Response

- [func productsRequest(SKProductsRequest, didReceive: SKProductsResponse)](/documentation/storekit/skproductsrequestdelegate/productsrequest(_:didreceive:))
- [SKProductsResponse](/documentation/storekit/skproductsresponse)

##### Response Information

- [var products: [SKProduct]](/documentation/storekit/skproductsresponse/products)
- [var invalidProductIdentifiers: [String]](/documentation/storekit/skproductsresponse/invalidproductidentifiers)
- [SKProduct](/documentation/storekit/skproduct)

##### Getting the Product Identifier

- [var productIdentifier: String](/documentation/storekit/skproduct/productidentifier)

##### Getting Product Attributes

- [var localizedDescription: String](/documentation/storekit/skproduct/localizeddescription)
- [var localizedTitle: String](/documentation/storekit/skproduct/localizedtitle)
- [var contentVersion: String](/documentation/storekit/skproduct/contentversion)
- [var isFamilyShareable: Bool](/documentation/storekit/skproduct/isfamilyshareable)
- [var contentLengths: [NSNumber]](/documentation/storekit/skproduct/contentlengths)

##### Getting Pricing Information

- [var price: NSDecimalNumber](/documentation/storekit/skproduct/price)
- [var priceLocale: Locale](/documentation/storekit/skproduct/pricelocale)
- [var introductoryPrice: SKProductDiscount?](/documentation/storekit/skproduct/introductoryprice)
- [var discounts: [SKProductDiscount]](/documentation/storekit/skproduct/discounts)
- [SKProductDiscount](/documentation/storekit/skproductdiscount)

###### Identifying the Discount

- [var identifier: String?](/documentation/storekit/skproductdiscount/identifier)
- [var type: SKProductDiscount.Type](/documentation/storekit/skproductdiscount/type-swift.property)
- [SKProductDiscount.Type](/documentation/storekit/skproductdiscount/type-swift.enum)

###### Types of Offers

- [case introductory](/documentation/storekit/skproductdiscount/type-swift.enum/introductory)
- [case subscription](/documentation/storekit/skproductdiscount/type-swift.enum/subscription)

###### Initializers

- [init?(rawValue: UInt)](/documentation/storekit/skproductdiscount/type-swift.enum/init(rawvalue:))

###### Getting Price and Payment Mode

- [var price: NSDecimalNumber](/documentation/storekit/skproductdiscount/price)
- [var priceLocale: Locale](/documentation/storekit/skproductdiscount/pricelocale)
- [var paymentMode: SKProductDiscount.PaymentMode](/documentation/storekit/skproductdiscount/paymentmode-swift.property)
- [SKProductDiscount.PaymentMode](/documentation/storekit/skproductdiscount/paymentmode-swift.enum)

###### Discount Price Payment Modes

- [case payAsYouGo](/documentation/storekit/skproductdiscount/paymentmode-swift.enum/payasyougo)
- [case payUpFront](/documentation/storekit/skproductdiscount/paymentmode-swift.enum/payupfront)
- [case freeTrial](/documentation/storekit/skproductdiscount/paymentmode-swift.enum/freetrial)

###### Initializers

- [init?(rawValue: UInt)](/documentation/storekit/skproductdiscount/paymentmode-swift.enum/init(rawvalue:))

###### Getting the Discount Duration

- [var numberOfPeriods: Int](/documentation/storekit/skproductdiscount/numberofperiods)
- [var subscriptionPeriod: SKProductSubscriptionPeriod](/documentation/storekit/skproductdiscount/subscriptionperiod)

##### Getting Subscription Information

- [var subscriptionGroupIdentifier: String?](/documentation/storekit/skproduct/subscriptiongroupidentifier)
- [var subscriptionPeriod: SKProductSubscriptionPeriod?](/documentation/storekit/skproduct/subscriptionperiod)
- [SKProductSubscriptionPeriod](/documentation/storekit/skproductsubscriptionperiod)

###### Getting Subscription Period Details

- [var numberOfUnits: Int](/documentation/storekit/skproductsubscriptionperiod/numberofunits)
- [var unit: SKProduct.PeriodUnit](/documentation/storekit/skproductsubscriptionperiod/unit)
- [SKProduct.PeriodUnit](/documentation/storekit/skproduct/periodunit)

###### Period Units

- [case day](/documentation/storekit/skproduct/periodunit/day)
- [case month](/documentation/storekit/skproduct/periodunit/month)
- [case week](/documentation/storekit/skproduct/periodunit/week)
- [case year](/documentation/storekit/skproduct/periodunit/year)

###### Initializers

- [init?(rawValue: UInt)](/documentation/storekit/skproduct/periodunit/init(rawvalue:))
- [SKProduct.PeriodUnit](/documentation/storekit/skproduct/periodunit)

###### Period Units

- [case day](/documentation/storekit/skproduct/periodunit/day)
- [case month](/documentation/storekit/skproduct/periodunit/month)
- [case week](/documentation/storekit/skproduct/periodunit/week)
- [case year](/documentation/storekit/skproduct/periodunit/year)

###### Initializers

- [init?(rawValue: UInt)](/documentation/storekit/skproduct/periodunit/init(rawvalue:))

##### Getting Downloadable Content Information

- [var isDownloadable: Bool](/documentation/storekit/skproduct/isdownloadable)
- [var downloadContentLengths: [NSNumber]](/documentation/storekit/skproduct/downloadcontentlengths)
- [var downloadContentVersion: String](/documentation/storekit/skproduct/downloadcontentversion)
- [var downloadable: Bool](/documentation/storekit/skproduct/downloadable)

#### Storefronts

- [SKStorefront](/documentation/storekit/skstorefront)

##### Identifying the Storefront

- [var countryCode: String](/documentation/storekit/skstorefront/countrycode)
- [var identifier: String](/documentation/storekit/skstorefront/identifier)

#### Purchases

- [Requesting a payment from the App Store](/documentation/storekit/requesting-a-payment-from-the-app-store)
- [Processing a transaction](/documentation/storekit/processing-a-transaction)
- [SKPayment](/documentation/storekit/skpayment)

##### Creating Payments

- [convenience init(product: SKProduct)](/documentation/storekit/skpayment/init(product:))

##### Getting Payment Details

- [var productIdentifier: String](/documentation/storekit/skpayment/productidentifier)
- [var quantity: Int](/documentation/storekit/skpayment/quantity)
- [var requestData: Data?](/documentation/storekit/skpayment/requestdata)
- [var applicationUsername: String?](/documentation/storekit/skpayment/applicationusername)

##### Simulating Purchases for Testing

- [var simulatesAskToBuyInSandbox: Bool](/documentation/storekit/skpayment/simulatesasktobuyinsandbox)

##### Getting Discount Details

- [var paymentDiscount: SKPaymentDiscount?](/documentation/storekit/skpayment/paymentdiscount)
- [SKPaymentDiscount](/documentation/storekit/skpaymentdiscount)

###### Initializing a Payment Discount

- [init(identifier: String, keyIdentifier: String, nonce: UUID, signature: String, timestamp: NSNumber)](/documentation/storekit/skpaymentdiscount/init(identifier:keyidentifier:nonce:signature:timestamp:))

###### Identifying the Discount

- [var identifier: String](/documentation/storekit/skpaymentdiscount/identifier)
- [var keyIdentifier: String](/documentation/storekit/skpaymentdiscount/keyidentifier)

###### Validating the Discount

- [var nonce: UUID](/documentation/storekit/skpaymentdiscount/nonce)
- [var signature: String](/documentation/storekit/skpaymentdiscount/signature)
- [var timestamp: NSNumber](/documentation/storekit/skpaymentdiscount/timestamp)
- [SKMutablePayment](/documentation/storekit/skmutablepayment)

##### Getting and Setting Attributes

- [var productIdentifier: String](/documentation/storekit/skmutablepayment/productidentifier)
- [var quantity: Int](/documentation/storekit/skmutablepayment/quantity)
- [var requestData: Data?](/documentation/storekit/skmutablepayment/requestdata)
- [var applicationUsername: String?](/documentation/storekit/skmutablepayment/applicationusername)

##### Simulating Buy for Testing

- [var simulatesAskToBuyInSandbox: Bool](/documentation/storekit/skmutablepayment/simulatesasktobuyinsandbox)

##### Getting and Setting Discount Details

- [var paymentDiscount: SKPaymentDiscount?](/documentation/storekit/skmutablepayment/paymentdiscount)
- [SKPaymentTransaction](/documentation/storekit/skpaymenttransaction)

##### Getting Transaction Information

- [var payment: SKPayment](/documentation/storekit/skpaymenttransaction/payment)
- [var transactionIdentifier: String?](/documentation/storekit/skpaymenttransaction/transactionidentifier)
- [var transactionDate: Date?](/documentation/storekit/skpaymenttransaction/transactiondate)
- [var original: SKPaymentTransaction?](/documentation/storekit/skpaymenttransaction/original)
- [var error: (any Error)?](/documentation/storekit/skpaymenttransaction/error)
- [var transactionReceipt: Data?](/documentation/storekit/skpaymenttransaction/transactionreceipt)

##### Getting Downloads

- [var downloads: [SKDownload]](/documentation/storekit/skpaymenttransaction/downloads)

##### Getting Transaction State

- [var transactionState: SKPaymentTransactionState](/documentation/storekit/skpaymenttransaction/transactionstate)
- [SKPaymentTransactionState](/documentation/storekit/skpaymenttransactionstate)

###### Constants

- [case purchasing](/documentation/storekit/skpaymenttransactionstate/purchasing)
- [case purchased](/documentation/storekit/skpaymenttransactionstate/purchased)
- [case failed](/documentation/storekit/skpaymenttransactionstate/failed)
- [case restored](/documentation/storekit/skpaymenttransactionstate/restored)
- [case deferred](/documentation/storekit/skpaymenttransactionstate/deferred)

###### Initializers

- [init?(rawValue: Int)](/documentation/storekit/skpaymenttransactionstate/init(rawvalue:))

#### Purchase validation

- [Choosing a receipt validation technique](/documentation/storekit/choosing-a-receipt-validation-technique)
- [Validating receipts with the App Store](/documentation/storekit/validating-receipts-with-the-app-store)
- [var appStoreReceiptURL: URL?](/documentation/foundation/bundle/appstorereceipturl)
- [SKReceiptRefreshRequest](/documentation/storekit/skreceiptrefreshrequest)

##### Initializing Receipt Refresh Requests

- [init(receiptProperties: [String : Any]?)](/documentation/storekit/skreceiptrefreshrequest/init(receiptproperties:))

##### Receipt Properties and Keys

- [var receiptProperties: [String : Any]?](/documentation/storekit/skreceiptrefreshrequest/receiptproperties)
- [let SKReceiptPropertyIsExpired: String](/documentation/storekit/skreceiptpropertyisexpired)
- [let SKReceiptPropertyIsRevoked: String](/documentation/storekit/skreceiptpropertyisrevoked)
- [let SKReceiptPropertyIsVolumePurchase: String](/documentation/storekit/skreceiptpropertyisvolumepurchase)

#### Content delivery

- [Unlocking purchased content](/documentation/storekit/unlocking-purchased-content)
- [Persisting a purchase](/documentation/storekit/persisting-a-purchase)
- [Finishing a transaction](/documentation/storekit/finishing-a-transaction)
- [SKDownload](/documentation/storekit/skdownload)

##### Getting Content Information

- [var expectedContentLength: Int64](/documentation/storekit/skdownload/expectedcontentlength)
- [var contentIdentifier: String](/documentation/storekit/skdownload/contentidentifier)
- [var contentVersion: String](/documentation/storekit/skdownload/contentversion)
- [var transaction: SKPaymentTransaction](/documentation/storekit/skdownload/transaction)
- [var contentLength: Int64](/documentation/storekit/skdownload/contentlength)

##### Getting State Information

- [var state: SKDownloadState](/documentation/storekit/skdownload/state)
- [var progress: Float](/documentation/storekit/skdownload/progress)
- [var timeRemaining: TimeInterval](/documentation/storekit/skdownload/timeremaining)
- [var SKDownloadTimeRemainingUnknown: TimeInterval](/documentation/storekit/skdownloadtimeremainingunknown)
- [SKDownloadState](/documentation/storekit/skdownloadstate)

###### Constants

- [case waiting](/documentation/storekit/skdownloadstate/waiting)
- [case active](/documentation/storekit/skdownloadstate/active)
- [case paused](/documentation/storekit/skdownloadstate/paused)
- [case finished](/documentation/storekit/skdownloadstate/finished)
- [case failed](/documentation/storekit/skdownloadstate/failed)
- [case cancelled](/documentation/storekit/skdownloadstate/cancelled)

###### Initializers

- [init?(rawValue: Int)](/documentation/storekit/skdownloadstate/init(rawvalue:))
- [var downloadState: SKDownloadState](/documentation/storekit/skdownload/downloadstate)

##### Accessing a Completed Download

- [var error: (any Error)?](/documentation/storekit/skdownload/error)
- [var contentURL: URL?](/documentation/storekit/skdownload/contenturl)

##### Managing Downloaded Content

- [class func contentURL(forProductID: String) -> URL?](/documentation/storekit/skdownload/contenturl(forproductid:))
- [class func deleteContent(forProductID: String)](/documentation/storekit/skdownload/deletecontent(forproductid:))

#### Refunds

- [Handling refund notifications](/documentation/storekit/handling-refund-notifications)
- [Testing refund requests](/documentation/storekit/testing-refund-requests)

#### Providing access to previously purchased products

- [Restoring purchased products](/documentation/storekit/restoring-purchased-products)
- [SKReceiptRefreshRequest](/documentation/storekit/skreceiptrefreshrequest)

##### Initializing Receipt Refresh Requests

- [init(receiptProperties: [String : Any]?)](/documentation/storekit/skreceiptrefreshrequest/init(receiptproperties:))

##### Receipt Properties and Keys

- [var receiptProperties: [String : Any]?](/documentation/storekit/skreceiptrefreshrequest/receiptproperties)
- [let SKReceiptPropertyIsExpired: String](/documentation/storekit/skreceiptpropertyisexpired)
- [let SKReceiptPropertyIsRevoked: String](/documentation/storekit/skreceiptpropertyisrevoked)
- [let SKReceiptPropertyIsVolumePurchase: String](/documentation/storekit/skreceiptpropertyisvolumepurchase)
- [SKRequest](/documentation/storekit/skrequest)

##### Controlling the Request

- [func start()](/documentation/storekit/skrequest/start())
- [func cancel()](/documentation/storekit/skrequest/cancel())

##### Accessing the Delegate

- [var delegate: (any SKRequestDelegate)?](/documentation/storekit/skrequest/delegate)
- [SKRequestDelegate](/documentation/storekit/skrequestdelegate)

###### Completing Requests

- [func requestDidFinish(SKRequest)](/documentation/storekit/skrequestdelegate/requestdidfinish(_:))

###### Handling Errors

- [func request(SKRequest, didFailWithError: any Error)](/documentation/storekit/skrequestdelegate/request(_:didfailwitherror:))
- [SKPaymentTransaction](/documentation/storekit/skpaymenttransaction)

##### Getting Transaction Information

- [var payment: SKPayment](/documentation/storekit/skpaymenttransaction/payment)
- [var transactionIdentifier: String?](/documentation/storekit/skpaymenttransaction/transactionidentifier)
- [var transactionDate: Date?](/documentation/storekit/skpaymenttransaction/transactiondate)
- [var original: SKPaymentTransaction?](/documentation/storekit/skpaymenttransaction/original)
- [var error: (any Error)?](/documentation/storekit/skpaymenttransaction/error)
- [var transactionReceipt: Data?](/documentation/storekit/skpaymenttransaction/transactionreceipt)

##### Getting Downloads

- [var downloads: [SKDownload]](/documentation/storekit/skpaymenttransaction/downloads)

##### Getting Transaction State

- [var transactionState: SKPaymentTransactionState](/documentation/storekit/skpaymenttransaction/transactionstate)
- [SKPaymentTransactionState](/documentation/storekit/skpaymenttransactionstate)

###### Constants

- [case purchasing](/documentation/storekit/skpaymenttransactionstate/purchasing)
- [case purchased](/documentation/storekit/skpaymenttransactionstate/purchased)
- [case failed](/documentation/storekit/skpaymenttransactionstate/failed)
- [case restored](/documentation/storekit/skpaymenttransactionstate/restored)
- [case deferred](/documentation/storekit/skpaymenttransactionstate/deferred)

###### Initializers

- [init?(rawValue: Int)](/documentation/storekit/skpaymenttransactionstate/init(rawvalue:))
- [func SKTerminateForInvalidReceipt()](/documentation/storekit/skterminateforinvalidreceipt())

#### Family Sharing

- [Supporting Family Sharing in your app](/documentation/storekit/supporting-family-sharing-in-your-app)
- [var isFamilyShareable: Bool](/documentation/storekit/skproduct/isfamilyshareable)
- [func paymentQueue(SKPaymentQueue, didRevokeEntitlementsForProductIdentifiers: [String])](/documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:didrevokeentitlementsforproductidentifiers:))

#### Subscriptions

- [Subscriptions and offers](/documentation/storekit/subscriptions-and-offers)

##### Essentials

- [Handling Subscriptions Billing](/documentation/storekit/handling-subscriptions-billing)
- [Enabling App Store Server Notifications](/documentation/storekit/enabling-app-store-server-notifications)
- [Offering a Subscription Across Multiple Apps](/documentation/storekit/offering-a-subscription-across-multiple-apps)
- [Reducing Involuntary Subscriber Churn](/documentation/storekit/reducing-involuntary-subscriber-churn)

##### Introductory offers

- [Implementing introductory offers in your app](/documentation/storekit/implementing-introductory-offers-in-your-app)
- [Testing introductory offers](/documentation/storekit/testing-introductory-offers)
- [SKProductDiscount](/documentation/storekit/skproductdiscount)

###### Identifying the Discount

- [var identifier: String?](/documentation/storekit/skproductdiscount/identifier)
- [var type: SKProductDiscount.Type](/documentation/storekit/skproductdiscount/type-swift.property)
- [SKProductDiscount.Type](/documentation/storekit/skproductdiscount/type-swift.enum)

###### Types of Offers

- [case introductory](/documentation/storekit/skproductdiscount/type-swift.enum/introductory)
- [case subscription](/documentation/storekit/skproductdiscount/type-swift.enum/subscription)

###### Initializers

- [init?(rawValue: UInt)](/documentation/storekit/skproductdiscount/type-swift.enum/init(rawvalue:))

###### Getting Price and Payment Mode

- [var price: NSDecimalNumber](/documentation/storekit/skproductdiscount/price)
- [var priceLocale: Locale](/documentation/storekit/skproductdiscount/pricelocale)
- [var paymentMode: SKProductDiscount.PaymentMode](/documentation/storekit/skproductdiscount/paymentmode-swift.property)
- [SKProductDiscount.PaymentMode](/documentation/storekit/skproductdiscount/paymentmode-swift.enum)

###### Discount Price Payment Modes

- [case payAsYouGo](/documentation/storekit/skproductdiscount/paymentmode-swift.enum/payasyougo)
- [case payUpFront](/documentation/storekit/skproductdiscount/paymentmode-swift.enum/payupfront)
- [case freeTrial](/documentation/storekit/skproductdiscount/paymentmode-swift.enum/freetrial)

###### Initializers

- [init?(rawValue: UInt)](/documentation/storekit/skproductdiscount/paymentmode-swift.enum/init(rawvalue:))

###### Getting the Discount Duration

- [var numberOfPeriods: Int](/documentation/storekit/skproductdiscount/numberofperiods)
- [var subscriptionPeriod: SKProductSubscriptionPeriod](/documentation/storekit/skproductdiscount/subscriptionperiod)

##### Promotional offers

- [Setting up promotional offers](/documentation/storekit/setting-up-promotional-offers)
- [Implementing promotional offers in your app](/documentation/storekit/implementing-promotional-offers-in-your-app)
- [Generating a signature for promotional offers](/documentation/storekit/generating-a-signature-for-promotional-offers)
- [Generating a Promotional Offer Signature on the Server](/documentation/storekit/generating-a-promotional-offer-signature-on-the-server)
- [SKPaymentDiscount](/documentation/storekit/skpaymentdiscount)

###### Initializing a Payment Discount

- [init(identifier: String, keyIdentifier: String, nonce: UUID, signature: String, timestamp: NSNumber)](/documentation/storekit/skpaymentdiscount/init(identifier:keyidentifier:nonce:signature:timestamp:))

###### Identifying the Discount

- [var identifier: String](/documentation/storekit/skpaymentdiscount/identifier)
- [var keyIdentifier: String](/documentation/storekit/skpaymentdiscount/keyidentifier)

###### Validating the Discount

- [var nonce: UUID](/documentation/storekit/skpaymentdiscount/nonce)
- [var signature: String](/documentation/storekit/skpaymentdiscount/signature)
- [var timestamp: NSNumber](/documentation/storekit/skpaymentdiscount/timestamp)

##### Offer codes

- [Implementing offer codes in your app](/documentation/storekit/implementing-offer-codes-in-your-app)

##### Subscription service entitlement

- [Determining service entitlement on the server](/documentation/storekit/determining-service-entitlement-on-the-server)

#### Promotions

- [Promoting In-App Purchases](/documentation/storekit/promoting-in-app-purchases)
- [Testing promoted In-App Purchases](/documentation/storekit/testing-promoted-in-app-purchases)
- [SKProductStorePromotionController](/documentation/storekit/skproductstorepromotioncontroller)

##### Managing promoted product order

- [func fetchStorePromotionOrder(completionHandler: (([SKProduct], (any Error)?) -> Void)?)](/documentation/storekit/skproductstorepromotioncontroller/fetchstorepromotionorder(completionhandler:))
- [func update(storePromotionOrder: [SKProduct], completionHandler: (((any Error)?) -> Void)?)](/documentation/storekit/skproductstorepromotioncontroller/update(storepromotionorder:completionhandler:))

##### Managing promoted product visibility

- [func fetchStorePromotionVisibility(for: SKProduct, completionHandler: ((SKProductStorePromotionVisibility, (any Error)?) -> Void)?)](/documentation/storekit/skproductstorepromotioncontroller/fetchstorepromotionvisibility(for:completionhandler:))
- [func update(storePromotionVisibility: SKProductStorePromotionVisibility, for: SKProduct, completionHandler: (((any Error)?) -> Void)?)](/documentation/storekit/skproductstorepromotioncontroller/update(storepromotionvisibility:for:completionhandler:))
- [SKProductStorePromotionVisibility](/documentation/storekit/skproductstorepromotionvisibility)

###### Enumeration cases

- [case `default`](/documentation/storekit/skproductstorepromotionvisibility/default)
- [case hide](/documentation/storekit/skproductstorepromotionvisibility/hide)
- [case show](/documentation/storekit/skproductstorepromotionvisibility/show)

###### Initializers

- [init?(rawValue: Int)](/documentation/storekit/skproductstorepromotionvisibility/init(rawvalue:))

##### Getting the controller

- [class func `default`() -> Self](/documentation/storekit/skproductstorepromotioncontroller/default())

#### Testing In-App Purchases

- [Testing at all stages of development with Xcode and the sandbox](/documentation/storekit/testing-at-all-stages-of-development-with-xcode-and-the-sandbox)
- [Setting up StoreKit Testing in Xcode](/documentation/xcode/setting-up-storekit-testing-in-xcode)
- [Testing In-App Purchases in Xcode](/documentation/storekit/testing-in-app-purchases-in-xcode)
- [Testing In-App Purchases with sandbox](/documentation/storekit/testing-in-app-purchases-with-sandbox)

##### Product identifiers and requests

- [Testing fetching product identifiers](/documentation/storekit/testing-fetching-product-identifiers)
- [Testing invalid product identifier handling](/documentation/storekit/testing-invalid-product-identifier-handling)
- [Testing a product request](/documentation/storekit/testing-a-product-request)

##### Payment transactions

- [Testing purchases made outside your app](/documentation/storekit/testing-purchases-made-outside-your-app)
- [Testing win-back offers in the sandbox environment](/documentation/storekit/testing-win-back-offers-in-the-sandbox-environment)
- [Testing an interrupted purchase](/documentation/storekit/testing-an-interrupted-purchase)
- [Testing failing subscription renewals and In-App Purchases](/documentation/storekit/testing-failing-subscription-renewals-and-in-app-purchases)
- [Testing a payment request](/documentation/storekit/testing-a-payment-request)

##### Subscriptions

- [Testing an auto-renewable subscription](/documentation/storekit/testing-an-auto-renewable-subscription)
- [Testing resubscribing from the subscriptions page](/documentation/storekit/testing-resubscribing-from-the-subscriptions-page)
- [Testing disabling auto-renew](/documentation/storekit/testing-disabling-auto-renew)

##### Family Sharing

- [Testing Family Sharing](/documentation/storekit/testing-family-sharing)

##### Age Assurance

- [Testing Age Assurance in Sandbox](/documentation/storekit/testing-age-assurance-in-sandbox)

##### Refunds

- [Testing refund requests](/documentation/storekit/testing-refund-requests)

##### Server notifications

- [Testing App Store server notifications](/documentation/storekit/testing-app-store-server-notifications)

##### Transaction observer

- [Testing transaction observer code](/documentation/storekit/testing-transaction-observer-code)
- [Testing a successful transaction](/documentation/storekit/testing-a-successful-transaction)
- [Testing complete transactions](/documentation/storekit/testing-complete-transactions)

#### Errors

- [Handling errors](/documentation/storekit/handling-errors)
- [SKError.Code](/documentation/storekit/skerror/code)

##### Enumeration Cases

- [case unknown](/documentation/storekit/skerror/code/unknown)
- [case clientInvalid](/documentation/storekit/skerror/code/clientinvalid)
- [case paymentCancelled](/documentation/storekit/skerror/code/paymentcancelled)
- [case paymentInvalid](/documentation/storekit/skerror/code/paymentinvalid)
- [case paymentNotAllowed](/documentation/storekit/skerror/code/paymentnotallowed)
- [case storeProductNotAvailable](/documentation/storekit/skerror/code/storeproductnotavailable)
- [case cloudServicePermissionDenied](/documentation/storekit/skerror/code/cloudservicepermissiondenied)
- [case cloudServiceNetworkConnectionFailed](/documentation/storekit/skerror/code/cloudservicenetworkconnectionfailed)
- [case cloudServiceRevoked](/documentation/storekit/skerror/code/cloudservicerevoked)
- [case privacyAcknowledgementRequired](/documentation/storekit/skerror/code/privacyacknowledgementrequired)
- [case unauthorizedRequestData](/documentation/storekit/skerror/code/unauthorizedrequestdata)
- [case invalidOfferIdentifier](/documentation/storekit/skerror/code/invalidofferidentifier)
- [case invalidOfferPrice](/documentation/storekit/skerror/code/invalidofferprice)
- [case invalidSignature](/documentation/storekit/skerror/code/invalidsignature)
- [case missingOfferParams](/documentation/storekit/skerror/code/missingofferparams)
- [case ineligibleForOffer](/documentation/storekit/skerror/code/ineligibleforoffer)
- [case overlayCancelled](/documentation/storekit/skerror/code/overlaycancelled)
- [case overlayInvalidConfiguration](/documentation/storekit/skerror/code/overlayinvalidconfiguration)
- [case overlayPresentedInBackgroundScene](/documentation/storekit/skerror/code/overlaypresentedinbackgroundscene)
- [case overlayTimeout](/documentation/storekit/skerror/code/overlaytimeout)
- [case unsupportedPlatform](/documentation/storekit/skerror/code/unsupportedplatform)

##### Initializers

- [init?(rawValue: Int)](/documentation/storekit/skerror/code/init(rawvalue:))
- [SKError](/documentation/storekit/skerror)

##### Error codes

- [SKError.Code](/documentation/storekit/skerror/code)

###### Enumeration Cases

- [case unknown](/documentation/storekit/skerror/code/unknown)
- [case clientInvalid](/documentation/storekit/skerror/code/clientinvalid)
- [case paymentCancelled](/documentation/storekit/skerror/code/paymentcancelled)
- [case paymentInvalid](/documentation/storekit/skerror/code/paymentinvalid)
- [case paymentNotAllowed](/documentation/storekit/skerror/code/paymentnotallowed)
- [case storeProductNotAvailable](/documentation/storekit/skerror/code/storeproductnotavailable)
- [case cloudServicePermissionDenied](/documentation/storekit/skerror/code/cloudservicepermissiondenied)
- [case cloudServiceNetworkConnectionFailed](/documentation/storekit/skerror/code/cloudservicenetworkconnectionfailed)
- [case cloudServiceRevoked](/documentation/storekit/skerror/code/cloudservicerevoked)
- [case privacyAcknowledgementRequired](/documentation/storekit/skerror/code/privacyacknowledgementrequired)
- [case unauthorizedRequestData](/documentation/storekit/skerror/code/unauthorizedrequestdata)
- [case invalidOfferIdentifier](/documentation/storekit/skerror/code/invalidofferidentifier)
- [case invalidOfferPrice](/documentation/storekit/skerror/code/invalidofferprice)
- [case invalidSignature](/documentation/storekit/skerror/code/invalidsignature)
- [case missingOfferParams](/documentation/storekit/skerror/code/missingofferparams)
- [case ineligibleForOffer](/documentation/storekit/skerror/code/ineligibleforoffer)
- [case overlayCancelled](/documentation/storekit/skerror/code/overlaycancelled)
- [case overlayInvalidConfiguration](/documentation/storekit/skerror/code/overlayinvalidconfiguration)
- [case overlayPresentedInBackgroundScene](/documentation/storekit/skerror/code/overlaypresentedinbackgroundscene)
- [case overlayTimeout](/documentation/storekit/skerror/code/overlaytimeout)
- [case unsupportedPlatform](/documentation/storekit/skerror/code/unsupportedplatform)

###### Initializers

- [init?(rawValue: Int)](/documentation/storekit/skerror/code/init(rawvalue:))
- [static var unknown: SKError.Code](/documentation/storekit/skerror/unknown)
- [static var clientInvalid: SKError.Code](/documentation/storekit/skerror/clientinvalid)
- [static var paymentCancelled: SKError.Code](/documentation/storekit/skerror/paymentcancelled)
- [static var paymentInvalid: SKError.Code](/documentation/storekit/skerror/paymentinvalid)
- [static var paymentNotAllowed: SKError.Code](/documentation/storekit/skerror/paymentnotallowed)
- [static var storeProductNotAvailable: SKError.Code](/documentation/storekit/skerror/storeproductnotavailable)
- [static var cloudServicePermissionDenied: SKError.Code](/documentation/storekit/skerror/cloudservicepermissiondenied)
- [static var cloudServiceNetworkConnectionFailed: SKError.Code](/documentation/storekit/skerror/cloudservicenetworkconnectionfailed)
- [static var cloudServiceRevoked: SKError.Code](/documentation/storekit/skerror/cloudservicerevoked)
- [static var privacyAcknowledgementRequired: SKError.Code](/documentation/storekit/skerror/privacyacknowledgementrequired)
- [static var unauthorizedRequestData: SKError.Code](/documentation/storekit/skerror/unauthorizedrequestdata)
- [static var invalidOfferIdentifier: SKError.Code](/documentation/storekit/skerror/invalidofferidentifier)
- [static var invalidOfferPrice: SKError.Code](/documentation/storekit/skerror/invalidofferprice)
- [static var invalidSignature: SKError.Code](/documentation/storekit/skerror/invalidsignature)
- [static var missingOfferParams: SKError.Code](/documentation/storekit/skerror/missingofferparams)
- [static var ineligibleForOffer: SKError.Code](/documentation/storekit/skerror/ineligibleforoffer)
- [static var overlayCancelled: SKError.Code](/documentation/storekit/skerror/overlaycancelled)
- [static var overlayInvalidConfiguration: SKError.Code](/documentation/storekit/skerror/overlayinvalidconfiguration)
- [static var overlayPresentedInBackgroundScene: SKError.Code](/documentation/storekit/skerror/overlaypresentedinbackgroundscene)
- [static var overlayTimeout: SKError.Code](/documentation/storekit/skerror/overlaytimeout)
- [static var unsupportedPlatform: SKError.Code](/documentation/storekit/skerror/unsupportedplatform)

##### Error domain

- [let SKErrorDomain: String](/documentation/storekit/skerrordomain)

##### Type Properties

- [static var errorDomain: String](/documentation/storekit/skerror/errordomain)
- [let SKErrorDomain: String](/documentation/storekit/skerrordomain)
- [Understanding StoreKit workflows](/documentation/storekit/understanding-storekit-workflows)
- [Getting started with In-App Purchase using StoreKit views](/documentation/storekit/getting-started-with-in-app-purchases-using-storekit-views)

## App transaction

- [Supporting business model changes by using the app transaction](/documentation/storekit/supporting-business-model-changes-by-using-the-app-transaction)
- [AppTransaction](/documentation/storekit/apptransaction)

### Getting the signed app transaction

- [static var shared: VerificationResult<AppTransaction>](/documentation/storekit/apptransaction/shared)

### Getting the app transaction identifier

- [var appTransactionID: String](/documentation/storekit/apptransaction/apptransactionid)

### Getting the environment

- [let environment: AppStore.Environment](/documentation/storekit/apptransaction/environment)
- [AppStore.Environment](/documentation/storekit/appstore/environment)

#### Getting the environment value

- [static let production: AppStore.Environment](/documentation/storekit/appstore/environment/production)
- [static let sandbox: AppStore.Environment](/documentation/storekit/appstore/environment/sandbox)
- [static let xcode: AppStore.Environment](/documentation/storekit/appstore/environment/xcode)

### Getting app and version information

- [let bundleID: String](/documentation/storekit/apptransaction/bundleid)
- [let appVersion: String](/documentation/storekit/apptransaction/appversion)
- [let originalAppVersion: String](/documentation/storekit/apptransaction/originalappversion)
- [let appID: UInt64?](/documentation/storekit/apptransaction/appid)
- [let appVersionID: UInt64?](/documentation/storekit/apptransaction/appversionid)

### Getting the original platform

- [let originalPlatform: AppStore.Platform](/documentation/storekit/apptransaction/originalplatform)
- [AppStore.Platform](/documentation/storekit/appstore/platform)

#### Getting platform values

- [static let iOS: AppStore.Platform](/documentation/storekit/appstore/platform/ios)
- [static let macOS: AppStore.Platform](/documentation/storekit/appstore/platform/macos)
- [static let tvOS: AppStore.Platform](/documentation/storekit/appstore/platform/tvos)
- [static let visionOS: AppStore.Platform](/documentation/storekit/appstore/platform/visionos)

### Getting purchase dates

- [let originalPurchaseDate: Date](/documentation/storekit/apptransaction/originalpurchasedate)
- [let preorderDate: Date?](/documentation/storekit/apptransaction/preorderdate)

### Verifying the app transaction

- [let deviceVerification: Data](/documentation/storekit/apptransaction/deviceverification)
- [let deviceVerificationNonce: UUID](/documentation/storekit/apptransaction/deviceverificationnonce)
- [let signedDate: Date](/documentation/storekit/apptransaction/signeddate)

### Getting app transaction information in JSON format

- [var jsonRepresentation: Data](/documentation/storekit/apptransaction/jsonrepresentation)

### Getting app transaction from the server

- [static func refresh() async throws -> VerificationResult<AppTransaction>](/documentation/storekit/apptransaction/refresh())

### Deprecated

- [var originalPlatformStringRepresentation: String](/documentation/storekit/apptransaction/originalplatformstringrepresentation)

## Messages

- [Message](/documentation/storekit/message)

### Getting messages and message reasons

- [static var messages: Message.Messages](/documentation/storekit/message/messages-swift.type.property)
- [let reason: Message.Reason](/documentation/storekit/message/reason-swift.property)
- [Message.Messages](/documentation/storekit/message/messages-swift.struct)
- [Message.Reason](/documentation/storekit/message/reason-swift.struct)

#### Getting the message reasons

- [static let billingIssue: Message.Reason](/documentation/storekit/message/reason-swift.struct/billingissue)
- [static let generic: Message.Reason](/documentation/storekit/message/reason-swift.struct/generic)
- [static let priceIncreaseConsent: Message.Reason](/documentation/storekit/message/reason-swift.struct/priceincreaseconsent)
- [static let winBackOffer: Message.Reason](/documentation/storekit/message/reason-swift.struct/winbackoffer)

#### Getting the localized description

- [var localizedDescription: String](/documentation/storekit/message/reason-swift.struct/localizeddescription)

### Displaying messages

- [func display(in: UIWindowScene) throws](/documentation/storekit/message/display(in:))
- [Message.Reason](/documentation/storekit/message/reason-swift.struct)

### Getting the message reasons

- [static let billingIssue: Message.Reason](/documentation/storekit/message/reason-swift.struct/billingissue)
- [static let generic: Message.Reason](/documentation/storekit/message/reason-swift.struct/generic)
- [static let priceIncreaseConsent: Message.Reason](/documentation/storekit/message/reason-swift.struct/priceincreaseconsent)
- [static let winBackOffer: Message.Reason](/documentation/storekit/message/reason-swift.struct/winbackoffer)

### Getting the localized description

- [var localizedDescription: String](/documentation/storekit/message/reason-swift.struct/localizeddescription)
- [DisplayMessageAction](/documentation/storekit/displaymessageaction)

### Displaying the message

- [func callAsFunction(Message) throws](/documentation/storekit/displaymessageaction/callasfunction(_:))

## Reviews

- [Requesting App Store reviews](/documentation/storekit/requesting-app-store-reviews)
- [RequestReviewAction](/documentation/storekit/requestreviewaction)

### Call as function

- [func callAsFunction()](/documentation/storekit/requestreviewaction/callasfunction())

### Environment value

- [var requestReview: RequestReviewAction](/documentation/swiftui/environmentvalues/requestreview)
- [SKStoreReviewController](/documentation/storekit/skstorereviewcontroller)

### Indicating an appropriate time for a review

- [class func requestReview(in: UIWindowScene)](/documentation/storekit/skstorereviewcontroller/requestreview(in:))
- [class func requestReview()](/documentation/storekit/skstorereviewcontroller/requestreview())

## Recommendations

- [Offering media for sale in your app](/documentation/storekit/offering-media-for-sale-in-your-app)
- [SKStoreProductViewController](/documentation/storekit/skstoreproductviewcontroller)

### Setting a delegate

- [var delegate: (any SKStoreProductViewControllerDelegate)?](/documentation/storekit/skstoreproductviewcontroller/delegate)
- [SKStoreProductViewControllerDelegate](/documentation/storekit/skstoreproductviewcontrollerdelegate)

#### Responding to a Dismiss Action

- [func productViewControllerDidFinish(SKStoreProductViewController)](/documentation/storekit/skstoreproductviewcontrollerdelegate/productviewcontrollerdidfinish(_:))

### Loading a new product screen

- [Offering media for sale in your app](/documentation/storekit/offering-media-for-sale-in-your-app)
- [func loadProduct(withParameters: [String : Any], completionBlock: ((Bool, (any Error)?) -> Void)?)](/documentation/storekit/skstoreproductviewcontroller/loadproduct(withparameters:completionblock:))
- [func loadProduct(withParameters: [String : Any], impression: SKAdImpression, completionBlock: ((Bool, (any Error)?) -> Void)?)](/documentation/storekit/skstoreproductviewcontroller/loadproduct(withparameters:impression:completionblock:))
- [func loadProduct(parameters: [String : Any], impression: AppImpression) async throws](/documentation/storekit/skstoreproductviewcontroller/loadproduct(parameters:impression:))
- [func loadProduct(parameters: [String : Any], impression: AppImpression, reengagementURL: URL) async throws](/documentation/storekit/skstoreproductviewcontroller/loadproduct(parameters:impression:reengagementurl:))
- [Product Dictionary Keys](/documentation/storekit/product-dictionary-keys)

#### Required Key

- [let SKStoreProductParameterITunesItemIdentifier: String](/documentation/storekit/skstoreproductparameteritunesitemidentifier)

#### Affiliate and Analytics Keys

- [let SKStoreProductParameterProductIdentifier: String](/documentation/storekit/skstoreproductparameterproductidentifier)
- [let SKStoreProductParameterAdvertisingPartnerToken: String](/documentation/storekit/skstoreproductparameteradvertisingpartnertoken)
- [let SKStoreProductParameterAffiliateToken: String](/documentation/storekit/skstoreproductparameteraffiliatetoken)
- [let SKStoreProductParameterCampaignToken: String](/documentation/storekit/skstoreproductparametercampaigntoken)
- [let SKStoreProductParameterProviderToken: String](/documentation/storekit/skstoreproductparameterprovidertoken)
- [let SKStoreProductParameterCustomProductPageIdentifier: String](/documentation/storekit/skstoreproductparametercustomproductpageidentifier)
- [SKOverlay](/documentation/storekit/skoverlay)

### Creating an overlay

- [init(configuration: SKOverlay.Configuration)](/documentation/storekit/skoverlay/init(configuration:))
- [var configuration: SKOverlay.Configuration](/documentation/storekit/skoverlay/configuration-swift.property)
- [SKOverlay.AppConfiguration](/documentation/storekit/skoverlay/appconfiguration)

#### Creating an App Configuration

- [init(appIdentifier: String, position: SKOverlay.Position)](/documentation/storekit/skoverlay/appconfiguration/init(appidentifier:position:))
- [var appIdentifier: String](/documentation/storekit/skoverlay/appconfiguration/appidentifier)
- [var position: SKOverlay.Position](/documentation/storekit/skoverlay/appconfiguration/position)
- [SKOverlay.Position](/documentation/storekit/skoverlay/position)

##### Describing the Overlay’s Position

- [case bottom](/documentation/storekit/skoverlay/position/bottom)
- [case bottomRaised](/documentation/storekit/skoverlay/position/bottomraised)

##### Initializers

- [init?(rawValue: Int)](/documentation/storekit/skoverlay/position/init(rawvalue:))

#### Dismissing the Overlay

- [var userDismissible: Bool](/documentation/storekit/skoverlay/appconfiguration/userdismissible)

#### Verifying Advertising Campaigns

- [var campaignToken: String?](/documentation/storekit/skoverlay/appconfiguration/campaigntoken)
- [var providerToken: String?](/documentation/storekit/skoverlay/appconfiguration/providertoken)
- [func setAdditionalValue(Any?, forKey: String)](/documentation/storekit/skoverlay/appconfiguration/setadditionalvalue(_:forkey:))
- [func additionalValue(forKey: String) -> Any?](/documentation/storekit/skoverlay/appconfiguration/additionalvalue(forkey:))

#### Promoting the Latest App Version

- [var latestReleaseID: String?](/documentation/storekit/skoverlay/appconfiguration/latestreleaseid)

#### Advertising Another App

- [var customProductPageIdentifier: String?](/documentation/storekit/skoverlay/appconfiguration/customproductpageidentifier)

#### Setting an Ad Impression

- [func setAdImpression(SKAdImpression)](/documentation/storekit/skoverlay/appconfiguration/setadimpression(_:))

#### Instance Properties

- [var adAttributionReengagementURL: URL?](/documentation/storekit/skoverlay/appconfiguration/adattributionreengagementurl)
- [var appImpression: AppImpression?](/documentation/storekit/skoverlay/appconfiguration/appimpression)
- [SKOverlay.AppClipConfiguration](/documentation/storekit/skoverlay/appclipconfiguration)

#### Creating an App Clip Configuration

- [init(position: SKOverlay.Position)](/documentation/storekit/skoverlay/appclipconfiguration/init(position:))
- [var position: SKOverlay.Position](/documentation/storekit/skoverlay/appclipconfiguration/position)
- [SKOverlay.Position](/documentation/storekit/skoverlay/position)

##### Describing the Overlay’s Position

- [case bottom](/documentation/storekit/skoverlay/position/bottom)
- [case bottomRaised](/documentation/storekit/skoverlay/position/bottomraised)

##### Initializers

- [init?(rawValue: Int)](/documentation/storekit/skoverlay/position/init(rawvalue:))

#### Verifying Advertising Campaigns

- [var campaignToken: String?](/documentation/storekit/skoverlay/appclipconfiguration/campaigntoken)
- [var providerToken: String?](/documentation/storekit/skoverlay/appclipconfiguration/providertoken)
- [func setAdditionalValue(Any?, forKey: String)](/documentation/storekit/skoverlay/appclipconfiguration/setadditionalvalue(_:forkey:))
- [func additionalValue(forKey: String) -> Any?](/documentation/storekit/skoverlay/appclipconfiguration/additionalvalue(forkey:))

#### Promoting the Latest App Version

- [var latestReleaseID: String?](/documentation/storekit/skoverlay/appclipconfiguration/latestreleaseid)

#### Advertising Another App

- [var customProductPageIdentifier: String?](/documentation/storekit/skoverlay/appclipconfiguration/customproductpageidentifier)
- [SKOverlay.Configuration](/documentation/storekit/skoverlay/configuration-swift.class)

### Presenting an overlay

- [func present(in: UIWindowScene)](/documentation/storekit/skoverlay/present(in:))

### Dismissing an overlay

- [class func dismiss(in: UIWindowScene)](/documentation/storekit/skoverlay/dismiss(in:))

### Setting a delegate

- [var delegate: (any SKOverlayDelegate)?](/documentation/storekit/skoverlay/delegate)
- [SKOverlayDelegate](/documentation/storekit/skoverlaydelegate)

#### Responding to the Overlay’s Appearance and Disappearance

- [func storeOverlayWillStartPresentation(SKOverlay, transitionContext: SKOverlay.TransitionContext)](/documentation/storekit/skoverlaydelegate/storeoverlaywillstartpresentation(_:transitioncontext:))
- [func storeOverlayDidFinishPresentation(SKOverlay, transitionContext: SKOverlay.TransitionContext)](/documentation/storekit/skoverlaydelegate/storeoverlaydidfinishpresentation(_:transitioncontext:))
- [func storeOverlayWillStartDismissal(SKOverlay, transitionContext: SKOverlay.TransitionContext)](/documentation/storekit/skoverlaydelegate/storeoverlaywillstartdismissal(_:transitioncontext:))
- [func storeOverlayDidFinishDismissal(SKOverlay, transitionContext: SKOverlay.TransitionContext)](/documentation/storekit/skoverlaydelegate/storeoverlaydidfinishdismissal(_:transitioncontext:))
- [SKOverlay.TransitionContext](/documentation/storekit/skoverlay/transitioncontext)

##### Adding an Animation

- [func addAnimation(() -> Void)](/documentation/storekit/skoverlay/transitioncontext/addanimation(_:))
- [var startFrame: CGRect](/documentation/storekit/skoverlay/transitioncontext/startframe)
- [var endFrame: CGRect](/documentation/storekit/skoverlay/transitioncontext/endframe)

#### Responding to Failures

- [func storeOverlayDidFailToLoad(SKOverlay, error: any Error)](/documentation/storekit/skoverlaydelegate/storeoverlaydidfailtoload(_:error:))

## Background assets extension

- [StoreDownloaderExtension](/documentation/storekit/storedownloaderextension)

## Payment method binding

- [PaymentMethodBinding](/documentation/storekit/paymentmethodbinding)

### Determining eligiblity

- [init(id: String) async throws](/documentation/storekit/paymentmethodbinding/init(id:))

### Creating and identifying bindings

- [let id: String](/documentation/storekit/paymentmethodbinding/id)

### Binding payment methods

- [func bind() async throws](/documentation/storekit/paymentmethodbinding/bind())

### Reading errors

- [PaymentMethodBinding.PaymentMethodBindingError](/documentation/storekit/paymentmethodbinding/paymentmethodbindingerror)

#### Getting error codes

- [case failed](/documentation/storekit/paymentmethodbinding/paymentmethodbindingerror/failed)
- [case invalidPinningID](/documentation/storekit/paymentmethodbinding/paymentmethodbindingerror/invalidpinningid)
- [case notEligible](/documentation/storekit/paymentmethodbinding/paymentmethodbindingerror/noteligible)

## Ad network attribution

- [Ad network attribution](/documentation/storekit/ad-network-attribution)

### Ad impressions and installation validations

- [Understanding AdAttributionKit and SKAdNetwork interoperability](/documentation/adattributionkit/adattributionkit-skadnetwork-interoperability)
- [SKAdNetwork](/documentation/storekit/skadnetwork)

#### Essentials

- [Signing and providing ads](/documentation/storekit/signing-and-providing-ads)
- [Receiving ad attributions and postbacks](/documentation/storekit/receiving-ad-attributions-and-postbacks)
- [Receiving postbacks in multiple conversion windows](/documentation/storekit/receiving-postbacks-in-multiple-conversion-windows)
- [SKAdNetwork release notes](/documentation/storekit/skadnetwork-release-notes)

##### SKAdNetwork versions

- [SKAdNetwork 4 release notes](/documentation/storekit/skadnetwork-4-release-notes)
- [SKAdNetwork 3 release notes](/documentation/storekit/skadnetwork-3-release-notes)
- [SKAdNetwork 2.2 release notes](/documentation/storekit/skadnetwork-2-2-release-notes)
- [SKAdNetwork 2.1 release notes](/documentation/storekit/skadnetwork-2-1-release-notes)
- [SKAdNetwork 2 release notes](/documentation/storekit/skadnetwork-2-release-notes)
- [SKAdNetwork 1 release notes](/documentation/storekit/skadnetwork-1-release-notes)

#### Registering ad networks and configuring apps

- [Registering an ad network](/documentation/storekit/registering-an-ad-network)
- [Configuring a source app](/documentation/storekit/configuring-a-source-app)
- [Configuring an advertised app](/documentation/storekit/configuring-an-advertised-app)
- [SKAdNetworkItems](/documentation/bundleresources/information-property-list/skadnetworkitems)
- [NSAdvertisingAttributionReportEndpoint](/documentation/bundleresources/information-property-list/nsadvertisingattributionreportendpoint)

#### Signing StoreKit-rendered ads

- [Generating the signature to validate StoreKit-rendered ads](/documentation/storekit/generating-the-signature-to-validate-storekit-rendered-ads)

##### Signatures for SKAdNetwork 1, 2, and 2.2–3

- [Combining parameters to generate signatures for SKAdNetwork 2.2 and 3](/documentation/storekit/combining-parameters-to-generate-signatures-for-skadnetwork-2-2-and-3)
- [Combining parameters to generate a signature for SKAdNetwork 2](/documentation/storekit/combining-parameters-to-generate-a-signature-for-skadnetwork-2)
- [Combining parameters to generate a signature for SKAdNetwork 1](/documentation/storekit/combining-parameters-to-generate-a-signature-for-skadnetwork-1)
- [Ad network install-validation keys](/documentation/storekit/ad-network-install-validation-keys)

##### Required keys for SKAdNetwork 4 and later

- [let SKStoreProductParameterAdNetworkSourceIdentifier: String](/documentation/storekit/skstoreproductparameteradnetworksourceidentifier)

##### Required keys for SKAdNetwork 2 and later

- [let SKStoreProductParameterAdNetworkVersion: String](/documentation/storekit/skstoreproductparameteradnetworkversion)
- [let SKStoreProductParameterAdNetworkSourceAppStoreIdentifier: String](/documentation/storekit/skstoreproductparameteradnetworksourceappstoreidentifier)

##### Required keys

- [let SKStoreProductParameterAdNetworkIdentifier: String](/documentation/storekit/skstoreproductparameteradnetworkidentifier)
- [let SKStoreProductParameterAdNetworkCampaignIdentifier: String](/documentation/storekit/skstoreproductparameteradnetworkcampaignidentifier)
- [let SKStoreProductParameterAdNetworkTimestamp: String](/documentation/storekit/skstoreproductparameteradnetworktimestamp)
- [let SKStoreProductParameterAdNetworkNonce: String](/documentation/storekit/skstoreproductparameteradnetworknonce)
- [let SKStoreProductParameterAdNetworkAttributionSignature: String](/documentation/storekit/skstoreproductparameteradnetworkattributionsignature)

#### Signing view-through ads

- [Generating the signature to validate view-through ads](/documentation/storekit/generating-the-signature-to-validate-view-through-ads)
- [SKAdImpression](/documentation/storekit/skadimpression)

##### Providing a signature

- [var signature: String](/documentation/storekit/skadimpression/signature)

##### Creating a signature

- [init(sourceAppStoreItemIdentifier: NSNumber, advertisedAppStoreItemIdentifier: NSNumber, adNetworkIdentifier: String, adCampaignIdentifier: NSNumber, adImpressionIdentifier: String, timestamp: NSNumber, signature: String, version: String)](/documentation/storekit/skadimpression/init(sourceappstoreitemidentifier:advertisedappstoreitemidentifier:adnetworkidentifier:adcampaignidentifier:adimpressionidentifier:timestamp:signature:version:))
- [var version: String](/documentation/storekit/skadimpression/version)
- [var adNetworkIdentifier: String](/documentation/storekit/skadimpression/adnetworkidentifier)
- [var sourceIdentifier: NSNumber](/documentation/storekit/skadimpression/sourceidentifier)
- [var adCampaignIdentifier: NSNumber](/documentation/storekit/skadimpression/adcampaignidentifier)
- [var advertisedAppStoreItemIdentifier: NSNumber](/documentation/storekit/skadimpression/advertisedappstoreitemidentifier)
- [var adImpressionIdentifier: String](/documentation/storekit/skadimpression/adimpressionidentifier)
- [var sourceAppStoreItemIdentifier: NSNumber](/documentation/storekit/skadimpression/sourceappstoreitemidentifier)
- [var timestamp: NSNumber](/documentation/storekit/skadimpression/timestamp)

##### Describing ads

- [var adType: String?](/documentation/storekit/skadimpression/adtype)
- [var adDescription: String?](/documentation/storekit/skadimpression/addescription)
- [var adPurchaserName: String?](/documentation/storekit/skadimpression/adpurchasername)
- [class func startImpression(SKAdImpression, completionHandler: (((any Error)?) -> Void)?)](/documentation/storekit/skadnetwork/startimpression(_:completionhandler:))
- [class func endImpression(SKAdImpression, completionHandler: (((any Error)?) -> Void)?)](/documentation/storekit/skadnetwork/endimpression(_:completionhandler:))

#### Providing conversion information

- [class func updatePostbackConversionValue(Int, coarseValue: SKAdNetwork.CoarseConversionValue, lockWindow: Bool, completionHandler: (((any Error)?) -> Void)?)](/documentation/storekit/skadnetwork/updatepostbackconversionvalue(_:coarsevalue:lockwindow:completionhandler:))
- [class func updatePostbackConversionValue(Int, coarseValue: SKAdNetwork.CoarseConversionValue, completionHandler: (((any Error)?) -> Void)?)](/documentation/storekit/skadnetwork/updatepostbackconversionvalue(_:coarsevalue:completionhandler:))
- [SKAdNetwork.CoarseConversionValue](/documentation/storekit/skadnetwork/coarseconversionvalue)

##### Providing coarse conversion values

- [static let high: SKAdNetwork.CoarseConversionValue](/documentation/storekit/skadnetwork/coarseconversionvalue/high)
- [static let low: SKAdNetwork.CoarseConversionValue](/documentation/storekit/skadnetwork/coarseconversionvalue/low)
- [static let medium: SKAdNetwork.CoarseConversionValue](/documentation/storekit/skadnetwork/coarseconversionvalue/medium)
- [init(rawValue: String)](/documentation/storekit/skadnetwork/coarseconversionvalue/init(rawvalue:))
- [class func updatePostbackConversionValue(Int, completionHandler: (((any Error)?) -> Void)?)](/documentation/storekit/skadnetwork/updatepostbackconversionvalue(_:completionhandler:))

#### Verifying postbacks

- [Verifying an install-validation postback](/documentation/storekit/verifying-an-install-validation-postback)

##### SKAdNetworks 3 and earlier postbacks

- [Combining parameters for SKAdNetwork 3 postbacks](/documentation/storekit/combining-parameters-for-skadnetwork-3-postbacks)
- [Combining parameters for previous SKAdNetwork postback versions](/documentation/storekit/combining-parameters-for-previous-skadnetwork-postback-versions)
- [Identifying the parameters in install-validation postbacks](/documentation/storekit/identifying-the-parameters-in-install-validation-postbacks)

#### Testing ad attributions and postbacks

- [Testing ad attributions with a downloaded profile](/documentation/storekit/testing-ad-attributions-with-a-downloaded-profile)
- [Testing and validating ad impression signatures and postbacks for SKAdNetwork](/documentation/storekittest/testing-and-validating-ad-impression-signatures-and-postbacks-for-skadnetwork)

#### Deprecated

- [class func registerAppForAdNetworkAttribution()](/documentation/storekit/skadnetwork/registerappforadnetworkattribution())
- [class func updateConversionValue(Int)](/documentation/storekit/skadnetwork/updateconversionvalue(_:))
- [SKAdImpression](/documentation/storekit/skadimpression)

#### Providing a signature

- [var signature: String](/documentation/storekit/skadimpression/signature)

#### Creating a signature

- [init(sourceAppStoreItemIdentifier: NSNumber, advertisedAppStoreItemIdentifier: NSNumber, adNetworkIdentifier: String, adCampaignIdentifier: NSNumber, adImpressionIdentifier: String, timestamp: NSNumber, signature: String, version: String)](/documentation/storekit/skadimpression/init(sourceappstoreitemidentifier:advertisedappstoreitemidentifier:adnetworkidentifier:adcampaignidentifier:adimpressionidentifier:timestamp:signature:version:))
- [var version: String](/documentation/storekit/skadimpression/version)
- [var adNetworkIdentifier: String](/documentation/storekit/skadimpression/adnetworkidentifier)
- [var sourceIdentifier: NSNumber](/documentation/storekit/skadimpression/sourceidentifier)
- [var adCampaignIdentifier: NSNumber](/documentation/storekit/skadimpression/adcampaignidentifier)
- [var advertisedAppStoreItemIdentifier: NSNumber](/documentation/storekit/skadimpression/advertisedappstoreitemidentifier)
- [var adImpressionIdentifier: String](/documentation/storekit/skadimpression/adimpressionidentifier)
- [var sourceAppStoreItemIdentifier: NSNumber](/documentation/storekit/skadimpression/sourceappstoreitemidentifier)
- [var timestamp: NSNumber](/documentation/storekit/skadimpression/timestamp)

#### Describing ads

- [var adType: String?](/documentation/storekit/skadimpression/adtype)
- [var adDescription: String?](/documentation/storekit/skadimpression/addescription)
- [var adPurchaserName: String?](/documentation/storekit/skadimpression/adpurchasername)

### Error handling

- [let SKANErrorDomain: String](/documentation/storekit/skanerrordomain)
- [SKANError](/documentation/storekit/skanerror-swift.struct)

#### Getting Error Codes

- [static var adNetworkIdMissing: SKANError.Code](/documentation/storekit/skanerror-swift.struct/adnetworkidmissing)
- [static var impressionMissingRequiredValue: SKANError.Code](/documentation/storekit/skanerror-swift.struct/impressionmissingrequiredvalue)
- [static var impressionNotFound: SKANError.Code](/documentation/storekit/skanerror-swift.struct/impressionnotfound)
- [static var impressionTooShort: SKANError.Code](/documentation/storekit/skanerror-swift.struct/impressiontooshort)
- [static var invalidAdvertisedAppId: SKANError.Code](/documentation/storekit/skanerror-swift.struct/invalidadvertisedappid)
- [static var invalidCampaignId: SKANError.Code](/documentation/storekit/skanerror-swift.struct/invalidcampaignid)
- [static var invalidConversionValue: SKANError.Code](/documentation/storekit/skanerror-swift.struct/invalidconversionvalue)
- [static var invalidSourceAppId: SKANError.Code](/documentation/storekit/skanerror-swift.struct/invalidsourceappid)
- [static var invalidVersion: SKANError.Code](/documentation/storekit/skanerror-swift.struct/invalidversion)
- [static var mismatchedSourceAppId: SKANError.Code](/documentation/storekit/skanerror-swift.struct/mismatchedsourceappid)
- [static var unknown: SKANError.Code](/documentation/storekit/skanerror-swift.struct/unknown)
- [static var unsupported: SKANError.Code](/documentation/storekit/skanerror-swift.struct/unsupported)
- [SKANError.Code](/documentation/storekit/skanerror-swift.struct/code)

##### Error Codes

- [case adNetworkIdMissing](/documentation/storekit/skanerror-swift.struct/code/adnetworkidmissing)
- [case impressionMissingRequiredValue](/documentation/storekit/skanerror-swift.struct/code/impressionmissingrequiredvalue)
- [case impressionNotFound](/documentation/storekit/skanerror-swift.struct/code/impressionnotfound)
- [case impressionTooShort](/documentation/storekit/skanerror-swift.struct/code/impressiontooshort)
- [case invalidAdvertisedAppId](/documentation/storekit/skanerror-swift.struct/code/invalidadvertisedappid)
- [case invalidCampaignId](/documentation/storekit/skanerror-swift.struct/code/invalidcampaignid)
- [case invalidConversionValue](/documentation/storekit/skanerror-swift.struct/code/invalidconversionvalue)
- [case invalidSourceAppId](/documentation/storekit/skanerror-swift.struct/code/invalidsourceappid)
- [case invalidVersion](/documentation/storekit/skanerror-swift.struct/code/invalidversion)
- [case mismatchedSourceAppId](/documentation/storekit/skanerror-swift.struct/code/mismatchedsourceappid)
- [case unknown](/documentation/storekit/skanerror-swift.struct/code/unknown)
- [case unsupported](/documentation/storekit/skanerror-swift.struct/code/unsupported)

##### Initializers

- [init?(rawValue: Int)](/documentation/storekit/skanerror-swift.struct/code/init(rawvalue:))

#### Type Properties

- [static var errorDomain: String](/documentation/storekit/skanerror-swift.struct/errordomain)
- [SKANError.Code](/documentation/storekit/skanerror-swift.struct/code)

#### Error Codes

- [case adNetworkIdMissing](/documentation/storekit/skanerror-swift.struct/code/adnetworkidmissing)
- [case impressionMissingRequiredValue](/documentation/storekit/skanerror-swift.struct/code/impressionmissingrequiredvalue)
- [case impressionNotFound](/documentation/storekit/skanerror-swift.struct/code/impressionnotfound)
- [case impressionTooShort](/documentation/storekit/skanerror-swift.struct/code/impressiontooshort)
- [case invalidAdvertisedAppId](/documentation/storekit/skanerror-swift.struct/code/invalidadvertisedappid)
- [case invalidCampaignId](/documentation/storekit/skanerror-swift.struct/code/invalidcampaignid)
- [case invalidConversionValue](/documentation/storekit/skanerror-swift.struct/code/invalidconversionvalue)
- [case invalidSourceAppId](/documentation/storekit/skanerror-swift.struct/code/invalidsourceappid)
- [case invalidVersion](/documentation/storekit/skanerror-swift.struct/code/invalidversion)
- [case mismatchedSourceAppId](/documentation/storekit/skanerror-swift.struct/code/mismatchedsourceappid)
- [case unknown](/documentation/storekit/skanerror-swift.struct/code/unknown)
- [case unsupported](/documentation/storekit/skanerror-swift.struct/code/unsupported)

#### Initializers

- [init?(rawValue: Int)](/documentation/storekit/skanerror-swift.struct/code/init(rawvalue:))

## External Purchase

- [External Purchase](/documentation/storekit/external-purchase)

### Offering external purchases

- [ExternalPurchase](/documentation/storekit/externalpurchase)

#### Offering an external purchase

- [static var canPresent: Bool](/documentation/storekit/externalpurchase/canpresent)
- [static func presentNoticeSheet() async throws -> ExternalPurchase.NoticeResult](/documentation/storekit/externalpurchase/presentnoticesheet())
- [ExternalPurchase.NoticeResult](/documentation/storekit/externalpurchase/noticeresult)

##### Getting notice sheet results

- [case cancelled](/documentation/storekit/externalpurchase/noticeresult/cancelled)
- [case continuedWithExternalPurchaseToken(token: String)](/documentation/storekit/externalpurchase/noticeresult/continuedwithexternalpurchasetoken(token:))
- [SKExternalPurchase](/documentation/bundleresources/information-property-list/skexternalpurchase)
- [com.apple.developer.storekit.external-purchase](/documentation/bundleresources/entitlements/com.apple.developer.storekit.external-purchase)
- [SKExternalPurchase](/documentation/bundleresources/information-property-list/skexternalpurchase)

### Communicating and promoting offers

- [ExternalPurchaseCustomLink](/documentation/storekit/externalpurchasecustomlink)

#### Checking eligibility

- [static var isEligible: Bool](/documentation/storekit/externalpurchasecustomlink/iseligible)

#### Getting external purchase tokens

- [static func token(for: String) async throws -> ExternalPurchaseCustomLink.Token?](/documentation/storekit/externalpurchasecustomlink/token(for:))
- [ExternalPurchaseCustomLink.Token](/documentation/storekit/externalpurchasecustomlink/token)

##### Getting the token value

- [let value: String](/documentation/storekit/externalpurchasecustomlink/token/value)
- [Receiving and decoding external purchase tokens](/documentation/storekit/receiving-and-decoding-external-purchase-tokens)

#### Displaying the disclosure sheet

- [static func showNotice(type: ExternalPurchaseCustomLink.NoticeType) async throws -> ExternalPurchaseCustomLink.NoticeResult](/documentation/storekit/externalpurchasecustomlink/shownotice(type:))
- [ExternalPurchaseCustomLink.NoticeType](/documentation/storekit/externalpurchasecustomlink/noticetype)

##### Getting notice types

- [case browser](/documentation/storekit/externalpurchasecustomlink/noticetype/browser)
- [case withinApp](/documentation/storekit/externalpurchasecustomlink/noticetype/withinapp)
- [ExternalPurchaseCustomLink.NoticeResult](/documentation/storekit/externalpurchasecustomlink/noticeresult)

##### Getting notice results

- [case cancelled](/documentation/storekit/externalpurchasecustomlink/noticeresult/cancelled)
- [case continued](/documentation/storekit/externalpurchasecustomlink/noticeresult/continued)

#### Testing external purchase transactions

- [Testing transactions that use custom link tokens](/documentation/storekit/testing-transactions-that-use-custom-link-tokens)
- [ExternalPurchaseCustomLink.Token](/documentation/storekit/externalpurchasecustomlink/token)

#### Getting the token value

- [let value: String](/documentation/storekit/externalpurchasecustomlink/token/value)
- [com.apple.developer.storekit.custom-purchase-link.allowed-regions](/documentation/bundleresources/entitlements/com.apple.developer.storekit.custom-purchase-link.allowed-regions)
- [com.apple.developer.storekit.external-purchase-link](/documentation/bundleresources/entitlements/com.apple.developer.storekit.external-purchase-link)
- [SKExternalPurchaseCustomLinkRegions](/documentation/bundleresources/information-property-list/skexternalpurchasecustomlinkregions)
- [Testing transactions that use custom link tokens](/documentation/storekit/testing-transactions-that-use-custom-link-tokens)

### Communicating and promoting offers for music streaming services

- [ExternalPurchaseCustomLink](/documentation/storekit/externalpurchasecustomlink)

#### Checking eligibility

- [static var isEligible: Bool](/documentation/storekit/externalpurchasecustomlink/iseligible)

#### Getting external purchase tokens

- [static func token(for: String) async throws -> ExternalPurchaseCustomLink.Token?](/documentation/storekit/externalpurchasecustomlink/token(for:))
- [ExternalPurchaseCustomLink.Token](/documentation/storekit/externalpurchasecustomlink/token)

##### Getting the token value

- [let value: String](/documentation/storekit/externalpurchasecustomlink/token/value)
- [Receiving and decoding external purchase tokens](/documentation/storekit/receiving-and-decoding-external-purchase-tokens)

#### Displaying the disclosure sheet

- [static func showNotice(type: ExternalPurchaseCustomLink.NoticeType) async throws -> ExternalPurchaseCustomLink.NoticeResult](/documentation/storekit/externalpurchasecustomlink/shownotice(type:))
- [ExternalPurchaseCustomLink.NoticeType](/documentation/storekit/externalpurchasecustomlink/noticetype)

##### Getting notice types

- [case browser](/documentation/storekit/externalpurchasecustomlink/noticetype/browser)
- [case withinApp](/documentation/storekit/externalpurchasecustomlink/noticetype/withinapp)
- [ExternalPurchaseCustomLink.NoticeResult](/documentation/storekit/externalpurchasecustomlink/noticeresult)

##### Getting notice results

- [case cancelled](/documentation/storekit/externalpurchasecustomlink/noticeresult/cancelled)
- [case continued](/documentation/storekit/externalpurchasecustomlink/noticeresult/continued)

#### Testing external purchase transactions

- [Testing transactions that use custom link tokens](/documentation/storekit/testing-transactions-that-use-custom-link-tokens)
- [com.apple.developer.storekit.external-purchase-link-streaming](/documentation/bundleresources/entitlements/com.apple.developer.storekit.external-purchase-link-streaming)
- [SKExternalPurchaseLinkStreamingRegions](/documentation/bundleresources/information-property-list/skexternalpurchaselinkstreamingregions)

### Offering external purchase links

- [ExternalPurchaseLink](/documentation/storekit/externalpurchaselink)

#### Getting multiple external purchase links

- [SKExternalPurchaseMultiLink](/documentation/bundleresources/information-property-list/skexternalpurchasemultilink)
- [static var eligibleURLs: [URL]?](/documentation/storekit/externalpurchaselink/eligibleurls)
- [static func open(url: URL) async throws](/documentation/storekit/externalpurchaselink/open(url:))

#### Getting a single external purchase link

- [SKExternalPurchaseLink](/documentation/bundleresources/information-property-list/skexternalpurchaselink)
- [static var canOpen: Bool](/documentation/storekit/externalpurchaselink/canopen)
- [static func open() async throws](/documentation/storekit/externalpurchaselink/open())
- [com.apple.developer.storekit.external-purchase-link](/documentation/bundleresources/entitlements/com.apple.developer.storekit.external-purchase-link)
- [SKExternalPurchaseMultiLink](/documentation/bundleresources/information-property-list/skexternalpurchasemultilink)
- [SKExternalPurchaseLink](/documentation/bundleresources/information-property-list/skexternalpurchaselink)

### Managing external purchase tokens

- [Receiving and decoding external purchase tokens](/documentation/storekit/receiving-and-decoding-external-purchase-tokens)

## External link account

- [External link account](/documentation/storekit/external-link-account)

### External accounts

- [com.apple.developer.storekit.external-link.account](/documentation/bundleresources/entitlements/com.apple.developer.storekit.external-link.account)
- [SKExternalLinkAccount](/documentation/bundleresources/information-property-list/skexternallinkaccount)
- [ExternalLinkAccount](/documentation/storekit/externallinkaccount)

#### Linking to external accounts

- [static var canOpen: Bool](/documentation/storekit/externallinkaccount/canopen)
- [static func open() async throws](/documentation/storekit/externallinkaccount/open())

## Deprecated

- [SKCloudServiceSetupViewController](/documentation/storekit/skcloudservicesetupviewcontroller)

### Setting a delegate

- [var delegate: (any SKCloudServiceSetupViewControllerDelegate)?](/documentation/storekit/skcloudservicesetupviewcontroller/delegate)
- [SKCloudServiceSetupViewControllerDelegate](/documentation/storekit/skcloudservicesetupviewcontrollerdelegate)

#### Receiving Notification of Dismissal

- [func cloudServiceSetupViewControllerDidDismiss(SKCloudServiceSetupViewController)](/documentation/storekit/skcloudservicesetupviewcontrollerdelegate/cloudservicesetupviewcontrollerdiddismiss(_:))

### Loading the setup view

- [Offering Apple Music Subscription in Your App](/documentation/storekit/offering-apple-music-subscription-in-your-app)
- [SKCloudServiceSetupOptionsKey](/documentation/storekit/skcloudservicesetupoptionskey)

#### Initializing

- [init(rawValue: String)](/documentation/storekit/skcloudservicesetupoptionskey/init(rawvalue:))

#### Indicating Setup Options

- [static let action: SKCloudServiceSetupOptionsKey](/documentation/storekit/skcloudservicesetupoptionskey/action)
- [SKCloudServiceSetupAction](/documentation/storekit/skcloudservicesetupaction)

##### Initializers

- [init(rawValue: String)](/documentation/storekit/skcloudservicesetupaction/init(rawvalue:))

##### Type Properties

- [static let subscribe: SKCloudServiceSetupAction](/documentation/storekit/skcloudservicesetupaction/subscribe)
- [static let iTunesItemIdentifier: SKCloudServiceSetupOptionsKey](/documentation/storekit/skcloudservicesetupoptionskey/itunesitemidentifier)
- [static let affiliateToken: SKCloudServiceSetupOptionsKey](/documentation/storekit/skcloudservicesetupoptionskey/affiliatetoken)
- [static let campaignToken: SKCloudServiceSetupOptionsKey](/documentation/storekit/skcloudservicesetupoptionskey/campaigntoken)
- [static let messageIdentifier: SKCloudServiceSetupOptionsKey](/documentation/storekit/skcloudservicesetupoptionskey/messageidentifier)
- [SKCloudServiceSetupMessageIdentifier](/documentation/storekit/skcloudservicesetupmessageidentifier)

##### Initializing Identifiers

- [init(rawValue: String)](/documentation/storekit/skcloudservicesetupmessageidentifier/init(rawvalue:))

##### Message Identifiers

- [static let addMusic: SKCloudServiceSetupMessageIdentifier](/documentation/storekit/skcloudservicesetupmessageidentifier/addmusic)
- [static let connect: SKCloudServiceSetupMessageIdentifier](/documentation/storekit/skcloudservicesetupmessageidentifier/connect)
- [static let join: SKCloudServiceSetupMessageIdentifier](/documentation/storekit/skcloudservicesetupmessageidentifier/join)
- [static let playMusic: SKCloudServiceSetupMessageIdentifier](/documentation/storekit/skcloudservicesetupmessageidentifier/playmusic)
- [func load(options: [SKCloudServiceSetupOptionsKey : Any], completionHandler: ((Bool, (any Error)?) -> Void)?)](/documentation/storekit/skcloudservicesetupviewcontroller/load(options:completionhandler:))
- [SKArcadeService](/documentation/storekit/skarcadeservice)

#### Type Methods

- [class func arcadeSubscriptionStatus(withNonce: UInt64, resultHandler: (Data?, UInt32, Data?, UInt32, (any Error)?) -> Void)](/documentation/storekit/skarcadeservice/arcadesubscriptionstatus(withnonce:resulthandler:))
- [class func registerArcadeAppWithRandom(fromLib: Data, randomFromLibLength: UInt32, resultHandler: (Data?, UInt32, Data?, UInt32, (any Error)?) -> Void)](/documentation/storekit/skarcadeservice/registerarcadeappwithrandom(fromlib:randomfromliblength:resulthandler:))
- [class func repairArcadeApp()](/documentation/storekit/skarcadeservice/repairarcadeapp())
- [SKCloudServiceController](/documentation/storekit/skcloudservicecontroller)

### Getting authorization to access the Music library

- [Requesting Access to Apple Music Library](/documentation/storekit/requesting-access-to-apple-music-library)
- [class func authorizationStatus() -> SKCloudServiceAuthorizationStatus](/documentation/storekit/skcloudservicecontroller/authorizationstatus())
- [class func requestAuthorization((SKCloudServiceAuthorizationStatus) -> Void)](/documentation/storekit/skcloudservicecontroller/requestauthorization(_:))
- [SKCloudServiceAuthorizationStatus](/documentation/storekit/skcloudserviceauthorizationstatus)

#### Constants

- [case notDetermined](/documentation/storekit/skcloudserviceauthorizationstatus/notdetermined)
- [case denied](/documentation/storekit/skcloudserviceauthorizationstatus/denied)
- [case restricted](/documentation/storekit/skcloudserviceauthorizationstatus/restricted)
- [case authorized](/documentation/storekit/skcloudserviceauthorizationstatus/authorized)

#### Initializers

- [init?(rawValue: Int)](/documentation/storekit/skcloudserviceauthorizationstatus/init(rawvalue:))

### Determining capabilities

- [Determining a person’s Apple Music capabilities](/documentation/storekit/determining-a-person-s-apple-music-capabilities)
- [func requestUserToken(forDeveloperToken: String, completionHandler: (String?, (any Error)?) -> Void)](/documentation/storekit/skcloudservicecontroller/requestusertoken(fordevelopertoken:completionhandler:))
- [func requestStorefrontCountryCode(completionHandler: (String?, (any Error)?) -> Void)](/documentation/storekit/skcloudservicecontroller/requeststorefrontcountrycode(completionhandler:))
- [func requestCapabilities(completionHandler: (SKCloudServiceCapability, (any Error)?) -> Void)](/documentation/storekit/skcloudservicecontroller/requestcapabilities(completionhandler:))
- [SKCloudServiceCapability](/documentation/storekit/skcloudservicecapability)

#### Initializing

- [init(rawValue: UInt)](/documentation/storekit/skcloudservicecapability/init(rawvalue:))

#### Identifying Cloud Service Capabilities

- [static var musicCatalogPlayback: SKCloudServiceCapability](/documentation/storekit/skcloudservicecapability/musiccatalogplayback)
- [static var musicCatalogSubscriptionEligible: SKCloudServiceCapability](/documentation/storekit/skcloudservicecapability/musiccatalogsubscriptioneligible)
- [static var addToCloudMusicLibrary: SKCloudServiceCapability](/documentation/storekit/skcloudservicecapability/addtocloudmusiclibrary)
- [func requestStorefrontIdentifier(completionHandler: (String?, (any Error)?) -> Void)](/documentation/storekit/skcloudservicecontroller/requeststorefrontidentifier(completionhandler:))
- [func requestPersonalizationToken(forClientToken: String, withCompletionHandler: (String?, (any Error)?) -> Void)](/documentation/storekit/skcloudservicecontroller/requestpersonalizationtoken(forclienttoken:withcompletionhandler:))

### Notifications

- [static let SKStorefrontIdentifierDidChange: NSNotification.Name](/documentation/foundation/nsnotification/name-swift.struct/skstorefrontidentifierdidchange)
- [static let SKCloudServiceCapabilitiesDidChange: NSNotification.Name](/documentation/foundation/nsnotification/name-swift.struct/skcloudservicecapabilitiesdidchange)
- [static let SKStorefrontCountryCodeDidChange: NSNotification.Name](/documentation/foundation/nsnotification/name-swift.struct/skstorefrontcountrycodedidchange)

## Articles

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
