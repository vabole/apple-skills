---
title: PhotosUI
source: https://developer.apple.com/documentation/photosui
timestamp: 2026-01-19T11:02:42.464Z
---

## Shared photo library

- [Delivering an Enhanced Privacy Experience in Your Photos App](/documentation/photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app)
- [PHLivePhotoView](/documentation/photosui/phlivephotoview)

### Choosing a Live Photo to Display

- [var livePhoto: PHLivePhoto?](/documentation/photosui/phlivephotoview/livephoto)

### Managing Playback

- [var playbackGestureRecognizer: UIGestureRecognizer](/documentation/photosui/phlivephotoview/playbackgesturerecognizer)
- [var isMuted: Bool](/documentation/photosui/phlivephotoview/ismuted)
- [var audioVolume: Float](/documentation/photosui/phlivephotoview/audiovolume)

### Responding to Playback Events

- [var delegate: (any PHLivePhotoViewDelegate)?](/documentation/photosui/phlivephotoview/delegate)
- [PHLivePhotoViewDelegate](/documentation/photosui/phlivephotoviewdelegate)

#### Responding to Live Photos Playback Events

- [func livePhotoView(PHLivePhotoView, canBeginPlaybackWith: PHLivePhotoViewPlaybackStyle) -> Bool](/documentation/photosui/phlivephotoviewdelegate/livephotoview(_:canbeginplaybackwith:))
- [func livePhotoView(PHLivePhotoView, willBeginPlaybackWith: PHLivePhotoViewPlaybackStyle)](/documentation/photosui/phlivephotoviewdelegate/livephotoview(_:willbeginplaybackwith:))
- [func livePhotoView(PHLivePhotoView, didEndPlaybackWith: PHLivePhotoViewPlaybackStyle)](/documentation/photosui/phlivephotoviewdelegate/livephotoview(_:didendplaybackwith:))
- [func livePhotoView(PHLivePhotoView, extraMinimumTouchDurationFor: UITouch, with: PHLivePhotoViewPlaybackStyle) -> TimeInterval](/documentation/photosui/phlivephotoviewdelegate/livephotoview(_:extraminimumtouchdurationfor:with:))

### Manually Playing Live Photo Content

- [func startPlayback(with: PHLivePhotoViewPlaybackStyle)](/documentation/photosui/phlivephotoview/startplayback(with:))
- [func stopPlayback()](/documentation/photosui/phlivephotoview/stopplayback())
- [func stopPlayback(animated: Bool)](/documentation/photosui/phlivephotoview/stopplayback(animated:))

### Accessing User Interface Icons for Live Photos

- [class func livePhotoBadgeImage(options: PHLivePhotoBadgeOptions) -> UIImage](/documentation/photosui/phlivephotoview/livephotobadgeimage(options:))
- [var livePhotoBadgeView: NSView?](/documentation/photosui/phlivephotoview/livephotobadgeview)

### Setting the Content Mode

- [var contentMode: PHLivePhotoViewContentMode](/documentation/photosui/phlivephotoview/contentmode)
- [PHLivePhotoViewContentMode](/documentation/photosui/phlivephotoviewcontentmode)

#### Content Modes

- [case aspectFit](/documentation/photosui/phlivephotoviewcontentmode/aspectfit)
- [case aspectFill](/documentation/photosui/phlivephotoviewcontentmode/aspectfill)

#### Initializers

- [init?(rawValue: Int)](/documentation/photosui/phlivephotoviewcontentmode/init(rawvalue:))

### Constants

- [PHLivePhotoViewPlaybackStyle](/documentation/photosui/phlivephotoviewplaybackstyle)

#### Constants

- [case undefined](/documentation/photosui/phlivephotoviewplaybackstyle/undefined)
- [case full](/documentation/photosui/phlivephotoviewplaybackstyle/full)
- [case hint](/documentation/photosui/phlivephotoviewplaybackstyle/hint)

#### Initializers

- [init?(rawValue: Int)](/documentation/photosui/phlivephotoviewplaybackstyle/init(rawvalue:))
- [PHLivePhotoBadgeOptions](/documentation/photosui/phlivephotobadgeoptions)

#### Initializers

- [init(rawValue: UInt)](/documentation/photosui/phlivephotobadgeoptions/init(rawvalue:))

#### Constants

- [static var liveOff: PHLivePhotoBadgeOptions](/documentation/photosui/phlivephotobadgeoptions/liveoff)
- [static var overContent: PHLivePhotoBadgeOptions](/documentation/photosui/phlivephotobadgeoptions/overcontent)

### Instance Properties

- [var contentsRect: CGRect](/documentation/photosui/phlivephotoview/contentsrect)
- [var intrinsicContentSize: CGSize](/documentation/photosui/phlivephotoview/intrinsiccontentsize)

## Photos picker for UIKit, AppKit

- [Selecting Photos and Videos in iOS](/documentation/photokit/selecting-photos-and-videos-in-ios)
- [PHPickerViewController](/documentation/photosui/phpickerviewcontroller)

### Creating a picker

