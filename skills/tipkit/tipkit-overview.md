---
title: TipKit
source: https://developer.apple.com/documentation/tipkit
timestamp: 2026-02-19T07:52:17.740Z
---

## Essentials

- [Highlighting app features with TipKit](/documentation/tipkit/highlightingappfeatureswithtipkit)

## Content

- [Tip](/documentation/tipkit/tip)

### Setting tip content

- [var title: Text](/documentation/tipkit/tip/title)
- [var message: Text?](/documentation/tipkit/tip/message)
- [var image: Image?](/documentation/tipkit/tip/image)
- [var id: String](/documentation/tipkit/tip/id)

### Controlling when tips appear

- [var rules: [Self.Rule]](/documentation/tipkit/tip/rules)
- [Rule](/documentation/tipkit/tip/rule)

#### Creating parameters

- [Parameter](/documentation/tipkit/tips/parameter)

##### Parameter options

- [static var transient: Tips.ParameterOption](/documentation/tipkit/tips/parameteroption/transient)

#### Creating events and adding donations

- [Event](/documentation/tipkit/tips/event)

##### Initializers

- [init(id: String)](/documentation/tipkit/tips/event/init(id:)-99edo)

###### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

###### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))
- [init(id: String, donationLimit: Tips.DonationLimit)](/documentation/tipkit/tips/event/init(id:donationlimit:)-7tgi1)

###### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

###### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

##### Initializers with a donation value

- [init(id: String)](/documentation/tipkit/tips/event/init(id:)-3edd4)

###### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

###### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))
- [init(id: String, donationLimit: Tips.DonationLimit)](/documentation/tipkit/tips/event/init(id:donationlimit:)-1d1hy)

###### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

###### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

##### Donations

- [Donation](/documentation/tipkit/tips/event/donation)

###### Instance Properties

- [let date: Date](/documentation/tipkit/tips/event/donation/date)

###### Subscripts

- [subscript<Value>(dynamicMember _: KeyPath<DonationInfo, Value>) -> Value](/documentation/tipkit/tips/event/donation/subscript(dynamicmember:))
- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

##### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

##### Delete Donations

- [func deleteDonations() async throws](/documentation/tipkit/tips/event/deletedonations())
- [Event](/documentation/tipkit/tip/event)

#### Initializers

- [init(id: String)](/documentation/tipkit/tips/event/init(id:)-99edo)

##### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

##### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))
- [init(id: String, donationLimit: Tips.DonationLimit)](/documentation/tipkit/tips/event/init(id:donationlimit:)-7tgi1)

##### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

##### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

#### Initializers with a donation value

- [init(id: String)](/documentation/tipkit/tips/event/init(id:)-3edd4)

##### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

##### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))
- [init(id: String, donationLimit: Tips.DonationLimit)](/documentation/tipkit/tips/event/init(id:donationlimit:)-1d1hy)

##### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

##### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

#### Donations

- [Donation](/documentation/tipkit/tips/event/donation)

##### Instance Properties

- [let date: Date](/documentation/tipkit/tips/event/donation/date)

##### Subscripts

- [subscript<Value>(dynamicMember _: KeyPath<DonationInfo, Value>) -> Value](/documentation/tipkit/tips/event/donation/subscript(dynamicmember:))
- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

#### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

#### Delete Donations

- [func deleteDonations() async throws](/documentation/tipkit/tips/event/deletedonations())

### Customizing tip behavior

- [var options: [any TipOption]](/documentation/tipkit/tip/options)
- [Option](/documentation/tipkit/tip/option)

#### Tip options

- [IgnoresDisplayFrequency](/documentation/tipkit/tip/ignoresdisplayfrequency)
- [MaxDisplayCount](/documentation/tipkit/tip/maxdisplaycount)
- [MaxDisplayDuration](/documentation/tipkit/tip/maxdisplayduration)
- [IgnoresDisplayFrequency](/documentation/tipkit/tip/ignoresdisplayfrequency)
- [MaxDisplayCount](/documentation/tipkit/tip/maxdisplaycount)
- [MaxDisplayDuration](/documentation/tipkit/tip/maxdisplayduration)

