---
title: View
description: A type that represents part of your app’s user interface and provides modifiers that you use to configure views.
source: https://developer.apple.com/documentation/swiftui/view
timestamp: 2026-01-17T15:34:40.663Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Protocol**

# View

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A type that represents part of your app’s user interface and provides modifiers that you use to configure views.

```swift
@MainActor @preconcurrency protocol View
```

## Overview

You create custom views by declaring types that conform to the `View` protocol. Implement the required [body](/documentation/swiftui/view/body-8kl5o) computed property to provide the content for your custom view.

```swift
struct MyView: View {
    var body: some View {
        Text("Hello, World!")
    }
}
```

Assemble the view’s body by combining one or more of the built-in views provided by SwiftUI, like the [Text](/documentation/swiftui/text) instance in the example above, plus other custom views that you define, into a hierarchy of views. For more information about creating custom views, see [Declaring-a-Custom](/documentation/swiftui/declaring-a-custom-view).

The `View` protocol provides a set of modifiers — protocol methods with default implementations — that you use to configure views in the layout of your app. Modifiers work by wrapping the view instance on which you call them in another view with the specified characteristics, as described in [Configuring](/documentation/swiftui/configuring-views). For example, adding the [opacity(_:)](/documentation/swiftui/view/opacity(_:)) modifier to a text view returns a new view with some amount of transparency:

```swift
Text("Hello, World!")
    .opacity(0.5) // Display partially transparent text.
```

The complete list of default modifiers provides a large set of controls for managing views. For example, you can fine tune [View](/documentation/swiftui/view-layout), add [View](/documentation/swiftui/view-accessibility) information, and respond to [View-Input-and](/documentation/swiftui/view-input-and-events). You can also collect groups of default modifiers into new, custom view modifiers for easy reuse.

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is declared in its original declaration. Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt-out the isolation.

## Inherited By

- [DynamicViewContent](/documentation/swiftui/dynamicviewcontent)
- [InsettableShape](/documentation/swiftui/insettableshape)
- [NSViewControllerRepresentable](/documentation/swiftui/nsviewcontrollerrepresentable)
- [NSViewRepresentable](/documentation/swiftui/nsviewrepresentable)
- [RoundedRectangularShape](/documentation/swiftui/roundedrectangularshape)
- [Shape](/documentation/swiftui/shape)
- [ShapeView](/documentation/swiftui/shapeview)
- [UIViewControllerRepresentable](/documentation/swiftui/uiviewcontrollerrepresentable)
- [UIViewRepresentable](/documentation/swiftui/uiviewrepresentable)
- [WKInterfaceObjectRepresentable](/documentation/swiftui/wkinterfaceobjectrepresentable)

## Conforming Types