- [convenience init(configuration: PHPickerConfiguration)](/documentation/photosui/phpickerviewcontroller/init(configuration:))
- [PHPickerConfiguration](/documentation/photosui/phpickerconfiguration-swift.struct)

#### Creating a configuration

- [init()](/documentation/photosui/phpickerconfiguration-swift.struct/init())
- [init(photoLibrary: PHPhotoLibrary)](/documentation/photosui/phpickerconfiguration-swift.struct/init(photolibrary:))

#### Filtering asset types

- [var filter: PHPickerFilter?](/documentation/photosui/phpickerconfiguration-swift.struct/filter)
- [PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct)

##### Creating Filters

- [static func playbackStyle(PHAsset.PlaybackStyle) -> PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/playbackstyle(_:))
- [static func all(of: [PHPickerFilter]) -> PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/all(of:))
- [static func not(PHPickerFilter) -> PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/not(_:))

##### Getting Filter Types

- [static let bursts: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/bursts)
- [static let cinematicVideos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/cinematicvideos)
- [static let depthEffectPhotos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/deptheffectphotos)
- [static let images: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/images)
- [static let livePhotos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/livephotos)
- [static let panoramas: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/panoramas)
- [static let screenRecordings: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/screenrecordings)
- [static let screenshots: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/screenshots)
- [static let slomoVideos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/slomovideos)
- [static let timelapseVideos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/timelapsevideos)
- [static let videos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/videos)
- [static func any(of: [PHPickerFilter]) -> PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/any(of:))

##### Type Properties

- [static let spatialMedia: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/spatialmedia)

#### Selecting the preferred asset representation

- [var preferredAssetRepresentationMode: PHPickerConfiguration.AssetRepresentationMode](/documentation/photosui/phpickerconfiguration-swift.struct/preferredassetrepresentationmode)
- [PHPickerConfiguration.AssetRepresentationMode](/documentation/photosui/phpickerconfiguration-swift.struct/assetrepresentationmode)

##### Constants

- [case automatic](/documentation/photosui/phpickerconfiguration-swift.struct/assetrepresentationmode/automatic)
- [case compatible](/documentation/photosui/phpickerconfiguration-swift.struct/assetrepresentationmode/compatible)
- [case current](/documentation/photosui/phpickerconfiguration-swift.struct/assetrepresentationmode/current)

#### Preselecting assets

- [var preselectedAssetIdentifiers: [String]](/documentation/photosui/phpickerconfiguration-swift.struct/preselectedassetidentifiers)

#### Setting the selection limit

- [var selectionLimit: Int](/documentation/photosui/phpickerconfiguration-swift.struct/selectionlimit)
- [var selection: PHPickerConfiguration.Selection](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.property)
- [PHPickerConfigurationSelection](/documentation/photosui/phpickerconfigurationselection)

##### Selection methods

- [case `default`](/documentation/photosui/phpickerconfigurationselection/default)
- [case ordered](/documentation/photosui/phpickerconfigurationselection/ordered)
- [case continuous](/documentation/photosui/phpickerconfigurationselection/continuous)
- [case continuousAndOrdered](/documentation/photosui/phpickerconfigurationselection/continuousandordered)

##### Initializers

- [init?(rawValue: Int)](/documentation/photosui/phpickerconfigurationselection/init(rawvalue:))
- [PHPickerConfiguration.Selection](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum)

##### Selection methods

- [case `default`](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/default)
- [case ordered](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/ordered)
- [case continuous](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/continuous)
- [case continuousAndOrdered](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/continuousandordered)

#### Customizing picker appearance and behavior

- [var mode: PHPickerMode](/documentation/photosui/phpickerconfiguration-swift.struct/mode)
- [PHPickerMode](/documentation/photosui/phpickermode-swift.struct)

##### Laying out photos

- [static var compact: PHPickerMode](/documentation/photosui/phpickermode-swift.struct/compact)
- [static let `default`: PHPickerMode](/documentation/photosui/phpickermode-swift.struct/default)
- [var disabledCapabilities: PHPickerCapabilities](/documentation/photosui/phpickerconfiguration-swift.struct/disabledcapabilities)
- [PHPickerCapabilities](/documentation/photosui/phpickercapabilities)

##### Specifying features

- [static var collectionNavigation: PHPickerCapabilities](/documentation/photosui/phpickercapabilities/collectionnavigation)
- [static var selectionActions: PHPickerCapabilities](/documentation/photosui/phpickercapabilities/selectionactions)
- [static var search: PHPickerCapabilities](/documentation/photosui/phpickercapabilities/search)
- [static var sensitivityAnalysisIntervention: PHPickerCapabilities](/documentation/photosui/phpickercapabilities/sensitivityanalysisintervention)
- [static var stagingArea: PHPickerCapabilities](/documentation/photosui/phpickercapabilities/stagingarea)

##### Creating a capability

- [init(rawValue: UInt)](/documentation/photosui/phpickercapabilities/init(rawvalue:))
- [var edgesWithoutContentMargins: NSDirectionalRectEdge](/documentation/photosui/phpickerconfiguration-swift.struct/edgeswithoutcontentmargins)
- [PHPickerConfiguration.Update](/documentation/photosui/phpickerconfiguration-swift.struct/update)