### Providing actions

- [var actions: [Self.Action]](/documentation/tipkit/tip/actions)
- [Action](/documentation/tipkit/tip/action)

#### Initializers

- [init(id: String?, perform: () -> Void, () -> Text)](/documentation/tipkit/tips/action/init(id:perform:_:))
- [init(id: String?, title: some StringProtocol, perform: () -> Void)](/documentation/tipkit/tips/action/init(id:title:perform:))

### Monitoring tip status

- [var status: Self.Status](/documentation/tipkit/tip/status-swift.property)
- [var statusUpdates: AsyncStream<Self.Status>](/documentation/tipkit/tip/statusupdates)
- [var shouldDisplay: Bool](/documentation/tipkit/tip/shoulddisplay)
- [var shouldDisplayUpdates: AsyncMapSequence<AsyncStream<Self.Status>, Bool>](/documentation/tipkit/tip/shoulddisplayupdates)
- [Status](/documentation/tipkit/tip/status-swift.typealias)
- [InvalidationReason](/documentation/tipkit/tip/invalidationreason)

### Invalidating a tip

- [func invalidate(reason: Self.InvalidationReason)](/documentation/tipkit/tip/invalidate(reason:))
- [func resetEligibility() async](/documentation/tipkit/tip/reseteligibility())
- [TipGroup](/documentation/tipkit/tipgroup)

### Creating a tip group

- [init(TipGroup.Priority, () -> [any Tip])](/documentation/tipkit/tipgroup/init(_:_:))

### Controlling the display order of a TipGroup’s tips

- [TipGroup.Priority](/documentation/tipkit/tipgroup/priority)

#### Enumeration Cases

- [case firstAvailable](/documentation/tipkit/tipgroup/priority/firstavailable)
- [case ordered](/documentation/tipkit/tipgroup/priority/ordered)

### Getting the currently available tip

- [var currentTip: (any Tip)?](/documentation/tipkit/tipgroup/currenttip)
- [var currentTipUpdates: some AsyncSequence<any Tip, Never>](/documentation/tipkit/tipgroup/currenttipupdates)

## Configuration

- [static func configure([Tips.ConfigurationOption]) throws](/documentation/tipkit/tips/configure(_:))
- [static func cloudKitContainer(Tips.ConfigurationOption.CloudKitContainer?) -> Tips.ConfigurationOption](/documentation/tipkit/tips/configurationoption/cloudkitcontainer(_:))
- [static func datastoreLocation(Tips.ConfigurationOption.DatastoreLocation) -> Tips.ConfigurationOption](/documentation/tipkit/tips/configurationoption/datastorelocation(_:))
- [static func displayFrequency(Tips.ConfigurationOption.DisplayFrequency) -> Tips.ConfigurationOption](/documentation/tipkit/tips/configurationoption/displayfrequency(_:))

## Views

- [TipView](/documentation/tipkit/tipview)

### Creating a tip view

- [init((any Tip)?, arrowEdge: Edge?, action: (Tips.Action) -> Void)](/documentation/tipkit/tipview/init(_:arrowedge:action:))
- [init((any Tip)?, isPresented: Binding<Bool>?, arrowEdge: Edge?, action: (Tips.Action) -> Void)](/documentation/tipkit/tipview/init(_:ispresented:arrowedge:action:))
- [init<AnchorID>((any Tip)?, isPresented: Binding<Bool>?, arrowEdge: Edge?, anchorID: AnchorID, action: (Tips.Action) -> Void)](/documentation/tipkit/tipview/init(_:ispresented:arrowedge:anchorid:action:))
- [func popoverTip((any Tip)?, arrowEdge: Edge?, action: (Tips.Action) -> Void) -> some View](/documentation/swiftui/view/popovertip(_:arrowedge:action:))

## UIKit Views

- [TipUIView](/documentation/tipkit/tipuiview)

### Initializers

