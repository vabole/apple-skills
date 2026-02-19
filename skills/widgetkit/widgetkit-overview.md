---
title: WidgetKit
source: https://developer.apple.com/documentation/widgetkit
timestamp: 2026-01-19T10:21:55.624Z
---

## Essentials

- [Developing a WidgetKit strategy](/documentation/widgetkit/developing-a-widgetkit-strategy)
- [WidgetKit updates](/documentation/updates/widgetkit)
- [Creating a widget extension](/documentation/widgetkit/creating-a-widget-extension)
- [Emoji Rangers: Supporting Live Activities, interactivity, and animations](/documentation/widgetkit/emoji-rangers-supporting-live-activities-interactivity-and-animations)
- [WidgetBundle](/documentation/swiftui/widgetbundle)

## System experiences

- [Widgets and watch complications](/documentation/widgetkit/widgets-and-complications-collection)

### Widget creation

- [Creating a widget extension](/documentation/widgetkit/creating-a-widget-extension)
- [Developing a WidgetKit strategy](/documentation/widgetkit/developing-a-widgetkit-strategy)
- [Emoji Rangers: Supporting Live Activities, interactivity, and animations](/documentation/widgetkit/emoji-rangers-supporting-live-activities-interactivity-and-animations)
- [Preparing widgets for additional platforms, contexts, and appearances](/documentation/widgetkit/preparing-widgets-for-additional-contexts-and-appearances)
- [Widget](/documentation/swiftui/widget)
- [WidgetFamily](/documentation/widgetkit/widgetfamily)

#### Accessing system families

- [case systemSmall](/documentation/widgetkit/widgetfamily/systemsmall)
- [case systemMedium](/documentation/widgetkit/widgetfamily/systemmedium)
- [case systemLarge](/documentation/widgetkit/widgetfamily/systemlarge)
- [case systemExtraLarge](/documentation/widgetkit/widgetfamily/systemextralarge)
- [case systemExtraLargePortrait](/documentation/widgetkit/widgetfamily/systemextralargeportrait)

#### Accessing accessory families

- [case accessoryCircular](/documentation/widgetkit/widgetfamily/accessorycircular)
- [case accessoryCorner](/documentation/widgetkit/widgetfamily/accessorycorner)
- [case accessoryRectangular](/documentation/widgetkit/widgetfamily/accessoryrectangular)
- [case accessoryInline](/documentation/widgetkit/widgetfamily/accessoryinline)
- [StaticConfiguration](/documentation/widgetkit/staticconfiguration)

#### Creating a widget configuration

- [init<Provider>(kind: String, provider: Provider, content: (Provider.Entry) -> Content)](/documentation/widgetkit/staticconfiguration/init(kind:provider:content:))
- [var body: Self.Body](/documentation/swiftui/widgetconfiguration/body-swift.property)

#### Setting the display name

- [func configurationDisplayName<S>(S) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/configurationdisplayname(_:)-2c3zv)
- [func configurationDisplayName(Text) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/configurationdisplayname(_:)-3sbn4)
- [func configurationDisplayName(LocalizedStringKey) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/configurationdisplayname(_:)-4v9q)

#### Setting the description

- [func description(Text) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/description(_:)-1bvuj)
- [func description<S>(S) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/description(_:)-2bfr)
- [func description(LocalizedStringKey) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/description(_:)-4q9pa)

#### Setting the supported families

- [func supportedFamilies([WidgetFamily]) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/supportedfamilies(_:))
- [func supplementalActivityFamilies([ActivityFamily]) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/supplementalactivityfamilies(_:))

#### Handling background network requests

- [func backgroundTask<D, R>(BackgroundTask<D, R>, action: (D) async -> R) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/backgroundtask(_:action:))
- [func onBackgroundURLSessionEvents(matching: ((String) -> Bool)?, (String, () -> Void) -> Void) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/onbackgroundurlsessionevents(matching:_:)-2e152)
- [func onBackgroundURLSessionEvents(matching: String, (String, () -> Void) -> Void) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/onbackgroundurlsessionevents(matching:_:)-fw6x)

### Configurable widgets

- [Making a configurable widget](/documentation/widgetkit/making-a-configurable-widget)
- [Migrating widgets from SiriKit Intents to App Intents](/documentation/widgetkit/migrating-from-sirikit-intents-to-app-intents)
- [AppIntentConfiguration](/documentation/widgetkit/appintentconfiguration)

#### Creating a widget configuration

- [init<Provider>(kind: String, intent: Intent.Type, provider: Provider, content: (Provider.Entry) -> Content)](/documentation/widgetkit/appintentconfiguration/init(kind:intent:provider:content:))
- [var body: Self.Body](/documentation/swiftui/widgetconfiguration/body-swift.property)

#### Setting the display name

- [func configurationDisplayName<S>(S) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/configurationdisplayname(_:)-2c3zv)
- [func configurationDisplayName(Text) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/configurationdisplayname(_:)-3sbn4)
- [func configurationDisplayName(LocalizedStringKey) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/configurationdisplayname(_:)-4v9q)

#### Setting the description

- [func description(Text) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/description(_:)-1bvuj)
- [func description<S>(S) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/description(_:)-2bfr)
- [func description(LocalizedStringKey) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/description(_:)-4q9pa)

#### Setting the supported families

- [func supportedFamilies([WidgetFamily]) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/supportedfamilies(_:))

#### Handling background network requests

- [func backgroundTask<D, R>(BackgroundTask<D, R>, action: (D) async -> R) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/backgroundtask(_:action:))
- [func onBackgroundURLSessionEvents(matching: ((String) -> Bool)?, (String, () -> Void) -> Void) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/onbackgroundurlsessionevents(matching:_:)-2e152)
- [func onBackgroundURLSessionEvents(matching: String, (String, () -> Void) -> Void) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/onbackgroundurlsessionevents(matching:_:)-fw6x)
- [WidgetInfo](/documentation/widgetkit/widgetinfo)

#### Getting Configured Widget Information

- [let kind: String](/documentation/widgetkit/widgetinfo/kind)
- [let family: WidgetFamily](/documentation/widgetkit/widgetinfo/family)
- [let configuration: INIntent?](/documentation/widgetkit/widgetinfo/configuration)

#### Identifying Widget Information

- [var id: WidgetInfo](/documentation/widgetkit/widgetinfo/id)

#### Instance Methods

- [func widgetConfigurationIntent<Intent>(of: Intent.Type) -> Intent?](/documentation/widgetkit/widgetinfo/widgetconfigurationintent(of:))

#### Default Implementations

- [Identifiable Implementations](/documentation/widgetkit/widgetinfo/identifiable-implementations)

##### Instance Properties

- [var id: WidgetInfo](/documentation/widgetkit/widgetinfo/id)

### Layout and presentation

- [Supporting additional widget sizes](/documentation/widgetkit/supporting-additional-widget-sizes)
- [Displaying the right widget background](/documentation/widgetkit/displaying-the-right-widget-background)
- [Optimizing your widget for accented rendering mode and Liquid Glass](/documentation/widgetkit/optimizing-your-widget-for-accented-rendering-mode-and-liquid-glass)
- [Adding StandBy and CarPlay support to your widget](/documentation/widgetkit/adding-standby-and-carplay-support-to-your-widget)
- [WidgetRenderingMode](/documentation/widgetkit/widgetrenderingmode)