##### Creating an update object

- [init()](/documentation/photosui/phpickerconfiguration-swift.struct/update/init())

##### Adjusting selection limits

- [var selectionLimit: Int?](/documentation/photosui/phpickerconfiguration-swift.struct/update/selectionlimit)

##### Adjusting content margins

- [var edgesWithoutContentMargins: NSDirectionalRectEdge?](/documentation/photosui/phpickerconfiguration-swift.struct/update/edgeswithoutcontentmargins)

### Managing the configuration

- [var configuration: PHPickerConfiguration](/documentation/photosui/phpickerviewcontroller/configuration-17a8p)
- [func updatePicker(using: PHPickerConfiguration.Update)](/documentation/photosui/phpickerviewcontroller/updatepicker(using:))

### Setting content position and scale

- [func scrollToInitialPosition()](/documentation/photosui/phpickerviewcontroller/scrolltoinitialposition())
- [func zoomIn()](/documentation/photosui/phpickerviewcontroller/zoomin())
- [func zoomOut()](/documentation/photosui/phpickerviewcontroller/zoomout())

### Responding to user selection

- [var delegate: (any PHPickerViewControllerDelegate)?](/documentation/photosui/phpickerviewcontroller/delegate-3zqmt)
- [PHPickerViewControllerDelegate](/documentation/photosui/phpickerviewcontrollerdelegate-5yntc)

#### Instance Methods

- [func picker(PHPickerViewController, didFinishPicking: [PHPickerResult])](/documentation/photosui/phpickerviewcontrollerdelegate-5yntc/picker(_:didfinishpicking:))
- [PHPickerResult](/documentation/photosui/phpickerresult-swift.struct)

#### Inspecting the Result

- [var assetIdentifier: String?](/documentation/photosui/phpickerresult-swift.struct/assetidentifier)
- [let itemProvider: NSItemProvider](/documentation/photosui/phpickerresult-swift.struct/itemprovider)

### Deselecting assets

- [func deselectAssets(withIdentifiers: [String])](/documentation/photosui/phpickerviewcontroller/deselectassets(withidentifiers:))

### Reordering assets

- [func moveAsset(withIdentifier: String, afterAssetWithIdentifier: String?)](/documentation/photosui/phpickerviewcontroller/moveasset(withidentifier:afterassetwithidentifier:))
- [PHPickerViewControllerDelegate](/documentation/photosui/phpickerviewcontrollerdelegate-5yntc)

### Instance Methods

- [func picker(PHPickerViewController, didFinishPicking: [PHPickerResult])](/documentation/photosui/phpickerviewcontrollerdelegate-5yntc/picker(_:didfinishpicking:))
- [PHPickerConfiguration](/documentation/photosui/phpickerconfiguration-swift.struct)

### Creating a configuration

- [init()](/documentation/photosui/phpickerconfiguration-swift.struct/init())
- [init(photoLibrary: PHPhotoLibrary)](/documentation/photosui/phpickerconfiguration-swift.struct/init(photolibrary:))

### Filtering asset types

- [var filter: PHPickerFilter?](/documentation/photosui/phpickerconfiguration-swift.struct/filter)
- [PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct)

#### Creating Filters

- [static func playbackStyle(PHAsset.PlaybackStyle) -> PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/playbackstyle(_:))
- [static func all(of: [PHPickerFilter]) -> PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/all(of:))
- [static func not(PHPickerFilter) -> PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/not(_:))

#### Getting Filter Types

- [static let bursts: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/bursts)
- [static let cinematicVideos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/cinematicvideos)
- [static let depthEffectPhotos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/deptheffectphotos)
- [static let images: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/images)
- [static let livePhotos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/livephotos)
- [static let panoramas: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/panoramas)
- [static let screenRecordings: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/screenrecordings)
- [static let screenshots: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/screenshots)
- [static let slomoVideos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/slomovideos)
- [static let timelapseVideos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/timelapsevideos)
- [static let videos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/videos)
- [static func any(of: [PHPickerFilter]) -> PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/any(of:))

#### Type Properties

- [static let spatialMedia: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/spatialmedia)

### Selecting the preferred asset representation

- [var preferredAssetRepresentationMode: PHPickerConfiguration.AssetRepresentationMode](/documentation/photosui/phpickerconfiguration-swift.struct/preferredassetrepresentationmode)
- [PHPickerConfiguration.AssetRepresentationMode](/documentation/photosui/phpickerconfiguration-swift.struct/assetrepresentationmode)

#### Constants

- [case automatic](/documentation/photosui/phpickerconfiguration-swift.struct/assetrepresentationmode/automatic)
- [case compatible](/documentation/photosui/phpickerconfiguration-swift.struct/assetrepresentationmode/compatible)
- [case current](/documentation/photosui/phpickerconfiguration-swift.struct/assetrepresentationmode/current)

### Preselecting assets

- [var preselectedAssetIdentifiers: [String]](/documentation/photosui/phpickerconfiguration-swift.struct/preselectedassetidentifiers)

