---
title: Swift Charts
source: https://developer.apple.com/documentation/charts
timestamp: 2026-01-19T10:22:44.174Z
---

## Essentials

- [Swift Charts updates](/documentation/updates/swiftcharts)

## Charts

- [Creating a chart using Swift Charts](/documentation/charts/creating-a-chart-using-swift-charts)
- [Visualizing your app’s data](/documentation/charts/visualizing-your-app-s-data)
- [Chart](/documentation/charts/chart)

### Creating a chart

- [init(content: () -> Content)](/documentation/charts/chart/init(content:))
- [init<Data, C>(Data, content: (Data.Element) -> C)](/documentation/charts/chart/init(_:content:))
- [init<Data, ID, C>(Data, id: KeyPath<Data.Element, ID>, content: (Data.Element) -> C)](/documentation/charts/chart/init(_:id:content:))

### Supporting types

- [var body: Self.Body](/documentation/charts/chartcontent/body-swift.property)
- [ChartContent](/documentation/charts/chartcontent)

### Styling marks

- [func foregroundStyle<S>(S) -> some ChartContent](/documentation/charts/chartcontent/foregroundstyle(_:))
- [func opacity(Double) -> some ChartContent](/documentation/charts/chartcontent/opacity(_:))
- [func blur(radius: CGFloat) -> some ChartContent](/documentation/charts/chartcontent/blur(radius:))
- [func cornerRadius(CGFloat, style: RoundedCornerStyle) -> some ChartContent](/documentation/charts/chartcontent/cornerradius(_:style:))
- [func lineStyle(StrokeStyle) -> some ChartContent](/documentation/charts/chartcontent/linestyle(_:))
- [func shadow(color: Color, radius: CGFloat, x: CGFloat, y: CGFloat) -> some ChartContent](/documentation/charts/chartcontent/shadow(color:radius:x:y:))
- [func interpolationMethod(InterpolationMethod) -> some ChartContent](/documentation/charts/chartcontent/interpolationmethod(_:))

### Positioning marks

- [func offset(CGSize) -> some ChartContent](/documentation/charts/chartcontent/offset(_:))
- [func offset(x: CGFloat, y: CGFloat) -> some ChartContent](/documentation/charts/chartcontent/offset(x:y:))
- [func offset(x: CGFloat, yStart: CGFloat, yEnd: CGFloat) -> some ChartContent](/documentation/charts/chartcontent/offset(x:ystart:yend:))
- [func offset(xStart: CGFloat, xEnd: CGFloat, y: CGFloat) -> some ChartContent](/documentation/charts/chartcontent/offset(xstart:xend:y:))
- [func offset(xStart: CGFloat, xEnd: CGFloat, yStart: CGFloat, yEnd: CGFloat) -> some ChartContent](/documentation/charts/chartcontent/offset(xstart:xend:ystart:yend:))
- [func alignsMarkStylesWithPlotArea(Bool) -> some ChartContent](/documentation/charts/chartcontent/alignsmarkstyleswithplotarea(_:))

### Setting symbol appearance

- [func symbol<S>(S) -> some ChartContent](/documentation/charts/chartcontent/symbol(_:))
- [func symbol<V>(symbol: () -> V) -> some ChartContent](/documentation/charts/chartcontent/symbol(symbol:))
- [func symbolSize(CGSize) -> some ChartContent](/documentation/charts/chartcontent/symbolsize(_:)-7s0vk)
- [func symbolSize(CGFloat) -> some ChartContent](/documentation/charts/chartcontent/symbolsize(_:)-8dtyt)

### Encoding data into mark characteristics

- [func foregroundStyle<D>(by: PlottableValue<D>) -> some ChartContent](/documentation/charts/chartcontent/foregroundstyle(by:))
- [func lineStyle<D>(by: PlottableValue<D>) -> some ChartContent](/documentation/charts/chartcontent/linestyle(by:))
- [func position<P>(by: PlottableValue<P>, axis: Axis?, span: MarkDimension) -> some ChartContent](/documentation/charts/chartcontent/position(by:axis:span:))
- [func symbol<D>(by: PlottableValue<D>) -> some ChartContent](/documentation/charts/chartcontent/symbol(by:))
- [func symbolSize<D>(by: PlottableValue<D>) -> some ChartContent](/documentation/charts/chartcontent/symbolsize(by:))

### Annotating marks

- [func annotation<C>(position: AnnotationPosition, alignment: Alignment, spacing: CGFloat?, content: () -> C) -> some ChartContent](/documentation/charts/chartcontent/annotation(position:alignment:spacing:content:)-65emh)
- [func annotation<C>(position: AnnotationPosition, alignment: Alignment, spacing: CGFloat?, content: (AnnotationContext) -> C) -> some ChartContent](/documentation/charts/chartcontent/annotation(position:alignment:spacing:content:)-26b2f)
- [func annotation<C>(position: AnnotationPosition, alignment: Alignment, spacing: CGFloat?, overflowResolution: AnnotationOverflowResolution, content: () -> C) -> some ChartContent](/documentation/charts/chartcontent/annotation(position:alignment:spacing:overflowresolution:content:)-1kiow)
- [func annotation<C>(position: AnnotationPosition, alignment: Alignment, spacing: CGFloat?, overflowResolution: AnnotationOverflowResolution, content: (AnnotationContext) -> C) -> some ChartContent](/documentation/charts/chartcontent/annotation(position:alignment:spacing:overflowresolution:content:)-6w4p3)

### Layering chart content

- [func compositingLayer() -> some ChartContent](/documentation/charts/chartcontent/compositinglayer())
- [func compositingLayer<V>(style: (PlaceholderContentView<Self>) -> V) -> some ChartContent](/documentation/charts/chartcontent/compositinglayer(style:))
- [func zIndex(Double) -> some ChartContent](/documentation/charts/chartcontent/zindex(_:))

### Masking and clipping

- [func mask<C>(content: () -> C) -> some ChartContent](/documentation/charts/chartcontent/mask(content:))
- [func clipShape(some Shape, style: FillStyle) -> some ChartContent](/documentation/charts/chartcontent/clipshape(_:style:))

### Configuring accessibility

- [func accessibilityHidden(Bool) -> some ChartContent](/documentation/charts/chartcontent/accessibilityhidden(_:))
- [func accessibilityIdentifier(String) -> some ChartContent](/documentation/charts/chartcontent/accessibilityidentifier(_:))
- [func accessibilityLabel(LocalizedStringKey) -> some ChartContent](/documentation/charts/chartcontent/accessibilitylabel(_:)-40zjp)
- [func accessibilityLabel<S>(S) -> some ChartContent](/documentation/charts/chartcontent/accessibilitylabel(_:)-5gk8d)
- [func accessibilityLabel(Text) -> some ChartContent](/documentation/charts/chartcontent/accessibilitylabel(_:)-28985)
- [func accessibilityLabel(LocalizedStringResource) -> some ChartContent](/documentation/charts/chartcontent/accessibilitylabel(_:)-9tbjv)
- [func accessibilityValue(LocalizedStringKey) -> some ChartContent](/documentation/charts/chartcontent/accessibilityvalue(_:)-33c0e)
- [func accessibilityValue<S>(S) -> some ChartContent](/documentation/charts/chartcontent/accessibilityvalue(_:)-4k545)
- [func accessibilityValue(Text) -> some ChartContent](/documentation/charts/chartcontent/accessibilityvalue(_:)-5g7o4)
- [func accessibilityValue(LocalizedStringResource) -> some ChartContent](/documentation/charts/chartcontent/accessibilityvalue(_:)-4f8vo)

### Implementing chart content

- [var body: Self.Body](/documentation/charts/chartcontent/body-swift.property)
- [Body](/documentation/charts/chartcontent/body-swift.associatedtype)

### Supporting types

- [AnyChartContent](/documentation/charts/anychartcontent)

#### Initializers

- [init(any ChartContent)](/documentation/charts/anychartcontent/init(_:))
- [init(erasing: some ChartContent)](/documentation/charts/anychartcontent/init(erasing:))
- [ChartContentBuilder](/documentation/charts/chartcontentbuilder)

### Building chart content

- [static func buildPartialBlock<T>(first: T) -> T](/documentation/charts/chartcontentbuilder/buildpartialblock(first:))
- [static func buildPartialBlock(accumulated: some ChartContent, next: some ChartContent) -> some ChartContent](/documentation/charts/chartcontentbuilder/buildpartialblock(accumulated:next:))
- [static func buildBlock() -> some ChartContent](/documentation/charts/chartcontentbuilder/buildblock())

### Building conditionally

- [static func buildIf<T>(T?) -> T?](/documentation/charts/chartcontentbuilder/buildif(_:))
- [static func buildEither<T1, T2>(first: T1) -> BuilderConditional<T1, T2>](/documentation/charts/chartcontentbuilder/buildeither(first:))
- [static func buildEither<T1, T2>(second: T2) -> BuilderConditional<T1, T2>](/documentation/charts/chartcontentbuilder/buildeither(second:))

### Building with conditional availability

- [static func buildLimitedAvailability(some ChartContent) -> AnyChartContent](/documentation/charts/chartcontentbuilder/buildlimitedavailability(_:))

### Supporting types

- [BuilderConditional](/documentation/charts/builderconditional)

### Type Methods

- [static func buildBlock<each C>(repeat each C) -> some ChartContent](/documentation/charts/chartcontentbuilder/buildblock(_:)-51ukk)
- [static func buildBlock<C>(C) -> C](/documentation/charts/chartcontentbuilder/buildblock(_:)-797vj)
- [static func buildExpression<Content>(Content) -> Content](/documentation/charts/chartcontentbuilder/buildexpression(_:))
- [Plot](/documentation/charts/plot)

### Initializers

- [init(content: () -> Content)](/documentation/charts/plot/init(content:))

## 3D charts

- [Chart3D](/documentation/charts/chart3d)

### Creating 3D charts

- [init<Data, C>(Data, content: (Data.Element) -> C)](/documentation/charts/chart3d/init(_:content:))
- [init<Data, ID, C>(Data, id: KeyPath<Data.Element, ID>, content: (Data.Element) -> C)](/documentation/charts/chart3d/init(_:id:content:))
- [init(content: () -> Content)](/documentation/charts/chart3d/init(content:))

### Configuring chart shapes

- [Chart3DSymbolShape](/documentation/charts/chart3dsymbolshape)

#### Type Properties

- [static var cone: BasicChart3DSymbolShape](/documentation/charts/chart3dsymbolshape/cone)
- [static var cube: BasicChart3DSymbolShape](/documentation/charts/chart3dsymbolshape/cube)
- [static var cylinder: BasicChart3DSymbolShape](/documentation/charts/chart3dsymbolshape/cylinder)
- [static var sphere: BasicChart3DSymbolShape](/documentation/charts/chart3dsymbolshape/sphere)
- [BasicChart3DSymbolShape](/documentation/charts/basicchart3dsymbolshape)

### Configuring surfaces

- [Chart3DSurfaceStyle](/documentation/charts/chart3dsurfacestyle)

#### Type Properties

- [static var heightBased: BasicChart3DSurfaceStyle](/documentation/charts/chart3dsurfacestyle/heightbased)
- [static var normalBased: BasicChart3DSurfaceStyle](/documentation/charts/chart3dsurfacestyle/normalbased)

#### Type Methods

- [static func heightBased(Gradient, yRange: ClosedRange<CGFloat>?) -> Self](/documentation/charts/chart3dsurfacestyle/heightbased(_:yrange:))
- [static func heightBased(yRange: ClosedRange<CGFloat>) -> Self](/documentation/charts/chart3dsurfacestyle/heightbased(yrange:))
- [BasicChart3DSurfaceStyle](/documentation/charts/basicchart3dsurfacestyle)

### Customizing chart presentation

- [Chart3DCameraProjection](/documentation/charts/chart3dcameraprojection)

#### Type Properties

- [static var automatic: Chart3DCameraProjection](/documentation/charts/chart3dcameraprojection/automatic)
- [static var orthographic: Chart3DCameraProjection](/documentation/charts/chart3dcameraprojection/orthographic)
- [static var perspective: Chart3DCameraProjection](/documentation/charts/chart3dcameraprojection/perspective)
- [Chart3DPose](/documentation/charts/chart3dpose)