#### Rendering modes

- [static let fullColor: WidgetRenderingMode](/documentation/widgetkit/widgetrenderingmode/fullcolor)
- [static let accented: WidgetRenderingMode](/documentation/widgetkit/widgetrenderingmode/accented)
- [static let vibrant: WidgetRenderingMode](/documentation/widgetkit/widgetrenderingmode/vibrant)
- [WidgetAccentedRenderingMode](/documentation/widgetkit/widgetaccentedrenderingmode)

#### Type Properties

- [static let accented: WidgetAccentedRenderingMode](/documentation/widgetkit/widgetaccentedrenderingmode/accented)
- [static let accentedDesaturated: WidgetAccentedRenderingMode](/documentation/widgetkit/widgetaccentedrenderingmode/accenteddesaturated)
- [static let desaturated: WidgetAccentedRenderingMode](/documentation/widgetkit/widgetaccentedrenderingmode/desaturated)
- [static let fullColor: WidgetAccentedRenderingMode](/documentation/widgetkit/widgetaccentedrenderingmode/fullcolor)
- [AccessoryWidgetBackground](/documentation/widgetkit/accessorywidgetbackground)

#### Creating accessory widget backgrounds

- [init()](/documentation/widgetkit/accessorywidgetbackground/init())
- [WidgetLocation](/documentation/widgetkit/widgetlocation)

#### Specifying a location style

- [static let carPlay: WidgetLocation](/documentation/widgetkit/widgetlocation/carplay)
- [static let iPhoneWidgetsOnMac: WidgetLocation](/documentation/widgetkit/widgetlocation/iphonewidgetsonmac)
- [static let homeScreen: WidgetLocation](/documentation/widgetkit/widgetlocation/homescreen)
- [static let lockScreen: WidgetLocation](/documentation/widgetkit/widgetlocation/lockscreen)
- [static let smartStack: WidgetLocation](/documentation/widgetkit/widgetlocation/smartstack)
- [static let standBy: WidgetLocation](/documentation/widgetkit/widgetlocation/standby)
- [static let watchFace: WidgetLocation](/documentation/widgetkit/widgetlocation/watchface)

### Timeline updates

- [Keeping a widget up to date](/documentation/widgetkit/keeping-a-widget-up-to-date)
- [TimelineProvider](/documentation/widgetkit/timelineprovider)

#### Generating Timelines

- [func getSnapshot(in: Self.Context, completion: (Self.Entry) -> Void)](/documentation/widgetkit/timelineprovider/getsnapshot(in:completion:))
- [func getTimeline(in: Self.Context, completion: (Timeline<Self.Entry>) -> Void)](/documentation/widgetkit/timelineprovider/gettimeline(in:completion:))
- [func placeholder(in: Self.Context) -> Self.Entry](/documentation/widgetkit/timelineprovider/placeholder(in:))
- [Entry](/documentation/widgetkit/timelineprovider/entry)
- [TimelineProvider.Context](/documentation/widgetkit/timelineprovider/context)

#### Providing relevance clues

- [func relevance() async -> WidgetRelevance<Void>](/documentation/widgetkit/timelineprovider/relevance())
- [AppIntentTimelineProvider](/documentation/widgetkit/appintenttimelineprovider)

#### Generating timelines

- [func placeholder(in: Self.Context) -> Self.Entry](/documentation/widgetkit/appintenttimelineprovider/placeholder(in:))
- [func recommendations() -> [AppIntentRecommendation<Self.Intent>]](/documentation/widgetkit/appintenttimelineprovider/recommendations())
- [func relevance() async -> WidgetRelevance<Self.Intent>](/documentation/widgetkit/appintenttimelineprovider/relevance())
- [func snapshot(for: Self.Intent, in: Self.Context) async -> Self.Entry](/documentation/widgetkit/appintenttimelineprovider/snapshot(for:in:))
- [func timeline(for: Self.Intent, in: Self.Context) async -> Timeline<Self.Entry>](/documentation/widgetkit/appintenttimelineprovider/timeline(for:in:))
- [AppIntentTimelineProvider.Context](/documentation/widgetkit/appintenttimelineprovider/context)
- [Entry](/documentation/widgetkit/appintenttimelineprovider/entry)
- [Intent](/documentation/widgetkit/appintenttimelineprovider/intent)
- [IntentTimelineProvider](/documentation/widgetkit/intenttimelineprovider)

#### Generating Timelines

- [func getSnapshot(for: Self.Intent, in: Self.Context, completion: (Self.Entry) -> Void)](/documentation/widgetkit/intenttimelineprovider/getsnapshot(for:in:completion:))
- [func getTimeline(for: Self.Intent, in: Self.Context, completion: (Timeline<Self.Entry>) -> Void)](/documentation/widgetkit/intenttimelineprovider/gettimeline(for:in:completion:))
- [func placeholder(in: Self.Context) -> Self.Entry](/documentation/widgetkit/intenttimelineprovider/placeholder(in:))
- [Entry](/documentation/widgetkit/intenttimelineprovider/entry)
- [Intent](/documentation/widgetkit/intenttimelineprovider/intent)
- [func recommendations() -> [IntentRecommendation<Self.Intent>]](/documentation/widgetkit/intenttimelineprovider/recommendations())
- [IntentTimelineProvider.Context](/documentation/widgetkit/intenttimelineprovider/context)

#### Instance Methods

- [func relevance() async -> WidgetRelevance<Self.Intent>](/documentation/widgetkit/intenttimelineprovider/relevance())
- [TimelineProviderContext](/documentation/widgetkit/timelineprovidercontext)

#### Preparing Preview Content

- [let isPreview: Bool](/documentation/widgetkit/timelineprovidercontext/ispreview)

#### Accessing Size Attributes

- [let family: WidgetFamily](/documentation/widgetkit/timelineprovidercontext/family)
- [let displaySize: CGSize](/documentation/widgetkit/timelineprovidercontext/displaysize)

#### Accessing Environment Variations

- [let environmentVariants: TimelineProviderContext.EnvironmentVariants](/documentation/widgetkit/timelineprovidercontext/environmentvariants-swift.property)
- [TimelineProviderContext.EnvironmentVariants](/documentation/widgetkit/timelineprovidercontext/environmentvariants-swift.struct)

##### Subscripts

- [subscript<T>(WritableKeyPath<EnvironmentValues, T>) -> [T]?](/documentation/widgetkit/timelineprovidercontext/environmentvariants-swift.struct/subscript(_:))
- [subscript<T>(dynamicMember _: WritableKeyPath<EnvironmentValues, T>) -> [T]?](/documentation/widgetkit/timelineprovidercontext/environmentvariants-swift.struct/subscript(dynamicmember:))
- [TimelineEntry](/documentation/widgetkit/timelineentry)

#### Configuring Timeline Entry Properties

- [var date: Date](/documentation/widgetkit/timelineentry/date)
- [var relevance: TimelineEntryRelevance?](/documentation/widgetkit/timelineentry/relevance)
- [Timeline](/documentation/widgetkit/timeline)

#### Creating a Timeline