### Setting the selection limit

- [var selectionLimit: Int](/documentation/photosui/phpickerconfiguration-swift.struct/selectionlimit)
- [var selection: PHPickerConfiguration.Selection](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.property)
- [PHPickerConfigurationSelection](/documentation/photosui/phpickerconfigurationselection)

#### Selection methods

- [case `default`](/documentation/photosui/phpickerconfigurationselection/default)
- [case ordered](/documentation/photosui/phpickerconfigurationselection/ordered)
- [case continuous](/documentation/photosui/phpickerconfigurationselection/continuous)
- [case continuousAndOrdered](/documentation/photosui/phpickerconfigurationselection/continuousandordered)

#### Initializers

- [init?(rawValue: Int)](/documentation/photosui/phpickerconfigurationselection/init(rawvalue:))
- [PHPickerConfiguration.Selection](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum)

#### Selection methods

- [case `default`](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/default)
- [case ordered](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/ordered)
- [case continuous](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/continuous)
- [case continuousAndOrdered](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/continuousandordered)

### Customizing picker appearance and behavior

- [var mode: PHPickerMode](/documentation/photosui/phpickerconfiguration-swift.struct/mode)
- [PHPickerMode](/documentation/photosui/phpickermode-swift.struct)

#### Laying out photos

- [static var compact: PHPickerMode](/documentation/photosui/phpickermode-swift.struct/compact)
- [static let `default`: PHPickerMode](/documentation/photosui/phpickermode-swift.struct/default)
- [var disabledCapabilities: PHPickerCapabilities](/documentation/photosui/phpickerconfiguration-swift.struct/disabledcapabilities)
- [PHPickerCapabilities](/documentation/photosui/phpickercapabilities)

#### Specifying features

- [static var collectionNavigation: PHPickerCapabilities](/documentation/photosui/phpickercapabilities/collectionnavigation)
- [static var selectionActions: PHPickerCapabilities](/documentation/photosui/phpickercapabilities/selectionactions)
- [static var search: PHPickerCapabilities](/documentation/photosui/phpickercapabilities/search)
- [static var sensitivityAnalysisIntervention: PHPickerCapabilities](/documentation/photosui/phpickercapabilities/sensitivityanalysisintervention)
- [static var stagingArea: PHPickerCapabilities](/documentation/photosui/phpickercapabilities/stagingarea)

#### Creating a capability

- [init(rawValue: UInt)](/documentation/photosui/phpickercapabilities/init(rawvalue:))
- [var edgesWithoutContentMargins: NSDirectionalRectEdge](/documentation/photosui/phpickerconfiguration-swift.struct/edgeswithoutcontentmargins)
- [PHPickerConfiguration.Update](/documentation/photosui/phpickerconfiguration-swift.struct/update)

#### Creating an update object

- [init()](/documentation/photosui/phpickerconfiguration-swift.struct/update/init())

#### Adjusting selection limits

- [var selectionLimit: Int?](/documentation/photosui/phpickerconfiguration-swift.struct/update/selectionlimit)

#### Adjusting content margins

- [var edgesWithoutContentMargins: NSDirectionalRectEdge?](/documentation/photosui/phpickerconfiguration-swift.struct/update/edgeswithoutcontentmargins)
- [PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct)

### Creating Filters

- [static func playbackStyle(PHAsset.PlaybackStyle) -> PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/playbackstyle(_:))
- [static func all(of: [PHPickerFilter]) -> PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/all(of:))
- [static func not(PHPickerFilter) -> PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/not(_:))

### Getting Filter Types

- [static let bursts: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/bursts)
- [static let cinematicVideos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/cinematicvideos)
- [static let depthEffectPhotos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/deptheffectphotos)
- [static let images: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/images)
- [static let livePhotos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/livephotos)
- [static let panoramas: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/panoramas)
- [static let screenRecordings: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/screenrecordings)
- [static let screenshots: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/screenshots)
- [static let slomoVideos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/slomovideos)
- [static let timelapseVideos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/timelapsevideos)
- [static let videos: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/videos)
- [static func any(of: [PHPickerFilter]) -> PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/any(of:))

### Type Properties

- [static let spatialMedia: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/spatialmedia)
- [PHPickerResult](/documentation/photosui/phpickerresult-swift.struct)

### Inspecting the Result

- [var assetIdentifier: String?](/documentation/photosui/phpickerresult-swift.struct/assetidentifier)
- [let itemProvider: NSItemProvider](/documentation/photosui/phpickerresult-swift.struct/itemprovider)

## Photos picker for SwiftUI

- [Bringing Photos picker to your SwiftUI app](/documentation/photokit/bringing-photos-picker-to-your-swiftui-app)
- [Implementing an inline Photos picker](/documentation/photokit/implementing-an-inline-photos-picker)
- [PhotosPicker](/documentation/photosui/photospicker)

### Creating a picker