- [init(any Tip, arrowEdge: Edge?, actionHandler: (Tips.Action) -> Void)](/documentation/tipkit/tipuiview/init(_:arrowedge:actionhandler:))

### Instance Properties

- [var backgroundColor: UIColor?](/documentation/tipkit/tipuiview/backgroundcolor)
- [var backgroundStyle: any ShapeStyle](/documentation/tipkit/tipuiview/backgroundstyle)
- [var cornerRadius: CGFloat](/documentation/tipkit/tipuiview/cornerradius)
- [var imageSize: CGSize](/documentation/tipkit/tipuiview/imagesize)
- [var imageStyle: (any ShapeStyle)?](/documentation/tipkit/tipuiview/imagestyle)
- [var viewStyle: any TipViewStyle](/documentation/tipkit/tipuiview/viewstyle)
- [TipUIPopoverViewController](/documentation/tipkit/tipuipopoverviewcontroller)

### Initializers

- [convenience init(any Tip, sourceItem: any UIPopoverPresentationControllerSourceItem, actionHandler: (Tips.Action) -> Void)](/documentation/tipkit/tipuipopoverviewcontroller/init(_:sourceitem:actionhandler:))
- [init?(coder: NSCoder)](/documentation/tipkit/tipuipopoverviewcontroller/init(coder:))
- [init(nibName: String?, bundle: Bundle?)](/documentation/tipkit/tipuipopoverviewcontroller/init(nibname:bundle:))

### Instance Properties

- [var backgroundColor: UIColor?](/documentation/tipkit/tipuipopoverviewcontroller/backgroundcolor)
- [var backgroundStyle: any ShapeStyle](/documentation/tipkit/tipuipopoverviewcontroller/backgroundstyle)
- [var imageSize: CGSize](/documentation/tipkit/tipuipopoverviewcontroller/imagesize)
- [var imageStyle: (any ShapeStyle)?](/documentation/tipkit/tipuipopoverviewcontroller/imagestyle)
- [var presentationDelegate: (any UIPopoverPresentationControllerDelegate)?](/documentation/tipkit/tipuipopoverviewcontroller/presentationdelegate)
- [var sourceItem: (any UIPopoverPresentationControllerSourceItem)?](/documentation/tipkit/tipuipopoverviewcontroller/sourceitem)
- [var viewStyle: any TipViewStyle](/documentation/tipkit/tipuipopoverviewcontroller/viewstyle)
- [TipUICollectionViewCell](/documentation/tipkit/tipuicollectionviewcell)

### Initializers

- [init?(coder: NSCoder)](/documentation/tipkit/tipuicollectionviewcell/init(coder:))
- [init(frame: CGRect)](/documentation/tipkit/tipuicollectionviewcell/init(frame:))

### Instance Properties

- [var backgroundColor: UIColor?](/documentation/tipkit/tipuicollectionviewcell/backgroundcolor)
- [var backgroundStyle: any ShapeStyle](/documentation/tipkit/tipuicollectionviewcell/backgroundstyle)
- [var cornerRadius: CGFloat](/documentation/tipkit/tipuicollectionviewcell/cornerradius)
- [var imageSize: CGSize](/documentation/tipkit/tipuicollectionviewcell/imagesize)
- [var imageStyle: (any ShapeStyle)?](/documentation/tipkit/tipuicollectionviewcell/imagestyle)
- [var viewStyle: any TipViewStyle](/documentation/tipkit/tipuicollectionviewcell/viewstyle)

### Instance Methods

- [func configureTip(any Tip, arrowEdge: Edge?, actionHandler: (Tips.Action) -> Void) -> Self](/documentation/tipkit/tipuicollectionviewcell/configuretip(_:arrowedge:actionhandler:))
- [TipUICollectionReusableView](/documentation/tipkit/tipuicollectionreusableview)

### Initializers

- [init?(coder: NSCoder)](/documentation/tipkit/tipuicollectionreusableview/init(coder:))
- [init(frame: CGRect)](/documentation/tipkit/tipuicollectionreusableview/init(frame:))

