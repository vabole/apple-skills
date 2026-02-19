---
title: SwiftUI
source: https://developer.apple.com/documentation/swiftui
timestamp: 2026-02-19T07:56:09.637Z
---

## Essentials

- [Adopting Liquid Glass](/documentation/technologyoverviews/adopting-liquid-glass)
- [SwiftUI updates](/documentation/updates/swiftui)
- [Landmarks: Building an app with Liquid Glass](/documentation/swiftui/landmarks-building-an-app-with-liquid-glass)

### App features

- [Landmarks: Applying a background extension effect](/documentation/swiftui/landmarks-applying-a-background-extension-effect)
- [Landmarks: Extending horizontal scrolling under a sidebar or inspector](/documentation/swiftui/landmarks-extending-horizontal-scrolling-under-a-sidebar-or-inspector)
- [Landmarks: Refining the system provided Liquid Glass effect in toolbars](/documentation/swiftui/landmarks-refining-the-system-provided-glass-effect-in-toolbars)
- [Landmarks: Displaying custom activity badges](/documentation/swiftui/landmarks-displaying-custom-activity-badges)

## App structure

- [App organization](/documentation/swiftui/app-organization)

### Creating an app

- [Destination Video](/documentation/visionos/destination-video)
- [Hello World](/documentation/visionos/world)
- [Backyard Birds: Building an app with SwiftData and widgets](/documentation/swiftui/backyard-birds-sample)
- [Food Truck: Building a SwiftUI multiplatform app](/documentation/swiftui/food-truck-building-a-swiftui-multiplatform-app)
- [Fruta: Building a feature-rich app with SwiftUI](/documentation/appclip/fruta-building-a-feature-rich-app-with-swiftui)
- [Migrating to the SwiftUI life cycle](/documentation/swiftui/migrating-to-the-swiftui-life-cycle)
- [App](/documentation/swiftui/app)

#### Implementing an app

- [var body: Self.Body](/documentation/swiftui/app/body-swift.property)
- [Body](/documentation/swiftui/app/body-swift.associatedtype)

#### Running an app

- [init()](/documentation/swiftui/app/init())
- [static func main()](/documentation/swiftui/app/main())

### Targeting iOS and iPadOS

- [UILaunchScreen](/documentation/bundleresources/information-property-list/uilaunchscreen)
- [UILaunchScreens](/documentation/bundleresources/information-property-list/uilaunchscreens)
- [UIApplicationDelegateAdaptor](/documentation/swiftui/uiapplicationdelegateadaptor)

#### Creating a delegate adaptor

- [init(_:)](/documentation/swiftui/uiapplicationdelegateadaptor/init(_:))

#### Getting the delegate adaptor

- [var projectedValue: ObservedObject<DelegateType>.Wrapper](/documentation/swiftui/uiapplicationdelegateadaptor/projectedvalue)
- [var wrappedValue: DelegateType](/documentation/swiftui/uiapplicationdelegateadaptor/wrappedvalue)

### Targeting macOS

- [NSApplicationDelegateAdaptor](/documentation/swiftui/nsapplicationdelegateadaptor)

#### Creating a delegate adaptor

- [init(_:)](/documentation/swiftui/nsapplicationdelegateadaptor/init(_:))

#### Getting the delegate adaptor

- [var projectedValue: ObservedObject<DelegateType>.Wrapper](/documentation/swiftui/nsapplicationdelegateadaptor/projectedvalue)
- [var wrappedValue: DelegateType](/documentation/swiftui/nsapplicationdelegateadaptor/wrappedvalue)

### Targeting watchOS

- [WKApplicationDelegateAdaptor](/documentation/swiftui/wkapplicationdelegateadaptor)

#### Creating a delegate adaptor

- [init(_:)](/documentation/swiftui/wkapplicationdelegateadaptor/init(_:))

#### Getting the delegate adaptor

- [var projectedValue: ObservedObject<DelegateType>.Wrapper](/documentation/swiftui/wkapplicationdelegateadaptor/projectedvalue)
- [var wrappedValue: DelegateType](/documentation/swiftui/wkapplicationdelegateadaptor/wrappedvalue)
- [WKExtensionDelegateAdaptor](/documentation/swiftui/wkextensiondelegateadaptor)

#### Creating a delegate adaptor

- [init(_:)](/documentation/swiftui/wkextensiondelegateadaptor/init(_:))

#### Getting the delegate adaptor

- [var projectedValue: ObservedObject<DelegateType>.Wrapper](/documentation/swiftui/wkextensiondelegateadaptor/projectedvalue)
- [var wrappedValue: DelegateType](/documentation/swiftui/wkextensiondelegateadaptor/wrappedvalue)

### Targeting tvOS

- [Creating a tvOS media catalog app in SwiftUI](/documentation/swiftui/creating-a-tvos-media-catalog-app-in-swiftui)

### Handling system recenter events

- [WorldRecenterPhase](/documentation/swiftui/worldrecenterphase)

#### Enumeration Cases

- [case began](/documentation/swiftui/worldrecenterphase/began)
- [case ended](/documentation/swiftui/worldrecenterphase/ended)
- [Scenes](/documentation/swiftui/scenes)

### Creating scenes

- [Scene](/documentation/swiftui/scene)

#### Creating a scene

- [var body: Self.Body](/documentation/swiftui/scene/body-swift.property)
- [Body](/documentation/swiftui/scene/body-swift.associatedtype)

#### Watching for changes

- [func onChange(of:initial:_:)](/documentation/swiftui/scene/onchange(of:initial:_:))
- [func handlesExternalEvents(matching: Set<String>) -> some Scene](/documentation/swiftui/scene/handlesexternalevents(matching:))

#### Creating background tasks

- [func backgroundTask<D, R>(BackgroundTask<D, R>, action: (D) async -> R) -> some Scene](/documentation/swiftui/scene/backgroundtask(_:action:))

#### Managing app storage

- [func defaultAppStorage(UserDefaults) -> some Scene](/documentation/swiftui/scene/defaultappstorage(_:))

#### Setting commands

- [func commands<Content>(content: () -> Content) -> some Scene](/documentation/swiftui/scene/commands(content:))
- [func commandsRemoved() -> some Scene](/documentation/swiftui/scene/commandsremoved())
- [func commandsReplaced<Content>(content: () -> Content) -> some Scene](/documentation/swiftui/scene/commandsreplaced(content:))
- [func keyboardShortcut(KeyboardShortcut?) -> some Scene](/documentation/swiftui/scene/keyboardshortcut(_:))
- [func keyboardShortcut(KeyEquivalent, modifiers: EventModifiers, localization: KeyboardShortcut.Localization) -> some Scene](/documentation/swiftui/scene/keyboardshortcut(_:modifiers:localization:))

#### Sizing and positioning the scene

- [func defaultPosition(UnitPoint) -> some Scene](/documentation/swiftui/scene/defaultposition(_:))
- [func defaultSize(_:)](/documentation/swiftui/scene/defaultsize(_:))
- [func defaultSize(width: CGFloat, height: CGFloat) -> some Scene](/documentation/swiftui/scene/defaultsize(width:height:))
- [func defaultSize(width: CGFloat, height: CGFloat, depth: CGFloat) -> some Scene](/documentation/swiftui/scene/defaultsize(width:height:depth:))
- [func defaultSize(Size3D, in: UnitLength) -> some Scene](/documentation/swiftui/scene/defaultsize(_:in:))
- [func defaultSize(width: CGFloat, height: CGFloat, depth: CGFloat, in: UnitLength) -> some Scene](/documentation/swiftui/scene/defaultsize(width:height:depth:in:))
- [func defaultWindowPlacement((WindowLayoutRoot, WindowPlacementContext) -> WindowPlacement) -> some Scene](/documentation/swiftui/scene/defaultwindowplacement(_:))
- [func windowResizability(WindowResizability) -> some Scene](/documentation/swiftui/scene/windowresizability(_:))
- [func windowIdealSize(WindowIdealSize) -> some Scene](/documentation/swiftui/scene/windowidealsize(_:))
- [func windowIdealPlacement((WindowLayoutRoot, WindowPlacementContext) -> WindowPlacement) -> some Scene](/documentation/swiftui/scene/windowidealplacement(_:))
- [func windowManagerRole(WindowManagerRole) -> some Scene](/documentation/swiftui/scene/windowmanagerrole(_:))

#### Interacting with volumes

- [func volumeWorldAlignment(WorldAlignmentBehavior) -> some Scene](/documentation/swiftui/scene/volumeworldalignment(_:))
- [func defaultWorldScaling(WorldScalingBehavior) -> some Scene](/documentation/swiftui/scene/defaultworldscaling(_:))

#### Configuring scene visibility

- [func defaultLaunchBehavior(SceneLaunchBehavior) -> some Scene](/documentation/swiftui/scene/defaultlaunchbehavior(_:))
- [func restorationBehavior(SceneRestorationBehavior) -> some Scene](/documentation/swiftui/scene/restorationbehavior(_:))
- [func persistentSystemOverlays(Visibility) -> some Scene](/documentation/swiftui/scene/persistentsystemoverlays(_:))

#### Styling the scene

- [func immersionStyle(selection: Binding<any ImmersionStyle>, in: any ImmersionStyle...) -> some Scene](/documentation/swiftui/scene/immersionstyle(selection:in:))
- [func upperLimbVisibility(Visibility) -> some Scene](/documentation/swiftui/scene/upperlimbvisibility(_:))
- [func windowStyle<S>(S) -> some Scene](/documentation/swiftui/scene/windowstyle(_:))
- [func windowLevel(WindowLevel) -> some Scene](/documentation/swiftui/scene/windowlevel(_:))
- [func windowToolbarStyle<S>(S) -> some Scene](/documentation/swiftui/scene/windowtoolbarstyle(_:))
- [func windowToolbarLabelStyle(Binding<ToolbarLabelStyle>) -> some Scene](/documentation/swiftui/scene/windowtoolbarlabelstyle(_:))
- [func windowToolbarLabelStyle(fixed: ToolbarLabelStyle) -> some Scene](/documentation/swiftui/scene/windowtoolbarlabelstyle(fixed:))

#### Configuring a data model

- [func modelContext(ModelContext) -> some Scene](/documentation/swiftui/scene/modelcontext(_:))
- [func modelContainer(ModelContainer) -> some Scene](/documentation/swiftui/scene/modelcontainer(_:))
- [func modelContainer(for:inMemory:isAutosaveEnabled:isUndoEnabled:onSetup:)](/documentation/swiftui/scene/modelcontainer(for:inmemory:isautosaveenabled:isundoenabled:onsetup:))

#### Managing the environment

- [func environment<T>(T?) -> some Scene](/documentation/swiftui/scene/environment(_:))
- [func environment<V>(WritableKeyPath<EnvironmentValues, V>, V) -> some Scene](/documentation/swiftui/scene/environment(_:_:))
- [func environmentObject<T>(T) -> some Scene](/documentation/swiftui/scene/environmentobject(_:))
- [func transformEnvironment<V>(WritableKeyPath<EnvironmentValues, V>, transform: (inout V) -> Void) -> some Scene](/documentation/swiftui/scene/transformenvironment(_:transform:))

#### Interacting with dialogs

- [func dialogIcon(Image?) -> some Scene](/documentation/swiftui/scene/dialogicon(_:))
- [func dialogSeverity(DialogSeverity) -> some Scene](/documentation/swiftui/scene/dialogseverity(_:))
- [func dialogSuppressionToggle(isSuppressed: Binding<Bool>) -> some Scene](/documentation/swiftui/scene/dialogsuppressiontoggle(issuppressed:))
- [func dialogSuppressionToggle(_:isSuppressed:)](/documentation/swiftui/scene/dialogsuppressiontoggle(_:issuppressed:))

#### Supporting drag behavior

- [func windowBackgroundDragBehavior(WindowInteractionBehavior) -> some Scene](/documentation/swiftui/scene/windowbackgrounddragbehavior(_:))

#### Deprecated symbols

- [func onChange<V>(of: V, perform: (V) -> Void) -> some Scene](/documentation/swiftui/scene/onchange(of:perform:))

#### Instance Methods

- [func documentBrowserContextMenu(([URL]?) -> some View) -> some Scene](/documentation/swiftui/scene/documentbrowsercontextmenu(_:))
- [func immersiveContentBrightness(ImmersiveContentBrightness) -> some Scene](/documentation/swiftui/scene/immersivecontentbrightness(_:))
- [func immersiveEnvironmentBehavior(ImmersiveEnvironmentBehavior) -> some Scene](/documentation/swiftui/scene/immersiveenvironmentbehavior(_:))
- [func menuBarExtraStyle<S>(S) -> some Scene](/documentation/swiftui/scene/menubarextrastyle(_:))
- [SceneBuilder](/documentation/swiftui/scenebuilder)

#### Building content

- [static buildBlock(_:)](/documentation/swiftui/scenebuilder/buildblock(_:))
- [static func buildExpression<Content>(Content) -> Content](/documentation/swiftui/scenebuilder/buildexpression(_:))
- [static buildLimitedAvailability(_:)](/documentation/swiftui/scenebuilder/buildlimitedavailability(_:))
- [static func buildOptional((any Scene & _LimitedAvailabilitySceneMarker)?) -> some Scene](/documentation/swiftui/scenebuilder/buildoptional(_:))

### Monitoring scene life cycle

- [var scenePhase: ScenePhase](/documentation/swiftui/environmentvalues/scenephase)
- [ScenePhase](/documentation/swiftui/scenephase)

#### Getting scene phases

- [case active](/documentation/swiftui/scenephase/active)
- [case inactive](/documentation/swiftui/scenephase/inactive)
- [case background](/documentation/swiftui/scenephase/background)

### Managing a settings window

- [Settings](/documentation/swiftui/settings)

#### Creating a settings scene

- [init(content: () -> Content)](/documentation/swiftui/settings/init(content:))
- [SettingsLink](/documentation/swiftui/settingslink)

#### Creating a settings link

- [init()](/documentation/swiftui/settingslink/init())
- [init(label: () -> Label)](/documentation/swiftui/settingslink/init(label:))

#### Supporting types

- [DefaultSettingsLinkLabel](/documentation/swiftui/defaultsettingslinklabel)
- [OpenSettingsAction](/documentation/swiftui/opensettingsaction)

#### Instance Methods

- [func callAsFunction()](/documentation/swiftui/opensettingsaction/callasfunction())
- [var openSettings: OpenSettingsAction](/documentation/swiftui/environmentvalues/opensettings)

### Building a menu bar

- [Building and customizing the menu bar with SwiftUI](/documentation/swiftui/building-and-customizing-the-menu-bar-with-swiftui)

### Creating a menu bar extra

- [MenuBarExtra](/documentation/swiftui/menubarextra)

#### Creating a menu bar extra

- [init(_:content:)](/documentation/swiftui/menubarextra/init(_:content:))
- [init(content: () -> Content, label: () -> Label)](/documentation/swiftui/menubarextra/init(content:label:))
- [init(_:isInserted:content:)](/documentation/swiftui/menubarextra/init(_:isinserted:content:))
- [init(isInserted: Binding<Bool>, content: () -> Content, label: () -> Label)](/documentation/swiftui/menubarextra/init(isinserted:content:label:))

#### Creating a menu bar extra with an image

- [init(_:image:content:)](/documentation/swiftui/menubarextra/init(_:image:content:))
- [init(_:image:isInserted:content:)](/documentation/swiftui/menubarextra/init(_:image:isinserted:content:))
- [init(_:systemImage:content:)](/documentation/swiftui/menubarextra/init(_:systemimage:content:))
- [init(_:systemImage:isInserted:content:)](/documentation/swiftui/menubarextra/init(_:systemimage:isinserted:content:))
- [func menuBarExtraStyle<S>(S) -> some Scene](/documentation/swiftui/scene/menubarextrastyle(_:))
- [MenuBarExtraStyle](/documentation/swiftui/menubarextrastyle)

#### Getting menu bar extra styles

- [static var automatic: AutomaticMenuBarExtraStyle](/documentation/swiftui/menubarextrastyle/automatic)
- [static var menu: PullDownMenuBarExtraStyle](/documentation/swiftui/menubarextrastyle/menu)
- [static var window: WindowMenuBarExtraStyle](/documentation/swiftui/menubarextrastyle/window)

#### Supporting types

- [AutomaticMenuBarExtraStyle](/documentation/swiftui/automaticmenubarextrastyle)

##### Creating the menu bar extra style

- [init()](/documentation/swiftui/automaticmenubarextrastyle/init())
- [PullDownMenuBarExtraStyle](/documentation/swiftui/pulldownmenubarextrastyle)

##### Creating the menu bar extra style

- [init()](/documentation/swiftui/pulldownmenubarextrastyle/init())
- [WindowMenuBarExtraStyle](/documentation/swiftui/windowmenubarextrastyle)

##### Creating the menu bar extra style

- [init()](/documentation/swiftui/windowmenubarextrastyle/init())

### Creating watch notifications

- [WKNotificationScene](/documentation/swiftui/wknotificationscene)

#### Creating a notification scene

- [init(controller: Controller.Type, category: String)](/documentation/swiftui/wknotificationscene/init(controller:category:))
- [Windows](/documentation/swiftui/windows)

### Essentials

- [Customizing window styles and state-restoration behavior in macOS](/documentation/swiftui/customizing-window-styles-and-state-restoration-behavior-in-macos)
- [Bringing multiple windows to your SwiftUI app](/documentation/swiftui/bringing-multiple-windows-to-your-swiftui-app)

### Creating windows

- [WindowGroup](/documentation/swiftui/windowgroup)

#### Creating a window group

- [init(content: () -> Content)](/documentation/swiftui/windowgroup/init(content:))
- [init(_:content:)](/documentation/swiftui/windowgroup/init(_:content:))

#### Identifying a window group

- [init(id: String, content: () -> Content)](/documentation/swiftui/windowgroup/init(id:content:))
- [init(_:id:content:)](/documentation/swiftui/windowgroup/init(_:id:content:))

#### Creating a data-driven window group

- [init<D, C>(for: D.Type, content: (Binding<D?>) -> C)](/documentation/swiftui/windowgroup/init(for:content:))
- [init(_:for:content:)](/documentation/swiftui/windowgroup/init(_:for:content:))

#### Providing default data to a window group

- [init<D, C>(for: D.Type, content: (Binding<D>) -> C, defaultValue: () -> D)](/documentation/swiftui/windowgroup/init(for:content:defaultvalue:))
- [init(_:for:content:defaultValue:)](/documentation/swiftui/windowgroup/init(_:for:content:defaultvalue:))

#### Identifying a data-driven window group

- [init<D, C>(id: String, for: D.Type, content: (Binding<D?>) -> C)](/documentation/swiftui/windowgroup/init(id:for:content:))
- [init(_:id:for:content:)](/documentation/swiftui/windowgroup/init(_:id:for:content:))

#### Identifying a window group that has default data

- [init<D, C>(id: String, for: D.Type, content: (Binding<D>) -> C, defaultValue: () -> D)](/documentation/swiftui/windowgroup/init(id:for:content:defaultvalue:))
- [init(_:id:for:content:defaultValue:)](/documentation/swiftui/windowgroup/init(_:id:for:content:defaultvalue:))

#### Supporting types

- [PresentedWindowContent](/documentation/swiftui/presentedwindowcontent)

#### Initializers

- [init(_:id:makeContent:)](/documentation/swiftui/windowgroup/init(_:id:makecontent:))
- [init(_:makeContent:)](/documentation/swiftui/windowgroup/init(_:makecontent:))
- [init(id: String, makeContent: () -> Content)](/documentation/swiftui/windowgroup/init(id:makecontent:))
- [init(makeContent: () -> Content)](/documentation/swiftui/windowgroup/init(makecontent:))
- [Window](/documentation/swiftui/window)

#### Creating a window

- [init(_:id:content:)](/documentation/swiftui/window/init(_:id:content:))
- [UtilityWindow](/documentation/swiftui/utilitywindow)

#### Initializers

- [init(_:id:content:)](/documentation/swiftui/utilitywindow/init(_:id:content:))
- [WindowStyle](/documentation/swiftui/windowstyle)

#### Getting built-in window styles

- [static var automatic: DefaultWindowStyle](/documentation/swiftui/windowstyle/automatic)
- [static var hiddenTitleBar: HiddenTitleBarWindowStyle](/documentation/swiftui/windowstyle/hiddentitlebar)
- [static var plain: PlainWindowStyle](/documentation/swiftui/windowstyle/plain)
- [static var titleBar: TitleBarWindowStyle](/documentation/swiftui/windowstyle/titlebar)
- [static var volumetric: VolumetricWindowStyle](/documentation/swiftui/windowstyle/volumetric)

#### Supporting types

- [DefaultWindowStyle](/documentation/swiftui/defaultwindowstyle)

##### Creating the window style

- [init()](/documentation/swiftui/defaultwindowstyle/init())
- [HiddenTitleBarWindowStyle](/documentation/swiftui/hiddentitlebarwindowstyle)

##### Creating the window style

- [init()](/documentation/swiftui/hiddentitlebarwindowstyle/init())
- [PlainWindowStyle](/documentation/swiftui/plainwindowstyle)

##### Creating the window style

- [init()](/documentation/swiftui/plainwindowstyle/init())
- [TitleBarWindowStyle](/documentation/swiftui/titlebarwindowstyle)

##### Creating the window style

- [init()](/documentation/swiftui/titlebarwindowstyle/init())
- [VolumetricWindowStyle](/documentation/swiftui/volumetricwindowstyle)

##### Creating the window style

- [init()](/documentation/swiftui/volumetricwindowstyle/init())
- [func windowStyle<S>(S) -> some Scene](/documentation/swiftui/scene/windowstyle(_:))

### Styling the associated toolbar

- [func windowToolbarStyle<S>(S) -> some Scene](/documentation/swiftui/scene/windowtoolbarstyle(_:))
- [func windowToolbarLabelStyle(Binding<ToolbarLabelStyle>) -> some Scene](/documentation/swiftui/scene/windowtoolbarlabelstyle(_:))
- [func windowToolbarLabelStyle(fixed: ToolbarLabelStyle) -> some Scene](/documentation/swiftui/scene/windowtoolbarlabelstyle(fixed:))
- [WindowToolbarStyle](/documentation/swiftui/windowtoolbarstyle)

#### Getting built-in window toolbar styles

- [static var automatic: DefaultWindowToolbarStyle](/documentation/swiftui/windowtoolbarstyle/automatic)
- [static var expanded: ExpandedWindowToolbarStyle](/documentation/swiftui/windowtoolbarstyle/expanded)
- [static var unified: UnifiedWindowToolbarStyle](/documentation/swiftui/windowtoolbarstyle/unified)
- [static func unified(showsTitle: Bool) -> UnifiedWindowToolbarStyle](/documentation/swiftui/windowtoolbarstyle/unified(showstitle:))
- [static var unifiedCompact: UnifiedCompactWindowToolbarStyle](/documentation/swiftui/windowtoolbarstyle/unifiedcompact)
- [static func unifiedCompact(showsTitle: Bool) -> UnifiedCompactWindowToolbarStyle](/documentation/swiftui/windowtoolbarstyle/unifiedcompact(showstitle:))

#### Supporting types

- [DefaultWindowToolbarStyle](/documentation/swiftui/defaultwindowtoolbarstyle)

##### Creating the window toolbar style

- [init()](/documentation/swiftui/defaultwindowtoolbarstyle/init())
- [ExpandedWindowToolbarStyle](/documentation/swiftui/expandedwindowtoolbarstyle)

##### Creating the window toolbar style

- [init()](/documentation/swiftui/expandedwindowtoolbarstyle/init())
- [UnifiedWindowToolbarStyle](/documentation/swiftui/unifiedwindowtoolbarstyle)

##### Creating the window toolbar style

- [init()](/documentation/swiftui/unifiedwindowtoolbarstyle/init())
- [init(showsTitle: Bool)](/documentation/swiftui/unifiedwindowtoolbarstyle/init(showstitle:))
- [UnifiedCompactWindowToolbarStyle](/documentation/swiftui/unifiedcompactwindowtoolbarstyle)

##### Creating the window toolbar style

- [init()](/documentation/swiftui/unifiedcompactwindowtoolbarstyle/init())
- [init(showsTitle: Bool)](/documentation/swiftui/unifiedcompactwindowtoolbarstyle/init(showstitle:))

### Opening windows

- [Presenting windows and spaces](/documentation/visionos/presenting-windows-and-spaces)
- [var supportsMultipleWindows: Bool](/documentation/swiftui/environmentvalues/supportsmultiplewindows)
- [var openWindow: OpenWindowAction](/documentation/swiftui/environmentvalues/openwindow)
- [OpenWindowAction](/documentation/swiftui/openwindowaction)

#### Calling the action

- [func callAsFunction(id: String)](/documentation/swiftui/openwindowaction/callasfunction(id:))
- [func callAsFunction<D>(id: String, value: D)](/documentation/swiftui/openwindowaction/callasfunction(id:value:))
- [func callAsFunction<D>(value: D)](/documentation/swiftui/openwindowaction/callasfunction(value:))

#### Structures

- [OpenWindowAction.SharingBehavior](/documentation/swiftui/openwindowaction/sharingbehavior)

##### Type Properties

- [static let requested: OpenWindowAction.SharingBehavior](/documentation/swiftui/openwindowaction/sharingbehavior/requested)
- [static let required: OpenWindowAction.SharingBehavior](/documentation/swiftui/openwindowaction/sharingbehavior/required)

#### Instance Methods

- [func callAsFunction(id: String, sharingBehavior: OpenWindowAction.SharingBehavior) async throws](/documentation/swiftui/openwindowaction/callasfunction(id:sharingbehavior:))
- [func callAsFunction<D>(id: String, value: D, sharingBehavior: OpenWindowAction.SharingBehavior) async throws](/documentation/swiftui/openwindowaction/callasfunction(id:value:sharingbehavior:))
- [func callAsFunction<D>(value: D, sharingBehavior: OpenWindowAction.SharingBehavior) async throws](/documentation/swiftui/openwindowaction/callasfunction(value:sharingbehavior:))
- [PushWindowAction](/documentation/swiftui/pushwindowaction)

#### Instance Methods

- [func callAsFunction(id: String)](/documentation/swiftui/pushwindowaction/callasfunction(id:))
- [func callAsFunction<D>(id: String, value: D)](/documentation/swiftui/pushwindowaction/callasfunction(id:value:))
- [func callAsFunction<D>(value: D)](/documentation/swiftui/pushwindowaction/callasfunction(value:))

### Closing windows

- [var dismissWindow: DismissWindowAction](/documentation/swiftui/environmentvalues/dismisswindow)
- [DismissWindowAction](/documentation/swiftui/dismisswindowaction)

#### Calling the action

- [func callAsFunction()](/documentation/swiftui/dismisswindowaction/callasfunction())
- [func callAsFunction(id: String)](/documentation/swiftui/dismisswindowaction/callasfunction(id:))
- [func callAsFunction<D>(id: String, value: D)](/documentation/swiftui/dismisswindowaction/callasfunction(id:value:))
- [func callAsFunction<D>(value: D)](/documentation/swiftui/dismisswindowaction/callasfunction(value:))
- [var dismiss: DismissAction](/documentation/swiftui/environmentvalues/dismiss)
- [DismissAction](/documentation/swiftui/dismissaction)

#### Calling the action

- [func callAsFunction()](/documentation/swiftui/dismissaction/callasfunction())
- [DismissBehavior](/documentation/swiftui/dismissbehavior)

#### Getting behaviors

- [static let destructive: DismissBehavior](/documentation/swiftui/dismissbehavior/destructive)
- [static let interactive: DismissBehavior](/documentation/swiftui/dismissbehavior/interactive)

### Sizing a window

- [Positioning and sizing windows](/documentation/visionos/positioning-and-sizing-windows)
- [func defaultSize(_:)](/documentation/swiftui/scene/defaultsize(_:))
- [func defaultSize(width: CGFloat, height: CGFloat) -> some Scene](/documentation/swiftui/scene/defaultsize(width:height:))
- [func defaultSize(width: CGFloat, height: CGFloat, depth: CGFloat) -> some Scene](/documentation/swiftui/scene/defaultsize(width:height:depth:))
- [func defaultSize(Size3D, in: UnitLength) -> some Scene](/documentation/swiftui/scene/defaultsize(_:in:))
- [func defaultSize(width: CGFloat, height: CGFloat, depth: CGFloat, in: UnitLength) -> some Scene](/documentation/swiftui/scene/defaultsize(width:height:depth:in:))
- [func windowResizability(WindowResizability) -> some Scene](/documentation/swiftui/scene/windowresizability(_:))
- [WindowResizability](/documentation/swiftui/windowresizability)

#### Getting the resizability

- [static var automatic: WindowResizability](/documentation/swiftui/windowresizability/automatic)
- [static var contentMinSize: WindowResizability](/documentation/swiftui/windowresizability/contentminsize)
- [static var contentSize: WindowResizability](/documentation/swiftui/windowresizability/contentsize)
- [func windowIdealSize(WindowIdealSize) -> some Scene](/documentation/swiftui/scene/windowidealsize(_:))
- [WindowIdealSize](/documentation/swiftui/windowidealsize)

#### Type Properties

- [static let automatic: WindowIdealSize](/documentation/swiftui/windowidealsize/automatic)
- [static let fitToContent: WindowIdealSize](/documentation/swiftui/windowidealsize/fittocontent)
- [static let maximum: WindowIdealSize](/documentation/swiftui/windowidealsize/maximum)

### Positioning a window

- [func defaultPosition(UnitPoint) -> some Scene](/documentation/swiftui/scene/defaultposition(_:))
- [WindowLevel](/documentation/swiftui/windowlevel)

#### Type Properties

- [static var automatic: WindowLevel](/documentation/swiftui/windowlevel/automatic)
- [static var desktop: WindowLevel](/documentation/swiftui/windowlevel/desktop)
- [static var floating: WindowLevel](/documentation/swiftui/windowlevel/floating)
- [static var normal: WindowLevel](/documentation/swiftui/windowlevel/normal)
- [func windowLevel(WindowLevel) -> some Scene](/documentation/swiftui/scene/windowlevel(_:))
- [WindowLayoutRoot](/documentation/swiftui/windowlayoutroot)

#### Instance Methods

- [func sizeThatFits(ProposedViewSize) -> CGSize](/documentation/swiftui/windowlayoutroot/sizethatfits(_:))
- [WindowPlacement](/documentation/swiftui/windowplacement)

#### Structures

- [WindowPlacement.Position](/documentation/swiftui/windowplacement/position)

##### Type Properties

- [static var utilityPanel: WindowPlacement.Position](/documentation/swiftui/windowplacement/position/utilitypanel)

##### Type Methods

- [static func above(WindowProxy) -> WindowPlacement.Position](/documentation/swiftui/windowplacement/position/above(_:))
- [static func below(WindowProxy) -> WindowPlacement.Position](/documentation/swiftui/windowplacement/position/below(_:))
- [static func leading(WindowProxy) -> WindowPlacement.Position](/documentation/swiftui/windowplacement/position/leading(_:))
- [static func replacing(WindowProxy) -> WindowPlacement.Position](/documentation/swiftui/windowplacement/position/replacing(_:))
- [static func trailing(WindowProxy) -> WindowPlacement.Position](/documentation/swiftui/windowplacement/position/trailing(_:))

#### Initializers

- [init(WindowPlacement.Position?)](/documentation/swiftui/windowplacement/init(_:))
- [init(WindowPlacement.Position?, size3D: Size3D?)](/documentation/swiftui/windowplacement/init(_:size3d:))
- [init(_:size:)](/documentation/swiftui/windowplacement/init(_:size:))
- [init(UnitPoint, width: CGFloat?, height: CGFloat?)](/documentation/swiftui/windowplacement/init(_:width:height:))
- [init(WindowPlacement.Position?, width: CGFloat?, height: CGFloat?, depth: CGFloat?)](/documentation/swiftui/windowplacement/init(_:width:height:depth:))
- [init(x: CGFloat?, y: CGFloat?, width: CGFloat?, height: CGFloat?)](/documentation/swiftui/windowplacement/init(x:y:width:height:))
- [func defaultWindowPlacement((WindowLayoutRoot, WindowPlacementContext) -> WindowPlacement) -> some Scene](/documentation/swiftui/scene/defaultwindowplacement(_:))
- [func windowIdealPlacement((WindowLayoutRoot, WindowPlacementContext) -> WindowPlacement) -> some Scene](/documentation/swiftui/scene/windowidealplacement(_:))
- [WindowPlacementContext](/documentation/swiftui/windowplacementcontext)

#### Instance Properties

- [var defaultDisplay: DisplayProxy](/documentation/swiftui/windowplacementcontext/defaultdisplay)
- [var windows: [WindowProxy]](/documentation/swiftui/windowplacementcontext/windows)
- [WindowProxy](/documentation/swiftui/windowproxy)

#### Instance Properties

- [var id: String?](/documentation/swiftui/windowproxy/id)
- [var phase: ScenePhase](/documentation/swiftui/windowproxy/phase)
- [DisplayProxy](/documentation/swiftui/displayproxy)

#### Instance Properties

- [let bounds: CGRect](/documentation/swiftui/displayproxy/bounds)
- [let safeAreaInsets: EdgeInsets](/documentation/swiftui/displayproxy/safeareainsets)
- [let visibleRect: CGRect](/documentation/swiftui/displayproxy/visiblerect)

### Configuring window visibility

- [WindowVisibilityToggle](/documentation/swiftui/windowvisibilitytoggle)

#### Creating a window visibility toggle

- [init(windowID: String)](/documentation/swiftui/windowvisibilitytoggle/init(windowid:))

#### Supporting types

- [DefaultWindowVisibilityToggleLabel](/documentation/swiftui/defaultwindowvisibilitytogglelabel)
- [func defaultLaunchBehavior(SceneLaunchBehavior) -> some Scene](/documentation/swiftui/scene/defaultlaunchbehavior(_:))
- [func restorationBehavior(SceneRestorationBehavior) -> some Scene](/documentation/swiftui/scene/restorationbehavior(_:))
- [SceneLaunchBehavior](/documentation/swiftui/scenelaunchbehavior)

#### Type Properties

- [static let automatic: SceneLaunchBehavior](/documentation/swiftui/scenelaunchbehavior/automatic)
- [static let presented: SceneLaunchBehavior](/documentation/swiftui/scenelaunchbehavior/presented)
- [static let suppressed: SceneLaunchBehavior](/documentation/swiftui/scenelaunchbehavior/suppressed)
- [SceneRestorationBehavior](/documentation/swiftui/scenerestorationbehavior)

#### Type Properties

- [static let automatic: SceneRestorationBehavior](/documentation/swiftui/scenerestorationbehavior/automatic)
- [static let disabled: SceneRestorationBehavior](/documentation/swiftui/scenerestorationbehavior/disabled)
- [func persistentSystemOverlays(Visibility) -> some Scene](/documentation/swiftui/scene/persistentsystemoverlays(_:))
- [func windowToolbarFullScreenVisibility(WindowToolbarFullScreenVisibility) -> some View](/documentation/swiftui/view/windowtoolbarfullscreenvisibility(_:))
- [WindowToolbarFullScreenVisibility](/documentation/swiftui/windowtoolbarfullscreenvisibility)

#### Type Properties

- [static let automatic: WindowToolbarFullScreenVisibility](/documentation/swiftui/windowtoolbarfullscreenvisibility/automatic)
- [static let onHover: WindowToolbarFullScreenVisibility](/documentation/swiftui/windowtoolbarfullscreenvisibility/onhover)
- [static let visible: WindowToolbarFullScreenVisibility](/documentation/swiftui/windowtoolbarfullscreenvisibility/visible)

### Managing window behavior

- [WindowManagerRole](/documentation/swiftui/windowmanagerrole)

#### Type Properties

- [static let associated: WindowManagerRole](/documentation/swiftui/windowmanagerrole/associated)
- [static let automatic: WindowManagerRole](/documentation/swiftui/windowmanagerrole/automatic)
- [static let principal: WindowManagerRole](/documentation/swiftui/windowmanagerrole/principal)
- [func windowManagerRole(WindowManagerRole) -> some Scene](/documentation/swiftui/scene/windowmanagerrole(_:))
- [WindowInteractionBehavior](/documentation/swiftui/windowinteractionbehavior)

#### Type Properties

- [static let automatic: WindowInteractionBehavior](/documentation/swiftui/windowinteractionbehavior/automatic)
- [static let disabled: WindowInteractionBehavior](/documentation/swiftui/windowinteractionbehavior/disabled)
- [static let enabled: WindowInteractionBehavior](/documentation/swiftui/windowinteractionbehavior/enabled)
- [func windowDismissBehavior(WindowInteractionBehavior) -> some View](/documentation/swiftui/view/windowdismissbehavior(_:))
- [func windowFullScreenBehavior(WindowInteractionBehavior) -> some View](/documentation/swiftui/view/windowfullscreenbehavior(_:))
- [func windowMinimizeBehavior(WindowInteractionBehavior) -> some View](/documentation/swiftui/view/windowminimizebehavior(_:))
- [func windowResizeBehavior(WindowInteractionBehavior) -> some View](/documentation/swiftui/view/windowresizebehavior(_:))
- [func windowBackgroundDragBehavior(WindowInteractionBehavior) -> some Scene](/documentation/swiftui/scene/windowbackgrounddragbehavior(_:))

### Interacting with volumes

- [func onVolumeViewpointChange(updateStrategy: VolumeViewpointUpdateStrategy, initial: Bool, (Viewpoint3D, Viewpoint3D) -> Void) -> some View](/documentation/swiftui/view/onvolumeviewpointchange(updatestrategy:initial:_:))
- [func supportedVolumeViewpoints(SquareAzimuth.Set) -> some View](/documentation/swiftui/view/supportedvolumeviewpoints(_:))
- [VolumeViewpointUpdateStrategy](/documentation/swiftui/volumeviewpointupdatestrategy)

#### Type Properties

- [static let all: VolumeViewpointUpdateStrategy](/documentation/swiftui/volumeviewpointupdatestrategy/all)
- [static let supported: VolumeViewpointUpdateStrategy](/documentation/swiftui/volumeviewpointupdatestrategy/supported)
- [Viewpoint3D](/documentation/swiftui/viewpoint3d)

#### Instance Properties

- [var squareAzimuth: SquareAzimuth](/documentation/swiftui/viewpoint3d/squareazimuth)

#### Type Properties

- [static let standard: Viewpoint3D](/documentation/swiftui/viewpoint3d/standard)
- [SquareAzimuth](/documentation/swiftui/squareazimuth)

#### Structures

- [SquareAzimuth.Set](/documentation/swiftui/squareazimuth/set)

##### Initializers

- [init(SquareAzimuth)](/documentation/swiftui/squareazimuth/set/init(_:))

##### Instance Methods

- [func contains(SquareAzimuth) -> Bool](/documentation/swiftui/squareazimuth/set/contains(_:))

##### Type Properties

- [static let all: SquareAzimuth.Set](/documentation/swiftui/squareazimuth/set/all)
- [static let back: SquareAzimuth.Set](/documentation/swiftui/squareazimuth/set/back)
- [static let front: SquareAzimuth.Set](/documentation/swiftui/squareazimuth/set/front)
- [static let left: SquareAzimuth.Set](/documentation/swiftui/squareazimuth/set/left)
- [static let right: SquareAzimuth.Set](/documentation/swiftui/squareazimuth/set/right)

#### Enumeration Cases

- [case back](/documentation/swiftui/squareazimuth/back)
- [case front](/documentation/swiftui/squareazimuth/front)
- [case left](/documentation/swiftui/squareazimuth/left)
- [case right](/documentation/swiftui/squareazimuth/right)

#### Initializers

- [init(closestToAzimuth: Angle)](/documentation/swiftui/squareazimuth/init(closesttoazimuth:))

#### Instance Properties

- [var orientation: Rotation3D](/documentation/swiftui/squareazimuth/orientation)
- [WorldAlignmentBehavior](/documentation/swiftui/worldalignmentbehavior)

#### Type Properties

- [static var adaptive: WorldAlignmentBehavior](/documentation/swiftui/worldalignmentbehavior/adaptive)
- [static var automatic: WorldAlignmentBehavior](/documentation/swiftui/worldalignmentbehavior/automatic)
- [static var gravityAligned: WorldAlignmentBehavior](/documentation/swiftui/worldalignmentbehavior/gravityaligned)
- [func volumeWorldAlignment(WorldAlignmentBehavior) -> some Scene](/documentation/swiftui/scene/volumeworldalignment(_:))
- [WorldScalingBehavior](/documentation/swiftui/worldscalingbehavior)

#### Type Properties

- [static var automatic: WorldScalingBehavior](/documentation/swiftui/worldscalingbehavior/automatic)
- [static var dynamic: WorldScalingBehavior](/documentation/swiftui/worldscalingbehavior/dynamic)
- [func defaultWorldScaling(WorldScalingBehavior) -> some Scene](/documentation/swiftui/scene/defaultworldscaling(_:))
- [WorldScalingCompensation](/documentation/swiftui/worldscalingcompensation)

#### Type Properties

- [static let scaled: WorldScalingCompensation](/documentation/swiftui/worldscalingcompensation/scaled)
- [static let unscaled: WorldScalingCompensation](/documentation/swiftui/worldscalingcompensation/unscaled)
- [var worldTrackingLimitations: Set<WorldTrackingLimitation>](/documentation/swiftui/environmentvalues/worldtrackinglimitations)
- [WorldTrackingLimitation](/documentation/swiftui/worldtrackinglimitation)

#### Type Properties

- [static let orientation: WorldTrackingLimitation](/documentation/swiftui/worldtrackinglimitation/orientation)
- [static let translation: WorldTrackingLimitation](/documentation/swiftui/worldtrackinglimitation/translation)
- [SurfaceSnappingInfo](/documentation/swiftui/surfacesnappinginfo)

#### Instance Properties

- [var classification: SurfaceClassification?](/documentation/swiftui/surfacesnappinginfo/classification)
- [var isSnapped: Bool](/documentation/swiftui/surfacesnappinginfo/issnapped)

#### Type Properties

- [static var authorizationStatus: SurfaceSnappingInfo.AuthorizationStatus](/documentation/swiftui/surfacesnappinginfo/authorizationstatus-swift.type.property)

#### Enumerations

- [SurfaceSnappingInfo.AuthorizationStatus](/documentation/swiftui/surfacesnappinginfo/authorizationstatus-swift.enum)

##### Enumeration Cases

- [case authorized](/documentation/swiftui/surfacesnappinginfo/authorizationstatus-swift.enum/authorized)
- [case denied](/documentation/swiftui/surfacesnappinginfo/authorizationstatus-swift.enum/denied)
- [case notDetermined](/documentation/swiftui/surfacesnappinginfo/authorizationstatus-swift.enum/notdetermined)
- [case restricted](/documentation/swiftui/surfacesnappinginfo/authorizationstatus-swift.enum/restricted)

### Deprecated Types

- [ControlActiveState](/documentation/swiftui/controlactivestate)

#### Getting control active states

- [case key](/documentation/swiftui/controlactivestate/key)
- [case active](/documentation/swiftui/controlactivestate/active)
- [case inactive](/documentation/swiftui/controlactivestate/inactive)
- [Immersive spaces](/documentation/swiftui/immersive-spaces)

### Creating an immersive space

- [ImmersiveSpace](/documentation/swiftui/immersivespace)

#### Creating an immersive space

- [init(content:)](/documentation/swiftui/immersivespace/init(content:))

#### Identifying an immersive space

- [init(id:content:)](/documentation/swiftui/immersivespace/init(id:content:))

#### Creating a data-driven immersive space

- [init(for:content:)](/documentation/swiftui/immersivespace/init(for:content:))
- [init(id:for:content:)](/documentation/swiftui/immersivespace/init(id:for:content:))

#### Providing default data to an immersive space

- [init(for:content:defaultValue:)](/documentation/swiftui/immersivespace/init(for:content:defaultvalue:))
- [init(id:for:content:defaultValue:)](/documentation/swiftui/immersivespace/init(id:for:content:defaultvalue:))

#### Supporting types

- [ImmersiveSpaceViewContent](/documentation/swiftui/immersivespaceviewcontent)
- [ImmersiveSpaceContent](/documentation/swiftui/immersivespacecontent)

##### Creating immersive space content

- [var body: Self.Body](/documentation/swiftui/immersivespacecontent/body-swift.property)
- [Body](/documentation/swiftui/immersivespacecontent/body-swift.associatedtype)

#### Initializers

- [init<C>(for: Data.Type, makeContent: (Binding<Data?>) -> C)](/documentation/swiftui/immersivespace/init(for:makecontent:))
- [init<C>(for: Data.Type, makeContent: (Binding<Data>) -> C, defaultValue: () -> Data)](/documentation/swiftui/immersivespace/init(for:makecontent:defaultvalue:))
- [init<C>(id: String, for: Data.Type, makeContent: (Binding<Data?>) -> C)](/documentation/swiftui/immersivespace/init(id:for:makecontent:))
- [init<C>(id: String, for: Data.Type, makeContent: (Binding<Data>) -> C, defaultValue: () -> Data)](/documentation/swiftui/immersivespace/init(id:for:makecontent:defaultvalue:))
- [init(id:makeContent:)](/documentation/swiftui/immersivespace/init(id:makecontent:))
- [init<C>(makeContent: () -> C)](/documentation/swiftui/immersivespace/init(makecontent:))
- [ImmersiveSpaceContentBuilder](/documentation/swiftui/immersivespacecontentbuilder)

#### Building content

- [static func buildBlock<Content>(Content) -> Content](/documentation/swiftui/immersivespacecontentbuilder/buildblock(_:))
- [func immersionStyle(selection: Binding<any ImmersionStyle>, in: any ImmersionStyle...) -> some Scene](/documentation/swiftui/scene/immersionstyle(selection:in:))
- [ImmersionStyle](/documentation/swiftui/immersionstyle)

#### Getting built-in styles

- [static var automatic: AutomaticImmersionStyle](/documentation/swiftui/immersionstyle/automatic)
- [static var full: FullImmersionStyle](/documentation/swiftui/immersionstyle/full)
- [static var mixed: MixedImmersionStyle](/documentation/swiftui/immersionstyle/mixed)
- [static var progressive: ProgressiveImmersionStyle](/documentation/swiftui/immersionstyle/progressive)

#### Supporting types

- [AutomaticImmersionStyle](/documentation/swiftui/automaticimmersionstyle)

##### Creating the immersion style

- [init()](/documentation/swiftui/automaticimmersionstyle/init())
- [FullImmersionStyle](/documentation/swiftui/fullimmersionstyle)

##### Creating the immersion style

- [init()](/documentation/swiftui/fullimmersionstyle/init())
- [MixedImmersionStyle](/documentation/swiftui/mixedimmersionstyle)

##### Creating the immersion style

- [init()](/documentation/swiftui/mixedimmersionstyle/init())
- [ProgressiveImmersionStyle](/documentation/swiftui/progressiveimmersionstyle)

##### Creating the immersion style

- [init()](/documentation/swiftui/progressiveimmersionstyle/init())

##### Initializers

- [init(immersion:initialAmount:)](/documentation/swiftui/progressiveimmersionstyle/init(immersion:initialamount:))

##### Instance Properties

- [let aspectRatio: ProgressiveImmersionAspectRatio](/documentation/swiftui/progressiveimmersionstyle/aspectratio)
- [let initialImmersionAmount: Double?](/documentation/swiftui/progressiveimmersionstyle/initialimmersionamount)
- [let maximumImmersionAmount: Double?](/documentation/swiftui/progressiveimmersionstyle/maximumimmersionamount)
- [let minimumImmersionAmount: Double?](/documentation/swiftui/progressiveimmersionstyle/minimumimmersionamount)

#### Type Methods

- [static progressive(_:initialAmount:)](/documentation/swiftui/immersionstyle/progressive(_:initialamount:))
- [static progressive(_:initialAmount:aspectRatio:)](/documentation/swiftui/immersionstyle/progressive(_:initialamount:aspectratio:))
- [static func progressive(aspectRatio: ProgressiveImmersionAspectRatio) -> ProgressiveImmersionStyle](/documentation/swiftui/immersionstyle/progressive(aspectratio:))
- [var immersiveSpaceDisplacement: Pose3D](/documentation/swiftui/environmentvalues/immersivespacedisplacement)
- [ImmersiveEnvironmentBehavior](/documentation/swiftui/immersiveenvironmentbehavior)

#### Type Properties

- [static var automatic: ImmersiveEnvironmentBehavior](/documentation/swiftui/immersiveenvironmentbehavior/automatic)
- [static var coexist: ImmersiveEnvironmentBehavior](/documentation/swiftui/immersiveenvironmentbehavior/coexist)
- [static var replace: ImmersiveEnvironmentBehavior](/documentation/swiftui/immersiveenvironmentbehavior/replace)
- [ProgressiveImmersionAspectRatio](/documentation/swiftui/progressiveimmersionaspectratio)

#### Type Properties

- [static var automatic: ProgressiveImmersionAspectRatio](/documentation/swiftui/progressiveimmersionaspectratio/automatic)
- [static var landscape: ProgressiveImmersionAspectRatio](/documentation/swiftui/progressiveimmersionaspectratio/landscape)
- [static var portrait: ProgressiveImmersionAspectRatio](/documentation/swiftui/progressiveimmersionaspectratio/portrait)

### Opening an immersive space

- [var openImmersiveSpace: OpenImmersiveSpaceAction](/documentation/swiftui/environmentvalues/openimmersivespace)
- [OpenImmersiveSpaceAction](/documentation/swiftui/openimmersivespaceaction)

#### Calling the action

- [func callAsFunction(id: String) async -> OpenImmersiveSpaceAction.Result](/documentation/swiftui/openimmersivespaceaction/callasfunction(id:))
- [func callAsFunction<D>(id: String, value: D) async -> OpenImmersiveSpaceAction.Result](/documentation/swiftui/openimmersivespaceaction/callasfunction(id:value:))
- [func callAsFunction<D>(value: D) async -> OpenImmersiveSpaceAction.Result](/documentation/swiftui/openimmersivespaceaction/callasfunction(value:))

#### Getting the result

- [OpenImmersiveSpaceAction.Result](/documentation/swiftui/openimmersivespaceaction/result)

##### Getting the result

- [case opened](/documentation/swiftui/openimmersivespaceaction/result/opened)
- [case userCancelled](/documentation/swiftui/openimmersivespaceaction/result/usercancelled)
- [case error](/documentation/swiftui/openimmersivespaceaction/result/error)

### Closing the immersive space

- [var dismissImmersiveSpace: DismissImmersiveSpaceAction](/documentation/swiftui/environmentvalues/dismissimmersivespace)
- [DismissImmersiveSpaceAction](/documentation/swiftui/dismissimmersivespaceaction)

#### Calling the action

- [func callAsFunction() async](/documentation/swiftui/dismissimmersivespaceaction/callasfunction())

### Hiding upper limbs during immersion

- [func upperLimbVisibility(Visibility) -> some Scene](/documentation/swiftui/scene/upperlimbvisibility(_:))
- [func upperLimbVisibility(Visibility) -> some View](/documentation/swiftui/view/upperlimbvisibility(_:))

### Adjusting content brightness

- [func immersiveContentBrightness(ImmersiveContentBrightness) -> some Scene](/documentation/swiftui/scene/immersivecontentbrightness(_:))
- [ImmersiveContentBrightness](/documentation/swiftui/immersivecontentbrightness)

#### Getting brightness levels

- [static let automatic: ImmersiveContentBrightness](/documentation/swiftui/immersivecontentbrightness/automatic)
- [static let dark: ImmersiveContentBrightness](/documentation/swiftui/immersivecontentbrightness/dark)
- [static let dim: ImmersiveContentBrightness](/documentation/swiftui/immersivecontentbrightness/dim)
- [static let bright: ImmersiveContentBrightness](/documentation/swiftui/immersivecontentbrightness/bright)
- [static func custom(Double) -> ImmersiveContentBrightness](/documentation/swiftui/immersivecontentbrightness/custom(_:))

### Responding to immersion changes

- [func onImmersionChange(initial: Bool, (ImmersionChangeContext, ImmersionChangeContext) -> Void) -> some View](/documentation/swiftui/view/onimmersionchange(initial:_:))
- [ImmersionChangeContext](/documentation/swiftui/immersionchangecontext)

#### Instance Properties

- [let amount: Double?](/documentation/swiftui/immersionchangecontext/amount)

### Adding menu items to an immersive space

- [func immersiveEnvironmentPicker<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/immersiveenvironmentpicker(content:))

### Handling remote immersive spaces

- [RemoteImmersiveSpace](/documentation/swiftui/remoteimmersivespace)

#### Initializers

- [init<C>(content: () -> C)](/documentation/swiftui/remoteimmersivespace/init(content:))
- [init<C>(for: Data.Type, content: (Binding<Data?>) -> C)](/documentation/swiftui/remoteimmersivespace/init(for:content:))
- [init<C>(for: Data.Type, content: (Binding<Data>) -> C, defaultValue: () -> Data)](/documentation/swiftui/remoteimmersivespace/init(for:content:defaultvalue:))
- [init<C>(id: String, content: () -> C)](/documentation/swiftui/remoteimmersivespace/init(id:content:))
- [init<C>(id: String, for: Data.Type, content: (Binding<Data?>) -> C)](/documentation/swiftui/remoteimmersivespace/init(id:for:content:))
- [init<C>(id: String, for: Data.Type, content: (Binding<Data>) -> C, defaultValue: () -> Data)](/documentation/swiftui/remoteimmersivespace/init(id:for:content:defaultvalue:))
- [RemoteDeviceIdentifier](/documentation/swiftui/remotedeviceidentifier)

#### Instance Properties

- [var cDevice: ar_device_t](/documentation/swiftui/remotedeviceidentifier/cdevice)
- [Documents](/documentation/swiftui/documents)

### Creating a document

- [Building a document-based app with SwiftUI](/documentation/swiftui/building-a-document-based-app-with-swiftui)
- [Building a document-based app using SwiftData](/documentation/swiftui/building-a-document-based-app-using-swiftdata)
- [DocumentGroup](/documentation/swiftui/documentgroup)

#### Creating a document group

- [init(newDocument:editor:)](/documentation/swiftui/documentgroup/init(newdocument:editor:))
- [init(viewing:viewer:)](/documentation/swiftui/documentgroup/init(viewing:viewer:))

#### Editing a document backed by a persistent store

- [init(editing:contentType:editor:prepareDocument:)](/documentation/swiftui/documentgroup/init(editing:contenttype:editor:preparedocument:))
- [init(editing: UTType, migrationPlan: any SchemaMigrationPlan.Type, editor: () -> Content, prepareDocument: (ModelContext) -> Void)](/documentation/swiftui/documentgroup/init(editing:migrationplan:editor:preparedocument:))

#### Viewing a document backed by a persistent store

- [init(viewing:contentType:viewer:)](/documentation/swiftui/documentgroup/init(viewing:contenttype:viewer:))
- [init(viewing: UTType, migrationPlan: any SchemaMigrationPlan.Type, viewer: () -> Content)](/documentation/swiftui/documentgroup/init(viewing:migrationplan:viewer:))

### Storing document data in a structure instance

- [FileDocument](/documentation/swiftui/filedocument)

#### Reading a document

- [init(configuration: Self.ReadConfiguration) throws](/documentation/swiftui/filedocument/init(configuration:))
- [static var readableContentTypes: [UTType]](/documentation/swiftui/filedocument/readablecontenttypes)
- [FileDocument.ReadConfiguration](/documentation/swiftui/filedocument/readconfiguration)

#### Writing a document

- [func fileWrapper(configuration: Self.WriteConfiguration) throws -> FileWrapper](/documentation/swiftui/filedocument/filewrapper(configuration:))
- [static var writableContentTypes: [UTType]](/documentation/swiftui/filedocument/writablecontenttypes)
- [FileDocument.WriteConfiguration](/documentation/swiftui/filedocument/writeconfiguration)
- [FileDocumentConfiguration](/documentation/swiftui/filedocumentconfiguration)

#### Getting and setting the document

- [var document: Document](/documentation/swiftui/filedocumentconfiguration/document)
- [var $document: Binding<Document>](/documentation/swiftui/filedocumentconfiguration/$document)

#### Getting document properties

- [var fileURL: URL?](/documentation/swiftui/filedocumentconfiguration/fileurl)
- [var isEditable: Bool](/documentation/swiftui/filedocumentconfiguration/iseditable)

### Storing document data in a class instance

- [ReferenceFileDocument](/documentation/swiftui/referencefiledocument)

#### Reading a document

- [init(configuration: Self.ReadConfiguration) throws](/documentation/swiftui/referencefiledocument/init(configuration:))
- [static var readableContentTypes: [UTType]](/documentation/swiftui/referencefiledocument/readablecontenttypes)
- [ReferenceFileDocument.ReadConfiguration](/documentation/swiftui/referencefiledocument/readconfiguration)

#### Getting a snapshot

- [func snapshot(contentType: UTType) throws -> Self.Snapshot](/documentation/swiftui/referencefiledocument/snapshot(contenttype:))
- [Snapshot](/documentation/swiftui/referencefiledocument/snapshot)

#### Writing a document

- [func fileWrapper(snapshot: Self.Snapshot, configuration: Self.WriteConfiguration) throws -> FileWrapper](/documentation/swiftui/referencefiledocument/filewrapper(snapshot:configuration:))
- [static var writableContentTypes: [UTType]](/documentation/swiftui/referencefiledocument/writablecontenttypes)
- [ReferenceFileDocument.WriteConfiguration](/documentation/swiftui/referencefiledocument/writeconfiguration)
- [ReferenceFileDocumentConfiguration](/documentation/swiftui/referencefiledocumentconfiguration)

#### Getting and setting the document

- [var document: Document](/documentation/swiftui/referencefiledocumentconfiguration/document)
- [var $document: ObservedObject<Document>.Wrapper](/documentation/swiftui/referencefiledocumentconfiguration/$document)

#### Getting document properties

- [var fileURL: URL?](/documentation/swiftui/referencefiledocumentconfiguration/fileurl)
- [var isEditable: Bool](/documentation/swiftui/referencefiledocumentconfiguration/iseditable)
- [var undoManager: UndoManager?](/documentation/swiftui/environmentvalues/undomanager)

### Accessing document configuration

- [var documentConfiguration: DocumentConfiguration?](/documentation/swiftui/environmentvalues/documentconfiguration)
- [DocumentConfiguration](/documentation/swiftui/documentconfiguration)

#### Getting configuration values

- [var fileURL: URL?](/documentation/swiftui/documentconfiguration/fileurl)
- [var isEditable: Bool](/documentation/swiftui/documentconfiguration/iseditable)

### Reading and writing documents

- [FileDocumentReadConfiguration](/documentation/swiftui/filedocumentreadconfiguration)

#### Reading the content

- [let contentType: UTType](/documentation/swiftui/filedocumentreadconfiguration/contenttype)
- [let file: FileWrapper](/documentation/swiftui/filedocumentreadconfiguration/file)
- [FileDocumentWriteConfiguration](/documentation/swiftui/filedocumentwriteconfiguration)

#### Writing the content

- [let contentType: UTType](/documentation/swiftui/filedocumentwriteconfiguration/contenttype)
- [let existingFile: FileWrapper?](/documentation/swiftui/filedocumentwriteconfiguration/existingfile)

### Opening a document programmatically

- [var newDocument: NewDocumentAction](/documentation/swiftui/environmentvalues/newdocument)
- [NewDocumentAction](/documentation/swiftui/newdocumentaction)

#### Calling the action

- [func callAsFunction(_:)](/documentation/swiftui/newdocumentaction/callasfunction(_:))
- [func callAsFunction(contentType: UTType)](/documentation/swiftui/newdocumentaction/callasfunction(contenttype:))
- [func callAsFunction(contentType: UTType, prepareDocument: (ModelContext) -> Void)](/documentation/swiftui/newdocumentaction/callasfunction(contenttype:preparedocument:))
- [var openDocument: OpenDocumentAction](/documentation/swiftui/environmentvalues/opendocument)
- [OpenDocumentAction](/documentation/swiftui/opendocumentaction)

#### Calling the action

- [func callAsFunction(at: URL) async throws](/documentation/swiftui/opendocumentaction/callasfunction(at:))

### Configuring the document launch experience

- [DocumentGroupLaunchScene](/documentation/swiftui/documentgrouplaunchscene)

#### Initializers

- [init(_:_:background:)](/documentation/swiftui/documentgrouplaunchscene/init(_:_:background:))
- [init(_:_:background:backgroundAccessoryView:)](/documentation/swiftui/documentgrouplaunchscene/init(_:_:background:backgroundaccessoryview:))
- [init(_:_:background:backgroundAccessoryView:overlayAccessoryView:)](/documentation/swiftui/documentgrouplaunchscene/init(_:_:background:backgroundaccessoryview:overlayaccessoryview:))
- [init(_:_:background:overlayAccessoryView:)](/documentation/swiftui/documentgrouplaunchscene/init(_:_:background:overlayaccessoryview:))
- [init(_:backgroundStyle:_:)](/documentation/swiftui/documentgrouplaunchscene/init(_:backgroundstyle:_:))
- [init(_:backgroundStyle:_:backgroundAccessoryView:)](/documentation/swiftui/documentgrouplaunchscene/init(_:backgroundstyle:_:backgroundaccessoryview:))
- [init(_:backgroundStyle:_:backgroundAccessoryView:overlayAccessoryView:)](/documentation/swiftui/documentgrouplaunchscene/init(_:backgroundstyle:_:backgroundaccessoryview:overlayaccessoryview:))
- [init(_:backgroundStyle:_:overlayAccessoryView:)](/documentation/swiftui/documentgrouplaunchscene/init(_:backgroundstyle:_:overlayaccessoryview:))
- [DocumentLaunchView](/documentation/swiftui/documentlaunchview)

#### Initializers

- [init(_:for:_:onDocumentOpen:)](/documentation/swiftui/documentlaunchview/init(_:for:_:ondocumentopen:))
- [init(_:for:_:onDocumentOpen:background:)](/documentation/swiftui/documentlaunchview/init(_:for:_:ondocumentopen:background:))
- [init(_:for:_:onDocumentOpen:background:backgroundAccessoryView:)](/documentation/swiftui/documentlaunchview/init(_:for:_:ondocumentopen:background:backgroundaccessoryview:))
- [init(_:for:_:onDocumentOpen:background:backgroundAccessoryView:overlayAccessoryView:)](/documentation/swiftui/documentlaunchview/init(_:for:_:ondocumentopen:background:backgroundaccessoryview:overlayaccessoryview:))
- [init(_:for:_:onDocumentOpen:background:overlayAccessoryView:)](/documentation/swiftui/documentlaunchview/init(_:for:_:ondocumentopen:background:overlayaccessoryview:))
- [init(_:for:_:onDocumentOpen:backgroundAccessoryView:)](/documentation/swiftui/documentlaunchview/init(_:for:_:ondocumentopen:backgroundaccessoryview:))
- [init(_:for:_:onDocumentOpen:backgroundAccessoryView:overlayAccessoryView:)](/documentation/swiftui/documentlaunchview/init(_:for:_:ondocumentopen:backgroundaccessoryview:overlayaccessoryview:))
- [init(_:for:_:onDocumentOpen:overlayAccessoryView:)](/documentation/swiftui/documentlaunchview/init(_:for:_:ondocumentopen:overlayaccessoryview:))
- [init(_:for:backgroundStyle:_:onDocumentOpen:)](/documentation/swiftui/documentlaunchview/init(_:for:backgroundstyle:_:ondocumentopen:))
- [init(_:for:backgroundStyle:_:onDocumentOpen:backgroundAccessoryView:)](/documentation/swiftui/documentlaunchview/init(_:for:backgroundstyle:_:ondocumentopen:backgroundaccessoryview:))
- [init(_:for:backgroundStyle:_:onDocumentOpen:backgroundAccessoryView:overlayAccessoryView:)](/documentation/swiftui/documentlaunchview/init(_:for:backgroundstyle:_:ondocumentopen:backgroundaccessoryview:overlayaccessoryview:))
- [init(_:for:backgroundStyle:_:onDocumentOpen:overlayAccessoryView:)](/documentation/swiftui/documentlaunchview/init(_:for:backgroundstyle:_:ondocumentopen:overlayaccessoryview:))

#### Instance Properties

- [var body: some View](/documentation/swiftui/documentlaunchview/body)
- [DocumentLaunchGeometryProxy](/documentation/swiftui/documentlaunchgeometryproxy)

#### Instance Properties

- [var frame: CGRect](/documentation/swiftui/documentlaunchgeometryproxy/frame)
- [var titleViewFrame: CGRect](/documentation/swiftui/documentlaunchgeometryproxy/titleviewframe)
- [DefaultDocumentGroupLaunchActions](/documentation/swiftui/defaultdocumentgrouplaunchactions)

#### Initializers

- [init()](/documentation/swiftui/defaultdocumentgrouplaunchactions/init())
- [NewDocumentButton](/documentation/swiftui/newdocumentbutton)

#### Initializers

- [init(_:contentType:)](/documentation/swiftui/newdocumentbutton/init(_:contenttype:))
- [init(_:contentType:prepareDocumentURL:)](/documentation/swiftui/newdocumentbutton/init(_:contenttype:preparedocumenturl:))
- [init(_:for:contentType:prepareDocument:)](/documentation/swiftui/newdocumentbutton/init(_:for:contenttype:preparedocument:))
- [DocumentBaseBox](/documentation/swiftui/documentbasebox)

#### Associated Types

- [Document](/documentation/swiftui/documentbasebox/document)

#### Instance Properties

- [var base: Self.Document?](/documentation/swiftui/documentbasebox/base)

### Renaming a document

- [RenameButton](/documentation/swiftui/renamebutton)

#### Creating an rename button

- [init()](/documentation/swiftui/renamebutton/init())
- [func renameAction(_:)](/documentation/swiftui/view/renameaction(_:))
- [var rename: RenameAction?](/documentation/swiftui/environmentvalues/rename)
- [RenameAction](/documentation/swiftui/renameaction)

#### Calling the action

- [func callAsFunction()](/documentation/swiftui/renameaction/callasfunction())
- [Navigation](/documentation/swiftui/navigation)

### Essentials

- [Understanding the navigation stack](/documentation/swiftui/understanding-the-navigation-stack)

### Presenting views in columns

- [Bringing robust navigation structure to your SwiftUI app](/documentation/swiftui/bringing-robust-navigation-structure-to-your-swiftui-app)
- [Migrating to new navigation types](/documentation/swiftui/migrating-to-new-navigation-types)
- [NavigationSplitView](/documentation/swiftui/navigationsplitview)

#### Creating a navigation split view

- [init(sidebar: () -> Sidebar, detail: () -> Detail)](/documentation/swiftui/navigationsplitview/init(sidebar:detail:))
- [init(sidebar: () -> Sidebar, content: () -> Content, detail: () -> Detail)](/documentation/swiftui/navigationsplitview/init(sidebar:content:detail:))

#### Hiding columns in a navigation split view

- [init(columnVisibility: Binding<NavigationSplitViewVisibility>, sidebar: () -> Sidebar, detail: () -> Detail)](/documentation/swiftui/navigationsplitview/init(columnvisibility:sidebar:detail:))
- [init(columnVisibility: Binding<NavigationSplitViewVisibility>, sidebar: () -> Sidebar, content: () -> Content, detail: () -> Detail)](/documentation/swiftui/navigationsplitview/init(columnvisibility:sidebar:content:detail:))

#### Specifying a preferred compact column

- [init(preferredCompactColumn: Binding<NavigationSplitViewColumn>, sidebar: () -> Sidebar, detail: () -> Detail)](/documentation/swiftui/navigationsplitview/init(preferredcompactcolumn:sidebar:detail:))
- [init(preferredCompactColumn: Binding<NavigationSplitViewColumn>, sidebar: () -> Sidebar, content: () -> Content, detail: () -> Detail)](/documentation/swiftui/navigationsplitview/init(preferredcompactcolumn:sidebar:content:detail:))

#### Specifying a preferred compact column and column visibility

- [init(columnVisibility: Binding<NavigationSplitViewVisibility>, preferredCompactColumn: Binding<NavigationSplitViewColumn>, sidebar: () -> Sidebar, detail: () -> Detail)](/documentation/swiftui/navigationsplitview/init(columnvisibility:preferredcompactcolumn:sidebar:detail:))
- [init(columnVisibility: Binding<NavigationSplitViewVisibility>, preferredCompactColumn: Binding<NavigationSplitViewColumn>, sidebar: () -> Sidebar, content: () -> Content, detail: () -> Detail)](/documentation/swiftui/navigationsplitview/init(columnvisibility:preferredcompactcolumn:sidebar:content:detail:))
- [func navigationSplitViewStyle<S>(S) -> some View](/documentation/swiftui/view/navigationsplitviewstyle(_:))
- [func navigationSplitViewColumnWidth(CGFloat) -> some View](/documentation/swiftui/view/navigationsplitviewcolumnwidth(_:))
- [func navigationSplitViewColumnWidth(min: CGFloat?, ideal: CGFloat, max: CGFloat?) -> some View](/documentation/swiftui/view/navigationsplitviewcolumnwidth(min:ideal:max:))
- [NavigationSplitViewVisibility](/documentation/swiftui/navigationsplitviewvisibility)

#### Getting visibilities

- [static var automatic: NavigationSplitViewVisibility](/documentation/swiftui/navigationsplitviewvisibility/automatic)
- [static var all: NavigationSplitViewVisibility](/documentation/swiftui/navigationsplitviewvisibility/all)
- [static var doubleColumn: NavigationSplitViewVisibility](/documentation/swiftui/navigationsplitviewvisibility/doublecolumn)
- [static var detailOnly: NavigationSplitViewVisibility](/documentation/swiftui/navigationsplitviewvisibility/detailonly)
- [NavigationLink](/documentation/swiftui/navigationlink)

#### Presenting a destination view

- [init(_:destination:)](/documentation/swiftui/navigationlink/init(_:destination:))
- [init(destination:label:)](/documentation/swiftui/navigationlink/init(destination:label:))

#### Presenting a value

- [init(_:value:)](/documentation/swiftui/navigationlink/init(_:value:))
- [init(value:label:)](/documentation/swiftui/navigationlink/init(value:label:))

#### Configuring the link

- [func isDetailLink(Bool) -> some View](/documentation/swiftui/navigationlink/isdetaillink(_:))

#### Deprecated symbols

- [Deprecated symbols](/documentation/swiftui/navigationlink-deprecated)

##### Creating links with view builders

- [init(_:isActive:destination:)](/documentation/swiftui/navigationlink/init(_:isactive:destination:))
- [init(isActive: Binding<Bool>, destination: () -> Destination, label: () -> Label)](/documentation/swiftui/navigationlink/init(isactive:destination:label:))
- [init(_:tag:selection:destination:)](/documentation/swiftui/navigationlink/init(_:tag:selection:destination:))
- [init<V>(tag: V, selection: Binding<V?>, destination: () -> Destination, label: () -> Label)](/documentation/swiftui/navigationlink/init(tag:selection:destination:label:))

##### Creating links for WatchKit

- [init(destinationName: String, isActive: Binding<Bool>, label: () -> Label)](/documentation/swiftui/navigationlink/init(destinationname:isactive:label:))
- [init<V>(destinationName: String, tag: V, selection: Binding<V?>, label: () -> Label)](/documentation/swiftui/navigationlink/init(destinationname:tag:selection:label:))
- [init(destinationName: String, label: () -> Label)](/documentation/swiftui/navigationlink/init(destinationname:label:))

##### Creating links with view arguments

- [init(_:destination:isActive:)](/documentation/swiftui/navigationlink/init(_:destination:isactive:))
- [init(destination: Destination, isActive: Binding<Bool>, label: () -> Label)](/documentation/swiftui/navigationlink/init(destination:isactive:label:))
- [init(_:destination:tag:selection:)](/documentation/swiftui/navigationlink/init(_:destination:tag:selection:))
- [init<V>(destination: Destination, tag: V, selection: Binding<V?>, label: () -> Label)](/documentation/swiftui/navigationlink/init(destination:tag:selection:label:))

### Stacking views in one column

- [NavigationStack](/documentation/swiftui/navigationstack)

#### Creating a navigation stack

- [init(root: () -> Root)](/documentation/swiftui/navigationstack/init(root:))

#### Creating a navigation stack with a path

- [init(path:root:)](/documentation/swiftui/navigationstack/init(path:root:))
- [NavigationPath](/documentation/swiftui/navigationpath)

#### Creating a navigation path

- [init()](/documentation/swiftui/navigationpath/init())
- [init(_:)](/documentation/swiftui/navigationpath/init(_:))

#### Managing path contents

- [var isEmpty: Bool](/documentation/swiftui/navigationpath/isempty)
- [var count: Int](/documentation/swiftui/navigationpath/count)
- [func append(_:)](/documentation/swiftui/navigationpath/append(_:))
- [func removeLast(Int)](/documentation/swiftui/navigationpath/removelast(_:))

#### Encoding a path

- [var codable: NavigationPath.CodableRepresentation?](/documentation/swiftui/navigationpath/codable)
- [NavigationPath.CodableRepresentation](/documentation/swiftui/navigationpath/codablerepresentation)
- [func navigationDestination<D, C>(for: D.Type, destination: (D) -> C) -> some View](/documentation/swiftui/view/navigationdestination(for:destination:))
- [func navigationDestination<V>(isPresented: Binding<Bool>, destination: () -> V) -> some View](/documentation/swiftui/view/navigationdestination(ispresented:destination:))
- [func navigationDestination<D, C>(item: Binding<Optional<D>>, destination: (D) -> C) -> some View](/documentation/swiftui/view/navigationdestination(item:destination:))

### Managing column collapse

- [NavigationSplitViewColumn](/documentation/swiftui/navigationsplitviewcolumn)

#### Getting a column

- [static var sidebar: NavigationSplitViewColumn](/documentation/swiftui/navigationsplitviewcolumn/sidebar)
- [static var content: NavigationSplitViewColumn](/documentation/swiftui/navigationsplitviewcolumn/content)
- [static var detail: NavigationSplitViewColumn](/documentation/swiftui/navigationsplitviewcolumn/detail)

### Setting titles for navigation content

- [func navigationTitle(_:)](/documentation/swiftui/view/navigationtitle(_:))
- [func navigationSubtitle(_:)](/documentation/swiftui/view/navigationsubtitle(_:))
- [func navigationDocument(_:)](/documentation/swiftui/view/navigationdocument(_:))
- [func navigationDocument(_:preview:)](/documentation/swiftui/view/navigationdocument(_:preview:))

### Configuring the navigation bar

- [func navigationBarBackButtonHidden(Bool) -> some View](/documentation/swiftui/view/navigationbarbackbuttonhidden(_:))
- [func navigationBarTitleDisplayMode(NavigationBarItem.TitleDisplayMode) -> some View](/documentation/swiftui/view/navigationbartitledisplaymode(_:))
- [NavigationBarItem](/documentation/swiftui/navigationbaritem)

#### Setting a title display mode

- [NavigationBarItem.TitleDisplayMode](/documentation/swiftui/navigationbaritem/titledisplaymode)

##### Getting title display modes

- [case automatic](/documentation/swiftui/navigationbaritem/titledisplaymode/automatic)
- [case inline](/documentation/swiftui/navigationbaritem/titledisplaymode/inline)
- [case large](/documentation/swiftui/navigationbaritem/titledisplaymode/large)

### Configuring the sidebar

- [var sidebarRowSize: SidebarRowSize](/documentation/swiftui/environmentvalues/sidebarrowsize)
- [SidebarRowSize](/documentation/swiftui/sidebarrowsize)

#### Getting row sizes

- [case small](/documentation/swiftui/sidebarrowsize/small)
- [case medium](/documentation/swiftui/sidebarrowsize/medium)
- [case large](/documentation/swiftui/sidebarrowsize/large)

### Presenting views in tabs

- [Enhancing your app’s content with tab navigation](/documentation/swiftui/enhancing-your-app-content-with-tab-navigation)
- [TabView](/documentation/swiftui/tabview)

#### Creating a tab view

- [init(content:)](/documentation/swiftui/tabview/init(content:))
- [init(selection:content:)](/documentation/swiftui/tabview/init(selection:content:))

#### Configuring search activation

- [TabSearchActivation](/documentation/swiftui/tabsearchactivation)

##### Type Properties

- [static var automatic: TabSearchActivation](/documentation/swiftui/tabsearchactivation/automatic)
- [static var searchTabSelection: TabSearchActivation](/documentation/swiftui/tabsearchactivation/searchtabselection)
- [Tab](/documentation/swiftui/tab)

#### Creating a tab

- [init(content: () -> Content)](/documentation/swiftui/tab/init(content:))
- [init(value:content:)](/documentation/swiftui/tab/init(value:content:))
- [init(role: TabRole?, content: () -> Content)](/documentation/swiftui/tab/init(role:content:))
- [init(value:role:content:)](/documentation/swiftui/tab/init(value:role:content:))

#### Creating a tab with label

- [init(content: () -> Content, label: () -> Label)](/documentation/swiftui/tab/init(content:label:))
- [init(value:content:label:)](/documentation/swiftui/tab/init(value:content:label:))
- [init(role: TabRole?, content: () -> Content, label: () -> Label)](/documentation/swiftui/tab/init(role:content:label:))
- [init(value:role:content:label:)](/documentation/swiftui/tab/init(value:role:content:label:))

#### Creating a tab with system symbol

- [init(_:systemImage:content:)](/documentation/swiftui/tab/init(_:systemimage:content:))
- [init(_:systemImage:value:content:)](/documentation/swiftui/tab/init(_:systemimage:value:content:))
- [init(_:systemImage:role:content:)](/documentation/swiftui/tab/init(_:systemimage:role:content:))
- [init(_:systemImage:value:role:content:)](/documentation/swiftui/tab/init(_:systemimage:value:role:content:))

#### Creating a tab with image

- [init(_:image:content:)](/documentation/swiftui/tab/init(_:image:content:))
- [init(_:image:value:content:)](/documentation/swiftui/tab/init(_:image:value:content:))
- [init(_:image:role:content:)](/documentation/swiftui/tab/init(_:image:role:content:))
- [init(_:image:value:role:content:)](/documentation/swiftui/tab/init(_:image:value:role:content:))

#### Supporting types

- [DefaultTabLabel](/documentation/swiftui/defaulttablabel)
- [TabRole](/documentation/swiftui/tabrole)

#### Type Properties

- [static var search: TabRole](/documentation/swiftui/tabrole/search)
- [TabSection](/documentation/swiftui/tabsection)

#### Creating a tab section

- [init(content:)](/documentation/swiftui/tabsection/init(content:))
- [init(_:content:)](/documentation/swiftui/tabsection/init(_:content:))
- [init(content:header:)](/documentation/swiftui/tabsection/init(content:header:))

#### Supporting types

- [DefaultTabLabel](/documentation/swiftui/defaulttablabel)
- [func tabViewStyle<S>(S) -> some View](/documentation/swiftui/view/tabviewstyle(_:))

### Configuring a tab bar

- [func defaultAdaptableTabBarPlacement(AdaptableTabBarPlacement) -> some View](/documentation/swiftui/view/defaultadaptabletabbarplacement(_:))
- [func tabViewSidebarHeader<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/tabviewsidebarheader(content:))
- [func tabViewSidebarFooter<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/tabviewsidebarfooter(content:))
- [func tabViewSidebarBottomBar<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/tabviewsidebarbottombar(content:))
- [AdaptableTabBarPlacement](/documentation/swiftui/adaptabletabbarplacement)

#### Type Properties

- [static let automatic: AdaptableTabBarPlacement](/documentation/swiftui/adaptabletabbarplacement/automatic)
- [static let sidebar: AdaptableTabBarPlacement](/documentation/swiftui/adaptabletabbarplacement/sidebar)
- [static let tabBar: AdaptableTabBarPlacement](/documentation/swiftui/adaptabletabbarplacement/tabbar)
- [var tabBarPlacement: TabBarPlacement?](/documentation/swiftui/environmentvalues/tabbarplacement)
- [TabBarPlacement](/documentation/swiftui/tabbarplacement)

#### Type Properties

- [static let bottomBar: TabBarPlacement](/documentation/swiftui/tabbarplacement/bottombar)
- [static let ornament: TabBarPlacement](/documentation/swiftui/tabbarplacement/ornament)
- [static let pageIndicator: TabBarPlacement](/documentation/swiftui/tabbarplacement/pageindicator)
- [static let sidebar: TabBarPlacement](/documentation/swiftui/tabbarplacement/sidebar)
- [static let topBar: TabBarPlacement](/documentation/swiftui/tabbarplacement/topbar)
- [var isTabBarShowingSections: Bool](/documentation/swiftui/environmentvalues/istabbarshowingsections)
- [TabBarMinimizeBehavior](/documentation/swiftui/tabbarminimizebehavior)

#### Type Properties

- [static let automatic: TabBarMinimizeBehavior](/documentation/swiftui/tabbarminimizebehavior/automatic)
- [static let never: TabBarMinimizeBehavior](/documentation/swiftui/tabbarminimizebehavior/never)
- [static let onScrollDown: TabBarMinimizeBehavior](/documentation/swiftui/tabbarminimizebehavior/onscrolldown)
- [static let onScrollUp: TabBarMinimizeBehavior](/documentation/swiftui/tabbarminimizebehavior/onscrollup)
- [TabViewBottomAccessoryPlacement](/documentation/swiftui/tabviewbottomaccessoryplacement)

#### Enumeration Cases

- [case expanded](/documentation/swiftui/tabviewbottomaccessoryplacement/expanded)
- [case inline](/documentation/swiftui/tabviewbottomaccessoryplacement/inline)

### Configuring a tab

- [func sectionActions<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/sectionactions(content:))
- [TabPlacement](/documentation/swiftui/tabplacement)

#### Type Properties

- [static let automatic: TabPlacement](/documentation/swiftui/tabplacement/automatic)
- [static let pinned: TabPlacement](/documentation/swiftui/tabplacement/pinned)
- [static let sidebarOnly: TabPlacement](/documentation/swiftui/tabplacement/sidebaronly)
- [TabContentBuilder](/documentation/swiftui/tabcontentbuilder)

#### Structures

- [TabContentBuilder.Content](/documentation/swiftui/tabcontentbuilder/content)

#### Type Methods

- [static func buildBlock(some TabContent<TabValue>) -> some TabContent<TabValue>
](/documentation/swiftui/tabcontentbuilder/buildblock(_:))
- [static func buildBlock<C0, C1>(C0, C1) -> some TabContent<TabValue>
](/documentation/swiftui/tabcontentbuilder/buildblock(_:_:))
- [static func buildBlock<C0, C1, C2>(C0, C1, C2) -> some TabContent<TabValue>
](/documentation/swiftui/tabcontentbuilder/buildblock(_:_:_:))
- [static func buildBlock<C0, C1, C2, C3>(C0, C1, C2, C3) -> some TabContent<TabValue>
](/documentation/swiftui/tabcontentbuilder/buildblock(_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4>(C0, C1, C2, C3, C4) -> some TabContent<TabValue>
](/documentation/swiftui/tabcontentbuilder/buildblock(_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5>(C0, C1, C2, C3, C4, C5) -> some TabContent<TabValue>
](/documentation/swiftui/tabcontentbuilder/buildblock(_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6>(C0, C1, C2, C3, C4, C5, C6) -> some TabContent<TabValue>
](/documentation/swiftui/tabcontentbuilder/buildblock(_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7>(C0, C1, C2, C3, C4, C5, C6, C7) -> some TabContent<TabValue>
](/documentation/swiftui/tabcontentbuilder/buildblock(_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8>(C0, C1, C2, C3, C4, C5, C6, C7, C8) -> some TabContent<TabValue>
](/documentation/swiftui/tabcontentbuilder/buildblock(_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9) -> some TabContent<TabValue>
](/documentation/swiftui/tabcontentbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:))
- [static func buildEither<T, F>(first: T) -> _ConditionalContent<T, F>](/documentation/swiftui/tabcontentbuilder/buildeither(first:))
- [static func buildEither<T, F>(second: F) -> _ConditionalContent<T, F>](/documentation/swiftui/tabcontentbuilder/buildeither(second:))
- [static func buildExpression(some TabContent<TabValue>) -> some TabContent<TabValue>
](/documentation/swiftui/tabcontentbuilder/buildexpression(_:))
- [static func buildIf((some TabContent<TabValue>)?) -> (some TabContent<TabValue>)?
](/documentation/swiftui/tabcontentbuilder/buildif(_:))
- [static func buildLimitedAvailability<T>(T) -> AnyTabContent<T.TabValue>](/documentation/swiftui/tabcontentbuilder/buildlimitedavailability(_:))
- [TabContent](/documentation/swiftui/tabcontent)

#### Associated Types

- [Body](/documentation/swiftui/tabcontent/body-swift.associatedtype)
- [TabValue](/documentation/swiftui/tabcontent/tabvalue)

#### Instance Properties

- [var body: Self.Body](/documentation/swiftui/tabcontent/body-swift.property)

#### Instance Methods

- [func accessibilityHint(_:isEnabled:)](/documentation/swiftui/tabcontent/accessibilityhint(_:isenabled:))
- [func accessibilityIdentifier(String, isEnabled: Bool) -> some TabContent<Self.TabValue>
](/documentation/swiftui/tabcontent/accessibilityidentifier(_:isenabled:))
- [func accessibilityInputLabels(_:isEnabled:)](/documentation/swiftui/tabcontent/accessibilityinputlabels(_:isenabled:))
- [func accessibilityLabel(_:isEnabled:)](/documentation/swiftui/tabcontent/accessibilitylabel(_:isenabled:))
- [func accessibilityValue(_:isEnabled:)](/documentation/swiftui/tabcontent/accessibilityvalue(_:isenabled:))
- [func badge(_:)](/documentation/swiftui/tabcontent/badge(_:))
- [func contextMenu<M>(menuItems: () -> M) -> some TabContent<Self.TabValue>
](/documentation/swiftui/tabcontent/contextmenu(menuitems:))
- [func customizationBehavior(TabCustomizationBehavior, for: AdaptableTabBarPlacement...) -> some TabContent<Self.TabValue>
](/documentation/swiftui/tabcontent/customizationbehavior(_:for:))
- [func customizationID(String) -> some TabContent<Self.TabValue>
](/documentation/swiftui/tabcontent/customizationid(_:))
- [func defaultVisibility(Visibility, for: AdaptableTabBarPlacement...) -> some TabContent<Self.TabValue>
](/documentation/swiftui/tabcontent/defaultvisibility(_:for:))
- [func disabled(Bool) -> some TabContent<Self.TabValue>
](/documentation/swiftui/tabcontent/disabled(_:))
- [func draggable<T>(@autoclosure () -> T) -> some TabContent<Self.TabValue>
](/documentation/swiftui/tabcontent/draggable(_:))
- [func dropDestination<T>(for: T.Type, action: ([T]) -> Void) -> some TabContent<Self.TabValue>
](/documentation/swiftui/tabcontent/dropdestination(for:action:))
- [func hidden(Bool) -> some TabContent<Self.TabValue>
](/documentation/swiftui/tabcontent/hidden(_:))
- [func popover<Content>(isPresented: Binding<Bool>, attachmentAnchor: PopoverAttachmentAnchor, arrowEdge: Edge?, content: () -> Content) -> some TabContent<Self.TabValue>
](/documentation/swiftui/tabcontent/popover(ispresented:attachmentanchor:arrowedge:content:))
- [func popover<Item, Content>(item: Binding<Item?>, attachmentAnchor: PopoverAttachmentAnchor, arrowEdge: Edge?, content: (Item) -> Content) -> some TabContent<Self.TabValue>
](/documentation/swiftui/tabcontent/popover(item:attachmentanchor:arrowedge:content:))
- [func sectionActions<Content>(content: () -> Content) -> some TabContent<Self.TabValue>
](/documentation/swiftui/tabcontent/sectionactions(content:))
- [func springLoadingBehavior(SpringLoadingBehavior) -> some TabContent<Self.TabValue>
](/documentation/swiftui/tabcontent/springloadingbehavior(_:))
- [func swipeActions<T>(edge: HorizontalEdge, allowsFullSwipe: Bool, content: () -> T) -> some TabContent<Self.TabValue>
](/documentation/swiftui/tabcontent/swipeactions(edge:allowsfullswipe:content:))
- [func tabPlacement(TabPlacement) -> some TabContent<Self.TabValue>
](/documentation/swiftui/tabcontent/tabplacement(_:))
- [AnyTabContent](/documentation/swiftui/anytabcontent)

#### Initializers

- [init<T>(T)](/documentation/swiftui/anytabcontent/init(_:))

### Enabling tab customization

- [func tabViewCustomization(Binding<TabViewCustomization>?) -> some View](/documentation/swiftui/view/tabviewcustomization(_:))
- [TabViewCustomization](/documentation/swiftui/tabviewcustomization)

#### Structures

- [TabViewCustomization.SectionCustomization](/documentation/swiftui/tabviewcustomization/sectioncustomization)

##### Instance Properties

- [var tabOrder: [String]?](/documentation/swiftui/tabviewcustomization/sectioncustomization/taborder)

##### Instance Methods

- [func resetTabOrder()](/documentation/swiftui/tabviewcustomization/sectioncustomization/resettaborder())
- [TabViewCustomization.TabCustomization](/documentation/swiftui/tabviewcustomization/tabcustomization)

##### Instance Properties

- [var sidebarVisibility: Visibility](/documentation/swiftui/tabviewcustomization/tabcustomization/sidebarvisibility)
- [var tabBarVisibility: Visibility](/documentation/swiftui/tabviewcustomization/tabcustomization/tabbarvisibility)

#### Initializers

- [init()](/documentation/swiftui/tabviewcustomization/init())

#### Instance Methods

- [func resetSectionOrder()](/documentation/swiftui/tabviewcustomization/resetsectionorder())
- [func resetSectionOrder(for: String)](/documentation/swiftui/tabviewcustomization/resetsectionorder(for:))
- [func resetVisibility()](/documentation/swiftui/tabviewcustomization/resetvisibility())

#### Subscripts

- [subscript(section _: String) -> TabViewCustomization.SectionCustomization](/documentation/swiftui/tabviewcustomization/subscript(section:))
- [subscript(sectionID _: String) -> [String]?](/documentation/swiftui/tabviewcustomization/subscript(sectionid:))
- [subscript(sidebarVisibility _: String) -> Visibility](/documentation/swiftui/tabviewcustomization/subscript(sidebarvisibility:))
- [subscript(tab _: String) -> TabViewCustomization.TabCustomization](/documentation/swiftui/tabviewcustomization/subscript(tab:))
- [TabCustomizationBehavior](/documentation/swiftui/tabcustomizationbehavior)

#### Type Properties

- [static var automatic: TabCustomizationBehavior](/documentation/swiftui/tabcustomizationbehavior/automatic)
- [static var disabled: TabCustomizationBehavior](/documentation/swiftui/tabcustomizationbehavior/disabled)
- [static var reorderable: TabCustomizationBehavior](/documentation/swiftui/tabcustomizationbehavior/reorderable)

### Displaying views in multiple panes

- [HSplitView](/documentation/swiftui/hsplitview)

#### Creating a horizontal split view

- [init(content: () -> Content)](/documentation/swiftui/hsplitview/init(content:))
- [VSplitView](/documentation/swiftui/vsplitview)

#### Creating a vertical split view

- [init(content: () -> Content)](/documentation/swiftui/vsplitview/init(content:))

### Deprecated Types

- [NavigationView](/documentation/swiftui/navigationview)

#### Creating a navigation view

- [init(content: () -> Content)](/documentation/swiftui/navigationview/init(content:))

#### Styling navigation views

- [func navigationViewStyle<S>(S) -> some View](/documentation/swiftui/view/navigationviewstyle(_:))
- [NavigationViewStyle](/documentation/swiftui/navigationviewstyle)

##### Getting built-in navigation view styles

- [static var automatic: DefaultNavigationViewStyle](/documentation/swiftui/navigationviewstyle/automatic)
- [static var columns: ColumnNavigationViewStyle](/documentation/swiftui/navigationviewstyle/columns)
- [static var stack: StackNavigationViewStyle](/documentation/swiftui/navigationviewstyle/stack)

##### Supporting types

- [DefaultNavigationViewStyle](/documentation/swiftui/defaultnavigationviewstyle)

###### Creating a default navigation view style

- [init()](/documentation/swiftui/defaultnavigationviewstyle/init())
- [ColumnNavigationViewStyle](/documentation/swiftui/columnnavigationviewstyle)
- [StackNavigationViewStyle](/documentation/swiftui/stacknavigationviewstyle)

###### Creating a stack navigation view style

- [init()](/documentation/swiftui/stacknavigationviewstyle/init())
- [DoubleColumnNavigationViewStyle](/documentation/swiftui/doublecolumnnavigationviewstyle)

###### Create a double column view style

- [init()](/documentation/swiftui/doublecolumnnavigationviewstyle/init())
- [func tabItem<V>(() -> V) -> some View](/documentation/swiftui/view/tabitem(_:))
- [Modal presentations](/documentation/swiftui/modal-presentations)

### Configuring a dialog

- [DialogSeverity](/documentation/swiftui/dialogseverity)

#### Getting severities

- [static let automatic: DialogSeverity](/documentation/swiftui/dialogseverity/automatic)
- [static let standard: DialogSeverity](/documentation/swiftui/dialogseverity/standard)
- [static let critical: DialogSeverity](/documentation/swiftui/dialogseverity/critical)

### Showing a sheet, cover, or popover

- [func sheet<Content>(isPresented: Binding<Bool>, onDismiss: (() -> Void)?, content: () -> Content) -> some View](/documentation/swiftui/view/sheet(ispresented:ondismiss:content:))
- [func sheet<Item, Content>(item: Binding<Item?>, onDismiss: (() -> Void)?, content: (Item) -> Content) -> some View](/documentation/swiftui/view/sheet(item:ondismiss:content:))
- [func fullScreenCover<Content>(isPresented: Binding<Bool>, onDismiss: (() -> Void)?, content: () -> Content) -> some View](/documentation/swiftui/view/fullscreencover(ispresented:ondismiss:content:))
- [func fullScreenCover<Item, Content>(item: Binding<Item?>, onDismiss: (() -> Void)?, content: (Item) -> Content) -> some View](/documentation/swiftui/view/fullscreencover(item:ondismiss:content:))
- [func popover<Item, Content>(item: Binding<Item?>, attachmentAnchor: PopoverAttachmentAnchor, arrowEdge: Edge?, content: (Item) -> Content) -> some View](/documentation/swiftui/view/popover(item:attachmentanchor:arrowedge:content:))
- [func popover<Content>(isPresented: Binding<Bool>, attachmentAnchor: PopoverAttachmentAnchor, arrowEdge: Edge?, content: () -> Content) -> some View](/documentation/swiftui/view/popover(ispresented:attachmentanchor:arrowedge:content:))
- [PopoverAttachmentAnchor](/documentation/swiftui/popoverattachmentanchor)

#### Getting attachment anchors

- [case point(UnitPoint)](/documentation/swiftui/popoverattachmentanchor/point(_:))
- [case rect(Anchor<CGRect>.Source)](/documentation/swiftui/popoverattachmentanchor/rect(_:))

### Adapting a presentation size

- [func presentationCompactAdaptation(horizontal: PresentationAdaptation, vertical: PresentationAdaptation) -> some View](/documentation/swiftui/view/presentationcompactadaptation(horizontal:vertical:))
- [func presentationCompactAdaptation(PresentationAdaptation) -> some View](/documentation/swiftui/view/presentationcompactadaptation(_:))
- [PresentationAdaptation](/documentation/swiftui/presentationadaptation)

#### Getting adaptation strategies

- [static var automatic: PresentationAdaptation](/documentation/swiftui/presentationadaptation/automatic)
- [static var none: PresentationAdaptation](/documentation/swiftui/presentationadaptation/none)
- [static var fullScreenCover: PresentationAdaptation](/documentation/swiftui/presentationadaptation/fullscreencover)
- [static var popover: PresentationAdaptation](/documentation/swiftui/presentationadaptation/popover)
- [static var sheet: PresentationAdaptation](/documentation/swiftui/presentationadaptation/sheet)
- [func presentationSizing(some PresentationSizing) -> some View](/documentation/swiftui/view/presentationsizing(_:))
- [PresentationSizing](/documentation/swiftui/presentationsizing)

#### Getting built-in presentation size

- [static var automatic: AutomaticPresentationSizing](/documentation/swiftui/presentationsizing/automatic)
- [static var fitted: FittedPresentationSizing](/documentation/swiftui/presentationsizing/fitted)
- [static var form: FormPresentationSizing](/documentation/swiftui/presentationsizing/form)
- [static var page: PagePresentationSizing](/documentation/swiftui/presentationsizing/page)

#### Creating custom presentation size

- [func fitted(horizontal: Bool, vertical: Bool) -> some PresentationSizing](/documentation/swiftui/presentationsizing/fitted(horizontal:vertical:))
- [func proposedSize(for: PresentationSizingRoot, context: PresentationSizingContext) -> ProposedViewSize](/documentation/swiftui/presentationsizing/proposedsize(for:context:))
- [func sticky(horizontal: Bool, vertical: Bool) -> some PresentationSizing](/documentation/swiftui/presentationsizing/sticky(horizontal:vertical:))

#### Supporting types

- [AutomaticPresentationSizing](/documentation/swiftui/automaticpresentationsizing)
- [FittedPresentationSizing](/documentation/swiftui/fittedpresentationsizing)
- [FormPresentationSizing](/documentation/swiftui/formpresentationsizing)
- [PagePresentationSizing](/documentation/swiftui/pagepresentationsizing)
- [PresentationSizingRoot](/documentation/swiftui/presentationsizingroot)

#### Instance Methods

- [func sizeThatFits(ProposedViewSize) -> CGSize](/documentation/swiftui/presentationsizingroot/sizethatfits(_:))
- [PresentationSizingContext](/documentation/swiftui/presentationsizingcontext)

### Configuring a sheet’s height

- [func presentationDetents(Set<PresentationDetent>) -> some View](/documentation/swiftui/view/presentationdetents(_:))
- [func presentationDetents(Set<PresentationDetent>, selection: Binding<PresentationDetent>) -> some View](/documentation/swiftui/view/presentationdetents(_:selection:))
- [func presentationContentInteraction(PresentationContentInteraction) -> some View](/documentation/swiftui/view/presentationcontentinteraction(_:))
- [func presentationDragIndicator(Visibility) -> some View](/documentation/swiftui/view/presentationdragindicator(_:))
- [PresentationDetent](/documentation/swiftui/presentationdetent)

#### Getting built-in detents

- [static let large: PresentationDetent](/documentation/swiftui/presentationdetent/large)
- [static let medium: PresentationDetent](/documentation/swiftui/presentationdetent/medium)

#### Creating custom detents

- [static func custom<D>(D.Type) -> PresentationDetent](/documentation/swiftui/presentationdetent/custom(_:))
- [static func fraction(CGFloat) -> PresentationDetent](/documentation/swiftui/presentationdetent/fraction(_:))
- [static func height(CGFloat) -> PresentationDetent](/documentation/swiftui/presentationdetent/height(_:))
- [PresentationDetent.Context](/documentation/swiftui/presentationdetent/context)

##### Getting the height

- [var maxDetentValue: CGFloat](/documentation/swiftui/presentationdetent/context/maxdetentvalue)

##### Supporting types

- [subscript<T>(dynamicMember _: KeyPath<EnvironmentValues, T>) -> T](/documentation/swiftui/presentationdetent/context/subscript(dynamicmember:))
- [CustomPresentationDetent](/documentation/swiftui/custompresentationdetent)

#### Getting the height

- [static func height(in: Self.Context) -> CGFloat?](/documentation/swiftui/custompresentationdetent/height(in:))
- [CustomPresentationDetent.Context](/documentation/swiftui/custompresentationdetent/context)
- [PresentationContentInteraction](/documentation/swiftui/presentationcontentinteraction)

#### Getting interaction behaviors

- [static var automatic: PresentationContentInteraction](/documentation/swiftui/presentationcontentinteraction/automatic)
- [static var resizes: PresentationContentInteraction](/documentation/swiftui/presentationcontentinteraction/resizes)
- [static var scrolls: PresentationContentInteraction](/documentation/swiftui/presentationcontentinteraction/scrolls)

### Styling a sheet and its background

- [func presentationCornerRadius(CGFloat?) -> some View](/documentation/swiftui/view/presentationcornerradius(_:))
- [func presentationBackground<S>(S) -> some View](/documentation/swiftui/view/presentationbackground(_:))
- [func presentationBackground<V>(alignment: Alignment, content: () -> V) -> some View](/documentation/swiftui/view/presentationbackground(alignment:content:))
- [func presentationBackgroundInteraction(PresentationBackgroundInteraction) -> some View](/documentation/swiftui/view/presentationbackgroundinteraction(_:))
- [PresentationBackgroundInteraction](/documentation/swiftui/presentationbackgroundinteraction)

#### Getting interaction types

- [static var automatic: PresentationBackgroundInteraction](/documentation/swiftui/presentationbackgroundinteraction/automatic)
- [static var disabled: PresentationBackgroundInteraction](/documentation/swiftui/presentationbackgroundinteraction/disabled)
- [static var enabled: PresentationBackgroundInteraction](/documentation/swiftui/presentationbackgroundinteraction/enabled)
- [static func enabled(upThrough: PresentationDetent) -> PresentationBackgroundInteraction](/documentation/swiftui/presentationbackgroundinteraction/enabled(upthrough:))

### Presenting an alert

- [AlertScene](/documentation/swiftui/alertscene)

#### Initializers

- [init(_:isPresented:actions:)](/documentation/swiftui/alertscene/init(_:ispresented:actions:))
- [init(_:isPresented:actions:message:)](/documentation/swiftui/alertscene/init(_:ispresented:actions:message:))
- [init(_:isPresented:presenting:actions:)](/documentation/swiftui/alertscene/init(_:ispresented:presenting:actions:))
- [init(_:isPresented:presenting:actions:message:)](/documentation/swiftui/alertscene/init(_:ispresented:presenting:actions:message:))
- [func alert(_:isPresented:actions:)](/documentation/swiftui/view/alert(_:ispresented:actions:))
- [func alert(_:isPresented:presenting:actions:)](/documentation/swiftui/view/alert(_:ispresented:presenting:actions:))
- [func alert<E, A>(isPresented: Binding<Bool>, error: E?, actions: () -> A) -> some View](/documentation/swiftui/view/alert(ispresented:error:actions:))
- [func alert(_:isPresented:actions:message:)](/documentation/swiftui/view/alert(_:ispresented:actions:message:))
- [func alert(_:isPresented:presenting:actions:message:)](/documentation/swiftui/view/alert(_:ispresented:presenting:actions:message:))
- [func alert<E, A, M>(isPresented: Binding<Bool>, error: E?, actions: (E) -> A, message: (E) -> M) -> some View](/documentation/swiftui/view/alert(ispresented:error:actions:message:))

### Getting confirmation for an action

- [func confirmationDialog(_:isPresented:titleVisibility:actions:)](/documentation/swiftui/view/confirmationdialog(_:ispresented:titlevisibility:actions:))
- [func confirmationDialog(_:isPresented:titleVisibility:presenting:actions:)](/documentation/swiftui/view/confirmationdialog(_:ispresented:titlevisibility:presenting:actions:))
- [func dismissalConfirmationDialog(_:shouldPresent:actions:)](/documentation/swiftui/view/dismissalconfirmationdialog(_:shouldpresent:actions:))

### Showing a confirmation dialog with a message

- [func confirmationDialog(_:isPresented:titleVisibility:actions:message:)](/documentation/swiftui/view/confirmationdialog(_:ispresented:titlevisibility:actions:message:))
- [func confirmationDialog(_:isPresented:titleVisibility:presenting:actions:message:)](/documentation/swiftui/view/confirmationdialog(_:ispresented:titlevisibility:presenting:actions:message:))
- [func dismissalConfirmationDialog(_:shouldPresent:actions:message:)](/documentation/swiftui/view/dismissalconfirmationdialog(_:shouldpresent:actions:message:))

### Configuring a dialog

- [func dialogIcon(Image?) -> some View](/documentation/swiftui/view/dialogicon(_:))
- [func dialogIcon(Image?) -> some Scene](/documentation/swiftui/scene/dialogicon(_:))
- [func dialogSeverity(DialogSeverity) -> some View](/documentation/swiftui/view/dialogseverity(_:))
- [func dialogSeverity(DialogSeverity) -> some Scene](/documentation/swiftui/scene/dialogseverity(_:))
- [func dialogSuppressionToggle(isSuppressed: Binding<Bool>) -> some View](/documentation/swiftui/view/dialogsuppressiontoggle(issuppressed:))
- [func dialogSuppressionToggle(isSuppressed: Binding<Bool>) -> some Scene](/documentation/swiftui/scene/dialogsuppressiontoggle(issuppressed:))
- [func dialogSuppressionToggle(_:isSuppressed:)](/documentation/swiftui/view/dialogsuppressiontoggle(_:issuppressed:))
- [func dialogSuppressionToggle(_:isSuppressed:)](/documentation/swiftui/scene/dialogsuppressiontoggle(_:issuppressed:))

### Exporting to file

- [func fileExporter(isPresented:document:contentType:defaultFilename:onCompletion:)](/documentation/swiftui/view/fileexporter(ispresented:document:contenttype:defaultfilename:oncompletion:))
- [func fileExporter(isPresented:documents:contentType:onCompletion:)](/documentation/swiftui/view/fileexporter(ispresented:documents:contenttype:oncompletion:))
- [func fileExporter(isPresented:document:contentTypes:defaultFilename:onCompletion:onCancellation:)](/documentation/swiftui/view/fileexporter(ispresented:document:contenttypes:defaultfilename:oncompletion:oncancellation:))
- [func fileExporter(isPresented:documents:contentTypes:onCompletion:onCancellation:)](/documentation/swiftui/view/fileexporter(ispresented:documents:contenttypes:oncompletion:oncancellation:))
- [func fileExporter<T>(isPresented: Binding<Bool>, item: T?, contentTypes: [UTType], defaultFilename: String?, onCompletion: (Result<URL, any Error>) -> Void, onCancellation: () -> Void) -> some View](/documentation/swiftui/view/fileexporter(ispresented:item:contenttypes:defaultfilename:oncompletion:oncancellation:))
- [func fileExporter<C, T>(isPresented: Binding<Bool>, items: C, contentTypes: [UTType], onCompletion: (Result<[URL], any Error>) -> Void, onCancellation: () -> Void) -> some View](/documentation/swiftui/view/fileexporter(ispresented:items:contenttypes:oncompletion:oncancellation:))
- [func fileExporterFilenameLabel(_:)](/documentation/swiftui/view/fileexporterfilenamelabel(_:))

### Importing from file

- [func fileImporter(isPresented: Binding<Bool>, allowedContentTypes: [UTType], allowsMultipleSelection: Bool, onCompletion: (Result<[URL], any Error>) -> Void) -> some View](/documentation/swiftui/view/fileimporter(ispresented:allowedcontenttypes:allowsmultipleselection:oncompletion:))
- [func fileImporter(isPresented: Binding<Bool>, allowedContentTypes: [UTType], onCompletion: (Result<URL, any Error>) -> Void) -> some View](/documentation/swiftui/view/fileimporter(ispresented:allowedcontenttypes:oncompletion:))
- [func fileImporter(isPresented: Binding<Bool>, allowedContentTypes: [UTType], allowsMultipleSelection: Bool, onCompletion: (Result<[URL], any Error>) -> Void, onCancellation: () -> Void) -> some View](/documentation/swiftui/view/fileimporter(ispresented:allowedcontenttypes:allowsmultipleselection:oncompletion:oncancellation:))

### Moving a file

- [func fileMover(isPresented: Binding<Bool>, file: URL?, onCompletion: (Result<URL, any Error>) -> Void) -> some View](/documentation/swiftui/view/filemover(ispresented:file:oncompletion:))
- [func fileMover<C>(isPresented: Binding<Bool>, files: C, onCompletion: (Result<[URL], any Error>) -> Void) -> some View](/documentation/swiftui/view/filemover(ispresented:files:oncompletion:))
- [func fileMover(isPresented: Binding<Bool>, file: URL?, onCompletion: (Result<URL, any Error>) -> Void, onCancellation: () -> Void) -> some View](/documentation/swiftui/view/filemover(ispresented:file:oncompletion:oncancellation:))
- [func fileMover<C>(isPresented: Binding<Bool>, files: C, onCompletion: (Result<[URL], any Error>) -> Void, onCancellation: () -> Void) -> some View](/documentation/swiftui/view/filemover(ispresented:files:oncompletion:oncancellation:))

### Configuring a file dialog

- [func fileDialogBrowserOptions(FileDialogBrowserOptions) -> some View](/documentation/swiftui/view/filedialogbrowseroptions(_:))
- [func fileDialogConfirmationLabel(_:)](/documentation/swiftui/view/filedialogconfirmationlabel(_:))
- [func fileDialogCustomizationID(String) -> some View](/documentation/swiftui/view/filedialogcustomizationid(_:))
- [func fileDialogDefaultDirectory(URL?) -> some View](/documentation/swiftui/view/filedialogdefaultdirectory(_:))
- [func fileDialogImportsUnresolvedAliases(Bool) -> some View](/documentation/swiftui/view/filedialogimportsunresolvedaliases(_:))
- [func fileDialogMessage(_:)](/documentation/swiftui/view/filedialogmessage(_:))
- [func fileDialogURLEnabled(Predicate<URL>) -> some View](/documentation/swiftui/view/filedialogurlenabled(_:))
- [FileDialogBrowserOptions](/documentation/swiftui/filedialogbrowseroptions)

#### Getting browser options

- [static let displayFileExtensions: FileDialogBrowserOptions](/documentation/swiftui/filedialogbrowseroptions/displayfileextensions)
- [static let enumeratePackages: FileDialogBrowserOptions](/documentation/swiftui/filedialogbrowseroptions/enumeratepackages)
- [static let includeHiddenFiles: FileDialogBrowserOptions](/documentation/swiftui/filedialogbrowseroptions/includehiddenfiles)

### Presenting an inspector

- [func inspector<V>(isPresented: Binding<Bool>, content: () -> V) -> some View](/documentation/swiftui/view/inspector(ispresented:content:))
- [func inspectorColumnWidth(CGFloat) -> some View](/documentation/swiftui/view/inspectorcolumnwidth(_:))
- [func inspectorColumnWidth(min: CGFloat?, ideal: CGFloat, max: CGFloat?) -> some View](/documentation/swiftui/view/inspectorcolumnwidth(min:ideal:max:))

### Dismissing a presentation

- [var isPresented: Bool](/documentation/swiftui/environmentvalues/ispresented)
- [var dismiss: DismissAction](/documentation/swiftui/environmentvalues/dismiss)
- [DismissAction](/documentation/swiftui/dismissaction)

#### Calling the action

- [func callAsFunction()](/documentation/swiftui/dismissaction/callasfunction())
- [func interactiveDismissDisabled(Bool) -> some View](/documentation/swiftui/view/interactivedismissdisabled(_:))

### Deprecated modal presentations

- [Alert](/documentation/swiftui/alert)

#### Creating an alert

- [init(title: Text, message: Text?, dismissButton: Alert.Button?)](/documentation/swiftui/alert/init(title:message:dismissbutton:))
- [init(title: Text, message: Text?, primaryButton: Alert.Button, secondaryButton: Alert.Button)](/documentation/swiftui/alert/init(title:message:primarybutton:secondarybutton:))
- [static func sideBySideButtons(title: Text, message: Text?, primaryButton: Alert.Button, secondaryButton: Alert.Button) -> Alert](/documentation/swiftui/alert/sidebysidebuttons(title:message:primarybutton:secondarybutton:))

#### Specifying the button type

- [Alert.Button](/documentation/swiftui/alert/button)

##### Getting a button

- [static func `default`(Text, action: (() -> Void)?) -> Alert.Button](/documentation/swiftui/alert/button/default(_:action:))
- [static func cancel((() -> Void)?) -> Alert.Button](/documentation/swiftui/alert/button/cancel(_:))
- [static func cancel(Text, action: (() -> Void)?) -> Alert.Button](/documentation/swiftui/alert/button/cancel(_:action:))
- [static func destructive(Text, action: (() -> Void)?) -> Alert.Button](/documentation/swiftui/alert/button/destructive(_:action:))
- [ActionSheet](/documentation/swiftui/actionsheet)

#### Creating an action sheet

- [init(title: Text, message: Text?, buttons: [ActionSheet.Button])](/documentation/swiftui/actionsheet/init(title:message:buttons:))

#### Specifying the button type

- [ActionSheet.Button](/documentation/swiftui/actionsheet/button)
- [Toolbars](/documentation/swiftui/toolbars)

### Populating a toolbar

- [func toolbar(content:)](/documentation/swiftui/view/toolbar(content:))
- [ToolbarItem](/documentation/swiftui/toolbaritem)

#### Creating a toolbar item

- [init(placement: ToolbarItemPlacement, content: () -> Content)](/documentation/swiftui/toolbaritem/init(placement:content:))
- [init(id: String, placement: ToolbarItemPlacement, content: () -> Content)](/documentation/swiftui/toolbaritem/init(id:placement:content:))
- [init(id: String, placement: ToolbarItemPlacement, showsByDefault: Bool, content: () -> Content)](/documentation/swiftui/toolbaritem/init(id:placement:showsbydefault:content:))
- [ToolbarItemGroup](/documentation/swiftui/toolbaritemgroup)

#### Creating a toolbar item group

- [init(placement: ToolbarItemPlacement, content: () -> Content)](/documentation/swiftui/toolbaritemgroup/init(placement:content:))
- [init<C, L>(placement: ToolbarItemPlacement, content: () -> C, label: () -> L)](/documentation/swiftui/toolbaritemgroup/init(placement:content:label:))

#### Supporting types

- [LabeledToolbarItemGroupContent](/documentation/swiftui/labeledtoolbaritemgroupcontent)
- [ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement)

#### Getting semantic placement

- [static let automatic: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/automatic)
- [static let principal: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/principal)
- [static let status: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/status)

#### Getting placement for specific actions

- [static let primaryAction: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/primaryaction)
- [static let secondaryAction: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/secondaryaction)
- [static let confirmationAction: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/confirmationaction)
- [static let cancellationAction: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/cancellationaction)
- [static let destructiveAction: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/destructiveaction)
- [static let navigation: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/navigation)

#### Getting explicit placement

- [static var topBarLeading: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/topbarleading)
- [static var topBarTrailing: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/topbartrailing)
- [static let bottomBar: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/bottombar)
- [static let bottomOrnament: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/bottomornament)
- [static let keyboard: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/keyboard)
- [static func accessoryBar<ID>(id: ID) -> ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/accessorybar(id:))

#### Deprecated symbols

- [init<ID>(id: ID)](/documentation/swiftui/toolbaritemplacement/init(id:))
- [static let navigationBarLeading: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/navigationbarleading)
- [static let navigationBarTrailing: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/navigationbartrailing)

#### Type Properties

- [static let largeSubtitle: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/largesubtitle)
- [static let largeTitle: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/largetitle)
- [static let subtitle: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/subtitle)
- [static var title: ToolbarItemPlacement](/documentation/swiftui/toolbaritemplacement/title)
- [ToolbarContent](/documentation/swiftui/toolbarcontent)

#### Implementing toolbar content

- [var body: Self.Body](/documentation/swiftui/toolbarcontent/body-swift.property)
- [Body](/documentation/swiftui/toolbarcontent/body-swift.associatedtype)

#### Instance Methods

- [func hidden(Bool) -> some ToolbarContent](/documentation/swiftui/toolbarcontent/hidden(_:))
- [func matchedTransitionSource(id: some Hashable, in: Namespace.ID) -> some ToolbarContent](/documentation/swiftui/toolbarcontent/matchedtransitionsource(id:in:))
- [func sharedBackgroundVisibility(Visibility) -> some ToolbarContent](/documentation/swiftui/toolbarcontent/sharedbackgroundvisibility(_:))
- [ToolbarContentBuilder](/documentation/swiftui/toolbarcontentbuilder)

#### Building toolbar content

- [static buildBlock(_:)](/documentation/swiftui/toolbarcontentbuilder/buildblock(_:))
- [static buildBlock(_:_:)](/documentation/swiftui/toolbarcontentbuilder/buildblock(_:_:))
- [static buildBlock(_:_:_:)](/documentation/swiftui/toolbarcontentbuilder/buildblock(_:_:_:))
- [static buildBlock(_:_:_:_:)](/documentation/swiftui/toolbarcontentbuilder/buildblock(_:_:_:_:))
- [static buildBlock(_:_:_:_:_:)](/documentation/swiftui/toolbarcontentbuilder/buildblock(_:_:_:_:_:))
- [static buildBlock(_:_:_:_:_:_:)](/documentation/swiftui/toolbarcontentbuilder/buildblock(_:_:_:_:_:_:))
- [static buildBlock(_:_:_:_:_:_:_:)](/documentation/swiftui/toolbarcontentbuilder/buildblock(_:_:_:_:_:_:_:))
- [static buildBlock(_:_:_:_:_:_:_:_:)](/documentation/swiftui/toolbarcontentbuilder/buildblock(_:_:_:_:_:_:_:_:))
- [static buildBlock(_:_:_:_:_:_:_:_:_:)](/documentation/swiftui/toolbarcontentbuilder/buildblock(_:_:_:_:_:_:_:_:_:))
- [static buildBlock(_:_:_:_:_:_:_:_:_:_:)](/documentation/swiftui/toolbarcontentbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:))

#### Building conditional toolbar content

- [static buildIf(_:)](/documentation/swiftui/toolbarcontentbuilder/buildif(_:))
- [static buildEither(first:)](/documentation/swiftui/toolbarcontentbuilder/buildeither(first:))
- [static buildEither(second:)](/documentation/swiftui/toolbarcontentbuilder/buildeither(second:))
- [static buildExpression(_:)](/documentation/swiftui/toolbarcontentbuilder/buildexpression(_:))
- [static buildLimitedAvailability(_:)](/documentation/swiftui/toolbarcontentbuilder/buildlimitedavailability(_:))
- [ToolbarSpacer](/documentation/swiftui/toolbarspacer)

#### Initializers

- [init(SpacerSizing, placement: ToolbarItemPlacement)](/documentation/swiftui/toolbarspacer/init(_:placement:))
- [DefaultToolbarItem](/documentation/swiftui/defaulttoolbaritem)

#### Initializers

- [init(kind: ToolbarDefaultItemKind, placement: ToolbarItemPlacement)](/documentation/swiftui/defaulttoolbaritem/init(kind:placement:))

### Populating a customizable toolbar

- [func toolbar<Content>(id: String, content: () -> Content) -> some View](/documentation/swiftui/view/toolbar(id:content:))
- [CustomizableToolbarContent](/documentation/swiftui/customizabletoolbarcontent)

#### Using default options

- [func defaultCustomization() -> some CustomizableToolbarContent](/documentation/swiftui/customizabletoolbarcontent/defaultcustomization())
- [func defaultCustomization(Visibility, options: ToolbarCustomizationOptions) -> some CustomizableToolbarContent](/documentation/swiftui/customizabletoolbarcontent/defaultcustomization(_:options:))

#### Customizing the behavior

- [func customizationBehavior(ToolbarCustomizationBehavior) -> some CustomizableToolbarContent](/documentation/swiftui/customizabletoolbarcontent/customizationbehavior(_:))

#### Instance Methods

- [func hidden(Bool) -> some CustomizableToolbarContent](/documentation/swiftui/customizabletoolbarcontent/hidden(_:))
- [func matchedTransitionSource(id: some Hashable, in: Namespace.ID) -> some CustomizableToolbarContent](/documentation/swiftui/customizabletoolbarcontent/matchedtransitionsource(id:in:))
- [func sharedBackgroundVisibility(Visibility) -> some CustomizableToolbarContent](/documentation/swiftui/customizabletoolbarcontent/sharedbackgroundvisibility(_:))
- [ToolbarCustomizationBehavior](/documentation/swiftui/toolbarcustomizationbehavior)

#### Getting customization behaviors

- [static var `default`: ToolbarCustomizationBehavior](/documentation/swiftui/toolbarcustomizationbehavior/default)
- [static var disabled: ToolbarCustomizationBehavior](/documentation/swiftui/toolbarcustomizationbehavior/disabled)
- [static var reorderable: ToolbarCustomizationBehavior](/documentation/swiftui/toolbarcustomizationbehavior/reorderable)
- [ToolbarCustomizationOptions](/documentation/swiftui/toolbarcustomizationoptions)

#### Getting customization options

- [static var alwaysAvailable: ToolbarCustomizationOptions](/documentation/swiftui/toolbarcustomizationoptions/alwaysavailable)
- [SearchToolbarBehavior](/documentation/swiftui/searchtoolbarbehavior)

#### Type Properties

- [static var automatic: SearchToolbarBehavior](/documentation/swiftui/searchtoolbarbehavior/automatic)
- [static var minimize: SearchToolbarBehavior](/documentation/swiftui/searchtoolbarbehavior/minimize)

### Removing default items

- [func toolbar(removing: ToolbarDefaultItemKind?) -> some View](/documentation/swiftui/view/toolbar(removing:))
- [ToolbarDefaultItemKind](/documentation/swiftui/toolbardefaultitemkind)

#### Getting the default item types

- [static let sidebarToggle: ToolbarDefaultItemKind](/documentation/swiftui/toolbardefaultitemkind/sidebartoggle)

#### Type Properties

- [static let search: ToolbarDefaultItemKind](/documentation/swiftui/toolbardefaultitemkind/search)
- [static let title: ToolbarDefaultItemKind](/documentation/swiftui/toolbardefaultitemkind/title)

### Setting toolbar visibility

- [func toolbar(Visibility, for: ToolbarPlacement...) -> some View](/documentation/swiftui/view/toolbar(_:for:))
- [func toolbarVisibility(Visibility, for: ToolbarPlacement...) -> some View](/documentation/swiftui/view/toolbarvisibility(_:for:))
- [func toolbarBackgroundVisibility(Visibility, for: ToolbarPlacement...) -> some View](/documentation/swiftui/view/toolbarbackgroundvisibility(_:for:))
- [ToolbarPlacement](/documentation/swiftui/toolbarplacement)

#### Getting placements

- [static var automatic: ToolbarPlacement](/documentation/swiftui/toolbarplacement/automatic)
- [static func accessoryBar<ID>(id: ID) -> ToolbarPlacement](/documentation/swiftui/toolbarplacement/accessorybar(id:))
- [static var bottomBar: ToolbarPlacement](/documentation/swiftui/toolbarplacement/bottombar)
- [static var bottomOrnament: ToolbarPlacement](/documentation/swiftui/toolbarplacement/bottomornament)
- [static var navigationBar: ToolbarPlacement](/documentation/swiftui/toolbarplacement/navigationbar)
- [static var tabBar: ToolbarPlacement](/documentation/swiftui/toolbarplacement/tabbar)
- [static var windowToolbar: ToolbarPlacement](/documentation/swiftui/toolbarplacement/windowtoolbar)

#### Deprecated symbols

- [init<ID>(id: ID)](/documentation/swiftui/toolbarplacement/init(id:))
- [ContentToolbarPlacement](/documentation/swiftui/contenttoolbarplacement)

#### Type Properties

- [static let tabViewSidebar: ContentToolbarPlacement](/documentation/swiftui/contenttoolbarplacement/tabviewsidebar)

### Specifying the role of toolbar content

- [func toolbarRole(ToolbarRole) -> some View](/documentation/swiftui/view/toolbarrole(_:))
- [ToolbarRole](/documentation/swiftui/toolbarrole)

#### Behavior-specific roles

- [static var browser: ToolbarRole](/documentation/swiftui/toolbarrole/browser)
- [static var editor: ToolbarRole](/documentation/swiftui/toolbarrole/editor)
- [static var navigationStack: ToolbarRole](/documentation/swiftui/toolbarrole/navigationstack)

#### Automatic roles

- [static var automatic: ToolbarRole](/documentation/swiftui/toolbarrole/automatic)

### Styling a toolbar

- [func toolbarBackground(_:for:)](/documentation/swiftui/view/toolbarbackground(_:for:))
- [func toolbarColorScheme(ColorScheme?, for: ToolbarPlacement...) -> some View](/documentation/swiftui/view/toolbarcolorscheme(_:for:))
- [func toolbarForegroundStyle<S>(S, for: ToolbarPlacement...) -> some View](/documentation/swiftui/view/toolbarforegroundstyle(_:for:))
- [func windowToolbarStyle<S>(S) -> some Scene](/documentation/swiftui/scene/windowtoolbarstyle(_:))
- [WindowToolbarStyle](/documentation/swiftui/windowtoolbarstyle)

#### Getting built-in window toolbar styles

- [static var automatic: DefaultWindowToolbarStyle](/documentation/swiftui/windowtoolbarstyle/automatic)
- [static var expanded: ExpandedWindowToolbarStyle](/documentation/swiftui/windowtoolbarstyle/expanded)
- [static var unified: UnifiedWindowToolbarStyle](/documentation/swiftui/windowtoolbarstyle/unified)
- [static func unified(showsTitle: Bool) -> UnifiedWindowToolbarStyle](/documentation/swiftui/windowtoolbarstyle/unified(showstitle:))
- [static var unifiedCompact: UnifiedCompactWindowToolbarStyle](/documentation/swiftui/windowtoolbarstyle/unifiedcompact)
- [static func unifiedCompact(showsTitle: Bool) -> UnifiedCompactWindowToolbarStyle](/documentation/swiftui/windowtoolbarstyle/unifiedcompact(showstitle:))

#### Supporting types

- [DefaultWindowToolbarStyle](/documentation/swiftui/defaultwindowtoolbarstyle)

##### Creating the window toolbar style

- [init()](/documentation/swiftui/defaultwindowtoolbarstyle/init())
- [ExpandedWindowToolbarStyle](/documentation/swiftui/expandedwindowtoolbarstyle)

##### Creating the window toolbar style

- [init()](/documentation/swiftui/expandedwindowtoolbarstyle/init())
- [UnifiedWindowToolbarStyle](/documentation/swiftui/unifiedwindowtoolbarstyle)

##### Creating the window toolbar style

- [init()](/documentation/swiftui/unifiedwindowtoolbarstyle/init())
- [init(showsTitle: Bool)](/documentation/swiftui/unifiedwindowtoolbarstyle/init(showstitle:))
- [UnifiedCompactWindowToolbarStyle](/documentation/swiftui/unifiedcompactwindowtoolbarstyle)

##### Creating the window toolbar style

- [init()](/documentation/swiftui/unifiedcompactwindowtoolbarstyle/init())
- [init(showsTitle: Bool)](/documentation/swiftui/unifiedcompactwindowtoolbarstyle/init(showstitle:))
- [var toolbarLabelStyle: ToolbarLabelStyle?](/documentation/swiftui/environmentvalues/toolbarlabelstyle)
- [ToolbarLabelStyle](/documentation/swiftui/toolbarlabelstyle)

#### Type Properties

- [static var automatic: ToolbarLabelStyle](/documentation/swiftui/toolbarlabelstyle/automatic)
- [static var iconOnly: ToolbarLabelStyle](/documentation/swiftui/toolbarlabelstyle/icononly)
- [static var titleAndIcon: ToolbarLabelStyle](/documentation/swiftui/toolbarlabelstyle/titleandicon)
- [static var titleOnly: ToolbarLabelStyle](/documentation/swiftui/toolbarlabelstyle/titleonly)
- [SpacerSizing](/documentation/swiftui/spacersizing)

#### Type Properties

- [static let fixed: SpacerSizing](/documentation/swiftui/spacersizing/fixed)
- [static let flexible: SpacerSizing](/documentation/swiftui/spacersizing/flexible)

### Configuring the toolbar title display mode

- [func toolbarTitleDisplayMode(ToolbarTitleDisplayMode) -> some View](/documentation/swiftui/view/toolbartitledisplaymode(_:))
- [ToolbarTitleDisplayMode](/documentation/swiftui/toolbartitledisplaymode)

#### Getting display modes

- [static var automatic: ToolbarTitleDisplayMode](/documentation/swiftui/toolbartitledisplaymode/automatic)
- [static var inline: ToolbarTitleDisplayMode](/documentation/swiftui/toolbartitledisplaymode/inline)
- [static var inlineLarge: ToolbarTitleDisplayMode](/documentation/swiftui/toolbartitledisplaymode/inlinelarge)
- [static var large: ToolbarTitleDisplayMode](/documentation/swiftui/toolbartitledisplaymode/large)

### Setting the toolbar title menu

- [func toolbarTitleMenu<C>(content: () -> C) -> some View](/documentation/swiftui/view/toolbartitlemenu(content:))
- [ToolbarTitleMenu](/documentation/swiftui/toolbartitlemenu)

#### Creating a toolbar title menu

- [init()](/documentation/swiftui/toolbartitlemenu/init())
- [init(content: () -> Content)](/documentation/swiftui/toolbartitlemenu/init(content:))

### Creating an ornament

- [func ornament(visibility:attachmentAnchor:contentAlignment:ornament:)](/documentation/swiftui/view/ornament(visibility:attachmentanchor:contentalignment:ornament:))
- [OrnamentAttachmentAnchor](/documentation/swiftui/ornamentattachmentanchor)

#### Getting an anchor

- [static scene(_:)](/documentation/swiftui/ornamentattachmentanchor/scene(_:))

#### Type Methods

- [static func parent(UnitPoint3D) -> OrnamentAttachmentAnchor](/documentation/swiftui/ornamentattachmentanchor/parent(_:))
- [Search](/documentation/swiftui/search)

### Searching your app’s data model

- [Adding a search interface to your app](/documentation/swiftui/adding-a-search-interface-to-your-app)
- [Performing a search operation](/documentation/swiftui/performing-a-search-operation)
- [func searchable(text:placement:prompt:)](/documentation/swiftui/view/searchable(text:placement:prompt:))
- [func searchable(text:tokens:placement:prompt:token:)](/documentation/swiftui/view/searchable(text:tokens:placement:prompt:token:))
- [func searchable(text:editableTokens:placement:prompt:token:)](/documentation/swiftui/view/searchable(text:editabletokens:placement:prompt:token:))
- [SearchFieldPlacement](/documentation/swiftui/searchfieldplacement)

#### Getting a search field placement

- [static let automatic: SearchFieldPlacement](/documentation/swiftui/searchfieldplacement/automatic)
- [static let navigationBarDrawer: SearchFieldPlacement](/documentation/swiftui/searchfieldplacement/navigationbardrawer)
- [static func navigationBarDrawer(displayMode: SearchFieldPlacement.NavigationBarDrawerDisplayMode) -> SearchFieldPlacement](/documentation/swiftui/searchfieldplacement/navigationbardrawer(displaymode:))
- [static var sidebar: SearchFieldPlacement](/documentation/swiftui/searchfieldplacement/sidebar)
- [static let toolbar: SearchFieldPlacement](/documentation/swiftui/searchfieldplacement/toolbar)

#### Supporting types

- [SearchFieldPlacement.NavigationBarDrawerDisplayMode](/documentation/swiftui/searchfieldplacement/navigationbardrawerdisplaymode)

##### Getting display modes

- [static let always: SearchFieldPlacement.NavigationBarDrawerDisplayMode](/documentation/swiftui/searchfieldplacement/navigationbardrawerdisplaymode/always)
- [static let automatic: SearchFieldPlacement.NavigationBarDrawerDisplayMode](/documentation/swiftui/searchfieldplacement/navigationbardrawerdisplaymode/automatic)

#### Type Properties

- [static var toolbarPrincipal: SearchFieldPlacement](/documentation/swiftui/searchfieldplacement/toolbarprincipal)

### Making search suggestions

- [Suggesting search terms](/documentation/swiftui/suggesting-search-terms)
- [func searchSuggestions<S>(() -> S) -> some View](/documentation/swiftui/view/searchsuggestions(_:))
- [func searchSuggestions(Visibility, for: SearchSuggestionsPlacement.Set) -> some View](/documentation/swiftui/view/searchsuggestions(_:for:))
- [func searchCompletion(_:)](/documentation/swiftui/view/searchcompletion(_:))
- [func searchable(text:tokens:suggestedTokens:placement:prompt:token:)](/documentation/swiftui/view/searchable(text:tokens:suggestedtokens:placement:prompt:token:))
- [SearchSuggestionsPlacement](/documentation/swiftui/searchsuggestionsplacement)

#### Getting placements

- [static var automatic: SearchSuggestionsPlacement](/documentation/swiftui/searchsuggestionsplacement/automatic)
- [static var content: SearchSuggestionsPlacement](/documentation/swiftui/searchsuggestionsplacement/content)
- [static var menu: SearchSuggestionsPlacement](/documentation/swiftui/searchsuggestionsplacement/menu)

#### Supporting types

- [SearchSuggestionsPlacement.Set](/documentation/swiftui/searchsuggestionsplacement/set)

##### Getting placement sets

- [static var content: SearchSuggestionsPlacement.Set](/documentation/swiftui/searchsuggestionsplacement/set/content)
- [static var menu: SearchSuggestionsPlacement.Set](/documentation/swiftui/searchsuggestionsplacement/set/menu)

##### Creating a set

- [init(rawValue: Int)](/documentation/swiftui/searchsuggestionsplacement/set/init(rawvalue:))
- [var rawValue: Int](/documentation/swiftui/searchsuggestionsplacement/set/rawvalue)

##### Supporting types

- [SearchSuggestionsPlacement.Set.Element](/documentation/swiftui/searchsuggestionsplacement/set/element)

### Limiting search scope

- [Scoping a search operation](/documentation/swiftui/scoping-a-search-operation)
- [func searchScopes<V, S>(Binding<V>, scopes: () -> S) -> some View](/documentation/swiftui/view/searchscopes(_:scopes:))
- [func searchScopes<V, S>(Binding<V>, activation: SearchScopeActivation, () -> S) -> some View](/documentation/swiftui/view/searchscopes(_:activation:_:))
- [SearchScopeActivation](/documentation/swiftui/searchscopeactivation)

#### Getting search scope activiation types

- [static var automatic: SearchScopeActivation](/documentation/swiftui/searchscopeactivation/automatic)
- [static var onSearchPresentation: SearchScopeActivation](/documentation/swiftui/searchscopeactivation/onsearchpresentation)
- [static var onTextEntry: SearchScopeActivation](/documentation/swiftui/searchscopeactivation/ontextentry)

### Detecting, activating, and dismissing search

- [Managing search interface activation](/documentation/swiftui/managing-search-interface-activation)
- [var isSearching: Bool](/documentation/swiftui/environmentvalues/issearching)
- [var dismissSearch: DismissSearchAction](/documentation/swiftui/environmentvalues/dismisssearch)
- [DismissSearchAction](/documentation/swiftui/dismisssearchaction)

#### Calling the action

- [func callAsFunction()](/documentation/swiftui/dismisssearchaction/callasfunction())
- [func searchable(text:isPresented:placement:prompt:)](/documentation/swiftui/view/searchable(text:ispresented:placement:prompt:))
- [func searchable(text:tokens:isPresented:placement:prompt:token:)](/documentation/swiftui/view/searchable(text:tokens:ispresented:placement:prompt:token:))
- [func searchable(text:editableTokens:isPresented:placement:prompt:token:)](/documentation/swiftui/view/searchable(text:editabletokens:ispresented:placement:prompt:token:))
- [func searchable(text:tokens:suggestedTokens:isPresented:placement:prompt:token:)](/documentation/swiftui/view/searchable(text:tokens:suggestedtokens:ispresented:placement:prompt:token:))

### Displaying toolbar content during search

- [func searchPresentationToolbarBehavior(SearchPresentationToolbarBehavior) -> some View](/documentation/swiftui/view/searchpresentationtoolbarbehavior(_:))
- [SearchPresentationToolbarBehavior](/documentation/swiftui/searchpresentationtoolbarbehavior)

#### Getting toolbar behaviors

- [static var automatic: SearchPresentationToolbarBehavior](/documentation/swiftui/searchpresentationtoolbarbehavior/automatic)
- [static var avoidHidingContent: SearchPresentationToolbarBehavior](/documentation/swiftui/searchpresentationtoolbarbehavior/avoidhidingcontent)

### Searching for text in a view

- [func findNavigator(isPresented: Binding<Bool>) -> some View](/documentation/swiftui/view/findnavigator(ispresented:))
- [func findDisabled(Bool) -> some View](/documentation/swiftui/view/finddisabled(_:))
- [func replaceDisabled(Bool) -> some View](/documentation/swiftui/view/replacedisabled(_:))
- [FindContext](/documentation/swiftui/findcontext)

#### Instance Properties

- [var isPresented: Binding<Bool>?](/documentation/swiftui/findcontext/ispresented)
- [var supportsReplace: Bool](/documentation/swiftui/findcontext/supportsreplace)
- [App extensions](/documentation/swiftui/app-extensions)

### Creating widgets

- [Building Widgets Using WidgetKit and SwiftUI](/documentation/widgetkit/building_widgets_using_widgetkit_and_swiftui)
- [Creating a widget extension](/documentation/widgetkit/creating-a-widget-extension)
- [Keeping a widget up to date](/documentation/widgetkit/keeping-a-widget-up-to-date)
- [Making a configurable widget](/documentation/widgetkit/making-a-configurable-widget)
- [Widget](/documentation/swiftui/widget)

#### Implementing a widget

- [var body: Self.Body](/documentation/swiftui/widget/body-swift.property)
- [Body](/documentation/swiftui/widget/body-swift.associatedtype)

#### Running a widget

- [init()](/documentation/swiftui/widget/init())
- [static func main()](/documentation/swiftui/widget/main())
- [WidgetBundle](/documentation/swiftui/widgetbundle)

#### Implementing a widget bundle

- [var body: Self.Body](/documentation/swiftui/widgetbundle/body-swift.property)
- [Body](/documentation/swiftui/widgetbundle/body-swift.associatedtype)
- [WidgetBundleBuilder](/documentation/swiftui/widgetbundlebuilder)

##### Bundling widgets

- [static func buildBlock() -> some Widget](/documentation/swiftui/widgetbundlebuilder/buildblock())
- [static buildBlock(_:)](/documentation/swiftui/widgetbundlebuilder/buildblock(_:))
- [static buildExpression(_:)](/documentation/swiftui/widgetbundlebuilder/buildexpression(_:))
- [static buildLimitedAvailability(_:)](/documentation/swiftui/widgetbundlebuilder/buildlimitedavailability(_:))
- [static func buildOptional((any Widget & _LimitedAvailabilityWidgetMarker)?) -> some Widget](/documentation/swiftui/widgetbundlebuilder/buildoptional(_:))

#### Running a widget bundle

- [init()](/documentation/swiftui/widgetbundle/init())
- [static func main()](/documentation/swiftui/widgetbundle/main())
- [LimitedAvailabilityConfiguration](/documentation/swiftui/limitedavailabilityconfiguration)
- [WidgetConfiguration](/documentation/swiftui/widgetconfiguration)

#### Implementing a widget

- [var body: Self.Body](/documentation/swiftui/widgetconfiguration/body-swift.property)
- [Body](/documentation/swiftui/widgetconfiguration/body-swift.associatedtype)

#### Setting a name

- [func configurationDisplayName(_:)](/documentation/swiftui/widgetconfiguration/configurationdisplayname(_:))

#### Setting a description

- [func description(_:)](/documentation/swiftui/widgetconfiguration/description(_:))

#### Setting the appearance

- [func supportedFamilies([WidgetFamily]) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/supportedfamilies(_:))
- [func contentMarginsDisabled() -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/contentmarginsdisabled())
- [func disfavoredLocations([WidgetLocation], for: [WidgetFamily]) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/disfavoredlocations(_:for:))
- [func containerBackgroundRemovable(Bool) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/containerbackgroundremovable(_:))

#### Managing background tasks

- [func backgroundTask<D, R>(BackgroundTask<D, R>, action: (D) async -> R) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/backgroundtask(_:action:))
- [func onBackgroundURLSessionEvents(matching:_:)](/documentation/swiftui/widgetconfiguration/onbackgroundurlsessionevents(matching:_:))

#### Instance Methods

- [func associatedKind(String?) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/associatedkind(_:))
- [func promptsForUserConfiguration() -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/promptsforuserconfiguration())
- [func pushHandler(any WidgetPushHandler.Type) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/pushhandler(_:))
- [func supplementalActivityFamilies([ActivityFamily]) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/supplementalactivityfamilies(_:))
- [func supportedMountingStyles([WidgetMountingStyle]) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/supportedmountingstyles(_:))
- [func widgetTexture(WidgetTexture) -> some WidgetConfiguration](/documentation/swiftui/widgetconfiguration/widgettexture(_:))
- [EmptyWidgetConfiguration](/documentation/swiftui/emptywidgetconfiguration)

#### Creating a configuration

- [init()](/documentation/swiftui/emptywidgetconfiguration/init())

### Composing control widgets

- [ControlWidget](/documentation/swiftui/controlwidget)

#### Associated Types

- [Body](/documentation/swiftui/controlwidget/body-swift.associatedtype)

#### Initializers

- [init()](/documentation/swiftui/controlwidget/init())

#### Instance Properties

- [var body: Self.Body](/documentation/swiftui/controlwidget/body-swift.property)

#### Type Methods

- [static func main()](/documentation/swiftui/controlwidget/main())
- [ControlWidgetConfiguration](/documentation/swiftui/controlwidgetconfiguration)

#### Associated Types

- [Body](/documentation/swiftui/controlwidgetconfiguration/body-swift.associatedtype)

#### Instance Properties

- [var body: Self.Body](/documentation/swiftui/controlwidgetconfiguration/body-swift.property)

#### Instance Methods

- [func description(LocalizedStringResource) -> some ControlWidgetConfiguration](/documentation/swiftui/controlwidgetconfiguration/description(_:))
- [func displayName(LocalizedStringResource) -> some ControlWidgetConfiguration](/documentation/swiftui/controlwidgetconfiguration/displayname(_:))
- [func promptsForUserConfiguration() -> some ControlWidgetConfiguration](/documentation/swiftui/controlwidgetconfiguration/promptsforuserconfiguration())
- [func pushHandler(any ControlPushHandler.Type) -> some ControlWidgetConfiguration](/documentation/swiftui/controlwidgetconfiguration/pushhandler(_:))
- [EmptyControlWidgetConfiguration](/documentation/swiftui/emptycontrolwidgetconfiguration)

#### Initializers

- [init()](/documentation/swiftui/emptycontrolwidgetconfiguration/init())
- [ControlWidgetConfigurationBuilder](/documentation/swiftui/controlwidgetconfigurationbuilder)

#### Type Methods

- [static func buildBlock<Content>(Content) -> some ControlWidgetConfiguration](/documentation/swiftui/controlwidgetconfigurationbuilder/buildblock(_:))
- [static func buildExpression<Content>(Content) -> Content](/documentation/swiftui/controlwidgetconfigurationbuilder/buildexpression(_:))
- [ControlWidgetTemplate](/documentation/swiftui/controlwidgettemplate)

#### Associated Types

- [Body](/documentation/swiftui/controlwidgettemplate/body-swift.associatedtype)

#### Instance Properties

- [var body: Self.Body](/documentation/swiftui/controlwidgettemplate/body-swift.property)

#### Instance Methods

- [func disabled(Bool) -> some ControlWidgetTemplate](/documentation/swiftui/controlwidgettemplate/disabled(_:))
- [func privacySensitive(Bool) -> some ControlWidgetTemplate](/documentation/swiftui/controlwidgettemplate/privacysensitive(_:))
- [func tint(Color?) -> some ControlWidgetTemplate](/documentation/swiftui/controlwidgettemplate/tint(_:))
- [EmptyControlWidgetTemplate](/documentation/swiftui/emptycontrolwidgettemplate)

#### Initializers

- [init()](/documentation/swiftui/emptycontrolwidgettemplate/init())
- [ControlWidgetTemplateBuilder](/documentation/swiftui/controlwidgettemplatebuilder)

#### Type Methods

- [static func buildBlock<Content>(Content) -> some ControlWidgetTemplate](/documentation/swiftui/controlwidgettemplatebuilder/buildblock(_:))
- [static func buildExpression<Content>(Content) -> Content](/documentation/swiftui/controlwidgettemplatebuilder/buildexpression(_:))
- [func controlWidgetActionHint(_:)](/documentation/swiftui/view/controlwidgetactionhint(_:))
- [func controlWidgetStatus(_:)](/documentation/swiftui/view/controlwidgetstatus(_:))

### Labeling a widget

- [func widgetLabel(_:)](/documentation/swiftui/view/widgetlabel(_:))
- [func widgetLabel<Label>(label: () -> Label) -> some View](/documentation/swiftui/view/widgetlabel(label:))

### Styling a widget group

- [func accessoryWidgetGroupStyle(AccessoryWidgetGroupStyle) -> some View](/documentation/swiftui/view/accessorywidgetgroupstyle(_:))

### Controlling the accented group

- [func widgetAccentable(Bool) -> some View](/documentation/swiftui/view/widgetaccentable(_:))

### Managing placement in the Dynamic Island

- [func dynamicIsland(verticalPlacement: DynamicIslandExpandedRegionVerticalPlacement) -> some View](/documentation/swiftui/view/dynamicisland(verticalplacement:))

## Data and storage

- [Model data](/documentation/swiftui/model-data)

### Creating and sharing view state

- [Managing user interface state](/documentation/swiftui/managing-user-interface-state)
- [State](/documentation/swiftui/state)

#### Creating a state

- [init(wrappedValue: Value)](/documentation/swiftui/state/init(wrappedvalue:))
- [init(initialValue: Value)](/documentation/swiftui/state/init(initialvalue:))
- [init()](/documentation/swiftui/state/init())

#### Getting the value

- [var wrappedValue: Value](/documentation/swiftui/state/wrappedvalue)
- [var projectedValue: Binding<Value>](/documentation/swiftui/state/projectedvalue)
- [Bindable](/documentation/swiftui/bindable)

#### Creating a bindable value

- [init(Value)](/documentation/swiftui/bindable/init(_:))
- [init(wrappedValue: Value)](/documentation/swiftui/bindable/init(wrappedvalue:))
- [init(projectedValue: Bindable<Value>)](/documentation/swiftui/bindable/init(projectedvalue:))

#### Getting the value

- [var wrappedValue: Value](/documentation/swiftui/bindable/wrappedvalue)
- [var projectedValue: Bindable<Value>](/documentation/swiftui/bindable/projectedvalue)
- [subscript<Subject>(dynamicMember _: ReferenceWritableKeyPath<Value, Subject>) -> Binding<Subject>](/documentation/swiftui/bindable/subscript(dynamicmember:))
- [Binding](/documentation/swiftui/binding)

#### Creating a binding

- [init(_:)](/documentation/swiftui/binding/init(_:))
- [init(projectedValue: Binding<Value>)](/documentation/swiftui/binding/init(projectedvalue:))
- [init(get:set:)](/documentation/swiftui/binding/init(get:set:))
- [static func constant(Value) -> Binding<Value>](/documentation/swiftui/binding/constant(_:))

#### Getting the value

- [var wrappedValue: Value](/documentation/swiftui/binding/wrappedvalue)
- [var projectedValue: Binding<Value>](/documentation/swiftui/binding/projectedvalue)
- [subscript<Subject>(dynamicMember _: WritableKeyPath<Value, Subject>) -> Binding<Subject>](/documentation/swiftui/binding/subscript(dynamicmember:))

#### Managing changes

- [var id: Value.ID](/documentation/swiftui/binding/id)
- [func animation(Animation?) -> Binding<Value>](/documentation/swiftui/binding/animation(_:))
- [func transaction(Transaction) -> Binding<Value>](/documentation/swiftui/binding/transaction(_:))
- [var transaction: Transaction](/documentation/swiftui/binding/transaction)

#### Subscripts

- [subscript(_:)](/documentation/swiftui/binding/subscript(_:))

#### Default Implementations

- [Identifiable Implementations](/documentation/swiftui/binding/identifiable-implementations)

##### Instance Properties

- [var id: Value.ID](/documentation/swiftui/binding/id)

### Creating model data

- [Managing model data in your app](/documentation/swiftui/managing-model-data-in-your-app)
- [Migrating from the Observable Object protocol to the Observable macro](/documentation/swiftui/migrating-from-the-observable-object-protocol-to-the-observable-macro)
- [macro Observable()](/documentation/observation/observable())
- [Monitoring data changes in your app](/documentation/swiftui/monitoring-model-data-changes-in-your-app)
- [StateObject](/documentation/swiftui/stateobject)

#### Creating a state object

- [init(wrappedValue: @autoclosure () -> ObjectType)](/documentation/swiftui/stateobject/init(wrappedvalue:))

#### Getting the value

- [var wrappedValue: ObjectType](/documentation/swiftui/stateobject/wrappedvalue)
- [var projectedValue: ObservedObject<ObjectType>.Wrapper](/documentation/swiftui/stateobject/projectedvalue)
- [ObservedObject](/documentation/swiftui/observedobject)

#### Creating an observed object

- [init(wrappedValue: ObjectType)](/documentation/swiftui/observedobject/init(wrappedvalue:))
- [init(initialValue: ObjectType)](/documentation/swiftui/observedobject/init(initialvalue:))

#### Getting the value

- [var wrappedValue: ObjectType](/documentation/swiftui/observedobject/wrappedvalue)
- [var projectedValue: ObservedObject<ObjectType>.Wrapper](/documentation/swiftui/observedobject/projectedvalue)
- [ObservedObject.Wrapper](/documentation/swiftui/observedobject/wrapper)

##### Subscripts

- [subscript<Subject>(dynamicMember _: ReferenceWritableKeyPath<ObjectType, Subject>) -> Binding<Subject>](/documentation/swiftui/observedobject/wrapper/subscript(dynamicmember:))
- [ObservableObject](/documentation/combine/observableobject)

### Responding to data changes

- [func onChange(of:initial:_:)](/documentation/swiftui/view/onchange(of:initial:_:))
- [func onReceive<P>(P, perform: (P.Output) -> Void) -> some View](/documentation/swiftui/view/onreceive(_:perform:))

### Distributing model data throughout your app

- [func environmentObject<T>(T) -> some View](/documentation/swiftui/view/environmentobject(_:))
- [func environmentObject<T>(T) -> some Scene](/documentation/swiftui/scene/environmentobject(_:))
- [EnvironmentObject](/documentation/swiftui/environmentobject)

#### Creating an environment object

- [init()](/documentation/swiftui/environmentobject/init())

#### Getting the value

- [var wrappedValue: ObjectType](/documentation/swiftui/environmentobject/wrappedvalue)
- [var projectedValue: EnvironmentObject<ObjectType>.Wrapper](/documentation/swiftui/environmentobject/projectedvalue)
- [EnvironmentObject.Wrapper](/documentation/swiftui/environmentobject/wrapper)

##### Getting a binding value

- [subscript<Subject>(dynamicMember _: ReferenceWritableKeyPath<ObjectType, Subject>) -> Binding<Subject>](/documentation/swiftui/environmentobject/wrapper/subscript(dynamicmember:))

### Managing dynamic data

- [DynamicProperty](/documentation/swiftui/dynamicproperty)

#### Updating the value

- [func update()](/documentation/swiftui/dynamicproperty/update())
- [Environment values](/documentation/swiftui/environment-values)

### Accessing environment values

- [Environment](/documentation/swiftui/environment)

#### Creating an environment instance

- [init(_:)](/documentation/swiftui/environment/init(_:))

#### Getting the value

- [var wrappedValue: Value](/documentation/swiftui/environment/wrappedvalue)
- [EnvironmentValues](/documentation/swiftui/environmentvalues)

#### Creating and accessing values

- [init()](/documentation/swiftui/environmentvalues/init())
- [subscript(_:)](/documentation/swiftui/environmentvalues/subscript(_:))
- [var description: String](/documentation/swiftui/environmentvalues/description)

#### Accessibility

- [var accessibilityAssistiveAccessEnabled: Bool](/documentation/swiftui/environmentvalues/accessibilityassistiveaccessenabled)
- [var accessibilityDimFlashingLights: Bool](/documentation/swiftui/environmentvalues/accessibilitydimflashinglights)
- [var accessibilityDifferentiateWithoutColor: Bool](/documentation/swiftui/environmentvalues/accessibilitydifferentiatewithoutcolor)
- [var accessibilityEnabled: Bool](/documentation/swiftui/environmentvalues/accessibilityenabled)
- [var accessibilityInvertColors: Bool](/documentation/swiftui/environmentvalues/accessibilityinvertcolors)
- [var accessibilityLargeContentViewerEnabled: Bool](/documentation/swiftui/environmentvalues/accessibilitylargecontentviewerenabled)
- [var accessibilityPlayAnimatedImages: Bool](/documentation/swiftui/environmentvalues/accessibilityplayanimatedimages)
- [var accessibilityPrefersHeadAnchorAlternative: Bool](/documentation/swiftui/environmentvalues/accessibilityprefersheadanchoralternative)
- [var accessibilityQuickActionsEnabled: Bool](/documentation/swiftui/environmentvalues/accessibilityquickactionsenabled)
- [var accessibilityReduceMotion: Bool](/documentation/swiftui/environmentvalues/accessibilityreducemotion)
- [var accessibilityReduceTransparency: Bool](/documentation/swiftui/environmentvalues/accessibilityreducetransparency)
- [var accessibilityShowButtonShapes: Bool](/documentation/swiftui/environmentvalues/accessibilityshowbuttonshapes)
- [var accessibilitySwitchControlEnabled: Bool](/documentation/swiftui/environmentvalues/accessibilityswitchcontrolenabled)
- [var accessibilityVoiceOverEnabled: Bool](/documentation/swiftui/environmentvalues/accessibilityvoiceoverenabled)
- [var legibilityWeight: LegibilityWeight?](/documentation/swiftui/environmentvalues/legibilityweight)

#### Actions

- [var dismiss: DismissAction](/documentation/swiftui/environmentvalues/dismiss)
- [var dismissSearch: DismissSearchAction](/documentation/swiftui/environmentvalues/dismisssearch)
- [var dismissWindow: DismissWindowAction](/documentation/swiftui/environmentvalues/dismisswindow)
- [var openImmersiveSpace: OpenImmersiveSpaceAction](/documentation/swiftui/environmentvalues/openimmersivespace)
- [var dismissImmersiveSpace: DismissImmersiveSpaceAction](/documentation/swiftui/environmentvalues/dismissimmersivespace)
- [var newDocument: NewDocumentAction](/documentation/swiftui/environmentvalues/newdocument)
- [var openDocument: OpenDocumentAction](/documentation/swiftui/environmentvalues/opendocument)
- [var openURL: OpenURLAction](/documentation/swiftui/environmentvalues/openurl)
- [var openWindow: OpenWindowAction](/documentation/swiftui/environmentvalues/openwindow)
- [var pushWindow: PushWindowAction](/documentation/swiftui/environmentvalues/pushwindow)
- [var purchase: PurchaseAction](/documentation/swiftui/environmentvalues/purchase)
- [var refresh: RefreshAction?](/documentation/swiftui/environmentvalues/refresh)
- [var rename: RenameAction?](/documentation/swiftui/environmentvalues/rename)
- [var resetFocus: ResetFocusAction](/documentation/swiftui/environmentvalues/resetfocus)
- [var openSettings: OpenSettingsAction](/documentation/swiftui/environmentvalues/opensettings)

#### Authentication

- [var authorizationController: AuthorizationController](/documentation/swiftui/environmentvalues/authorizationcontroller)
- [var webAuthenticationSession: WebAuthenticationSession](/documentation/swiftui/environmentvalues/webauthenticationsession)

#### Controls and input

- [var buttonRepeatBehavior: ButtonRepeatBehavior](/documentation/swiftui/environmentvalues/buttonrepeatbehavior)
- [var controlSize: ControlSize](/documentation/swiftui/environmentvalues/controlsize)
- [var defaultWheelPickerItemHeight: CGFloat](/documentation/swiftui/environmentvalues/defaultwheelpickeritemheight)
- [var keyboardShortcut: KeyboardShortcut?](/documentation/swiftui/environmentvalues/keyboardshortcut)
- [var menuIndicatorVisibility: Visibility](/documentation/swiftui/environmentvalues/menuindicatorvisibility)
- [var menuOrder: MenuOrder](/documentation/swiftui/environmentvalues/menuorder)
- [var searchSuggestionsPlacement: SearchSuggestionsPlacement](/documentation/swiftui/environmentvalues/searchsuggestionsplacement)
- [var preferredPencilDoubleTapAction: PencilPreferredAction](/documentation/swiftui/environmentvalues/preferredpencildoubletapaction)
- [var preferredPencilSqueezeAction: PencilPreferredAction](/documentation/swiftui/environmentvalues/preferredpencilsqueezeaction)

#### Display characteristics

- [var appearsActive: Bool](/documentation/swiftui/environmentvalues/appearsactive)
- [var colorScheme: ColorScheme](/documentation/swiftui/environmentvalues/colorscheme)
- [var colorSchemeContrast: ColorSchemeContrast](/documentation/swiftui/environmentvalues/colorschemecontrast)
- [var displayScale: CGFloat](/documentation/swiftui/environmentvalues/displayscale)
- [var horizontalSizeClass: UserInterfaceSizeClass?](/documentation/swiftui/environmentvalues/horizontalsizeclass)
- [var imageScale: Image.Scale](/documentation/swiftui/environmentvalues/imagescale)
- [var pixelLength: CGFloat](/documentation/swiftui/environmentvalues/pixellength)
- [var sidebarRowSize: SidebarRowSize](/documentation/swiftui/environmentvalues/sidebarrowsize)
- [var verticalSizeClass: UserInterfaceSizeClass?](/documentation/swiftui/environmentvalues/verticalsizeclass)
- [var immersiveSpaceDisplacement: Pose3D](/documentation/swiftui/environmentvalues/immersivespacedisplacement)
- [var labelsVisibility: Visibility](/documentation/swiftui/environmentvalues/labelsvisibility)
- [var materialActiveAppearance: MaterialActiveAppearance](/documentation/swiftui/environmentvalues/materialactiveappearance)
- [TabBarPlacement](/documentation/swiftui/tabbarplacement)

##### Type Properties

- [static let bottomBar: TabBarPlacement](/documentation/swiftui/tabbarplacement/bottombar)
- [static let ornament: TabBarPlacement](/documentation/swiftui/tabbarplacement/ornament)
- [static let pageIndicator: TabBarPlacement](/documentation/swiftui/tabbarplacement/pageindicator)
- [static let sidebar: TabBarPlacement](/documentation/swiftui/tabbarplacement/sidebar)
- [static let topBar: TabBarPlacement](/documentation/swiftui/tabbarplacement/topbar)
- [var toolbarLabelStyle: ToolbarLabelStyle?](/documentation/swiftui/environmentvalues/toolbarlabelstyle)

#### Global objects

- [var calendar: Calendar](/documentation/swiftui/environmentvalues/calendar)
- [var documentConfiguration: DocumentConfiguration?](/documentation/swiftui/environmentvalues/documentconfiguration)
- [var locale: Locale](/documentation/swiftui/environmentvalues/locale)
- [var managedObjectContext: NSManagedObjectContext](/documentation/swiftui/environmentvalues/managedobjectcontext)
- [var modelContext: ModelContext](/documentation/swiftui/environmentvalues/modelcontext)
- [var timeZone: TimeZone](/documentation/swiftui/environmentvalues/timezone)
- [var undoManager: UndoManager?](/documentation/swiftui/environmentvalues/undomanager)

#### Scrolling

- [var isScrollEnabled: Bool](/documentation/swiftui/environmentvalues/isscrollenabled)
- [var horizontalScrollIndicatorVisibility: ScrollIndicatorVisibility](/documentation/swiftui/environmentvalues/horizontalscrollindicatorvisibility)
- [var verticalScrollIndicatorVisibility: ScrollIndicatorVisibility](/documentation/swiftui/environmentvalues/verticalscrollindicatorvisibility)
- [var scrollDismissesKeyboardMode: ScrollDismissesKeyboardMode](/documentation/swiftui/environmentvalues/scrolldismisseskeyboardmode)
- [var horizontalScrollBounceBehavior: ScrollBounceBehavior](/documentation/swiftui/environmentvalues/horizontalscrollbouncebehavior)
- [var verticalScrollBounceBehavior: ScrollBounceBehavior](/documentation/swiftui/environmentvalues/verticalscrollbouncebehavior)

#### State

- [var editMode: Binding<EditMode>?](/documentation/swiftui/environmentvalues/editmode)
- [var isActivityFullscreen: Bool](/documentation/swiftui/environmentvalues/isactivityfullscreen)
- [var isEnabled: Bool](/documentation/swiftui/environmentvalues/isenabled)
- [var isFocused: Bool](/documentation/swiftui/environmentvalues/isfocused)
- [var isFocusEffectEnabled: Bool](/documentation/swiftui/environmentvalues/isfocuseffectenabled)
- [var isHoverEffectEnabled: Bool](/documentation/swiftui/environmentvalues/ishovereffectenabled)
- [var isLuminanceReduced: Bool](/documentation/swiftui/environmentvalues/isluminancereduced)
- [var isPresented: Bool](/documentation/swiftui/environmentvalues/ispresented)
- [var isSceneCaptured: Bool](/documentation/swiftui/environmentvalues/isscenecaptured)
- [var isSearching: Bool](/documentation/swiftui/environmentvalues/issearching)
- [var isTabBarShowingSections: Bool](/documentation/swiftui/environmentvalues/istabbarshowingsections)
- [var scenePhase: ScenePhase](/documentation/swiftui/environmentvalues/scenephase)
- [var supportsMultipleWindows: Bool](/documentation/swiftui/environmentvalues/supportsmultiplewindows)

#### StoreKit configuration

- [var displayStoreKitMessage: DisplayMessageAction](/documentation/swiftui/environmentvalues/displaystorekitmessage)
- [var requestReview: RequestReviewAction](/documentation/swiftui/environmentvalues/requestreview)

#### Text styles

- [var allowsTightening: Bool](/documentation/swiftui/environmentvalues/allowstightening)
- [var autocorrectionDisabled: Bool](/documentation/swiftui/environmentvalues/autocorrectiondisabled)
- [var dynamicTypeSize: DynamicTypeSize](/documentation/swiftui/environmentvalues/dynamictypesize)
- [var font: Font?](/documentation/swiftui/environmentvalues/font)
- [var layoutDirection: LayoutDirection](/documentation/swiftui/environmentvalues/layoutdirection)
- [var lineLimit: Int?](/documentation/swiftui/environmentvalues/linelimit)
- [var lineSpacing: CGFloat](/documentation/swiftui/environmentvalues/linespacing)
- [var minimumScaleFactor: CGFloat](/documentation/swiftui/environmentvalues/minimumscalefactor)
- [var multilineTextAlignment: TextAlignment](/documentation/swiftui/environmentvalues/multilinetextalignment)
- [var textCase: Text.Case?](/documentation/swiftui/environmentvalues/textcase)
- [var truncationMode: Text.TruncationMode](/documentation/swiftui/environmentvalues/truncationmode)
- [var textSelectionAffinity: TextSelectionAffinity](/documentation/swiftui/environmentvalues/textselectionaffinity)

#### View attributes

- [var allowedDynamicRange: Image.DynamicRange?](/documentation/swiftui/environmentvalues/alloweddynamicrange)
- [var backgroundMaterial: Material?](/documentation/swiftui/environmentvalues/backgroundmaterial)
- [var backgroundProminence: BackgroundProminence](/documentation/swiftui/environmentvalues/backgroundprominence)
- [var backgroundStyle: AnyShapeStyle?](/documentation/swiftui/environmentvalues/backgroundstyle)
- [var badgeProminence: BadgeProminence](/documentation/swiftui/environmentvalues/badgeprominence)
- [var contentTransition: ContentTransition](/documentation/swiftui/environmentvalues/contenttransition)
- [var contentTransitionAddsDrawingGroup: Bool](/documentation/swiftui/environmentvalues/contenttransitionaddsdrawinggroup)
- [var defaultMinListHeaderHeight: CGFloat?](/documentation/swiftui/environmentvalues/defaultminlistheaderheight)
- [var defaultMinListRowHeight: CGFloat](/documentation/swiftui/environmentvalues/defaultminlistrowheight)
- [var headerProminence: Prominence](/documentation/swiftui/environmentvalues/headerprominence)
- [var physicalMetrics: PhysicalMetricsConverter](/documentation/swiftui/environmentvalues/physicalmetrics)
- [var realityKitScene: Scene?](/documentation/swiftui/environmentvalues/realitykitscene)
- [var realityViewCameraControls: CameraControls](/documentation/swiftui/environmentvalues/realityviewcameracontrols)
- [var redactionReasons: RedactionReasons](/documentation/swiftui/environmentvalues/redactionreasons)
- [var springLoadingBehavior: SpringLoadingBehavior](/documentation/swiftui/environmentvalues/springloadingbehavior)
- [var symbolRenderingMode: SymbolRenderingMode?](/documentation/swiftui/environmentvalues/symbolrenderingmode)
- [var symbolVariants: SymbolVariants](/documentation/swiftui/environmentvalues/symbolvariants)
- [var worldTrackingLimitations: Set<WorldTrackingLimitation>](/documentation/swiftui/environmentvalues/worldtrackinglimitations)

#### Widgets

- [var showsWidgetContainerBackground: Bool](/documentation/swiftui/environmentvalues/showswidgetcontainerbackground)
- [var showsWidgetLabel: Bool](/documentation/swiftui/environmentvalues/showswidgetlabel)
- [var widgetFamily: WidgetFamily](/documentation/swiftui/environmentvalues/widgetfamily)
- [var widgetRenderingMode: WidgetRenderingMode](/documentation/swiftui/environmentvalues/widgetrenderingmode)
- [var widgetContentMargins: EdgeInsets](/documentation/swiftui/environmentvalues/widgetcontentmargins)

#### Deprecated environment values

- [var disableAutocorrection: Bool?](/documentation/swiftui/environmentvalues/disableautocorrection)
- [var sizeCategory: ContentSizeCategory](/documentation/swiftui/environmentvalues/sizecategory)
- [var presentationMode: Binding<PresentationMode>](/documentation/swiftui/environmentvalues/presentationmode)
- [PresentationMode](/documentation/swiftui/presentationmode)

##### Checking presentation

- [var isPresented: Bool](/documentation/swiftui/presentationmode/ispresented)

##### Dismissing presentation

- [func dismiss()](/documentation/swiftui/presentationmode/dismiss())
- [var complicationRenderingMode: ComplicationRenderingMode](/documentation/swiftui/environmentvalues/complicationrenderingmode)
- [var controlActiveState: ControlActiveState](/documentation/swiftui/environmentvalues/controlactivestate)

#### Instance Properties

- [var accessibilityShowBorders: Bool](/documentation/swiftui/environmentvalues/accessibilityshowborders)
- [var activityFamily: ActivityFamily](/documentation/swiftui/environmentvalues/activityfamily)
- [var buttonSizing: ButtonSizing](/documentation/swiftui/environmentvalues/buttonsizing)
- [var credentialDataManager: CredentialDataManager](/documentation/swiftui/environmentvalues/credentialdatamanager)
- [var credentialExportManager: ASCredentialExportManager](/documentation/swiftui/environmentvalues/credentialexportmanager)
- [var credentialImportManager: ASCredentialImportManager](/documentation/swiftui/environmentvalues/credentialimportmanager)
- [var devicePickerSupports: DevicePickerSupportedAction](/documentation/swiftui/environmentvalues/devicepickersupports)
- [var findContext: FindContext?](/documentation/swiftui/environmentvalues/findcontext)
- [var fontResolutionContext: Font.Context](/documentation/swiftui/environmentvalues/fontresolutioncontext)
- [var imagePlaygroundAllowedGenerationStyles: [ImagePlaygroundStyle]](/documentation/swiftui/environmentvalues/imageplaygroundallowedgenerationstyles)
- [var imagePlaygroundOptions: ImagePlaygroundOptions](/documentation/swiftui/environmentvalues/imageplaygroundoptions) **Beta**
- [var imagePlaygroundPersonalizationPolicy: ImagePlaygroundPersonalizationPolicy](/documentation/swiftui/environmentvalues/imageplaygroundpersonalizationpolicy)
- [var imagePlaygroundSelectedGenerationStyle: ImagePlaygroundStyle](/documentation/swiftui/environmentvalues/imageplaygroundselectedgenerationstyle)
- [var isActivityUpdateReduced: Bool](/documentation/swiftui/environmentvalues/isactivityupdatereduced)
- [var isUserAuthenticationEnabled: Bool](/documentation/swiftui/environmentvalues/isuserauthenticationenabled)
- [var labelIconToTitleSpacing: CGFloat?](/documentation/swiftui/environmentvalues/labelicontotitlespacing)
- [var labelReservedIconWidth: CGFloat?](/documentation/swiftui/environmentvalues/labelreservediconwidth)
- [var levelOfDetail: LevelOfDetail](/documentation/swiftui/environmentvalues/levelofdetail)
- [var lineHeight: AttributedString.LineHeight?](/documentation/swiftui/environmentvalues/lineheight)
- [var navigationLinkIndicatorVisibility: Visibility](/documentation/swiftui/environmentvalues/navigationlinkindicatorvisibility)
- [var openFoveatedStreamingSpace: OpenFoveatedStreamingSpaceAction](/documentation/swiftui/environmentvalues/openfoveatedstreamingspace) **Beta**
- [var remoteDeviceIdentifier: RemoteDeviceIdentifier?](/documentation/swiftui/environmentvalues/remotedeviceidentifier)
- [var requestAgeRange: DeclaredAgeRangeAction](/documentation/swiftui/environmentvalues/requestagerange)
- [var showSignificantUpdateAcknowledgement: SignificantUpdateAction](/documentation/swiftui/environmentvalues/showsignificantupdateacknowledgement) **Beta**
- [var supportedActivityFamilies: Set<ActivityFamily>](/documentation/swiftui/environmentvalues/supportedactivityfamilies)
- [var supportsImagePlayground: Bool](/documentation/swiftui/environmentvalues/supportsimageplayground)
- [var supportsRemoteScenes: Bool](/documentation/swiftui/environmentvalues/supportsremotescenes)
- [var surfaceSnappingInfo: SurfaceSnappingInfo](/documentation/swiftui/environmentvalues/surfacesnappinginfo)
- [var symbolColorRenderingMode: SymbolColorRenderingMode?](/documentation/swiftui/environmentvalues/symbolcolorrenderingmode)
- [var symbolVariableValueMode: SymbolVariableValueMode?](/documentation/swiftui/environmentvalues/symbolvariablevaluemode)
- [var tabBarPlacement: TabBarPlacement?](/documentation/swiftui/environmentvalues/tabbarplacement)
- [var tabViewBottomAccessoryPlacement: TabViewBottomAccessoryPlacement?](/documentation/swiftui/environmentvalues/tabviewbottomaccessoryplacement)
- [var windowClippingMargins: EdgeInsets3D](/documentation/swiftui/environmentvalues/windowclippingmargins)
- [var writingToolsBehavior: WritingToolsBehavior?](/documentation/swiftui/environmentvalues/writingtoolsbehavior)

### Creating custom environment values

- [macro Entry()](/documentation/swiftui/entry())
- [EnvironmentKey](/documentation/swiftui/environmentkey)

#### Getting the default value

- [static var defaultValue: Self.Value](/documentation/swiftui/environmentkey/defaultvalue)
- [Value](/documentation/swiftui/environmentkey/value)

### Modifying the environment of a view

- [func environment<T>(T?) -> some View](/documentation/swiftui/view/environment(_:))
- [func environment<V>(WritableKeyPath<EnvironmentValues, V>, V) -> some View](/documentation/swiftui/view/environment(_:_:))
- [func transformEnvironment<V>(WritableKeyPath<EnvironmentValues, V>, transform: (inout V) -> Void) -> some View](/documentation/swiftui/view/transformenvironment(_:transform:))

### Modifying the environment of a scene

- [func environment<T>(T?) -> some Scene](/documentation/swiftui/scene/environment(_:))
- [func environment<V>(WritableKeyPath<EnvironmentValues, V>, V) -> some Scene](/documentation/swiftui/scene/environment(_:_:))
- [func transformEnvironment<V>(WritableKeyPath<EnvironmentValues, V>, transform: (inout V) -> Void) -> some Scene](/documentation/swiftui/scene/transformenvironment(_:transform:))
- [Preferences](/documentation/swiftui/preferences)

### Setting preferences

- [func preference<K>(key: K.Type, value: K.Value) -> some View](/documentation/swiftui/view/preference(key:value:))
- [func transformPreference<K>(K.Type, (inout K.Value) -> Void) -> some View](/documentation/swiftui/view/transformpreference(_:_:))

### Creating custom preferences

- [PreferenceKey](/documentation/swiftui/preferencekey)

#### Getting the default value

- [static var defaultValue: Self.Value](/documentation/swiftui/preferencekey/defaultvalue)
- [Value](/documentation/swiftui/preferencekey/value)

#### Combining preferences

- [static func reduce(value: inout Self.Value, nextValue: () -> Self.Value)](/documentation/swiftui/preferencekey/reduce(value:nextvalue:))

### Setting preferences based on geometry

- [func anchorPreference<A, K>(key: K.Type, value: Anchor<A>.Source, transform: (Anchor<A>) -> K.Value) -> some View](/documentation/swiftui/view/anchorpreference(key:value:transform:))
- [func transformAnchorPreference<A, K>(key: K.Type, value: Anchor<A>.Source, transform: (inout K.Value, Anchor<A>) -> Void) -> some View](/documentation/swiftui/view/transformanchorpreference(key:value:transform:))

### Responding to changes in preferences

- [func onPreferenceChange<K>(K.Type, perform: (K.Value) -> Void) -> some View](/documentation/swiftui/view/onpreferencechange(_:perform:))

### Generating backgrounds and overlays from preferences

- [func backgroundPreferenceValue<Key, T>(Key.Type, (Key.Value) -> T) -> some View](/documentation/swiftui/view/backgroundpreferencevalue(_:_:))
- [func backgroundPreferenceValue<K, V>(K.Type, alignment: Alignment, (K.Value) -> V) -> some View](/documentation/swiftui/view/backgroundpreferencevalue(_:alignment:_:))
- [func overlayPreferenceValue<Key, T>(Key.Type, (Key.Value) -> T) -> some View](/documentation/swiftui/view/overlaypreferencevalue(_:_:))
- [func overlayPreferenceValue<K, V>(K.Type, alignment: Alignment, (K.Value) -> V) -> some View](/documentation/swiftui/view/overlaypreferencevalue(_:alignment:_:))
- [Persistent storage](/documentation/swiftui/persistent-storage)

### Saving state across app launches

- [Restoring your app’s state with SwiftUI](/documentation/swiftui/restoring-your-app-s-state-with-swiftui)
- [func defaultAppStorage(UserDefaults) -> some View](/documentation/swiftui/view/defaultappstorage(_:))
- [AppStorage](/documentation/swiftui/appstorage)

#### Storing a value

- [init(wrappedValue:_:store:)](/documentation/swiftui/appstorage/init(wrappedvalue:_:store:))
- [init(_:store:)](/documentation/swiftui/appstorage/init(_:store:))

#### Getting the value

- [var wrappedValue: Value](/documentation/swiftui/appstorage/wrappedvalue)
- [var projectedValue: Binding<Value>](/documentation/swiftui/appstorage/projectedvalue)
- [SceneStorage](/documentation/swiftui/scenestorage)

#### Storing a value

- [init(wrappedValue:_:)](/documentation/swiftui/scenestorage/init(wrappedvalue:_:))
- [init(_:)](/documentation/swiftui/scenestorage/init(_:))

#### Getting the value

- [var wrappedValue: Value](/documentation/swiftui/scenestorage/wrappedvalue)
- [var projectedValue: Binding<Value>](/documentation/swiftui/scenestorage/projectedvalue)

#### Initializers

- [init(wrappedValue: Value, String, store: UserDefaults?)](/documentation/swiftui/scenestorage/init(wrappedvalue:_:store:))

### Accessing Core Data

- [Loading and displaying a large data feed](/documentation/swiftui/loading-and-displaying-a-large-data-feed)
- [var managedObjectContext: NSManagedObjectContext](/documentation/swiftui/environmentvalues/managedobjectcontext)
- [FetchRequest](/documentation/swiftui/fetchrequest)

#### Creating a fetch request

- [init(sortDescriptors:predicate:animation:)](/documentation/swiftui/fetchrequest/init(sortdescriptors:predicate:animation:))
- [init(entity: NSEntityDescription, sortDescriptors: [NSSortDescriptor], predicate: NSPredicate?, animation: Animation?)](/documentation/swiftui/fetchrequest/init(entity:sortdescriptors:predicate:animation:))

#### Creating a fully configured fetch request

- [init(fetchRequest: NSFetchRequest<Result>, animation: Animation?)](/documentation/swiftui/fetchrequest/init(fetchrequest:animation:))
- [init(fetchRequest: NSFetchRequest<Result>, transaction: Transaction)](/documentation/swiftui/fetchrequest/init(fetchrequest:transaction:))

#### Configuring a request dynamically

- [FetchRequest.Configuration](/documentation/swiftui/fetchrequest/configuration)

##### Setting a predicate

- [var nsPredicate: NSPredicate?](/documentation/swiftui/fetchrequest/configuration/nspredicate)

##### Setting sort descriptors

- [var sortDescriptors: [SortDescriptor<Result>]](/documentation/swiftui/fetchrequest/configuration/sortdescriptors)
- [var nsSortDescriptors: [NSSortDescriptor]](/documentation/swiftui/fetchrequest/configuration/nssortdescriptors)
- [var projectedValue: Binding<FetchRequest<Result>.Configuration>](/documentation/swiftui/fetchrequest/projectedvalue)

#### Getting the fetched results

- [func update()](/documentation/swiftui/fetchrequest/update())
- [var wrappedValue: FetchedResults<Result>](/documentation/swiftui/fetchrequest/wrappedvalue)

#### Default Implementations

- [DynamicProperty Implementations](/documentation/swiftui/fetchrequest/dynamicproperty-implementations)

##### Instance Methods

- [func update()](/documentation/swiftui/fetchrequest/update())
- [FetchedResults](/documentation/swiftui/fetchedresults)

#### Configuring the associated fetch request

- [var nsPredicate: NSPredicate?](/documentation/swiftui/fetchedresults/nspredicate)
- [var sortDescriptors: [SortDescriptor<Result>]](/documentation/swiftui/fetchedresults/sortdescriptors)
- [var nsSortDescriptors: [NSSortDescriptor]](/documentation/swiftui/fetchedresults/nssortdescriptors)

#### Getting indices

- [var startIndex: Int](/documentation/swiftui/fetchedresults/startindex)
- [var endIndex: Int](/documentation/swiftui/fetchedresults/endindex)

#### Getting results

- [subscript(Int) -> Result](/documentation/swiftui/fetchedresults/subscript(_:))
- [SectionedFetchRequest](/documentation/swiftui/sectionedfetchrequest)

#### Creating a fetch request

- [init(sectionIdentifier:sortDescriptors:predicate:animation:)](/documentation/swiftui/sectionedfetchrequest/init(sectionidentifier:sortdescriptors:predicate:animation:))
- [init(entity: NSEntityDescription, sectionIdentifier: KeyPath<Result, SectionIdentifier>, sortDescriptors: [NSSortDescriptor], predicate: NSPredicate?, animation: Animation?)](/documentation/swiftui/sectionedfetchrequest/init(entity:sectionidentifier:sortdescriptors:predicate:animation:))

#### Creating a fully configured fetch request

- [init(fetchRequest: NSFetchRequest<Result>, sectionIdentifier: KeyPath<Result, SectionIdentifier>, animation: Animation?)](/documentation/swiftui/sectionedfetchrequest/init(fetchrequest:sectionidentifier:animation:))
- [init(fetchRequest: NSFetchRequest<Result>, sectionIdentifier: KeyPath<Result, SectionIdentifier>, transaction: Transaction)](/documentation/swiftui/sectionedfetchrequest/init(fetchrequest:sectionidentifier:transaction:))

#### Configuring a request dynamically

- [SectionedFetchRequest.Configuration](/documentation/swiftui/sectionedfetchrequest/configuration)

##### Setting the section identifier

- [var sectionIdentifier: KeyPath<Result, SectionIdentifier>](/documentation/swiftui/sectionedfetchrequest/configuration/sectionidentifier)

##### Setting a predicate

- [var nsPredicate: NSPredicate?](/documentation/swiftui/sectionedfetchrequest/configuration/nspredicate)

##### Setting sort descriptors

- [var sortDescriptors: [SortDescriptor<Result>]](/documentation/swiftui/sectionedfetchrequest/configuration/sortdescriptors)
- [var nsSortDescriptors: [NSSortDescriptor]](/documentation/swiftui/sectionedfetchrequest/configuration/nssortdescriptors)
- [var projectedValue: Binding<SectionedFetchRequest<SectionIdentifier, Result>.Configuration>](/documentation/swiftui/sectionedfetchrequest/projectedvalue)

#### Getting the fetched results

- [func update()](/documentation/swiftui/sectionedfetchrequest/update())
- [var wrappedValue: SectionedFetchResults<SectionIdentifier, Result>](/documentation/swiftui/sectionedfetchrequest/wrappedvalue)

#### Default Implementations

- [DynamicProperty Implementations](/documentation/swiftui/sectionedfetchrequest/dynamicproperty-implementations)

##### Instance Methods

- [func update()](/documentation/swiftui/sectionedfetchrequest/update())
- [SectionedFetchResults](/documentation/swiftui/sectionedfetchresults)

#### Configuring the associated sectioned fetch request

- [var nsPredicate: NSPredicate?](/documentation/swiftui/sectionedfetchresults/nspredicate)
- [var sortDescriptors: [SortDescriptor<Result>]](/documentation/swiftui/sectionedfetchresults/sortdescriptors)
- [var nsSortDescriptors: [NSSortDescriptor]](/documentation/swiftui/sectionedfetchresults/nssortdescriptors)
- [var sectionIdentifier: KeyPath<Result, SectionIdentifier>](/documentation/swiftui/sectionedfetchresults/sectionidentifier)
- [SectionedFetchResults.Section](/documentation/swiftui/sectionedfetchresults/section)

##### Identifying the section

- [let id: SectionIdentifier](/documentation/swiftui/sectionedfetchresults/section/id)

##### Getting indices

- [var startIndex: Int](/documentation/swiftui/sectionedfetchresults/section/startindex)
- [var endIndex: Int](/documentation/swiftui/sectionedfetchresults/section/endindex)

##### Getting results

- [subscript(Int) -> Result](/documentation/swiftui/sectionedfetchresults/section/subscript(_:))

#### Getting indices

- [var startIndex: Int](/documentation/swiftui/sectionedfetchresults/startindex)
- [var endIndex: Int](/documentation/swiftui/sectionedfetchresults/endindex)

#### Getting results

- [subscript(Int) -> SectionedFetchResults<SectionIdentifier, Result>.Section](/documentation/swiftui/sectionedfetchresults/subscript(_:))

## Views

- [View fundamentals](/documentation/swiftui/view-fundamentals)

### Creating a view

- [Declaring a custom view](/documentation/swiftui/declaring-a-custom-view)
- [View](/documentation/swiftui/view)

#### Implementing a custom view

- [var body: Self.Body](/documentation/swiftui/view/body-8kl5o)
- [Body](/documentation/swiftui/view/body-swift.associatedtype)
- [func modifier<T>(T) -> ModifiedContent<Self, T>](/documentation/swiftui/view/modifier(_:))
- [Previews in Xcode](/documentation/swiftui/previews-in-xcode)

##### Essentials

- [Previewing your app’s interface in Xcode](/documentation/xcode/previewing-your-apps-interface-in-xcode)

##### Creating a preview

- [macro Preview(String?, body: () -> any View)](/documentation/swiftui/preview(_:body:))
- [macro Preview(String?, traits: PreviewTrait<Preview.ViewTraits>, PreviewTrait<Preview.ViewTraits>..., body: () -> any View)](/documentation/swiftui/preview(_:traits:_:body:))
- [macro Preview(String?, traits: PreviewTrait<Preview.ViewTraits>..., body: () -> any View, cameras: () -> [PreviewCamera])](/documentation/swiftui/preview(_:traits:body:cameras:))

##### Creating a preview in the context of a scene

- [macro Preview<Style>(String?, immersionStyle: Style, traits: PreviewTrait<Preview.ViewTraits>..., body: () -> any View)](/documentation/swiftui/preview(_:immersionstyle:traits:body:))
- [macro Preview<Style>(String?, immersionStyle: Style, traits: PreviewTrait<Preview.ViewTraits>..., body: () -> any View, cameras: () -> [PreviewCamera])](/documentation/swiftui/preview(_:immersionstyle:traits:body:cameras:))
- [macro Preview<Style>(String?, windowStyle: Style, traits: PreviewTrait<Preview.ViewTraits>..., body: () -> any View)](/documentation/swiftui/preview(_:windowstyle:traits:body:))
- [macro Preview<Style>(String?, windowStyle: Style, traits: PreviewTrait<Preview.ViewTraits>..., body: () -> any View, cameras: () -> [PreviewCamera])](/documentation/swiftui/preview(_:windowstyle:traits:body:cameras:))

##### Defining a preview

- [macro Previewable()](/documentation/swiftui/previewable())
- [PreviewProvider](/documentation/swiftui/previewprovider)

###### Creating a preview

- [static var previews: Self.Previews](/documentation/swiftui/previewprovider/previews-swift.type.property)
- [Previews](/documentation/swiftui/previewprovider/previews-swift.associatedtype)

###### Specifying the platform

- [static var platform: PreviewPlatform?](/documentation/swiftui/previewprovider/platform)
- [PreviewPlatform](/documentation/swiftui/previewplatform)

###### Getting an operating system

- [case iOS](/documentation/swiftui/previewplatform/ios)
- [case macOS](/documentation/swiftui/previewplatform/macos)
- [case tvOS](/documentation/swiftui/previewplatform/tvos)
- [case watchOS](/documentation/swiftui/previewplatform/watchos)
- [func previewDisplayName(String?) -> some View](/documentation/swiftui/view/previewdisplayname(_:))
- [PreviewModifier](/documentation/swiftui/previewmodifier)

###### Associated Types

- [Body](/documentation/swiftui/previewmodifier/body)
- [Context](/documentation/swiftui/previewmodifier/context)

###### Instance Methods

- [func body(content: Self.Content, context: Self.Context) -> Self.Body](/documentation/swiftui/previewmodifier/body(content:context:))

###### Type Aliases

- [PreviewModifier.Content](/documentation/swiftui/previewmodifier/content)

###### Type Methods

- [static func makeSharedContext() async throws -> Self.Context](/documentation/swiftui/previewmodifier/makesharedcontext())
- [PreviewModifierContent](/documentation/swiftui/previewmodifiercontent)

##### Customizing a preview

- [func previewDevice(PreviewDevice?) -> some View](/documentation/swiftui/view/previewdevice(_:))
- [PreviewDevice](/documentation/swiftui/previewdevice)
- [func previewLayout(PreviewLayout) -> some View](/documentation/swiftui/view/previewlayout(_:))
- [func previewInterfaceOrientation(InterfaceOrientation) -> some View](/documentation/swiftui/view/previewinterfaceorientation(_:))
- [InterfaceOrientation](/documentation/swiftui/interfaceorientation)

###### Getting an orientation

- [static let portrait: InterfaceOrientation](/documentation/swiftui/interfaceorientation/portrait)
- [static let portraitUpsideDown: InterfaceOrientation](/documentation/swiftui/interfaceorientation/portraitupsidedown)
- [static let landscapeLeft: InterfaceOrientation](/documentation/swiftui/interfaceorientation/landscapeleft)
- [static let landscapeRight: InterfaceOrientation](/documentation/swiftui/interfaceorientation/landscaperight)

##### Setting a context

- [func previewContext<C>(C) -> some View](/documentation/swiftui/view/previewcontext(_:))
- [PreviewContext](/documentation/swiftui/previewcontext)

###### Accessing a preview context

- [subscript<Key>(Key.Type) -> Key.Value](/documentation/swiftui/previewcontext/subscript(_:))
- [PreviewContextKey](/documentation/swiftui/previewcontextkey)

###### Setting a default

- [static var defaultValue: Self.Value](/documentation/swiftui/previewcontextkey/defaultvalue)
- [Value](/documentation/swiftui/previewcontextkey/value)

##### Building in debug mode

- [DebugReplaceableView](/documentation/swiftui/debugreplaceableview)

#### Configuring view elements

- [Accessibility modifiers](/documentation/swiftui/view-accessibility)

##### Labels

- [func accessibilityLabel(_:)](/documentation/swiftui/view/accessibilitylabel(_:))
- [func accessibilityLabel(_:isEnabled:)](/documentation/swiftui/view/accessibilitylabel(_:isenabled:))
- [func accessibilityLabel<V>(content: (PlaceholderContentView<Self>) -> V) -> some View](/documentation/swiftui/view/accessibilitylabel(content:))
- [func accessibilityInputLabels(_:)](/documentation/swiftui/view/accessibilityinputlabels(_:))
- [func accessibilityInputLabels(_:isEnabled:)](/documentation/swiftui/view/accessibilityinputlabels(_:isenabled:))
- [func accessibilityLabeledPair<ID>(role: AccessibilityLabeledPairRole, id: ID, in: Namespace.ID) -> some View](/documentation/swiftui/view/accessibilitylabeledpair(role:id:in:))

##### Values

- [func accessibilityValue(_:)](/documentation/swiftui/view/accessibilityvalue(_:))
- [func accessibilityValue(_:isEnabled:)](/documentation/swiftui/view/accessibilityvalue(_:isenabled:))

##### Hints

- [func accessibilityHint(_:)](/documentation/swiftui/view/accessibilityhint(_:))
- [func accessibilityHint(_:isEnabled:)](/documentation/swiftui/view/accessibilityhint(_:isenabled:))

##### Actions

- [func accessibilityAction(AccessibilityActionKind, () -> Void) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityaction(_:_:))
- [func accessibilityActions<Content>(() -> Content) -> some View](/documentation/swiftui/view/accessibilityactions(_:))
- [func accessibilityAction(named:_:)](/documentation/swiftui/view/accessibilityaction(named:_:))
- [func accessibilityAction<Label>(action: () -> Void, label: () -> Label) -> some View](/documentation/swiftui/view/accessibilityaction(action:label:))
- [func accessibilityAction<I, Label>(intent: I, label: () -> Label) -> some View](/documentation/swiftui/view/accessibilityaction(intent:label:))
- [func accessibilityAction<I>(AccessibilityActionKind, intent: I) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityaction(_:intent:))
- [func accessibilityAction(named:intent:)](/documentation/swiftui/view/accessibilityaction(named:intent:))
- [func accessibilityAdjustableAction((AccessibilityAdjustmentDirection) -> Void) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityadjustableaction(_:))
- [func accessibilityScrollAction((Edge) -> Void) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityscrollaction(_:))

##### Gestures

- [func accessibilityActivationPoint(_:)](/documentation/swiftui/view/accessibilityactivationpoint(_:))
- [func accessibilityActivationPoint(_:isEnabled:)](/documentation/swiftui/view/accessibilityactivationpoint(_:isenabled:))
- [func accessibilityDragPoint(_:description:)](/documentation/swiftui/view/accessibilitydragpoint(_:description:))
- [func accessibilityDragPoint(_:description:isEnabled:)](/documentation/swiftui/view/accessibilitydragpoint(_:description:isenabled:))
- [func accessibilityDropPoint(_:description:)](/documentation/swiftui/view/accessibilitydroppoint(_:description:))
- [func accessibilityDropPoint(_:description:isEnabled:)](/documentation/swiftui/view/accessibilitydroppoint(_:description:isenabled:))
- [func accessibilityDirectTouch(Bool, options: AccessibilityDirectTouchOptions) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilitydirecttouch(_:options:))
- [func accessibilityZoomAction((AccessibilityZoomGestureAction) -> Void) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityzoomaction(_:))

##### Elements

- [func accessibilityElement(children: AccessibilityChildBehavior) -> some View](/documentation/swiftui/view/accessibilityelement(children:))
- [func accessibilityChildren<V>(children: () -> V) -> some View](/documentation/swiftui/view/accessibilitychildren(children:))
- [func accessibilityHidden(Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityhidden(_:))
- [func accessibilityHidden(Bool, isEnabled: Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityhidden(_:isenabled:))

##### Custom controls

- [func accessibilityRepresentation<V>(representation: () -> V) -> some View](/documentation/swiftui/view/accessibilityrepresentation(representation:))
- [func accessibilityRespondsToUserInteraction(Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityrespondstouserinteraction(_:))
- [func accessibilityRespondsToUserInteraction(Bool, isEnabled: Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityrespondstouserinteraction(_:isenabled:))

##### Custom content

- [func accessibilityCustomContent(_:_:importance:)](/documentation/swiftui/view/accessibilitycustomcontent(_:_:importance:))

##### Working with rotors

- [func accessibilityRotor(_:entries:)](/documentation/swiftui/view/accessibilityrotor(_:entries:))
- [func accessibilityRotor(_:entries:entryID:entryLabel:)](/documentation/swiftui/view/accessibilityrotor(_:entries:entryid:entrylabel:))
- [func accessibilityRotor(_:entries:entryLabel:)](/documentation/swiftui/view/accessibilityrotor(_:entries:entrylabel:))
- [func accessibilityRotor(_:textRanges:)](/documentation/swiftui/view/accessibilityrotor(_:textranges:))

##### Configuring rotors

- [func accessibilityRotorEntry<ID>(id: ID, in: Namespace.ID) -> some View](/documentation/swiftui/view/accessibilityrotorentry(id:in:))
- [func accessibilityLinkedGroup<ID>(id: ID, in: Namespace.ID) -> some View](/documentation/swiftui/view/accessibilitylinkedgroup(id:in:))
- [func accessibilitySortPriority(Double) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilitysortpriority(_:))

##### Focus

- [func accessibilityFocused(AccessibilityFocusState<Bool>.Binding) -> some View](/documentation/swiftui/view/accessibilityfocused(_:))
- [func accessibilityFocused<Value>(AccessibilityFocusState<Value>.Binding, equals: Value) -> some View](/documentation/swiftui/view/accessibilityfocused(_:equals:))

##### Traits

- [func accessibilityAddTraits(AccessibilityTraits) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityaddtraits(_:))
- [func accessibilityRemoveTraits(AccessibilityTraits) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityremovetraits(_:))

##### Identity

- [func accessibilityIdentifier(String) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityidentifier(_:))
- [func accessibilityIdentifier(String, isEnabled: Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityidentifier(_:isenabled:))

##### Color inversion

- [func accessibilityIgnoresInvertColors(Bool) -> some View](/documentation/swiftui/view/accessibilityignoresinvertcolors(_:))

##### Content descriptions

- [func accessibilityTextContentType(AccessibilityTextContentType) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilitytextcontenttype(_:))
- [func accessibilityHeading(AccessibilityHeadingLevel) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityheading(_:))

##### VoiceOver

- [func speechAdjustedPitch(Double) -> some View](/documentation/swiftui/view/speechadjustedpitch(_:))
- [func speechAlwaysIncludesPunctuation(Bool) -> some View](/documentation/swiftui/view/speechalwaysincludespunctuation(_:))
- [func speechAnnouncementsQueued(Bool) -> some View](/documentation/swiftui/view/speechannouncementsqueued(_:))
- [func speechSpellsOutCharacters(Bool) -> some View](/documentation/swiftui/view/speechspellsoutcharacters(_:))

##### Charts

- [func accessibilityChartDescriptor<R>(R) -> some View](/documentation/swiftui/view/accessibilitychartdescriptor(_:))

##### Large content

- [func accessibilityShowsLargeContentViewer() -> some View](/documentation/swiftui/view/accessibilityshowslargecontentviewer())
- [func accessibilityShowsLargeContentViewer<V>(() -> V) -> some View](/documentation/swiftui/view/accessibilityshowslargecontentviewer(_:))

##### Quick actions

- [func accessibilityQuickAction<Style, Content>(style: Style, content: () -> Content) -> some View](/documentation/swiftui/view/accessibilityquickaction(style:content:))
- [func accessibilityQuickAction<Style, Content>(style: Style, isActive: Binding<Bool>, content: () -> Content) -> some View](/documentation/swiftui/view/accessibilityquickaction(style:isactive:content:))
- [Appearance modifiers](/documentation/swiftui/view-appearance)

##### Colors and patterns

- [func backgroundStyle<S>(S) -> some View](/documentation/swiftui/view/backgroundstyle(_:))
- [func foregroundStyle<S>(S) -> some View](/documentation/swiftui/view/foregroundstyle(_:))
- [func foregroundStyle<S1, S2>(S1, S2) -> some View](/documentation/swiftui/view/foregroundstyle(_:_:))
- [func foregroundStyle<S1, S2, S3>(S1, S2, S3) -> some View](/documentation/swiftui/view/foregroundstyle(_:_:_:))
- [func allowedDynamicRange(Image.DynamicRange?) -> some View](/documentation/swiftui/view/alloweddynamicrange(_:))

##### Tint

- [func tint(_:)](/documentation/swiftui/view/tint(_:))
- [func listRowSeparatorTint(Color?, edges: VerticalEdge.Set) -> some View](/documentation/swiftui/view/listrowseparatortint(_:edges:))
- [func listSectionSeparatorTint(Color?, edges: VerticalEdge.Set) -> some View](/documentation/swiftui/view/listsectionseparatortint(_:edges:))
- [func listItemTint(_:)](/documentation/swiftui/view/listitemtint(_:))

##### Light and dark appearance

- [func preferredColorScheme(ColorScheme?) -> some View](/documentation/swiftui/view/preferredcolorscheme(_:))
- [func preferredSurroundingsEffect(SurroundingsEffect?) -> some View](/documentation/swiftui/view/preferredsurroundingseffect(_:))

##### Foreground elements

- [func border<S>(S, width: CGFloat) -> some View](/documentation/swiftui/view/border(_:width:))
- [func overlay<V>(alignment: Alignment, content: () -> V) -> some View](/documentation/swiftui/view/overlay(alignment:content:))
- [func overlay<S>(S, ignoresSafeAreaEdges: Edge.Set) -> some View](/documentation/swiftui/view/overlay(_:ignoressafeareaedges:))
- [func overlay<S, T>(S, in: T, fillStyle: FillStyle) -> some View](/documentation/swiftui/view/overlay(_:in:fillstyle:))

##### Background elements

- [func background<V>(alignment: Alignment, content: () -> V) -> some View](/documentation/swiftui/view/background(alignment:content:))
- [func background<S>(S, ignoresSafeAreaEdges: Edge.Set) -> some View](/documentation/swiftui/view/background(_:ignoressafeareaedges:))
- [func background(ignoresSafeAreaEdges: Edge.Set) -> some View](/documentation/swiftui/view/background(ignoressafeareaedges:))
- [func background(_:in:fillStyle:)](/documentation/swiftui/view/background(_:in:fillstyle:))
- [func background(in:fillStyle:)](/documentation/swiftui/view/background(in:fillstyle:))
- [func alternatingRowBackgrounds(AlternatingRowBackgroundBehavior) -> some View](/documentation/swiftui/view/alternatingrowbackgrounds(_:))
- [func listRowBackground<V>(V?) -> some View](/documentation/swiftui/view/listrowbackground(_:))
- [func scrollContentBackground(Visibility) -> some View](/documentation/swiftui/view/scrollcontentbackground(_:))
- [func containerBackground<S>(S, for: ContainerBackgroundPlacement) -> some View](/documentation/swiftui/view/containerbackground(_:for:))
- [func containerBackground<V>(for: ContainerBackgroundPlacement, alignment: Alignment, content: () -> V) -> some View](/documentation/swiftui/view/containerbackground(for:alignment:content:))
- [func glassBackgroundEffect(displayMode: GlassBackgroundDisplayMode) -> some View](/documentation/swiftui/view/glassbackgroundeffect(displaymode:))
- [func glassBackgroundEffect<S>(in: S, displayMode: GlassBackgroundDisplayMode) -> some View](/documentation/swiftui/view/glassbackgroundeffect(in:displaymode:))

##### Control configuration

- [func defaultWheelPickerItemHeight(CGFloat) -> some View](/documentation/swiftui/view/defaultwheelpickeritemheight(_:))
- [func horizontalRadioGroupLayout() -> some View](/documentation/swiftui/view/horizontalradiogrouplayout())
- [func controlSize(_:)](/documentation/swiftui/view/controlsize(_:))
- [func buttonBorderShape(ButtonBorderShape) -> some View](/documentation/swiftui/view/buttonbordershape(_:))
- [func buttonRepeatBehavior(ButtonRepeatBehavior) -> some View](/documentation/swiftui/view/buttonrepeatbehavior(_:))
- [func headerProminence(Prominence) -> some View](/documentation/swiftui/view/headerprominence(_:))
- [func scrollDisabled(Bool) -> some View](/documentation/swiftui/view/scrolldisabled(_:))
- [func scrollBounceBehavior(ScrollBounceBehavior, axes: Axis.Set) -> some View](/documentation/swiftui/view/scrollbouncebehavior(_:axes:))
- [func scrollIndicatorsFlash(onAppear: Bool) -> some View](/documentation/swiftui/view/scrollindicatorsflash(onappear:))
- [func scrollIndicatorsFlash(trigger: some Equatable) -> some View](/documentation/swiftui/view/scrollindicatorsflash(trigger:))
- [func menuOrder(MenuOrder) -> some View](/documentation/swiftui/view/menuorder(_:))
- [func menuActionDismissBehavior(MenuActionDismissBehavior) -> some View](/documentation/swiftui/view/menuactiondismissbehavior(_:))
- [func paletteSelectionEffect(PaletteSelectionEffect) -> some View](/documentation/swiftui/view/paletteselectioneffect(_:))
- [func typeSelectEquivalent(_:)](/documentation/swiftui/view/typeselectequivalent(_:))

##### Symbol effects

- [func symbolEffect<T>(T, options: SymbolEffectOptions, isActive: Bool) -> some View](/documentation/swiftui/view/symboleffect(_:options:isactive:))
- [func symbolEffect<T, U>(T, options: SymbolEffectOptions, value: U) -> some View](/documentation/swiftui/view/symboleffect(_:options:value:))
- [func symbolEffectsRemoved(Bool) -> some View](/documentation/swiftui/view/symboleffectsremoved(_:))

##### Privacy and redaction

- [func privacySensitive(Bool) -> some View](/documentation/swiftui/view/privacysensitive(_:))
- [func redacted(reason: RedactionReasons) -> some View](/documentation/swiftui/view/redacted(reason:))
- [func unredacted() -> some View](/documentation/swiftui/view/unredacted())
- [func invalidatableContent(Bool) -> some View](/documentation/swiftui/view/invalidatablecontent(_:))

##### Visibility

- [func hidden() -> some View](/documentation/swiftui/view/hidden())
- [func labelsHidden() -> some View](/documentation/swiftui/view/labelshidden())
- [func menuIndicator(Visibility) -> some View](/documentation/swiftui/view/menuindicator(_:))
- [func listRowSeparator(Visibility, edges: VerticalEdge.Set) -> some View](/documentation/swiftui/view/listrowseparator(_:edges:))
- [func listSectionSeparator(Visibility, edges: VerticalEdge.Set) -> some View](/documentation/swiftui/view/listsectionseparator(_:edges:))
- [func persistentSystemOverlays(Visibility) -> some View](/documentation/swiftui/view/persistentsystemoverlays(_:))
- [func scrollIndicators(ScrollIndicatorVisibility, axes: Axis.Set) -> some View](/documentation/swiftui/view/scrollindicators(_:axes:))
- [func scrollClipDisabled(Bool) -> some View](/documentation/swiftui/view/scrollclipdisabled(_:))
- [func tableColumnHeaders(Visibility) -> some View](/documentation/swiftui/view/tablecolumnheaders(_:))
- [func upperLimbVisibility(Visibility) -> some View](/documentation/swiftui/view/upperlimbvisibility(_:))
- [func volumeBaseplateVisibility(Visibility) -> some View](/documentation/swiftui/view/volumebaseplatevisibility(_:))

##### Sensory feedback

- [func sensoryFeedback<T>(SensoryFeedback, trigger: T) -> some View](/documentation/swiftui/view/sensoryfeedback(_:trigger:))
- [func sensoryFeedback(trigger:_:)](/documentation/swiftui/view/sensoryfeedback(trigger:_:))
- [func sensoryFeedback<T>(SensoryFeedback, trigger: T, condition: (T, T) -> Bool) -> some View](/documentation/swiftui/view/sensoryfeedback(_:trigger:condition:))

##### Widget configuration

- [func widgetAccentable(Bool) -> some View](/documentation/swiftui/view/widgetaccentable(_:))
- [func widgetCurvesContent(Bool) -> some View](/documentation/swiftui/view/widgetcurvescontent(_:))
- [func widgetLabel(_:)](/documentation/swiftui/view/widgetlabel(_:))
- [func widgetLabel<Label>(label: () -> Label) -> some View](/documentation/swiftui/view/widgetlabel(label:))
- [func dynamicIsland(verticalPlacement: DynamicIslandExpandedRegionVerticalPlacement) -> some View](/documentation/swiftui/view/dynamicisland(verticalplacement:))
- [func accessoryWidgetGroupStyle(AccessoryWidgetGroupStyle) -> some View](/documentation/swiftui/view/accessorywidgetgroupstyle(_:))

##### Window behaviors

- [func windowDismissBehavior(WindowInteractionBehavior) -> some View](/documentation/swiftui/view/windowdismissbehavior(_:))
- [func windowFullScreenBehavior(WindowInteractionBehavior) -> some View](/documentation/swiftui/view/windowfullscreenbehavior(_:))
- [func windowMinimizeBehavior(WindowInteractionBehavior) -> some View](/documentation/swiftui/view/windowminimizebehavior(_:))
- [func windowResizeBehavior(WindowInteractionBehavior) -> some View](/documentation/swiftui/view/windowresizebehavior(_:))
- [Text and symbol modifiers](/documentation/swiftui/view-text-and-symbols)

##### Fonts

- [func font(Font?) -> some View](/documentation/swiftui/view/font(_:))

##### Dynamic type

- [func dynamicTypeSize(_:)](/documentation/swiftui/view/dynamictypesize(_:))

##### Text style

- [func bold(Bool) -> some View](/documentation/swiftui/view/bold(_:))
- [func fontDesign(Font.Design?) -> some View](/documentation/swiftui/view/fontdesign(_:))
- [func fontWeight(Font.Weight?) -> some View](/documentation/swiftui/view/fontweight(_:))
- [func fontWidth(Font.Width?) -> some View](/documentation/swiftui/view/fontwidth(_:))
- [func italic(Bool) -> some View](/documentation/swiftui/view/italic(_:))
- [func monospaced(Bool) -> some View](/documentation/swiftui/view/monospaced(_:))
- [func monospacedDigit() -> some View](/documentation/swiftui/view/monospaceddigit())
- [func strikethrough(Bool, pattern: Text.LineStyle.Pattern, color: Color?) -> some View](/documentation/swiftui/view/strikethrough(_:pattern:color:))
- [func textCase(Text.Case?) -> some View](/documentation/swiftui/view/textcase(_:))
- [func textScale(Text.Scale, isEnabled: Bool) -> some View](/documentation/swiftui/view/textscale(_:isenabled:))
- [func underline(Bool, pattern: Text.LineStyle.Pattern, color: Color?) -> some View](/documentation/swiftui/view/underline(_:pattern:color:))

##### Text layout

- [func allowsTightening(Bool) -> some View](/documentation/swiftui/view/allowstightening(_:))
- [func baselineOffset(CGFloat) -> some View](/documentation/swiftui/view/baselineoffset(_:))
- [func flipsForRightToLeftLayoutDirection(Bool) -> some View](/documentation/swiftui/view/flipsforrighttoleftlayoutdirection(_:))
- [func kerning(CGFloat) -> some View](/documentation/swiftui/view/kerning(_:))
- [func minimumScaleFactor(CGFloat) -> some View](/documentation/swiftui/view/minimumscalefactor(_:))
- [func tracking(CGFloat) -> some View](/documentation/swiftui/view/tracking(_:))
- [func truncationMode(Text.TruncationMode) -> some View](/documentation/swiftui/view/truncationmode(_:))
- [func typesettingLanguage(_:isEnabled:)](/documentation/swiftui/view/typesettinglanguage(_:isenabled:))

##### Multiline text

- [func lineLimit(_:)](/documentation/swiftui/view/linelimit(_:))
- [func lineLimit(Int, reservesSpace: Bool) -> some View](/documentation/swiftui/view/linelimit(_:reservesspace:))
- [func lineSpacing(CGFloat) -> some View](/documentation/swiftui/view/linespacing(_:))
- [func multilineTextAlignment(TextAlignment) -> some View](/documentation/swiftui/view/multilinetextalignment(_:))
- [func multilineTextAlignment(strategy: Text.AlignmentStrategy) -> some View](/documentation/swiftui/view/multilinetextalignment(strategy:))

##### Text selection

- [func textSelection<S>(S) -> some View](/documentation/swiftui/view/textselection(_:))

##### Text entry

- [func autocorrectionDisabled(Bool) -> some View](/documentation/swiftui/view/autocorrectiondisabled(_:))
- [func keyboardType(UIKeyboardType) -> some View](/documentation/swiftui/view/keyboardtype(_:))
- [func scrollDismissesKeyboard(ScrollDismissesKeyboardMode) -> some View](/documentation/swiftui/view/scrolldismisseskeyboard(_:))
- [func textInputAutocapitalization(TextInputAutocapitalization?) -> some View](/documentation/swiftui/view/textinputautocapitalization(_:))
- [func textInputCompletion(String) -> some View](/documentation/swiftui/view/textinputcompletion(_:))
- [func textInputSuggestions<S>(() -> S) -> some View](/documentation/swiftui/view/textinputsuggestions(_:))
- [func textInputSuggestions<Data, Content>(Data, content: (Data.Element) -> Content) -> some View](/documentation/swiftui/view/textinputsuggestions(_:content:))
- [func textInputSuggestions<Data, ID, Content>(Data, id: KeyPath<Data.Element, ID>, content: (Data.Element) -> Content) -> some View](/documentation/swiftui/view/textinputsuggestions(_:id:content:))
- [func textContentType(WKTextContentType?) -> some View](/documentation/swiftui/view/textcontenttype(_:)-4dqqb)
- [func textContentType(NSTextContentType?) -> some View](/documentation/swiftui/view/textcontenttype(_:)-6fic1)
- [func textContentType(UITextContentType?) -> some View](/documentation/swiftui/view/textcontenttype(_:)-ufdv)

##### Find and replace

- [func findNavigator(isPresented: Binding<Bool>) -> some View](/documentation/swiftui/view/findnavigator(ispresented:))
- [func findDisabled(Bool) -> some View](/documentation/swiftui/view/finddisabled(_:))
- [func replaceDisabled(Bool) -> some View](/documentation/swiftui/view/replacedisabled(_:))

##### Symbol appearance

- [func symbolRenderingMode(SymbolRenderingMode?) -> some View](/documentation/swiftui/view/symbolrenderingmode(_:))
- [func symbolVariant(SymbolVariants) -> some View](/documentation/swiftui/view/symbolvariant(_:))
- [Auxiliary view modifiers](/documentation/swiftui/view-auxiliary-views)

##### Navigation titles

- [Configure your apps navigation titles](/documentation/swiftui/configure-your-apps-navigation-titles)
- [func navigationTitle(_:)](/documentation/swiftui/view/navigationtitle(_:))
- [func navigationSubtitle(_:)](/documentation/swiftui/view/navigationsubtitle(_:))

##### Navigation title configuration

- [func navigationDocument(_:)](/documentation/swiftui/view/navigationdocument(_:))
- [func navigationDocument(_:preview:)](/documentation/swiftui/view/navigationdocument(_:preview:))

##### Navigation bars

- [func navigationBarBackButtonHidden(Bool) -> some View](/documentation/swiftui/view/navigationbarbackbuttonhidden(_:))
- [func navigationBarTitleDisplayMode(NavigationBarItem.TitleDisplayMode) -> some View](/documentation/swiftui/view/navigationbartitledisplaymode(_:))

##### Navigation stacks and columns

- [func navigationDestination<D, C>(for: D.Type, destination: (D) -> C) -> some View](/documentation/swiftui/view/navigationdestination(for:destination:))
- [func navigationDestination<V>(isPresented: Binding<Bool>, destination: () -> V) -> some View](/documentation/swiftui/view/navigationdestination(ispresented:destination:))
- [func navigationDestination<D, C>(item: Binding<Optional<D>>, destination: (D) -> C) -> some View](/documentation/swiftui/view/navigationdestination(item:destination:))
- [func navigationSplitViewColumnWidth(CGFloat) -> some View](/documentation/swiftui/view/navigationsplitviewcolumnwidth(_:))
- [func navigationSplitViewColumnWidth(min: CGFloat?, ideal: CGFloat, max: CGFloat?) -> some View](/documentation/swiftui/view/navigationsplitviewcolumnwidth(min:ideal:max:))

##### Tab views

- [func tabViewCustomization(Binding<TabViewCustomization>?) -> some View](/documentation/swiftui/view/tabviewcustomization(_:))
- [func defaultAdaptableTabBarPlacement(AdaptableTabBarPlacement) -> some View](/documentation/swiftui/view/defaultadaptabletabbarplacement(_:))
- [func tabViewSidebarHeader<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/tabviewsidebarheader(content:))
- [func tabViewSidebarFooter<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/tabviewsidebarfooter(content:))
- [func tabViewSidebarBottomBar<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/tabviewsidebarbottombar(content:))
- [func sectionActions<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/sectionactions(content:))

##### Toolbars

- [func toolbar(content:)](/documentation/swiftui/view/toolbar(content:))
- [func toolbar<Content>(id: String, content: () -> Content) -> some View](/documentation/swiftui/view/toolbar(id:content:))
- [func toolbar(Visibility, for: ToolbarPlacement...) -> some View](/documentation/swiftui/view/toolbar(_:for:))
- [func toolbar(removing: ToolbarDefaultItemKind?) -> some View](/documentation/swiftui/view/toolbar(removing:))
- [func toolbarVisibility(Visibility, for: ToolbarPlacement...) -> some View](/documentation/swiftui/view/toolbarvisibility(_:for:))
- [func toolbarBackground(_:for:)](/documentation/swiftui/view/toolbarbackground(_:for:))
- [func toolbarBackgroundVisibility(Visibility, for: ToolbarPlacement...) -> some View](/documentation/swiftui/view/toolbarbackgroundvisibility(_:for:))
- [func toolbarForegroundStyle<S>(S, for: ToolbarPlacement...) -> some View](/documentation/swiftui/view/toolbarforegroundstyle(_:for:))
- [func toolbarColorScheme(ColorScheme?, for: ToolbarPlacement...) -> some View](/documentation/swiftui/view/toolbarcolorscheme(_:for:))
- [func toolbarRole(ToolbarRole) -> some View](/documentation/swiftui/view/toolbarrole(_:))
- [func toolbarTitleMenu<C>(content: () -> C) -> some View](/documentation/swiftui/view/toolbartitlemenu(content:))
- [func toolbarTitleDisplayMode(ToolbarTitleDisplayMode) -> some View](/documentation/swiftui/view/toolbartitledisplaymode(_:))
- [func ornament(visibility:attachmentAnchor:contentAlignment:ornament:)](/documentation/swiftui/view/ornament(visibility:attachmentanchor:contentalignment:ornament:))

##### Context menus

- [func contextMenu<MenuItems>(menuItems: () -> MenuItems) -> some View](/documentation/swiftui/view/contextmenu(menuitems:))
- [func contextMenu<M, P>(menuItems: () -> M, preview: () -> P) -> some View](/documentation/swiftui/view/contextmenu(menuitems:preview:))
- [func contextMenu<I, M>(forSelectionType: I.Type, menu: (Set<I>) -> M, primaryAction: ((Set<I>) -> Void)?) -> some View](/documentation/swiftui/view/contextmenu(forselectiontype:menu:primaryaction:))

##### Badges

- [func badge(_:)](/documentation/swiftui/view/badge(_:))
- [func badgeProminence(BadgeProminence) -> some View](/documentation/swiftui/view/badgeprominence(_:))

##### Help text

- [func help(_:)](/documentation/swiftui/view/help(_:))

##### Status bar

- [func statusBarHidden(Bool) -> some View](/documentation/swiftui/view/statusbarhidden(_:))

##### Touch Bar

- [func touchBar<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/touchbar(content:))
- [func touchBar<Content>(TouchBar<Content>) -> some View](/documentation/swiftui/view/touchbar(_:))
- [func touchBarItemPrincipal(Bool) -> some View](/documentation/swiftui/view/touchbaritemprincipal(_:))
- [func touchBarCustomizationLabel(Text) -> some View](/documentation/swiftui/view/touchbarcustomizationlabel(_:))
- [func touchBarItemPresence(TouchBarItemPresence) -> some View](/documentation/swiftui/view/touchbaritempresence(_:))
- [Chart view modifiers](/documentation/swiftui/view-chart-view)

##### Styles

- [func chartBackground<V>(alignment: Alignment, content: (ChartProxy) -> V) -> some View](/documentation/swiftui/view/chartbackground(alignment:content:))
- [func chartForegroundStyleScale<DataValue, S>(KeyValuePairs<DataValue, S>) -> some View](/documentation/swiftui/view/chartforegroundstylescale(_:))
- [func chartForegroundStyleScale<Domain, Range>(domain: Domain, range: Range, type: ScaleType?) -> some View](/documentation/swiftui/view/chartforegroundstylescale(domain:range:type:))
- [func chartForegroundStyleScale<Domain>(domain: Domain, type: ScaleType?) -> some View](/documentation/swiftui/view/chartforegroundstylescale(domain:type:))
- [func chartForegroundStyleScale<Domain, S>(domain: Domain, mapping: (Domain.Element) -> S) -> some View](/documentation/swiftui/view/chartforegroundstylescale(domain:mapping:))
- [func chartForegroundStyleScale<DataValue, S>(mapping: (DataValue) -> S) -> some View](/documentation/swiftui/view/chartforegroundstylescale(mapping:))
- [func chartForegroundStyleScale<Range>(range: Range, type: ScaleType?) -> some View](/documentation/swiftui/view/chartforegroundstylescale(range:type:))
- [func chartForegroundStyleScale(type: ScaleType?) -> some View](/documentation/swiftui/view/chartforegroundstylescale(type:))
- [func chartPlotStyle<Content>(content: (ChartPlotContent) -> Content) -> some View](/documentation/swiftui/view/chartplotstyle(content:))

##### Legends

- [func chartLegend(Visibility) -> some View](/documentation/swiftui/view/chartlegend(_:))
- [func chartLegend(position: AnnotationPosition, alignment: Alignment?, spacing: CGFloat?) -> some View](/documentation/swiftui/view/chartlegend(position:alignment:spacing:))
- [func chartLegend<Content>(position: AnnotationPosition, alignment: Alignment?, spacing: CGFloat?, content: () -> Content) -> some View](/documentation/swiftui/view/chartlegend(position:alignment:spacing:content:))

##### Overlays

- [func chartOverlay<V>(alignment: Alignment, content: (ChartProxy) -> V) -> some View](/documentation/swiftui/view/chartoverlay(alignment:content:))

##### Axes

- [func chartXAxis(Visibility) -> some View](/documentation/swiftui/view/chartxaxis(_:))
- [func chartXAxis<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/chartxaxis(content:))
- [func chartXAxisStyle<Content>(content: (ChartAxisContent) -> Content) -> some View](/documentation/swiftui/view/chartxaxisstyle(content:))
- [func chartYAxis(Visibility) -> some View](/documentation/swiftui/view/chartyaxis(_:))
- [func chartYAxis<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/chartyaxis(content:))
- [func chartYAxisStyle<Content>(content: (ChartAxisContent) -> Content) -> some View](/documentation/swiftui/view/chartyaxisstyle(content:))

##### Axis Labels

- [func chartXAxisLabel(_:position:alignment:spacing:)](/documentation/swiftui/view/chartxaxislabel(_:position:alignment:spacing:))
- [func chartXAxisLabel<C>(position: AnnotationPosition, alignment: Alignment?, spacing: CGFloat?, content: () -> C) -> some View](/documentation/swiftui/view/chartxaxislabel(position:alignment:spacing:content:))
- [func chartYAxisLabel(_:position:alignment:spacing:)](/documentation/swiftui/view/chartyaxislabel(_:position:alignment:spacing:))
- [func chartYAxisLabel<C>(position: AnnotationPosition, alignment: Alignment?, spacing: CGFloat?, content: () -> C) -> some View](/documentation/swiftui/view/chartyaxislabel(position:alignment:spacing:content:))

##### Axis scales

- [func chartXScale<Domain, Range>(domain: Domain, range: Range, type: ScaleType?) -> some View](/documentation/swiftui/view/chartxscale(domain:range:type:))
- [func chartXScale<Domain>(domain: Domain, type: ScaleType?) -> some View](/documentation/swiftui/view/chartxscale(domain:type:))
- [func chartXScale<Range>(range: Range, type: ScaleType?) -> some View](/documentation/swiftui/view/chartxscale(range:type:))
- [func chartXScale(type: ScaleType?) -> some View](/documentation/swiftui/view/chartxscale(type:))
- [func chartYScale<Domain, Range>(domain: Domain, range: Range, type: ScaleType?) -> some View](/documentation/swiftui/view/chartyscale(domain:range:type:))
- [func chartYScale<Domain>(domain: Domain, type: ScaleType?) -> some View](/documentation/swiftui/view/chartyscale(domain:type:))
- [func chartYScale<Range>(range: Range, type: ScaleType?) -> some View](/documentation/swiftui/view/chartyscale(range:type:))
- [func chartYScale(type: ScaleType?) -> some View](/documentation/swiftui/view/chartyscale(type:))

##### Symbol scales

- [func chartSymbolScale(_:)](/documentation/swiftui/view/chartsymbolscale(_:))
- [func chartSymbolScale<Domain>(domain: Domain) -> some View](/documentation/swiftui/view/chartsymbolscale(domain:))
- [func chartSymbolScale(domain:range:)](/documentation/swiftui/view/chartsymbolscale(domain:range:))
- [func chartSymbolScale<Domain, S>(domain: Domain, mapping: (Domain.Element) -> S) -> some View](/documentation/swiftui/view/chartsymbolscale(domain:mapping:))
- [func chartSymbolScale<DataValue, S>(mapping: (DataValue) -> S) -> some View](/documentation/swiftui/view/chartsymbolscale(mapping:))
- [func chartSymbolScale(range:)](/documentation/swiftui/view/chartsymbolscale(range:))

##### Symbol size scales

- [func chartSymbolSizeScale<DataValue>(KeyValuePairs<DataValue, CGFloat>) -> some View](/documentation/swiftui/view/chartsymbolsizescale(_:))
- [func chartSymbolSizeScale<Domain, Range>(domain: Domain, range: Range, type: ScaleType?) -> some View](/documentation/swiftui/view/chartsymbolsizescale(domain:range:type:))
- [func chartSymbolSizeScale<Domain>(domain: Domain, type: ScaleType?) -> some View](/documentation/swiftui/view/chartsymbolsizescale(domain:type:))
- [func chartSymbolSizeScale<Domain>(domain: Domain, mapping: (Domain.Element) -> CGFloat) -> some View](/documentation/swiftui/view/chartsymbolsizescale(domain:mapping:))
- [func chartSymbolSizeScale<DataValue>(mapping: (DataValue) -> CGFloat) -> some View](/documentation/swiftui/view/chartsymbolsizescale(mapping:))
- [func chartSymbolSizeScale<Range>(range: Range, type: ScaleType?) -> some View](/documentation/swiftui/view/chartsymbolsizescale(range:type:))
- [func chartSymbolSizeScale(type: ScaleType?) -> some View](/documentation/swiftui/view/chartsymbolsizescale(type:))

##### Line style scales

- [func chartLineStyleScale<DataValue>(KeyValuePairs<DataValue, StrokeStyle>) -> some View](/documentation/swiftui/view/chartlinestylescale(_:))
- [func chartLineStyleScale<Domain>(domain: Domain) -> some View](/documentation/swiftui/view/chartlinestylescale(domain:))
- [func chartLineStyleScale<Domain, Range>(domain: Domain, range: Range) -> some View](/documentation/swiftui/view/chartlinestylescale(domain:range:))
- [func chartLineStyleScale<Range>(range: Range) -> some View](/documentation/swiftui/view/chartlinestylescale(range:))
- [func chartLineStyleScale<Domain>(domain: Domain, mapping: (Domain.Element) -> StrokeStyle) -> some View](/documentation/swiftui/view/chartlinestylescale(domain:mapping:))
- [func chartLineStyleScale<DataValue>(mapping: (DataValue) -> StrokeStyle) -> some View](/documentation/swiftui/view/chartlinestylescale(mapping:))

##### Scrolling

- [func chartScrollPosition(initialX: some Plottable) -> some View](/documentation/swiftui/view/chartscrollposition(initialx:))
- [func chartScrollPosition(initialY: some Plottable) -> some View](/documentation/swiftui/view/chartscrollposition(initialy:))
- [func chartScrollPosition(x: Binding<some Plottable>) -> some View](/documentation/swiftui/view/chartscrollposition(x:))
- [func chartScrollPosition(y: Binding<some Plottable>) -> some View](/documentation/swiftui/view/chartscrollposition(y:))
- [func chartScrollTargetBehavior(some ChartScrollTargetBehavior) -> some View](/documentation/swiftui/view/chartscrolltargetbehavior(_:))
- [func chartScrollableAxes(Axis.Set) -> some View](/documentation/swiftui/view/chartscrollableaxes(_:))

##### Selection

- [func chartXSelection<P>(range: Binding<ClosedRange<P>?>) -> some View](/documentation/swiftui/view/chartxselection(range:))
- [func chartXSelection<P>(value: Binding<P?>) -> some View](/documentation/swiftui/view/chartxselection(value:))
- [func chartYSelection<P>(range: Binding<ClosedRange<P>?>) -> some View](/documentation/swiftui/view/chartyselection(range:))
- [func chartYSelection<P>(value: Binding<P?>) -> some View](/documentation/swiftui/view/chartyselection(value:))
- [func chartAngleSelection<P>(value: Binding<P?>) -> some View](/documentation/swiftui/view/chartangleselection(value:))

##### Visible domain

- [func chartXVisibleDomain<P>(length: P) -> some View](/documentation/swiftui/view/chartxvisibledomain(length:))
- [func chartYVisibleDomain<P>(length: P) -> some View](/documentation/swiftui/view/chartyvisibledomain(length:))

##### Interaction

- [func chartGesture((ChartProxy) -> some Gesture) -> some View](/documentation/swiftui/view/chartgesture(_:))

#### Drawing views

- [Style modifiers](/documentation/swiftui/view-style-modifiers)

##### Controls

- [func buttonStyle(_:)](/documentation/swiftui/view/buttonstyle(_:))
- [func datePickerStyle<S>(S) -> some View](/documentation/swiftui/view/datepickerstyle(_:))
- [func menuStyle<S>(S) -> some View](/documentation/swiftui/view/menustyle(_:))
- [func pickerStyle<S>(S) -> some View](/documentation/swiftui/view/pickerstyle(_:))
- [func toggleStyle<S>(S) -> some View](/documentation/swiftui/view/togglestyle(_:))

##### Indicators

- [func gaugeStyle<S>(S) -> some View](/documentation/swiftui/view/gaugestyle(_:))
- [func progressViewStyle<S>(S) -> some View](/documentation/swiftui/view/progressviewstyle(_:))

##### Text

- [func labelStyle<S>(S) -> some View](/documentation/swiftui/view/labelstyle(_:))
- [func textFieldStyle<S>(S) -> some View](/documentation/swiftui/view/textfieldstyle(_:))
- [func textEditorStyle(some TextEditorStyle) -> some View](/documentation/swiftui/view/texteditorstyle(_:))

##### Collections

- [func listStyle<S>(S) -> some View](/documentation/swiftui/view/liststyle(_:))
- [func tableStyle<S>(S) -> some View](/documentation/swiftui/view/tablestyle(_:))
- [func disclosureGroupStyle<S>(S) -> some View](/documentation/swiftui/view/disclosuregroupstyle(_:))

##### Presentation

- [func navigationSplitViewStyle<S>(S) -> some View](/documentation/swiftui/view/navigationsplitviewstyle(_:))
- [func tabViewStyle<S>(S) -> some View](/documentation/swiftui/view/tabviewstyle(_:))
- [func presentedWindowStyle<S>(S) -> some View](/documentation/swiftui/view/presentedwindowstyle(_:))
- [func presentedWindowToolbarStyle<S>(S) -> some View](/documentation/swiftui/view/presentedwindowtoolbarstyle(_:))

##### Groups

- [func controlGroupStyle<S>(S) -> some View](/documentation/swiftui/view/controlgroupstyle(_:))
- [func groupBoxStyle<S>(S) -> some View](/documentation/swiftui/view/groupboxstyle(_:))
- [func indexViewStyle<S>(S) -> some View](/documentation/swiftui/view/indexviewstyle(_:))
- [Layout modifiers](/documentation/swiftui/view-layout)

##### Size

- [func frame(width: CGFloat?, height: CGFloat?, alignment: Alignment) -> some View](/documentation/swiftui/view/frame(width:height:alignment:))
- [func frame(depth: CGFloat?, alignment: DepthAlignment) -> some View](/documentation/swiftui/view/frame(depth:alignment:))
- [func frame(minWidth: CGFloat?, idealWidth: CGFloat?, maxWidth: CGFloat?, minHeight: CGFloat?, idealHeight: CGFloat?, maxHeight: CGFloat?, alignment: Alignment) -> some View](/documentation/swiftui/view/frame(minwidth:idealwidth:maxwidth:minheight:idealheight:maxheight:alignment:))
- [func frame(minDepth: CGFloat?, idealDepth: CGFloat?, maxDepth: CGFloat?, alignment: DepthAlignment) -> some View](/documentation/swiftui/view/frame(mindepth:idealdepth:maxdepth:alignment:))
- [func containerRelativeFrame(Axis.Set, alignment: Alignment) -> some View](/documentation/swiftui/view/containerrelativeframe(_:alignment:))
- [func containerRelativeFrame(Axis.Set, alignment: Alignment, (CGFloat, Axis) -> CGFloat) -> some View](/documentation/swiftui/view/containerrelativeframe(_:alignment:_:))
- [func containerRelativeFrame(Axis.Set, count: Int, span: Int, spacing: CGFloat, alignment: Alignment) -> some View](/documentation/swiftui/view/containerrelativeframe(_:count:span:spacing:alignment:))
- [func fixedSize() -> some View](/documentation/swiftui/view/fixedsize())
- [func fixedSize(horizontal: Bool, vertical: Bool) -> some View](/documentation/swiftui/view/fixedsize(horizontal:vertical:))
- [func layoutPriority(Double) -> some View](/documentation/swiftui/view/layoutpriority(_:))

##### Position

- [func position(CGPoint) -> some View](/documentation/swiftui/view/position(_:))
- [func position(x: CGFloat, y: CGFloat) -> some View](/documentation/swiftui/view/position(x:y:))
- [func offset(CGSize) -> some View](/documentation/swiftui/view/offset(_:))
- [func offset(x: CGFloat, y: CGFloat) -> some View](/documentation/swiftui/view/offset(x:y:))
- [func offset(z: CGFloat) -> some View](/documentation/swiftui/view/offset(z:))
- [func coordinateSpace(NamedCoordinateSpace) -> some View](/documentation/swiftui/view/coordinatespace(_:))

##### Alignment

- [func alignmentGuide(_:computeValue:)](/documentation/swiftui/view/alignmentguide(_:computevalue:))

##### Padding and spacing

- [func padding(_:)](/documentation/swiftui/view/padding(_:))
- [func padding(Edge.Set, CGFloat?) -> some View](/documentation/swiftui/view/padding(_:_:))
- [func padding3D(_:)](/documentation/swiftui/view/padding3d(_:))
- [func padding3D(Edge3D.Set, CGFloat?) -> some View](/documentation/swiftui/view/padding3d(_:_:))
- [func listRowInsets(EdgeInsets?) -> some View](/documentation/swiftui/view/listrowinsets(_:))
- [func scenePadding(Edge.Set) -> some View](/documentation/swiftui/view/scenepadding(_:))
- [func scenePadding(ScenePadding, edges: Edge.Set) -> some View](/documentation/swiftui/view/scenepadding(_:edges:))
- [func listRowSpacing(CGFloat?) -> some View](/documentation/swiftui/view/listrowspacing(_:))
- [func listSectionSpacing(_:)](/documentation/swiftui/view/listsectionspacing(_:))

##### Grid configuration

- [func gridCellColumns(Int) -> some View](/documentation/swiftui/view/gridcellcolumns(_:))
- [func gridCellAnchor(UnitPoint) -> some View](/documentation/swiftui/view/gridcellanchor(_:))
- [func gridCellUnsizedAxes(Axis.Set) -> some View](/documentation/swiftui/view/gridcellunsizedaxes(_:))
- [func gridColumnAlignment(HorizontalAlignment) -> some View](/documentation/swiftui/view/gridcolumnalignment(_:))

##### Safe area and margins

- [func ignoresSafeArea(SafeAreaRegions, edges: Edge.Set) -> some View](/documentation/swiftui/view/ignoressafearea(_:edges:))
- [func safeAreaInset(edge:alignment:spacing:content:)](/documentation/swiftui/view/safeareainset(edge:alignment:spacing:content:))
- [func safeAreaPadding(_:)](/documentation/swiftui/view/safeareapadding(_:))
- [func safeAreaPadding(Edge.Set, CGFloat?) -> some View](/documentation/swiftui/view/safeareapadding(_:_:))
- [func contentMargins(CGFloat, for: ContentMarginPlacement) -> some View](/documentation/swiftui/view/contentmargins(_:for:))
- [func contentMargins(_:_:for:)](/documentation/swiftui/view/contentmargins(_:_:for:))

##### Layer order

- [func zIndex(Double) -> some View](/documentation/swiftui/view/zindex(_:))

##### Layout direction

- [func layoutDirectionBehavior(LayoutDirectionBehavior) -> some View](/documentation/swiftui/view/layoutdirectionbehavior(_:))

##### Custom layout characteristics

- [func layoutValue<K>(key: K.Type, value: K.Value) -> some View](/documentation/swiftui/view/layoutvalue(key:value:))
- [Graphics and rendering modifiers](/documentation/swiftui/view-graphics-and-rendering)

##### Masks and clipping

- [func mask<Mask>(alignment: Alignment, () -> Mask) -> some View](/documentation/swiftui/view/mask(alignment:_:))
- [func clipped(antialiased: Bool) -> some View](/documentation/swiftui/view/clipped(antialiased:))
- [func clipShape<S>(S, style: FillStyle) -> some View](/documentation/swiftui/view/clipshape(_:style:))
- [func containerShape(_:)](/documentation/swiftui/view/containershape(_:))

##### Scale

- [func scaledToFill() -> some View](/documentation/swiftui/view/scaledtofill())
- [func scaledToFit() -> some View](/documentation/swiftui/view/scaledtofit())
- [func scaleEffect(_:anchor:)](/documentation/swiftui/view/scaleeffect(_:anchor:))
- [func scaleEffect(x: CGFloat, y: CGFloat, anchor: UnitPoint) -> some View](/documentation/swiftui/view/scaleeffect(x:y:anchor:))
- [func scaleEffect(x: CGFloat, y: CGFloat, z: CGFloat, anchor: UnitPoint3D) -> some View](/documentation/swiftui/view/scaleeffect(x:y:z:anchor:))
- [func imageScale(Image.Scale) -> some View](/documentation/swiftui/view/imagescale(_:))
- [func aspectRatio(_:contentMode:)](/documentation/swiftui/view/aspectratio(_:contentmode:))

##### Rotation and transformation

- [func rotationEffect(Angle, anchor: UnitPoint) -> some View](/documentation/swiftui/view/rotationeffect(_:anchor:))
- [func rotation3DEffect(Rotation3D, anchor: UnitPoint3D) -> some View](/documentation/swiftui/view/rotation3deffect(_:anchor:))
- [func rotation3DEffect(Angle, axis: (x: CGFloat, y: CGFloat, z: CGFloat), anchor: UnitPoint, anchorZ: CGFloat, perspective: CGFloat) -> some View](/documentation/swiftui/view/rotation3deffect(_:axis:anchor:anchorz:perspective:))
- [func rotation3DEffect(_:axis:anchor:)](/documentation/swiftui/view/rotation3deffect(_:axis:anchor:))
- [func perspectiveRotationEffect(Angle, axis: (x: CGFloat, y: CGFloat, z: CGFloat), anchor: UnitPoint, anchorZ: CGFloat, perspective: CGFloat) -> some View](/documentation/swiftui/view/perspectiverotationeffect(_:axis:anchor:anchorz:perspective:))
- [func projectionEffect(ProjectionTransform) -> some View](/documentation/swiftui/view/projectioneffect(_:))
- [func transformEffect(CGAffineTransform) -> some View](/documentation/swiftui/view/transformeffect(_:))
- [func transform3DEffect(AffineTransform3D) -> some View](/documentation/swiftui/view/transform3deffect(_:))

##### Graphical effects

- [func blur(radius: CGFloat, opaque: Bool) -> some View](/documentation/swiftui/view/blur(radius:opaque:))
- [func opacity(Double) -> some View](/documentation/swiftui/view/opacity(_:))
- [func brightness(Double) -> some View](/documentation/swiftui/view/brightness(_:))
- [func contrast(Double) -> some View](/documentation/swiftui/view/contrast(_:))
- [func colorInvert() -> some View](/documentation/swiftui/view/colorinvert())
- [func colorMultiply(Color) -> some View](/documentation/swiftui/view/colormultiply(_:))
- [func saturation(Double) -> some View](/documentation/swiftui/view/saturation(_:))
- [func grayscale(Double) -> some View](/documentation/swiftui/view/grayscale(_:))
- [func hueRotation(Angle) -> some View](/documentation/swiftui/view/huerotation(_:))
- [func luminanceToAlpha() -> some View](/documentation/swiftui/view/luminancetoalpha())
- [func shadow(color: Color, radius: CGFloat, x: CGFloat, y: CGFloat) -> some View](/documentation/swiftui/view/shadow(color:radius:x:y:))
- [func visualEffect((EmptyVisualEffect, GeometryProxy) -> some VisualEffect) -> some View](/documentation/swiftui/view/visualeffect(_:))
- [func visualEffect3D((EmptyVisualEffect, GeometryProxy3D) -> some VisualEffect) -> some View](/documentation/swiftui/view/visualeffect3d(_:))

##### Shaders

- [func colorEffect(Shader, isEnabled: Bool) -> some View](/documentation/swiftui/view/coloreffect(_:isenabled:))
- [func distortionEffect(Shader, maxSampleOffset: CGSize, isEnabled: Bool) -> some View](/documentation/swiftui/view/distortioneffect(_:maxsampleoffset:isenabled:))
- [func layerEffect(Shader, maxSampleOffset: CGSize, isEnabled: Bool) -> some View](/documentation/swiftui/view/layereffect(_:maxsampleoffset:isenabled:))

##### Composites

- [func blendMode(BlendMode) -> some View](/documentation/swiftui/view/blendmode(_:))
- [func compositingGroup() -> some View](/documentation/swiftui/view/compositinggroup())
- [func drawingGroup(opaque: Bool, colorMode: ColorRenderingMode) -> some View](/documentation/swiftui/view/drawinggroup(opaque:colormode:))

##### Animations

- [func animation(_:)](/documentation/swiftui/view/animation(_:))
- [func animation<V>(Animation?, value: V) -> some View](/documentation/swiftui/view/animation(_:value:))
- [func animation<V>(Animation?, body: (PlaceholderContentView<Self>) -> V) -> some View](/documentation/swiftui/view/animation(_:body:))
- [func keyframeAnimator<Value>(initialValue: Value, repeating: Bool, content: (PlaceholderContentView<Self>, Value) -> some View, keyframes: (Value) -> some Keyframes) -> some View](/documentation/swiftui/view/keyframeanimator(initialvalue:repeating:content:keyframes:))
- [func keyframeAnimator<Value>(initialValue: Value, trigger: some Equatable, content: (PlaceholderContentView<Self>, Value) -> some View, keyframes: (Value) -> some Keyframes) -> some View](/documentation/swiftui/view/keyframeanimator(initialvalue:trigger:content:keyframes:))
- [func phaseAnimator<Phase>(some Sequence, content: (PlaceholderContentView<Self>, Phase) -> some View, animation: (Phase) -> Animation?) -> some View](/documentation/swiftui/view/phaseanimator(_:content:animation:))
- [func phaseAnimator<Phase>(some Sequence, trigger: some Equatable, content: (PlaceholderContentView<Self>, Phase) -> some View, animation: (Phase) -> Animation?) -> some View](/documentation/swiftui/view/phaseanimator(_:trigger:content:animation:))
- [func contentTransition(ContentTransition) -> some View](/documentation/swiftui/view/contenttransition(_:))
- [func transition(_:)](/documentation/swiftui/view/transition(_:))
- [func transaction((inout Transaction) -> Void) -> some View](/documentation/swiftui/view/transaction(_:))
- [func transaction(value: some Equatable, (inout Transaction) -> Void) -> some View](/documentation/swiftui/view/transaction(value:_:))
- [func transaction<V>((inout Transaction) -> Void, body: (PlaceholderContentView<Self>) -> V) -> some View](/documentation/swiftui/view/transaction(_:body:))
- [func contentTransition(ContentTransition) -> some View](/documentation/swiftui/view/contenttransition(_:))
- [func matchedGeometryEffect<ID>(id: ID, in: Namespace.ID, properties: MatchedGeometryProperties, anchor: UnitPoint, isSource: Bool) -> some View](/documentation/swiftui/view/matchedgeometryeffect(id:in:properties:anchor:issource:))
- [func geometryGroup() -> some View](/documentation/swiftui/view/geometrygroup())

#### Providing interactivity

- [Input and event modifiers](/documentation/swiftui/view-input-and-events)

##### Interactivity

- [func disabled(Bool) -> some View](/documentation/swiftui/view/disabled(_:))
- [func interactionActivityTrackingTag(String) -> some View](/documentation/swiftui/view/interactionactivitytrackingtag(_:))

##### List controls

- [func swipeActions<T>(edge: HorizontalEdge, allowsFullSwipe: Bool, content: () -> T) -> some View](/documentation/swiftui/view/swipeactions(edge:allowsfullswipe:content:))
- [func refreshable(action: () async -> Void) -> some View](/documentation/swiftui/view/refreshable(action:))
- [func selectionDisabled(Bool) -> some View](/documentation/swiftui/view/selectiondisabled(_:))

##### Scroll controls

- [func scrollPosition(Binding<ScrollPosition>, anchor: UnitPoint?) -> some View](/documentation/swiftui/view/scrollposition(_:anchor:))
- [func scrollPosition(id: Binding<(some Hashable)?>, anchor: UnitPoint?) -> some View](/documentation/swiftui/view/scrollposition(id:anchor:))
- [func defaultScrollAnchor(UnitPoint?) -> some View](/documentation/swiftui/view/defaultscrollanchor(_:))
- [func defaultScrollAnchor(UnitPoint?, for: ScrollAnchorRole) -> some View](/documentation/swiftui/view/defaultscrollanchor(_:for:))
- [func scrollTargetBehavior(some ScrollTargetBehavior) -> some View](/documentation/swiftui/view/scrolltargetbehavior(_:))
- [func scrollTargetLayout(isEnabled: Bool) -> some View](/documentation/swiftui/view/scrolltargetlayout(isenabled:))
- [func scrollTransition(ScrollTransitionConfiguration, axis: Axis?, transition: (EmptyVisualEffect, ScrollTransitionPhase) -> some VisualEffect) -> some View](/documentation/swiftui/view/scrolltransition(_:axis:transition:))
- [func scrollTransition(topLeading: ScrollTransitionConfiguration, bottomTrailing: ScrollTransitionConfiguration, axis: Axis?, transition: (EmptyVisualEffect, ScrollTransitionPhase) -> some VisualEffect) -> some View](/documentation/swiftui/view/scrolltransition(topleading:bottomtrailing:axis:transition:))
- [func onScrollGeometryChange<T>(for: T.Type, of: (ScrollGeometry) -> T, action: (T, T) -> Void) -> some View](/documentation/swiftui/view/onscrollgeometrychange(for:of:action:))
- [func onScrollTargetVisibilityChange<ID>(idType: ID.Type, threshold: Double, ([ID]) -> Void) -> some View](/documentation/swiftui/view/onscrolltargetvisibilitychange(idtype:threshold:_:))
- [func onScrollVisibilityChange(threshold: Double, (Bool) -> Void) -> some View](/documentation/swiftui/view/onscrollvisibilitychange(threshold:_:))
- [func onScrollPhaseChange(_:)](/documentation/swiftui/view/onscrollphasechange(_:))

##### Geometry

- [func onGeometryChange(for:of:action:)](/documentation/swiftui/view/ongeometrychange(for:of:action:))

##### Taps and gestures

- [func onTapGesture(count: Int, perform: () -> Void) -> some View](/documentation/swiftui/view/ontapgesture(count:perform:))
- [func onTapGesture(count:coordinateSpace:perform:)](/documentation/swiftui/view/ontapgesture(count:coordinatespace:perform:))
- [func onLongPressGesture(minimumDuration: Double, maximumDistance: CGFloat, perform: () -> Void, onPressingChanged: ((Bool) -> Void)?) -> some View](/documentation/swiftui/view/onlongpressgesture(minimumduration:maximumdistance:perform:onpressingchanged:))
- [func onLongPressGesture(minimumDuration: Double, perform: () -> Void, onPressingChanged: ((Bool) -> Void)?) -> some View](/documentation/swiftui/view/onlongpressgesture(minimumduration:perform:onpressingchanged:))
- [func onLongTouchGesture(minimumDuration: Double, perform: () -> Void, onTouchingChanged: ((Bool) -> Void)?) -> some View](/documentation/swiftui/view/onlongtouchgesture(minimumduration:perform:ontouchingchanged:))
- [func gesture(_:)](/documentation/swiftui/view/gesture(_:))
- [func gesture<T>(T, isEnabled: Bool) -> some View](/documentation/swiftui/view/gesture(_:isenabled:))
- [func gesture<T>(T, name: String, isEnabled: Bool) -> some View](/documentation/swiftui/view/gesture(_:name:isenabled:))
- [func gesture<T>(T, including: GestureMask) -> some View](/documentation/swiftui/view/gesture(_:including:))
- [func highPriorityGesture<T>(T, including: GestureMask) -> some View](/documentation/swiftui/view/highprioritygesture(_:including:))
- [func highPriorityGesture<T>(T, isEnabled: Bool) -> some View](/documentation/swiftui/view/highprioritygesture(_:isenabled:))
- [func highPriorityGesture<T>(T, name: String, isEnabled: Bool) -> some View](/documentation/swiftui/view/highprioritygesture(_:name:isenabled:))
- [func simultaneousGesture<T>(T, including: GestureMask) -> some View](/documentation/swiftui/view/simultaneousgesture(_:including:))
- [func simultaneousGesture<T>(T, isEnabled: Bool) -> some View](/documentation/swiftui/view/simultaneousgesture(_:isenabled:))
- [func simultaneousGesture<T>(T, name: String, isEnabled: Bool) -> some View](/documentation/swiftui/view/simultaneousgesture(_:name:isenabled:))
- [func defersSystemGestures(on: Edge.Set) -> some View](/documentation/swiftui/view/deferssystemgestures(on:))
- [func onPencilDoubleTap(perform: (PencilDoubleTapGestureValue) -> Void) -> some View](/documentation/swiftui/view/onpencildoubletap(perform:))
- [func onPencilSqueeze(perform: (PencilSqueezeGesturePhase) -> Void) -> some View](/documentation/swiftui/view/onpencilsqueeze(perform:))
- [func allowsWindowActivationEvents(Bool?) -> some View](/documentation/swiftui/view/allowswindowactivationevents(_:))

##### Keyboard input

- [func onKeyPress(KeyEquivalent, action: () -> KeyPress.Result) -> some View](/documentation/swiftui/view/onkeypress(_:action:))
- [func onKeyPress(phases: KeyPress.Phases, action: (KeyPress) -> KeyPress.Result) -> some View](/documentation/swiftui/view/onkeypress(phases:action:))
- [func onKeyPress(KeyEquivalent, phases: KeyPress.Phases, action: (KeyPress) -> KeyPress.Result) -> some View](/documentation/swiftui/view/onkeypress(_:phases:action:))
- [func onKeyPress(characters: CharacterSet, phases: KeyPress.Phases, action: (KeyPress) -> KeyPress.Result) -> some View](/documentation/swiftui/view/onkeypress(characters:phases:action:))
- [func onKeyPress(keys: Set<KeyEquivalent>, phases: KeyPress.Phases, action: (KeyPress) -> KeyPress.Result) -> some View](/documentation/swiftui/view/onkeypress(keys:phases:action:))
- [func onModifierKeysChanged(mask: EventModifiers, initial: Bool, (EventModifiers, EventModifiers) -> Void) -> some View](/documentation/swiftui/view/onmodifierkeyschanged(mask:initial:_:))

##### Keyboard shortcuts

- [func keyboardShortcut(_:)](/documentation/swiftui/view/keyboardshortcut(_:))
- [func keyboardShortcut(KeyEquivalent, modifiers: EventModifiers) -> some View](/documentation/swiftui/view/keyboardshortcut(_:modifiers:))
- [func keyboardShortcut(KeyEquivalent, modifiers: EventModifiers, localization: KeyboardShortcut.Localization) -> some View](/documentation/swiftui/view/keyboardshortcut(_:modifiers:localization:))
- [func modifierKeyAlternate<V>(EventModifiers, () -> V) -> some View](/documentation/swiftui/view/modifierkeyalternate(_:_:))

##### Hover

- [func onHover(perform: (Bool) -> Void) -> some View](/documentation/swiftui/view/onhover(perform:))
- [func onContinuousHover(coordinateSpace:perform:)](/documentation/swiftui/view/oncontinuoushover(coordinatespace:perform:))
- [func hoverEffect(HoverEffect) -> some View](/documentation/swiftui/view/hovereffect(_:))
- [func hoverEffect(_:isEnabled:)](/documentation/swiftui/view/hovereffect(_:isenabled:))
- [func hoverEffect(some CustomHoverEffect, in: HoverEffectGroup?, isEnabled: Bool) -> some View](/documentation/swiftui/view/hovereffect(_:in:isenabled:))
- [func hoverEffect(in: HoverEffectGroup?, isEnabled: Bool, body: (EmptyHoverEffectContent, Bool, GeometryProxy) -> some HoverEffectContent) -> some View](/documentation/swiftui/view/hovereffect(in:isenabled:body:))
- [func hoverEffectGroup() -> some View](/documentation/swiftui/view/hovereffectgroup())
- [func hoverEffectGroup(HoverEffectGroup?) -> some View](/documentation/swiftui/view/hovereffectgroup(_:))
- [func hoverEffectGroup(id: String?, in: Namespace.ID, behavior: HoverEffectGroup.Behavior) -> some View](/documentation/swiftui/view/hovereffectgroup(id:in:behavior:))
- [func hoverEffectDisabled(Bool) -> some View](/documentation/swiftui/view/hovereffectdisabled(_:))
- [func defaultHoverEffect(_:)](/documentation/swiftui/view/defaulthovereffect(_:))
- [func listRowHoverEffect(HoverEffect?) -> some View](/documentation/swiftui/view/listrowhovereffect(_:))
- [func listRowHoverEffectDisabled(Bool) -> some View](/documentation/swiftui/view/listrowhovereffectdisabled(_:))

##### Pointer

- [func pointerVisibility(Visibility) -> some View](/documentation/swiftui/view/pointervisibility(_:))
- [func pointerStyle(PointerStyle?) -> some View](/documentation/swiftui/view/pointerstyle(_:))

##### Focus

- [func focused<Value>(FocusState<Value>.Binding, equals: Value) -> some View](/documentation/swiftui/view/focused(_:equals:))
- [func focused(FocusState<Bool>.Binding) -> some View](/documentation/swiftui/view/focused(_:))
- [func focusedValue<T>(T?) -> some View](/documentation/swiftui/view/focusedvalue(_:))
- [func focusedValue(_:_:)](/documentation/swiftui/view/focusedvalue(_:_:))
- [func focusedSceneValue<T>(T?) -> some View](/documentation/swiftui/view/focusedscenevalue(_:))
- [func focusedSceneValue(_:_:)](/documentation/swiftui/view/focusedscenevalue(_:_:))
- [func focusedObject(_:)](/documentation/swiftui/view/focusedobject(_:))
- [func focusedSceneObject(_:)](/documentation/swiftui/view/focusedsceneobject(_:))
- [func prefersDefaultFocus(Bool, in: Namespace.ID) -> some View](/documentation/swiftui/view/prefersdefaultfocus(_:in:))
- [func focusScope(Namespace.ID) -> some View](/documentation/swiftui/view/focusscope(_:))
- [func focusSection() -> some View](/documentation/swiftui/view/focussection())
- [func focusable(Bool) -> some View](/documentation/swiftui/view/focusable(_:))
- [func focusable(Bool, interactions: FocusInteractions) -> some View](/documentation/swiftui/view/focusable(_:interactions:))
- [func focusEffectDisabled(Bool) -> some View](/documentation/swiftui/view/focuseffectdisabled(_:))
- [func defaultFocus<V>(FocusState<V>.Binding, V, priority: DefaultFocusEvaluationPriority) -> some View](/documentation/swiftui/view/defaultfocus(_:_:priority:))
- [func searchFocused(FocusState<Bool>.Binding) -> some View](/documentation/swiftui/view/searchfocused(_:))
- [func searchFocused<V>(FocusState<V>.Binding, equals: V) -> some View](/documentation/swiftui/view/searchfocused(_:equals:))

##### Copy and paste

- [func copyable<T>(@autoclosure () -> [T]) -> some View](/documentation/swiftui/view/copyable(_:))
- [func cuttable<T>(for: T.Type, action: () -> [T]) -> some View](/documentation/swiftui/view/cuttable(for:action:))
- [func pasteDestination<T>(for: T.Type, action: ([T]) -> Void, validator: ([T]) -> [T]) -> some View](/documentation/swiftui/view/pastedestination(for:action:validator:))
- [func onCopyCommand(perform: (() -> [NSItemProvider])?) -> some View](/documentation/swiftui/view/oncopycommand(perform:))
- [func onCutCommand(perform: (() -> [NSItemProvider])?) -> some View](/documentation/swiftui/view/oncutcommand(perform:))
- [func onPasteCommand(of:perform:)](/documentation/swiftui/view/onpastecommand(of:perform:))
- [func onPasteCommand(of:validator:perform:)](/documentation/swiftui/view/onpastecommand(of:validator:perform:))

##### Drag and drop

- [func onDrag<V>(() -> NSItemProvider, preview: () -> V) -> some View](/documentation/swiftui/view/ondrag(_:preview:))
- [func onDrag(() -> NSItemProvider) -> some View](/documentation/swiftui/view/ondrag(_:))
- [func itemProvider(Optional<() -> NSItemProvider?>) -> some View](/documentation/swiftui/view/itemprovider(_:))
- [func onDrop(of:isTargeted:perform:)](/documentation/swiftui/view/ondrop(of:istargeted:perform:))
- [func onDrop(of:delegate:)](/documentation/swiftui/view/ondrop(of:delegate:))
- [func dropDestination<T>(for: T.Type, action: ([T], CGPoint) -> Bool, isTargeted: (Bool) -> Void) -> some View](/documentation/swiftui/view/dropdestination(for:action:istargeted:))
- [func draggable<T>(@autoclosure () -> T) -> some View](/documentation/swiftui/view/draggable(_:))
- [func draggable<V, T>(@autoclosure () -> T, preview: () -> V) -> some View](/documentation/swiftui/view/draggable(_:preview:))
- [func springLoadingBehavior(SpringLoadingBehavior) -> some View](/documentation/swiftui/view/springloadingbehavior(_:))

##### Submission

- [func onAssignedDocumentDidSubmit((URL) -> Void) -> some View](/documentation/swiftui/view/onassigneddocumentdidsubmit(_:)) **Beta**
- [func onAssignedDocumentDidWithdraw((URL) -> Void) -> some View](/documentation/swiftui/view/onassigneddocumentdidwithdraw(_:)) **Beta**
- [func onAssignedDocumentWillSubmit((URL) async -> Bool) -> some View](/documentation/swiftui/view/onassigneddocumentwillsubmit(_:)) **Beta**
- [func onAssignedDocumentWillWithdraw((URL) async -> Bool) -> some View](/documentation/swiftui/view/onassigneddocumentwillwithdraw(_:)) **Beta**
- [func onSubmit(of: SubmitTriggers, () -> Void) -> some View](/documentation/swiftui/view/onsubmit(of:_:))
- [func submitScope(Bool) -> some View](/documentation/swiftui/view/submitscope(_:))
- [func submitLabel(SubmitLabel) -> some View](/documentation/swiftui/view/submitlabel(_:))

##### Movement

- [func onMoveCommand(perform: ((MoveCommandDirection) -> Void)?) -> some View](/documentation/swiftui/view/onmovecommand(perform:))
- [func moveDisabled(Bool) -> some View](/documentation/swiftui/view/movedisabled(_:))

##### Deletion

- [func onDeleteCommand(perform: (() -> Void)?) -> some View](/documentation/swiftui/view/ondeletecommand(perform:))
- [func deleteDisabled(Bool) -> some View](/documentation/swiftui/view/deletedisabled(_:))

##### Commands

- [func pageCommand<V>(value: Binding<V>, in: ClosedRange<V>, step: V) -> some View](/documentation/swiftui/view/pagecommand(value:in:step:))
- [func onExitCommand(perform: (() -> Void)?) -> some View](/documentation/swiftui/view/onexitcommand(perform:))
- [func onPlayPauseCommand(perform: (() -> Void)?) -> some View](/documentation/swiftui/view/onplaypausecommand(perform:))
- [func onCommand(Selector, perform: (() -> Void)?) -> some View](/documentation/swiftui/view/oncommand(_:perform:))

##### Digital crown

- [func digitalCrownAccessory(Visibility) -> some View](/documentation/swiftui/view/digitalcrownaccessory(_:))
- [func digitalCrownAccessory<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/digitalcrownaccessory(content:))
- [func digitalCrownRotation<V>(Binding<V>, from: V, through: V, sensitivity: DigitalCrownRotationalSensitivity, isContinuous: Bool, isHapticFeedbackEnabled: Bool, onChange: (DigitalCrownEvent) -> Void, onIdle: () -> Void) -> some View](/documentation/swiftui/view/digitalcrownrotation(_:from:through:sensitivity:iscontinuous:ishapticfeedbackenabled:onchange:onidle:))
- [func digitalCrownRotation<V>(Binding<V>, onChange: (DigitalCrownEvent) -> Void, onIdle: () -> Void) -> some View](/documentation/swiftui/view/digitalcrownrotation(_:onchange:onidle:))
- [func digitalCrownRotation(detent:from:through:by:sensitivity:isContinuous:isHapticFeedbackEnabled:onChange:onIdle:)](/documentation/swiftui/view/digitalcrownrotation(detent:from:through:by:sensitivity:iscontinuous:ishapticfeedbackenabled:onchange:onidle:))
- [func digitalCrownRotation<V>(Binding<V>) -> some View](/documentation/swiftui/view/digitalcrownrotation(_:))
- [func digitalCrownRotation<V>(Binding<V>, from: V, through: V, by: V.Stride?, sensitivity: DigitalCrownRotationalSensitivity, isContinuous: Bool, isHapticFeedbackEnabled: Bool) -> some View](/documentation/swiftui/view/digitalcrownrotation(_:from:through:by:sensitivity:iscontinuous:ishapticfeedbackenabled:))

##### Immersive Spaces

- [func onImmersionChange(initial: Bool, (ImmersionChangeContext, ImmersionChangeContext) -> Void) -> some View](/documentation/swiftui/view/onimmersionchange(initial:_:))

##### Volumes

- [func onVolumeViewpointChange(updateStrategy: VolumeViewpointUpdateStrategy, initial: Bool, (Viewpoint3D, Viewpoint3D) -> Void) -> some View](/documentation/swiftui/view/onvolumeviewpointchange(updatestrategy:initial:_:))
- [func supportedVolumeViewpoints(SquareAzimuth.Set) -> some View](/documentation/swiftui/view/supportedvolumeviewpoints(_:))

##### User activities

- [func userActivity<P>(String, element: P?, (P, NSUserActivity) -> ()) -> some View](/documentation/swiftui/view/useractivity(_:element:_:))
- [func userActivity(String, isActive: Bool, (NSUserActivity) -> ()) -> some View](/documentation/swiftui/view/useractivity(_:isactive:_:))
- [func onContinueUserActivity(String, perform: (NSUserActivity) -> ()) -> some View](/documentation/swiftui/view/oncontinueuseractivity(_:perform:))
- [func handlesExternalEvents(preferring: Set<String>, allowing: Set<String>) -> some View](/documentation/swiftui/view/handlesexternalevents(preferring:allowing:))

##### View life cycle

- [func onAppear(perform: (() -> Void)?) -> some View](/documentation/swiftui/view/onappear(perform:))
- [func onDisappear(perform: (() -> Void)?) -> some View](/documentation/swiftui/view/ondisappear(perform:))
- [func onChange(of:initial:_:)](/documentation/swiftui/view/onchange(of:initial:_:))

##### File renaming

- [func renameAction(_:)](/documentation/swiftui/view/renameaction(_:))

##### URLs

- [func onOpenURL(perform: (URL) -> ()) -> some View](/documentation/swiftui/view/onopenurl(perform:))
- [func widgetURL(URL?) -> some View](/documentation/swiftui/view/widgeturl(_:))

##### Publisher events

- [func onReceive<P>(P, perform: (P.Output) -> Void) -> some View](/documentation/swiftui/view/onreceive(_:perform:))

##### Hit testing

- [func allowsHitTesting(Bool) -> some View](/documentation/swiftui/view/allowshittesting(_:))

##### Content shape

- [func contentShape<S>(S, eoFill: Bool) -> some View](/documentation/swiftui/view/contentshape(_:eofill:))
- [func contentShape<S>(ContentShapeKinds, S, eoFill: Bool) -> some View](/documentation/swiftui/view/contentshape(_:_:eofill:))

##### Import and export

- [func exportsItemProviders([UTType], onExport: () -> [NSItemProvider]) -> some View](/documentation/swiftui/view/exportsitemproviders(_:onexport:))
- [func exportsItemProviders([UTType], onExport: () -> [NSItemProvider], onEdit: ([NSItemProvider]) -> Bool) -> some View](/documentation/swiftui/view/exportsitemproviders(_:onexport:onedit:))
- [func importsItemProviders([UTType], onImport: ([NSItemProvider]) -> Bool) -> some View](/documentation/swiftui/view/importsitemproviders(_:onimport:))
- [func exportableToServices<T>(@autoclosure () -> [T]) -> some View](/documentation/swiftui/view/exportabletoservices(_:))
- [func exportableToServices<T>(@autoclosure () -> [T], onEdit: ([T]) -> Bool) -> some View](/documentation/swiftui/view/exportabletoservices(_:onedit:))
- [func importableFromServices<T>(for: T.Type, action: ([T]) -> Bool) -> some View](/documentation/swiftui/view/importablefromservices(for:action:))

##### App intents

- [func shortcutsLinkStyle(ShortcutsLinkStyle) -> some View](/documentation/swiftui/view/shortcutslinkstyle(_:))
- [func siriTipViewStyle(SiriTipViewStyle) -> some View](/documentation/swiftui/view/siritipviewstyle(_:))

##### Camera

- [func onCameraCaptureEvent(isEnabled: Bool, action: (AVCaptureEvent) -> Void) -> some View](/documentation/swiftui/view/oncameracaptureevent(isenabled:action:))
- [func onCameraCaptureEvent(isEnabled: Bool, primaryAction: (AVCaptureEvent) -> Void, secondaryAction: (AVCaptureEvent) -> Void) -> some View](/documentation/swiftui/view/oncameracaptureevent(isenabled:primaryaction:secondaryaction:))
- [func cameraAnchor(isActive: Bool) -> some View](/documentation/swiftui/view/cameraanchor(isactive:))
- [Search modifiers](/documentation/swiftui/view-search)

##### Displaying a search interface

- [func searchable(text:placement:prompt:)](/documentation/swiftui/view/searchable(text:placement:prompt:))
- [func searchable(text:isPresented:placement:prompt:)](/documentation/swiftui/view/searchable(text:ispresented:placement:prompt:))
- [func searchPresentationToolbarBehavior(SearchPresentationToolbarBehavior) -> some View](/documentation/swiftui/view/searchpresentationtoolbarbehavior(_:))

##### Searching with tokens

- [func searchable(text:tokens:placement:prompt:token:)](/documentation/swiftui/view/searchable(text:tokens:placement:prompt:token:))
- [func searchable(text:tokens:isPresented:placement:prompt:token:)](/documentation/swiftui/view/searchable(text:tokens:ispresented:placement:prompt:token:))

##### Searching with editable tokens

- [func searchable(text:editableTokens:isPresented:placement:prompt:token:)](/documentation/swiftui/view/searchable(text:editabletokens:ispresented:placement:prompt:token:))
- [func searchable(text:editableTokens:placement:prompt:token:)](/documentation/swiftui/view/searchable(text:editabletokens:placement:prompt:token:))

##### Making search suggestions

- [func searchSuggestions<S>(() -> S) -> some View](/documentation/swiftui/view/searchsuggestions(_:))
- [func searchSuggestions(Visibility, for: SearchSuggestionsPlacement.Set) -> some View](/documentation/swiftui/view/searchsuggestions(_:for:))
- [func searchCompletion(_:)](/documentation/swiftui/view/searchcompletion(_:))
- [func searchable(text:tokens:suggestedTokens:placement:prompt:token:)](/documentation/swiftui/view/searchable(text:tokens:suggestedtokens:placement:prompt:token:))
- [func searchable(text:tokens:suggestedTokens:isPresented:placement:prompt:token:)](/documentation/swiftui/view/searchable(text:tokens:suggestedtokens:ispresented:placement:prompt:token:))

##### Limiting search scope

- [func searchScopes<V, S>(Binding<V>, scopes: () -> S) -> some View](/documentation/swiftui/view/searchscopes(_:scopes:))
- [func searchScopes<V, S>(Binding<V>, activation: SearchScopeActivation, () -> S) -> some View](/documentation/swiftui/view/searchscopes(_:activation:_:))

##### Searching through dictation

- [func searchDictationBehavior(TextInputDictationBehavior) -> some View](/documentation/swiftui/view/searchdictationbehavior(_:))
- [Presentation modifiers](/documentation/swiftui/view-presentation)

##### Alerts

- [func alert(_:isPresented:actions:)](/documentation/swiftui/view/alert(_:ispresented:actions:))
- [func alert(_:isPresented:presenting:actions:)](/documentation/swiftui/view/alert(_:ispresented:presenting:actions:))
- [func alert<E, A>(isPresented: Binding<Bool>, error: E?, actions: () -> A) -> some View](/documentation/swiftui/view/alert(ispresented:error:actions:))

##### Alerts with a message

- [func alert(_:isPresented:actions:message:)](/documentation/swiftui/view/alert(_:ispresented:actions:message:))
- [func alert(_:isPresented:presenting:actions:message:)](/documentation/swiftui/view/alert(_:ispresented:presenting:actions:message:))
- [func alert<E, A, M>(isPresented: Binding<Bool>, error: E?, actions: (E) -> A, message: (E) -> M) -> some View](/documentation/swiftui/view/alert(ispresented:error:actions:message:))

##### Confirmation dialogs

- [func confirmationDialog(_:isPresented:titleVisibility:actions:)](/documentation/swiftui/view/confirmationdialog(_:ispresented:titlevisibility:actions:))
- [func confirmationDialog(_:isPresented:titleVisibility:presenting:actions:)](/documentation/swiftui/view/confirmationdialog(_:ispresented:titlevisibility:presenting:actions:))
- [func dismissalConfirmationDialog(_:shouldPresent:actions:)](/documentation/swiftui/view/dismissalconfirmationdialog(_:shouldpresent:actions:))

##### Confirmation dialogs with a message

- [func confirmationDialog(_:isPresented:titleVisibility:actions:message:)](/documentation/swiftui/view/confirmationdialog(_:ispresented:titlevisibility:actions:message:))
- [func confirmationDialog(_:isPresented:titleVisibility:presenting:actions:message:)](/documentation/swiftui/view/confirmationdialog(_:ispresented:titlevisibility:presenting:actions:message:))
- [func dismissalConfirmationDialog(_:shouldPresent:actions:message:)](/documentation/swiftui/view/dismissalconfirmationdialog(_:shouldpresent:actions:message:))

##### Dialog configuration

- [func dialogIcon(Image?) -> some View](/documentation/swiftui/view/dialogicon(_:))
- [func dialogSeverity(DialogSeverity) -> some View](/documentation/swiftui/view/dialogseverity(_:))
- [func dialogSuppressionToggle(isSuppressed: Binding<Bool>) -> some View](/documentation/swiftui/view/dialogsuppressiontoggle(issuppressed:))
- [func dialogSuppressionToggle(_:isSuppressed:)](/documentation/swiftui/view/dialogsuppressiontoggle(_:issuppressed:))

##### Sheets

- [func sheet<Content>(isPresented: Binding<Bool>, onDismiss: (() -> Void)?, content: () -> Content) -> some View](/documentation/swiftui/view/sheet(ispresented:ondismiss:content:))
- [func sheet<Item, Content>(item: Binding<Item?>, onDismiss: (() -> Void)?, content: (Item) -> Content) -> some View](/documentation/swiftui/view/sheet(item:ondismiss:content:))
- [func fullScreenCover<Content>(isPresented: Binding<Bool>, onDismiss: (() -> Void)?, content: () -> Content) -> some View](/documentation/swiftui/view/fullscreencover(ispresented:ondismiss:content:))
- [func fullScreenCover<Item, Content>(item: Binding<Item?>, onDismiss: (() -> Void)?, content: (Item) -> Content) -> some View](/documentation/swiftui/view/fullscreencover(item:ondismiss:content:))

##### Popovers

- [func popover<Item, Content>(item: Binding<Item?>, attachmentAnchor: PopoverAttachmentAnchor, arrowEdge: Edge?, content: (Item) -> Content) -> some View](/documentation/swiftui/view/popover(item:attachmentanchor:arrowedge:content:))
- [func popover<Content>(isPresented: Binding<Bool>, attachmentAnchor: PopoverAttachmentAnchor, arrowEdge: Edge?, content: () -> Content) -> some View](/documentation/swiftui/view/popover(ispresented:attachmentanchor:arrowedge:content:))

##### Sheet and popover configuration

- [func interactiveDismissDisabled(Bool) -> some View](/documentation/swiftui/view/interactivedismissdisabled(_:))
- [func presentationDetents(Set<PresentationDetent>) -> some View](/documentation/swiftui/view/presentationdetents(_:))
- [func presentationDetents(Set<PresentationDetent>, selection: Binding<PresentationDetent>) -> some View](/documentation/swiftui/view/presentationdetents(_:selection:))
- [func presentationDragIndicator(Visibility) -> some View](/documentation/swiftui/view/presentationdragindicator(_:))
- [func presentationBackground<S>(S) -> some View](/documentation/swiftui/view/presentationbackground(_:))
- [func presentationBackground<V>(alignment: Alignment, content: () -> V) -> some View](/documentation/swiftui/view/presentationbackground(alignment:content:))
- [func presentationBackgroundInteraction(PresentationBackgroundInteraction) -> some View](/documentation/swiftui/view/presentationbackgroundinteraction(_:))
- [func presentationCompactAdaptation(horizontal: PresentationAdaptation, vertical: PresentationAdaptation) -> some View](/documentation/swiftui/view/presentationcompactadaptation(horizontal:vertical:))
- [func presentationCompactAdaptation(PresentationAdaptation) -> some View](/documentation/swiftui/view/presentationcompactadaptation(_:))
- [func presentationContentInteraction(PresentationContentInteraction) -> some View](/documentation/swiftui/view/presentationcontentinteraction(_:))
- [func presentationCornerRadius(CGFloat?) -> some View](/documentation/swiftui/view/presentationcornerradius(_:))
- [func presentationSizing(some PresentationSizing) -> some View](/documentation/swiftui/view/presentationsizing(_:))

##### File exporter

- [func fileExporter(isPresented:document:contentType:defaultFilename:onCompletion:)](/documentation/swiftui/view/fileexporter(ispresented:document:contenttype:defaultfilename:oncompletion:))
- [func fileExporter(isPresented:documents:contentType:onCompletion:)](/documentation/swiftui/view/fileexporter(ispresented:documents:contenttype:oncompletion:))
- [func fileExporter(isPresented:document:contentTypes:defaultFilename:onCompletion:onCancellation:)](/documentation/swiftui/view/fileexporter(ispresented:document:contenttypes:defaultfilename:oncompletion:oncancellation:))
- [func fileExporter(isPresented:documents:contentTypes:onCompletion:onCancellation:)](/documentation/swiftui/view/fileexporter(ispresented:documents:contenttypes:oncompletion:oncancellation:))
- [func fileExporter<T>(isPresented: Binding<Bool>, item: T?, contentTypes: [UTType], defaultFilename: String?, onCompletion: (Result<URL, any Error>) -> Void, onCancellation: () -> Void) -> some View](/documentation/swiftui/view/fileexporter(ispresented:item:contenttypes:defaultfilename:oncompletion:oncancellation:))
- [func fileExporter<C, T>(isPresented: Binding<Bool>, items: C, contentTypes: [UTType], onCompletion: (Result<[URL], any Error>) -> Void, onCancellation: () -> Void) -> some View](/documentation/swiftui/view/fileexporter(ispresented:items:contenttypes:oncompletion:oncancellation:))
- [func fileExporterFilenameLabel(_:)](/documentation/swiftui/view/fileexporterfilenamelabel(_:))

##### File importer

- [func fileImporter(isPresented: Binding<Bool>, allowedContentTypes: [UTType], allowsMultipleSelection: Bool, onCompletion: (Result<[URL], any Error>) -> Void) -> some View](/documentation/swiftui/view/fileimporter(ispresented:allowedcontenttypes:allowsmultipleselection:oncompletion:))
- [func fileImporter(isPresented: Binding<Bool>, allowedContentTypes: [UTType], onCompletion: (Result<URL, any Error>) -> Void) -> some View](/documentation/swiftui/view/fileimporter(ispresented:allowedcontenttypes:oncompletion:))
- [func fileImporter(isPresented: Binding<Bool>, allowedContentTypes: [UTType], allowsMultipleSelection: Bool, onCompletion: (Result<[URL], any Error>) -> Void, onCancellation: () -> Void) -> some View](/documentation/swiftui/view/fileimporter(ispresented:allowedcontenttypes:allowsmultipleselection:oncompletion:oncancellation:))

##### File mover

- [func fileMover(isPresented: Binding<Bool>, file: URL?, onCompletion: (Result<URL, any Error>) -> Void) -> some View](/documentation/swiftui/view/filemover(ispresented:file:oncompletion:))
- [func fileMover<C>(isPresented: Binding<Bool>, files: C, onCompletion: (Result<[URL], any Error>) -> Void) -> some View](/documentation/swiftui/view/filemover(ispresented:files:oncompletion:))
- [func fileMover(isPresented: Binding<Bool>, file: URL?, onCompletion: (Result<URL, any Error>) -> Void, onCancellation: () -> Void) -> some View](/documentation/swiftui/view/filemover(ispresented:file:oncompletion:oncancellation:))
- [func fileMover<C>(isPresented: Binding<Bool>, files: C, onCompletion: (Result<[URL], any Error>) -> Void, onCancellation: () -> Void) -> some View](/documentation/swiftui/view/filemover(ispresented:files:oncompletion:oncancellation:))

##### File dialog configuration

- [func fileDialogBrowserOptions(FileDialogBrowserOptions) -> some View](/documentation/swiftui/view/filedialogbrowseroptions(_:))
- [func fileDialogConfirmationLabel(_:)](/documentation/swiftui/view/filedialogconfirmationlabel(_:))
- [func fileDialogCustomizationID(String) -> some View](/documentation/swiftui/view/filedialogcustomizationid(_:))
- [func fileDialogDefaultDirectory(URL?) -> some View](/documentation/swiftui/view/filedialogdefaultdirectory(_:))
- [func fileDialogImportsUnresolvedAliases(Bool) -> some View](/documentation/swiftui/view/filedialogimportsunresolvedaliases(_:))
- [func fileDialogMessage(_:)](/documentation/swiftui/view/filedialogmessage(_:))
- [func fileDialogURLEnabled(Predicate<URL>) -> some View](/documentation/swiftui/view/filedialogurlenabled(_:))

##### Inspectors

- [func inspector<V>(isPresented: Binding<Bool>, content: () -> V) -> some View](/documentation/swiftui/view/inspector(ispresented:content:))
- [func inspectorColumnWidth(CGFloat) -> some View](/documentation/swiftui/view/inspectorcolumnwidth(_:))
- [func inspectorColumnWidth(min: CGFloat?, ideal: CGFloat, max: CGFloat?) -> some View](/documentation/swiftui/view/inspectorcolumnwidth(min:ideal:max:))

##### Quick look previews

- [func quickLookPreview(Binding<URL?>) -> some View](/documentation/swiftui/view/quicklookpreview(_:))
- [func quickLookPreview<Items>(Binding<Items.Element?>, in: Items) -> some View](/documentation/swiftui/view/quicklookpreview(_:in:))

##### Family Sharing

- [func familyActivityPicker(isPresented: Binding<Bool>, selection: Binding<FamilyActivitySelection>) -> some View](/documentation/swiftui/view/familyactivitypicker(ispresented:selection:))
- [func familyActivityPicker(headerText: String?, footerText: String?, isPresented: Binding<Bool>, selection: Binding<FamilyActivitySelection>) -> some View](/documentation/swiftui/view/familyactivitypicker(headertext:footertext:ispresented:selection:))

##### Live Activities

- [func activitySystemActionForegroundColor(Color?) -> some View](/documentation/swiftui/view/activitysystemactionforegroundcolor(_:))
- [func activityBackgroundTint(Color?) -> some View](/documentation/swiftui/view/activitybackgroundtint(_:))

##### Apple Music

- [func musicSubscriptionOffer(isPresented: Binding<Bool>, options: MusicSubscriptionOffer.Options, onLoadCompletion: ((any Error)?) -> Void) -> some View](/documentation/swiftui/view/musicsubscriptionoffer(ispresented:options:onloadcompletion:))

##### StoreKit

- [func appStoreOverlay(isPresented: Binding<Bool>, configuration: () -> SKOverlay.Configuration) -> some View](/documentation/swiftui/view/appstoreoverlay(ispresented:configuration:))
- [func manageSubscriptionsSheet(isPresented: Binding<Bool>) -> some View](/documentation/swiftui/view/managesubscriptionssheet(ispresented:))
- [func refundRequestSheet(for: Transaction.ID, isPresented: Binding<Bool>, onDismiss: ((Result<Transaction.RefundRequestStatus, Transaction.RefundRequestError>) -> ())?) -> some View](/documentation/swiftui/view/refundrequestsheet(for:ispresented:ondismiss:))
- [func offerCodeRedemption(isPresented: Binding<Bool>, onCompletion: (Result<Void, any Error>) -> Void) -> some View](/documentation/swiftui/view/offercoderedemption(ispresented:oncompletion:))

##### PhotoKit

- [func photosPicker(isPresented: Binding<Bool>, selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy) -> some View](/documentation/swiftui/view/photospicker(ispresented:selection:matching:preferreditemencoding:))
- [func photosPicker(isPresented: Binding<Bool>, selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary) -> some View](/documentation/swiftui/view/photospicker(ispresented:selection:matching:preferreditemencoding:photolibrary:))
- [func photosPicker(isPresented: Binding<Bool>, selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy) -> some View](/documentation/swiftui/view/photospicker(ispresented:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:))
- [func photosPicker(isPresented: Binding<Bool>, selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary) -> some View](/documentation/swiftui/view/photospicker(ispresented:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:photolibrary:))
- [func photosPickerAccessoryVisibility(Visibility, edges: Edge.Set) -> some View](/documentation/swiftui/view/photospickeraccessoryvisibility(_:edges:))
- [func photosPickerDisabledCapabilities(PHPickerCapabilities) -> some View](/documentation/swiftui/view/photospickerdisabledcapabilities(_:))
- [func photosPickerStyle(PhotosPickerStyle) -> some View](/documentation/swiftui/view/photospickerstyle(_:))

##### Translation

- [func translationPresentation(isPresented: Binding<Bool>, text: String, attachmentAnchor: PopoverAttachmentAnchor, arrowEdge: Edge, replacementAction: ((String) -> Void)?) -> some View](/documentation/swiftui/view/translationpresentation(ispresented:text:attachmentanchor:arrowedge:replacementaction:))
- [func translationTask(TranslationSession.Configuration?, action: (TranslationSession) async -> Void) -> some View](/documentation/swiftui/view/translationtask(_:action:))
- [func translationTask(source: Locale.Language?, target: Locale.Language?, action: (TranslationSession) async -> Void) -> some View](/documentation/swiftui/view/translationtask(source:target:action:))
- [func translationTask(source: Locale.Language?, target: Locale.Language?, preferredStrategy: TranslationSession.Strategy, action: (TranslationSession) async -> Void) -> some View](/documentation/swiftui/view/translationtask(source:target:preferredstrategy:action:))
- [State modifiers](/documentation/swiftui/view-state)

##### Identity

- [func tag<V>(V, includeOptional: Bool) -> some View](/documentation/swiftui/view/tag(_:includeoptional:))
- [func id<ID>(ID) -> some View](/documentation/swiftui/view/id(_:))
- [func equatable() -> EquatableView<Self>](/documentation/swiftui/view/equatable())

##### Environment values

- [func environment<T>(T?) -> some View](/documentation/swiftui/view/environment(_:))
- [func environment<V>(WritableKeyPath<EnvironmentValues, V>, V) -> some View](/documentation/swiftui/view/environment(_:_:))
- [func environmentObject<T>(T) -> some View](/documentation/swiftui/view/environmentobject(_:))
- [func transformEnvironment<V>(WritableKeyPath<EnvironmentValues, V>, transform: (inout V) -> Void) -> some View](/documentation/swiftui/view/transformenvironment(_:transform:))

##### Preferences

- [func preference<K>(key: K.Type, value: K.Value) -> some View](/documentation/swiftui/view/preference(key:value:))
- [func transformPreference<K>(K.Type, (inout K.Value) -> Void) -> some View](/documentation/swiftui/view/transformpreference(_:_:))
- [func anchorPreference<A, K>(key: K.Type, value: Anchor<A>.Source, transform: (Anchor<A>) -> K.Value) -> some View](/documentation/swiftui/view/anchorpreference(key:value:transform:))
- [func transformAnchorPreference<A, K>(key: K.Type, value: Anchor<A>.Source, transform: (inout K.Value, Anchor<A>) -> Void) -> some View](/documentation/swiftui/view/transformanchorpreference(key:value:transform:))
- [func onPreferenceChange<K>(K.Type, perform: (K.Value) -> Void) -> some View](/documentation/swiftui/view/onpreferencechange(_:perform:))
- [func backgroundPreferenceValue<Key, T>(Key.Type, (Key.Value) -> T) -> some View](/documentation/swiftui/view/backgroundpreferencevalue(_:_:))
- [func backgroundPreferenceValue<K, V>(K.Type, alignment: Alignment, (K.Value) -> V) -> some View](/documentation/swiftui/view/backgroundpreferencevalue(_:alignment:_:))
- [func overlayPreferenceValue<Key, T>(Key.Type, (Key.Value) -> T) -> some View](/documentation/swiftui/view/overlaypreferencevalue(_:_:))
- [func overlayPreferenceValue<K, V>(K.Type, alignment: Alignment, (K.Value) -> V) -> some View](/documentation/swiftui/view/overlaypreferencevalue(_:alignment:_:))

##### Default storage

- [func defaultAppStorage(UserDefaults) -> some View](/documentation/swiftui/view/defaultappstorage(_:))

##### Configuring a model

- [func modelContext(ModelContext) -> some View](/documentation/swiftui/view/modelcontext(_:))
- [func modelContainer(ModelContainer) -> some View](/documentation/swiftui/view/modelcontainer(_:))
- [func modelContainer(for:inMemory:isAutosaveEnabled:isUndoEnabled:onSetup:)](/documentation/swiftui/view/modelcontainer(for:inmemory:isautosaveenabled:isundoenabled:onsetup:))

#### Deprecated modifiers

- [Deprecated modifiers](/documentation/swiftui/view-deprecated)

##### Accessibility modifiers

- [func accessibility(label: Text) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibility(label:))
- [func accessibility(value: Text) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibility(value:))
- [func accessibility(hidden: Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibility(hidden:))
- [func accessibility(identifier: String) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibility(identifier:))
- [func accessibility(selectionIdentifier: AnyHashable) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibility(selectionidentifier:))
- [func accessibility(hint: Text) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibility(hint:))
- [func accessibility(activationPoint:)](/documentation/swiftui/view/accessibility(activationpoint:))
- [func accessibility(inputLabels: [Text]) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibility(inputlabels:))
- [func accessibility(addTraits: AccessibilityTraits) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibility(addtraits:))
- [func accessibility(removeTraits: AccessibilityTraits) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibility(removetraits:))
- [func accessibility(sortPriority: Double) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibility(sortpriority:))

##### Appearance modifiers

- [func colorScheme(ColorScheme) -> some View](/documentation/swiftui/view/colorscheme(_:))
- [func listRowPlatterColor(Color?) -> some View](/documentation/swiftui/view/listrowplattercolor(_:))
- [func background<Background>(Background, alignment: Alignment) -> some View](/documentation/swiftui/view/background(_:alignment:))
- [func overlay<Overlay>(Overlay, alignment: Alignment) -> some View](/documentation/swiftui/view/overlay(_:alignment:))
- [func foregroundColor(Color?) -> some View](/documentation/swiftui/view/foregroundcolor(_:))
- [func complicationForeground() -> some View](/documentation/swiftui/view/complicationforeground())

##### Text modifiers

- [func autocapitalization(UITextAutocapitalizationType) -> some View](/documentation/swiftui/view/autocapitalization(_:))
- [func disableAutocorrection(Bool?) -> some View](/documentation/swiftui/view/disableautocorrection(_:))

##### Auxiliary view modifiers

- [func navigationBarTitle(_:)](/documentation/swiftui/view/navigationbartitle(_:))
- [func navigationBarTitle(_:displayMode:)](/documentation/swiftui/view/navigationbartitle(_:displaymode:))
- [func navigationBarItems<L>(leading: L) -> some View](/documentation/swiftui/view/navigationbaritems(leading:))
- [func navigationBarItems<L, T>(leading: L, trailing: T) -> some View](/documentation/swiftui/view/navigationbaritems(leading:trailing:))
- [func navigationBarItems<T>(trailing: T) -> some View](/documentation/swiftui/view/navigationbaritems(trailing:))
- [func navigationBarHidden(Bool) -> some View](/documentation/swiftui/view/navigationbarhidden(_:))
- [func statusBar(hidden: Bool) -> some View](/documentation/swiftui/view/statusbar(hidden:))
- [func contextMenu<MenuItems>(ContextMenu<MenuItems>?) -> some View](/documentation/swiftui/view/contextmenu(_:))

##### Style modifiers

- [func menuButtonStyle<S>(S) -> some View](/documentation/swiftui/view/menubuttonstyle(_:))
- [func navigationViewStyle<S>(S) -> some View](/documentation/swiftui/view/navigationviewstyle(_:))

##### Layout modifiers

- [func frame() -> some View](/documentation/swiftui/view/frame())
- [func edgesIgnoringSafeArea(Edge.Set) -> some View](/documentation/swiftui/view/edgesignoringsafearea(_:))
- [func coordinateSpace<T>(name: T) -> some View](/documentation/swiftui/view/coordinatespace(name:))

##### Graphics and rendering modifiers

- [func accentColor(Color?) -> some View](/documentation/swiftui/view/accentcolor(_:))
- [func mask<Mask>(Mask) -> some View](/documentation/swiftui/view/mask(_:))
- [func animation(Animation?) -> some View](/documentation/swiftui/view/animation(_:)-1hc0p)
- [func cornerRadius(CGFloat, antialiased: Bool) -> some View](/documentation/swiftui/view/cornerradius(_:antialiased:))

##### Input and events modifiers

- [func onChange<V>(of: V, perform: (V) -> Void) -> some View](/documentation/swiftui/view/onchange(of:perform:))
- [func onTapGesture(count: Int, coordinateSpace: CoordinateSpace, perform: (CGPoint) -> Void) -> some View](/documentation/swiftui/view/ontapgesture(count:coordinatespace:perform:)-36x9h)
- [func onLongPressGesture(minimumDuration: Double, maximumDistance: CGFloat, pressing: ((Bool) -> Void)?, perform: () -> Void) -> some View](/documentation/swiftui/view/onlongpressgesture(minimumduration:maximumdistance:pressing:perform:))
- [func onLongPressGesture(minimumDuration: Double, pressing: ((Bool) -> Void)?, perform: () -> Void) -> some View](/documentation/swiftui/view/onlongpressgesture(minimumduration:pressing:perform:))
- [func onPasteCommand(of: [String], perform: ([NSItemProvider]) -> Void) -> some View](/documentation/swiftui/view/onpastecommand(of:perform:)-4f78f)
- [func onPasteCommand<Payload>(of: [String], validator: ([NSItemProvider]) -> Payload?, perform: (Payload) -> Void) -> some View](/documentation/swiftui/view/onpastecommand(of:validator:perform:)-964k1)
- [func onDrop(of: [String], delegate: any DropDelegate) -> some View](/documentation/swiftui/view/ondrop(of:delegate:)-2vr9o)
- [func onDrop(of:isTargeted:perform:)](/documentation/swiftui/view/ondrop(of:istargeted:perform:))
- [func focusable(Bool, onFocusChange: (Bool) -> Void) -> some View](/documentation/swiftui/view/focusable(_:onfocuschange:))
- [func onContinuousHover(coordinateSpace: CoordinateSpace, perform: (HoverPhase) -> Void) -> some View](/documentation/swiftui/view/oncontinuoushover(coordinatespace:perform:)-8gyrl)

##### View presentation modifiers

- [func actionSheet(isPresented: Binding<Bool>, content: () -> ActionSheet) -> some View](/documentation/swiftui/view/actionsheet(ispresented:content:))
- [func actionSheet<T>(item: Binding<T?>, content: (T) -> ActionSheet) -> some View](/documentation/swiftui/view/actionsheet(item:content:))
- [func alert(isPresented: Binding<Bool>, content: () -> Alert) -> some View](/documentation/swiftui/view/alert(ispresented:content:))
- [func alert<Item>(item: Binding<Item?>, content: (Item) -> Alert) -> some View](/documentation/swiftui/view/alert(item:content:))

##### Search modifiers

- [func searchable(text:placement:prompt:suggestions:)](/documentation/swiftui/view/searchable(text:placement:prompt:suggestions:))

##### Tab modifiers

- [func tabItem<V>(() -> V) -> some View](/documentation/swiftui/view/tabitem(_:))

#### Instance Methods

- [func accessibilityActions<Content>(category: AccessibilityActionCategory, () -> Content) -> some View](/documentation/swiftui/view/accessibilityactions(category:_:))
- [func accessibilityDefaultFocus<Value>(AccessibilityFocusState<Value>.Binding, Value) -> some View](/documentation/swiftui/view/accessibilitydefaultfocus(_:_:))
- [func accessibilityScrollStatus(_:isEnabled:)](/documentation/swiftui/view/accessibilityscrollstatus(_:isenabled:))
- [func addOrderToWalletButtonStyle(AddOrderToWalletButtonStyle) -> some View](/documentation/swiftui/view/addordertowalletbuttonstyle(_:))
- [func addPassToWalletButtonStyle(AddPassToWalletButtonStyle) -> some View](/documentation/swiftui/view/addpasstowalletbuttonstyle(_:))
- [func allowsWindowActivationEvents() -> some View](/documentation/swiftui/view/allowswindowactivationevents())
- [func appStoreMerchandising(isPresented: Binding<Bool>, kind: AppStoreMerchandisingKind, onDismiss: ((Result<AppStoreMerchandisingKind.PresentationResult, any Error>) async -> ())?) -> some View](/documentation/swiftui/view/appstoremerchandising(ispresented:kind:ondismiss:))
- [func aspectRatio3D(Size3D?, contentMode: ContentMode) -> some View](/documentation/swiftui/view/aspectratio3d(_:contentmode:))
- [func assistiveAccessNavigationIcon(Image) -> some View](/documentation/swiftui/view/assistiveaccessnavigationicon(_:))
- [func assistiveAccessNavigationIcon(systemImage: String) -> some View](/documentation/swiftui/view/assistiveaccessnavigationicon(systemimage:))
- [func attributedTextFormattingDefinition(_:)](/documentation/swiftui/view/attributedtextformattingdefinition(_:))
- [func automatedDeviceEnrollmentAddition(isPresented: Binding<Bool>) -> some View](/documentation/swiftui/view/automateddeviceenrollmentaddition(ispresented:))
- [func backgroundExtensionEffect() -> some View](/documentation/swiftui/view/backgroundextensioneffect())
- [func backgroundExtensionEffect(isEnabled: Bool) -> some View](/documentation/swiftui/view/backgroundextensioneffect(isenabled:))
- [func breakthroughEffect(BreakthroughEffect) -> some View](/documentation/swiftui/view/breakthrougheffect(_:))
- [func buttonSizing(ButtonSizing) -> some View](/documentation/swiftui/view/buttonsizing(_:))
- [func certificateSheet(trust: Binding<SecTrust?>, title: String?, message: String?, help: URL?) -> some View](/documentation/swiftui/view/certificatesheet(trust:title:message:help:))
- [func chart3DCameraProjection(Chart3DCameraProjection) -> some View](/documentation/swiftui/view/chart3dcameraprojection(_:))
- [func chart3DPose(_:)](/documentation/swiftui/view/chart3dpose(_:))
- [func chart3DRenderingStyle(Chart3DRenderingStyle) -> some View](/documentation/swiftui/view/chart3drenderingstyle(_:))
- [func chartZAxis(Visibility) -> some View](/documentation/swiftui/view/chartzaxis(_:))
- [func chartZAxis<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/chartzaxis(content:))
- [func chartZAxisLabel(_:position:alignment:spacing:)](/documentation/swiftui/view/chartzaxislabel(_:position:alignment:spacing:))
- [func chartZScale<Domain, Range>(domain: Domain, range: Range, type: ScaleType?) -> some View](/documentation/swiftui/view/chartzscale(domain:range:type:))
- [func chartZScale<Domain>(domain: Domain, type: ScaleType?) -> some View](/documentation/swiftui/view/chartzscale(domain:type:))
- [func chartZScale<Range>(range: Range, type: ScaleType?) -> some View](/documentation/swiftui/view/chartzscale(range:type:))
- [func chartZSelection<P>(range: Binding<ClosedRange<P>?>) -> some View](/documentation/swiftui/view/chartzselection(range:))
- [func chartZSelection<P>(value: Binding<P?>) -> some View](/documentation/swiftui/view/chartzselection(value:))
- [func contactAccessButtonCaption(ContactAccessButton.Caption) -> some View](/documentation/swiftui/view/contactaccessbuttoncaption(_:))
- [func contactAccessButtonStyle(ContactAccessButton.Style) -> some View](/documentation/swiftui/view/contactaccessbuttonstyle(_:))
- [func contactAccessPicker(isPresented: Binding<Bool>, completionHandler: ([String]) -> Void) -> some View](/documentation/swiftui/view/contactaccesspicker(ispresented:completionhandler:))
- [func containerCornerOffset(Edge.Set, sizeToFit: Bool) -> some View](/documentation/swiftui/view/containercorneroffset(_:sizetofit:))
- [func containerValue<V>(WritableKeyPath<ContainerValues, V>, V) -> some View](/documentation/swiftui/view/containervalue(_:_:))
- [func contentCaptureProtected(Bool) -> some View](/documentation/swiftui/view/contentcaptureprotected(_:))
- [func contentToolbar(for:content:)](/documentation/swiftui/view/contenttoolbar(for:content:))
- [func continuityDevicePicker(isPresented: Binding<Bool>, onDidConnect: ((AVContinuityDevice?) -> Void)?) -> some View](/documentation/swiftui/view/continuitydevicepicker(ispresented:ondidconnect:))
- [func controlWidgetActionHint(_:)](/documentation/swiftui/view/controlwidgetactionhint(_:))
- [func controlWidgetStatus(_:)](/documentation/swiftui/view/controlwidgetstatus(_:))
- [func currentEntitlementTask(for: String, priority: TaskPriority, action: (EntitlementTaskState<VerificationResult<Transaction>?>) async -> ()) -> some View](/documentation/swiftui/view/currententitlementtask(for:priority:action:))
- [func dialogPreventsAppTermination(Bool?) -> some View](/documentation/swiftui/view/dialogpreventsapptermination(_:))
- [func documentBrowserContextMenu(([URL]?) -> some View) -> some View](/documentation/swiftui/view/documentbrowsercontextmenu(_:))
- [func dragConfiguration(DragConfiguration) -> some View](/documentation/swiftui/view/dragconfiguration(_:))
- [func dragContainer(for:in:_:)](/documentation/swiftui/view/dragcontainer(for:in:_:))
- [func dragContainer(for:itemID:in:_:)](/documentation/swiftui/view/dragcontainer(for:itemid:in:_:))
- [func dragContainerSelection<ItemID>(@autoclosure () -> Array<ItemID>, containerNamespace: Namespace.ID?) -> some View](/documentation/swiftui/view/dragcontainerselection(_:containernamespace:))
- [func dragPreviewsFormation(DragDropPreviewsFormation) -> some View](/documentation/swiftui/view/dragpreviewsformation(_:))
- [func draggable<Item>(Item.Type, containerNamespace: Namespace.ID?, () -> Item?) -> some View](/documentation/swiftui/view/draggable(_:containernamespace:_:))
- [func draggable<Item, ItemID>(Item.Type, id: KeyPath<Item, ItemID>, containerNamespace: Namespace.ID?, () -> Item?) -> some View](/documentation/swiftui/view/draggable(_:id:containernamespace:_:))
- [func draggable<Item, ItemID>(Item.Type, id: KeyPath<Item, ItemID>, item: @autoclosure () -> Item?, containerNamespace: Namespace.ID?) -> some View](/documentation/swiftui/view/draggable(_:id:item:containernamespace:))
- [func draggable<Item>(Item.Type, item: @autoclosure () -> Item?, containerNamespace: Namespace.ID?) -> some View](/documentation/swiftui/view/draggable(_:item:containernamespace:))
- [func draggable<ItemID>(containerItemID: ItemID, containerNamespace: Namespace.ID?) -> some View](/documentation/swiftui/view/draggable(containeritemid:containernamespace:))
- [func dropConfiguration((DropSession) -> DropConfiguration) -> some View](/documentation/swiftui/view/dropconfiguration(_:))
- [func dropDestination<T>(for: T.Type, isEnabled: Bool, action: ([T], DropSession) -> Void) -> some View](/documentation/swiftui/view/dropdestination(for:isenabled:action:))
- [func dropPreviewsFormation(DragDropPreviewsFormation) -> some View](/documentation/swiftui/view/droppreviewsformation(_:))
- [func familyActivityPicker(title: String?, headerText: String?, footerText: String?, isPresented: Binding<Bool>, selection: Binding<FamilyActivitySelection>) -> some View](/documentation/swiftui/view/familyactivitypicker(title:headertext:footertext:ispresented:selection:))
- [func formStyle<S>(S) -> some View](/documentation/swiftui/view/formstyle(_:))
- [func foveatedStreamingPauseSheet(session: Binding<FoveatedStreamingSession?>) -> some View](/documentation/swiftui/view/foveatedstreamingpausesheet(session:)) **Beta**
- [func gameSaveSyncingAlert(directory: Binding<GameSaveSyncedDirectory?>, finishedLoading: () -> Void) -> some View](/documentation/swiftui/view/gamesavesyncingalert(directory:finishedloading:))
- [func glassBackgroundEffect<S>(S, displayMode: GlassBackgroundDisplayMode) -> some View](/documentation/swiftui/view/glassbackgroundeffect(_:displaymode:))
- [func glassBackgroundEffect<T, S>(S, in: T, displayMode: GlassBackgroundDisplayMode) -> some View](/documentation/swiftui/view/glassbackgroundeffect(_:in:displaymode:))
- [func glassEffect(Glass, in: some Shape) -> some View](/documentation/swiftui/view/glasseffect(_:in:))
- [func glassEffectID((some Hashable & Sendable)?, in: Namespace.ID) -> some View](/documentation/swiftui/view/glasseffectid(_:in:))
- [func glassEffectTransition(GlassEffectTransition) -> some View](/documentation/swiftui/view/glasseffecttransition(_:))
- [func glassEffectUnion(id: (some Hashable & Sendable)?, namespace: Namespace.ID) -> some View](/documentation/swiftui/view/glasseffectunion(id:namespace:))
- [func groupActivityAssociation(GroupActivityAssociationKind?) -> some View](/documentation/swiftui/view/groupactivityassociation(_:))
- [func handGestureShortcut(HandGestureShortcut, isEnabled: Bool) -> some View](/documentation/swiftui/view/handgestureshortcut(_:isenabled:))
- [func handPointerBehavior(HandPointerBehavior?) -> some View](/documentation/swiftui/view/handpointerbehavior(_:))
- [func handlesGameControllerEvents(matching: GCUIEventTypes) -> some View](/documentation/swiftui/view/handlesgamecontrollerevents(matching:))
- [func handlesGameControllerEvents(matching: GCUIEventTypes, withOptions: GameControllerEventHandlingOptions?) -> some View](/documentation/swiftui/view/handlesgamecontrollerevents(matching:withoptions:))
- [func healthDataAccessRequest(store: HKHealthStore, objectType: HKObjectType, predicate: NSPredicate?, trigger: some Equatable, completion: (Result<Bool, any Error>) -> Void) -> some View](/documentation/swiftui/view/healthdataaccessrequest(store:objecttype:predicate:trigger:completion:))
- [func healthDataAccessRequest(store: HKHealthStore, readTypes: Set<HKObjectType>, trigger: some Equatable, completion: (Result<Bool, any Error>) -> Void) -> some View](/documentation/swiftui/view/healthdataaccessrequest(store:readtypes:trigger:completion:))
- [func healthDataAccessRequest(store: HKHealthStore, shareTypes: Set<HKSampleType>, readTypes: Set<HKObjectType>?, trigger: some Equatable, completion: (Result<Bool, any Error>) -> Void) -> some View](/documentation/swiftui/view/healthdataaccessrequest(store:sharetypes:readtypes:trigger:completion:))
- [func imagePlaygroundGenerationStyle(ImagePlaygroundStyle, in: [ImagePlaygroundStyle]) -> some View](/documentation/swiftui/view/imageplaygroundgenerationstyle(_:in:))
- [func imagePlaygroundOptions(ImagePlaygroundOptions) -> some View](/documentation/swiftui/view/imageplaygroundoptions(_:)) **Beta**
- [func imagePlaygroundPersonalizationPolicy(ImagePlaygroundPersonalizationPolicy) -> some View](/documentation/swiftui/view/imageplaygroundpersonalizationpolicy(_:))
- [func imagePlaygroundSheet(isPresented: Binding<Bool>, concept: String, sourceImage: Image?, onCompletion: (URL) -> Void, onCancellation: (() -> Void)?) -> some View](/documentation/swiftui/view/imageplaygroundsheet(ispresented:concept:sourceimage:oncompletion:oncancellation:))
- [func imagePlaygroundSheet(isPresented: Binding<Bool>, concept: String, sourceImageURL: URL, onCompletion: (URL) -> Void, onCancellation: (() -> Void)?) -> some View](/documentation/swiftui/view/imageplaygroundsheet(ispresented:concept:sourceimageurl:oncompletion:oncancellation:))
- [func imagePlaygroundSheet(isPresented: Binding<Bool>, concepts: [ImagePlaygroundConcept], sourceImage: Image?, onCompletion: (URL) -> Void, onCancellation: (() -> Void)?) -> some View](/documentation/swiftui/view/imageplaygroundsheet(ispresented:concepts:sourceimage:oncompletion:oncancellation:))
- [func imagePlaygroundSheet(isPresented: Binding<Bool>, concepts: [ImagePlaygroundConcept], sourceImageURL: URL, onCompletion: (URL) -> Void, onCancellation: (() -> Void)?) -> some View](/documentation/swiftui/view/imageplaygroundsheet(ispresented:concepts:sourceimageurl:oncompletion:oncancellation:))
- [func immersiveEnvironmentPicker<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/immersiveenvironmentpicker(content:))
- [func inAppPurchaseOptions(((Product) async -> Set<Product.PurchaseOption>)?) -> some View](/documentation/swiftui/view/inapppurchaseoptions(_:))
- [func journalingSuggestionsPicker(isPresented: Binding<Bool>, journalingSuggestionToken: JournalingSuggestionPresentationToken?, onCompletion: (JournalingSuggestion) async -> Void) -> some View](/documentation/swiftui/view/journalingsuggestionspicker(ispresented:journalingsuggestiontoken:oncompletion:))
- [func journalingSuggestionsPicker(isPresented: Binding<Bool>, onCompletion: (JournalingSuggestion) async -> Void) -> some View](/documentation/swiftui/view/journalingsuggestionspicker(ispresented:oncompletion:))
- [func labelIconToTitleSpacing(CGFloat) -> some View](/documentation/swiftui/view/labelicontotitlespacing(_:))
- [func labelReservedIconWidth(CGFloat) -> some View](/documentation/swiftui/view/labelreservediconwidth(_:))
- [func labeledContentStyle<S>(S) -> some View](/documentation/swiftui/view/labeledcontentstyle(_:))
- [func labelsVisibility(Visibility) -> some View](/documentation/swiftui/view/labelsvisibility(_:))
- [func lineHeight(AttributedString.LineHeight?) -> some View](/documentation/swiftui/view/lineheight(_:))
- [func listRowInsets(Edge.Set, CGFloat?) -> some View](/documentation/swiftui/view/listrowinsets(_:_:))
- [func listSectionIndexVisibility(Visibility) -> some View](/documentation/swiftui/view/listsectionindexvisibility(_:))
- [func listSectionMargins(Edge.Set, CGFloat?) -> some View](/documentation/swiftui/view/listsectionmargins(_:_:))
- [func lookAroundViewer(isPresented: Binding<Bool>, initialScene: MKLookAroundScene?, allowsNavigation: Bool, showsRoadLabels: Bool, pointsOfInterest: PointOfInterestCategories, onDismiss: (() -> Void)?) -> some View](/documentation/swiftui/view/lookaroundviewer(ispresented:initialscene:allowsnavigation:showsroadlabels:pointsofinterest:ondismiss:))
- [func lookAroundViewer(isPresented: Binding<Bool>, scene: Binding<MKLookAroundScene?>, allowsNavigation: Bool, showsRoadLabels: Bool, pointsOfInterest: PointOfInterestCategories, onDismiss: (() -> Void)?) -> some View](/documentation/swiftui/view/lookaroundviewer(ispresented:scene:allowsnavigation:showsroadlabels:pointsofinterest:ondismiss:))
- [func manageSubscriptionsSheet(isPresented: Binding<Bool>, subscriptionGroupID: String) -> some View](/documentation/swiftui/view/managesubscriptionssheet(ispresented:subscriptiongroupid:))
- [func managedContentStyle(ManagedContentStyle) -> some View](/documentation/swiftui/view/managedcontentstyle(_:))
- [func manipulable(coordinateSpace: some CoordinateSpaceProtocol, operations: Manipulable.Operation.Set, inertia: Manipulable.Inertia, isEnabled: Bool, onChanged: ((Manipulable.Event) -> Void)?) -> some View](/documentation/swiftui/view/manipulable(coordinatespace:operations:inertia:isenabled:onchanged:))
- [func manipulable(transform: Binding<AffineTransform3D>, coordinateSpace: some CoordinateSpaceProtocol, operations: Manipulable.Operation.Set, inertia: Manipulable.Inertia, isEnabled: Bool, onChanged: ((Manipulable.Event) -> Void)?) -> some View](/documentation/swiftui/view/manipulable(transform:coordinatespace:operations:inertia:isenabled:onchanged:))
- [func manipulable(using: Manipulable.GestureState) -> some View](/documentation/swiftui/view/manipulable(using:))
- [func manipulationGesture(updating: Binding<Manipulable.GestureState>, coordinateSpace: some CoordinateSpaceProtocol, operations: Manipulable.Operation.Set, inertia: Manipulable.Inertia, isEnabled: Bool, onChanged: ((Manipulable.Event) -> Void)?) -> some View](/documentation/swiftui/view/manipulationgesture(updating:coordinatespace:operations:inertia:isenabled:onchanged:))
- [func mapCameraKeyframeAnimator(trigger: some Equatable, keyframes: (MapCamera) -> some Keyframes<MapCamera>) -> some View](/documentation/swiftui/view/mapcamerakeyframeanimator(trigger:keyframes:))
- [func mapControlVisibility(Visibility) -> some View](/documentation/swiftui/view/mapcontrolvisibility(_:))
- [func mapControls(() -> some View) -> some View](/documentation/swiftui/view/mapcontrols(_:))
- [func mapFeatureSelectionAccessory(MapItemDetailSelectionAccessoryStyle?) -> some View](/documentation/swiftui/view/mapfeatureselectionaccessory(_:))
- [func mapFeatureSelectionContent(content: (MapFeature) -> some MapContent) -> some View](/documentation/swiftui/view/mapfeatureselectioncontent(content:))
- [func mapFeatureSelectionDisabled((MapFeature) -> Bool) -> some View](/documentation/swiftui/view/mapfeatureselectiondisabled(_:))
- [func mapItemDetailPopover(isPresented: Binding<Bool>, item: MKMapItem?, displaysMap: Bool, attachmentAnchor: PopoverAttachmentAnchor) -> some View](/documentation/swiftui/view/mapitemdetailpopover(ispresented:item:displaysmap:attachmentanchor:))
- [func mapItemDetailPopover(isPresented: Binding<Bool>, item: MKMapItem?, displaysMap: Bool, attachmentAnchor: PopoverAttachmentAnchor, arrowEdge: Edge) -> some View](/documentation/swiftui/view/mapitemdetailpopover(ispresented:item:displaysmap:attachmentanchor:arrowedge:))
- [func mapItemDetailPopover(item: Binding<MKMapItem?>, displaysMap: Bool, attachmentAnchor: PopoverAttachmentAnchor) -> some View](/documentation/swiftui/view/mapitemdetailpopover(item:displaysmap:attachmentanchor:))
- [func mapItemDetailPopover(item: Binding<MKMapItem?>, displaysMap: Bool, attachmentAnchor: PopoverAttachmentAnchor, arrowEdge: Edge) -> some View](/documentation/swiftui/view/mapitemdetailpopover(item:displaysmap:attachmentanchor:arrowedge:))
- [func mapItemDetailSheet(isPresented: Binding<Bool>, item: MKMapItem?, displaysMap: Bool) -> some View](/documentation/swiftui/view/mapitemdetailsheet(ispresented:item:displaysmap:))
- [func mapItemDetailSheet(item: Binding<MKMapItem?>, displaysMap: Bool) -> some View](/documentation/swiftui/view/mapitemdetailsheet(item:displaysmap:))
- [func mapScope(Namespace.ID) -> some View](/documentation/swiftui/view/mapscope(_:))
- [func mapStyle(MapStyle) -> some View](/documentation/swiftui/view/mapstyle(_:))
- [func matchedTransitionSource(id: some Hashable, in: Namespace.ID) -> some View](/documentation/swiftui/view/matchedtransitionsource(id:in:))
- [func matchedTransitionSource(id: some Hashable, in: Namespace.ID, configuration: (EmptyMatchedTransitionSourceConfiguration) -> some MatchedTransitionSourceConfiguration) -> some View](/documentation/swiftui/view/matchedtransitionsource(id:in:configuration:))
- [func materialActiveAppearance(MaterialActiveAppearance) -> some View](/documentation/swiftui/view/materialactiveappearance(_:))
- [func navigationLinkIndicatorVisibility(Visibility) -> some View](/documentation/swiftui/view/navigationlinkindicatorvisibility(_:))
- [func navigationTransition(some NavigationTransition) -> some View](/documentation/swiftui/view/navigationtransition(_:))
- [func onAppIntentExecution<I>(I.Type, perform: (I) -> Void) -> some View](/documentation/swiftui/view/onappintentexecution(_:perform:))
- [func onApplePayCouponCodeChange(perform: (String) async -> PKPaymentRequestCouponCodeUpdate) -> some View](/documentation/swiftui/view/onapplepaycouponcodechange(perform:))
- [func onApplePayPaymentMethodChange(perform: (PKPaymentMethod) async -> PKPaymentRequestPaymentMethodUpdate) -> some View](/documentation/swiftui/view/onapplepaypaymentmethodchange(perform:))
- [func onApplePayShippingContactChange(perform: (PKContact) async -> PKPaymentRequestShippingContactUpdate) -> some View](/documentation/swiftui/view/onapplepayshippingcontactchange(perform:))
- [func onApplePayShippingMethodChange(perform: (PKShippingMethod) async -> PKPaymentRequestShippingMethodUpdate) -> some View](/documentation/swiftui/view/onapplepayshippingmethodchange(perform:))
- [func onCameraCaptureEvent(isEnabled:defaultSoundDisabled:action:)](/documentation/swiftui/view/oncameracaptureevent(isenabled:defaultsounddisabled:action:))
- [func onCameraCaptureEvent(isEnabled:defaultSoundDisabled:primaryAction:secondaryAction:)](/documentation/swiftui/view/oncameracaptureevent(isenabled:defaultsounddisabled:primaryaction:secondaryaction:))
- [func onDragSessionUpdated((DragSession) -> Void) -> some View](/documentation/swiftui/view/ondragsessionupdated(_:))
- [func onDropSessionUpdated((DropSession) -> Void) -> some View](/documentation/swiftui/view/ondropsessionupdated(_:))
- [func onGeometryChange3D(for:of:action:)](/documentation/swiftui/view/ongeometrychange3d(for:of:action:))
- [func onInAppPurchaseCompletion(perform: ((Product, Result<Product.PurchaseResult, any Error>) async -> ())?) -> some View](/documentation/swiftui/view/oninapppurchasecompletion(perform:))
- [func onInAppPurchaseStart(perform: ((Product) async -> ())?) -> some View](/documentation/swiftui/view/oninapppurchasestart(perform:))
- [func onInteractiveResizeChange((Bool) -> Void) -> some View](/documentation/swiftui/view/oninteractiveresizechange(_:))
- [func onMapCameraChange(frequency:_:)](/documentation/swiftui/view/onmapcamerachange(frequency:_:))
- [func onOpenURL(prefersInApp: Bool) -> some View](/documentation/swiftui/view/onopenurl(prefersinapp:))
- [func onWorldRecenter(action:)](/documentation/swiftui/view/onworldrecenter(action:))
- [func payLaterViewAction(PayLaterViewAction) -> some View](/documentation/swiftui/view/paylaterviewaction(_:))
- [func payLaterViewDisplayStyle(PayLaterViewDisplayStyle) -> some View](/documentation/swiftui/view/paylaterviewdisplaystyle(_:))
- [func payWithApplePayButtonDisableCardArt() -> some View](/documentation/swiftui/view/paywithapplepaybuttondisablecardart())
- [func payWithApplePayButtonStyle(PayWithApplePayButtonStyle) -> some View](/documentation/swiftui/view/paywithapplepaybuttonstyle(_:))
- [func popoverTip((any Tip)?, arrowEdge: Edge?, action: (Tips.Action) -> Void) -> some View](/documentation/swiftui/view/popovertip(_:arrowedge:action:))
- [func popoverTip((any Tip)?, isPresented: Binding<Bool>?, attachmentAnchor: PopoverAttachmentAnchor, arrowEdge: Edge?, action: (Tips.Action) -> Void) -> some View](/documentation/swiftui/view/popovertip(_:ispresented:attachmentanchor:arrowedge:action:))
- [func popoverTip((any Tip)?, isPresented: Binding<Bool>?, attachmentAnchor: PopoverAttachmentAnchor, arrowEdges: Edge.Set, action: (Tips.Action) -> Void) -> some View](/documentation/swiftui/view/popovertip(_:ispresented:attachmentanchor:arrowedges:action:))
- [func postToPhotosSharedAlbumSheet(isPresented:items:photoLibrary:defaultAlbumIdentifier:completion:)](/documentation/swiftui/view/posttophotossharedalbumsheet(ispresented:items:photolibrary:defaultalbumidentifier:completion:))
- [func preferredSubscriptionOffer((Product, Product.SubscriptionInfo, [Product.SubscriptionOffer]) -> Product.SubscriptionOffer?) -> some View](/documentation/swiftui/view/preferredsubscriptionoffer(_:))
- [func preferredWindowClippingMargins(_:_:)](/documentation/swiftui/view/preferredwindowclippingmargins(_:_:))
- [func presentationBreakthroughEffect(BreakthroughEffect) -> some View](/documentation/swiftui/view/presentationbreakthrougheffect(_:))
- [func presentationPreventsAppTermination(Bool?) -> some View](/documentation/swiftui/view/presentationpreventsapptermination(_:))
- [func productDescription(Visibility) -> some View](/documentation/swiftui/view/productdescription(_:))
- [func productIconBorder() -> some View](/documentation/swiftui/view/producticonborder())
- [func productViewStyle(some ProductViewStyle) -> some View](/documentation/swiftui/view/productviewstyle(_:))
- [func realityViewCameraControls(CameraControls) -> some View](/documentation/swiftui/view/realityviewcameracontrols(_:))
- [func realityViewLayoutBehavior(RealityViewLayoutOption) -> some View](/documentation/swiftui/view/realityviewlayoutbehavior(_:))
- [func rotation3DLayout(Rotation3D) -> some View](/documentation/swiftui/view/rotation3dlayout(_:))
- [func rotation3DLayout(_:axis:)](/documentation/swiftui/view/rotation3dlayout(_:axis:))
- [func safeAreaBar(edge:alignment:spacing:content:)](/documentation/swiftui/view/safeareabar(edge:alignment:spacing:content:))
- [func scaledToFill3D() -> some View](/documentation/swiftui/view/scaledtofill3d())
- [func scaledToFit3D() -> some View](/documentation/swiftui/view/scaledtofit3d())
- [func scrollEdgeEffectHidden(Bool, for: Edge.Set) -> some View](/documentation/swiftui/view/scrolledgeeffecthidden(_:for:))
- [func scrollEdgeEffectStyle(ScrollEdgeEffectStyle?, for: Edge.Set) -> some View](/documentation/swiftui/view/scrolledgeeffectstyle(_:for:))
- [func scrollInputBehavior(ScrollInputBehavior, for: ScrollInputKind) -> some View](/documentation/swiftui/view/scrollinputbehavior(_:for:))
- [func searchSelection(Binding<TextSelection?>) -> some View](/documentation/swiftui/view/searchselection(_:))
- [func searchToolbarBehavior(SearchToolbarBehavior) -> some View](/documentation/swiftui/view/searchtoolbarbehavior(_:))
- [func sectionIndexLabel(_:)](/documentation/swiftui/view/sectionindexlabel(_:))
- [func signInWithAppleButtonStyle(SignInWithAppleButton.Style) -> some View](/documentation/swiftui/view/signinwithapplebuttonstyle(_:))
- [func sliderThumbVisibility(Visibility) -> some View](/documentation/swiftui/view/sliderthumbvisibility(_:))
- [func spatialOverlay<V>(alignment: Alignment3D, content: () -> V) -> some View](/documentation/swiftui/view/spatialoverlay(alignment:content:))
- [func spatialOverlayPreferenceValue<K, V>(K.Type, alignment: Alignment3D, (K.Value) -> V) -> some View](/documentation/swiftui/view/spatialoverlaypreferencevalue(_:alignment:_:))
- [func storeButton(Visibility, for: StoreButtonKind...) -> some View](/documentation/swiftui/view/storebutton(_:for:))
- [func storeProductTask(for: Product.ID, priority: TaskPriority, action: (Product.TaskState) async -> ()) -> some View](/documentation/swiftui/view/storeproducttask(for:priority:action:))
- [func storeProductsTask(for: some Collection<String> & Equatable & Sendable, priority: TaskPriority, action: (Product.CollectionTaskState) async -> ()) -> some View](/documentation/swiftui/view/storeproductstask(for:priority:action:))
- [func subscriptionIntroductoryOffer(applyOffer: (Product, Product.SubscriptionInfo) -> Bool, compactJWS: (Product, Product.SubscriptionInfo) async throws -> String) -> some View](/documentation/swiftui/view/subscriptionintroductoryoffer(applyoffer:compactjws:))
- [func subscriptionOfferViewButtonVisibility(Visibility, for: SubscriptionOfferViewButtonKind...) -> some View](/documentation/swiftui/view/subscriptionofferviewbuttonvisibility(_:for:))
- [func subscriptionOfferViewDetailAction((() -> ())?) -> some View](/documentation/swiftui/view/subscriptionofferviewdetailaction(_:))
- [func subscriptionOfferViewStyle(some SubscriptionOfferViewStyle) -> some View](/documentation/swiftui/view/subscriptionofferviewstyle(_:))
- [func subscriptionPromotionalOffer(offer: (Product, Product.SubscriptionInfo) -> Product.SubscriptionOffer?, compactJWS: (Product, Product.SubscriptionInfo, Product.SubscriptionOffer) async throws -> String) -> some View](/documentation/swiftui/view/subscriptionpromotionaloffer(offer:compactjws:))
- [func subscriptionPromotionalOffer(offer: (Product, Product.SubscriptionInfo) -> Product.SubscriptionOffer?, signature: (Product, Product.SubscriptionInfo, Product.SubscriptionOffer) async throws -> Product.SubscriptionOffer.Signature) -> some View](/documentation/swiftui/view/subscriptionpromotionaloffer(offer:signature:))
- [func subscriptionStatusTask(for: String, priority: TaskPriority, action: (EntitlementTaskState<[Product.SubscriptionInfo.Status]>) async -> ()) -> some View](/documentation/swiftui/view/subscriptionstatustask(for:priority:action:))
- [func subscriptionStoreButtonLabel(SubscriptionStoreButtonLabel) -> some View](/documentation/swiftui/view/subscriptionstorebuttonlabel(_:))
- [func subscriptionStoreControlBackground(_:)](/documentation/swiftui/view/subscriptionstorecontrolbackground(_:))
- [func subscriptionStoreControlIcon(icon: (Product, Product.SubscriptionInfo) -> some View) -> some View](/documentation/swiftui/view/subscriptionstorecontrolicon(icon:))
- [func subscriptionStoreControlStyle(some SubscriptionStoreControlStyle) -> some View](/documentation/swiftui/view/subscriptionstorecontrolstyle(_:))
- [func subscriptionStoreControlStyle<S>(S, placement: S.Placement) -> some View](/documentation/swiftui/view/subscriptionstorecontrolstyle(_:placement:))
- [func subscriptionStoreOptionGroupStyle(some SubscriptionOptionGroupStyle) -> some View](/documentation/swiftui/view/subscriptionstoreoptiongroupstyle(_:))
- [func subscriptionStorePickerItemBackground(some ShapeStyle) -> some View](/documentation/swiftui/view/subscriptionstorepickeritembackground(_:))
- [func subscriptionStorePickerItemBackground(some ShapeStyle, in: some Shape) -> some View](/documentation/swiftui/view/subscriptionstorepickeritembackground(_:in:))
- [func subscriptionStorePolicyDestination(for: SubscriptionStorePolicyKind, destination: () -> some View) -> some View](/documentation/swiftui/view/subscriptionstorepolicydestination(for:destination:))
- [func subscriptionStorePolicyDestination(url: URL, for: SubscriptionStorePolicyKind) -> some View](/documentation/swiftui/view/subscriptionstorepolicydestination(url:for:))
- [func subscriptionStorePolicyForegroundStyle(some ShapeStyle) -> some View](/documentation/swiftui/view/subscriptionstorepolicyforegroundstyle(_:))
- [func subscriptionStorePolicyForegroundStyle(some ShapeStyle, some ShapeStyle) -> some View](/documentation/swiftui/view/subscriptionstorepolicyforegroundstyle(_:_:))
- [func subscriptionStoreSignInAction((() -> ())?) -> some View](/documentation/swiftui/view/subscriptionstoresigninaction(_:))
- [func symbolColorRenderingMode(SymbolColorRenderingMode?) -> some View](/documentation/swiftui/view/symbolcolorrenderingmode(_:))
- [func symbolVariableValueMode(SymbolVariableValueMode?) -> some View](/documentation/swiftui/view/symbolvariablevaluemode(_:))
- [func tabBarMinimizeBehavior(TabBarMinimizeBehavior) -> some View](/documentation/swiftui/view/tabbarminimizebehavior(_:))
- [func tabViewBottomAccessory<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/tabviewbottomaccessory(content:))
- [func tabViewBottomAccessory<Content>(isEnabled: Bool, content: () -> Content) -> some View](/documentation/swiftui/view/tabviewbottomaccessory(isenabled:content:))
- [func tabViewSearchActivation(TabSearchActivation) -> some View](/documentation/swiftui/view/tabviewsearchactivation(_:))
- [func tabletopGame(TabletopGame, parent: Entity, automaticUpdate: Bool) -> some View](/documentation/swiftui/view/tabletopgame(_:parent:automaticupdate:))
- [func tabletopGame(TabletopGame, parent: Entity, automaticUpdate: Bool, interaction: (TabletopInteraction.Value) -> any TabletopInteraction.Delegate) -> some View](/documentation/swiftui/view/tabletopgame(_:parent:automaticupdate:interaction:))
- [func task<T>(id: T, name: String?, executorPreference: any TaskExecutor, priority: TaskPriority, file: String, line: Int, sending () async -> Void) -> some View](/documentation/swiftui/view/task(id:name:executorpreference:priority:file:line:_:)) **Beta**
- [func task<T>(id: T, name: String?, priority: TaskPriority, file: String, line: Int, sending () async -> Void) -> some View](/documentation/swiftui/view/task(id:name:priority:file:line:_:))
- [func task(name: String?, executorPreference: any TaskExecutor, priority: TaskPriority, file: String, line: Int, action: sending () async -> Void) -> some View](/documentation/swiftui/view/task(name:executorpreference:priority:file:line:action:)) **Beta**
- [func task(name: String?, priority: TaskPriority, file: String, line: Int, sending () async -> Void) -> some View](/documentation/swiftui/view/task(name:priority:file:line:_:))
- [func textContentType(_:)](/documentation/swiftui/view/textcontenttype(_:))
- [func textInputFormattingControlVisibility(Visibility, for: TextInputFormattingControlPlacement.Set) -> some View](/documentation/swiftui/view/textinputformattingcontrolvisibility(_:for:))
- [func textRenderer<T>(T) -> some View](/documentation/swiftui/view/textrenderer(_:))
- [func textSelectionAffinity(TextSelectionAffinity) -> some View](/documentation/swiftui/view/textselectionaffinity(_:))
- [func tipAnchor<AnchorID>(AnchorID) -> some View](/documentation/swiftui/view/tipanchor(_:))
- [func tipBackground<S>(S) -> some View](/documentation/swiftui/view/tipbackground(_:))
- [func tipBackgroundInteraction(PresentationBackgroundInteraction) -> some View](/documentation/swiftui/view/tipbackgroundinteraction(_:))
- [func tipCornerRadius(CGFloat, antialiased: Bool) -> some View](/documentation/swiftui/view/tipcornerradius(_:antialiased:))
- [func tipImageSize(CGSize) -> some View](/documentation/swiftui/view/tipimagesize(_:))
- [func tipImageStyle<S>(S) -> some View](/documentation/swiftui/view/tipimagestyle(_:))
- [func tipImageStyle<S1, S2>(S1, S2) -> some View](/documentation/swiftui/view/tipimagestyle(_:_:))
- [func tipImageStyle<S1, S2, S3>(S1, S2, S3) -> some View](/documentation/swiftui/view/tipimagestyle(_:_:_:))
- [func tipViewStyle(some TipViewStyle) -> some View](/documentation/swiftui/view/tipviewstyle(_:))
- [func toolbarItemHidden(Bool) -> some View](/documentation/swiftui/view/toolbaritemhidden(_:))
- [func transactionPicker(isPresented: Binding<Bool>, selection: Binding<[Transaction]>) -> some View](/documentation/swiftui/view/transactionpicker(ispresented:selection:))
- [func transactionTask(CredentialTransaction.Configuration?, action: (CredentialTransaction) async -> Void) -> some View](/documentation/swiftui/view/transactiontask(_:action:))
- [func verifyIdentityWithWalletButtonStyle(VerifyIdentityWithWalletButtonStyle) -> some View](/documentation/swiftui/view/verifyidentitywithwalletbuttonstyle(_:))
- [func webViewBackForwardNavigationGestures(WebView.BackForwardNavigationGesturesBehavior) -> some View](/documentation/swiftui/view/webviewbackforwardnavigationgestures(_:))
- [func webViewContentBackground(Visibility) -> some View](/documentation/swiftui/view/webviewcontentbackground(_:))
- [func webViewContextMenu(menu: (WebView.ActivatedElementInfo) -> some View) -> some View](/documentation/swiftui/view/webviewcontextmenu(menu:))
- [func webViewElementFullscreenBehavior(WebView.ElementFullscreenBehavior) -> some View](/documentation/swiftui/view/webviewelementfullscreenbehavior(_:))
- [func webViewLinkPreviews(WebView.LinkPreviewBehavior) -> some View](/documentation/swiftui/view/webviewlinkpreviews(_:))
- [func webViewMagnificationGestures(WebView.MagnificationGesturesBehavior) -> some View](/documentation/swiftui/view/webviewmagnificationgestures(_:))
- [func webViewOnScrollGeometryChange<T>(for: T.Type, of: (ScrollGeometry) -> T, action: (T, T) -> Void) -> some View](/documentation/swiftui/view/webviewonscrollgeometrychange(for:of:action:))
- [func webViewScrollInputBehavior(ScrollInputBehavior, for: ScrollInputKind) -> some View](/documentation/swiftui/view/webviewscrollinputbehavior(_:for:))
- [func webViewScrollPosition(Binding<ScrollPosition>) -> some View](/documentation/swiftui/view/webviewscrollposition(_:))
- [func webViewTextSelection<S>(S) -> some View](/documentation/swiftui/view/webviewtextselection(_:))
- [func windowResizeAnchor(UnitPoint?) -> some View](/documentation/swiftui/view/windowresizeanchor(_:))
- [func windowToolbarFullScreenVisibility(WindowToolbarFullScreenVisibility) -> some View](/documentation/swiftui/view/windowtoolbarfullscreenvisibility(_:))
- [func workoutPreview(WorkoutPlan, isPresented: Binding<Bool>) -> some View](/documentation/swiftui/view/workoutpreview(_:ispresented:))
- [func writingDirection(strategy: Text.WritingDirectionStrategy) -> some View](/documentation/swiftui/view/writingdirection(strategy:))
- [func writingToolsAffordanceVisibility(Visibility) -> some View](/documentation/swiftui/view/writingtoolsaffordancevisibility(_:))
- [func writingToolsBehavior(WritingToolsBehavior) -> some View](/documentation/swiftui/view/writingtoolsbehavior(_:))
- [ViewBuilder](/documentation/swiftui/viewbuilder)

#### Building content

- [static func buildBlock() -> EmptyView](/documentation/swiftui/viewbuilder/buildblock())
- [static buildBlock(_:)](/documentation/swiftui/viewbuilder/buildblock(_:))
- [static func buildExpression<Content>(Content) -> Content](/documentation/swiftui/viewbuilder/buildexpression(_:))

#### Conditionally building content

- [static func buildEither<TrueContent, FalseContent>(first: TrueContent) -> _ConditionalContent<TrueContent, FalseContent>](/documentation/swiftui/viewbuilder/buildeither(first:))
- [static func buildEither<TrueContent, FalseContent>(second: FalseContent) -> _ConditionalContent<TrueContent, FalseContent>](/documentation/swiftui/viewbuilder/buildeither(second:))
- [static func buildIf<Content>(Content?) -> Content?](/documentation/swiftui/viewbuilder/buildif(_:))
- [static func buildLimitedAvailability<Content>(Content) -> AnyView](/documentation/swiftui/viewbuilder/buildlimitedavailability(_:))

### Modifying a view

- [Configuring views](/documentation/swiftui/configuring-views)
- [Reducing view modifier maintenance](/documentation/swiftui/reducing-view-modifier-maintenance)
- [func modifier<T>(T) -> ModifiedContent<Self, T>](/documentation/swiftui/view/modifier(_:))
- [ViewModifier](/documentation/swiftui/viewmodifier)

#### Creating a view modifier

- [func body(content: Self.Content) -> Self.Body](/documentation/swiftui/viewmodifier/body(content:))
- [Body](/documentation/swiftui/viewmodifier/body)
- [ViewModifier.Content](/documentation/swiftui/viewmodifier/content)

#### Adding animations to a view

- [func animation(Animation?) -> some ViewModifier](/documentation/swiftui/viewmodifier/animation(_:))
- [func concat<T>(T) -> ModifiedContent<Self, T>](/documentation/swiftui/viewmodifier/concat(_:))

#### Handling view taps and gestures

- [func transaction((inout Transaction) -> Void) -> some ViewModifier](/documentation/swiftui/viewmodifier/transaction(_:))
- [EmptyModifier](/documentation/swiftui/emptymodifier)

#### Creating an empty modifier

- [init()](/documentation/swiftui/emptymodifier/init())

#### Getting the identity modifier

- [static let identity: EmptyModifier](/documentation/swiftui/emptymodifier/identity)
- [ModifiedContent](/documentation/swiftui/modifiedcontent)

#### Creating a modified content view

- [init(content: Content, modifier: Modifier)](/documentation/swiftui/modifiedcontent/init(content:modifier:))
- [var content: Content](/documentation/swiftui/modifiedcontent/content)
- [var modifier: Modifier](/documentation/swiftui/modifiedcontent/modifier)

#### Instance Methods

- [func accessibility(activationPoint:)](/documentation/swiftui/modifiedcontent/accessibility(activationpoint:))
- [func accessibility(addTraits: AccessibilityTraits) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibility(addtraits:))
- [func accessibility(hidden: Bool) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibility(hidden:))
- [func accessibility(hint: Text) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibility(hint:))
- [func accessibility(identifier: String) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibility(identifier:))
- [func accessibility(inputLabels: [Text]) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibility(inputlabels:))
- [func accessibility(label: Text) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibility(label:))
- [func accessibility(removeTraits: AccessibilityTraits) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibility(removetraits:))
- [func accessibility(selectionIdentifier: AnyHashable) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibility(selectionidentifier:))
- [func accessibility(sortPriority: Double) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibility(sortpriority:))
- [func accessibility(value: Text) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibility(value:))
- [func accessibilityAction(AccessibilityActionKind, () -> Void) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilityaction(_:_:))
- [func accessibilityAction<I>(AccessibilityActionKind, intent: I) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilityaction(_:intent:))
- [func accessibilityAction(named:_:)](/documentation/swiftui/modifiedcontent/accessibilityaction(named:_:))
- [func accessibilityAction(named:intent:)](/documentation/swiftui/modifiedcontent/accessibilityaction(named:intent:))
- [func accessibilityActivationPoint(_:)](/documentation/swiftui/modifiedcontent/accessibilityactivationpoint(_:))
- [func accessibilityActivationPoint(_:isEnabled:)](/documentation/swiftui/modifiedcontent/accessibilityactivationpoint(_:isenabled:))
- [func accessibilityAddTraits(AccessibilityTraits) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilityaddtraits(_:))
- [func accessibilityAdjustableAction((AccessibilityAdjustmentDirection) -> Void) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilityadjustableaction(_:))
- [func accessibilityCustomContent(_:_:importance:)](/documentation/swiftui/modifiedcontent/accessibilitycustomcontent(_:_:importance:))
- [func accessibilityDirectTouch(Bool, options: AccessibilityDirectTouchOptions) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilitydirecttouch(_:options:))
- [func accessibilityDragPoint(_:description:)](/documentation/swiftui/modifiedcontent/accessibilitydragpoint(_:description:))
- [func accessibilityDragPoint(_:description:isEnabled:)](/documentation/swiftui/modifiedcontent/accessibilitydragpoint(_:description:isenabled:))
- [func accessibilityDropPoint(_:description:)](/documentation/swiftui/modifiedcontent/accessibilitydroppoint(_:description:))
- [func accessibilityDropPoint(_:description:isEnabled:)](/documentation/swiftui/modifiedcontent/accessibilitydroppoint(_:description:isenabled:))
- [func accessibilityHeading(AccessibilityHeadingLevel) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilityheading(_:))
- [func accessibilityHidden(Bool) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilityhidden(_:))
- [func accessibilityHidden(Bool, isEnabled: Bool) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilityhidden(_:isenabled:))
- [func accessibilityHint(_:)](/documentation/swiftui/modifiedcontent/accessibilityhint(_:))
- [func accessibilityHint(_:isEnabled:)](/documentation/swiftui/modifiedcontent/accessibilityhint(_:isenabled:))
- [func accessibilityIdentifier(String) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilityidentifier(_:))
- [func accessibilityIdentifier(String, isEnabled: Bool) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilityidentifier(_:isenabled:))
- [func accessibilityInputLabels(_:)](/documentation/swiftui/modifiedcontent/accessibilityinputlabels(_:))
- [func accessibilityInputLabels(_:isEnabled:)](/documentation/swiftui/modifiedcontent/accessibilityinputlabels(_:isenabled:))
- [func accessibilityLabel(_:)](/documentation/swiftui/modifiedcontent/accessibilitylabel(_:))
- [func accessibilityLabel(_:isEnabled:)](/documentation/swiftui/modifiedcontent/accessibilitylabel(_:isenabled:))
- [func accessibilityRemoveTraits(AccessibilityTraits) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilityremovetraits(_:))
- [func accessibilityRespondsToUserInteraction(Bool) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilityrespondstouserinteraction(_:))
- [func accessibilityRespondsToUserInteraction(Bool, isEnabled: Bool) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilityrespondstouserinteraction(_:isenabled:))
- [func accessibilityScrollAction((Edge) -> Void) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilityscrollaction(_:))
- [func accessibilityScrollStatus(_:isEnabled:)](/documentation/swiftui/modifiedcontent/accessibilityscrollstatus(_:isenabled:))
- [func accessibilitySortPriority(Double) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilitysortpriority(_:))
- [func accessibilityTextContentType(AccessibilityTextContentType) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilitytextcontenttype(_:))
- [func accessibilityValue(_:)](/documentation/swiftui/modifiedcontent/accessibilityvalue(_:))
- [func accessibilityValue(_:isEnabled:)](/documentation/swiftui/modifiedcontent/accessibilityvalue(_:isenabled:))
- [func accessibilityZoomAction((AccessibilityZoomGestureAction) -> Void) -> ModifiedContent<Content, Modifier>](/documentation/swiftui/modifiedcontent/accessibilityzoomaction(_:))
- [EnvironmentalModifier](/documentation/swiftui/environmentalmodifier)

#### Resolving a modifier

- [func resolve(in: EnvironmentValues) -> Self.ResolvedModifier](/documentation/swiftui/environmentalmodifier/resolve(in:))
- [ResolvedModifier](/documentation/swiftui/environmentalmodifier/resolvedmodifier)
- [ManipulableModifier](/documentation/swiftui/manipulablemodifier)
- [ManipulableResponderModifier](/documentation/swiftui/manipulablerespondermodifier)
- [ManipulableTransformBindingModifier](/documentation/swiftui/manipulabletransformbindingmodifier)
- [ManipulationGeometryModifier](/documentation/swiftui/manipulationgeometrymodifier)
- [ManipulationGestureModifier](/documentation/swiftui/manipulationgesturemodifier)
- [ManipulationUsingGestureStateModifier](/documentation/swiftui/manipulationusinggesturestatemodifier)
- [Manipulable](/documentation/swiftui/manipulable)

#### Structures

- [Manipulable.Event](/documentation/swiftui/manipulable/event)

##### Structures

- [Manipulable.Event.Value](/documentation/swiftui/manipulable/event/value-swift.struct)

###### Instance Properties

- [let frame: Rect3D](/documentation/swiftui/manipulable/event/value-swift.struct/frame)
- [let inputDevices: [Manipulable.InputDevice]](/documentation/swiftui/manipulable/event/value-swift.struct/inputdevices)
- [let interactionPoint: Point3D](/documentation/swiftui/manipulable/event/value-swift.struct/interactionpoint)
- [let timestamp: TimeInterval](/documentation/swiftui/manipulable/event/value-swift.struct/timestamp)
- [let transform: AffineTransform3D?](/documentation/swiftui/manipulable/event/value-swift.struct/transform)

##### Instance Properties

- [var phase: Manipulable.Event.Phase](/documentation/swiftui/manipulable/event/phase-swift.property)
- [var value: Manipulable.Event.Value?](/documentation/swiftui/manipulable/event/value-swift.property)

##### Enumerations

- [Manipulable.Event.Phase](/documentation/swiftui/manipulable/event/phase-swift.enum)

###### Enumeration Cases

- [case active(Manipulable.Event.Value)](/documentation/swiftui/manipulable/event/phase-swift.enum/active(_:))
- [case ended(Manipulable.Event.Value)](/documentation/swiftui/manipulable/event/phase-swift.enum/ended(_:))
- [case failed](/documentation/swiftui/manipulable/event/phase-swift.enum/failed)
- [Manipulable.GestureState](/documentation/swiftui/manipulable/gesturestate)

##### Initializers

- [init(transform: AffineTransform3D)](/documentation/swiftui/manipulable/gesturestate/init(transform:))

##### Instance Properties

- [var isActive: Bool](/documentation/swiftui/manipulable/gesturestate/isactive)
- [var transform: AffineTransform3D](/documentation/swiftui/manipulable/gesturestate/transform)
- [Manipulable.Inertia](/documentation/swiftui/manipulable/inertia)

##### Type Properties

- [static let high: Manipulable.Inertia](/documentation/swiftui/manipulable/inertia/high)
- [static let low: Manipulable.Inertia](/documentation/swiftui/manipulable/inertia/low)
- [static let medium: Manipulable.Inertia](/documentation/swiftui/manipulable/inertia/medium)
- [static let none: Manipulable.Inertia](/documentation/swiftui/manipulable/inertia/none)
- [Manipulable.InputDevice](/documentation/swiftui/manipulable/inputdevice)

##### Instance Properties

- [let chirality: Manipulable.InputDevice.Chirality?](/documentation/swiftui/manipulable/inputdevice/chirality-swift.property)
- [let kind: Manipulable.InputDevice.Kind](/documentation/swiftui/manipulable/inputdevice/kind-swift.property)
- [let pose: Pose3D?](/documentation/swiftui/manipulable/inputdevice/pose)

##### Enumerations

- [Manipulable.InputDevice.Chirality](/documentation/swiftui/manipulable/inputdevice/chirality-swift.enum)

###### Enumeration Cases

- [case left](/documentation/swiftui/manipulable/inputdevice/chirality-swift.enum/left)
- [case right](/documentation/swiftui/manipulable/inputdevice/chirality-swift.enum/right)
- [Manipulable.InputDevice.Kind](/documentation/swiftui/manipulable/inputdevice/kind-swift.enum)

###### Enumeration Cases

- [case directPinch](/documentation/swiftui/manipulable/inputdevice/kind-swift.enum/directpinch)
- [case indirectPinch](/documentation/swiftui/manipulable/inputdevice/kind-swift.enum/indirectpinch)
- [case pointer](/documentation/swiftui/manipulable/inputdevice/kind-swift.enum/pointer)
- [Manipulable.Operation](/documentation/swiftui/manipulable/operation)

##### Structures

- [Manipulable.Operation.Set](/documentation/swiftui/manipulable/operation/set)

###### Initializers

- [init(Manipulable.Operation)](/documentation/swiftui/manipulable/operation/set/init(_:))

###### Type Properties

- [static let all: Manipulable.Operation.Set](/documentation/swiftui/manipulable/operation/set/all)
- [static let primaryRotation: Manipulable.Operation.Set](/documentation/swiftui/manipulable/operation/set/primaryrotation)
- [static let scale: Manipulable.Operation.Set](/documentation/swiftui/manipulable/operation/set/scale)
- [static let secondaryRotation: Manipulable.Operation.Set](/documentation/swiftui/manipulable/operation/set/secondaryrotation)
- [static let translate: Manipulable.Operation.Set](/documentation/swiftui/manipulable/operation/set/translate)

##### Type Properties

- [static let primaryRotation: Manipulable.Operation](/documentation/swiftui/manipulable/operation/primaryrotation)
- [static let scale: Manipulable.Operation](/documentation/swiftui/manipulable/operation/scale)
- [static let secondaryRotation: Manipulable.Operation](/documentation/swiftui/manipulable/operation/secondaryrotation)
- [static let translate: Manipulable.Operation](/documentation/swiftui/manipulable/operation/translate)

### Responding to view life cycle updates

- [func onAppear(perform: (() -> Void)?) -> some View](/documentation/swiftui/view/onappear(perform:))
- [func onDisappear(perform: (() -> Void)?) -> some View](/documentation/swiftui/view/ondisappear(perform:))

### Managing the view hierarchy

- [func id<ID>(ID) -> some View](/documentation/swiftui/view/id(_:))
- [func tag<V>(V, includeOptional: Bool) -> some View](/documentation/swiftui/view/tag(_:includeoptional:))
- [func equatable() -> EquatableView<Self>](/documentation/swiftui/view/equatable())

### Supporting view types

- [AnyView](/documentation/swiftui/anyview)

#### Creating a view

- [init<V>(V)](/documentation/swiftui/anyview/init(_:))
- [init<V>(erasing: V)](/documentation/swiftui/anyview/init(erasing:))
- [EmptyView](/documentation/swiftui/emptyview)

#### Creating an empty view

- [init()](/documentation/swiftui/emptyview/init())
- [EquatableView](/documentation/swiftui/equatableview)

#### Creating an equatable view

- [init(content: Content)](/documentation/swiftui/equatableview/init(content:))
- [var content: Content](/documentation/swiftui/equatableview/content)
- [SubscriptionView](/documentation/swiftui/subscriptionview)

#### Creating a subscription view

- [init(content: Content, publisher: PublisherType, action: (PublisherType.Output) -> Void)](/documentation/swiftui/subscriptionview/init(content:publisher:action:))

#### Managing the subscription

- [var publisher: PublisherType](/documentation/swiftui/subscriptionview/publisher)
- [var action: (PublisherType.Output) -> Void](/documentation/swiftui/subscriptionview/action)
- [var content: Content](/documentation/swiftui/subscriptionview/content)
- [TupleView](/documentation/swiftui/tupleview)

#### Creating a tuple view

- [init(T)](/documentation/swiftui/tupleview/init(_:))
- [var value: T](/documentation/swiftui/tupleview/value)
- [View configuration](/documentation/swiftui/view-configuration)

### Hiding views

- [func opacity(Double) -> some View](/documentation/swiftui/view/opacity(_:))
- [func hidden() -> some View](/documentation/swiftui/view/hidden())

### Hiding system elements

- [func labelsHidden() -> some View](/documentation/swiftui/view/labelshidden())
- [func labelsVisibility(Visibility) -> some View](/documentation/swiftui/view/labelsvisibility(_:))
- [var labelsVisibility: Visibility](/documentation/swiftui/environmentvalues/labelsvisibility)
- [func menuIndicator(Visibility) -> some View](/documentation/swiftui/view/menuindicator(_:))
- [func statusBarHidden(Bool) -> some View](/documentation/swiftui/view/statusbarhidden(_:))
- [func persistentSystemOverlays(Visibility) -> some View](/documentation/swiftui/view/persistentsystemoverlays(_:))
- [Visibility](/documentation/swiftui/visibility)

#### Getting visibility options

- [case automatic](/documentation/swiftui/visibility/automatic)
- [case visible](/documentation/swiftui/visibility/visible)
- [case hidden](/documentation/swiftui/visibility/hidden)

### Managing view interaction

- [func disabled(Bool) -> some View](/documentation/swiftui/view/disabled(_:))
- [var isEnabled: Bool](/documentation/swiftui/environmentvalues/isenabled)
- [func interactionActivityTrackingTag(String) -> some View](/documentation/swiftui/view/interactionactivitytrackingtag(_:))
- [func invalidatableContent(Bool) -> some View](/documentation/swiftui/view/invalidatablecontent(_:))

### Providing contextual help

- [func help(_:)](/documentation/swiftui/view/help(_:))

### Detecting and requesting the light or dark appearance

- [func preferredColorScheme(ColorScheme?) -> some View](/documentation/swiftui/view/preferredcolorscheme(_:))
- [var colorScheme: ColorScheme](/documentation/swiftui/environmentvalues/colorscheme)
- [ColorScheme](/documentation/swiftui/colorscheme)

#### Getting color schemes

- [case light](/documentation/swiftui/colorscheme/light)
- [case dark](/documentation/swiftui/colorscheme/dark)

#### Creating a color scheme

- [init?(UIUserInterfaceStyle)](/documentation/swiftui/colorscheme/init(_:))

#### Supporting types

- [PreferredColorSchemeKey](/documentation/swiftui/preferredcolorschemekey)

### Getting the color scheme contrast

- [var colorSchemeContrast: ColorSchemeContrast](/documentation/swiftui/environmentvalues/colorschemecontrast)
- [ColorSchemeContrast](/documentation/swiftui/colorschemecontrast)

#### Getting contrast options

- [case standard](/documentation/swiftui/colorschemecontrast/standard)
- [case increased](/documentation/swiftui/colorschemecontrast/increased)

#### Creating a color scheme contrast

- [init?(UIAccessibilityContrast)](/documentation/swiftui/colorschemecontrast/init(_:))

### Configuring passthrough

- [func preferredSurroundingsEffect(SurroundingsEffect?) -> some View](/documentation/swiftui/view/preferredsurroundingseffect(_:))
- [SurroundingsEffect](/documentation/swiftui/surroundingseffect)

#### Getting the effect

- [static var systemDark: SurroundingsEffect](/documentation/swiftui/surroundingseffect/systemdark)

#### Type Properties

- [static var dark: SurroundingsEffect](/documentation/swiftui/surroundingseffect/dark)
- [static var semiDark: SurroundingsEffect](/documentation/swiftui/surroundingseffect/semidark)
- [static var ultraDark: SurroundingsEffect](/documentation/swiftui/surroundingseffect/ultradark)

#### Type Methods

- [static func colorMultiply(Color) -> SurroundingsEffect](/documentation/swiftui/surroundingseffect/colormultiply(_:))
- [static func dim(intensity: Double) -> SurroundingsEffect](/documentation/swiftui/surroundingseffect/dim(intensity:))
- [BreakthroughEffect](/documentation/swiftui/breakthrougheffect)

#### Type Properties

- [static let automatic: BreakthroughEffect](/documentation/swiftui/breakthrougheffect/automatic)
- [static let none: BreakthroughEffect](/documentation/swiftui/breakthrougheffect/none)
- [static let prominent: BreakthroughEffect](/documentation/swiftui/breakthrougheffect/prominent)
- [static let subtle: BreakthroughEffect](/documentation/swiftui/breakthrougheffect/subtle)

### Redacting private content

- [Designing your app for the Always On state](/documentation/watchos-apps/designing-your-app-for-the-always-on-state)
- [func privacySensitive(Bool) -> some View](/documentation/swiftui/view/privacysensitive(_:))
- [func redacted(reason: RedactionReasons) -> some View](/documentation/swiftui/view/redacted(reason:))
- [func unredacted() -> some View](/documentation/swiftui/view/unredacted())
- [var redactionReasons: RedactionReasons](/documentation/swiftui/environmentvalues/redactionreasons)
- [var isSceneCaptured: Bool](/documentation/swiftui/environmentvalues/isscenecaptured)
- [RedactionReasons](/documentation/swiftui/redactionreasons)

#### Getting redaction reasons

- [static let invalidated: RedactionReasons](/documentation/swiftui/redactionreasons/invalidated)
- [static let placeholder: RedactionReasons](/documentation/swiftui/redactionreasons/placeholder)
- [static let privacy: RedactionReasons](/documentation/swiftui/redactionreasons/privacy)

#### Creating redaction reasons

- [init(rawValue: Int)](/documentation/swiftui/redactionreasons/init(rawvalue:))
- [let rawValue: Int](/documentation/swiftui/redactionreasons/rawvalue)
- [View styles](/documentation/swiftui/view-styles)

### Styling views with Liquid Glass

- [Applying Liquid Glass to custom views](/documentation/swiftui/applying-liquid-glass-to-custom-views)
- [Landmarks: Building an app with Liquid Glass](/documentation/swiftui/landmarks-building-an-app-with-liquid-glass)

#### App features

- [Landmarks: Applying a background extension effect](/documentation/swiftui/landmarks-applying-a-background-extension-effect)
- [Landmarks: Extending horizontal scrolling under a sidebar or inspector](/documentation/swiftui/landmarks-extending-horizontal-scrolling-under-a-sidebar-or-inspector)
- [Landmarks: Refining the system provided Liquid Glass effect in toolbars](/documentation/swiftui/landmarks-refining-the-system-provided-glass-effect-in-toolbars)
- [Landmarks: Displaying custom activity badges](/documentation/swiftui/landmarks-displaying-custom-activity-badges)
- [func glassEffect(Glass, in: some Shape) -> some View](/documentation/swiftui/view/glasseffect(_:in:))
- [func interactive(Bool) -> Glass](/documentation/swiftui/glass/interactive(_:))
- [GlassEffectContainer](/documentation/swiftui/glasseffectcontainer)

#### Initializers

- [init(spacing: CGFloat?, content: () -> Content)](/documentation/swiftui/glasseffectcontainer/init(spacing:content:))
- [GlassEffectTransition](/documentation/swiftui/glasseffecttransition)

#### Type Properties

- [static var identity: GlassEffectTransition](/documentation/swiftui/glasseffecttransition/identity)
- [static var matchedGeometry: GlassEffectTransition](/documentation/swiftui/glasseffecttransition/matchedgeometry)
- [static var materialize: GlassEffectTransition](/documentation/swiftui/glasseffecttransition/materialize)
- [GlassButtonStyle](/documentation/swiftui/glassbuttonstyle)

#### Initializers

- [init()](/documentation/swiftui/glassbuttonstyle/init())
- [init(Glass)](/documentation/swiftui/glassbuttonstyle/init(_:))

#### Instance Methods

- [func makeBody(configuration: GlassButtonStyle.Configuration) -> some View](/documentation/swiftui/glassbuttonstyle/makebody(configuration:))
- [GlassProminentButtonStyle](/documentation/swiftui/glassprominentbuttonstyle)

#### Initializers

- [init()](/documentation/swiftui/glassprominentbuttonstyle/init())

#### Instance Methods

- [func makeBody(configuration: GlassProminentButtonStyle.Configuration) -> some View](/documentation/swiftui/glassprominentbuttonstyle/makebody(configuration:))
- [DefaultGlassEffectShape](/documentation/swiftui/defaultglasseffectshape)

#### Initializers

- [init()](/documentation/swiftui/defaultglasseffectshape/init())

### Styling buttons

- [func buttonStyle(_:)](/documentation/swiftui/view/buttonstyle(_:))
- [ButtonStyle](/documentation/swiftui/buttonstyle)

#### Custom button styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/buttonstyle/makebody(configuration:))
- [ButtonStyle.Configuration](/documentation/swiftui/buttonstyle/configuration)
- [Body](/documentation/swiftui/buttonstyle/body)
- [ButtonStyleConfiguration](/documentation/swiftui/buttonstyleconfiguration)

#### Configuring a button’s label

- [let label: ButtonStyleConfiguration.Label](/documentation/swiftui/buttonstyleconfiguration/label-swift.property)
- [ButtonStyleConfiguration.Label](/documentation/swiftui/buttonstyleconfiguration/label-swift.struct)

#### Configuring a button’s interaction state

- [let isPressed: Bool](/documentation/swiftui/buttonstyleconfiguration/ispressed)

#### Defining the button’s purpose

- [let role: ButtonRole?](/documentation/swiftui/buttonstyleconfiguration/role)
- [PrimitiveButtonStyle](/documentation/swiftui/primitivebuttonstyle)

#### Getting built-in button styles

- [static var automatic: DefaultButtonStyle](/documentation/swiftui/primitivebuttonstyle/automatic)
- [static var accessoryBar: AccessoryBarButtonStyle](/documentation/swiftui/primitivebuttonstyle/accessorybar)
- [static var accessoryBarAction: AccessoryBarActionButtonStyle](/documentation/swiftui/primitivebuttonstyle/accessorybaraction)
- [static var bordered: BorderedButtonStyle](/documentation/swiftui/primitivebuttonstyle/bordered)
- [static var borderedProminent: BorderedProminentButtonStyle](/documentation/swiftui/primitivebuttonstyle/borderedprominent)
- [static var borderless: BorderlessButtonStyle](/documentation/swiftui/primitivebuttonstyle/borderless)
- [static var card: CardButtonStyle](/documentation/swiftui/primitivebuttonstyle/card)
- [static var glass: GlassButtonStyle](/documentation/swiftui/primitivebuttonstyle/glass)
- [static var glassProminent: GlassProminentButtonStyle](/documentation/swiftui/primitivebuttonstyle/glassprominent)
- [static func glass(Glass) -> Self](/documentation/swiftui/primitivebuttonstyle/glass(_:))
- [static var link: LinkButtonStyle](/documentation/swiftui/primitivebuttonstyle/link)
- [static var plain: PlainButtonStyle](/documentation/swiftui/primitivebuttonstyle/plain)

#### Creating custom button styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/primitivebuttonstyle/makebody(configuration:))
- [PrimitiveButtonStyle.Configuration](/documentation/swiftui/primitivebuttonstyle/configuration)
- [Body](/documentation/swiftui/primitivebuttonstyle/body)

#### Supporting types

- [DefaultButtonStyle](/documentation/swiftui/defaultbuttonstyle)

##### Creating the button style

- [init()](/documentation/swiftui/defaultbuttonstyle/init())

##### Supporting types

- [func makeBody(configuration: DefaultButtonStyle.Configuration) -> some View](/documentation/swiftui/defaultbuttonstyle/makebody(configuration:))
- [AccessoryBarButtonStyle](/documentation/swiftui/accessorybarbuttonstyle)

##### Creating the button style

- [init()](/documentation/swiftui/accessorybarbuttonstyle/init())

##### Supporting types

- [func makeBody(configuration: AccessoryBarButtonStyle.Configuration) -> some View](/documentation/swiftui/accessorybarbuttonstyle/makebody(configuration:))
- [AccessoryBarActionButtonStyle](/documentation/swiftui/accessorybaractionbuttonstyle)

##### Creating the button style

- [init()](/documentation/swiftui/accessorybaractionbuttonstyle/init())

##### Supporting types

- [func makeBody(configuration: AccessoryBarActionButtonStyle.Configuration) -> some View](/documentation/swiftui/accessorybaractionbuttonstyle/makebody(configuration:))
- [BorderedButtonStyle](/documentation/swiftui/borderedbuttonstyle)

##### Creating the button style

- [init()](/documentation/swiftui/borderedbuttonstyle/init())

##### Supporting types

- [func makeBody(configuration: BorderedButtonStyle.Configuration) -> some View](/documentation/swiftui/borderedbuttonstyle/makebody(configuration:))

##### Deprecated symbols

- [init(tint: Color)](/documentation/swiftui/borderedbuttonstyle/init(tint:))
- [BorderedProminentButtonStyle](/documentation/swiftui/borderedprominentbuttonstyle)

##### Creating the button style

- [init()](/documentation/swiftui/borderedprominentbuttonstyle/init())
- [BorderlessButtonStyle](/documentation/swiftui/borderlessbuttonstyle)

##### Creating the button style

- [init()](/documentation/swiftui/borderlessbuttonstyle/init())

##### Supporting types

- [func makeBody(configuration: BorderlessButtonStyle.Configuration) -> some View](/documentation/swiftui/borderlessbuttonstyle/makebody(configuration:))
- [CardButtonStyle](/documentation/swiftui/cardbuttonstyle)

##### Creating the button style

- [init()](/documentation/swiftui/cardbuttonstyle/init())

##### Supporting types

- [func makeBody(configuration: CardButtonStyle.Configuration) -> some View](/documentation/swiftui/cardbuttonstyle/makebody(configuration:))
- [LinkButtonStyle](/documentation/swiftui/linkbuttonstyle)

##### Creating the button style

- [init()](/documentation/swiftui/linkbuttonstyle/init())

##### Supporting types

- [func makeBody(configuration: LinkButtonStyle.Configuration) -> some View](/documentation/swiftui/linkbuttonstyle/makebody(configuration:))
- [PlainButtonStyle](/documentation/swiftui/plainbuttonstyle)

##### Creating the button style

- [init()](/documentation/swiftui/plainbuttonstyle/init())

##### Supporting types

- [func makeBody(configuration: PlainButtonStyle.Configuration) -> some View](/documentation/swiftui/plainbuttonstyle/makebody(configuration:))
- [PrimitiveButtonStyleConfiguration](/documentation/swiftui/primitivebuttonstyleconfiguration)

#### Configuring a button’s label

- [let label: PrimitiveButtonStyleConfiguration.Label](/documentation/swiftui/primitivebuttonstyleconfiguration/label-swift.property)
- [PrimitiveButtonStyleConfiguration.Label](/documentation/swiftui/primitivebuttonstyleconfiguration/label-swift.struct)

#### Initiating a button’s action

- [func trigger()](/documentation/swiftui/primitivebuttonstyleconfiguration/trigger())

#### Defining the button’s purpose

- [let role: ButtonRole?](/documentation/swiftui/primitivebuttonstyleconfiguration/role)
- [func signInWithAppleButtonStyle(SignInWithAppleButton.Style) -> some View](/documentation/swiftui/view/signinwithapplebuttonstyle(_:))

### Styling pickers

- [func pickerStyle<S>(S) -> some View](/documentation/swiftui/view/pickerstyle(_:))
- [PickerStyle](/documentation/swiftui/pickerstyle)

#### Getting built-in picker styles

- [static var automatic: DefaultPickerStyle](/documentation/swiftui/pickerstyle/automatic)
- [static var inline: InlinePickerStyle](/documentation/swiftui/pickerstyle/inline)
- [static var menu: MenuPickerStyle](/documentation/swiftui/pickerstyle/menu)
- [static var navigationLink: NavigationLinkPickerStyle](/documentation/swiftui/pickerstyle/navigationlink)
- [static var palette: PalettePickerStyle](/documentation/swiftui/pickerstyle/palette)
- [static var radioGroup: RadioGroupPickerStyle](/documentation/swiftui/pickerstyle/radiogroup)
- [static var segmented: SegmentedPickerStyle](/documentation/swiftui/pickerstyle/segmented)
- [static var wheel: WheelPickerStyle](/documentation/swiftui/pickerstyle/wheel)

#### Supporting types

- [DefaultPickerStyle](/documentation/swiftui/defaultpickerstyle)

##### Creating the picker style

- [init()](/documentation/swiftui/defaultpickerstyle/init())
- [InlinePickerStyle](/documentation/swiftui/inlinepickerstyle)

##### Creating the picker style

- [init()](/documentation/swiftui/inlinepickerstyle/init())
- [MenuPickerStyle](/documentation/swiftui/menupickerstyle)

##### Creating the picker style

- [init()](/documentation/swiftui/menupickerstyle/init())
- [NavigationLinkPickerStyle](/documentation/swiftui/navigationlinkpickerstyle)

##### Creating the picker style

- [init()](/documentation/swiftui/navigationlinkpickerstyle/init())
- [PalettePickerStyle](/documentation/swiftui/palettepickerstyle)

##### Creating the picker style

- [init()](/documentation/swiftui/palettepickerstyle/init())
- [RadioGroupPickerStyle](/documentation/swiftui/radiogrouppickerstyle)

##### Creating the picker style

- [init()](/documentation/swiftui/radiogrouppickerstyle/init())
- [SegmentedPickerStyle](/documentation/swiftui/segmentedpickerstyle)

##### Creating the picker style

- [init()](/documentation/swiftui/segmentedpickerstyle/init())
- [WheelPickerStyle](/documentation/swiftui/wheelpickerstyle)

##### Creating the picker style

- [init()](/documentation/swiftui/wheelpickerstyle/init())

#### Deprecated styles

- [PopUpButtonPickerStyle](/documentation/swiftui/popupbuttonpickerstyle)

##### Initializers

- [init()](/documentation/swiftui/popupbuttonpickerstyle/init())
- [func datePickerStyle<S>(S) -> some View](/documentation/swiftui/view/datepickerstyle(_:))
- [DatePickerStyle](/documentation/swiftui/datepickerstyle)

#### Getting built-in date picker styles

- [static var automatic: DefaultDatePickerStyle](/documentation/swiftui/datepickerstyle/automatic)
- [static var compact: CompactDatePickerStyle](/documentation/swiftui/datepickerstyle/compact)
- [static var field: FieldDatePickerStyle](/documentation/swiftui/datepickerstyle/field)
- [static var graphical: GraphicalDatePickerStyle](/documentation/swiftui/datepickerstyle/graphical)
- [static var stepperField: StepperFieldDatePickerStyle](/documentation/swiftui/datepickerstyle/stepperfield)
- [static var wheel: WheelDatePickerStyle](/documentation/swiftui/datepickerstyle/wheel)

#### Creating custom date picker styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/datepickerstyle/makebody(configuration:))
- [DatePickerStyleConfiguration](/documentation/swiftui/datepickerstyleconfiguration)

##### Establishing the date range

- [var minimumDate: Date?](/documentation/swiftui/datepickerstyleconfiguration/minimumdate)
- [var maximumDate: Date?](/documentation/swiftui/datepickerstyleconfiguration/maximumdate)

##### Labeling the date picker

- [let label: DatePickerStyleConfiguration.Label](/documentation/swiftui/datepickerstyleconfiguration/label-swift.property)
- [DatePickerStyleConfiguration.Label](/documentation/swiftui/datepickerstyleconfiguration/label-swift.struct)
- [var displayedComponents: DatePickerComponents](/documentation/swiftui/datepickerstyleconfiguration/displayedcomponents)

##### Selecting the date

- [var selection: Date](/documentation/swiftui/datepickerstyleconfiguration/selection)
- [var $selection: Binding<Date>](/documentation/swiftui/datepickerstyleconfiguration/$selection)
- [DatePickerStyle.Configuration](/documentation/swiftui/datepickerstyle/configuration)
- [Body](/documentation/swiftui/datepickerstyle/body)

#### Supporting types

- [DefaultDatePickerStyle](/documentation/swiftui/defaultdatepickerstyle)

##### Creating the date picker style

- [init()](/documentation/swiftui/defaultdatepickerstyle/init())
- [CompactDatePickerStyle](/documentation/swiftui/compactdatepickerstyle)

##### Creating the date picker style

- [init()](/documentation/swiftui/compactdatepickerstyle/init())
- [FieldDatePickerStyle](/documentation/swiftui/fielddatepickerstyle)

##### Creating the date picker style

- [init()](/documentation/swiftui/fielddatepickerstyle/init())
- [GraphicalDatePickerStyle](/documentation/swiftui/graphicaldatepickerstyle)

##### Creating the date picker style

- [init()](/documentation/swiftui/graphicaldatepickerstyle/init())
- [StepperFieldDatePickerStyle](/documentation/swiftui/stepperfielddatepickerstyle)

##### Creating the date picker style

- [init()](/documentation/swiftui/stepperfielddatepickerstyle/init())
- [WheelDatePickerStyle](/documentation/swiftui/wheeldatepickerstyle)

##### Creating the date picker style

- [init()](/documentation/swiftui/wheeldatepickerstyle/init())

### Styling menus

- [func menuStyle<S>(S) -> some View](/documentation/swiftui/view/menustyle(_:))
- [MenuStyle](/documentation/swiftui/menustyle)

#### Getting built-in menu styles

- [static var automatic: DefaultMenuStyle](/documentation/swiftui/menustyle/automatic)
- [static var button: ButtonMenuStyle](/documentation/swiftui/menustyle/button)
- [static var borderedButton: BorderedButtonMenuStyle](/documentation/swiftui/menustyle/borderedbutton)
- [static var borderlessButton: BorderlessButtonMenuStyle](/documentation/swiftui/menustyle/borderlessbutton)

#### Creating custom menu styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/menustyle/makebody(configuration:))
- [MenuStyle.Configuration](/documentation/swiftui/menustyle/configuration)
- [Body](/documentation/swiftui/menustyle/body)

#### Supporting types

- [DefaultMenuStyle](/documentation/swiftui/defaultmenustyle)

##### Creating the menu style

- [init()](/documentation/swiftui/defaultmenustyle/init())
- [ButtonMenuStyle](/documentation/swiftui/buttonmenustyle)

##### Creating the menu style

- [init()](/documentation/swiftui/buttonmenustyle/init())
- [BorderlessButtonMenuStyle](/documentation/swiftui/borderlessbuttonmenustyle)

##### Creating a bordeless button menu style

- [init()](/documentation/swiftui/borderlessbuttonmenustyle/init())
- [init(showsMenuIndicator: Bool)](/documentation/swiftui/borderlessbuttonmenustyle/init(showsmenuindicator:))
- [BorderedButtonMenuStyle](/documentation/swiftui/borderedbuttonmenustyle)

##### Creating a bordered button menu style

- [init()](/documentation/swiftui/borderedbuttonmenustyle/init())
- [MenuStyleConfiguration](/documentation/swiftui/menustyleconfiguration)

#### Setting the label and content

- [MenuStyleConfiguration.Label](/documentation/swiftui/menustyleconfiguration/label)
- [MenuStyleConfiguration.Content](/documentation/swiftui/menustyleconfiguration/content)

### Styling toggles

- [func toggleStyle<S>(S) -> some View](/documentation/swiftui/view/togglestyle(_:))
- [ToggleStyle](/documentation/swiftui/togglestyle)

#### Getting built-in toggle styles

- [static var automatic: DefaultToggleStyle](/documentation/swiftui/togglestyle/automatic)
- [static var button: ButtonToggleStyle](/documentation/swiftui/togglestyle/button)
- [static var checkbox: CheckboxToggleStyle](/documentation/swiftui/togglestyle/checkbox)
- [static var `switch`: SwitchToggleStyle](/documentation/swiftui/togglestyle/switch)

#### Creating custom toggle styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/togglestyle/makebody(configuration:))
- [ToggleStyleConfiguration](/documentation/swiftui/togglestyleconfiguration)

##### Getting the label view

- [let label: ToggleStyleConfiguration.Label](/documentation/swiftui/togglestyleconfiguration/label-swift.property)
- [ToggleStyleConfiguration.Label](/documentation/swiftui/togglestyleconfiguration/label-swift.struct)

##### Managing the toggle state

- [var isMixed: Bool](/documentation/swiftui/togglestyleconfiguration/ismixed)
- [var isOn: Bool](/documentation/swiftui/togglestyleconfiguration/ison)
- [var $isOn: Binding<Bool>](/documentation/swiftui/togglestyleconfiguration/$ison)
- [ToggleStyle.Configuration](/documentation/swiftui/togglestyle/configuration)
- [Body](/documentation/swiftui/togglestyle/body)

#### Supporting types

- [DefaultToggleStyle](/documentation/swiftui/defaulttogglestyle)

##### Creating the toggle style

- [init()](/documentation/swiftui/defaulttogglestyle/init())

##### Supporting types

- [func makeBody(configuration: DefaultToggleStyle.Configuration) -> some View](/documentation/swiftui/defaulttogglestyle/makebody(configuration:))
- [ButtonToggleStyle](/documentation/swiftui/buttontogglestyle)

##### Creating the toggle style

- [init()](/documentation/swiftui/buttontogglestyle/init())

##### Supporting types

- [func makeBody(configuration: ButtonToggleStyle.Configuration) -> some View](/documentation/swiftui/buttontogglestyle/makebody(configuration:))
- [CheckboxToggleStyle](/documentation/swiftui/checkboxtogglestyle)

##### Creating the toggle style

- [init()](/documentation/swiftui/checkboxtogglestyle/init())

##### Supporting types

- [func makeBody(configuration: CheckboxToggleStyle.Configuration) -> some View](/documentation/swiftui/checkboxtogglestyle/makebody(configuration:))
- [SwitchToggleStyle](/documentation/swiftui/switchtogglestyle)

##### Creating the toggle style

- [init()](/documentation/swiftui/switchtogglestyle/init())

##### Supporting types

- [func makeBody(configuration: SwitchToggleStyle.Configuration) -> some View](/documentation/swiftui/switchtogglestyle/makebody(configuration:))

##### Deprecated initializers

- [init(tint: Color)](/documentation/swiftui/switchtogglestyle/init(tint:))
- [ToggleStyleConfiguration](/documentation/swiftui/togglestyleconfiguration)

#### Getting the label view

- [let label: ToggleStyleConfiguration.Label](/documentation/swiftui/togglestyleconfiguration/label-swift.property)
- [ToggleStyleConfiguration.Label](/documentation/swiftui/togglestyleconfiguration/label-swift.struct)

#### Managing the toggle state

- [var isMixed: Bool](/documentation/swiftui/togglestyleconfiguration/ismixed)
- [var isOn: Bool](/documentation/swiftui/togglestyleconfiguration/ison)
- [var $isOn: Binding<Bool>](/documentation/swiftui/togglestyleconfiguration/$ison)

### Styling indicators

- [func gaugeStyle<S>(S) -> some View](/documentation/swiftui/view/gaugestyle(_:))
- [GaugeStyle](/documentation/swiftui/gaugestyle)

#### Getting the automatic style

- [static var automatic: DefaultGaugeStyle](/documentation/swiftui/gaugestyle/automatic)

#### Getting circular gauge styles

- [static var circular: CircularGaugeStyle](/documentation/swiftui/gaugestyle/circular)
- [static var accessoryCircular: AccessoryCircularGaugeStyle](/documentation/swiftui/gaugestyle/accessorycircular)
- [static var accessoryCircularCapacity: AccessoryCircularCapacityGaugeStyle](/documentation/swiftui/gaugestyle/accessorycircularcapacity)

#### Getting linear gauge styles

- [static var linear: LinearGaugeStyle](/documentation/swiftui/gaugestyle/linear)
- [static var linearCapacity: LinearCapacityGaugeStyle](/documentation/swiftui/gaugestyle/linearcapacity)
- [static var accessoryLinear: AccessoryLinearGaugeStyle](/documentation/swiftui/gaugestyle/accessorylinear)
- [static var accessoryLinearCapacity: AccessoryLinearCapacityGaugeStyle](/documentation/swiftui/gaugestyle/accessorylinearcapacity)

#### Creating custom gauge styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/gaugestyle/makebody(configuration:))
- [GaugeStyle.Configuration](/documentation/swiftui/gaugestyle/configuration)
- [Body](/documentation/swiftui/gaugestyle/body)

#### Supporting types

- [DefaultGaugeStyle](/documentation/swiftui/defaultgaugestyle)

##### Creating the gauge style

- [init()](/documentation/swiftui/defaultgaugestyle/init())
- [CircularGaugeStyle](/documentation/swiftui/circulargaugestyle)

##### Creating the gauge style

- [init()](/documentation/swiftui/circulargaugestyle/init())
- [init(tint:)](/documentation/swiftui/circulargaugestyle/init(tint:))
- [AccessoryCircularGaugeStyle](/documentation/swiftui/accessorycirculargaugestyle)

##### Creating the gauge style

- [init()](/documentation/swiftui/accessorycirculargaugestyle/init())
- [AccessoryCircularCapacityGaugeStyle](/documentation/swiftui/accessorycircularcapacitygaugestyle)

##### Creating the gauge style

- [init()](/documentation/swiftui/accessorycircularcapacitygaugestyle/init())
- [LinearGaugeStyle](/documentation/swiftui/lineargaugestyle)

##### Creating the gauge style

- [init()](/documentation/swiftui/lineargaugestyle/init())

##### Deprecated initializers

- [init(tint:)](/documentation/swiftui/lineargaugestyle/init(tint:))
- [LinearCapacityGaugeStyle](/documentation/swiftui/linearcapacitygaugestyle)

##### Creating the gauge style

- [init()](/documentation/swiftui/linearcapacitygaugestyle/init())
- [AccessoryLinearGaugeStyle](/documentation/swiftui/accessorylineargaugestyle)

##### Creating the gauge style

- [init()](/documentation/swiftui/accessorylineargaugestyle/init())
- [AccessoryLinearCapacityGaugeStyle](/documentation/swiftui/accessorylinearcapacitygaugestyle)

##### Creating the gauge style

- [init()](/documentation/swiftui/accessorylinearcapacitygaugestyle/init())
- [GaugeStyleConfiguration](/documentation/swiftui/gaugestyleconfiguration)

#### Describing the purpose of the gauge

- [var label: GaugeStyleConfiguration.Label](/documentation/swiftui/gaugestyleconfiguration/label-swift.property)
- [GaugeStyleConfiguration.Label](/documentation/swiftui/gaugestyleconfiguration/label-swift.struct)

#### Reporting the range

- [var minimumValueLabel: GaugeStyleConfiguration.MinimumValueLabel?](/documentation/swiftui/gaugestyleconfiguration/minimumvaluelabel-swift.property)
- [GaugeStyleConfiguration.MinimumValueLabel](/documentation/swiftui/gaugestyleconfiguration/minimumvaluelabel-swift.struct)
- [var maximumValueLabel: GaugeStyleConfiguration.MaximumValueLabel?](/documentation/swiftui/gaugestyleconfiguration/maximumvaluelabel-swift.property)
- [GaugeStyleConfiguration.MaximumValueLabel](/documentation/swiftui/gaugestyleconfiguration/maximumvaluelabel-swift.struct)

#### Setting the value

- [var value: Double](/documentation/swiftui/gaugestyleconfiguration/value)
- [var currentValueLabel: GaugeStyleConfiguration.CurrentValueLabel?](/documentation/swiftui/gaugestyleconfiguration/currentvaluelabel-swift.property)
- [GaugeStyleConfiguration.CurrentValueLabel](/documentation/swiftui/gaugestyleconfiguration/currentvaluelabel-swift.struct)
- [GaugeStyleConfiguration.MarkedValueLabel](/documentation/swiftui/gaugestyleconfiguration/markedvaluelabel)
- [func progressViewStyle<S>(S) -> some View](/documentation/swiftui/view/progressviewstyle(_:))
- [ProgressViewStyle](/documentation/swiftui/progressviewstyle)

#### Getting built-in progress view styles

- [static var automatic: DefaultProgressViewStyle](/documentation/swiftui/progressviewstyle/automatic)
- [static var circular: CircularProgressViewStyle](/documentation/swiftui/progressviewstyle/circular)
- [static var linear: LinearProgressViewStyle](/documentation/swiftui/progressviewstyle/linear)

#### Creating custom progress view styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/progressviewstyle/makebody(configuration:))
- [ProgressViewStyle.Configuration](/documentation/swiftui/progressviewstyle/configuration)
- [Body](/documentation/swiftui/progressviewstyle/body)

#### Supporting types

- [DefaultProgressViewStyle](/documentation/swiftui/defaultprogressviewstyle)

##### Creating the progress view style

- [init()](/documentation/swiftui/defaultprogressviewstyle/init())
- [CircularProgressViewStyle](/documentation/swiftui/circularprogressviewstyle)

##### Creating the progress view style

- [init()](/documentation/swiftui/circularprogressviewstyle/init())

##### Deprecated initializers

- [init(tint: Color)](/documentation/swiftui/circularprogressviewstyle/init(tint:))
- [LinearProgressViewStyle](/documentation/swiftui/linearprogressviewstyle)

##### Creating the progress view style

- [init()](/documentation/swiftui/linearprogressviewstyle/init())

##### Deprecated initializers

- [init(tint: Color)](/documentation/swiftui/linearprogressviewstyle/init(tint:))
- [ProgressViewStyleConfiguration](/documentation/swiftui/progressviewstyleconfiguration)

#### Configuring the label

- [var label: ProgressViewStyleConfiguration.Label?](/documentation/swiftui/progressviewstyleconfiguration/label-swift.property)
- [ProgressViewStyleConfiguration.Label](/documentation/swiftui/progressviewstyleconfiguration/label-swift.struct)

#### Configuring the current value label

- [var currentValueLabel: ProgressViewStyleConfiguration.CurrentValueLabel?](/documentation/swiftui/progressviewstyleconfiguration/currentvaluelabel-swift.property)
- [ProgressViewStyleConfiguration.CurrentValueLabel](/documentation/swiftui/progressviewstyleconfiguration/currentvaluelabel-swift.struct)

#### Configuring progress completion

- [let fractionCompleted: Double?](/documentation/swiftui/progressviewstyleconfiguration/fractioncompleted)

### Styling views that display text

- [func labelStyle<S>(S) -> some View](/documentation/swiftui/view/labelstyle(_:))
- [LabelStyle](/documentation/swiftui/labelstyle)

#### Getting built-in label styles

- [static var automatic: DefaultLabelStyle](/documentation/swiftui/labelstyle/automatic)
- [static var iconOnly: IconOnlyLabelStyle](/documentation/swiftui/labelstyle/icononly)
- [static var titleAndIcon: TitleAndIconLabelStyle](/documentation/swiftui/labelstyle/titleandicon)
- [static var titleOnly: TitleOnlyLabelStyle](/documentation/swiftui/labelstyle/titleonly)

#### Creating custom label styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/labelstyle/makebody(configuration:))
- [LabelStyle.Configuration](/documentation/swiftui/labelstyle/configuration)
- [Body](/documentation/swiftui/labelstyle/body)

#### Supporting types

- [DefaultLabelStyle](/documentation/swiftui/defaultlabelstyle)

##### Creating the label style

- [init()](/documentation/swiftui/defaultlabelstyle/init())
- [IconOnlyLabelStyle](/documentation/swiftui/icononlylabelstyle)

##### Creating the label style

- [init()](/documentation/swiftui/icononlylabelstyle/init())
- [TitleAndIconLabelStyle](/documentation/swiftui/titleandiconlabelstyle)

##### Creating the label style

- [init()](/documentation/swiftui/titleandiconlabelstyle/init())
- [TitleOnlyLabelStyle](/documentation/swiftui/titleonlylabelstyle)

##### Creating the label style

- [init()](/documentation/swiftui/titleonlylabelstyle/init())
- [LabelStyleConfiguration](/documentation/swiftui/labelstyleconfiguration)

#### Setting the icon

- [var icon: LabelStyleConfiguration.Icon](/documentation/swiftui/labelstyleconfiguration/icon-swift.property)
- [LabelStyleConfiguration.Icon](/documentation/swiftui/labelstyleconfiguration/icon-swift.struct)

#### Setting the title

- [var title: LabelStyleConfiguration.Title](/documentation/swiftui/labelstyleconfiguration/title-swift.property)
- [LabelStyleConfiguration.Title](/documentation/swiftui/labelstyleconfiguration/title-swift.struct)
- [func textFieldStyle<S>(S) -> some View](/documentation/swiftui/view/textfieldstyle(_:))
- [TextFieldStyle](/documentation/swiftui/textfieldstyle)

#### Getting built-in text field styles

- [static var automatic: DefaultTextFieldStyle](/documentation/swiftui/textfieldstyle/automatic)
- [static var plain: PlainTextFieldStyle](/documentation/swiftui/textfieldstyle/plain)
- [static var roundedBorder: RoundedBorderTextFieldStyle](/documentation/swiftui/textfieldstyle/roundedborder)
- [static var squareBorder: SquareBorderTextFieldStyle](/documentation/swiftui/textfieldstyle/squareborder)

#### Supporting types

- [DefaultTextFieldStyle](/documentation/swiftui/defaulttextfieldstyle)

##### Creating the text field style

- [init()](/documentation/swiftui/defaulttextfieldstyle/init())
- [PlainTextFieldStyle](/documentation/swiftui/plaintextfieldstyle)

##### Creating the text field style

- [init()](/documentation/swiftui/plaintextfieldstyle/init())
- [RoundedBorderTextFieldStyle](/documentation/swiftui/roundedbordertextfieldstyle)

##### Creating the text field style

- [init()](/documentation/swiftui/roundedbordertextfieldstyle/init())
- [SquareBorderTextFieldStyle](/documentation/swiftui/squarebordertextfieldstyle)

##### Creating the text field style

- [init()](/documentation/swiftui/squarebordertextfieldstyle/init())
- [func textEditorStyle(some TextEditorStyle) -> some View](/documentation/swiftui/view/texteditorstyle(_:))
- [TextEditorStyle](/documentation/swiftui/texteditorstyle)

#### Getting built-in styles

- [static var automatic: AutomaticTextEditorStyle](/documentation/swiftui/texteditorstyle/automatic)
- [static var plain: PlainTextEditorStyle](/documentation/swiftui/texteditorstyle/plain)
- [static var roundedBorder: RoundedBorderTextEditorStyle](/documentation/swiftui/texteditorstyle/roundedborder)

#### Creating custom styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/texteditorstyle/makebody(configuration:))
- [TextEditorStyle.Configuration](/documentation/swiftui/texteditorstyle/configuration)
- [Body](/documentation/swiftui/texteditorstyle/body)

#### Supporting types

- [AutomaticTextEditorStyle](/documentation/swiftui/automatictexteditorstyle)

##### Creating the text editor style

- [init()](/documentation/swiftui/automatictexteditorstyle/init())
- [PlainTextEditorStyle](/documentation/swiftui/plaintexteditorstyle)

##### Creating the text editor style

- [init()](/documentation/swiftui/plaintexteditorstyle/init())
- [RoundedBorderTextEditorStyle](/documentation/swiftui/roundedbordertexteditorstyle)

##### Creating the text editor style

- [init()](/documentation/swiftui/roundedbordertexteditorstyle/init())
- [TextEditorStyleConfiguration](/documentation/swiftui/texteditorstyleconfiguration)

### Styling collection views

- [func listStyle<S>(S) -> some View](/documentation/swiftui/view/liststyle(_:))
- [ListStyle](/documentation/swiftui/liststyle)

#### Getting built-in list styles

- [static var automatic: DefaultListStyle](/documentation/swiftui/liststyle/automatic)
- [static var bordered: BorderedListStyle](/documentation/swiftui/liststyle/bordered)
- [static var carousel: CarouselListStyle](/documentation/swiftui/liststyle/carousel)
- [static var elliptical: EllipticalListStyle](/documentation/swiftui/liststyle/elliptical)
- [static var grouped: GroupedListStyle](/documentation/swiftui/liststyle/grouped)
- [static var inset: InsetListStyle](/documentation/swiftui/liststyle/inset)
- [static var insetGrouped: InsetGroupedListStyle](/documentation/swiftui/liststyle/insetgrouped)
- [static var plain: PlainListStyle](/documentation/swiftui/liststyle/plain)
- [static var sidebar: SidebarListStyle](/documentation/swiftui/liststyle/sidebar)

#### Deprecated styles

- [static func bordered(alternatesRowBackgrounds: Bool) -> BorderedListStyle](/documentation/swiftui/liststyle/bordered(alternatesrowbackgrounds:))
- [static func inset(alternatesRowBackgrounds: Bool) -> InsetListStyle](/documentation/swiftui/liststyle/inset(alternatesrowbackgrounds:))

#### Supporting types

- [DefaultListStyle](/documentation/swiftui/defaultliststyle)

##### Creating the list style

- [init()](/documentation/swiftui/defaultliststyle/init())
- [BorderedListStyle](/documentation/swiftui/borderedliststyle)

##### Creating the list style

- [init()](/documentation/swiftui/borderedliststyle/init())
- [init(alternatesRowBackgrounds: Bool)](/documentation/swiftui/borderedliststyle/init(alternatesrowbackgrounds:))
- [CarouselListStyle](/documentation/swiftui/carouselliststyle)

##### Creating the list style

- [init()](/documentation/swiftui/carouselliststyle/init())
- [EllipticalListStyle](/documentation/swiftui/ellipticalliststyle)

##### Creating the list style

- [init()](/documentation/swiftui/ellipticalliststyle/init())
- [GroupedListStyle](/documentation/swiftui/groupedliststyle)

##### Creating the list style

- [init()](/documentation/swiftui/groupedliststyle/init())
- [InsetListStyle](/documentation/swiftui/insetliststyle)

##### Creating the list style

- [init()](/documentation/swiftui/insetliststyle/init())
- [init(alternatesRowBackgrounds: Bool)](/documentation/swiftui/insetliststyle/init(alternatesrowbackgrounds:))
- [InsetGroupedListStyle](/documentation/swiftui/insetgroupedliststyle)

##### Creating the list style

- [init()](/documentation/swiftui/insetgroupedliststyle/init())
- [PlainListStyle](/documentation/swiftui/plainliststyle)

##### Creating the list style

- [init()](/documentation/swiftui/plainliststyle/init())
- [SidebarListStyle](/documentation/swiftui/sidebarliststyle)

##### Creating the list style

- [init()](/documentation/swiftui/sidebarliststyle/init())
- [func tableStyle<S>(S) -> some View](/documentation/swiftui/view/tablestyle(_:))
- [TableStyle](/documentation/swiftui/tablestyle)

#### Getting built-in table styles

- [static var automatic: AutomaticTableStyle](/documentation/swiftui/tablestyle/automatic)
- [static var inset: InsetTableStyle](/documentation/swiftui/tablestyle/inset)
- [static var bordered: BorderedTableStyle](/documentation/swiftui/tablestyle/bordered)

#### Creating custom table styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/tablestyle/makebody(configuration:))
- [TableStyle.Configuration](/documentation/swiftui/tablestyle/configuration)
- [Body](/documentation/swiftui/tablestyle/body)

#### Deprecated styles

- [static func inset(alternatesRowBackgrounds: Bool) -> InsetTableStyle](/documentation/swiftui/tablestyle/inset(alternatesrowbackgrounds:))
- [static func bordered(alternatesRowBackgrounds: Bool) -> BorderedTableStyle](/documentation/swiftui/tablestyle/bordered(alternatesrowbackgrounds:))

#### Supporting types

- [AutomaticTableStyle](/documentation/swiftui/automatictablestyle)
- [InsetTableStyle](/documentation/swiftui/insettablestyle)

##### Creating the table style

- [init()](/documentation/swiftui/insettablestyle/init())
- [init(alternatesRowBackgrounds: Bool)](/documentation/swiftui/insettablestyle/init(alternatesrowbackgrounds:))
- [BorderedTableStyle](/documentation/swiftui/borderedtablestyle)

##### Creating the table style

- [init()](/documentation/swiftui/borderedtablestyle/init())
- [init(alternatesRowBackgrounds: Bool)](/documentation/swiftui/borderedtablestyle/init(alternatesrowbackgrounds:))
- [TableStyleConfiguration](/documentation/swiftui/tablestyleconfiguration)
- [func disclosureGroupStyle<S>(S) -> some View](/documentation/swiftui/view/disclosuregroupstyle(_:))
- [DisclosureGroupStyle](/documentation/swiftui/disclosuregroupstyle)

#### Getting the styles

- [static var automatic: AutomaticDisclosureGroupStyle](/documentation/swiftui/disclosuregroupstyle/automatic)

#### Creating custom disclosure group styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/disclosuregroupstyle/makebody(configuration:))
- [DisclosureGroupStyleConfiguration](/documentation/swiftui/disclosuregroupstyleconfiguration)

##### Configuring the label

- [let label: DisclosureGroupStyleConfiguration.Label](/documentation/swiftui/disclosuregroupstyleconfiguration/label-swift.property)
- [DisclosureGroupStyleConfiguration.Label](/documentation/swiftui/disclosuregroupstyleconfiguration/label-swift.struct)

##### Configuring the content

- [let content: DisclosureGroupStyleConfiguration.Content](/documentation/swiftui/disclosuregroupstyleconfiguration/content-swift.property)
- [DisclosureGroupStyleConfiguration.Content](/documentation/swiftui/disclosuregroupstyleconfiguration/content-swift.struct)

##### Managing disclosure

- [var isExpanded: Bool](/documentation/swiftui/disclosuregroupstyleconfiguration/isexpanded)
- [var $isExpanded: Binding<Bool>](/documentation/swiftui/disclosuregroupstyleconfiguration/$isexpanded)
- [DisclosureGroupStyle.Configuration](/documentation/swiftui/disclosuregroupstyle/configuration)
- [Body](/documentation/swiftui/disclosuregroupstyle/body)

#### Supporting types

- [AutomaticDisclosureGroupStyle](/documentation/swiftui/automaticdisclosuregroupstyle)

##### Creating the disclosure group style

- [init()](/documentation/swiftui/automaticdisclosuregroupstyle/init())

### Styling navigation views

- [func navigationSplitViewStyle<S>(S) -> some View](/documentation/swiftui/view/navigationsplitviewstyle(_:))
- [NavigationSplitViewStyle](/documentation/swiftui/navigationsplitviewstyle)

#### Creating built-in styles

- [static var automatic: AutomaticNavigationSplitViewStyle](/documentation/swiftui/navigationsplitviewstyle/automatic)
- [static var balanced: BalancedNavigationSplitViewStyle](/documentation/swiftui/navigationsplitviewstyle/balanced)
- [static var prominentDetail: ProminentDetailNavigationSplitViewStyle](/documentation/swiftui/navigationsplitviewstyle/prominentdetail)

#### Creating custom styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/navigationsplitviewstyle/makebody(configuration:))
- [NavigationSplitViewStyle.Configuration](/documentation/swiftui/navigationsplitviewstyle/configuration)
- [Body](/documentation/swiftui/navigationsplitviewstyle/body)

#### Supporting types

- [AutomaticNavigationSplitViewStyle](/documentation/swiftui/automaticnavigationsplitviewstyle)

##### Creating the navigation split view style

- [init()](/documentation/swiftui/automaticnavigationsplitviewstyle/init())
- [BalancedNavigationSplitViewStyle](/documentation/swiftui/balancednavigationsplitviewstyle)

##### Creating the navigation split view style

- [init()](/documentation/swiftui/balancednavigationsplitviewstyle/init())
- [ProminentDetailNavigationSplitViewStyle](/documentation/swiftui/prominentdetailnavigationsplitviewstyle)

##### Creating the navigation split view style

- [init()](/documentation/swiftui/prominentdetailnavigationsplitviewstyle/init())
- [NavigationSplitViewStyleConfiguration](/documentation/swiftui/navigationsplitviewstyleconfiguration)
- [func tabViewStyle<S>(S) -> some View](/documentation/swiftui/view/tabviewstyle(_:))
- [TabViewStyle](/documentation/swiftui/tabviewstyle)

#### Getting built-in tab view styles

- [static var automatic: DefaultTabViewStyle](/documentation/swiftui/tabviewstyle/automatic)
- [static var sidebarAdaptable: SidebarAdaptableTabViewStyle](/documentation/swiftui/tabviewstyle/sidebaradaptable)
- [static var tabBarOnly: TabBarOnlyTabViewStyle](/documentation/swiftui/tabviewstyle/tabbaronly)
- [static var grouped: GroupedTabViewStyle](/documentation/swiftui/tabviewstyle/grouped)
- [static var page: PageTabViewStyle](/documentation/swiftui/tabviewstyle/page)
- [static func page(indexDisplayMode: PageTabViewStyle.IndexDisplayMode) -> PageTabViewStyle](/documentation/swiftui/tabviewstyle/page(indexdisplaymode:))
- [static var verticalPage: VerticalPageTabViewStyle](/documentation/swiftui/tabviewstyle/verticalpage)
- [static func verticalPage(transitionStyle: VerticalPageTabViewStyle.TransitionStyle) -> VerticalPageTabViewStyle](/documentation/swiftui/tabviewstyle/verticalpage(transitionstyle:))
- [static var carousel: CarouselTabViewStyle](/documentation/swiftui/tabviewstyle/carousel)

#### Supporting types

- [DefaultTabViewStyle](/documentation/swiftui/defaulttabviewstyle)

##### Creating the tab view style

- [init()](/documentation/swiftui/defaulttabviewstyle/init())
- [SidebarAdaptableTabViewStyle](/documentation/swiftui/sidebaradaptabletabviewstyle)

##### Initializers

- [init()](/documentation/swiftui/sidebaradaptabletabviewstyle/init())
- [TabBarOnlyTabViewStyle](/documentation/swiftui/tabbaronlytabviewstyle)

##### Initializers

- [init()](/documentation/swiftui/tabbaronlytabviewstyle/init())
- [GroupedTabViewStyle](/documentation/swiftui/groupedtabviewstyle)

##### Initializers

- [init()](/documentation/swiftui/groupedtabviewstyle/init())
- [PageTabViewStyle](/documentation/swiftui/pagetabviewstyle)

##### Creating a page tab view style

- [init(indexDisplayMode: PageTabViewStyle.IndexDisplayMode)](/documentation/swiftui/pagetabviewstyle/init(indexdisplaymode:))
- [PageTabViewStyle.IndexDisplayMode](/documentation/swiftui/pagetabviewstyle/indexdisplaymode)

###### Getting the modes

- [static let always: PageTabViewStyle.IndexDisplayMode](/documentation/swiftui/pagetabviewstyle/indexdisplaymode/always)
- [static let automatic: PageTabViewStyle.IndexDisplayMode](/documentation/swiftui/pagetabviewstyle/indexdisplaymode/automatic)
- [static let never: PageTabViewStyle.IndexDisplayMode](/documentation/swiftui/pagetabviewstyle/indexdisplaymode/never)
- [VerticalPageTabViewStyle](/documentation/swiftui/verticalpagetabviewstyle)

##### Creating the tab view style

- [init()](/documentation/swiftui/verticalpagetabviewstyle/init())
- [init(transitionStyle: VerticalPageTabViewStyle.TransitionStyle)](/documentation/swiftui/verticalpagetabviewstyle/init(transitionstyle:))
- [VerticalPageTabViewStyle.TransitionStyle](/documentation/swiftui/verticalpagetabviewstyle/transitionstyle)

###### Getting the transition styles

- [static let automatic: VerticalPageTabViewStyle.TransitionStyle](/documentation/swiftui/verticalpagetabviewstyle/transitionstyle/automatic)
- [static let blur: VerticalPageTabViewStyle.TransitionStyle](/documentation/swiftui/verticalpagetabviewstyle/transitionstyle/blur)
- [static let identity: VerticalPageTabViewStyle.TransitionStyle](/documentation/swiftui/verticalpagetabviewstyle/transitionstyle/identity)
- [CarouselTabViewStyle](/documentation/swiftui/carouseltabviewstyle)

##### Creating the tab view style

- [init()](/documentation/swiftui/carouseltabviewstyle/init())

### Styling groups

- [func controlGroupStyle<S>(S) -> some View](/documentation/swiftui/view/controlgroupstyle(_:))
- [ControlGroupStyle](/documentation/swiftui/controlgroupstyle)

#### Getting built-in control group styles

- [static var automatic: AutomaticControlGroupStyle](/documentation/swiftui/controlgroupstyle/automatic)
- [static var compactMenu: CompactMenuControlGroupStyle](/documentation/swiftui/controlgroupstyle/compactmenu)
- [static var menu: MenuControlGroupStyle](/documentation/swiftui/controlgroupstyle/menu)
- [static var navigation: NavigationControlGroupStyle](/documentation/swiftui/controlgroupstyle/navigation)
- [static var palette: PaletteControlGroupStyle](/documentation/swiftui/controlgroupstyle/palette)

#### Creating custom control group styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/controlgroupstyle/makebody(configuration:))
- [ControlGroupStyle.Configuration](/documentation/swiftui/controlgroupstyle/configuration)
- [Body](/documentation/swiftui/controlgroupstyle/body)

#### Supporting types

- [AutomaticControlGroupStyle](/documentation/swiftui/automaticcontrolgroupstyle)
- [CompactMenuControlGroupStyle](/documentation/swiftui/compactmenucontrolgroupstyle)

##### Creating the control group style

- [init()](/documentation/swiftui/compactmenucontrolgroupstyle/init())
- [MenuControlGroupStyle](/documentation/swiftui/menucontrolgroupstyle)

##### Creating the control group style

- [init()](/documentation/swiftui/menucontrolgroupstyle/init())
- [NavigationControlGroupStyle](/documentation/swiftui/navigationcontrolgroupstyle)

##### Creating the control group style

- [init()](/documentation/swiftui/navigationcontrolgroupstyle/init())
- [PaletteControlGroupStyle](/documentation/swiftui/palettecontrolgroupstyle)

##### Creating the control group style

- [init()](/documentation/swiftui/palettecontrolgroupstyle/init())
- [ControlGroupStyleConfiguration](/documentation/swiftui/controlgroupstyleconfiguration)

#### Configuring the label

- [let label: ControlGroupStyleConfiguration.Label](/documentation/swiftui/controlgroupstyleconfiguration/label-swift.property)
- [ControlGroupStyleConfiguration.Label](/documentation/swiftui/controlgroupstyleconfiguration/label-swift.struct)

#### Configuring the content

- [let content: ControlGroupStyleConfiguration.Content](/documentation/swiftui/controlgroupstyleconfiguration/content-swift.property)
- [ControlGroupStyleConfiguration.Content](/documentation/swiftui/controlgroupstyleconfiguration/content-swift.struct)
- [func formStyle<S>(S) -> some View](/documentation/swiftui/view/formstyle(_:))
- [FormStyle](/documentation/swiftui/formstyle)

#### Getting built-in form styles

- [static var automatic: AutomaticFormStyle](/documentation/swiftui/formstyle/automatic)
- [static var columns: ColumnsFormStyle](/documentation/swiftui/formstyle/columns)
- [static var grouped: GroupedFormStyle](/documentation/swiftui/formstyle/grouped)

#### Creating custom form styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/formstyle/makebody(configuration:))
- [FormStyle.Configuration](/documentation/swiftui/formstyle/configuration)
- [Body](/documentation/swiftui/formstyle/body)

#### Supporting types

- [AutomaticFormStyle](/documentation/swiftui/automaticformstyle)

##### Creating the form style

- [init()](/documentation/swiftui/automaticformstyle/init())
- [ColumnsFormStyle](/documentation/swiftui/columnsformstyle)

##### Creating the form style

- [init()](/documentation/swiftui/columnsformstyle/init())
- [GroupedFormStyle](/documentation/swiftui/groupedformstyle)

##### Creating the form style

- [init()](/documentation/swiftui/groupedformstyle/init())
- [FormStyleConfiguration](/documentation/swiftui/formstyleconfiguration)

#### Getting configuration content

- [let content: FormStyleConfiguration.Content](/documentation/swiftui/formstyleconfiguration/content-swift.property)
- [FormStyleConfiguration.Content](/documentation/swiftui/formstyleconfiguration/content-swift.struct)
- [func groupBoxStyle<S>(S) -> some View](/documentation/swiftui/view/groupboxstyle(_:))
- [GroupBoxStyle](/documentation/swiftui/groupboxstyle)

#### Getting built-in group box styles

- [static var automatic: DefaultGroupBoxStyle](/documentation/swiftui/groupboxstyle/automatic)

#### Creating custom group box styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/groupboxstyle/makebody(configuration:))
- [GroupBoxStyle.Configuration](/documentation/swiftui/groupboxstyle/configuration)
- [Body](/documentation/swiftui/groupboxstyle/body)

#### Supporting types

- [DefaultGroupBoxStyle](/documentation/swiftui/defaultgroupboxstyle)

##### Creating the group box style

- [init()](/documentation/swiftui/defaultgroupboxstyle/init())
- [GroupBoxStyleConfiguration](/documentation/swiftui/groupboxstyleconfiguration)

#### Configuring the label

- [let label: GroupBoxStyleConfiguration.Label](/documentation/swiftui/groupboxstyleconfiguration/label-swift.property)
- [GroupBoxStyleConfiguration.Label](/documentation/swiftui/groupboxstyleconfiguration/label-swift.struct)

#### Configuring the content

- [let content: GroupBoxStyleConfiguration.Content](/documentation/swiftui/groupboxstyleconfiguration/content-swift.property)
- [GroupBoxStyleConfiguration.Content](/documentation/swiftui/groupboxstyleconfiguration/content-swift.struct)
- [func indexViewStyle<S>(S) -> some View](/documentation/swiftui/view/indexviewstyle(_:))
- [IndexViewStyle](/documentation/swiftui/indexviewstyle)

#### Getting built-in index view styles

- [static var page: PageIndexViewStyle](/documentation/swiftui/indexviewstyle/page)
- [static func page(backgroundDisplayMode: PageIndexViewStyle.BackgroundDisplayMode) -> PageIndexViewStyle](/documentation/swiftui/indexviewstyle/page(backgrounddisplaymode:))

#### Supporting types

- [PageIndexViewStyle](/documentation/swiftui/pageindexviewstyle)

##### Creating the control group style

- [init(backgroundDisplayMode: PageIndexViewStyle.BackgroundDisplayMode)](/documentation/swiftui/pageindexviewstyle/init(backgrounddisplaymode:))
- [PageIndexViewStyle.BackgroundDisplayMode](/documentation/swiftui/pageindexviewstyle/backgrounddisplaymode)

###### Getting the display modes

- [static let automatic: PageIndexViewStyle.BackgroundDisplayMode](/documentation/swiftui/pageindexviewstyle/backgrounddisplaymode/automatic)
- [static let always: PageIndexViewStyle.BackgroundDisplayMode](/documentation/swiftui/pageindexviewstyle/backgrounddisplaymode/always)
- [static let interactive: PageIndexViewStyle.BackgroundDisplayMode](/documentation/swiftui/pageindexviewstyle/backgrounddisplaymode/interactive)
- [static let never: PageIndexViewStyle.BackgroundDisplayMode](/documentation/swiftui/pageindexviewstyle/backgrounddisplaymode/never)
- [func labeledContentStyle<S>(S) -> some View](/documentation/swiftui/view/labeledcontentstyle(_:))
- [LabeledContentStyle](/documentation/swiftui/labeledcontentstyle)

#### Getting built-in labeled content styles

- [static var automatic: AutomaticLabeledContentStyle](/documentation/swiftui/labeledcontentstyle/automatic)

#### Creating custom labeled content styles

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/labeledcontentstyle/makebody(configuration:))
- [LabeledContentStyle.Configuration](/documentation/swiftui/labeledcontentstyle/configuration)
- [Body](/documentation/swiftui/labeledcontentstyle/body)

#### Supporting types

- [AutomaticLabeledContentStyle](/documentation/swiftui/automaticlabeledcontentstyle)

##### Creating the labeled content style

- [init()](/documentation/swiftui/automaticlabeledcontentstyle/init())
- [LabeledContentStyleConfiguration](/documentation/swiftui/labeledcontentstyleconfiguration)

#### Configuring the label

- [let label: LabeledContentStyleConfiguration.Label](/documentation/swiftui/labeledcontentstyleconfiguration/label-swift.property)
- [LabeledContentStyleConfiguration.Label](/documentation/swiftui/labeledcontentstyleconfiguration/label-swift.struct)

#### Configuring the content

- [let content: LabeledContentStyleConfiguration.Content](/documentation/swiftui/labeledcontentstyleconfiguration/content-swift.property)
- [LabeledContentStyleConfiguration.Content](/documentation/swiftui/labeledcontentstyleconfiguration/content-swift.struct)

### Styling windows from a view inside the window

- [func presentedWindowStyle<S>(S) -> some View](/documentation/swiftui/view/presentedwindowstyle(_:))
- [func presentedWindowToolbarStyle<S>(S) -> some View](/documentation/swiftui/view/presentedwindowtoolbarstyle(_:))

### Adding a glass background on views in visionOS

- [func glassBackgroundEffect(displayMode: GlassBackgroundDisplayMode) -> some View](/documentation/swiftui/view/glassbackgroundeffect(displaymode:))
- [func glassBackgroundEffect<S>(in: S, displayMode: GlassBackgroundDisplayMode) -> some View](/documentation/swiftui/view/glassbackgroundeffect(in:displaymode:))
- [GlassBackgroundDisplayMode](/documentation/swiftui/glassbackgrounddisplaymode)

#### Getting the mode

- [case always](/documentation/swiftui/glassbackgrounddisplaymode/always)
- [case implicit](/documentation/swiftui/glassbackgrounddisplaymode/implicit)
- [case never](/documentation/swiftui/glassbackgrounddisplaymode/never)
- [GlassBackgroundEffect](/documentation/swiftui/glassbackgroundeffect)

#### Associated Types

- [Body](/documentation/swiftui/glassbackgroundeffect/body)

#### Instance Methods

- [func makeBody(configuration: Self.Configuration) -> Self.Body](/documentation/swiftui/glassbackgroundeffect/makebody(configuration:))

#### Type Aliases

- [GlassBackgroundEffect.Configuration](/documentation/swiftui/glassbackgroundeffect/configuration)

#### Type Properties

- [static var automatic: AutomaticGlassBackgroundEffect](/documentation/swiftui/glassbackgroundeffect/automatic)
- [static var feathered: FeatheredGlassBackgroundEffect](/documentation/swiftui/glassbackgroundeffect/feathered)
- [static var plate: PlateGlassBackgroundEffect](/documentation/swiftui/glassbackgroundeffect/plate)

#### Type Methods

- [static func feathered(padding: CGFloat, softEdgeRadius: CGFloat?) -> FeatheredGlassBackgroundEffect](/documentation/swiftui/glassbackgroundeffect/feathered(padding:softedgeradius:))
- [AutomaticGlassBackgroundEffect](/documentation/swiftui/automaticglassbackgroundeffect)

#### Initializers

- [init()](/documentation/swiftui/automaticglassbackgroundeffect/init())
- [GlassBackgroundEffectConfiguration](/documentation/swiftui/glassbackgroundeffectconfiguration)

#### Structures

- [GlassBackgroundEffectConfiguration.Content](/documentation/swiftui/glassbackgroundeffectconfiguration/content-swift.struct)

#### Instance Properties

- [let content: GlassBackgroundEffectConfiguration.Content](/documentation/swiftui/glassbackgroundeffectconfiguration/content-swift.property)
- [FeatheredGlassBackgroundEffect](/documentation/swiftui/featheredglassbackgroundeffect)

#### Initializers

- [init()](/documentation/swiftui/featheredglassbackgroundeffect/init())
- [init(padding: CGFloat, softEdgeRadius: CGFloat?)](/documentation/swiftui/featheredglassbackgroundeffect/init(padding:softedgeradius:))
- [PlateGlassBackgroundEffect](/documentation/swiftui/plateglassbackgroundeffect)

#### Initializers

- [init()](/documentation/swiftui/plateglassbackgroundeffect/init())
- [Animations](/documentation/swiftui/animations)

### Adding state-based animation to an action

- [func withAnimation<Result>(Animation?, () throws -> Result) rethrows -> Result](/documentation/swiftui/withanimation(_:_:))
- [func withAnimation<Result>(Animation?, completionCriteria: AnimationCompletionCriteria, () throws -> Result, completion: () -> Void) rethrows -> Result](/documentation/swiftui/withanimation(_:completioncriteria:_:completion:))
- [AnimationCompletionCriteria](/documentation/swiftui/animationcompletioncriteria)

#### Getting the completion criteria

- [static let logicallyComplete: AnimationCompletionCriteria](/documentation/swiftui/animationcompletioncriteria/logicallycomplete)
- [static let removed: AnimationCompletionCriteria](/documentation/swiftui/animationcompletioncriteria/removed)
- [Animation](/documentation/swiftui/animation)

#### Getting the default animation

- [static let `default`: Animation](/documentation/swiftui/animation/default)

#### Getting linear animations

- [static var linear: Animation](/documentation/swiftui/animation/linear)
- [static func linear(duration: TimeInterval) -> Animation](/documentation/swiftui/animation/linear(duration:))

#### Getting eased animations

- [static var easeIn: Animation](/documentation/swiftui/animation/easein)
- [static func easeIn(duration: TimeInterval) -> Animation](/documentation/swiftui/animation/easein(duration:))
- [static var easeOut: Animation](/documentation/swiftui/animation/easeout)
- [static func easeOut(duration: TimeInterval) -> Animation](/documentation/swiftui/animation/easeout(duration:))
- [static var easeInOut: Animation](/documentation/swiftui/animation/easeinout)
- [static func easeInOut(duration: TimeInterval) -> Animation](/documentation/swiftui/animation/easeinout(duration:))

#### Getting built-in spring animations

- [static var bouncy: Animation](/documentation/swiftui/animation/bouncy)
- [static func bouncy(duration: TimeInterval, extraBounce: Double) -> Animation](/documentation/swiftui/animation/bouncy(duration:extrabounce:))
- [static var smooth: Animation](/documentation/swiftui/animation/smooth)
- [static func smooth(duration: TimeInterval, extraBounce: Double) -> Animation](/documentation/swiftui/animation/smooth(duration:extrabounce:))
- [static var snappy: Animation](/documentation/swiftui/animation/snappy)
- [static func snappy(duration: TimeInterval, extraBounce: Double) -> Animation](/documentation/swiftui/animation/snappy(duration:extrabounce:))

#### Customizing spring animations

- [static var spring: Animation](/documentation/swiftui/animation/spring)
- [static func spring(Spring, blendDuration: TimeInterval) -> Animation](/documentation/swiftui/animation/spring(_:blendduration:))
- [static func spring(duration: TimeInterval, bounce: Double, blendDuration: Double) -> Animation](/documentation/swiftui/animation/spring(duration:bounce:blendduration:))
- [static func spring(response: Double, dampingFraction: Double, blendDuration: TimeInterval) -> Animation](/documentation/swiftui/animation/spring(response:dampingfraction:blendduration:))
- [static var interactiveSpring: Animation](/documentation/swiftui/animation/interactivespring)
- [static func interactiveSpring(response: Double, dampingFraction: Double, blendDuration: TimeInterval) -> Animation](/documentation/swiftui/animation/interactivespring(response:dampingfraction:blendduration:))
- [static var interpolatingSpring: Animation](/documentation/swiftui/animation/interpolatingspring)
- [static func interpolatingSpring(Spring, initialVelocity: Double) -> Animation](/documentation/swiftui/animation/interpolatingspring(_:initialvelocity:))
- [static func interpolatingSpring(duration: TimeInterval, bounce: Double, initialVelocity: Double) -> Animation](/documentation/swiftui/animation/interpolatingspring(duration:bounce:initialvelocity:))
- [static func interpolatingSpring(mass: Double, stiffness: Double, damping: Double, initialVelocity: Double) -> Animation](/documentation/swiftui/animation/interpolatingspring(mass:stiffness:damping:initialvelocity:))

#### Creating custom animations

- [init<A>(A)](/documentation/swiftui/animation/init(_:))
- [static func timingCurve(UnitCurve, duration: TimeInterval) -> Animation](/documentation/swiftui/animation/timingcurve(_:duration:))
- [static func timingCurve(Double, Double, Double, Double, duration: TimeInterval) -> Animation](/documentation/swiftui/animation/timingcurve(_:_:_:_:duration:))

#### Configuring an animation

- [func delay(TimeInterval) -> Animation](/documentation/swiftui/animation/delay(_:))
- [func repeatCount(Int, autoreverses: Bool) -> Animation](/documentation/swiftui/animation/repeatcount(_:autoreverses:))
- [func repeatForever(autoreverses: Bool) -> Animation](/documentation/swiftui/animation/repeatforever(autoreverses:))
- [func speed(Double) -> Animation](/documentation/swiftui/animation/speed(_:))

#### Instance Properties

- [var base: any CustomAnimation](/documentation/swiftui/animation/base)

#### Instance Methods

- [func animate<V>(value: V, time: TimeInterval, context: inout AnimationContext<V>) -> V?](/documentation/swiftui/animation/animate(value:time:context:))
- [func logicallyComplete(after: TimeInterval) -> Animation](/documentation/swiftui/animation/logicallycomplete(after:))
- [func shouldMerge<V>(previous: Animation, value: V, time: TimeInterval, context: inout AnimationContext<V>) -> Bool](/documentation/swiftui/animation/shouldmerge(previous:value:time:context:))
- [func velocity<V>(value: V, time: TimeInterval, context: AnimationContext<V>) -> V?](/documentation/swiftui/animation/velocity(value:time:context:))

#### Type Properties

- [static var systemOverlayAppearance: Animation](/documentation/swiftui/animation/systemoverlayappearance)
- [static var systemOverlayDelayedDisappearance: Animation](/documentation/swiftui/animation/systemoverlaydelayeddisappearance)
- [static var systemOverlayDisappearance: Animation](/documentation/swiftui/animation/systemoverlaydisappearance)
- [static var systemOverlayDisappearanceDelay: TimeInterval](/documentation/swiftui/animation/systemoverlaydisappearancedelay)

#### Type Methods

- [static func interactiveSpring(duration: TimeInterval, extraBounce: Double, blendDuration: TimeInterval) -> Animation](/documentation/swiftui/animation/interactivespring(duration:extrabounce:blendduration:))

### Adding state-based animation to a view

- [func animation(_:)](/documentation/swiftui/view/animation(_:))
- [func animation<V>(Animation?, value: V) -> some View](/documentation/swiftui/view/animation(_:value:))
- [func animation<V>(Animation?, body: (PlaceholderContentView<Self>) -> V) -> some View](/documentation/swiftui/view/animation(_:body:))

### Creating phase-based animation

- [Controlling the timing and movements of your animations](/documentation/swiftui/controlling-the-timing-and-movements-of-your-animations)
- [func phaseAnimator<Phase>(some Sequence, content: (PlaceholderContentView<Self>, Phase) -> some View, animation: (Phase) -> Animation?) -> some View](/documentation/swiftui/view/phaseanimator(_:content:animation:))
- [func phaseAnimator<Phase>(some Sequence, trigger: some Equatable, content: (PlaceholderContentView<Self>, Phase) -> some View, animation: (Phase) -> Animation?) -> some View](/documentation/swiftui/view/phaseanimator(_:trigger:content:animation:))
- [PhaseAnimator](/documentation/swiftui/phaseanimator)

#### Creating a phase animator

- [init(some Sequence<Phase>, content: (Phase) -> Content, animation: (Phase) -> Animation?)](/documentation/swiftui/phaseanimator/init(_:content:animation:))
- [init(some Sequence<Phase>, trigger: some Equatable, content: (Phase) -> Content, animation: (Phase) -> Animation?)](/documentation/swiftui/phaseanimator/init(_:trigger:content:animation:))

### Creating keyframe-based animation

- [func keyframeAnimator<Value>(initialValue: Value, repeating: Bool, content: (PlaceholderContentView<Self>, Value) -> some View, keyframes: (Value) -> some Keyframes) -> some View](/documentation/swiftui/view/keyframeanimator(initialvalue:repeating:content:keyframes:))
- [func keyframeAnimator<Value>(initialValue: Value, trigger: some Equatable, content: (PlaceholderContentView<Self>, Value) -> some View, keyframes: (Value) -> some Keyframes) -> some View](/documentation/swiftui/view/keyframeanimator(initialvalue:trigger:content:keyframes:))
- [KeyframeAnimator](/documentation/swiftui/keyframeanimator)

#### Creating a phase animator

- [init(initialValue: Value, repeating: Bool, content: (Value) -> Content, keyframes: (Value) -> KeyframePath)](/documentation/swiftui/keyframeanimator/init(initialvalue:repeating:content:keyframes:))
- [init(initialValue: Value, trigger: some Equatable, content: (Value) -> Content, keyframes: (Value) -> KeyframePath)](/documentation/swiftui/keyframeanimator/init(initialvalue:trigger:content:keyframes:))
- [Keyframes](/documentation/swiftui/keyframes)

#### Creating a keyframe

- [var body: Self.Body](/documentation/swiftui/keyframes/body-swift.property)
- [Body](/documentation/swiftui/keyframes/body-swift.associatedtype)
- [Value](/documentation/swiftui/keyframes/value)
- [KeyframeTimeline](/documentation/swiftui/keyframetimeline)

#### Creating a keyframe timeline

- [init(initialValue: Value, content: () -> some Keyframes<Value>)](/documentation/swiftui/keyframetimeline/init(initialvalue:content:))

#### Getting the duration

- [var duration: TimeInterval](/documentation/swiftui/keyframetimeline/duration)

#### Getting an interpolated value

- [func value(time: Double) -> Value](/documentation/swiftui/keyframetimeline/value(time:))
- [func value(progress: Double) -> Value](/documentation/swiftui/keyframetimeline/value(progress:))
- [KeyframeTrack](/documentation/swiftui/keyframetrack)

#### Creating a keyframe track

- [init(content: () -> Content)](/documentation/swiftui/keyframetrack/init(content:))
- [init(WritableKeyPath<Root, Value>, content: () -> Content)](/documentation/swiftui/keyframetrack/init(_:content:))
- [KeyframeTrackContentBuilder](/documentation/swiftui/keyframetrackcontentbuilder)

#### Building keyframe track content

- [static func buildArray([some KeyframeTrackContent<Value>]) -> some KeyframeTrackContent<Value>
](/documentation/swiftui/keyframetrackcontentbuilder/buildarray(_:))
- [static func buildBlock() -> some KeyframeTrackContent<Value>
](/documentation/swiftui/keyframetrackcontentbuilder/buildblock())
- [static func buildEither<First, Second>(first: First) -> KeyframeTrackContentBuilder<Value>.Conditional<Value, First, Second>](/documentation/swiftui/keyframetrackcontentbuilder/buildeither(first:))
- [static func buildEither<First, Second>(second: Second) -> KeyframeTrackContentBuilder<Value>.Conditional<Value, First, Second>](/documentation/swiftui/keyframetrackcontentbuilder/buildeither(second:))
- [static func buildExpression<K>(K) -> K](/documentation/swiftui/keyframetrackcontentbuilder/buildexpression(_:))
- [static func buildPartialBlock(accumulated: some KeyframeTrackContent<Value>, next: some KeyframeTrackContent<Value>) -> some KeyframeTrackContent<Value>
](/documentation/swiftui/keyframetrackcontentbuilder/buildpartialblock(accumulated:next:))
- [static func buildPartialBlock<K>(first: K) -> K](/documentation/swiftui/keyframetrackcontentbuilder/buildpartialblock(first:))
- [KeyframeTrackContentBuilder.Conditional](/documentation/swiftui/keyframetrackcontentbuilder/conditional)
- [KeyframesBuilder](/documentation/swiftui/keyframesbuilder)

#### Building keyframes

- [static func buildArray([some KeyframeTrackContent<Value>]) -> some KeyframeTrackContent<Value>
](/documentation/swiftui/keyframesbuilder/buildarray(_:))
- [static buildBlock()](/documentation/swiftui/keyframesbuilder/buildblock())
- [static func buildEither<First, Second>(first: First) -> KeyframeTrackContentBuilder<Value>.Conditional<Value, First, Second>](/documentation/swiftui/keyframesbuilder/buildeither(first:))
- [static func buildEither<First, Second>(second: Second) -> KeyframeTrackContentBuilder<Value>.Conditional<Value, First, Second>](/documentation/swiftui/keyframesbuilder/buildeither(second:))
- [static buildExpression(_:)](/documentation/swiftui/keyframesbuilder/buildexpression(_:))
- [static buildFinalResult(_:)](/documentation/swiftui/keyframesbuilder/buildfinalresult(_:))
- [static buildPartialBlock(accumulated:next:)](/documentation/swiftui/keyframesbuilder/buildpartialblock(accumulated:next:))
- [static buildPartialBlock(first:)](/documentation/swiftui/keyframesbuilder/buildpartialblock(first:))
- [KeyframeTrackContent](/documentation/swiftui/keyframetrackcontent)

#### Creating a keyframe

- [var body: Self.Body](/documentation/swiftui/keyframetrackcontent/body-swift.property)
- [Body](/documentation/swiftui/keyframetrackcontent/body-swift.associatedtype)
- [Value](/documentation/swiftui/keyframetrackcontent/value)
- [CubicKeyframe](/documentation/swiftui/cubickeyframe)

#### Creating the keyframe

- [init(Value, duration: TimeInterval, startVelocity: Value?, endVelocity: Value?)](/documentation/swiftui/cubickeyframe/init(_:duration:startvelocity:endvelocity:))
- [LinearKeyframe](/documentation/swiftui/linearkeyframe)

#### Creating the keyframe

- [init(Value, duration: TimeInterval, timingCurve: UnitCurve)](/documentation/swiftui/linearkeyframe/init(_:duration:timingcurve:))
- [MoveKeyframe](/documentation/swiftui/movekeyframe)

#### Creating the keyframe

- [init(Value)](/documentation/swiftui/movekeyframe/init(_:))
- [SpringKeyframe](/documentation/swiftui/springkeyframe)

#### Creating the keyframe

- [init(Value, duration: TimeInterval?, spring: Spring, startVelocity: Value?)](/documentation/swiftui/springkeyframe/init(_:duration:spring:startvelocity:))

### Creating custom animations

- [CustomAnimation](/documentation/swiftui/customanimation)

#### Animating a value

- [func animate<V>(value: V, time: TimeInterval, context: inout AnimationContext<V>) -> V?](/documentation/swiftui/customanimation/animate(value:time:context:))

#### Getting the velocity

- [func velocity<V>(value: V, time: TimeInterval, context: AnimationContext<V>) -> V?](/documentation/swiftui/customanimation/velocity(value:time:context:))

#### Determining whether to merge

- [func shouldMerge<V>(previous: Animation, value: V, time: TimeInterval, context: inout AnimationContext<V>) -> Bool](/documentation/swiftui/customanimation/shouldmerge(previous:value:time:context:))
- [AnimationContext](/documentation/swiftui/animationcontext)

#### Managing state

- [var state: AnimationState<Value>](/documentation/swiftui/animationcontext/state)

#### Retrieving view environment values

- [var environment: EnvironmentValues](/documentation/swiftui/animationcontext/environment)

#### Creating context

- [func withState<T>(AnimationState<T>) -> AnimationContext<T>](/documentation/swiftui/animationcontext/withstate(_:))

#### Instance Properties

- [var isLogicallyComplete: Bool](/documentation/swiftui/animationcontext/islogicallycomplete)
- [AnimationState](/documentation/swiftui/animationstate)

#### Creating animation state

- [init()](/documentation/swiftui/animationstate/init())

#### Accessing custom keys

- [subscript<K>(K.Type) -> K.Value](/documentation/swiftui/animationstate/subscript(_:))
- [AnimationStateKey](/documentation/swiftui/animationstatekey)

#### Setting the default value

- [static var defaultValue: Self.Value](/documentation/swiftui/animationstatekey/defaultvalue)
- [Value](/documentation/swiftui/animationstatekey/value)
- [UnitCurve](/documentation/swiftui/unitcurve)

#### Getting a linear curve

- [static let linear: UnitCurve](/documentation/swiftui/unitcurve/linear)

#### Getting easing curves

- [static let easeIn: UnitCurve](/documentation/swiftui/unitcurve/easein)
- [static let easeOut: UnitCurve](/documentation/swiftui/unitcurve/easeout)
- [static let easeInOut: UnitCurve](/documentation/swiftui/unitcurve/easeinout)
- [static let circularEaseIn: UnitCurve](/documentation/swiftui/unitcurve/circulareasein)
- [static let circularEaseOut: UnitCurve](/documentation/swiftui/unitcurve/circulareaseout)
- [static let circularEaseInOut: UnitCurve](/documentation/swiftui/unitcurve/circulareaseinout)

#### Creating a general Bezier curve

- [static func bezier(startControlPoint: UnitPoint, endControlPoint: UnitPoint) -> UnitCurve](/documentation/swiftui/unitcurve/bezier(startcontrolpoint:endcontrolpoint:))

#### Inverting a curve

- [var inverse: UnitCurve](/documentation/swiftui/unitcurve/inverse)

#### Getting curve characteristics

- [func value(at: Double) -> Double](/documentation/swiftui/unitcurve/value(at:))
- [func velocity(at: Double) -> Double](/documentation/swiftui/unitcurve/velocity(at:))

#### Deprecated symbols

- [static let easeInEaseOut: UnitCurve](/documentation/swiftui/unitcurve/easeineaseout)
- [Spring](/documentation/swiftui/spring)

#### Creating a spring

- [init(duration: TimeInterval, bounce: Double)](/documentation/swiftui/spring/init(duration:bounce:))
- [init(mass: Double, stiffness: Double, damping: Double, allowOverDamping: Bool)](/documentation/swiftui/spring/init(mass:stiffness:damping:allowoverdamping:))
- [init(response: Double, dampingRatio: Double)](/documentation/swiftui/spring/init(response:dampingratio:))
- [init(settlingDuration: TimeInterval, dampingRatio: Double, epsilon: Double)](/documentation/swiftui/spring/init(settlingduration:dampingratio:epsilon:))

#### Getting built-in springs

- [static var bouncy: Spring](/documentation/swiftui/spring/bouncy)
- [static func bouncy(duration: TimeInterval, extraBounce: Double) -> Spring](/documentation/swiftui/spring/bouncy(duration:extrabounce:))
- [static var smooth: Spring](/documentation/swiftui/spring/smooth)
- [static func smooth(duration: TimeInterval, extraBounce: Double) -> Spring](/documentation/swiftui/spring/smooth(duration:extrabounce:))
- [static var snappy: Spring](/documentation/swiftui/spring/snappy)
- [static func snappy(duration: TimeInterval, extraBounce: Double) -> Spring](/documentation/swiftui/spring/snappy(duration:extrabounce:))

#### Getting spring characteristics

- [var bounce: Double](/documentation/swiftui/spring/bounce)
- [var damping: Double](/documentation/swiftui/spring/damping)
- [var dampingRatio: Double](/documentation/swiftui/spring/dampingratio)
- [var duration: TimeInterval](/documentation/swiftui/spring/duration)
- [var mass: Double](/documentation/swiftui/spring/mass)
- [var response: Double](/documentation/swiftui/spring/response)
- [var settlingDuration: TimeInterval](/documentation/swiftui/spring/settlingduration)
- [var stiffness: Double](/documentation/swiftui/spring/stiffness)

#### Getting spring state

- [func value<V>(target: V, initialVelocity: V, time: TimeInterval) -> V](/documentation/swiftui/spring/value(target:initialvelocity:time:))
- [func value<V>(fromValue: V, toValue: V, initialVelocity: V, time: TimeInterval) -> V](/documentation/swiftui/spring/value(fromvalue:tovalue:initialvelocity:time:))
- [func velocity<V>(target: V, initialVelocity: V, time: TimeInterval) -> V](/documentation/swiftui/spring/velocity(target:initialvelocity:time:))
- [func velocity<V>(fromValue: V, toValue: V, initialVelocity: V, time: TimeInterval) -> V](/documentation/swiftui/spring/velocity(fromvalue:tovalue:initialvelocity:time:))

#### Setting spring state

- [func update<V>(value: inout V, velocity: inout V, target: V, deltaTime: TimeInterval)](/documentation/swiftui/spring/update(value:velocity:target:deltatime:))

#### Calculating forces and durations

- [func force<V>(target: V, position: V, velocity: V) -> V](/documentation/swiftui/spring/force(target:position:velocity:))
- [func force<V>(fromValue: V, toValue: V, position: V, velocity: V) -> V](/documentation/swiftui/spring/force(fromvalue:tovalue:position:velocity:))
- [func settlingDuration<V>(target: V, initialVelocity: V, epsilon: Double) -> TimeInterval](/documentation/swiftui/spring/settlingduration(target:initialvelocity:epsilon:))
- [func settlingDuration<V>(fromValue: V, toValue: V, initialVelocity: V, epsilon: Double) -> TimeInterval](/documentation/swiftui/spring/settlingduration(fromvalue:tovalue:initialvelocity:epsilon:))

### Making data animatable

- [Animatable](/documentation/swiftui/animatable)

#### Animating data

- [macro Animatable()](/documentation/swiftui/animatable())
- [macro AnimatableIgnored()](/documentation/swiftui/animatableignored())
- [var animatableData: Self.AnimatableData](/documentation/swiftui/animatable/animatabledata-6nydg)
- [AnimatableData](/documentation/swiftui/animatable/animatabledata-swift.associatedtype)
- [AnimatableValues](/documentation/swiftui/animatablevalues)

#### Initializers

- [init(repeat each Value)](/documentation/swiftui/animatablevalues/init(_:))

#### Instance Properties

- [var magnitudeSquared: Double](/documentation/swiftui/animatablevalues/magnitudesquared)
- [var value: (repeat each Value)](/documentation/swiftui/animatablevalues/value)
- [AnimatablePair](/documentation/swiftui/animatablepair)

#### Creating an animatable pair

- [init(First, Second)](/documentation/swiftui/animatablepair/init(_:_:))

#### Getting the constituent animations

- [var first: First](/documentation/swiftui/animatablepair/first)
- [var second: Second](/documentation/swiftui/animatablepair/second)

#### Manipulating values

- [var magnitudeSquared: Double](/documentation/swiftui/animatablepair/magnitudesquared)
- [VectorArithmetic](/documentation/swiftui/vectorarithmetic)

#### Manipulating values

- [var magnitudeSquared: Double](/documentation/swiftui/vectorarithmetic/magnitudesquared)
- [func scale(by: Double)](/documentation/swiftui/vectorarithmetic/scale(by:))
- [func scaled(by: Double) -> Self](/documentation/swiftui/vectorarithmetic/scaled(by:))
- [func interpolate(towards: Self, amount: Double)](/documentation/swiftui/vectorarithmetic/interpolate(towards:amount:))
- [func interpolated(towards: Self, amount: Double) -> Self](/documentation/swiftui/vectorarithmetic/interpolated(towards:amount:))
- [EmptyAnimatableData](/documentation/swiftui/emptyanimatabledata)

#### Creating the data

- [init()](/documentation/swiftui/emptyanimatabledata/init())

#### Manipulating the data

- [var magnitudeSquared: Double](/documentation/swiftui/emptyanimatabledata/magnitudesquared)

### Updating a view on a schedule

- [Updating watchOS apps with timelines](/documentation/watchos-apps/updating-watchos-apps-with-timelines)
- [TimelineView](/documentation/swiftui/timelineview)

#### Creating a timeline

- [init(Schedule, content: (TimelineViewDefaultContext) -> Content)](/documentation/swiftui/timelineview/init(_:content:)-1mlmj)
- [TimelineView.Context](/documentation/swiftui/timelineview/context)

##### Getting the date

- [let date: Date](/documentation/swiftui/timelineview/context/date)

##### Getting the cadence

- [let cadence: TimelineView<Schedule, Content>.Context.Cadence](/documentation/swiftui/timelineview/context/cadence-swift.property)
- [TimelineView.Context.Cadence](/documentation/swiftui/timelineview/context/cadence-swift.enum)

###### Getting cadences

- [case live](/documentation/swiftui/timelineview/context/cadence-swift.enum/live)
- [case seconds](/documentation/swiftui/timelineview/context/cadence-swift.enum/seconds)
- [case minutes](/documentation/swiftui/timelineview/context/cadence-swift.enum/minutes)

##### Invalidating the context

- [func invalidateTimelineContent()](/documentation/swiftui/timelineview/context/invalidatetimelinecontent())

#### Deprecated symbols

- [init(Schedule, content: (TimelineView<Schedule, Content>.Context) -> Content)](/documentation/swiftui/timelineview/init(_:content:)-67h35)

#### Initializers

- [init(_:content:)](/documentation/swiftui/timelineview/init(_:content:))
- [TimelineSchedule](/documentation/swiftui/timelineschedule)

#### Getting built-in schedules

- [static var animation: AnimationTimelineSchedule](/documentation/swiftui/timelineschedule/animation)
- [static func animation(minimumInterval: Double?, paused: Bool) -> AnimationTimelineSchedule](/documentation/swiftui/timelineschedule/animation(minimuminterval:paused:))
- [static var everyMinute: EveryMinuteTimelineSchedule](/documentation/swiftui/timelineschedule/everyminute)
- [static func explicit<S>(S) -> ExplicitTimelineSchedule<S>](/documentation/swiftui/timelineschedule/explicit(_:))
- [static func periodic(from: Date, by: TimeInterval) -> PeriodicTimelineSchedule](/documentation/swiftui/timelineschedule/periodic(from:by:))

#### Getting a sequence of dates

- [func entries(from: Date, mode: Self.Mode) -> Self.Entries](/documentation/swiftui/timelineschedule/entries(from:mode:))
- [Entries](/documentation/swiftui/timelineschedule/entries)

#### Specifying a mode

- [TimelineSchedule.Mode](/documentation/swiftui/timelineschedule/mode)
- [TimelineScheduleMode](/documentation/swiftui/timelineschedulemode)

##### Getting timeline schedule modes

- [case normal](/documentation/swiftui/timelineschedulemode/normal)
- [case lowFrequency](/documentation/swiftui/timelineschedulemode/lowfrequency)

#### Supporting types

- [AnimationTimelineSchedule](/documentation/swiftui/animationtimelineschedule)

##### Creating a schedule

- [init(minimumInterval: Double?, paused: Bool)](/documentation/swiftui/animationtimelineschedule/init(minimuminterval:paused:))

##### Getting the sequence of dates

- [func entries(from: Date, mode: TimelineScheduleMode) -> AnimationTimelineSchedule.Entries](/documentation/swiftui/animationtimelineschedule/entries(from:mode:))
- [EveryMinuteTimelineSchedule](/documentation/swiftui/everyminutetimelineschedule)

##### Creating a schedule

- [init()](/documentation/swiftui/everyminutetimelineschedule/init())

##### Getting the sequence of dates

- [func entries(from: Date, mode: TimelineScheduleMode) -> EveryMinuteTimelineSchedule.Entries](/documentation/swiftui/everyminutetimelineschedule/entries(from:mode:))
- [EveryMinuteTimelineSchedule.Entries](/documentation/swiftui/everyminutetimelineschedule/entries)
- [ExplicitTimelineSchedule](/documentation/swiftui/explicittimelineschedule)

##### Creating a schedule

- [init(Entries)](/documentation/swiftui/explicittimelineschedule/init(_:))

##### Getting the sequence of dates

- [func entries(from: Date, mode: TimelineScheduleMode) -> Entries](/documentation/swiftui/explicittimelineschedule/entries(from:mode:))
- [PeriodicTimelineSchedule](/documentation/swiftui/periodictimelineschedule)

##### Creating a schedule

- [init(from: Date, by: TimeInterval)](/documentation/swiftui/periodictimelineschedule/init(from:by:))

##### Getting the sequence of dates

- [func entries(from: Date, mode: TimelineScheduleMode) -> PeriodicTimelineSchedule.Entries](/documentation/swiftui/periodictimelineschedule/entries(from:mode:))
- [PeriodicTimelineSchedule.Entries](/documentation/swiftui/periodictimelineschedule/entries)
- [TimelineViewDefaultContext](/documentation/swiftui/timelineviewdefaultcontext)

### Synchronizing geometries

- [func matchedGeometryEffect<ID>(id: ID, in: Namespace.ID, properties: MatchedGeometryProperties, anchor: UnitPoint, isSource: Bool) -> some View](/documentation/swiftui/view/matchedgeometryeffect(id:in:properties:anchor:issource:))
- [MatchedGeometryProperties](/documentation/swiftui/matchedgeometryproperties)

#### Matching properties

- [static let frame: MatchedGeometryProperties](/documentation/swiftui/matchedgeometryproperties/frame)
- [static let position: MatchedGeometryProperties](/documentation/swiftui/matchedgeometryproperties/position)
- [static let size: MatchedGeometryProperties](/documentation/swiftui/matchedgeometryproperties/size)
- [GeometryEffect](/documentation/swiftui/geometryeffect)

#### Applying effects

- [func effectValue(size: CGSize) -> ProjectionTransform](/documentation/swiftui/geometryeffect/effectvalue(size:))
- [func ignoredByLayout() -> _IgnoredByLayoutEffect<Self>](/documentation/swiftui/geometryeffect/ignoredbylayout())
- [Namespace](/documentation/swiftui/namespace)

#### Creating a namespace

- [init()](/documentation/swiftui/namespace/init())

#### Getting the namespace

- [var wrappedValue: Namespace.ID](/documentation/swiftui/namespace/wrappedvalue)
- [Namespace.ID](/documentation/swiftui/namespace/id)
- [func geometryGroup() -> some View](/documentation/swiftui/view/geometrygroup())

### Defining transitions

- [func transition(_:)](/documentation/swiftui/view/transition(_:))
- [Transition](/documentation/swiftui/transition)

#### Getting built-in transitions

- [static var blurReplace: BlurReplaceTransition](/documentation/swiftui/transition/blurreplace)
- [static func blurReplace(BlurReplaceTransition.Configuration) -> Self](/documentation/swiftui/transition/blurreplace(_:))
- [static var identity: IdentityTransition](/documentation/swiftui/transition/identity)
- [static func move(edge: Edge) -> Self](/documentation/swiftui/transition/move(edge:))
- [static func offset(CGSize) -> Self](/documentation/swiftui/transition/offset(_:))
- [static func offset(x: CGFloat, y: CGFloat) -> Self](/documentation/swiftui/transition/offset(x:y:))
- [static var opacity: OpacityTransition](/documentation/swiftui/transition/opacity)
- [static func push(from: Edge) -> Self](/documentation/swiftui/transition/push(from:))
- [static var scale: ScaleTransition](/documentation/swiftui/transition/scale)
- [static func scale(Double, anchor: UnitPoint) -> Self](/documentation/swiftui/transition/scale(_:anchor:))
- [static var slide: SlideTransition](/documentation/swiftui/transition/slide)
- [static var symbolEffect: SymbolEffectTransition](/documentation/swiftui/transition/symboleffect)
- [static func symbolEffect<T>(T, options: SymbolEffectOptions) -> SymbolEffectTransition](/documentation/swiftui/transition/symboleffect(_:options:))

#### Configuring a transition

- [func animation(Animation?) -> some Transition](/documentation/swiftui/transition/animation(_:))
- [static var properties: TransitionProperties](/documentation/swiftui/transition/properties)

#### Using a transition

- [func apply<V>(content: V, phase: TransitionPhase) -> some View](/documentation/swiftui/transition/apply(content:phase:))
- [func combined<T>(with: T) -> some Transition](/documentation/swiftui/transition/combined(with:))

#### Creating a custom transition

- [func body(content: Self.Content, phase: TransitionPhase) -> Self.Body](/documentation/swiftui/transition/body(content:phase:))
- [Body](/documentation/swiftui/transition/body)
- [Transition.Content](/documentation/swiftui/transition/content)

#### Supporting types

- [BlurReplaceTransition](/documentation/swiftui/blurreplacetransition)

##### Creating the transition

- [init(configuration: BlurReplaceTransition.Configuration)](/documentation/swiftui/blurreplacetransition/init(configuration:))
- [var configuration: BlurReplaceTransition.Configuration](/documentation/swiftui/blurreplacetransition/configuration-swift.property)
- [BlurReplaceTransition.Configuration](/documentation/swiftui/blurreplacetransition/configuration-swift.struct)

###### Getting the transition configuration

- [static let downUp: BlurReplaceTransition.Configuration](/documentation/swiftui/blurreplacetransition/configuration-swift.struct/downup)
- [static let upUp: BlurReplaceTransition.Configuration](/documentation/swiftui/blurreplacetransition/configuration-swift.struct/upup)
- [IdentityTransition](/documentation/swiftui/identitytransition)

##### Creating the transition

- [init()](/documentation/swiftui/identitytransition/init())
- [MoveTransition](/documentation/swiftui/movetransition)

##### Creating the transition

- [init(edge: Edge)](/documentation/swiftui/movetransition/init(edge:))
- [var edge: Edge](/documentation/swiftui/movetransition/edge)
- [OffsetTransition](/documentation/swiftui/offsettransition)

##### Creating the transition

- [init(CGSize)](/documentation/swiftui/offsettransition/init(_:))
- [var offset: CGSize](/documentation/swiftui/offsettransition/offset)
- [OpacityTransition](/documentation/swiftui/opacitytransition)

##### Creating the transition

- [init()](/documentation/swiftui/opacitytransition/init())
- [PushTransition](/documentation/swiftui/pushtransition)

##### Creating the transition

- [init(edge: Edge)](/documentation/swiftui/pushtransition/init(edge:))
- [var edge: Edge](/documentation/swiftui/pushtransition/edge)
- [ScaleTransition](/documentation/swiftui/scaletransition)

##### Creating the transition

- [init(Double, anchor: UnitPoint)](/documentation/swiftui/scaletransition/init(_:anchor:))
- [var anchor: UnitPoint](/documentation/swiftui/scaletransition/anchor)
- [var scale: Double](/documentation/swiftui/scaletransition/scale)
- [SlideTransition](/documentation/swiftui/slidetransition)

##### Creating the transition

- [init()](/documentation/swiftui/slidetransition/init())
- [TransitionProperties](/documentation/swiftui/transitionproperties)

#### Creating the transition properties

- [init(hasMotion: Bool)](/documentation/swiftui/transitionproperties/init(hasmotion:))
- [var hasMotion: Bool](/documentation/swiftui/transitionproperties/hasmotion)
- [TransitionPhase](/documentation/swiftui/transitionphase)

#### Getting the phase

- [case identity](/documentation/swiftui/transitionphase/identity)
- [case willAppear](/documentation/swiftui/transitionphase/willappear)
- [case didDisappear](/documentation/swiftui/transitionphase/diddisappear)

#### Getting phase characteristics

- [var isIdentity: Bool](/documentation/swiftui/transitionphase/isidentity)
- [var value: Double](/documentation/swiftui/transitionphase/value)
- [AsymmetricTransition](/documentation/swiftui/asymmetrictransition)

#### Creating the transition

- [init(insertion: Insertion, removal: Removal)](/documentation/swiftui/asymmetrictransition/init(insertion:removal:))

#### Getting transition properties

- [var insertion: Insertion](/documentation/swiftui/asymmetrictransition/insertion)
- [var removal: Removal](/documentation/swiftui/asymmetrictransition/removal)
- [AnyTransition](/documentation/swiftui/anytransition)

#### Getting built-in transitions

- [static var identity: AnyTransition](/documentation/swiftui/anytransition/identity)
- [static func move(edge: Edge) -> AnyTransition](/documentation/swiftui/anytransition/move(edge:))
- [static func offset(CGSize) -> AnyTransition](/documentation/swiftui/anytransition/offset(_:))
- [static func offset(x: CGFloat, y: CGFloat) -> AnyTransition](/documentation/swiftui/anytransition/offset(x:y:))
- [static let opacity: AnyTransition](/documentation/swiftui/anytransition/opacity)
- [static func push(from: Edge) -> AnyTransition](/documentation/swiftui/anytransition/push(from:))
- [static var scale: AnyTransition](/documentation/swiftui/anytransition/scale)
- [static func scale(scale: CGFloat, anchor: UnitPoint) -> AnyTransition](/documentation/swiftui/anytransition/scale(scale:anchor:))
- [static var slide: AnyTransition](/documentation/swiftui/anytransition/slide)

#### Combining and configuring transitions

- [func animation(Animation?) -> AnyTransition](/documentation/swiftui/anytransition/animation(_:))
- [static func asymmetric(insertion: AnyTransition, removal: AnyTransition) -> AnyTransition](/documentation/swiftui/anytransition/asymmetric(insertion:removal:))
- [func combined(with: AnyTransition) -> AnyTransition](/documentation/swiftui/anytransition/combined(with:))

#### Creating a custom transition

- [init<T>(T)](/documentation/swiftui/anytransition/init(_:))
- [static func modifier<E>(active: E, identity: E) -> AnyTransition](/documentation/swiftui/anytransition/modifier(active:identity:))
- [func contentTransition(ContentTransition) -> some View](/documentation/swiftui/view/contenttransition(_:))
- [var contentTransition: ContentTransition](/documentation/swiftui/environmentvalues/contenttransition)
- [var contentTransitionAddsDrawingGroup: Bool](/documentation/swiftui/environmentvalues/contenttransitionaddsdrawinggroup)
- [ContentTransition](/documentation/swiftui/contenttransition)

#### Getting content transitions

- [static let identity: ContentTransition](/documentation/swiftui/contenttransition/identity)
- [static let interpolate: ContentTransition](/documentation/swiftui/contenttransition/interpolate)
- [static func numericText(countsDown: Bool) -> ContentTransition](/documentation/swiftui/contenttransition/numerictext(countsdown:))
- [static func numericText(value: Double) -> ContentTransition](/documentation/swiftui/contenttransition/numerictext(value:))
- [static let opacity: ContentTransition](/documentation/swiftui/contenttransition/opacity)
- [static var symbolEffect: ContentTransition](/documentation/swiftui/contenttransition/symboleffect)
- [static func symbolEffect<T>(T, options: SymbolEffectOptions) -> ContentTransition](/documentation/swiftui/contenttransition/symboleffect(_:options:))
- [PlaceholderContentView](/documentation/swiftui/placeholdercontentview)
- [func navigationTransition(some NavigationTransition) -> some View](/documentation/swiftui/view/navigationtransition(_:))
- [NavigationTransition](/documentation/swiftui/navigationtransition)

#### Getting built-in transitions

- [static var automatic: AutomaticNavigationTransition](/documentation/swiftui/navigationtransition/automatic)
- [static func zoom(sourceID: some Hashable, in: Namespace.ID) -> ZoomNavigationTransition](/documentation/swiftui/navigationtransition/zoom(sourceid:in:))

#### Supporting Types

- [AutomaticNavigationTransition](/documentation/swiftui/automaticnavigationtransition)
- [ZoomNavigationTransition](/documentation/swiftui/zoomnavigationtransition)
- [func matchedTransitionSource(id: some Hashable, in: Namespace.ID) -> some View](/documentation/swiftui/view/matchedtransitionsource(id:in:))
- [func matchedTransitionSource(id: some Hashable, in: Namespace.ID, configuration: (EmptyMatchedTransitionSourceConfiguration) -> some MatchedTransitionSourceConfiguration) -> some View](/documentation/swiftui/view/matchedtransitionsource(id:in:configuration:))
- [MatchedTransitionSourceConfiguration](/documentation/swiftui/matchedtransitionsourceconfiguration)

#### Instance Methods

- [func background(Color) -> some MatchedTransitionSourceConfiguration](/documentation/swiftui/matchedtransitionsourceconfiguration/background(_:))
- [func clipShape(RoundedRectangle) -> some MatchedTransitionSourceConfiguration](/documentation/swiftui/matchedtransitionsourceconfiguration/clipshape(_:))
- [func shadow(color: Color, radius: CGFloat, x: CGFloat, y: CGFloat) -> some MatchedTransitionSourceConfiguration](/documentation/swiftui/matchedtransitionsourceconfiguration/shadow(color:radius:x:y:))
- [EmptyMatchedTransitionSourceConfiguration](/documentation/swiftui/emptymatchedtransitionsourceconfiguration)

### Moving an animation to another view

- [func withTransaction<Result>(Transaction, () throws -> Result) rethrows -> Result](/documentation/swiftui/withtransaction(_:_:))
- [func withTransaction<R, V>(WritableKeyPath<Transaction, V>, V, () throws -> R) rethrows -> R](/documentation/swiftui/withtransaction(_:_:_:))
- [func transaction((inout Transaction) -> Void) -> some View](/documentation/swiftui/view/transaction(_:))
- [func transaction(value: some Equatable, (inout Transaction) -> Void) -> some View](/documentation/swiftui/view/transaction(value:_:))
- [func transaction<V>((inout Transaction) -> Void, body: (PlaceholderContentView<Self>) -> V) -> some View](/documentation/swiftui/view/transaction(_:body:))
- [Transaction](/documentation/swiftui/transaction)

#### Creating a transaction

- [init()](/documentation/swiftui/transaction/init())
- [init(animation: Animation?)](/documentation/swiftui/transaction/init(animation:))

#### Managing animations

- [var animation: Animation?](/documentation/swiftui/transaction/animation)
- [var disablesAnimations: Bool](/documentation/swiftui/transaction/disablesanimations)
- [func addAnimationCompletion(criteria: AnimationCompletionCriteria, () -> Void)](/documentation/swiftui/transaction/addanimationcompletion(criteria:_:))

#### Managing window dismissal

- [var dismissBehavior: DismissBehavior](/documentation/swiftui/transaction/dismissbehavior)

#### Getting information about a transaction

- [var isContinuous: Bool](/documentation/swiftui/transaction/iscontinuous)
- [var scrollTargetAnchor: UnitPoint?](/documentation/swiftui/transaction/scrolltargetanchor)
- [var tracksVelocity: Bool](/documentation/swiftui/transaction/tracksvelocity)
- [subscript<K>(K.Type) -> K.Value](/documentation/swiftui/transaction/subscript(_:))

#### Instance Properties

- [var scrollContentOffsetAdjustmentBehavior: ScrollContentOffsetAdjustmentBehavior](/documentation/swiftui/transaction/scrollcontentoffsetadjustmentbehavior)
- [var scrollPositionUpdatePreservesVelocity: Bool](/documentation/swiftui/transaction/scrollpositionupdatepreservesvelocity)
- [macro Entry()](/documentation/swiftui/entry())
- [TransactionKey](/documentation/swiftui/transactionkey)

#### Setting a default value

- [static var defaultValue: Self.Value](/documentation/swiftui/transactionkey/defaultvalue)
- [Value](/documentation/swiftui/transactionkey/value)

### Deprecated types

- [AnimatableModifier](/documentation/swiftui/animatablemodifier)
- [Text input and output](/documentation/swiftui/text-input-and-output)

### Displaying text

- [Text](/documentation/swiftui/text)

#### Creating a text view

- [init(LocalizedStringKey, tableName: String?, bundle: Bundle?, comment: StaticString?)](/documentation/swiftui/text/init(_:tablename:bundle:comment:))
- [init(_:)](/documentation/swiftui/text/init(_:))
- [init(verbatim: String)](/documentation/swiftui/text/init(verbatim:))
- [init(Date, style: Text.DateStyle)](/documentation/swiftui/text/init(_:style:))
- [init(_:format:)](/documentation/swiftui/text/init(_:format:))
- [init(_:formatter:)](/documentation/swiftui/text/init(_:formatter:))
- [init(timerInterval: ClosedRange<Date>, pauseTime: Date?, countsDown: Bool, showsHours: Bool)](/documentation/swiftui/text/init(timerinterval:pausetime:countsdown:showshours:))

#### Choosing a font

- [func font(Font?) -> Text](/documentation/swiftui/text/font(_:))
- [func fontWeight(Font.Weight?) -> Text](/documentation/swiftui/text/fontweight(_:))
- [func fontDesign(Font.Design?) -> Text](/documentation/swiftui/text/fontdesign(_:))
- [func fontWidth(Font.Width?) -> Text](/documentation/swiftui/text/fontwidth(_:))

#### Styling the view’s text

- [func foregroundStyle<S>(S) -> Text](/documentation/swiftui/text/foregroundstyle(_:))
- [func bold() -> Text](/documentation/swiftui/text/bold())
- [func bold(Bool) -> Text](/documentation/swiftui/text/bold(_:))
- [func italic() -> Text](/documentation/swiftui/text/italic())
- [func italic(Bool) -> Text](/documentation/swiftui/text/italic(_:))
- [func strikethrough(Bool, color: Color?) -> Text](/documentation/swiftui/text/strikethrough(_:color:))
- [func strikethrough(Bool, pattern: Text.LineStyle.Pattern, color: Color?) -> Text](/documentation/swiftui/text/strikethrough(_:pattern:color:))
- [func underline(Bool, color: Color?) -> Text](/documentation/swiftui/text/underline(_:color:))
- [func underline(Bool, pattern: Text.LineStyle.Pattern, color: Color?) -> Text](/documentation/swiftui/text/underline(_:pattern:color:))
- [func monospaced(Bool) -> Text](/documentation/swiftui/text/monospaced(_:))
- [func monospacedDigit() -> Text](/documentation/swiftui/text/monospaceddigit())
- [func kerning(CGFloat) -> Text](/documentation/swiftui/text/kerning(_:))
- [func tracking(CGFloat) -> Text](/documentation/swiftui/text/tracking(_:))
- [func baselineOffset(CGFloat) -> Text](/documentation/swiftui/text/baselineoffset(_:))
- [Text.Case](/documentation/swiftui/text/case)

##### Getting text cases

- [case lowercase](/documentation/swiftui/text/case/lowercase)
- [case uppercase](/documentation/swiftui/text/case/uppercase)
- [Text.DateStyle](/documentation/swiftui/text/datestyle)

##### Getting text date styles

- [static let date: Text.DateStyle](/documentation/swiftui/text/datestyle/date)
- [static let offset: Text.DateStyle](/documentation/swiftui/text/datestyle/offset)
- [static let relative: Text.DateStyle](/documentation/swiftui/text/datestyle/relative)
- [static let time: Text.DateStyle](/documentation/swiftui/text/datestyle/time)
- [static let timer: Text.DateStyle](/documentation/swiftui/text/datestyle/timer)
- [Text.LineStyle](/documentation/swiftui/text/linestyle)

##### Getting text line styles

- [static let single: Text.LineStyle](/documentation/swiftui/text/linestyle/single)

##### Creating a text line style

- [init?(nsUnderlineStyle: NSUnderlineStyle)](/documentation/swiftui/text/linestyle/init(nsunderlinestyle:))
- [init(pattern: Text.LineStyle.Pattern, color: Color?)](/documentation/swiftui/text/linestyle/init(pattern:color:))
- [Text.LineStyle.Pattern](/documentation/swiftui/text/linestyle/pattern)

###### Getting line style patterns

- [static let solid: Text.LineStyle.Pattern](/documentation/swiftui/text/linestyle/pattern/solid)
- [static let dot: Text.LineStyle.Pattern](/documentation/swiftui/text/linestyle/pattern/dot)
- [static let dash: Text.LineStyle.Pattern](/documentation/swiftui/text/linestyle/pattern/dash)
- [static let dashDot: Text.LineStyle.Pattern](/documentation/swiftui/text/linestyle/pattern/dashdot)
- [static let dashDotDot: Text.LineStyle.Pattern](/documentation/swiftui/text/linestyle/pattern/dashdotdot)

#### Fitting text into available space

- [func textScale(Text.Scale, isEnabled: Bool) -> Text](/documentation/swiftui/text/textscale(_:isenabled:))
- [Text.Scale](/documentation/swiftui/text/scale)

##### Getting built-in text scales

- [static let `default`: Text.Scale](/documentation/swiftui/text/scale/default)
- [static let secondary: Text.Scale](/documentation/swiftui/text/scale/secondary)
- [Text.TruncationMode](/documentation/swiftui/text/truncationmode)

##### Getting text truncation modes

- [case head](/documentation/swiftui/text/truncationmode/head)
- [case middle](/documentation/swiftui/text/truncationmode/middle)
- [case tail](/documentation/swiftui/text/truncationmode/tail)

#### Localizing text

- [func typesettingLanguage(_:isEnabled:)](/documentation/swiftui/text/typesettinglanguage(_:isenabled:))

#### Configuring voiceover

- [func speechAdjustedPitch(Double) -> Text](/documentation/swiftui/text/speechadjustedpitch(_:))
- [func speechAlwaysIncludesPunctuation(Bool) -> Text](/documentation/swiftui/text/speechalwaysincludespunctuation(_:))
- [func speechAnnouncementsQueued(Bool) -> Text](/documentation/swiftui/text/speechannouncementsqueued(_:))
- [func speechSpellsOutCharacters(Bool) -> Text](/documentation/swiftui/text/speechspellsoutcharacters(_:))

#### Providing accessibility information

- [func accessibilityHeading(AccessibilityHeadingLevel) -> Text](/documentation/swiftui/text/accessibilityheading(_:))
- [func accessibilityLabel(_:)](/documentation/swiftui/text/accessibilitylabel(_:))
- [func accessibilityTextContentType(AccessibilityTextContentType) -> Text](/documentation/swiftui/text/accessibilitytextcontenttype(_:))

#### Combining text views

- [static func + (Text, Text) -> Text](/documentation/swiftui/text/+(_:_:))

#### Deprecated symbols

- [func foregroundColor(Color?) -> Text](/documentation/swiftui/text/foregroundcolor(_:))

#### Structures

- [Text.AlignmentStrategy](/documentation/swiftui/text/alignmentstrategy)

##### Type Properties

- [static let `default`: Text.AlignmentStrategy](/documentation/swiftui/text/alignmentstrategy/default)
- [static let layoutBased: Text.AlignmentStrategy](/documentation/swiftui/text/alignmentstrategy/layoutbased)
- [static let writingDirectionBased: Text.AlignmentStrategy](/documentation/swiftui/text/alignmentstrategy/writingdirectionbased)
- [Text.Layout](/documentation/swiftui/text/layout)

##### Structures

- [Text.Layout.CharacterIndex](/documentation/swiftui/text/layout/characterindex)
- [Text.Layout.DrawingOptions](/documentation/swiftui/text/layout/drawingoptions)

###### Type Properties

- [static var disablesSubpixelQuantization: Text.Layout.DrawingOptions](/documentation/swiftui/text/layout/drawingoptions/disablessubpixelquantization)
- [Text.Layout.Line](/documentation/swiftui/text/layout/line)

###### Instance Properties

- [var origin: CGPoint](/documentation/swiftui/text/layout/line/origin)
- [var typographicBounds: Text.Layout.TypographicBounds](/documentation/swiftui/text/layout/line/typographicbounds)
- [Text.Layout.Run](/documentation/swiftui/text/layout/run)

###### Instance Properties

- [var characterIndices: [Text.Layout.CharacterIndex]](/documentation/swiftui/text/layout/run/characterindices)
- [var layoutDirection: LayoutDirection](/documentation/swiftui/text/layout/run/layoutdirection)
- [var typographicBounds: Text.Layout.TypographicBounds](/documentation/swiftui/text/layout/run/typographicbounds)

###### Subscripts

- [subscript<T>(T.Type) -> T?](/documentation/swiftui/text/layout/run/subscript(_:))
- [Text.Layout.RunSlice](/documentation/swiftui/text/layout/runslice)

###### Initializers

- [init(run: Text.Layout.Run, indices: Range<Int>)](/documentation/swiftui/text/layout/runslice/init(run:indices:))

###### Instance Properties

- [var characterIndices: [Text.Layout.CharacterIndex]](/documentation/swiftui/text/layout/runslice/characterindices)
- [var run: Text.Layout.Run](/documentation/swiftui/text/layout/runslice/run)
- [var typographicBounds: Text.Layout.TypographicBounds](/documentation/swiftui/text/layout/runslice/typographicbounds)

###### Subscripts

- [subscript<T>(T.Type) -> T?](/documentation/swiftui/text/layout/runslice/subscript(_:))
- [Text.Layout.TypographicBounds](/documentation/swiftui/text/layout/typographicbounds)

###### Initializers

- [init()](/documentation/swiftui/text/layout/typographicbounds/init())

###### Instance Properties

- [var ascent: CGFloat](/documentation/swiftui/text/layout/typographicbounds/ascent)
- [var descent: CGFloat](/documentation/swiftui/text/layout/typographicbounds/descent)
- [var leading: CGFloat](/documentation/swiftui/text/layout/typographicbounds/leading)
- [var origin: CGPoint](/documentation/swiftui/text/layout/typographicbounds/origin)
- [var rect: CGRect](/documentation/swiftui/text/layout/typographicbounds/rect)
- [var width: CGFloat](/documentation/swiftui/text/layout/typographicbounds/width)

##### Instance Properties

- [var isTruncated: Bool](/documentation/swiftui/text/layout/istruncated)
- [Text.LayoutKey](/documentation/swiftui/text/layoutkey)

##### Structures

- [Text.LayoutKey.AnchoredLayout](/documentation/swiftui/text/layoutkey/anchoredlayout)

###### Instance Properties

- [var layout: Text.Layout](/documentation/swiftui/text/layoutkey/anchoredlayout/layout)
- [var origin: Anchor<CGPoint>](/documentation/swiftui/text/layoutkey/anchoredlayout/origin)
- [Text.WritingDirectionStrategy](/documentation/swiftui/text/writingdirectionstrategy)

##### Type Properties

- [static let contentBased: Text.WritingDirectionStrategy](/documentation/swiftui/text/writingdirectionstrategy/contentbased)
- [static let `default`: Text.WritingDirectionStrategy](/documentation/swiftui/text/writingdirectionstrategy/default)
- [static let layoutBased: Text.WritingDirectionStrategy](/documentation/swiftui/text/writingdirectionstrategy/layoutbased)

#### Instance Methods

- [func customAttribute<T>(T) -> Text](/documentation/swiftui/text/customattribute(_:))
- [func textVariant<V>(V) -> some View](/documentation/swiftui/text/textvariant(_:))
- [Label](/documentation/swiftui/label)

#### Creating a label

- [init(_:image:)](/documentation/swiftui/label/init(_:image:))
- [init(_:systemImage:)](/documentation/swiftui/label/init(_:systemimage:))
- [init(title: () -> Title, icon: () -> Icon)](/documentation/swiftui/label/init(title:icon:))
- [init(_:)](/documentation/swiftui/label/init(_:))
- [init(_:image:)](/documentation/swiftui/label/init(_:image:))
- [func labelStyle<S>(S) -> some View](/documentation/swiftui/view/labelstyle(_:))

### Getting text input

- [Building rich SwiftUI text experiences](/documentation/swiftui/building-rich-swiftui-text-experiences)
- [TextField](/documentation/swiftui/textfield)

#### Creating a text field with a string

- [init(_:text:)](/documentation/swiftui/textfield/init(_:text:))
- [init(_:text:prompt:)](/documentation/swiftui/textfield/init(_:text:prompt:))
- [init(text: Binding<String>, prompt: Text?, label: () -> Label)](/documentation/swiftui/textfield/init(text:prompt:label:))

#### Creating a scrollable text field

- [init(_:text:axis:)](/documentation/swiftui/textfield/init(_:text:axis:))
- [init(_:text:prompt:axis:)](/documentation/swiftui/textfield/init(_:text:prompt:axis:))
- [init(text: Binding<String>, prompt: Text?, axis: Axis, label: () -> Label)](/documentation/swiftui/textfield/init(text:prompt:axis:label:))

#### Creating a text field with a value

- [init(_:value:format:prompt:)](/documentation/swiftui/textfield/init(_:value:format:prompt:))
- [init(value:format:prompt:label:)](/documentation/swiftui/textfield/init(value:format:prompt:label:))
- [init(_:value:formatter:)](/documentation/swiftui/textfield/init(_:value:formatter:))
- [init(_:value:formatter:prompt:)](/documentation/swiftui/textfield/init(_:value:formatter:prompt:))
- [init<V>(value: Binding<V>, formatter: Formatter, prompt: Text?, label: () -> Label)](/documentation/swiftui/textfield/init(value:formatter:prompt:label:))

#### Deprecated initializers

- [Deprecated initializers](/documentation/swiftui/textfield-deprecated)

##### Creating a text field with a string

- [init(_:text:onEditingChanged:onCommit:)](/documentation/swiftui/textfield/init(_:text:oneditingchanged:oncommit:))
- [init(_:text:onCommit:)](/documentation/swiftui/textfield/init(_:text:oncommit:))
- [init(_:text:onEditingChanged:)](/documentation/swiftui/textfield/init(_:text:oneditingchanged:))

##### Creating a text field with a value

- [init(_:value:formatter:onEditingChanged:onCommit:)](/documentation/swiftui/textfield/init(_:value:formatter:oneditingchanged:oncommit:))
- [init(_:value:formatter:onCommit:)](/documentation/swiftui/textfield/init(_:value:formatter:oncommit:))
- [init(_:value:formatter:onEditingChanged:)](/documentation/swiftui/textfield/init(_:value:formatter:oneditingchanged:))

#### Initializers

- [init(_:text:selection:prompt:axis:)](/documentation/swiftui/textfield/init(_:text:selection:prompt:axis:))
- [init(text: Binding<String>, selection: Binding<TextSelection?>, prompt: Text?, axis: Axis?, label: () -> Label)](/documentation/swiftui/textfield/init(text:selection:prompt:axis:label:))
- [func textFieldStyle<S>(S) -> some View](/documentation/swiftui/view/textfieldstyle(_:))
- [SecureField](/documentation/swiftui/securefield)

#### Creating a secure text field

- [init(_:text:)](/documentation/swiftui/securefield/init(_:text:))
- [init(_:text:prompt:)](/documentation/swiftui/securefield/init(_:text:prompt:))
- [init(text: Binding<String>, prompt: Text?, label: () -> Label)](/documentation/swiftui/securefield/init(text:prompt:label:))

#### Deprecated initializers

- [init(_:text:onCommit:)](/documentation/swiftui/securefield/init(_:text:oncommit:))
- [TextEditor](/documentation/swiftui/texteditor)

#### Creating a text editor

- [init(text: Binding<String>)](/documentation/swiftui/texteditor/init(text:))

#### Initializers

- [init(text:selection:)](/documentation/swiftui/texteditor/init(text:selection:))

### Selecting text

- [func textSelection<S>(S) -> some View](/documentation/swiftui/view/textselection(_:))
- [TextSelectability](/documentation/swiftui/textselectability)

#### Getting selectability options

- [static var enabled: EnabledTextSelectability](/documentation/swiftui/textselectability/enabled)
- [static var disabled: DisabledTextSelectability](/documentation/swiftui/textselectability/disabled)

#### Specifying selectability

- [static var allowsSelection: Bool](/documentation/swiftui/textselectability/allowsselection)

#### Supporting types

- [EnabledTextSelectability](/documentation/swiftui/enabledtextselectability)
- [DisabledTextSelectability](/documentation/swiftui/disabledtextselectability)
- [TextSelection](/documentation/swiftui/textselection)

#### Initializers

- [init(insertionPoint: String.Index)](/documentation/swiftui/textselection/init(insertionpoint:))
- [init(range: Range<String.Index>)](/documentation/swiftui/textselection/init(range:))
- [init(ranges: RangeSet<String.Index>)](/documentation/swiftui/textselection/init(ranges:))

#### Instance Properties

- [var affinity: TextSelectionAffinity](/documentation/swiftui/textselection/affinity)
- [var indices: TextSelection.Indices](/documentation/swiftui/textselection/indices-swift.property)
- [var isInsertion: Bool](/documentation/swiftui/textselection/isinsertion)

#### Enumerations

- [TextSelection.Indices](/documentation/swiftui/textselection/indices-swift.enum)

##### Enumeration Cases

- [case multiSelection(RangeSet<String.Index>)](/documentation/swiftui/textselection/indices-swift.enum/multiselection(_:))
- [case selection(Range<String.Index>)](/documentation/swiftui/textselection/indices-swift.enum/selection(_:))
- [func textSelectionAffinity(TextSelectionAffinity) -> some View](/documentation/swiftui/view/textselectionaffinity(_:))
- [var textSelectionAffinity: TextSelectionAffinity](/documentation/swiftui/environmentvalues/textselectionaffinity)
- [TextSelectionAffinity](/documentation/swiftui/textselectionaffinity)

#### Enumeration Cases

- [case automatic](/documentation/swiftui/textselectionaffinity/automatic)
- [case downstream](/documentation/swiftui/textselectionaffinity/downstream)
- [case upstream](/documentation/swiftui/textselectionaffinity/upstream)
- [AttributedTextSelection](/documentation/swiftui/attributedtextselection)

#### Structures

- [AttributedTextSelection.Attributes](/documentation/swiftui/attributedtextselection/attributes)

##### Subscripts

- [subscript(_:)](/documentation/swiftui/attributedtextselection/attributes/subscript(_:))

#### Initializers

- [init()](/documentation/swiftui/attributedtextselection/init())
- [init(insertionPoint: AttributedString.Index, typingAttributes: AttributeContainer?)](/documentation/swiftui/attributedtextselection/init(insertionpoint:typingattributes:))
- [init(range: Range<AttributedString.Index>)](/documentation/swiftui/attributedtextselection/init(range:))
- [init(ranges: RangeSet<AttributedString.Index>)](/documentation/swiftui/attributedtextselection/init(ranges:))

#### Instance Methods

- [func affinity(in: AttributedString) -> TextSelectionAffinity](/documentation/swiftui/attributedtextselection/affinity(in:))
- [func attributes(in: AttributedString) -> AttributedTextSelection.Attributes<AttributedString>](/documentation/swiftui/attributedtextselection/attributes(in:))
- [func indices(in: AttributedString) -> AttributedTextSelection.Indices](/documentation/swiftui/attributedtextselection/indices(in:))
- [func typingAttributes(in: AttributedString) -> AttributeContainer](/documentation/swiftui/attributedtextselection/typingattributes(in:))

#### Enumerations

- [AttributedTextSelection.Indices](/documentation/swiftui/attributedtextselection/indices)

##### Enumeration Cases

- [case insertionPoint(AttributedString.Index)](/documentation/swiftui/attributedtextselection/indices/insertionpoint(_:))
- [case ranges(RangeSet<AttributedString.Index>)](/documentation/swiftui/attributedtextselection/indices/ranges(_:))

### Setting a font

- [Applying custom fonts to text](/documentation/swiftui/applying-custom-fonts-to-text)
- [func font(Font?) -> some View](/documentation/swiftui/view/font(_:))
- [func fontDesign(Font.Design?) -> some View](/documentation/swiftui/view/fontdesign(_:))
- [func fontWeight(Font.Weight?) -> some View](/documentation/swiftui/view/fontweight(_:))
- [func fontWidth(Font.Width?) -> some View](/documentation/swiftui/view/fontwidth(_:))
- [var font: Font?](/documentation/swiftui/environmentvalues/font)
- [Font](/documentation/swiftui/font)

#### Getting standard fonts

- [static let extraLargeTitle2: Font](/documentation/swiftui/font/extralargetitle2)
- [static let extraLargeTitle: Font](/documentation/swiftui/font/extralargetitle)
- [static let largeTitle: Font](/documentation/swiftui/font/largetitle)
- [static let title: Font](/documentation/swiftui/font/title)
- [static let title2: Font](/documentation/swiftui/font/title2)
- [static let title3: Font](/documentation/swiftui/font/title3)
- [static let headline: Font](/documentation/swiftui/font/headline)
- [static let subheadline: Font](/documentation/swiftui/font/subheadline)
- [static let body: Font](/documentation/swiftui/font/body)
- [static let callout: Font](/documentation/swiftui/font/callout)
- [static let caption: Font](/documentation/swiftui/font/caption)
- [static let caption2: Font](/documentation/swiftui/font/caption2)
- [static let footnote: Font](/documentation/swiftui/font/footnote)

#### Getting system fonts

- [static func system(Font.TextStyle, design: Font.Design?, weight: Font.Weight?) -> Font](/documentation/swiftui/font/system(_:design:weight:))
- [static func system(size: CGFloat, weight: Font.Weight?, design: Font.Design?) -> Font](/documentation/swiftui/font/system(size:weight:design:)-697b2)
- [Font.Design](/documentation/swiftui/font/design)

##### Getting font designs

- [case `default`](/documentation/swiftui/font/design/default)
- [case monospaced](/documentation/swiftui/font/design/monospaced)
- [case rounded](/documentation/swiftui/font/design/rounded)
- [case serif](/documentation/swiftui/font/design/serif)
- [Font.TextStyle](/documentation/swiftui/font/textstyle)

##### Getting font text styles

- [case extraLargeTitle2](/documentation/swiftui/font/textstyle/extralargetitle2)
- [case extraLargeTitle](/documentation/swiftui/font/textstyle/extralargetitle)
- [case largeTitle](/documentation/swiftui/font/textstyle/largetitle)
- [case title](/documentation/swiftui/font/textstyle/title)
- [case title2](/documentation/swiftui/font/textstyle/title2)
- [case title3](/documentation/swiftui/font/textstyle/title3)
- [case headline](/documentation/swiftui/font/textstyle/headline)
- [case subheadline](/documentation/swiftui/font/textstyle/subheadline)
- [case body](/documentation/swiftui/font/textstyle/body)
- [case callout](/documentation/swiftui/font/textstyle/callout)
- [case caption](/documentation/swiftui/font/textstyle/caption)
- [case caption2](/documentation/swiftui/font/textstyle/caption2)
- [case footnote](/documentation/swiftui/font/textstyle/footnote)
- [Font.Weight](/documentation/swiftui/font/weight)

##### Getting font weights

- [static let black: Font.Weight](/documentation/swiftui/font/weight/black)
- [static let bold: Font.Weight](/documentation/swiftui/font/weight/bold)
- [static let heavy: Font.Weight](/documentation/swiftui/font/weight/heavy)
- [static let light: Font.Weight](/documentation/swiftui/font/weight/light)
- [static let medium: Font.Weight](/documentation/swiftui/font/weight/medium)
- [static let regular: Font.Weight](/documentation/swiftui/font/weight/regular)
- [static let semibold: Font.Weight](/documentation/swiftui/font/weight/semibold)
- [static let thin: Font.Weight](/documentation/swiftui/font/weight/thin)
- [static let ultraLight: Font.Weight](/documentation/swiftui/font/weight/ultralight)

#### Creating custom fonts

- [static func custom(String, fixedSize: CGFloat) -> Font](/documentation/swiftui/font/custom(_:fixedsize:))
- [static func custom(String, size: CGFloat, relativeTo: Font.TextStyle) -> Font](/documentation/swiftui/font/custom(_:size:relativeto:))
- [static func custom(String, size: CGFloat) -> Font](/documentation/swiftui/font/custom(_:size:))

#### Getting a font from another font

- [init(CTFont)](/documentation/swiftui/font/init(_:))

#### Styling a font

- [func bold() -> Font](/documentation/swiftui/font/bold())
- [func italic() -> Font](/documentation/swiftui/font/italic())
- [func monospaced() -> Font](/documentation/swiftui/font/monospaced())
- [func monospacedDigit() -> Font](/documentation/swiftui/font/monospaceddigit())
- [func smallCaps() -> Font](/documentation/swiftui/font/smallcaps())
- [func lowercaseSmallCaps() -> Font](/documentation/swiftui/font/lowercasesmallcaps())
- [func uppercaseSmallCaps() -> Font](/documentation/swiftui/font/uppercasesmallcaps())
- [func weight(Font.Weight) -> Font](/documentation/swiftui/font/weight(_:))
- [func width(Font.Width) -> Font](/documentation/swiftui/font/width(_:))
- [Font.Width](/documentation/swiftui/font/width)

##### Getting standard font widths

- [static let compressed: Font.Width](/documentation/swiftui/font/width/compressed)
- [static let condensed: Font.Width](/documentation/swiftui/font/width/condensed)
- [static let expanded: Font.Width](/documentation/swiftui/font/width/expanded)
- [static let standard: Font.Width](/documentation/swiftui/font/width/standard)

##### Creating an explicit font width

- [init(CGFloat)](/documentation/swiftui/font/width/init(_:))

##### Accessing the width’s value

- [var value: CGFloat](/documentation/swiftui/font/width/value)
- [func leading(Font.Leading) -> Font](/documentation/swiftui/font/leading(_:))
- [Font.Leading](/documentation/swiftui/font/leading)

##### Getting leading line spacing options

- [case standard](/documentation/swiftui/font/leading/standard)
- [case loose](/documentation/swiftui/font/leading/loose)
- [case tight](/documentation/swiftui/font/leading/tight)

#### Deprecated symbols

- [static func system(Font.TextStyle, design: Font.Design) -> Font](/documentation/swiftui/font/system(_:design:))
- [static func system(size: CGFloat, weight: Font.Weight, design: Font.Design) -> Font](/documentation/swiftui/font/system(size:weight:design:)-73a88)

#### Structures

- [Font.Context](/documentation/swiftui/font/context)
- [Font.Resolved](/documentation/swiftui/font/resolved)

##### Instance Properties

- [var ctFont: CTFont](/documentation/swiftui/font/resolved/ctfont)
- [var isBold: Bool](/documentation/swiftui/font/resolved/isbold)
- [var isItalic: Bool](/documentation/swiftui/font/resolved/isitalic)
- [var isLowercaseSmallCaps: Bool](/documentation/swiftui/font/resolved/islowercasesmallcaps)
- [var isMonospaced: Bool](/documentation/swiftui/font/resolved/ismonospaced)
- [var isSmallCaps: Bool](/documentation/swiftui/font/resolved/issmallcaps)
- [var isUppercaseSmallCaps: Bool](/documentation/swiftui/font/resolved/isuppercasesmallcaps)
- [var leading: Font.Leading](/documentation/swiftui/font/resolved/leading)
- [var pointSize: CGFloat](/documentation/swiftui/font/resolved/pointsize)
- [var weight: Font.Weight](/documentation/swiftui/font/resolved/weight)
- [var width: Font.Width](/documentation/swiftui/font/resolved/width)

#### Instance Methods

- [func bold(Bool) -> Font](/documentation/swiftui/font/bold(_:))
- [func italic(Bool) -> Font](/documentation/swiftui/font/italic(_:))
- [func lowercaseSmallCaps(Bool) -> Font](/documentation/swiftui/font/lowercasesmallcaps(_:))
- [func monospaced(Bool) -> Font](/documentation/swiftui/font/monospaced(_:))
- [func pointSize(CGFloat) -> Font](/documentation/swiftui/font/pointsize(_:))
- [func resolve(in: Font.Context) -> Font.Resolved](/documentation/swiftui/font/resolve(in:))
- [func scaled(by: CGFloat) -> Font](/documentation/swiftui/font/scaled(by:))
- [func smallCaps(Bool) -> Font](/documentation/swiftui/font/smallcaps(_:))
- [func uppercaseSmallCaps(Bool) -> Font](/documentation/swiftui/font/uppercasesmallcaps(_:))

#### Type Properties

- [static var `default`: Font](/documentation/swiftui/font/default)

#### Type Methods

- [static system(size:weight:design:)](/documentation/swiftui/font/system(size:weight:design:))

### Adjusting text size

- [func textScale(Text.Scale, isEnabled: Bool) -> some View](/documentation/swiftui/view/textscale(_:isenabled:))
- [func dynamicTypeSize(_:)](/documentation/swiftui/view/dynamictypesize(_:))
- [var dynamicTypeSize: DynamicTypeSize](/documentation/swiftui/environmentvalues/dynamictypesize)
- [DynamicTypeSize](/documentation/swiftui/dynamictypesize)

#### Getting type sizes

- [case xSmall](/documentation/swiftui/dynamictypesize/xsmall)
- [case small](/documentation/swiftui/dynamictypesize/small)
- [case medium](/documentation/swiftui/dynamictypesize/medium)
- [case large](/documentation/swiftui/dynamictypesize/large)
- [case xLarge](/documentation/swiftui/dynamictypesize/xlarge)
- [case xxLarge](/documentation/swiftui/dynamictypesize/xxlarge)
- [case xxxLarge](/documentation/swiftui/dynamictypesize/xxxlarge)

#### Getting accessibility type sizes

- [case accessibility1](/documentation/swiftui/dynamictypesize/accessibility1)
- [case accessibility2](/documentation/swiftui/dynamictypesize/accessibility2)
- [case accessibility3](/documentation/swiftui/dynamictypesize/accessibility3)
- [case accessibility4](/documentation/swiftui/dynamictypesize/accessibility4)
- [case accessibility5](/documentation/swiftui/dynamictypesize/accessibility5)
- [var isAccessibilitySize: Bool](/documentation/swiftui/dynamictypesize/isaccessibilitysize)

#### Creating a type size

- [init?(UIContentSizeCategory)](/documentation/swiftui/dynamictypesize/init(_:))
- [ScaledMetric](/documentation/swiftui/scaledmetric)

#### Creating the metric

- [init(wrappedValue: Value)](/documentation/swiftui/scaledmetric/init(wrappedvalue:))
- [init(wrappedValue: Value, relativeTo: Font.TextStyle)](/documentation/swiftui/scaledmetric/init(wrappedvalue:relativeto:))

#### Getting the metric

- [var wrappedValue: Value](/documentation/swiftui/scaledmetric/wrappedvalue)
- [TextVariantPreference](/documentation/swiftui/textvariantpreference)

#### Type Properties

- [static var fixed: FixedTextVariant](/documentation/swiftui/textvariantpreference/fixed)
- [static var sizeDependent: SizeDependentTextVariant](/documentation/swiftui/textvariantpreference/sizedependent)
- [FixedTextVariant](/documentation/swiftui/fixedtextvariant)
- [SizeDependentTextVariant](/documentation/swiftui/sizedependenttextvariant)

### Controlling text style

- [func bold(Bool) -> some View](/documentation/swiftui/view/bold(_:))
- [func italic(Bool) -> some View](/documentation/swiftui/view/italic(_:))
- [func underline(Bool, pattern: Text.LineStyle.Pattern, color: Color?) -> some View](/documentation/swiftui/view/underline(_:pattern:color:))
- [func strikethrough(Bool, pattern: Text.LineStyle.Pattern, color: Color?) -> some View](/documentation/swiftui/view/strikethrough(_:pattern:color:))
- [func textCase(Text.Case?) -> some View](/documentation/swiftui/view/textcase(_:))
- [var textCase: Text.Case?](/documentation/swiftui/environmentvalues/textcase)
- [func monospaced(Bool) -> some View](/documentation/swiftui/view/monospaced(_:))
- [func monospacedDigit() -> some View](/documentation/swiftui/view/monospaceddigit())
- [AttributedTextFormattingDefinition](/documentation/swiftui/attributedtextformattingdefinition)

#### Associated Types

- [Body](/documentation/swiftui/attributedtextformattingdefinition/body-swift.associatedtype)
- [Scope](/documentation/swiftui/attributedtextformattingdefinition/scope)

#### Instance Properties

- [var body: Self.Body](/documentation/swiftui/attributedtextformattingdefinition/body-1b01t)

#### Instance Methods

- [func constrain(_:)](/documentation/swiftui/attributedtextformattingdefinition/constrain(_:))

#### Type Aliases

- [AttributedTextFormattingDefinition.ValueConstraint](/documentation/swiftui/attributedtextformattingdefinition/valueconstraint)
- [AttributedTextValueConstraint](/documentation/swiftui/attributedtextvalueconstraint)

#### Associated Types

- [AttributeKey](/documentation/swiftui/attributedtextvalueconstraint/attributekey)

#### Instance Methods

- [func constrain(inout Self.Attributes)](/documentation/swiftui/attributedtextvalueconstraint/constrain(_:))

#### Type Aliases

- [AttributedTextValueConstraint.Attributes](/documentation/swiftui/attributedtextvalueconstraint/attributes)
- [AttributedTextFormatting](/documentation/swiftui/attributedtextformatting)

#### Structures

- [AttributedTextFormatting.AnyDefinition](/documentation/swiftui/attributedtextformatting/anydefinition)

##### Initializers

- [init<D>(D)](/documentation/swiftui/attributedtextformatting/anydefinition/init(_:))
- [AttributedTextFormatting.AttributeContainerProxy](/documentation/swiftui/attributedtextformatting/attributecontainerproxy)

##### Structures

- [AttributedTextFormatting.AttributeContainerProxy.Scoped](/documentation/swiftui/attributedtextformatting/attributecontainerproxy/scoped)

###### Subscripts

- [subscript(dynamicMember:)](/documentation/swiftui/attributedtextformatting/attributecontainerproxy/scoped/subscript(dynamicmember:))

##### Subscripts

- [subscript(_:)](/documentation/swiftui/attributedtextformatting/attributecontainerproxy/subscript(_:))
- [subscript(dynamicMember:)](/documentation/swiftui/attributedtextformatting/attributecontainerproxy/subscript(dynamicmember:))
- [AttributedTextFormatting.DefinitionBuilder](/documentation/swiftui/attributedtextformatting/definitionbuilder)

##### Type Methods

- [static func buildBlock<S>() -> AttributedTextFormatting.EmptyDefinition<S>](/documentation/swiftui/attributedtextformatting/definitionbuilder/buildblock())
- [static func buildBlock<D>(D) -> D](/documentation/swiftui/attributedtextformatting/definitionbuilder/buildblock(_:))
- [static func buildBlock<F, each D>(F, repeat each D) -> AttributedTextFormatting.TupleDefinition<F.Scope, F, repeat each D>](/documentation/swiftui/attributedtextformatting/definitionbuilder/buildblock(_:_:))
- [static func buildEither<T, F>(first: T) -> _ConditionalContent<T, F>](/documentation/swiftui/attributedtextformatting/definitionbuilder/buildeither(first:))
- [static func buildEither<T, F>(second: F) -> _ConditionalContent<T, F>](/documentation/swiftui/attributedtextformatting/definitionbuilder/buildeither(second:))
- [static func buildExpression<D>(D) -> D](/documentation/swiftui/attributedtextformatting/definitionbuilder/buildexpression(_:))
- [static func buildIf<D>(D?) -> D?](/documentation/swiftui/attributedtextformatting/definitionbuilder/buildif(_:))
- [static func buildLimitedAvailability<D>(D) -> AttributedTextFormatting.AnyDefinition<Scope>](/documentation/swiftui/attributedtextformatting/definitionbuilder/buildlimitedavailability(_:))
- [AttributedTextFormatting.EmptyDefinition](/documentation/swiftui/attributedtextformatting/emptydefinition)

##### Initializers

- [init()](/documentation/swiftui/attributedtextformatting/emptydefinition/init())
- [AttributedTextFormatting.Transferable](/documentation/swiftui/attributedtextformatting/transferable)

##### Initializers

- [init(text: AttributedString, in: EnvironmentValues)](/documentation/swiftui/attributedtextformatting/transferable/init(text:in:))
- [AttributedTextFormatting.TupleDefinition](/documentation/swiftui/attributedtextformatting/tupledefinition)

##### Initializers

- [init(definition: repeat each Definition)](/documentation/swiftui/attributedtextformatting/tupledefinition/init(definition:))
- [AttributedTextFormatting.ValueConstraint](/documentation/swiftui/attributedtextformatting/valueconstraint)

##### Initializers

- [init(for:values:default:)](/documentation/swiftui/attributedtextformatting/valueconstraint/init(for:values:default:))

### Managing text layout

- [func truncationMode(Text.TruncationMode) -> some View](/documentation/swiftui/view/truncationmode(_:))
- [var truncationMode: Text.TruncationMode](/documentation/swiftui/environmentvalues/truncationmode)
- [func allowsTightening(Bool) -> some View](/documentation/swiftui/view/allowstightening(_:))
- [var allowsTightening: Bool](/documentation/swiftui/environmentvalues/allowstightening)
- [func minimumScaleFactor(CGFloat) -> some View](/documentation/swiftui/view/minimumscalefactor(_:))
- [var minimumScaleFactor: CGFloat](/documentation/swiftui/environmentvalues/minimumscalefactor)
- [func baselineOffset(CGFloat) -> some View](/documentation/swiftui/view/baselineoffset(_:))
- [func kerning(CGFloat) -> some View](/documentation/swiftui/view/kerning(_:))
- [func tracking(CGFloat) -> some View](/documentation/swiftui/view/tracking(_:))
- [func flipsForRightToLeftLayoutDirection(Bool) -> some View](/documentation/swiftui/view/flipsforrighttoleftlayoutdirection(_:))
- [TextAlignment](/documentation/swiftui/textalignment)

#### Getting text alignments

- [case center](/documentation/swiftui/textalignment/center)
- [case leading](/documentation/swiftui/textalignment/leading)
- [case trailing](/documentation/swiftui/textalignment/trailing)

### Rendering text

- [Creating visual effects with SwiftUI](/documentation/swiftui/creating-visual-effects-with-swiftui)
- [TextAttribute](/documentation/swiftui/textattribute)
- [func textRenderer<T>(T) -> some View](/documentation/swiftui/view/textrenderer(_:))
- [TextRenderer](/documentation/swiftui/textrenderer)

#### Instance Properties

- [var displayPadding: EdgeInsets](/documentation/swiftui/textrenderer/displaypadding)

#### Instance Methods

- [func draw(layout: Text.Layout, in: inout GraphicsContext)](/documentation/swiftui/textrenderer/draw(layout:in:))
- [func sizeThatFits(proposal: ProposedViewSize, text: TextProxy) -> CGSize](/documentation/swiftui/textrenderer/sizethatfits(proposal:text:))
- [TextProxy](/documentation/swiftui/textproxy)

#### Instance Methods

- [func sizeThatFits(ProposedViewSize) -> CGSize](/documentation/swiftui/textproxy/sizethatfits(_:))

### Limiting line count for multiline text

- [func lineLimit(_:)](/documentation/swiftui/view/linelimit(_:))
- [func lineLimit(Int, reservesSpace: Bool) -> some View](/documentation/swiftui/view/linelimit(_:reservesspace:))
- [var lineLimit: Int?](/documentation/swiftui/environmentvalues/linelimit)

### Formatting multiline text

- [func lineSpacing(CGFloat) -> some View](/documentation/swiftui/view/linespacing(_:))
- [var lineSpacing: CGFloat](/documentation/swiftui/environmentvalues/linespacing)
- [func multilineTextAlignment(TextAlignment) -> some View](/documentation/swiftui/view/multilinetextalignment(_:))
- [var multilineTextAlignment: TextAlignment](/documentation/swiftui/environmentvalues/multilinetextalignment)

### Formatting date and time

- [SystemFormatStyle](/documentation/swiftui/systemformatstyle)

#### Structures

- [SystemFormatStyle.DateOffset](/documentation/swiftui/systemformatstyle/dateoffset)

##### Initializers

- [init(to: Date, allowedFields: Set<Date.ComponentsFormatStyle.Field>, maxFieldCount: Int, sign: NumberFormatStyleConfiguration.SignDisplayStrategy)](/documentation/swiftui/systemformatstyle/dateoffset/init(to:allowedfields:maxfieldcount:sign:))

##### Instance Methods

- [func calendar(Calendar) -> SystemFormatStyle.DateOffset](/documentation/swiftui/systemformatstyle/dateoffset/calendar(_:))
- [SystemFormatStyle.DateReference](/documentation/swiftui/systemformatstyle/datereference)

##### Initializers

- [init(to: Date, allowedFields: Set<Date.RelativeFormatStyle.Field>, maxFieldCount: Int, thresholdField: Date.RelativeFormatStyle.Field)](/documentation/swiftui/systemformatstyle/datereference/init(to:allowedfields:maxfieldcount:thresholdfield:))

##### Instance Methods

- [func calendar(Calendar) -> SystemFormatStyle.DateReference](/documentation/swiftui/systemformatstyle/datereference/calendar(_:))
- [SystemFormatStyle.Stopwatch](/documentation/swiftui/systemformatstyle/stopwatch)

##### Initializers

- [init(startingAt: Date, showsHours: Bool, maxFieldCount: Int, maxPrecision: Duration)](/documentation/swiftui/systemformatstyle/stopwatch/init(startingat:showshours:maxfieldcount:maxprecision:))
- [SystemFormatStyle.Timer](/documentation/swiftui/systemformatstyle/timer)

##### Initializers

- [init(countingDownIn: Range<Date>, showsHours: Bool, maxFieldCount: Int, maxPrecision: Duration)](/documentation/swiftui/systemformatstyle/timer/init(countingdownin:showshours:maxfieldcount:maxprecision:))
- [init(countingUpIn: Range<Date>, showsHours: Bool, maxFieldCount: Int, maxPrecision: Duration)](/documentation/swiftui/systemformatstyle/timer/init(countingupin:showshours:maxfieldcount:maxprecision:))
- [TimeDataSource](/documentation/swiftui/timedatasource)

#### Type Properties

- [static var currentDate: TimeDataSource<Date>](/documentation/swiftui/timedatasource/currentdate)

#### Type Methods

- [static func dateRange(endingAt: Date) -> TimeDataSource<Range<Date>>](/documentation/swiftui/timedatasource/daterange(endingat:))
- [static func dateRange(startingAt: Date) -> TimeDataSource<Range<Date>>](/documentation/swiftui/timedatasource/daterange(startingat:))
- [static func durationOffset(to: Date) -> TimeDataSource<Duration>](/documentation/swiftui/timedatasource/durationoffset(to:))

### Managing text entry

- [func autocorrectionDisabled(Bool) -> some View](/documentation/swiftui/view/autocorrectiondisabled(_:))
- [var autocorrectionDisabled: Bool](/documentation/swiftui/environmentvalues/autocorrectiondisabled)
- [func keyboardType(UIKeyboardType) -> some View](/documentation/swiftui/view/keyboardtype(_:))
- [func scrollDismissesKeyboard(ScrollDismissesKeyboardMode) -> some View](/documentation/swiftui/view/scrolldismisseskeyboard(_:))
- [func textContentType(_:)](/documentation/swiftui/view/textcontenttype(_:))
- [func textInputAutocapitalization(TextInputAutocapitalization?) -> some View](/documentation/swiftui/view/textinputautocapitalization(_:))
- [TextInputAutocapitalization](/documentation/swiftui/textinputautocapitalization)

#### Getting autocapitalization options

- [static var characters: TextInputAutocapitalization](/documentation/swiftui/textinputautocapitalization/characters)
- [static var sentences: TextInputAutocapitalization](/documentation/swiftui/textinputautocapitalization/sentences)
- [static var words: TextInputAutocapitalization](/documentation/swiftui/textinputautocapitalization/words)
- [static var never: TextInputAutocapitalization](/documentation/swiftui/textinputautocapitalization/never)

#### Creating an autocapitalization type

- [init?(UITextAutocapitalizationType)](/documentation/swiftui/textinputautocapitalization/init(_:))
- [func textInputCompletion(String) -> some View](/documentation/swiftui/view/textinputcompletion(_:))
- [func textInputSuggestions<S>(() -> S) -> some View](/documentation/swiftui/view/textinputsuggestions(_:))
- [func textInputSuggestions<Data, Content>(Data, content: (Data.Element) -> Content) -> some View](/documentation/swiftui/view/textinputsuggestions(_:content:))
- [func textInputSuggestions<Data, ID, Content>(Data, id: KeyPath<Data.Element, ID>, content: (Data.Element) -> Content) -> some View](/documentation/swiftui/view/textinputsuggestions(_:id:content:))
- [func textContentType(WKTextContentType?) -> some View](/documentation/swiftui/view/textcontenttype(_:)-4dqqb)
- [func textContentType(NSTextContentType?) -> some View](/documentation/swiftui/view/textcontenttype(_:)-6fic1)
- [func textContentType(UITextContentType?) -> some View](/documentation/swiftui/view/textcontenttype(_:)-ufdv)
- [TextInputFormattingControlPlacement](/documentation/swiftui/textinputformattingcontrolplacement)

#### Structures

- [TextInputFormattingControlPlacement.Set](/documentation/swiftui/textinputformattingcontrolplacement/set)

##### Type Properties

- [static let accessoryBar: TextInputFormattingControlPlacement.Set](/documentation/swiftui/textinputformattingcontrolplacement/set/accessorybar)
- [static let all: TextInputFormattingControlPlacement.Set](/documentation/swiftui/textinputformattingcontrolplacement/set/all)
- [static let contextMenu: TextInputFormattingControlPlacement.Set](/documentation/swiftui/textinputformattingcontrolplacement/set/contextmenu)
- [static let `default`: TextInputFormattingControlPlacement.Set](/documentation/swiftui/textinputformattingcontrolplacement/set/default)
- [static let fontPanel: TextInputFormattingControlPlacement.Set](/documentation/swiftui/textinputformattingcontrolplacement/set/fontpanel)
- [static let inputAssistant: TextInputFormattingControlPlacement.Set](/documentation/swiftui/textinputformattingcontrolplacement/set/inputassistant)

### Dictating text

- [func searchDictationBehavior(TextInputDictationBehavior) -> some View](/documentation/swiftui/view/searchdictationbehavior(_:))
- [TextInputDictationActivation](/documentation/swiftui/textinputdictationactivation)

#### Getting activation values

- [static let onLook: TextInputDictationActivation](/documentation/swiftui/textinputdictationactivation/onlook)
- [static let onSelect: TextInputDictationActivation](/documentation/swiftui/textinputdictationactivation/onselect)
- [TextInputDictationBehavior](/documentation/swiftui/textinputdictationbehavior)

#### Getting behavior values

- [static let automatic: TextInputDictationBehavior](/documentation/swiftui/textinputdictationbehavior/automatic)
- [static func inline(activation: TextInputDictationActivation) -> TextInputDictationBehavior](/documentation/swiftui/textinputdictationbehavior/inline(activation:))
- [static let preventDictation: TextInputDictationBehavior](/documentation/swiftui/textinputdictationbehavior/preventdictation)

### Configuring the Writing Tools behavior

- [func writingToolsBehavior(WritingToolsBehavior) -> some View](/documentation/swiftui/view/writingtoolsbehavior(_:))
- [WritingToolsBehavior](/documentation/swiftui/writingtoolsbehavior)

#### Type Properties

- [static let automatic: WritingToolsBehavior](/documentation/swiftui/writingtoolsbehavior/automatic)
- [static let complete: WritingToolsBehavior](/documentation/swiftui/writingtoolsbehavior/complete)
- [static let disabled: WritingToolsBehavior](/documentation/swiftui/writingtoolsbehavior/disabled)
- [static let limited: WritingToolsBehavior](/documentation/swiftui/writingtoolsbehavior/limited)

### Specifying text equivalents

- [func typeSelectEquivalent(_:)](/documentation/swiftui/view/typeselectequivalent(_:))

### Localizing text

- [Preparing views for localization](/documentation/swiftui/preparing-views-for-localization)
- [LocalizedStringKey](/documentation/swiftui/localizedstringkey)

#### Creating a key from a literal value

- [init(String)](/documentation/swiftui/localizedstringkey/init(_:))
- [init(stringLiteral: String)](/documentation/swiftui/localizedstringkey/init(stringliteral:))

#### Creating a key from an interpolation

- [init(stringInterpolation: LocalizedStringKey.StringInterpolation)](/documentation/swiftui/localizedstringkey/init(stringinterpolation:))
- [LocalizedStringKey.StringInterpolation](/documentation/swiftui/localizedstringkey/stringinterpolation)

##### Appending to an interpolation

- [func appendInterpolation(_:)](/documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(_:))
- [func appendInterpolation<T>(T, specifier: String)](/documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(_:specifier:))
- [func appendInterpolation(_:format:)](/documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(_:format:))
- [func appendInterpolation(_:formatter:)](/documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(_:formatter:))
- [func appendInterpolation(Date, style: Text.DateStyle)](/documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(_:style:))
- [func appendInterpolation(timerInterval: ClosedRange<Date>, pauseTime: Date?, countsDown: Bool, showsHours: Bool)](/documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(timerinterval:pausetime:countsdown:showshours:))
- [func appendLiteral(String)](/documentation/swiftui/localizedstringkey/stringinterpolation/appendliteral(_:))

##### Instance Methods

- [func appendInterpolation(accessibilityName: Color)](/documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(accessibilityname:))
- [var locale: Locale](/documentation/swiftui/environmentvalues/locale)
- [func typesettingLanguage(_:isEnabled:)](/documentation/swiftui/view/typesettinglanguage(_:isenabled:))
- [TypesettingLanguage](/documentation/swiftui/typesettinglanguage)

#### Getting language behavior

- [static let automatic: TypesettingLanguage](/documentation/swiftui/typesettinglanguage/automatic)
- [static func explicit(Locale.Language) -> TypesettingLanguage](/documentation/swiftui/typesettinglanguage/explicit(_:))

### Deprecated types

- [ContentSizeCategory](/documentation/swiftui/contentsizecategory)

#### Content size categories

- [case accessibilityExtraExtraExtraLarge](/documentation/swiftui/contentsizecategory/accessibilityextraextraextralarge)
- [case accessibilityExtraExtraLarge](/documentation/swiftui/contentsizecategory/accessibilityextraextralarge)
- [case accessibilityExtraLarge](/documentation/swiftui/contentsizecategory/accessibilityextralarge)
- [case accessibilityLarge](/documentation/swiftui/contentsizecategory/accessibilitylarge)
- [case accessibilityMedium](/documentation/swiftui/contentsizecategory/accessibilitymedium)
- [case extraExtraExtraLarge](/documentation/swiftui/contentsizecategory/extraextraextralarge)
- [case extraExtraLarge](/documentation/swiftui/contentsizecategory/extraextralarge)
- [case extraLarge](/documentation/swiftui/contentsizecategory/extralarge)
- [case extraSmall](/documentation/swiftui/contentsizecategory/extrasmall)
- [case large](/documentation/swiftui/contentsizecategory/large)
- [case medium](/documentation/swiftui/contentsizecategory/medium)
- [case small](/documentation/swiftui/contentsizecategory/small)

#### Creating a size category

- [init?(UIContentSizeCategory)](/documentation/swiftui/contentsizecategory/init(_:))

#### Comparing content size categories

- [var isAccessibilityCategory: Bool](/documentation/swiftui/contentsizecategory/isaccessibilitycategory)

#### Operators

- [static func < (ContentSizeCategory, ContentSizeCategory) -> Bool](/documentation/swiftui/contentsizecategory/_(_:_:)-1iyos)
- [static func > (ContentSizeCategory, ContentSizeCategory) -> Bool](/documentation/swiftui/contentsizecategory/_(_:_:)-61nui)
- [static func <= (ContentSizeCategory, ContentSizeCategory) -> Bool](/documentation/swiftui/contentsizecategory/_=(_:_:)-3lvd8)
- [static func >= (ContentSizeCategory, ContentSizeCategory) -> Bool](/documentation/swiftui/contentsizecategory/_=(_:_:)-3tkt4)
- [Images](/documentation/swiftui/images)

### Creating an image

- [Image](/documentation/swiftui/image)

#### Creating an image

- [init(String, bundle: Bundle?)](/documentation/swiftui/image/init(_:bundle:))
- [init(String, variableValue: Double?, bundle: Bundle?)](/documentation/swiftui/image/init(_:variablevalue:bundle:))
- [init(ImageResource)](/documentation/swiftui/image/init(_:))

#### Creating an image for use as a control

- [init(String, bundle: Bundle?, label: Text)](/documentation/swiftui/image/init(_:bundle:label:))
- [init(String, variableValue: Double?, bundle: Bundle?, label: Text)](/documentation/swiftui/image/init(_:variablevalue:bundle:label:))
- [init(CGImage, scale: CGFloat, orientation: Image.Orientation, label: Text)](/documentation/swiftui/image/init(_:scale:orientation:label:))

#### Creating an image for decorative use

- [init(decorative: String, bundle: Bundle?)](/documentation/swiftui/image/init(decorative:bundle:))
- [init(decorative: String, variableValue: Double?, bundle: Bundle?)](/documentation/swiftui/image/init(decorative:variablevalue:bundle:))
- [init(decorative: CGImage, scale: CGFloat, orientation: Image.Orientation)](/documentation/swiftui/image/init(decorative:scale:orientation:))

#### Creating a system symbol image

- [init(systemName: String)](/documentation/swiftui/image/init(systemname:))
- [init(systemName: String, variableValue: Double?)](/documentation/swiftui/image/init(systemname:variablevalue:))

#### Creating an image from another image

- [init(uiImage: UIImage)](/documentation/swiftui/image/init(uiimage:))
- [init(nsImage: NSImage)](/documentation/swiftui/image/init(nsimage:))

#### Creating an image from drawing instructions

- [init(size: CGSize, label: Text?, opaque: Bool, colorMode: ColorRenderingMode, renderer: (inout GraphicsContext) -> Void)](/documentation/swiftui/image/init(size:label:opaque:colormode:renderer:))

#### Resizing images

- [func resizable(capInsets: EdgeInsets, resizingMode: Image.ResizingMode) -> Image](/documentation/swiftui/image/resizable(capinsets:resizingmode:))

#### Specifying rendering behavior

- [func antialiased(Bool) -> Image](/documentation/swiftui/image/antialiased(_:))
- [func symbolRenderingMode(SymbolRenderingMode?) -> Image](/documentation/swiftui/image/symbolrenderingmode(_:))
- [func renderingMode(Image.TemplateRenderingMode?) -> Image](/documentation/swiftui/image/renderingmode(_:))
- [func interpolation(Image.Interpolation) -> Image](/documentation/swiftui/image/interpolation(_:))
- [Image.TemplateRenderingMode](/documentation/swiftui/image/templaterenderingmode)

##### Getting rendering modes

- [case original](/documentation/swiftui/image/templaterenderingmode/original)
- [case template](/documentation/swiftui/image/templaterenderingmode/template)
- [Image.Interpolation](/documentation/swiftui/image/interpolation)

##### Getting interpolation options

- [case high](/documentation/swiftui/image/interpolation/high)
- [case low](/documentation/swiftui/image/interpolation/low)
- [case medium](/documentation/swiftui/image/interpolation/medium)
- [case none](/documentation/swiftui/image/interpolation/none)

#### Specifying dynamic range

- [func allowedDynamicRange(Image.DynamicRange?) -> Image](/documentation/swiftui/image/alloweddynamicrange(_:))
- [var allowedDynamicRange: Image.DynamicRange?](/documentation/swiftui/environmentvalues/alloweddynamicrange)
- [Image.DynamicRange](/documentation/swiftui/image/dynamicrange)

##### Getting dynamic range values

- [static let standard: Image.DynamicRange](/documentation/swiftui/image/dynamicrange/standard)
- [static let high: Image.DynamicRange](/documentation/swiftui/image/dynamicrange/high)
- [static let constrainedHigh: Image.DynamicRange](/documentation/swiftui/image/dynamicrange/constrainedhigh)

#### Instance Methods

- [func symbolColorRenderingMode(SymbolColorRenderingMode?) -> Image](/documentation/swiftui/image/symbolcolorrenderingmode(_:))
- [func symbolVariableValueMode(SymbolVariableValueMode?) -> Image](/documentation/swiftui/image/symbolvariablevaluemode(_:))
- [func widgetAccentedRenderingMode(WidgetAccentedRenderingMode?) -> some View](/documentation/swiftui/image/widgetaccentedrenderingmode(_:))

#### Enumerations

- [Image.Orientation](/documentation/swiftui/image/orientation)

##### Getting image orientations

- [case up](/documentation/swiftui/image/orientation/up)
- [case down](/documentation/swiftui/image/orientation/down)
- [case left](/documentation/swiftui/image/orientation/left)
- [case right](/documentation/swiftui/image/orientation/right)

##### Getting mirrored image orientation

- [case upMirrored](/documentation/swiftui/image/orientation/upmirrored)
- [case downMirrored](/documentation/swiftui/image/orientation/downmirrored)
- [case leftMirrored](/documentation/swiftui/image/orientation/leftmirrored)
- [case rightMirrored](/documentation/swiftui/image/orientation/rightmirrored)
- [Image.ResizingMode](/documentation/swiftui/image/resizingmode)

##### Getting resizing modes

- [case stretch](/documentation/swiftui/image/resizingmode/stretch)
- [case tile](/documentation/swiftui/image/resizingmode/tile)
- [Image.Scale](/documentation/swiftui/image/scale)

##### Getting image scales

- [case small](/documentation/swiftui/image/scale/small)
- [case medium](/documentation/swiftui/image/scale/medium)
- [case large](/documentation/swiftui/image/scale/large)

### Configuring an image

- [Fitting images into available space](/documentation/swiftui/fitting-images-into-available-space)
- [func imageScale(Image.Scale) -> some View](/documentation/swiftui/view/imagescale(_:))
- [var imageScale: Image.Scale](/documentation/swiftui/environmentvalues/imagescale)
- [Image.Scale](/documentation/swiftui/image/scale)

#### Getting image scales

- [case small](/documentation/swiftui/image/scale/small)
- [case medium](/documentation/swiftui/image/scale/medium)
- [case large](/documentation/swiftui/image/scale/large)
- [Image.Orientation](/documentation/swiftui/image/orientation)

#### Getting image orientations

- [case up](/documentation/swiftui/image/orientation/up)
- [case down](/documentation/swiftui/image/orientation/down)
- [case left](/documentation/swiftui/image/orientation/left)
- [case right](/documentation/swiftui/image/orientation/right)

#### Getting mirrored image orientation

- [case upMirrored](/documentation/swiftui/image/orientation/upmirrored)
- [case downMirrored](/documentation/swiftui/image/orientation/downmirrored)
- [case leftMirrored](/documentation/swiftui/image/orientation/leftmirrored)
- [case rightMirrored](/documentation/swiftui/image/orientation/rightmirrored)
- [Image.ResizingMode](/documentation/swiftui/image/resizingmode)

#### Getting resizing modes

- [case stretch](/documentation/swiftui/image/resizingmode/stretch)
- [case tile](/documentation/swiftui/image/resizingmode/tile)

### Loading images asynchronously

- [AsyncImage](/documentation/swiftui/asyncimage)

#### Loading an image

- [init(url: URL?, scale: CGFloat)](/documentation/swiftui/asyncimage/init(url:scale:))
- [init<I, P>(url: URL?, scale: CGFloat, content: (Image) -> I, placeholder: () -> P)](/documentation/swiftui/asyncimage/init(url:scale:content:placeholder:))

#### Loading an image in phases

- [init(url: URL?, scale: CGFloat, transaction: Transaction, content: (AsyncImagePhase) -> Content)](/documentation/swiftui/asyncimage/init(url:scale:transaction:content:))
- [AsyncImagePhase](/documentation/swiftui/asyncimagephase)

#### Getting load phases

- [case empty](/documentation/swiftui/asyncimagephase/empty)
- [case success(Image)](/documentation/swiftui/asyncimagephase/success(_:))
- [case failure(any Error)](/documentation/swiftui/asyncimagephase/failure(_:))

#### Getting the image

- [var image: Image?](/documentation/swiftui/asyncimagephase/image)

#### Getting the error

- [var error: (any Error)?](/documentation/swiftui/asyncimagephase/error)

### Setting a symbol variant

- [func symbolVariant(SymbolVariants) -> some View](/documentation/swiftui/view/symbolvariant(_:))
- [var symbolVariants: SymbolVariants](/documentation/swiftui/environmentvalues/symbolvariants)
- [SymbolVariants](/documentation/swiftui/symbolvariants)

#### Getting symbol variants

- [static let none: SymbolVariants](/documentation/swiftui/symbolvariants/none)
- [static let circle: SymbolVariants](/documentation/swiftui/symbolvariants/circle-swift.type.property)
- [static let square: SymbolVariants](/documentation/swiftui/symbolvariants/square-swift.type.property)
- [static let rectangle: SymbolVariants](/documentation/swiftui/symbolvariants/rectangle-swift.type.property)
- [static let fill: SymbolVariants](/documentation/swiftui/symbolvariants/fill-swift.type.property)
- [static let slash: SymbolVariants](/documentation/swiftui/symbolvariants/slash-swift.type.property)

#### Modifying a variant

- [var circle: SymbolVariants](/documentation/swiftui/symbolvariants/circle-swift.property)
- [var square: SymbolVariants](/documentation/swiftui/symbolvariants/square-swift.property)
- [var rectangle: SymbolVariants](/documentation/swiftui/symbolvariants/rectangle-swift.property)
- [var fill: SymbolVariants](/documentation/swiftui/symbolvariants/fill-swift.property)
- [var slash: SymbolVariants](/documentation/swiftui/symbolvariants/slash-swift.property)

#### Comparing variants

- [func contains(SymbolVariants) -> Bool](/documentation/swiftui/symbolvariants/contains(_:))

### Managing symbol effects

- [func symbolEffect<T>(T, options: SymbolEffectOptions, isActive: Bool) -> some View](/documentation/swiftui/view/symboleffect(_:options:isactive:))
- [func symbolEffect<T, U>(T, options: SymbolEffectOptions, value: U) -> some View](/documentation/swiftui/view/symboleffect(_:options:value:))
- [func symbolEffectsRemoved(Bool) -> some View](/documentation/swiftui/view/symboleffectsremoved(_:))
- [SymbolEffectTransition](/documentation/swiftui/symboleffecttransition)

#### Creating a transition

- [init<T>(effect: T, options: SymbolEffectOptions)](/documentation/swiftui/symboleffecttransition/init(effect:options:))

### Setting symbol rendering modes

- [func symbolRenderingMode(SymbolRenderingMode?) -> some View](/documentation/swiftui/view/symbolrenderingmode(_:))
- [var symbolRenderingMode: SymbolRenderingMode?](/documentation/swiftui/environmentvalues/symbolrenderingmode)
- [SymbolRenderingMode](/documentation/swiftui/symbolrenderingmode)

#### Getting symbol rendering modes

- [static let hierarchical: SymbolRenderingMode](/documentation/swiftui/symbolrenderingmode/hierarchical)
- [static let monochrome: SymbolRenderingMode](/documentation/swiftui/symbolrenderingmode/monochrome)
- [static let multicolor: SymbolRenderingMode](/documentation/swiftui/symbolrenderingmode/multicolor)
- [static let palette: SymbolRenderingMode](/documentation/swiftui/symbolrenderingmode/palette)
- [SymbolColorRenderingMode](/documentation/swiftui/symbolcolorrenderingmode)

#### Type Properties

- [static let flat: SymbolColorRenderingMode](/documentation/swiftui/symbolcolorrenderingmode/flat)
- [static let gradient: SymbolColorRenderingMode](/documentation/swiftui/symbolcolorrenderingmode/gradient)
- [SymbolVariableValueMode](/documentation/swiftui/symbolvariablevaluemode)

#### Type Properties

- [static let color: SymbolVariableValueMode](/documentation/swiftui/symbolvariablevaluemode/color)
- [static let draw: SymbolVariableValueMode](/documentation/swiftui/symbolvariablevaluemode/draw)

### Rendering images from views

- [ImageRenderer](/documentation/swiftui/imagerenderer)

#### Creating an image renderer

- [init(content: Content)](/documentation/swiftui/imagerenderer/init(content:))

#### Providing the source view

- [var content: Content](/documentation/swiftui/imagerenderer/content)

#### Accessing renderer properties

- [var proposedSize: ProposedViewSize](/documentation/swiftui/imagerenderer/proposedsize)
- [var scale: CGFloat](/documentation/swiftui/imagerenderer/scale)
- [var isOpaque: Bool](/documentation/swiftui/imagerenderer/isopaque)
- [var colorMode: ColorRenderingMode](/documentation/swiftui/imagerenderer/colormode)
- [var allowedDynamicRange: Image.DynamicRange?](/documentation/swiftui/imagerenderer/alloweddynamicrange)

#### Rendering images

- [func render(rasterizationScale: CGFloat, renderer: (CGSize, (CGContext) -> Void) -> Void)](/documentation/swiftui/imagerenderer/render(rasterizationscale:renderer:))
- [var cgImage: CGImage?](/documentation/swiftui/imagerenderer/cgimage)
- [var nsImage: NSImage?](/documentation/swiftui/imagerenderer/nsimage)
- [var uiImage: UIImage?](/documentation/swiftui/imagerenderer/uiimage)

#### Producing a stream of images

- [let objectWillChange: PassthroughSubject<Void, Never>](/documentation/swiftui/imagerenderer/objectwillchange)
- [var isObservationEnabled: Bool](/documentation/swiftui/imagerenderer/isobservationenabled)
- [Controls and indicators](/documentation/swiftui/controls-and-indicators)

### Creating buttons

- [Button](/documentation/swiftui/button)

#### Creating a button

- [init(action: () -> Void, label: () -> Label)](/documentation/swiftui/button/init(action:label:))
- [init(_:action:)](/documentation/swiftui/button/init(_:action:))
- [init(_:image:action:)](/documentation/swiftui/button/init(_:image:action:))
- [init(_:systemImage:action:)](/documentation/swiftui/button/init(_:systemimage:action:))

#### Creating a button with a role

- [init(role: ButtonRole?, action: () -> Void, label: () -> Label)](/documentation/swiftui/button/init(role:action:label:))
- [init(_:role:action:)](/documentation/swiftui/button/init(_:role:action:))
- [init(_:image:role:action:)](/documentation/swiftui/button/init(_:image:role:action:))
- [init(_:systemImage:role:action:)](/documentation/swiftui/button/init(_:systemimage:role:action:))

#### Creating a button from a configuration

- [init(PrimitiveButtonStyleConfiguration)](/documentation/swiftui/button/init(_:))

#### Creating a button to perform an App Intent

- [init(_:intent:)](/documentation/swiftui/button/init(_:intent:))
- [init<I>(intent: I, label: () -> Label)](/documentation/swiftui/button/init(intent:label:))
- [init(_:role:intent:)](/documentation/swiftui/button/init(_:role:intent:))
- [init(role: ButtonRole?, intent: some AppIntent, label: () -> Label)](/documentation/swiftui/button/init(role:intent:label:))
- [init(_:image:role:intent:)](/documentation/swiftui/button/init(_:image:role:intent:))
- [init(_:systemImage:role:intent:)](/documentation/swiftui/button/init(_:systemimage:role:intent:))

#### Initializers

- [init(role: ButtonRole, action: () -> Void)](/documentation/swiftui/button/init(role:action:))
- [func buttonStyle(_:)](/documentation/swiftui/view/buttonstyle(_:))
- [func buttonBorderShape(ButtonBorderShape) -> some View](/documentation/swiftui/view/buttonbordershape(_:))
- [func buttonRepeatBehavior(ButtonRepeatBehavior) -> some View](/documentation/swiftui/view/buttonrepeatbehavior(_:))
- [var buttonRepeatBehavior: ButtonRepeatBehavior](/documentation/swiftui/environmentvalues/buttonrepeatbehavior)
- [ButtonBorderShape](/documentation/swiftui/buttonbordershape)

#### Getting border shapes

- [static let automatic: ButtonBorderShape](/documentation/swiftui/buttonbordershape/automatic)
- [static let capsule: ButtonBorderShape](/documentation/swiftui/buttonbordershape/capsule)
- [static let circle: ButtonBorderShape](/documentation/swiftui/buttonbordershape/circle)
- [static let roundedRectangle: ButtonBorderShape](/documentation/swiftui/buttonbordershape/roundedrectangle)
- [static func roundedRectangle(radius: CGFloat) -> ButtonBorderShape](/documentation/swiftui/buttonbordershape/roundedrectangle(radius:))
- [ButtonRole](/documentation/swiftui/buttonrole)

#### Getting button roles

- [static let cancel: ButtonRole](/documentation/swiftui/buttonrole/cancel)
- [static let destructive: ButtonRole](/documentation/swiftui/buttonrole/destructive)

#### Type Properties

- [static let close: ButtonRole](/documentation/swiftui/buttonrole/close)
- [static let confirm: ButtonRole](/documentation/swiftui/buttonrole/confirm)
- [ButtonRepeatBehavior](/documentation/swiftui/buttonrepeatbehavior)

#### Getting repeat behaviors

- [static let automatic: ButtonRepeatBehavior](/documentation/swiftui/buttonrepeatbehavior/automatic)
- [static let enabled: ButtonRepeatBehavior](/documentation/swiftui/buttonrepeatbehavior/enabled)
- [static let disabled: ButtonRepeatBehavior](/documentation/swiftui/buttonrepeatbehavior/disabled)
- [ButtonSizing](/documentation/swiftui/buttonsizing)

#### Type Properties

- [static var automatic: ButtonSizing](/documentation/swiftui/buttonsizing/automatic)
- [static var fitted: ButtonSizing](/documentation/swiftui/buttonsizing/fitted)
- [static var flexible: ButtonSizing](/documentation/swiftui/buttonsizing/flexible)

### Creating special-purpose buttons

- [EditButton](/documentation/swiftui/editbutton)

#### Creating an edit button

- [init()](/documentation/swiftui/editbutton/init())
- [PasteButton](/documentation/swiftui/pastebutton)

#### Creating a paste button

- [init(supportedContentTypes: [UTType], payloadAction: ([NSItemProvider]) -> Void)](/documentation/swiftui/pastebutton/init(supportedcontenttypes:payloadaction:))
- [init<T>(payloadType: T.Type, onPaste: ([T]) -> Void)](/documentation/swiftui/pastebutton/init(payloadtype:onpaste:))

#### Deprecated initializers

- [init(supportedTypes: [String], payloadAction: ([NSItemProvider]) -> Void)](/documentation/swiftui/pastebutton/init(supportedtypes:payloadaction:))
- [init<Payload>(supportedTypes: [String], validator: ([NSItemProvider]) -> Payload?, payloadAction: (Payload) -> Void)](/documentation/swiftui/pastebutton/init(supportedtypes:validator:payloadaction:))
- [init<Payload>(supportedContentTypes: [UTType], validator: ([NSItemProvider]) -> Payload?, payloadAction: (Payload) -> Void)](/documentation/swiftui/pastebutton/init(supportedcontenttypes:validator:payloadaction:))
- [RenameButton](/documentation/swiftui/renamebutton)

#### Creating an rename button

- [init()](/documentation/swiftui/renamebutton/init())

### Linking to other content

- [Link](/documentation/swiftui/link)

#### Creating a link

- [init(_:destination:)](/documentation/swiftui/link/init(_:destination:))
- [init(destination: URL, label: () -> Label)](/documentation/swiftui/link/init(destination:label:))
- [ShareLink](/documentation/swiftui/sharelink)

#### Sharing an item

- [init(item:subject:message:)](/documentation/swiftui/sharelink/init(item:subject:message:))
- [init(_:item:subject:message:)](/documentation/swiftui/sharelink/init(_:item:subject:message:))
- [init(item:subject:message:label:)](/documentation/swiftui/sharelink/init(item:subject:message:label:))

#### Sharing an item with a preview

- [init<I>(item: I, subject: Text?, message: Text?, preview: SharePreview<PreviewImage, PreviewIcon>)](/documentation/swiftui/sharelink/init(item:subject:message:preview:))
- [init(_:item:subject:message:preview:)](/documentation/swiftui/sharelink/init(_:item:subject:message:preview:))
- [init<I>(item: I, subject: Text?, message: Text?, preview: SharePreview<PreviewImage, PreviewIcon>, label: () -> Label)](/documentation/swiftui/sharelink/init(item:subject:message:preview:label:))

#### Sharing items

- [init(items:subject:message:)](/documentation/swiftui/sharelink/init(items:subject:message:))
- [init(_:items:subject:message:)](/documentation/swiftui/sharelink/init(_:items:subject:message:))
- [init(items:subject:message:label:)](/documentation/swiftui/sharelink/init(items:subject:message:label:))

#### Sharing items with a preview

- [init(items: Data, subject: Text?, message: Text?, preview: (Data.Element) -> SharePreview<PreviewImage, PreviewIcon>)](/documentation/swiftui/sharelink/init(items:subject:message:preview:))
- [init(_:items:subject:message:preview:)](/documentation/swiftui/sharelink/init(_:items:subject:message:preview:))
- [init(items: Data, subject: Text?, message: Text?, preview: (Data.Element) -> SharePreview<PreviewImage, PreviewIcon>, label: () -> Label)](/documentation/swiftui/sharelink/init(items:subject:message:preview:label:))

#### Supporting types

- [DefaultShareLinkLabel](/documentation/swiftui/defaultsharelinklabel)
- [SharePreview](/documentation/swiftui/sharepreview)

#### Creating a preview

- [init(_:)](/documentation/swiftui/sharepreview/init(_:))
- [init(_:image:)](/documentation/swiftui/sharepreview/init(_:image:))
- [init(_:icon:)](/documentation/swiftui/sharepreview/init(_:icon:))
- [init(_:image:icon:)](/documentation/swiftui/sharepreview/init(_:image:icon:))
- [TextFieldLink](/documentation/swiftui/textfieldlink)

#### Creating a text field link

- [init(_:prompt:onSubmit:)](/documentation/swiftui/textfieldlink/init(_:prompt:onsubmit:))
- [init(prompt: Text?, label: () -> Label, onSubmit: (String) -> Void)](/documentation/swiftui/textfieldlink/init(prompt:label:onsubmit:))
- [HelpLink](/documentation/swiftui/helplink)

#### Creating a help link

- [init(action: () -> Void)](/documentation/swiftui/helplink/init(action:))
- [init(destination: URL)](/documentation/swiftui/helplink/init(destination:))
- [init(anchor: NSHelpManager.AnchorName)](/documentation/swiftui/helplink/init(anchor:))
- [init(anchor: NSHelpManager.AnchorName, book: NSHelpManager.BookName)](/documentation/swiftui/helplink/init(anchor:book:))

### Getting numeric inputs

- [Slider](/documentation/swiftui/slider)

#### Creating a slider

- [init<V>(value: Binding<V>, in: ClosedRange<V>, onEditingChanged: (Bool) -> Void)](/documentation/swiftui/slider/init(value:in:oneditingchanged:))
- [init<V>(value: Binding<V>, in: ClosedRange<V>, step: V.Stride, onEditingChanged: (Bool) -> Void)](/documentation/swiftui/slider/init(value:in:step:oneditingchanged:))

#### Creating a slider with labels

- [init<V>(value: Binding<V>, in: ClosedRange<V>, label: () -> Label, onEditingChanged: (Bool) -> Void)](/documentation/swiftui/slider/init(value:in:label:oneditingchanged:))
- [init<V>(value: Binding<V>, in: ClosedRange<V>, step: V.Stride, label: () -> Label, onEditingChanged: (Bool) -> Void)](/documentation/swiftui/slider/init(value:in:step:label:oneditingchanged:))
- [init<V>(value: Binding<V>, in: ClosedRange<V>, label: () -> Label, minimumValueLabel: () -> ValueLabel, maximumValueLabel: () -> ValueLabel, onEditingChanged: (Bool) -> Void)](/documentation/swiftui/slider/init(value:in:label:minimumvaluelabel:maximumvaluelabel:oneditingchanged:))
- [init<V>(value: Binding<V>, in: ClosedRange<V>, step: V.Stride, label: () -> Label, minimumValueLabel: () -> ValueLabel, maximumValueLabel: () -> ValueLabel, onEditingChanged: (Bool) -> Void)](/documentation/swiftui/slider/init(value:in:step:label:minimumvaluelabel:maximumvaluelabel:oneditingchanged:))

#### Adding ticks to a slider

- [SliderTick](/documentation/swiftui/slidertick)

##### Structures

- [SliderTick.ID](/documentation/swiftui/slidertick/id-swift.struct)

##### Initializers

- [init(V)](/documentation/swiftui/slidertick/init(_:))
- [init(_:_:)](/documentation/swiftui/slidertick/init(_:_:))
- [init(V, label: () -> some View)](/documentation/swiftui/slidertick/init(_:label:))

##### Instance Properties

- [var id: SliderTick<V>.ID](/documentation/swiftui/slidertick/id-swift.property)
- [SliderTickBuilder](/documentation/swiftui/slidertickbuilder)

##### Type Methods

- [static func buildBlock() -> some SliderTickContent<V>
](/documentation/swiftui/slidertickbuilder/buildblock())
- [static func buildBlock(some SliderTickContent<V>) -> some SliderTickContent<V>
](/documentation/swiftui/slidertickbuilder/buildblock(_:))
- [static func buildBlock<C0, C1>(C0, C1) -> some SliderTickContent<V>
](/documentation/swiftui/slidertickbuilder/buildblock(_:_:))
- [static func buildBlock<C0, C1, C2>(C0, C1, C2) -> some SliderTickContent<V>
](/documentation/swiftui/slidertickbuilder/buildblock(_:_:_:))
- [static func buildBlock<C0, C1, C2, C3>(C0, C1, C2, C3) -> some SliderTickContent<V>
](/documentation/swiftui/slidertickbuilder/buildblock(_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4>(C0, C1, C2, C3, C4) -> some SliderTickContent<V>
](/documentation/swiftui/slidertickbuilder/buildblock(_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5>(C0, C1, C2, C3, C4, C5) -> some SliderTickContent<V>
](/documentation/swiftui/slidertickbuilder/buildblock(_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6>(C0, C1, C2, C3, C4, C5, C6) -> some SliderTickContent<V>
](/documentation/swiftui/slidertickbuilder/buildblock(_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7>(C0, C1, C2, C3, C4, C5, C6, C7) -> some SliderTickContent<V>
](/documentation/swiftui/slidertickbuilder/buildblock(_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8>(C0, C1, C2, C3, C4, C5, C6, C7, C8) -> some SliderTickContent<V>
](/documentation/swiftui/slidertickbuilder/buildblock(_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9) -> some SliderTickContent<V>
](/documentation/swiftui/slidertickbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:))
- [static func buildEither<T, F>(first: T) -> _ConditionalContent<T, F>](/documentation/swiftui/slidertickbuilder/buildeither(first:))
- [static func buildEither<T, F>(second: F) -> _ConditionalContent<T, F>](/documentation/swiftui/slidertickbuilder/buildeither(second:))
- [static func buildExpression(some SliderTickContent<V>) -> some SliderTickContent<V>
](/documentation/swiftui/slidertickbuilder/buildexpression(_:))
- [static func buildIf(some SliderTickContent<V>) -> some SliderTickContent<V>
](/documentation/swiftui/slidertickbuilder/buildif(_:))
- [SliderTickContentForEach](/documentation/swiftui/slidertickcontentforeach)

##### Initializers

- [init(_:content:)](/documentation/swiftui/slidertickcontentforeach/init(_:content:))
- [init<V>(Data, id: KeyPath<Data.Element, ID>, content: (Data.Element) -> Content)](/documentation/swiftui/slidertickcontentforeach/init(_:id:content:))
- [TupleSliderTickContent](/documentation/swiftui/tupleslidertickcontent)

##### Instance Properties

- [var value: T](/documentation/swiftui/tupleslidertickcontent/value)

##### Type Aliases

- [TupleSliderTickContent.TicksCollection](/documentation/swiftui/tupleslidertickcontent/tickscollection)
- [SliderTickContent](/documentation/swiftui/slidertickcontent)

##### Associated Types

- [Body](/documentation/swiftui/slidertickcontent/body-swift.associatedtype)
- [Value](/documentation/swiftui/slidertickcontent/value)

##### Instance Properties

- [var body: Self.Body](/documentation/swiftui/slidertickcontent/body-swift.property)

#### Deprecated initializers

- [init<V>(value: Binding<V>, in: ClosedRange<V>, onEditingChanged: (Bool) -> Void, label: () -> Label)](/documentation/swiftui/slider/init(value:in:oneditingchanged:label:))
- [init<V>(value: Binding<V>, in: ClosedRange<V>, step: V.Stride, onEditingChanged: (Bool) -> Void, label: () -> Label)](/documentation/swiftui/slider/init(value:in:step:oneditingchanged:label:))
- [init<V>(value: Binding<V>, in: ClosedRange<V>, onEditingChanged: (Bool) -> Void, minimumValueLabel: ValueLabel, maximumValueLabel: ValueLabel, label: () -> Label)](/documentation/swiftui/slider/init(value:in:oneditingchanged:minimumvaluelabel:maximumvaluelabel:label:))
- [init<V>(value: Binding<V>, in: ClosedRange<V>, step: V.Stride, onEditingChanged: (Bool) -> Void, minimumValueLabel: ValueLabel, maximumValueLabel: ValueLabel, label: () -> Label)](/documentation/swiftui/slider/init(value:in:step:oneditingchanged:minimumvaluelabel:maximumvaluelabel:label:))

#### Initializers

- [init<V>(value: Binding<V>, in: ClosedRange<V>, neutralValue: V?, enabledBounds: ClosedRange<V>?, label: () -> Label, currentValueLabel: () -> some View, minimumValueLabel: () -> ValueLabel, maximumValueLabel: () -> ValueLabel, onEditingChanged: (Bool) -> Void)](/documentation/swiftui/slider/init(value:in:neutralvalue:enabledbounds:label:currentvaluelabel:minimumvaluelabel:maximumvaluelabel:oneditingchanged:))
- [init<V>(value: Binding<V>, in: ClosedRange<V>, neutralValue: V?, enabledBounds: ClosedRange<V>?, label: () -> Label, currentValueLabel: () -> some View, minimumValueLabel: () -> ValueLabel, maximumValueLabel: () -> ValueLabel, ticks: () -> some SliderTickContent, onEditingChanged: (Bool) -> Void)](/documentation/swiftui/slider/init(value:in:neutralvalue:enabledbounds:label:currentvaluelabel:minimumvaluelabel:maximumvaluelabel:ticks:oneditingchanged:))
- [init<V>(value: Binding<V>, in: ClosedRange<V>, step: V.Stride, neutralValue: V?, enabledBounds: ClosedRange<V>?, label: () -> Label, currentValueLabel: () -> some View, minimumValueLabel: () -> ValueLabel, maximumValueLabel: () -> ValueLabel, tick: (V) -> SliderTick<V>?, onEditingChanged: (Bool) -> Void)](/documentation/swiftui/slider/init(value:in:step:neutralvalue:enabledbounds:label:currentvaluelabel:minimumvaluelabel:maximumvaluelabel:tick:oneditingchanged:))
- [Stepper](/documentation/swiftui/stepper)

#### Creating a stepper

- [init<V>(value: Binding<V>, step: V.Stride, label: () -> Label, onEditingChanged: (Bool) -> Void)](/documentation/swiftui/stepper/init(value:step:label:oneditingchanged:))
- [init<F>(value: Binding<F.FormatInput>, step: F.FormatInput.Stride, format: F, label: () -> Label, onEditingChanged: (Bool) -> Void)](/documentation/swiftui/stepper/init(value:step:format:label:oneditingchanged:))
- [init(_:value:step:onEditingChanged:)](/documentation/swiftui/stepper/init(_:value:step:oneditingchanged:))
- [init(_:value:step:format:onEditingChanged:)](/documentation/swiftui/stepper/init(_:value:step:format:oneditingchanged:))

#### Creating a stepper over a range

- [init<V>(value: Binding<V>, in: ClosedRange<V>, step: V.Stride, label: () -> Label, onEditingChanged: (Bool) -> Void)](/documentation/swiftui/stepper/init(value:in:step:label:oneditingchanged:))
- [init<F>(value: Binding<F.FormatInput>, in: ClosedRange<F.FormatInput>, step: F.FormatInput.Stride, format: F, label: () -> Label, onEditingChanged: (Bool) -> Void)](/documentation/swiftui/stepper/init(value:in:step:format:label:oneditingchanged:))
- [init(_:value:in:step:onEditingChanged:)](/documentation/swiftui/stepper/init(_:value:in:step:oneditingchanged:))
- [init(_:value:in:step:format:onEditingChanged:)](/documentation/swiftui/stepper/init(_:value:in:step:format:oneditingchanged:))

#### Creating a stepper with change behavior

- [init(label: () -> Label, onIncrement: (() -> Void)?, onDecrement: (() -> Void)?, onEditingChanged: (Bool) -> Void)](/documentation/swiftui/stepper/init(label:onincrement:ondecrement:oneditingchanged:))
- [init(_:onIncrement:onDecrement:onEditingChanged:)](/documentation/swiftui/stepper/init(_:onincrement:ondecrement:oneditingchanged:))

#### Deprecated initializers

- [init<V>(value: Binding<V>, step: V.Stride, onEditingChanged: (Bool) -> Void, label: () -> Label)](/documentation/swiftui/stepper/init(value:step:oneditingchanged:label:))
- [init<V>(value: Binding<V>, in: ClosedRange<V>, step: V.Stride, onEditingChanged: (Bool) -> Void, label: () -> Label)](/documentation/swiftui/stepper/init(value:in:step:oneditingchanged:label:))
- [init(onIncrement: (() -> Void)?, onDecrement: (() -> Void)?, onEditingChanged: (Bool) -> Void, label: () -> Label)](/documentation/swiftui/stepper/init(onincrement:ondecrement:oneditingchanged:label:))
- [Toggle](/documentation/swiftui/toggle)

#### Creating a toggle

- [init(_:isOn:)](/documentation/swiftui/toggle/init(_:ison:))
- [init(isOn: Binding<Bool>, label: () -> Label)](/documentation/swiftui/toggle/init(ison:label:))
- [init(_:image:isOn:)](/documentation/swiftui/toggle/init(_:image:ison:))
- [init(_:systemImage:isOn:)](/documentation/swiftui/toggle/init(_:systemimage:ison:))

#### Creating a toggle for a collection

- [init(_:sources:isOn:)](/documentation/swiftui/toggle/init(_:sources:ison:))
- [init<C>(sources: C, isOn: KeyPath<C.Element, Binding<Bool>>, label: () -> Label)](/documentation/swiftui/toggle/init(sources:ison:label:))
- [init(_:image:sources:isOn:)](/documentation/swiftui/toggle/init(_:image:sources:ison:))
- [init(_:systemImage:sources:isOn:)](/documentation/swiftui/toggle/init(_:systemimage:sources:ison:))

#### Creating a toggle from a configuration

- [init(ToggleStyleConfiguration)](/documentation/swiftui/toggle/init(_:))

#### Creating a toggle for an App Intent

- [init<I>(isOn: Bool, intent: I, label: () -> Label)](/documentation/swiftui/toggle/init(ison:intent:label:))
- [init(_:isOn:intent:)](/documentation/swiftui/toggle/init(_:ison:intent:))
- [func toggleStyle<S>(S) -> some View](/documentation/swiftui/view/togglestyle(_:))

### Choosing from a set of options

- [Picker](/documentation/swiftui/picker)

#### Creating a picker

- [init(_:selection:content:)](/documentation/swiftui/picker/init(_:selection:content:))
- [init(selection: Binding<SelectionValue>, content: () -> Content, label: () -> Label)](/documentation/swiftui/picker/init(selection:content:label:))

#### Creating a picker for a collection

- [init(_:sources:selection:content:)](/documentation/swiftui/picker/init(_:sources:selection:content:))
- [init<C>(sources: C, selection: KeyPath<C.Element, Binding<SelectionValue>>, content: () -> Content, label: () -> Label)](/documentation/swiftui/picker/init(sources:selection:content:label:))

#### Creating a picker with an image label

- [init(_:image:selection:content:)](/documentation/swiftui/picker/init(_:image:selection:content:))
- [init(_:image:sources:selection:content:)](/documentation/swiftui/picker/init(_:image:sources:selection:content:))
- [init(_:systemImage:selection:content:)](/documentation/swiftui/picker/init(_:systemimage:selection:content:))
- [init(_:systemImage:sources:selection:content:)](/documentation/swiftui/picker/init(_:systemimage:sources:selection:content:))

#### Deprecated initializers

- [init(selection: Binding<SelectionValue>, label: Label, content: () -> Content)](/documentation/swiftui/picker/init(selection:label:content:))

#### Initializers

- [init(_:image:selection:content:currentValueLabel:)](/documentation/swiftui/picker/init(_:image:selection:content:currentvaluelabel:))
- [init(_:image:sources:selection:content:currentValueLabel:)](/documentation/swiftui/picker/init(_:image:sources:selection:content:currentvaluelabel:))
- [init(_:selection:content:currentValueLabel:)](/documentation/swiftui/picker/init(_:selection:content:currentvaluelabel:))
- [init(_:sources:selection:content:currentValueLabel:)](/documentation/swiftui/picker/init(_:sources:selection:content:currentvaluelabel:))
- [init(_:systemImage:selection:content:currentValueLabel:)](/documentation/swiftui/picker/init(_:systemimage:selection:content:currentvaluelabel:))
- [init(_:systemImage:sources:selection:content:currentValueLabel:)](/documentation/swiftui/picker/init(_:systemimage:sources:selection:content:currentvaluelabel:))
- [init(selection: Binding<SelectionValue>, content: () -> Content, label: () -> Label, currentValueLabel: () -> some View)](/documentation/swiftui/picker/init(selection:content:label:currentvaluelabel:))
- [init<C>(sources: C, selection: KeyPath<C.Element, Binding<SelectionValue>>, content: () -> Content, label: () -> Label, currentValueLabel: () -> some View)](/documentation/swiftui/picker/init(sources:selection:content:label:currentvaluelabel:))
- [func pickerStyle<S>(S) -> some View](/documentation/swiftui/view/pickerstyle(_:))
- [func horizontalRadioGroupLayout() -> some View](/documentation/swiftui/view/horizontalradiogrouplayout())
- [func defaultWheelPickerItemHeight(CGFloat) -> some View](/documentation/swiftui/view/defaultwheelpickeritemheight(_:))
- [var defaultWheelPickerItemHeight: CGFloat](/documentation/swiftui/environmentvalues/defaultwheelpickeritemheight)
- [func paletteSelectionEffect(PaletteSelectionEffect) -> some View](/documentation/swiftui/view/paletteselectioneffect(_:))
- [PaletteSelectionEffect](/documentation/swiftui/paletteselectioneffect)

#### Getting palette selection effects

- [static let automatic: PaletteSelectionEffect](/documentation/swiftui/paletteselectioneffect/automatic)
- [static let custom: PaletteSelectionEffect](/documentation/swiftui/paletteselectioneffect/custom)
- [static func symbolVariant(SymbolVariants) -> PaletteSelectionEffect](/documentation/swiftui/paletteselectioneffect/symbolvariant(_:))

### Choosing dates

- [DatePicker](/documentation/swiftui/datepicker)

#### Creating a date picker for any date

- [init(_:selection:displayedComponents:)](/documentation/swiftui/datepicker/init(_:selection:displayedcomponents:))
- [init(selection: Binding<Date>, displayedComponents: DatePicker<Label>.Components, label: () -> Label)](/documentation/swiftui/datepicker/init(selection:displayedcomponents:label:))

#### Creating a date picker for specific dates

- [init(_:selection:in:displayedComponents:)](/documentation/swiftui/datepicker/init(_:selection:in:displayedcomponents:))
- [init(selection:in:displayedComponents:label:)](/documentation/swiftui/datepicker/init(selection:in:displayedcomponents:label:))

#### Setting date picker components

- [DatePicker.Components](/documentation/swiftui/datepicker/components)
- [DatePickerComponents](/documentation/swiftui/datepickercomponents)

##### Getting date picker components

- [static let date: DatePickerComponents](/documentation/swiftui/datepickercomponents/date)
- [static let hourAndMinute: DatePickerComponents](/documentation/swiftui/datepickercomponents/hourandminute)
- [static let hourMinuteAndSecond: DatePickerComponents](/documentation/swiftui/datepickercomponents/hourminuteandsecond)
- [func datePickerStyle<S>(S) -> some View](/documentation/swiftui/view/datepickerstyle(_:))
- [MultiDatePicker](/documentation/swiftui/multidatepicker)

#### Picking dates

- [init(_:selection:)](/documentation/swiftui/multidatepicker/init(_:selection:))
- [init(selection: Binding<Set<DateComponents>>, label: () -> Label)](/documentation/swiftui/multidatepicker/init(selection:label:))

#### Picking dates in a range

- [init(_:selection:in:)](/documentation/swiftui/multidatepicker/init(_:selection:in:))
- [init(selection:in:label:)](/documentation/swiftui/multidatepicker/init(selection:in:label:))
- [var calendar: Calendar](/documentation/swiftui/environmentvalues/calendar)
- [var timeZone: TimeZone](/documentation/swiftui/environmentvalues/timezone)

### Choosing a color

- [ColorPicker](/documentation/swiftui/colorpicker)

#### Creating a color picker

- [init(_:selection:supportsOpacity:)](/documentation/swiftui/colorpicker/init(_:selection:supportsopacity:))
- [init(selection:supportsOpacity:label:)](/documentation/swiftui/colorpicker/init(selection:supportsopacity:label:))

### Indicating a value

- [Gauge](/documentation/swiftui/gauge)

#### Creating a gauge

- [init<V>(value: V, in: ClosedRange<V>, label: () -> Label)](/documentation/swiftui/gauge/init(value:in:label:))
- [init<V>(value: V, in: ClosedRange<V>, label: () -> Label, currentValueLabel: () -> CurrentValueLabel)](/documentation/swiftui/gauge/init(value:in:label:currentvaluelabel:))
- [init<V>(value: V, in: ClosedRange<V>, label: () -> Label, currentValueLabel: () -> CurrentValueLabel, markedValueLabels: () -> MarkedValueLabels)](/documentation/swiftui/gauge/init(value:in:label:currentvaluelabel:markedvaluelabels:))
- [init<V>(value: V, in: ClosedRange<V>, label: () -> Label, currentValueLabel: () -> CurrentValueLabel, minimumValueLabel: () -> BoundsLabel, maximumValueLabel: () -> BoundsLabel)](/documentation/swiftui/gauge/init(value:in:label:currentvaluelabel:minimumvaluelabel:maximumvaluelabel:))
- [init<V>(value: V, in: ClosedRange<V>, label: () -> Label, currentValueLabel: () -> CurrentValueLabel, minimumValueLabel: () -> BoundsLabel, maximumValueLabel: () -> BoundsLabel, markedValueLabels: () -> MarkedValueLabels)](/documentation/swiftui/gauge/init(value:in:label:currentvaluelabel:minimumvaluelabel:maximumvaluelabel:markedvaluelabels:))
- [func gaugeStyle<S>(S) -> some View](/documentation/swiftui/view/gaugestyle(_:))
- [ProgressView](/documentation/swiftui/progressview)

#### Creating an indeterminate progress view

- [init()](/documentation/swiftui/progressview/init())
- [init(label: () -> Label)](/documentation/swiftui/progressview/init(label:))
- [init(LocalizedStringKey)](/documentation/swiftui/progressview/init(_:)-6k5se)
- [init<S>(S)](/documentation/swiftui/progressview/init(_:)-3q5nf)

#### Creating a determinate progress view

- [init(Progress)](/documentation/swiftui/progressview/init(_:)-l5vj)
- [init<V>(value: V?, total: V)](/documentation/swiftui/progressview/init(value:total:))
- [init(_:value:total:)](/documentation/swiftui/progressview/init(_:value:total:))
- [init<V>(value: V?, total: V, label: () -> Label)](/documentation/swiftui/progressview/init(value:total:label:))
- [init<V>(value: V?, total: V, label: () -> Label, currentValueLabel: () -> CurrentValueLabel)](/documentation/swiftui/progressview/init(value:total:label:currentvaluelabel:))

#### Create a progress view spanning a date range

- [init(timerInterval: ClosedRange<Date>, countsDown: Bool)](/documentation/swiftui/progressview/init(timerinterval:countsdown:))
- [init(timerInterval: ClosedRange<Date>, countsDown: Bool, label: () -> Label)](/documentation/swiftui/progressview/init(timerinterval:countsdown:label:))
- [init(timerInterval: ClosedRange<Date>, countsDown: Bool, label: () -> Label, currentValueLabel: () -> CurrentValueLabel)](/documentation/swiftui/progressview/init(timerinterval:countsdown:label:currentvaluelabel:))

#### Initializers

- [init(_:)](/documentation/swiftui/progressview/init(_:))
- [func progressViewStyle<S>(S) -> some View](/documentation/swiftui/view/progressviewstyle(_:))
- [DefaultDateProgressLabel](/documentation/swiftui/defaultdateprogresslabel)
- [DefaultButtonLabel](/documentation/swiftui/defaultbuttonlabel)

### Indicating missing content

- [ContentUnavailableView](/documentation/swiftui/contentunavailableview)

#### Getting built-in unavailable views

- [static var search: ContentUnavailableView<SearchUnavailableContent.Label, SearchUnavailableContent.Description, SearchUnavailableContent.Actions>](/documentation/swiftui/contentunavailableview/search)
- [static func search(text: String) -> ContentUnavailableView<Label, Description, Actions>](/documentation/swiftui/contentunavailableview/search(text:))

#### Creating an unavailable view

- [init(label: () -> Label, description: () -> Description, actions: () -> Actions)](/documentation/swiftui/contentunavailableview/init(label:description:actions:))
- [init(_:image:description:)](/documentation/swiftui/contentunavailableview/init(_:image:description:))
- [init(_:systemImage:description:)](/documentation/swiftui/contentunavailableview/init(_:systemimage:description:))

#### Supporting types

- [SearchUnavailableContent](/documentation/swiftui/searchunavailablecontent)

##### Getting content types

- [SearchUnavailableContent.Actions](/documentation/swiftui/searchunavailablecontent/actions)
- [SearchUnavailableContent.Description](/documentation/swiftui/searchunavailablecontent/description)
- [SearchUnavailableContent.Label](/documentation/swiftui/searchunavailablecontent/label)

### Providing haptic feedback

- [func sensoryFeedback<T>(SensoryFeedback, trigger: T) -> some View](/documentation/swiftui/view/sensoryfeedback(_:trigger:))
- [func sensoryFeedback(trigger:_:)](/documentation/swiftui/view/sensoryfeedback(trigger:_:))
- [func sensoryFeedback<T>(SensoryFeedback, trigger: T, condition: (T, T) -> Bool) -> some View](/documentation/swiftui/view/sensoryfeedback(_:trigger:condition:))
- [SensoryFeedback](/documentation/swiftui/sensoryfeedback)

#### Indicating start and stop

- [static let start: SensoryFeedback](/documentation/swiftui/sensoryfeedback/start)
- [static let stop: SensoryFeedback](/documentation/swiftui/sensoryfeedback/stop)

#### Indicating changes and selections

- [static let alignment: SensoryFeedback](/documentation/swiftui/sensoryfeedback/alignment)
- [static let decrease: SensoryFeedback](/documentation/swiftui/sensoryfeedback/decrease)
- [static let increase: SensoryFeedback](/documentation/swiftui/sensoryfeedback/increase)
- [static let levelChange: SensoryFeedback](/documentation/swiftui/sensoryfeedback/levelchange)
- [static let selection: SensoryFeedback](/documentation/swiftui/sensoryfeedback/selection)
- [static let pathComplete: SensoryFeedback](/documentation/swiftui/sensoryfeedback/pathcomplete)

#### Indicating the outcome of an operation

- [static let success: SensoryFeedback](/documentation/swiftui/sensoryfeedback/success)
- [static let warning: SensoryFeedback](/documentation/swiftui/sensoryfeedback/warning)
- [static let error: SensoryFeedback](/documentation/swiftui/sensoryfeedback/error)

#### Producing a physical impact

- [static let impact: SensoryFeedback](/documentation/swiftui/sensoryfeedback/impact)
- [static func impact(weight: SensoryFeedback.Weight, intensity: Double) -> SensoryFeedback](/documentation/swiftui/sensoryfeedback/impact(weight:intensity:))
- [static func impact(flexibility: SensoryFeedback.Flexibility, intensity: Double) -> SensoryFeedback](/documentation/swiftui/sensoryfeedback/impact(flexibility:intensity:))
- [SensoryFeedback.Flexibility](/documentation/swiftui/sensoryfeedback/flexibility)

##### Getting flexibility values

- [static let rigid: SensoryFeedback.Flexibility](/documentation/swiftui/sensoryfeedback/flexibility/rigid)
- [static let soft: SensoryFeedback.Flexibility](/documentation/swiftui/sensoryfeedback/flexibility/soft)
- [static let solid: SensoryFeedback.Flexibility](/documentation/swiftui/sensoryfeedback/flexibility/solid)
- [SensoryFeedback.Weight](/documentation/swiftui/sensoryfeedback/weight)

##### Getting flexibility values

- [static let light: SensoryFeedback.Weight](/documentation/swiftui/sensoryfeedback/weight/light)
- [static let medium: SensoryFeedback.Weight](/documentation/swiftui/sensoryfeedback/weight/medium)
- [static let heavy: SensoryFeedback.Weight](/documentation/swiftui/sensoryfeedback/weight/heavy)

#### Structures

- [SensoryFeedback.PressFeedback](/documentation/swiftui/sensoryfeedback/pressfeedback)

##### Type Properties

- [static let button: SensoryFeedback.PressFeedback](/documentation/swiftui/sensoryfeedback/pressfeedback/button)
- [static let buttonIconOnly: SensoryFeedback.PressFeedback](/documentation/swiftui/sensoryfeedback/pressfeedback/buttonicononly)
- [static let slider: SensoryFeedback.PressFeedback](/documentation/swiftui/sensoryfeedback/pressfeedback/slider)
- [static let tab: SensoryFeedback.PressFeedback](/documentation/swiftui/sensoryfeedback/pressfeedback/tab)
- [static let toggle: SensoryFeedback.PressFeedback](/documentation/swiftui/sensoryfeedback/pressfeedback/toggle)
- [SensoryFeedback.ReleaseFeedback](/documentation/swiftui/sensoryfeedback/releasefeedback)

##### Type Properties

- [static let slider: SensoryFeedback.ReleaseFeedback](/documentation/swiftui/sensoryfeedback/releasefeedback/slider)
- [SensoryFeedback.SelectionFeedback](/documentation/swiftui/sensoryfeedback/selectionfeedback)

##### Type Properties

- [static let maximum: SensoryFeedback.SelectionFeedback](/documentation/swiftui/sensoryfeedback/selectionfeedback/maximum)
- [static let minimum: SensoryFeedback.SelectionFeedback](/documentation/swiftui/sensoryfeedback/selectionfeedback/minimum)
- [static let off: SensoryFeedback.SelectionFeedback](/documentation/swiftui/sensoryfeedback/selectionfeedback/off)
- [static let on: SensoryFeedback.SelectionFeedback](/documentation/swiftui/sensoryfeedback/selectionfeedback/on)

#### Type Methods

- [static func press(SensoryFeedback.PressFeedback) -> SensoryFeedback](/documentation/swiftui/sensoryfeedback/press(_:))
- [static func release(SensoryFeedback.ReleaseFeedback) -> SensoryFeedback](/documentation/swiftui/sensoryfeedback/release(_:))
- [static func selection(SensoryFeedback.SelectionFeedback) -> SensoryFeedback](/documentation/swiftui/sensoryfeedback/selection(_:))

### Sizing controls

- [func controlSize(_:)](/documentation/swiftui/view/controlsize(_:))
- [var controlSize: ControlSize](/documentation/swiftui/environmentvalues/controlsize)
- [ControlSize](/documentation/swiftui/controlsize)

#### Getting control sizes

- [case mini](/documentation/swiftui/controlsize/mini)
- [case small](/documentation/swiftui/controlsize/small)
- [case regular](/documentation/swiftui/controlsize/regular)
- [case large](/documentation/swiftui/controlsize/large)
- [case extraLarge](/documentation/swiftui/controlsize/extralarge)

#### Initializers

- [init(NSControl.ControlSize)](/documentation/swiftui/controlsize/init(_:))
- [Menus and commands](/documentation/swiftui/menus-and-commands)

### Building a menu bar

- [Building and customizing the menu bar with SwiftUI](/documentation/swiftui/building-and-customizing-the-menu-bar-with-swiftui)

### Creating a menu

- [Populating SwiftUI menus with adaptive controls](/documentation/swiftui/populating-swiftui-menus-with-adaptive-controls)
- [Menu](/documentation/swiftui/menu)

#### Creating a menu from content

- [init(_:content:)](/documentation/swiftui/menu/init(_:content:))
- [init(content: () -> Content, label: () -> Label)](/documentation/swiftui/menu/init(content:label:))
- [init(_:image:content:)](/documentation/swiftui/menu/init(_:image:content:))
- [init(_:systemImage:content:)](/documentation/swiftui/menu/init(_:systemimage:content:))

#### Creating a menu with a primary action

- [init(_:content:primaryAction:)](/documentation/swiftui/menu/init(_:content:primaryaction:))
- [init(content: () -> Content, label: () -> Label, primaryAction: () -> Void)](/documentation/swiftui/menu/init(content:label:primaryaction:))
- [init(_:image:content:primaryAction:)](/documentation/swiftui/menu/init(_:image:content:primaryaction:))
- [init(_:systemImage:content:primaryAction:)](/documentation/swiftui/menu/init(_:systemimage:content:primaryaction:))

#### Creating a menu from a configuration

- [init(MenuStyleConfiguration)](/documentation/swiftui/menu/init(_:))
- [func menuStyle<S>(S) -> some View](/documentation/swiftui/view/menustyle(_:))

### Creating context menus

- [func contextMenu<MenuItems>(menuItems: () -> MenuItems) -> some View](/documentation/swiftui/view/contextmenu(menuitems:))
- [func contextMenu<M, P>(menuItems: () -> M, preview: () -> P) -> some View](/documentation/swiftui/view/contextmenu(menuitems:preview:))
- [func contextMenu<I, M>(forSelectionType: I.Type, menu: (Set<I>) -> M, primaryAction: ((Set<I>) -> Void)?) -> some View](/documentation/swiftui/view/contextmenu(forselectiontype:menu:primaryaction:))

### Defining commands

- [func commands<Content>(content: () -> Content) -> some Scene](/documentation/swiftui/scene/commands(content:))
- [func commandsRemoved() -> some Scene](/documentation/swiftui/scene/commandsremoved())
- [func commandsReplaced<Content>(content: () -> Content) -> some Scene](/documentation/swiftui/scene/commandsreplaced(content:))
- [Commands](/documentation/swiftui/commands)

#### Implementing commands

- [var body: Self.Body](/documentation/swiftui/commands/body-swift.property)
- [Body](/documentation/swiftui/commands/body-swift.associatedtype)
- [CommandMenu](/documentation/swiftui/commandmenu)

#### Creating a command menu

- [init(_:content:)](/documentation/swiftui/commandmenu/init(_:content:))
- [CommandGroup](/documentation/swiftui/commandgroup)

#### Creating a command group

- [init(after: CommandGroupPlacement, addition: () -> Content)](/documentation/swiftui/commandgroup/init(after:addition:))
- [init(before: CommandGroupPlacement, addition: () -> Content)](/documentation/swiftui/commandgroup/init(before:addition:))
- [init(replacing: CommandGroupPlacement, addition: () -> Content)](/documentation/swiftui/commandgroup/init(replacing:addition:))
- [CommandsBuilder](/documentation/swiftui/commandsbuilder)

#### Building content

- [static func buildBlock() -> EmptyCommands](/documentation/swiftui/commandsbuilder/buildblock())
- [static func buildBlock<C>(C) -> C](/documentation/swiftui/commandsbuilder/buildblock(_:))
- [static func buildBlock<C0, C1>(C0, C1) -> some Commands](/documentation/swiftui/commandsbuilder/buildblock(_:_:))
- [static func buildBlock<C0, C1, C2>(C0, C1, C2) -> some Commands](/documentation/swiftui/commandsbuilder/buildblock(_:_:_:))
- [static func buildBlock<C0, C1, C2, C3>(C0, C1, C2, C3) -> some Commands](/documentation/swiftui/commandsbuilder/buildblock(_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4>(C0, C1, C2, C3, C4) -> some Commands](/documentation/swiftui/commandsbuilder/buildblock(_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5>(C0, C1, C2, C3, C4, C5) -> some Commands](/documentation/swiftui/commandsbuilder/buildblock(_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6>(C0, C1, C2, C3, C4, C5, C6) -> some Commands](/documentation/swiftui/commandsbuilder/buildblock(_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7>(C0, C1, C2, C3, C4, C5, C6, C7) -> some Commands](/documentation/swiftui/commandsbuilder/buildblock(_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8>(C0, C1, C2, C3, C4, C5, C6, C7, C8) -> some Commands](/documentation/swiftui/commandsbuilder/buildblock(_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9) -> some Commands](/documentation/swiftui/commandsbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:))

#### Building conditionally

- [static func buildEither<T, F>(first: T) -> _ConditionalContent<T, F>](/documentation/swiftui/commandsbuilder/buildeither(first:))
- [static func buildEither<T, F>(second: F) -> _ConditionalContent<T, F>](/documentation/swiftui/commandsbuilder/buildeither(second:))
- [static func buildIf<C>(C?) -> C?](/documentation/swiftui/commandsbuilder/buildif(_:))
- [static buildLimitedAvailability(_:)](/documentation/swiftui/commandsbuilder/buildlimitedavailability(_:))
- [static func buildExpression<Content>(Content) -> Content](/documentation/swiftui/commandsbuilder/buildexpression(_:))
- [CommandGroupPlacement](/documentation/swiftui/commandgroupplacement)

#### App interactions

- [static let appInfo: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/appinfo)
- [static let appSettings: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/appsettings)
- [static let appTermination: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/apptermination)
- [static let appVisibility: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/appvisibility)
- [static let systemServices: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/systemservices)

#### File manipulation

- [static let importExport: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/importexport)
- [static let newItem: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/newitem)
- [static let printItem: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/printitem)
- [static let saveItem: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/saveitem)

#### Content updates

- [static let pasteboard: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/pasteboard)
- [static let textEditing: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/textediting)
- [static let textFormatting: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/textformatting)
- [static let undoRedo: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/undoredo)

#### Bars

- [static let sidebar: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/sidebar)
- [static let toolbar: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/toolbar)

#### Windows

- [static let singleWindowList: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/singlewindowlist)
- [static let windowArrangement: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/windowarrangement)
- [static let windowList: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/windowlist)
- [static let windowSize: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/windowsize)

#### Help

- [static let help: CommandGroupPlacement](/documentation/swiftui/commandgroupplacement/help)

### Getting built-in command groups

- [SidebarCommands](/documentation/swiftui/sidebarcommands)

#### Creating the command group

- [init()](/documentation/swiftui/sidebarcommands/init())
- [TextEditingCommands](/documentation/swiftui/texteditingcommands)

#### Creating the command group

- [init()](/documentation/swiftui/texteditingcommands/init())
- [TextFormattingCommands](/documentation/swiftui/textformattingcommands)

#### Creating the command group

- [init()](/documentation/swiftui/textformattingcommands/init())
- [ToolbarCommands](/documentation/swiftui/toolbarcommands)

#### Creating the command group

- [init()](/documentation/swiftui/toolbarcommands/init())
- [ImportFromDevicesCommands](/documentation/swiftui/importfromdevicescommands)

#### Creating the command group

- [init()](/documentation/swiftui/importfromdevicescommands/init())
- [InspectorCommands](/documentation/swiftui/inspectorcommands)

#### Creating a command

- [init()](/documentation/swiftui/inspectorcommands/init())
- [EmptyCommands](/documentation/swiftui/emptycommands)

#### Creating the command group

- [init()](/documentation/swiftui/emptycommands/init())

### Showing a menu indicator

- [func menuIndicator(Visibility) -> some View](/documentation/swiftui/view/menuindicator(_:))
- [var menuIndicatorVisibility: Visibility](/documentation/swiftui/environmentvalues/menuindicatorvisibility)

### Configuring menu dismissal

- [func menuActionDismissBehavior(MenuActionDismissBehavior) -> some View](/documentation/swiftui/view/menuactiondismissbehavior(_:))
- [MenuActionDismissBehavior](/documentation/swiftui/menuactiondismissbehavior)

#### Getting dismiss behaviors

- [static let automatic: MenuActionDismissBehavior](/documentation/swiftui/menuactiondismissbehavior/automatic)
- [static let disabled: MenuActionDismissBehavior](/documentation/swiftui/menuactiondismissbehavior/disabled)
- [static let enabled: MenuActionDismissBehavior](/documentation/swiftui/menuactiondismissbehavior/enabled)

### Setting a preferred order

- [func menuOrder(MenuOrder) -> some View](/documentation/swiftui/view/menuorder(_:))
- [var menuOrder: MenuOrder](/documentation/swiftui/environmentvalues/menuorder)
- [MenuOrder](/documentation/swiftui/menuorder)

#### Getting menu orders

- [static let automatic: MenuOrder](/documentation/swiftui/menuorder/automatic)
- [static let fixed: MenuOrder](/documentation/swiftui/menuorder/fixed)
- [static let priority: MenuOrder](/documentation/swiftui/menuorder/priority)

### Deprecated types

- [MenuButton](/documentation/swiftui/menubutton)

#### Creating a menu button

- [init(_:content:)](/documentation/swiftui/menubutton/init(_:content:))
- [init(label: Label, content: () -> Content)](/documentation/swiftui/menubutton/init(label:content:))

#### Styling a menu button

- [func menuButtonStyle<S>(S) -> some View](/documentation/swiftui/view/menubuttonstyle(_:))
- [MenuButtonStyle](/documentation/swiftui/menubuttonstyle)

##### Supporting types

- [BorderlessButtonMenuButtonStyle](/documentation/swiftui/borderlessbuttonmenubuttonstyle)

###### Creating a borderless button menu button style

- [init()](/documentation/swiftui/borderlessbuttonmenubuttonstyle/init())
- [BorderlessPullDownMenuButtonStyle](/documentation/swiftui/borderlesspulldownmenubuttonstyle)

###### Creating a borderless pull down menu button style

- [init()](/documentation/swiftui/borderlesspulldownmenubuttonstyle/init())
- [DefaultMenuButtonStyle](/documentation/swiftui/defaultmenubuttonstyle)

###### Creating a default menu button style

- [init()](/documentation/swiftui/defaultmenubuttonstyle/init())
- [PullDownMenuButtonStyle](/documentation/swiftui/pulldownmenubuttonstyle)

###### Creating a pull down menu button style

- [init()](/documentation/swiftui/pulldownmenubuttonstyle/init())
- [PullDownButton](/documentation/swiftui/pulldownbutton)
- [ContextMenu](/documentation/swiftui/contextmenu)

#### Creating a context menu

- [init(menuItems: () -> MenuItems)](/documentation/swiftui/contextmenu/init(menuitems:))
- [Shapes](/documentation/swiftui/shapes)

### Creating rectangular shapes

- [Rectangle](/documentation/swiftui/rectangle)

#### Creating a rectangle

- [init()](/documentation/swiftui/rectangle/init())
- [RoundedRectangle](/documentation/swiftui/roundedrectangle)

#### Creating a rounded rectangle

- [init(cornerRadius: CGFloat, style: RoundedCornerStyle)](/documentation/swiftui/roundedrectangle/init(cornerradius:style:))
- [init(cornerSize: CGSize, style: RoundedCornerStyle)](/documentation/swiftui/roundedrectangle/init(cornersize:style:))

#### Getting the shape’s characteristics

- [var cornerSize: CGSize](/documentation/swiftui/roundedrectangle/cornersize)
- [var style: RoundedCornerStyle](/documentation/swiftui/roundedrectangle/style)

#### Supporting types

- [var animatableData: CGSize.AnimatableData](/documentation/swiftui/roundedrectangle/animatabledata)
- [RoundedCornerStyle](/documentation/swiftui/roundedcornerstyle)

#### Getting corner styles

- [case circular](/documentation/swiftui/roundedcornerstyle/circular)
- [case continuous](/documentation/swiftui/roundedcornerstyle/continuous)
- [RoundedRectangularShape](/documentation/swiftui/roundedrectangularshape)

#### Instance Methods

- [func corners(in: CGSize?) -> Self.Corners?](/documentation/swiftui/roundedrectangularshape/corners(in:))

#### Type Aliases

- [RoundedRectangularShape.Corners](/documentation/swiftui/roundedrectangularshape/corners)
- [RoundedRectangularShapeCorners](/documentation/swiftui/roundedrectangularshapecorners)

#### Initializers

- [init(all: Edge.Corner.Style)](/documentation/swiftui/roundedrectangularshapecorners/init(all:))
- [init(topLeading: Edge.Corner.Style, topTrailing: Edge.Corner.Style, bottomLeading: Edge.Corner.Style, bottomTrailing: Edge.Corner.Style)](/documentation/swiftui/roundedrectangularshapecorners/init(topleading:toptrailing:bottomleading:bottomtrailing:))

#### Instance Properties

- [var bottomLeading: Edge.Corner.Style](/documentation/swiftui/roundedrectangularshapecorners/bottomleading)
- [var bottomTrailing: Edge.Corner.Style](/documentation/swiftui/roundedrectangularshapecorners/bottomtrailing)
- [var topLeading: Edge.Corner.Style](/documentation/swiftui/roundedrectangularshapecorners/topleading)
- [var topTrailing: Edge.Corner.Style](/documentation/swiftui/roundedrectangularshapecorners/toptrailing)

#### Subscripts

- [subscript(Edge.Corner) -> Edge.Corner.Style](/documentation/swiftui/roundedrectangularshapecorners/subscript(_:))

#### Type Properties

- [static var concentric: RoundedRectangularShapeCorners](/documentation/swiftui/roundedrectangularshapecorners/concentric)

#### Type Methods

- [static func concentric(minimum: Edge.Corner.Style?) -> RoundedRectangularShapeCorners](/documentation/swiftui/roundedrectangularshapecorners/concentric(minimum:))
- [static func fixed(CGFloat) -> RoundedRectangularShapeCorners](/documentation/swiftui/roundedrectangularshapecorners/fixed(_:))
- [UnevenRoundedRectangle](/documentation/swiftui/unevenroundedrectangle)

#### Creating an uneven rounded rectangle

- [init(cornerRadii: RectangleCornerRadii, style: RoundedCornerStyle)](/documentation/swiftui/unevenroundedrectangle/init(cornerradii:style:))
- [init(topLeadingRadius: CGFloat, bottomLeadingRadius: CGFloat, bottomTrailingRadius: CGFloat, topTrailingRadius: CGFloat, style: RoundedCornerStyle)](/documentation/swiftui/unevenroundedrectangle/init(topleadingradius:bottomleadingradius:bottomtrailingradius:toptrailingradius:style:))

#### Getting the shape’s characteristics

- [var cornerRadii: RectangleCornerRadii](/documentation/swiftui/unevenroundedrectangle/cornerradii)
- [var style: RoundedCornerStyle](/documentation/swiftui/unevenroundedrectangle/style)

#### Supporting types

- [var animatableData: RectangleCornerRadii.AnimatableData](/documentation/swiftui/unevenroundedrectangle/animatabledata)
- [RectangleCornerRadii](/documentation/swiftui/rectanglecornerradii)

#### Creating a set of radii

- [init(topLeading: CGFloat, bottomLeading: CGFloat, bottomTrailing: CGFloat, topTrailing: CGFloat)](/documentation/swiftui/rectanglecornerradii/init(topleading:bottomleading:bottomtrailing:toptrailing:))

#### Getting values for specific corners

- [var topLeading: CGFloat](/documentation/swiftui/rectanglecornerradii/topleading)
- [var topTrailing: CGFloat](/documentation/swiftui/rectanglecornerradii/toptrailing)
- [var bottomLeading: CGFloat](/documentation/swiftui/rectanglecornerradii/bottomleading)
- [var bottomTrailing: CGFloat](/documentation/swiftui/rectanglecornerradii/bottomtrailing)

#### Subscripts

- [subscript(Edge.Corner) -> CGFloat](/documentation/swiftui/rectanglecornerradii/subscript(_:))
- [RectangleCornerInsets](/documentation/swiftui/rectanglecornerinsets)

#### Initializers

- [init()](/documentation/swiftui/rectanglecornerinsets/init())
- [init(topLeading: CGSize, topTrailing: CGSize, bottomLeading: CGSize, bottomTrailing: CGSize)](/documentation/swiftui/rectanglecornerinsets/init(topleading:toptrailing:bottomleading:bottomtrailing:))

#### Instance Properties

- [var bottomLeading: CGSize](/documentation/swiftui/rectanglecornerinsets/bottomleading)
- [var bottomTrailing: CGSize](/documentation/swiftui/rectanglecornerinsets/bottomtrailing)
- [var topLeading: CGSize](/documentation/swiftui/rectanglecornerinsets/topleading)
- [var topTrailing: CGSize](/documentation/swiftui/rectanglecornerinsets/toptrailing)
- [ConcentricRectangle](/documentation/swiftui/concentricrectangle)

#### Initializers

- [init()](/documentation/swiftui/concentricrectangle/init())
- [init(corners: Edge.Corner.Style, isUniform: Bool)](/documentation/swiftui/concentricrectangle/init(corners:isuniform:))
- [init(topLeadingCorner: Edge.Corner.Style, topTrailingCorner: Edge.Corner.Style, bottomLeadingCorner: Edge.Corner.Style, bottomTrailingCorner: Edge.Corner.Style)](/documentation/swiftui/concentricrectangle/init(topleadingcorner:toptrailingcorner:bottomleadingcorner:bottomtrailingcorner:))
- [init(uniformBottomCorners: Edge.Corner.Style, topLeadingCorner: Edge.Corner.Style, topTrailingCorner: Edge.Corner.Style)](/documentation/swiftui/concentricrectangle/init(uniformbottomcorners:topleadingcorner:toptrailingcorner:))
- [init(uniformLeadingCorners: Edge.Corner.Style, topTrailingCorner: Edge.Corner.Style, bottomTrailingCorner: Edge.Corner.Style)](/documentation/swiftui/concentricrectangle/init(uniformleadingcorners:toptrailingcorner:bottomtrailingcorner:))
- [init(uniformLeadingCorners: Edge.Corner.Style, uniformTrailingCorners: Edge.Corner.Style)](/documentation/swiftui/concentricrectangle/init(uniformleadingcorners:uniformtrailingcorners:))
- [init(uniformTopCorners: Edge.Corner.Style, bottomLeadingCorner: Edge.Corner.Style, bottomTrailingCorner: Edge.Corner.Style)](/documentation/swiftui/concentricrectangle/init(uniformtopcorners:bottomleadingcorner:bottomtrailingcorner:))
- [init(uniformTopCorners: Edge.Corner.Style, uniformBottomCorners: Edge.Corner.Style)](/documentation/swiftui/concentricrectangle/init(uniformtopcorners:uniformbottomcorners:))
- [init(uniformTrailingCorners: Edge.Corner.Style, topLeadingCorner: Edge.Corner.Style, bottomLeadingCorner: Edge.Corner.Style)](/documentation/swiftui/concentricrectangle/init(uniformtrailingcorners:topleadingcorner:bottomleadingcorner:))

### Creating circular shapes

- [Circle](/documentation/swiftui/circle)

#### Creating a circle

- [init()](/documentation/swiftui/circle/init())
- [Ellipse](/documentation/swiftui/ellipse)

#### Creating an ellipse

- [init()](/documentation/swiftui/ellipse/init())
- [Capsule](/documentation/swiftui/capsule)

#### Creating a capsule

- [init(style: RoundedCornerStyle)](/documentation/swiftui/capsule/init(style:))

#### Getting the shape’s characteristics

- [var style: RoundedCornerStyle](/documentation/swiftui/capsule/style)

### Drawing custom shapes

- [Path](/documentation/swiftui/path)

#### Creating a path

- [init()](/documentation/swiftui/path/init())
- [init(_:)](/documentation/swiftui/path/init(_:))
- [init(ellipseIn: CGRect)](/documentation/swiftui/path/init(ellipsein:))
- [init(roundedRect: CGRect, cornerRadius: CGFloat, style: RoundedCornerStyle)](/documentation/swiftui/path/init(roundedrect:cornerradius:style:))
- [init(roundedRect: CGRect, cornerSize: CGSize, style: RoundedCornerStyle)](/documentation/swiftui/path/init(roundedrect:cornersize:style:))
- [init(roundedRect: CGRect, cornerRadii: RectangleCornerRadii, style: RoundedCornerStyle)](/documentation/swiftui/path/init(roundedrect:cornerradii:style:))

#### Getting the path’s characteristics

- [var boundingRect: CGRect](/documentation/swiftui/path/boundingrect)
- [var cgPath: CGPath](/documentation/swiftui/path/cgpath)
- [func contains(CGPoint, eoFill: Bool) -> Bool](/documentation/swiftui/path/contains(_:eofill:))
- [var currentPoint: CGPoint?](/documentation/swiftui/path/currentpoint)
- [var description: String](/documentation/swiftui/path/description)
- [var isEmpty: Bool](/documentation/swiftui/path/isempty)

#### Drawing a path

- [func move(to: CGPoint)](/documentation/swiftui/path/move(to:))
- [func addArc(center: CGPoint, radius: CGFloat, startAngle: Angle, endAngle: Angle, clockwise: Bool, transform: CGAffineTransform)](/documentation/swiftui/path/addarc(center:radius:startangle:endangle:clockwise:transform:))
- [func addArc(tangent1End: CGPoint, tangent2End: CGPoint, radius: CGFloat, transform: CGAffineTransform)](/documentation/swiftui/path/addarc(tangent1end:tangent2end:radius:transform:))
- [func addCurve(to: CGPoint, control1: CGPoint, control2: CGPoint)](/documentation/swiftui/path/addcurve(to:control1:control2:))
- [func addEllipse(in: CGRect, transform: CGAffineTransform)](/documentation/swiftui/path/addellipse(in:transform:))
- [func addLine(to: CGPoint)](/documentation/swiftui/path/addline(to:))
- [func addLines([CGPoint])](/documentation/swiftui/path/addlines(_:))
- [func addPath(Path, transform: CGAffineTransform)](/documentation/swiftui/path/addpath(_:transform:))
- [func addQuadCurve(to: CGPoint, control: CGPoint)](/documentation/swiftui/path/addquadcurve(to:control:))
- [func addRect(CGRect, transform: CGAffineTransform)](/documentation/swiftui/path/addrect(_:transform:))
- [func addRects([CGRect], transform: CGAffineTransform)](/documentation/swiftui/path/addrects(_:transform:))
- [func addRelativeArc(center: CGPoint, radius: CGFloat, startAngle: Angle, delta: Angle, transform: CGAffineTransform)](/documentation/swiftui/path/addrelativearc(center:radius:startangle:delta:transform:))
- [func addRoundedRect(in: CGRect, cornerSize: CGSize, style: RoundedCornerStyle, transform: CGAffineTransform)](/documentation/swiftui/path/addroundedrect(in:cornersize:style:transform:))
- [func closeSubpath()](/documentation/swiftui/path/closesubpath())

#### Transforming the path

- [func applying(CGAffineTransform) -> Path](/documentation/swiftui/path/applying(_:))
- [func offsetBy(dx: CGFloat, dy: CGFloat) -> Path](/documentation/swiftui/path/offsetby(dx:dy:))
- [func trimmedPath(from: CGFloat, to: CGFloat) -> Path](/documentation/swiftui/path/trimmedpath(from:to:))

#### Performing operations on the path

- [func addRoundedRect(in: CGRect, cornerSize: CGSize, style: RoundedCornerStyle, transform: CGAffineTransform)](/documentation/swiftui/path/addroundedrect(in:cornersize:style:transform:))
- [func intersection(Path, eoFill: Bool) -> Path](/documentation/swiftui/path/intersection(_:eofill:))
- [func lineIntersection(Path, eoFill: Bool) -> Path](/documentation/swiftui/path/lineintersection(_:eofill:))
- [func lineSubtraction(Path, eoFill: Bool) -> Path](/documentation/swiftui/path/linesubtraction(_:eofill:))
- [func normalized(eoFill: Bool) -> Path](/documentation/swiftui/path/normalized(eofill:))
- [func subtracting(Path, eoFill: Bool) -> Path](/documentation/swiftui/path/subtracting(_:eofill:))
- [func symmetricDifference(Path, eoFill: Bool) -> Path](/documentation/swiftui/path/symmetricdifference(_:eofill:))
- [func union(Path, eoFill: Bool) -> Path](/documentation/swiftui/path/union(_:eofill:))

#### Operating over path elements

- [func forEach((Path.Element) -> Void)](/documentation/swiftui/path/foreach(_:))
- [Path.Element](/documentation/swiftui/path/element)

##### Getting path elements

- [case closeSubpath](/documentation/swiftui/path/element/closesubpath)
- [case curve(to: CGPoint, control1: CGPoint, control2: CGPoint)](/documentation/swiftui/path/element/curve(to:control1:control2:))
- [case line(to: CGPoint)](/documentation/swiftui/path/element/line(to:))
- [case move(to: CGPoint)](/documentation/swiftui/path/element/move(to:))
- [case quadCurve(to: CGPoint, control: CGPoint)](/documentation/swiftui/path/element/quadcurve(to:control:))

#### Applying a style

- [func strokedPath(StrokeStyle) -> Path](/documentation/swiftui/path/strokedpath(_:))

#### Instance Methods

- [func addRoundedRect(in: CGRect, cornerRadii: RectangleCornerRadii, style: RoundedCornerStyle, transform: CGAffineTransform)](/documentation/swiftui/path/addroundedrect(in:cornerradii:style:transform:))

### Defining shape behavior

- [ShapeView](/documentation/swiftui/shapeview)

#### Getting the shape

- [var shape: Self.Content](/documentation/swiftui/shapeview/shape)
- [Content](/documentation/swiftui/shapeview/content)

#### Modify the shape

- [func fill<S>(S, style: FillStyle) -> FillShapeView<Self.Content, S, Self>](/documentation/swiftui/shapeview/fill(_:style:))
- [func stroke<S>(S, style: StrokeStyle, antialiased: Bool) -> StrokeShapeView<Self.Content, S, Self>](/documentation/swiftui/shapeview/stroke(_:style:antialiased:))
- [func stroke<S>(S, lineWidth: CGFloat, antialiased: Bool) -> StrokeShapeView<Self.Content, S, Self>](/documentation/swiftui/shapeview/stroke(_:linewidth:antialiased:))
- [func strokeBorder<S>(S, style: StrokeStyle, antialiased: Bool) -> StrokeBorderShapeView<Self.Content, S, Self>](/documentation/swiftui/shapeview/strokeborder(_:style:antialiased:))
- [func strokeBorder<S>(S, lineWidth: CGFloat, antialiased: Bool) -> StrokeBorderShapeView<Self.Content, S, Self>](/documentation/swiftui/shapeview/strokeborder(_:linewidth:antialiased:))
- [Shape](/documentation/swiftui/shape)

#### Getting standard shapes

- [static var buttonBorder: ButtonBorderShape](/documentation/swiftui/shape/buttonborder)
- [static var capsule: Capsule](/documentation/swiftui/shape/capsule)
- [static func capsule(style: RoundedCornerStyle) -> Self](/documentation/swiftui/shape/capsule(style:))
- [static var circle: Circle](/documentation/swiftui/shape/circle)
- [static var containerRelative: ContainerRelativeShape](/documentation/swiftui/shape/containerrelative)
- [static var ellipse: Ellipse](/documentation/swiftui/shape/ellipse)
- [static var rect: Rectangle](/documentation/swiftui/shape/rect)
- [static func rect(cornerRadii: RectangleCornerRadii, style: RoundedCornerStyle) -> Self](/documentation/swiftui/shape/rect(cornerradii:style:))
- [static func rect(cornerRadius: CGFloat, style: RoundedCornerStyle) -> Self](/documentation/swiftui/shape/rect(cornerradius:style:))
- [static func rect(cornerSize: CGSize, style: RoundedCornerStyle) -> Self](/documentation/swiftui/shape/rect(cornersize:style:))
- [static func rect(topLeadingRadius: CGFloat, bottomLeadingRadius: CGFloat, bottomTrailingRadius: CGFloat, topTrailingRadius: CGFloat, style: RoundedCornerStyle) -> Self](/documentation/swiftui/shape/rect(topleadingradius:bottomleadingradius:bottomtrailingradius:toptrailingradius:style:))

#### Defining a shape’s size and path

- [func sizeThatFits(ProposedViewSize) -> CGSize](/documentation/swiftui/shape/sizethatfits(_:))
- [func path(in: CGRect) -> Path](/documentation/swiftui/shape/path(in:))

#### Transforming a shape

- [func trim(from: CGFloat, to: CGFloat) -> some Shape](/documentation/swiftui/shape/trim(from:to:))
- [func transform(CGAffineTransform) -> TransformedShape<Self>](/documentation/swiftui/shape/transform(_:))
- [func size(CGSize) -> some Shape](/documentation/swiftui/shape/size(_:))
- [func size(width: CGFloat, height: CGFloat) -> some Shape](/documentation/swiftui/shape/size(width:height:))
- [func scale(CGFloat, anchor: UnitPoint) -> ScaledShape<Self>](/documentation/swiftui/shape/scale(_:anchor:))
- [func scale(x: CGFloat, y: CGFloat, anchor: UnitPoint) -> ScaledShape<Self>](/documentation/swiftui/shape/scale(x:y:anchor:))
- [func rotation(Angle, anchor: UnitPoint) -> RotatedShape<Self>](/documentation/swiftui/shape/rotation(_:anchor:))
- [func offset(_:)](/documentation/swiftui/shape/offset(_:))
- [func offset(x: CGFloat, y: CGFloat) -> OffsetShape<Self>](/documentation/swiftui/shape/offset(x:y:))

#### Setting the stroke characteristics

- [func stroke<S>(S, lineWidth: CGFloat) -> some View](/documentation/swiftui/shape/stroke(_:linewidth:))
- [func stroke<S>(S, lineWidth: CGFloat, antialiased: Bool) -> StrokeShapeView<Self, S, EmptyView>](/documentation/swiftui/shape/stroke(_:linewidth:antialiased:))
- [func stroke(lineWidth: CGFloat) -> some Shape](/documentation/swiftui/shape/stroke(linewidth:))
- [func stroke<S>(S, style: StrokeStyle) -> some View](/documentation/swiftui/shape/stroke(_:style:))
- [func stroke<S>(S, style: StrokeStyle, antialiased: Bool) -> StrokeShapeView<Self, S, EmptyView>](/documentation/swiftui/shape/stroke(_:style:antialiased:))
- [func stroke(style: StrokeStyle) -> some Shape](/documentation/swiftui/shape/stroke(style:))

#### Filling a shape

- [func fill(_:style:)](/documentation/swiftui/shape/fill(_:style:))
- [func fill(style: FillStyle) -> some View](/documentation/swiftui/shape/fill(style:))

#### Setting the role

- [static var role: ShapeRole](/documentation/swiftui/shape/role)

#### Indicating a layout direction

- [var layoutDirectionBehavior: LayoutDirectionBehavior](/documentation/swiftui/shape/layoutdirectionbehavior)

#### Performing operations on a shape

- [func intersection<T>(T, eoFill: Bool) -> some Shape](/documentation/swiftui/shape/intersection(_:eofill:))
- [func lineIntersection<T>(T, eoFill: Bool) -> some Shape](/documentation/swiftui/shape/lineintersection(_:eofill:))
- [func lineSubtraction<T>(T, eoFill: Bool) -> some Shape](/documentation/swiftui/shape/linesubtraction(_:eofill:))
- [func subtracting<T>(T, eoFill: Bool) -> some Shape](/documentation/swiftui/shape/subtracting(_:eofill:))
- [func symmetricDifference<T>(T, eoFill: Bool) -> some Shape](/documentation/swiftui/shape/symmetricdifference(_:eofill:))
- [func union<T>(T, eoFill: Bool) -> some Shape](/documentation/swiftui/shape/union(_:eofill:))

#### Instance Methods

- [func size(CGSize, anchor: UnitPoint) -> some Shape](/documentation/swiftui/shape/size(_:anchor:))
- [func size(width: CGFloat, height: CGFloat, anchor: UnitPoint) -> some Shape](/documentation/swiftui/shape/size(width:height:anchor:))

#### Type Methods

- [static func rect(corners: Edge.Corner.Style, isUniform: Bool) -> Self](/documentation/swiftui/shape/rect(corners:isuniform:))
- [static func rect(topLeadingCorner: Edge.Corner.Style, topTrailingCorner: Edge.Corner.Style, bottomLeadingCorner: Edge.Corner.Style, bottomTrailingCorner: Edge.Corner.Style) -> Self](/documentation/swiftui/shape/rect(topleadingcorner:toptrailingcorner:bottomleadingcorner:bottomtrailingcorner:))
- [static func rect(uniformBottomCorners: Edge.Corner.Style, topLeadingCorner: Edge.Corner.Style, topTrailingCorner: Edge.Corner.Style) -> Self](/documentation/swiftui/shape/rect(uniformbottomcorners:topleadingcorner:toptrailingcorner:))
- [static func rect(uniformLeadingCorners: Edge.Corner.Style, topTrailingCorner: Edge.Corner.Style, bottomTrailingCorner: Edge.Corner.Style) -> Self](/documentation/swiftui/shape/rect(uniformleadingcorners:toptrailingcorner:bottomtrailingcorner:))
- [static func rect(uniformLeadingCorners: Edge.Corner.Style, uniformTrailingCorners: Edge.Corner.Style) -> Self](/documentation/swiftui/shape/rect(uniformleadingcorners:uniformtrailingcorners:))
- [static func rect(uniformTopCorners: Edge.Corner.Style, bottomLeadingCorner: Edge.Corner.Style, bottomTrailingCorner: Edge.Corner.Style) -> Self](/documentation/swiftui/shape/rect(uniformtopcorners:bottomleadingcorner:bottomtrailingcorner:))
- [static func rect(uniformTopCorners: Edge.Corner.Style, uniformBottomCorners: Edge.Corner.Style) -> Self](/documentation/swiftui/shape/rect(uniformtopcorners:uniformbottomcorners:))
- [static func rect(uniformTrailingCorners: Edge.Corner.Style, topLeadingCorner: Edge.Corner.Style, bottomLeadingCorner: Edge.Corner.Style) -> Self](/documentation/swiftui/shape/rect(uniformtrailingcorners:topleadingcorner:bottomleadingcorner:))
- [AnyShape](/documentation/swiftui/anyshape)

#### Creating a shape

- [init<S>(S)](/documentation/swiftui/anyshape/init(_:))
- [ShapeRole](/documentation/swiftui/shaperole)

#### Getting shape roles

- [case fill](/documentation/swiftui/shaperole/fill)
- [case stroke](/documentation/swiftui/shaperole/stroke)
- [case separator](/documentation/swiftui/shaperole/separator)
- [StrokeStyle](/documentation/swiftui/strokestyle)

#### Creating a stroke style

- [init(lineWidth: CGFloat, lineCap: CGLineCap, lineJoin: CGLineJoin, miterLimit: CGFloat, dash: [CGFloat], dashPhase: CGFloat)](/documentation/swiftui/strokestyle/init(linewidth:linecap:linejoin:miterlimit:dash:dashphase:))

#### Setting stroke style properties

- [var lineWidth: CGFloat](/documentation/swiftui/strokestyle/linewidth)
- [var lineCap: CGLineCap](/documentation/swiftui/strokestyle/linecap)
- [var lineJoin: CGLineJoin](/documentation/swiftui/strokestyle/linejoin)
- [var miterLimit: CGFloat](/documentation/swiftui/strokestyle/miterlimit)
- [var dash: [CGFloat]](/documentation/swiftui/strokestyle/dash)
- [var dashPhase: CGFloat](/documentation/swiftui/strokestyle/dashphase)
- [StrokeShapeView](/documentation/swiftui/strokeshapeview)

#### Creating a stroke shape view

- [init(shape: Content, style: Style, strokeStyle: StrokeStyle, isAntialiased: Bool, background: Background)](/documentation/swiftui/strokeshapeview/init(shape:style:strokestyle:isantialiased:background:))

#### Getting shape view properties

- [var background: Background](/documentation/swiftui/strokeshapeview/background)
- [var isAntialiased: Bool](/documentation/swiftui/strokeshapeview/isantialiased)
- [var shape: Content](/documentation/swiftui/strokeshapeview/shape)
- [var strokeStyle: StrokeStyle](/documentation/swiftui/strokeshapeview/strokestyle)
- [var style: Style](/documentation/swiftui/strokeshapeview/style)
- [StrokeBorderShapeView](/documentation/swiftui/strokebordershapeview)

#### Creating a stroke border shape view

- [init(shape: Content, style: Style, strokeStyle: StrokeStyle, isAntialiased: Bool, background: Background)](/documentation/swiftui/strokebordershapeview/init(shape:style:strokestyle:isantialiased:background:))

#### Getting shape view properties

- [var background: Background](/documentation/swiftui/strokebordershapeview/background)
- [var isAntialiased: Bool](/documentation/swiftui/strokebordershapeview/isantialiased)
- [var shape: Content](/documentation/swiftui/strokebordershapeview/shape)
- [var strokeStyle: StrokeStyle](/documentation/swiftui/strokebordershapeview/strokestyle)
- [var style: Style](/documentation/swiftui/strokebordershapeview/style)
- [FillStyle](/documentation/swiftui/fillstyle)

#### Creating a fill style

- [init(eoFill: Bool, antialiased: Bool)](/documentation/swiftui/fillstyle/init(eofill:antialiased:))

#### Setting fill style properties

- [var isEOFilled: Bool](/documentation/swiftui/fillstyle/iseofilled)
- [var isAntialiased: Bool](/documentation/swiftui/fillstyle/isantialiased)
- [FillShapeView](/documentation/swiftui/fillshapeview)

#### Creating a stroke shape view

- [init(shape: Content, style: Style, fillStyle: FillStyle, background: Background)](/documentation/swiftui/fillshapeview/init(shape:style:fillstyle:background:))

#### Getting shape view properties

- [var background: Background](/documentation/swiftui/fillshapeview/background)
- [var fillStyle: FillStyle](/documentation/swiftui/fillshapeview/fillstyle)
- [var shape: Content](/documentation/swiftui/fillshapeview/shape)
- [var style: Style](/documentation/swiftui/fillshapeview/style)

### Transforming a shape

- [ScaledShape](/documentation/swiftui/scaledshape)

#### Creating a scaled shape

- [init(shape: Content, scale: CGSize, anchor: UnitPoint)](/documentation/swiftui/scaledshape/init(shape:scale:anchor:))

#### Getting the shape’s characteristics

- [var anchor: UnitPoint](/documentation/swiftui/scaledshape/anchor)
- [var scale: CGSize](/documentation/swiftui/scaledshape/scale)
- [var shape: Content](/documentation/swiftui/scaledshape/shape)

#### Supporting types

- [var animatableData: ScaledShape<Content>.AnimatableData](/documentation/swiftui/scaledshape/animatabledata)
- [RotatedShape](/documentation/swiftui/rotatedshape)

#### Creating a rotated shape

- [init(shape: Content, angle: Angle, anchor: UnitPoint)](/documentation/swiftui/rotatedshape/init(shape:angle:anchor:))

#### Getting the shape’s characteristics

- [var anchor: UnitPoint](/documentation/swiftui/rotatedshape/anchor)
- [var angle: Angle](/documentation/swiftui/rotatedshape/angle)
- [var shape: Content](/documentation/swiftui/rotatedshape/shape)

#### Supporting types

- [var animatableData: RotatedShape<Content>.AnimatableData](/documentation/swiftui/rotatedshape/animatabledata)
- [OffsetShape](/documentation/swiftui/offsetshape)

#### Creating an offset shape

- [init(shape: Content, offset: CGSize)](/documentation/swiftui/offsetshape/init(shape:offset:))

#### Getting the shape’s characteristics

- [var offset: CGSize](/documentation/swiftui/offsetshape/offset)
- [var shape: Content](/documentation/swiftui/offsetshape/shape)

#### Supporting types

- [var animatableData: OffsetShape<Content>.AnimatableData](/documentation/swiftui/offsetshape/animatabledata)
- [TransformedShape](/documentation/swiftui/transformedshape)

#### Creating a transformed shape

- [init(shape: Content, transform: CGAffineTransform)](/documentation/swiftui/transformedshape/init(shape:transform:))

#### Getting the shape’s characteristics

- [var shape: Content](/documentation/swiftui/transformedshape/shape)
- [var transform: CGAffineTransform](/documentation/swiftui/transformedshape/transform)

### Setting a container shape

- [func containerShape(_:)](/documentation/swiftui/view/containershape(_:))
- [InsettableShape](/documentation/swiftui/insettableshape)

#### Setting the stroke border characteristics

- [func strokeBorder(_:lineWidth:antialiased:)](/documentation/swiftui/insettableshape/strokeborder(_:linewidth:antialiased:))
- [func strokeBorder(lineWidth: CGFloat, antialiased: Bool) -> some View](/documentation/swiftui/insettableshape/strokeborder(linewidth:antialiased:))
- [func strokeBorder(_:style:antialiased:)](/documentation/swiftui/insettableshape/strokeborder(_:style:antialiased:))
- [func strokeBorder(style: StrokeStyle, antialiased: Bool) -> some View](/documentation/swiftui/insettableshape/strokeborder(style:antialiased:))

#### Setting the inset

- [func inset(by: CGFloat) -> Self.InsetShape](/documentation/swiftui/insettableshape/inset(by:))
- [InsetShape](/documentation/swiftui/insettableshape/insetshape)
- [ContainerRelativeShape](/documentation/swiftui/containerrelativeshape)

#### Creating the shape

- [init()](/documentation/swiftui/containerrelativeshape/init())
- [Drawing and graphics](/documentation/swiftui/drawing-and-graphics)

### Immediate mode drawing

- [Add rich graphics to your SwiftUI app](/documentation/swiftui/add-rich-graphics-to-your-swiftui-app)
- [Canvas](/documentation/swiftui/canvas)

#### Creating a canvas

- [init(opaque: Bool, colorMode: ColorRenderingMode, rendersAsynchronously: Bool, renderer: (inout GraphicsContext, CGSize) -> Void)](/documentation/swiftui/canvas/init(opaque:colormode:rendersasynchronously:renderer:))
- [init(opaque: Bool, colorMode: ColorRenderingMode, rendersAsynchronously: Bool, renderer: (inout GraphicsContext, CGSize) -> Void, symbols: () -> Symbols)](/documentation/swiftui/canvas/init(opaque:colormode:rendersasynchronously:renderer:symbols:))

#### Managing opacity and color

- [var isOpaque: Bool](/documentation/swiftui/canvas/isopaque)
- [var colorMode: ColorRenderingMode](/documentation/swiftui/canvas/colormode)

#### Referencing symbols

- [var symbols: Symbols](/documentation/swiftui/canvas/symbols)

#### Rendering

- [var rendersAsynchronously: Bool](/documentation/swiftui/canvas/rendersasynchronously)
- [var renderer: (inout GraphicsContext, CGSize) -> Void](/documentation/swiftui/canvas/renderer)
- [GraphicsContext](/documentation/swiftui/graphicscontext)

#### Drawing a path

- [func stroke(Path, with: GraphicsContext.Shading, lineWidth: CGFloat)](/documentation/swiftui/graphicscontext/stroke(_:with:linewidth:))
- [func stroke(Path, with: GraphicsContext.Shading, style: StrokeStyle)](/documentation/swiftui/graphicscontext/stroke(_:with:style:))
- [func fill(Path, with: GraphicsContext.Shading, style: FillStyle)](/documentation/swiftui/graphicscontext/fill(_:with:style:))
- [GraphicsContext.Shading](/documentation/swiftui/graphicscontext/shading)

##### Colors

- [static func color(Color) -> GraphicsContext.Shading](/documentation/swiftui/graphicscontext/shading/color(_:))
- [static func color(Color.RGBColorSpace, red: Double, green: Double, blue: Double, opacity: Double) -> GraphicsContext.Shading](/documentation/swiftui/graphicscontext/shading/color(_:red:green:blue:opacity:))
- [static func color(Color.RGBColorSpace, white: Double, opacity: Double) -> GraphicsContext.Shading](/documentation/swiftui/graphicscontext/shading/color(_:white:opacity:))

##### Gradients

- [static func linearGradient(Gradient, startPoint: CGPoint, endPoint: CGPoint, options: GraphicsContext.GradientOptions) -> GraphicsContext.Shading](/documentation/swiftui/graphicscontext/shading/lineargradient(_:startpoint:endpoint:options:))
- [static func radialGradient(Gradient, center: CGPoint, startRadius: CGFloat, endRadius: CGFloat, options: GraphicsContext.GradientOptions) -> GraphicsContext.Shading](/documentation/swiftui/graphicscontext/shading/radialgradient(_:center:startradius:endradius:options:))
- [static func conicGradient(Gradient, center: CGPoint, angle: Angle, options: GraphicsContext.GradientOptions) -> GraphicsContext.Shading](/documentation/swiftui/graphicscontext/shading/conicgradient(_:center:angle:options:))

##### Other shape styles

- [static func style<S>(S) -> GraphicsContext.Shading](/documentation/swiftui/graphicscontext/shading/style(_:))
- [static var foreground: GraphicsContext.Shading](/documentation/swiftui/graphicscontext/shading/foreground)

##### Images

- [static func tiledImage(Image, origin: CGPoint, sourceRect: CGRect, scale: CGFloat) -> GraphicsContext.Shading](/documentation/swiftui/graphicscontext/shading/tiledimage(_:origin:sourcerect:scale:))

##### Composite shading types

- [static func palette([GraphicsContext.Shading]) -> GraphicsContext.Shading](/documentation/swiftui/graphicscontext/shading/palette(_:))
- [static var backdrop: GraphicsContext.Shading](/documentation/swiftui/graphicscontext/shading/backdrop)

##### Using a custom Metal shader

- [static func shader(Shader, bounds: CGRect) -> GraphicsContext.Shading](/documentation/swiftui/graphicscontext/shading/shader(_:bounds:))

##### Type Methods

- [static func meshGradient(MeshGradient) -> GraphicsContext.Shading](/documentation/swiftui/graphicscontext/shading/meshgradient(_:))
- [GraphicsContext.GradientOptions](/documentation/swiftui/graphicscontext/gradientoptions)

##### Getting gradient options

- [static var linearColor: GraphicsContext.GradientOptions](/documentation/swiftui/graphicscontext/gradientoptions/linearcolor)
- [static var mirror: GraphicsContext.GradientOptions](/documentation/swiftui/graphicscontext/gradientoptions/mirror)
- [static var `repeat`: GraphicsContext.GradientOptions](/documentation/swiftui/graphicscontext/gradientoptions/repeat)

#### Drawing images, text, and views

- [func draw(_:in:)](/documentation/swiftui/graphicscontext/draw(_:in:))
- [func draw(_:in:style:)](/documentation/swiftui/graphicscontext/draw(_:in:style:))
- [func draw(_:at:anchor:)](/documentation/swiftui/graphicscontext/draw(_:at:anchor:))

#### Drawing into a new layer

- [func drawLayer(content: (inout GraphicsContext) throws -> Void) rethrows](/documentation/swiftui/graphicscontext/drawlayer(content:))

#### Resolving a drawn entity

- [func resolve(_:)](/documentation/swiftui/graphicscontext/resolve(_:))
- [func resolveSymbol<ID>(id: ID) -> GraphicsContext.ResolvedSymbol?](/documentation/swiftui/graphicscontext/resolvesymbol(id:))
- [GraphicsContext.ResolvedSymbol](/documentation/swiftui/graphicscontext/resolvedsymbol)

##### Getting the symbol properties

- [var size: CGSize](/documentation/swiftui/graphicscontext/resolvedsymbol/size)
- [GraphicsContext.ResolvedImage](/documentation/swiftui/graphicscontext/resolvedimage)

##### Getting the image properties

- [var size: CGSize](/documentation/swiftui/graphicscontext/resolvedimage/size)
- [let baseline: CGFloat](/documentation/swiftui/graphicscontext/resolvedimage/baseline)
- [var shading: GraphicsContext.Shading?](/documentation/swiftui/graphicscontext/resolvedimage/shading)
- [GraphicsContext.ResolvedText](/documentation/swiftui/graphicscontext/resolvedtext)

##### Getting the text properties

- [func firstBaseline(in: CGSize) -> CGFloat](/documentation/swiftui/graphicscontext/resolvedtext/firstbaseline(in:))
- [func lastBaseline(in: CGSize) -> CGFloat](/documentation/swiftui/graphicscontext/resolvedtext/lastbaseline(in:))
- [func measure(in: CGSize) -> CGSize](/documentation/swiftui/graphicscontext/resolvedtext/measure(in:))
- [var shading: GraphicsContext.Shading](/documentation/swiftui/graphicscontext/resolvedtext/shading)

#### Masking

- [func clip(to: Path, style: FillStyle, options: GraphicsContext.ClipOptions)](/documentation/swiftui/graphicscontext/clip(to:style:options:))
- [func clipToLayer(opacity: Double, options: GraphicsContext.ClipOptions, content: (inout GraphicsContext) throws -> Void) rethrows](/documentation/swiftui/graphicscontext/cliptolayer(opacity:options:content:))
- [var clipBoundingRect: CGRect](/documentation/swiftui/graphicscontext/clipboundingrect)
- [GraphicsContext.ClipOptions](/documentation/swiftui/graphicscontext/clipoptions)

##### Getting clip options

- [static var inverse: GraphicsContext.ClipOptions](/documentation/swiftui/graphicscontext/clipoptions/inverse)

#### Setting opacity and the blend mode

- [var opacity: Double](/documentation/swiftui/graphicscontext/opacity)
- [var blendMode: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.property)
- [GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct)

##### Getting the default

- [static var normal: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/normal)

##### Darkening

- [static var darken: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/darken)
- [static var multiply: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/multiply)
- [static var colorBurn: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/colorburn)
- [static var plusDarker: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/plusdarker)

##### Lightening

- [static var lighten: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/lighten)
- [static var screen: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/screen)
- [static var colorDodge: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/colordodge)
- [static var plusLighter: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/pluslighter)

##### Adding contrast

- [static var overlay: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/overlay)
- [static var softLight: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/softlight)
- [static var hardLight: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/hardlight)

##### Inverting

- [static var difference: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/difference)
- [static var exclusion: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/exclusion)

##### Mixing color components

- [static var hue: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/hue)
- [static var saturation: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/saturation)
- [static var color: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/color)
- [static var luminosity: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/luminosity)

##### Accessing porter-duff modes

- [static var clear: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/clear)
- [static var copy: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/copy)
- [static var sourceIn: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/sourcein)
- [static var sourceOut: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/sourceout)
- [static var sourceAtop: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/sourceatop)
- [static var destinationOver: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/destinationover)
- [static var destinationIn: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/destinationin)
- [static var destinationOut: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/destinationout)
- [static var destinationAtop: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/destinationatop)
- [static var xor: GraphicsContext.BlendMode](/documentation/swiftui/graphicscontext/blendmode-swift.struct/xor)

#### Filtering

- [func addFilter(GraphicsContext.Filter, options: GraphicsContext.FilterOptions)](/documentation/swiftui/graphicscontext/addfilter(_:options:))
- [GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter)

##### Changing brightness and contrast

- [static func brightness(Double) -> GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/brightness(_:))
- [static func contrast(Double) -> GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/contrast(_:))

##### Manipulating color

- [static func saturation(Double) -> GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/saturation(_:))
- [static func colorInvert(Double) -> GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/colorinvert(_:))
- [static func colorMultiply(Color) -> GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/colormultiply(_:))
- [static func hueRotation(Angle) -> GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/huerotation(_:))
- [static func grayscale(Double) -> GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/grayscale(_:))
- [static func colorMatrix(ColorMatrix) -> GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/colormatrix(_:))

##### Adding blur

- [static func blur(radius: CGFloat, options: GraphicsContext.BlurOptions) -> GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/blur(radius:options:))

##### Adding a shadow

- [static func shadow(color: Color, radius: CGFloat, x: CGFloat, y: CGFloat, blendMode: GraphicsContext.BlendMode, options: GraphicsContext.ShadowOptions) -> GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/shadow(color:radius:x:y:blendmode:options:))

##### Adjusting opacity

- [static var luminanceToAlpha: GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/luminancetoalpha)
- [static func alphaThreshold(min: Double, max: Double, color: Color) -> GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/alphathreshold(min:max:color:))

##### Adding a transformation

- [static func projectionTransform(ProjectionTransform) -> GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/projectiontransform(_:))

##### Using a custom Metal shader

- [static func colorShader(Shader) -> GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/colorshader(_:))
- [static func distortionShader(Shader, maxSampleOffset: CGSize) -> GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/distortionshader(_:maxsampleoffset:))
- [static func layerShader(Shader, maxSampleOffset: CGSize) -> GraphicsContext.Filter](/documentation/swiftui/graphicscontext/filter/layershader(_:maxsampleoffset:))
- [GraphicsContext.FilterOptions](/documentation/swiftui/graphicscontext/filteroptions)

##### Getting filter options

- [static var linearColor: GraphicsContext.FilterOptions](/documentation/swiftui/graphicscontext/filteroptions/linearcolor)
- [GraphicsContext.BlurOptions](/documentation/swiftui/graphicscontext/bluroptions)

##### Getting blur options

- [static var dithersResult: GraphicsContext.BlurOptions](/documentation/swiftui/graphicscontext/bluroptions/dithersresult)
- [static var opaque: GraphicsContext.BlurOptions](/documentation/swiftui/graphicscontext/bluroptions/opaque)
- [GraphicsContext.ShadowOptions](/documentation/swiftui/graphicscontext/shadowoptions)

##### Getting shadow options

- [static var disablesGroup: GraphicsContext.ShadowOptions](/documentation/swiftui/graphicscontext/shadowoptions/disablesgroup)
- [static var invertsAlpha: GraphicsContext.ShadowOptions](/documentation/swiftui/graphicscontext/shadowoptions/invertsalpha)
- [static var shadowAbove: GraphicsContext.ShadowOptions](/documentation/swiftui/graphicscontext/shadowoptions/shadowabove)
- [static var shadowOnly: GraphicsContext.ShadowOptions](/documentation/swiftui/graphicscontext/shadowoptions/shadowonly)

#### Applying transforms

- [func scaleBy(x: CGFloat, y: CGFloat)](/documentation/swiftui/graphicscontext/scaleby(x:y:))
- [func rotate(by: Angle)](/documentation/swiftui/graphicscontext/rotate(by:))
- [func translateBy(x: CGFloat, y: CGFloat)](/documentation/swiftui/graphicscontext/translateby(x:y:))
- [func concatenate(CGAffineTransform)](/documentation/swiftui/graphicscontext/concatenate(_:))
- [var transform: CGAffineTransform](/documentation/swiftui/graphicscontext/transform)

#### Drawing with a core graphics context

- [func withCGContext(content: (CGContext) throws -> Void) rethrows](/documentation/swiftui/graphicscontext/withcgcontext(content:))

#### Accessing the environment

- [var environment: EnvironmentValues](/documentation/swiftui/graphicscontext/environment)

#### Instance Methods

- [func draw(_:options:)](/documentation/swiftui/graphicscontext/draw(_:options:))

### Setting a color

- [func tint(_:)](/documentation/swiftui/view/tint(_:))
- [Color](/documentation/swiftui/color)

#### Creating a color

- [init(String, bundle: Bundle?)](/documentation/swiftui/color/init(_:bundle:))
- [init(_:)](/documentation/swiftui/color/init(_:))
- [func resolve(in: EnvironmentValues) -> Color.Resolved](/documentation/swiftui/color/resolve(in:))

#### Creating a color from component values

- [init(hue: Double, saturation: Double, brightness: Double, opacity: Double)](/documentation/swiftui/color/init(hue:saturation:brightness:opacity:))
- [init(Color.RGBColorSpace, white: Double, opacity: Double)](/documentation/swiftui/color/init(_:white:opacity:))
- [init(Color.RGBColorSpace, red: Double, green: Double, blue: Double, opacity: Double)](/documentation/swiftui/color/init(_:red:green:blue:opacity:))
- [Color.RGBColorSpace](/documentation/swiftui/color/rgbcolorspace)

##### Getting color spaces

- [case sRGB](/documentation/swiftui/color/rgbcolorspace/srgb)
- [case sRGBLinear](/documentation/swiftui/color/rgbcolorspace/srgblinear)
- [case displayP3](/documentation/swiftui/color/rgbcolorspace/displayp3)

#### Creating a color from another color

- [init(uiColor: UIColor)](/documentation/swiftui/color/init(uicolor:))
- [init(nsColor: NSColor)](/documentation/swiftui/color/init(nscolor:))
- [init(cgColor: CGColor)](/documentation/swiftui/color/init(cgcolor:))

#### Getting standard colors

- [static let black: Color](/documentation/swiftui/color/black)
- [static let blue: Color](/documentation/swiftui/color/blue)
- [static let brown: Color](/documentation/swiftui/color/brown)
- [static let clear: Color](/documentation/swiftui/color/clear)
- [static let cyan: Color](/documentation/swiftui/color/cyan)
- [static let gray: Color](/documentation/swiftui/color/gray)
- [static let green: Color](/documentation/swiftui/color/green)
- [static let indigo: Color](/documentation/swiftui/color/indigo)
- [static let mint: Color](/documentation/swiftui/color/mint)
- [static let orange: Color](/documentation/swiftui/color/orange)
- [static let pink: Color](/documentation/swiftui/color/pink)
- [static let purple: Color](/documentation/swiftui/color/purple)
- [static let red: Color](/documentation/swiftui/color/red)
- [static let teal: Color](/documentation/swiftui/color/teal)
- [static let white: Color](/documentation/swiftui/color/white)
- [static let yellow: Color](/documentation/swiftui/color/yellow)

#### Getting semantic colors

- [static var accentColor: Color](/documentation/swiftui/color/accentcolor)
- [static let primary: Color](/documentation/swiftui/color/primary)
- [static let secondary: Color](/documentation/swiftui/color/secondary)

#### Modifying a color

- [func opacity(Double) -> Color](/documentation/swiftui/color/opacity(_:))
- [var gradient: AnyGradient](/documentation/swiftui/color/gradient)
- [func mix(with: Color, by: Double, in: Gradient.ColorSpace) -> Color](/documentation/swiftui/color/mix(with:by:in:))
- [func exposureAdjust(Double) -> Color](/documentation/swiftui/color/exposureadjust(_:))
- [func headroom(Double?) -> Color](/documentation/swiftui/color/headroom(_:))

#### Working with high dynamic range (HDR) colors

- [func resolveHDR(in: EnvironmentValues) -> Color.ResolvedHDR](/documentation/swiftui/color/resolvehdr(in:))
- [Color.ResolvedHDR](/documentation/swiftui/color/resolvedhdr)

##### Creating a concrete color value

- [init(Color.Resolved, headroom: Float?)](/documentation/swiftui/color/resolvedhdr/init(_:headroom:))

##### Getting color properties

- [var red: Float](/documentation/swiftui/color/resolvedhdr/red)
- [var green: Float](/documentation/swiftui/color/resolvedhdr/green)
- [var blue: Float](/documentation/swiftui/color/resolvedhdr/blue)
- [var linearRed: Float](/documentation/swiftui/color/resolvedhdr/linearred)
- [var linearGreen: Float](/documentation/swiftui/color/resolvedhdr/lineargreen)
- [var linearBlue: Float](/documentation/swiftui/color/resolvedhdr/linearblue)
- [var opacity: Float](/documentation/swiftui/color/resolvedhdr/opacity)
- [var headroom: Float?](/documentation/swiftui/color/resolvedhdr/headroom)

#### Describing a color

- [var description: String](/documentation/swiftui/color/description)

#### Comparing colors

- [static func == (Color, Color) -> Bool](/documentation/swiftui/color/==(_:_:))
- [func hash(into: inout Hasher)](/documentation/swiftui/color/hash(into:))

#### Deprecated symbols

- [var cgColor: CGColor?](/documentation/swiftui/color/cgcolor)

#### Default Implementations

- [ShapeStyle Implementations](/documentation/swiftui/color/shapestyle-implementations)

##### Structures

- [Color.Resolved](/documentation/swiftui/color/resolved)

###### Initializers

- [init(colorSpace: Color.RGBColorSpace, red: Float, green: Float, blue: Float, opacity: Float)](/documentation/swiftui/color/resolved/init(colorspace:red:green:blue:opacity:))

###### Instance Properties

- [var blue: Float](/documentation/swiftui/color/resolved/blue)
- [var cgColor: CGColor](/documentation/swiftui/color/resolved/cgcolor)
- [var green: Float](/documentation/swiftui/color/resolved/green)
- [var linearBlue: Float](/documentation/swiftui/color/resolved/linearblue)
- [var linearGreen: Float](/documentation/swiftui/color/resolved/lineargreen)
- [var linearRed: Float](/documentation/swiftui/color/resolved/linearred)
- [var opacity: Float](/documentation/swiftui/color/resolved/opacity)
- [var red: Float](/documentation/swiftui/color/resolved/red)
- [Transferable Implementations](/documentation/swiftui/color/transferable-implementations)

##### Type Properties

- [static var transferRepresentation: some TransferRepresentation](/documentation/swiftui/color/transferrepresentation)

### Styling content

- [func border<S>(S, width: CGFloat) -> some View](/documentation/swiftui/view/border(_:width:))
- [func foregroundStyle<S>(S) -> some View](/documentation/swiftui/view/foregroundstyle(_:))
- [func foregroundStyle<S1, S2>(S1, S2) -> some View](/documentation/swiftui/view/foregroundstyle(_:_:))
- [func foregroundStyle<S1, S2, S3>(S1, S2, S3) -> some View](/documentation/swiftui/view/foregroundstyle(_:_:_:))
- [func backgroundStyle<S>(S) -> some View](/documentation/swiftui/view/backgroundstyle(_:))
- [var backgroundStyle: AnyShapeStyle?](/documentation/swiftui/environmentvalues/backgroundstyle)
- [ShapeStyle](/documentation/swiftui/shapestyle)

#### System colors

- [static var black: Color](/documentation/swiftui/shapestyle/black)
- [static var blue: Color](/documentation/swiftui/shapestyle/blue)
- [static var brown: Color](/documentation/swiftui/shapestyle/brown)
- [static var clear: Color](/documentation/swiftui/shapestyle/clear)
- [static var cyan: Color](/documentation/swiftui/shapestyle/cyan)
- [static var gray: Color](/documentation/swiftui/shapestyle/gray)
- [static var green: Color](/documentation/swiftui/shapestyle/green)
- [static var indigo: Color](/documentation/swiftui/shapestyle/indigo)
- [static var mint: Color](/documentation/swiftui/shapestyle/mint)
- [static var orange: Color](/documentation/swiftui/shapestyle/orange)
- [static var pink: Color](/documentation/swiftui/shapestyle/pink)
- [static var purple: Color](/documentation/swiftui/shapestyle/purple)
- [static var red: Color](/documentation/swiftui/shapestyle/red)
- [static var teal: Color](/documentation/swiftui/shapestyle/teal)
- [static var white: Color](/documentation/swiftui/shapestyle/white)
- [static var yellow: Color](/documentation/swiftui/shapestyle/yellow)

#### Angular gradients

- [static angularGradient(_:center:startAngle:endAngle:)](/documentation/swiftui/shapestyle/angulargradient(_:center:startangle:endangle:))
- [static func angularGradient(colors: [Color], center: UnitPoint, startAngle: Angle, endAngle: Angle) -> AngularGradient](/documentation/swiftui/shapestyle/angulargradient(colors:center:startangle:endangle:))
- [static func angularGradient(stops: [Gradient.Stop], center: UnitPoint, startAngle: Angle, endAngle: Angle) -> AngularGradient](/documentation/swiftui/shapestyle/angulargradient(stops:center:startangle:endangle:))

#### Conic gradients

- [static conicGradient(_:center:angle:)](/documentation/swiftui/shapestyle/conicgradient(_:center:angle:))
- [static func conicGradient(colors: [Color], center: UnitPoint, angle: Angle) -> AngularGradient](/documentation/swiftui/shapestyle/conicgradient(colors:center:angle:))
- [static func conicGradient(stops: [Gradient.Stop], center: UnitPoint, angle: Angle) -> AngularGradient](/documentation/swiftui/shapestyle/conicgradient(stops:center:angle:))

#### Elliptical gradients

- [static ellipticalGradient(_:center:startRadiusFraction:endRadiusFraction:)](/documentation/swiftui/shapestyle/ellipticalgradient(_:center:startradiusfraction:endradiusfraction:))
- [static func ellipticalGradient(colors: [Color], center: UnitPoint, startRadiusFraction: CGFloat, endRadiusFraction: CGFloat) -> EllipticalGradient](/documentation/swiftui/shapestyle/ellipticalgradient(colors:center:startradiusfraction:endradiusfraction:))
- [static func ellipticalGradient(stops: [Gradient.Stop], center: UnitPoint, startRadiusFraction: CGFloat, endRadiusFraction: CGFloat) -> EllipticalGradient](/documentation/swiftui/shapestyle/ellipticalgradient(stops:center:startradiusfraction:endradiusfraction:))

#### Linear gradients

- [static linearGradient(_:startPoint:endPoint:)](/documentation/swiftui/shapestyle/lineargradient(_:startpoint:endpoint:))
- [static func linearGradient(colors: [Color], startPoint: UnitPoint, endPoint: UnitPoint) -> LinearGradient](/documentation/swiftui/shapestyle/lineargradient(colors:startpoint:endpoint:))
- [static func linearGradient(stops: [Gradient.Stop], startPoint: UnitPoint, endPoint: UnitPoint) -> LinearGradient](/documentation/swiftui/shapestyle/lineargradient(stops:startpoint:endpoint:))

#### Radial gradients

- [static radialGradient(_:center:startRadius:endRadius:)](/documentation/swiftui/shapestyle/radialgradient(_:center:startradius:endradius:))
- [static func radialGradient(colors: [Color], center: UnitPoint, startRadius: CGFloat, endRadius: CGFloat) -> RadialGradient](/documentation/swiftui/shapestyle/radialgradient(colors:center:startradius:endradius:))
- [static func radialGradient(stops: [Gradient.Stop], center: UnitPoint, startRadius: CGFloat, endRadius: CGFloat) -> RadialGradient](/documentation/swiftui/shapestyle/radialgradient(stops:center:startradius:endradius:))

#### Materials

- [static var ultraThinMaterial: Material](/documentation/swiftui/shapestyle/ultrathinmaterial)
- [static var thinMaterial: Material](/documentation/swiftui/shapestyle/thinmaterial)
- [static var regularMaterial: Material](/documentation/swiftui/shapestyle/regularmaterial)
- [static var thickMaterial: Material](/documentation/swiftui/shapestyle/thickmaterial)
- [static var ultraThickMaterial: Material](/documentation/swiftui/shapestyle/ultrathickmaterial)
- [static var bar: Material](/documentation/swiftui/shapestyle/bar)

#### Image paint styles

- [static func image(Image, sourceRect: CGRect, scale: CGFloat) -> ImagePaint](/documentation/swiftui/shapestyle/image(_:sourcerect:scale:))

#### Hierarchical styles

- [var secondary: some ShapeStyle](/documentation/swiftui/shapestyle/secondary-swift.property)
- [var tertiary: some ShapeStyle](/documentation/swiftui/shapestyle/tertiary-swift.property)
- [var quaternary: some ShapeStyle](/documentation/swiftui/shapestyle/quaternary-swift.property)
- [var quinary: some ShapeStyle](/documentation/swiftui/shapestyle/quinary-swift.property)
- [static var primary: HierarchicalShapeStyle](/documentation/swiftui/shapestyle/primary)
- [static var secondary: HierarchicalShapeStyle](/documentation/swiftui/shapestyle/secondary-swift.type.property)
- [static var tertiary: HierarchicalShapeStyle](/documentation/swiftui/shapestyle/tertiary-swift.type.property)
- [static var quaternary: HierarchicalShapeStyle](/documentation/swiftui/shapestyle/quaternary-swift.type.property)
- [static var quinary: HierarchicalShapeStyle](/documentation/swiftui/shapestyle/quinary-swift.type.property)

#### Semantic styles

- [static var foreground: ForegroundStyle](/documentation/swiftui/shapestyle/foreground)
- [static var background: BackgroundStyle](/documentation/swiftui/shapestyle/background)
- [static var selection: SelectionShapeStyle](/documentation/swiftui/shapestyle/selection)
- [static var separator: SeparatorShapeStyle](/documentation/swiftui/shapestyle/separator)
- [static var tint: TintShapeStyle](/documentation/swiftui/shapestyle/tint)
- [static var placeholder: PlaceholderTextShapeStyle](/documentation/swiftui/shapestyle/placeholder)
- [static var link: LinkShapeStyle](/documentation/swiftui/shapestyle/link)
- [static var fill: FillShapeStyle](/documentation/swiftui/shapestyle/fill)
- [static var windowBackground: WindowBackgroundShapeStyle](/documentation/swiftui/shapestyle/windowbackground)

#### Modifying a shape style

- [func blendMode(BlendMode) -> some ShapeStyle](/documentation/swiftui/shapestyle/blendmode(_:)-swift.method)
- [func opacity(Double) -> some ShapeStyle](/documentation/swiftui/shapestyle/opacity(_:)-swift.method)
- [func shadow(ShadowStyle) -> some ShapeStyle](/documentation/swiftui/shapestyle/shadow(_:)-swift.method)

#### Configuring the default shape style

- [static func blendMode(BlendMode) -> some ShapeStyle](/documentation/swiftui/shapestyle/blendmode(_:)-swift.type.method)
- [static func opacity(Double) -> some ShapeStyle](/documentation/swiftui/shapestyle/opacity(_:)-swift.type.method)
- [static func shadow(ShadowStyle) -> some ShapeStyle](/documentation/swiftui/shapestyle/shadow(_:)-swift.type.method)

#### Mapping to absolute coordinates

- [func `in`(CGRect) -> some ShapeStyle](/documentation/swiftui/shapestyle/in(_:))

#### Resolving a shape style in an environment

- [func resolve(in: EnvironmentValues) -> Self.Resolved](/documentation/swiftui/shapestyle/resolve(in:))
- [Resolved](/documentation/swiftui/shapestyle/resolved)

#### Using a shape style as a view

- [var body: _ShapeView<Rectangle, Self>](/documentation/swiftui/shapestyle/body)

#### Supporting types

- [AngularGradient](/documentation/swiftui/angulargradient)

##### Creating a full rotation angular gradient

- [init(gradient: Gradient, center: UnitPoint, angle: Angle)](/documentation/swiftui/angulargradient/init(gradient:center:angle:))
- [init(colors: [Color], center: UnitPoint, angle: Angle)](/documentation/swiftui/angulargradient/init(colors:center:angle:))
- [init(stops: [Gradient.Stop], center: UnitPoint, angle: Angle)](/documentation/swiftui/angulargradient/init(stops:center:angle:))

##### Creating a partial rotation angular gradient

- [init(gradient: Gradient, center: UnitPoint, startAngle: Angle, endAngle: Angle)](/documentation/swiftui/angulargradient/init(gradient:center:startangle:endangle:))
- [init(colors: [Color], center: UnitPoint, startAngle: Angle, endAngle: Angle)](/documentation/swiftui/angulargradient/init(colors:center:startangle:endangle:))
- [init(stops: [Gradient.Stop], center: UnitPoint, startAngle: Angle, endAngle: Angle)](/documentation/swiftui/angulargradient/init(stops:center:startangle:endangle:))
- [EllipticalGradient](/documentation/swiftui/ellipticalgradient)

##### Creating an elliptical gradient

- [init(gradient: Gradient, center: UnitPoint, startRadiusFraction: CGFloat, endRadiusFraction: CGFloat)](/documentation/swiftui/ellipticalgradient/init(gradient:center:startradiusfraction:endradiusfraction:))
- [init(colors: [Color], center: UnitPoint, startRadiusFraction: CGFloat, endRadiusFraction: CGFloat)](/documentation/swiftui/ellipticalgradient/init(colors:center:startradiusfraction:endradiusfraction:))
- [init(stops: [Gradient.Stop], center: UnitPoint, startRadiusFraction: CGFloat, endRadiusFraction: CGFloat)](/documentation/swiftui/ellipticalgradient/init(stops:center:startradiusfraction:endradiusfraction:))
- [LinearGradient](/documentation/swiftui/lineargradient)

##### Creating a linear gradient

- [init(gradient: Gradient, startPoint: UnitPoint, endPoint: UnitPoint)](/documentation/swiftui/lineargradient/init(gradient:startpoint:endpoint:))
- [init(colors: [Color], startPoint: UnitPoint, endPoint: UnitPoint)](/documentation/swiftui/lineargradient/init(colors:startpoint:endpoint:))
- [init(stops: [Gradient.Stop], startPoint: UnitPoint, endPoint: UnitPoint)](/documentation/swiftui/lineargradient/init(stops:startpoint:endpoint:))
- [RadialGradient](/documentation/swiftui/radialgradient)

##### Creating a radial gradient

- [init(gradient: Gradient, center: UnitPoint, startRadius: CGFloat, endRadius: CGFloat)](/documentation/swiftui/radialgradient/init(gradient:center:startradius:endradius:))
- [init(colors: [Color], center: UnitPoint, startRadius: CGFloat, endRadius: CGFloat)](/documentation/swiftui/radialgradient/init(colors:center:startradius:endradius:))
- [init(stops: [Gradient.Stop], center: UnitPoint, startRadius: CGFloat, endRadius: CGFloat)](/documentation/swiftui/radialgradient/init(stops:center:startradius:endradius:))
- [Material](/documentation/swiftui/material)

##### Getting material types

- [static let ultraThin: Material](/documentation/swiftui/material/ultrathin)
- [static let thin: Material](/documentation/swiftui/material/thin)
- [static let regular: Material](/documentation/swiftui/material/regular)
- [static let thick: Material](/documentation/swiftui/material/thick)
- [static let ultraThick: Material](/documentation/swiftui/material/ultrathick)
- [static let bar: Material](/documentation/swiftui/material/bar)

##### Instance Methods

- [func materialActiveAppearance(MaterialActiveAppearance) -> Material](/documentation/swiftui/material/materialactiveappearance(_:))
- [ImagePaint](/documentation/swiftui/imagepaint)

##### Creating an image paint style

- [init(image: Image, sourceRect: CGRect, scale: CGFloat)](/documentation/swiftui/imagepaint/init(image:sourcerect:scale:))

##### Configuring the image paint style

- [var image: Image](/documentation/swiftui/imagepaint/image)
- [var scale: CGFloat](/documentation/swiftui/imagepaint/scale)
- [var sourceRect: CGRect](/documentation/swiftui/imagepaint/sourcerect)
- [HierarchicalShapeStyle](/documentation/swiftui/hierarchicalshapestyle)

##### Getting hierarchical shape styles

- [static let primary: HierarchicalShapeStyle](/documentation/swiftui/hierarchicalshapestyle/primary)
- [static let secondary: HierarchicalShapeStyle](/documentation/swiftui/hierarchicalshapestyle/secondary)
- [static let tertiary: HierarchicalShapeStyle](/documentation/swiftui/hierarchicalshapestyle/tertiary)
- [static let quaternary: HierarchicalShapeStyle](/documentation/swiftui/hierarchicalshapestyle/quaternary)

##### Type Properties

- [static let quinary: HierarchicalShapeStyle](/documentation/swiftui/hierarchicalshapestyle/quinary)
- [HierarchicalShapeStyleModifier](/documentation/swiftui/hierarchicalshapestylemodifier)
- [ForegroundStyle](/documentation/swiftui/foregroundstyle)

##### Creating a foreground style

- [init()](/documentation/swiftui/foregroundstyle/init())
- [BackgroundStyle](/documentation/swiftui/backgroundstyle)

##### Creating a background style

- [init()](/documentation/swiftui/backgroundstyle/init())
- [SelectionShapeStyle](/documentation/swiftui/selectionshapestyle)

##### Creating a selection shape style

- [init()](/documentation/swiftui/selectionshapestyle/init())
- [SeparatorShapeStyle](/documentation/swiftui/separatorshapestyle)

##### Creating a separator shape style

- [init()](/documentation/swiftui/separatorshapestyle/init())
- [TintShapeStyle](/documentation/swiftui/tintshapestyle)

##### Creating a tint shape style

- [init()](/documentation/swiftui/tintshapestyle/init())
- [FillShapeStyle](/documentation/swiftui/fillshapestyle)

##### Creating the style

- [init()](/documentation/swiftui/fillshapestyle/init())
- [LinkShapeStyle](/documentation/swiftui/linkshapestyle)

##### Creating the style

- [init()](/documentation/swiftui/linkshapestyle/init())
- [PlaceholderTextShapeStyle](/documentation/swiftui/placeholdertextshapestyle)

##### Creating the style

- [init()](/documentation/swiftui/placeholdertextshapestyle/init())
- [WindowBackgroundShapeStyle](/documentation/swiftui/windowbackgroundshapestyle)

##### Creating the style

- [init()](/documentation/swiftui/windowbackgroundshapestyle/init())

#### Instance Methods

- [func materialActiveAppearance(MaterialActiveAppearance) -> some ShapeStyle](/documentation/swiftui/shapestyle/materialactiveappearance(_:))
- [AnyShapeStyle](/documentation/swiftui/anyshapestyle)

#### Creating a shape style

- [init<S>(S)](/documentation/swiftui/anyshapestyle/init(_:))
- [Gradient](/documentation/swiftui/gradient)

#### Creating a gradient from colors

- [init(colors: [Color])](/documentation/swiftui/gradient/init(colors:))

#### Creating a gradient from stops

- [init(stops: [Gradient.Stop])](/documentation/swiftui/gradient/init(stops:))
- [var stops: [Gradient.Stop]](/documentation/swiftui/gradient/stops)
- [Gradient.Stop](/documentation/swiftui/gradient/stop)

##### Creating a gradient stop

- [init(color: Color, location: CGFloat)](/documentation/swiftui/gradient/stop/init(color:location:))

##### Configuring a gradient stop

- [var color: Color](/documentation/swiftui/gradient/stop/color)
- [var location: CGFloat](/documentation/swiftui/gradient/stop/location)

#### Working with color spaces

- [func colorSpace(Gradient.ColorSpace) -> AnyGradient](/documentation/swiftui/gradient/colorspace(_:))
- [Gradient.ColorSpace](/documentation/swiftui/gradient/colorspace)

##### Getting an interpolation method

- [static let device: Gradient.ColorSpace](/documentation/swiftui/gradient/colorspace/device)
- [static let perceptual: Gradient.ColorSpace](/documentation/swiftui/gradient/colorspace/perceptual)
- [MeshGradient](/documentation/swiftui/meshgradient)

#### Structures

- [MeshGradient.BezierPoint](/documentation/swiftui/meshgradient/bezierpoint)

##### Initializers

- [init(position: SIMD2<Float>, leadingControlPoint: SIMD2<Float>, topControlPoint: SIMD2<Float>, trailingControlPoint: SIMD2<Float>, bottomControlPoint: SIMD2<Float>)](/documentation/swiftui/meshgradient/bezierpoint/init(position:leadingcontrolpoint:topcontrolpoint:trailingcontrolpoint:bottomcontrolpoint:))

##### Instance Properties

- [var bottomControlPoint: SIMD2<Float>](/documentation/swiftui/meshgradient/bezierpoint/bottomcontrolpoint)
- [var leadingControlPoint: SIMD2<Float>](/documentation/swiftui/meshgradient/bezierpoint/leadingcontrolpoint)
- [var position: SIMD2<Float>](/documentation/swiftui/meshgradient/bezierpoint/position)
- [var topControlPoint: SIMD2<Float>](/documentation/swiftui/meshgradient/bezierpoint/topcontrolpoint)
- [var trailingControlPoint: SIMD2<Float>](/documentation/swiftui/meshgradient/bezierpoint/trailingcontrolpoint)

#### Initializers

- [init(width: Int, height: Int, bezierPoints: [MeshGradient.BezierPoint], colors: [Color], background: Color, smoothsColors: Bool, colorSpace: Gradient.ColorSpace)](/documentation/swiftui/meshgradient/init(width:height:bezierpoints:colors:background:smoothscolors:colorspace:))
- [init(width: Int, height: Int, bezierPoints: [MeshGradient.BezierPoint], resolvedColors: [Color.Resolved], background: Color, smoothsColors: Bool, colorSpace: Gradient.ColorSpace)](/documentation/swiftui/meshgradient/init(width:height:bezierpoints:resolvedcolors:background:smoothscolors:colorspace:))
- [init(width: Int, height: Int, locations: MeshGradient.Locations, colors: MeshGradient.Colors, background: Color, smoothsColors: Bool, colorSpace: Gradient.ColorSpace)](/documentation/swiftui/meshgradient/init(width:height:locations:colors:background:smoothscolors:colorspace:))
- [init(width: Int, height: Int, points: [SIMD2<Float>], colors: [Color], background: Color, smoothsColors: Bool, colorSpace: Gradient.ColorSpace)](/documentation/swiftui/meshgradient/init(width:height:points:colors:background:smoothscolors:colorspace:))
- [init(width: Int, height: Int, points: [SIMD2<Float>], resolvedColors: [Color.Resolved], background: Color, smoothsColors: Bool, colorSpace: Gradient.ColorSpace)](/documentation/swiftui/meshgradient/init(width:height:points:resolvedcolors:background:smoothscolors:colorspace:))

#### Instance Properties

- [var background: Color](/documentation/swiftui/meshgradient/background)
- [var colorSpace: Gradient.ColorSpace](/documentation/swiftui/meshgradient/colorspace)
- [var colors: MeshGradient.Colors](/documentation/swiftui/meshgradient/colors-swift.property)
- [var height: Int](/documentation/swiftui/meshgradient/height)
- [var locations: MeshGradient.Locations](/documentation/swiftui/meshgradient/locations-swift.property)
- [var smoothsColors: Bool](/documentation/swiftui/meshgradient/smoothscolors)
- [var width: Int](/documentation/swiftui/meshgradient/width)

#### Enumerations

- [MeshGradient.Colors](/documentation/swiftui/meshgradient/colors-swift.enum)

##### Enumeration Cases

- [case colors([Color])](/documentation/swiftui/meshgradient/colors-swift.enum/colors(_:))
- [case resolvedColors([Color.Resolved])](/documentation/swiftui/meshgradient/colors-swift.enum/resolvedcolors(_:))
- [MeshGradient.Locations](/documentation/swiftui/meshgradient/locations-swift.enum)

##### Enumeration Cases

- [case bezierPoints([MeshGradient.BezierPoint])](/documentation/swiftui/meshgradient/locations-swift.enum/bezierpoints(_:))
- [case points([SIMD2<Float>])](/documentation/swiftui/meshgradient/locations-swift.enum/points(_:))
- [AnyGradient](/documentation/swiftui/anygradient)

#### Creating a gradient

- [init(Gradient)](/documentation/swiftui/anygradient/init(_:))

#### Working with color spaces

- [func colorSpace(Gradient.ColorSpace) -> AnyGradient](/documentation/swiftui/anygradient/colorspace(_:))
- [ShadowStyle](/documentation/swiftui/shadowstyle)

#### Getting shadow styles

- [static func drop(color: Color, radius: CGFloat, x: CGFloat, y: CGFloat) -> ShadowStyle](/documentation/swiftui/shadowstyle/drop(color:radius:x:y:))
- [static func inner(color: Color, radius: CGFloat, x: CGFloat, y: CGFloat) -> ShadowStyle](/documentation/swiftui/shadowstyle/inner(color:radius:x:y:))
- [Glass](/documentation/swiftui/glass)

#### Instance Methods

- [func interactive(Bool) -> Glass](/documentation/swiftui/glass/interactive(_:))
- [func tint(Color?) -> Glass](/documentation/swiftui/glass/tint(_:))

#### Type Properties

- [static var clear: Glass](/documentation/swiftui/glass/clear)
- [static var identity: Glass](/documentation/swiftui/glass/identity)
- [static var regular: Glass](/documentation/swiftui/glass/regular)

### Transforming colors

- [func brightness(Double) -> some View](/documentation/swiftui/view/brightness(_:))
- [func contrast(Double) -> some View](/documentation/swiftui/view/contrast(_:))
- [func colorInvert() -> some View](/documentation/swiftui/view/colorinvert())
- [func colorMultiply(Color) -> some View](/documentation/swiftui/view/colormultiply(_:))
- [func saturation(Double) -> some View](/documentation/swiftui/view/saturation(_:))
- [func grayscale(Double) -> some View](/documentation/swiftui/view/grayscale(_:))
- [func hueRotation(Angle) -> some View](/documentation/swiftui/view/huerotation(_:))
- [func luminanceToAlpha() -> some View](/documentation/swiftui/view/luminancetoalpha())
- [func materialActiveAppearance(MaterialActiveAppearance) -> some View](/documentation/swiftui/view/materialactiveappearance(_:))
- [var materialActiveAppearance: MaterialActiveAppearance](/documentation/swiftui/environmentvalues/materialactiveappearance)
- [MaterialActiveAppearance](/documentation/swiftui/materialactiveappearance)

#### Type Properties

- [static let active: MaterialActiveAppearance](/documentation/swiftui/materialactiveappearance/active)
- [static let automatic: MaterialActiveAppearance](/documentation/swiftui/materialactiveappearance/automatic)
- [static let inactive: MaterialActiveAppearance](/documentation/swiftui/materialactiveappearance/inactive)
- [static let matchWindow: MaterialActiveAppearance](/documentation/swiftui/materialactiveappearance/matchwindow)

### Scaling, rotating, or transforming a view

- [func scaledToFill() -> some View](/documentation/swiftui/view/scaledtofill())
- [func scaledToFit() -> some View](/documentation/swiftui/view/scaledtofit())
- [func scaleEffect(_:anchor:)](/documentation/swiftui/view/scaleeffect(_:anchor:))
- [func scaleEffect(_:anchor:)](/documentation/swiftui/view/scaleeffect(_:anchor:))
- [func scaleEffect(x: CGFloat, y: CGFloat, anchor: UnitPoint) -> some View](/documentation/swiftui/view/scaleeffect(x:y:anchor:))
- [func scaleEffect(x: CGFloat, y: CGFloat, z: CGFloat, anchor: UnitPoint3D) -> some View](/documentation/swiftui/view/scaleeffect(x:y:z:anchor:))
- [func aspectRatio(_:contentMode:)](/documentation/swiftui/view/aspectratio(_:contentmode:))
- [func rotationEffect(Angle, anchor: UnitPoint) -> some View](/documentation/swiftui/view/rotationeffect(_:anchor:))
- [func rotation3DEffect(Angle, axis: (x: CGFloat, y: CGFloat, z: CGFloat), anchor: UnitPoint, anchorZ: CGFloat, perspective: CGFloat) -> some View](/documentation/swiftui/view/rotation3deffect(_:axis:anchor:anchorz:perspective:))
- [func perspectiveRotationEffect(Angle, axis: (x: CGFloat, y: CGFloat, z: CGFloat), anchor: UnitPoint, anchorZ: CGFloat, perspective: CGFloat) -> some View](/documentation/swiftui/view/perspectiverotationeffect(_:axis:anchor:anchorz:perspective:))
- [func rotation3DEffect(Rotation3D, anchor: UnitPoint3D) -> some View](/documentation/swiftui/view/rotation3deffect(_:anchor:))
- [func rotation3DEffect(_:axis:anchor:)](/documentation/swiftui/view/rotation3deffect(_:axis:anchor:))
- [func transformEffect(CGAffineTransform) -> some View](/documentation/swiftui/view/transformeffect(_:))
- [func transform3DEffect(AffineTransform3D) -> some View](/documentation/swiftui/view/transform3deffect(_:))
- [func projectionEffect(ProjectionTransform) -> some View](/documentation/swiftui/view/projectioneffect(_:))
- [ProjectionTransform](/documentation/swiftui/projectiontransform)

#### Creating a transform

- [init()](/documentation/swiftui/projectiontransform/init())
- [init(_:)](/documentation/swiftui/projectiontransform/init(_:))

#### Getting transform characteristics

- [var isAffine: Bool](/documentation/swiftui/projectiontransform/isaffine)
- [var isIdentity: Bool](/documentation/swiftui/projectiontransform/isidentity)

#### Manipulating transforms

- [func invert() -> Bool](/documentation/swiftui/projectiontransform/invert())
- [func inverted() -> ProjectionTransform](/documentation/swiftui/projectiontransform/inverted())
- [func concatenating(ProjectionTransform) -> ProjectionTransform](/documentation/swiftui/projectiontransform/concatenating(_:))

#### Accessing the transform’s coefficients

- [var m11: CGFloat](/documentation/swiftui/projectiontransform/m11)
- [var m12: CGFloat](/documentation/swiftui/projectiontransform/m12)
- [var m13: CGFloat](/documentation/swiftui/projectiontransform/m13)
- [var m21: CGFloat](/documentation/swiftui/projectiontransform/m21)
- [var m22: CGFloat](/documentation/swiftui/projectiontransform/m22)
- [var m23: CGFloat](/documentation/swiftui/projectiontransform/m23)
- [var m31: CGFloat](/documentation/swiftui/projectiontransform/m31)
- [var m32: CGFloat](/documentation/swiftui/projectiontransform/m32)
- [var m33: CGFloat](/documentation/swiftui/projectiontransform/m33)
- [ContentMode](/documentation/swiftui/contentmode)

#### Getting content modes

- [case fill](/documentation/swiftui/contentmode/fill)
- [case fit](/documentation/swiftui/contentmode/fit)

### Masking and clipping

- [func mask<Mask>(alignment: Alignment, () -> Mask) -> some View](/documentation/swiftui/view/mask(alignment:_:))
- [func clipped(antialiased: Bool) -> some View](/documentation/swiftui/view/clipped(antialiased:))
- [func clipShape<S>(S, style: FillStyle) -> some View](/documentation/swiftui/view/clipshape(_:style:))

### Applying blur and shadows

- [func blur(radius: CGFloat, opaque: Bool) -> some View](/documentation/swiftui/view/blur(radius:opaque:))
- [func shadow(color: Color, radius: CGFloat, x: CGFloat, y: CGFloat) -> some View](/documentation/swiftui/view/shadow(color:radius:x:y:))
- [ColorMatrix](/documentation/swiftui/colormatrix)

#### Creating an identity matrix

- [init()](/documentation/swiftui/colormatrix/init())

#### First column

- [var r1: Float](/documentation/swiftui/colormatrix/r1)
- [var g1: Float](/documentation/swiftui/colormatrix/g1)
- [var b1: Float](/documentation/swiftui/colormatrix/b1)
- [var a1: Float](/documentation/swiftui/colormatrix/a1)

#### Second column

- [var r2: Float](/documentation/swiftui/colormatrix/r2)
- [var g2: Float](/documentation/swiftui/colormatrix/g2)
- [var b2: Float](/documentation/swiftui/colormatrix/b2)
- [var a2: Float](/documentation/swiftui/colormatrix/a2)

#### Third column

- [var r3: Float](/documentation/swiftui/colormatrix/r3)
- [var g3: Float](/documentation/swiftui/colormatrix/g3)
- [var b3: Float](/documentation/swiftui/colormatrix/b3)
- [var a3: Float](/documentation/swiftui/colormatrix/a3)

#### Fourth column

- [var r4: Float](/documentation/swiftui/colormatrix/r4)
- [var g4: Float](/documentation/swiftui/colormatrix/g4)
- [var b4: Float](/documentation/swiftui/colormatrix/b4)
- [var a4: Float](/documentation/swiftui/colormatrix/a4)

#### Fifth column

- [var r5: Float](/documentation/swiftui/colormatrix/r5)
- [var g5: Float](/documentation/swiftui/colormatrix/g5)
- [var b5: Float](/documentation/swiftui/colormatrix/b5)
- [var a5: Float](/documentation/swiftui/colormatrix/a5)

### Applying effects based on geometry

- [func visualEffect((EmptyVisualEffect, GeometryProxy) -> some VisualEffect) -> some View](/documentation/swiftui/view/visualeffect(_:))
- [func visualEffect3D((EmptyVisualEffect, GeometryProxy3D) -> some VisualEffect) -> some View](/documentation/swiftui/view/visualeffect3d(_:))
- [VisualEffect](/documentation/swiftui/visualeffect)

#### Adjusting Color

- [func brightness(Double) -> some VisualEffect](/documentation/swiftui/visualeffect/brightness(_:))
- [func colorEffect(Shader, isEnabled: Bool) -> some VisualEffect](/documentation/swiftui/visualeffect/coloreffect(_:isenabled:))
- [func contrast(Double) -> some VisualEffect](/documentation/swiftui/visualeffect/contrast(_:))
- [func grayscale(Double) -> some VisualEffect](/documentation/swiftui/visualeffect/grayscale(_:))
- [func hueRotation(Angle) -> some VisualEffect](/documentation/swiftui/visualeffect/huerotation(_:))
- [func saturation(Double) -> some VisualEffect](/documentation/swiftui/visualeffect/saturation(_:))
- [func opacity(Double) -> some VisualEffect](/documentation/swiftui/visualeffect/opacity(_:))

#### Scaling

- [func scaleEffect(_:anchor:)](/documentation/swiftui/visualeffect/scaleeffect(_:anchor:))
- [func scaleEffect(x: CGFloat, y: CGFloat, anchor: UnitPoint) -> some VisualEffect](/documentation/swiftui/visualeffect/scaleeffect(x:y:anchor:))
- [func scaleEffect(x: CGFloat, y: CGFloat, z: CGFloat, anchor: UnitPoint3D) -> some VisualEffect](/documentation/swiftui/visualeffect/scaleeffect(x:y:z:anchor:))

#### Rotating

- [func rotationEffect(Angle, anchor: UnitPoint) -> some VisualEffect](/documentation/swiftui/visualeffect/rotationeffect(_:anchor:))
- [func rotation3DEffect(Angle, axis: (x: CGFloat, y: CGFloat, z: CGFloat), anchor: UnitPoint, anchorZ: CGFloat, perspective: CGFloat) -> some VisualEffect](/documentation/swiftui/visualeffect/rotation3deffect(_:axis:anchor:anchorz:perspective:))
- [func perspectiveRotationEffect(Angle, axis: (x: CGFloat, y: CGFloat, z: CGFloat), anchor: UnitPoint3D, perspective: CGFloat) -> some VisualEffect](/documentation/swiftui/visualeffect/perspectiverotationeffect(_:axis:anchor:perspective:))
- [func rotation3DEffect(Rotation3D, anchor: UnitPoint3D) -> some VisualEffect](/documentation/swiftui/visualeffect/rotation3deffect(_:anchor:))
- [func rotation3DEffect(_:axis:anchor:)](/documentation/swiftui/visualeffect/rotation3deffect(_:axis:anchor:))

#### Translating

- [func offset(CGSize) -> some VisualEffect](/documentation/swiftui/visualeffect/offset(_:))
- [func offset(x: CGFloat, y: CGFloat) -> some VisualEffect](/documentation/swiftui/visualeffect/offset(x:y:))
- [func offset(z: CGFloat) -> some VisualEffect](/documentation/swiftui/visualeffect/offset(z:))

#### Applying a transform

- [func transform3DEffect(AffineTransform3D) -> some VisualEffect](/documentation/swiftui/visualeffect/transform3deffect(_:))
- [func transformEffect(_:)](/documentation/swiftui/visualeffect/transformeffect(_:))

#### Applying other effects

- [func blur(radius: CGFloat, opaque: Bool) -> some VisualEffect](/documentation/swiftui/visualeffect/blur(radius:opaque:))
- [func distortionEffect(Shader, maxSampleOffset: CGSize, isEnabled: Bool) -> some VisualEffect](/documentation/swiftui/visualeffect/distortioneffect(_:maxsampleoffset:isenabled:))
- [func layerEffect(Shader, maxSampleOffset: CGSize, isEnabled: Bool) -> some VisualEffect](/documentation/swiftui/visualeffect/layereffect(_:maxsampleoffset:isenabled:))

#### Instance Methods

- [func blendMode(BlendMode) -> some VisualEffect](/documentation/swiftui/visualeffect/blendmode(_:))
- [EmptyVisualEffect](/documentation/swiftui/emptyvisualeffect)

#### Creating an empty visual effect

- [init()](/documentation/swiftui/emptyvisualeffect/init())

### Compositing views

- [func blendMode(BlendMode) -> some View](/documentation/swiftui/view/blendmode(_:))
- [func compositingGroup() -> some View](/documentation/swiftui/view/compositinggroup())
- [func drawingGroup(opaque: Bool, colorMode: ColorRenderingMode) -> some View](/documentation/swiftui/view/drawinggroup(opaque:colormode:))
- [BlendMode](/documentation/swiftui/blendmode)

#### Getting the default

- [case normal](/documentation/swiftui/blendmode/normal)

#### Darkening

- [case darken](/documentation/swiftui/blendmode/darken)
- [case multiply](/documentation/swiftui/blendmode/multiply)
- [case colorBurn](/documentation/swiftui/blendmode/colorburn)
- [case plusDarker](/documentation/swiftui/blendmode/plusdarker)

#### Lightening

- [case lighten](/documentation/swiftui/blendmode/lighten)
- [case screen](/documentation/swiftui/blendmode/screen)
- [case colorDodge](/documentation/swiftui/blendmode/colordodge)
- [case plusLighter](/documentation/swiftui/blendmode/pluslighter)

#### Adding contrast

- [case overlay](/documentation/swiftui/blendmode/overlay)
- [case softLight](/documentation/swiftui/blendmode/softlight)
- [case hardLight](/documentation/swiftui/blendmode/hardlight)

#### Inverting

- [case difference](/documentation/swiftui/blendmode/difference)
- [case exclusion](/documentation/swiftui/blendmode/exclusion)

#### Mixing color components

- [case hue](/documentation/swiftui/blendmode/hue)
- [case saturation](/documentation/swiftui/blendmode/saturation)
- [case color](/documentation/swiftui/blendmode/color)
- [case luminosity](/documentation/swiftui/blendmode/luminosity)

#### Accessing porter-duff modes

- [case sourceAtop](/documentation/swiftui/blendmode/sourceatop)
- [case destinationOver](/documentation/swiftui/blendmode/destinationover)
- [case destinationOut](/documentation/swiftui/blendmode/destinationout)
- [ColorRenderingMode](/documentation/swiftui/colorrenderingmode)

#### Getting rendering modes

- [case extendedLinear](/documentation/swiftui/colorrenderingmode/extendedlinear)
- [case linear](/documentation/swiftui/colorrenderingmode/linear)
- [case nonLinear](/documentation/swiftui/colorrenderingmode/nonlinear)
- [CompositorContent](/documentation/swiftui/compositorcontent)

#### Associated Types

- [Body](/documentation/swiftui/compositorcontent/body-swift.associatedtype)

#### Instance Properties

- [var body: Self.Body](/documentation/swiftui/compositorcontent/body-swift.property)

#### Instance Methods

- [func contentCaptureProtected(Bool) -> some CompositorContent](/documentation/swiftui/compositorcontent/contentcaptureprotected(_:))
- [func onAppear(perform: (() -> Void)?) -> some CompositorContent](/documentation/swiftui/compositorcontent/onappear(perform:))
- [func onChange(of:initial:_:)](/documentation/swiftui/compositorcontent/onchange(of:initial:_:))
- [func onDisappear(perform: (() -> Void)?) -> some CompositorContent](/documentation/swiftui/compositorcontent/ondisappear(perform:))
- [func onImmersionChange(initial: Bool, (ImmersionChangeContext, ImmersionChangeContext) -> Void) -> some CompositorContent](/documentation/swiftui/compositorcontent/onimmersionchange(initial:_:))
- [func onWorldRecenter(action:)](/documentation/swiftui/compositorcontent/onworldrecenter(action:))
- [func persistentSystemOverlays(Visibility) -> some CompositorContent](/documentation/swiftui/compositorcontent/persistentsystemoverlays(_:))
- [func preferredSurroundingsEffect(SurroundingsEffect?) -> some CompositorContent](/documentation/swiftui/compositorcontent/preferredsurroundingseffect(_:))
- [func upperLimbVisibility(Visibility) -> some CompositorContent](/documentation/swiftui/compositorcontent/upperlimbvisibility(_:))
- [CompositorContentBuilder](/documentation/swiftui/compositorcontentbuilder)

#### Structures

- [CompositorContentBuilder.Content](/documentation/swiftui/compositorcontentbuilder/content)

#### Type Methods

- [static func buildBlock<C>(C) -> C](/documentation/swiftui/compositorcontentbuilder/buildblock(_:))
- [static buildEither(first:)](/documentation/swiftui/compositorcontentbuilder/buildeither(first:))
- [static func buildEither<F>(second: F) -> _ConditionalContent<_LimitedAvailabilityCompositorContent, F>](/documentation/swiftui/compositorcontentbuilder/buildeither(second:))
- [static func buildExpression<C>(C) -> C](/documentation/swiftui/compositorcontentbuilder/buildexpression(_:))
- [static func buildLimitedAvailability(some CompositorContent) -> _LimitedAvailabilityCompositorContent](/documentation/swiftui/compositorcontentbuilder/buildlimitedavailability(_:))
- [AnyCompositorContent](/documentation/swiftui/anycompositorcontent)

#### Initializers

- [init<T>(T)](/documentation/swiftui/anycompositorcontent/init(_:))
- [init<T>(erasing: T)](/documentation/swiftui/anycompositorcontent/init(erasing:))

### Measuring a view

- [GeometryReader](/documentation/swiftui/geometryreader)

#### Creating a geometry reader

- [init(content: (GeometryProxy) -> Content)](/documentation/swiftui/geometryreader/init(content:))
- [var content: (GeometryProxy) -> Content](/documentation/swiftui/geometryreader/content)
- [GeometryReader3D](/documentation/swiftui/geometryreader3d)

#### Creating a geometry reader

- [init(content: (GeometryProxy3D) -> Content)](/documentation/swiftui/geometryreader3d/init(content:))
- [var content: (GeometryProxy3D) -> Content](/documentation/swiftui/geometryreader3d/content)
- [GeometryProxy](/documentation/swiftui/geometryproxy)

#### Accessing geometry characteristics

- [func bounds(of: NamedCoordinateSpace) -> CGRect?](/documentation/swiftui/geometryproxy/bounds(of:))
- [func frame(in:)](/documentation/swiftui/geometryproxy/frame(in:))
- [var size: CGSize](/documentation/swiftui/geometryproxy/size)
- [var safeAreaInsets: EdgeInsets](/documentation/swiftui/geometryproxy/safeareainsets)
- [subscript<T>(Anchor<T>) -> T](/documentation/swiftui/geometryproxy/subscript(_:))
- [func transform(in: some CoordinateSpaceProtocol) -> AffineTransform3D?](/documentation/swiftui/geometryproxy/transform(in:))

#### Instance Properties

- [var containerCornerInsets: RectangleCornerInsets](/documentation/swiftui/geometryproxy/containercornerinsets)
- [GeometryProxy3D](/documentation/swiftui/geometryproxy3d)

#### Accessing geometry characteristics

- [func frame(in: some CoordinateSpaceProtocol) -> Rect3D](/documentation/swiftui/geometryproxy3d/frame(in:))
- [var size: Size3D](/documentation/swiftui/geometryproxy3d/size)
- [var safeAreaInsets: EdgeInsets3D](/documentation/swiftui/geometryproxy3d/safeareainsets)
- [subscript<T>(Anchor<T>) -> T](/documentation/swiftui/geometryproxy3d/subscript(_:))
- [func transform(in: some CoordinateSpaceProtocol) -> AffineTransform3D?](/documentation/swiftui/geometryproxy3d/transform(in:))

#### Instance Methods

- [func coordinateSpace3D(for: any CoordinateSpaceProtocol) -> GeometryProxyCoordinateSpace3D](/documentation/swiftui/geometryproxy3d/coordinatespace3d(for:))
- [func coordinateSpace(NamedCoordinateSpace) -> some View](/documentation/swiftui/view/coordinatespace(_:))
- [CoordinateSpace](/documentation/swiftui/coordinatespace)

#### Getting coordinate spaces

- [case global](/documentation/swiftui/coordinatespace/global)
- [case local](/documentation/swiftui/coordinatespace/local)
- [case named(AnyHashable)](/documentation/swiftui/coordinatespace/named(_:))

#### Testing a space

- [var isGlobal: Bool](/documentation/swiftui/coordinatespace/isglobal)
- [var isLocal: Bool](/documentation/swiftui/coordinatespace/islocal)
- [CoordinateSpaceProtocol](/documentation/swiftui/coordinatespaceprotocol)

#### Getting built-in coordinate spaces

- [static var immersiveSpace: NamedCoordinateSpace](/documentation/swiftui/coordinatespaceprotocol/immersivespace)
- [static var global: GlobalCoordinateSpace](/documentation/swiftui/coordinatespaceprotocol/global)
- [static var local: LocalCoordinateSpace](/documentation/swiftui/coordinatespaceprotocol/local)
- [static func named(some Hashable) -> NamedCoordinateSpace](/documentation/swiftui/coordinatespaceprotocol/named(_:))
- [static var scrollView: NamedCoordinateSpace](/documentation/swiftui/coordinatespaceprotocol/scrollview)
- [static func scrollView(axis: Axis) -> Self](/documentation/swiftui/coordinatespaceprotocol/scrollview(axis:))

#### Getting the resolved coordinate space

- [var coordinateSpace: CoordinateSpace](/documentation/swiftui/coordinatespaceprotocol/coordinatespace)

#### Supporting types

- [GlobalCoordinateSpace](/documentation/swiftui/globalcoordinatespace)

##### Creating the coordinate space

- [init()](/documentation/swiftui/globalcoordinatespace/init())
- [LocalCoordinateSpace](/documentation/swiftui/localcoordinatespace)

##### Creating the coordinate space

- [init()](/documentation/swiftui/localcoordinatespace/init())
- [NamedCoordinateSpace](/documentation/swiftui/namedcoordinatespace)
- [PhysicalMetric](/documentation/swiftui/physicalmetric)

#### Creating a metric

- [init(wrappedValue:from:)](/documentation/swiftui/physicalmetric/init(wrappedvalue:from:))

#### Getting the value

- [var wrappedValue: Value](/documentation/swiftui/physicalmetric/wrappedvalue)
- [PhysicalMetricsConverter](/documentation/swiftui/physicalmetricsconverter)

#### Converting a unit length

- [func convert(_:from:)](/documentation/swiftui/physicalmetricsconverter/convert(_:from:))
- [func convert(_:to:)](/documentation/swiftui/physicalmetricsconverter/convert(_:to:))

#### Instance Properties

- [var worldScalingCompensation: WorldScalingCompensation](/documentation/swiftui/physicalmetricsconverter/worldscalingcompensation)

#### Instance Methods

- [func worldScalingCompensation(WorldScalingCompensation) -> PhysicalMetricsConverter](/documentation/swiftui/physicalmetricsconverter/worldscalingcompensation(_:))

### Responding to a geometry change

- [func onGeometryChange(for:of:action:)](/documentation/swiftui/view/ongeometrychange(for:of:action:))

### Accessing Metal shaders

- [func colorEffect(Shader, isEnabled: Bool) -> some View](/documentation/swiftui/view/coloreffect(_:isenabled:))
- [func distortionEffect(Shader, maxSampleOffset: CGSize, isEnabled: Bool) -> some View](/documentation/swiftui/view/distortioneffect(_:maxsampleoffset:isenabled:))
- [func layerEffect(Shader, maxSampleOffset: CGSize, isEnabled: Bool) -> some View](/documentation/swiftui/view/layereffect(_:maxsampleoffset:isenabled:))
- [Shader](/documentation/swiftui/shader)

#### Creating a shader

- [init(function: ShaderFunction, arguments: [Shader.Argument])](/documentation/swiftui/shader/init(function:arguments:))
- [Shader.Argument](/documentation/swiftui/shader/argument)

##### Creating argument values

- [static var boundingRect: Shader.Argument](/documentation/swiftui/shader/argument/boundingrect)
- [static func color(Color) -> Shader.Argument](/documentation/swiftui/shader/argument/color(_:))
- [static func colorArray([Color]) -> Shader.Argument](/documentation/swiftui/shader/argument/colorarray(_:))
- [static func data(Data) -> Shader.Argument](/documentation/swiftui/shader/argument/data(_:))
- [static func float<T>(T) -> Shader.Argument](/documentation/swiftui/shader/argument/float(_:))
- [static float2(_:)](/documentation/swiftui/shader/argument/float2(_:))
- [static func float2<T>(T, T) -> Shader.Argument](/documentation/swiftui/shader/argument/float2(_:_:))
- [static func float3<T>(T, T, T) -> Shader.Argument](/documentation/swiftui/shader/argument/float3(_:_:_:))
- [static func float4<T>(T, T, T, T) -> Shader.Argument](/documentation/swiftui/shader/argument/float4(_:_:_:_:))
- [static func floatArray([Float]) -> Shader.Argument](/documentation/swiftui/shader/argument/floatarray(_:))
- [static func image(Image) -> Shader.Argument](/documentation/swiftui/shader/argument/image(_:))

#### Getting the shader function

- [var function: ShaderFunction](/documentation/swiftui/shader/function)
- [var arguments: [Shader.Argument]](/documentation/swiftui/shader/arguments)

#### Configuring the shader

- [var dithersColor: Bool](/documentation/swiftui/shader/ditherscolor)

#### Structures

- [Shader.UsageType](/documentation/swiftui/shader/usagetype)

##### Type Properties

- [static let colorEffect: Shader.UsageType](/documentation/swiftui/shader/usagetype/coloreffect)
- [static let distortionEffect: Shader.UsageType](/documentation/swiftui/shader/usagetype/distortioneffect)
- [static let layerEffect: Shader.UsageType](/documentation/swiftui/shader/usagetype/layereffect)
- [static let shapeStyle: Shader.UsageType](/documentation/swiftui/shader/usagetype/shapestyle)

#### Instance Methods

- [func compile(as: Shader.UsageType) async throws](/documentation/swiftui/shader/compile(as:))
- [ShaderFunction](/documentation/swiftui/shaderfunction)

#### Creating a shader function

- [init(library: ShaderLibrary, name: String)](/documentation/swiftui/shaderfunction/init(library:name:))

#### Configuring a function

- [var library: ShaderLibrary](/documentation/swiftui/shaderfunction/library)
- [var name: String](/documentation/swiftui/shaderfunction/name)
- [func dynamicallyCall(withArguments: [Shader.Argument]) -> Shader](/documentation/swiftui/shaderfunction/dynamicallycall(witharguments:))
- [ShaderLibrary](/documentation/swiftui/shaderlibrary)

#### Getting the default shader library

- [static let `default`: ShaderLibrary](/documentation/swiftui/shaderlibrary/default)
- [static func bundle(Bundle) -> ShaderLibrary](/documentation/swiftui/shaderlibrary/bundle(_:))

#### Creating a shader library

- [init(url: URL)](/documentation/swiftui/shaderlibrary/init(url:))
- [init(data: Data)](/documentation/swiftui/shaderlibrary/init(data:))

#### Access shader functions

- [static subscript(dynamicMember _: String) -> ShaderFunction](/documentation/swiftui/shaderlibrary/subscript(dynamicmember:)-swift.type.subscript)

#### Subscripts

- [subscript(dynamicMember _: String) -> ShaderFunction](/documentation/swiftui/shaderlibrary/subscript(dynamicmember:)-swift.subscript)

### Accessing geometric constructs

- [Axis](/documentation/swiftui/axis)

#### Getting axes

- [case horizontal](/documentation/swiftui/axis/horizontal)
- [case vertical](/documentation/swiftui/axis/vertical)

#### Getting all axes

- [Axis.Set](/documentation/swiftui/axis/set)

##### Getting axis sets

- [static let horizontal: Axis.Set](/documentation/swiftui/axis/set/horizontal)
- [static let vertical: Axis.Set](/documentation/swiftui/axis/set/vertical)
- [Angle](/documentation/swiftui/angle)

#### Getting constant angles

- [static var zero: Angle](/documentation/swiftui/angle/zero)
- [static func degrees(Double) -> Angle](/documentation/swiftui/angle/degrees(_:))
- [static func radians(Double) -> Angle](/documentation/swiftui/angle/radians(_:))

#### Creating an angle

- [init()](/documentation/swiftui/angle/init())
- [init(degrees: Double)](/documentation/swiftui/angle/init(degrees:))
- [init(radians: Double)](/documentation/swiftui/angle/init(radians:))
- [init(Angle2D)](/documentation/swiftui/angle/init(_:))

#### Getting the angle size

- [var degrees: Double](/documentation/swiftui/angle/degrees)
- [var radians: Double](/documentation/swiftui/angle/radians)
- [UnitPoint](/documentation/swiftui/unitpoint)

#### Getting the origin

- [static let zero: UnitPoint](/documentation/swiftui/unitpoint/zero)

#### Getting top points

- [static let topLeading: UnitPoint](/documentation/swiftui/unitpoint/topleading)
- [static let top: UnitPoint](/documentation/swiftui/unitpoint/top)
- [static let topTrailing: UnitPoint](/documentation/swiftui/unitpoint/toptrailing)

#### Getting middle points

- [static let leading: UnitPoint](/documentation/swiftui/unitpoint/leading)
- [static let center: UnitPoint](/documentation/swiftui/unitpoint/center)
- [static let trailing: UnitPoint](/documentation/swiftui/unitpoint/trailing)

#### Getting bottom points

- [static let bottomLeading: UnitPoint](/documentation/swiftui/unitpoint/bottomleading)
- [static let bottom: UnitPoint](/documentation/swiftui/unitpoint/bottom)
- [static let bottomTrailing: UnitPoint](/documentation/swiftui/unitpoint/bottomtrailing)

#### Creating a point

- [init()](/documentation/swiftui/unitpoint/init())
- [init(x: CGFloat, y: CGFloat)](/documentation/swiftui/unitpoint/init(x:y:))

#### Getting the point’s coordinates

- [var x: CGFloat](/documentation/swiftui/unitpoint/x)
- [var y: CGFloat](/documentation/swiftui/unitpoint/y)
- [UnitPoint3D](/documentation/swiftui/unitpoint3d)

#### Getting the origin

- [static let origin: UnitPoint3D](/documentation/swiftui/unitpoint3d/origin)
- [static let zero: UnitPoint3D](/documentation/swiftui/unitpoint3d/zero)

#### Getting top points

- [static let topLeadingBack: UnitPoint3D](/documentation/swiftui/unitpoint3d/topleadingback)
- [static let topLeading: UnitPoint3D](/documentation/swiftui/unitpoint3d/topleading)
- [static let topLeadingFront: UnitPoint3D](/documentation/swiftui/unitpoint3d/topleadingfront)
- [static let topBack: UnitPoint3D](/documentation/swiftui/unitpoint3d/topback)
- [static let top: UnitPoint3D](/documentation/swiftui/unitpoint3d/top)
- [static let topFront: UnitPoint3D](/documentation/swiftui/unitpoint3d/topfront)
- [static let topTrailingBack: UnitPoint3D](/documentation/swiftui/unitpoint3d/toptrailingback)
- [static let topTrailing: UnitPoint3D](/documentation/swiftui/unitpoint3d/toptrailing)
- [static let topTrailingFront: UnitPoint3D](/documentation/swiftui/unitpoint3d/toptrailingfront)

#### Getting middle points

- [static let leadingBack: UnitPoint3D](/documentation/swiftui/unitpoint3d/leadingback)
- [static let leading: UnitPoint3D](/documentation/swiftui/unitpoint3d/leading)
- [static let leadingFront: UnitPoint3D](/documentation/swiftui/unitpoint3d/leadingfront)
- [static let back: UnitPoint3D](/documentation/swiftui/unitpoint3d/back)
- [static let center: UnitPoint3D](/documentation/swiftui/unitpoint3d/center)
- [static let front: UnitPoint3D](/documentation/swiftui/unitpoint3d/front)
- [static let trailingBack: UnitPoint3D](/documentation/swiftui/unitpoint3d/trailingback)
- [static let trailing: UnitPoint3D](/documentation/swiftui/unitpoint3d/trailing)
- [static let trailingFront: UnitPoint3D](/documentation/swiftui/unitpoint3d/trailingfront)

#### Getting bottom points

- [static let bottomLeadingBack: UnitPoint3D](/documentation/swiftui/unitpoint3d/bottomleadingback)
- [static let bottomLeading: UnitPoint3D](/documentation/swiftui/unitpoint3d/bottomleading)
- [static let bottomLeadingFront: UnitPoint3D](/documentation/swiftui/unitpoint3d/bottomleadingfront)
- [static let bottomBack: UnitPoint3D](/documentation/swiftui/unitpoint3d/bottomback)
- [static let bottom: UnitPoint3D](/documentation/swiftui/unitpoint3d/bottom)
- [static let bottomFront: UnitPoint3D](/documentation/swiftui/unitpoint3d/bottomfront)
- [static let bottomTrailingBack: UnitPoint3D](/documentation/swiftui/unitpoint3d/bottomtrailingback)
- [static let bottomTrailing: UnitPoint3D](/documentation/swiftui/unitpoint3d/bottomtrailing)
- [static let bottomTrailingFront: UnitPoint3D](/documentation/swiftui/unitpoint3d/bottomtrailingfront)

#### Creating a point

- [init()](/documentation/swiftui/unitpoint3d/init())
- [init(x: CGFloat, y: CGFloat, z: CGFloat)](/documentation/swiftui/unitpoint3d/init(x:y:z:))

#### Getting the point’s coordinates

- [var x: CGFloat](/documentation/swiftui/unitpoint3d/x)
- [var y: CGFloat](/documentation/swiftui/unitpoint3d/y)
- [var z: CGFloat](/documentation/swiftui/unitpoint3d/z)
- [Anchor](/documentation/swiftui/anchor)

#### Getting the anchor’s source

- [Anchor.Source](/documentation/swiftui/anchor/source)

##### Getting point anchor sources

- [static point(_:)](/documentation/swiftui/anchor/source/point(_:))
- [static unitPoint(_:)](/documentation/swiftui/anchor/source/unitpoint(_:))

##### Getting rectangle anchor sources

- [static func rect(CGRect) -> Anchor<Value>.Source](/documentation/swiftui/anchor/source/rect(_:))
- [static var bounds: Anchor<CGRect>.Source](/documentation/swiftui/anchor/source/bounds)

##### Getting top anchor sources

- [static var topLeading: Anchor<CGPoint>.Source](/documentation/swiftui/anchor/source/topleading)
- [static var top: Anchor<CGPoint>.Source](/documentation/swiftui/anchor/source/top)
- [static var topTrailing: Anchor<CGPoint>.Source](/documentation/swiftui/anchor/source/toptrailing)

##### Getting middle anchor sources

- [static var leading: Anchor<CGPoint>.Source](/documentation/swiftui/anchor/source/leading)
- [static var center: Anchor<CGPoint>.Source](/documentation/swiftui/anchor/source/center-869al)
- [static var trailing: Anchor<CGPoint>.Source](/documentation/swiftui/anchor/source/trailing)

##### Getting bottom anchor sources

- [static var bottomTrailing: Anchor<CGPoint>.Source](/documentation/swiftui/anchor/source/bottomtrailing)
- [static var bottom: Anchor<CGPoint>.Source](/documentation/swiftui/anchor/source/bottom)
- [static var bottomLeading: Anchor<CGPoint>.Source](/documentation/swiftui/anchor/source/bottomleading)

##### Creating an anchor source

- [init(_:)](/documentation/swiftui/anchor/source/init(_:))

##### Type Properties

- [static var bounds3D: Anchor<Rect3D>.Source](/documentation/swiftui/anchor/source/bounds3d)
- [static var center: Anchor<Point3D>.Source](/documentation/swiftui/anchor/source/center-6w6ww)
- [static var center3D: Anchor<Point3D>.Source](/documentation/swiftui/anchor/source/center3d)

##### Type Methods

- [static func point3D(Point3D) -> Anchor<Value>.Source](/documentation/swiftui/anchor/source/point3d(_:))
- [static func rect3D(Rect3D) -> Anchor<Value>.Source](/documentation/swiftui/anchor/source/rect3d(_:))
- [static func unitPoint3D(UnitPoint3D) -> Anchor<Value>.Source](/documentation/swiftui/anchor/source/unitpoint3d(_:))
- [DepthAlignmentID](/documentation/swiftui/depthalignmentid)

#### Type Methods

- [static func defaultValue(in: ViewDimensions3D) -> CGFloat](/documentation/swiftui/depthalignmentid/defaultvalue(in:))
- [Alignment3D](/documentation/swiftui/alignment3d)

#### Initializers

- [init(horizontal: HorizontalAlignment, vertical: VerticalAlignment, depth: DepthAlignment)](/documentation/swiftui/alignment3d/init(horizontal:vertical:depth:))

#### Instance Properties

- [var depth: DepthAlignment](/documentation/swiftui/alignment3d/depth)
- [var horizontal: HorizontalAlignment](/documentation/swiftui/alignment3d/horizontal)
- [var vertical: VerticalAlignment](/documentation/swiftui/alignment3d/vertical)

#### Type Properties

- [static let back: Alignment3D](/documentation/swiftui/alignment3d/back)
- [static let bottom: Alignment3D](/documentation/swiftui/alignment3d/bottom)
- [static let bottomBack: Alignment3D](/documentation/swiftui/alignment3d/bottomback)
- [static let bottomFront: Alignment3D](/documentation/swiftui/alignment3d/bottomfront)
- [static let bottomLeading: Alignment3D](/documentation/swiftui/alignment3d/bottomleading)
- [static let bottomLeadingBack: Alignment3D](/documentation/swiftui/alignment3d/bottomleadingback)
- [static let bottomLeadingFront: Alignment3D](/documentation/swiftui/alignment3d/bottomleadingfront)
- [static let bottomTrailing: Alignment3D](/documentation/swiftui/alignment3d/bottomtrailing)
- [static let bottomTrailingBack: Alignment3D](/documentation/swiftui/alignment3d/bottomtrailingback)
- [static let bottomTrailingFront: Alignment3D](/documentation/swiftui/alignment3d/bottomtrailingfront)
- [static let center: Alignment3D](/documentation/swiftui/alignment3d/center)
- [static let front: Alignment3D](/documentation/swiftui/alignment3d/front)
- [static let leading: Alignment3D](/documentation/swiftui/alignment3d/leading)
- [static let leadingBack: Alignment3D](/documentation/swiftui/alignment3d/leadingback)
- [static let leadingFront: Alignment3D](/documentation/swiftui/alignment3d/leadingfront)
- [static let top: Alignment3D](/documentation/swiftui/alignment3d/top)
- [static let topBack: Alignment3D](/documentation/swiftui/alignment3d/topback)
- [static let topFront: Alignment3D](/documentation/swiftui/alignment3d/topfront)
- [static let topLeading: Alignment3D](/documentation/swiftui/alignment3d/topleading)
- [static let topLeadingBack: Alignment3D](/documentation/swiftui/alignment3d/topleadingback)
- [static let topLeadingFront: Alignment3D](/documentation/swiftui/alignment3d/topleadingfront)
- [static let topTrailing: Alignment3D](/documentation/swiftui/alignment3d/toptrailing)
- [static let topTrailingBack: Alignment3D](/documentation/swiftui/alignment3d/toptrailingback)
- [static let topTrailingFront: Alignment3D](/documentation/swiftui/alignment3d/toptrailingfront)
- [static let trailing: Alignment3D](/documentation/swiftui/alignment3d/trailing)
- [static let trailingBack: Alignment3D](/documentation/swiftui/alignment3d/trailingback)
- [static let trailingFront: Alignment3D](/documentation/swiftui/alignment3d/trailingfront)
- [GeometryProxyCoordinateSpace3D](/documentation/swiftui/geometryproxycoordinatespace3d)

#### Instance Methods

- [func anchored(in: UnitPoint3D) -> some CoordinateSpace3D](/documentation/swiftui/geometryproxycoordinatespace3d/anchored(in:))

## View layout

- [Layout fundamentals](/documentation/swiftui/layout-fundamentals)

### Choosing a layout

- [Picking container views for your content](/documentation/swiftui/picking-container-views-for-your-content)

### Statically arranging views in one dimension

- [Building layouts with stack views](/documentation/swiftui/building-layouts-with-stack-views)
- [HStack](/documentation/swiftui/hstack)

#### Creating a stack

- [init(alignment: VerticalAlignment, spacing: CGFloat?, content: () -> Content)](/documentation/swiftui/hstack/init(alignment:spacing:content:))
- [VStack](/documentation/swiftui/vstack)

#### Creating a stack

- [init(alignment: HorizontalAlignment, spacing: CGFloat?, content: () -> Content)](/documentation/swiftui/vstack/init(alignment:spacing:content:))

### Dynamically arranging views in one dimension

- [Grouping data with lazy stack views](/documentation/swiftui/grouping-data-with-lazy-stack-views)
- [Creating performant scrollable stacks](/documentation/swiftui/creating-performant-scrollable-stacks)
- [LazyHStack](/documentation/swiftui/lazyhstack)

#### Creating a lazy-loading horizontal stack

- [init(alignment: VerticalAlignment, spacing: CGFloat?, pinnedViews: PinnedScrollableViews, content: () -> Content)](/documentation/swiftui/lazyhstack/init(alignment:spacing:pinnedviews:content:))
- [LazyVStack](/documentation/swiftui/lazyvstack)

#### Creating a lazy-loading vertical stack

- [init(alignment: HorizontalAlignment, spacing: CGFloat?, pinnedViews: PinnedScrollableViews, content: () -> Content)](/documentation/swiftui/lazyvstack/init(alignment:spacing:pinnedviews:content:))
- [PinnedScrollableViews](/documentation/swiftui/pinnedscrollableviews)

#### Getting scrollable view types

- [static let sectionHeaders: PinnedScrollableViews](/documentation/swiftui/pinnedscrollableviews/sectionheaders)
- [static let sectionFooters: PinnedScrollableViews](/documentation/swiftui/pinnedscrollableviews/sectionfooters)

### Statically arranging views in two dimensions

- [Grid](/documentation/swiftui/grid)

#### Creating a grid

- [init(alignment: Alignment, horizontalSpacing: CGFloat?, verticalSpacing: CGFloat?, content: () -> Content)](/documentation/swiftui/grid/init(alignment:horizontalspacing:verticalspacing:content:))
- [GridRow](/documentation/swiftui/gridrow)

#### Creating a grid row

- [init(alignment: VerticalAlignment?, content: () -> Content)](/documentation/swiftui/gridrow/init(alignment:content:))
- [func gridCellColumns(Int) -> some View](/documentation/swiftui/view/gridcellcolumns(_:))
- [func gridCellAnchor(UnitPoint) -> some View](/documentation/swiftui/view/gridcellanchor(_:))
- [func gridCellUnsizedAxes(Axis.Set) -> some View](/documentation/swiftui/view/gridcellunsizedaxes(_:))
- [func gridColumnAlignment(HorizontalAlignment) -> some View](/documentation/swiftui/view/gridcolumnalignment(_:))

### Dynamically arranging views in two dimensions

- [LazyHGrid](/documentation/swiftui/lazyhgrid)

#### Creating a horizontal grid

- [init(rows: [GridItem], alignment: VerticalAlignment, spacing: CGFloat?, pinnedViews: PinnedScrollableViews, content: () -> Content)](/documentation/swiftui/lazyhgrid/init(rows:alignment:spacing:pinnedviews:content:))
- [LazyVGrid](/documentation/swiftui/lazyvgrid)

#### Creating a vertical grid

- [init(columns: [GridItem], alignment: HorizontalAlignment, spacing: CGFloat?, pinnedViews: PinnedScrollableViews, content: () -> Content)](/documentation/swiftui/lazyvgrid/init(columns:alignment:spacing:pinnedviews:content:))
- [GridItem](/documentation/swiftui/griditem)

#### Creating a grid item

- [init(GridItem.Size, spacing: CGFloat?, alignment: Alignment?)](/documentation/swiftui/griditem/init(_:spacing:alignment:))

#### Inspecting grid item properties

- [var alignment: Alignment?](/documentation/swiftui/griditem/alignment)
- [var spacing: CGFloat?](/documentation/swiftui/griditem/spacing)
- [var size: GridItem.Size](/documentation/swiftui/griditem/size-swift.property)
- [GridItem.Size](/documentation/swiftui/griditem/size-swift.enum)

##### Getting the sizes

- [case adaptive(minimum: CGFloat, maximum: CGFloat)](/documentation/swiftui/griditem/size-swift.enum/adaptive(minimum:maximum:))
- [case fixed(CGFloat)](/documentation/swiftui/griditem/size-swift.enum/fixed(_:))
- [case flexible(minimum: CGFloat, maximum: CGFloat)](/documentation/swiftui/griditem/size-swift.enum/flexible(minimum:maximum:))

### Layering views

- [Adding a background to your view](/documentation/swiftui/adding-a-background-to-your-view)
- [ZStack](/documentation/swiftui/zstack)

#### Creating a stack

- [init(alignment: Alignment, content: () -> Content)](/documentation/swiftui/zstack/init(alignment:content:))

#### Supporting symbols

- [ZStackContent3D](/documentation/swiftui/zstackcontent3d)

##### Initializers

- [init(spacing: CGFloat?, content: Content)](/documentation/swiftui/zstackcontent3d/init(spacing:content:))

##### Instance Properties

- [var content: Content](/documentation/swiftui/zstackcontent3d/content)
- [var spacing: CGFloat?](/documentation/swiftui/zstackcontent3d/spacing)

#### Initializers

- [init<V>(alignment: Alignment, spacing: CGFloat?, content: () -> V)](/documentation/swiftui/zstack/init(alignment:spacing:content:))
- [func zIndex(Double) -> some View](/documentation/swiftui/view/zindex(_:))
- [func background<V>(alignment: Alignment, content: () -> V) -> some View](/documentation/swiftui/view/background(alignment:content:))
- [func background<S>(S, ignoresSafeAreaEdges: Edge.Set) -> some View](/documentation/swiftui/view/background(_:ignoressafeareaedges:))
- [func background(ignoresSafeAreaEdges: Edge.Set) -> some View](/documentation/swiftui/view/background(ignoressafeareaedges:))
- [func background(_:in:fillStyle:)](/documentation/swiftui/view/background(_:in:fillstyle:))
- [func background(in:fillStyle:)](/documentation/swiftui/view/background(in:fillstyle:))
- [func overlay<V>(alignment: Alignment, content: () -> V) -> some View](/documentation/swiftui/view/overlay(alignment:content:))
- [func overlay<S>(S, ignoresSafeAreaEdges: Edge.Set) -> some View](/documentation/swiftui/view/overlay(_:ignoressafeareaedges:))
- [func overlay<S, T>(S, in: T, fillStyle: FillStyle) -> some View](/documentation/swiftui/view/overlay(_:in:fillstyle:))
- [var backgroundMaterial: Material?](/documentation/swiftui/environmentvalues/backgroundmaterial)
- [func containerBackground<S>(S, for: ContainerBackgroundPlacement) -> some View](/documentation/swiftui/view/containerbackground(_:for:))
- [func containerBackground<V>(for: ContainerBackgroundPlacement, alignment: Alignment, content: () -> V) -> some View](/documentation/swiftui/view/containerbackground(for:alignment:content:))
- [ContainerBackgroundPlacement](/documentation/swiftui/containerbackgroundplacement)

#### Getting placements

- [static let navigation: ContainerBackgroundPlacement](/documentation/swiftui/containerbackgroundplacement/navigation)
- [static let tabView: ContainerBackgroundPlacement](/documentation/swiftui/containerbackgroundplacement/tabview)
- [static let widget: ContainerBackgroundPlacement](/documentation/swiftui/containerbackgroundplacement/widget)

#### Getting StoreKit placements

- [static var subscriptionStore: ContainerBackgroundPlacement](/documentation/swiftui/containerbackgroundplacement/subscriptionstore)
- [static var subscriptionStoreFullHeight: ContainerBackgroundPlacement](/documentation/swiftui/containerbackgroundplacement/subscriptionstorefullheight)
- [static var subscriptionStoreHeader: ContainerBackgroundPlacement](/documentation/swiftui/containerbackgroundplacement/subscriptionstoreheader)

#### Type Properties

- [static let navigationSplitView: ContainerBackgroundPlacement](/documentation/swiftui/containerbackgroundplacement/navigationsplitview)
- [static let window: ContainerBackgroundPlacement](/documentation/swiftui/containerbackgroundplacement/window)

### Automatically choosing the layout that fits

- [ViewThatFits](/documentation/swiftui/viewthatfits)

#### Creating a view that fits

- [init(in: Axis.Set, content: () -> Content)](/documentation/swiftui/viewthatfits/init(in:content:))

### Separators

- [Spacer](/documentation/swiftui/spacer)

#### Creating a spacer

- [init(minLength: CGFloat?)](/documentation/swiftui/spacer/init(minlength:))
- [var minLength: CGFloat?](/documentation/swiftui/spacer/minlength)
- [Divider](/documentation/swiftui/divider)

#### Creating a divider

- [init()](/documentation/swiftui/divider/init())
- [Layout adjustments](/documentation/swiftui/layout-adjustments)

### Fine-tuning a layout

- [Laying out a simple view](/documentation/swiftui/laying-out-a-simple-view)
- [Inspecting view layout](/documentation/swiftui/inspecting-view-layout)

### Adding padding around a view

- [func padding(_:)](/documentation/swiftui/view/padding(_:))
- [func padding(Edge.Set, CGFloat?) -> some View](/documentation/swiftui/view/padding(_:_:))
- [func padding3D(_:)](/documentation/swiftui/view/padding3d(_:))
- [func padding3D(Edge3D.Set, CGFloat?) -> some View](/documentation/swiftui/view/padding3d(_:_:))
- [func scenePadding(Edge.Set) -> some View](/documentation/swiftui/view/scenepadding(_:))
- [func scenePadding(ScenePadding, edges: Edge.Set) -> some View](/documentation/swiftui/view/scenepadding(_:edges:))
- [ScenePadding](/documentation/swiftui/scenepadding)

#### Getting padding values

- [static let minimum: ScenePadding](/documentation/swiftui/scenepadding/minimum)
- [static let navigationBar: ScenePadding](/documentation/swiftui/scenepadding/navigationbar)

### Influencing a view’s size

- [func frame(width: CGFloat?, height: CGFloat?, alignment: Alignment) -> some View](/documentation/swiftui/view/frame(width:height:alignment:))
- [func frame(depth: CGFloat?, alignment: DepthAlignment) -> some View](/documentation/swiftui/view/frame(depth:alignment:))
- [func frame(minWidth: CGFloat?, idealWidth: CGFloat?, maxWidth: CGFloat?, minHeight: CGFloat?, idealHeight: CGFloat?, maxHeight: CGFloat?, alignment: Alignment) -> some View](/documentation/swiftui/view/frame(minwidth:idealwidth:maxwidth:minheight:idealheight:maxheight:alignment:))
- [func frame(minDepth: CGFloat?, idealDepth: CGFloat?, maxDepth: CGFloat?, alignment: DepthAlignment) -> some View](/documentation/swiftui/view/frame(mindepth:idealdepth:maxdepth:alignment:))
- [func containerRelativeFrame(Axis.Set, alignment: Alignment) -> some View](/documentation/swiftui/view/containerrelativeframe(_:alignment:))
- [func containerRelativeFrame(Axis.Set, alignment: Alignment, (CGFloat, Axis) -> CGFloat) -> some View](/documentation/swiftui/view/containerrelativeframe(_:alignment:_:))
- [func containerRelativeFrame(Axis.Set, count: Int, span: Int, spacing: CGFloat, alignment: Alignment) -> some View](/documentation/swiftui/view/containerrelativeframe(_:count:span:spacing:alignment:))
- [func fixedSize() -> some View](/documentation/swiftui/view/fixedsize())
- [func fixedSize(horizontal: Bool, vertical: Bool) -> some View](/documentation/swiftui/view/fixedsize(horizontal:vertical:))
- [func layoutPriority(Double) -> some View](/documentation/swiftui/view/layoutpriority(_:))

### Adjusting a view’s position

- [Making fine adjustments to a view’s position](/documentation/swiftui/making-fine-adjustments-to-a-view-s-position)
- [func position(CGPoint) -> some View](/documentation/swiftui/view/position(_:))
- [func position(x: CGFloat, y: CGFloat) -> some View](/documentation/swiftui/view/position(x:y:))
- [func offset(CGSize) -> some View](/documentation/swiftui/view/offset(_:))
- [func offset(x: CGFloat, y: CGFloat) -> some View](/documentation/swiftui/view/offset(x:y:))
- [func offset(z: CGFloat) -> some View](/documentation/swiftui/view/offset(z:))

### Aligning views

- [Aligning views within a stack](/documentation/swiftui/aligning-views-within-a-stack)
- [Aligning views across stacks](/documentation/swiftui/aligning-views-across-stacks)
- [func alignmentGuide(_:computeValue:)](/documentation/swiftui/view/alignmentguide(_:computevalue:))
- [Alignment](/documentation/swiftui/alignment)

#### Getting top guides

- [static let topLeading: Alignment](/documentation/swiftui/alignment/topleading)
- [static let top: Alignment](/documentation/swiftui/alignment/top)
- [static let topTrailing: Alignment](/documentation/swiftui/alignment/toptrailing)

#### Getting middle guides

- [static let leading: Alignment](/documentation/swiftui/alignment/leading)
- [static let center: Alignment](/documentation/swiftui/alignment/center)
- [static let trailing: Alignment](/documentation/swiftui/alignment/trailing)

#### Getting bottom guides

- [static let bottomLeading: Alignment](/documentation/swiftui/alignment/bottomleading)
- [static let bottom: Alignment](/documentation/swiftui/alignment/bottom)
- [static let bottomTrailing: Alignment](/documentation/swiftui/alignment/bottomtrailing)

#### Getting text baseline guides

- [static var leadingFirstTextBaseline: Alignment](/documentation/swiftui/alignment/leadingfirsttextbaseline)
- [static var centerFirstTextBaseline: Alignment](/documentation/swiftui/alignment/centerfirsttextbaseline)
- [static var trailingFirstTextBaseline: Alignment](/documentation/swiftui/alignment/trailingfirsttextbaseline)
- [static var leadingLastTextBaseline: Alignment](/documentation/swiftui/alignment/leadinglasttextbaseline)
- [static var centerLastTextBaseline: Alignment](/documentation/swiftui/alignment/centerlasttextbaseline)
- [static var trailingLastTextBaseline: Alignment](/documentation/swiftui/alignment/trailinglasttextbaseline)

#### Creating a custom alignment

- [init(horizontal: HorizontalAlignment, vertical: VerticalAlignment)](/documentation/swiftui/alignment/init(horizontal:vertical:))
- [var horizontal: HorizontalAlignment](/documentation/swiftui/alignment/horizontal)
- [var vertical: VerticalAlignment](/documentation/swiftui/alignment/vertical)
- [HorizontalAlignment](/documentation/swiftui/horizontalalignment)

#### Getting guides

- [static let leading: HorizontalAlignment](/documentation/swiftui/horizontalalignment/leading)
- [static let center: HorizontalAlignment](/documentation/swiftui/horizontalalignment/center)
- [static let trailing: HorizontalAlignment](/documentation/swiftui/horizontalalignment/trailing)
- [static let listRowSeparatorLeading: HorizontalAlignment](/documentation/swiftui/horizontalalignment/listrowseparatorleading)
- [static let listRowSeparatorTrailing: HorizontalAlignment](/documentation/swiftui/horizontalalignment/listrowseparatortrailing)

#### Creating a custom alignment

- [init(any AlignmentID.Type)](/documentation/swiftui/horizontalalignment/init(_:))
- [func combineExplicit<S>(S) -> CGFloat?](/documentation/swiftui/horizontalalignment/combineexplicit(_:))
- [VerticalAlignment](/documentation/swiftui/verticalalignment)

#### Getting guides

- [static let top: VerticalAlignment](/documentation/swiftui/verticalalignment/top)
- [static let center: VerticalAlignment](/documentation/swiftui/verticalalignment/center)
- [static let bottom: VerticalAlignment](/documentation/swiftui/verticalalignment/bottom)
- [static let firstTextBaseline: VerticalAlignment](/documentation/swiftui/verticalalignment/firsttextbaseline)
- [static let lastTextBaseline: VerticalAlignment](/documentation/swiftui/verticalalignment/lasttextbaseline)

#### Creating a custom alignment

- [init(any AlignmentID.Type)](/documentation/swiftui/verticalalignment/init(_:))
- [func combineExplicit<S>(S) -> CGFloat?](/documentation/swiftui/verticalalignment/combineexplicit(_:))
- [DepthAlignment](/documentation/swiftui/depthalignment)

#### Getting guides

- [static let back: DepthAlignment](/documentation/swiftui/depthalignment/back)
- [static let center: DepthAlignment](/documentation/swiftui/depthalignment/center)
- [static let front: DepthAlignment](/documentation/swiftui/depthalignment/front)

#### Initializers

- [init(any DepthAlignmentID.Type)](/documentation/swiftui/depthalignment/init(_:))

#### Instance Methods

- [func combineExplicit<S>(S) -> CGFloat?](/documentation/swiftui/depthalignment/combineexplicit(_:))
- [AlignmentID](/documentation/swiftui/alignmentid)

#### Getting the default value

- [static func defaultValue(in: ViewDimensions) -> CGFloat](/documentation/swiftui/alignmentid/defaultvalue(in:))
- [ViewDimensions](/documentation/swiftui/viewdimensions)

#### Getting dimensions

- [var height: CGFloat](/documentation/swiftui/viewdimensions/height)
- [var width: CGFloat](/documentation/swiftui/viewdimensions/width)

#### Accessing guide values

- [subscript(_:)](/documentation/swiftui/viewdimensions/subscript(_:))
- [subscript(explicit:)](/documentation/swiftui/viewdimensions/subscript(explicit:))
- [ViewDimensions3D](/documentation/swiftui/viewdimensions3d)

#### Instance Properties

- [var depth: CGFloat](/documentation/swiftui/viewdimensions3d/depth)
- [var height: CGFloat](/documentation/swiftui/viewdimensions3d/height)
- [var width: CGFloat](/documentation/swiftui/viewdimensions3d/width)

#### Subscripts

- [subscript(_:)](/documentation/swiftui/viewdimensions3d/subscript(_:))
- [subscript(explicit:)](/documentation/swiftui/viewdimensions3d/subscript(explicit:))
- [SpatialContainer](/documentation/swiftui/spatialcontainer)

#### Initializers

- [init(alignment: Alignment3D)](/documentation/swiftui/spatialcontainer/init(alignment:))

### Setting margins

- [func contentMargins(CGFloat, for: ContentMarginPlacement) -> some View](/documentation/swiftui/view/contentmargins(_:for:))
- [func contentMargins(_:_:for:)](/documentation/swiftui/view/contentmargins(_:_:for:))
- [ContentMarginPlacement](/documentation/swiftui/contentmarginplacement)

#### Getting the placement

- [static var automatic: ContentMarginPlacement](/documentation/swiftui/contentmarginplacement/automatic)
- [static var scrollContent: ContentMarginPlacement](/documentation/swiftui/contentmarginplacement/scrollcontent)
- [static var scrollIndicators: ContentMarginPlacement](/documentation/swiftui/contentmarginplacement/scrollindicators)

### Staying in the safe areas

- [func ignoresSafeArea(SafeAreaRegions, edges: Edge.Set) -> some View](/documentation/swiftui/view/ignoressafearea(_:edges:))
- [func safeAreaInset(edge:alignment:spacing:content:)](/documentation/swiftui/view/safeareainset(edge:alignment:spacing:content:))
- [func safeAreaPadding(_:)](/documentation/swiftui/view/safeareapadding(_:))
- [func safeAreaPadding(Edge.Set, CGFloat?) -> some View](/documentation/swiftui/view/safeareapadding(_:_:))
- [SafeAreaRegions](/documentation/swiftui/safearearegions)

#### Getting safe area regions

- [static let all: SafeAreaRegions](/documentation/swiftui/safearearegions/all)
- [static let container: SafeAreaRegions](/documentation/swiftui/safearearegions/container)
- [static let keyboard: SafeAreaRegions](/documentation/swiftui/safearearegions/keyboard)

### Setting a layout direction

- [func layoutDirectionBehavior(LayoutDirectionBehavior) -> some View](/documentation/swiftui/view/layoutdirectionbehavior(_:))
- [LayoutDirectionBehavior](/documentation/swiftui/layoutdirectionbehavior)

#### Getting behaviors

- [case fixed](/documentation/swiftui/layoutdirectionbehavior/fixed)
- [static var mirrors: LayoutDirectionBehavior](/documentation/swiftui/layoutdirectionbehavior/mirrors)
- [case mirrors(in: LayoutDirection)](/documentation/swiftui/layoutdirectionbehavior/mirrors(in:))
- [var layoutDirection: LayoutDirection](/documentation/swiftui/environmentvalues/layoutdirection)
- [LayoutDirection](/documentation/swiftui/layoutdirection)

#### Getting layout directions

- [case leftToRight](/documentation/swiftui/layoutdirection/lefttoright)
- [case rightToLeft](/documentation/swiftui/layoutdirection/righttoleft)

#### Creating a layout direction

- [init?(UITraitEnvironmentLayoutDirection)](/documentation/swiftui/layoutdirection/init(_:))
- [LayoutRotationUnaryLayout](/documentation/swiftui/layoutrotationunarylayout)

### Reacting to interface characteristics

- [var isLuminanceReduced: Bool](/documentation/swiftui/environmentvalues/isluminancereduced)
- [var displayScale: CGFloat](/documentation/swiftui/environmentvalues/displayscale)
- [var pixelLength: CGFloat](/documentation/swiftui/environmentvalues/pixellength)
- [var horizontalSizeClass: UserInterfaceSizeClass?](/documentation/swiftui/environmentvalues/horizontalsizeclass)
- [var verticalSizeClass: UserInterfaceSizeClass?](/documentation/swiftui/environmentvalues/verticalsizeclass)
- [UserInterfaceSizeClass](/documentation/swiftui/userinterfacesizeclass)

#### Getting size classes

- [case compact](/documentation/swiftui/userinterfacesizeclass/compact)
- [case regular](/documentation/swiftui/userinterfacesizeclass/regular)

#### Creating a size class

- [init?(UIUserInterfaceSizeClass)](/documentation/swiftui/userinterfacesizeclass/init(_:))

### Accessing edges, regions, and layouts

- [Edge](/documentation/swiftui/edge)

#### Getting the edges

- [case top](/documentation/swiftui/edge/top)
- [case bottom](/documentation/swiftui/edge/bottom)
- [case leading](/documentation/swiftui/edge/leading)
- [case trailing](/documentation/swiftui/edge/trailing)

#### Creating an edge

- [init?(Edge3D)](/documentation/swiftui/edge/init(_:))

#### Accessing sets of edges

- [Edge.Set](/documentation/swiftui/edge/set)

##### Getting edge sets

- [static let all: Edge.Set](/documentation/swiftui/edge/set/all)
- [static let top: Edge.Set](/documentation/swiftui/edge/set/top)
- [static let bottom: Edge.Set](/documentation/swiftui/edge/set/bottom)
- [static let leading: Edge.Set](/documentation/swiftui/edge/set/leading)
- [static let trailing: Edge.Set](/documentation/swiftui/edge/set/trailing)
- [static let horizontal: Edge.Set](/documentation/swiftui/edge/set/horizontal)
- [static let vertical: Edge.Set](/documentation/swiftui/edge/set/vertical)

##### Creating an edge set

- [init(Edge)](/documentation/swiftui/edge/set/init(_:))

#### Enumerations

- [Edge.Corner](/documentation/swiftui/edge/corner)

##### Structures

- [Edge.Corner.Set](/documentation/swiftui/edge/corner/set)

###### Initializers

- [init(Edge.Corner)](/documentation/swiftui/edge/corner/set/init(_:))
- [init(rawValue: Int8)](/documentation/swiftui/edge/corner/set/init(rawvalue:))

###### Instance Methods

- [func contains(Edge.Corner) -> Bool](/documentation/swiftui/edge/corner/set/contains(_:))

###### Type Properties

- [static let all: Edge.Corner.Set](/documentation/swiftui/edge/corner/set/all)
- [static let bottom: Edge.Corner.Set](/documentation/swiftui/edge/corner/set/bottom)
- [static let bottomLeading: Edge.Corner.Set](/documentation/swiftui/edge/corner/set/bottomleading)
- [static let bottomTrailing: Edge.Corner.Set](/documentation/swiftui/edge/corner/set/bottomtrailing)
- [static let leading: Edge.Corner.Set](/documentation/swiftui/edge/corner/set/leading)
- [static let none: Edge.Corner.Set](/documentation/swiftui/edge/corner/set/none)
- [static let top: Edge.Corner.Set](/documentation/swiftui/edge/corner/set/top)
- [static let topLeading: Edge.Corner.Set](/documentation/swiftui/edge/corner/set/topleading)
- [static let topTrailing: Edge.Corner.Set](/documentation/swiftui/edge/corner/set/toptrailing)
- [static let trailing: Edge.Corner.Set](/documentation/swiftui/edge/corner/set/trailing)
- [Edge.Corner.Style](/documentation/swiftui/edge/corner/style)

###### Type Properties

- [static var concentric: Edge.Corner.Style](/documentation/swiftui/edge/corner/style/concentric)

###### Type Methods

- [static func concentric(minimum: Edge.Corner.Style?) -> Edge.Corner.Style](/documentation/swiftui/edge/corner/style/concentric(minimum:))
- [static func fixed(CGFloat) -> Edge.Corner.Style](/documentation/swiftui/edge/corner/style/fixed(_:))

###### Default Implementations

- [ExpressibleByFloatLiteral Implementations](/documentation/swiftui/edge/corner/style/expressiblebyfloatliteral-implementations)

###### Initializers

- [init(floatLiteral: Edge.Corner.Style.FloatLiteralType)](/documentation/swiftui/edge/corner/style/init(floatliteral:))
- [ExpressibleByIntegerLiteral Implementations](/documentation/swiftui/edge/corner/style/expressiblebyintegerliteral-implementations)

###### Initializers

- [init(integerLiteral: Edge.Corner.Style.IntegerLiteralType)](/documentation/swiftui/edge/corner/style/init(integerliteral:))

##### Enumeration Cases

- [case bottomLeading](/documentation/swiftui/edge/corner/bottomleading)
- [case bottomTrailing](/documentation/swiftui/edge/corner/bottomtrailing)
- [case topLeading](/documentation/swiftui/edge/corner/topleading)
- [case topTrailing](/documentation/swiftui/edge/corner/toptrailing)
- [Edge3D](/documentation/swiftui/edge3d)

#### Getting the edges

- [case top](/documentation/swiftui/edge3d/top)
- [case bottom](/documentation/swiftui/edge3d/bottom)
- [case leading](/documentation/swiftui/edge3d/leading)
- [case trailing](/documentation/swiftui/edge3d/trailing)
- [case front](/documentation/swiftui/edge3d/front)
- [case back](/documentation/swiftui/edge3d/back)

#### Creating an edge

- [init(Edge)](/documentation/swiftui/edge3d/init(_:))

#### Accessing sets of edges

- [Edge3D.Set](/documentation/swiftui/edge3d/set)

##### Getting edge sets

- [static let all: Edge3D.Set](/documentation/swiftui/edge3d/set/all)
- [static let top: Edge3D.Set](/documentation/swiftui/edge3d/set/top)
- [static let bottom: Edge3D.Set](/documentation/swiftui/edge3d/set/bottom)
- [static let leading: Edge3D.Set](/documentation/swiftui/edge3d/set/leading)
- [static let front: Edge3D.Set](/documentation/swiftui/edge3d/set/front)
- [static let back: Edge3D.Set](/documentation/swiftui/edge3d/set/back)
- [static let trailing: Edge3D.Set](/documentation/swiftui/edge3d/set/trailing)
- [static let horizontal: Edge3D.Set](/documentation/swiftui/edge3d/set/horizontal)
- [static let vertical: Edge3D.Set](/documentation/swiftui/edge3d/set/vertical)
- [static let depth: Edge3D.Set](/documentation/swiftui/edge3d/set/depth)

##### Creating an edge set

- [init(_:)](/documentation/swiftui/edge3d/set/init(_:))
- [HorizontalEdge](/documentation/swiftui/horizontaledge)

#### Getting the edges

- [case leading](/documentation/swiftui/horizontaledge/leading)
- [case trailing](/documentation/swiftui/horizontaledge/trailing)

#### Accessing sets of edges

- [HorizontalEdge.Set](/documentation/swiftui/horizontaledge/set)

##### Getting edge sets

- [static let all: HorizontalEdge.Set](/documentation/swiftui/horizontaledge/set/all)
- [static let leading: HorizontalEdge.Set](/documentation/swiftui/horizontaledge/set/leading)
- [static let trailing: HorizontalEdge.Set](/documentation/swiftui/horizontaledge/set/trailing)

##### Creating an edge set

- [init(HorizontalEdge)](/documentation/swiftui/horizontaledge/set/init(_:))
- [VerticalEdge](/documentation/swiftui/verticaledge)

#### Getting the edges

- [case top](/documentation/swiftui/verticaledge/top)
- [case bottom](/documentation/swiftui/verticaledge/bottom)

#### Accessing sets of edges

- [VerticalEdge.Set](/documentation/swiftui/verticaledge/set)

##### Getting edge sets

- [static let all: VerticalEdge.Set](/documentation/swiftui/verticaledge/set/all)
- [static let top: VerticalEdge.Set](/documentation/swiftui/verticaledge/set/top)
- [static let bottom: VerticalEdge.Set](/documentation/swiftui/verticaledge/set/bottom)

##### Creating an edge set

- [init(VerticalEdge)](/documentation/swiftui/verticaledge/set/init(_:))
- [EdgeInsets](/documentation/swiftui/edgeinsets)

#### Getting edge insets

- [var top: CGFloat](/documentation/swiftui/edgeinsets/top)
- [var bottom: CGFloat](/documentation/swiftui/edgeinsets/bottom)
- [var leading: CGFloat](/documentation/swiftui/edgeinsets/leading)
- [var trailing: CGFloat](/documentation/swiftui/edgeinsets/trailing)

#### Creating an edge inset

- [init()](/documentation/swiftui/edgeinsets/init())
- [init(top: CGFloat, leading: CGFloat, bottom: CGFloat, trailing: CGFloat)](/documentation/swiftui/edgeinsets/init(top:leading:bottom:trailing:))
- [init(_:)](/documentation/swiftui/edgeinsets/init(_:))

#### Instance Methods

- [func inset(by: RectangleCornerInsets, edges: Edge.Set) -> EdgeInsets](/documentation/swiftui/edgeinsets/inset(by:edges:))
- [EdgeInsets3D](/documentation/swiftui/edgeinsets3d)

#### Getting edge insets

- [var top: CGFloat](/documentation/swiftui/edgeinsets3d/top)
- [var bottom: CGFloat](/documentation/swiftui/edgeinsets3d/bottom)
- [var leading: CGFloat](/documentation/swiftui/edgeinsets3d/leading)
- [var trailing: CGFloat](/documentation/swiftui/edgeinsets3d/trailing)
- [var front: CGFloat](/documentation/swiftui/edgeinsets3d/front)
- [var back: CGFloat](/documentation/swiftui/edgeinsets3d/back)

#### Creating an edge inset

- [init(horizontal: CGFloat, vertical: CGFloat, depth: CGFloat)](/documentation/swiftui/edgeinsets3d/init(horizontal:vertical:depth:))
- [init(top: CGFloat, leading: CGFloat, bottom: CGFloat, trailing: CGFloat, front: CGFloat, back: CGFloat)](/documentation/swiftui/edgeinsets3d/init(top:leading:bottom:trailing:front:back:))
- [Custom layout](/documentation/swiftui/custom-layout)

### Creating a custom layout container

- [Composing custom layouts with SwiftUI](/documentation/swiftui/composing-custom-layouts-with-swiftui)
- [Layout](/documentation/swiftui/layout)

#### Sizing the container and placing subviews

- [func sizeThatFits(proposal: ProposedViewSize, subviews: Self.Subviews, cache: inout Self.Cache) -> CGSize](/documentation/swiftui/layout/sizethatfits(proposal:subviews:cache:))
- [func placeSubviews(in: CGRect, proposal: ProposedViewSize, subviews: Self.Subviews, cache: inout Self.Cache)](/documentation/swiftui/layout/placesubviews(in:proposal:subviews:cache:))
- [Layout.Subviews](/documentation/swiftui/layout/subviews)

#### Reporting layout container characteristics

- [func explicitAlignment(of:in:proposal:subviews:cache:)](/documentation/swiftui/layout/explicitalignment(of:in:proposal:subviews:cache:))
- [func spacing(subviews: Self.Subviews, cache: inout Self.Cache) -> ViewSpacing](/documentation/swiftui/layout/spacing(subviews:cache:))
- [static var layoutProperties: LayoutProperties](/documentation/swiftui/layout/layoutproperties)

#### Managing a cache

- [func makeCache(subviews: Self.Subviews) -> Self.Cache](/documentation/swiftui/layout/makecache(subviews:))
- [func updateCache(inout Self.Cache, subviews: Self.Subviews)](/documentation/swiftui/layout/updatecache(_:subviews:))
- [Cache](/documentation/swiftui/layout/cache)

#### Supporting types

- [func callAsFunction<V>(() -> V) -> some View](/documentation/swiftui/layout/callasfunction(_:))

#### Instance Methods

- [func depthAlignment(DepthAlignment) -> some Layout](/documentation/swiftui/layout/depthalignment(_:))
- [func depthAlignment<Content>(DepthAlignment, content: () -> Content) -> some View](/documentation/swiftui/layout/depthalignment(_:content:))
- [LayoutSubview](/documentation/swiftui/layoutsubview)

#### Placing the subview

- [func place(at: CGPoint, anchor: UnitPoint, proposal: ProposedViewSize)](/documentation/swiftui/layoutsubview/place(at:anchor:proposal:))

#### Getting subview characteristics

- [func dimensions(in: ProposedViewSize) -> ViewDimensions](/documentation/swiftui/layoutsubview/dimensions(in:))
- [func sizeThatFits(ProposedViewSize) -> CGSize](/documentation/swiftui/layoutsubview/sizethatfits(_:))
- [var spacing: ViewSpacing](/documentation/swiftui/layoutsubview/spacing)
- [var priority: Double](/documentation/swiftui/layoutsubview/priority)

#### Getting custom values

- [subscript<K>(K.Type) -> K.Value](/documentation/swiftui/layoutsubview/subscript(_:))

#### Instance Properties

- [var containerValues: ContainerValues](/documentation/swiftui/layoutsubview/containervalues)
- [LayoutSubviews](/documentation/swiftui/layoutsubviews)

#### Getting the layout direction

- [var layoutDirection: LayoutDirection](/documentation/swiftui/layoutsubviews/layoutdirection)

#### Accessing subviews

- [subscript(_:)](/documentation/swiftui/layoutsubviews/subscript(_:))
- [var startIndex: Int](/documentation/swiftui/layoutsubviews/startindex)
- [var endIndex: Int](/documentation/swiftui/layoutsubviews/endindex)
- [LayoutSubviews.Element](/documentation/swiftui/layoutsubviews/element)
- [LayoutSubviews.Index](/documentation/swiftui/layoutsubviews/index)
- [LayoutSubviews.SubSequence](/documentation/swiftui/layoutsubviews/subsequence)

### Configuring a custom layout

- [LayoutProperties](/documentation/swiftui/layoutproperties)

#### Creating a layout properties instance

- [init()](/documentation/swiftui/layoutproperties/init())

#### Getting layout properties

- [var stackOrientation: Axis?](/documentation/swiftui/layoutproperties/stackorientation)
- [ProposedViewSize](/documentation/swiftui/proposedviewsize)

#### Getting standard proposals

- [static let zero: ProposedViewSize](/documentation/swiftui/proposedviewsize/zero)
- [static let infinity: ProposedViewSize](/documentation/swiftui/proposedviewsize/infinity)
- [static let unspecified: ProposedViewSize](/documentation/swiftui/proposedviewsize/unspecified)

#### Creating a custom size proposal

- [init(CGSize)](/documentation/swiftui/proposedviewsize/init(_:))
- [init(width: CGFloat?, height: CGFloat?)](/documentation/swiftui/proposedviewsize/init(width:height:))

#### Getting the proposal’s dimensions

- [var height: CGFloat?](/documentation/swiftui/proposedviewsize/height)
- [var width: CGFloat?](/documentation/swiftui/proposedviewsize/width)

#### Modifying a proposal

- [func replacingUnspecifiedDimensions(by: CGSize) -> CGSize](/documentation/swiftui/proposedviewsize/replacingunspecifieddimensions(by:))
- [ViewSpacing](/documentation/swiftui/viewspacing)

#### Creating spacing instances

- [init()](/documentation/swiftui/viewspacing/init())
- [static let zero: ViewSpacing](/documentation/swiftui/viewspacing/zero)

#### Measuring spacing distance

- [func distance(to: ViewSpacing, along: Axis) -> CGFloat](/documentation/swiftui/viewspacing/distance(to:along:))

#### Merging spacing instances

- [func formUnion(ViewSpacing, edges: Edge.Set)](/documentation/swiftui/viewspacing/formunion(_:edges:))
- [func union(ViewSpacing, edges: Edge.Set) -> ViewSpacing](/documentation/swiftui/viewspacing/union(_:edges:))

### Associating values with views in a custom layout

- [func layoutValue<K>(key: K.Type, value: K.Value) -> some View](/documentation/swiftui/view/layoutvalue(key:value:))
- [LayoutValueKey](/documentation/swiftui/layoutvaluekey)

#### Providing a default value

- [static var defaultValue: Self.Value](/documentation/swiftui/layoutvaluekey/defaultvalue)
- [Value](/documentation/swiftui/layoutvaluekey/value)

### Transitioning between layout types

- [AnyLayout](/documentation/swiftui/anylayout)

#### Creating the layout

- [init<L>(L)](/documentation/swiftui/anylayout/init(_:))
- [HStackLayout](/documentation/swiftui/hstacklayout)

#### Creating a horizontal stack

- [init(alignment: VerticalAlignment, spacing: CGFloat?)](/documentation/swiftui/hstacklayout/init(alignment:spacing:))

#### Getting the stack’s properties

- [var alignment: VerticalAlignment](/documentation/swiftui/hstacklayout/alignment)
- [var spacing: CGFloat?](/documentation/swiftui/hstacklayout/spacing)
- [VStackLayout](/documentation/swiftui/vstacklayout)

#### Creating a vertical stack

- [init(alignment: HorizontalAlignment, spacing: CGFloat?)](/documentation/swiftui/vstacklayout/init(alignment:spacing:))

#### Getting the stack’s properties

- [var alignment: HorizontalAlignment](/documentation/swiftui/vstacklayout/alignment)
- [var spacing: CGFloat?](/documentation/swiftui/vstacklayout/spacing)
- [ZStackLayout](/documentation/swiftui/zstacklayout)

#### Creating a stack

- [init(alignment: Alignment)](/documentation/swiftui/zstacklayout/init(alignment:))

#### Getting the stack’s properties

- [var alignment: Alignment](/documentation/swiftui/zstacklayout/alignment)
- [GridLayout](/documentation/swiftui/gridlayout)

#### Creating a grid

- [init(alignment: Alignment, horizontalSpacing: CGFloat?, verticalSpacing: CGFloat?)](/documentation/swiftui/gridlayout/init(alignment:horizontalspacing:verticalspacing:))

#### Getting the grid’s properties

- [var alignment: Alignment](/documentation/swiftui/gridlayout/alignment)
- [var horizontalSpacing: CGFloat?](/documentation/swiftui/gridlayout/horizontalspacing)
- [var verticalSpacing: CGFloat?](/documentation/swiftui/gridlayout/verticalspacing)

#### Type Aliases

- [GridLayout.Body](/documentation/swiftui/gridlayout/body)

#### Default Implementations

- [Layout Implementations](/documentation/swiftui/gridlayout/layout-implementations)

##### Structures

- [GridLayout.Cache](/documentation/swiftui/gridlayout/cache)
- [Lists](/documentation/swiftui/lists)

### Creating a list

- [Displaying data in lists](/documentation/swiftui/displaying-data-in-lists)
- [List](/documentation/swiftui/list)

#### Creating a list from a set of views

- [init(content: () -> Content)](/documentation/swiftui/list/init(content:))
- [init(selection:content:)](/documentation/swiftui/list/init(selection:content:))

#### Creating a list from enumerated data

- [init(_:rowContent:)](/documentation/swiftui/list/init(_:rowcontent:))
- [init(_:selection:rowContent:)](/documentation/swiftui/list/init(_:selection:rowcontent:))
- [init(_:id:rowContent:)](/documentation/swiftui/list/init(_:id:rowcontent:))
- [init(_:id:selection:rowContent:)](/documentation/swiftui/list/init(_:id:selection:rowcontent:))

#### Creating a list from hierarchical data

- [init(_:children:rowContent:)](/documentation/swiftui/list/init(_:children:rowcontent:))
- [init(_:children:selection:rowContent:)](/documentation/swiftui/list/init(_:children:selection:rowcontent:))
- [init(_:id:children:rowContent:)](/documentation/swiftui/list/init(_:id:children:rowcontent:))
- [init(_:id:children:selection:rowContent:)](/documentation/swiftui/list/init(_:id:children:selection:rowcontent:))

#### Creating a list from editable data

- [init<Data, RowContent>(Binding<Data>, editActions: EditActions<Data>, rowContent: (Binding<Data.Element>) -> RowContent)](/documentation/swiftui/list/init(_:editactions:rowcontent:))
- [init(_:editActions:selection:rowContent:)](/documentation/swiftui/list/init(_:editactions:selection:rowcontent:))
- [init<Data, ID, RowContent>(Binding<Data>, id: KeyPath<Data.Element, ID>, editActions: EditActions<Data>, rowContent: (Binding<Data.Element>) -> RowContent)](/documentation/swiftui/list/init(_:id:editactions:rowcontent:))
- [init(_:id:editActions:selection:rowContent:)](/documentation/swiftui/list/init(_:id:editactions:selection:rowcontent:))

#### Supporting types

- [var body: some View](/documentation/swiftui/list/body)
- [func listStyle<S>(S) -> some View](/documentation/swiftui/view/liststyle(_:))

### Disclosing information progressively

- [OutlineGroup](/documentation/swiftui/outlinegroup)

#### Creating an outline group

- [init(_:children:)](/documentation/swiftui/outlinegroup/init(_:children:))
- [init(_:children:content:)](/documentation/swiftui/outlinegroup/init(_:children:content:))
- [init(_:id:children:content:)](/documentation/swiftui/outlinegroup/init(_:id:children:content:))

#### Supporting types

- [OutlineSubgroupChildren](/documentation/swiftui/outlinesubgroupchildren)
- [DisclosureGroup](/documentation/swiftui/disclosuregroup)

#### Creating a disclosure group

- [init(_:content:)](/documentation/swiftui/disclosuregroup/init(_:content:))
- [init(content: () -> Content, label: () -> Label)](/documentation/swiftui/disclosuregroup/init(content:label:))
- [init(_:isExpanded:content:)](/documentation/swiftui/disclosuregroup/init(_:isexpanded:content:))
- [init(isExpanded: Binding<Bool>, content: () -> Content, label: () -> Label)](/documentation/swiftui/disclosuregroup/init(isexpanded:content:label:))
- [func disclosureGroupStyle<S>(S) -> some View](/documentation/swiftui/view/disclosuregroupstyle(_:))

### Configuring a list’s layout

- [func listRowInsets(EdgeInsets?) -> some View](/documentation/swiftui/view/listrowinsets(_:))
- [var defaultMinListRowHeight: CGFloat](/documentation/swiftui/environmentvalues/defaultminlistrowheight)
- [var defaultMinListHeaderHeight: CGFloat?](/documentation/swiftui/environmentvalues/defaultminlistheaderheight)
- [func listRowSpacing(CGFloat?) -> some View](/documentation/swiftui/view/listrowspacing(_:))
- [func listSectionSpacing(_:)](/documentation/swiftui/view/listsectionspacing(_:))
- [ListSectionSpacing](/documentation/swiftui/listsectionspacing)

#### Getting section spacing

- [static let `default`: ListSectionSpacing](/documentation/swiftui/listsectionspacing/default)
- [static let compact: ListSectionSpacing](/documentation/swiftui/listsectionspacing/compact)
- [static func custom(CGFloat) -> ListSectionSpacing](/documentation/swiftui/listsectionspacing/custom(_:))
- [func listSectionMargins(Edge.Set, CGFloat?) -> some View](/documentation/swiftui/view/listsectionmargins(_:_:))

### Configuring rows

- [func listItemTint(_:)](/documentation/swiftui/view/listitemtint(_:))
- [ListItemTint](/documentation/swiftui/listitemtint)

#### Getting list item tint options

- [static let monochrome: ListItemTint](/documentation/swiftui/listitemtint/monochrome)
- [static func fixed(Color) -> ListItemTint](/documentation/swiftui/listitemtint/fixed(_:))
- [static func preferred(Color) -> ListItemTint](/documentation/swiftui/listitemtint/preferred(_:))

### Configuring headers

- [func headerProminence(Prominence) -> some View](/documentation/swiftui/view/headerprominence(_:))
- [var headerProminence: Prominence](/documentation/swiftui/environmentvalues/headerprominence)
- [Prominence](/documentation/swiftui/prominence)

#### Getting prominence options

- [case standard](/documentation/swiftui/prominence/standard)
- [case increased](/documentation/swiftui/prominence/increased)

### Configuring separators

- [func listRowSeparatorTint(Color?, edges: VerticalEdge.Set) -> some View](/documentation/swiftui/view/listrowseparatortint(_:edges:))
- [func listSectionSeparatorTint(Color?, edges: VerticalEdge.Set) -> some View](/documentation/swiftui/view/listsectionseparatortint(_:edges:))
- [func listRowSeparator(Visibility, edges: VerticalEdge.Set) -> some View](/documentation/swiftui/view/listrowseparator(_:edges:))
- [func listSectionSeparator(Visibility, edges: VerticalEdge.Set) -> some View](/documentation/swiftui/view/listsectionseparator(_:edges:))

### Configuring backgrounds

- [func listRowBackground<V>(V?) -> some View](/documentation/swiftui/view/listrowbackground(_:))
- [func alternatingRowBackgrounds(AlternatingRowBackgroundBehavior) -> some View](/documentation/swiftui/view/alternatingrowbackgrounds(_:))
- [AlternatingRowBackgroundBehavior](/documentation/swiftui/alternatingrowbackgroundbehavior)

#### Getting alternating row background behavior

- [static let automatic: AlternatingRowBackgroundBehavior](/documentation/swiftui/alternatingrowbackgroundbehavior/automatic)
- [static let enabled: AlternatingRowBackgroundBehavior](/documentation/swiftui/alternatingrowbackgroundbehavior/enabled)
- [static let disabled: AlternatingRowBackgroundBehavior](/documentation/swiftui/alternatingrowbackgroundbehavior/disabled)
- [var backgroundProminence: BackgroundProminence](/documentation/swiftui/environmentvalues/backgroundprominence)
- [BackgroundProminence](/documentation/swiftui/backgroundprominence)

#### Getting background prominence

- [static let standard: BackgroundProminence](/documentation/swiftui/backgroundprominence/standard)
- [static let increased: BackgroundProminence](/documentation/swiftui/backgroundprominence/increased)

### Displaying a badge on a list item

- [func badge(_:)](/documentation/swiftui/view/badge(_:))
- [func badgeProminence(BadgeProminence) -> some View](/documentation/swiftui/view/badgeprominence(_:))
- [var badgeProminence: BadgeProminence](/documentation/swiftui/environmentvalues/badgeprominence)
- [BadgeProminence](/documentation/swiftui/badgeprominence)

#### Getting background prominence

- [static let standard: BadgeProminence](/documentation/swiftui/badgeprominence/standard)
- [static let increased: BadgeProminence](/documentation/swiftui/badgeprominence/increased)
- [static let decreased: BadgeProminence](/documentation/swiftui/badgeprominence/decreased)

### Configuring interaction

- [func swipeActions<T>(edge: HorizontalEdge, allowsFullSwipe: Bool, content: () -> T) -> some View](/documentation/swiftui/view/swipeactions(edge:allowsfullswipe:content:))
- [func selectionDisabled(Bool) -> some View](/documentation/swiftui/view/selectiondisabled(_:))
- [func listRowHoverEffect(HoverEffect?) -> some View](/documentation/swiftui/view/listrowhovereffect(_:))
- [func listRowHoverEffectDisabled(Bool) -> some View](/documentation/swiftui/view/listrowhovereffectdisabled(_:))

### Refreshing a list’s content

- [func refreshable(action: () async -> Void) -> some View](/documentation/swiftui/view/refreshable(action:))
- [var refresh: RefreshAction?](/documentation/swiftui/environmentvalues/refresh)
- [RefreshAction](/documentation/swiftui/refreshaction)

#### Calling the action

- [func callAsFunction() async](/documentation/swiftui/refreshaction/callasfunction())

### Editing a list

- [func moveDisabled(Bool) -> some View](/documentation/swiftui/view/movedisabled(_:))
- [func deleteDisabled(Bool) -> some View](/documentation/swiftui/view/deletedisabled(_:))
- [var editMode: Binding<EditMode>?](/documentation/swiftui/environmentvalues/editmode)
- [EditMode](/documentation/swiftui/editmode)

#### Getting edit modes

- [case active](/documentation/swiftui/editmode/active)
- [case inactive](/documentation/swiftui/editmode/inactive)
- [case transient](/documentation/swiftui/editmode/transient)

#### Checking for editing mode

- [var isEditing: Bool](/documentation/swiftui/editmode/isediting)
- [EditActions](/documentation/swiftui/editactions)

#### Getting edit operations

- [static var all: EditActions<Data>](/documentation/swiftui/editactions/all-45m4m)
- [static var all: EditActions<Data>](/documentation/swiftui/editactions/all-4dctm)
- [static var all: EditActions<Data>](/documentation/swiftui/editactions/all-4uyun)
- [static var all: EditActions<Data>](/documentation/swiftui/editactions/all-6ryvk)
- [static var delete: EditActions<Data>](/documentation/swiftui/editactions/delete)
- [static var move: EditActions<Data>](/documentation/swiftui/editactions/move)

#### Creating an edit operation

- [init(rawValue: Int)](/documentation/swiftui/editactions/init(rawvalue:))
- [let rawValue: Int](/documentation/swiftui/editactions/rawvalue)
- [EditableCollectionContent](/documentation/swiftui/editablecollectioncontent)
- [IndexedIdentifierCollection](/documentation/swiftui/indexedidentifiercollection)

### Configuring a section index

- [func listSectionIndexVisibility(Visibility) -> some View](/documentation/swiftui/view/listsectionindexvisibility(_:))
- [func sectionIndexLabel(_:)](/documentation/swiftui/view/sectionindexlabel(_:))
- [Tables](/documentation/swiftui/tables)

### Creating a table

- [Building a great Mac app with SwiftUI](/documentation/swiftui/building-a-great-mac-app-with-swiftui)
- [Table](/documentation/swiftui/table)

#### Creating a table from columns

- [init<Data>(Data, columns: () -> Columns)](/documentation/swiftui/table/init(_:columns:))
- [init(_:selection:columns:)](/documentation/swiftui/table/init(_:selection:columns:))

#### Creating a sortable table from columns

- [init<Data, Sort>(Data, sortOrder: Binding<[Sort]>, columns: () -> Columns)](/documentation/swiftui/table/init(_:sortorder:columns:))
- [init(_:selection:sortOrder:columns:)](/documentation/swiftui/table/init(_:selection:sortorder:columns:))

#### Creating a table from columns and rows

- [init(of: Value.Type, columns: () -> Columns, rows: () -> Rows)](/documentation/swiftui/table/init(of:columns:rows:))
- [init(of:selection:columns:rows:)](/documentation/swiftui/table/init(of:selection:columns:rows:))

#### Creating a sortable table from columns and rows

- [init<Sort>(of: Value.Type, sortOrder: Binding<[Sort]>, columns: () -> Columns, rows: () -> Rows)](/documentation/swiftui/table/init(of:sortorder:columns:rows:))
- [init(of:selection:sortOrder:columns:rows:)](/documentation/swiftui/table/init(of:selection:sortorder:columns:rows:))
- [init<Sort>(sortOrder: Binding<[Sort]>, columns: () -> Columns, rows: () -> Rows)](/documentation/swiftui/table/init(sortorder:columns:rows:))
- [init(selection:sortOrder:columns:rows:)](/documentation/swiftui/table/init(selection:sortorder:columns:rows:))

#### Creating a table with customizable columns

- [init<Data>(Data, columnCustomization: Binding<TableColumnCustomization<Value>>, columns: () -> Columns)](/documentation/swiftui/table/init(_:columncustomization:columns:))
- [init(_:selection:columnCustomization:columns:)](/documentation/swiftui/table/init(_:selection:columncustomization:columns:))
- [init(_:selection:sortOrder:columnCustomization:columns:)](/documentation/swiftui/table/init(_:selection:sortorder:columncustomization:columns:))
- [init<Data, Sort>(Data, sortOrder: Binding<[Sort]>, columnCustomization: Binding<TableColumnCustomization<Value>>, columns: () -> Columns)](/documentation/swiftui/table/init(_:sortorder:columncustomization:columns:))

#### Creating a table with dynamically customizable columns

- [init(of: Value.Type, columnCustomization: Binding<TableColumnCustomization<Value>>, columns: () -> Columns, rows: () -> Rows)](/documentation/swiftui/table/init(of:columncustomization:columns:rows:))
- [init(of:selection:columnCustomization:columns:rows:)](/documentation/swiftui/table/init(of:selection:columncustomization:columns:rows:))
- [init(of:selection:sortOrder:columnCustomization:columns:rows:)](/documentation/swiftui/table/init(of:selection:sortorder:columncustomization:columns:rows:))
- [init<Sort>(of: Value.Type, sortOrder: Binding<[Sort]>, columnCustomization: Binding<TableColumnCustomization<Value>>, columns: () -> Columns, rows: () -> Rows)](/documentation/swiftui/table/init(of:sortorder:columncustomization:columns:rows:))

#### Creating a hierarchical table

- [init<Data>(Data, children: KeyPath<Value, Data?>, columnCustomization: Binding<TableColumnCustomization<Value>>?, columns: () -> Columns)](/documentation/swiftui/table/init(_:children:columncustomization:columns:))
- [init(_:children:selection:columnCustomization:columns:)](/documentation/swiftui/table/init(_:children:selection:columncustomization:columns:))
- [init(_:children:selection:sortOrder:columnCustomization:columns:)](/documentation/swiftui/table/init(_:children:selection:sortorder:columncustomization:columns:))
- [init<Data, Sort>(Data, children: KeyPath<Data.Element, Data?>, sortOrder: Binding<[Sort]>, columnCustomization: Binding<TableColumnCustomization<Value>>?, columns: () -> Columns)](/documentation/swiftui/table/init(_:children:sortorder:columncustomization:columns:))
- [func tableStyle<S>(S) -> some View](/documentation/swiftui/view/tablestyle(_:))

### Creating columns

- [TableColumn](/documentation/swiftui/tablecolumn)

#### Creating an unsortable column

- [init(_:value:)](/documentation/swiftui/tablecolumn/init(_:value:))
- [init(_:content:)](/documentation/swiftui/tablecolumn/init(_:content:))

#### Creating a sortable column

- [init(_:value:content:)](/documentation/swiftui/tablecolumn/init(_:value:content:))
- [init(_:value:comparator:)](/documentation/swiftui/tablecolumn/init(_:value:comparator:))
- [init(_:value:comparator:content:)](/documentation/swiftui/tablecolumn/init(_:value:comparator:content:))
- [init(_:sortUsing:content:)](/documentation/swiftui/tablecolumn/init(_:sortusing:content:))

#### Setting the column width

- [func width(CGFloat?) -> TableColumn<RowValue, Sort, Content, Label>](/documentation/swiftui/tablecolumn/width(_:))
- [func width(min: CGFloat?, ideal: CGFloat?, max: CGFloat?) -> TableColumn<RowValue, Sort, Content, Label>](/documentation/swiftui/tablecolumn/width(min:ideal:max:))
- [func width() -> TableColumn<RowValue, Sort, Content, Label>](/documentation/swiftui/tablecolumn/width())
- [TableColumnContent](/documentation/swiftui/tablecolumncontent)

#### Getting the column body

- [var tableColumnBody: Self.TableColumnBody](/documentation/swiftui/tablecolumncontent/tablecolumnbody-swift.property)
- [TableColumnBody](/documentation/swiftui/tablecolumncontent/tablecolumnbody-swift.associatedtype)

#### Defining the row value

- [TableRowValue](/documentation/swiftui/tablecolumncontent/tablerowvalue)

#### Defining the comparator

- [TableColumnSortComparator](/documentation/swiftui/tablecolumncontent/tablecolumnsortcomparator)

#### Configuring the content

- [func alignment(TableColumnAlignment) -> some TableColumnContent<Self.TableRowValue, Self.TableColumnSortComparator>
](/documentation/swiftui/tablecolumncontent/alignment(_:))
- [func customizationID(String) -> some TableColumnContent<Self.TableRowValue, Self.TableColumnSortComparator>
](/documentation/swiftui/tablecolumncontent/customizationid(_:))
- [func defaultVisibility(Visibility) -> some TableColumnContent<Self.TableRowValue, Self.TableColumnSortComparator>
](/documentation/swiftui/tablecolumncontent/defaultvisibility(_:))
- [func disabledCustomizationBehavior(TableColumnCustomizationBehavior) -> some TableColumnContent<Self.TableRowValue, Self.TableColumnSortComparator>
](/documentation/swiftui/tablecolumncontent/disabledcustomizationbehavior(_:))
- [TableColumnAlignment](/documentation/swiftui/tablecolumnalignment)

#### Getting the alignment

- [static var automatic: TableColumnAlignment](/documentation/swiftui/tablecolumnalignment/automatic)
- [static var leading: TableColumnAlignment](/documentation/swiftui/tablecolumnalignment/leading)
- [static var center: TableColumnAlignment](/documentation/swiftui/tablecolumnalignment/center)
- [static var trailing: TableColumnAlignment](/documentation/swiftui/tablecolumnalignment/trailing)
- [static var numeric: TableColumnAlignment](/documentation/swiftui/tablecolumnalignment/numeric)
- [static func numeric(Locale.NumberingSystem) -> TableColumnAlignment](/documentation/swiftui/tablecolumnalignment/numeric(_:))
- [TableColumnBuilder](/documentation/swiftui/tablecolumnbuilder)

#### Building a column

- [static buildBlock(_:)](/documentation/swiftui/tablecolumnbuilder/buildblock(_:))
- [static buildBlock(_:_:)](/documentation/swiftui/tablecolumnbuilder/buildblock(_:_:))
- [static buildBlock(_:_:_:)](/documentation/swiftui/tablecolumnbuilder/buildblock(_:_:_:))
- [static buildBlock(_:_:_:_:)](/documentation/swiftui/tablecolumnbuilder/buildblock(_:_:_:_:))
- [static buildBlock(_:_:_:_:_:)](/documentation/swiftui/tablecolumnbuilder/buildblock(_:_:_:_:_:))
- [static buildBlock(_:_:_:_:_:_:)](/documentation/swiftui/tablecolumnbuilder/buildblock(_:_:_:_:_:_:))
- [static buildBlock(_:_:_:_:_:_:_:)](/documentation/swiftui/tablecolumnbuilder/buildblock(_:_:_:_:_:_:_:))
- [static buildBlock(_:_:_:_:_:_:_:_:)](/documentation/swiftui/tablecolumnbuilder/buildblock(_:_:_:_:_:_:_:_:))
- [static buildBlock(_:_:_:_:_:_:_:_:_:)](/documentation/swiftui/tablecolumnbuilder/buildblock(_:_:_:_:_:_:_:_:_:))
- [static buildBlock(_:_:_:_:_:_:_:_:_:_:)](/documentation/swiftui/tablecolumnbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:))
- [static buildExpression(_:)](/documentation/swiftui/tablecolumnbuilder/buildexpression(_:))

#### Supporting types

- [TupleTableColumnContent](/documentation/swiftui/tupletablecolumncontent)

##### Accessing the value

- [var value: T](/documentation/swiftui/tupletablecolumncontent/value)

#### Type Methods

- [static buildEither(first:)](/documentation/swiftui/tablecolumnbuilder/buildeither(first:))
- [static buildEither(second:)](/documentation/swiftui/tablecolumnbuilder/buildeither(second:))
- [static buildIf(_:)](/documentation/swiftui/tablecolumnbuilder/buildif(_:))
- [static buildLimitedAvailability(_:)](/documentation/swiftui/tablecolumnbuilder/buildlimitedavailability(_:))
- [TableColumnForEach](/documentation/swiftui/tablecolumnforeach)

#### Creating the collection

- [init(_:content:)](/documentation/swiftui/tablecolumnforeach/init(_:content:))
- [init(Data, id: KeyPath<Data.Element, ID>, content: (Data.Element) -> Content)](/documentation/swiftui/tablecolumnforeach/init(_:id:content:))

#### Accessing collection content

- [var content: (Data.Element) -> Content](/documentation/swiftui/tablecolumnforeach/content)
- [var data: Data](/documentation/swiftui/tablecolumnforeach/data)

### Customizing columns

- [func tableColumnHeaders(Visibility) -> some View](/documentation/swiftui/view/tablecolumnheaders(_:))
- [TableColumnCustomization](/documentation/swiftui/tablecolumncustomization)

#### Creating a table column customization

- [init()](/documentation/swiftui/tablecolumncustomization/init())

#### Managing the customization

- [func resetOrder()](/documentation/swiftui/tablecolumncustomization/resetorder())
- [subscript(visibility _: String) -> Visibility](/documentation/swiftui/tablecolumncustomization/subscript(visibility:))
- [TableColumnCustomizationBehavior](/documentation/swiftui/tablecolumncustomizationbehavior)

#### Getting the customization behavior

- [static var all: TableColumnCustomizationBehavior](/documentation/swiftui/tablecolumncustomizationbehavior/all)
- [static let reorder: TableColumnCustomizationBehavior](/documentation/swiftui/tablecolumncustomizationbehavior/reorder)
- [static let resize: TableColumnCustomizationBehavior](/documentation/swiftui/tablecolumncustomizationbehavior/resize)
- [static let visibility: TableColumnCustomizationBehavior](/documentation/swiftui/tablecolumncustomizationbehavior/visibility)

#### Creating a behavior

- [init()](/documentation/swiftui/tablecolumncustomizationbehavior/init())

### Creating rows

- [TableRow](/documentation/swiftui/tablerow)

#### Creating a row

- [init(Value)](/documentation/swiftui/tablerow/init(_:))
- [TableRowContent](/documentation/swiftui/tablerowcontent)

#### Getting the row body

- [var tableRowBody: Self.TableRowBody](/documentation/swiftui/tablerowcontent/tablerowbody-swift.property)
- [TableRowBody](/documentation/swiftui/tablerowcontent/tablerowbody-swift.associatedtype)

#### Defining the row value

- [TableRowValue](/documentation/swiftui/tablerowcontent/tablerowvalue)

#### Managing interaction

- [func draggable<T>(@autoclosure () -> T) -> some TableRowContent<Self.TableRowValue>
](/documentation/swiftui/tablerowcontent/draggable(_:))
- [func dropDestination<T>(for: T.Type, action: ([T]) -> Void) -> some TableRowContent<Self.TableRowValue>
](/documentation/swiftui/tablerowcontent/dropdestination(for:action:))
- [func onHover(perform: (Bool) -> Void) -> some TableRowContent<Self.TableRowValue>
](/documentation/swiftui/tablerowcontent/onhover(perform:))
- [func itemProvider((() -> NSItemProvider?)?) -> ModifiedContent<Self, ItemProviderTableRowModifier>](/documentation/swiftui/tablerowcontent/itemprovider(_:))
- [ItemProviderTableRowModifier](/documentation/swiftui/itemprovidertablerowmodifier)

##### Instance Properties

- [var body: some _TableRowContentModifier](/documentation/swiftui/itemprovidertablerowmodifier/body-swift.property)

##### Type Aliases

- [ItemProviderTableRowModifier.Body](/documentation/swiftui/itemprovidertablerowmodifier/body-swift.typealias)

#### Adding a context menu to a row

- [func contextMenu<M>(menuItems: () -> M) -> ModifiedContent<Self, _ContextMenuTableRowModifier<M>>](/documentation/swiftui/tablerowcontent/contextmenu(menuitems:))
- [func contextMenu<M, P>(menuItems: () -> M, preview: () -> P) -> ModifiedContent<Self, _ContextMenuPreviewTableRowModifier<M, P>>](/documentation/swiftui/tablerowcontent/contextmenu(menuitems:preview:))

#### Instance Methods

- [func selectionDisabled(Bool) -> some TableRowContent<Self.TableRowValue>
](/documentation/swiftui/tablerowcontent/selectiondisabled(_:))
- [TableHeaderRowContent](/documentation/swiftui/tableheaderrowcontent)
- [TupleTableRowContent](/documentation/swiftui/tupletablerowcontent)

#### Accessing the value

- [var value: T](/documentation/swiftui/tupletablerowcontent/value)
- [TableForEachContent](/documentation/swiftui/tableforeachcontent)
- [EmptyTableRowContent](/documentation/swiftui/emptytablerowcontent)
- [DynamicTableRowContent](/documentation/swiftui/dynamictablerowcontent)

#### Getting row data

- [var data: Self.Data](/documentation/swiftui/dynamictablerowcontent/data-swift.property)
- [Data](/documentation/swiftui/dynamictablerowcontent/data-swift.associatedtype)

#### Inserting rows

- [func onInsert(of: [UTType], perform: (Int, [NSItemProvider]) -> Void) -> ModifiedContent<Self, OnInsertTableRowModifier>](/documentation/swiftui/dynamictablerowcontent/oninsert(of:perform:))
- [OnInsertTableRowModifier](/documentation/swiftui/oninserttablerowmodifier)

##### Instance Properties

- [var body: some _TableRowContentModifier](/documentation/swiftui/oninserttablerowmodifier/body-swift.property)

##### Type Aliases

- [OnInsertTableRowModifier.Body](/documentation/swiftui/oninserttablerowmodifier/body-swift.typealias)

#### Supporting drag and drop

- [func dropDestination<T>(for: T.Type, action: (Int, [T]) -> Void) -> ModifiedContent<Self, OnInsertTableRowModifier>](/documentation/swiftui/dynamictablerowcontent/dropdestination(for:action:))
- [TableRowBuilder](/documentation/swiftui/tablerowbuilder)

#### Building a row from sources

- [static func buildBlock<C>(C) -> C](/documentation/swiftui/tablerowbuilder/buildblock(_:))
- [static func buildBlock<C0, C1>(C0, C1) -> TupleTableRowContent<Value, (C0, C1)>](/documentation/swiftui/tablerowbuilder/buildblock(_:_:))
- [static func buildBlock<C0, C1, C2>(C0, C1, C2) -> TupleTableRowContent<Value, (C0, C1, C2)>](/documentation/swiftui/tablerowbuilder/buildblock(_:_:_:))
- [static func buildBlock<C0, C1, C2, C3>(C0, C1, C2, C3) -> TupleTableRowContent<Value, (C0, C1, C2, C3)>](/documentation/swiftui/tablerowbuilder/buildblock(_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4>(C0, C1, C2, C3, C4) -> TupleTableRowContent<Value, (C0, C1, C2, C3, C4)>](/documentation/swiftui/tablerowbuilder/buildblock(_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5>(C0, C1, C2, C3, C4, C5) -> TupleTableRowContent<Value, (C0, C1, C2, C3, C4, C5)>](/documentation/swiftui/tablerowbuilder/buildblock(_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6>(C0, C1, C2, C3, C4, C5, C6) -> TupleTableRowContent<Value, (C0, C1, C2, C3, C4, C5, C6)>](/documentation/swiftui/tablerowbuilder/buildblock(_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7>(C0, C1, C2, C3, C4, C5, C6, C7) -> TupleTableRowContent<Value, (C0, C1, C2, C3, C4, C5, C6, C7)>](/documentation/swiftui/tablerowbuilder/buildblock(_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8>(C0, C1, C2, C3, C4, C5, C6, C7, C8) -> TupleTableRowContent<Value, (C0, C1, C2, C3, C4, C5, C6, C7, C8)>](/documentation/swiftui/tablerowbuilder/buildblock(_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9) -> TupleTableRowContent<Value, (C0, C1, C2, C3, C4, C5, C6, C7, C8, C9)>](/documentation/swiftui/tablerowbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:))

#### Building a row from conditionals

- [static func buildIf<C>(C?) -> C?](/documentation/swiftui/tablerowbuilder/buildif(_:))
- [static func buildEither<T, F>(first: T) -> _ConditionalContent<T, F>](/documentation/swiftui/tablerowbuilder/buildeither(first:))
- [static func buildEither<T, F>(second: F) -> _ConditionalContent<T, F>](/documentation/swiftui/tablerowbuilder/buildeither(second:))
- [static func buildExpression<Content>(Content) -> Content](/documentation/swiftui/tablerowbuilder/buildexpression(_:))

### Adding progressive disclosure

- [DisclosureTableRow](/documentation/swiftui/disclosuretablerow)

#### Creating a disclosure table row

- [init<Value>(Value, isExpanded: Binding<Bool>?, content: () -> Content)](/documentation/swiftui/disclosuretablerow/init(_:isexpanded:content:))
- [TableOutlineGroupContent](/documentation/swiftui/tableoutlinegroupcontent)
- [View groupings](/documentation/swiftui/view-groupings)

### Grouping views into a container

- [Creating custom container views](/documentation/swiftui/creating-custom-container-views)
- [Group](/documentation/swiftui/group)

#### Creating a group

- [init(content:)](/documentation/swiftui/group/init(content:))

#### Initializers

- [init<Base, Result>(sections: Base, transform: (SectionCollection) -> Result)](/documentation/swiftui/group/init(sections:transform:))
- [init<Base, Result>(subviews: Base, transform: (SubviewsCollection) -> Result)](/documentation/swiftui/group/init(subviews:transform:))
- [GroupElementsOfContent](/documentation/swiftui/groupelementsofcontent)
- [GroupSectionsOfContent](/documentation/swiftui/groupsectionsofcontent)

### Organizing views into sections

- [Section](/documentation/swiftui/section)

#### Creating a section

- [init(content:)](/documentation/swiftui/section/init(content:))
- [init(_:content:)](/documentation/swiftui/section/init(_:content:))

#### Adding headers and footers

- [init(content:header:)](/documentation/swiftui/section/init(content:header:))
- [init(content: () -> Content, footer: () -> Footer)](/documentation/swiftui/section/init(content:footer:))
- [init(content: () -> Content, header: () -> Parent, footer: () -> Footer)](/documentation/swiftui/section/init(content:header:footer:))

#### Controlling collapsibility

- [init(_:isExpanded:content:)](/documentation/swiftui/section/init(_:isexpanded:content:))
- [init(isExpanded:content:header:)](/documentation/swiftui/section/init(isexpanded:content:header:))

#### Deprecated symbols

- [init(header: Parent, content: () -> Content)](/documentation/swiftui/section/init(header:content:))
- [init(footer: Footer, content: () -> Content)](/documentation/swiftui/section/init(footer:content:))
- [init(header: Parent, footer: Footer, content: () -> Content)](/documentation/swiftui/section/init(header:footer:content:))
- [func collapsible(Bool) -> some View](/documentation/swiftui/section/collapsible(_:))
- [SectionCollection](/documentation/swiftui/sectioncollection)
- [SectionConfiguration](/documentation/swiftui/sectionconfiguration)

#### Structures

- [SectionConfiguration.Actions](/documentation/swiftui/sectionconfiguration/actions-swift.struct)
- [SectionConfiguration.ID](/documentation/swiftui/sectionconfiguration/id-swift.struct)

#### Instance Properties

- [var actions: SectionConfiguration.Actions](/documentation/swiftui/sectionconfiguration/actions-swift.property)
- [var containerValues: ContainerValues](/documentation/swiftui/sectionconfiguration/containervalues)
- [var content: SubviewsCollection](/documentation/swiftui/sectionconfiguration/content)
- [var footer: SubviewsCollection](/documentation/swiftui/sectionconfiguration/footer)
- [var header: SubviewsCollection](/documentation/swiftui/sectionconfiguration/header)
- [var id: SectionConfiguration.ID](/documentation/swiftui/sectionconfiguration/id-swift.property)

### Iterating over dynamic data

- [ForEach](/documentation/swiftui/foreach)

#### Creating a collection

- [init(Data)](/documentation/swiftui/foreach/init(_:))
- [init(_:content:)](/documentation/swiftui/foreach/init(_:content:))
- [init(_:id:content:)](/documentation/swiftui/foreach/init(_:id:content:))

#### Creating an editable collection

- [init<C, R>(Binding<C>, editActions: EditActions<C>, content: (Binding<C.Element>) -> R)](/documentation/swiftui/foreach/init(_:editactions:content:))
- [init<C, R>(Binding<C>, id: KeyPath<C.Element, ID>, editActions: EditActions<C>, content: (Binding<C.Element>) -> R)](/documentation/swiftui/foreach/init(_:id:editactions:content:))

#### Accessing content

- [var content: (Data.Element) -> Content](/documentation/swiftui/foreach/content)
- [var data: Data](/documentation/swiftui/foreach/data)

#### Initializers

- [init<V>(sections: V, content: (SectionConfiguration) -> Content)](/documentation/swiftui/foreach/init(sections:content:))
- [init<V>(subviews: V, content: (Subview) -> Content)](/documentation/swiftui/foreach/init(subviews:content:))
- [ForEachSectionCollection](/documentation/swiftui/foreachsectioncollection)
- [ForEachSubviewCollection](/documentation/swiftui/foreachsubviewcollection)
- [DynamicViewContent](/documentation/swiftui/dynamicviewcontent)

#### Managing the data

- [var data: Self.Data](/documentation/swiftui/dynamicviewcontent/data-swift.property)
- [Data](/documentation/swiftui/dynamicviewcontent/data-swift.associatedtype)

#### Responding to updates

- [func onDelete(perform: Optional<(IndexSet) -> Void>) -> some DynamicViewContent](/documentation/swiftui/dynamicviewcontent/ondelete(perform:))
- [func onInsert(of: [UTType], perform: (Int, [NSItemProvider]) -> Void) -> some DynamicViewContent](/documentation/swiftui/dynamicviewcontent/oninsert(of:perform:)-418bq)
- [func onMove(perform: Optional<(IndexSet, Int) -> Void>) -> some DynamicViewContent](/documentation/swiftui/dynamicviewcontent/onmove(perform:))
- [func dropDestination<T>(for: T.Type, action: ([T], Int) -> Void) -> some DynamicViewContent](/documentation/swiftui/dynamicviewcontent/dropdestination(for:action:))

#### Deprecated symbols

- [func onInsert(of: [String], perform: (Int, [NSItemProvider]) -> Void) -> some DynamicViewContent](/documentation/swiftui/dynamicviewcontent/oninsert(of:perform:)-40hwa)

#### Instance Methods

- [func onInsert(of:perform:)](/documentation/swiftui/dynamicviewcontent/oninsert(of:perform:))

### Accessing a container’s subviews

- [Subview](/documentation/swiftui/subview)

#### Structures

- [Subview.ID](/documentation/swiftui/subview/id-swift.struct)

#### Instance Properties

- [var containerValues: ContainerValues](/documentation/swiftui/subview/containervalues)
- [var id: Subview.ID](/documentation/swiftui/subview/id-swift.property)

#### Enumerations

- [Subview.ContainerSizingOptions](/documentation/swiftui/subview/containersizingoptions)

##### Enumeration Cases

- [case uniform(axis: Axis.Set)](/documentation/swiftui/subview/containersizingoptions/uniform(axis:))
- [case variable](/documentation/swiftui/subview/containersizingoptions/variable)
- [SubviewsCollection](/documentation/swiftui/subviewscollection)
- [SubviewsCollectionSlice](/documentation/swiftui/subviewscollectionslice)
- [func containerValue<V>(WritableKeyPath<ContainerValues, V>, V) -> some View](/documentation/swiftui/view/containervalue(_:_:))
- [ContainerValues](/documentation/swiftui/containervalues)

#### Instance Methods

- [func hasTag<V>(V) -> Bool](/documentation/swiftui/containervalues/hastag(_:))
- [func tag<V>(for: V.Type) -> V?](/documentation/swiftui/containervalues/tag(for:))

#### Subscripts

- [subscript<Key>(Key.Type) -> Key.Value](/documentation/swiftui/containervalues/subscript(_:))
- [ContainerValueKey](/documentation/swiftui/containervaluekey)

#### Associated Types

- [Value](/documentation/swiftui/containervaluekey/value)

#### Type Properties

- [static var defaultValue: Self.Value](/documentation/swiftui/containervaluekey/defaultvalue)

### Grouping views into a box

- [GroupBox](/documentation/swiftui/groupbox)

#### Creating a group box

- [init(content: () -> Content)](/documentation/swiftui/groupbox/init(content:))
- [init(content: () -> Content, label: () -> Label)](/documentation/swiftui/groupbox/init(content:label:))
- [init(_:content:)](/documentation/swiftui/groupbox/init(_:content:))

#### Creating a group box from a configuration

- [init(GroupBoxStyleConfiguration)](/documentation/swiftui/groupbox/init(_:))

#### Deprecated initializers

- [init(label: Label, content: () -> Content)](/documentation/swiftui/groupbox/init(label:content:))
- [func groupBoxStyle<S>(S) -> some View](/documentation/swiftui/view/groupboxstyle(_:))

### Grouping inputs

- [Form](/documentation/swiftui/form)

#### Creating a form

- [init(content: () -> Content)](/documentation/swiftui/form/init(content:))

#### Creating a form from a configuration

- [init(FormStyleConfiguration)](/documentation/swiftui/form/init(_:))
- [func formStyle<S>(S) -> some View](/documentation/swiftui/view/formstyle(_:))
- [LabeledContent](/documentation/swiftui/labeledcontent)

#### Creating labeled content

- [init(_:content:)](/documentation/swiftui/labeledcontent/init(_:content:))
- [init(content: () -> Content, label: () -> Label)](/documentation/swiftui/labeledcontent/init(content:label:))
- [init(_:value:)](/documentation/swiftui/labeledcontent/init(_:value:))
- [init(_:value:format:)](/documentation/swiftui/labeledcontent/init(_:value:format:))
- [init(LabeledContentStyleConfiguration)](/documentation/swiftui/labeledcontent/init(_:))
- [func labeledContentStyle<S>(S) -> some View](/documentation/swiftui/view/labeledcontentstyle(_:))

### Presenting a group of controls

- [ControlGroup](/documentation/swiftui/controlgroup)

#### Creating a control group

- [init(content: () -> Content)](/documentation/swiftui/controlgroup/init(content:))
- [init<C, L>(content: () -> C, label: () -> L)](/documentation/swiftui/controlgroup/init(content:label:))
- [init(_:content:)](/documentation/swiftui/controlgroup/init(_:content:))

#### Creating a control group with an image

- [init(_:image:content:)](/documentation/swiftui/controlgroup/init(_:image:content:))
- [init(_:systemImage:content:)](/documentation/swiftui/controlgroup/init(_:systemimage:content:))

#### Creating a configured control group

- [init(ControlGroupStyleConfiguration)](/documentation/swiftui/controlgroup/init(_:))

#### Supporting types

- [LabeledControlGroupContent](/documentation/swiftui/labeledcontrolgroupcontent)
- [func controlGroupStyle<S>(S) -> some View](/documentation/swiftui/view/controlgroupstyle(_:))
- [Scroll views](/documentation/swiftui/scroll-views)

### Creating a scroll view

- [ScrollView](/documentation/swiftui/scrollview)

#### Creating a scroll view

- [init(Axis.Set, showsIndicators: Bool, content: () -> Content)](/documentation/swiftui/scrollview/init(_:showsindicators:content:))
- [init(Axis.Set, content: () -> Content)](/documentation/swiftui/scrollview/init(_:content:))

#### Configuring a scroll view

- [var content: Content](/documentation/swiftui/scrollview/content)
- [var axes: Axis.Set](/documentation/swiftui/scrollview/axes)
- [var showsIndicators: Bool](/documentation/swiftui/scrollview/showsindicators)

#### Supporting types

- [var body: some View](/documentation/swiftui/scrollview/body)
- [ScrollViewReader](/documentation/swiftui/scrollviewreader)

#### Creating a scroll view reader

- [init(content: (ScrollViewProxy) -> Content)](/documentation/swiftui/scrollviewreader/init(content:))

#### Configuring a scroll view reader

- [var content: (ScrollViewProxy) -> Content](/documentation/swiftui/scrollviewreader/content)
- [ScrollViewProxy](/documentation/swiftui/scrollviewproxy)

#### Performing scrolling

- [func scrollTo<ID>(ID, anchor: UnitPoint?)](/documentation/swiftui/scrollviewproxy/scrollto(_:anchor:))

### Managing scroll position

- [func scrollPosition(Binding<ScrollPosition>, anchor: UnitPoint?) -> some View](/documentation/swiftui/view/scrollposition(_:anchor:))
- [func scrollPosition(id: Binding<(some Hashable)?>, anchor: UnitPoint?) -> some View](/documentation/swiftui/view/scrollposition(id:anchor:))
- [func defaultScrollAnchor(UnitPoint?) -> some View](/documentation/swiftui/view/defaultscrollanchor(_:))
- [func defaultScrollAnchor(UnitPoint?, for: ScrollAnchorRole) -> some View](/documentation/swiftui/view/defaultscrollanchor(_:for:))
- [ScrollAnchorRole](/documentation/swiftui/scrollanchorrole)

#### Type Properties

- [static var alignment: ScrollAnchorRole](/documentation/swiftui/scrollanchorrole/alignment)
- [static var initialOffset: ScrollAnchorRole](/documentation/swiftui/scrollanchorrole/initialoffset)
- [static var sizeChanges: ScrollAnchorRole](/documentation/swiftui/scrollanchorrole/sizechanges)
- [ScrollPosition](/documentation/swiftui/scrollposition)

#### Initializers

- [init(id: some Hashable & Sendable, anchor: UnitPoint?)](/documentation/swiftui/scrollposition/init(id:anchor:))
- [init(idType: (some Hashable & Sendable).Type)](/documentation/swiftui/scrollposition/init(idtype:))
- [init(idType: (some Hashable & Sendable).Type, edge: Edge)](/documentation/swiftui/scrollposition/init(idtype:edge:))
- [init(idType: (some Hashable & Sendable).Type, point: CGPoint)](/documentation/swiftui/scrollposition/init(idtype:point:))
- [init(idType: (some Hashable & Sendable).Type, x: CGFloat)](/documentation/swiftui/scrollposition/init(idtype:x:))
- [init(idType: (some Hashable & Sendable).Type, x: CGFloat, y: CGFloat)](/documentation/swiftui/scrollposition/init(idtype:x:y:))
- [init(idType: (some Hashable & Sendable).Type, y: CGFloat)](/documentation/swiftui/scrollposition/init(idtype:y:))

#### Instance Properties

- [var edge: Edge?](/documentation/swiftui/scrollposition/edge)
- [var isPositionedByUser: Bool](/documentation/swiftui/scrollposition/ispositionedbyuser)
- [var point: CGPoint?](/documentation/swiftui/scrollposition/point)
- [var viewID: (any Hashable & Sendable)?](/documentation/swiftui/scrollposition/viewid)
- [var x: CGFloat?](/documentation/swiftui/scrollposition/x)
- [var y: CGFloat?](/documentation/swiftui/scrollposition/y)

#### Instance Methods

- [func scrollTo(edge: Edge)](/documentation/swiftui/scrollposition/scrollto(edge:))
- [func scrollTo(id: some Hashable & Sendable, anchor: UnitPoint?)](/documentation/swiftui/scrollposition/scrollto(id:anchor:))
- [func scrollTo(point: CGPoint)](/documentation/swiftui/scrollposition/scrollto(point:))
- [func scrollTo(x: CGFloat)](/documentation/swiftui/scrollposition/scrollto(x:))
- [func scrollTo(x: CGFloat, y: CGFloat)](/documentation/swiftui/scrollposition/scrollto(x:y:))
- [func scrollTo(y: CGFloat)](/documentation/swiftui/scrollposition/scrollto(y:))
- [func viewID<T>(type: T.Type) -> T?](/documentation/swiftui/scrollposition/viewid(type:))

### Defining scroll targets

- [func scrollTargetBehavior(some ScrollTargetBehavior) -> some View](/documentation/swiftui/view/scrolltargetbehavior(_:))
- [func scrollTargetLayout(isEnabled: Bool) -> some View](/documentation/swiftui/view/scrolltargetlayout(isenabled:))
- [ScrollTarget](/documentation/swiftui/scrolltarget)

#### Getting the scroll target

- [var anchor: UnitPoint?](/documentation/swiftui/scrolltarget/anchor)
- [var rect: CGRect](/documentation/swiftui/scrolltarget/rect)
- [ScrollTargetBehavior](/documentation/swiftui/scrolltargetbehavior)

#### Getting the scroll target behavior

- [static var paging: PagingScrollTargetBehavior](/documentation/swiftui/scrolltargetbehavior/paging)
- [static var viewAligned: ViewAlignedScrollTargetBehavior](/documentation/swiftui/scrolltargetbehavior/viewaligned)
- [static func viewAligned(limitBehavior: ViewAlignedScrollTargetBehavior.LimitBehavior) -> Self](/documentation/swiftui/scrolltargetbehavior/viewaligned(limitbehavior:))

#### Updating the proposed target

- [func updateTarget(inout ScrollTarget, context: Self.TargetContext)](/documentation/swiftui/scrolltargetbehavior/updatetarget(_:context:))
- [ScrollTargetBehavior.TargetContext](/documentation/swiftui/scrolltargetbehavior/targetcontext)

#### Instance Methods

- [func properties(context: Self.PropertiesContext) -> Self.Properties](/documentation/swiftui/scrolltargetbehavior/properties(context:))

#### Type Aliases

- [ScrollTargetBehavior.Properties](/documentation/swiftui/scrolltargetbehavior/properties)
- [ScrollTargetBehavior.PropertiesContext](/documentation/swiftui/scrolltargetbehavior/propertiescontext)

#### Type Methods

- [static func viewAligned(anchor: UnitPoint?) -> Self](/documentation/swiftui/scrolltargetbehavior/viewaligned(anchor:))
- [static func viewAligned(limitBehavior: ViewAlignedScrollTargetBehavior.LimitBehavior, anchor: UnitPoint?) -> Self](/documentation/swiftui/scrolltargetbehavior/viewaligned(limitbehavior:anchor:))
- [ScrollTargetBehaviorContext](/documentation/swiftui/scrolltargetbehaviorcontext)

#### Getting the scroll target behavior context

- [var axes: Axis.Set](/documentation/swiftui/scrolltargetbehaviorcontext/axes)
- [var containerSize: CGSize](/documentation/swiftui/scrolltargetbehaviorcontext/containersize)
- [var contentSize: CGSize](/documentation/swiftui/scrolltargetbehaviorcontext/contentsize)
- [var originalTarget: ScrollTarget](/documentation/swiftui/scrolltargetbehaviorcontext/originaltarget)
- [var velocity: CGVector](/documentation/swiftui/scrolltargetbehaviorcontext/velocity)

#### Accessing the context

- [subscript<T>(dynamicMember _: KeyPath<EnvironmentValues, T>) -> T](/documentation/swiftui/scrolltargetbehaviorcontext/subscript(dynamicmember:))
- [PagingScrollTargetBehavior](/documentation/swiftui/pagingscrolltargetbehavior)

#### Creating the target behavior

- [init()](/documentation/swiftui/pagingscrolltargetbehavior/init())
- [ViewAlignedScrollTargetBehavior](/documentation/swiftui/viewalignedscrolltargetbehavior)

#### Creating the target behavior

- [init(limitBehavior: ViewAlignedScrollTargetBehavior.LimitBehavior)](/documentation/swiftui/viewalignedscrolltargetbehavior/init(limitbehavior:))
- [ViewAlignedScrollTargetBehavior.LimitBehavior](/documentation/swiftui/viewalignedscrolltargetbehavior/limitbehavior)

##### Getting the limit behavior

- [static var automatic: ViewAlignedScrollTargetBehavior.LimitBehavior](/documentation/swiftui/viewalignedscrolltargetbehavior/limitbehavior/automatic)
- [static var always: ViewAlignedScrollTargetBehavior.LimitBehavior](/documentation/swiftui/viewalignedscrolltargetbehavior/limitbehavior/always)
- [static var never: ViewAlignedScrollTargetBehavior.LimitBehavior](/documentation/swiftui/viewalignedscrolltargetbehavior/limitbehavior/never)

##### Type Properties

- [static var alwaysByFew: ViewAlignedScrollTargetBehavior.LimitBehavior](/documentation/swiftui/viewalignedscrolltargetbehavior/limitbehavior/alwaysbyfew)
- [static var alwaysByOne: ViewAlignedScrollTargetBehavior.LimitBehavior](/documentation/swiftui/viewalignedscrolltargetbehavior/limitbehavior/alwaysbyone)

#### Initializers

- [init(anchor: UnitPoint?)](/documentation/swiftui/viewalignedscrolltargetbehavior/init(anchor:))
- [init(limitBehavior: ViewAlignedScrollTargetBehavior.LimitBehavior, anchor: UnitPoint?)](/documentation/swiftui/viewalignedscrolltargetbehavior/init(limitbehavior:anchor:))
- [AnyScrollTargetBehavior](/documentation/swiftui/anyscrolltargetbehavior)

#### Initializers

- [init(some ScrollTargetBehavior)](/documentation/swiftui/anyscrolltargetbehavior/init(_:))

#### Instance Properties

- [var base: any ScrollTargetBehavior](/documentation/swiftui/anyscrolltargetbehavior/base)
- [ScrollTargetBehaviorProperties](/documentation/swiftui/scrolltargetbehaviorproperties)

#### Initializers

- [init()](/documentation/swiftui/scrolltargetbehaviorproperties/init())

#### Instance Properties

- [var limitsScrolls: Bool](/documentation/swiftui/scrolltargetbehaviorproperties/limitsscrolls)
- [ScrollTargetBehaviorPropertiesContext](/documentation/swiftui/scrolltargetbehaviorpropertiescontext)

#### Instance Properties

- [var axes: Axis.Set](/documentation/swiftui/scrolltargetbehaviorpropertiescontext/axes)
- [var environment: EnvironmentValues](/documentation/swiftui/scrolltargetbehaviorpropertiescontext/environment)

### Animating scroll transitions

- [func scrollTransition(ScrollTransitionConfiguration, axis: Axis?, transition: (EmptyVisualEffect, ScrollTransitionPhase) -> some VisualEffect) -> some View](/documentation/swiftui/view/scrolltransition(_:axis:transition:))
- [func scrollTransition(topLeading: ScrollTransitionConfiguration, bottomTrailing: ScrollTransitionConfiguration, axis: Axis?, transition: (EmptyVisualEffect, ScrollTransitionPhase) -> some VisualEffect) -> some View](/documentation/swiftui/view/scrolltransition(topleading:bottomtrailing:axis:transition:))
- [ScrollTransitionPhase](/documentation/swiftui/scrolltransitionphase)

#### Getting the phase

- [case identity](/documentation/swiftui/scrolltransitionphase/identity)
- [case topLeading](/documentation/swiftui/scrolltransitionphase/topleading)
- [case bottomTrailing](/documentation/swiftui/scrolltransitionphase/bottomtrailing)

#### Accessing the phase state

- [var isIdentity: Bool](/documentation/swiftui/scrolltransitionphase/isidentity)
- [var value: Double](/documentation/swiftui/scrolltransitionphase/value)
- [ScrollTransitionConfiguration](/documentation/swiftui/scrolltransitionconfiguration)

#### Getting the configuration

- [static let identity: ScrollTransitionConfiguration](/documentation/swiftui/scrolltransitionconfiguration/identity)
- [static let animated: ScrollTransitionConfiguration](/documentation/swiftui/scrolltransitionconfiguration/animated)
- [static func animated(Animation) -> ScrollTransitionConfiguration](/documentation/swiftui/scrolltransitionconfiguration/animated(_:))
- [static let interactive: ScrollTransitionConfiguration](/documentation/swiftui/scrolltransitionconfiguration/interactive)
- [static func interactive(timingCurve: UnitCurve) -> ScrollTransitionConfiguration](/documentation/swiftui/scrolltransitionconfiguration/interactive(timingcurve:))

#### Accessing the configuration

- [func animation(Animation) -> ScrollTransitionConfiguration](/documentation/swiftui/scrolltransitionconfiguration/animation(_:))
- [func threshold(ScrollTransitionConfiguration.Threshold) -> ScrollTransitionConfiguration](/documentation/swiftui/scrolltransitionconfiguration/threshold(_:))
- [ScrollTransitionConfiguration.Threshold](/documentation/swiftui/scrolltransitionconfiguration/threshold)

##### Getting the threshold

- [static var centered: ScrollTransitionConfiguration.Threshold](/documentation/swiftui/scrolltransitionconfiguration/threshold/centered)
- [static let hidden: ScrollTransitionConfiguration.Threshold](/documentation/swiftui/scrolltransitionconfiguration/threshold/hidden)
- [static let visible: ScrollTransitionConfiguration.Threshold](/documentation/swiftui/scrolltransitionconfiguration/threshold/visible)
- [static func visible(Double) -> ScrollTransitionConfiguration.Threshold](/documentation/swiftui/scrolltransitionconfiguration/threshold/visible(_:))

##### Modifying the threshold

- [func inset(by: Double) -> ScrollTransitionConfiguration.Threshold](/documentation/swiftui/scrolltransitionconfiguration/threshold/inset(by:))
- [func interpolated(towards: ScrollTransitionConfiguration.Threshold, amount: Double) -> ScrollTransitionConfiguration.Threshold](/documentation/swiftui/scrolltransitionconfiguration/threshold/interpolated(towards:amount:))

### Responding to scroll view changes

- [func onScrollGeometryChange<T>(for: T.Type, of: (ScrollGeometry) -> T, action: (T, T) -> Void) -> some View](/documentation/swiftui/view/onscrollgeometrychange(for:of:action:))
- [func onScrollTargetVisibilityChange<ID>(idType: ID.Type, threshold: Double, ([ID]) -> Void) -> some View](/documentation/swiftui/view/onscrolltargetvisibilitychange(idtype:threshold:_:))
- [func onScrollVisibilityChange(threshold: Double, (Bool) -> Void) -> some View](/documentation/swiftui/view/onscrollvisibilitychange(threshold:_:))
- [func onScrollPhaseChange(_:)](/documentation/swiftui/view/onscrollphasechange(_:))
- [ScrollGeometry](/documentation/swiftui/scrollgeometry)

#### Initializers

- [init(contentOffset: CGPoint, contentSize: CGSize, contentInsets: EdgeInsets, containerSize: CGSize)](/documentation/swiftui/scrollgeometry/init(contentoffset:contentsize:contentinsets:containersize:))

#### Instance Properties

- [var bounds: CGRect](/documentation/swiftui/scrollgeometry/bounds)
- [var containerSize: CGSize](/documentation/swiftui/scrollgeometry/containersize)
- [var contentInsets: EdgeInsets](/documentation/swiftui/scrollgeometry/contentinsets)
- [var contentOffset: CGPoint](/documentation/swiftui/scrollgeometry/contentoffset)
- [var contentSize: CGSize](/documentation/swiftui/scrollgeometry/contentsize)
- [var visibleRect: CGRect](/documentation/swiftui/scrollgeometry/visiblerect)
- [ScrollPhase](/documentation/swiftui/scrollphase)

#### Getting scroll gesture states

- [case animating](/documentation/swiftui/scrollphase/animating)
- [case decelerating](/documentation/swiftui/scrollphase/decelerating)
- [case idle](/documentation/swiftui/scrollphase/idle)
- [case interacting](/documentation/swiftui/scrollphase/interacting)
- [case tracking](/documentation/swiftui/scrollphase/tracking)

#### Checking for active scrolling

- [var isScrolling: Bool](/documentation/swiftui/scrollphase/isscrolling)
- [ScrollPhaseChangeContext](/documentation/swiftui/scrollphasechangecontext)

#### Instance Properties

- [var geometry: ScrollGeometry](/documentation/swiftui/scrollphasechangecontext/geometry)
- [var velocity: CGVector?](/documentation/swiftui/scrollphasechangecontext/velocity)

### Showing scroll indicators

- [func scrollIndicatorsFlash(onAppear: Bool) -> some View](/documentation/swiftui/view/scrollindicatorsflash(onappear:))
- [func scrollIndicatorsFlash(trigger: some Equatable) -> some View](/documentation/swiftui/view/scrollindicatorsflash(trigger:))
- [func scrollIndicators(ScrollIndicatorVisibility, axes: Axis.Set) -> some View](/documentation/swiftui/view/scrollindicators(_:axes:))
- [var horizontalScrollIndicatorVisibility: ScrollIndicatorVisibility](/documentation/swiftui/environmentvalues/horizontalscrollindicatorvisibility)
- [var verticalScrollIndicatorVisibility: ScrollIndicatorVisibility](/documentation/swiftui/environmentvalues/verticalscrollindicatorvisibility)
- [ScrollIndicatorVisibility](/documentation/swiftui/scrollindicatorvisibility)

#### Getting visibilties

- [static var automatic: ScrollIndicatorVisibility](/documentation/swiftui/scrollindicatorvisibility/automatic)
- [static var hidden: ScrollIndicatorVisibility](/documentation/swiftui/scrollindicatorvisibility/hidden)
- [static var never: ScrollIndicatorVisibility](/documentation/swiftui/scrollindicatorvisibility/never)
- [static var visible: ScrollIndicatorVisibility](/documentation/swiftui/scrollindicatorvisibility/visible)

### Managing content visibility

- [func scrollContentBackground(Visibility) -> some View](/documentation/swiftui/view/scrollcontentbackground(_:))
- [func scrollClipDisabled(Bool) -> some View](/documentation/swiftui/view/scrollclipdisabled(_:))
- [ScrollContentOffsetAdjustmentBehavior](/documentation/swiftui/scrollcontentoffsetadjustmentbehavior)

#### Type Properties

- [static var automatic: ScrollContentOffsetAdjustmentBehavior](/documentation/swiftui/scrollcontentoffsetadjustmentbehavior/automatic)
- [static var disabled: ScrollContentOffsetAdjustmentBehavior](/documentation/swiftui/scrollcontentoffsetadjustmentbehavior/disabled)

### Disabling scrolling

- [func scrollDisabled(Bool) -> some View](/documentation/swiftui/view/scrolldisabled(_:))
- [var isScrollEnabled: Bool](/documentation/swiftui/environmentvalues/isscrollenabled)

### Configuring scroll bounce behavior

- [func scrollBounceBehavior(ScrollBounceBehavior, axes: Axis.Set) -> some View](/documentation/swiftui/view/scrollbouncebehavior(_:axes:))
- [var horizontalScrollBounceBehavior: ScrollBounceBehavior](/documentation/swiftui/environmentvalues/horizontalscrollbouncebehavior)
- [var verticalScrollBounceBehavior: ScrollBounceBehavior](/documentation/swiftui/environmentvalues/verticalscrollbouncebehavior)
- [ScrollBounceBehavior](/documentation/swiftui/scrollbouncebehavior)

#### Bounce behaviors

- [static var automatic: ScrollBounceBehavior](/documentation/swiftui/scrollbouncebehavior/automatic)
- [static var always: ScrollBounceBehavior](/documentation/swiftui/scrollbouncebehavior/always)
- [static var basedOnSize: ScrollBounceBehavior](/documentation/swiftui/scrollbouncebehavior/basedonsize)

### Configuring scroll edge effects

- [func scrollEdgeEffectStyle(ScrollEdgeEffectStyle?, for: Edge.Set) -> some View](/documentation/swiftui/view/scrolledgeeffectstyle(_:for:))
- [func scrollEdgeEffectHidden(Bool, for: Edge.Set) -> some View](/documentation/swiftui/view/scrolledgeeffecthidden(_:for:))
- [ScrollEdgeEffectStyle](/documentation/swiftui/scrolledgeeffectstyle)

#### Type Properties

- [static var automatic: ScrollEdgeEffectStyle](/documentation/swiftui/scrolledgeeffectstyle/automatic)
- [static var hard: ScrollEdgeEffectStyle](/documentation/swiftui/scrolledgeeffectstyle/hard)
- [static var soft: ScrollEdgeEffectStyle](/documentation/swiftui/scrolledgeeffectstyle/soft)
- [func safeAreaBar(edge:alignment:spacing:content:)](/documentation/swiftui/view/safeareabar(edge:alignment:spacing:content:))

### Interacting with a software keyboard

- [func scrollDismissesKeyboard(ScrollDismissesKeyboardMode) -> some View](/documentation/swiftui/view/scrolldismisseskeyboard(_:))
- [var scrollDismissesKeyboardMode: ScrollDismissesKeyboardMode](/documentation/swiftui/environmentvalues/scrolldismisseskeyboardmode)
- [ScrollDismissesKeyboardMode](/documentation/swiftui/scrolldismisseskeyboardmode)

#### Getting modes

- [static var automatic: ScrollDismissesKeyboardMode](/documentation/swiftui/scrolldismisseskeyboardmode/automatic)
- [static var immediately: ScrollDismissesKeyboardMode](/documentation/swiftui/scrolldismisseskeyboardmode/immediately)
- [static var interactively: ScrollDismissesKeyboardMode](/documentation/swiftui/scrolldismisseskeyboardmode/interactively)
- [static var never: ScrollDismissesKeyboardMode](/documentation/swiftui/scrolldismisseskeyboardmode/never)

### Managing scrolling for different inputs

- [func scrollInputBehavior(ScrollInputBehavior, for: ScrollInputKind) -> some View](/documentation/swiftui/view/scrollinputbehavior(_:for:))
- [ScrollInputKind](/documentation/swiftui/scrollinputkind)

#### Type Properties

- [static let handGestureShortcut: ScrollInputKind](/documentation/swiftui/scrollinputkind/handgestureshortcut)
- [static let look: ScrollInputKind](/documentation/swiftui/scrollinputkind/look)

#### Type Methods

- [static func look(axes: Axis.Set) -> ScrollInputKind](/documentation/swiftui/scrollinputkind/look(axes:))
- [ScrollInputBehavior](/documentation/swiftui/scrollinputbehavior)

#### Type Properties

- [static let automatic: ScrollInputBehavior](/documentation/swiftui/scrollinputbehavior/automatic)
- [static let disabled: ScrollInputBehavior](/documentation/swiftui/scrollinputbehavior/disabled)
- [static let enabled: ScrollInputBehavior](/documentation/swiftui/scrollinputbehavior/enabled)

## Event handling

- [Gestures](/documentation/swiftui/gestures)

### Essentials

- [Adding interactivity with gestures](/documentation/swiftui/adding-interactivity-with-gestures)

### Recognizing tap gestures

- [func onTapGesture(count: Int, perform: () -> Void) -> some View](/documentation/swiftui/view/ontapgesture(count:perform:))
- [func onTapGesture(count:coordinateSpace:perform:)](/documentation/swiftui/view/ontapgesture(count:coordinatespace:perform:))
- [TapGesture](/documentation/swiftui/tapgesture)

#### Creating a tap gesture

- [init(count: Int)](/documentation/swiftui/tapgesture/init(count:))
- [var count: Int](/documentation/swiftui/tapgesture/count)
- [SpatialTapGesture](/documentation/swiftui/spatialtapgesture)

#### Creating a spatial tap gesture

- [init(count: Int, coordinateSpace: some CoordinateSpaceProtocol)](/documentation/swiftui/spatialtapgesture/init(count:coordinatespace:)-75s7q)
- [var coordinateSpace: CoordinateSpace](/documentation/swiftui/spatialtapgesture/coordinatespace)
- [var count: Int](/documentation/swiftui/spatialtapgesture/count)

#### Getting the gesture’s value

- [SpatialTapGesture.Value](/documentation/swiftui/spatialtapgesture/value)

##### Getting the tap location

- [var location: CGPoint](/documentation/swiftui/spatialtapgesture/value/location)
- [var location3D: Point3D](/documentation/swiftui/spatialtapgesture/value/location3d)

#### Deprecated initializers

- [init(count: Int, coordinateSpace: CoordinateSpace)](/documentation/swiftui/spatialtapgesture/init(count:coordinatespace:)-1b85g)

#### Initializers

- [init(count: Int, coordinateSpace3D: some CoordinateSpace3D)](/documentation/swiftui/spatialtapgesture/init(count:coordinatespace3d:))
- [init(count:coordinateSpace:)](/documentation/swiftui/spatialtapgesture/init(count:coordinatespace:))

### Recognizing long press gestures

- [func onLongPressGesture(minimumDuration: Double, maximumDistance: CGFloat, perform: () -> Void, onPressingChanged: ((Bool) -> Void)?) -> some View](/documentation/swiftui/view/onlongpressgesture(minimumduration:maximumdistance:perform:onpressingchanged:))
- [func onLongPressGesture(minimumDuration: Double, perform: () -> Void, onPressingChanged: ((Bool) -> Void)?) -> some View](/documentation/swiftui/view/onlongpressgesture(minimumduration:perform:onpressingchanged:))
- [func onLongTouchGesture(minimumDuration: Double, perform: () -> Void, onTouchingChanged: ((Bool) -> Void)?) -> some View](/documentation/swiftui/view/onlongtouchgesture(minimumduration:perform:ontouchingchanged:))
- [LongPressGesture](/documentation/swiftui/longpressgesture)

#### Creating a long press gesture

- [init(minimumDuration: Double)](/documentation/swiftui/longpressgesture/init(minimumduration:))
- [init(minimumDuration: Double, maximumDistance: CGFloat)](/documentation/swiftui/longpressgesture/init(minimumduration:maximumdistance:))
- [var minimumDuration: Double](/documentation/swiftui/longpressgesture/minimumduration)
- [var maximumDistance: CGFloat](/documentation/swiftui/longpressgesture/maximumdistance)

### Recognizing spatial events

- [SpatialEventGesture](/documentation/swiftui/spatialeventgesture)

#### Creating a spatial event gesture

- [init(coordinateSpace: any CoordinateSpaceProtocol)](/documentation/swiftui/spatialeventgesture/init(coordinatespace:))

#### Getting gesture properties

- [let coordinateSpace: CoordinateSpace](/documentation/swiftui/spatialeventgesture/coordinatespace)

#### Initializers

- [init(coordinateSpace3D: some CoordinateSpace3D)](/documentation/swiftui/spatialeventgesture/init(coordinatespace3d:))
- [SpatialEventCollection](/documentation/swiftui/spatialeventcollection)

#### Accessing the collection’s events

- [SpatialEventCollection.Event](/documentation/swiftui/spatialeventcollection/event)

##### Identifying the event

- [var timestamp: TimeInterval](/documentation/swiftui/spatialeventcollection/event/timestamp)
- [var id: SpatialEventCollection.Event.ID](/documentation/swiftui/spatialeventcollection/event/id-swift.property)
- [SpatialEventCollection.Event.ID](/documentation/swiftui/spatialeventcollection/event/id-swift.struct)
- [var kind: SpatialEventCollection.Event.Kind](/documentation/swiftui/spatialeventcollection/event/kind-swift.property)
- [SpatialEventCollection.Event.Kind](/documentation/swiftui/spatialeventcollection/event/kind-swift.enum)

###### Getting the event type

- [case directPinch](/documentation/swiftui/spatialeventcollection/event/kind-swift.enum/directpinch)
- [case indirectPinch](/documentation/swiftui/spatialeventcollection/event/kind-swift.enum/indirectpinch)
- [case pointer](/documentation/swiftui/spatialeventcollection/event/kind-swift.enum/pointer)
- [case touch](/documentation/swiftui/spatialeventcollection/event/kind-swift.enum/touch)

###### Enumeration Cases

- [case pencil](/documentation/swiftui/spatialeventcollection/event/kind-swift.enum/pencil)
- [var modifierKeys: EventModifiers](/documentation/swiftui/spatialeventcollection/event/modifierkeys)

##### Locating the event

- [var location: CGPoint](/documentation/swiftui/spatialeventcollection/event/location)
- [var location3D: Point3D](/documentation/swiftui/spatialeventcollection/event/location3d)
- [var selectionRay: Ray3D?](/documentation/swiftui/spatialeventcollection/event/selectionray)
- [var inputDevicePose: SpatialEventCollection.Event.InputDevicePose?](/documentation/swiftui/spatialeventcollection/event/inputdevicepose-swift.property)
- [SpatialEventCollection.Event.InputDevicePose](/documentation/swiftui/spatialeventcollection/event/inputdevicepose-swift.struct)

###### Getting the event type

- [var altitude: Angle](/documentation/swiftui/spatialeventcollection/event/inputdevicepose-swift.struct/altitude)
- [var azimuth: Angle](/documentation/swiftui/spatialeventcollection/event/inputdevicepose-swift.struct/azimuth)
- [var pose3D: Pose3D](/documentation/swiftui/spatialeventcollection/event/inputdevicepose-swift.struct/pose3d)
- [var targetedEntity: Entity?](/documentation/swiftui/spatialeventcollection/event/targetedentity)

##### Getting the event’s current phase

- [var phase: SpatialEventCollection.Event.Phase](/documentation/swiftui/spatialeventcollection/event/phase-swift.property)
- [SpatialEventCollection.Event.Phase](/documentation/swiftui/spatialeventcollection/event/phase-swift.enum)

###### Getting the phase

- [case active](/documentation/swiftui/spatialeventcollection/event/phase-swift.enum/active)
- [case cancelled](/documentation/swiftui/spatialeventcollection/event/phase-swift.enum/cancelled)
- [case ended](/documentation/swiftui/spatialeventcollection/event/phase-swift.enum/ended)

##### Instance Properties

- [var chirality: Chirality?](/documentation/swiftui/spatialeventcollection/event/chirality)
- [var trackingAreaIdentifier: LayerRenderer.Drawable.TrackingArea.Identifier](/documentation/swiftui/spatialeventcollection/event/trackingareaidentifier)
- [subscript(SpatialEventCollection.Event.ID) -> SpatialEventCollection.Event?](/documentation/swiftui/spatialeventcollection/subscript(_:))

#### Iterating over events in the collection

- [func makeIterator() -> SpatialEventCollection.Iterator](/documentation/swiftui/spatialeventcollection/makeiterator())
- [SpatialEventCollection.Iterator](/documentation/swiftui/spatialeventcollection/iterator)

##### Getting the next event

- [func next() -> SpatialEventCollection.Event?](/documentation/swiftui/spatialeventcollection/iterator/next())
- [Chirality](/documentation/swiftui/chirality)

#### Enumeration Cases

- [case left](/documentation/swiftui/chirality/left)
- [case right](/documentation/swiftui/chirality/right)

### Recognizing gestures that change over time

- [func gesture(_:)](/documentation/swiftui/view/gesture(_:))
- [func gesture<T>(T, isEnabled: Bool) -> some View](/documentation/swiftui/view/gesture(_:isenabled:))
- [func gesture<T>(T, name: String, isEnabled: Bool) -> some View](/documentation/swiftui/view/gesture(_:name:isenabled:))
- [func gesture<T>(T, including: GestureMask) -> some View](/documentation/swiftui/view/gesture(_:including:))
- [DragGesture](/documentation/swiftui/draggesture)

#### Creating a drag gesture

- [init(minimumDistance: CGFloat, coordinateSpace: some CoordinateSpaceProtocol)](/documentation/swiftui/draggesture/init(minimumdistance:coordinatespace:)-8ffe5)
- [var minimumDistance: CGFloat](/documentation/swiftui/draggesture/minimumdistance)
- [var coordinateSpace: CoordinateSpace](/documentation/swiftui/draggesture/coordinatespace)

#### Deprecated initializers

- [init(minimumDistance: CGFloat, coordinateSpace: CoordinateSpace)](/documentation/swiftui/draggesture/init(minimumdistance:coordinatespace:)-3804h)

#### Structures

- [DragGesture.Value](/documentation/swiftui/draggesture/value)

##### Getting 2D position

- [var startLocation: CGPoint](/documentation/swiftui/draggesture/value/startlocation)
- [var location: CGPoint](/documentation/swiftui/draggesture/value/location)
- [var predictedEndLocation: CGPoint](/documentation/swiftui/draggesture/value/predictedendlocation)
- [var translation: CGSize](/documentation/swiftui/draggesture/value/translation)
- [var predictedEndTranslation: CGSize](/documentation/swiftui/draggesture/value/predictedendtranslation)

##### Getting 3D position

- [var startLocation3D: Point3D](/documentation/swiftui/draggesture/value/startlocation3d)
- [var location3D: Point3D](/documentation/swiftui/draggesture/value/location3d)
- [var predictedEndLocation3D: Point3D](/documentation/swiftui/draggesture/value/predictedendlocation3d)
- [var translation3D: Vector3D](/documentation/swiftui/draggesture/value/translation3d)
- [var predictedEndTranslation3D: Vector3D](/documentation/swiftui/draggesture/value/predictedendtranslation3d)
- [var startInputDevicePose3D: Pose3D?](/documentation/swiftui/draggesture/value/startinputdevicepose3d)
- [var inputDevicePose3D: Pose3D?](/documentation/swiftui/draggesture/value/inputdevicepose3d)

##### Handling changes over time

- [var time: Date](/documentation/swiftui/draggesture/value/time)
- [var velocity: CGSize](/documentation/swiftui/draggesture/value/velocity)

#### Initializers

- [init(minimumDistance: CGFloat, coordinateSpace3D: some CoordinateSpace3D)](/documentation/swiftui/draggesture/init(minimumdistance:coordinatespace3d:))
- [init(minimumDistance:coordinateSpace:)](/documentation/swiftui/draggesture/init(minimumdistance:coordinatespace:))
- [WindowDragGesture](/documentation/swiftui/windowdraggesture)

#### Structures

- [WindowDragGesture.Value](/documentation/swiftui/windowdraggesture/value)

#### Initializers

- [init()](/documentation/swiftui/windowdraggesture/init())
- [MagnifyGesture](/documentation/swiftui/magnifygesture)

#### Creating the gesture

- [init(minimumScaleDelta: CGFloat)](/documentation/swiftui/magnifygesture/init(minimumscaledelta:))
- [var minimumScaleDelta: CGFloat](/documentation/swiftui/magnifygesture/minimumscaledelta)
- [RotateGesture](/documentation/swiftui/rotategesture)

#### Creating the gesture

- [init(minimumAngleDelta: Angle)](/documentation/swiftui/rotategesture/init(minimumangledelta:))
- [var minimumAngleDelta: Angle](/documentation/swiftui/rotategesture/minimumangledelta)
- [RotateGesture3D](/documentation/swiftui/rotategesture3d)

#### Creating the gesture

- [init(constrainedToAxis: RotationAxis3D?, minimumAngleDelta: Angle)](/documentation/swiftui/rotategesture3d/init(constrainedtoaxis:minimumangledelta:))
- [var minimumAngleDelta: Angle](/documentation/swiftui/rotategesture3d/minimumangledelta)
- [var constrainedAxis: RotationAxis3D?](/documentation/swiftui/rotategesture3d/constrainedaxis)
- [GestureMask](/documentation/swiftui/gesturemask)

#### Getting gesture options

- [static let all: GestureMask](/documentation/swiftui/gesturemask/all)
- [static let gesture: GestureMask](/documentation/swiftui/gesturemask/gesture)
- [static let subviews: GestureMask](/documentation/swiftui/gesturemask/subviews)
- [static let none: GestureMask](/documentation/swiftui/gesturemask/none)

### Recognizing Apple Pencil gestures

- [func onPencilDoubleTap(perform: (PencilDoubleTapGestureValue) -> Void) -> some View](/documentation/swiftui/view/onpencildoubletap(perform:))
- [func onPencilSqueeze(perform: (PencilSqueezeGesturePhase) -> Void) -> some View](/documentation/swiftui/view/onpencilsqueeze(perform:))
- [var preferredPencilDoubleTapAction: PencilPreferredAction](/documentation/swiftui/environmentvalues/preferredpencildoubletapaction)
- [var preferredPencilSqueezeAction: PencilPreferredAction](/documentation/swiftui/environmentvalues/preferredpencilsqueezeaction)
- [PencilPreferredAction](/documentation/swiftui/pencilpreferredaction)

#### Getting the preffered actions

- [static let ignore: PencilPreferredAction](/documentation/swiftui/pencilpreferredaction/ignore)
- [static let showColorPalette: PencilPreferredAction](/documentation/swiftui/pencilpreferredaction/showcolorpalette)
- [static let showInkAttributes: PencilPreferredAction](/documentation/swiftui/pencilpreferredaction/showinkattributes)
- [static let switchEraser: PencilPreferredAction](/documentation/swiftui/pencilpreferredaction/switcheraser)
- [static let switchPrevious: PencilPreferredAction](/documentation/swiftui/pencilpreferredaction/switchprevious)

#### Type Properties

- [static let runSystemShortcut: PencilPreferredAction](/documentation/swiftui/pencilpreferredaction/runsystemshortcut)
- [static let showContextualPalette: PencilPreferredAction](/documentation/swiftui/pencilpreferredaction/showcontextualpalette)
- [PencilDoubleTapGestureValue](/documentation/swiftui/pencildoubletapgesturevalue)

#### Getting the gesture values

- [let hoverPose: PencilHoverPose?](/documentation/swiftui/pencildoubletapgesturevalue/hoverpose)
- [PencilSqueezeGestureValue](/documentation/swiftui/pencilsqueezegesturevalue)

#### Instance Properties

- [let hoverPose: PencilHoverPose?](/documentation/swiftui/pencilsqueezegesturevalue/hoverpose)
- [PencilSqueezeGesturePhase](/documentation/swiftui/pencilsqueezegesturephase)

#### Enumeration Cases

- [case active(PencilSqueezeGestureValue)](/documentation/swiftui/pencilsqueezegesturephase/active(_:))
- [case ended(PencilSqueezeGestureValue)](/documentation/swiftui/pencilsqueezegesturephase/ended(_:))
- [case failed](/documentation/swiftui/pencilsqueezegesturephase/failed)
- [PencilHoverPose](/documentation/swiftui/pencilhoverpose)

#### Getting the hover characteristics

- [let anchor: UnitPoint](/documentation/swiftui/pencilhoverpose/anchor)
- [let location: CGPoint](/documentation/swiftui/pencilhoverpose/location)
- [let zDistance: CGFloat](/documentation/swiftui/pencilhoverpose/zdistance)

#### Instance Properties

- [let altitude: Angle](/documentation/swiftui/pencilhoverpose/altitude)
- [let azimuth: Angle](/documentation/swiftui/pencilhoverpose/azimuth)
- [let roll: Angle](/documentation/swiftui/pencilhoverpose/roll)

### Combining gestures

- [Composing SwiftUI gestures](/documentation/swiftui/composing-swiftui-gestures)
- [func simultaneousGesture<T>(T, including: GestureMask) -> some View](/documentation/swiftui/view/simultaneousgesture(_:including:))
- [func simultaneousGesture<T>(T, isEnabled: Bool) -> some View](/documentation/swiftui/view/simultaneousgesture(_:isenabled:))
- [func simultaneousGesture<T>(T, name: String, isEnabled: Bool) -> some View](/documentation/swiftui/view/simultaneousgesture(_:name:isenabled:))
- [SequenceGesture](/documentation/swiftui/sequencegesture)

#### Creating the gesture

- [init(First, Second)](/documentation/swiftui/sequencegesture/init(_:_:))
- [var first: First](/documentation/swiftui/sequencegesture/first)
- [var second: Second](/documentation/swiftui/sequencegesture/second)

#### Getting the gesture’s values

- [SequenceGesture.Value](/documentation/swiftui/sequencegesture/value)

##### Getting gesture values

- [case first(First.Value)](/documentation/swiftui/sequencegesture/value/first(_:))
- [case second(First.Value, Second.Value?)](/documentation/swiftui/sequencegesture/value/second(_:_:))
- [SimultaneousGesture](/documentation/swiftui/simultaneousgesture)

#### Creating the gesture

- [init(First, Second)](/documentation/swiftui/simultaneousgesture/init(_:_:))
- [var first: First](/documentation/swiftui/simultaneousgesture/first)
- [var second: Second](/documentation/swiftui/simultaneousgesture/second)

#### Getting the gesture’s values

- [SimultaneousGesture.Value](/documentation/swiftui/simultaneousgesture/value)

##### Getting gesture values

- [var first: First.Value?](/documentation/swiftui/simultaneousgesture/value/first)
- [var second: Second.Value?](/documentation/swiftui/simultaneousgesture/value/second)
- [ExclusiveGesture](/documentation/swiftui/exclusivegesture)

#### Creating the gesture

- [init(First, Second)](/documentation/swiftui/exclusivegesture/init(_:_:))
- [var first: First](/documentation/swiftui/exclusivegesture/first)
- [var second: Second](/documentation/swiftui/exclusivegesture/second)

#### Supporting types

- [ExclusiveGesture.Value](/documentation/swiftui/exclusivegesture/value)

##### Getting gesture values

- [case first(First.Value)](/documentation/swiftui/exclusivegesture/value/first(_:))
- [case second(Second.Value)](/documentation/swiftui/exclusivegesture/value/second(_:))

### Defining custom gestures

- [func highPriorityGesture<T>(T, including: GestureMask) -> some View](/documentation/swiftui/view/highprioritygesture(_:including:))
- [func highPriorityGesture<T>(T, isEnabled: Bool) -> some View](/documentation/swiftui/view/highprioritygesture(_:isenabled:))
- [func highPriorityGesture<T>(T, name: String, isEnabled: Bool) -> some View](/documentation/swiftui/view/highprioritygesture(_:name:isenabled:))
- [func handGestureShortcut(HandGestureShortcut, isEnabled: Bool) -> some View](/documentation/swiftui/view/handgestureshortcut(_:isenabled:))
- [func defersSystemGestures(on: Edge.Set) -> some View](/documentation/swiftui/view/deferssystemgestures(on:))
- [Gesture](/documentation/swiftui/gesture)

#### Implementing a custom gesture

- [var body: Self.Body](/documentation/swiftui/gesture/body-swift.property)
- [Body](/documentation/swiftui/gesture/body-swift.associatedtype)

#### Performing the gesture

- [func updating<State>(GestureState<State>, body: (Self.Value, inout State, inout Transaction) -> Void) -> GestureStateGesture<Self, State>](/documentation/swiftui/gesture/updating(_:body:))
- [func onChanged((Self.Value) -> Void) -> _ChangedGesture<Self>](/documentation/swiftui/gesture/onchanged(_:))
- [func onEnded((Self.Value) -> Void) -> _EndedGesture<Self>](/documentation/swiftui/gesture/onended(_:))
- [Value](/documentation/swiftui/gesture/value)

#### Composing gestures

- [func simultaneously<Other>(with: Other) -> SimultaneousGesture<Self, Other>](/documentation/swiftui/gesture/simultaneously(with:))
- [func sequenced<Other>(before: Other) -> SequenceGesture<Self, Other>](/documentation/swiftui/gesture/sequenced(before:))
- [func exclusively<Other>(before: Other) -> ExclusiveGesture<Self, Other>](/documentation/swiftui/gesture/exclusively(before:))

#### Adding modifier keys to a gesture

- [func modifiers(EventModifiers) -> _ModifiersGesture<Self>](/documentation/swiftui/gesture/modifiers(_:))

#### Transforming a gesture

- [func map<T>((Self.Value) -> T) -> _MapGesture<Self, T>](/documentation/swiftui/gesture/map(_:))

#### Customizing gesture activation

- [func handActivationBehavior(HandActivationBehavior) -> some Gesture<Self.Value>
](/documentation/swiftui/gesture/handactivationbehavior(_:))

#### Using a gesture with a RealityKit entity

- [func targetedToAnyEntity() -> some Gesture<EntityTargetValue<Self.Value>>
](/documentation/swiftui/gesture/targetedtoanyentity())
- [func targetedToEntity(Entity) -> some Gesture<EntityTargetValue<Self.Value>>
](/documentation/swiftui/gesture/targetedtoentity(_:))
- [func targetedToEntity(where: QueryPredicate<Entity>) -> some Gesture<EntityTargetValue<Self.Value>>
](/documentation/swiftui/gesture/targetedtoentity(where:))
- [AnyGesture](/documentation/swiftui/anygesture)

#### Implementing a custom gesture

- [init<T>(T)](/documentation/swiftui/anygesture/init(_:))
- [HandActivationBehavior](/documentation/swiftui/handactivationbehavior)

#### Getting the behaviors

- [static let automatic: HandActivationBehavior](/documentation/swiftui/handactivationbehavior/automatic)
- [static let pinch: HandActivationBehavior](/documentation/swiftui/handactivationbehavior/pinch)
- [HandGestureShortcut](/documentation/swiftui/handgestureshortcut)

#### Type Properties

- [static let primaryAction: HandGestureShortcut](/documentation/swiftui/handgestureshortcut/primaryaction)

### Managing gesture state

- [GestureState](/documentation/swiftui/gesturestate)

#### Creating a gesture state

- [init(initialValue: Value)](/documentation/swiftui/gesturestate/init(initialvalue:))
- [init(initialValue: Value, reset: (Value, inout Transaction) -> Void)](/documentation/swiftui/gesturestate/init(initialvalue:reset:))
- [init(initialValue: Value, resetTransaction: Transaction)](/documentation/swiftui/gesturestate/init(initialvalue:resettransaction:))
- [init(reset: (Value, inout Transaction) -> Void)](/documentation/swiftui/gesturestate/init(reset:))
- [init(resetTransaction: Transaction)](/documentation/swiftui/gesturestate/init(resettransaction:))
- [init(wrappedValue: Value)](/documentation/swiftui/gesturestate/init(wrappedvalue:))
- [init(wrappedValue: Value, reset: (Value, inout Transaction) -> Void)](/documentation/swiftui/gesturestate/init(wrappedvalue:reset:))
- [init(wrappedValue: Value, resetTransaction: Transaction)](/documentation/swiftui/gesturestate/init(wrappedvalue:resettransaction:))

#### Getting the state

- [var wrappedValue: Value](/documentation/swiftui/gesturestate/wrappedvalue)
- [var projectedValue: GestureState<Value>](/documentation/swiftui/gesturestate/projectedvalue)
- [GestureStateGesture](/documentation/swiftui/gesturestategesture)

#### Creating an in-progress gesture

- [init(base: Base, state: GestureState<State>, body: (GestureStateGesture<Base, State>.Value, inout State, inout Transaction) -> Void)](/documentation/swiftui/gesturestategesture/init(base:state:body:))
- [var base: Base](/documentation/swiftui/gesturestategesture/base)
- [var state: GestureState<State>](/documentation/swiftui/gesturestategesture/state)

#### Supporting types

- [var body: (GestureStateGesture<Base, State>.Value, inout State, inout Transaction) -> Void](/documentation/swiftui/gesturestategesture/body)

### Handling activation events

- [func allowsWindowActivationEvents(Bool?) -> some View](/documentation/swiftui/view/allowswindowactivationevents(_:))

### Deprecated gestures

- [MagnificationGesture](/documentation/swiftui/magnificationgesture)

#### Creating the gesture

- [init(minimumScaleDelta: CGFloat)](/documentation/swiftui/magnificationgesture/init(minimumscaledelta:))
- [var minimumScaleDelta: CGFloat](/documentation/swiftui/magnificationgesture/minimumscaledelta)
- [RotationGesture](/documentation/swiftui/rotationgesture)

#### Creating the gesture

- [init(minimumAngleDelta: Angle)](/documentation/swiftui/rotationgesture/init(minimumangledelta:))
- [var minimumAngleDelta: Angle](/documentation/swiftui/rotationgesture/minimumangledelta)
- [Input events](/documentation/swiftui/input-events)

### Responding to keyboard input

- [func onKeyPress(KeyEquivalent, action: () -> KeyPress.Result) -> some View](/documentation/swiftui/view/onkeypress(_:action:))
- [func onKeyPress(phases: KeyPress.Phases, action: (KeyPress) -> KeyPress.Result) -> some View](/documentation/swiftui/view/onkeypress(phases:action:))
- [func onKeyPress(KeyEquivalent, phases: KeyPress.Phases, action: (KeyPress) -> KeyPress.Result) -> some View](/documentation/swiftui/view/onkeypress(_:phases:action:))
- [func onKeyPress(characters: CharacterSet, phases: KeyPress.Phases, action: (KeyPress) -> KeyPress.Result) -> some View](/documentation/swiftui/view/onkeypress(characters:phases:action:))
- [func onKeyPress(keys: Set<KeyEquivalent>, phases: KeyPress.Phases, action: (KeyPress) -> KeyPress.Result) -> some View](/documentation/swiftui/view/onkeypress(keys:phases:action:))
- [KeyPress](/documentation/swiftui/keypress)

#### Getting the keypress

- [let key: KeyEquivalent](/documentation/swiftui/keypress/key)
- [let characters: String](/documentation/swiftui/keypress/characters)
- [let modifiers: EventModifiers](/documentation/swiftui/keypress/modifiers)

#### Getting the phase of the keypress

- [let phase: KeyPress.Phases](/documentation/swiftui/keypress/phase)
- [KeyPress.Phases](/documentation/swiftui/keypress/phases)

##### Getting the phases

- [static let down: KeyPress.Phases](/documentation/swiftui/keypress/phases/down)
- [static let up: KeyPress.Phases](/documentation/swiftui/keypress/phases/up)
- [static let `repeat`: KeyPress.Phases](/documentation/swiftui/keypress/phases/repeat)
- [static let all: KeyPress.Phases](/documentation/swiftui/keypress/phases/all)

#### Getting the result

- [KeyPress.Result](/documentation/swiftui/keypress/result)

##### Getting the result

- [case handled](/documentation/swiftui/keypress/result/handled)
- [case ignored](/documentation/swiftui/keypress/result/ignored)

### Creating keyboard shortcuts

- [func keyboardShortcut(_:)](/documentation/swiftui/view/keyboardshortcut(_:))
- [func keyboardShortcut(KeyEquivalent, modifiers: EventModifiers) -> some View](/documentation/swiftui/view/keyboardshortcut(_:modifiers:))
- [func keyboardShortcut(KeyEquivalent, modifiers: EventModifiers, localization: KeyboardShortcut.Localization) -> some View](/documentation/swiftui/view/keyboardshortcut(_:modifiers:localization:))
- [var keyboardShortcut: KeyboardShortcut?](/documentation/swiftui/environmentvalues/keyboardshortcut)
- [KeyboardShortcut](/documentation/swiftui/keyboardshortcut)

#### Getting standard shortcuts

- [static let cancelAction: KeyboardShortcut](/documentation/swiftui/keyboardshortcut/cancelaction)
- [static let defaultAction: KeyboardShortcut](/documentation/swiftui/keyboardshortcut/defaultaction)

#### Creating a shortcut

- [init(KeyEquivalent, modifiers: EventModifiers)](/documentation/swiftui/keyboardshortcut/init(_:modifiers:))
- [var key: KeyEquivalent](/documentation/swiftui/keyboardshortcut/key)
- [var modifiers: EventModifiers](/documentation/swiftui/keyboardshortcut/modifiers)

#### Creating a localized shortcut

- [init(KeyEquivalent, modifiers: EventModifiers, localization: KeyboardShortcut.Localization)](/documentation/swiftui/keyboardshortcut/init(_:modifiers:localization:))
- [var localization: KeyboardShortcut.Localization](/documentation/swiftui/keyboardshortcut/localization-swift.property)
- [KeyboardShortcut.Localization](/documentation/swiftui/keyboardshortcut/localization-swift.struct)

##### Getting localization strategies

- [static let automatic: KeyboardShortcut.Localization](/documentation/swiftui/keyboardshortcut/localization-swift.struct/automatic)
- [static let custom: KeyboardShortcut.Localization](/documentation/swiftui/keyboardshortcut/localization-swift.struct/custom)
- [static let withoutMirroring: KeyboardShortcut.Localization](/documentation/swiftui/keyboardshortcut/localization-swift.struct/withoutmirroring)
- [KeyEquivalent](/documentation/swiftui/keyequivalent)

#### Getting arrow keys

- [static let upArrow: KeyEquivalent](/documentation/swiftui/keyequivalent/uparrow)
- [static let downArrow: KeyEquivalent](/documentation/swiftui/keyequivalent/downarrow)
- [static let leftArrow: KeyEquivalent](/documentation/swiftui/keyequivalent/leftarrow)
- [static let rightArrow: KeyEquivalent](/documentation/swiftui/keyequivalent/rightarrow)

#### Getting other special keys

- [static let clear: KeyEquivalent](/documentation/swiftui/keyequivalent/clear)
- [static let delete: KeyEquivalent](/documentation/swiftui/keyequivalent/delete)
- [static let deleteForward: KeyEquivalent](/documentation/swiftui/keyequivalent/deleteforward)
- [static let end: KeyEquivalent](/documentation/swiftui/keyequivalent/end)
- [static let escape: KeyEquivalent](/documentation/swiftui/keyequivalent/escape)
- [static let home: KeyEquivalent](/documentation/swiftui/keyequivalent/home)
- [static let pageDown: KeyEquivalent](/documentation/swiftui/keyequivalent/pagedown)
- [static let pageUp: KeyEquivalent](/documentation/swiftui/keyequivalent/pageup)
- [static let `return`: KeyEquivalent](/documentation/swiftui/keyequivalent/return)
- [static let space: KeyEquivalent](/documentation/swiftui/keyequivalent/space)
- [static let tab: KeyEquivalent](/documentation/swiftui/keyequivalent/tab)

#### Creating a key equivalent

- [init(Character)](/documentation/swiftui/keyequivalent/init(_:))
- [var character: Character](/documentation/swiftui/keyequivalent/character)
- [EventModifiers](/documentation/swiftui/eventmodifiers)

#### Getting modifier keys

- [static let all: EventModifiers](/documentation/swiftui/eventmodifiers/all)
- [static let capsLock: EventModifiers](/documentation/swiftui/eventmodifiers/capslock)
- [static let command: EventModifiers](/documentation/swiftui/eventmodifiers/command)
- [static let control: EventModifiers](/documentation/swiftui/eventmodifiers/control)
- [static let numericPad: EventModifiers](/documentation/swiftui/eventmodifiers/numericpad)
- [static let option: EventModifiers](/documentation/swiftui/eventmodifiers/option)
- [static let shift: EventModifiers](/documentation/swiftui/eventmodifiers/shift)

#### Creating a set of options

- [init(rawValue: Int)](/documentation/swiftui/eventmodifiers/init(rawvalue:))
- [let rawValue: Int](/documentation/swiftui/eventmodifiers/rawvalue)

#### Deprecated modifiers

- [static let function: EventModifiers](/documentation/swiftui/eventmodifiers/function)

### Responding to modifier keys

- [func onModifierKeysChanged(mask: EventModifiers, initial: Bool, (EventModifiers, EventModifiers) -> Void) -> some View](/documentation/swiftui/view/onmodifierkeyschanged(mask:initial:_:))
- [func modifierKeyAlternate<V>(EventModifiers, () -> V) -> some View](/documentation/swiftui/view/modifierkeyalternate(_:_:))

### Responding to hover events

- [func onHover(perform: (Bool) -> Void) -> some View](/documentation/swiftui/view/onhover(perform:))
- [func onContinuousHover(coordinateSpace:perform:)](/documentation/swiftui/view/oncontinuoushover(coordinatespace:perform:))
- [func hoverEffect(_:isEnabled:)](/documentation/swiftui/view/hovereffect(_:isenabled:))
- [func hoverEffectDisabled(Bool) -> some View](/documentation/swiftui/view/hovereffectdisabled(_:))
- [func defaultHoverEffect(_:)](/documentation/swiftui/view/defaulthovereffect(_:))
- [var isHoverEffectEnabled: Bool](/documentation/swiftui/environmentvalues/ishovereffectenabled)
- [HoverPhase](/documentation/swiftui/hoverphase)

#### Getting hover phases

- [case active(CGPoint)](/documentation/swiftui/hoverphase/active(_:))
- [case ended](/documentation/swiftui/hoverphase/ended)
- [HoverEffectPhaseOverride](/documentation/swiftui/hovereffectphaseoverride)

#### Type Properties

- [static var active: HoverEffectPhaseOverride](/documentation/swiftui/hovereffectphaseoverride/active)
- [static var inactive: HoverEffectPhaseOverride](/documentation/swiftui/hovereffectphaseoverride/inactive)

#### Type Methods

- [static func activeTemporarily(trigger: some Equatable) -> HoverEffectPhaseOverride](/documentation/swiftui/hovereffectphaseoverride/activetemporarily(trigger:))
- [static func inactiveTemporarily(trigger: some Equatable) -> HoverEffectPhaseOverride](/documentation/swiftui/hovereffectphaseoverride/inactivetemporarily(trigger:))
- [static func toggled(trigger: some Equatable) -> HoverEffectPhaseOverride](/documentation/swiftui/hovereffectphaseoverride/toggled(trigger:))
- [static func toggledTemporarily(trigger: some Equatable) -> HoverEffectPhaseOverride](/documentation/swiftui/hovereffectphaseoverride/toggledtemporarily(trigger:))
- [OrnamentHoverContentEffect](/documentation/swiftui/ornamenthovercontenteffect)
- [OrnamentHoverEffect](/documentation/swiftui/ornamenthovereffect)

### Modifying pointer appearance

- [func pointerStyle(PointerStyle?) -> some View](/documentation/swiftui/view/pointerstyle(_:))
- [PointerStyle](/documentation/swiftui/pointerstyle)

#### Getting built-in pointer styles

- [static let `default`: PointerStyle](/documentation/swiftui/pointerstyle/default)
- [static let horizontalText: PointerStyle](/documentation/swiftui/pointerstyle/horizontaltext)
- [static let verticalText: PointerStyle](/documentation/swiftui/pointerstyle/verticaltext)
- [static let rectSelection: PointerStyle](/documentation/swiftui/pointerstyle/rectselection)
- [static let grabIdle: PointerStyle](/documentation/swiftui/pointerstyle/grabidle)
- [static let grabActive: PointerStyle](/documentation/swiftui/pointerstyle/grabactive)
- [static let link: PointerStyle](/documentation/swiftui/pointerstyle/link)
- [static let zoomIn: PointerStyle](/documentation/swiftui/pointerstyle/zoomin)
- [static let zoomOut: PointerStyle](/documentation/swiftui/pointerstyle/zoomout)
- [static func frameResize(position: FrameResizePosition, directions: FrameResizeDirection.Set) -> PointerStyle](/documentation/swiftui/pointerstyle/frameresize(position:directions:))
- [static func columnResize(directions: HorizontalDirection.Set) -> PointerStyle](/documentation/swiftui/pointerstyle/columnresize(directions:))
- [static func rowResize(directions: VerticalDirection.Set) -> PointerStyle](/documentation/swiftui/pointerstyle/rowresize(directions:))

#### Creating custom pointer styles

- [static image(_:hotSpot:)](/documentation/swiftui/pointerstyle/image(_:hotspot:))
- [static func shape(some Shape, eoFill: Bool, size: CGSize) -> PointerStyle](/documentation/swiftui/pointerstyle/shape(_:eofill:size:))

#### Supporting types

- [HorizontalDirection](/documentation/swiftui/horizontaldirection)

##### Structures

- [HorizontalDirection.Set](/documentation/swiftui/horizontaldirection/set)

###### Initializers

- [init(HorizontalDirection)](/documentation/swiftui/horizontaldirection/set/init(_:))

###### Type Properties

- [static let all: HorizontalDirection.Set](/documentation/swiftui/horizontaldirection/set/all)
- [static let leading: HorizontalDirection.Set](/documentation/swiftui/horizontaldirection/set/leading)
- [static let trailing: HorizontalDirection.Set](/documentation/swiftui/horizontaldirection/set/trailing)

##### Enumeration Cases

- [case leading](/documentation/swiftui/horizontaldirection/leading)
- [case trailing](/documentation/swiftui/horizontaldirection/trailing)
- [VerticalDirection](/documentation/swiftui/verticaldirection)

##### Structures

- [VerticalDirection.Set](/documentation/swiftui/verticaldirection/set)

###### Initializers

- [init(VerticalDirection)](/documentation/swiftui/verticaldirection/set/init(_:))

###### Type Properties

- [static let all: VerticalDirection.Set](/documentation/swiftui/verticaldirection/set/all)
- [static let down: VerticalDirection.Set](/documentation/swiftui/verticaldirection/set/down)
- [static let up: VerticalDirection.Set](/documentation/swiftui/verticaldirection/set/up)

##### Enumeration Cases

- [case down](/documentation/swiftui/verticaldirection/down)
- [case up](/documentation/swiftui/verticaldirection/up)
- [FrameResizePosition](/documentation/swiftui/frameresizeposition)

##### Enumeration Cases

- [case bottom](/documentation/swiftui/frameresizeposition/bottom)
- [case bottomLeading](/documentation/swiftui/frameresizeposition/bottomleading)
- [case bottomTrailing](/documentation/swiftui/frameresizeposition/bottomtrailing)
- [case leading](/documentation/swiftui/frameresizeposition/leading)
- [case top](/documentation/swiftui/frameresizeposition/top)
- [case topLeading](/documentation/swiftui/frameresizeposition/topleading)
- [case topTrailing](/documentation/swiftui/frameresizeposition/toptrailing)
- [case trailing](/documentation/swiftui/frameresizeposition/trailing)
- [FrameResizeDirection](/documentation/swiftui/frameresizedirection)

##### Structures

- [FrameResizeDirection.Set](/documentation/swiftui/frameresizedirection/set)

###### Initializers

- [init(FrameResizeDirection)](/documentation/swiftui/frameresizedirection/set/init(_:))

###### Type Properties

- [static let all: FrameResizeDirection.Set](/documentation/swiftui/frameresizedirection/set/all)
- [static let inward: FrameResizeDirection.Set](/documentation/swiftui/frameresizedirection/set/inward)
- [static let outward: FrameResizeDirection.Set](/documentation/swiftui/frameresizedirection/set/outward)

##### Enumeration Cases

- [case inward](/documentation/swiftui/frameresizedirection/inward)
- [case outward](/documentation/swiftui/frameresizedirection/outward)

#### Type Properties

- [static let columnResize: PointerStyle](/documentation/swiftui/pointerstyle/columnresize)
- [static let rowResize: PointerStyle](/documentation/swiftui/pointerstyle/rowresize)
- [func pointerVisibility(Visibility) -> some View](/documentation/swiftui/view/pointervisibility(_:))

### Changing view appearance for hover events

- [func hoverEffect(HoverEffect) -> some View](/documentation/swiftui/view/hovereffect(_:))
- [HoverEffect](/documentation/swiftui/hovereffect)

#### Getting hover effects

- [static let automatic: HoverEffect](/documentation/swiftui/hovereffect/automatic)
- [static let highlight: HoverEffect](/documentation/swiftui/hovereffect/highlight)
- [static let lift: HoverEffect](/documentation/swiftui/hovereffect/lift)

#### Initializers

- [init<E>(E)](/documentation/swiftui/hovereffect/init(_:))
- [func hoverEffect(some CustomHoverEffect, in: HoverEffectGroup?, isEnabled: Bool) -> some View](/documentation/swiftui/view/hovereffect(_:in:isenabled:))
- [func hoverEffect(in: HoverEffectGroup?, isEnabled: Bool, body: (EmptyHoverEffectContent, Bool, GeometryProxy) -> some HoverEffectContent) -> some View](/documentation/swiftui/view/hovereffect(in:isenabled:body:))
- [CustomHoverEffect](/documentation/swiftui/customhovereffect)

#### Getting built-in hover effects

- [static var automatic: AutomaticHoverEffect](/documentation/swiftui/customhovereffect/automatic)
- [static var empty: EmptyHoverEffect](/documentation/swiftui/customhovereffect/empty)
- [static var highlight: HighlightHoverEffect](/documentation/swiftui/customhovereffect/highlight)
- [static var lift: LiftHoverEffect](/documentation/swiftui/customhovereffect/lift)

#### Creating custom hover effects

- [func hoverEffect(some CustomHoverEffect, in: HoverEffectGroup?, isEnabled: Bool) -> some CustomHoverEffect](/documentation/swiftui/customhovereffect/hovereffect(_:in:isenabled:))
- [func hoverEffect(in: HoverEffectGroup?, isEnabled: Bool, body: (EmptyHoverEffectContent, Bool, GeometryProxy) -> some HoverEffectContent) -> some CustomHoverEffect](/documentation/swiftui/customhovereffect/hovereffect(in:isenabled:body:)-swift.method)
- [func hoverEffectGroup(HoverEffectGroup?) -> some CustomHoverEffect](/documentation/swiftui/customhovereffect/hovereffectgroup(_:)-swift.method)
- [func hoverEffectGroup(id: String?, in: Namespace.ID, behavior: HoverEffectGroup.Behavior) -> some CustomHoverEffect](/documentation/swiftui/customhovereffect/hovereffectgroup(id:in:behavior:)-swift.method)
- [func hoverEffectDisabled(Bool) -> some CustomHoverEffect](/documentation/swiftui/customhovereffect/hovereffectdisabled(_:))

#### Supporting types

- [AutomaticHoverEffect](/documentation/swiftui/automatichovereffect)

##### Initializers

- [init()](/documentation/swiftui/automatichovereffect/init())
- [EmptyHoverEffect](/documentation/swiftui/emptyhovereffect)
- [HighlightHoverEffect](/documentation/swiftui/highlighthovereffect)

##### Initializers

- [init()](/documentation/swiftui/highlighthovereffect/init())
- [LiftHoverEffect](/documentation/swiftui/lifthovereffect)

##### Initializers

- [init()](/documentation/swiftui/lifthovereffect/init())

#### Associated Types

- [Body](/documentation/swiftui/customhovereffect/body)

#### Instance Methods

- [func body(content: Self.Content) -> Self.Body](/documentation/swiftui/customhovereffect/body(content:))
- [func hoverEffectPhaseOverride(HoverEffectPhaseOverride?) -> some CustomHoverEffect](/documentation/swiftui/customhovereffect/hovereffectphaseoverride(_:))

#### Type Aliases

- [CustomHoverEffect.Content](/documentation/swiftui/customhovereffect/content)

#### Type Methods

- [static func hoverEffect<C>(in: HoverEffectGroup?, isEnabled: Bool, body: (EmptyHoverEffectContent, Bool, GeometryProxy) -> C) -> ContentHoverEffect<C>](/documentation/swiftui/customhovereffect/hovereffect(in:isenabled:body:)-swift.type.method)
- [static func hoverEffectGroup(HoverEffectGroup?) -> GroupHoverEffect](/documentation/swiftui/customhovereffect/hovereffectgroup(_:)-swift.type.method)
- [static func hoverEffectGroup(id: String?, in: Namespace.ID, behavior: HoverEffectGroup.Behavior) -> GroupHoverEffect](/documentation/swiftui/customhovereffect/hovereffectgroup(id:in:behavior:)-swift.type.method)
- [static func ornament<Content>(attachmentAnchor: OrnamentAttachmentAnchor, contentAlignment: Alignment3D, ornament: () -> Content) -> OrnamentHoverEffect<Content>](/documentation/swiftui/customhovereffect/ornament(attachmentanchor:contentalignment:ornament:))
- [static func ornament<Content, EffectContent>(attachmentAnchor: OrnamentAttachmentAnchor, contentAlignment: Alignment3D, ornament: () -> Content, effect: (EmptyHoverEffectContent, Bool, GeometryProxy) -> EffectContent) -> OrnamentHoverContentEffect<Content, EffectContent>](/documentation/swiftui/customhovereffect/ornament(attachmentanchor:contentalignment:ornament:effect:))
- [ContentHoverEffect](/documentation/swiftui/contenthovereffect)
- [HoverEffectGroup](/documentation/swiftui/hovereffectgroup)

#### Structures

- [HoverEffectGroup.Behavior](/documentation/swiftui/hovereffectgroup/behavior)

##### Type Properties

- [static let activatesGroup: HoverEffectGroup.Behavior](/documentation/swiftui/hovereffectgroup/behavior/activatesgroup)
- [static let followsGroup: HoverEffectGroup.Behavior](/documentation/swiftui/hovereffectgroup/behavior/followsgroup)
- [static let ignoresGroup: HoverEffectGroup.Behavior](/documentation/swiftui/hovereffectgroup/behavior/ignoresgroup)
- [static let preservesGroup: HoverEffectGroup.Behavior](/documentation/swiftui/hovereffectgroup/behavior/preservesgroup)

#### Initializers

- [init(Namespace.ID, behavior: HoverEffectGroup.Behavior)](/documentation/swiftui/hovereffectgroup/init(_:behavior:))
- [init(id: String?, in: Namespace.ID, behavior: HoverEffectGroup.Behavior)](/documentation/swiftui/hovereffectgroup/init(id:in:behavior:))

#### Instance Methods

- [func behavior(HoverEffectGroup.Behavior) -> HoverEffectGroup](/documentation/swiftui/hovereffectgroup/behavior(_:))

#### Type Properties

- [static var systemOverlays: HoverEffectGroup](/documentation/swiftui/hovereffectgroup/systemoverlays)
- [func hoverEffectGroup() -> some View](/documentation/swiftui/view/hovereffectgroup())
- [func hoverEffectGroup(HoverEffectGroup?) -> some View](/documentation/swiftui/view/hovereffectgroup(_:))
- [func hoverEffectGroup(id: String?, in: Namespace.ID, behavior: HoverEffectGroup.Behavior) -> some View](/documentation/swiftui/view/hovereffectgroup(id:in:behavior:))
- [GroupHoverEffect](/documentation/swiftui/grouphovereffect)
- [HoverEffectContent](/documentation/swiftui/hovereffectcontent)

#### Instance Methods

- [func animation(Animation?, body: (EmptyHoverEffectContent) -> some HoverEffectContent) -> some HoverEffectContent](/documentation/swiftui/hovereffectcontent/animation(_:body:))
- [func clipShape<S>(S, style: FillStyle) -> some HoverEffectContent](/documentation/swiftui/hovereffectcontent/clipshape(_:style:))
- [func offset(CGSize) -> some HoverEffectContent](/documentation/swiftui/hovereffectcontent/offset(_:))
- [func offset(x: CGFloat, y: CGFloat) -> some HoverEffectContent](/documentation/swiftui/hovereffectcontent/offset(x:y:))
- [func opacity(Double) -> some HoverEffectContent](/documentation/swiftui/hovereffectcontent/opacity(_:))
- [func rotationEffect(Angle, anchor: UnitPoint) -> some HoverEffectContent](/documentation/swiftui/hovereffectcontent/rotationeffect(_:anchor:))
- [func scaleEffect(_:anchor:)](/documentation/swiftui/hovereffectcontent/scaleeffect(_:anchor:))
- [func scaleEffect(x: CGFloat, y: CGFloat, anchor: UnitPoint) -> some HoverEffectContent](/documentation/swiftui/hovereffectcontent/scaleeffect(x:y:anchor:))
- [func transformEffect(CGAffineTransform) -> some HoverEffectContent](/documentation/swiftui/hovereffectcontent/transformeffect(_:))
- [EmptyHoverEffectContent](/documentation/swiftui/emptyhovereffectcontent)
- [func handPointerBehavior(HandPointerBehavior?) -> some View](/documentation/swiftui/view/handpointerbehavior(_:))
- [HandPointerBehavior](/documentation/swiftui/handpointerbehavior)

#### Type Properties

- [static let drawing: HandPointerBehavior](/documentation/swiftui/handpointerbehavior/drawing)
- [static let inactive: HandPointerBehavior](/documentation/swiftui/handpointerbehavior/inactive)

### Responding to submission events

- [func onSubmit(of: SubmitTriggers, () -> Void) -> some View](/documentation/swiftui/view/onsubmit(of:_:))
- [func submitScope(Bool) -> some View](/documentation/swiftui/view/submitscope(_:))
- [SubmitTriggers](/documentation/swiftui/submittriggers)

#### Getting submit triggers

- [static let search: SubmitTriggers](/documentation/swiftui/submittriggers/search)
- [static let text: SubmitTriggers](/documentation/swiftui/submittriggers/text)

#### Creating a set of options

- [init(rawValue: SubmitTriggers.RawValue)](/documentation/swiftui/submittriggers/init(rawvalue:))

### Labeling a submission event

- [func submitLabel(SubmitLabel) -> some View](/documentation/swiftui/view/submitlabel(_:))
- [SubmitLabel](/documentation/swiftui/submitlabel)

#### Getting submission labels

- [static var `continue`: SubmitLabel](/documentation/swiftui/submitlabel/continue)
- [static var done: SubmitLabel](/documentation/swiftui/submitlabel/done)
- [static var go: SubmitLabel](/documentation/swiftui/submitlabel/go)
- [static var join: SubmitLabel](/documentation/swiftui/submitlabel/join)
- [static var next: SubmitLabel](/documentation/swiftui/submitlabel/next)
- [static var `return`: SubmitLabel](/documentation/swiftui/submitlabel/return)
- [static var route: SubmitLabel](/documentation/swiftui/submitlabel/route)
- [static var search: SubmitLabel](/documentation/swiftui/submitlabel/search)
- [static var send: SubmitLabel](/documentation/swiftui/submitlabel/send)

### Responding to commands

- [func onMoveCommand(perform: ((MoveCommandDirection) -> Void)?) -> some View](/documentation/swiftui/view/onmovecommand(perform:))
- [func onDeleteCommand(perform: (() -> Void)?) -> some View](/documentation/swiftui/view/ondeletecommand(perform:))
- [func pageCommand<V>(value: Binding<V>, in: ClosedRange<V>, step: V) -> some View](/documentation/swiftui/view/pagecommand(value:in:step:))
- [func onExitCommand(perform: (() -> Void)?) -> some View](/documentation/swiftui/view/onexitcommand(perform:))
- [func onPlayPauseCommand(perform: (() -> Void)?) -> some View](/documentation/swiftui/view/onplaypausecommand(perform:))
- [func onCommand(Selector, perform: (() -> Void)?) -> some View](/documentation/swiftui/view/oncommand(_:perform:))
- [MoveCommandDirection](/documentation/swiftui/movecommanddirection)

#### Getting move command directions

- [case up](/documentation/swiftui/movecommanddirection/up)
- [case down](/documentation/swiftui/movecommanddirection/down)
- [case left](/documentation/swiftui/movecommanddirection/left)
- [case right](/documentation/swiftui/movecommanddirection/right)

### Controlling hit testing

- [func allowsTightening(Bool) -> some View](/documentation/swiftui/view/allowstightening(_:))
- [func contentShape<S>(S, eoFill: Bool) -> some View](/documentation/swiftui/view/contentshape(_:eofill:))
- [func contentShape<S>(ContentShapeKinds, S, eoFill: Bool) -> some View](/documentation/swiftui/view/contentshape(_:_:eofill:))
- [ContentShapeKinds](/documentation/swiftui/contentshapekinds)

#### Getting shape kinds

- [static let interaction: ContentShapeKinds](/documentation/swiftui/contentshapekinds/interaction)
- [static let dragPreview: ContentShapeKinds](/documentation/swiftui/contentshapekinds/dragpreview)
- [static let contextMenuPreview: ContentShapeKinds](/documentation/swiftui/contentshapekinds/contextmenupreview)
- [static let focusEffect: ContentShapeKinds](/documentation/swiftui/contentshapekinds/focuseffect)
- [static let hoverEffect: ContentShapeKinds](/documentation/swiftui/contentshapekinds/hovereffect)
- [static let accessibility: ContentShapeKinds](/documentation/swiftui/contentshapekinds/accessibility)

#### Creating a set of options

- [init(rawValue: Int)](/documentation/swiftui/contentshapekinds/init(rawvalue:))

### Interacting with the Digital Crown

- [func digitalCrownAccessory(Visibility) -> some View](/documentation/swiftui/view/digitalcrownaccessory(_:))
- [func digitalCrownAccessory<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/digitalcrownaccessory(content:))
- [func digitalCrownRotation<V>(Binding<V>, from: V, through: V, sensitivity: DigitalCrownRotationalSensitivity, isContinuous: Bool, isHapticFeedbackEnabled: Bool, onChange: (DigitalCrownEvent) -> Void, onIdle: () -> Void) -> some View](/documentation/swiftui/view/digitalcrownrotation(_:from:through:sensitivity:iscontinuous:ishapticfeedbackenabled:onchange:onidle:))
- [func digitalCrownRotation<V>(Binding<V>, onChange: (DigitalCrownEvent) -> Void, onIdle: () -> Void) -> some View](/documentation/swiftui/view/digitalcrownrotation(_:onchange:onidle:))
- [func digitalCrownRotation(detent:from:through:by:sensitivity:isContinuous:isHapticFeedbackEnabled:onChange:onIdle:)](/documentation/swiftui/view/digitalcrownrotation(detent:from:through:by:sensitivity:iscontinuous:ishapticfeedbackenabled:onchange:onidle:))
- [func digitalCrownRotation<V>(Binding<V>) -> some View](/documentation/swiftui/view/digitalcrownrotation(_:))
- [func digitalCrownRotation<V>(Binding<V>, from: V, through: V, by: V.Stride?, sensitivity: DigitalCrownRotationalSensitivity, isContinuous: Bool, isHapticFeedbackEnabled: Bool) -> some View](/documentation/swiftui/view/digitalcrownrotation(_:from:through:by:sensitivity:iscontinuous:ishapticfeedbackenabled:))
- [DigitalCrownEvent](/documentation/swiftui/digitalcrownevent)

#### Getting events

- [var offset: Double](/documentation/swiftui/digitalcrownevent/offset)
- [var velocity: Double](/documentation/swiftui/digitalcrownevent/velocity)
- [DigitalCrownRotationalSensitivity](/documentation/swiftui/digitalcrownrotationalsensitivity)

#### Getting sensitivity options

- [case low](/documentation/swiftui/digitalcrownrotationalsensitivity/low)
- [case medium](/documentation/swiftui/digitalcrownrotationalsensitivity/medium)
- [case high](/documentation/swiftui/digitalcrownrotationalsensitivity/high)

### Managing Touch Bar input

- [func touchBar<Content>(content: () -> Content) -> some View](/documentation/swiftui/view/touchbar(content:))
- [func touchBar<Content>(TouchBar<Content>) -> some View](/documentation/swiftui/view/touchbar(_:))
- [func touchBarItemPrincipal(Bool) -> some View](/documentation/swiftui/view/touchbaritemprincipal(_:))
- [func touchBarCustomizationLabel(Text) -> some View](/documentation/swiftui/view/touchbarcustomizationlabel(_:))
- [func touchBarItemPresence(TouchBarItemPresence) -> some View](/documentation/swiftui/view/touchbaritempresence(_:))
- [TouchBar](/documentation/swiftui/touchbar)

#### Creating a Touch Bar view

- [init(content: () -> Content)](/documentation/swiftui/touchbar/init(content:))
- [init(id: String, content: () -> Content)](/documentation/swiftui/touchbar/init(id:content:))
- [TouchBarItemPresence](/documentation/swiftui/touchbaritempresence)

#### Getting presence options

- [case `default`(String)](/documentation/swiftui/touchbaritempresence/default(_:))
- [case optional(String)](/documentation/swiftui/touchbaritempresence/optional(_:))
- [case required(String)](/documentation/swiftui/touchbaritempresence/required(_:))

### Responding to capture events

- [func onCameraCaptureEvent(isEnabled: Bool, action: (AVCaptureEvent) -> Void) -> some View](/documentation/swiftui/view/oncameracaptureevent(isenabled:action:))
- [func onCameraCaptureEvent(isEnabled: Bool, primaryAction: (AVCaptureEvent) -> Void, secondaryAction: (AVCaptureEvent) -> Void) -> some View](/documentation/swiftui/view/oncameracaptureevent(isenabled:primaryaction:secondaryaction:))
- [Clipboard](/documentation/swiftui/clipboard)

### Copying transferable items

- [func copyable<T>(@autoclosure () -> [T]) -> some View](/documentation/swiftui/view/copyable(_:))
- [func cuttable<T>(for: T.Type, action: () -> [T]) -> some View](/documentation/swiftui/view/cuttable(for:action:))
- [func pasteDestination<T>(for: T.Type, action: ([T]) -> Void, validator: ([T]) -> [T]) -> some View](/documentation/swiftui/view/pastedestination(for:action:validator:))

### Copying items using item providers

- [func onCopyCommand(perform: (() -> [NSItemProvider])?) -> some View](/documentation/swiftui/view/oncopycommand(perform:))
- [func onCutCommand(perform: (() -> [NSItemProvider])?) -> some View](/documentation/swiftui/view/oncutcommand(perform:))
- [func onPasteCommand(of:perform:)](/documentation/swiftui/view/onpastecommand(of:perform:))
- [func onPasteCommand(of:validator:perform:)](/documentation/swiftui/view/onpastecommand(of:validator:perform:))
- [Drag and drop](/documentation/swiftui/drag-and-drop)

### Essentials

- [Adopting drag and drop using SwiftUI](/documentation/swiftui/adopting-drag-and-drop-using-swiftui)
- [Making a view into a drag source](/documentation/swiftui/making-a-view-into-a-drag-source)

### Configuring drag and drop behavior

- [DragConfiguration](/documentation/swiftui/dragconfiguration)

#### Structures

- [DragConfiguration.OperationsOutsideApp](/documentation/swiftui/dragconfiguration/operationsoutsideapp-swift.struct)

##### Initializers

- [init(allowCopy: Bool)](/documentation/swiftui/dragconfiguration/operationsoutsideapp-swift.struct/init(allowcopy:))
- [init(allowCopy: Bool, allowMove: Bool, allowDelete: Bool)](/documentation/swiftui/dragconfiguration/operationsoutsideapp-swift.struct/init(allowcopy:allowmove:allowdelete:))

##### Instance Properties

- [var allowAlias: Bool](/documentation/swiftui/dragconfiguration/operationsoutsideapp-swift.struct/allowalias)
- [DragConfiguration.OperationsWithinApp](/documentation/swiftui/dragconfiguration/operationswithinapp-swift.struct)

##### Initializers

- [init(allowCopy: Bool, allowMove: Bool, allowDelete: Bool)](/documentation/swiftui/dragconfiguration/operationswithinapp-swift.struct/init(allowcopy:allowmove:allowdelete:))
- [init(allowMove: Bool)](/documentation/swiftui/dragconfiguration/operationswithinapp-swift.struct/init(allowmove:))

##### Instance Properties

- [var allowAlias: Bool](/documentation/swiftui/dragconfiguration/operationswithinapp-swift.struct/allowalias)

#### Initializers

- [init(allowMove: Bool)](/documentation/swiftui/dragconfiguration/init(allowmove:))
- [init(allowMove: Bool, allowDelete: Bool)](/documentation/swiftui/dragconfiguration/init(allowmove:allowdelete:))
- [init(operationsWithinApp: DragConfiguration.OperationsWithinApp, operationsOutsideApp: DragConfiguration.OperationsOutsideApp)](/documentation/swiftui/dragconfiguration/init(operationswithinapp:operationsoutsideapp:))

#### Instance Properties

- [var operationsOutsideApp: DragConfiguration.OperationsOutsideApp](/documentation/swiftui/dragconfiguration/operationsoutsideapp-swift.property)
- [var operationsWithinApp: DragConfiguration.OperationsWithinApp](/documentation/swiftui/dragconfiguration/operationswithinapp-swift.property)
- [DropConfiguration](/documentation/swiftui/dropconfiguration)

#### Initializers

- [init(operation: DropOperation)](/documentation/swiftui/dropconfiguration/init(operation:))

#### Instance Properties

- [var acceptedItemCount: Int?](/documentation/swiftui/dropconfiguration/accepteditemcount)
- [var operation: DropOperation](/documentation/swiftui/dropconfiguration/operation)

### Moving items

- [DragSession](/documentation/swiftui/dragsession)

#### Structures

- [DragSession.ID](/documentation/swiftui/dragsession/id-swift.struct)

##### Instance Methods

- [func matches(_:)](/documentation/swiftui/dragsession/id-swift.struct/matches(_:))

#### Instance Properties

- [var draggedItemIndex: Int](/documentation/swiftui/dragsession/draggeditemindex)
- [var id: DragSession.ID](/documentation/swiftui/dragsession/id-swift.property)
- [var location: CGPoint](/documentation/swiftui/dragsession/location)
- [var phase: DragSession.Phase](/documentation/swiftui/dragsession/phase-swift.property)

#### Instance Methods

- [func draggedItemIDs<ItemID>(for: ItemID.Type) -> [ItemID]](/documentation/swiftui/dragsession/draggeditemids(for:))

#### Enumerations

- [DragSession.Phase](/documentation/swiftui/dragsession/phase-swift.enum)

##### Enumeration Cases

- [case active](/documentation/swiftui/dragsession/phase-swift.enum/active)
- [case dataTransferCompleted](/documentation/swiftui/dragsession/phase-swift.enum/datatransfercompleted)
- [case ended(DropOperation)](/documentation/swiftui/dragsession/phase-swift.enum/ended(_:))
- [case ending(DropOperation)](/documentation/swiftui/dragsession/phase-swift.enum/ending(_:))
- [case initial](/documentation/swiftui/dragsession/phase-swift.enum/initial)
- [DropSession](/documentation/swiftui/dropsession)

#### Structures

- [DropSession.ID](/documentation/swiftui/dropsession/id-swift.struct)

##### Instance Methods

- [func matches(_:)](/documentation/swiftui/dropsession/id-swift.struct/matches(_:))
- [DropSession.LocalSession](/documentation/swiftui/dropsession/localsession-swift.struct)

##### Instance Methods

- [func draggedItemIDs<ItemID>(for: ItemID.Type) -> [ItemID]](/documentation/swiftui/dropsession/localsession-swift.struct/draggeditemids(for:))

#### Instance Properties

- [var id: DropSession.ID](/documentation/swiftui/dropsession/id-swift.property)
- [var itemsCount: Int](/documentation/swiftui/dropsession/itemscount)
- [var localSession: DropSession.LocalSession?](/documentation/swiftui/dropsession/localsession-swift.property)
- [var location: CGPoint](/documentation/swiftui/dropsession/location)
- [var phase: DropSession.Phase](/documentation/swiftui/dropsession/phase-swift.property)
- [var size: CGSize](/documentation/swiftui/dropsession/size)
- [var suggestedOperations: DropOperation.Set](/documentation/swiftui/dropsession/suggestedoperations)

#### Enumerations

- [DropSession.Phase](/documentation/swiftui/dropsession/phase-swift.enum)

##### Enumeration Cases

- [case active](/documentation/swiftui/dropsession/phase-swift.enum/active)
- [case dataTransferCompleted](/documentation/swiftui/dropsession/phase-swift.enum/datatransfercompleted)
- [case ended(DropOperation)](/documentation/swiftui/dropsession/phase-swift.enum/ended(_:))
- [case entering](/documentation/swiftui/dropsession/phase-swift.enum/entering)
- [case exiting](/documentation/swiftui/dropsession/phase-swift.enum/exiting)

### Moving transferable items

- [func draggable<T>(@autoclosure () -> T) -> some View](/documentation/swiftui/view/draggable(_:))
- [func draggable<V, T>(@autoclosure () -> T, preview: () -> V) -> some View](/documentation/swiftui/view/draggable(_:preview:))
- [func dropDestination<T>(for: T.Type, action: ([T], CGPoint) -> Bool, isTargeted: (Bool) -> Void) -> some View](/documentation/swiftui/view/dropdestination(for:action:istargeted:))

### Moving items using item providers

- [func itemProvider(Optional<() -> NSItemProvider?>) -> some View](/documentation/swiftui/view/itemprovider(_:))
- [func onDrag<V>(() -> NSItemProvider, preview: () -> V) -> some View](/documentation/swiftui/view/ondrag(_:preview:))
- [func onDrag(() -> NSItemProvider) -> some View](/documentation/swiftui/view/ondrag(_:))
- [func onDrop(of:isTargeted:perform:)](/documentation/swiftui/view/ondrop(of:istargeted:perform:))
- [func onDrop(of:delegate:)](/documentation/swiftui/view/ondrop(of:delegate:))
- [DropDelegate](/documentation/swiftui/dropdelegate)

#### Receiving drop information

- [func dropEntered(info: DropInfo)](/documentation/swiftui/dropdelegate/dropentered(info:))
- [func dropExited(info: DropInfo)](/documentation/swiftui/dropdelegate/dropexited(info:))
- [func dropUpdated(info: DropInfo) -> DropProposal?](/documentation/swiftui/dropdelegate/dropupdated(info:))
- [func validateDrop(info: DropInfo) -> Bool](/documentation/swiftui/dropdelegate/validatedrop(info:))
- [func performDrop(info: DropInfo) -> Bool](/documentation/swiftui/dropdelegate/performdrop(info:))
- [DropProposal](/documentation/swiftui/dropproposal)

#### Creating a drop proposal

- [init(operation: DropOperation)](/documentation/swiftui/dropproposal/init(operation:))
- [let operation: DropOperation](/documentation/swiftui/dropproposal/operation)

#### Initializers

- [init(withinApplication: DropOperation, outsideApplication: DropOperation)](/documentation/swiftui/dropproposal/init(withinapplication:outsideapplication:))

#### Instance Properties

- [let operationOutsideApplication: DropOperation?](/documentation/swiftui/dropproposal/operationoutsideapplication)
- [DropOperation](/documentation/swiftui/dropoperation)

#### Getting operation types

- [case cancel](/documentation/swiftui/dropoperation/cancel)
- [case copy](/documentation/swiftui/dropoperation/copy)
- [case forbidden](/documentation/swiftui/dropoperation/forbidden)
- [case move](/documentation/swiftui/dropoperation/move)

#### Structures

- [DropOperation.Set](/documentation/swiftui/dropoperation/set)

##### Initializers

- [init(rawValue: Int)](/documentation/swiftui/dropoperation/set/init(rawvalue:))

##### Type Properties

- [static let alias: DropOperation.Set](/documentation/swiftui/dropoperation/set/alias)
- [static let cancel: DropOperation.Set](/documentation/swiftui/dropoperation/set/cancel)
- [static let copy: DropOperation.Set](/documentation/swiftui/dropoperation/set/copy)
- [static let delete: DropOperation.Set](/documentation/swiftui/dropoperation/set/delete)
- [static let forbidden: DropOperation.Set](/documentation/swiftui/dropoperation/set/forbidden)
- [static let move: DropOperation.Set](/documentation/swiftui/dropoperation/set/move)

#### Enumeration Cases

- [case alias](/documentation/swiftui/dropoperation/alias)
- [case delete](/documentation/swiftui/dropoperation/delete)
- [DropInfo](/documentation/swiftui/dropinfo)

#### Getting the drop location

- [var location: CGPoint](/documentation/swiftui/dropinfo/location)

#### Checking for items

- [func hasItemsConforming(to: [UTType]) -> Bool](/documentation/swiftui/dropinfo/hasitemsconforming(to:)-47irh)
- [func itemProviders(for: [UTType]) -> [NSItemProvider]](/documentation/swiftui/dropinfo/itemproviders(for:)-93409)

#### Deprecated symbols

- [func hasItemsConforming(to: [String]) -> Bool](/documentation/swiftui/dropinfo/hasitemsconforming(to:)-4qeez)
- [func itemProviders(for: [String]) -> [NSItemProvider]](/documentation/swiftui/dropinfo/itemproviders(for:)-b6fo)

#### Instance Methods

- [func hasItemsConforming(to:)](/documentation/swiftui/dropinfo/hasitemsconforming(to:))
- [func itemProviders(for:)](/documentation/swiftui/dropinfo/itemproviders(for:))

### Describing preview formations

- [DragDropPreviewsFormation](/documentation/swiftui/dragdroppreviewsformation)

#### Type Properties

- [static let `default`: DragDropPreviewsFormation](/documentation/swiftui/dragdroppreviewsformation/default)
- [static let list: DragDropPreviewsFormation](/documentation/swiftui/dragdroppreviewsformation/list)
- [static let none: DragDropPreviewsFormation](/documentation/swiftui/dragdroppreviewsformation/none)
- [static let pile: DragDropPreviewsFormation](/documentation/swiftui/dragdroppreviewsformation/pile)
- [static let stack: DragDropPreviewsFormation](/documentation/swiftui/dragdroppreviewsformation/stack)

### Configuring spring loading

- [func springLoadingBehavior(SpringLoadingBehavior) -> some View](/documentation/swiftui/view/springloadingbehavior(_:))
- [var springLoadingBehavior: SpringLoadingBehavior](/documentation/swiftui/environmentvalues/springloadingbehavior)
- [SpringLoadingBehavior](/documentation/swiftui/springloadingbehavior)

#### Getting the behaviors

- [static let automatic: SpringLoadingBehavior](/documentation/swiftui/springloadingbehavior/automatic)
- [static let enabled: SpringLoadingBehavior](/documentation/swiftui/springloadingbehavior/enabled)
- [static let disabled: SpringLoadingBehavior](/documentation/swiftui/springloadingbehavior/disabled)
- [Focus](/documentation/swiftui/focus)

### Essentials

- [Focus Cookbook: Supporting and enhancing focus-driven interactions in your SwiftUI app](/documentation/swiftui/focus-cookbook-sample)

### Indicating that a view can receive focus

- [func focusable(Bool) -> some View](/documentation/swiftui/view/focusable(_:))
- [func focusable(Bool, interactions: FocusInteractions) -> some View](/documentation/swiftui/view/focusable(_:interactions:))
- [FocusInteractions](/documentation/swiftui/focusinteractions)

#### Creating the interaction types

- [static var automatic: FocusInteractions](/documentation/swiftui/focusinteractions/automatic)
- [static let activate: FocusInteractions](/documentation/swiftui/focusinteractions/activate)
- [static let edit: FocusInteractions](/documentation/swiftui/focusinteractions/edit)

### Managing focus state

- [func focused<Value>(FocusState<Value>.Binding, equals: Value) -> some View](/documentation/swiftui/view/focused(_:equals:))
- [func focused(FocusState<Bool>.Binding) -> some View](/documentation/swiftui/view/focused(_:))
- [var isFocused: Bool](/documentation/swiftui/environmentvalues/isfocused)
- [FocusState](/documentation/swiftui/focusstate)

#### Creating a focus state

- [init()](/documentation/swiftui/focusstate/init())

#### Inspecting the focus state

- [var projectedValue: FocusState<Value>.Binding](/documentation/swiftui/focusstate/projectedvalue)
- [FocusState.Binding](/documentation/swiftui/focusstate/binding)

##### Inspecting the binding

- [var projectedValue: FocusState<Value>.Binding](/documentation/swiftui/focusstate/binding/projectedvalue)
- [var wrappedValue: Value](/documentation/swiftui/focusstate/binding/wrappedvalue)
- [var wrappedValue: Value](/documentation/swiftui/focusstate/wrappedvalue)
- [FocusedValue](/documentation/swiftui/focusedvalue)

#### Creating the value

- [init(_:)](/documentation/swiftui/focusedvalue/init(_:))

#### Getting the value

- [var wrappedValue: Value?](/documentation/swiftui/focusedvalue/wrappedvalue)
- [macro Entry()](/documentation/swiftui/entry())
- [FocusedValueKey](/documentation/swiftui/focusedvaluekey)

#### Specifying the value type

- [Value](/documentation/swiftui/focusedvaluekey/value)
- [FocusedBinding](/documentation/swiftui/focusedbinding)

#### Creating the binding

- [init(KeyPath<FocusedValues, Binding<Value>?>)](/documentation/swiftui/focusedbinding/init(_:))

#### Getting the value

- [var projectedValue: Binding<Value?>](/documentation/swiftui/focusedbinding/projectedvalue)
- [var wrappedValue: Value?](/documentation/swiftui/focusedbinding/wrappedvalue)
- [func searchFocused(FocusState<Bool>.Binding) -> some View](/documentation/swiftui/view/searchfocused(_:))
- [func searchFocused<V>(FocusState<V>.Binding, equals: V) -> some View](/documentation/swiftui/view/searchfocused(_:equals:))

### Exposing value types to focused views

- [func focusedValue<T>(T?) -> some View](/documentation/swiftui/view/focusedvalue(_:))
- [func focusedValue(_:_:)](/documentation/swiftui/view/focusedvalue(_:_:))
- [func focusedSceneValue<T>(T?) -> some View](/documentation/swiftui/view/focusedscenevalue(_:))
- [func focusedSceneValue(_:_:)](/documentation/swiftui/view/focusedscenevalue(_:_:))
- [FocusedValues](/documentation/swiftui/focusedvalues)

#### Getting the value for a key

- [subscript<Key>(Key.Type) -> Key.Value?](/documentation/swiftui/focusedvalues/subscript(_:))

### Exposing reference types to focused views

- [func focusedObject(_:)](/documentation/swiftui/view/focusedobject(_:))
- [func focusedSceneObject(_:)](/documentation/swiftui/view/focusedsceneobject(_:))
- [FocusedObject](/documentation/swiftui/focusedobject)

#### Creating the focused object

- [init()](/documentation/swiftui/focusedobject/init())

#### Getting the value

- [var projectedValue: FocusedObject<ObjectType>.Wrapper?](/documentation/swiftui/focusedobject/projectedvalue)
- [var wrappedValue: ObjectType?](/documentation/swiftui/focusedobject/wrappedvalue)
- [FocusedObject.Wrapper](/documentation/swiftui/focusedobject/wrapper)

##### Accessing members

- [subscript<T>(dynamicMember _: ReferenceWritableKeyPath<ObjectType, T>) -> Binding<T>](/documentation/swiftui/focusedobject/wrapper/subscript(dynamicmember:))

### Setting focus scope

- [func focusScope(Namespace.ID) -> some View](/documentation/swiftui/view/focusscope(_:))
- [func focusSection() -> some View](/documentation/swiftui/view/focussection())

### Controlling default focus

- [func prefersDefaultFocus(Bool, in: Namespace.ID) -> some View](/documentation/swiftui/view/prefersdefaultfocus(_:in:))
- [func defaultFocus<V>(FocusState<V>.Binding, V, priority: DefaultFocusEvaluationPriority) -> some View](/documentation/swiftui/view/defaultfocus(_:_:priority:))
- [DefaultFocusEvaluationPriority](/documentation/swiftui/defaultfocusevaluationpriority)

#### Getting the priorities

- [static let automatic: DefaultFocusEvaluationPriority](/documentation/swiftui/defaultfocusevaluationpriority/automatic)
- [static let userInitiated: DefaultFocusEvaluationPriority](/documentation/swiftui/defaultfocusevaluationpriority/userinitiated)

### Resetting focus

- [var resetFocus: ResetFocusAction](/documentation/swiftui/environmentvalues/resetfocus)
- [ResetFocusAction](/documentation/swiftui/resetfocusaction)

#### Calling the action

- [func callAsFunction(in: Namespace.ID)](/documentation/swiftui/resetfocusaction/callasfunction(in:))

### Configuring effects

- [func focusEffectDisabled(Bool) -> some View](/documentation/swiftui/view/focuseffectdisabled(_:))
- [var isFocusEffectEnabled: Bool](/documentation/swiftui/environmentvalues/isfocuseffectenabled)
- [System events](/documentation/swiftui/system-events)

### Sending and receiving user activities

- [Restoring your app’s state with SwiftUI](/documentation/swiftui/restoring-your-app-s-state-with-swiftui)
- [func userActivity<P>(String, element: P?, (P, NSUserActivity) -> ()) -> some View](/documentation/swiftui/view/useractivity(_:element:_:))
- [func userActivity(String, isActive: Bool, (NSUserActivity) -> ()) -> some View](/documentation/swiftui/view/useractivity(_:isactive:_:))
- [func onContinueUserActivity(String, perform: (NSUserActivity) -> ()) -> some View](/documentation/swiftui/view/oncontinueuseractivity(_:perform:))

### Sending and receiving URLs

- [var openURL: OpenURLAction](/documentation/swiftui/environmentvalues/openurl)
- [OpenURLAction](/documentation/swiftui/openurlaction)

#### Creating the action

- [init(handler: (URL) -> OpenURLAction.Result)](/documentation/swiftui/openurlaction/init(handler:))
- [OpenURLAction.Result](/documentation/swiftui/openurlaction/result)

##### Getting the results

- [static let discarded: OpenURLAction.Result](/documentation/swiftui/openurlaction/result/discarded)
- [static let handled: OpenURLAction.Result](/documentation/swiftui/openurlaction/result/handled)
- [static let systemAction: OpenURLAction.Result](/documentation/swiftui/openurlaction/result/systemaction)
- [static func systemAction(URL) -> OpenURLAction.Result](/documentation/swiftui/openurlaction/result/systemaction(_:))

##### Type Methods

- [static func systemAction(URL?, prefersInApp: Bool) -> OpenURLAction.Result](/documentation/swiftui/openurlaction/result/systemaction(_:prefersinapp:))

#### Calling the action

- [func callAsFunction(URL)](/documentation/swiftui/openurlaction/callasfunction(_:))
- [func callAsFunction(URL, completion: (Bool) -> Void)](/documentation/swiftui/openurlaction/callasfunction(_:completion:))

#### Instance Methods

- [func callAsFunction(URL, prefersInApp: Bool)](/documentation/swiftui/openurlaction/callasfunction(_:prefersinapp:))
- [func onOpenURL(perform: (URL) -> ()) -> some View](/documentation/swiftui/view/onopenurl(perform:))

### Handling external events

- [func handlesExternalEvents(matching: Set<String>) -> some Scene](/documentation/swiftui/scene/handlesexternalevents(matching:))
- [func handlesExternalEvents(preferring: Set<String>, allowing: Set<String>) -> some View](/documentation/swiftui/view/handlesexternalevents(preferring:allowing:))

### Handling background tasks

- [func backgroundTask<D, R>(BackgroundTask<D, R>, action: (D) async -> R) -> some Scene](/documentation/swiftui/scene/backgroundtask(_:action:))
- [BackgroundTask](/documentation/swiftui/backgroundtask)

#### Refreshing the app

- [static var appRefresh: BackgroundTask<String?, Void>](/documentation/swiftui/backgroundtask/apprefresh)
- [static func appRefresh(String) -> BackgroundTask<Void, Void>](/documentation/swiftui/backgroundtask/apprefresh(_:))

#### Preparing for a snapshot

- [static var snapshot: BackgroundTask<SnapshotData, SnapshotResponse>](/documentation/swiftui/backgroundtask/snapshot)

#### Receiving connectivity updates

- [static var bluetoothAlert: BackgroundTask<Void, Void>](/documentation/swiftui/backgroundtask/bluetoothalert)
- [static var watchConnectivity: BackgroundTask<Void, Void>](/documentation/swiftui/backgroundtask/watchconnectivity)

#### Responding to URL sessions

- [static var urlSession: BackgroundTask<String, Void>](/documentation/swiftui/backgroundtask/urlsession)
- [static func urlSession(String) -> BackgroundTask<Void, Void>](/documentation/swiftui/backgroundtask/urlsession(_:))
- [static func urlSession(matching: (String) -> Bool) -> BackgroundTask<String, Void>](/documentation/swiftui/backgroundtask/urlsession(matching:))

#### Updating intents and shortcuts

- [static var intentDidRun: BackgroundTask<Void, Void>](/documentation/swiftui/backgroundtask/intentdidrun)
- [static var relevantShortcut: BackgroundTask<Void, Void>](/documentation/swiftui/backgroundtask/relevantshortcut)
- [SnapshotData](/documentation/swiftui/snapshotdata)

#### Getting the data

- [let identifier: String?](/documentation/swiftui/snapshotdata/identifier)
- [let reason: SnapshotData.SnapshotReason](/documentation/swiftui/snapshotdata/reason)
- [SnapshotData.SnapshotReason](/documentation/swiftui/snapshotdata/snapshotreason)

##### Getting the snapshot reasons

- [case appBackgrounded](/documentation/swiftui/snapshotdata/snapshotreason/appbackgrounded)
- [case appScheduled](/documentation/swiftui/snapshotdata/snapshotreason/appscheduled)
- [case complicationUpdate](/documentation/swiftui/snapshotdata/snapshotreason/complicationupdate)
- [case prelaunch](/documentation/swiftui/snapshotdata/snapshotreason/prelaunch)
- [case returnToDefaultState](/documentation/swiftui/snapshotdata/snapshotreason/returntodefaultstate)
- [SnapshotResponse](/documentation/swiftui/snapshotresponse)

#### Creating a response

- [init(restoredDefaultState: Bool, estimatedSnapshotExpiration: Date?, identifier: String?)](/documentation/swiftui/snapshotresponse/init(restoreddefaultstate:estimatedsnapshotexpiration:identifier:))

### Importing and exporting transferable items

- [func importableFromServices<T>(for: T.Type, action: ([T]) -> Bool) -> some View](/documentation/swiftui/view/importablefromservices(for:action:))
- [func exportableToServices<T>(@autoclosure () -> [T]) -> some View](/documentation/swiftui/view/exportabletoservices(_:))
- [func exportableToServices<T>(@autoclosure () -> [T], onEdit: ([T]) -> Bool) -> some View](/documentation/swiftui/view/exportabletoservices(_:onedit:))

### Importing and exporting using item providers

- [func importsItemProviders([UTType], onImport: ([NSItemProvider]) -> Bool) -> some View](/documentation/swiftui/view/importsitemproviders(_:onimport:))
- [func exportsItemProviders([UTType], onExport: () -> [NSItemProvider]) -> some View](/documentation/swiftui/view/exportsitemproviders(_:onexport:))
- [func exportsItemProviders([UTType], onExport: () -> [NSItemProvider], onEdit: ([NSItemProvider]) -> Bool) -> some View](/documentation/swiftui/view/exportsitemproviders(_:onexport:onedit:))

## Accessibility

- [Accessibility fundamentals](/documentation/swiftui/accessibility-fundamentals)

### Essentials

- [Creating accessible views](/documentation/swiftui/creating-accessible-views)

### Creating accessible elements

- [func accessibilityElement(children: AccessibilityChildBehavior) -> some View](/documentation/swiftui/view/accessibilityelement(children:))
- [func accessibilityChildren<V>(children: () -> V) -> some View](/documentation/swiftui/view/accessibilitychildren(children:))
- [func accessibilityRepresentation<V>(representation: () -> V) -> some View](/documentation/swiftui/view/accessibilityrepresentation(representation:))
- [AccessibilityChildBehavior](/documentation/swiftui/accessibilitychildbehavior)

#### Getting behaviors

- [static let combine: AccessibilityChildBehavior](/documentation/swiftui/accessibilitychildbehavior/combine)
- [static let contain: AccessibilityChildBehavior](/documentation/swiftui/accessibilitychildbehavior/contain)
- [static let ignore: AccessibilityChildBehavior](/documentation/swiftui/accessibilitychildbehavior/ignore)

### Identifying elements

- [func accessibilityIdentifier(String) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityidentifier(_:))
- [func accessibilityIdentifier(String, isEnabled: Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityidentifier(_:isenabled:))

### Hiding elements

- [func accessibilityHidden(Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityhidden(_:))
- [func accessibilityHidden(Bool, isEnabled: Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityhidden(_:isenabled:))

### Supporting types

- [AccessibilityTechnologies](/documentation/swiftui/accessibilitytechnologies)

#### Getting technology types

- [static let switchControl: AccessibilityTechnologies](/documentation/swiftui/accessibilitytechnologies/switchcontrol)
- [static let voiceOver: AccessibilityTechnologies](/documentation/swiftui/accessibilitytechnologies/voiceover)

#### Creating a technology type

- [init()](/documentation/swiftui/accessibilitytechnologies/init())
- [AccessibilityAttachmentModifier](/documentation/swiftui/accessibilityattachmentmodifier)
- [Accessible appearance](/documentation/swiftui/accessible-appearance)

### Managing color

- [func accessibilityIgnoresInvertColors(Bool) -> some View](/documentation/swiftui/view/accessibilityignoresinvertcolors(_:))
- [var accessibilityInvertColors: Bool](/documentation/swiftui/environmentvalues/accessibilityinvertcolors)
- [var accessibilityDifferentiateWithoutColor: Bool](/documentation/swiftui/environmentvalues/accessibilitydifferentiatewithoutcolor)

### Enlarging content

- [func accessibilityShowsLargeContentViewer() -> some View](/documentation/swiftui/view/accessibilityshowslargecontentviewer())
- [func accessibilityShowsLargeContentViewer<V>(() -> V) -> some View](/documentation/swiftui/view/accessibilityshowslargecontentviewer(_:))
- [var accessibilityLargeContentViewerEnabled: Bool](/documentation/swiftui/environmentvalues/accessibilitylargecontentviewerenabled)

### Improving legibility

- [var accessibilityShowButtonShapes: Bool](/documentation/swiftui/environmentvalues/accessibilityshowbuttonshapes)
- [var accessibilityReduceTransparency: Bool](/documentation/swiftui/environmentvalues/accessibilityreducetransparency)
- [var legibilityWeight: LegibilityWeight?](/documentation/swiftui/environmentvalues/legibilityweight)
- [LegibilityWeight](/documentation/swiftui/legibilityweight)

#### Getting weights

- [case regular](/documentation/swiftui/legibilityweight/regular)
- [case bold](/documentation/swiftui/legibilityweight/bold)

#### Creating a weight

- [init?(UILegibilityWeight)](/documentation/swiftui/legibilityweight/init(_:))

### Minimizing motion

- [var accessibilityDimFlashingLights: Bool](/documentation/swiftui/environmentvalues/accessibilitydimflashinglights)
- [var accessibilityPlayAnimatedImages: Bool](/documentation/swiftui/environmentvalues/accessibilityplayanimatedimages)
- [var accessibilityReduceMotion: Bool](/documentation/swiftui/environmentvalues/accessibilityreducemotion)

### Using assistive access

- [var accessibilityAssistiveAccessEnabled: Bool](/documentation/swiftui/environmentvalues/accessibilityassistiveaccessenabled)
- [AssistiveAccess](/documentation/swiftui/assistiveaccess)

#### Initializers

- [init(content: () -> Content)](/documentation/swiftui/assistiveaccess/init(content:))
- [Accessible controls](/documentation/swiftui/accessible-controls)

### Adding actions to views

- [func accessibilityAction(AccessibilityActionKind, () -> Void) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityaction(_:_:))
- [func accessibilityActions<Content>(() -> Content) -> some View](/documentation/swiftui/view/accessibilityactions(_:))
- [func accessibilityAction(named:_:)](/documentation/swiftui/view/accessibilityaction(named:_:))
- [func accessibilityAction<Label>(action: () -> Void, label: () -> Label) -> some View](/documentation/swiftui/view/accessibilityaction(action:label:))
- [func accessibilityAction<I, Label>(intent: I, label: () -> Label) -> some View](/documentation/swiftui/view/accessibilityaction(intent:label:))
- [func accessibilityAction<I>(AccessibilityActionKind, intent: I) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityaction(_:intent:))
- [func accessibilityAction(named:intent:)](/documentation/swiftui/view/accessibilityaction(named:intent:))
- [func accessibilityAdjustableAction((AccessibilityAdjustmentDirection) -> Void) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityadjustableaction(_:))
- [func accessibilityScrollAction((Edge) -> Void) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityscrollaction(_:))
- [func accessibilityActions<Content>(category: AccessibilityActionCategory, () -> Content) -> some View](/documentation/swiftui/view/accessibilityactions(category:_:))
- [AccessibilityActionKind](/documentation/swiftui/accessibilityactionkind)

#### Getting the kind of action

- [static let `default`: AccessibilityActionKind](/documentation/swiftui/accessibilityactionkind/default)
- [static let delete: AccessibilityActionKind](/documentation/swiftui/accessibilityactionkind/delete)
- [static let escape: AccessibilityActionKind](/documentation/swiftui/accessibilityactionkind/escape)
- [static let magicTap: AccessibilityActionKind](/documentation/swiftui/accessibilityactionkind/magictap)
- [static let showMenu: AccessibilityActionKind](/documentation/swiftui/accessibilityactionkind/showmenu)

#### Creating an action type

- [init(named: Text)](/documentation/swiftui/accessibilityactionkind/init(named:))
- [AccessibilityAdjustmentDirection](/documentation/swiftui/accessibilityadjustmentdirection)

#### Getting an adjustment direction

- [case decrement](/documentation/swiftui/accessibilityadjustmentdirection/decrement)
- [case increment](/documentation/swiftui/accessibilityadjustmentdirection/increment)
- [AccessibilityActionCategory](/documentation/swiftui/accessibilityactioncategory)

#### Initializers

- [init(_:)](/documentation/swiftui/accessibilityactioncategory/init(_:))

#### Type Properties

- [static let `default`: AccessibilityActionCategory](/documentation/swiftui/accessibilityactioncategory/default)
- [static let edit: AccessibilityActionCategory](/documentation/swiftui/accessibilityactioncategory/edit)

### Offering Quick Actions to people

- [func accessibilityQuickAction<Style, Content>(style: Style, content: () -> Content) -> some View](/documentation/swiftui/view/accessibilityquickaction(style:content:))
- [func accessibilityQuickAction<Style, Content>(style: Style, isActive: Binding<Bool>, content: () -> Content) -> some View](/documentation/swiftui/view/accessibilityquickaction(style:isactive:content:))
- [AccessibilityQuickActionStyle](/documentation/swiftui/accessibilityquickactionstyle)

#### Getting built-in menu styles

- [static var outline: AccessibilityQuickActionOutlineStyle](/documentation/swiftui/accessibilityquickactionstyle/outline)
- [static var prompt: AccessibilityQuickActionPromptStyle](/documentation/swiftui/accessibilityquickactionstyle/prompt)

#### Supporting types

- [AccessibilityQuickActionOutlineStyle](/documentation/swiftui/accessibilityquickactionoutlinestyle)
- [AccessibilityQuickActionPromptStyle](/documentation/swiftui/accessibilityquickactionpromptstyle)

### Making gestures accessible

- [func accessibilityActivationPoint(_:)](/documentation/swiftui/view/accessibilityactivationpoint(_:))
- [func accessibilityActivationPoint(_:isEnabled:)](/documentation/swiftui/view/accessibilityactivationpoint(_:isenabled:))
- [func accessibilityDragPoint(_:description:)](/documentation/swiftui/view/accessibilitydragpoint(_:description:))
- [func accessibilityDragPoint(_:description:isEnabled:)](/documentation/swiftui/view/accessibilitydragpoint(_:description:isenabled:))
- [func accessibilityDropPoint(_:description:)](/documentation/swiftui/view/accessibilitydroppoint(_:description:))
- [func accessibilityDropPoint(_:description:isEnabled:)](/documentation/swiftui/view/accessibilitydroppoint(_:description:isenabled:))
- [func accessibilityDirectTouch(Bool, options: AccessibilityDirectTouchOptions) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilitydirecttouch(_:options:))
- [func accessibilityZoomAction((AccessibilityZoomGestureAction) -> Void) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityzoomaction(_:))
- [AccessibilityDirectTouchOptions](/documentation/swiftui/accessibilitydirecttouchoptions)

#### Getting the options

- [static let requiresActivation: AccessibilityDirectTouchOptions](/documentation/swiftui/accessibilitydirecttouchoptions/requiresactivation)
- [static let silentOnTouch: AccessibilityDirectTouchOptions](/documentation/swiftui/accessibilitydirecttouchoptions/silentontouch)

#### Creating a set of options

- [init(rawValue: AccessibilityDirectTouchOptions.RawValue)](/documentation/swiftui/accessibilitydirecttouchoptions/init(rawvalue:))
- [AccessibilityZoomGestureAction](/documentation/swiftui/accessibilityzoomgestureaction)

#### Getting the action’s direction

- [let direction: AccessibilityZoomGestureAction.Direction](/documentation/swiftui/accessibilityzoomgestureaction/direction-swift.property)
- [AccessibilityZoomGestureAction.Direction](/documentation/swiftui/accessibilityzoomgestureaction/direction-swift.enum)

##### Getting the direction

- [case zoomIn](/documentation/swiftui/accessibilityzoomgestureaction/direction-swift.enum/zoomin)
- [case zoomOut](/documentation/swiftui/accessibilityzoomgestureaction/direction-swift.enum/zoomout)

#### Getting location information

- [let location: UnitPoint](/documentation/swiftui/accessibilityzoomgestureaction/location)
- [let point: CGPoint](/documentation/swiftui/accessibilityzoomgestureaction/point)

### Controlling focus

- [func accessibilityFocused(AccessibilityFocusState<Bool>.Binding) -> some View](/documentation/swiftui/view/accessibilityfocused(_:))
- [func accessibilityFocused<Value>(AccessibilityFocusState<Value>.Binding, equals: Value) -> some View](/documentation/swiftui/view/accessibilityfocused(_:equals:))
- [AccessibilityFocusState](/documentation/swiftui/accessibilityfocusstate)

#### Creating a focus state

- [init()](/documentation/swiftui/accessibilityfocusstate/init())
- [init(for:)](/documentation/swiftui/accessibilityfocusstate/init(for:))

#### Getting the state

- [var projectedValue: AccessibilityFocusState<Value>.Binding](/documentation/swiftui/accessibilityfocusstate/projectedvalue)
- [var wrappedValue: Value](/documentation/swiftui/accessibilityfocusstate/wrappedvalue)
- [AccessibilityFocusState.Binding](/documentation/swiftui/accessibilityfocusstate/binding)

##### Getting the state

- [var projectedValue: AccessibilityFocusState<Value>.Binding](/documentation/swiftui/accessibilityfocusstate/binding/projectedvalue)
- [var wrappedValue: Value](/documentation/swiftui/accessibilityfocusstate/binding/wrappedvalue)

### Managing interactivity

- [func accessibilityRespondsToUserInteraction(Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityrespondstouserinteraction(_:))
- [func accessibilityRespondsToUserInteraction(Bool, isEnabled: Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityrespondstouserinteraction(_:isenabled:))
- [Accessible descriptions](/documentation/swiftui/accessible-descriptions)

### Applying labels

- [func accessibilityLabel(_:)](/documentation/swiftui/view/accessibilitylabel(_:))
- [func accessibilityLabel(_:isEnabled:)](/documentation/swiftui/view/accessibilitylabel(_:isenabled:))
- [func accessibilityLabel<V>(content: (PlaceholderContentView<Self>) -> V) -> some View](/documentation/swiftui/view/accessibilitylabel(content:))
- [func accessibilityInputLabels(_:)](/documentation/swiftui/view/accessibilityinputlabels(_:))
- [func accessibilityInputLabels(_:isEnabled:)](/documentation/swiftui/view/accessibilityinputlabels(_:isenabled:))
- [func accessibilityLabeledPair<ID>(role: AccessibilityLabeledPairRole, id: ID, in: Namespace.ID) -> some View](/documentation/swiftui/view/accessibilitylabeledpair(role:id:in:))
- [AccessibilityLabeledPairRole](/documentation/swiftui/accessibilitylabeledpairrole)

#### Getting roles

- [case content](/documentation/swiftui/accessibilitylabeledpairrole/content)
- [case label](/documentation/swiftui/accessibilitylabeledpairrole/label)

### Describing values

- [func accessibilityValue(_:)](/documentation/swiftui/view/accessibilityvalue(_:))
- [func accessibilityValue(_:isEnabled:)](/documentation/swiftui/view/accessibilityvalue(_:isenabled:))

### Describing content

- [func accessibilityTextContentType(AccessibilityTextContentType) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilitytextcontenttype(_:))
- [func accessibilityHeading(AccessibilityHeadingLevel) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityheading(_:))
- [AccessibilityHeadingLevel](/documentation/swiftui/accessibilityheadinglevel)

#### Getting the heading level

- [case h1](/documentation/swiftui/accessibilityheadinglevel/h1)
- [case h2](/documentation/swiftui/accessibilityheadinglevel/h2)
- [case h3](/documentation/swiftui/accessibilityheadinglevel/h3)
- [case h4](/documentation/swiftui/accessibilityheadinglevel/h4)
- [case h5](/documentation/swiftui/accessibilityheadinglevel/h5)
- [case h6](/documentation/swiftui/accessibilityheadinglevel/h6)
- [case unspecified](/documentation/swiftui/accessibilityheadinglevel/unspecified)
- [AccessibilityTextContentType](/documentation/swiftui/accessibilitytextcontenttype)

#### Getting content types

- [static let console: AccessibilityTextContentType](/documentation/swiftui/accessibilitytextcontenttype/console)
- [static let fileSystem: AccessibilityTextContentType](/documentation/swiftui/accessibilitytextcontenttype/filesystem)
- [static let messaging: AccessibilityTextContentType](/documentation/swiftui/accessibilitytextcontenttype/messaging)
- [static let narrative: AccessibilityTextContentType](/documentation/swiftui/accessibilitytextcontenttype/narrative)
- [static let plain: AccessibilityTextContentType](/documentation/swiftui/accessibilitytextcontenttype/plain)
- [static let sourceCode: AccessibilityTextContentType](/documentation/swiftui/accessibilitytextcontenttype/sourcecode)
- [static let spreadsheet: AccessibilityTextContentType](/documentation/swiftui/accessibilitytextcontenttype/spreadsheet)
- [static let wordProcessing: AccessibilityTextContentType](/documentation/swiftui/accessibilitytextcontenttype/wordprocessing)

### Describing charts

- [func accessibilityChartDescriptor<R>(R) -> some View](/documentation/swiftui/view/accessibilitychartdescriptor(_:))
- [AXChartDescriptorRepresentable](/documentation/swiftui/axchartdescriptorrepresentable)

#### Managing a descriptor

- [func makeChartDescriptor() -> AXChartDescriptor](/documentation/swiftui/axchartdescriptorrepresentable/makechartdescriptor())
- [func updateChartDescriptor(AXChartDescriptor)](/documentation/swiftui/axchartdescriptorrepresentable/updatechartdescriptor(_:))

### Adding custom descriptions

- [func accessibilityCustomContent(_:_:importance:)](/documentation/swiftui/view/accessibilitycustomcontent(_:_:importance:))
- [AccessibilityCustomContentKey](/documentation/swiftui/accessibilitycustomcontentkey)

#### Creating a key

- [init(_:)](/documentation/swiftui/accessibilitycustomcontentkey/init(_:))
- [init(_:id:)](/documentation/swiftui/accessibilitycustomcontentkey/init(_:id:))

### Assigning traits to content

- [func accessibilityAddTraits(AccessibilityTraits) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityaddtraits(_:))
- [func accessibilityRemoveTraits(AccessibilityTraits) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilityremovetraits(_:))
- [AccessibilityTraits](/documentation/swiftui/accessibilitytraits)

#### Getting traits

- [static let allowsDirectInteraction: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/allowsdirectinteraction)
- [static let causesPageTurn: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/causespageturn)
- [static let isButton: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/isbutton)
- [static let isHeader: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/isheader)
- [static let isImage: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/isimage)
- [static let isKeyboardKey: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/iskeyboardkey)
- [static let isLink: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/islink)
- [static let isModal: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/ismodal)
- [static let isSearchField: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/issearchfield)
- [static let isSelected: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/isselected)
- [static let isStaticText: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/isstatictext)
- [static let isSummaryElement: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/issummaryelement)
- [static let isToggle: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/istoggle)
- [static let playsSound: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/playssound)
- [static let startsMediaSession: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/startsmediasession)
- [static let updatesFrequently: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/updatesfrequently)

#### Type Properties

- [static let isTabBar: AccessibilityTraits](/documentation/swiftui/accessibilitytraits/istabbar)

### Offering hints

- [func accessibilityHint(_:)](/documentation/swiftui/view/accessibilityhint(_:))
- [func accessibilityHint(_:isEnabled:)](/documentation/swiftui/view/accessibilityhint(_:isenabled:))

### Configuring VoiceOver

- [func speechAdjustedPitch(Double) -> some View](/documentation/swiftui/view/speechadjustedpitch(_:))
- [func speechAlwaysIncludesPunctuation(Bool) -> some View](/documentation/swiftui/view/speechalwaysincludespunctuation(_:))
- [func speechAnnouncementsQueued(Bool) -> some View](/documentation/swiftui/view/speechannouncementsqueued(_:))
- [func speechSpellsOutCharacters(Bool) -> some View](/documentation/swiftui/view/speechspellsoutcharacters(_:))
- [Accessible navigation](/documentation/swiftui/accessible-navigation)

### Working with rotors

- [func accessibilityRotor(_:entries:)](/documentation/swiftui/view/accessibilityrotor(_:entries:))
- [func accessibilityRotor(_:entries:entryID:entryLabel:)](/documentation/swiftui/view/accessibilityrotor(_:entries:entryid:entrylabel:))
- [func accessibilityRotor(_:entries:entryLabel:)](/documentation/swiftui/view/accessibilityrotor(_:entries:entrylabel:))
- [func accessibilityRotor(_:textRanges:)](/documentation/swiftui/view/accessibilityrotor(_:textranges:))

### Creating rotors

- [AccessibilityRotorContent](/documentation/swiftui/accessibilityrotorcontent)

#### Supporting types

- [var body: Self.Body](/documentation/swiftui/accessibilityrotorcontent/body-swift.property)
- [Body](/documentation/swiftui/accessibilityrotorcontent/body-swift.associatedtype)
- [AccessibilityRotorContentBuilder](/documentation/swiftui/accessibilityrotorcontentbuilder)

#### Building navigation content

- [static buildBlock(_:)](/documentation/swiftui/accessibilityrotorcontentbuilder/buildblock(_:))
- [static func buildIf<Content>(Content?) -> some AccessibilityRotorContent](/documentation/swiftui/accessibilityrotorcontentbuilder/buildif(_:))
- [static func buildExpression<Content>(Content) -> Content](/documentation/swiftui/accessibilityrotorcontentbuilder/buildexpression(_:))
- [AccessibilityRotorEntry](/documentation/swiftui/accessibilityrotorentry)

#### Creating a rotor entry

- [init(_:textRange:prepare:)](/documentation/swiftui/accessibilityrotorentry/init(_:textrange:prepare:))
- [init(_:id:textRange:prepare:)](/documentation/swiftui/accessibilityrotorentry/init(_:id:textrange:prepare:))

#### Creating an identified rotor entry in a namespace

- [init(_:id:in:textRange:prepare:)](/documentation/swiftui/accessibilityrotorentry/init(_:id:in:textrange:prepare:))
- [init<L>(L, ID, in: Namespace.ID, textRange: Range<String.Index>?, prepare: () -> Void)](/documentation/swiftui/accessibilityrotorentry/init(_:_:in:textrange:prepare:))

### Replacing system rotors

- [AccessibilitySystemRotor](/documentation/swiftui/accessibilitysystemrotor)

#### Iterating through text

- [static var textFields: AccessibilitySystemRotor](/documentation/swiftui/accessibilitysystemrotor/textfields)
- [static var boldText: AccessibilitySystemRotor](/documentation/swiftui/accessibilitysystemrotor/boldtext)
- [static var italicText: AccessibilitySystemRotor](/documentation/swiftui/accessibilitysystemrotor/italictext)
- [static var underlineText: AccessibilitySystemRotor](/documentation/swiftui/accessibilitysystemrotor/underlinetext)
- [static var misspelledWords: AccessibilitySystemRotor](/documentation/swiftui/accessibilitysystemrotor/misspelledwords)

#### Iterating through headings

- [static var headings: AccessibilitySystemRotor](/documentation/swiftui/accessibilitysystemrotor/headings)
- [static func headings(level: AccessibilityHeadingLevel) -> AccessibilitySystemRotor](/documentation/swiftui/accessibilitysystemrotor/headings(level:))

#### Iterating through links

- [static var links: AccessibilitySystemRotor](/documentation/swiftui/accessibilitysystemrotor/links)
- [static func links(visited: Bool) -> AccessibilitySystemRotor](/documentation/swiftui/accessibilitysystemrotor/links(visited:))

#### Iterating through other elements

- [static var images: AccessibilitySystemRotor](/documentation/swiftui/accessibilitysystemrotor/images)
- [static var landmarks: AccessibilitySystemRotor](/documentation/swiftui/accessibilitysystemrotor/landmarks)
- [static var lists: AccessibilitySystemRotor](/documentation/swiftui/accessibilitysystemrotor/lists)
- [static var tables: AccessibilitySystemRotor](/documentation/swiftui/accessibilitysystemrotor/tables)

### Configuring rotors

- [func accessibilityRotorEntry<ID>(id: ID, in: Namespace.ID) -> some View](/documentation/swiftui/view/accessibilityrotorentry(id:in:))
- [func accessibilityLinkedGroup<ID>(id: ID, in: Namespace.ID) -> some View](/documentation/swiftui/view/accessibilitylinkedgroup(id:in:))
- [func accessibilitySortPriority(Double) -> ModifiedContent<Self, AccessibilityAttachmentModifier>](/documentation/swiftui/view/accessibilitysortpriority(_:))

## Framework integration

- [AppKit integration](/documentation/swiftui/appkit-integration)

### Displaying SwiftUI views in AppKit

- [Unifying your app’s animations](/documentation/swiftui/unifying-your-app-s-animations)
- [NSHostingController](/documentation/swiftui/nshostingcontroller)

#### Creating a hosting controller object

- [init(rootView: Content)](/documentation/swiftui/nshostingcontroller/init(rootview:))
- [init?(coder: NSCoder, rootView: Content)](/documentation/swiftui/nshostingcontroller/init(coder:rootview:))
- [init?(coder: NSCoder)](/documentation/swiftui/nshostingcontroller/init(coder:))

#### Getting the root view

- [var rootView: Content](/documentation/swiftui/nshostingcontroller/rootview)
- [var identifier: NSUserInterfaceItemIdentifier?](/documentation/swiftui/nshostingcontroller/identifier)

#### Configuring the controller

- [func sizeThatFits(in: CGSize) -> CGSize](/documentation/swiftui/nshostingcontroller/sizethatfits(in:))
- [var preferredContentSize: NSSize](/documentation/swiftui/nshostingcontroller/preferredcontentsize)
- [var sizingOptions: NSHostingSizingOptions](/documentation/swiftui/nshostingcontroller/sizingoptions)
- [var safeAreaRegions: SafeAreaRegions](/documentation/swiftui/nshostingcontroller/safearearegions)
- [var sceneBridgingOptions: NSHostingSceneBridgingOptions](/documentation/swiftui/nshostingcontroller/scenebridgingoptions)
- [NSHostingView](/documentation/swiftui/nshostingview)

#### Creating a hosting view

- [init(rootView: Content)](/documentation/swiftui/nshostingview/init(rootview:))
- [init?(coder: NSCoder)](/documentation/swiftui/nshostingview/init(coder:))
- [func prepareForReuse()](/documentation/swiftui/nshostingview/prepareforreuse())

#### Getting the root view

- [var rootView: Content](/documentation/swiftui/nshostingview/rootview)

#### Configuring the view layout behavior

- [class var requiresConstraintBasedLayout: Bool](/documentation/swiftui/nshostingview/requiresconstraintbasedlayout)
- [var userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection](/documentation/swiftui/nshostingview/userinterfacelayoutdirection)
- [var isFlipped: Bool](/documentation/swiftui/nshostingview/isflipped)
- [var layerContentsRedrawPolicy: NSView.LayerContentsRedrawPolicy](/documentation/swiftui/nshostingview/layercontentsredrawpolicy)
- [func updateConstraints()](/documentation/swiftui/nshostingview/updateconstraints())
- [func layout()](/documentation/swiftui/nshostingview/layout())
- [var safeAreaRegions: SafeAreaRegions](/documentation/swiftui/nshostingview/safearearegions)

#### Managing keyboard interaction

- [func keyDown(with: NSEvent)](/documentation/swiftui/nshostingview/keydown(with:))
- [func keyUp(with: NSEvent)](/documentation/swiftui/nshostingview/keyup(with:))
- [func performKeyEquivalent(with: NSEvent) -> Bool](/documentation/swiftui/nshostingview/performkeyequivalent(with:))
- [func insertText(Any)](/documentation/swiftui/nshostingview/inserttext(_:))
- [func didChangeValue(forKey: String)](/documentation/swiftui/nshostingview/didchangevalue(forkey:))
- [func makeTouchBar() -> NSTouchBar?](/documentation/swiftui/nshostingview/maketouchbar())

#### Responding to mouse events

- [func mouseDown(with: NSEvent)](/documentation/swiftui/nshostingview/mousedown(with:))
- [func mouseUp(with: NSEvent)](/documentation/swiftui/nshostingview/mouseup(with:))
- [func otherMouseDown(with: NSEvent)](/documentation/swiftui/nshostingview/othermousedown(with:))
- [func otherMouseUp(with: NSEvent)](/documentation/swiftui/nshostingview/othermouseup(with:))
- [func rightMouseDown(with: NSEvent)](/documentation/swiftui/nshostingview/rightmousedown(with:))
- [func rightMouseUp(with: NSEvent)](/documentation/swiftui/nshostingview/rightmouseup(with:))
- [func mouseEntered(with: NSEvent)](/documentation/swiftui/nshostingview/mouseentered(with:))
- [func mouseExited(with: NSEvent)](/documentation/swiftui/nshostingview/mouseexited(with:))
- [func mouseDragged(with: NSEvent)](/documentation/swiftui/nshostingview/mousedragged(with:))
- [func mouseMoved(with: NSEvent)](/documentation/swiftui/nshostingview/mousemoved(with:))
- [func otherMouseDragged(with: NSEvent)](/documentation/swiftui/nshostingview/othermousedragged(with:))
- [func rightMouseDragged(with: NSEvent)](/documentation/swiftui/nshostingview/rightmousedragged(with:))
- [func cursorUpdate(with: NSEvent)](/documentation/swiftui/nshostingview/cursorupdate(with:))

#### Responding to touch events

- [func touchesBegan(with: NSEvent)](/documentation/swiftui/nshostingview/touchesbegan(with:))
- [func touchesCancelled(with: NSEvent)](/documentation/swiftui/nshostingview/touchescancelled(with:))
- [func touchesEnded(with: NSEvent)](/documentation/swiftui/nshostingview/touchesended(with:))
- [func touchesMoved(with: NSEvent)](/documentation/swiftui/nshostingview/touchesmoved(with:))

#### Responding to gestures

- [func magnify(with: NSEvent)](/documentation/swiftui/nshostingview/magnify(with:))
- [func rotate(with: NSEvent)](/documentation/swiftui/nshostingview/rotate(with:))
- [func scrollWheel(with: NSEvent)](/documentation/swiftui/nshostingview/scrollwheel(with:))

#### Handling drag and drop

- [func validRequestor(forSendType: NSPasteboard.PasteboardType?, returnType: NSPasteboard.PasteboardType?) -> Any?](/documentation/swiftui/nshostingview/validrequestor(forsendtype:returntype:))

#### Providing a context menu

- [func menu(for: NSEvent) -> NSMenu?](/documentation/swiftui/nshostingview/menu(for:))

#### Responding to actions

- [func responds(to: Selector!) -> Bool](/documentation/swiftui/nshostingview/responds(to:))
- [func forwardingTarget(for: Selector!) -> Any?](/documentation/swiftui/nshostingview/forwardingtarget(for:))
- [func doCommand(by: Selector)](/documentation/swiftui/nshostingview/docommand(by:))

#### Configuring the responder behavior

- [var acceptsFirstResponder: Bool](/documentation/swiftui/nshostingview/acceptsfirstresponder)
- [var needsPanelToBecomeKey: Bool](/documentation/swiftui/nshostingview/needspaneltobecomekey)

#### Managing the view hierarchy

- [func viewWillMove(toWindow: NSWindow?)](/documentation/swiftui/nshostingview/viewwillmove(towindow:))
- [func viewDidMoveToWindow()](/documentation/swiftui/nshostingview/viewdidmovetowindow())
- [func viewDidChangeBackingProperties()](/documentation/swiftui/nshostingview/viewdidchangebackingproperties())
- [func viewDidChangeEffectiveAppearance()](/documentation/swiftui/nshostingview/viewdidchangeeffectiveappearance())

#### Modifying the frame rectangle

- [var intrinsicContentSize: NSSize](/documentation/swiftui/nshostingview/intrinsiccontentsize)
- [func setFrameSize(NSSize)](/documentation/swiftui/nshostingview/setframesize(_:))
- [var firstBaselineOffsetFromTop: CGFloat](/documentation/swiftui/nshostingview/firstbaselineoffsetfromtop)
- [var lastBaselineOffsetFromBottom: CGFloat](/documentation/swiftui/nshostingview/lastbaselineoffsetfrombottom)
- [var sizingOptions: NSHostingSizingOptions](/documentation/swiftui/nshostingview/sizingoptions)
- [var firstTextLineCenter: CGFloat?](/documentation/swiftui/nshostingview/firsttextlinecenter)

#### Testing for hits

- [func hitTest(NSPoint) -> NSView?](/documentation/swiftui/nshostingview/hittest(_:))

#### Managing accessibility behaviors

- [var accessibilityFocusedUIElement: Any?](/documentation/swiftui/nshostingview/accessibilityfocuseduielement)
- [func accessibilityChildren() -> [Any]?](/documentation/swiftui/nshostingview/accessibilitychildren())
- [func accessibilityChildrenInNavigationOrder() -> [any NSAccessibilityElementProtocol]?](/documentation/swiftui/nshostingview/accessibilitychildreninnavigationorder())
- [func accessibilityHitTest(NSPoint) -> Any?](/documentation/swiftui/nshostingview/accessibilityhittest(_:))
- [func accessibilityRole() -> NSAccessibility.Role?](/documentation/swiftui/nshostingview/accessibilityrole())
- [func accessibilitySubrole() -> NSAccessibility.Subrole?](/documentation/swiftui/nshostingview/accessibilitysubrole())
- [func isAccessibilityElement() -> Bool](/documentation/swiftui/nshostingview/isaccessibilityelement())

#### Bridging with SwiftUI

- [var sceneBridgingOptions: NSHostingSceneBridgingOptions](/documentation/swiftui/nshostingview/scenebridgingoptions)

#### Initializers

- [init?(coder: NSCoder, rootView: Content)](/documentation/swiftui/nshostingview/init(coder:rootview:))

#### Instance Properties

- [var clipsToBounds: Bool](/documentation/swiftui/nshostingview/clipstobounds)

#### Instance Methods

- [func acceptsFirstMouse(for: NSEvent?) -> Bool](/documentation/swiftui/nshostingview/acceptsfirstmouse(for:))
- [func beginDocument()](/documentation/swiftui/nshostingview/begindocument())
- [func didAddSubview(NSView)](/documentation/swiftui/nshostingview/didaddsubview(_:))
- [func endDocument()](/documentation/swiftui/nshostingview/enddocument())
- [func observeValue(forKeyPath: String?, of: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?)](/documentation/swiftui/nshostingview/observevalue(forkeypath:of:change:context:))
- [func shouldDelayWindowOrdering(for: NSEvent) -> Bool](/documentation/swiftui/nshostingview/shoulddelaywindowordering(for:))
- [func showContextMenuForSelection(Any?)](/documentation/swiftui/nshostingview/showcontextmenuforselection(_:))
- [func viewDidEndLiveResize()](/documentation/swiftui/nshostingview/viewdidendliveresize())
- [func viewWillStartLiveResize()](/documentation/swiftui/nshostingview/viewwillstartliveresize())
- [func willRemoveSubview(NSView)](/documentation/swiftui/nshostingview/willremovesubview(_:))
- [NSHostingMenu](/documentation/swiftui/nshostingmenu)

#### Initializers

- [init(rootView: Content)](/documentation/swiftui/nshostingmenu/init(rootview:))

#### Instance Properties

- [var rootView: Content](/documentation/swiftui/nshostingmenu/rootview)
- [NSHostingSizingOptions](/documentation/swiftui/nshostingsizingoptions)

#### Geting sizing options

- [static let intrinsicContentSize: NSHostingSizingOptions](/documentation/swiftui/nshostingsizingoptions/intrinsiccontentsize)
- [static let maxSize: NSHostingSizingOptions](/documentation/swiftui/nshostingsizingoptions/maxsize)
- [static let minSize: NSHostingSizingOptions](/documentation/swiftui/nshostingsizingoptions/minsize)
- [static let preferredContentSize: NSHostingSizingOptions](/documentation/swiftui/nshostingsizingoptions/preferredcontentsize)
- [static let standardBounds: NSHostingSizingOptions](/documentation/swiftui/nshostingsizingoptions/standardbounds)

#### Creating a sizing option

- [init(rawValue: Int)](/documentation/swiftui/nshostingsizingoptions/init(rawvalue:))
- [let rawValue: Int](/documentation/swiftui/nshostingsizingoptions/rawvalue)
- [NSHostingSceneRepresentation](/documentation/swiftui/nshostingscenerepresentation)

#### Initializers

- [init(rootScene: () -> Content)](/documentation/swiftui/nshostingscenerepresentation/init(rootscene:))

#### Instance Properties

- [var environment: EnvironmentValues](/documentation/swiftui/nshostingscenerepresentation/environment)
- [NSHostingSceneBridgingOptions](/documentation/swiftui/nshostingscenebridgingoptions)

#### Geting bridging options

- [static let all: NSHostingSceneBridgingOptions](/documentation/swiftui/nshostingscenebridgingoptions/all)
- [static let title: NSHostingSceneBridgingOptions](/documentation/swiftui/nshostingscenebridgingoptions/title)
- [static let toolbars: NSHostingSceneBridgingOptions](/documentation/swiftui/nshostingscenebridgingoptions/toolbars)

#### Creating a bridging options

- [init(rawValue: Int)](/documentation/swiftui/nshostingscenebridgingoptions/init(rawvalue:))
- [let rawValue: Int](/documentation/swiftui/nshostingscenebridgingoptions/rawvalue)

### Adding AppKit views to SwiftUI view hierarchies

- [NSViewRepresentable](/documentation/swiftui/nsviewrepresentable)

#### Creating and updating the view

- [func makeNSView(context: Self.Context) -> Self.NSViewType](/documentation/swiftui/nsviewrepresentable/makensview(context:))
- [func updateNSView(Self.NSViewType, context: Self.Context)](/documentation/swiftui/nsviewrepresentable/updatensview(_:context:))
- [NSViewRepresentable.Context](/documentation/swiftui/nsviewrepresentable/context)
- [NSViewType](/documentation/swiftui/nsviewrepresentable/nsviewtype)

#### Specifying a size

- [func sizeThatFits(ProposedViewSize, nsView: Self.NSViewType, context: Self.Context) -> CGSize?](/documentation/swiftui/nsviewrepresentable/sizethatfits(_:nsview:context:))

#### Cleaning up the view

- [static func dismantleNSView(Self.NSViewType, coordinator: Self.Coordinator)](/documentation/swiftui/nsviewrepresentable/dismantlensview(_:coordinator:))

#### Providing a custom coordinator object

- [func makeCoordinator() -> Self.Coordinator](/documentation/swiftui/nsviewrepresentable/makecoordinator())
- [Coordinator](/documentation/swiftui/nsviewrepresentable/coordinator)

#### Performing layout

- [NSViewRepresentable.LayoutOptions](/documentation/swiftui/nsviewrepresentable/layoutoptions)
- [NSViewRepresentableContext](/documentation/swiftui/nsviewrepresentablecontext)

#### Coordinating view-related interactions

- [let coordinator: View.Coordinator](/documentation/swiftui/nsviewrepresentablecontext/coordinator)
- [var transaction: Transaction](/documentation/swiftui/nsviewrepresentablecontext/transaction)

#### Getting the current environment data

- [var environment: EnvironmentValues](/documentation/swiftui/nsviewrepresentablecontext/environment)

#### Instance Methods

- [func animate(changes: () -> Void, completion: (() -> Void)?)](/documentation/swiftui/nsviewrepresentablecontext/animate(changes:completion:))
- [NSViewControllerRepresentable](/documentation/swiftui/nsviewcontrollerrepresentable)

#### Creating and updating the view controller

- [func makeNSViewController(context: Self.Context) -> Self.NSViewControllerType](/documentation/swiftui/nsviewcontrollerrepresentable/makensviewcontroller(context:))
- [func updateNSViewController(Self.NSViewControllerType, context: Self.Context)](/documentation/swiftui/nsviewcontrollerrepresentable/updatensviewcontroller(_:context:))
- [NSViewControllerRepresentable.Context](/documentation/swiftui/nsviewcontrollerrepresentable/context)
- [NSViewControllerType](/documentation/swiftui/nsviewcontrollerrepresentable/nsviewcontrollertype)

#### Specifying a size

- [func sizeThatFits(ProposedViewSize, nsViewController: Self.NSViewControllerType, context: Self.Context) -> CGSize?](/documentation/swiftui/nsviewcontrollerrepresentable/sizethatfits(_:nsviewcontroller:context:))

#### Cleaning up the view controller

- [static func dismantleNSViewController(Self.NSViewControllerType, coordinator: Self.Coordinator)](/documentation/swiftui/nsviewcontrollerrepresentable/dismantlensviewcontroller(_:coordinator:))

#### Providing a custom coordinator object

- [func makeCoordinator() -> Self.Coordinator](/documentation/swiftui/nsviewcontrollerrepresentable/makecoordinator())
- [Coordinator](/documentation/swiftui/nsviewcontrollerrepresentable/coordinator)

#### Performing layout

- [NSViewControllerRepresentable.LayoutOptions](/documentation/swiftui/nsviewcontrollerrepresentable/layoutoptions)
- [NSViewControllerRepresentableContext](/documentation/swiftui/nsviewcontrollerrepresentablecontext)

#### Coordinating view-related interactions

- [let coordinator: ViewController.Coordinator](/documentation/swiftui/nsviewcontrollerrepresentablecontext/coordinator)
- [var transaction: Transaction](/documentation/swiftui/nsviewcontrollerrepresentablecontext/transaction)

#### Getting the current environment data

- [var environment: EnvironmentValues](/documentation/swiftui/nsviewcontrollerrepresentablecontext/environment)

#### Instance Methods

- [func animate(changes: () -> Void, completion: (() -> Void)?)](/documentation/swiftui/nsviewcontrollerrepresentablecontext/animate(changes:completion:))

### Adding AppKit gesture recognizers into SwiftUI view hierarchies

- [NSGestureRecognizerRepresentable](/documentation/swiftui/nsgesturerecognizerrepresentable)

#### Associated Types

- [Coordinator](/documentation/swiftui/nsgesturerecognizerrepresentable/coordinator)
- [NSGestureRecognizerType](/documentation/swiftui/nsgesturerecognizerrepresentable/nsgesturerecognizertype)

#### Instance Methods

- [func handleNSGestureRecognizerAction(Self.NSGestureRecognizerType, context: Self.Context)](/documentation/swiftui/nsgesturerecognizerrepresentable/handlensgesturerecognizeraction(_:context:))
- [func makeCoordinator(converter: Self.CoordinateSpaceConverter) -> Self.Coordinator](/documentation/swiftui/nsgesturerecognizerrepresentable/makecoordinator(converter:))
- [func makeNSGestureRecognizer(context: Self.Context) -> Self.NSGestureRecognizerType](/documentation/swiftui/nsgesturerecognizerrepresentable/makensgesturerecognizer(context:))
- [func updateNSGestureRecognizer(Self.NSGestureRecognizerType, context: Self.Context)](/documentation/swiftui/nsgesturerecognizerrepresentable/updatensgesturerecognizer(_:context:))

#### Type Aliases

- [NSGestureRecognizerRepresentable.Context](/documentation/swiftui/nsgesturerecognizerrepresentable/context)
- [NSGestureRecognizerRepresentable.CoordinateSpaceConverter](/documentation/swiftui/nsgesturerecognizerrepresentable/coordinatespaceconverter)
- [NSGestureRecognizerRepresentableContext](/documentation/swiftui/nsgesturerecognizerrepresentablecontext)

#### Instance Properties

- [let converter: NSGestureRecognizerRepresentableCoordinateSpaceConverter](/documentation/swiftui/nsgesturerecognizerrepresentablecontext/converter)
- [let coordinator: Representable.Coordinator](/documentation/swiftui/nsgesturerecognizerrepresentablecontext/coordinator)
- [NSGestureRecognizerRepresentableCoordinateSpaceConverter](/documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter)

#### Instance Properties

- [var localLocation: CGPoint](/documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/locallocation)
- [var localTranslation: CGPoint?](/documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/localtranslation)
- [var localVelocity: CGPoint?](/documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/localvelocity)

#### Instance Methods

- [func convert(globalPoint: CGPoint, to: some CoordinateSpaceProtocol) -> CGPoint](/documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/convert(globalpoint:to:))
- [func location(in: some CoordinateSpaceProtocol) -> CGPoint](/documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/location(in:))
- [func translation(in: some CoordinateSpaceProtocol) -> CGPoint?](/documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/translation(in:))
- [func velocity(in: some CoordinateSpaceProtocol) -> CGPoint?](/documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/velocity(in:))
- [UIKit integration](/documentation/swiftui/uikit-integration)

### Displaying SwiftUI views in UIKit

- [Using SwiftUI with UIKit](/documentation/uikit/using-swiftui-with-uikit)
- [Unifying your app’s animations](/documentation/swiftui/unifying-your-app-s-animations)
- [UIHostingController](/documentation/swiftui/uihostingcontroller)

#### Creating a hosting controller object

- [init(rootView: Content)](/documentation/swiftui/uihostingcontroller/init(rootview:))
- [init?(coder: NSCoder, rootView: Content)](/documentation/swiftui/uihostingcontroller/init(coder:rootview:))
- [init?(coder: NSCoder)](/documentation/swiftui/uihostingcontroller/init(coder:))

#### Responding to view-related events

- [func loadView()](/documentation/swiftui/uihostingcontroller/loadview())
- [func viewWillAppear(Bool)](/documentation/swiftui/uihostingcontroller/viewwillappear(_:))
- [func viewDidAppear(Bool)](/documentation/swiftui/uihostingcontroller/viewdidappear(_:))
- [func viewWillDisappear(Bool)](/documentation/swiftui/uihostingcontroller/viewwilldisappear(_:))
- [func viewDidDisappear(Bool)](/documentation/swiftui/uihostingcontroller/viewdiddisappear(_:))
- [func willMove(toParent: UIViewController?)](/documentation/swiftui/uihostingcontroller/willmove(toparent:))
- [func didMove(toParent: UIViewController?)](/documentation/swiftui/uihostingcontroller/didmove(toparent:))
- [func viewWillTransition(to: CGSize, with: any UIViewControllerTransitionCoordinator)](/documentation/swiftui/uihostingcontroller/viewwilltransition(to:with:))
- [func viewWillLayoutSubviews()](/documentation/swiftui/uihostingcontroller/viewwilllayoutsubviews())
- [func target(forAction: Selector, withSender: Any?) -> Any?](/documentation/swiftui/uihostingcontroller/target(foraction:withsender:))
- [var rootView: Content](/documentation/swiftui/uihostingcontroller/rootview)

#### Checking for modality

- [var isModalInPresentation: Bool](/documentation/swiftui/uihostingcontroller/ismodalinpresentation)

#### Managing the size

- [var sizingOptions: UIHostingControllerSizingOptions](/documentation/swiftui/uihostingcontroller/sizingoptions)
- [func preferredContentSizeDidChange(forChildContentContainer: any UIContentContainer)](/documentation/swiftui/uihostingcontroller/preferredcontentsizedidchange(forchildcontentcontainer:))
- [func sizeThatFits(in: CGSize) -> CGSize](/documentation/swiftui/uihostingcontroller/sizethatfits(in:))
- [var safeAreaRegions: SafeAreaRegions](/documentation/swiftui/uihostingcontroller/safearearegions)

#### Configuring the status bar

- [var preferredStatusBarStyle: UIStatusBarStyle](/documentation/swiftui/uihostingcontroller/preferredstatusbarstyle)
- [var preferredStatusBarUpdateAnimation: UIStatusBarAnimation](/documentation/swiftui/uihostingcontroller/preferredstatusbarupdateanimation)
- [var prefersStatusBarHidden: Bool](/documentation/swiftui/uihostingcontroller/prefersstatusbarhidden)
- [var childForStatusBarStyle: UIViewController?](/documentation/swiftui/uihostingcontroller/childforstatusbarstyle)
- [var childForStatusBarHidden: UIViewController?](/documentation/swiftui/uihostingcontroller/childforstatusbarhidden)

#### Configuring the home indicator

- [var prefersHomeIndicatorAutoHidden: Bool](/documentation/swiftui/uihostingcontroller/prefershomeindicatorautohidden)
- [var childForHomeIndicatorAutoHidden: UIViewController?](/documentation/swiftui/uihostingcontroller/childforhomeindicatorautohidden)

#### Configuring the interface appearance

- [var preferredUserInterfaceStyle: UIUserInterfaceStyle](/documentation/swiftui/uihostingcontroller/preferreduserinterfacestyle)
- [var preferredScreenEdgesDeferringSystemGestures: UIRectEdge](/documentation/swiftui/uihostingcontroller/preferredscreenedgesdeferringsystemgestures)
- [var childForScreenEdgesDeferringSystemGestures: UIViewController?](/documentation/swiftui/uihostingcontroller/childforscreenedgesdeferringsystemgestures)

#### Accessing the available key commands

- [var keyCommands: [UIKeyCommand]?](/documentation/swiftui/uihostingcontroller/keycommands)

#### Managing undo

- [var undoManager: UndoManager?](/documentation/swiftui/uihostingcontroller/undomanager)

#### Instance Properties

- [var childViewControllerForPreferredContainerBackgroundStyle: UIViewController?](/documentation/swiftui/uihostingcontroller/childviewcontrollerforpreferredcontainerbackgroundstyle)
- [var preferredContainerBackgroundStyle: UIContainerBackgroundStyle](/documentation/swiftui/uihostingcontroller/preferredcontainerbackgroundstyle)

#### Instance Methods

- [func addChild(UIViewController)](/documentation/swiftui/uihostingcontroller/addchild(_:))
- [UIHostingControllerSizingOptions](/documentation/swiftui/uihostingcontrollersizingoptions)

#### Getting sizing options

- [static let intrinsicContentSize: UIHostingControllerSizingOptions](/documentation/swiftui/uihostingcontrollersizingoptions/intrinsiccontentsize)
- [static let preferredContentSize: UIHostingControllerSizingOptions](/documentation/swiftui/uihostingcontrollersizingoptions/preferredcontentsize)

#### Creating a sizing option

- [init(rawValue: Int)](/documentation/swiftui/uihostingcontrollersizingoptions/init(rawvalue:))
- [let rawValue: Int](/documentation/swiftui/uihostingcontrollersizingoptions/rawvalue)
- [UIHostingConfiguration](/documentation/swiftui/uihostingconfiguration)

#### Creating and updating a configuration

- [init(content: () -> Content)](/documentation/swiftui/uihostingconfiguration/init(content:))

#### Setting the background

- [func background<S>(S) -> UIHostingConfiguration<Content, _UIHostingConfigurationBackgroundView<S>>](/documentation/swiftui/uihostingconfiguration/background(_:))
- [func background<B>(content: () -> B) -> UIHostingConfiguration<Content, B>](/documentation/swiftui/uihostingconfiguration/background(content:))

#### Setting margins

- [func margins(_:_:)](/documentation/swiftui/uihostingconfiguration/margins(_:_:))

#### Setting a size

- [func minSize(width: CGFloat?, height: CGFloat?) -> UIHostingConfiguration<Content, Background>](/documentation/swiftui/uihostingconfiguration/minsize(width:height:))
- [func minSize() -> UIHostingConfiguration<Content, Background>](/documentation/swiftui/uihostingconfiguration/minsize())
- [UIHostingSceneDelegate](/documentation/swiftui/uihostingscenedelegate)

#### Associated Types

- [RootScene](/documentation/swiftui/uihostingscenedelegate/rootscene-swift.associatedtype)

#### Type Properties

- [static var rootScene: Self.RootScene](/documentation/swiftui/uihostingscenedelegate/rootscene-swift.type.property)

### Adding UIKit views to SwiftUI view hierarchies

- [UIViewRepresentable](/documentation/swiftui/uiviewrepresentable)

#### Creating and updating the view

- [func makeUIView(context: Self.Context) -> Self.UIViewType](/documentation/swiftui/uiviewrepresentable/makeuiview(context:))
- [func updateUIView(Self.UIViewType, context: Self.Context)](/documentation/swiftui/uiviewrepresentable/updateuiview(_:context:))
- [UIViewRepresentable.Context](/documentation/swiftui/uiviewrepresentable/context)
- [UIViewType](/documentation/swiftui/uiviewrepresentable/uiviewtype)

#### Specifying a size

- [func sizeThatFits(ProposedViewSize, uiView: Self.UIViewType, context: Self.Context) -> CGSize?](/documentation/swiftui/uiviewrepresentable/sizethatfits(_:uiview:context:))

#### Cleaning up the view

- [static func dismantleUIView(Self.UIViewType, coordinator: Self.Coordinator)](/documentation/swiftui/uiviewrepresentable/dismantleuiview(_:coordinator:))

#### Providing a custom coordinator object

- [func makeCoordinator() -> Self.Coordinator](/documentation/swiftui/uiviewrepresentable/makecoordinator())
- [Coordinator](/documentation/swiftui/uiviewrepresentable/coordinator)

#### Performing layout

- [UIViewRepresentable.LayoutOptions](/documentation/swiftui/uiviewrepresentable/layoutoptions)
- [UIViewRepresentableContext](/documentation/swiftui/uiviewrepresentablecontext)

#### Coordinating view-related interactions

- [let coordinator: Representable.Coordinator](/documentation/swiftui/uiviewrepresentablecontext/coordinator)
- [var transaction: Transaction](/documentation/swiftui/uiviewrepresentablecontext/transaction)

#### Getting the current environment data

- [var environment: EnvironmentValues](/documentation/swiftui/uiviewrepresentablecontext/environment)

#### Instance Methods

- [func animate(changes: () -> Void, completion: (() -> Void)?)](/documentation/swiftui/uiviewrepresentablecontext/animate(changes:completion:))
- [UIViewControllerRepresentable](/documentation/swiftui/uiviewcontrollerrepresentable)

#### Creating and updating the view controller

- [func makeUIViewController(context: Self.Context) -> Self.UIViewControllerType](/documentation/swiftui/uiviewcontrollerrepresentable/makeuiviewcontroller(context:))
- [func updateUIViewController(Self.UIViewControllerType, context: Self.Context)](/documentation/swiftui/uiviewcontrollerrepresentable/updateuiviewcontroller(_:context:))
- [UIViewControllerRepresentable.Context](/documentation/swiftui/uiviewcontrollerrepresentable/context)
- [UIViewControllerType](/documentation/swiftui/uiviewcontrollerrepresentable/uiviewcontrollertype)

#### Specifying a size

- [func sizeThatFits(ProposedViewSize, uiViewController: Self.UIViewControllerType, context: Self.Context) -> CGSize?](/documentation/swiftui/uiviewcontrollerrepresentable/sizethatfits(_:uiviewcontroller:context:))

#### Cleaning up the view controller

- [static func dismantleUIViewController(Self.UIViewControllerType, coordinator: Self.Coordinator)](/documentation/swiftui/uiviewcontrollerrepresentable/dismantleuiviewcontroller(_:coordinator:))

#### Providing a custom coordinator object

- [func makeCoordinator() -> Self.Coordinator](/documentation/swiftui/uiviewcontrollerrepresentable/makecoordinator())
- [Coordinator](/documentation/swiftui/uiviewcontrollerrepresentable/coordinator)

#### Performing layout

- [UIViewControllerRepresentable.LayoutOptions](/documentation/swiftui/uiviewcontrollerrepresentable/layoutoptions)
- [UIViewControllerRepresentableContext](/documentation/swiftui/uiviewcontrollerrepresentablecontext)

#### Coordinating view controller interactions

- [let coordinator: Representable.Coordinator](/documentation/swiftui/uiviewcontrollerrepresentablecontext/coordinator)
- [var transaction: Transaction](/documentation/swiftui/uiviewcontrollerrepresentablecontext/transaction)

#### Getting the environment data

- [var environment: EnvironmentValues](/documentation/swiftui/uiviewcontrollerrepresentablecontext/environment)

#### Instance Methods

- [func animate(changes: () -> Void, completion: (() -> Void)?)](/documentation/swiftui/uiviewcontrollerrepresentablecontext/animate(changes:completion:))

### Adding UIKit gesture recognizers into SwiftUI view hierarchies

- [UIGestureRecognizerRepresentable](/documentation/swiftui/uigesturerecognizerrepresentable)

#### Associated Types

- [Coordinator](/documentation/swiftui/uigesturerecognizerrepresentable/coordinator)
- [UIGestureRecognizerType](/documentation/swiftui/uigesturerecognizerrepresentable/uigesturerecognizertype)

#### Instance Methods

- [func handleUIGestureRecognizerAction(Self.UIGestureRecognizerType, context: Self.Context)](/documentation/swiftui/uigesturerecognizerrepresentable/handleuigesturerecognizeraction(_:context:))
- [func makeCoordinator(converter: Self.CoordinateSpaceConverter) -> Self.Coordinator](/documentation/swiftui/uigesturerecognizerrepresentable/makecoordinator(converter:))
- [func makeUIGestureRecognizer(context: Self.Context) -> Self.UIGestureRecognizerType](/documentation/swiftui/uigesturerecognizerrepresentable/makeuigesturerecognizer(context:))
- [func updateUIGestureRecognizer(Self.UIGestureRecognizerType, context: Self.Context)](/documentation/swiftui/uigesturerecognizerrepresentable/updateuigesturerecognizer(_:context:))

#### Type Aliases

- [UIGestureRecognizerRepresentable.Context](/documentation/swiftui/uigesturerecognizerrepresentable/context)
- [UIGestureRecognizerRepresentable.CoordinateSpaceConverter](/documentation/swiftui/uigesturerecognizerrepresentable/coordinatespaceconverter)
- [UIGestureRecognizerRepresentableContext](/documentation/swiftui/uigesturerecognizerrepresentablecontext)

#### Instance Properties

- [let converter: UIGestureRecognizerRepresentableCoordinateSpaceConverter](/documentation/swiftui/uigesturerecognizerrepresentablecontext/converter)
- [let coordinator: Representable.Coordinator](/documentation/swiftui/uigesturerecognizerrepresentablecontext/coordinator)
- [UIGestureRecognizerRepresentableCoordinateSpaceConverter](/documentation/swiftui/uigesturerecognizerrepresentablecoordinatespaceconverter)

#### Instance Properties

- [var localLocation: CGPoint](/documentation/swiftui/uigesturerecognizerrepresentablecoordinatespaceconverter/locallocation)
- [var localTranslation: CGPoint?](/documentation/swiftui/uigesturerecognizerrepresentablecoordinatespaceconverter/localtranslation)
- [var localVelocity: CGPoint?](/documentation/swiftui/uigesturerecognizerrepresentablecoordinatespaceconverter/localvelocity)

#### Instance Methods

- [func convert(globalPoint: CGPoint, to: some CoordinateSpaceProtocol) -> CGPoint](/documentation/swiftui/uigesturerecognizerrepresentablecoordinatespaceconverter/convert(globalpoint:to:))
- [func location(in: some CoordinateSpaceProtocol) -> CGPoint](/documentation/swiftui/uigesturerecognizerrepresentablecoordinatespaceconverter/location(in:))
- [func translation(in: some CoordinateSpaceProtocol) -> CGPoint?](/documentation/swiftui/uigesturerecognizerrepresentablecoordinatespaceconverter/translation(in:))
- [func velocity(in: some CoordinateSpaceProtocol) -> CGPoint?](/documentation/swiftui/uigesturerecognizerrepresentablecoordinatespaceconverter/velocity(in:))

### Sharing configuration information

- [UITraitBridgedEnvironmentKey](/documentation/swiftui/uitraitbridgedenvironmentkey)

### Hosting an ornament in UIKit

- [UIHostingOrnament](/documentation/swiftui/uihostingornament)

#### Creating a hosting ornament

- [init(sceneAnchor:contentAlignment:content:)](/documentation/swiftui/uihostingornament/init(sceneanchor:contentalignment:content:))
- [var rootView: Content](/documentation/swiftui/uihostingornament/rootview)

#### Setting the alignment

- [var contentAlignment: Alignment](/documentation/swiftui/uihostingornament/contentalignment)
- [var sceneAnchor: UnitPoint](/documentation/swiftui/uihostingornament/sceneanchor)

#### Instance Properties

- [var contentAlignment3D: Alignment3D](/documentation/swiftui/uihostingornament/contentalignment3d)
- [UIOrnament](/documentation/swiftui/uiornament)
- [WatchKit integration](/documentation/swiftui/watchkit-integration)

### Displaying SwiftUI views in WatchKit

- [WKHostingController](/documentation/swiftui/wkhostingcontroller)

#### Creating a hosting controller object

- [init()](/documentation/swiftui/wkhostingcontroller/init())

#### Getting the root view

- [var body: Body](/documentation/swiftui/wkhostingcontroller/body)

#### Updating the root view

- [func updateBodyIfNeeded()](/documentation/swiftui/wkhostingcontroller/updatebodyifneeded())
- [func setNeedsBodyUpdate()](/documentation/swiftui/wkhostingcontroller/setneedsbodyupdate())
- [WKUserNotificationHostingController](/documentation/swiftui/wkusernotificationhostingcontroller)

#### Creating a hosting controller object

- [init()](/documentation/swiftui/wkusernotificationhostingcontroller/init())

#### Getting the root view

- [var body: Body](/documentation/swiftui/wkusernotificationhostingcontroller/body)

#### Configuring the notification

- [class var coalescedDescriptionFormat: String?](/documentation/swiftui/wkusernotificationhostingcontroller/coalesceddescriptionformat)
- [class var isInteractive: Bool](/documentation/swiftui/wkusernotificationhostingcontroller/isinteractive)
- [class var sashColor: Color?](/documentation/swiftui/wkusernotificationhostingcontroller/sashcolor)
- [class var subtitleColor: Color?](/documentation/swiftui/wkusernotificationhostingcontroller/subtitlecolor)
- [class var titleColor: Color?](/documentation/swiftui/wkusernotificationhostingcontroller/titlecolor)
- [class var wantsSashBlur: Bool](/documentation/swiftui/wkusernotificationhostingcontroller/wantssashblur)

### Adding WatchKit views to SwiftUI view hierarchies

- [WKInterfaceObjectRepresentable](/documentation/swiftui/wkinterfaceobjectrepresentable)

#### Creating and updating the interface object

- [func makeWKInterfaceObject(context: Self.Context) -> Self.WKInterfaceObjectType](/documentation/swiftui/wkinterfaceobjectrepresentable/makewkinterfaceobject(context:))
- [func updateWKInterfaceObject(Self.WKInterfaceObjectType, context: Self.Context)](/documentation/swiftui/wkinterfaceobjectrepresentable/updatewkinterfaceobject(_:context:))
- [WKInterfaceObjectRepresentable.Context](/documentation/swiftui/wkinterfaceobjectrepresentable/context)

#### Cleaning up the interface object

- [static func dismantleWKInterfaceObject(Self.WKInterfaceObjectType, coordinator: Self.Coordinator)](/documentation/swiftui/wkinterfaceobjectrepresentable/dismantlewkinterfaceobject(_:coordinator:))

#### Providing a custom coordinator object

- [func makeCoordinator() -> Self.Coordinator](/documentation/swiftui/wkinterfaceobjectrepresentable/makecoordinator())
- [Coordinator](/documentation/swiftui/wkinterfaceobjectrepresentable/coordinator)
- [WKInterfaceObjectType](/documentation/swiftui/wkinterfaceobjectrepresentable/wkinterfaceobjecttype)
- [WKInterfaceObjectRepresentableContext](/documentation/swiftui/wkinterfaceobjectrepresentablecontext)

#### Coordinating interactions

- [let coordinator: Representable.Coordinator](/documentation/swiftui/wkinterfaceobjectrepresentablecontext/coordinator)
- [var transaction: Transaction](/documentation/swiftui/wkinterfaceobjectrepresentablecontext/transaction)

#### Getting the current environment data

- [var environment: EnvironmentValues](/documentation/swiftui/wkinterfaceobjectrepresentablecontext/environment)
- [Technology-specific views](/documentation/swiftui/technology-specific-views)

### Displaying web content

- [WebView](/documentation/webkit/webview-swift.struct)
- [WebPage](/documentation/webkit/webpage)
- [func webViewBackForwardNavigationGestures(WebView.BackForwardNavigationGesturesBehavior) -> some View](/documentation/swiftui/view/webviewbackforwardnavigationgestures(_:))
- [func webViewContentBackground(Visibility) -> some View](/documentation/swiftui/view/webviewcontentbackground(_:))
- [func webViewContextMenu(menu: (WebView.ActivatedElementInfo) -> some View) -> some View](/documentation/swiftui/view/webviewcontextmenu(menu:))
- [func webViewElementFullscreenBehavior(WebView.ElementFullscreenBehavior) -> some View](/documentation/swiftui/view/webviewelementfullscreenbehavior(_:))
- [func webViewLinkPreviews(WebView.LinkPreviewBehavior) -> some View](/documentation/swiftui/view/webviewlinkpreviews(_:))
- [func webViewMagnificationGestures(WebView.MagnificationGesturesBehavior) -> some View](/documentation/swiftui/view/webviewmagnificationgestures(_:))
- [func webViewOnScrollGeometryChange<T>(for: T.Type, of: (ScrollGeometry) -> T, action: (T, T) -> Void) -> some View](/documentation/swiftui/view/webviewonscrollgeometrychange(for:of:action:))
- [func webViewScrollInputBehavior(ScrollInputBehavior, for: ScrollInputKind) -> some View](/documentation/swiftui/view/webviewscrollinputbehavior(_:for:))
- [func webViewScrollPosition(Binding<ScrollPosition>) -> some View](/documentation/swiftui/view/webviewscrollposition(_:))
- [func webViewTextSelection<S>(S) -> some View](/documentation/swiftui/view/webviewtextselection(_:))

### Accessing Apple Pay and Wallet

- [PayWithApplePayButton](/documentation/passkit/paywithapplepaybutton)
- [AddPassToWalletButton](/documentation/passkit/addpasstowalletbutton)
- [VerifyIdentityWithWalletButton](/documentation/passkit/verifyidentitywithwalletbutton)
- [func addOrderToWalletButtonStyle(AddOrderToWalletButtonStyle) -> some View](/documentation/swiftui/view/addordertowalletbuttonstyle(_:))
- [func addPassToWalletButtonStyle(AddPassToWalletButtonStyle) -> some View](/documentation/swiftui/view/addpasstowalletbuttonstyle(_:))
- [func onApplePayCouponCodeChange(perform: (String) async -> PKPaymentRequestCouponCodeUpdate) -> some View](/documentation/swiftui/view/onapplepaycouponcodechange(perform:))
- [func onApplePayPaymentMethodChange(perform: (PKPaymentMethod) async -> PKPaymentRequestPaymentMethodUpdate) -> some View](/documentation/swiftui/view/onapplepaypaymentmethodchange(perform:))
- [func onApplePayShippingContactChange(perform: (PKContact) async -> PKPaymentRequestShippingContactUpdate) -> some View](/documentation/swiftui/view/onapplepayshippingcontactchange(perform:))
- [func onApplePayShippingMethodChange(perform: (PKShippingMethod) async -> PKPaymentRequestShippingMethodUpdate) -> some View](/documentation/swiftui/view/onapplepayshippingmethodchange(perform:))
- [func payLaterViewAction(PayLaterViewAction) -> some View](/documentation/swiftui/view/paylaterviewaction(_:))
- [func payLaterViewDisplayStyle(PayLaterViewDisplayStyle) -> some View](/documentation/swiftui/view/paylaterviewdisplaystyle(_:))
- [func payWithApplePayButtonStyle(PayWithApplePayButtonStyle) -> some View](/documentation/swiftui/view/paywithapplepaybuttonstyle(_:))
- [func verifyIdentityWithWalletButtonStyle(VerifyIdentityWithWalletButtonStyle) -> some View](/documentation/swiftui/view/verifyidentitywithwalletbuttonstyle(_:))
- [AsyncShareablePassConfiguration](/documentation/passkit/asyncshareablepassconfiguration)
- [func transactionTask(CredentialTransaction.Configuration?, action: (CredentialTransaction) async -> Void) -> some View](/documentation/swiftui/view/transactiontask(_:action:))

### Authorizing and authenticating

- [LocalAuthenticationView](/documentation/localauthentication/localauthenticationview)
- [SignInWithAppleButton](/documentation/authenticationservices/signinwithapplebutton)
- [func signInWithAppleButtonStyle(SignInWithAppleButton.Style) -> some View](/documentation/swiftui/view/signinwithapplebuttonstyle(_:))
- [var authorizationController: AuthorizationController](/documentation/swiftui/environmentvalues/authorizationcontroller)
- [var webAuthenticationSession: WebAuthenticationSession](/documentation/swiftui/environmentvalues/webauthenticationsession)

### Configuring Family Sharing

- [FamilyActivityPicker](/documentation/familycontrols/familyactivitypicker)
- [func familyActivityPicker(isPresented: Binding<Bool>, selection: Binding<FamilyActivitySelection>) -> some View](/documentation/swiftui/view/familyactivitypicker(ispresented:selection:))
- [func familyActivityPicker(headerText: String?, footerText: String?, isPresented: Binding<Bool>, selection: Binding<FamilyActivitySelection>) -> some View](/documentation/swiftui/view/familyactivitypicker(headertext:footertext:ispresented:selection:))

### Reporting on device activity

- [DeviceActivityReport](/documentation/deviceactivity/deviceactivityreport)

### Working with managed devices

- [func managedContentStyle(ManagedContentStyle) -> some View](/documentation/swiftui/view/managedcontentstyle(_:))
- [func automatedDeviceEnrollmentAddition(isPresented: Binding<Bool>) -> some View](/documentation/swiftui/view/automateddeviceenrollmentaddition(ispresented:))

### Creating graphics

- [Chart](/documentation/charts/chart)
- [SceneView](/documentation/scenekit/sceneview)
- [SpriteView](/documentation/spritekit/spriteview)

### Getting location information

- [LocationButton](/documentation/corelocationui/locationbutton)
- [Map](/documentation/mapkit/map)
- [func mapStyle(MapStyle) -> some View](/documentation/swiftui/view/mapstyle(_:))
- [func mapScope(Namespace.ID) -> some View](/documentation/swiftui/view/mapscope(_:))
- [func mapFeatureSelectionDisabled((MapFeature) -> Bool) -> some View](/documentation/swiftui/view/mapfeatureselectiondisabled(_:))
- [func mapFeatureSelectionAccessory(MapItemDetailSelectionAccessoryStyle?) -> some View](/documentation/swiftui/view/mapfeatureselectionaccessory(_:))
- [func mapFeatureSelectionContent(content: (MapFeature) -> some MapContent) -> some View](/documentation/swiftui/view/mapfeatureselectioncontent(content:))
- [func mapControls(() -> some View) -> some View](/documentation/swiftui/view/mapcontrols(_:))
- [func mapControlVisibility(Visibility) -> some View](/documentation/swiftui/view/mapcontrolvisibility(_:))
- [func mapCameraKeyframeAnimator(trigger: some Equatable, keyframes: (MapCamera) -> some Keyframes<MapCamera>) -> some View](/documentation/swiftui/view/mapcamerakeyframeanimator(trigger:keyframes:))
- [func lookAroundViewer(isPresented: Binding<Bool>, scene: Binding<MKLookAroundScene?>, allowsNavigation: Bool, showsRoadLabels: Bool, pointsOfInterest: PointOfInterestCategories, onDismiss: (() -> Void)?) -> some View](/documentation/swiftui/view/lookaroundviewer(ispresented:scene:allowsnavigation:showsroadlabels:pointsofinterest:ondismiss:))
- [func lookAroundViewer(isPresented: Binding<Bool>, initialScene: MKLookAroundScene?, allowsNavigation: Bool, showsRoadLabels: Bool, pointsOfInterest: PointOfInterestCategories, onDismiss: (() -> Void)?) -> some View](/documentation/swiftui/view/lookaroundviewer(ispresented:initialscene:allowsnavigation:showsroadlabels:pointsofinterest:ondismiss:))
- [func onMapCameraChange(frequency:_:)](/documentation/swiftui/view/onmapcamerachange(frequency:_:))
- [func mapItemDetailPopover(isPresented: Binding<Bool>, item: MKMapItem?, displaysMap: Bool, attachmentAnchor: PopoverAttachmentAnchor) -> some View](/documentation/swiftui/view/mapitemdetailpopover(ispresented:item:displaysmap:attachmentanchor:))
- [func mapItemDetailPopover(isPresented: Binding<Bool>, item: MKMapItem?, displaysMap: Bool, attachmentAnchor: PopoverAttachmentAnchor, arrowEdge: Edge) -> some View](/documentation/swiftui/view/mapitemdetailpopover(ispresented:item:displaysmap:attachmentanchor:arrowedge:))
- [func mapItemDetailPopover(item: Binding<MKMapItem?>, displaysMap: Bool, attachmentAnchor: PopoverAttachmentAnchor) -> some View](/documentation/swiftui/view/mapitemdetailpopover(item:displaysmap:attachmentanchor:))
- [func mapItemDetailPopover(item: Binding<MKMapItem?>, displaysMap: Bool, attachmentAnchor: PopoverAttachmentAnchor, arrowEdge: Edge) -> some View](/documentation/swiftui/view/mapitemdetailpopover(item:displaysmap:attachmentanchor:arrowedge:))
- [func mapItemDetailSheet(isPresented: Binding<Bool>, item: MKMapItem?, displaysMap: Bool) -> some View](/documentation/swiftui/view/mapitemdetailsheet(ispresented:item:displaysmap:))
- [func mapItemDetailSheet(item: Binding<MKMapItem?>, displaysMap: Bool) -> some View](/documentation/swiftui/view/mapitemdetailsheet(item:displaysmap:))

### Displaying media

- [CameraView](/documentation/homekit/cameraview)
- [NowPlayingView](/documentation/watchkit/nowplayingview)
- [VideoPlayer](/documentation/avkit/videoplayer)
- [func continuityDevicePicker(isPresented: Binding<Bool>, onDidConnect: ((AVContinuityDevice?) -> Void)?) -> some View](/documentation/swiftui/view/continuitydevicepicker(ispresented:ondidconnect:))
- [func cameraAnchor(isActive: Bool) -> some View](/documentation/swiftui/view/cameraanchor(isactive:))

### Selecting photos

- [PhotosPicker](/documentation/photosui/photospicker)
- [func photosPicker(isPresented: Binding<Bool>, selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy) -> some View](/documentation/swiftui/view/photospicker(ispresented:selection:matching:preferreditemencoding:))
- [func photosPicker(isPresented: Binding<Bool>, selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary) -> some View](/documentation/swiftui/view/photospicker(ispresented:selection:matching:preferreditemencoding:photolibrary:))
- [func photosPicker(isPresented: Binding<Bool>, selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy) -> some View](/documentation/swiftui/view/photospicker(ispresented:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:))
- [func photosPicker(isPresented: Binding<Bool>, selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary) -> some View](/documentation/swiftui/view/photospicker(ispresented:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:photolibrary:))
- [func photosPickerAccessoryVisibility(Visibility, edges: Edge.Set) -> some View](/documentation/swiftui/view/photospickeraccessoryvisibility(_:edges:))
- [func photosPickerDisabledCapabilities(PHPickerCapabilities) -> some View](/documentation/swiftui/view/photospickerdisabledcapabilities(_:))
- [func photosPickerStyle(PhotosPickerStyle) -> some View](/documentation/swiftui/view/photospickerstyle(_:))

### Previewing content

- [func quickLookPreview(Binding<URL?>) -> some View](/documentation/swiftui/view/quicklookpreview(_:))
- [func quickLookPreview<Items>(Binding<Items.Element?>, in: Items) -> some View](/documentation/swiftui/view/quicklookpreview(_:in:))

### Interacting with networked devices

- [DevicePicker](/documentation/devicediscoveryui/devicepicker)
- [var devicePickerSupports: DevicePickerSupportedAction](/documentation/swiftui/environmentvalues/devicepickersupports)

### Configuring a Live Activity

- [func activitySystemActionForegroundColor(Color?) -> some View](/documentation/swiftui/view/activitysystemactionforegroundcolor(_:))
- [func activityBackgroundTint(Color?) -> some View](/documentation/swiftui/view/activitybackgroundtint(_:))
- [var isActivityFullscreen: Bool](/documentation/swiftui/environmentvalues/isactivityfullscreen)
- [var activityFamily: ActivityFamily](/documentation/swiftui/environmentvalues/activityfamily)

### Interacting with the App Store and Apple Music

- [func appStoreOverlay(isPresented: Binding<Bool>, configuration: () -> SKOverlay.Configuration) -> some View](/documentation/swiftui/view/appstoreoverlay(ispresented:configuration:))
- [func manageSubscriptionsSheet(isPresented: Binding<Bool>) -> some View](/documentation/swiftui/view/managesubscriptionssheet(ispresented:))
- [func refundRequestSheet(for: Transaction.ID, isPresented: Binding<Bool>, onDismiss: ((Result<Transaction.RefundRequestStatus, Transaction.RefundRequestError>) -> ())?) -> some View](/documentation/swiftui/view/refundrequestsheet(for:ispresented:ondismiss:))
- [func offerCodeRedemption(isPresented: Binding<Bool>, onCompletion: (Result<Void, any Error>) -> Void) -> some View](/documentation/swiftui/view/offercoderedemption(ispresented:oncompletion:))
- [func musicSubscriptionOffer(isPresented: Binding<Bool>, options: MusicSubscriptionOffer.Options, onLoadCompletion: ((any Error)?) -> Void) -> some View](/documentation/swiftui/view/musicsubscriptionoffer(ispresented:options:onloadcompletion:))
- [func currentEntitlementTask(for: String, priority: TaskPriority, action: (EntitlementTaskState<VerificationResult<Transaction>?>) async -> ()) -> some View](/documentation/swiftui/view/currententitlementtask(for:priority:action:))
- [func inAppPurchaseOptions(((Product) async -> Set<Product.PurchaseOption>)?) -> some View](/documentation/swiftui/view/inapppurchaseoptions(_:))
- [func manageSubscriptionsSheet(isPresented: Binding<Bool>, subscriptionGroupID: String) -> some View](/documentation/swiftui/view/managesubscriptionssheet(ispresented:subscriptiongroupid:))
- [func onInAppPurchaseCompletion(perform: ((Product, Result<Product.PurchaseResult, any Error>) async -> ())?) -> some View](/documentation/swiftui/view/oninapppurchasecompletion(perform:))
- [func onInAppPurchaseStart(perform: ((Product) async -> ())?) -> some View](/documentation/swiftui/view/oninapppurchasestart(perform:))
- [func productIconBorder() -> some View](/documentation/swiftui/view/producticonborder())
- [func productViewStyle(some ProductViewStyle) -> some View](/documentation/swiftui/view/productviewstyle(_:))
- [func productDescription(Visibility) -> some View](/documentation/swiftui/view/productdescription(_:))
- [func storeButton(Visibility, for: StoreButtonKind...) -> some View](/documentation/swiftui/view/storebutton(_:for:))
- [func storeProductTask(for: Product.ID, priority: TaskPriority, action: (Product.TaskState) async -> ()) -> some View](/documentation/swiftui/view/storeproducttask(for:priority:action:))
- [func storeProductsTask(for: some Collection<String> & Equatable & Sendable, priority: TaskPriority, action: (Product.CollectionTaskState) async -> ()) -> some View](/documentation/swiftui/view/storeproductstask(for:priority:action:))
- [func subscriptionStatusTask(for: String, priority: TaskPriority, action: (EntitlementTaskState<[Product.SubscriptionInfo.Status]>) async -> ()) -> some View](/documentation/swiftui/view/subscriptionstatustask(for:priority:action:))
- [func subscriptionStoreButtonLabel(SubscriptionStoreButtonLabel) -> some View](/documentation/swiftui/view/subscriptionstorebuttonlabel(_:))
- [func subscriptionStoreControlIcon(icon: (Product, Product.SubscriptionInfo) -> some View) -> some View](/documentation/swiftui/view/subscriptionstorecontrolicon(icon:))
- [func subscriptionStoreControlStyle(some SubscriptionStoreControlStyle) -> some View](/documentation/swiftui/view/subscriptionstorecontrolstyle(_:))
- [func subscriptionStoreControlStyle<S>(S, placement: S.Placement) -> some View](/documentation/swiftui/view/subscriptionstorecontrolstyle(_:placement:))
- [func subscriptionStoreOptionGroupStyle(some SubscriptionOptionGroupStyle) -> some View](/documentation/swiftui/view/subscriptionstoreoptiongroupstyle(_:))
- [func subscriptionStorePickerItemBackground(some ShapeStyle) -> some View](/documentation/swiftui/view/subscriptionstorepickeritembackground(_:))
- [func subscriptionStorePickerItemBackground(some ShapeStyle, in: some Shape) -> some View](/documentation/swiftui/view/subscriptionstorepickeritembackground(_:in:))
- [func subscriptionStorePolicyDestination(for: SubscriptionStorePolicyKind, destination: () -> some View) -> some View](/documentation/swiftui/view/subscriptionstorepolicydestination(for:destination:))
- [func subscriptionStorePolicyDestination(url: URL, for: SubscriptionStorePolicyKind) -> some View](/documentation/swiftui/view/subscriptionstorepolicydestination(url:for:))
- [func subscriptionStorePolicyForegroundStyle(some ShapeStyle) -> some View](/documentation/swiftui/view/subscriptionstorepolicyforegroundstyle(_:))
- [func subscriptionStorePolicyForegroundStyle(some ShapeStyle, some ShapeStyle) -> some View](/documentation/swiftui/view/subscriptionstorepolicyforegroundstyle(_:_:))
- [func subscriptionStoreSignInAction((() -> ())?) -> some View](/documentation/swiftui/view/subscriptionstoresigninaction(_:))
- [func subscriptionStoreControlBackground(_:)](/documentation/swiftui/view/subscriptionstorecontrolbackground(_:))
- [func subscriptionPromotionalOffer(offer: (Product, Product.SubscriptionInfo) -> Product.SubscriptionOffer?, signature: (Product, Product.SubscriptionInfo, Product.SubscriptionOffer) async throws -> Product.SubscriptionOffer.Signature) -> some View](/documentation/swiftui/view/subscriptionpromotionaloffer(offer:signature:))
- [func preferredSubscriptionOffer((Product, Product.SubscriptionInfo, [Product.SubscriptionOffer]) -> Product.SubscriptionOffer?) -> some View](/documentation/swiftui/view/preferredsubscriptionoffer(_:))

### Accessing health data

- [func healthDataAccessRequest(store: HKHealthStore, objectType: HKObjectType, predicate: NSPredicate?, trigger: some Equatable, completion: (Result<Bool, any Error>) -> Void) -> some View](/documentation/swiftui/view/healthdataaccessrequest(store:objecttype:predicate:trigger:completion:))
- [func healthDataAccessRequest(store: HKHealthStore, readTypes: Set<HKObjectType>, trigger: some Equatable, completion: (Result<Bool, any Error>) -> Void) -> some View](/documentation/swiftui/view/healthdataaccessrequest(store:readtypes:trigger:completion:))
- [func healthDataAccessRequest(store: HKHealthStore, shareTypes: Set<HKSampleType>, readTypes: Set<HKObjectType>?, trigger: some Equatable, completion: (Result<Bool, any Error>) -> Void) -> some View](/documentation/swiftui/view/healthdataaccessrequest(store:sharetypes:readtypes:trigger:completion:))
- [func workoutPreview(WorkoutPlan, isPresented: Binding<Bool>) -> some View](/documentation/swiftui/view/workoutpreview(_:ispresented:))

### Providing tips

- [func popoverTip((any Tip)?, arrowEdge: Edge?, action: (Tips.Action) -> Void) -> some View](/documentation/swiftui/view/popovertip(_:arrowedge:action:))
- [func tipBackground<S>(S) -> some View](/documentation/swiftui/view/tipbackground(_:))
- [func tipCornerRadius(CGFloat, antialiased: Bool) -> some View](/documentation/swiftui/view/tipcornerradius(_:antialiased:))
- [func tipImageSize(CGSize) -> some View](/documentation/swiftui/view/tipimagesize(_:))
- [func tipViewStyle(some TipViewStyle) -> some View](/documentation/swiftui/view/tipviewstyle(_:))
- [func tipImageStyle<S>(S) -> some View](/documentation/swiftui/view/tipimagestyle(_:))
- [func tipImageStyle<S1, S2>(S1, S2) -> some View](/documentation/swiftui/view/tipimagestyle(_:_:))
- [func tipImageStyle<S1, S2, S3>(S1, S2, S3) -> some View](/documentation/swiftui/view/tipimagestyle(_:_:_:))

### Showing a translation

- [func translationPresentation(isPresented: Binding<Bool>, text: String, attachmentAnchor: PopoverAttachmentAnchor, arrowEdge: Edge, replacementAction: ((String) -> Void)?) -> some View](/documentation/swiftui/view/translationpresentation(ispresented:text:attachmentanchor:arrowedge:replacementaction:))
- [func translationTask(TranslationSession.Configuration?, action: (TranslationSession) async -> Void) -> some View](/documentation/swiftui/view/translationtask(_:action:))
- [func translationTask(source: Locale.Language?, target: Locale.Language?, action: (TranslationSession) async -> Void) -> some View](/documentation/swiftui/view/translationtask(source:target:action:))
- [func translationTask(source: Locale.Language?, target: Locale.Language?, preferredStrategy: TranslationSession.Strategy, action: (TranslationSession) async -> Void) -> some View](/documentation/swiftui/view/translationtask(source:target:preferredstrategy:action:))

### Presenting journaling suggestions

- [func journalingSuggestionsPicker(isPresented: Binding<Bool>, onCompletion: (JournalingSuggestion) async -> Void) -> some View](/documentation/swiftui/view/journalingsuggestionspicker(ispresented:oncompletion:))

### Managing contact access

- [func contactAccessButtonCaption(ContactAccessButton.Caption) -> some View](/documentation/swiftui/view/contactaccessbuttoncaption(_:))
- [func contactAccessButtonStyle(ContactAccessButton.Style) -> some View](/documentation/swiftui/view/contactaccessbuttonstyle(_:))
- [func contactAccessPicker(isPresented: Binding<Bool>, completionHandler: ([String]) -> Void) -> some View](/documentation/swiftui/view/contactaccesspicker(ispresented:completionhandler:))

### Handling game controller events

- [func handlesGameControllerEvents(matching: GCUIEventTypes) -> some View](/documentation/swiftui/view/handlesgamecontrollerevents(matching:))

### Creating a tabletop game

- [func tabletopGame(TabletopGame, parent: Entity, automaticUpdate: Bool) -> some View](/documentation/swiftui/view/tabletopgame(_:parent:automaticupdate:))
- [func tabletopGame(TabletopGame, parent: Entity, automaticUpdate: Bool, interaction: (TabletopInteraction.Value) -> any TabletopInteraction.Delegate) -> some View](/documentation/swiftui/view/tabletopgame(_:parent:automaticupdate:interaction:))

### Configuring camera controls

- [var realityViewCameraControls: CameraControls](/documentation/swiftui/environmentvalues/realityviewcameracontrols)
- [func realityViewCameraControls(CameraControls) -> some View](/documentation/swiftui/view/realityviewcameracontrols(_:))

### Interacting with transactions

- [func transactionPicker(isPresented: Binding<Bool>, selection: Binding<[Transaction]>) -> some View](/documentation/swiftui/view/transactionpicker(ispresented:selection:))

## Tool support

- [Previews in Xcode](/documentation/swiftui/previews-in-xcode)

### Essentials

- [Previewing your app’s interface in Xcode](/documentation/xcode/previewing-your-apps-interface-in-xcode)

### Creating a preview

- [macro Preview(String?, body: () -> any View)](/documentation/swiftui/preview(_:body:))
- [macro Preview(String?, traits: PreviewTrait<Preview.ViewTraits>, PreviewTrait<Preview.ViewTraits>..., body: () -> any View)](/documentation/swiftui/preview(_:traits:_:body:))
- [macro Preview(String?, traits: PreviewTrait<Preview.ViewTraits>..., body: () -> any View, cameras: () -> [PreviewCamera])](/documentation/swiftui/preview(_:traits:body:cameras:))

### Creating a preview in the context of a scene

- [macro Preview<Style>(String?, immersionStyle: Style, traits: PreviewTrait<Preview.ViewTraits>..., body: () -> any View)](/documentation/swiftui/preview(_:immersionstyle:traits:body:))
- [macro Preview<Style>(String?, immersionStyle: Style, traits: PreviewTrait<Preview.ViewTraits>..., body: () -> any View, cameras: () -> [PreviewCamera])](/documentation/swiftui/preview(_:immersionstyle:traits:body:cameras:))
- [macro Preview<Style>(String?, windowStyle: Style, traits: PreviewTrait<Preview.ViewTraits>..., body: () -> any View)](/documentation/swiftui/preview(_:windowstyle:traits:body:))
- [macro Preview<Style>(String?, windowStyle: Style, traits: PreviewTrait<Preview.ViewTraits>..., body: () -> any View, cameras: () -> [PreviewCamera])](/documentation/swiftui/preview(_:windowstyle:traits:body:cameras:))

### Defining a preview

- [macro Previewable()](/documentation/swiftui/previewable())
- [PreviewProvider](/documentation/swiftui/previewprovider)

#### Creating a preview

- [static var previews: Self.Previews](/documentation/swiftui/previewprovider/previews-swift.type.property)
- [Previews](/documentation/swiftui/previewprovider/previews-swift.associatedtype)

#### Specifying the platform

- [static var platform: PreviewPlatform?](/documentation/swiftui/previewprovider/platform)
- [PreviewPlatform](/documentation/swiftui/previewplatform)

#### Getting an operating system

- [case iOS](/documentation/swiftui/previewplatform/ios)
- [case macOS](/documentation/swiftui/previewplatform/macos)
- [case tvOS](/documentation/swiftui/previewplatform/tvos)
- [case watchOS](/documentation/swiftui/previewplatform/watchos)
- [func previewDisplayName(String?) -> some View](/documentation/swiftui/view/previewdisplayname(_:))
- [PreviewModifier](/documentation/swiftui/previewmodifier)

#### Associated Types

- [Body](/documentation/swiftui/previewmodifier/body)
- [Context](/documentation/swiftui/previewmodifier/context)

#### Instance Methods

- [func body(content: Self.Content, context: Self.Context) -> Self.Body](/documentation/swiftui/previewmodifier/body(content:context:))

#### Type Aliases

- [PreviewModifier.Content](/documentation/swiftui/previewmodifier/content)

#### Type Methods

- [static func makeSharedContext() async throws -> Self.Context](/documentation/swiftui/previewmodifier/makesharedcontext())
- [PreviewModifierContent](/documentation/swiftui/previewmodifiercontent)

### Customizing a preview

- [func previewDevice(PreviewDevice?) -> some View](/documentation/swiftui/view/previewdevice(_:))
- [PreviewDevice](/documentation/swiftui/previewdevice)
- [func previewLayout(PreviewLayout) -> some View](/documentation/swiftui/view/previewlayout(_:))
- [func previewInterfaceOrientation(InterfaceOrientation) -> some View](/documentation/swiftui/view/previewinterfaceorientation(_:))
- [InterfaceOrientation](/documentation/swiftui/interfaceorientation)

#### Getting an orientation

- [static let portrait: InterfaceOrientation](/documentation/swiftui/interfaceorientation/portrait)
- [static let portraitUpsideDown: InterfaceOrientation](/documentation/swiftui/interfaceorientation/portraitupsidedown)
- [static let landscapeLeft: InterfaceOrientation](/documentation/swiftui/interfaceorientation/landscapeleft)
- [static let landscapeRight: InterfaceOrientation](/documentation/swiftui/interfaceorientation/landscaperight)

### Setting a context

- [func previewContext<C>(C) -> some View](/documentation/swiftui/view/previewcontext(_:))
- [PreviewContext](/documentation/swiftui/previewcontext)

#### Accessing a preview context

- [subscript<Key>(Key.Type) -> Key.Value](/documentation/swiftui/previewcontext/subscript(_:))
- [PreviewContextKey](/documentation/swiftui/previewcontextkey)

#### Setting a default

- [static var defaultValue: Self.Value](/documentation/swiftui/previewcontextkey/defaultvalue)
- [Value](/documentation/swiftui/previewcontextkey/value)

### Building in debug mode

- [DebugReplaceableView](/documentation/swiftui/debugreplaceableview)
- [Xcode library customization](/documentation/swiftui/xcode-library-customization)

### Creating library items

- [LibraryContentProvider](/documentation/developertoolssupport/librarycontentprovider)
- [LibraryItem](/documentation/developertoolssupport/libraryitem)
- [Performance analysis](/documentation/swiftui/performance-analysis)

### Essentials

- [Understanding user interface responsiveness](/documentation/xcode/understanding-user-interface-responsiveness)
- [Understanding hangs in your app](/documentation/xcode/understanding-hangs-in-your-app)
- [Understanding hitches in your app](/documentation/xcode/understanding-hitches-in-your-app)

### Analyzing SwiftUI performance

- [Understanding and improving SwiftUI performance](/documentation/xcode/understanding-and-improving-swiftui-performance)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
