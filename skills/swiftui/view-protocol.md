---
title: View
description: A type that represents part of your app’s user interface and provides modifiers that you use to configure views.
source: https://developer.apple.com/documentation/swiftui/view
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/documentation/swiftui/view.json
timestamp: 2026-06-26T06:39:36.848Z
---

**Navigation:** [SwiftUI](/documentation/swiftui)

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

Assemble the view’s body by combining one or more of the built-in views provided by SwiftUI, like the [Text](/documentation/swiftui/text) instance in the example above, plus other custom views that you define, into a hierarchy of views. For more information about creating custom views, see [Declaring a custom view](/documentation/swiftui/declaring-a-custom-view).

The `View` protocol provides a set of modifiers — protocol methods with default implementations — that you use to configure views in the layout of your app. Modifiers work by wrapping the view instance on which you call them in another view with the specified characteristics, as described in [Configuring views](/documentation/swiftui/configuring-views). For example, adding the [opacity(_:)](/documentation/swiftui/view/opacity(_:)) modifier to a text view returns a new view with some amount of transparency:

```swift
Text("Hello, World!")
    .opacity(0.5) // Display partially transparent text.
```

The complete list of default modifiers provides a large set of controls for managing views. For example, you can fine tune [Layout modifiers](/documentation/swiftui/view-layout), add [Accessibility modifiers](/documentation/swiftui/view-accessibility) information, and respond to [Input and event modifiers](/documentation/swiftui/view-input-and-events). You can also collect groups of default modifiers into new, custom view modifiers for easy reuse.

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
- [DefaultNewDocumentButtonLabel](/documentation/swiftui/defaultnewdocumentbuttonlabel)
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
- [NavigationView](/documentation/swiftui/navigationview)
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
- [TextInputBorderShape](/documentation/swiftui/textinputbordershape)
- [TimelineView](/documentation/swiftui/timelineview)
- [Toggle](/documentation/swiftui/toggle)
- [ToggleStyleConfiguration.Label](/documentation/swiftui/togglestyleconfiguration/label-swift.struct)
- [TransformedShape](/documentation/swiftui/transformedshape)
- [TupleContent](/documentation/swiftui/tuplecontent)
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

## Modifying technology-specific views

- [Technology-specific modifiers](/documentation/swiftui/view-technology-modifiers) Add modifiers to customize SwiftUI views that other Apple frameworks provide.

## Deprecated modifiers

- [Deprecated modifiers](/documentation/swiftui/view-deprecated) Review unsupported modifiers and their replacements.

## Creating a view

- [Declaring a custom view](/documentation/swiftui/declaring-a-custom-view) Define views and assemble them into a view hierarchy.
- [Wishlist: Planning travel in a SwiftUI app](/documentation/swiftui/wishlist-planning-travel-in-a-swiftui-app) Build a travel planning app that organizes trips into collections and tracks activity completion.
- [ContentBuilder](/documentation/swiftui/contentbuilder) A custom parameter attribute that constructs views and other content types from closures.
- [ViewBuilder](/documentation/swiftui/viewbuilder) A custom parameter attribute that constructs views from closures.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*