### Instance Properties

- [var backgroundStyle: any ShapeStyle](/documentation/tipkit/tipuicollectionreusableview/backgroundstyle)
- [var cornerRadius: CGFloat](/documentation/tipkit/tipuicollectionreusableview/cornerradius)
- [var imageSize: CGSize](/documentation/tipkit/tipuicollectionreusableview/imagesize)
- [var imageStyle: (any ShapeStyle)?](/documentation/tipkit/tipuicollectionreusableview/imagestyle)
- [var viewStyle: any TipViewStyle](/documentation/tipkit/tipuicollectionreusableview/viewstyle)

### Instance Methods

- [func configureTip(any Tip, arrowEdge: Edge?, actionHandler: (Tips.Action) -> Void) -> Self](/documentation/tipkit/tipuicollectionreusableview/configuretip(_:arrowedge:actionhandler:))

## AppKit Views

- [TipNSView](/documentation/tipkit/tipnsview)

### Initializers

- [convenience init(any Tip, arrowEdge: Edge?, actionHandler: (Tips.Action) -> Void)](/documentation/tipkit/tipnsview/init(_:arrowedge:actionhandler:))

### Instance Properties

- [var backgroundColor: NSColor?](/documentation/tipkit/tipnsview/backgroundcolor)
- [var backgroundStyle: any ShapeStyle](/documentation/tipkit/tipnsview/backgroundstyle)
- [var cornerRadius: CGFloat](/documentation/tipkit/tipnsview/cornerradius)
- [var imageSize: CGSize](/documentation/tipkit/tipnsview/imagesize)
- [var imageStyle: (any ShapeStyle)?](/documentation/tipkit/tipnsview/imagestyle)
- [var viewStyle: any TipViewStyle](/documentation/tipkit/tipnsview/viewstyle)
- [TipNSPopover](/documentation/tipkit/tipnspopover)

### Initializers

- [init(any Tip, delegate: (any NSPopoverDelegate)?, actionHandler: (Tips.Action) -> Void)](/documentation/tipkit/tipnspopover/init(_:delegate:actionhandler:))

### Instance Properties

- [var backgroundColor: NSColor?](/documentation/tipkit/tipnspopover/backgroundcolor)
- [var backgroundStyle: any ShapeStyle](/documentation/tipkit/tipnspopover/backgroundstyle)
- [var cornerRadius: CGFloat](/documentation/tipkit/tipnspopover/cornerradius)
- [var imageSize: CGSize](/documentation/tipkit/tipnspopover/imagesize)
- [var imageStyle: (any ShapeStyle)?](/documentation/tipkit/tipnspopover/imagestyle)
- [var viewStyle: any TipViewStyle](/documentation/tipkit/tipnspopover/viewstyle)

## Display rules

- [Rule](/documentation/tipkit/tips/rule)

### Creating parameters

- [Parameter](/documentation/tipkit/tips/parameter)

#### Parameter options

- [static var transient: Tips.ParameterOption](/documentation/tipkit/tips/parameteroption/transient)

### Creating events and adding donations

- [Event](/documentation/tipkit/tips/event)

#### Initializers

- [init(id: String)](/documentation/tipkit/tips/event/init(id:)-99edo)

##### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

##### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))
- [init(id: String, donationLimit: Tips.DonationLimit)](/documentation/tipkit/tips/event/init(id:donationlimit:)-7tgi1)

##### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

##### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

#### Initializers with a donation value

- [init(id: String)](/documentation/tipkit/tips/event/init(id:)-3edd4)

##### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

##### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))
- [init(id: String, donationLimit: Tips.DonationLimit)](/documentation/tipkit/tips/event/init(id:donationlimit:)-1d1hy)

##### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

##### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

#### Donations

- [Donation](/documentation/tipkit/tips/event/donation)

##### Instance Properties

- [let date: Date](/documentation/tipkit/tips/event/donation/date)

##### Subscripts