#### Initializers

- [init(azimuth: Angle2D, inclination: Angle2D)](/documentation/charts/chart3dpose/init(azimuth:inclination:))

#### Instance Properties

- [var azimuth: Angle2D](/documentation/charts/chart3dpose/azimuth)
- [var inclination: Angle2D](/documentation/charts/chart3dpose/inclination)

#### Type Properties

- [static var back: Chart3DPose](/documentation/charts/chart3dpose/back)
- [static var bottom: Chart3DPose](/documentation/charts/chart3dpose/bottom)
- [static var `default`: Chart3DPose](/documentation/charts/chart3dpose/default)
- [static var front: Chart3DPose](/documentation/charts/chart3dpose/front)
- [static var left: Chart3DPose](/documentation/charts/chart3dpose/left)
- [static var right: Chart3DPose](/documentation/charts/chart3dpose/right)
- [static var top: Chart3DPose](/documentation/charts/chart3dpose/top)
- [Chart3DContent](/documentation/charts/chart3dcontent)

### Associated Types

- [Body](/documentation/charts/chart3dcontent/body-swift.associatedtype)

### Instance Properties

- [var body: Self.Body](/documentation/charts/chart3dcontent/body-swift.property)

### Instance Methods

- [func foregroundStyle(some Chart3DSurfaceStyle) -> some Chart3DContent](/documentation/charts/chart3dcontent/foregroundstyle(_:)-1pjaq)
- [func foregroundStyle(some ShapeStyle) -> some Chart3DContent](/documentation/charts/chart3dcontent/foregroundstyle(_:)-7skde)
- [func foregroundStyle<D>(by: PlottableValue<D>) -> some Chart3DContent](/documentation/charts/chart3dcontent/foregroundstyle(by:))
- [func metalness(Double) -> some Chart3DContent](/documentation/charts/chart3dcontent/metalness(_:))
- [func roughness(Double) -> some Chart3DContent](/documentation/charts/chart3dcontent/roughness(_:))
- [func symbol<S>(S) -> some Chart3DContent](/documentation/charts/chart3dcontent/symbol(_:))
- [func symbolRotation(Rotation3D) -> some Chart3DContent](/documentation/charts/chart3dcontent/symbolrotation(_:))
- [func symbolSize(CGFloat) -> some Chart3DContent](/documentation/charts/chart3dcontent/symbolsize(_:))
- [Chart3DContentBuilder](/documentation/charts/chart3dcontentbuilder)

### Type Methods

- [static func buildBlock() -> some Chart3DContent](/documentation/charts/chart3dcontentbuilder/buildblock())
- [static func buildBlock<Content>(Content) -> Content](/documentation/charts/chart3dcontentbuilder/buildblock(_:)-7r61g)
- [static func buildBlock<each Content>(repeat each Content) -> some Chart3DContent](/documentation/charts/chart3dcontentbuilder/buildblock(_:)-ny3i)
- [static func buildEither<C1, C2>(first: C1) -> BuilderConditional<C1, C2>](/documentation/charts/chart3dcontentbuilder/buildeither(first:))
- [static func buildEither<C1, C2>(second: C2) -> BuilderConditional<C1, C2>](/documentation/charts/chart3dcontentbuilder/buildeither(second:))
- [static func buildExpression<Content>(Content) -> Content](/documentation/charts/chart3dcontentbuilder/buildexpression(_:))
- [static func buildLimitedAvailability<Content>(Content) -> some Chart3DContent](/documentation/charts/chart3dcontentbuilder/buildlimitedavailability(_:))
- [static func buildOptional<Content>(Content) -> Content](/documentation/charts/chart3dcontentbuilder/buildoptional(_:))
- [SurfacePlot](/documentation/charts/surfaceplot)

### Initializers

- [init(x: Text, y: Text, z: Text, function: (Double, Double) -> Double)](/documentation/charts/surfaceplot/init(x:y:z:function:)-2dqgp)
- [init(x: LocalizedStringKey, y: LocalizedStringKey, z: LocalizedStringKey, function: (Double, Double) -> Double)](/documentation/charts/surfaceplot/init(x:y:z:function:)-6c5e6)
- [init(x: LocalizedStringResource, y: LocalizedStringResource, z: LocalizedStringResource, function: (Double, Double) -> Double)](/documentation/charts/surfaceplot/init(x:y:z:function:)-8mf5t)
- [init(x: some StringProtocol, y: some StringProtocol, z: some StringProtocol, function: (Double, Double) -> Double)](/documentation/charts/surfaceplot/init(x:y:z:function:)-9xdw2)

## Marks

- [AreaMark](/documentation/charts/areamark)

### Creating an area mark

- [init<X, Y>(x: PlottableValue<X>, y: PlottableValue<Y>, stacking: MarkStackingMethod)](/documentation/charts/areamark/init(x:y:stacking:))
- [init<X, Y, S>(x: PlottableValue<X>, y: PlottableValue<Y>, series: PlottableValue<S>, stacking: MarkStackingMethod)](/documentation/charts/areamark/init(x:y:series:stacking:))

### Creating a range area chart

- [init<X, Y>(x: PlottableValue<X>, yStart: PlottableValue<Y>, yEnd: PlottableValue<Y>)](/documentation/charts/areamark/init(x:ystart:yend:))
- [init<X, Y, S>(x: PlottableValue<X>, yStart: PlottableValue<Y>, yEnd: PlottableValue<Y>, series: PlottableValue<S>)](/documentation/charts/areamark/init(x:ystart:yend:series:))
- [init<X, Y>(xStart: PlottableValue<X>, xEnd: PlottableValue<X>, y: PlottableValue<Y>)](/documentation/charts/areamark/init(xstart:xend:y:))
- [init<X, Y, S>(xStart: PlottableValue<X>, xEnd: PlottableValue<X>, y: PlottableValue<Y>, series: PlottableValue<S>)](/documentation/charts/areamark/init(xstart:xend:y:series:))
- [LineMark](/documentation/charts/linemark)

### Creating a line mark

- [init<X, Y>(x: PlottableValue<X>, y: PlottableValue<Y>)](/documentation/charts/linemark/init(x:y:))
- [init<X, Y, S>(x: PlottableValue<X>, y: PlottableValue<Y>, series: PlottableValue<S>)](/documentation/charts/linemark/init(x:y:series:))
- [PointMark](/documentation/charts/pointmark)

### Creating a point mark

- [init<X, Y>(x: PlottableValue<X>, y: PlottableValue<Y>)](/documentation/charts/pointmark/init(x:y:)-44ke9)
- [init<Y>(x: CGFloat?, y: PlottableValue<Y>)](/documentation/charts/pointmark/init(x:y:)-9dswq)
- [init<X>(x: PlottableValue<X>, y: CGFloat?)](/documentation/charts/pointmark/init(x:y:)-9hppd)
- [init(x: PlottableValue<some Plottable>, y: PlottableValue<some Plottable>, z: PlottableValue<some Plottable>)](/documentation/charts/pointmark/init(x:y:z:))
- [RectangleMark](/documentation/charts/rectanglemark)

### Creating a rectangle mark

- [init<X, Y>(x: PlottableValue<X>, yStart: PlottableValue<Y>, yEnd: PlottableValue<Y>, width: MarkDimension)](/documentation/charts/rectanglemark/init(x:ystart:yend:width:)-vh2x)
- [init<X>(x: PlottableValue<X>, yStart: CGFloat?, yEnd: CGFloat?, width: MarkDimension)](/documentation/charts/rectanglemark/init(x:ystart:yend:width:)-xhqp)
- [init<X, Y>(xStart: PlottableValue<X>, xEnd: PlottableValue<X>, y: PlottableValue<Y>, height: MarkDimension)](/documentation/charts/rectanglemark/init(xstart:xend:y:height:)-27222)
- [init<Y>(xStart: CGFloat?, xEnd: CGFloat?, y: PlottableValue<Y>, height: MarkDimension)](/documentation/charts/rectanglemark/init(xstart:xend:y:height:)-4x46i)
- [init<X, Y>(xStart: PlottableValue<X>, xEnd: PlottableValue<X>, yStart: PlottableValue<Y>, yEnd: PlottableValue<Y>)](/documentation/charts/rectanglemark/init(xstart:xend:ystart:yend:)-1qbzg)
- [init(xStart: CGFloat?, xEnd: CGFloat?, yStart: CGFloat?, yEnd: CGFloat?)](/documentation/charts/rectanglemark/init(xstart:xend:ystart:yend:)-5682c)
- [init<Y>(xStart: CGFloat?, xEnd: CGFloat?, yStart: PlottableValue<Y>, yEnd: PlottableValue<Y>)](/documentation/charts/rectanglemark/init(xstart:xend:ystart:yend:)-5cbgh)
- [init<X>(xStart: PlottableValue<X>, xEnd: PlottableValue<X>, yStart: CGFloat?, yEnd: CGFloat?)](/documentation/charts/rectanglemark/init(xstart:xend:ystart:yend:)-6jeka)
- [init<X, Y>(x: PlottableValue<X>, y: PlottableValue<Y>, width: MarkDimension, height: MarkDimension)](/documentation/charts/rectanglemark/init(x:y:width:height:))
- [init(x: PlottableValue<some Plottable>, y: PlottableValue<some Plottable>, z: PlottableValue<some Plottable>)](/documentation/charts/rectanglemark/init(x:y:z:))
- [RuleMark](/documentation/charts/rulemark)

### Initializers

- [init(x: PlottableValue<some Plottable>, y: PlottableValue<some Plottable>, z: PlottableValue<some Plottable>)](/documentation/charts/rulemark/init(x:y:z:))
- [init<X, Y>(x: PlottableValue<X>, yStart: PlottableValue<Y>, yEnd: PlottableValue<Y>)](/documentation/charts/rulemark/init(x:ystart:yend:)-5gy50)
- [init<X>(x: PlottableValue<X>, yStart: CGFloat?, yEnd: CGFloat?)](/documentation/charts/rulemark/init(x:ystart:yend:)-6zemd)
- [init<Y>(x: CGFloat?, yStart: PlottableValue<Y>, yEnd: PlottableValue<Y>)](/documentation/charts/rulemark/init(x:ystart:yend:)-8iusl)
- [init<X, Y>(xStart: PlottableValue<X>, xEnd: PlottableValue<X>, y: PlottableValue<Y>)](/documentation/charts/rulemark/init(xstart:xend:y:)-27yvc)
- [init<Y>(xStart: CGFloat?, xEnd: CGFloat?, y: PlottableValue<Y>)](/documentation/charts/rulemark/init(xstart:xend:y:)-444cp)
- [init<X>(xStart: PlottableValue<X>, xEnd: PlottableValue<X>, y: CGFloat?)](/documentation/charts/rulemark/init(xstart:xend:y:)-6jsoi)
- [BarMark](/documentation/charts/barmark)

### Creating a bar mark

- [init<X, Y>(x: PlottableValue<X>, yStart: PlottableValue<Y>, yEnd: PlottableValue<Y>, width: MarkDimension)](/documentation/charts/barmark/init(x:ystart:yend:width:))
- [init<X, Y>(xStart: PlottableValue<X>, xEnd: PlottableValue<X>, y: PlottableValue<Y>, height: MarkDimension)](/documentation/charts/barmark/init(xstart:xend:y:height:))
- [init<X, Y>(x: PlottableValue<X>, y: PlottableValue<Y>, width: MarkDimension, height: MarkDimension, stacking: MarkStackingMethod)](/documentation/charts/barmark/init(x:y:width:height:stacking:))
- [init<X>(xStart: PlottableValue<X>, xEnd: PlottableValue<X>, yStart: CGFloat?, yEnd: CGFloat?)](/documentation/charts/barmark/init(xstart:xend:ystart:yend:)-98wo9)
- [init<Y>(xStart: CGFloat?, xEnd: CGFloat?, yStart: PlottableValue<Y>, yEnd: PlottableValue<Y>)](/documentation/charts/barmark/init(xstart:xend:ystart:yend:)-7541n)
- [init<X, Y>(x: PlottableValue<X>, y: PlottableValue<Y>, width: MarkDimension, height: MarkDimension, stacking: MarkStackingMethod)](/documentation/charts/barmark/init(x:y:width:height:stacking:))
- [init<X>(x: PlottableValue<X>, yStart: CGFloat?, yEnd: CGFloat?, width: MarkDimension, stacking: MarkStackingMethod)](/documentation/charts/barmark/init(x:ystart:yend:width:stacking:))
- [init<Y>(xStart: CGFloat?, xEnd: CGFloat?, y: PlottableValue<Y>, height: MarkDimension, stacking: MarkStackingMethod)](/documentation/charts/barmark/init(xstart:xend:y:height:stacking:))
- [SectorMark](/documentation/charts/sectormark)