- [init(entries: [EntryType], policy: TimelineReloadPolicy)](/documentation/widgetkit/timeline/init(entries:policy:))

#### Getting Timeline Properties

- [let entries: [EntryType]](/documentation/widgetkit/timeline/entries)
- [let policy: TimelineReloadPolicy](/documentation/widgetkit/timeline/policy)
- [TimelineReloadPolicy](/documentation/widgetkit/timelinereloadpolicy)

##### Reload Policies

- [static let atEnd: TimelineReloadPolicy](/documentation/widgetkit/timelinereloadpolicy/atend)
- [static func after(Date) -> TimelineReloadPolicy](/documentation/widgetkit/timelinereloadpolicy/after(_:))
- [static let never: TimelineReloadPolicy](/documentation/widgetkit/timelinereloadpolicy/never)
- [WidgetCenter](/documentation/widgetkit/widgetcenter)

#### Getting Widget Information

- [static let shared: WidgetCenter](/documentation/widgetkit/widgetcenter/shared)
- [func getCurrentConfigurations((Result<[WidgetInfo], any Error>) -> Void)](/documentation/widgetkit/widgetcenter/getcurrentconfigurations(_:))
- [WidgetCenter.UserInfoKey](/documentation/widgetkit/widgetcenter/userinfokey)

##### Describing a widget

- [static let family: String](/documentation/widgetkit/widgetcenter/userinfokey/family)
- [static let kind: String](/documentation/widgetkit/widgetcenter/userinfokey/kind)

##### Describing a Live Activity

- [static let activityID: String](/documentation/widgetkit/widgetcenter/userinfokey/activityid)

#### Reloading Widget Timelines

- [func reloadTimelines(ofKind: String)](/documentation/widgetkit/widgetcenter/reloadtimelines(ofkind:))
- [func reloadAllTimelines()](/documentation/widgetkit/widgetcenter/reloadalltimelines())

#### Reloading Recommended Preconfigured Widgets

- [func invalidateConfigurationRecommendations()](/documentation/widgetkit/widgetcenter/invalidateconfigurationrecommendations())

#### Instance Properties

- [var currentPushInfo: WidgetPushInfo?](/documentation/widgetkit/widgetcenter/currentpushinfo)

#### Instance Methods

- [func currentConfigurations() async throws -> [WidgetInfo]](/documentation/widgetkit/widgetcenter/currentconfigurations())
- [func invalidateRelevance(ofKind: String)](/documentation/widgetkit/widgetcenter/invalidaterelevance(ofkind:))

### Push notification updates

- [Updating widgets with WidgetKit push notifications](/documentation/widgetkit/updating-widgets-with-widgetkit-push-notifications)
- [WidgetPushHandler](/documentation/widgetkit/widgetpushhandler)

#### Initializers

- [init()](/documentation/widgetkit/widgetpushhandler/init())

#### Instance Methods

- [func pushTokenDidChange(WidgetPushInfo, widgets: [WidgetInfo])](/documentation/widgetkit/widgetpushhandler/pushtokendidchange(_:widgets:))
- [WidgetPushInfo](/documentation/widgetkit/widgetpushinfo)

#### Instance Properties

- [let token: Data](/documentation/widgetkit/widgetpushinfo/token)

### Capabilities

- [Accessing location information in widgets](/documentation/widgetkit/accessing-location-information-in-widgets)
- [Making network requests in a widget extension](/documentation/widgetkit/making-network-requests-in-a-widget-extension)

### Debugging

- [Previewing widgets and Live Activities in Xcode](/documentation/widgetkit/previewing-widgets-and-live-activities-in-xcode)
- [Preview macros](/documentation/widgetkit/preview-macros)

#### Generating a widget preview

- [macro Preview<Widget, Provider>(String?, as: WidgetFamily, widget: () -> Widget, timelineProvider: () -> Provider)](/documentation/widgetkit/preview(_:as:widget:timelineprovider:))
- [macro Preview<Widget, Provider>(String?, as: WidgetFamily, using: Provider.Intent, widget: () -> Widget, timelineProvider: () -> Provider)](/documentation/widgetkit/preview(_:as:using:widget:timelineprovider:)-4ljg1)
- [macro Preview<Widget, Provider>(String?, as: WidgetFamily, using: Provider.Intent, widget: () -> Widget, timelineProvider: () -> Provider)](/documentation/widgetkit/preview(_:as:using:widget:timelineprovider:)-3df1l)
- [macro Preview<Widget>(String?, as: WidgetFamily, widget: () -> Widget, timeline: () async -> [any TimelineEntry])](/documentation/widgetkit/preview(_:as:widget:timeline:))
- [macro Preview<Widget, Entry>(String?, widget: () -> Widget, relevanceEntries: () async -> [Entry])](/documentation/widgetkit/preview(_:widget:relevanceentries:))
- [macro Preview<Widget, Provider>(String?, widget: () -> Widget, relevanceProvider: () -> Provider)](/documentation/widgetkit/preview(_:widget:relevanceprovider:))
- [macro Preview<Widget, Provider>(String?, widget: () -> Widget, relevanceProvider: () -> Provider, relevance: () async -> WidgetRelevance<Provider.Configuration>)](/documentation/widgetkit/preview(_:widget:relevanceprovider:relevance:))

#### Generating a Live Activity preview

- [macro Preview<Widget, Attributes>(String?, as: ActivityPreviewViewKind, using: Attributes, widget: () -> Widget, contentStates: () async -> [Attributes.ContentState])](/documentation/widgetkit/preview(_:as:using:widget:contentstates:))

#### Generated structures

- [PreviewActivityBuilder](/documentation/widgetkit/previewactivitybuilder)

##### Previewing Live Activities

- [static func buildArray([[A.ContentState]]) -> [A.ContentState]](/documentation/widgetkit/previewactivitybuilder/buildarray(_:))
- [static func buildExpression(A.ContentState) -> [A.ContentState]](/documentation/widgetkit/previewactivitybuilder/buildexpression(_:))
- [static func buildPartialBlock(accumulated: [A.ContentState], next: [A.ContentState]) -> [A.ContentState]](/documentation/widgetkit/previewactivitybuilder/buildpartialblock(accumulated:next:))
- [static func buildPartialBlock(first: [A.ContentState]) -> [A.ContentState]](/documentation/widgetkit/previewactivitybuilder/buildpartialblock(first:))
- [PreviewRelevanceEntryBuilder](/documentation/widgetkit/previewrelevanceentrybuilder)

##### Previewing relevance widgets

- [static func buildArray([[Entry]]) -> [Entry]](/documentation/widgetkit/previewrelevanceentrybuilder/buildarray(_:))
- [static func buildExpression(Entry) -> [Entry]](/documentation/widgetkit/previewrelevanceentrybuilder/buildexpression(_:))
- [static func buildPartialBlock(first: [Entry]) -> [Entry]](/documentation/widgetkit/previewrelevanceentrybuilder/buildpartialblock(first:))
- [static func buildPartialBlock(accumulated: [Entry], next: [Entry]) -> [Entry]](/documentation/widgetkit/previewrelevanceentrybuilder/buildpartialblock(accumulated:next:))
- [PreviewTimelineBuilder](/documentation/widgetkit/previewtimelinebuilder)

##### Previewing timelines