- [AngularGradient](/documentation/swiftui/angulargradient)
- [AnyShape](/documentation/swiftui/anyshape)
- [AnyView](/documentation/swiftui/anyview)
- [AsyncImage](/documentation/swiftui/asyncimage)
- [Button](/documentation/swiftui/button)
- [ButtonBorderShape](/documentation/swiftui/buttonbordershape)
- [ButtonStyleConfiguration.Label](/documentation/swiftui/buttonstyleconfiguration/label-swift.struct)
- [Canvas](/documentation/swiftui/canvas)
- [Capsule](/documentation/swiftui/capsule)
- [Circle](/documentation/swiftui/circle)
- [Color](/documentation/swiftui/color)
- [ColorPicker](/documentation/swiftui/colorpicker)
- [ConcentricRectangle](/documentation/swiftui/concentricrectangle)
- [ContainerRelativeShape](/documentation/swiftui/containerrelativeshape)
- [ContentUnavailableView](/documentation/swiftui/contentunavailableview)
- [ControlGroup](/documentation/swiftui/controlgroup)
- [ControlGroupStyleConfiguration.Content](/documentation/swiftui/controlgroupstyleconfiguration/content-swift.struct)
- [ControlGroupStyleConfiguration.Label](/documentation/swiftui/controlgroupstyleconfiguration/label-swift.struct)
- [DatePicker](/documentation/swiftui/datepicker)
- [DatePickerStyleConfiguration.Label](/documentation/swiftui/datepickerstyleconfiguration/label-swift.struct)
- [DebugReplaceableView](/documentation/swiftui/debugreplaceableview)
- [DefaultButtonLabel](/documentation/swiftui/defaultbuttonlabel)
- [DefaultDateProgressLabel](/documentation/swiftui/defaultdateprogresslabel)
- [DefaultDocumentGroupLaunchActions](/documentation/swiftui/defaultdocumentgrouplaunchactions)
- [DefaultGlassEffectShape](/documentation/swiftui/defaultglasseffectshape)
- [DefaultSettingsLinkLabel](/documentation/swiftui/defaultsettingslinklabel)
- [DefaultShareLinkLabel](/documentation/swiftui/defaultsharelinklabel)
- [DefaultTabLabel](/documentation/swiftui/defaulttablabel)
- [DefaultWindowVisibilityToggleLabel](/documentation/swiftui/defaultwindowvisibilitytogglelabel)
- [DisclosureGroup](/documentation/swiftui/disclosuregroup)
- [DisclosureGroupStyleConfiguration.Content](/documentation/swiftui/disclosuregroupstyleconfiguration/content-swift.struct)
- [DisclosureGroupStyleConfiguration.Label](/documentation/swiftui/disclosuregroupstyleconfiguration/label-swift.struct)
- [Divider](/documentation/swiftui/divider)
- [DocumentLaunchView](/documentation/swiftui/documentlaunchview)
- [EditButton](/documentation/swiftui/editbutton)
- [EditableCollectionContent](/documentation/swiftui/editablecollectioncontent)
- [Ellipse](/documentation/swiftui/ellipse)
- [EllipticalGradient](/documentation/swiftui/ellipticalgradient)
- [EmptyView](/documentation/swiftui/emptyview)
- [EquatableView](/documentation/swiftui/equatableview)
- [FillShapeView](/documentation/swiftui/fillshapeview)
- [ForEach](/documentation/swiftui/foreach)
- [Form](/documentation/swiftui/form)
- [FormStyleConfiguration.Content](/documentation/swiftui/formstyleconfiguration/content-swift.struct)
- [Gauge](/documentation/swiftui/gauge)
- [GaugeStyleConfiguration.CurrentValueLabel](/documentation/swiftui/gaugestyleconfiguration/currentvaluelabel-swift.struct)
- [GaugeStyleConfiguration.Label](/documentation/swiftui/gaugestyleconfiguration/label-swift.struct)
- [GaugeStyleConfiguration.MarkedValueLabel](/documentation/swiftui/gaugestyleconfiguration/markedvaluelabel)
- [GaugeStyleConfiguration.MaximumValueLabel](/documentation/swiftui/gaugestyleconfiguration/maximumvaluelabel-swift.struct)
- [GaugeStyleConfiguration.MinimumValueLabel](/documentation/swiftui/gaugestyleconfiguration/minimumvaluelabel-swift.struct)
- [GeometryReader](/documentation/swiftui/geometryreader)
- [GeometryReader3D](/documentation/swiftui/geometryreader3d)
- [GlassBackgroundEffectConfiguration.Content](/documentation/swiftui/glassbackgroundeffectconfiguration/content-swift.struct)
- [GlassEffectContainer](/documentation/swiftui/glasseffectcontainer)
- [Grid](/documentation/swiftui/grid)
- [GridRow](/documentation/swiftui/gridrow)
- [Group](/documentation/swiftui/group)
- [GroupBox](/documentation/swiftui/groupbox)
- [GroupBoxStyleConfiguration.Content](/documentation/swiftui/groupboxstyleconfiguration/content-swift.struct)
- [GroupBoxStyleConfiguration.Label](/documentation/swiftui/groupboxstyleconfiguration/label-swift.struct)
- [GroupElementsOfContent](/documentation/swiftui/groupelementsofcontent)
- [GroupSectionsOfContent](/documentation/swiftui/groupsectionsofcontent)
- [HSplitView](/documentation/swiftui/hsplitview)
- [HStack](/documentation/swiftui/hstack)
- [HelpLink](/documentation/swiftui/helplink)
- [Image](/documentation/swiftui/image)
- [KeyframeAnimator](/documentation/swiftui/keyframeanimator)
- [Label](/documentation/swiftui/label)
- [LabelStyleConfiguration.Icon](/documentation/swiftui/labelstyleconfiguration/icon-swift.struct)
- [LabelStyleConfiguration.Title](/documentation/swiftui/labelstyleconfiguration/title-swift.struct)
- [LabeledContent](/documentation/swiftui/labeledcontent)
- [LabeledContentStyleConfiguration.Content](/documentation/swiftui/labeledcontentstyleconfiguration/content-swift.struct)
- [LabeledContentStyleConfiguration.Label](/documentation/swiftui/labeledcontentstyleconfiguration/label-swift.struct)
- [LabeledControlGroupContent](/documentation/swiftui/labeledcontrolgroupcontent)
- [LabeledToolbarItemGroupContent](/documentation/swiftui/labeledtoolbaritemgroupcontent)
- [LazyHGrid](/documentation/swiftui/lazyhgrid)
- [LazyHStack](/documentation/swiftui/lazyhstack)
- [LazyVGrid](/documentation/swiftui/lazyvgrid)
- [LazyVStack](/documentation/swiftui/lazyvstack)
- [LinearGradient](/documentation/swiftui/lineargradient)
- [Link](/documentation/swiftui/link)
- [List](/documentation/swiftui/list)
- [Menu](/documentation/swiftui/menu)
- [MenuButton](/documentation/swiftui/menubutton)
- [MenuStyleConfiguration.Content](/documentation/swiftui/menustyleconfiguration/content)
- [MenuStyleConfiguration.Label](/documentation/swiftui/menustyleconfiguration/label)
- [MeshGradient](/documentation/swiftui/meshgradient)
- [ModifiedContent](/documentation/swiftui/modifiedcontent)
- [MultiDatePicker](/documentation/swiftui/multidatepicker)
- [NavigationLink](/documentation/swiftui/navigationlink)
- [NavigationSplitView](/documentation/swiftui/navigationsplitview)
- [NavigationStack](/documentation/swiftui/navigationstack)
- [NewDocumentButton](/documentation/swiftui/newdocumentbutton)
- [OffsetShape](/documentation/swiftui/offsetshape)
- [OutlineGroup](/documentation/swiftui/outlinegroup)
- [OutlineSubgroupChildren](/documentation/swiftui/outlinesubgroupchildren)
- [PasteButton](/documentation/swiftui/pastebutton)
- [Path](/documentation/swiftui/path)
- [PhaseAnimator](/documentation/swiftui/phaseanimator)
- [Picker](/documentation/swiftui/picker)
- [PlaceholderContentView](/documentation/swiftui/placeholdercontentview)
- [PresentedWindowContent](/documentation/swiftui/presentedwindowcontent)
- [PreviewModifierContent](/documentation/swiftui/previewmodifiercontent)
- [PrimitiveButtonStyleConfiguration.Label](/documentation/swiftui/primitivebuttonstyleconfiguration/label-swift.struct)
- [ProgressView](/documentation/swiftui/progressview)
- [ProgressViewStyleConfiguration.CurrentValueLabel](/documentation/swiftui/progressviewstyleconfiguration/currentvaluelabel-swift.struct)
- [ProgressViewStyleConfiguration.Label](/documentation/swiftui/progressviewstyleconfiguration/label-swift.struct)
- [RadialGradient](/documentation/swiftui/radialgradient)
- [Rectangle](/documentation/swiftui/rectangle)
- [RenameButton](/documentation/swiftui/renamebutton)
- [RotatedShape](/documentation/swiftui/rotatedshape)
- [RoundedRectangle](/documentation/swiftui/roundedrectangle)
- [ScaledShape](/documentation/swiftui/scaledshape)
- [ScrollView](/documentation/swiftui/scrollview)
- [ScrollViewReader](/documentation/swiftui/scrollviewreader)
- [SearchUnavailableContent.Actions](/documentation/swiftui/searchunavailablecontent/actions)
- [SearchUnavailableContent.Description](/documentation/swiftui/searchunavailablecontent/description)
- [SearchUnavailableContent.Label](/documentation/swiftui/searchunavailablecontent/label)
- [Section](/documentation/swiftui/section)
- [SectionConfiguration.Actions](/documentation/swiftui/sectionconfiguration/actions-swift.struct)
- [SecureField](/documentation/swiftui/securefield)
- [SettingsLink](/documentation/swiftui/settingslink)
- [ShareLink](/documentation/swiftui/sharelink)
- [Slider](/documentation/swiftui/slider)
- [Spacer](/documentation/swiftui/spacer)
- [Stepper](/documentation/swiftui/stepper)
- [StrokeBorderShapeView](/documentation/swiftui/strokebordershapeview)
- [StrokeShapeView](/documentation/swiftui/strokeshapeview)
- [SubscriptionView](/documentation/swiftui/subscriptionview)
- [Subview](/documentation/swiftui/subview)
- [SubviewsCollection](/documentation/swiftui/subviewscollection)
- [SubviewsCollectionSlice](/documentation/swiftui/subviewscollectionslice)
- [TabContentBuilder.Content](/documentation/swiftui/tabcontentbuilder/content)
- [TabView](/documentation/swiftui/tabview)
- [Table](/documentation/swiftui/table)
- [Text](/documentation/swiftui/text)
- [TextEditor](/documentation/swiftui/texteditor)
- [TextField](/documentation/swiftui/textfield)
- [TextFieldLink](/documentation/swiftui/textfieldlink)
- [TimelineView](/documentation/swiftui/timelineview)
- [Toggle](/documentation/swiftui/toggle)
- [ToggleStyleConfiguration.Label](/documentation/swiftui/togglestyleconfiguration/label-swift.struct)
- [TransformedShape](/documentation/swiftui/transformedshape)
- [TupleView](/documentation/swiftui/tupleview)
- [UnevenRoundedRectangle](/documentation/swiftui/unevenroundedrectangle)
- [VSplitView](/documentation/swiftui/vsplitview)
- [VStack](/documentation/swiftui/vstack)
- [ViewThatFits](/documentation/swiftui/viewthatfits)
- [WindowVisibilityToggle](/documentation/swiftui/windowvisibilitytoggle)
- [ZStack](/documentation/swiftui/zstack)
- [ZStackContent3D](/documentation/swiftui/zstackcontent3d)

## Implementing a custom view

- [body](/documentation/swiftui/view/body-8kl5o) The content and behavior of the view.
- [Body](/documentation/swiftui/view/body-swift.associatedtype) The type of view representing the body of this view.
- [modifier(_:)](/documentation/swiftui/view/modifier(_:)) Applies a modifier to a view and returns a new view.
- [Previews in Xcode](/documentation/swiftui/previews-in-xcode) Generate dynamic, interactive previews of your custom views.