### Initializers

- [init(angle: PlottableValue<some Plottable>, innerRadius: MarkDimension, outerRadius: MarkDimension, angularInset: CGFloat?)](/documentation/charts/sectormark/init(angle:innerradius:outerradius:angularinset:))

## Vectorized plots

- [Creating a data visualization dashboard with Swift Charts](/documentation/charts/creating-a-data-visualization-dashboard-with-swift-charts)
- [AreaPlot](/documentation/charts/areaplot)

### Plotting areas from a collection

- [init<Data>(Data, x: PlottableProjection<AreaPlot<Content>.DataElement, some Plottable>, y: PlottableProjection<AreaPlot<Content>.DataElement, some Plottable>, stacking: MarkStackingMethod)](/documentation/charts/areaplot/init(_:x:y:stacking:))
- [init<Data>(Data, x: PlottableProjection<AreaPlot<Content>.DataElement, some Plottable>, y: PlottableProjection<AreaPlot<Content>.DataElement, some Plottable>, series: PlottableProjection<AreaPlot<Content>.DataElement, some Plottable>, stacking: MarkStackingMethod)](/documentation/charts/areaplot/init(_:x:y:series:stacking:))
- [init<Data, X>(Data, xStart: PlottableProjection<AreaPlot<Content>.DataElement, X>, xEnd: PlottableProjection<AreaPlot<Content>.DataElement, X>, y: PlottableProjection<AreaPlot<Content>.DataElement, some Plottable>)](/documentation/charts/areaplot/init(_:xstart:xend:y:))
- [init<Data, X>(Data, xStart: PlottableProjection<AreaPlot<Content>.DataElement, X>, xEnd: PlottableProjection<AreaPlot<Content>.DataElement, X>, y: PlottableProjection<AreaPlot<Content>.DataElement, some Plottable>, series: PlottableProjection<AreaPlot<Content>.DataElement, some Plottable>)](/documentation/charts/areaplot/init(_:xstart:xend:y:series:))
- [init<Data, Y>(Data, x: PlottableProjection<AreaPlot<Content>.DataElement, some Plottable>, yStart: PlottableProjection<AreaPlot<Content>.DataElement, Y>, yEnd: PlottableProjection<AreaPlot<Content>.DataElement, Y>)](/documentation/charts/areaplot/init(_:x:ystart:yend:))
- [init<Data, Y>(Data, x: PlottableProjection<AreaPlot<Content>.DataElement, some Plottable>, yStart: PlottableProjection<AreaPlot<Content>.DataElement, Y>, yEnd: PlottableProjection<AreaPlot<Content>.DataElement, Y>, series: PlottableProjection<AreaPlot<Content>.DataElement, some Plottable>)](/documentation/charts/areaplot/init(_:x:ystart:yend:series:))

### Plotting functions

- [init(x: Text, y: Text, domain: ClosedRange<Double>?, function: (Double) -> Double)](/documentation/charts/areaplot/init(x:y:domain:function:)-2fab1)
- [init(x: LocalizedStringResource, y: LocalizedStringResource, domain: ClosedRange<Double>?, function: (Double) -> Double)](/documentation/charts/areaplot/init(x:y:domain:function:)-1jmpp)
- [init(x: LocalizedStringKey, y: LocalizedStringKey, domain: ClosedRange<Double>?, function: (Double) -> Double)](/documentation/charts/areaplot/init(x:y:domain:function:)-etud)
- [init<S1, S2>(x: S1, y: S2, domain: ClosedRange<Double>?, function: (Double) -> Double)](/documentation/charts/areaplot/init(x:y:domain:function:)-39eit)
- [init(x: Text, yStart: Text, yEnd: Text, domain: ClosedRange<Double>?, function: (Double) -> (yStart: Double, yEnd: Double))](/documentation/charts/areaplot/init(x:ystart:yend:domain:function:)-etcn)
- [init(x: LocalizedStringResource, yStart: LocalizedStringResource, yEnd: LocalizedStringResource, domain: ClosedRange<Double>?, function: (Double) -> (yStart: Double, yEnd: Double))](/documentation/charts/areaplot/init(x:ystart:yend:domain:function:)-9gui6)
- [init(x: LocalizedStringKey, yStart: LocalizedStringKey, yEnd: LocalizedStringKey, domain: ClosedRange<Double>?, function: (Double) -> (yStart: Double, yEnd: Double))](/documentation/charts/areaplot/init(x:ystart:yend:domain:function:)-5akqm)
- [init<S1, S2, S3>(x: S1, yStart: S2, yEnd: S3, domain: ClosedRange<Double>?, function: (Double) -> (yStart: Double, yEnd: Double))](/documentation/charts/areaplot/init(x:ystart:yend:domain:function:)-23gxe)

### Supporting types

- [var body: Self.Body](/documentation/charts/chartcontent/body-swift.property)
- [VectorizedAreaPlotContent](/documentation/charts/vectorizedareaplotcontent)
- [FunctionAreaPlotContent](/documentation/charts/functionareaplotcontent)
- [LinePlot](/documentation/charts/lineplot)

### Plotting lines from a collection

- [init<Data>(Data, x: PlottableProjection<LinePlot<Content>.DataElement, some Plottable>, y: PlottableProjection<LinePlot<Content>.DataElement, some Plottable>)](/documentation/charts/lineplot/init(_:x:y:))
- [init<Data>(Data, x: PlottableProjection<LinePlot<Content>.DataElement, some Plottable>, y: PlottableProjection<LinePlot<Content>.DataElement, some Plottable>, series: PlottableProjection<LinePlot<Content>.DataElement, some Plottable>)](/documentation/charts/lineplot/init(_:x:y:series:))

### Plotting functions

- [init(x: Text, y: Text, domain: ClosedRange<Double>?, function: (Double) -> Double)](/documentation/charts/lineplot/init(x:y:domain:function:)-6m9gg)
- [init(x: LocalizedStringKey, y: LocalizedStringKey, domain: ClosedRange<Double>?, function: (Double) -> Double)](/documentation/charts/lineplot/init(x:y:domain:function:)-1135f)
- [init(x: LocalizedStringResource, y: LocalizedStringResource, domain: ClosedRange<Double>?, function: (Double) -> Double)](/documentation/charts/lineplot/init(x:y:domain:function:)-17i43)
- [init<S1, S2>(x: S1, y: S2, domain: ClosedRange<Double>?, function: (Double) -> Double)](/documentation/charts/lineplot/init(x:y:domain:function:)-6gv5v)

### Plotting parametric functions

- [init(x: Text, y: Text, t: Text, domain: ClosedRange<Double>, function: (Double) -> (x: Double, y: Double))](/documentation/charts/lineplot/init(x:y:t:domain:function:)-5c4bo)
- [init(x: LocalizedStringKey, y: LocalizedStringKey, t: LocalizedStringKey, domain: ClosedRange<Double>, function: (Double) -> (x: Double, y: Double))](/documentation/charts/lineplot/init(x:y:t:domain:function:)-7bvyi)
- [init(x: LocalizedStringResource, y: LocalizedStringResource, t: LocalizedStringResource, domain: ClosedRange<Double>, function: (Double) -> (x: Double, y: Double))](/documentation/charts/lineplot/init(x:y:t:domain:function:)-610ta)
- [init<S1, S2, S3>(x: S1, y: S2, t: S3, domain: ClosedRange<Double>, function: (Double) -> (x: Double, y: Double))](/documentation/charts/lineplot/init(x:y:t:domain:function:)-3mqls)

### Supporting types

- [var body: Self.Body](/documentation/charts/chartcontent/body-swift.property)
- [VectorizedLinePlotContent](/documentation/charts/vectorizedlineplotcontent)
- [FunctionLinePlotContent](/documentation/charts/functionlineplotcontent)
- [PointPlot](/documentation/charts/pointplot)

### Plotting points from a collection

- [init<Data>(Data, x: KeyPath<Data.Element, CGFloat>, y: PlottableProjection<PointPlot<Content>.DataElement, some Plottable>)](/documentation/charts/pointplot/init(_:x:y:)-1a9af)
- [init<Data>(Data, x: CGFloat?, y: PlottableProjection<PointPlot<Content>.DataElement, some Plottable>)](/documentation/charts/pointplot/init(_:x:y:)-1p6px)
- [init<Data>(Data, x: PlottableProjection<PointPlot<Content>.DataElement, some Plottable>, y: CGFloat?)](/documentation/charts/pointplot/init(_:x:y:)-72pm2)
- [init<Data>(Data, x: PlottableProjection<PointPlot<Content>.DataElement, some Plottable>, y: PlottableProjection<PointPlot<Content>.DataElement, some Plottable>)](/documentation/charts/pointplot/init(_:x:y:)-7frpp)
- [init<Data>(Data, x: PlottableProjection<PointPlot<Content>.DataElement, some Plottable>, y: KeyPath<PointPlot<Content>.DataElement, CGFloat>)](/documentation/charts/pointplot/init(_:x:y:)-9p3yg)

### Supporting types

- [var body: Self.Body](/documentation/charts/chartcontent/body-swift.property)
- [VectorizedPointPlotContent](/documentation/charts/vectorizedpointplotcontent)
- [RectanglePlot](/documentation/charts/rectangleplot)

### Plotting rectangles from a collection