- [static func buildArray([[any TimelineEntry]]) -> [any TimelineEntry]](/documentation/widgetkit/previewtimelinebuilder/buildarray(_:))
- [static func buildExpression(some TimelineEntry) -> [any TimelineEntry]](/documentation/widgetkit/previewtimelinebuilder/buildexpression(_:))
- [static func buildPartialBlock(accumulated: [any TimelineEntry], next: [any TimelineEntry]) -> [any TimelineEntry]](/documentation/widgetkit/previewtimelinebuilder/buildpartialblock(accumulated:next:))
- [static func buildPartialBlock(first: [any TimelineEntry]) -> [any TimelineEntry]](/documentation/widgetkit/previewtimelinebuilder/buildpartialblock(first:))
- [WidgetPreviewContext](/documentation/widgetkit/widgetpreviewcontext)

#### Creating a Preview Context

- [init(family: WidgetFamily)](/documentation/widgetkit/widgetpreviewcontext/init(family:))
- [Debugging widgets](/documentation/widgetkit/debugging-widgets)

### visionOS widgets

- [Updating your widgets for visionOS](/documentation/widgetkit/updating-your-widgets-for-visionos)
- [func widgetTexture(WidgetTexture) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/widgettexture(_:))
- [WidgetTexture](/documentation/widgetkit/widgettexture)

#### Textures

- [static let glass: WidgetTexture](/documentation/widgetkit/widgettexture/glass)
- [static let paper: WidgetTexture](/documentation/widgetkit/widgettexture/paper)
- [func supportedMountingStyles([WidgetMountingStyle]) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/supportedmountingstyles(_:))
- [WidgetMountingStyle](/documentation/widgetkit/widgetmountingstyle)

#### Type Properties

- [static let elevated: WidgetMountingStyle](/documentation/widgetkit/widgetmountingstyle/elevated)
- [static let recessed: WidgetMountingStyle](/documentation/widgetkit/widgetmountingstyle/recessed)
- [LevelOfDetail](/documentation/widgetkit/levelofdetail)

#### Type Properties

- [static let `default`: LevelOfDetail](/documentation/widgetkit/levelofdetail/default)
- [static let simplified: LevelOfDetail](/documentation/widgetkit/levelofdetail/simplified)

### Accessory and watchOS widgets

- [Creating accessory widgets and watch complications](/documentation/widgetkit/creating-accessory-widgets-and-watch-complications)
- [AccessoryWidgetGroup](/documentation/widgetkit/accessorywidgetgroup)

#### Initializers

- [init(some StringProtocol, content: () -> Content)](/documentation/widgetkit/accessorywidgetgroup/init(_:content:)-3ij0e)
- [init(LocalizedStringResource, content: () -> Content)](/documentation/widgetkit/accessorywidgetgroup/init(_:content:)-75rkg)
- [init(LocalizedStringKey, content: () -> Content)](/documentation/widgetkit/accessorywidgetgroup/init(_:content:)-nb0)
- [init(LocalizedStringResource, image: ImageResource, content: () -> Content)](/documentation/widgetkit/accessorywidgetgroup/init(_:image:content:)-385rt)
- [init(LocalizedStringKey, image: ImageResource, content: () -> Content)](/documentation/widgetkit/accessorywidgetgroup/init(_:image:content:)-50iyk)
- [init(some StringProtocol, image: ImageResource, content: () -> Content)](/documentation/widgetkit/accessorywidgetgroup/init(_:image:content:)-66iys)
- [init(LocalizedStringResource, systemImage: String, content: () -> Content)](/documentation/widgetkit/accessorywidgetgroup/init(_:systemimage:content:)-3mynu)
- [init(LocalizedStringKey, systemImage: String, content: () -> Content)](/documentation/widgetkit/accessorywidgetgroup/init(_:systemimage:content:)-54h9w)
- [init(some StringProtocol, systemImage: String, content: () -> Content)](/documentation/widgetkit/accessorywidgetgroup/init(_:systemimage:content:)-7rnqc)
- [init(label: () -> Label, content: () -> Content)](/documentation/widgetkit/accessorywidgetgroup/init(label:content:))
- [AccessoryWidgetGroupStyle](/documentation/widgetkit/accessorywidgetgroupstyle)

#### Type Properties

- [static let automatic: AccessoryWidgetGroupStyle](/documentation/widgetkit/accessorywidgetgroupstyle/automatic)
- [static let circular: AccessoryWidgetGroupStyle](/documentation/widgetkit/accessorywidgetgroupstyle/circular)
- [static let roundedSquare: AccessoryWidgetGroupStyle](/documentation/widgetkit/accessorywidgetgroupstyle/roundedsquare)
- [Migrating ClockKit complications to WidgetKit](/documentation/widgetkit/converting-a-clockkit-app)

### Smart Stacks

- [Increasing the visibility of widgets in Smart Stacks](/documentation/widgetkit/widget-suggestions-in-smart-stacks)
- [TimelineEntryRelevance](/documentation/widgetkit/timelineentryrelevance)

#### Creating a Relevance Object

- [init(score: Float, duration: TimeInterval)](/documentation/widgetkit/timelineentryrelevance/init(score:duration:))

#### Configuring Relevance Properties

- [var duration: TimeInterval](/documentation/widgetkit/timelineentryrelevance/duration)
- [var score: Float](/documentation/widgetkit/timelineentryrelevance/score)
- [RelevanceConfiguration](/documentation/widgetkit/relevanceconfiguration)

#### Creating a relevance configuration

- [init<Provider>(kind: String, provider: Provider, content: (Provider.Entry) -> Content)](/documentation/widgetkit/relevanceconfiguration/init(kind:provider:content:))
- [RelevanceEntriesProvider](/documentation/widgetkit/relevanceentriesprovider)

#### Generating relevance entries

- [func entry(configuration: Self.Configuration, context: Self.Context) async throws -> Self.Entry](/documentation/widgetkit/relevanceentriesprovider/entry(configuration:context:))
- [func relevance() async -> WidgetRelevance<Self.Configuration>](/documentation/widgetkit/relevanceentriesprovider/relevance())
- [func placeholder(context: Self.Context) -> Self.Entry](/documentation/widgetkit/relevanceentriesprovider/placeholder(context:))
- [RelevanceEntriesProviderContext](/documentation/widgetkit/relevanceentriesprovidercontext)

##### Instance Properties

- [let displaySize: CGSize](/documentation/widgetkit/relevanceentriesprovidercontext/displaysize)
- [let isPreview: Bool](/documentation/widgetkit/relevanceentriesprovidercontext/ispreview)

#### Associated Types

- [Configuration](/documentation/widgetkit/relevanceentriesprovider/configuration)
- [Entry](/documentation/widgetkit/relevanceentriesprovider/entry)

#### Type Aliases

- [RelevanceEntriesProvider.Context](/documentation/widgetkit/relevanceentriesprovider/context)
- [RelevanceEntry](/documentation/widgetkit/relevanceentry)
- [WidgetRelevance](/documentation/widgetkit/widgetrelevance)

#### Initializers

- [init([WidgetRelevanceAttribute<Configuration>])](/documentation/widgetkit/widgetrelevance/init(_:))
- [WidgetRelevanceAttribute](/documentation/widgetkit/widgetrelevanceattribute)