## Configuring view elements

- [Accessibility modifiers](/documentation/swiftui/view-accessibility) Make your SwiftUI apps accessible to everyone, including people with disabilities.
- [Appearance modifiers](/documentation/swiftui/view-appearance) Configure a view’s foreground and background styles, controls, and visibility.
- [Text and symbol modifiers](/documentation/swiftui/view-text-and-symbols) Manage the rendering, selection, and entry of text in your view.
- [Auxiliary view modifiers](/documentation/swiftui/view-auxiliary-views) Add and configure supporting views, like toolbars and context menus.
- [Chart view modifiers](/documentation/swiftui/view-chart-view) Configure charts that you declare with Swift Charts.

## Drawing views

- [Style modifiers](/documentation/swiftui/view-style-modifiers) Apply built-in styles to different types of views.
- [Layout modifiers](/documentation/swiftui/view-layout) Tell a view how to arrange itself within a view hierarchy by adjusting its size, position, alignment, padding, and so on.
- [Graphics and rendering modifiers](/documentation/swiftui/view-graphics-and-rendering) Affect the way the system draws a view, for example by scaling or masking a view, or by applying graphical effects.

## Providing interactivity

- [Input and event modifiers](/documentation/swiftui/view-input-and-events) Supply actions for a view to perform in response to user input and system events.
- [Search modifiers](/documentation/swiftui/view-search) Enable people to search for content in your app.
- [Presentation modifiers](/documentation/swiftui/view-presentation) Define additional views for the view to present under specified conditions.
- [State modifiers](/documentation/swiftui/view-state) Access storage and provide child views with configuration data.

## Deprecated modifiers

- [Deprecated modifiers](/documentation/swiftui/view-deprecated) Review unsupported modifiers and their replacements.

## Instance Methods