- [init<Data>(Data, x: PlottableProjection<RectanglePlot<Content>.DataElement, some Plottable>, y: PlottableProjection<RectanglePlot<Content>.DataElement, some Plottable>, width: MarkDimensions<RectanglePlot<Content>.DataElement>, height: MarkDimensions<RectanglePlot<Content>.DataElement>)](/documentation/charts/rectangleplot/init(_:x:y:width:height:))
- [init<Data, Y>(Data, x: PlottableProjection<RectanglePlot<Content>.DataElement, some Plottable>, yStart: PlottableProjection<RectanglePlot<Content>.DataElement, Y>, yEnd: PlottableProjection<RectanglePlot<Content>.DataElement, Y>, width: MarkDimensions<RectanglePlot<Content>.DataElement>)](/documentation/charts/rectangleplot/init(_:x:ystart:yend:width:)-93op1)
- [init<Data>(Data, x: PlottableProjection<RectanglePlot<Content>.DataElement, some Plottable>, yStart: KeyPath<RectanglePlot<Content>.DataElement, CGFloat>, yEnd: KeyPath<RectanglePlot<Content>.DataElement, CGFloat>, width: MarkDimensions<RectanglePlot<Content>.DataElement>)](/documentation/charts/rectangleplot/init(_:x:ystart:yend:width:)-nnvk)
- [init<Data>(Data, x: PlottableProjection<RectanglePlot<Content>.DataElement, some Plottable>, yStart: CGFloat?, yEnd: CGFloat?, width: MarkDimensions<RectanglePlot<Content>.DataElement>)](/documentation/charts/rectangleplot/init(_:x:ystart:yend:width:)-12u1b)
- [init<Data>(Data, xStart: CGFloat?, xEnd: CGFloat?, y: PlottableProjection<RectanglePlot<Content>.DataElement, some Plottable>, height: MarkDimensions<RectanglePlot<Content>.DataElement>)](/documentation/charts/rectangleplot/init(_:xstart:xend:y:height:)-51nra)
- [init<Data>(Data, xStart: KeyPath<RectanglePlot<Content>.DataElement, CGFloat>, xEnd: KeyPath<RectanglePlot<Content>.DataElement, CGFloat>, y: PlottableProjection<RectanglePlot<Content>.DataElement, some Plottable>, height: MarkDimensions<RectanglePlot<Content>.DataElement>)](/documentation/charts/rectangleplot/init(_:xstart:xend:y:height:)-8s17v)
- [init<Data, X>(Data, xStart: PlottableProjection<RectanglePlot<Content>.DataElement, X>, xEnd: PlottableProjection<RectanglePlot<Content>.DataElement, X>, y: PlottableProjection<RectanglePlot<Content>.DataElement, some Plottable>, height: MarkDimensions<RectanglePlot<Content>.DataElement>)](/documentation/charts/rectangleplot/init(_:xstart:xend:y:height:)-15ish)
- [init<Data, X>(Data, xStart: PlottableProjection<RectanglePlot<Content>.DataElement, X>, xEnd: PlottableProjection<RectanglePlot<Content>.DataElement, X>, yStart: CGFloat?, yEnd: CGFloat?)](/documentation/charts/rectangleplot/init(_:xstart:xend:ystart:yend:)-46wi0)
- [init<Data, X, Y>(Data, xStart: PlottableProjection<RectanglePlot<Content>.DataElement, X>, xEnd: PlottableProjection<RectanglePlot<Content>.DataElement, X>, yStart: PlottableProjection<RectanglePlot<Content>.DataElement, Y>, yEnd: PlottableProjection<RectanglePlot<Content>.DataElement, Y>)](/documentation/charts/rectangleplot/init(_:xstart:xend:ystart:yend:)-4g377)
- [init<Data, Y>(Data, xStart: CGFloat?, xEnd: CGFloat?, yStart: PlottableProjection<RectanglePlot<Content>.DataElement, Y>, yEnd: PlottableProjection<RectanglePlot<Content>.DataElement, Y>)](/documentation/charts/rectangleplot/init(_:xstart:xend:ystart:yend:)-6d8yb)
- [init<Data, X>(Data, xStart: PlottableProjection<RectanglePlot<Content>.DataElement, X>, xEnd: PlottableProjection<RectanglePlot<Content>.DataElement, X>, yStart: KeyPath<RectanglePlot<Content>.DataElement, CGFloat>, yEnd: KeyPath<RectanglePlot<Content>.DataElement, CGFloat>)](/documentation/charts/rectangleplot/init(_:xstart:xend:ystart:yend:)-6uuk4)
- [init<Data, Y>(Data, xStart: KeyPath<RectanglePlot<Content>.DataElement, CGFloat>, xEnd: KeyPath<RectanglePlot<Content>.DataElement, CGFloat>, yStart: PlottableProjection<RectanglePlot<Content>.DataElement, Y>, yEnd: PlottableProjection<RectanglePlot<Content>.DataElement, Y>)](/documentation/charts/rectangleplot/init(_:xstart:xend:ystart:yend:)-741lz)
- [init<Data>(Data, xStart: KeyPath<RectanglePlot<Content>.DataElement, CGFloat>, xEnd: KeyPath<RectanglePlot<Content>.DataElement, CGFloat>, yStart: KeyPath<RectanglePlot<Content>.DataElement, CGFloat>, yEnd: KeyPath<RectanglePlot<Content>.DataElement, CGFloat>)](/documentation/charts/rectangleplot/init(_:xstart:xend:ystart:yend:)-ir9o)

### Supporting types

- [var body: Self.Body](/documentation/charts/chartcontent/body-swift.property)
- [VectorizedRectanglePlotContent](/documentation/charts/vectorizedrectangleplotcontent)
- [RulePlot](/documentation/charts/ruleplot)

### Plotting rules from a collection

- [init<Data>(Data, x: PlottableProjection<RulePlot<Content>.DataElement, some Plottable>, yStart: CGFloat?, yEnd: CGFloat?)](/documentation/charts/ruleplot/init(_:x:ystart:yend:)-13wts)
- [init<Data, Y>(Data, x: KeyPath<RulePlot<Content>.DataElement, CGFloat>, yStart: PlottableProjection<RulePlot<Content>.DataElement, Y>, yEnd: PlottableProjection<RulePlot<Content>.DataElement, Y>)](/documentation/charts/ruleplot/init(_:x:ystart:yend:)-3fig9)
- [init<Data>(Data, x: PlottableProjection<RulePlot<Content>.DataElement, some Plottable>, yStart: KeyPath<RulePlot<Content>.DataElement, CGFloat>, yEnd: KeyPath<RulePlot<Content>.DataElement, CGFloat>)](/documentation/charts/ruleplot/init(_:x:ystart:yend:)-6ts7e)
- [init<Data, Y>(Data, x: CGFloat?, yStart: PlottableProjection<RulePlot<Content>.DataElement, Y>, yEnd: PlottableProjection<RulePlot<Content>.DataElement, Y>)](/documentation/charts/ruleplot/init(_:x:ystart:yend:)-8b2lx)
- [init<Data, Y>(Data, x: PlottableProjection<RulePlot<Content>.DataElement, some Plottable>, yStart: PlottableProjection<RulePlot<Content>.DataElement, Y>, yEnd: PlottableProjection<RulePlot<Content>.DataElement, Y>)](/documentation/charts/ruleplot/init(_:x:ystart:yend:)-zxo0)
- [init<Data>(Data, xStart: KeyPath<RulePlot<Content>.DataElement, CGFloat>, xEnd: KeyPath<RulePlot<Content>.DataElement, CGFloat>, y: PlottableProjection<RulePlot<Content>.DataElement, some Plottable>)](/documentation/charts/ruleplot/init(_:xstart:xend:y:)-3dsvn)
- [init<Data>(Data, xStart: CGFloat?, xEnd: CGFloat?, y: PlottableProjection<RulePlot<Content>.DataElement, some Plottable>)](/documentation/charts/ruleplot/init(_:xstart:xend:y:)-4yxo8)
- [init<Data, X>(Data, xStart: PlottableProjection<RulePlot<Content>.DataElement, X>, xEnd: PlottableProjection<RulePlot<Content>.DataElement, X>, y: KeyPath<RulePlot<Content>.DataElement, CGFloat>)](/documentation/charts/ruleplot/init(_:xstart:xend:y:)-54gxx)
- [init<Data, X>(Data, xStart: PlottableProjection<RulePlot<Content>.DataElement, X>, xEnd: PlottableProjection<RulePlot<Content>.DataElement, X>, y: PlottableProjection<RulePlot<Content>.DataElement, some Plottable>)](/documentation/charts/ruleplot/init(_:xstart:xend:y:)-8ehr7)
- [init<Data, X>(Data, xStart: PlottableProjection<RulePlot<Content>.DataElement, X>, xEnd: PlottableProjection<RulePlot<Content>.DataElement, X>, y: CGFloat?)](/documentation/charts/ruleplot/init(_:xstart:xend:y:)-hx5a)

### Supporting types

- [var body: Self.Body](/documentation/charts/chartcontent/body-swift.property)
- [VectorizedRulePlotContent](/documentation/charts/vectorizedruleplotcontent)
- [BarPlot](/documentation/charts/barplot)

### Plotting bars from a collection

- [init<Data>(Data, x: PlottableProjection<BarPlot<Content>.DataElement, some Plottable>, y: PlottableProjection<BarPlot<Content>.DataElement, some Plottable>, width: MarkDimensions<BarPlot<Content>.DataElement>, height: MarkDimensions<BarPlot<Content>.DataElement>, stacking: MarkStackingMethod)](/documentation/charts/barplot/init(_:x:y:width:height:stacking:))
- [init<Data, Y>(Data, x: PlottableProjection<BarPlot<Content>.DataElement, some Plottable>, yStart: PlottableProjection<BarPlot<Content>.DataElement, Y>, yEnd: PlottableProjection<BarPlot<Content>.DataElement, Y>, width: MarkDimensions<BarPlot<Content>.DataElement>)](/documentation/charts/barplot/init(_:x:ystart:yend:width:))
- [init<Data>(Data, x: PlottableProjection<BarPlot<Content>.DataElement, some Plottable>, yStart: CGFloat?, yEnd: CGFloat?, width: MarkDimensions<BarPlot<Content>.DataElement>, stacking: MarkStackingMethod)](/documentation/charts/barplot/init(_:x:ystart:yend:width:stacking:)-2mtih)
- [init<Data>(Data, x: PlottableProjection<BarPlot<Content>.DataElement, some Plottable>, yStart: KeyPath<BarPlot<Content>.DataElement, CGFloat>, yEnd: KeyPath<BarPlot<Content>.DataElement, CGFloat>, width: MarkDimensions<BarPlot<Content>.DataElement>, stacking: MarkStackingMethod)](/documentation/charts/barplot/init(_:x:ystart:yend:width:stacking:)-680hw)
- [init<Data>(Data, xStart: KeyPath<BarPlot<Content>.DataElement, CGFloat>, xEnd: KeyPath<BarPlot<Content>.DataElement, CGFloat>, y: PlottableProjection<BarPlot<Content>.DataElement, some Plottable>, height: MarkDimensions<BarPlot<Content>.DataElement>, stacking: MarkStackingMethod)](/documentation/charts/barplot/init(_:xstart:xend:y:height:stacking:)-16tou)
- [init<Data>(Data, xStart: CGFloat?, xEnd: CGFloat?, y: PlottableProjection<BarPlot<Content>.DataElement, some Plottable>, height: MarkDimensions<BarPlot<Content>.DataElement>, stacking: MarkStackingMethod)](/documentation/charts/barplot/init(_:xstart:xend:y:height:stacking:)-2x0yx)
- [init<Data, X>(Data, xStart: PlottableProjection<BarPlot<Content>.DataElement, X>, xEnd: PlottableProjection<BarPlot<Content>.DataElement, X>, y: PlottableProjection<BarPlot<Content>.DataElement, some Plottable>, height: MarkDimensions<BarPlot<Content>.DataElement>)](/documentation/charts/barplot/init(_:xstart:xend:y:height:))
- [init<Data, X>(Data, xStart: PlottableProjection<BarPlot<Content>.DataElement, X>, xEnd: PlottableProjection<BarPlot<Content>.DataElement, X>, yStart: CGFloat?, yEnd: CGFloat?)](/documentation/charts/barplot/init(_:xstart:xend:ystart:yend:)-48su5)
- [init<Data, Y>(Data, xStart: KeyPath<BarPlot<Content>.DataElement, CGFloat>, xEnd: KeyPath<BarPlot<Content>.DataElement, CGFloat>, yStart: PlottableProjection<BarPlot<Content>.DataElement, Y>, yEnd: PlottableProjection<BarPlot<Content>.DataElement, Y>)](/documentation/charts/barplot/init(_:xstart:xend:ystart:yend:)-862wn)
- [init<Data, X>(Data, xStart: PlottableProjection<BarPlot<Content>.DataElement, X>, xEnd: PlottableProjection<BarPlot<Content>.DataElement, X>, yStart: KeyPath<BarPlot<Content>.DataElement, CGFloat>, yEnd: KeyPath<BarPlot<Content>.DataElement, CGFloat>)](/documentation/charts/barplot/init(_:xstart:xend:ystart:yend:)-mtdv)
- [init<Data, Y>(Data, xStart: CGFloat?, xEnd: CGFloat?, yStart: PlottableProjection<BarPlot<Content>.DataElement, Y>, yEnd: PlottableProjection<BarPlot<Content>.DataElement, Y>)](/documentation/charts/barplot/init(_:xstart:xend:ystart:yend:)-raqh)

### Supporting types

- [var body: Self.Body](/documentation/charts/chartcontent/body-swift.property)
- [VectorizedBarPlotContent](/documentation/charts/vectorizedbarplotcontent)
- [SectorPlot](/documentation/charts/sectorplot)

### Plotting sectors from a collection