- [init(selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, label: () -> Label)](/documentation/photosui/photospicker/init(selection:matching:preferreditemencoding:label:))
- [init(selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, label: () -> Label)](/documentation/photosui/photospicker/init(selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:label:))
- [init(selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary, label: () -> Label)](/documentation/photosui/photospicker/init(selection:matching:preferreditemencoding:photolibrary:label:))
- [init(selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary, label: () -> Label)](/documentation/photosui/photospicker/init(selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:photolibrary:label:))

### Creating a picker with a title

- [init(LocalizedStringKey, selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy)](/documentation/photosui/photospicker/init(_:selection:matching:preferreditemencoding:)-7jbef)
- [init<S>(S, selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy)](/documentation/photosui/photospicker/init(_:selection:matching:preferreditemencoding:)-48f7l)
- [init(LocalizedStringKey, selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy)](/documentation/photosui/photospicker/init(_:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:)-8ac23)
- [init<S>(S, selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy)](/documentation/photosui/photospicker/init(_:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:)-6m11r)
- [init(LocalizedStringKey, selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary)](/documentation/photosui/photospicker/init(_:selection:matching:preferreditemencoding:photolibrary:)-bu7c)
- [init<S>(S, selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary)](/documentation/photosui/photospicker/init(_:selection:matching:preferreditemencoding:photolibrary:)-6bm2n)
- [init(LocalizedStringKey, selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary)](/documentation/photosui/photospicker/init(_:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:photolibrary:)-5tpfd)
- [init<S>(S, selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary)](/documentation/photosui/photospicker/init(_:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:photolibrary:)-6fwsc)
- [PhotosPickerItem](/documentation/photosui/photospickeritem)

### Creating a picker item

- [init(itemIdentifier: String)](/documentation/photosui/photospickeritem/init(itemidentifier:))

### Inspecting a picker item

- [var itemIdentifier: String?](/documentation/photosui/photospickeritem/itemidentifier)
- [var supportedContentTypes: [UTType]](/documentation/photosui/photospickeritem/supportedcontenttypes)

### Getting an encoding policy

- [PhotosPickerItem.EncodingDisambiguationPolicy](/documentation/photosui/photospickeritem/encodingdisambiguationpolicy)

#### Getting standard encoding policies

- [static let automatic: PhotosPickerItem.EncodingDisambiguationPolicy](/documentation/photosui/photospickeritem/encodingdisambiguationpolicy/automatic)
- [static let current: PhotosPickerItem.EncodingDisambiguationPolicy](/documentation/photosui/photospickeritem/encodingdisambiguationpolicy/current)
- [static let compatible: PhotosPickerItem.EncodingDisambiguationPolicy](/documentation/photosui/photospickeritem/encodingdisambiguationpolicy/compatible)

### Loading the provider’s contents

- [func loadTransferable<T>(type: T.Type) async throws -> sending T?](/documentation/photosui/photospickeritem/loadtransferable(type:))
- [func loadTransferable<T>(type: T.Type, completionHandler: (Result<T?, any Error>) -> Void) -> Progress](/documentation/photosui/photospickeritem/loadtransferable(type:completionhandler:))
- [PhotosPickerSelectionBehavior](/documentation/photosui/photospickerselectionbehavior)

### Getting standard selection behaviors

- [static let `default`: PhotosPickerSelectionBehavior](/documentation/photosui/photospickerselectionbehavior/default)
- [static let ordered: PhotosPickerSelectionBehavior](/documentation/photosui/photospickerselectionbehavior/ordered)

### Type Properties

- [static let continuous: PhotosPickerSelectionBehavior](/documentation/photosui/photospickerselectionbehavior/continuous)
- [static let continuousAndOrdered: PhotosPickerSelectionBehavior](/documentation/photosui/photospickerselectionbehavior/continuousandordered)
- [PhotosPickerStyle](/documentation/photosui/photospickerstyle)

### Type Properties

- [static let compact: PhotosPickerStyle](/documentation/photosui/photospickerstyle/compact)
- [static let inline: PhotosPickerStyle](/documentation/photosui/photospickerstyle/inline)
- [static let presentation: PhotosPickerStyle](/documentation/photosui/photospickerstyle/presentation)

## Live Photos

- [Displaying Live Photos](/documentation/photokit/displaying-live-photos)

## Photo Editing Extensions

- [Creating Photo Editing Extensions](/documentation/photokit/creating-photo-editing-extensions)
- [PHContentEditingController](/documentation/photosui/phcontenteditingcontroller)

### Working with Adjustment Data

- [func canHandle(PHAdjustmentData) -> Bool](/documentation/photosui/phcontenteditingcontroller/canhandle(_:))

### Performing an Edit

- [func startContentEditing(with: PHContentEditingInput, placeholderImage: UIImage)](/documentation/photosui/phcontenteditingcontroller/startcontentediting(with:placeholderimage:))
- [func finishContentEditing(completionHandler: (PHContentEditingOutput?) -> Void)](/documentation/photosui/phcontenteditingcontroller/finishcontentediting(completionhandler:))

### Canceling an Edit

- [var shouldShowCancelConfirmation: Bool](/documentation/photosui/phcontenteditingcontroller/shouldshowcancelconfirmation)
- [func cancelContentEditing()](/documentation/photosui/phcontenteditingcontroller/cancelcontentediting())