- [subscript<Value>(dynamicMember _: KeyPath<DonationInfo, Value>) -> Value](/documentation/tipkit/tips/event/donation/subscript(dynamicmember:))
- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

#### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

#### Delete Donations

- [func deleteDonations() async throws](/documentation/tipkit/tips/event/deletedonations())

### Enumerations

- [Tips.Rule.CompoundOperation](/documentation/tipkit/tips/rule/compoundoperation)

#### Enumeration Cases

- [case conjunction](/documentation/tipkit/tips/rule/compoundoperation/conjunction)
- [case disjunction](/documentation/tipkit/tips/rule/compoundoperation/disjunction)
- [Parameter](/documentation/tipkit/tips/parameter)

### Parameter options

- [static var transient: Tips.ParameterOption](/documentation/tipkit/tips/parameteroption/transient)
- [Event](/documentation/tipkit/tips/event)

### Initializers

- [init(id: String)](/documentation/tipkit/tips/event/init(id:)-99edo)

#### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

#### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))
- [init(id: String, donationLimit: Tips.DonationLimit)](/documentation/tipkit/tips/event/init(id:donationlimit:)-7tgi1)

#### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

#### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

### Initializers with a donation value

- [init(id: String)](/documentation/tipkit/tips/event/init(id:)-3edd4)

#### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

#### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))
- [init(id: String, donationLimit: Tips.DonationLimit)](/documentation/tipkit/tips/event/init(id:donationlimit:)-1d1hy)

#### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

#### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

### Donations

- [Donation](/documentation/tipkit/tips/event/donation)

#### Instance Properties

- [let date: Date](/documentation/tipkit/tips/event/donation/date)

#### Subscripts

- [subscript<Value>(dynamicMember _: KeyPath<DonationInfo, Value>) -> Value](/documentation/tipkit/tips/event/donation/subscript(dynamicmember:))
- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

### Delete Donations

- [func deleteDonations() async throws](/documentation/tipkit/tips/event/deletedonations())

## View Style

- [func tipViewStyle(some TipViewStyle) -> some View](/documentation/swiftui/view/tipviewstyle(_:))
- [TipViewStyle](/documentation/tipkit/tipviewstyle)

### Associated Types

- [Body](/documentation/tipkit/tipviewstyle/body)

### Instance Methods

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/tipkit/tipviewstyle/makebody(configuration:))

### Type Aliases

- [TipViewStyle.Configuration](/documentation/tipkit/tipviewstyle/configuration)

### Type Properties

- [static var miniTip: MiniTipViewStyle](/documentation/tipkit/tipviewstyle/minitip)
- [TipViewStyleConfiguration](/documentation/tipkit/tipviewstyleconfiguration)

### Instance Properties

- [var actions: [Tips.Action]](/documentation/tipkit/tipviewstyleconfiguration/actions)
- [var image: Image?](/documentation/tipkit/tipviewstyleconfiguration/image)
- [var message: Text?](/documentation/tipkit/tipviewstyleconfiguration/message)
- [let tip: any Tip](/documentation/tipkit/tipviewstyleconfiguration/tip)
- [var title: Text?](/documentation/tipkit/tipviewstyleconfiguration/title)
- [MiniTipViewStyle](/documentation/tipkit/minitipviewstyle)

## Testing

- [static func showAllTipsForTesting()](/documentation/tipkit/tips/showalltipsfortesting())
- [static func showTipsForTesting([any Tip.Type])](/documentation/tipkit/tips/showtipsfortesting(_:))
- [static func hideAllTipsForTesting()](/documentation/tipkit/tips/hidealltipsfortesting())
- [static func hideTipsForTesting([any Tip.Type])](/documentation/tipkit/tips/hidetipsfortesting(_:))
- [static func resetDatastore() throws](/documentation/tipkit/tips/resetdatastore())

## Common types

- [AnyTip](/documentation/tipkit/anytip)
- [TipKitError](/documentation/tipkit/tipkiterror)

### Instance Properties

- [var description: String](/documentation/tipkit/tipkiterror/description)