- [init<Data>(Data, angle: PlottableProjection<SectorPlot<Content>.DataElement, some Plottable>, innerRadius: MarkDimensions<SectorPlot<Content>.DataElement>, outerRadius: MarkDimensions<SectorPlot<Content>.DataElement>, angularInset: CGFloat?)](/documentation/charts/sectorplot/init(_:angle:innerradius:outerradius:angularinset:)-1ed01)
- [init<Data>(Data, angle: PlottableProjection<SectorPlot<Content>.DataElement, some Plottable>, innerRadius: MarkDimensions<SectorPlot<Content>.DataElement>, outerRadius: MarkDimensions<SectorPlot<Content>.DataElement>, angularInset: KeyPath<SectorPlot<Content>.DataElement, CGFloat>)](/documentation/charts/sectorplot/init(_:angle:innerradius:outerradius:angularinset:)-9pmo7)

### Supporting types

- [var body: Self.Body](/documentation/charts/chartcontent/body-swift.property)
- [VectorizedSectorPlotContent](/documentation/charts/vectorizedsectorplotcontent)
- [VectorizedChartContent](/documentation/charts/vectorizedchartcontent)

### Styling marks

- [func foregroundStyle(KeyPath<Self.DataElement, some ShapeStyle>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/foregroundstyle(_:))
- [func opacity(KeyPath<Self.DataElement, CGFloat>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/opacity(_:))
- [func lineStyle(KeyPath<Self.DataElement, StrokeStyle>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/linestyle(_:))
- [func position(by: PlottableProjection<Self.DataElement, some Plottable>, axis: Axis?, span: MarkDimension) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/position(by:axis:span:))

### Setting symbol appearance

- [func symbol(by: PlottableProjection<Self.DataElement, some Plottable>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/symbol(by:))
- [func symbolSize(KeyPath<Self.DataElement, CGSize>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/symbolsize(_:)-12tl1)
- [func symbolSize(KeyPath<Self.DataElement, CGFloat>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/symbolsize(_:)-3nwop)

### Encoding data into mark characteristics

- [func foregroundStyle(by: PlottableProjection<Self.DataElement, some Plottable>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/foregroundstyle(by:))
- [func lineStyle(by: PlottableProjection<Self.DataElement, some Plottable>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/linestyle(by:))
- [func symbol(by: PlottableProjection<Self.DataElement, some Plottable>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/symbol(by:))
- [func symbolSize(by: PlottableProjection<Self.DataElement, some Plottable>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/symbolsize(by:))

### Configuring accessibility

- [func accessibilityHidden(KeyPath<Self.DataElement, Bool>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/accessibilityhidden(_:))
- [func accessibilityIdentifier(KeyPath<Self.DataElement, String>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/accessibilityidentifier(_:))
- [func accessibilityLabel(KeyPath<Self.DataElement, LocalizedStringKey>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/accessibilitylabel(_:)-5r0pw)
- [func accessibilityLabel(KeyPath<Self.DataElement, some StringProtocol>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/accessibilitylabel(_:)-8zoay)
- [func accessibilityLabel(KeyPath<Self.DataElement, Text>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/accessibilitylabel(_:)-46jbt)
- [func accessibilityValue(KeyPath<Self.DataElement, some StringProtocol>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/accessibilityvalue(_:)-2rv8b)
- [func accessibilityValue(KeyPath<Self.DataElement, Text>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/accessibilityvalue(_:)-pylk)
- [func accessibilityValue(KeyPath<Self.DataElement, LocalizedStringKey>) -> some VectorizedChartContent<Self.DataElement>
](/documentation/charts/vectorizedchartcontent/accessibilityvalue(_:)-3dei8)

### Supporting types

- [PlottableProjection](/documentation/charts/plottableprojection)

#### Type Methods

- [static func value(LocalizedStringResource, KeyPath<DataElement, DataValue>) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:)-2n72w)
- [static func value(LocalizedStringKey, DataValue) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:)-2t2pp)
- [static func value(LocalizedStringKey, KeyPath<DataElement, DataValue>) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:)-3d5wx)
- [static func value(LocalizedStringResource, DataValue) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:)-3fgjj)
- [static func value(some StringProtocol, DataValue) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:)-3u8ec)
- [static func value(some StringProtocol, KeyPath<DataElement, DataValue>) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:)-4gbm2)
- [static func value(Text, KeyPath<DataElement, DataValue>) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:)-9xmzf)
- [static func value(Text, DataValue) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:)-p6jc)
- [static func value(LocalizedStringKey, DataValue, DataValue) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:_:)-2fxu2)
- [static func value(some StringProtocol, DataValue, DataValue) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:_:)-35uat)
- [static func value(Text, DataValue, DataValue) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:_:)-5na80)
- [static func value(LocalizedStringResource, KeyPath<DataElement, DataValue>, KeyPath<DataElement, DataValue>) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:_:)-671tr)
- [static func value(Text, KeyPath<DataElement, DataValue>, KeyPath<DataElement, DataValue>) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:_:)-6i57l)
- [static func value(some StringProtocol, KeyPath<DataElement, DataValue>, KeyPath<DataElement, DataValue>) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:_:)-7lfga)
- [static func value(LocalizedStringResource, DataValue, DataValue) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:_:)-7puvl)
- [static func value(LocalizedStringKey, KeyPath<DataElement, DataValue>, KeyPath<DataElement, DataValue>) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:_:)-7s5uh)
- [static func value(LocalizedStringKey, DataValue, unit: Calendar.Component, calendar: Calendar?) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:unit:calendar:)-15mjw)
- [static func value(Text, KeyPath<DataElement, DataValue>, unit: Calendar.Component, calendar: Calendar?) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:unit:calendar:)-1oys9)
- [static func value(LocalizedStringResource, KeyPath<DataElement, DataValue>, unit: Calendar.Component, calendar: Calendar?) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:unit:calendar:)-30djq)
- [static func value(LocalizedStringResource, DataValue, unit: Calendar.Component, calendar: Calendar?) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:unit:calendar:)-4aeuc)
- [static func value(LocalizedStringKey, KeyPath<DataElement, DataValue>, unit: Calendar.Component, calendar: Calendar?) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:unit:calendar:)-6vkdw)
- [static func value(some StringProtocol, DataValue, unit: Calendar.Component, calendar: Calendar?) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:unit:calendar:)-77win)
- [static func value(some StringProtocol, KeyPath<DataElement, DataValue>, unit: Calendar.Component, calendar: Calendar?) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:unit:calendar:)-91ee9)
- [static func value(Text, DataValue, unit: Calendar.Component, calendar: Calendar?) -> PlottableProjection<DataElement, DataValue>](/documentation/charts/plottableprojection/value(_:_:unit:calendar:)-94p1r)

### Associated Types

- [DataElement](/documentation/charts/vectorizedchartcontent/dataelement)

## Mark configuration

- [MarkStackingMethod](/documentation/charts/markstackingmethod)

### Type Properties

- [static var center: MarkStackingMethod](/documentation/charts/markstackingmethod/center)
- [static var normalized: MarkStackingMethod](/documentation/charts/markstackingmethod/normalized)
- [static var standard: MarkStackingMethod](/documentation/charts/markstackingmethod/standard)
- [static var unstacked: MarkStackingMethod](/documentation/charts/markstackingmethod/unstacked)
- [MarkDimension](/documentation/charts/markdimension)

### Supporting types

- [MarkDimensions](/documentation/charts/markdimensions)

#### Initializers

- [init(floatLiteral: Double)](/documentation/charts/markdimensions/init(floatliteral:))
- [init(integerLiteral: Int)](/documentation/charts/markdimensions/init(integerliteral:))

#### Type Properties

- [static var automatic: MarkDimensions<DataElement>](/documentation/charts/markdimensions/automatic)

#### Type Methods

- [static func fixed(CGFloat) -> MarkDimensions<DataElement>](/documentation/charts/markdimensions/fixed(_:)-14cur)
- [static func fixed(KeyPath<DataElement, CGFloat>) -> MarkDimensions<DataElement>](/documentation/charts/markdimensions/fixed(_:)-7k7pv)
- [static func inset(KeyPath<DataElement, CGFloat>) -> MarkDimensions<DataElement>](/documentation/charts/markdimensions/inset(_:)-309e3)
- [static func inset(CGFloat) -> MarkDimensions<DataElement>](/documentation/charts/markdimensions/inset(_:)-5nddx)
- [static func ratio(CGFloat) -> MarkDimensions<DataElement>](/documentation/charts/markdimensions/ratio(_:)-8ufgm)
- [static func ratio(KeyPath<DataElement, CGFloat>) -> MarkDimensions<DataElement>](/documentation/charts/markdimensions/ratio(_:)-r23h)

### Initializers

- [init(floatLiteral: Double)](/documentation/charts/markdimension/init(floatliteral:))
- [init(integerLiteral: Int)](/documentation/charts/markdimension/init(integerliteral:))

### Type Properties

- [static var automatic: MarkDimension](/documentation/charts/markdimension/automatic)

### Type Methods

- [static func fixed(CGFloat) -> MarkDimension](/documentation/charts/markdimension/fixed(_:))
- [static func inset(CGFloat) -> MarkDimension](/documentation/charts/markdimension/inset(_:))
- [static func ratio(CGFloat) -> MarkDimension](/documentation/charts/markdimension/ratio(_:))
- [InterpolationMethod](/documentation/charts/interpolationmethod)

### Type Properties

- [static var cardinal: InterpolationMethod](/documentation/charts/interpolationmethod/cardinal)
- [static var catmullRom: InterpolationMethod](/documentation/charts/interpolationmethod/catmullrom)
- [static var linear: InterpolationMethod](/documentation/charts/interpolationmethod/linear)
- [static var monotone: InterpolationMethod](/documentation/charts/interpolationmethod/monotone)
- [static var stepCenter: InterpolationMethod](/documentation/charts/interpolationmethod/stepcenter)
- [static var stepEnd: InterpolationMethod](/documentation/charts/interpolationmethod/stepend)
- [static var stepStart: InterpolationMethod](/documentation/charts/interpolationmethod/stepstart)

### Type Methods

- [static func cardinal(tension: CGFloat) -> InterpolationMethod](/documentation/charts/interpolationmethod/cardinal(tension:))
- [static func catmullRom(alpha: CGFloat) -> InterpolationMethod](/documentation/charts/interpolationmethod/catmullrom(alpha:))
- [BasicChartSymbolShape](/documentation/charts/basicchartsymbolshape)

### Instance Methods

- [func strokeBorder(lineWidth: CGFloat) -> some ChartSymbolShape](/documentation/charts/basicchartsymbolshape/strokeborder(linewidth:))
- [ChartSymbolShape](/documentation/charts/chartsymbolshape)

### Instance Properties

- [var perceptualUnitRect: CGRect](/documentation/charts/chartsymbolshape/perceptualunitrect)

### Instance Methods

- [func strokeBorder(lineWidth: CGFloat) -> some ChartSymbolShape](/documentation/charts/chartsymbolshape/strokeborder(linewidth:))
- [func strokeBorder(style: StrokeStyle) -> some ChartSymbolShape](/documentation/charts/chartsymbolshape/strokeborder(style:))

### Type Properties

- [static var asterisk: BasicChartSymbolShape](/documentation/charts/chartsymbolshape/asterisk)
- [static var circle: BasicChartSymbolShape](/documentation/charts/chartsymbolshape/circle)
- [static var cross: BasicChartSymbolShape](/documentation/charts/chartsymbolshape/cross)
- [static var diamond: BasicChartSymbolShape](/documentation/charts/chartsymbolshape/diamond)
- [static var pentagon: BasicChartSymbolShape](/documentation/charts/chartsymbolshape/pentagon)
- [static var plus: BasicChartSymbolShape](/documentation/charts/chartsymbolshape/plus)
- [static var square: BasicChartSymbolShape](/documentation/charts/chartsymbolshape/square)
- [static var triangle: BasicChartSymbolShape](/documentation/charts/chartsymbolshape/triangle)
- [AnyChartSymbolShape](/documentation/charts/anychartsymbolshape)

### Initializers

- [init(any ChartSymbolShape)](/documentation/charts/anychartsymbolshape/init(_:))

## Labeled data

- [PlottableValue](/documentation/charts/plottablevalue)

### Type Methods