#### Initializers

- [init(configuration: Configuration, context: RelevantContext)](/documentation/widgetkit/widgetrelevanceattribute/init(configuration:context:)-8325r)
- [init(configuration: Configuration, context: RelevantContext)](/documentation/widgetkit/widgetrelevanceattribute/init(configuration:context:)-8jxhs)
- [init(configuration: Configuration, group: WidgetRelevanceGroup)](/documentation/widgetkit/widgetrelevanceattribute/init(configuration:group:)-5yh17)
- [init(configuration: Configuration, group: WidgetRelevanceGroup)](/documentation/widgetkit/widgetrelevanceattribute/init(configuration:group:)-93jm5)
- [init(context: RelevantContext)](/documentation/widgetkit/widgetrelevanceattribute/init(context:))
- [init(group: WidgetRelevanceGroup)](/documentation/widgetkit/widgetrelevanceattribute/init(group:))
- [WidgetRelevanceGroup](/documentation/widgetkit/widgetrelevancegroup)

#### Type Properties

- [static let automatic: WidgetRelevanceGroup](/documentation/widgetkit/widgetrelevancegroup/automatic)
- [static let ungrouped: WidgetRelevanceGroup](/documentation/widgetkit/widgetrelevancegroup/ungrouped)

#### Type Methods

- [static func named(String) -> WidgetRelevanceGroup](/documentation/widgetkit/widgetrelevancegroup/named(_:))
- [AppIntentRecommendation](/documentation/widgetkit/appintentrecommendation)

#### Creating a recommended widget configuration

- [init(intent: Intent, description: LocalizedStringKey)](/documentation/widgetkit/appintentrecommendation/init(intent:description:)-2p4dh)
- [init(intent: Intent, description: Text)](/documentation/widgetkit/appintentrecommendation/init(intent:description:)-65igj)
- [init(intent: Intent, description: some StringProtocol)](/documentation/widgetkit/appintentrecommendation/init(intent:description:)-7zn32)

#### Initializers

- [init(intent: Intent, description: LocalizedStringResource)](/documentation/widgetkit/appintentrecommendation/init(intent:description:)-3j1cv)
- [IntentConfiguration](/documentation/widgetkit/intentconfiguration)

#### Creating a widget configuration

- [init<Provider>(kind: String, intent: Intent.Type, provider: Provider, content: (Provider.Entry) -> Content)](/documentation/widgetkit/intentconfiguration/init(kind:intent:provider:content:))
- [var body: Self.Body](/documentation/swiftui/widgetconfiguration/body-swift.property)

#### Setting the display name

- [func configurationDisplayName<S>(S) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/configurationdisplayname(_:)-2c3zv)
- [func configurationDisplayName(Text) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/configurationdisplayname(_:)-3sbn4)
- [func configurationDisplayName(LocalizedStringKey) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/configurationdisplayname(_:)-4v9q)

#### Setting the description

- [func description(Text) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/description(_:)-1bvuj)
- [func description<S>(S) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/description(_:)-2bfr)
- [func description(LocalizedStringKey) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/description(_:)-4q9pa)

#### Setting the supported families

- [func supportedFamilies([WidgetFamily]) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/supportedfamilies(_:))

#### Handling background network requests

- [func backgroundTask<D, R>(BackgroundTask<D, R>, action: (D) async -> R) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/backgroundtask(_:action:))
- [func onBackgroundURLSessionEvents(matching: ((String) -> Bool)?, (String, () -> Void) -> Void) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/onbackgroundurlsessionevents(matching:_:)-2e152)
- [func onBackgroundURLSessionEvents(matching: String, (String, () -> Void) -> Void) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/onbackgroundurlsessionevents(matching:_:)-fw6x)
- [IntentRecommendation](/documentation/widgetkit/intentrecommendation)

#### Creating a Recommended Widget Configuration

- [init(intent: T, description: LocalizedStringKey)](/documentation/widgetkit/intentrecommendation/init(intent:description:)-1zh33)
- [init(intent: T, description: Text)](/documentation/widgetkit/intentrecommendation/init(intent:description:)-4epo2)
- [init<S>(intent: T, description: S)](/documentation/widgetkit/intentrecommendation/init(intent:description:)-6v7dj)

#### Initializers

- [init(intent: T, description: LocalizedStringResource)](/documentation/widgetkit/intentrecommendation/init(intent:description:)-6o8yy)
- [Live Activities](/documentation/widgetkit/liveactivities-collection)

### Essentials

- [Developing a WidgetKit strategy](/documentation/widgetkit/developing-a-widgetkit-strategy)
- [Creating a widget extension](/documentation/widgetkit/creating-a-widget-extension)

### Live Activity setup

- [Displaying live data with Live Activities](/documentation/activitykit/displaying-live-data-with-live-activities)
- [ActivityKit](/documentation/activitykit)
- [Creating a widget extension](/documentation/widgetkit/creating-a-widget-extension)
- [Emoji Rangers: Supporting Live Activities, interactivity, and animations](/documentation/widgetkit/emoji-rangers-supporting-live-activities-interactivity-and-animations)
- [ActivityConfiguration](/documentation/widgetkit/activityconfiguration)

#### Creating a Live Activity configuration

- [ActivityViewContext](/documentation/widgetkit/activityviewcontext)

##### Describing a Live Activity

- [let attributes: Attributes](/documentation/widgetkit/activityviewcontext/attributes)
- [let state: Attributes.ContentState](/documentation/widgetkit/activityviewcontext/state)
- [let isStale: Bool](/documentation/widgetkit/activityviewcontext/isstale)
- [let activityID: String](/documentation/widgetkit/activityviewcontext/activityid)
- [init<Content>(for: Attributes.Type, content: (ActivityViewContext<Attributes>) -> Content, dynamicIsland: (ActivityViewContext<Attributes>) -> DynamicIsland)](/documentation/widgetkit/activityconfiguration/init(for:content:dynamicisland:))
- [DynamicIsland](/documentation/widgetkit/dynamicisland)

#### Creating the view for the Dynamic Island

- [init<Expanded, CompactLeading, CompactTrailing, Minimal>(expanded: () -> DynamicIslandExpandedContent<Expanded>, compactLeading: () -> CompactLeading, compactTrailing: () -> CompactTrailing, minimal: () -> Minimal)](/documentation/widgetkit/dynamicisland/init(expanded:compactleading:compacttrailing:minimal:))
- [DynamicIslandExpandedRegion](/documentation/widgetkit/dynamicislandexpandedregion)

##### Creating the expanded presentation

- [init(DynamicIslandExpandedRegionPosition, priority: Double, content: () -> Content)](/documentation/widgetkit/dynamicislandexpandedregion/init(_:priority:content:))
- [DynamicIslandExpandedRegionPosition](/documentation/widgetkit/dynamicislandexpandedregionposition)

###### View positions