## macOS Photos Project Extensions

- [Creating a Slideshow Project Extension for Photos](/documentation/photokit/creating-a-slideshow-project-extension-for-photos)
- [PHProject](/documentation/photos/phproject)
- [PHProjectInfo](/documentation/photosui/phprojectinfo)

### Determining Project Type

- [var projectType: PHProjectType](/documentation/photosui/phprojectinfo/projecttype)
- [PHProjectType](/documentation/photosui/phprojecttype)

#### Initializing a Project Type

- [init(String)](/documentation/photosui/phprojecttype/init(_:))
- [init(rawValue: String)](/documentation/photosui/phprojecttype/init(rawvalue:))

#### Defining a Project Type

- [static let undefined: PHProjectType](/documentation/photosui/phprojecttype/undefined)
- [var creationSource: PHProjectInfo.CreationSource](/documentation/photosui/phprojectinfo/creationsource-swift.property)
- [var sections: [PHProjectSection]](/documentation/photosui/phprojectinfo/sections)
- [PHProjectTypeDescription](/documentation/photosui/phprojecttypedescription)

#### Creating a Project Type Description

- [convenience init(projectType: PHProjectType, title: String, description: String?, image: NSImage?)](/documentation/photosui/phprojecttypedescription/init(projecttype:title:description:image:))
- [init(projectType: PHProjectType, title: String, description: String?, image: NSImage?, subtypeDescriptions: [PHProjectTypeDescription])](/documentation/photosui/phprojecttypedescription/init(projecttype:title:description:image:subtypedescriptions:))
- [init(projectType: PHProjectType, title: String, attributedDescription: NSAttributedString?, image: NSImage?, subtypeDescriptions: [PHProjectTypeDescription])](/documentation/photosui/phprojecttypedescription/init(projecttype:title:attributeddescription:image:subtypedescriptions:))
- [init(projectType: PHProjectType, title: String, description: String?, image: NSImage?, canProvideSubtypes: Bool)](/documentation/photosui/phprojecttypedescription/init(projecttype:title:description:image:canprovidesubtypes:))
- [init(projectType: PHProjectType, title: String, attributedDescription: NSAttributedString?, image: NSImage?, canProvideSubtypes: Bool)](/documentation/photosui/phprojecttypedescription/init(projecttype:title:attributeddescription:image:canprovidesubtypes:))

#### Describing a Project Type

- [var projectType: PHProjectType](/documentation/photosui/phprojecttypedescription/projecttype)
- [var localizedTitle: String](/documentation/photosui/phprojecttypedescription/localizedtitle)
- [var localizedDescription: String?](/documentation/photosui/phprojecttypedescription/localizeddescription)
- [var localizedAttributedDescription: NSAttributedString?](/documentation/photosui/phprojecttypedescription/localizedattributeddescription)
- [var image: NSImage?](/documentation/photosui/phprojecttypedescription/image)
- [var subtypeDescriptions: [PHProjectTypeDescription]](/documentation/photosui/phprojecttypedescription/subtypedescriptions)
- [var canProvideSubtypes: Bool](/documentation/photosui/phprojecttypedescription/canprovidesubtypes)
- [PHProjectTypeDescriptionDataSource](/documentation/photosui/phprojecttypedescriptiondatasource)

#### Providing Required Fields

- [func subtypes(for: PHProjectType) -> [PHProjectTypeDescription]](/documentation/photosui/phprojecttypedescriptiondatasource/subtypes(for:))
- [func typeDescription(for: PHProjectType) -> PHProjectTypeDescription?](/documentation/photosui/phprojecttypedescriptiondatasource/typedescription(for:))
- [func footerText(forSubtypesOf: PHProjectType) -> NSAttributedString?](/documentation/photosui/phprojecttypedescriptiondatasource/footertext(forsubtypesof:))

#### Responding to Removal

- [func extensionWillDiscardDataSource()](/documentation/photosui/phprojecttypedescriptiondatasource/extensionwilldiscarddatasource())
- [PHProjectTypeDescriptionInvalidator](/documentation/photosui/phprojecttypedescriptioninvalidator)

#### Invalidating a Project Type

- [func invalidateTypeDescription(for: PHProjectType)](/documentation/photosui/phprojecttypedescriptioninvalidator/invalidatetypedescription(for:))
- [func invalidateFooterText(forSubtypesOf: PHProjectType)](/documentation/photosui/phprojecttypedescriptioninvalidator/invalidatefootertext(forsubtypesof:))
- [PHProjectInfo.CreationSource](/documentation/photosui/phprojectinfo/creationsource-swift.enum)

#### Project Sources