- [static func value<S>(S, Value) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:)-13lvv)
- [static func value(LocalizedStringKey, Range<Value>) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:)-3sze5)
- [static func value(Text, Range<Value>) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:)-4qa4d)
- [static func value<S>(S, ChartBinRange<Value>) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:)-6jxfn)
- [static func value(LocalizedStringResource, Value) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:)-6p2ls)
- [static func value(LocalizedStringKey, Value) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:)-70xhu)
- [static func value(LocalizedStringResource, ChartBinRange<Value>) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:)-7ciwx)
- [static func value(Text, Value) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:)-7ed58)
- [static func value(LocalizedStringKey, ChartBinRange<Value>) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:)-7k0m0)
- [static func value(LocalizedStringResource, Range<Value>) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:)-8bsvd)
- [static func value(Text, ChartBinRange<Value>) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:)-9bdsw)
- [static func value<S>(S, Range<Value>) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:)-f1kk)
- [static func value(LocalizedStringResource, Date, unit: Calendar.Component, calendar: Calendar?) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:unit:calendar:)-1rtpi)
- [static func value<S>(S, Date, unit: Calendar.Component, calendar: Calendar?) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:unit:calendar:)-2r0fo)
- [static func value(LocalizedStringKey, Date, unit: Calendar.Component, calendar: Calendar?) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:unit:calendar:)-8f7fe)
- [static func value(Text, Date, unit: Calendar.Component, calendar: Calendar?) -> PlottableValue<Value>](/documentation/charts/plottablevalue/value(_:_:unit:calendar:)-liyc)
- [Plottable](/documentation/charts/plottable)

### Supporting types

- [PrimitivePlottableProtocol](/documentation/charts/primitiveplottableprotocol)

### Associated Types

- [PrimitivePlottable](/documentation/charts/plottable/primitiveplottable-swift.associatedtype)

### Initializers

- [init?(primitivePlottable: Self.PrimitivePlottable)](/documentation/charts/plottable/init(primitiveplottable:))

### Instance Properties

- [var primitivePlottable: Self.PrimitivePlottable](/documentation/charts/plottable/primitiveplottable-xwx8)

## Scales

- [ScaleRange](/documentation/charts/scalerange)

### Associated Types

- [VisualValue](/documentation/charts/scalerange/visualvalue)
- [PositionScaleRange](/documentation/charts/positionscalerange)

### Type Properties

- [static var plotDimension: PlotDimensionScaleRange](/documentation/charts/positionscalerange/plotdimension)

### Type Methods

- [static func plotDimension(padding: CGFloat) -> PlotDimensionScaleRange](/documentation/charts/positionscalerange/plotdimension(padding:))
- [static func plotDimension(startPadding: CGFloat, endPadding: CGFloat) -> PlotDimensionScaleRange](/documentation/charts/positionscalerange/plotdimension(startpadding:endpadding:))
- [PlotDimensionScaleRange](/documentation/charts/plotdimensionscalerange)
- [ScaleDomain](/documentation/charts/scaledomain)

### Type Properties

- [static var automatic: AutomaticScaleDomain](/documentation/charts/scaledomain/automatic)

### Type Methods

- [static func automatic(includesZero: Bool?, reversed: Bool?) -> AutomaticScaleDomain](/documentation/charts/scaledomain/automatic(includeszero:reversed:))
- [static func automatic<DataValue>(includesZero: Bool?, reversed: Bool?, dataType: DataValue.Type, modifyInferredDomain: (inout [DataValue]) -> Void) -> AutomaticScaleDomain](/documentation/charts/scaledomain/automatic(includeszero:reversed:datatype:modifyinferreddomain:))
- [AutomaticScaleDomain](/documentation/charts/automaticscaledomain)
- [ScaleType](/documentation/charts/scaletype)

### Type Properties

- [static var category: ScaleType](/documentation/charts/scaletype/category)
- [static var date: ScaleType](/documentation/charts/scaletype/date)
- [static var linear: ScaleType](/documentation/charts/scaletype/linear)
- [static var log: ScaleType](/documentation/charts/scaletype/log)
- [static var squareRoot: ScaleType](/documentation/charts/scaletype/squareroot)
- [static var symmetricLog: ScaleType](/documentation/charts/scaletype/symmetriclog)

### Type Methods

- [static func power(exponent: Double) -> ScaleType](/documentation/charts/scaletype/power(exponent:))
- [static func symmetricLog(slopeAtZero: Double) -> ScaleType](/documentation/charts/scaletype/symmetriclog(slopeatzero:))

## Axes

- [Customizing axes in Swift Charts](/documentation/charts/customizing-axes-in-swift-charts)
- [ChartAxisContent](/documentation/charts/chartaxiscontent)
- [AxisContent](/documentation/charts/axiscontent)

### Instance Methods

- [func compositingLayer() -> some AxisContent](/documentation/charts/axiscontent/compositinglayer())
- [func compositingLayer<V>(style: (PlaceholderContentView<Self>) -> V) -> some AxisContent](/documentation/charts/axiscontent/compositinglayer(style:))
- [AxisMarks](/documentation/charts/axismarks)

### Supporting types

- [AxisMarkPreset](/documentation/charts/axismarkpreset)

#### Type Properties

- [static var aligned: AxisMarkPreset](/documentation/charts/axismarkpreset/aligned)
- [static var automatic: AxisMarkPreset](/documentation/charts/axismarkpreset/automatic)
- [static var extended: AxisMarkPreset](/documentation/charts/axismarkpreset/extended)
- [static var inset: AxisMarkPreset](/documentation/charts/axismarkpreset/inset)
- [AxisMarkValues](/documentation/charts/axismarkvalues)

#### Type Properties

- [static var automatic: AxisMarkValues](/documentation/charts/axismarkvalues/automatic)

#### Type Methods

- [static func automatic(desiredCount: Int?, roundLowerBound: Bool?, roundUpperBound: Bool?) -> AxisMarkValues](/documentation/charts/axismarkvalues/automatic(desiredcount:roundlowerbound:roundupperbound:))
- [static func automatic<P>(minimumStride: P, desiredCount: Int?, roundLowerBound: Bool?, roundUpperBound: Bool?) -> AxisMarkValues](/documentation/charts/axismarkvalues/automatic(minimumstride:desiredcount:roundlowerbound:roundupperbound:))
- [static func stride(by: Calendar.Component, count: Int, roundLowerBound: Bool?, roundUpperBound: Bool?, calendar: Calendar?) -> AxisMarkValues](/documentation/charts/axismarkvalues/stride(by:count:roundlowerbound:roundupperbound:calendar:))
- [static func stride<P>(by: P, roundLowerBound: Bool?, roundUpperBound: Bool?) -> AxisMarkValues](/documentation/charts/axismarkvalues/stride(by:roundlowerbound:roundupperbound:))
- [AxisMarkPosition](/documentation/charts/axismarkposition)

#### Type Properties

- [static var automatic: AxisMarkPosition](/documentation/charts/axismarkposition/automatic)
- [static var bottom: AxisMarkPosition](/documentation/charts/axismarkposition/bottom)
- [static var leading: AxisMarkPosition](/documentation/charts/axismarkposition/leading)
- [static var top: AxisMarkPosition](/documentation/charts/axismarkposition/top)
- [static var trailing: AxisMarkPosition](/documentation/charts/axismarkposition/trailing)

### Initializers

- [init<Format>(format: Format, preset: AxisMarkPreset, position: AxisMarkPosition, values: AxisMarkValues, stroke: StrokeStyle?)](/documentation/charts/axismarks/init(format:preset:position:values:stroke:)-8fe1o)
- [init<Value, Format>(format: Format, preset: AxisMarkPreset, position: AxisMarkPosition, values: [Value], stroke: StrokeStyle?)](/documentation/charts/axismarks/init(format:preset:position:values:stroke:)-98cpl)
- [init<Value>(preset: AxisMarkPreset, position: AxisMarkPosition, values: [Value], content: (AxisValue) -> Content)](/documentation/charts/axismarks/init(preset:position:values:content:)-1n9x7)
- [init<Value>(preset: AxisMarkPreset, position: AxisMarkPosition, values: [Value], content: () -> Content)](/documentation/charts/axismarks/init(preset:position:values:content:)-4a4x7)
- [init(preset: AxisMarkPreset, position: AxisMarkPosition, values: AxisMarkValues, content: () -> Content)](/documentation/charts/axismarks/init(preset:position:values:content:)-6b1jq)
- [init(preset: AxisMarkPreset, position: AxisMarkPosition, values: AxisMarkValues, content: (AxisValue) -> Content)](/documentation/charts/axismarks/init(preset:position:values:content:)-7414i)
- [init(preset: AxisMarkPreset, position: AxisMarkPosition, values: AxisMarkValues, stroke: StrokeStyle?)](/documentation/charts/axismarks/init(preset:position:values:stroke:)-8uk65)
- [init<Value>(preset: AxisMarkPreset, position: AxisMarkPosition, values: [Value], stroke: StrokeStyle?)](/documentation/charts/axismarks/init(preset:position:values:stroke:)-8xkl5)
- [AnyAxisContent](/documentation/charts/anyaxiscontent)

### Initializers

- [init(any AxisContent)](/documentation/charts/anyaxiscontent/init(_:))
- [init(erasing: some AxisContent)](/documentation/charts/anyaxiscontent/init(erasing:))
- [AxisContentBuilder](/documentation/charts/axiscontentbuilder)

### Type Methods

- [static func buildBlock() -> some AxisContent](/documentation/charts/axiscontentbuilder/buildblock())
- [static func buildBlock<T>(T) -> T](/documentation/charts/axiscontentbuilder/buildblock(_:)-27fku)
- [static func buildBlock<each T>(repeat each T) -> some AxisContent](/documentation/charts/axiscontentbuilder/buildblock(_:)-6p3cy)
- [static func buildEither<T1, T2>(first: T1) -> BuilderConditional<T1, T2>](/documentation/charts/axiscontentbuilder/buildeither(first:))
- [static func buildEither<T1, T2>(second: T2) -> BuilderConditional<T1, T2>](/documentation/charts/axiscontentbuilder/buildeither(second:))
- [static func buildExpression<Content>(Content) -> Content](/documentation/charts/axiscontentbuilder/buildexpression(_:))
- [static func buildIf<T>(T?) -> T?](/documentation/charts/axiscontentbuilder/buildif(_:))
- [static func buildLimitedAvailability<Content>(Content) -> AnyAxisContent](/documentation/charts/axiscontentbuilder/buildlimitedavailability(_:))
- [static func buildPartialBlock(accumulated: some AxisContent, next: some AxisContent) -> some AxisContent](/documentation/charts/axiscontentbuilder/buildpartialblock(accumulated:next:))
- [static func buildPartialBlock<T>(first: T) -> T](/documentation/charts/axiscontentbuilder/buildpartialblock(first:))

## Axis marks

- [AxisMark](/documentation/charts/axismark)

### Instance Methods

- [func font(Font?) -> some AxisMark](/documentation/charts/axismark/font(_:))
- [func foregroundStyle<S>(S) -> some AxisMark](/documentation/charts/axismark/foregroundstyle(_:))
- [func offset(CGSize) -> some AxisMark](/documentation/charts/axismark/offset(_:))
- [func offset(x: CGFloat, y: CGFloat) -> some AxisMark](/documentation/charts/axismark/offset(x:y:))
- [AxisTick](/documentation/charts/axistick)

### Structures

- [AxisTick.Length](/documentation/charts/axistick/length)

#### Type Properties

- [static var automatic: AxisTick.Length](/documentation/charts/axistick/length/automatic)
- [static var label: AxisTick.Length](/documentation/charts/axistick/length/label)
- [static var longestLabel: AxisTick.Length](/documentation/charts/axistick/length/longestlabel)

#### Type Methods

- [static func label(extendPastBy: CGFloat) -> AxisTick.Length](/documentation/charts/axistick/length/label(extendpastby:))
- [static func longestLabel(extendPastBy: CGFloat) -> AxisTick.Length](/documentation/charts/axistick/length/longestlabel(extendpastby:))

### Initializers