- [static let bottom: DynamicIslandExpandedRegionPosition](/documentation/widgetkit/dynamicislandexpandedregionposition/bottom)
- [static let center: DynamicIslandExpandedRegionPosition](/documentation/widgetkit/dynamicislandexpandedregionposition/center)
- [static let leading: DynamicIslandExpandedRegionPosition](/documentation/widgetkit/dynamicislandexpandedregionposition/leading)
- [static let trailing: DynamicIslandExpandedRegionPosition](/documentation/widgetkit/dynamicislandexpandedregionposition/trailing)
- [func dynamicIsland(verticalPlacement: DynamicIslandExpandedRegionVerticalPlacement) -> some View](/documentation/swiftui/view/dynamicisland(verticalplacement:))
- [DynamicIslandExpandedRegionVerticalPlacement](/documentation/widgetkit/dynamicislandexpandedregionverticalplacement)

###### Configuring vertical content placement

- [static let `default`: DynamicIslandExpandedRegionVerticalPlacement](/documentation/widgetkit/dynamicislandexpandedregionverticalplacement/default)
- [static let belowIfTooWide: DynamicIslandExpandedRegionVerticalPlacement](/documentation/widgetkit/dynamicislandexpandedregionverticalplacement/belowiftoowide)
- [DynamicIslandExpandedContent](/documentation/widgetkit/dynamicislandexpandedcontent)
- [DynamicIslandExpandedContentBuilder](/documentation/widgetkit/dynamicislandexpandedcontentbuilder)

###### Type Methods

- [static func buildPartialBlock<C0, C1>(accumulated: DynamicIslandExpandedContent<C0>, next: DynamicIslandExpandedContent<C1>) -> DynamicIslandExpandedContent<some View>
](/documentation/widgetkit/dynamicislandexpandedcontentbuilder/buildpartialblock(accumulated:next:)-39sr0)
- [static func buildPartialBlock<C0, C1>(accumulated: DynamicIslandExpandedContent<C0>, next: DynamicIslandExpandedRegion<C1>) -> DynamicIslandExpandedContent<some View>
](/documentation/widgetkit/dynamicislandexpandedcontentbuilder/buildpartialblock(accumulated:next:)-3jswv)
- [static func buildPartialBlock<C>(first: DynamicIslandExpandedRegion<C>) -> DynamicIslandExpandedContent<some View>
](/documentation/widgetkit/dynamicislandexpandedcontentbuilder/buildpartialblock(first:)-5j108)
- [static func buildPartialBlock<C>(first: DynamicIslandExpandedContent<C>) -> DynamicIslandExpandedContent<some View>
](/documentation/widgetkit/dynamicislandexpandedcontentbuilder/buildpartialblock(first:)-74hpw)

##### Specifying custom content margins

- [func contentMargins(Edge.Set, Double) -> DynamicIslandExpandedRegion<Content>](/documentation/widgetkit/dynamicislandexpandedregion/contentmargins(_:_:))

#### Deep linking

- [func widgetURL(URL?) -> DynamicIsland](/documentation/widgetkit/dynamicisland/widgeturl(_:))

#### Setting a tint color

- [func keylineTint(Color?) -> DynamicIsland](/documentation/widgetkit/dynamicisland/keylinetint(_:))

#### Specifying content margins

- [func contentMargins(Edge.Set, Double, for: DynamicIslandMode) -> DynamicIsland](/documentation/widgetkit/dynamicisland/contentmargins(_:_:for:))
- [DynamicIslandMode](/documentation/widgetkit/dynamicislandmode)

##### Dynamic Island presentations

- [static let compactLeading: DynamicIslandMode](/documentation/widgetkit/dynamicislandmode/compactleading)
- [static let compactTrailing: DynamicIslandMode](/documentation/widgetkit/dynamicislandmode/compacttrailing)
- [static let expanded: DynamicIslandMode](/documentation/widgetkit/dynamicislandmode/expanded)
- [static let minimal: DynamicIslandMode](/documentation/widgetkit/dynamicislandmode/minimal)
- [let NSUserActivityTypeLiveActivity: String](/documentation/widgetkit/nsuseractivitytypeliveactivity)
- [ActivityPreviewViewKind](/documentation/widgetkit/activitypreviewviewkind)

#### Live Activity preview types

- [case content](/documentation/widgetkit/activitypreviewviewkind/content)
- [case dynamicIsland(ActivityPreviewViewKind.DynamicIslandPreviewViewState)](/documentation/widgetkit/activitypreviewviewkind/dynamicisland(_:))
- [ActivityPreviewViewKind.DynamicIslandPreviewViewState](/documentation/widgetkit/activitypreviewviewkind/dynamicislandpreviewviewstate)

##### Dynamic Island presentations

- [case compact](/documentation/widgetkit/activitypreviewviewkind/dynamicislandpreviewviewstate/compact)
- [case minimal](/documentation/widgetkit/activitypreviewviewkind/dynamicislandpreviewviewstate/minimal)
- [case expanded](/documentation/widgetkit/activitypreviewviewkind/dynamicislandpreviewviewstate/expanded)
- [ActivityFamily](/documentation/widgetkit/activityfamily)

#### Accessing system families

- [case small](/documentation/widgetkit/activityfamily/small)
- [case medium](/documentation/widgetkit/activityfamily/medium)

#### Environment keys

- [SupportedActivityFamiliesEnvironmentKey](/documentation/widgetkit/supportedactivityfamiliesenvironmentkey)
- [Controls](/documentation/widgetkit/controls-collection)

### Essentials

- [Developing a WidgetKit strategy](/documentation/widgetkit/developing-a-widgetkit-strategy)
- [Creating a widget extension](/documentation/widgetkit/creating-a-widget-extension)
- [Emoji Rangers: Supporting Live Activities, interactivity, and animations](/documentation/widgetkit/emoji-rangers-supporting-live-activities-interactivity-and-animations)

### Setup and configuration

- [Creating controls to perform actions across the system](/documentation/widgetkit/creating-controls-to-perform-actions-across-the-system)
- [Adding refinements and configuration to controls](/documentation/widgetkit/adding-refinements-and-configuration-to-controls)
- [StaticControlConfiguration](/documentation/widgetkit/staticcontrolconfiguration)

#### Initializers

- [init(kind: String, content: () -> Content)](/documentation/widgetkit/staticcontrolconfiguration/init(kind:content:))
- [init<Provider>(kind: String, provider: Provider, content: (Provider.Value) -> Content)](/documentation/widgetkit/staticcontrolconfiguration/init(kind:provider:content:))
- [AppIntentControlConfiguration](/documentation/widgetkit/appintentcontrolconfiguration)

#### Initializers

- [init(kind: String, intent: Configuration.Type, content: (Configuration) -> Content)](/documentation/widgetkit/appintentcontrolconfiguration/init(kind:intent:content:))
- [init<Provider>(kind: String, provider: Provider, content: (Provider.Value) -> Content)](/documentation/widgetkit/appintentcontrolconfiguration/init(kind:provider:content:))
- [ControlCenter](/documentation/widgetkit/controlcenter)

#### Instance Methods

- [func currentControls() async throws -> [ControlInfo]](/documentation/widgetkit/controlcenter/currentcontrols())
- [func reloadAllControls()](/documentation/widgetkit/controlcenter/reloadallcontrols())
- [func reloadControls(ofKind: String)](/documentation/widgetkit/controlcenter/reloadcontrols(ofkind:))

#### Type Properties

- [static let shared: ControlCenter](/documentation/widgetkit/controlcenter/shared)
- [ControlInfo](/documentation/widgetkit/controlinfo)