- [case undefined](/documentation/photosui/phprojectinfo/creationsource-swift.enum/undefined)
- [case userSelection](/documentation/photosui/phprojectinfo/creationsource-swift.enum/userselection)
- [case album](/documentation/photosui/phprojectinfo/creationsource-swift.enum/album)
- [case memory](/documentation/photosui/phprojectinfo/creationsource-swift.enum/memory)
- [case moment](/documentation/photosui/phprojectinfo/creationsource-swift.enum/moment)
- [case project](/documentation/photosui/phprojectinfo/creationsource-swift.enum/project)
- [case projectBook](/documentation/photosui/phprojectinfo/creationsource-swift.enum/projectbook)
- [case projectCalendar](/documentation/photosui/phprojectinfo/creationsource-swift.enum/projectcalendar)
- [case projectCard](/documentation/photosui/phprojectinfo/creationsource-swift.enum/projectcard)
- [case projectPrintOrder](/documentation/photosui/phprojectinfo/creationsource-swift.enum/projectprintorder)
- [case projectSlideshow](/documentation/photosui/phprojectinfo/creationsource-swift.enum/projectslideshow)
- [case projectExtension](/documentation/photosui/phprojectinfo/creationsource-swift.enum/projectextension)

#### Initializers

- [init?(rawValue: Int)](/documentation/photosui/phprojectinfo/creationsource-swift.enum/init(rawvalue:))

### Creating a Project from an Apple Print Product

- [var brandingEnabled: Bool](/documentation/photosui/phprojectinfo/brandingenabled)
- [var pageNumbersEnabled: Bool](/documentation/photosui/phprojectinfo/pagenumbersenabled)
- [var productIdentifier: String?](/documentation/photosui/phprojectinfo/productidentifier)
- [var themeIdentifier: String?](/documentation/photosui/phprojectinfo/themeidentifier)
- [PHProjectExtensionContext](/documentation/photosui/phprojectextensioncontext)

### Accessing the Project and the Photo Library

- [var project: PHProject](/documentation/photosui/phprojectextensioncontext/project)
- [var photoLibrary: PHPhotoLibrary](/documentation/photosui/phprojectextensioncontext/photolibrary)

### Updating Assets

- [func showEditor(for: PHAsset)](/documentation/photosui/phprojectextensioncontext/showeditor(for:))
- [func updatedProjectInfo(from: PHProjectInfo?, completion: (PHProjectInfo?) -> Void) -> Progress](/documentation/photosui/phprojectextensioncontext/updatedprojectinfo(from:completion:))
- [PHProjectElement](/documentation/photosui/phprojectelement)

### Subclassing Project Elements

- [PHProjectAssetElement](/documentation/photosui/phprojectassetelement)

#### Characterizing an Asset Element

- [var annotation: String](/documentation/photosui/phprojectassetelement/annotation)
- [var cloudAssetIdentifier: PHCloudIdentifier](/documentation/photosui/phprojectassetelement/cloudassetidentifier)
- [var cropRect: CGRect](/documentation/photosui/phprojectassetelement/croprect)
- [var regionsOfInterest: [PHProjectRegionOfInterest]](/documentation/photosui/phprojectassetelement/regionsofinterest)
- [var horizontallyFlipped: Bool](/documentation/photosui/phprojectassetelement/horizontallyflipped)
- [var verticallyFlipped: Bool](/documentation/photosui/phprojectassetelement/verticallyflipped)
- [PHProjectTextElement](/documentation/photosui/phprojecttextelement)

#### Describing a Text Element

- [var text: String](/documentation/photosui/phprojecttextelement/text)
- [var attributedText: NSAttributedString?](/documentation/photosui/phprojecttextelement/attributedtext)
- [var textElementType: PHProjectTextElement.ElementType](/documentation/photosui/phprojecttextelement/textelementtype)
- [PHProjectTextElement.ElementType](/documentation/photosui/phprojecttextelement/elementtype)

##### Types of Text Elements

- [case body](/documentation/photosui/phprojecttextelement/elementtype/body)
- [case title](/documentation/photosui/phprojecttextelement/elementtype/title)
- [case subtitle](/documentation/photosui/phprojecttextelement/elementtype/subtitle)

##### Initializers

- [init?(rawValue: Int)](/documentation/photosui/phprojecttextelement/elementtype/init(rawvalue:))
- [PHProjectJournalEntryElement](/documentation/photosui/phprojectjournalentryelement)

#### Describing a Journal Entry

- [var date: Date](/documentation/photosui/phprojectjournalentryelement/date)
- [var assetElement: PHProjectAssetElement?](/documentation/photosui/phprojectjournalentryelement/assetelement)
- [var textElement: PHProjectTextElement?](/documentation/photosui/phprojectjournalentryelement/textelement)
- [PHProjectMapElement](/documentation/photosui/phprojectmapelement)

#### Pinpointing the Map

- [var mapType: MKMapType](/documentation/photosui/phprojectmapelement/maptype)
- [var centerCoordinate: CLLocationCoordinate2D](/documentation/photosui/phprojectmapelement/centercoordinate)
- [var heading: CLLocationDirection](/documentation/photosui/phprojectmapelement/heading)
- [var pitch: CGFloat](/documentation/photosui/phprojectmapelement/pitch)
- [var altitude: CLLocationDistance](/documentation/photosui/phprojectmapelement/altitude)
- [var annotations: [any MKAnnotation]](/documentation/photosui/phprojectmapelement/annotations)

### Describing Project Elements