- [init(centered: Bool?, length: CGFloat, stroke: StrokeStyle?)](/documentation/charts/axistick/init(centered:length:stroke:)-7azpy)
- [init(centered: Bool?, length: AxisTick.Length, stroke: StrokeStyle?)](/documentation/charts/axistick/init(centered:length:stroke:)-93rvh)
- [AxisGridLine](/documentation/charts/axisgridline)

### Initializers

- [init(centered: Bool?, stroke: StrokeStyle?)](/documentation/charts/axisgridline/init(centered:stroke:))
- [AxisValueLabel](/documentation/charts/axisvaluelabel)

### Supporting types

- [AxisValueLabelOrientation](/documentation/charts/axisvaluelabelorientation)

#### Type Properties

- [static var automatic: AxisValueLabelOrientation](/documentation/charts/axisvaluelabelorientation/automatic)
- [static var horizontal: AxisValueLabelOrientation](/documentation/charts/axisvaluelabelorientation/horizontal)
- [static var vertical: AxisValueLabelOrientation](/documentation/charts/axisvaluelabelorientation/vertical)
- [static var verticalReversed: AxisValueLabelOrientation](/documentation/charts/axisvaluelabelorientation/verticalreversed)
- [AxisValueLabelCollisionResolution](/documentation/charts/axisvaluelabelcollisionresolution)

#### Type Properties

- [static var automatic: AxisValueLabelCollisionResolution](/documentation/charts/axisvaluelabelcollisionresolution/automatic)
- [static var disabled: AxisValueLabelCollisionResolution](/documentation/charts/axisvaluelabelcollisionresolution/disabled)
- [static var greedy: AxisValueLabelCollisionResolution](/documentation/charts/axisvaluelabelcollisionresolution/greedy)
- [static var truncate: AxisValueLabelCollisionResolution](/documentation/charts/axisvaluelabelcollisionresolution/truncate)

#### Type Methods

- [static func greedy(priority: Double, minimumSpacing: CGFloat?) -> AxisValueLabelCollisionResolution](/documentation/charts/axisvaluelabelcollisionresolution/greedy(priority:minimumspacing:))

### Initializers

- [init(LocalizedStringResource, centered: Bool?, anchor: UnitPoint?, multiLabelAlignment: Alignment?, collisionResolution: AxisValueLabelCollisionResolution, offsetsMarks: Bool?, orientation: AxisValueLabelOrientation, horizontalSpacing: CGFloat?, verticalSpacing: CGFloat?)](/documentation/charts/axisvaluelabel/init(_:centered:anchor:multilabelalignment:collisionresolution:offsetsmarks:orientation:horizontalspacing:verticalspacing:)-4xde3)
- [init(LocalizedStringKey, centered: Bool?, anchor: UnitPoint?, multiLabelAlignment: Alignment?, collisionResolution: AxisValueLabelCollisionResolution, offsetsMarks: Bool?, orientation: AxisValueLabelOrientation, horizontalSpacing: CGFloat?, verticalSpacing: CGFloat?)](/documentation/charts/axisvaluelabel/init(_:centered:anchor:multilabelalignment:collisionresolution:offsetsmarks:orientation:horizontalspacing:verticalspacing:)-9202h)
- [init<S>(S, centered: Bool?, anchor: UnitPoint?, multiLabelAlignment: Alignment?, collisionResolution: AxisValueLabelCollisionResolution, offsetsMarks: Bool?, orientation: AxisValueLabelOrientation, horizontalSpacing: CGFloat?, verticalSpacing: CGFloat?)](/documentation/charts/axisvaluelabel/init(_:centered:anchor:multilabelalignment:collisionresolution:offsetsmarks:orientation:horizontalspacing:verticalspacing:)-9rytf)
- [init(centered: Bool?, anchor: UnitPoint?, multiLabelAlignment: Alignment?, collisionResolution: AxisValueLabelCollisionResolution, offsetsMarks: Bool?, orientation: AxisValueLabelOrientation, horizontalSpacing: CGFloat?, verticalSpacing: CGFloat?)](/documentation/charts/axisvaluelabel/init(centered:anchor:multilabelalignment:collisionresolution:offsetsmarks:orientation:horizontalspacing:verticalspacing:))
- [init(centered: Bool?, anchor: UnitPoint?, multiLabelAlignment: Alignment?, collisionResolution: AxisValueLabelCollisionResolution, offsetsMarks: Bool?, orientation: AxisValueLabelOrientation, horizontalSpacing: CGFloat?, verticalSpacing: CGFloat?, content: () -> Content)](/documentation/charts/axisvaluelabel/init(centered:anchor:multilabelalignment:collisionresolution:offsetsmarks:orientation:horizontalspacing:verticalspacing:content:))
- [init<Format>(format: Format, centered: Bool?, anchor: UnitPoint?, multiLabelAlignment: Alignment?, collisionResolution: AxisValueLabelCollisionResolution, offsetsMarks: Bool?, orientation: AxisValueLabelOrientation, horizontalSpacing: CGFloat?, verticalSpacing: CGFloat?)](/documentation/charts/axisvaluelabel/init(format:centered:anchor:multilabelalignment:collisionresolution:offsetsmarks:orientation:horizontalspacing:verticalspacing:))
- [AxisValue](/documentation/charts/axisvalue)

### Instance Properties

- [var count: Int](/documentation/charts/axisvalue/count)
- [var index: Int](/documentation/charts/axisvalue/index)

### Instance Methods

- [func `as`<P>(P.Type) -> P?](/documentation/charts/axisvalue/as(_:))
- [AnyAxisMark](/documentation/charts/anyaxismark)

### Initializers

- [init(any AxisMark)](/documentation/charts/anyaxismark/init(_:))
- [init(erasing: some AxisMark)](/documentation/charts/anyaxismark/init(erasing:))
- [AxisMarkBuilder](/documentation/charts/axismarkbuilder)

### Type Methods

- [static func buildBlock() -> some AxisMark](/documentation/charts/axismarkbuilder/buildblock())
- [static func buildBlock<T>(T) -> T](/documentation/charts/axismarkbuilder/buildblock(_:)-5kk19)
- [static func buildBlock<each T>(repeat each T) -> some AxisMark](/documentation/charts/axismarkbuilder/buildblock(_:)-97cxo)
- [static func buildEither<T1, T2>(first: T1) -> BuilderConditional<T1, T2>](/documentation/charts/axismarkbuilder/buildeither(first:))
- [static func buildEither<T1, T2>(second: T2) -> BuilderConditional<T1, T2>](/documentation/charts/axismarkbuilder/buildeither(second:))
- [static func buildExpression<Content>(Content) -> Content](/documentation/charts/axismarkbuilder/buildexpression(_:))
- [static func buildIf<T>(T?) -> T?](/documentation/charts/axismarkbuilder/buildif(_:))
- [static func buildLimitedAvailability<Content>(Content) -> AnyAxisMark](/documentation/charts/axismarkbuilder/buildlimitedavailability(_:))
- [static func buildPartialBlock(accumulated: some AxisMark, next: some AxisMark) -> some AxisMark](/documentation/charts/axismarkbuilder/buildpartialblock(accumulated:next:))
- [static func buildPartialBlock<T>(first: T) -> T](/documentation/charts/axismarkbuilder/buildpartialblock(first:))

## Annotations

- [AnnotationContext](/documentation/charts/annotationcontext)

### Instance Properties

- [let targetSize: CGSize](/documentation/charts/annotationcontext/targetsize)
- [AnnotationPosition](/documentation/charts/annotationposition)

### Type Properties

- [static let automatic: AnnotationPosition](/documentation/charts/annotationposition/automatic)
- [static let bottom: AnnotationPosition](/documentation/charts/annotationposition/bottom)
- [static let bottomLeading: AnnotationPosition](/documentation/charts/annotationposition/bottomleading)
- [static let bottomTrailing: AnnotationPosition](/documentation/charts/annotationposition/bottomtrailing)
- [static let leading: AnnotationPosition](/documentation/charts/annotationposition/leading)
- [static let overlay: AnnotationPosition](/documentation/charts/annotationposition/overlay)
- [static let top: AnnotationPosition](/documentation/charts/annotationposition/top)
- [static let topLeading: AnnotationPosition](/documentation/charts/annotationposition/topleading)
- [static let topTrailing: AnnotationPosition](/documentation/charts/annotationposition/toptrailing)
- [static let trailing: AnnotationPosition](/documentation/charts/annotationposition/trailing)
- [AnnotationOverflowResolution](/documentation/charts/annotationoverflowresolution)

### Structures

- [AnnotationOverflowResolution.Boundary](/documentation/charts/annotationoverflowresolution/boundary)

#### Type Properties

- [static let automatic: AnnotationOverflowResolution.Boundary](/documentation/charts/annotationoverflowresolution/boundary/automatic)
- [static let chart: AnnotationOverflowResolution.Boundary](/documentation/charts/annotationoverflowresolution/boundary/chart)
- [static let plot: AnnotationOverflowResolution.Boundary](/documentation/charts/annotationoverflowresolution/boundary/plot)
- [AnnotationOverflowResolution.Strategy](/documentation/charts/annotationoverflowresolution/strategy)

#### Type Properties

- [static let automatic: AnnotationOverflowResolution.Strategy](/documentation/charts/annotationoverflowresolution/strategy/automatic)
- [static let disabled: AnnotationOverflowResolution.Strategy](/documentation/charts/annotationoverflowresolution/strategy/disabled)
- [static let fit: AnnotationOverflowResolution.Strategy](/documentation/charts/annotationoverflowresolution/strategy/fit)
- [static let padScale: AnnotationOverflowResolution.Strategy](/documentation/charts/annotationoverflowresolution/strategy/padscale)

#### Type Methods

- [static func fit(to: AnnotationOverflowResolution.Boundary) -> AnnotationOverflowResolution.Strategy](/documentation/charts/annotationoverflowresolution/strategy/fit(to:))

### Initializers

- [init(x: AnnotationOverflowResolution.Strategy, y: AnnotationOverflowResolution.Strategy)](/documentation/charts/annotationoverflowresolution/init(x:y:))

### Type Properties

- [static let automatic: AnnotationOverflowResolution](/documentation/charts/annotationoverflowresolution/automatic)

## Data bins

- [NumberBins](/documentation/charts/numberbins)

### Initializers

- [init(data: [Value], desiredCount: Int?, minimumStride: Value)](/documentation/charts/numberbins/init(data:desiredcount:minimumstride:)-3txi5)
- [init(data: [Value], desiredCount: Int?, minimumStride: Value)](/documentation/charts/numberbins/init(data:desiredcount:minimumstride:)-8pvv7)
- [init(range: ClosedRange<Value>, count: Int)](/documentation/charts/numberbins/init(range:count:)-6hip8)
- [init(range: ClosedRange<Value>, count: Int)](/documentation/charts/numberbins/init(range:count:)-7975l)
- [init(range: ClosedRange<Value>, desiredCount: Int, minimumStride: Value)](/documentation/charts/numberbins/init(range:desiredcount:minimumstride:)-32ok2)
- [init(range: ClosedRange<Value>, desiredCount: Int, minimumStride: Value)](/documentation/charts/numberbins/init(range:desiredcount:minimumstride:)-4qxfa)
- [init(size: Value, range: ClosedRange<Value>)](/documentation/charts/numberbins/init(size:range:)-3ach2)
- [init(size: Value, range: ClosedRange<Value>)](/documentation/charts/numberbins/init(size:range:)-5me6y)
- [init(thresholds: [Value])](/documentation/charts/numberbins/init(thresholds:))

### Instance Properties

- [var thresholds: [Value]](/documentation/charts/numberbins/thresholds)

### Instance Methods

- [func index(for: Value) -> Int](/documentation/charts/numberbins/index(for:))
- [DateBins](/documentation/charts/datebins)

### Initializers