- [accessibilityActions(category:_:)](/documentation/swiftui/view/accessibilityactions(category:_:)) Adds multiple accessibility actions to the view with a specific category. Actions allow assistive technologies, such as VoiceOver, to interact with the view by invoking the action and are grouped by their category. When multiple action modifiers with an equal category are applied to the view, the actions are combined together.
- [accessibilityDefaultFocus(_:_:)](/documentation/swiftui/view/accessibilitydefaultfocus(_:_:)) Defines a region in which default accessibility focus is evaluated by assigning a value to a given accessibility focus state binding.
- [accessibilityScrollStatus(_:isEnabled:)](/documentation/swiftui/view/accessibilityscrollstatus(_:isenabled:)) Changes the announcement provided by accessibility technologies when a user scrolls a scroll view within this view.
- [addOrderToWalletButtonStyle(_:)](/documentation/swiftui/view/addordertowalletbuttonstyle(_:)) Sets the button’s style.
- [addPassToWalletButtonStyle(_:)](/documentation/swiftui/view/addpasstowalletbuttonstyle(_:)) Sets the style to be used by the button. (see ).
- [allowsWindowActivationEvents()](/documentation/swiftui/view/allowswindowactivationevents()) Configures gestures in this view hierarchy to handle events that activate the containing window.
- [appStoreMerchandising(isPresented:kind:onDismiss:)](/documentation/swiftui/view/appstoremerchandising(ispresented:kind:ondismiss:))
- [aspectRatio3D(_:contentMode:)](/documentation/swiftui/view/aspectratio3d(_:contentmode:)) Constrains this view’s dimensions to the specified 3D aspect ratio.
- [assistiveAccessNavigationIcon(_:)](/documentation/swiftui/view/assistiveaccessnavigationicon(_:)) Configures the view’s icon for purposes of navigation.
- [assistiveAccessNavigationIcon(systemImage:)](/documentation/swiftui/view/assistiveaccessnavigationicon(systemimage:)) Configures the view’s icon for purposes of navigation.
- [attributedTextFormattingDefinition(_:)](/documentation/swiftui/view/attributedtextformattingdefinition(_:)) Apply a text formatting definition to nested views.
- [automatedDeviceEnrollmentAddition(isPresented:)](/documentation/swiftui/view/automateddeviceenrollmentaddition(ispresented:)) Presents a modal view that enables users to add devices to their organization.
- [backgroundExtensionEffect()](/documentation/swiftui/view/backgroundextensioneffect()) Adds the background extension effect to the view. The view will be duplicated into mirrored copies which will be placed around the view on any edge with available safe area. Additionally, a blur effect will be applied on top to blur out the copies.
- [backgroundExtensionEffect(isEnabled:)](/documentation/swiftui/view/backgroundextensioneffect(isenabled:)) Adds the background extension effect to the view. The view will be duplicated into mirrored copies which will be placed around the view on any edge with available safe area. Additionally, a blur effect will be applied on top to blur out the copies.
- [breakthroughEffect(_:)](/documentation/swiftui/view/breakthrougheffect(_:)) Ensures that the view is always visible to the user, even when other content is occluding it, like 3D models.
- [buttonSizing(_:)](/documentation/swiftui/view/buttonsizing(_:)) The preferred sizing behavior of buttons in the view hierarchy.
- [certificateSheet(trust:title:message:help:)](/documentation/swiftui/view/certificatesheet(trust:title:message:help:)) Displays a certificate sheet using the provided certificate trust.
- [chart3DCameraProjection(_:)](/documentation/swiftui/view/chart3dcameraprojection(_:))
- [chart3DPose(_:)](/documentation/swiftui/view/chart3dpose(_:)) Associates a binding to be updated when the 3D chart’s pose is changed by an interaction.
- [chart3DRenderingStyle(_:)](/documentation/swiftui/view/chart3drenderingstyle(_:))
- [chartZAxis(_:)](/documentation/swiftui/view/chartzaxis(_:)) Sets the visibility of the z axis.
- [chartZAxis(content:)](/documentation/swiftui/view/chartzaxis(content:)) Configures the z-axis for 3D charts in the view.
- [chartZAxisLabel(_:position:alignment:spacing:)](/documentation/swiftui/view/chartzaxislabel(_:position:alignment:spacing:)) Adds z axis label for charts in the view. It effects 3D charts only.
- [chartZScale(domain:range:type:)](/documentation/swiftui/view/chartzscale(domain:range:type:)) Configures the z scale for 3D charts.
- [chartZScale(domain:type:)](/documentation/swiftui/view/chartzscale(domain:type:)) Configures the z scale for 3D charts.
- [chartZScale(range:type:)](/documentation/swiftui/view/chartzscale(range:type:)) Configures the z scale for 3D charts.
- [chartZSelection(range:)](/documentation/swiftui/view/chartzselection(range:))
- [chartZSelection(value:)](/documentation/swiftui/view/chartzselection(value:))
- [contactAccessButtonCaption(_:)](/documentation/swiftui/view/contactaccessbuttoncaption(_:))
- [contactAccessButtonStyle(_:)](/documentation/swiftui/view/contactaccessbuttonstyle(_:))
- [contactAccessPicker(isPresented:completionHandler:)](/documentation/swiftui/view/contactaccesspicker(ispresented:completionhandler:)) Modally present UI which allows the user to select which contacts your app has access to.
- [containerCornerOffset(_:sizeToFit:)](/documentation/swiftui/view/containercorneroffset(_:sizetofit:)) Adjusts the view’s layout to avoid the container view’s corner insets for the specified edges.
- [containerValue(_:_:)](/documentation/swiftui/view/containervalue(_:_:)) Sets a particular container value of a view.
- [contentCaptureProtected(_:)](/documentation/swiftui/view/contentcaptureprotected(_:))
- [contentToolbar(for:content:)](/documentation/swiftui/view/contenttoolbar(for:content:)) Populates the toolbar of the specified content view type with the views you provide.
- [continuityDevicePicker(isPresented:onDidConnect:)](/documentation/swiftui/view/continuitydevicepicker(ispresented:ondidconnect:)) A  should be used to discover and connect nearby continuity device through a button interface or other form of activation. On tvOS, this presents a fullscreen continuity device picker experience when selected. The modal view covers as much the screen of  as possible when a given condition is true.
- [controlWidgetActionHint(_:)](/documentation/swiftui/view/controlwidgetactionhint(_:)) The action hint of the control described by the modified label.
- [controlWidgetStatus(_:)](/documentation/swiftui/view/controlwidgetstatus(_:)) The status of the control described by the modified label.
- [currentEntitlementTask(for:priority:action:)](/documentation/swiftui/view/currententitlementtask(for:priority:action:)) Declares the view as dependent on the entitlement of an In-App Purchase product, and returns a modified view.
- [dialogPreventsAppTermination(_:)](/documentation/swiftui/view/dialogpreventsapptermination(_:)) Whether the alert or confirmation dialog prevents the app from being quit/terminated by the system or app termination menu item.
- [documentBrowserContextMenu(_:)](/documentation/swiftui/view/documentbrowsercontextmenu(_:)) Adds to a  actions that accept a list of selected files as their parameter.
- [dragConfiguration(_:)](/documentation/swiftui/view/dragconfiguration(_:)) Configures a drag session.
- [dragContainer(for:in:_:)](/documentation/swiftui/view/dragcontainer(for:in:_:)) A container with draggable views where the drag payload is based on multiple identifiers of dragged items.
- [dragContainer(for:itemID:in:_:)](/documentation/swiftui/view/dragcontainer(for:itemid:in:_:)) A container with draggable views.
- [dragContainerSelection(_:containerNamespace:)](/documentation/swiftui/view/dragcontainerselection(_:containernamespace:)) Provides multiple item selection support for drag containers.
- [dragPreviewsFormation(_:)](/documentation/swiftui/view/dragpreviewsformation(_:)) Describes the way dragged previews are visually composed.
- [draggable(_:containerNamespace:_:)](/documentation/swiftui/view/draggable(_:containernamespace:_:)) Activates this view as the source of a drag and drop operation, allowing to provide optional identifiable payload and specify the namespace of the drag container this view belongs to.
- [draggable(_:id:containerNamespace:_:)](/documentation/swiftui/view/draggable(_:id:containernamespace:_:)) Activates this view as the source of a drag and drop operation, allowing to provide optional payload and specify the namespace of the drag container this view belongs to.
- [draggable(_:id:item:containerNamespace:)](/documentation/swiftui/view/draggable(_:id:item:containernamespace:)) Activates this view as the source of a drag and drop operation, allowing to provide optional payload and specify the namespace of the drag container this view belongs to.
- [draggable(_:item:containerNamespace:)](/documentation/swiftui/view/draggable(_:item:containernamespace:)) Activates this view as the source of a drag and drop operation, allowing to provide optional identifiable payload and specify the namespace of the drag container this view belongs to.
- [draggable(containerItemID:containerNamespace:)](/documentation/swiftui/view/draggable(containeritemid:containernamespace:)) Inside a drag container, activates this view as the source of a drag and drop operation. Supports lazy drag containers.
- [dropConfiguration(_:)](/documentation/swiftui/view/dropconfiguration(_:)) Configures a drop session.
- [dropDestination(for:isEnabled:action:)](/documentation/swiftui/view/dropdestination(for:isenabled:action:)) Defines the destination of a drag and drop operation that provides a drop operation proposal and handles the dropped content with a closure that you specify.
- [dropPreviewsFormation(_:)](/documentation/swiftui/view/droppreviewsformation(_:)) Describes the way previews for a drop are composed.
- [familyActivityPicker(title:headerText:footerText:isPresented:selection:)](/documentation/swiftui/view/familyactivitypicker(title:headertext:footertext:ispresented:selection:)) Present an activity picker sheet for selecting apps and websites to manage.
- [formStyle(_:)](/documentation/swiftui/view/formstyle(_:)) Sets the style for forms in a view hierarchy.
- [gameSaveSyncingAlert(directory:finishedLoading:)](/documentation/swiftui/view/gamesavesyncingalert(directory:finishedloading:)) Presents a modal view while the game synced directory loads.
- [glassBackgroundEffect(_:displayMode:)](/documentation/swiftui/view/glassbackgroundeffect(_:displaymode:)) Fills the view’s background with a custom glass background effect and container-relative rounded rectangle shape.
- [glassBackgroundEffect(_:in:displayMode:)](/documentation/swiftui/view/glassbackgroundeffect(_:in:displaymode:)) Fills the view’s background with a custom glass background effect and a shape that you specify.
- [glassEffect(_:in:)](/documentation/swiftui/view/glasseffect(_:in:)) Applies the Liquid Glass effect to a view.
- [glassEffectID(_:in:)](/documentation/swiftui/view/glasseffectid(_:in:)) Associates an identity value to Liquid Glass effects defined within this view.
- [glassEffectTransition(_:)](/documentation/swiftui/view/glasseffecttransition(_:)) Associates a glass effect transition with any glass effects defined within this view.
- [glassEffectUnion(id:namespace:)](/documentation/swiftui/view/glasseffectunion(id:namespace:)) Associates any Liquid Glass effects defined within this view to a union with the provided identifier.
- [groupActivityAssociation(_:)](/documentation/swiftui/view/groupactivityassociation(_:)) Specifies how a view should be associated with the current SharePlay group activity.
- [handGestureShortcut(_:isEnabled:)](/documentation/swiftui/view/handgestureshortcut(_:isenabled:)) Assigns a hand gesture shortcut to the modified control.
- [handPointerBehavior(_:)](/documentation/swiftui/view/handpointerbehavior(_:)) Sets the behavior of the hand pointer while the user is interacting with the view.
- [handlesGameControllerEvents(matching:)](/documentation/swiftui/view/handlesgamecontrollerevents(matching:)) Specifies the game controllers events which should be delivered through the GameController framework when the view, or one of its descendants has focus.
- [handlesGameControllerEvents(matching:withOptions:)](/documentation/swiftui/view/handlesgamecontrollerevents(matching:withoptions:)) Specifies the game controllers events which should be delivered through the GameController framework when the view or one of its descendants has focus.
- [healthDataAccessRequest(store:objectType:predicate:trigger:completion:)](/documentation/swiftui/view/healthdataaccessrequest(store:objecttype:predicate:trigger:completion:)) Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [healthDataAccessRequest(store:readTypes:trigger:completion:)](/documentation/swiftui/view/healthdataaccessrequest(store:readtypes:trigger:completion:)) Requests permission to read the specified HealthKit data types.
- [healthDataAccessRequest(store:shareTypes:readTypes:trigger:completion:)](/documentation/swiftui/view/healthdataaccessrequest(store:sharetypes:readtypes:trigger:completion:)) Requests permission to save and read the specified HealthKit data types.
- [imagePlaygroundGenerationStyle(_:in:)](/documentation/swiftui/view/imageplaygroundgenerationstyle(_:in:)) Sets the generation style for an image playground.
- [imagePlaygroundPersonalizationPolicy(_:)](/documentation/swiftui/view/imageplaygroundpersonalizationpolicy(_:)) Policy determining whether to support the usage of people in the playground or not.
- [imagePlaygroundSheet(isPresented:concept:sourceImage:onCompletion:onCancellation:)](/documentation/swiftui/view/imageplaygroundsheet(ispresented:concept:sourceimage:oncompletion:oncancellation:)) Presents the system sheet to create images from the specified input.
- [imagePlaygroundSheet(isPresented:concept:sourceImageURL:onCompletion:onCancellation:)](/documentation/swiftui/view/imageplaygroundsheet(ispresented:concept:sourceimageurl:oncompletion:oncancellation:)) Presents the system sheet to create images from the specified input.
- [imagePlaygroundSheet(isPresented:concepts:sourceImage:onCompletion:onCancellation:)](/documentation/swiftui/view/imageplaygroundsheet(ispresented:concepts:sourceimage:oncompletion:oncancellation:)) Presents the system sheet to create images from the specified input.
- [imagePlaygroundSheet(isPresented:concepts:sourceImageURL:onCompletion:onCancellation:)](/documentation/swiftui/view/imageplaygroundsheet(ispresented:concepts:sourceimageurl:oncompletion:oncancellation:)) Presents the system sheet to create images from the specified input.
- [immersiveEnvironmentPicker(content:)](/documentation/swiftui/view/immersiveenvironmentpicker(content:)) Add menu items to open immersive spaces from a media player’s environment picker.
- [inAppPurchaseOptions(_:)](/documentation/swiftui/view/inapppurchaseoptions(_:)) Add a function to call before initiating a purchase from StoreKit view within this view, providing a set of options for the purchase.
- [journalingSuggestionsPicker(isPresented:journalingSuggestionToken:onCompletion:)](/documentation/swiftui/view/journalingsuggestionspicker(ispresented:journalingsuggestiontoken:oncompletion:)) Presents a visual picker interface that contains events and images that a person can select to retrieve more information.
- [journalingSuggestionsPicker(isPresented:onCompletion:)](/documentation/swiftui/view/journalingsuggestionspicker(ispresented:oncompletion:)) Presents a visual picker interface that contains events and images that a person can select to retrieve more information.
- [labelIconToTitleSpacing(_:)](/documentation/swiftui/view/labelicontotitlespacing(_:)) Set the spacing between the icon and title in labels.
- [labelReservedIconWidth(_:)](/documentation/swiftui/view/labelreservediconwidth(_:)) Set the width reserved for icons in labels.
- [labeledContentStyle(_:)](/documentation/swiftui/view/labeledcontentstyle(_:)) Sets a style for labeled content.
- [labelsVisibility(_:)](/documentation/swiftui/view/labelsvisibility(_:)) Controls the visibility of labels of any controls contained within this view.
- [lineHeight(_:)](/documentation/swiftui/view/lineheight(_:)) A modifier for the default line height in the view hierarchy.
- [listRowInsets(_:_:)](/documentation/swiftui/view/listrowinsets(_:_:)) Sets the insets of rows in a list on the specified edges.
- [listSectionIndexVisibility(_:)](/documentation/swiftui/view/listsectionindexvisibility(_:)) Changes the visibility of the list section index.
- [listSectionMargins(_:_:)](/documentation/swiftui/view/listsectionmargins(_:_:)) Set the section margins for the specific edges.
- [lookAroundViewer(isPresented:initialScene:allowsNavigation:showsRoadLabels:pointsOfInterest:onDismiss:)](/documentation/swiftui/view/lookaroundviewer(ispresented:initialscene:allowsnavigation:showsroadlabels:pointsofinterest:ondismiss:))
- [lookAroundViewer(isPresented:scene:allowsNavigation:showsRoadLabels:pointsOfInterest:onDismiss:)](/documentation/swiftui/view/lookaroundviewer(ispresented:scene:allowsnavigation:showsroadlabels:pointsofinterest:ondismiss:))
- [manageSubscriptionsSheet(isPresented:subscriptionGroupID:)](/documentation/swiftui/view/managesubscriptionssheet(ispresented:subscriptiongroupid:))
- [managedContentStyle(_:)](/documentation/swiftui/view/managedcontentstyle(_:)) Applies a managed content style to the view.
- [manipulable(coordinateSpace:operations:inertia:isEnabled:onChanged:)](/documentation/swiftui/view/manipulable(coordinatespace:operations:inertia:isenabled:onchanged:)) Allows this view to be manipulated using common hand gestures.
- [manipulable(transform:coordinateSpace:operations:inertia:isEnabled:onChanged:)](/documentation/swiftui/view/manipulable(transform:coordinatespace:operations:inertia:isenabled:onchanged:)) Applies the given 3D affine transform to the view and allows it to be manipulated using common hand gestures.
- [manipulable(using:)](/documentation/swiftui/view/manipulable(using:)) Allows the view to be manipulated using a manipulation gesture attached to a different view.
- [manipulationGesture(updating:coordinateSpace:operations:inertia:isEnabled:onChanged:)](/documentation/swiftui/view/manipulationgesture(updating:coordinatespace:operations:inertia:isenabled:onchanged:)) Adds a manipulation gesture to this view without allowing this view to be manipulable itself.
- [mapCameraKeyframeAnimator(trigger:keyframes:)](/documentation/swiftui/view/mapcamerakeyframeanimator(trigger:keyframes:)) Uses the given keyframes to animate the camera of a  when the given trigger value changes.
- [mapControlVisibility(_:)](/documentation/swiftui/view/mapcontrolvisibility(_:)) Configures all Map controls in the environment to have the specified visibility
- [mapControls(_:)](/documentation/swiftui/view/mapcontrols(_:)) Configures all  views in the associated environment to have standard size and position controls
- [mapFeatureSelectionAccessory(_:)](/documentation/swiftui/view/mapfeatureselectionaccessory(_:)) Specifies the selection accessory to display for a 
- [mapFeatureSelectionContent(content:)](/documentation/swiftui/view/mapfeatureselectioncontent(content:)) Specifies a custom presentation for the currently selected feature.
- [mapFeatureSelectionDisabled(_:)](/documentation/swiftui/view/mapfeatureselectiondisabled(_:)) Specifies which map features should have selection disabled.
- [mapItemDetailPopover(isPresented:item:displaysMap:attachmentAnchor:)](/documentation/swiftui/view/mapitemdetailpopover(ispresented:item:displaysmap:attachmentanchor:)) Presents a map item detail popover.
- [mapItemDetailPopover(isPresented:item:displaysMap:attachmentAnchor:arrowEdge:)](/documentation/swiftui/view/mapitemdetailpopover(ispresented:item:displaysmap:attachmentanchor:arrowedge:)) Presents a map item detail popover.
- [mapItemDetailPopover(item:displaysMap:attachmentAnchor:)](/documentation/swiftui/view/mapitemdetailpopover(item:displaysmap:attachmentanchor:)) Presents a map item detail popover.
- [mapItemDetailPopover(item:displaysMap:attachmentAnchor:arrowEdge:)](/documentation/swiftui/view/mapitemdetailpopover(item:displaysmap:attachmentanchor:arrowedge:)) Presents a map item detail popover.
- [mapItemDetailSheet(isPresented:item:displaysMap:)](/documentation/swiftui/view/mapitemdetailsheet(ispresented:item:displaysmap:)) Presents a map item detail sheet.
- [mapItemDetailSheet(item:displaysMap:)](/documentation/swiftui/view/mapitemdetailsheet(item:displaysmap:)) Presents a map item detail sheet.
- [mapScope(_:)](/documentation/swiftui/view/mapscope(_:)) Creates a mapScope that SwiftUI uses to connect map controls to an associated map.
- [mapStyle(_:)](/documentation/swiftui/view/mapstyle(_:)) Specifies the map style to be used.
- [matchedTransitionSource(id:in:)](/documentation/swiftui/view/matchedtransitionsource(id:in:)) Identifies this view as the source of a navigation transition, such as a zoom transition.
- [matchedTransitionSource(id:in:configuration:)](/documentation/swiftui/view/matchedtransitionsource(id:in:configuration:)) Identifies this view as the source of a navigation transition, such as a zoom transition.
- [materialActiveAppearance(_:)](/documentation/swiftui/view/materialactiveappearance(_:)) Sets an explicit active appearance for materials in this view.
- [multilineTextAlignment(strategy:)](/documentation/swiftui/view/multilinetextalignment(strategy:)) A modifier for the default text alignment strategy in the view hierarchy.
- [navigationLinkIndicatorVisibility(_:)](/documentation/swiftui/view/navigationlinkindicatorvisibility(_:)) Configures whether navigation links show a disclosure indicator.
- [navigationTransition(_:)](/documentation/swiftui/view/navigationtransition(_:)) Sets the navigation transition style for this view.
- [onAppIntentExecution(_:perform:)](/documentation/swiftui/view/onappintentexecution(_:perform:)) Registers a handler to invoke in response to the specified app intent that your app receives.
- [onApplePayCouponCodeChange(perform:)](/documentation/swiftui/view/onapplepaycouponcodechange(perform:)) Called when a user has entered or updated a coupon code. This is required if the user is being asked to provide a coupon code.
- [onApplePayPaymentMethodChange(perform:)](/documentation/swiftui/view/onapplepaypaymentmethodchange(perform:)) Called when a payment method has changed and asks for an update payment request. If this modifier isn’t provided Wallet will assume the payment method is valid.
- [onApplePayShippingContactChange(perform:)](/documentation/swiftui/view/onapplepayshippingcontactchange(perform:)) Called when a user selected a shipping address. This is required if the user is being asked to provide a shipping contact.
- [onApplePayShippingMethodChange(perform:)](/documentation/swiftui/view/onapplepayshippingmethodchange(perform:)) Called when a user selected a shipping method. This is required if the user is being asked to provide a shipping method.
- [onCameraCaptureEvent(isEnabled:defaultSoundDisabled:action:)](/documentation/swiftui/view/oncameracaptureevent(isenabled:defaultsounddisabled:action:)) Used to register an action triggered by system capture events.
- [onCameraCaptureEvent(isEnabled:defaultSoundDisabled:primaryAction:secondaryAction:)](/documentation/swiftui/view/oncameracaptureevent(isenabled:defaultsounddisabled:primaryaction:secondaryaction:)) Used to register actions triggered by system capture events.
- [onDragSessionUpdated(_:)](/documentation/swiftui/view/ondragsessionupdated(_:)) Specifies an action to perform on each update of an ongoing dragging operation activated by  or anther drag modifiers.
- [onDropSessionUpdated(_:)](/documentation/swiftui/view/ondropsessionupdated(_:)) Specifies an action to perform on each update of an ongoing drop operation activated by  or other drop modifiers.
- [onGeometryChange3D(for:of:action:)](/documentation/swiftui/view/ongeometrychange3d(for:of:action:)) Returns a new view that arranges to call  whenever the value computed by  changes, where  provides access to the view’s 3D geometry properties.
- [onInAppPurchaseCompletion(perform:)](/documentation/swiftui/view/oninapppurchasecompletion(perform:)) Add an action to perform when a purchase initiated from a StoreKit view within this view completes.
- [onInAppPurchaseStart(perform:)](/documentation/swiftui/view/oninapppurchasestart(perform:)) Add an action to perform when a user triggers the purchase button on a StoreKit view within this view.
- [onInteractiveResizeChange(_:)](/documentation/swiftui/view/oninteractiveresizechange(_:)) Adds an action to perform when the enclosing window is being interactively resized.
- [onMapCameraChange(frequency:_:)](/documentation/swiftui/view/onmapcamerachange(frequency:_:)) Performs an action when Map camera framing changes
- [onOpenURL(prefersInApp:)](/documentation/swiftui/view/onopenurl(prefersinapp:)) Sets an  that prefers opening URL with an in-app browser. It’s equivalent to calling 
- [onWorldRecenter(action:)](/documentation/swiftui/view/onworldrecenter(action:)) Adds an action to perform when recentering the view with the digital crown.
- [payLaterViewAction(_:)](/documentation/swiftui/view/paylaterviewaction(_:)) Sets the action on the PayLaterView. See .
- [payLaterViewDisplayStyle(_:)](/documentation/swiftui/view/paylaterviewdisplaystyle(_:)) Sets the display style on the PayLaterView. See .
- [payWithApplePayButtonDisableCardArt()](/documentation/swiftui/view/paywithapplepaybuttondisablecardart()) Sets the features that should be allowed to show on the payment buttons.
- [payWithApplePayButtonStyle(_:)](/documentation/swiftui/view/paywithapplepaybuttonstyle(_:)) Sets the style to be used by the button. (see ).
- [popoverTip(_:arrowEdge:action:)](/documentation/swiftui/view/popovertip(_:arrowedge:action:)) Presents a popover tip on the modified view.
- [popoverTip(_:isPresented:attachmentAnchor:arrowEdge:action:)](/documentation/swiftui/view/popovertip(_:ispresented:attachmentanchor:arrowedge:action:)) Presents a popover tip on the modified view.
- [popoverTip(_:isPresented:attachmentAnchor:arrowEdges:action:)](/documentation/swiftui/view/popovertip(_:ispresented:attachmentanchor:arrowedges:action:)) Presents a popover tip on the modified view.
- [postToPhotosSharedAlbumSheet(isPresented:items:photoLibrary:defaultAlbumIdentifier:completion:)](/documentation/swiftui/view/posttophotossharedalbumsheet(ispresented:items:photolibrary:defaultalbumidentifier:completion:)) Presents an “Add to Shared Album” sheet that allows the user to post the given items to a shared album.
- [preferredSubscriptionOffer(_:)](/documentation/swiftui/view/preferredsubscriptionoffer(_:)) Selects a subscription offer to apply to a purchase that a customer makes from a subscription store view, a store view, or a product view.
- [preferredWindowClippingMargins(_:_:)](/documentation/swiftui/view/preferredwindowclippingmargins(_:_:)) Requests additional margins for drawing beyond the bounds of the window.
- [presentationBreakthroughEffect(_:)](/documentation/swiftui/view/presentationbreakthrougheffect(_:)) Changes the way the enclosing presentation breaks through content occluding it.
- [presentationPreventsAppTermination(_:)](/documentation/swiftui/view/presentationpreventsapptermination(_:)) Whether a presentation prevents the app from being terminated/quit by the system or app termination menu item.
- [productDescription(_:)](/documentation/swiftui/view/productdescription(_:)) Configure the visibility of labels displaying an in-app purchase product description within the view.
- [productIconBorder()](/documentation/swiftui/view/producticonborder()) Adds a standard border to an in-app purchase product’s icon .
- [productViewStyle(_:)](/documentation/swiftui/view/productviewstyle(_:)) Sets the style for In-App Purchase product views within a view.
- [realityViewCameraControls(_:)](/documentation/swiftui/view/realityviewcameracontrols(_:)) Adds gestures that control the position and direction of a virtual camera.
- [realityViewLayoutBehavior(_:)](/documentation/swiftui/view/realityviewlayoutbehavior(_:)) A view modifier that controls the frame sizing and content alignment behavior for 
- [rotation3DLayout(_:)](/documentation/swiftui/view/rotation3dlayout(_:)) Rotates a view with impacts to its frame in a containing layout
- [rotation3DLayout(_:axis:)](/documentation/swiftui/view/rotation3dlayout(_:axis:)) Rotates a view with impacts to its frame in a containing layout
- [safeAreaBar(edge:alignment:spacing:content:)](/documentation/swiftui/view/safeareabar(edge:alignment:spacing:content:)) Shows the specified content as a custom bar beside the modified view.
- [scaledToFill3D()](/documentation/swiftui/view/scaledtofill3d()) Scales this view to fill its parent.
- [scaledToFit3D()](/documentation/swiftui/view/scaledtofit3d()) Scales this view to fit its parent.
- [scrollEdgeEffectHidden(_:for:)](/documentation/swiftui/view/scrolledgeeffecthidden(_:for:)) Hides any scroll edge effects for scroll views within this hierarchy.
- [scrollEdgeEffectStyle(_:for:)](/documentation/swiftui/view/scrolledgeeffectstyle(_:for:)) Configures the scroll edge effect style for scroll views within this hierarchy.
- [scrollInputBehavior(_:for:)](/documentation/swiftui/view/scrollinputbehavior(_:for:)) Enables or disables scrolling in scrollable views when using particular inputs.
- [searchSelection(_:)](/documentation/swiftui/view/searchselection(_:)) Binds the selection of the search field associated with the nearest searchable modifier to the given  value.
- [searchToolbarBehavior(_:)](/documentation/swiftui/view/searchtoolbarbehavior(_:)) Configures the behavior for search in the toolbar.
- [sectionIndexLabel(_:)](/documentation/swiftui/view/sectionindexlabel(_:)) Sets the label that is used in a section index to point to this section, typically only a single character long.
- [signInWithAppleButtonStyle(_:)](/documentation/swiftui/view/signinwithapplebuttonstyle(_:)) Sets the style used for displaying the control (see ).
- [sliderThumbVisibility(_:)](/documentation/swiftui/view/sliderthumbvisibility(_:)) Sets the thumb visibility for s within this view.
- [spatialOverlay(alignment:content:)](/documentation/swiftui/view/spatialoverlay(alignment:content:)) Adds secondary views within the 3D bounds of this view.
- [spatialOverlayPreferenceValue(_:alignment:_:)](/documentation/swiftui/view/spatialoverlaypreferencevalue(_:alignment:_:)) Uses the specified preference value from the view to produce another view occupying the same 3D space of the first view.
- [storeButton(_:for:)](/documentation/swiftui/view/storebutton(_:for:)) Specifies the visibility of auxiliary buttons that store view and subscription store view instances may use.
- [storeProductTask(for:priority:action:)](/documentation/swiftui/view/storeproducttask(for:priority:action:)) Declares the view as dependent on an In-App Purchase product and returns a modified view.
- [storeProductsTask(for:priority:action:)](/documentation/swiftui/view/storeproductstask(for:priority:action:)) Declares the view as dependent on a collection of In-App Purchase products and returns a modified view.
- [subscriptionIntroductoryOffer(applyOffer:compactJWS:)](/documentation/swiftui/view/subscriptionintroductoryoffer(applyoffer:compactjws:)) Selects the introductory offer eligibility preference to apply to a purchase a customer makes from a subscription store view.
- [subscriptionOfferViewButtonVisibility(_:for:)](/documentation/swiftui/view/subscriptionofferviewbuttonvisibility(_:for:))
- [subscriptionOfferViewDetailAction(_:)](/documentation/swiftui/view/subscriptionofferviewdetailaction(_:))
- [subscriptionOfferViewStyle(_:)](/documentation/swiftui/view/subscriptionofferviewstyle(_:))
- [subscriptionPromotionalOffer(offer:compactJWS:)](/documentation/swiftui/view/subscriptionpromotionaloffer(offer:compactjws:)) Selects a promotional offer to apply to a purchase a customer makes from a subscription store view.
- [subscriptionPromotionalOffer(offer:signature:)](/documentation/swiftui/view/subscriptionpromotionaloffer(offer:signature:)) Selects a promotional offer to apply to a purchase a customer makes from a subscription store view.
- [subscriptionStatusTask(for:priority:action:)](/documentation/swiftui/view/subscriptionstatustask(for:priority:action:)) Declares the view as dependent on the status of an auto-renewable subscription group, and returns a modified view.
- [subscriptionStoreButtonLabel(_:)](/documentation/swiftui/view/subscriptionstorebuttonlabel(_:)) Configures subscription store view instances within a view to use the provided button label.
- [subscriptionStoreControlBackground(_:)](/documentation/swiftui/view/subscriptionstorecontrolbackground(_:)) Set a standard effect to use for the background of subscription store view controls within the view.
- [subscriptionStoreControlIcon(icon:)](/documentation/swiftui/view/subscriptionstorecontrolicon(icon:)) Sets a view to use to decorate individual subscription options within a subscription store view.
- [subscriptionStoreControlStyle(_:)](/documentation/swiftui/view/subscriptionstorecontrolstyle(_:)) Sets the control style for subscription store views within a view.
- [subscriptionStoreControlStyle(_:placement:)](/documentation/swiftui/view/subscriptionstorecontrolstyle(_:placement:)) Sets the control style and control placement for subscription store views within a view.
- [subscriptionStoreOptionGroupStyle(_:)](/documentation/swiftui/view/subscriptionstoreoptiongroupstyle(_:)) Sets the style subscription store views within this view use to display groups of subscription options.
- [subscriptionStorePickerItemBackground(_:)](/documentation/swiftui/view/subscriptionstorepickeritembackground(_:)) Sets the background style for picker items of the subscription store view instances within a view.
- [subscriptionStorePickerItemBackground(_:in:)](/documentation/swiftui/view/subscriptionstorepickeritembackground(_:in:)) Sets the background shape and style for subscription store view picker items within a view.
- [subscriptionStorePolicyDestination(for:destination:)](/documentation/swiftui/view/subscriptionstorepolicydestination(for:destination:)) Configures a view as the destination for a policy button action in subscription store views.
- [subscriptionStorePolicyDestination(url:for:)](/documentation/swiftui/view/subscriptionstorepolicydestination(url:for:)) Configures a URL as the destination for a policy button action in subscription store views.
- [subscriptionStorePolicyForegroundStyle(_:)](/documentation/swiftui/view/subscriptionstorepolicyforegroundstyle(_:)) Sets the style for the terms of service and privacy policy buttons within a subscription store view.
- [subscriptionStorePolicyForegroundStyle(_:_:)](/documentation/swiftui/view/subscriptionstorepolicyforegroundstyle(_:_:)) Sets the primary and secondary style for the terms of service and privacy policy buttons within a subscription store view.
- [subscriptionStoreSignInAction(_:)](/documentation/swiftui/view/subscriptionstoresigninaction(_:)) Adds an action to perform when a person uses the sign-in button on a subscription store view within a view.
- [symbolColorRenderingMode(_:)](/documentation/swiftui/view/symbolcolorrenderingmode(_:)) Sets the color rendering mode for symbol images.
- [symbolVariableValueMode(_:)](/documentation/swiftui/view/symbolvariablevaluemode(_:)) Sets the variable value mode mode for symbol images within this view.
- [tabBarMinimizeBehavior(_:)](/documentation/swiftui/view/tabbarminimizebehavior(_:)) Sets the behavior for tab bar minimization.
- [tabViewBottomAccessory(content:)](/documentation/swiftui/view/tabviewbottomaccessory(content:)) Places a view as the bottom accessory of the tab view.
- [tabViewBottomAccessory(isEnabled:content:)](/documentation/swiftui/view/tabviewbottomaccessory(isenabled:content:)) Places a view as the bottom accessory of the tab view. Use this modifier to dynamically show and hide the accessory view.
- [tabViewSearchActivation(_:)](/documentation/swiftui/view/tabviewsearchactivation(_:)) Configures the activation and deactivation behavior of search in the search tab.
- [tabletopGame(_:parent:automaticUpdate:)](/documentation/swiftui/view/tabletopgame(_:parent:automaticupdate:)) Adds a tabletop game to a view.
- [tabletopGame(_:parent:automaticUpdate:interaction:)](/documentation/swiftui/view/tabletopgame(_:parent:automaticupdate:interaction:)) Supplies a closure which returns a new interaction whenever needed.
- [task(id:name:executorPreference:priority:file:line:_:)](/documentation/swiftui/view/task(id:name:executorpreference:priority:file:line:_:)) Adds a task to perform before this view appears or when a specified value changes.
- [textContentType(_:)](/documentation/swiftui/view/textcontenttype(_:)) Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on macOS.
- [textInputFormattingControlVisibility(_:for:)](/documentation/swiftui/view/textinputformattingcontrolvisibility(_:for:)) Define which system text formatting controls are available.
- [textRenderer(_:)](/documentation/swiftui/view/textrenderer(_:)) Returns a new view such that any text views within it will use  to draw themselves.
- [textSelectionAffinity(_:)](/documentation/swiftui/view/textselectionaffinity(_:)) Sets the direction of a selection or cursor relative to a text character.
- [tipAnchor(_:)](/documentation/swiftui/view/tipanchor(_:)) Sets a value for the specified tip anchor to be used to anchor a tip view to the  of the view.
- [tipBackground(_:)](/documentation/swiftui/view/tipbackground(_:)) Sets the tip’s view background to a style. Currently this only applies to inline tips, not popover tips.
- [tipBackgroundInteraction(_:)](/documentation/swiftui/view/tipbackgroundinteraction(_:)) Controls whether people can interact with the view behind a presented tip.
- [tipCornerRadius(_:antialiased:)](/documentation/swiftui/view/tipcornerradius(_:antialiased:)) Sets the corner radius for an inline tip view.
- [tipImageSize(_:)](/documentation/swiftui/view/tipimagesize(_:)) Sets the size for a tip’s image.
- [tipImageStyle(_:)](/documentation/swiftui/view/tipimagestyle(_:)) Sets the style for a tip’s image.
- [tipImageStyle(_:_:)](/documentation/swiftui/view/tipimagestyle(_:_:)) Sets the style for a tip’s image.
- [tipImageStyle(_:_:_:)](/documentation/swiftui/view/tipimagestyle(_:_:_:)) Sets the style for a tip’s image.
- [tipViewStyle(_:)](/documentation/swiftui/view/tipviewstyle(_:)) Sets the given style for TipView within the view hierarchy.
- [toolbarItemHidden(_:)](/documentation/swiftui/view/toolbaritemhidden(_:)) Hides an individual view within a control group toolbar item.
- [transactionPicker(isPresented:selection:)](/documentation/swiftui/view/transactionpicker(ispresented:selection:)) Presents a picker that selects a collection of transactions.
- [transactionTask(_:action:)](/documentation/swiftui/view/transactiontask(_:action:)) Provides a task to perform before this view appears
- [translationPresentation(isPresented:text:attachmentAnchor:arrowEdge:replacementAction:)](/documentation/swiftui/view/translationpresentation(ispresented:text:attachmentanchor:arrowedge:replacementaction:)) Presents a translation popover when a given condition is true.
- [translationTask(_:action:)](/documentation/swiftui/view/translationtask(_:action:)) Adds a task to perform before this view appears or when the translation configuration changes.
- [translationTask(source:target:action:)](/documentation/swiftui/view/translationtask(source:target:action:)) Adds a task to perform before this view appears or when the specified source or target languages change.
- [verifyIdentityWithWalletButtonStyle(_:)](/documentation/swiftui/view/verifyidentitywithwalletbuttonstyle(_:)) Sets the style to be used by the button. (see ).
- [webViewBackForwardNavigationGestures(_:)](/documentation/swiftui/view/webviewbackforwardnavigationgestures(_:)) Determines whether horizontal swipe gestures trigger backward and forward page navigation.
- [webViewContentBackground(_:)](/documentation/swiftui/view/webviewcontentbackground(_:)) Specifies the visibility of the webpage’s natural background color within this view.
- [webViewContextMenu(menu:)](/documentation/swiftui/view/webviewcontextmenu(menu:)) Adds an item-based context menu to a WebView, replacing the default set of context menu items.
- [webViewElementFullscreenBehavior(_:)](/documentation/swiftui/view/webviewelementfullscreenbehavior(_:)) Determines whether a web view can display content full screen.
- [webViewLinkPreviews(_:)](/documentation/swiftui/view/webviewlinkpreviews(_:)) Determines whether pressing a link displays a preview of the destination for the link.
- [webViewMagnificationGestures(_:)](/documentation/swiftui/view/webviewmagnificationgestures(_:)) Determines whether magnify gestures change the view’s magnification.
- [webViewOnScrollGeometryChange(for:of:action:)](/documentation/swiftui/view/webviewonscrollgeometrychange(for:of:action:)) Adds an action to be performed when a value, created from a scroll geometry, changes.
- [webViewScrollInputBehavior(_:for:)](/documentation/swiftui/view/webviewscrollinputbehavior(_:for:)) Enables or disables scrolling in web views when using particular inputs.
- [webViewScrollPosition(_:)](/documentation/swiftui/view/webviewscrollposition(_:)) Associates a binding to a scroll position with the web view.
- [webViewTextSelection(_:)](/documentation/swiftui/view/webviewtextselection(_:)) Determines whether to allow people to select or otherwise interact with text.
- [windowResizeAnchor(_:)](/documentation/swiftui/view/windowresizeanchor(_:)) Sets the window anchor point used when the size of the view changes such that the window must resize.
- [windowToolbarFullScreenVisibility(_:)](/documentation/swiftui/view/windowtoolbarfullscreenvisibility(_:)) Configures the visibility of the window toolbar when the window enters full screen mode.
- [workoutPreview(_:isPresented:)](/documentation/swiftui/view/workoutpreview(_:ispresented:)) Presents a preview of the workout contents as a modal sheet
- [writingDirection(strategy:)](/documentation/swiftui/view/writingdirection(strategy:)) A modifier for the default text writing direction strategy in the view hierarchy.
- [writingToolsAffordanceVisibility(_:)](/documentation/swiftui/view/writingtoolsaffordancevisibility(_:)) Specifies whether the system should show the Writing Tools affordance for text input views affected by the environment.
- [writingToolsBehavior(_:)](/documentation/swiftui/view/writingtoolsbehavior(_:)) Specifies the Writing Tools behavior for text and text input in the environment.

## Creating a view

- [Declaring a custom view](/documentation/swiftui/declaring-a-custom-view)
- [ViewBuilder](/documentation/swiftui/viewbuilder)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