- [var weight: Double](/documentation/photosui/phprojectelement/weight)
- [var placement: CGRect](/documentation/photosui/phprojectelement/placement)
- [PHProjectSection](/documentation/photosui/phprojectsection)

### Determining Section Contents

- [var title: String](/documentation/photosui/phprojectsection/title)
- [var sectionContents: [PHProjectSectionContent]](/documentation/photosui/phprojectsection/sectioncontents)
- [PHProjectSectionContent](/documentation/photosui/phprojectsectioncontent)

#### Determining Content Properties

- [var elements: [PHProjectElement]](/documentation/photosui/phprojectsectioncontent/elements)
- [var numberOfColumns: Int](/documentation/photosui/phprojectsectioncontent/numberofcolumns)
- [var aspectRatio: Double](/documentation/photosui/phprojectsectioncontent/aspectratio)
- [var cloudAssetIdentifiers: [PHCloudIdentifier]](/documentation/photosui/phprojectsectioncontent/cloudassetidentifiers)
- [var backgroundColor: NSColor?](/documentation/photosui/phprojectsectioncontent/backgroundcolor)

### Defining the Section Type

- [var sectionType: PHProjectSection.SectionType](/documentation/photosui/phprojectsection/sectiontype-swift.property)
- [PHProjectSection.SectionType](/documentation/photosui/phprojectsection/sectiontype-swift.enum)

#### Section Types

- [case undefined](/documentation/photosui/phprojectsection/sectiontype-swift.enum/undefined)
- [case cover](/documentation/photosui/phprojectsection/sectiontype-swift.enum/cover)
- [case content](/documentation/photosui/phprojectsection/sectiontype-swift.enum/content)
- [case auxiliary](/documentation/photosui/phprojectsection/sectiontype-swift.enum/auxiliary)

#### Initializers

- [init?(rawValue: Int)](/documentation/photosui/phprojectsection/sectiontype-swift.enum/init(rawvalue:))
- [PHProjectRegionOfInterest](/documentation/photosui/phprojectregionofinterest)

### Identifying Regions of Interest

- [PHProjectRegionOfInterest.Identifier](/documentation/photosui/phprojectregionofinterest/identifier-swift.struct)

#### Initializing an Identifier

- [init(String)](/documentation/photosui/phprojectregionofinterest/identifier-swift.struct/init(_:))
- [init(rawValue: String)](/documentation/photosui/phprojectregionofinterest/identifier-swift.struct/init(rawvalue:))

### Determining Region Properties

- [var rect: CGRect](/documentation/photosui/phprojectregionofinterest/rect)
- [var identifier: PHProjectRegionOfInterest.Identifier](/documentation/photosui/phprojectregionofinterest/identifier-swift.property)
- [var weight: Double](/documentation/photosui/phprojectregionofinterest/weight)
- [var quality: Double](/documentation/photosui/phprojectregionofinterest/quality)
- [PHProjectChangeRequest](/documentation/photos/phprojectchangerequest)
- [PHProjectExtensionController](/documentation/photosui/phprojectextensioncontroller)

### Tracking the Project Extension Life Cycle

- [func beginProject(with: PHProjectExtensionContext, projectInfo: PHProjectInfo, completion: ((any Error)?) -> Void)](/documentation/photosui/phprojectextensioncontroller/beginproject(with:projectinfo:completion:))
- [func finishProject(completionHandler: () -> Void)](/documentation/photosui/phprojectextensioncontroller/finishproject(completionhandler:))
- [func resumeProject(with: PHProjectExtensionContext, completion: ((any Error)?) -> Void)](/documentation/photosui/phprojectextensioncontroller/resumeproject(with:completion:))
- [func typeDescriptionDataSource(for: PHProjectCategory, invalidator: any PHProjectTypeDescriptionInvalidator) -> any PHProjectTypeDescriptionDataSource](/documentation/photosui/phprojectextensioncontroller/typedescriptiondatasource(for:invalidator:))

### Defining Supported Project Types

- [var supportedProjectTypes: [PHProjectTypeDescription]](/documentation/photosui/phprojectextensioncontroller/supportedprojecttypes)
- [PHProjectCategory](/documentation/photosui/phprojectcategory)

### Creating a Project Category

- [init(rawValue: String)](/documentation/photosui/phprojectcategory/init(rawvalue:))

### Designating Type Properties

- [static let book: PHProjectCategory](/documentation/photosui/phprojectcategory/book)
- [static let calendar: PHProjectCategory](/documentation/photosui/phprojectcategory/calendar)
- [static let card: PHProjectCategory](/documentation/photosui/phprojectcategory/card)
- [static let prints: PHProjectCategory](/documentation/photosui/phprojectcategory/prints)
- [static let slideshow: PHProjectCategory](/documentation/photosui/phprojectcategory/slideshow)
- [static let wallDecor: PHProjectCategory](/documentation/photosui/phprojectcategory/walldecor)
- [static let other: PHProjectCategory](/documentation/photosui/phprojectcategory/other)
- [static let undefined: PHProjectCategory](/documentation/photosui/phprojectcategory/undefined)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