- [init(data: [Date], desiredCount: Int?, calendar: Calendar)](/documentation/charts/datebins/init(data:desiredcount:calendar:))
- [init(range: ClosedRange<Date>, desiredCount: Int, calendar: Calendar)](/documentation/charts/datebins/init(range:desiredcount:calendar:))
- [init(thresholds: [Date])](/documentation/charts/datebins/init(thresholds:))
- [init(timeInterval: TimeInterval, range: ClosedRange<Date>)](/documentation/charts/datebins/init(timeinterval:range:))
- [init(unit: Calendar.Component, by: Int, range: ClosedRange<Date>, calendar: Calendar)](/documentation/charts/datebins/init(unit:by:range:calendar:))

### Instance Properties

- [var thresholds: [Date]](/documentation/charts/datebins/thresholds)

### Instance Methods

- [func index(for: Date) -> Int](/documentation/charts/datebins/index(for:))
- [ChartBinRange](/documentation/charts/chartbinrange)

### Instance Properties

- [let lowerBound: Bound](/documentation/charts/chartbinrange/lowerbound)
- [let upperBound: Bound](/documentation/charts/chartbinrange/upperbound)

## Chart management

- [ChartPlotContent](/documentation/charts/chartplotcontent)
- [ChartProxy](/documentation/charts/chartproxy)

### Instance Properties

- [var plotAreaFrame: Anchor<CGRect>](/documentation/charts/chartproxy/plotareaframe)
- [var plotAreaSize: CGSize](/documentation/charts/chartproxy/plotareasize)
- [var plotContainerFrame: Anchor<CGRect>?](/documentation/charts/chartproxy/plotcontainerframe)
- [var plotFrame: Anchor<CGRect>?](/documentation/charts/chartproxy/plotframe)
- [var plotSize: CGSize](/documentation/charts/chartproxy/plotsize)

### Instance Methods

- [func angle(at: CGPoint) -> Angle](/documentation/charts/chartproxy/angle(at:))
- [func foregroundStyle<P>(for: P) -> AnyShapeStyle?](/documentation/charts/chartproxy/foregroundstyle(for:))
- [func foregroundStyleDomain<P>(dataType: P.Type) -> [P]](/documentation/charts/chartproxy/foregroundstyledomain(datatype:))
- [func lineStyle<P>(for: P) -> StrokeStyle?](/documentation/charts/chartproxy/linestyle(for:))
- [func lineStyleDomain<P>(dataType: P.Type) -> [P]](/documentation/charts/chartproxy/linestyledomain(datatype:))
- [func position<X, Y>(for: (x: X, y: Y)) -> CGPoint?](/documentation/charts/chartproxy/position(for:))
- [func position<P>(forX: P) -> CGFloat?](/documentation/charts/chartproxy/position(forx:))
- [func position<P>(forY: P) -> CGFloat?](/documentation/charts/chartproxy/position(fory:))
- [func positionRange<X, Y>(for: (x: X, y: Y)) -> CGRect?](/documentation/charts/chartproxy/positionrange(for:))
- [func positionRange<P>(forX: P) -> ClosedRange<CGFloat>?](/documentation/charts/chartproxy/positionrange(forx:))
- [func positionRange<P>(forY: P) -> ClosedRange<CGFloat>?](/documentation/charts/chartproxy/positionrange(fory:))
- [func selectAngleValue(at: Angle)](/documentation/charts/chartproxy/selectanglevalue(at:))
- [func selectXRange(from: CGFloat, to: CGFloat)](/documentation/charts/chartproxy/selectxrange(from:to:))
- [func selectXValue(at: CGFloat)](/documentation/charts/chartproxy/selectxvalue(at:))
- [func selectYRange(from: CGFloat, to: CGFloat)](/documentation/charts/chartproxy/selectyrange(from:to:))
- [func selectYValue(at: CGFloat)](/documentation/charts/chartproxy/selectyvalue(at:))
- [func symbol<P>(for: P) -> AnyChartSymbolShape?](/documentation/charts/chartproxy/symbol(for:))
- [func symbolDomain<P>(dataType: P.Type) -> [P]](/documentation/charts/chartproxy/symboldomain(datatype:))
- [func symbolSize<P>(for: P) -> CGFloat?](/documentation/charts/chartproxy/symbolsize(for:))
- [func symbolSizeDomain<P>(dataType: P.Type) -> [P]](/documentation/charts/chartproxy/symbolsizedomain(datatype:))
- [func value<X, Y>(at: CGPoint, as: (X, Y).Type) -> (X, Y)?](/documentation/charts/chartproxy/value(at:as:))
- [func value<P>(atAngle: Angle, as: P.Type) -> P?](/documentation/charts/chartproxy/value(atangle:as:))
- [func value<P>(atX: CGFloat, as: P.Type) -> P?](/documentation/charts/chartproxy/value(atx:as:))
- [func value<P>(atY: CGFloat, as: P.Type) -> P?](/documentation/charts/chartproxy/value(aty:as:))
- [func xDomain<P>(dataType: P.Type) -> [P]](/documentation/charts/chartproxy/xdomain(datatype:))
- [func yDomain<P>(dataType: P.Type) -> [P]](/documentation/charts/chartproxy/ydomain(datatype:))

## Scrolling

- [ChartScrollTargetBehavior](/documentation/charts/chartscrolltargetbehavior)

### Supporting types

- [MajorValueAlignment](/documentation/charts/majorvaluealignment)

#### Type Properties

- [static var page: MajorValueAlignment<Value>](/documentation/charts/majorvaluealignment/page)

#### Type Methods

- [static func matching(DateComponents) -> MajorValueAlignment<Value>](/documentation/charts/majorvaluealignment/matching(_:))
- [static func unit(Value) -> MajorValueAlignment<Value>](/documentation/charts/majorvaluealignment/unit(_:))
- [ValueAlignedLimitBehavior](/documentation/charts/valuealignedlimitbehavior)

#### Type Properties

- [static var always: ValueAlignedLimitBehavior](/documentation/charts/valuealignedlimitbehavior/always)
- [static var automatic: ValueAlignedLimitBehavior](/documentation/charts/valuealignedlimitbehavior/automatic)
- [static var never: ValueAlignedLimitBehavior](/documentation/charts/valuealignedlimitbehavior/never)
- [ValueAlignedChartScrollTargetBehavior](/documentation/charts/valuealignedchartscrolltargetbehavior)

#### Initializers

- [init(matching: DateComponents, majorAlignment: MajorValueAlignment<Date>?, limitBehavior: ValueAlignedLimitBehavior)](/documentation/charts/valuealignedchartscrolltargetbehavior/init(matching:majoralignment:limitbehavior:))
- [init<T>(unit: T, majorAlignment: MajorValueAlignment<T>?, limitBehavior: ValueAlignedLimitBehavior)](/documentation/charts/valuealignedchartscrolltargetbehavior/init(unit:majoralignment:limitbehavior:))
- [init(xMatching: DateComponents, yMatching: DateComponents, xMajorAlignment: MajorValueAlignment<Date>?, yMajorAlignment: MajorValueAlignment<Date>?, limitBehavior: ValueAlignedLimitBehavior)](/documentation/charts/valuealignedchartscrolltargetbehavior/init(xmatching:ymatching:xmajoralignment:ymajoralignment:limitbehavior:))
- [init<Y>(xMatching: DateComponents, yUnit: Y, xMajorAlignment: MajorValueAlignment<Date>?, yMajorAlignment: MajorValueAlignment<Y>?, limitBehavior: ValueAlignedLimitBehavior)](/documentation/charts/valuealignedchartscrolltargetbehavior/init(xmatching:yunit:xmajoralignment:ymajoralignment:limitbehavior:))
- [init<X>(xUnit: X, yMatching: DateComponents, xMajorAlignment: MajorValueAlignment<X>?, yMajorAlignment: MajorValueAlignment<Date>?, limitBehavior: ValueAlignedLimitBehavior)](/documentation/charts/valuealignedchartscrolltargetbehavior/init(xunit:ymatching:xmajoralignment:ymajoralignment:limitbehavior:))
- [init<X, Y>(xUnit: X, yUnit: Y, xMajorAlignment: MajorValueAlignment<X>?, yMajorAlignment: MajorValueAlignment<Y>?, limitBehavior: ValueAlignedLimitBehavior)](/documentation/charts/valuealignedchartscrolltargetbehavior/init(xunit:yunit:xmajoralignment:ymajoralignment:limitbehavior:))

### Instance Methods

- [func updateTarget(inout ScrollTarget, context: ChartScrollTargetBehaviorContext)](/documentation/charts/chartscrolltargetbehavior/updatetarget(_:context:))

### Type Methods

- [static func valueAligned(matching: DateComponents, majorAlignment: MajorValueAlignment<Date>?, limitBehavior: ValueAlignedLimitBehavior) -> ValueAlignedChartScrollTargetBehavior](/documentation/charts/chartscrolltargetbehavior/valuealigned(matching:majoralignment:limitbehavior:))
- [static func valueAligned<P>(unit: P, majorAlignment: MajorValueAlignment<P>?, limitBehavior: ValueAlignedLimitBehavior) -> ValueAlignedChartScrollTargetBehavior](/documentation/charts/chartscrolltargetbehavior/valuealigned(unit:majoralignment:limitbehavior:))
- [static func valueAligned(xMatching: DateComponents, yMatching: DateComponents, xMajorAlignment: MajorValueAlignment<Date>?, yMajorAlignment: MajorValueAlignment<Date>?, limitBehavior: ValueAlignedLimitBehavior) -> ValueAlignedChartScrollTargetBehavior](/documentation/charts/chartscrolltargetbehavior/valuealigned(xmatching:ymatching:xmajoralignment:ymajoralignment:limitbehavior:))
- [static func valueAligned<Y>(xMatching: DateComponents, yUnit: Y, xMajorAlignment: MajorValueAlignment<Date>?, yMajorAlignment: MajorValueAlignment<Y>?, limitBehavior: ValueAlignedLimitBehavior) -> ValueAlignedChartScrollTargetBehavior](/documentation/charts/chartscrolltargetbehavior/valuealigned(xmatching:yunit:xmajoralignment:ymajoralignment:limitbehavior:))
- [static func valueAligned<X>(xUnit: X, yMatching: DateComponents, xMajorAlignment: MajorValueAlignment<X>?, yMajorAlignment: MajorValueAlignment<Date>?, limitBehavior: ValueAlignedLimitBehavior) -> ValueAlignedChartScrollTargetBehavior](/documentation/charts/chartscrolltargetbehavior/valuealigned(xunit:ymatching:xmajoralignment:ymajoralignment:limitbehavior:))
- [static func valueAligned<X, Y>(xUnit: X, yUnit: Y, xMajorAlignment: MajorValueAlignment<X>?, yMajorAlignment: MajorValueAlignment<Y>?, limitBehavior: ValueAlignedLimitBehavior) -> ValueAlignedChartScrollTargetBehavior](/documentation/charts/chartscrolltargetbehavior/valuealigned(xunit:yunit:xmajoralignment:ymajoralignment:limitbehavior:))

### Default Implementations

- [ScrollTargetBehavior Implementations](/documentation/charts/chartscrolltargetbehavior/scrolltargetbehavior-implementations)

#### Instance Methods

- [func updateTarget(inout ScrollTarget, context: ScrollTargetBehaviorContext)](/documentation/charts/chartscrolltargetbehavior/updatetarget(_:context:)-8j5z4)
- [ChartScrollTargetBehaviorContext](/documentation/charts/chartscrolltargetbehaviorcontext)

### Instance Properties

- [var chartProxy: ChartProxy](/documentation/charts/chartscrolltargetbehaviorcontext/chartproxy)

### Subscripts

- [subscript<T>(dynamicMember _: KeyPath<ScrollTargetBehaviorContext, T>) -> T](/documentation/charts/chartscrolltargetbehaviorcontext/subscript(dynamicmember:))

## Structures

- [Chart3DRenderingStyle](/documentation/charts/chart3drenderingstyle)

### Type Properties

- [static var automatic: Chart3DRenderingStyle](/documentation/charts/chart3drenderingstyle/automatic)
- [static var flat: Chart3DRenderingStyle](/documentation/charts/chart3drenderingstyle/flat)
- [static var volumetric: Chart3DRenderingStyle](/documentation/charts/chart3drenderingstyle/volumetric)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