### Type Properties

- [static let invalidPredicateValueType: TipKitError](/documentation/tipkit/tipkiterror/invalidpredicatevaluetype)
- [static let missingGroupContainerEntitlements: TipKitError](/documentation/tipkit/tipkiterror/missinggroupcontainerentitlements)
- [static let tipsDatastoreAlreadyConfigured: TipKitError](/documentation/tipkit/tipkiterror/tipsdatastorealreadyconfigured)
- [Option](/documentation/tipkit/tipoption)

### Tip options

- [IgnoresDisplayFrequency](/documentation/tipkit/tip/ignoresdisplayfrequency)
- [MaxDisplayCount](/documentation/tipkit/tip/maxdisplaycount)
- [MaxDisplayDuration](/documentation/tipkit/tip/maxdisplayduration)

## Enumerations

- [Tips](/documentation/tipkit/tips)

### Configuration

- [static func configure([Tips.ConfigurationOption]) throws](/documentation/tipkit/tips/configure(_:))
- [ConfigurationOption](/documentation/tipkit/tips/configurationoption)

#### Structures

- [CloudKitContainer](/documentation/tipkit/tips/configurationoption/cloudkitcontainer)

##### Type Properties

- [static var automatic: Tips.ConfigurationOption.CloudKitContainer](/documentation/tipkit/tips/configurationoption/cloudkitcontainer/automatic)

##### Type Methods

- [static func named(String) -> Tips.ConfigurationOption.CloudKitContainer](/documentation/tipkit/tips/configurationoption/cloudkitcontainer/named(_:))
- [DatastoreLocation](/documentation/tipkit/tips/configurationoption/datastorelocation)

##### Type Properties

- [static var applicationDefault: Tips.ConfigurationOption.DatastoreLocation](/documentation/tipkit/tips/configurationoption/datastorelocation/applicationdefault)

##### Type Methods

- [static func groupContainer(identifier: String) throws -> Tips.ConfigurationOption.DatastoreLocation](/documentation/tipkit/tips/configurationoption/datastorelocation/groupcontainer(identifier:))
- [static func url(URL) -> Tips.ConfigurationOption.DatastoreLocation](/documentation/tipkit/tips/configurationoption/datastorelocation/url(_:))
- [DisplayFrequency](/documentation/tipkit/tips/configurationoption/displayfrequency)

##### Type Properties

- [static var daily: Tips.ConfigurationOption.DisplayFrequency](/documentation/tipkit/tips/configurationoption/displayfrequency/daily)
- [static var hourly: Tips.ConfigurationOption.DisplayFrequency](/documentation/tipkit/tips/configurationoption/displayfrequency/hourly)
- [static var immediate: Tips.ConfigurationOption.DisplayFrequency](/documentation/tipkit/tips/configurationoption/displayfrequency/immediate)
- [static var monthly: Tips.ConfigurationOption.DisplayFrequency](/documentation/tipkit/tips/configurationoption/displayfrequency/monthly)
- [static var weekly: Tips.ConfigurationOption.DisplayFrequency](/documentation/tipkit/tips/configurationoption/displayfrequency/weekly)

#### Type Methods

- [static func cloudKitContainer(Tips.ConfigurationOption.CloudKitContainer?) -> Tips.ConfigurationOption](/documentation/tipkit/tips/configurationoption/cloudkitcontainer(_:))
- [static func datastoreLocation(Tips.ConfigurationOption.DatastoreLocation) -> Tips.ConfigurationOption](/documentation/tipkit/tips/configurationoption/datastorelocation(_:))
- [static func displayFrequency(Tips.ConfigurationOption.DisplayFrequency) -> Tips.ConfigurationOption](/documentation/tipkit/tips/configurationoption/displayfrequency(_:))

### Testing