#### Instance Properties

- [let kind: String](/documentation/widgetkit/controlinfo/kind)
- [var pushInfo: ControlPushInfo?](/documentation/widgetkit/controlinfo/pushinfo)

#### Instance Methods

- [func configurationIntent<Intent>(of: Intent.Type) -> Intent?](/documentation/widgetkit/controlinfo/configurationintent(of:))

#### Default Implementations

- [Identifiable Implementations](/documentation/widgetkit/controlinfo/identifiable-implementations)

##### Instance Properties

- [var id: String](/documentation/widgetkit/controlinfo/id)
- [ControlWidgetButton](/documentation/widgetkit/controlwidgetbutton)

#### Initializers

- [init(action: Action, label: () -> Label)](/documentation/widgetkit/controlwidgetbutton/init(action:label:)-77p8j)
- [init(action: Action, label: () -> Label)](/documentation/widgetkit/controlwidgetbutton/init(action:label:)-8oxxp)
- [init(action: Action, label: () -> Label, actionLabel: (Bool) -> ActionLabel)](/documentation/widgetkit/controlwidgetbutton/init(action:label:actionlabel:))
- [init(action: Action, label: () -> Label, actionLabel: (Bool) -> ActionLabel)](/documentation/widgetkit/controlwidgetbutton/init(action:label:actionlabel:))
- [init(some StringProtocol, action: Action, actionLabel: (Bool) -> ActionLabel)](/documentation/widgetkit/controlwidgetbutton/init(_:action:actionlabel:)-4sgji)
- [init(LocalizedStringKey, action: Action, actionLabel: (Bool) -> ActionLabel)](/documentation/widgetkit/controlwidgetbutton/init(_:action:actionlabel:)-67uvw)
- [init(LocalizedStringResource, action: Action, actionLabel: (Bool) -> ActionLabel)](/documentation/widgetkit/controlwidgetbutton/init(_:action:actionlabel:)-1kxch)

#### Default action label

- [ControlWidgetButtonDefaultActionLabel](/documentation/widgetkit/controlwidgetbuttondefaultactionlabel)
- [ControlWidgetToggle](/documentation/widgetkit/controlwidgettoggle)

#### Initializers

- [init(isOn: Bool, action: Action, label: () -> Label)](/documentation/widgetkit/controlwidgettoggle/init(ison:action:label:))
- [init(isOn: Bool, action: Action, label: () -> Label, valueLabel: (Bool) -> ValueLabel)](/documentation/widgetkit/controlwidgettoggle/init(ison:action:label:valuelabel:))
- [init(some StringProtocol, isOn: Bool, action: Action, valueLabel: (Bool) -> ValueLabel)](/documentation/widgetkit/controlwidgettoggle/init(_:ison:action:valuelabel:)-33wfq)
- [init(LocalizedStringKey, isOn: Bool, action: Action, valueLabel: (Bool) -> ValueLabel)](/documentation/widgetkit/controlwidgettoggle/init(_:ison:action:valuelabel:)-5o6bn)
- [init(LocalizedStringResource, isOn: Bool, action: Action, valueLabel: (Bool) -> ValueLabel)](/documentation/widgetkit/controlwidgettoggle/init(_:ison:action:valuelabel:)-4lk32)

#### Default action label

- [ControlWidgetToggleDefaultLabel](/documentation/widgetkit/controlwidgettoggledefaultlabel)

### Updates

- [Updating controls locally and remotely](/documentation/widgetkit/updating-controls-locally-and-remotely)
- [ControlPushHandler](/documentation/widgetkit/controlpushhandler)

#### Initializers

- [init()](/documentation/widgetkit/controlpushhandler/init())

#### Instance Methods

- [func pushTokensDidChange(controls: [ControlInfo])](/documentation/widgetkit/controlpushhandler/pushtokensdidchange(controls:))
- [ControlPushInfo](/documentation/widgetkit/controlpushinfo)

#### Instance Properties

- [let token: Data](/documentation/widgetkit/controlpushinfo/token)

### Previews

- [ControlValueProvider](/documentation/widgetkit/controlvalueprovider)

#### Associated Types

- [Value](/documentation/widgetkit/controlvalueprovider/value)

#### Instance Properties

- [var previewValue: Self.Value](/documentation/widgetkit/controlvalueprovider/previewvalue)

#### Instance Methods

- [func currentValue() async throws -> Self.Value](/documentation/widgetkit/controlvalueprovider/currentvalue())
- [AppIntentControlValueProvider](/documentation/widgetkit/appintentcontrolvalueprovider)

#### Associated Types

- [Configuration](/documentation/widgetkit/appintentcontrolvalueprovider/configuration)
- [Value](/documentation/widgetkit/appintentcontrolvalueprovider/value)

#### Instance Methods

- [func currentValue(configuration: Self.Configuration) async throws -> Self.Value](/documentation/widgetkit/appintentcontrolvalueprovider/currentvalue(configuration:))
- [func previewValue(configuration: Self.Configuration) -> Self.Value](/documentation/widgetkit/appintentcontrolvalueprovider/previewvalue(configuration:))

## Presentation

- [Creating views for widgets, Live Activities, and watch complications](/documentation/widgetkit/creating-views-for-widgets-live-activities-and-watch-complications)
- [SwiftUI views for widgets](/documentation/widgetkit/swiftui-views)

### Displaying text

- [Displaying dynamic dates in widgets](/documentation/widgetkit/displaying-dynamic-dates)
- [Text](/documentation/swiftui/text)

### Showing images

- [Image](/documentation/swiftui/image)

### Adding interaction

- [Adding interactivity to widgets and Live Activities](/documentation/widgetkit/adding-interactivity-to-widgets-and-live-activities)
- [Button](/documentation/swiftui/button)
- [Toggle](/documentation/swiftui/toggle)

### Adding labels and links

- [Label](/documentation/swiftui/label)
- [Link](/documentation/swiftui/link)

### Stacking views

- [HStack](/documentation/swiftui/hstack)
- [VStack](/documentation/swiftui/vstack)
- [ZStack](/documentation/swiftui/zstack)
- [LazyHStack](/documentation/swiftui/lazyhstack)
- [LazyVStack](/documentation/swiftui/lazyvstack)

### Arranging views in grids

- [LazyHGrid](/documentation/swiftui/lazyhgrid)
- [LazyVGrid](/documentation/swiftui/lazyvgrid)
- [GridItem](/documentation/swiftui/griditem)

### Enumerating lists

- [ForEach](/documentation/swiftui/foreach)

### Grouping views

- [Group](/documentation/swiftui/group)
- [GroupBox](/documentation/swiftui/groupbox)
- [Section](/documentation/swiftui/section)

### Representing hierarchies

- [OutlineGroup](/documentation/swiftui/outlinegroup)

### Adding spacers and dividers

- [Spacer](/documentation/swiftui/spacer)
- [Divider](/documentation/swiftui/divider)

### Handling conditional views

- [EmptyView](/documentation/swiftui/emptyview)
- [EquatableView](/documentation/swiftui/equatableview)

### Displaying shapes