- [static func showAllTipsForTesting()](/documentation/tipkit/tips/showalltipsfortesting())
- [static func showTipsForTesting([any Tip.Type])](/documentation/tipkit/tips/showtipsfortesting(_:))
- [static func hideAllTipsForTesting()](/documentation/tipkit/tips/hidealltipsfortesting())
- [static func hideTipsForTesting([any Tip.Type])](/documentation/tipkit/tips/hidetipsfortesting(_:))
- [static func resetDatastore() throws](/documentation/tipkit/tips/resetdatastore())

### Actions

- [Action](/documentation/tipkit/tips/action)

#### Initializers

- [init(id: String?, perform: () -> Void, () -> Text)](/documentation/tipkit/tips/action/init(id:perform:_:))
- [init(id: String?, title: some StringProtocol, perform: () -> Void)](/documentation/tipkit/tips/action/init(id:title:perform:))

#### Instance Properties

- [let handler: () -> Void](/documentation/tipkit/tips/action/handler)
- [let id: String](/documentation/tipkit/tips/action/id)
- [let index: Int?](/documentation/tipkit/tips/action/index)
- [let label: () -> Text](/documentation/tipkit/tips/action/label)

### Rules

- [Rule](/documentation/tipkit/tips/rule)

#### Creating parameters

- [Parameter](/documentation/tipkit/tips/parameter)

##### Parameter options

- [static var transient: Tips.ParameterOption](/documentation/tipkit/tips/parameteroption/transient)

#### Creating events and adding donations

- [Event](/documentation/tipkit/tips/event)

##### Initializers

- [init(id: String)](/documentation/tipkit/tips/event/init(id:)-99edo)

###### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

###### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))
- [init(id: String, donationLimit: Tips.DonationLimit)](/documentation/tipkit/tips/event/init(id:donationlimit:)-7tgi1)

###### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

###### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

##### Initializers with a donation value

- [init(id: String)](/documentation/tipkit/tips/event/init(id:)-3edd4)

###### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

###### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))
- [init(id: String, donationLimit: Tips.DonationLimit)](/documentation/tipkit/tips/event/init(id:donationlimit:)-1d1hy)

###### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

###### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

##### Donations

- [Donation](/documentation/tipkit/tips/event/donation)

###### Instance Properties

- [let date: Date](/documentation/tipkit/tips/event/donation/date)

###### Subscripts

- [subscript<Value>(dynamicMember _: KeyPath<DonationInfo, Value>) -> Value](/documentation/tipkit/tips/event/donation/subscript(dynamicmember:))
- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

##### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

##### Delete Donations

- [func deleteDonations() async throws](/documentation/tipkit/tips/event/deletedonations())

#### Enumerations

- [Tips.Rule.CompoundOperation](/documentation/tipkit/tips/rule/compoundoperation)

##### Enumeration Cases

- [case conjunction](/documentation/tipkit/tips/rule/compoundoperation/conjunction)
- [case disjunction](/documentation/tipkit/tips/rule/compoundoperation/disjunction)

### Events

- [Event](/documentation/tipkit/tips/event)

#### Initializers

- [init(id: String)](/documentation/tipkit/tips/event/init(id:)-99edo)

##### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

##### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))
- [init(id: String, donationLimit: Tips.DonationLimit)](/documentation/tipkit/tips/event/init(id:donationlimit:)-7tgi1)

##### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

##### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

#### Initializers with a donation value

- [init(id: String)](/documentation/tipkit/tips/event/init(id:)-3edd4)

##### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

##### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))
- [init(id: String, donationLimit: Tips.DonationLimit)](/documentation/tipkit/tips/event/init(id:donationlimit:)-1d1hy)

##### Properties

- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

##### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

#### Donations

- [Donation](/documentation/tipkit/tips/event/donation)

##### Instance Properties

- [let date: Date](/documentation/tipkit/tips/event/donation/date)

##### Subscripts

- [subscript<Value>(dynamicMember _: KeyPath<DonationInfo, Value>) -> Value](/documentation/tipkit/tips/event/donation/subscript(dynamicmember:))
- [var donations: [Tips.Event<DonationInfo>.Donation]](/documentation/tipkit/tips/event/donations)

#### Add Donations