- [Rectangle](/documentation/swiftui/rectangle)
- [RoundedRectangle](/documentation/swiftui/roundedrectangle)
- [Circle](/documentation/swiftui/circle)
- [Ellipse](/documentation/swiftui/ellipse)
- [Capsule](/documentation/swiftui/capsule)
- [Path](/documentation/swiftui/path)

### Transforming views

- [ScaledShape](/documentation/swiftui/scaledshape)
- [RotatedShape](/documentation/swiftui/rotatedshape)
- [OffsetShape](/documentation/swiftui/offsetshape)
- [TransformedShape](/documentation/swiftui/transformedshape)
- [ContainerRelativeShape](/documentation/swiftui/containerrelativeshape)

### Styling views

- [Color](/documentation/swiftui/color)
- [ImagePaint](/documentation/swiftui/imagepaint)
- [Gradient](/documentation/swiftui/gradient)
- [LinearGradient](/documentation/swiftui/lineargradient)
- [AngularGradient](/documentation/swiftui/angulargradient)
- [RadialGradient](/documentation/swiftui/radialgradient)
- [ForegroundStyle](/documentation/swiftui/foregroundstyle)
- [FillStyle](/documentation/swiftui/fillstyle)
- [BackgroundStyle](/documentation/swiftui/backgroundstyle)
- [SelectionShapeStyle](/documentation/swiftui/selectionshapestyle)
- [SeparatorShapeStyle](/documentation/swiftui/separatorshapestyle)
- [StrokeStyle](/documentation/swiftui/strokestyle)

### Creating 2D graphics

- [Canvas](/documentation/swiftui/canvas)

### Managing view geometry

- [GeometryProxy](/documentation/swiftui/geometryproxy)
- [GeometryReader](/documentation/swiftui/geometryreader)
- [ProjectionTransform](/documentation/swiftui/projectiontransform)

### Substituting views

- [AnyView](/documentation/swiftui/anyview)
- [TupleView](/documentation/swiftui/tupleview)

## Interactivity

- [Adding interactivity to widgets and Live Activities](/documentation/widgetkit/adding-interactivity-to-widgets-and-live-activities)
- [Animating data updates in widgets and Live Activities](/documentation/widgetkit/animating-data-updates-in-widgets-and-live-activities)
- [Linking to specific app scenes from your widget or Live Activity](/documentation/widgetkit/linking-to-specific-app-scenes-from-your-widget-or-live-activity)

## Accessibility

- [Adding accessible descriptions to widgets and Live Activities](/documentation/activitykit/adding-accessible-descriptions-to-widgets-and-live-activities)

## Previews and debugging

- [Previewing widgets and Live Activities in Xcode](/documentation/widgetkit/previewing-widgets-and-live-activities-in-xcode)
- [WidgetPreviewContext](/documentation/widgetkit/widgetpreviewcontext)

### Creating a Preview Context

- [init(family: WidgetFamily)](/documentation/widgetkit/widgetpreviewcontext/init(family:))
- [Preview macros](/documentation/widgetkit/preview-macros)

### Generating a widget preview

- [macro Preview<Widget, Provider>(String?, as: WidgetFamily, widget: () -> Widget, timelineProvider: () -> Provider)](/documentation/widgetkit/preview(_:as:widget:timelineprovider:))
- [macro Preview<Widget, Provider>(String?, as: WidgetFamily, using: Provider.Intent, widget: () -> Widget, timelineProvider: () -> Provider)](/documentation/widgetkit/preview(_:as:using:widget:timelineprovider:)-4ljg1)
- [macro Preview<Widget, Provider>(String?, as: WidgetFamily, using: Provider.Intent, widget: () -> Widget, timelineProvider: () -> Provider)](/documentation/widgetkit/preview(_:as:using:widget:timelineprovider:)-3df1l)
- [macro Preview<Widget>(String?, as: WidgetFamily, widget: () -> Widget, timeline: () async -> [any TimelineEntry])](/documentation/widgetkit/preview(_:as:widget:timeline:))
- [macro Preview<Widget, Entry>(String?, widget: () -> Widget, relevanceEntries: () async -> [Entry])](/documentation/widgetkit/preview(_:widget:relevanceentries:))
- [macro Preview<Widget, Provider>(String?, widget: () -> Widget, relevanceProvider: () -> Provider)](/documentation/widgetkit/preview(_:widget:relevanceprovider:))
- [macro Preview<Widget, Provider>(String?, widget: () -> Widget, relevanceProvider: () -> Provider, relevance: () async -> WidgetRelevance<Provider.Configuration>)](/documentation/widgetkit/preview(_:widget:relevanceprovider:relevance:))

### Generating a Live Activity preview

- [macro Preview<Widget, Attributes>(String?, as: ActivityPreviewViewKind, using: Attributes, widget: () -> Widget, contentStates: () async -> [Attributes.ContentState])](/documentation/widgetkit/preview(_:as:using:widget:contentstates:))

### Generated structures

- [PreviewActivityBuilder](/documentation/widgetkit/previewactivitybuilder)

#### Previewing Live Activities

- [static func buildArray([[A.ContentState]]) -> [A.ContentState]](/documentation/widgetkit/previewactivitybuilder/buildarray(_:))
- [static func buildExpression(A.ContentState) -> [A.ContentState]](/documentation/widgetkit/previewactivitybuilder/buildexpression(_:))
- [static func buildPartialBlock(accumulated: [A.ContentState], next: [A.ContentState]) -> [A.ContentState]](/documentation/widgetkit/previewactivitybuilder/buildpartialblock(accumulated:next:))
- [static func buildPartialBlock(first: [A.ContentState]) -> [A.ContentState]](/documentation/widgetkit/previewactivitybuilder/buildpartialblock(first:))
- [PreviewRelevanceEntryBuilder](/documentation/widgetkit/previewrelevanceentrybuilder)

#### Previewing relevance widgets

- [static func buildArray([[Entry]]) -> [Entry]](/documentation/widgetkit/previewrelevanceentrybuilder/buildarray(_:))
- [static func buildExpression(Entry) -> [Entry]](/documentation/widgetkit/previewrelevanceentrybuilder/buildexpression(_:))
- [static func buildPartialBlock(first: [Entry]) -> [Entry]](/documentation/widgetkit/previewrelevanceentrybuilder/buildpartialblock(first:))
- [static func buildPartialBlock(accumulated: [Entry], next: [Entry]) -> [Entry]](/documentation/widgetkit/previewrelevanceentrybuilder/buildpartialblock(accumulated:next:))
- [PreviewTimelineBuilder](/documentation/widgetkit/previewtimelinebuilder)

#### Previewing timelines

- [static func buildArray([[any TimelineEntry]]) -> [any TimelineEntry]](/documentation/widgetkit/previewtimelinebuilder/buildarray(_:))
- [static func buildExpression(some TimelineEntry) -> [any TimelineEntry]](/documentation/widgetkit/previewtimelinebuilder/buildexpression(_:))
- [static func buildPartialBlock(accumulated: [any TimelineEntry], next: [any TimelineEntry]) -> [any TimelineEntry]](/documentation/widgetkit/previewtimelinebuilder/buildpartialblock(accumulated:next:))
- [static func buildPartialBlock(first: [any TimelineEntry]) -> [any TimelineEntry]](/documentation/widgetkit/previewtimelinebuilder/buildpartialblock(first:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