- [func donate() async](/documentation/tipkit/tips/event/donate())
- [func donate(DonationInfo) async](/documentation/tipkit/tips/event/donate(_:))
- [func sendDonation((() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:))
- [func sendDonation(DonationInfo, (() -> Void)?)](/documentation/tipkit/tips/event/senddonation(_:_:))

#### Delete Donations

- [func deleteDonations() async throws](/documentation/tipkit/tips/event/deletedonations())
- [DonationTimeRange](/documentation/tipkit/tips/donationtimerange)

#### Type Properties

- [static var day: Tips.DonationTimeRange](/documentation/tipkit/tips/donationtimerange/day)
- [static var hour: Tips.DonationTimeRange](/documentation/tipkit/tips/donationtimerange/hour)
- [static var minute: Tips.DonationTimeRange](/documentation/tipkit/tips/donationtimerange/minute)
- [static var week: Tips.DonationTimeRange](/documentation/tipkit/tips/donationtimerange/week)

#### Type Methods

- [static func days(Int) -> Tips.DonationTimeRange](/documentation/tipkit/tips/donationtimerange/days(_:))
- [static func hours(Int) -> Tips.DonationTimeRange](/documentation/tipkit/tips/donationtimerange/hours(_:))
- [static func minutes(Int) -> Tips.DonationTimeRange](/documentation/tipkit/tips/donationtimerange/minutes(_:))
- [static func weeks(Int) -> Tips.DonationTimeRange](/documentation/tipkit/tips/donationtimerange/weeks(_:))
- [DonationLimit](/documentation/tipkit/tips/donationlimit)

#### Initializers

- [init(maximumCount: Int, maximumAge: Tips.DonationTimeRange?)](/documentation/tipkit/tips/donationlimit/init(maximumcount:maximumage:))

#### Instance Properties

- [let maximumAge: Tips.DonationTimeRange?](/documentation/tipkit/tips/donationlimit/maximumage)
- [let maximumCount: Int](/documentation/tipkit/tips/donationlimit/maximumcount)
- [EmptyDonation](/documentation/tipkit/tips/emptydonation)

### Parameters

- [Parameter](/documentation/tipkit/tips/parameter)

#### Parameter options

- [static var transient: Tips.ParameterOption](/documentation/tipkit/tips/parameteroption/transient)
- [ParameterOption](/documentation/tipkit/tips/parameteroption)

#### Type Properties

- [static var transient: Tips.ParameterOption](/documentation/tipkit/tips/parameteroption/transient)

### Options

- [IgnoresDisplayFrequency](/documentation/tipkit/tips/ignoresdisplayfrequency)

#### Initializers

- [init(Bool)](/documentation/tipkit/tips/ignoresdisplayfrequency/init(_:))
- [MaxDisplayCount](/documentation/tipkit/tips/maxdisplaycount)

#### Initializers

- [init(Int)](/documentation/tipkit/tips/maxdisplaycount/init(_:))
- [MaxDisplayDuration](/documentation/tipkit/tips/maxdisplayduration)

#### Initializers

- [init(TimeInterval)](/documentation/tipkit/tips/maxdisplayduration/init(_:))

### Status

- [Status](/documentation/tipkit/tips/status)

#### Enumeration Cases

- [case available](/documentation/tipkit/tips/status/available)
- [case invalidated(Tips.InvalidationReason)](/documentation/tipkit/tips/status/invalidated(_:))
- [case pending](/documentation/tipkit/tips/status/pending)
- [InvalidationReason](/documentation/tipkit/tips/invalidationreason)

#### Enumeration Cases

- [case actionPerformed](/documentation/tipkit/tips/invalidationreason/actionperformed)
- [case displayCountExceeded](/documentation/tipkit/tips/invalidationreason/displaycountexceeded)
- [case displayDurationExceeded](/documentation/tipkit/tips/invalidationreason/displaydurationexceeded)
- [case tipClosed](/documentation/tipkit/tips/invalidationreason/tipclosed)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
