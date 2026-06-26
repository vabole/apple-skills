---
title: PhotoKit
source: https://developer.apple.com/documentation/photosui
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/index/photosui
timestamp: 2026-06-26T06:39:36.464Z
---

**Navigation:** [PhotosUI](/documentation/photosui)

## Frameworks

- [Photos](/documentation/photos)
### Shared photo library

- [PHPhotoLibrary](/documentation/photos/phphotolibrary)
#### Verifying Authorization

- [class func authorizationStatus(for: PHAccessLevel) -> PHAuthorizationStatus](/documentation/photos/phphotolibrary/authorizationstatus(for:))
- [class func requestAuthorization(for: PHAccessLevel, handler: (PHAuthorizationStatus) -> Void)](/documentation/photos/phphotolibrary/requestauthorization(for:handler:))
- [PHAccessLevel](/documentation/photos/phaccesslevel)
##### Access Levels

- [case addOnly](/documentation/photos/phaccesslevel/addonly)
- [case readWrite](/documentation/photos/phaccesslevel/readwrite)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phaccesslevel/init(rawvalue:))

- [PHAuthorizationStatus](/documentation/photos/phauthorizationstatus)
##### Status Types

- [case notDetermined](/documentation/photos/phauthorizationstatus/notdetermined)
- [case restricted](/documentation/photos/phauthorizationstatus/restricted)
- [case denied](/documentation/photos/phauthorizationstatus/denied)
- [case authorized](/documentation/photos/phauthorizationstatus/authorized)
- [case limited](/documentation/photos/phauthorizationstatus/limited)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phauthorizationstatus/init(rawvalue:))

- [class func authorizationStatus() -> PHAuthorizationStatus](/documentation/photos/phphotolibrary/authorizationstatus())
- [class func requestAuthorization((PHAuthorizationStatus) -> Void)](/documentation/photos/phphotolibrary/requestauthorization(_:))
#### Accessing the Shared Library

- [class func shared() -> PHPhotoLibrary](/documentation/photos/phphotolibrary/shared())
#### Presenting the Limited Library Picker

- [func presentLimitedLibraryPicker(from: UIViewController)](/documentation/photos/phphotolibrary/presentlimitedlibrarypicker(from:))
- [func presentLimitedLibraryPicker(from: UIViewController, completionHandler: ([String]) -> Void)](/documentation/photos/phphotolibrary/presentlimitedlibrarypicker(from:completionhandler:))
#### Updating the Library

- [Requesting Changes to the Photo Library](/documentation/photokit/requesting-changes-to-the-photo-library)
- [func performChanges(() -> Void, completionHandler: ((Bool, (any Error)?) -> Void)?)](/documentation/photos/phphotolibrary/performchanges(_:completionhandler:))
- [func performChangesAndWait(() -> Void) throws](/documentation/photos/phphotolibrary/performchangesandwait(_:))
- [PHChangeRequest](/documentation/photos/phchangerequest)
- [PHAssetChangeRequest](/documentation/photos/phassetchangerequest)
##### Adding New Assets

- [class func creationRequestForAsset(from: UIImage) -> Self](/documentation/photos/phassetchangerequest/creationrequestforasset(from:))
- [class func creationRequestForAssetFromImage(atFileURL: URL) -> Self?](/documentation/photos/phassetchangerequest/creationrequestforassetfromimage(atfileurl:))
- [class func creationRequestForAssetFromVideo(atFileURL: URL) -> Self?](/documentation/photos/phassetchangerequest/creationrequestforassetfromvideo(atfileurl:))
- [var placeholderForCreatedAsset: PHObjectPlaceholder?](/documentation/photos/phassetchangerequest/placeholderforcreatedasset)
##### Deleting Assets

- [class func deleteAssets(any NSFastEnumeration)](/documentation/photos/phassetchangerequest/deleteassets(_:))
##### Modifying Assets

- [convenience init(for: PHAsset)](/documentation/photos/phassetchangerequest/init(for:))
- [var creationDate: Date?](/documentation/photos/phassetchangerequest/creationdate)
- [var location: CLLocation?](/documentation/photos/phassetchangerequest/location)
- [var isFavorite: Bool](/documentation/photos/phassetchangerequest/isfavorite)
- [var isHidden: Bool](/documentation/photos/phassetchangerequest/ishidden)
##### Editing Asset Content

- [var contentEditingOutput: PHContentEditingOutput?](/documentation/photos/phassetchangerequest/contenteditingoutput)
- [func revertAssetContentToOriginal()](/documentation/photos/phassetchangerequest/revertassetcontenttooriginal())
##### Initializers

- [convenience init(forAsset: PHAsset)](/documentation/photos/phassetchangerequest/init(forasset:))
##### Instance Properties

- [var rating: PHAsset.Rating](/documentation/photos/phassetchangerequest/rating)
##### Instance Methods

- [func revertAssetContent(to: PHAsset.OriginalResourceChoice)](/documentation/photos/phassetchangerequest/revertassetcontent(to:))
- [func setLivePhotoVideoPlaybackEnabled(Bool)](/documentation/photos/phassetchangerequest/setlivephotovideoplaybackenabled(_:))

- [PHAssetCollectionChangeRequest](/documentation/photos/phassetcollectionchangerequest)
##### Adding New Asset Collections

- [class func creationRequestForAssetCollection(withTitle: String) -> Self](/documentation/photos/phassetcollectionchangerequest/creationrequestforassetcollection(withtitle:))
- [var placeholderForCreatedAssetCollection: PHObjectPlaceholder](/documentation/photos/phassetcollectionchangerequest/placeholderforcreatedassetcollection)
##### Deleting Asset Collections

- [class func deleteAssetCollections(any NSFastEnumeration)](/documentation/photos/phassetcollectionchangerequest/deleteassetcollections(_:))
##### Modifying Asset Collections

- [convenience init?(for: PHAssetCollection)](/documentation/photos/phassetcollectionchangerequest/init(for:))
- [convenience init?(for: PHAssetCollection, assets: PHFetchResult<PHAsset>?)](/documentation/photos/phassetcollectionchangerequest/init(for:assets:))
- [var title: String](/documentation/photos/phassetcollectionchangerequest/title)
- [func addAssets(any NSFastEnumeration)](/documentation/photos/phassetcollectionchangerequest/addassets(_:))
- [func insertAssets(any NSFastEnumeration, at: IndexSet)](/documentation/photos/phassetcollectionchangerequest/insertassets(_:at:))
- [func removeAssets(any NSFastEnumeration)](/documentation/photos/phassetcollectionchangerequest/removeassets(_:))
- [func removeAssets(at: IndexSet)](/documentation/photos/phassetcollectionchangerequest/removeassets(at:))
- [func replaceAssets(at: IndexSet, withAssets: any NSFastEnumeration)](/documentation/photos/phassetcollectionchangerequest/replaceassets(at:withassets:))
- [func moveAssets(at: IndexSet, to: Int)](/documentation/photos/phassetcollectionchangerequest/moveassets(at:to:))
##### Initializers

- [convenience init?(forAssetCollection: PHAssetCollection)](/documentation/photos/phassetcollectionchangerequest/init(forassetcollection:))
- [convenience init?(forAssetCollection: PHAssetCollection, assets: PHFetchResult<PHAsset>?)](/documentation/photos/phassetcollectionchangerequest/init(forassetcollection:assets:))

- [PHCollectionListChangeRequest](/documentation/photos/phcollectionlistchangerequest)
##### Creating a Change Request

- [convenience init?(for: PHCollectionList)](/documentation/photos/phcollectionlistchangerequest/init(for:))
- [convenience init?(for: PHCollectionList, childCollections: PHFetchResult<PHCollection>)](/documentation/photos/phcollectionlistchangerequest/init(for:childcollections:))
- [convenience init?(forTopLevelCollectionListUserCollections: PHFetchResult<PHCollection>)](/documentation/photos/phcollectionlistchangerequest/init(fortoplevelcollectionlistusercollections:))
##### Managing Collection Lists

- [class func creationRequestForCollectionList(withTitle: String) -> Self](/documentation/photos/phcollectionlistchangerequest/creationrequestforcollectionlist(withtitle:))
- [var placeholderForCreatedCollectionList: PHObjectPlaceholder](/documentation/photos/phcollectionlistchangerequest/placeholderforcreatedcollectionlist)
- [class func deleteCollectionLists(any NSFastEnumeration)](/documentation/photos/phcollectionlistchangerequest/deletecollectionlists(_:))
##### Managing Collections

- [func addChildCollections(any NSFastEnumeration)](/documentation/photos/phcollectionlistchangerequest/addchildcollections(_:))
- [func insertChildCollections(any NSFastEnumeration, at: IndexSet)](/documentation/photos/phcollectionlistchangerequest/insertchildcollections(_:at:))
- [func moveChildCollections(at: IndexSet, to: Int)](/documentation/photos/phcollectionlistchangerequest/movechildcollections(at:to:))
- [func replaceChildCollections(at: IndexSet, withChildCollections: any NSFastEnumeration)](/documentation/photos/phcollectionlistchangerequest/replacechildcollections(at:withchildcollections:))
- [func removeChildCollections(any NSFastEnumeration)](/documentation/photos/phcollectionlistchangerequest/removechildcollections(_:))
- [func removeChildCollections(at: IndexSet)](/documentation/photos/phcollectionlistchangerequest/removechildcollections(at:))
##### Inspecting the Request

- [var title: String](/documentation/photos/phcollectionlistchangerequest/title)
##### Initializers

- [convenience init?(forCollectionList: PHCollectionList)](/documentation/photos/phcollectionlistchangerequest/init(forcollectionlist:))
- [convenience init?(forCollectionList: PHCollectionList, childCollections: PHFetchResult<PHCollection>)](/documentation/photos/phcollectionlistchangerequest/init(forcollectionlist:childcollections:))

- [PHObjectPlaceholder](/documentation/photos/phobjectplaceholder)
#### Fetching Change History

- [func fetchPersistentChanges(since: PHPersistentChangeToken) throws -> PHPersistentChangeFetchResult](/documentation/photos/phphotolibrary/fetchpersistentchanges(since:))
- [PHPersistentChangeFetchResult](/documentation/photos/phpersistentchangefetchresult)
##### Performing Operations with Objects in a Fetch Request

- [PHPersistentChange](/documentation/photos/phpersistentchange)
###### Getting the Change Token

- [var changeToken: PHPersistentChangeToken](/documentation/photos/phpersistentchange/changetoken)
- [PHPersistentChangeToken](/documentation/photos/phpersistentchangetoken)
###### Initializers

- [init?(coder: NSCoder)](/documentation/photos/phpersistentchangetoken/init(coder:))

###### Getting the Change History

- [func changeDetails(for: PHObjectType) throws -> PHPersistentObjectChangeDetails](/documentation/photos/phpersistentchange/changedetails(for:))
- [PHPersistentObjectChangeDetails](/documentation/photos/phpersistentobjectchangedetails)
###### Getting the Object Type

- [var objectType: PHObjectType](/documentation/photos/phpersistentobjectchangedetails/objecttype)
- [PHObjectType](/documentation/photos/phobjecttype)
###### Constants

- [case asset](/documentation/photos/phobjecttype/asset)
- [case assetCollection](/documentation/photos/phobjecttype/assetcollection)
- [case collectionList](/documentation/photos/phobjecttype/collectionlist)
###### Initializers

- [init?(rawValue: Int)](/documentation/photos/phobjecttype/init(rawvalue:))

###### Getting the Change Details

- [var insertedLocalIdentifiers: Set<String>](/documentation/photos/phpersistentobjectchangedetails/insertedlocalidentifiers)
- [var updatedLocalIdentifiers: Set<String>](/documentation/photos/phpersistentobjectchangedetails/updatedlocalidentifiers)
- [var deletedLocalIdentifiers: Set<String>](/documentation/photos/phpersistentobjectchangedetails/deletedlocalidentifiers)



- [var currentChangeToken: PHPersistentChangeToken](/documentation/photos/phphotolibrary/currentchangetoken)
- [PHPersistentChangeToken](/documentation/photos/phpersistentchangetoken)
##### Initializers

- [init?(coder: NSCoder)](/documentation/photos/phpersistentchangetoken/init(coder:))

#### Observing Library Changes

- [Observing Changes in the Photo Library](/documentation/photokit/observing-changes-in-the-photo-library)
- [func register(any PHPhotoLibraryChangeObserver)](/documentation/photos/phphotolibrary/register(_:)-6y3b9)
- [func unregisterChangeObserver(any PHPhotoLibraryChangeObserver)](/documentation/photos/phphotolibrary/unregisterchangeobserver(_:))
- [PHPhotoLibraryChangeObserver](/documentation/photos/phphotolibrarychangeobserver)
##### Observing Photo Library Changes

- [func photoLibraryDidChange(PHChange)](/documentation/photos/phphotolibrarychangeobserver/photolibrarydidchange(_:))

- [PHChange](/documentation/photos/phchange)
##### Getting Change Details

- [func changeDetails(for: PHFetchResult<AnyObject>) -> PHFetchResultChangeDetails<PHObject>?](/documentation/photos/phchange/changedetails(for:)-33a6n)
- [func changeDetails<T>(for: T) -> PHObjectChangeDetails<T>?](/documentation/photos/phchange/changedetails(for:)-536rd)
- [func changeDetails<T>(for: PHFetchResult<T>) -> PHFetchResultChangeDetails<T>?](/documentation/photos/phchange/changedetails(for:)-2fne7)

- [PHObjectChangeDetails](/documentation/photos/phobjectchangedetails)
##### Getting the Changed Object

- [var objectBeforeChanges: ObjectType](/documentation/photos/phobjectchangedetails/objectbeforechanges)
- [var objectAfterChanges: ObjectType?](/documentation/photos/phobjectchangedetails/objectafterchanges)
##### Getting Change Information

- [var assetContentChanged: Bool](/documentation/photos/phobjectchangedetails/assetcontentchanged)
- [var objectWasDeleted: Bool](/documentation/photos/phobjectchangedetails/objectwasdeleted)

- [PHFetchResultChangeDetails](/documentation/photos/phfetchresultchangedetails)
##### Getting the Changed Fetch Result

- [var fetchResultBeforeChanges: PHFetchResult<ObjectType>](/documentation/photos/phfetchresultchangedetails/fetchresultbeforechanges)
- [var fetchResultAfterChanges: PHFetchResult<ObjectType>](/documentation/photos/phfetchresultchangedetails/fetchresultafterchanges)
##### Getting Change Information

- [var hasIncrementalChanges: Bool](/documentation/photos/phfetchresultchangedetails/hasincrementalchanges)
- [var removedIndexes: IndexSet?](/documentation/photos/phfetchresultchangedetails/removedindexes)
- [var removedObjects: [ObjectType]](/documentation/photos/phfetchresultchangedetails/removedobjects)
- [var insertedIndexes: IndexSet?](/documentation/photos/phfetchresultchangedetails/insertedindexes)
- [var insertedObjects: [ObjectType]](/documentation/photos/phfetchresultchangedetails/insertedobjects)
- [var changedIndexes: IndexSet?](/documentation/photos/phfetchresultchangedetails/changedindexes)
- [var changedObjects: [ObjectType]](/documentation/photos/phfetchresultchangedetails/changedobjects)
- [var hasMoves: Bool](/documentation/photos/phfetchresultchangedetails/hasmoves)
- [func enumerateMoves((Int, Int) -> Void)](/documentation/photos/phfetchresultchangedetails/enumeratemoves(_:))
##### Comparing Fetch Results

- [convenience init(from: PHFetchResult<ObjectType>, to: PHFetchResult<ObjectType>, changedObjects: [ObjectType])](/documentation/photos/phfetchresultchangedetails/init(from:to:changedobjects:))
##### Initializers

- [convenience init(fromFetchResult: PHFetchResult<ObjectType>, toFetchResult: PHFetchResult<ObjectType>, changedObjects: [ObjectType])](/documentation/photos/phfetchresultchangedetails/init(fromfetchresult:tofetchresult:changedobjects:))

#### Observing Library Availability

- [func register(any PHPhotoLibraryAvailabilityObserver)](/documentation/photos/phphotolibrary/register(_:)-gm0a)
- [func unregisterAvailabilityObserver(any PHPhotoLibraryAvailabilityObserver)](/documentation/photos/phphotolibrary/unregisteravailabilityobserver(_:))
- [PHPhotoLibraryAvailabilityObserver](/documentation/photos/phphotolibraryavailabilityobserver)
##### Observing Availability Changes

- [func photoLibraryDidBecomeUnavailable(PHPhotoLibrary)](/documentation/photos/phphotolibraryavailabilityobserver/photolibrarydidbecomeunavailable(_:))

- [var unavailabilityReason: (any Error)?](/documentation/photos/phphotolibrary/unavailabilityreason)
#### Converting Between Local and iCloud Identifiers

- [func cloudIdentifierMappings(forLocalIdentifiers: [String]) -> [String : Result<PHCloudIdentifier, any Error>]](/documentation/photos/phphotolibrary/cloudidentifiermappings(forlocalidentifiers:))
- [func localIdentifierMappings(for: [PHCloudIdentifier]) -> [PHCloudIdentifier : Result<String, any Error>]](/documentation/photos/phphotolibrary/localidentifiermappings(for:))
- [PHCloudIdentifier](/documentation/photos/phcloudidentifier)
##### Using Cloud Identifiers

- [init(stringValue: String)](/documentation/photos/phcloudidentifier/init(stringvalue:))
- [var stringValue: String](/documentation/photos/phcloudidentifier/stringvalue)
- [class var notFound: PHCloudIdentifier](/documentation/photos/phcloudidentifier/notfound)
##### Initializers

- [init?(archivalStringValue: String)](/documentation/photos/phcloudidentifier/init(archivalstringvalue:))
- [init?(coder: NSCoder)](/documentation/photos/phcloudidentifier/init(coder:))
##### Instance Properties

- [var archivalStringValue: String](/documentation/photos/phcloudidentifier/archivalstringvalue)

- [func cloudIdentifiers(forLocalIdentifiers: [String]) -> [PHCloudIdentifier]](/documentation/photos/phphotolibrary/cloudidentifiers(forlocalidentifiers:))
- [func localIdentifiers(for: [PHCloudIdentifier]) -> [String]](/documentation/photos/phphotolibrary/localidentifiers(for:))
- [let PHLocalIdentifierNotFound: String](/documentation/photos/phlocalidentifiernotfound)
#### Enabling an Upload Job Extension

- [var uploadJobExtensionEnabled: Bool](/documentation/photos/phphotolibrary/uploadjobextensionenabled)
- [func setUploadJobExtensionEnabled(Bool) throws](/documentation/photos/phphotolibrary/setuploadjobextensionenabled(_:))
#### Instance Methods

- [func localIdentifierMappings(forSynced: [PHCloudIdentifier]) -> [PHCloudIdentifier : Result<String, any Error>]](/documentation/photos/phphotolibrary/localidentifiermappings(forsynced:))
- [func register(any PHPhotoLibraryPersistentChangesObserver)](/documentation/photos/phphotolibrary/register(_:)-7lhue)
- [func unregisterPersistentChangesObserver(any PHPhotoLibraryPersistentChangesObserver)](/documentation/photos/phphotolibrary/unregisterpersistentchangesobserver(_:))

### Asset retrieval

- [Fetching Objects and Requesting Changes](/documentation/photokit/fetching-objects-and-requesting-changes)
- [PHAsset](/documentation/photos/phasset)
#### Fetching Assets

- [Fetching Assets](/documentation/photokit/fetching-assets)
- [class func fetchAssets(in: PHAssetCollection, options: PHFetchOptions?) -> PHFetchResult<PHAsset>](/documentation/photos/phasset/fetchassets(in:options:))
- [class func fetchAssets(with: PHAssetMediaType, options: PHFetchOptions?) -> PHFetchResult<PHAsset>](/documentation/photos/phasset/fetchassets(with:options:))
- [class func fetchAssets(withLocalIdentifiers: [String], options: PHFetchOptions?) -> PHFetchResult<PHAsset>](/documentation/photos/phasset/fetchassets(withlocalidentifiers:options:))
- [class func fetchKeyAssets(in: PHAssetCollection, options: PHFetchOptions?) -> PHFetchResult<PHAsset>?](/documentation/photos/phasset/fetchkeyassets(in:options:))
- [class func fetchAssets(with: PHFetchOptions?) -> PHFetchResult<PHAsset>](/documentation/photos/phasset/fetchassets(with:))
- [class func fetchAssets(withBurstIdentifier: String, options: PHFetchOptions?) -> PHFetchResult<PHAsset>](/documentation/photos/phasset/fetchassets(withburstidentifier:options:))
- [class func fetchAssets(withALAssetURLs: [URL], options: PHFetchOptions?) -> PHFetchResult<PHAsset>](/documentation/photos/phasset/fetchassets(withalasseturls:options:))
#### Reading Asset Metadata

- [var contentType: UTType](/documentation/photos/phasset/contenttype)
- [var mediaType: PHAssetMediaType](/documentation/photos/phasset/mediatype)
- [PHAssetMediaType](/documentation/photos/phassetmediatype)
##### Constants

- [case unknown](/documentation/photos/phassetmediatype/unknown)
- [case image](/documentation/photos/phassetmediatype/image)
- [case video](/documentation/photos/phassetmediatype/video)
- [case audio](/documentation/photos/phassetmediatype/audio)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phassetmediatype/init(rawvalue:))

- [var mediaSubtypes: PHAssetMediaSubtype](/documentation/photos/phasset/mediasubtypes)
- [PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype)
##### Initializers

- [init(rawValue: UInt)](/documentation/photos/phassetmediasubtype/init(rawvalue:))
##### Media Subtypes

- [static var photoPanorama: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/photopanorama)
- [static var photoHDR: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/photohdr)
- [static var photoScreenshot: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/photoscreenshot)
- [static var photoLive: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/photolive)
- [static var videoCinematic: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/videocinematic)
- [static var videoStreamed: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/videostreamed)
- [static var videoHighFrameRate: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/videohighframerate)
- [static var videoTimelapse: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/videotimelapse)
- [static var photoDepthEffect: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/photodeptheffect)
##### Type Properties

- [static var photoAnimation: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/photoanimation)
- [static var spatialMedia: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/spatialmedia)
- [static var videoScreenRecording: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/videoscreenrecording)

- [var sourceType: PHAssetSourceType](/documentation/photos/phasset/sourcetype)
- [PHAssetSourceType](/documentation/photos/phassetsourcetype)
##### Initializers

- [init(rawValue: UInt)](/documentation/photos/phassetsourcetype/init(rawvalue:))
##### Constants

- [static var typeUserLibrary: PHAssetSourceType](/documentation/photos/phassetsourcetype/typeuserlibrary)
- [static var typeCloudShared: PHAssetSourceType](/documentation/photos/phassetsourcetype/typecloudshared)
- [static var typeiTunesSynced: PHAssetSourceType](/documentation/photos/phassetsourcetype/typeitunessynced)

- [var pixelWidth: Int](/documentation/photos/phasset/pixelwidth)
- [var pixelHeight: Int](/documentation/photos/phasset/pixelheight)
- [var addedDate: Date](/documentation/photos/phasset/addeddate)
- [var creationDate: Date?](/documentation/photos/phasset/creationdate)
- [var modificationDate: Date?](/documentation/photos/phasset/modificationdate)
- [var location: CLLocation?](/documentation/photos/phasset/location)
- [var duration: TimeInterval](/documentation/photos/phasset/duration)
- [var isFavorite: Bool](/documentation/photos/phasset/isfavorite)
- [var isHidden: Bool](/documentation/photos/phasset/ishidden)
- [var hasAdjustments: Bool](/documentation/photos/phasset/hasadjustments)
- [var adjustmentFormatIdentifier: String?](/documentation/photos/phasset/adjustmentformatidentifier)
- [var isSyncFailureHidden: Bool](/documentation/photos/phasset/issyncfailurehidden)
#### Displaying an Asset

- [var playbackStyle: PHAsset.PlaybackStyle](/documentation/photos/phasset/playbackstyle-swift.property)
- [PHAsset.PlaybackStyle](/documentation/photos/phasset/playbackstyle-swift.enum)
##### Playback Styles

- [case unsupported](/documentation/photos/phasset/playbackstyle-swift.enum/unsupported)
- [case image](/documentation/photos/phasset/playbackstyle-swift.enum/image)
- [case imageAnimated](/documentation/photos/phasset/playbackstyle-swift.enum/imageanimated)
- [case livePhoto](/documentation/photos/phasset/playbackstyle-swift.enum/livephoto)
- [case video](/documentation/photos/phasset/playbackstyle-swift.enum/video)
- [case videoLooping](/documentation/photos/phasset/playbackstyle-swift.enum/videolooping)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phasset/playbackstyle-swift.enum/init(rawvalue:))

#### Editing an Asset

- [Editing Asset Content](/documentation/photokit/editing-asset-content)
- [PHContentEditingInput](/documentation/photos/phcontenteditinginput)
##### Getting Information About the Asset

- [var mediaType: PHAssetMediaType](/documentation/photos/phcontenteditinginput/mediatype)
- [PHAssetMediaType](/documentation/photos/phassetmediatype)
###### Constants

- [case unknown](/documentation/photos/phassetmediatype/unknown)
- [case image](/documentation/photos/phassetmediatype/image)
- [case video](/documentation/photos/phassetmediatype/video)
- [case audio](/documentation/photos/phassetmediatype/audio)
###### Initializers

- [init?(rawValue: Int)](/documentation/photos/phassetmediatype/init(rawvalue:))

- [var mediaSubtypes: PHAssetMediaSubtype](/documentation/photos/phcontenteditinginput/mediasubtypes)
- [PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype)
###### Initializers

- [init(rawValue: UInt)](/documentation/photos/phassetmediasubtype/init(rawvalue:))
###### Media Subtypes

- [static var photoPanorama: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/photopanorama)
- [static var photoHDR: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/photohdr)
- [static var photoScreenshot: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/photoscreenshot)
- [static var photoLive: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/photolive)
- [static var videoCinematic: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/videocinematic)
- [static var videoStreamed: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/videostreamed)
- [static var videoHighFrameRate: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/videohighframerate)
- [static var videoTimelapse: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/videotimelapse)
- [static var photoDepthEffect: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/photodeptheffect)
###### Type Properties

- [static var photoAnimation: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/photoanimation)
- [static var spatialMedia: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/spatialmedia)
- [static var videoScreenRecording: PHAssetMediaSubtype](/documentation/photos/phassetmediasubtype/videoscreenrecording)

- [var creationDate: Date?](/documentation/photos/phcontenteditinginput/creationdate)
- [var location: CLLocation?](/documentation/photos/phcontenteditinginput/location)
- [var uniformTypeIdentifier: String?](/documentation/photos/phcontenteditinginput/uniformtypeidentifier)
##### Working with Previous Edits

- [var adjustmentData: PHAdjustmentData?](/documentation/photos/phcontenteditinginput/adjustmentdata)
##### Working with Photo Assets

- [var displaySizeImage: UIImage?](/documentation/photos/phcontenteditinginput/displaysizeimage)
- [var fullSizeImageOrientation: Int32](/documentation/photos/phcontenteditinginput/fullsizeimageorientation)
- [var fullSizeImageURL: URL?](/documentation/photos/phcontenteditinginput/fullsizeimageurl)
##### Working with Video Assets

- [var audiovisualAsset: AVAsset?](/documentation/photos/phcontenteditinginput/audiovisualasset)
- [var avAsset: AVAsset?](/documentation/photos/phcontenteditinginput/avasset)
##### Working with Live Photo Assets

- [var livePhoto: PHLivePhoto?](/documentation/photos/phcontenteditinginput/livephoto)
- [var playbackStyle: PHAsset.PlaybackStyle](/documentation/photos/phcontenteditinginput/playbackstyle)
- [PHAsset.PlaybackStyle](/documentation/photos/phasset/playbackstyle-swift.enum)
###### Playback Styles

- [case unsupported](/documentation/photos/phasset/playbackstyle-swift.enum/unsupported)
- [case image](/documentation/photos/phasset/playbackstyle-swift.enum/image)
- [case imageAnimated](/documentation/photos/phasset/playbackstyle-swift.enum/imageanimated)
- [case livePhoto](/documentation/photos/phasset/playbackstyle-swift.enum/livephoto)
- [case video](/documentation/photos/phasset/playbackstyle-swift.enum/video)
- [case videoLooping](/documentation/photos/phasset/playbackstyle-swift.enum/videolooping)
###### Initializers

- [init?(rawValue: Int)](/documentation/photos/phasset/playbackstyle-swift.enum/init(rawvalue:))

##### Instance Properties

- [var contentType: UTType?](/documentation/photos/phcontenteditinginput/contenttype)

- [PHContentEditingOutput](/documentation/photos/phcontenteditingoutput)
##### Creating an Output Object to Edit an Existing Asset

- [init(contentEditingInput: PHContentEditingInput)](/documentation/photos/phcontenteditingoutput/init(contenteditinginput:))
##### Creating an Output Object to Edit a Newly Created Asset

- [init(placeholderForCreatedAsset: PHObjectPlaceholder)](/documentation/photos/phcontenteditingoutput/init(placeholderforcreatedasset:))
##### Providing Edit and Adjustment Data

- [var adjustmentData: PHAdjustmentData?](/documentation/photos/phcontenteditingoutput/adjustmentdata)
- [var renderedContentURL: URL](/documentation/photos/phcontenteditingoutput/renderedcontenturl)
##### Instance Properties

- [var defaultRenderedContentType: UTType?](/documentation/photos/phcontenteditingoutput/defaultrenderedcontenttype)
- [var supportedRenderedContentTypes: [UTType]](/documentation/photos/phcontenteditingoutput/supportedrenderedcontenttypes)
##### Instance Methods

- [func renderedContentURL(for: UTType) throws -> URL](/documentation/photos/phcontenteditingoutput/renderedcontenturl(for:))

- [PHAdjustmentData](/documentation/photos/phadjustmentdata)
##### Creating an Adjustment

- [init(formatIdentifier: String, formatVersion: String, data: Data)](/documentation/photos/phadjustmentdata/init(formatidentifier:formatversion:data:))
##### Identifying the Format of an Adjustment’s Data

- [var formatIdentifier: String](/documentation/photos/phadjustmentdata/formatidentifier)
- [var formatVersion: String](/documentation/photos/phadjustmentdata/formatversion)
##### Reading an Adjustment’s Data

- [var data: Data](/documentation/photos/phadjustmentdata/data)

- [PHContentEditingInputRequestOptions](/documentation/photos/phcontenteditinginputrequestoptions)
##### Specifying Edting Request Options

- [var canHandleAdjustmentData: (PHAdjustmentData) -> Bool](/documentation/photos/phcontenteditinginputrequestoptions/canhandleadjustmentdata)
##### Fetching Asset Data from iCloud

- [var isNetworkAccessAllowed: Bool](/documentation/photos/phcontenteditinginputrequestoptions/isnetworkaccessallowed)
- [var progressHandler: ((Double, UnsafeMutablePointer<ObjCBool>) -> Void)?](/documentation/photos/phcontenteditinginputrequestoptions/progresshandler)
##### Instance Properties

- [var originalResourceChoice: PHAsset.OriginalResourceChoice](/documentation/photos/phcontenteditinginputrequestoptions/originalresourcechoice)
- [var skipsDisplaySizeImage: Bool](/documentation/photos/phcontenteditinginputrequestoptions/skipsdisplaysizeimage)

- [PHLivePhotoEditingContext](/documentation/photos/phlivephotoeditingcontext)
##### Creating a Live Photo Editing Context

- [init?(livePhotoEditingInput: PHContentEditingInput)](/documentation/photos/phlivephotoeditingcontext/init(livephotoeditinginput:))
##### Preparing an Editing Context for Processing

- [var frameProcessor: PHLivePhotoFrameProcessingBlock?](/documentation/photos/phlivephotoeditingcontext/frameprocessor)
- [PHLivePhotoFrameProcessingBlock](/documentation/photos/phlivephotoframeprocessingblock)
- [var audioVolume: Float](/documentation/photos/phlivephotoeditingcontext/audiovolume)
##### Processing an Editing Context’s Live Photo

- [func saveLivePhoto(to: PHContentEditingOutput, options: [String : Any]?, completionHandler: (Bool, (any Error)?) -> Void)](/documentation/photos/phlivephotoeditingcontext/savelivephoto(to:options:completionhandler:))
- [func prepareLivePhotoForPlayback(withTargetSize: CGSize, options: [String : Any]?, completionHandler: (PHLivePhoto?, (any Error)?) -> Void)](/documentation/photos/phlivephotoeditingcontext/preparelivephotoforplayback(withtargetsize:options:completionhandler:))
- [PHLivePhotoEditingOption](/documentation/photos/phlivephotoeditingoption)
###### Initializers

- [init(rawValue: String)](/documentation/photos/phlivephotoeditingoption/init(rawvalue:))
###### Type Properties

- [static let shouldRenderAtPlaybackTime: PHLivePhotoEditingOption](/documentation/photos/phlivephotoeditingoption/shouldrenderatplaybacktime)

- [func cancel()](/documentation/photos/phlivephotoeditingcontext/cancel())
##### Examining an Editing Context’s Live Photo

- [var fullSizeImage: CIImage](/documentation/photos/phlivephotoeditingcontext/fullsizeimage)
- [var duration: CMTime](/documentation/photos/phlivephotoeditingcontext/duration)
- [var photoTime: CMTime](/documentation/photos/phlivephotoeditingcontext/phototime)
- [var orientation: CGImagePropertyOrientation](/documentation/photos/phlivephotoeditingcontext/orientation)
##### Errors

- [let PHLivePhotoEditingErrorDomain: String](/documentation/photos/phlivephotoeditingerrordomain)
- [PHLivePhotoEditingErrorCode](/documentation/photos/phlivephotoeditingerrorcode)
###### Constants

- [case unknown](/documentation/photos/phlivephotoeditingerrorcode/unknown)
- [case aborted](/documentation/photos/phlivephotoeditingerrorcode/aborted)
###### Initializers

- [init?(rawValue: Int)](/documentation/photos/phlivephotoeditingerrorcode/init(rawvalue:))


- [PHLivePhotoFrame](/documentation/photos/phlivephotoframe)
##### Editing the Frame Image

- [var image: CIImage](/documentation/photos/phlivephotoframe/image)
##### Getting Information About the Frame

- [var renderScale: CGFloat](/documentation/photos/phlivephotoframe/renderscale)
- [var time: CMTime](/documentation/photos/phlivephotoframe/time)
- [var type: PHLivePhotoFrameType](/documentation/photos/phlivephotoframe/type)
- [PHLivePhotoFrameType](/documentation/photos/phlivephotoframetype)
###### Constants

- [case photo](/documentation/photos/phlivephotoframetype/photo)
- [case video](/documentation/photos/phlivephotoframetype/video)
###### Initializers

- [init?(rawValue: Int)](/documentation/photos/phlivephotoframetype/init(rawvalue:))


- [func canPerform(PHAssetEditOperation) -> Bool](/documentation/photos/phasset/canperform(_:))
- [PHAssetEditOperation](/documentation/photos/phasseteditoperation)
##### Constants

- [case delete](/documentation/photos/phasseteditoperation/delete)
- [case content](/documentation/photos/phasseteditoperation/content)
- [case properties](/documentation/photos/phasseteditoperation/properties)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phasseteditoperation/init(rawvalue:))

- [func requestContentEditingInput(with: PHContentEditingInputRequestOptions?, completionHandler: (PHContentEditingInput?, [AnyHashable : Any]) -> Void) -> PHContentEditingInputRequestID](/documentation/photos/phasset/requestcontenteditinginput(with:completionhandler:))
- [func cancelContentEditingInputRequest(PHContentEditingInputRequestID)](/documentation/photos/phasset/cancelcontenteditinginputrequest(_:))
- [PHContentEditingInputRequestID](/documentation/photos/phcontenteditinginputrequestid)
- [Editing Request Info Keys](/documentation/photokit/editing-request-info-keys)
##### Constants

- [let PHContentEditingInputResultIsInCloudKey: String](/documentation/photos/phcontenteditinginputresultisincloudkey)
- [let PHContentEditingInputCancelledKey: String](/documentation/photos/phcontenteditinginputcancelledkey)
- [let PHContentEditingInputErrorKey: String](/documentation/photos/phcontenteditinginputerrorkey)

#### Working with Burst Photo Assets

- [var burstIdentifier: String?](/documentation/photos/phasset/burstidentifier)
- [var burstSelectionTypes: PHAssetBurstSelectionType](/documentation/photos/phasset/burstselectiontypes)
- [PHAssetBurstSelectionType](/documentation/photos/phassetburstselectiontype)
##### Initializers

- [init(rawValue: UInt)](/documentation/photos/phassetburstselectiontype/init(rawvalue:))
##### Constants

- [static var autoPick: PHAssetBurstSelectionType](/documentation/photos/phassetburstselectiontype/autopick)
- [static var userPick: PHAssetBurstSelectionType](/documentation/photos/phassetburstselectiontype/userpick)

- [var representsBurst: Bool](/documentation/photos/phasset/representsburst)
#### Instance Properties

- [var adjustmentTimestamp: Date?](/documentation/photos/phasset/adjustmenttimestamp)
- [var adjustmentsState: PHAsset.AdjustmentsState](/documentation/photos/phasset/adjustmentsstate-swift.property)
- [var originalResourceChoice: PHAsset.OriginalResourceChoice](/documentation/photos/phasset/originalresourcechoice-swift.property)
- [var rating: PHAsset.Rating](/documentation/photos/phasset/rating-swift.property)
#### Type Aliases

- [PHAsset.Specification](/documentation/photos/phasset/specification)
- [PHAsset.UnwrappedType](/documentation/photos/phasset/unwrappedtype)
- [PHAsset.ValueType](/documentation/photos/phasset/valuetype)
#### Type Properties

- [static let defaultResolverSpecification: EmptyResolverSpecification<PHAsset>](/documentation/photos/phasset/defaultresolverspecification)
#### Enumerations

- [PHAsset.AdjustmentsState](/documentation/photos/phasset/adjustmentsstate-swift.enum)
##### Enumeration Cases

- [case cameraAutoAdjusted](/documentation/photos/phasset/adjustmentsstate-swift.enum/cameraautoadjusted)
- [case none](/documentation/photos/phasset/adjustmentsstate-swift.enum/none)
- [case userAdjusted](/documentation/photos/phasset/adjustmentsstate-swift.enum/useradjusted)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phasset/adjustmentsstate-swift.enum/init(rawvalue:))

- [PHAsset.OriginalResourceChoice](/documentation/photos/phasset/originalresourcechoice-swift.enum)
##### Enumeration Cases

- [case compressed](/documentation/photos/phasset/originalresourcechoice-swift.enum/compressed)
- [case raw](/documentation/photos/phasset/originalresourcechoice-swift.enum/raw)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phasset/originalresourcechoice-swift.enum/init(rawvalue:))

- [PHAsset.Rating](/documentation/photos/phasset/rating-swift.enum)
##### Enumeration Cases

- [case five](/documentation/photos/phasset/rating-swift.enum/five)
- [case four](/documentation/photos/phasset/rating-swift.enum/four)
- [case one](/documentation/photos/phasset/rating-swift.enum/one)
- [case three](/documentation/photos/phasset/rating-swift.enum/three)
- [case two](/documentation/photos/phasset/rating-swift.enum/two)
- [case unset](/documentation/photos/phasset/rating-swift.enum/unset)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phasset/rating-swift.enum/init(rawvalue:))

#### Default Implementations

- [PersistentlyIdentifiable Implementations](/documentation/photos/phasset/persistentlyidentifiable-implementations)
##### Type Properties

- [static var persistentIdentifier: String](/documentation/photos/phasset/persistentidentifier)


- [PHAssetCollection](/documentation/photos/phassetcollection)
#### Fetching Asset Collections

- [class func fetchAssetCollections(withLocalIdentifiers: [String], options: PHFetchOptions?) -> PHFetchResult<PHAssetCollection>](/documentation/photos/phassetcollection/fetchassetcollections(withlocalidentifiers:options:))
- [class func fetchAssetCollections(with: PHAssetCollectionType, subtype: PHAssetCollectionSubtype, options: PHFetchOptions?) -> PHFetchResult<PHAssetCollection>](/documentation/photos/phassetcollection/fetchassetcollections(with:subtype:options:))
- [class func fetchAssetCollectionsContaining(PHAsset, with: PHAssetCollectionType, options: PHFetchOptions?) -> PHFetchResult<PHAssetCollection>](/documentation/photos/phassetcollection/fetchassetcollectionscontaining(_:with:options:))
- [class func fetchAssetCollections(withALAssetGroupURLs: [URL], options: PHFetchOptions?) -> PHFetchResult<PHAssetCollection>](/documentation/photos/phassetcollection/fetchassetcollections(withalassetgroupurls:options:))
- [class func fetchMoments(inMomentList: PHCollectionList, options: PHFetchOptions?) -> PHFetchResult<PHAssetCollection>](/documentation/photos/phassetcollection/fetchmoments(inmomentlist:options:))
- [class func fetchMoments(with: PHFetchOptions?) -> PHFetchResult<PHAssetCollection>](/documentation/photos/phassetcollection/fetchmoments(with:))
#### Reading Asset Collection Metadata

- [var assetCollectionType: PHAssetCollectionType](/documentation/photos/phassetcollection/assetcollectiontype)
- [PHAssetCollectionType](/documentation/photos/phassetcollectiontype)
##### Constants

- [case album](/documentation/photos/phassetcollectiontype/album)
- [case smartAlbum](/documentation/photos/phassetcollectiontype/smartalbum)
- [case moment](/documentation/photos/phassetcollectiontype/moment)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phassetcollectiontype/init(rawvalue:))

- [var assetCollectionSubtype: PHAssetCollectionSubtype](/documentation/photos/phassetcollection/assetcollectionsubtype)
- [PHAssetCollectionSubtype](/documentation/photos/phassetcollectionsubtype)
##### User Album Types

- [case albumRegular](/documentation/photos/phassetcollectionsubtype/albumregular)
- [case albumSyncedEvent](/documentation/photos/phassetcollectionsubtype/albumsyncedevent)
- [case albumSyncedFaces](/documentation/photos/phassetcollectionsubtype/albumsyncedfaces)
- [case albumSyncedAlbum](/documentation/photos/phassetcollectionsubtype/albumsyncedalbum)
- [case albumImported](/documentation/photos/phassetcollectionsubtype/albumimported)
##### Cloud Album Types

- [case albumMyPhotoStream](/documentation/photos/phassetcollectionsubtype/albummyphotostream)
- [case albumCloudShared](/documentation/photos/phassetcollectionsubtype/albumcloudshared)
##### Smart Album Types

- [case smartAlbumAllHidden](/documentation/photos/phassetcollectionsubtype/smartalbumallhidden)
- [case smartAlbumAnimated](/documentation/photos/phassetcollectionsubtype/smartalbumanimated)
- [case smartAlbumBursts](/documentation/photos/phassetcollectionsubtype/smartalbumbursts)
- [case smartAlbumCinematic](/documentation/photos/phassetcollectionsubtype/smartalbumcinematic)
- [case smartAlbumDepthEffect](/documentation/photos/phassetcollectionsubtype/smartalbumdeptheffect)
- [case smartAlbumFavorites](/documentation/photos/phassetcollectionsubtype/smartalbumfavorites)
- [case smartAlbumGeneric](/documentation/photos/phassetcollectionsubtype/smartalbumgeneric)
- [case smartAlbumLivePhotos](/documentation/photos/phassetcollectionsubtype/smartalbumlivephotos)
- [case smartAlbumLongExposures](/documentation/photos/phassetcollectionsubtype/smartalbumlongexposures)
- [case smartAlbumPanoramas](/documentation/photos/phassetcollectionsubtype/smartalbumpanoramas)
- [case smartAlbumRAW](/documentation/photos/phassetcollectionsubtype/smartalbumraw)
- [case smartAlbumRecentlyAdded](/documentation/photos/phassetcollectionsubtype/smartalbumrecentlyadded)
- [case smartAlbumScreenshots](/documentation/photos/phassetcollectionsubtype/smartalbumscreenshots)
- [case smartAlbumSelfPortraits](/documentation/photos/phassetcollectionsubtype/smartalbumselfportraits)
- [case smartAlbumSlomoVideos](/documentation/photos/phassetcollectionsubtype/smartalbumslomovideos)
- [case smartAlbumTimelapses](/documentation/photos/phassetcollectionsubtype/smartalbumtimelapses)
- [case smartAlbumUnableToUpload](/documentation/photos/phassetcollectionsubtype/smartalbumunabletoupload)
- [case smartAlbumUserLibrary](/documentation/photos/phassetcollectionsubtype/smartalbumuserlibrary)
- [case smartAlbumVideos](/documentation/photos/phassetcollectionsubtype/smartalbumvideos)
##### Wildcard Search

- [case any](/documentation/photos/phassetcollectionsubtype/any)
##### Enumeration Cases

- [case smartAlbumScreenRecordings](/documentation/photos/phassetcollectionsubtype/smartalbumscreenrecordings)
- [case smartAlbumSpatial](/documentation/photos/phassetcollectionsubtype/smartalbumspatial)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phassetcollectionsubtype/init(rawvalue:))

- [var estimatedAssetCount: Int](/documentation/photos/phassetcollection/estimatedassetcount)
- [var startDate: Date?](/documentation/photos/phassetcollection/startdate)
- [var endDate: Date?](/documentation/photos/phassetcollection/enddate)
- [var approximateLocation: CLLocation?](/documentation/photos/phassetcollection/approximatelocation)
- [var localizedLocationNames: [String]](/documentation/photos/phassetcollection/localizedlocationnames)
#### Creating Temporary Asset Collections

- [class func transientAssetCollection(with: [PHAsset], title: String?) -> PHAssetCollection](/documentation/photos/phassetcollection/transientassetcollection(with:title:))
- [class func transientAssetCollection(withAssetFetchResult: PHFetchResult<PHAsset>, title: String?) -> PHAssetCollection](/documentation/photos/phassetcollection/transientassetcollection(withassetfetchresult:title:))

- [PHCollection](/documentation/photos/phcollection)
#### Fetching Collections

- [class func fetchCollections(in: PHCollectionList, options: PHFetchOptions?) -> PHFetchResult<PHCollection>](/documentation/photos/phcollection/fetchcollections(in:options:))
- [class func fetchTopLevelUserCollections(with: PHFetchOptions?) -> PHFetchResult<PHCollection>](/documentation/photos/phcollection/fetchtoplevelusercollections(with:))
#### Reading Collection Metadata

- [var localizedTitle: String?](/documentation/photos/phcollection/localizedtitle)
#### Determining Collection Capabilities

- [var canContainAssets: Bool](/documentation/photos/phcollection/cancontainassets)
- [var canContainCollections: Bool](/documentation/photos/phcollection/cancontaincollections)
- [func canPerform(PHCollectionEditOperation) -> Bool](/documentation/photos/phcollection/canperform(_:))
- [PHCollectionEditOperation](/documentation/photos/phcollectioneditoperation)
##### Constants

- [case deleteContent](/documentation/photos/phcollectioneditoperation/deletecontent)
- [case removeContent](/documentation/photos/phcollectioneditoperation/removecontent)
- [case addContent](/documentation/photos/phcollectioneditoperation/addcontent)
- [case createContent](/documentation/photos/phcollectioneditoperation/createcontent)
- [case rearrangeContent](/documentation/photos/phcollectioneditoperation/rearrangecontent)
- [case delete](/documentation/photos/phcollectioneditoperation/delete)
- [case rename](/documentation/photos/phcollectioneditoperation/rename)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phcollectioneditoperation/init(rawvalue:))

#### Instance Properties

- [var modificationDate: Date?](/documentation/photos/phcollection/modificationdate)

- [PHCollectionList](/documentation/photos/phcollectionlist)
#### Fetching Collection Lists

- [class func fetchCollectionListsContaining(PHCollection, options: PHFetchOptions?) -> PHFetchResult<PHCollectionList>](/documentation/photos/phcollectionlist/fetchcollectionlistscontaining(_:options:))
- [class func fetchCollectionLists(withLocalIdentifiers: [String], options: PHFetchOptions?) -> PHFetchResult<PHCollectionList>](/documentation/photos/phcollectionlist/fetchcollectionlists(withlocalidentifiers:options:))
- [class func fetchCollectionLists(with: PHCollectionListType, subtype: PHCollectionListSubtype, options: PHFetchOptions?) -> PHFetchResult<PHCollectionList>](/documentation/photos/phcollectionlist/fetchcollectionlists(with:subtype:options:))
- [class func fetchMomentLists(with: PHCollectionListSubtype, containingMoment: PHAssetCollection, options: PHFetchOptions?) -> PHFetchResult<PHCollectionList>](/documentation/photos/phcollectionlist/fetchmomentlists(with:containingmoment:options:))
- [class func fetchMomentLists(with: PHCollectionListSubtype, options: PHFetchOptions?) -> PHFetchResult<PHCollectionList>](/documentation/photos/phcollectionlist/fetchmomentlists(with:options:))
#### Reading Collection List Metadata

- [var collectionListType: PHCollectionListType](/documentation/photos/phcollectionlist/collectionlisttype)
- [PHCollectionListType](/documentation/photos/phcollectionlisttype)
##### Constants

- [case momentList](/documentation/photos/phcollectionlisttype/momentlist)
- [case folder](/documentation/photos/phcollectionlisttype/folder)
- [case smartFolder](/documentation/photos/phcollectionlisttype/smartfolder)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phcollectionlisttype/init(rawvalue:))

- [var collectionListSubtype: PHCollectionListSubtype](/documentation/photos/phcollectionlist/collectionlistsubtype)
- [PHCollectionListSubtype](/documentation/photos/phcollectionlistsubtype)
##### Constants

- [case momentListCluster](/documentation/photos/phcollectionlistsubtype/momentlistcluster)
- [case momentListYear](/documentation/photos/phcollectionlistsubtype/momentlistyear)
- [case regularFolder](/documentation/photos/phcollectionlistsubtype/regularfolder)
- [case smartFolderEvents](/documentation/photos/phcollectionlistsubtype/smartfolderevents)
- [case smartFolderFaces](/documentation/photos/phcollectionlistsubtype/smartfolderfaces)
- [case any](/documentation/photos/phcollectionlistsubtype/any)
##### Enumeration Cases

- [case rootFolder](/documentation/photos/phcollectionlistsubtype/rootfolder)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phcollectionlistsubtype/init(rawvalue:))

- [var startDate: Date?](/documentation/photos/phcollectionlist/startdate)
- [var endDate: Date?](/documentation/photos/phcollectionlist/enddate)
- [var localizedLocationNames: [String]](/documentation/photos/phcollectionlist/localizedlocationnames)
#### Creating Temporary Collection Lists

- [class func transientCollectionList(with: [PHCollection], title: String?) -> PHCollectionList](/documentation/photos/phcollectionlist/transientcollectionlist(with:title:))
- [class func transientCollectionList(withCollectionsFetchResult: PHFetchResult<PHCollection>, title: String?) -> PHCollectionList](/documentation/photos/phcollectionlist/transientcollectionlist(withcollectionsfetchresult:title:))

- [PHObject](/documentation/photos/phobject)
#### Identifying an Object

- [var localIdentifier: String](/documentation/photos/phobject/localidentifier)

- [PHFetchResult](/documentation/photos/phfetchresult)
#### Querying a Fetch Result

- [func contains(ObjectType) -> Bool](/documentation/photos/phfetchresult/contains(_:))
- [var count: Int](/documentation/photos/phfetchresult/count)
- [func countOfAssets(with: PHAssetMediaType) -> Int](/documentation/photos/phfetchresult/countofassets(with:))
- [var firstObject: ObjectType?](/documentation/photos/phfetchresult/firstobject)
- [var lastObject: ObjectType?](/documentation/photos/phfetchresult/lastobject)
- [func object(at: Int) -> ObjectType](/documentation/photos/phfetchresult/object(at:))
- [subscript(Int) -> ObjectType](/documentation/photos/phfetchresult/subscript(_:))
- [func objects(at: IndexSet) -> [ObjectType]](/documentation/photos/phfetchresult/objects(at:))
#### Finding Objects in a Fetch Result

- [func index(of: ObjectType) -> Int](/documentation/photos/phfetchresult/index(of:))
- [func index(of: ObjectType, in: NSRange) -> Int](/documentation/photos/phfetchresult/index(of:in:))
#### Performing Operations with Objects in a Fetch Result

- [func enumerateObjects(at: IndexSet, options: NSEnumerationOptions, using: (ObjectType, Int, UnsafeMutablePointer<ObjCBool>) -> Void)](/documentation/photos/phfetchresult/enumerateobjects(at:options:using:))
- [func enumerateObjects((ObjectType, Int, UnsafeMutablePointer<ObjCBool>) -> Void)](/documentation/photos/phfetchresult/enumerateobjects(_:))
- [func enumerateObjects(options: NSEnumerationOptions, using: (ObjectType, Int, UnsafeMutablePointer<ObjCBool>) -> Void)](/documentation/photos/phfetchresult/enumerateobjects(options:using:))

- [PHFetchOptions](/documentation/photos/phfetchoptions)
#### Sorting and Filtering Fetch Results

- [var predicate: NSPredicate?](/documentation/photos/phfetchoptions/predicate)
- [var sortDescriptors: [NSSortDescriptor]?](/documentation/photos/phfetchoptions/sortdescriptors)
#### Subscribing to Changes

- [var wantsIncrementalChangeDetails: Bool](/documentation/photos/phfetchoptions/wantsincrementalchangedetails)
#### Limiting Fetch Results

- [var fetchLimit: Int](/documentation/photos/phfetchoptions/fetchlimit)
- [var includeAllBurstAssets: Bool](/documentation/photos/phfetchoptions/includeallburstassets)
- [var includeHiddenAssets: Bool](/documentation/photos/phfetchoptions/includehiddenassets)
- [var includeAssetSourceTypes: PHAssetSourceType](/documentation/photos/phfetchoptions/includeassetsourcetypes)

### Asset loading

- [Loading and Caching Assets and Thumbnails](/documentation/photokit/loading-and-caching-assets-and-thumbnails)
- [PHImageManager](/documentation/photos/phimagemanager)
#### Getting the Image Manager

- [class func `default`() -> PHImageManager](/documentation/photos/phimagemanager/default())
#### Requesting Images

- [func requestImage(for: PHAsset, targetSize: CGSize, contentMode: PHImageContentMode, options: PHImageRequestOptions?, resultHandler: (UIImage?, [AnyHashable : Any]?) -> Void) -> PHImageRequestID](/documentation/photos/phimagemanager/requestimage(for:targetsize:contentmode:options:resulthandler:))
- [func requestImageDataAndOrientation(for: PHAsset, options: PHImageRequestOptions?, resultHandler: (Data?, String?, CGImagePropertyOrientation, [AnyHashable : Any]?) -> Void) -> PHImageRequestID](/documentation/photos/phimagemanager/requestimagedataandorientation(for:options:resulthandler:))
- [let PHImageManagerMaximumSize: CGSize](/documentation/photos/phimagemanagermaximumsize)
#### Requesting Video Objects

- [func requestPlayerItem(forVideo: PHAsset, options: PHVideoRequestOptions?, resultHandler: (AVPlayerItem?, [AnyHashable : Any]?) -> Void) -> PHImageRequestID](/documentation/photos/phimagemanager/requestplayeritem(forvideo:options:resulthandler:))
- [func requestExportSession(forVideo: PHAsset, options: PHVideoRequestOptions?, exportPreset: String, resultHandler: (AVAssetExportSession?, [AnyHashable : Any]?) -> Void) -> PHImageRequestID](/documentation/photos/phimagemanager/requestexportsession(forvideo:options:exportpreset:resulthandler:))
- [func requestAVAsset(forVideo: PHAsset, options: PHVideoRequestOptions?, resultHandler: (AVAsset?, AVAudioMix?, [AnyHashable : Any]?) -> Void) -> PHImageRequestID](/documentation/photos/phimagemanager/requestavasset(forvideo:options:resulthandler:))
#### Requesting Live Photos

- [func requestLivePhoto(for: PHAsset, targetSize: CGSize, contentMode: PHImageContentMode, options: PHLivePhotoRequestOptions?, resultHandler: (PHLivePhoto?, [AnyHashable : Any]?) -> Void) -> PHImageRequestID](/documentation/photos/phimagemanager/requestlivephoto(for:targetsize:contentmode:options:resulthandler:))
#### Canceling a Request

- [func cancelImageRequest(PHImageRequestID)](/documentation/photos/phimagemanager/cancelimagerequest(_:))
- [PHImageRequestID](/documentation/photos/phimagerequestid)
- [var PHInvalidImageRequestID: PHImageRequestID](/documentation/photos/phinvalidimagerequestid)
#### Constants

- [PHImageContentMode](/documentation/photos/phimagecontentmode)
##### Constants

- [static var `default`: PHImageContentMode](/documentation/photos/phimagecontentmode/default)
- [case aspectFit](/documentation/photos/phimagecontentmode/aspectfit)
- [case aspectFill](/documentation/photos/phimagecontentmode/aspectfill)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phimagecontentmode/init(rawvalue:))

- [Image Result Info Keys](/documentation/photokit/image-result-info-keys)
##### Constants

- [let PHImageResultIsInCloudKey: String](/documentation/photos/phimageresultisincloudkey)
- [let PHImageResultIsDegradedKey: String](/documentation/photos/phimageresultisdegradedkey)
- [let PHImageResultRequestIDKey: String](/documentation/photos/phimageresultrequestidkey)
- [let PHImageCancelledKey: String](/documentation/photos/phimagecancelledkey)
- [let PHImageErrorKey: String](/documentation/photos/phimageerrorkey)


- [PHCachingImageManager](/documentation/photos/phcachingimagemanager)
#### Preparing Images

- [func startCachingImages(for: [PHAsset], targetSize: CGSize, contentMode: PHImageContentMode, options: PHImageRequestOptions?)](/documentation/photos/phcachingimagemanager/startcachingimages(for:targetsize:contentmode:options:))
- [func stopCachingImages(for: [PHAsset], targetSize: CGSize, contentMode: PHImageContentMode, options: PHImageRequestOptions?)](/documentation/photos/phcachingimagemanager/stopcachingimages(for:targetsize:contentmode:options:))
- [func stopCachingImagesForAllAssets()](/documentation/photos/phcachingimagemanager/stopcachingimagesforallassets())
#### Setting Cache Policy

- [var allowsCachingHighQualityImages: Bool](/documentation/photos/phcachingimagemanager/allowscachinghighqualityimages)

- [PHImageRequestOptions](/documentation/photos/phimagerequestoptions)
#### Scheduling an Image Request

- [var isSynchronous: Bool](/documentation/photos/phimagerequestoptions/issynchronous)
#### Specifying Image Request Options

- [var version: PHImageRequestOptionsVersion](/documentation/photos/phimagerequestoptions/version)
- [PHImageRequestOptionsVersion](/documentation/photos/phimagerequestoptionsversion)
##### Constants

- [case current](/documentation/photos/phimagerequestoptionsversion/current)
- [case unadjusted](/documentation/photos/phimagerequestoptionsversion/unadjusted)
- [case original](/documentation/photos/phimagerequestoptionsversion/original)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phimagerequestoptionsversion/init(rawvalue:))

- [var deliveryMode: PHImageRequestOptionsDeliveryMode](/documentation/photos/phimagerequestoptions/deliverymode)
- [PHImageRequestOptionsDeliveryMode](/documentation/photos/phimagerequestoptionsdeliverymode)
##### Constants

- [case opportunistic](/documentation/photos/phimagerequestoptionsdeliverymode/opportunistic)
- [case highQualityFormat](/documentation/photos/phimagerequestoptionsdeliverymode/highqualityformat)
- [case fastFormat](/documentation/photos/phimagerequestoptionsdeliverymode/fastformat)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phimagerequestoptionsdeliverymode/init(rawvalue:))

- [var resizeMode: PHImageRequestOptionsResizeMode](/documentation/photos/phimagerequestoptions/resizemode)
- [PHImageRequestOptionsResizeMode](/documentation/photos/phimagerequestoptionsresizemode)
##### Constants

- [case none](/documentation/photos/phimagerequestoptionsresizemode/none)
- [case fast](/documentation/photos/phimagerequestoptionsresizemode/fast)
- [case exact](/documentation/photos/phimagerequestoptionsresizemode/exact)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phimagerequestoptionsresizemode/init(rawvalue:))

- [var normalizedCropRect: CGRect](/documentation/photos/phimagerequestoptions/normalizedcroprect)
#### Fetching Image Data from iCloud

- [var isNetworkAccessAllowed: Bool](/documentation/photos/phimagerequestoptions/isnetworkaccessallowed)
- [var progressHandler: PHAssetImageProgressHandler?](/documentation/photos/phimagerequestoptions/progresshandler)
- [PHAssetImageProgressHandler](/documentation/photos/phassetimageprogresshandler)
#### Instance Properties

- [var allowSecondaryDegradedImage: Bool](/documentation/photos/phimagerequestoptions/allowsecondarydegradedimage)
- [var preferHDR: Bool](/documentation/photos/phimagerequestoptions/preferhdr)
- [var targetHDRHeadroom: CGFloat](/documentation/photos/phimagerequestoptions/targethdrheadroom)

- [PHVideoRequestOptions](/documentation/photos/phvideorequestoptions)
#### Specifying Video Request Options

- [var version: PHVideoRequestOptionsVersion](/documentation/photos/phvideorequestoptions/version)
- [PHVideoRequestOptionsVersion](/documentation/photos/phvideorequestoptionsversion)
##### Constants

- [case current](/documentation/photos/phvideorequestoptionsversion/current)
- [case original](/documentation/photos/phvideorequestoptionsversion/original)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phvideorequestoptionsversion/init(rawvalue:))

- [var deliveryMode: PHVideoRequestOptionsDeliveryMode](/documentation/photos/phvideorequestoptions/deliverymode)
- [PHVideoRequestOptionsDeliveryMode](/documentation/photos/phvideorequestoptionsdeliverymode)
##### Constants

- [case automatic](/documentation/photos/phvideorequestoptionsdeliverymode/automatic)
- [case highQualityFormat](/documentation/photos/phvideorequestoptionsdeliverymode/highqualityformat)
- [case mediumQualityFormat](/documentation/photos/phvideorequestoptionsdeliverymode/mediumqualityformat)
- [case fastFormat](/documentation/photos/phvideorequestoptionsdeliverymode/fastformat)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phvideorequestoptionsdeliverymode/init(rawvalue:))

#### Fetching Video Data from iCloud

- [var isNetworkAccessAllowed: Bool](/documentation/photos/phvideorequestoptions/isnetworkaccessallowed)
- [var progressHandler: PHAssetVideoProgressHandler?](/documentation/photos/phvideorequestoptions/progresshandler)
- [PHAssetVideoProgressHandler](/documentation/photos/phassetvideoprogresshandler)

- [PHLivePhotoRequestOptions](/documentation/photos/phlivephotorequestoptions)
#### Specifying Image Request Options

- [var version: PHImageRequestOptionsVersion](/documentation/photos/phlivephotorequestoptions/version)
- [var deliveryMode: PHImageRequestOptionsDeliveryMode](/documentation/photos/phlivephotorequestoptions/deliverymode)
#### Fetching Image Data from iCloud

- [var isNetworkAccessAllowed: Bool](/documentation/photos/phlivephotorequestoptions/isnetworkaccessallowed)
- [var progressHandler: PHAssetImageProgressHandler?](/documentation/photos/phlivephotorequestoptions/progresshandler)

### Asset resource management

- [PHAssetResource](/documentation/photos/phassetresource)
#### Retrieving an Asset’s Data Resources

- [class func assetResources(for: PHAsset) -> [PHAssetResource]](/documentation/photos/phassetresource/assetresources(for:)-27o4l)
- [class func assetResources(for: PHLivePhoto) -> [PHAssetResource]](/documentation/photos/phassetresource/assetresources(for:)-2fedw)
#### Inspecting an Asset Resource

- [var type: PHAssetResourceType](/documentation/photos/phassetresource/type)
- [PHAssetResourceType](/documentation/photos/phassetresourcetype)
##### Resource Types

- [case photo](/documentation/photos/phassetresourcetype/photo)
- [case video](/documentation/photos/phassetresourcetype/video)
- [case audio](/documentation/photos/phassetresourcetype/audio)
- [case alternatePhoto](/documentation/photos/phassetresourcetype/alternatephoto)
- [case fullSizePhoto](/documentation/photos/phassetresourcetype/fullsizephoto)
- [case fullSizeVideo](/documentation/photos/phassetresourcetype/fullsizevideo)
- [case adjustmentData](/documentation/photos/phassetresourcetype/adjustmentdata)
- [case adjustmentBasePhoto](/documentation/photos/phassetresourcetype/adjustmentbasephoto)
- [case pairedVideo](/documentation/photos/phassetresourcetype/pairedvideo)
- [case fullSizePairedVideo](/documentation/photos/phassetresourcetype/fullsizepairedvideo)
- [case adjustmentBaseVideo](/documentation/photos/phassetresourcetype/adjustmentbasevideo)
- [case adjustmentBasePairedVideo](/documentation/photos/phassetresourcetype/adjustmentbasepairedvideo)
##### Enumeration Cases

- [case photoProxy](/documentation/photos/phassetresourcetype/photoproxy)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phassetresourcetype/init(rawvalue:))

- [var contentType: UTType](/documentation/photos/phassetresource/contenttype)
- [var assetLocalIdentifier: String](/documentation/photos/phassetresource/assetlocalidentifier)
- [var uniformTypeIdentifier: String](/documentation/photos/phassetresource/uniformtypeidentifier)
- [var originalFilename: String](/documentation/photos/phassetresource/originalfilename)
- [var pixelHeight: Int](/documentation/photos/phassetresource/pixelheight)
- [var pixelWidth: Int](/documentation/photos/phassetresource/pixelwidth)
#### Instance Properties

- [var dataSize: Int?](/documentation/photos/phassetresource/datasize-5lxva)
#### Type Methods

- [class func assetResource(forUploadJob: PHAssetResourceUploadJob) -> PHAssetResource?](/documentation/photos/phassetresource/assetresource(foruploadjob:))

- [PHAssetCreationRequest](/documentation/photos/phassetcreationrequest)
#### Requesting Asset Creation

- [class func forAsset() -> Self](/documentation/photos/phassetcreationrequest/forasset())
#### Preflighting a Request

- [class func supportsAssetResourceTypes([NSNumber]) -> Bool](/documentation/photos/phassetcreationrequest/supportsassetresourcetypes(_:))
#### Providing Data Resources for the New Asset

- [func addResource(with: PHAssetResourceType, data: Data, options: PHAssetResourceCreationOptions?)](/documentation/photos/phassetcreationrequest/addresource(with:data:options:))
- [func addResource(with: PHAssetResourceType, fileURL: URL, options: PHAssetResourceCreationOptions?)](/documentation/photos/phassetcreationrequest/addresource(with:fileurl:options:))
#### Instance Properties

- [var originalResourceChoice: PHAsset.OriginalResourceChoice](/documentation/photos/phassetcreationrequest/originalresourcechoice)

- [PHAssetResourceCreationOptions](/documentation/photos/phassetresourcecreationoptions)
#### Describing a New Asset Resource

- [var originalFilename: String?](/documentation/photos/phassetresourcecreationoptions/originalfilename)
- [var uniformTypeIdentifier: String?](/documentation/photos/phassetresourcecreationoptions/uniformtypeidentifier)
- [var contentType: UTType?](/documentation/photos/phassetresourcecreationoptions/contenttype)
#### Managing Resource Files

- [var shouldMoveFile: Bool](/documentation/photos/phassetresourcecreationoptions/shouldmovefile)

- [PHAssetResourceManager](/documentation/photos/phassetresourcemanager)
#### Getting the Asset Resource Manager

- [class func `default`() -> PHAssetResourceManager](/documentation/photos/phassetresourcemanager/default())
#### Requesting Resources

- [func requestData(for: PHAssetResource, options: PHAssetResourceRequestOptions?, dataReceivedHandler: (Data) -> Void, completionHandler: ((any Error)?) -> Void) -> PHAssetResourceDataRequestID](/documentation/photos/phassetresourcemanager/requestdata(for:options:datareceivedhandler:completionhandler:))
- [func cancelDataRequest(PHAssetResourceDataRequestID)](/documentation/photos/phassetresourcemanager/canceldatarequest(_:))
- [func writeData(for: PHAssetResource, toFile: URL, options: PHAssetResourceRequestOptions?, completionHandler: ((any Error)?) -> Void)](/documentation/photos/phassetresourcemanager/writedata(for:tofile:options:completionhandler:))
#### Constants

- [PHAssetResourceDataRequestID](/documentation/photos/phassetresourcedatarequestid)
- [Resource Loading Request Identifiers](/documentation/photokit/resource-loading-request-identifiers)
##### Constants

- [var PHInvalidAssetResourceDataRequestID: PHAssetResourceDataRequestID](/documentation/photos/phinvalidassetresourcedatarequestid)

#### Instance Methods

- [func exportedAssetID(for: PHAssetResource) async throws -> CKAsset.ExportedAssetID](/documentation/photos/phassetresourcemanager/exportedassetid(for:))

- [PHAssetResourceRequestOptions](/documentation/photos/phassetresourcerequestoptions)
#### Fetching Resource Data from iCloud

- [var isNetworkAccessAllowed: Bool](/documentation/photos/phassetresourcerequestoptions/isnetworkaccessallowed)
- [var progressHandler: PHAssetResourceProgressHandler?](/documentation/photos/phassetresourcerequestoptions/progresshandler)
- [PHAssetResourceProgressHandler](/documentation/photos/phassetresourceprogresshandler)

### Background resource upload extensions

- [Uploading asset resources in the background](/documentation/photokit/uploading-asset-resources-in-the-background)
- [PHBackgroundResourceUploadExtension](/documentation/photos/phbackgroundresourceuploadextension)
#### Processing upload requests

- [func process() -> PHBackgroundResourceUploadProcessingResult](/documentation/photos/phbackgroundresourceuploadextension/process())
- [PHBackgroundResourceUploadProcessingResult](/documentation/photos/phbackgroundresourceuploadprocessingresult)
##### Processing results

- [case completed](/documentation/photos/phbackgroundresourceuploadprocessingresult/completed)
- [case failure](/documentation/photos/phbackgroundresourceuploadprocessingresult/failure)
- [case processing](/documentation/photos/phbackgroundresourceuploadprocessingresult/processing)

#### Handling termination

- [func notifyTermination()](/documentation/photos/phbackgroundresourceuploadextension/notifytermination())

- [PHAssetResourceUploadJob](/documentation/photos/phassetresourceuploadjob)
#### Fetching jobs

- [class var jobLimit: Int](/documentation/photos/phassetresourceuploadjob/joblimit)
- [class func fetchJobs(action: PHAssetResourceUploadJob.Action, options: PHFetchOptions?) -> PHFetchResult<PHAssetResourceUploadJob>](/documentation/photos/phassetresourceuploadjob/fetchjobs(action:options:))
- [PHAssetResourceUploadJob.Action](/documentation/photos/phassetresourceuploadjob/action)
##### Actions

- [case acknowledge](/documentation/photos/phassetresourceuploadjob/action/acknowledge)
- [case retry](/documentation/photos/phassetresourceuploadjob/action/retry)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phassetresourceuploadjob/action/init(rawvalue:))
##### Enumeration Cases

- [case process](/documentation/photos/phassetresourceuploadjob/action/process)

#### Inspecting a job

- [var type: PHAssetResourceUploadJob.Type](/documentation/photos/phassetresourceuploadjob/type-swift.property)
- [PHAssetResourceUploadJob.Type](/documentation/photos/phassetresourceuploadjob/type-swift.enum)
##### Enumeration Cases

- [case downloadOnly](/documentation/photos/phassetresourceuploadjob/type-swift.enum/downloadonly)
- [case upload](/documentation/photos/phassetresourceuploadjob/type-swift.enum/upload)
##### Initializers

- [init?(rawValue: Int16)](/documentation/photos/phassetresourceuploadjob/type-swift.enum/init(rawvalue:))

- [var destination: URLRequest](/documentation/photos/phassetresourceuploadjob/destination)
- [var resource: PHAssetResource](/documentation/photos/phassetresourceuploadjob/resource)
- [var state: PHAssetResourceUploadJob.State](/documentation/photos/phassetresourceuploadjob/state-swift.property)
- [PHAssetResourceUploadJob.State](/documentation/photos/phassetresourceuploadjob/state-swift.enum)
##### States

- [case registered](/documentation/photos/phassetresourceuploadjob/state-swift.enum/registered)
- [case pending](/documentation/photos/phassetresourceuploadjob/state-swift.enum/pending)
- [case succeeded](/documentation/photos/phassetresourceuploadjob/state-swift.enum/succeeded)
- [case failed](/documentation/photos/phassetresourceuploadjob/state-swift.enum/failed)
- [case cancelled](/documentation/photos/phassetresourceuploadjob/state-swift.enum/cancelled)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phassetresourceuploadjob/state-swift.enum/init(rawvalue:))

- [var error: (any Error)?](/documentation/photos/phassetresourceuploadjob/error)
- [var responseHeaderFields: [String : String]?](/documentation/photos/phassetresourceuploadjob/responseheaderfields)

- [PHAssetResourceUploadJobChangeRequest](/documentation/photos/phassetresourceuploadjobchangerequest)
#### Creating a change request

- [convenience init?(for: PHAssetResourceUploadJob)](/documentation/photos/phassetresourceuploadjobchangerequest/init(for:))
#### Creating jobs

- [class func creationRequestForDownloadJob(resource: PHAssetResource) -> Self](/documentation/photos/phassetresourceuploadjobchangerequest/creationrequestfordownloadjob(resource:))
- [class func creationRequestForJob(destination: URLRequest, resource: PHAssetResource) -> Self](/documentation/photos/phassetresourceuploadjobchangerequest/creationrequestforjob(destination:resource:))
#### Processing jobs

- [func acknowledge()](/documentation/photos/phassetresourceuploadjobchangerequest/acknowledge())
- [func retry(destination: URLRequest?)](/documentation/photos/phassetresourceuploadjobchangerequest/retry(destination:))
- [func cancel()](/documentation/photos/phassetresourceuploadjobchangerequest/cancel())
#### Accessing details about the job

- [var placeholderForCreatedAssetResourceUploadJob: PHObjectPlaceholder?](/documentation/photos/phassetresourceuploadjobchangerequest/placeholderforcreatedassetresourceuploadjob)
#### Deprecated

- [class func createJob(destination: URLRequest, resource: PHAssetResource)](/documentation/photos/phassetresourceuploadjobchangerequest/createjob(destination:resource:))
#### Initializers

- [convenience init?(forUploadJob: PHAssetResourceUploadJob)](/documentation/photos/phassetresourceuploadjobchangerequest/init(foruploadjob:))

### Live Photos

- [PHLivePhoto](/documentation/photos/phlivephoto)
#### Inspecting a Live Photo

- [var size: CGSize](/documentation/photos/phlivephoto/size)
#### Loading a Live Photo from Data Files

- [class func request(withResourceFileURLs: [URL], placeholderImage: UIImage?, targetSize: CGSize, contentMode: PHImageContentMode, resultHandler: (PHLivePhoto?, [AnyHashable : Any]) -> Void) -> PHLivePhotoRequestID](/documentation/photos/phlivephoto/request(withresourcefileurls:placeholderimage:targetsize:contentmode:resulthandler:))
- [class func cancelRequest(withRequestID: PHLivePhotoRequestID)](/documentation/photos/phlivephoto/cancelrequest(withrequestid:))
#### Constants

- [PHLivePhotoRequestID](/documentation/photos/phlivephotorequestid)
- [Image Request Identifiers](/documentation/photokit/image-request-identifiers)
##### Constants

- [var PHLivePhotoRequestIDInvalid: PHLivePhotoRequestID](/documentation/photos/phlivephotorequestidinvalid)

- [Result Handler Info Dictionary Keys](/documentation/photokit/result-handler-info-dictionary-keys)
##### Constants

- [let PHLivePhotoInfoErrorKey: String](/documentation/photos/phlivephotoinfoerrorkey)
- [let PHLivePhotoInfoIsDegradedKey: String](/documentation/photos/phlivephotoinfoisdegradedkey)
- [let PHLivePhotoInfoCancelledKey: String](/documentation/photos/phlivephotoinfocancelledkey)

#### Initializers

- [init?(coder: NSCoder)](/documentation/photos/phlivephoto/init(coder:))

### Errors

- [PHPhotosError](/documentation/photos/phphotoserror-swift.struct)
#### Inspecting an Error

- [static var errorDomain: String](/documentation/photos/phphotoserror-swift.struct/errordomain)
- [PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/code)
##### Error Codes

- [case accessRestricted](/documentation/photos/phphotoserror-swift.struct/code/accessrestricted)
- [case accessUserDenied](/documentation/photos/phphotoserror-swift.struct/code/accessuserdenied)
- [case changeNotSupported](/documentation/photos/phphotoserror-swift.struct/code/changenotsupported)
- [case identifierNotFound](/documentation/photos/phphotoserror-swift.struct/code/identifiernotfound)
- [case internalError](/documentation/photos/phphotoserror-swift.struct/code/internalerror)
- [static var invalid: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/code/invalid)
- [case invalidResource](/documentation/photos/phphotoserror-swift.struct/code/invalidresource)
- [case libraryVolumeOffline](/documentation/photos/phphotoserror-swift.struct/code/libraryvolumeoffline)
- [case libraryInFileProviderSyncRoot](/documentation/photos/phphotoserror-swift.struct/code/libraryinfileprovidersyncroot)
- [case limitExceeded](/documentation/photos/phphotoserror-swift.struct/code/limitexceeded)
- [case missingResource](/documentation/photos/phphotoserror-swift.struct/code/missingresource)
- [case multipleIdentifiersFound](/documentation/photos/phphotoserror-swift.struct/code/multipleidentifiersfound)
- [case networkAccessRequired](/documentation/photos/phphotoserror-swift.struct/code/networkaccessrequired)
- [case networkError](/documentation/photos/phphotoserror-swift.struct/code/networkerror)
- [case notEnoughSpace](/documentation/photos/phphotoserror-swift.struct/code/notenoughspace)
- [case operationInterrupted](/documentation/photos/phphotoserror-swift.struct/code/operationinterrupted)
- [case persistentChangeDetailsUnavailable](/documentation/photos/phphotoserror-swift.struct/code/persistentchangedetailsunavailable)
- [case persistentChangeTokenExpired](/documentation/photos/phphotoserror-swift.struct/code/persistentchangetokenexpired)
- [case relinquishingLibraryBundleToWriter](/documentation/photos/phphotoserror-swift.struct/code/relinquishinglibrarybundletowriter)
- [case requestNotSupportedForAsset](/documentation/photos/phphotoserror-swift.struct/code/requestnotsupportedforasset)
- [case switchingSystemPhotoLibrary](/documentation/photos/phphotoserror-swift.struct/code/switchingsystemphotolibrary)
- [case userCancelled](/documentation/photos/phphotoserror-swift.struct/code/usercancelled)
##### Initializers

- [init?(rawValue: Int)](/documentation/photos/phphotoserror-swift.struct/code/init(rawvalue:))

- [Error Constants](/documentation/photokit/error-constants)
##### Constants

- [static var accessRestricted: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/accessrestricted)
- [static var accessUserDenied: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/accessuserdenied)
- [static var changeNotSupported: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/changenotsupported)
- [static var identifierNotFound: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/identifiernotfound)
- [static var internalError: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/internalerror)
- [static var invalidResource: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/invalidresource)
- [static var libraryVolumeOffline: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/libraryvolumeoffline)
- [static var libraryInFileProviderSyncRoot: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/libraryinfileprovidersyncroot)
- [static var limitExceeded: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/limitexceeded)
- [static var missingResource: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/missingresource)
- [static var multipleIdentifiersFound: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/multipleidentifiersfound)
- [static var networkAccessRequired: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/networkaccessrequired)
- [static var networkError: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/networkerror)
- [static var notEnoughSpace: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/notenoughspace)
- [static var operationInterrupted: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/operationinterrupted)
- [static var persistentChangeDetailsUnavailable: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/persistentchangedetailsunavailable)
- [static var persistentChangeTokenExpired: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/persistentchangetokenexpired)
- [static var relinquishingLibraryBundleToWriter: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/relinquishinglibrarybundletowriter)
- [static var requestNotSupportedForAsset: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/requestnotsupportedforasset)
- [static var switchingSystemPhotoLibrary: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/switchingsystemphotolibrary)
- [static var userCancelled: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/usercancelled)
- [static var invalid: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/code/invalid)

- [let PHLocalIdentifiersErrorKey: String](/documentation/photos/phlocalidentifierserrorkey)
#### Deprecated Symbols

- [Deprecated Errors](/documentation/photokit/deprecated-errors)
##### Error Codes

- [static var invalid: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/invalid)
- [var PHPhotosErrorInvalid: Int](/documentation/photos/phphotoserrorinvalid)
- [var PHPhotosErrorLibraryVolumeOffline: Int](/documentation/photos/phphotoserrorlibraryvolumeoffline)
- [var PHPhotosErrorRelinquishingLibraryBundleToWriter: Int](/documentation/photos/phphotoserrorrelinquishinglibrarybundletowriter)
- [var PHPhotosErrorSwitchingSystemPhotoLibrary: Int](/documentation/photos/phphotoserrorswitchingsystemphotolibrary)
- [var PHPhotosErrorUserCancelled: Int](/documentation/photos/phphotoserrorusercancelled)


- [let PHPhotosErrorDomain: String](/documentation/photos/phphotoserrordomain)
### Deprecated errors

- [Deprecated Errors](/documentation/photokit/deprecated-errors)
#### Error Codes

- [static var invalid: PHPhotosError.Code](/documentation/photos/phphotoserror-swift.struct/invalid)
- [var PHPhotosErrorInvalid: Int](/documentation/photos/phphotoserrorinvalid)
- [var PHPhotosErrorLibraryVolumeOffline: Int](/documentation/photos/phphotoserrorlibraryvolumeoffline)
- [var PHPhotosErrorRelinquishingLibraryBundleToWriter: Int](/documentation/photos/phphotoserrorrelinquishinglibrarybundletowriter)
- [var PHPhotosErrorSwitchingSystemPhotoLibrary: Int](/documentation/photos/phphotoserrorswitchingsystemphotolibrary)
- [var PHPhotosErrorUserCancelled: Int](/documentation/photos/phphotoserrorusercancelled)

### Classes

- [PHProject](/documentation/photos/phproject)
#### Project Extension Properties

- [var hasProjectPreview: Bool](/documentation/photos/phproject/hasprojectpreview)
- [var projectExtensionData: Data](/documentation/photos/phproject/projectextensiondata)

- [PHProjectChangeRequest](/documentation/photos/phprojectchangerequest)
#### Creating Change Requests

- [init(project: PHProject)](/documentation/photos/phprojectchangerequest/init(project:))
- [var title: String](/documentation/photos/phprojectchangerequest/title)
- [var projectExtensionData: Data](/documentation/photos/phprojectchangerequest/projectextensiondata)
#### Responding to Change Requests

- [func setProjectPreviewImage(NSImage)](/documentation/photos/phprojectchangerequest/setprojectpreviewimage(_:))
- [func setKeyAsset(PHAsset?)](/documentation/photos/phprojectchangerequest/setkeyasset(_:))
#### Removing Assets

- [func removeAssets<T>(T)](/documentation/photos/phprojectchangerequest/removeassets(_:)-n825)
- [func removeAssets(PHFetchResult<PHAsset>)](/documentation/photos/phprojectchangerequest/removeassets(_:)-3ytt3)

### Protocols

- [PHBackgroundResourceUploadJobExtension](/documentation/photos/phbackgroundresourceuploadjobextension)
#### Instance Methods

- [func processJobs() async -> PHBackgroundResourceUploadProcessingResult](/documentation/photos/phbackgroundresourceuploadjobextension/processjobs())
- [func willTerminate() async](/documentation/photos/phbackgroundresourceuploadjobextension/willterminate())

- [PHPhotoLibraryPersistentChangesObserver](/documentation/photos/phphotolibrarypersistentchangesobserver)
#### Instance Methods

- [func photoLibraryPersistentChangesDidUpdate(PHPhotoLibrary)](/documentation/photos/phphotolibrarypersistentchangesobserver/photolibrarypersistentchangesdidupdate(_:))


- [PhotosUI](/documentation/photosui)
### Shared photo library

- [Delivering an Enhanced Privacy Experience in Your Photos App](/documentation/photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app)
- [PHLivePhotoView](/documentation/photosui/phlivephotoview)
#### Choosing a Live Photo to Display

- [var livePhoto: PHLivePhoto?](/documentation/photosui/phlivephotoview/livephoto)
#### Managing Playback

- [var playbackGestureRecognizer: UIGestureRecognizer](/documentation/photosui/phlivephotoview/playbackgesturerecognizer)
- [var isMuted: Bool](/documentation/photosui/phlivephotoview/ismuted)
- [var audioVolume: Float](/documentation/photosui/phlivephotoview/audiovolume)
#### Responding to Playback Events

- [var delegate: (any PHLivePhotoViewDelegate)?](/documentation/photosui/phlivephotoview/delegate)
- [PHLivePhotoViewDelegate](/documentation/photosui/phlivephotoviewdelegate)
##### Responding to Live Photos Playback Events

- [func livePhotoView(PHLivePhotoView, canBeginPlaybackWith: PHLivePhotoViewPlaybackStyle) -> Bool](/documentation/photosui/phlivephotoviewdelegate/livephotoview(_:canbeginplaybackwith:))
- [func livePhotoView(PHLivePhotoView, willBeginPlaybackWith: PHLivePhotoViewPlaybackStyle)](/documentation/photosui/phlivephotoviewdelegate/livephotoview(_:willbeginplaybackwith:))
- [func livePhotoView(PHLivePhotoView, didEndPlaybackWith: PHLivePhotoViewPlaybackStyle)](/documentation/photosui/phlivephotoviewdelegate/livephotoview(_:didendplaybackwith:))
- [func livePhotoView(PHLivePhotoView, extraMinimumTouchDurationFor: UITouch, with: PHLivePhotoViewPlaybackStyle) -> TimeInterval](/documentation/photosui/phlivephotoviewdelegate/livephotoview(_:extraminimumtouchdurationfor:with:))

#### Manually Playing Live Photo Content

- [func startPlayback(with: PHLivePhotoViewPlaybackStyle)](/documentation/photosui/phlivephotoview/startplayback(with:))
- [func stopPlayback()](/documentation/photosui/phlivephotoview/stopplayback())
- [func stopPlayback(animated: Bool)](/documentation/photosui/phlivephotoview/stopplayback(animated:))
#### Accessing User Interface Icons for Live Photos

- [class func livePhotoBadgeImage(options: PHLivePhotoBadgeOptions) -> UIImage](/documentation/photosui/phlivephotoview/livephotobadgeimage(options:))
- [var livePhotoBadgeView: NSView?](/documentation/photosui/phlivephotoview/livephotobadgeview)
#### Setting the Content Mode

- [var contentMode: PHLivePhotoViewContentMode](/documentation/photosui/phlivephotoview/contentmode)
- [PHLivePhotoViewContentMode](/documentation/photosui/phlivephotoviewcontentmode)
##### Content Modes

- [case aspectFit](/documentation/photosui/phlivephotoviewcontentmode/aspectfit)
- [case aspectFill](/documentation/photosui/phlivephotoviewcontentmode/aspectfill)
##### Initializers

- [init?(rawValue: Int)](/documentation/photosui/phlivephotoviewcontentmode/init(rawvalue:))

#### Constants

- [PHLivePhotoViewPlaybackStyle](/documentation/photosui/phlivephotoviewplaybackstyle)
##### Constants

- [case undefined](/documentation/photosui/phlivephotoviewplaybackstyle/undefined)
- [case full](/documentation/photosui/phlivephotoviewplaybackstyle/full)
- [case hint](/documentation/photosui/phlivephotoviewplaybackstyle/hint)
##### Initializers

- [init?(rawValue: Int)](/documentation/photosui/phlivephotoviewplaybackstyle/init(rawvalue:))

- [PHLivePhotoBadgeOptions](/documentation/photosui/phlivephotobadgeoptions)
##### Initializers

- [init(rawValue: UInt)](/documentation/photosui/phlivephotobadgeoptions/init(rawvalue:))
##### Constants

- [static var liveOff: PHLivePhotoBadgeOptions](/documentation/photosui/phlivephotobadgeoptions/liveoff)
- [static var overContent: PHLivePhotoBadgeOptions](/documentation/photosui/phlivephotobadgeoptions/overcontent)

#### Instance Properties

- [var contentsRect: CGRect](/documentation/photosui/phlivephotoview/contentsrect)
- [var intrinsicContentSize: CGSize](/documentation/photosui/phlivephotoview/intrinsiccontentsize)

### Photos picker for UIKit, AppKit

- [Selecting Photos and Videos in iOS](/documentation/photokit/selecting-photos-and-videos-in-ios)
- [PHPickerViewController](/documentation/photosui/phpickerviewcontroller)
#### Creating a picker

- [convenience init(configuration: PHPickerConfiguration)](/documentation/photosui/phpickerviewcontroller/init(configuration:))
- [PHPickerConfiguration](/documentation/photosui/phpickerconfiguration-swift.struct)
##### Creating a configuration

- [init()](/documentation/photosui/phpickerconfiguration-swift.struct/init())
- [init(photoLibrary: PHPhotoLibrary)](/documentation/photosui/phpickerconfiguration-swift.struct/init(photolibrary:))
##### Filtering asset types

- [var filter: PHPickerFilter?](/documentation/photosui/phpickerconfiguration-swift.struct/filter)
- [PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct)
###### Creating Filters

- [static func playbackStyle(PHAsset.PlaybackStyle) -> PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/playbackstyle(_:))
- [static func all(of: [PHPickerFilter]) -> PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/all(of:))
- [static func not(PHPickerFilter) -> PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/not(_:))
###### Getting Filter Types

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
###### Type Properties

- [static let spatialMedia: PHPickerFilter](/documentation/photosui/phpickerfilter-swift.struct/spatialmedia)

##### Selecting the preferred asset representation

- [var preferredAssetRepresentationMode: PHPickerConfiguration.AssetRepresentationMode](/documentation/photosui/phpickerconfiguration-swift.struct/preferredassetrepresentationmode)
- [PHPickerConfiguration.AssetRepresentationMode](/documentation/photosui/phpickerconfiguration-swift.struct/assetrepresentationmode)
###### Constants

- [case automatic](/documentation/photosui/phpickerconfiguration-swift.struct/assetrepresentationmode/automatic)
- [case compatible](/documentation/photosui/phpickerconfiguration-swift.struct/assetrepresentationmode/compatible)
- [case current](/documentation/photosui/phpickerconfiguration-swift.struct/assetrepresentationmode/current)

##### Preselecting assets

- [var preselectedAssetIdentifiers: [String]](/documentation/photosui/phpickerconfiguration-swift.struct/preselectedassetidentifiers)
##### Setting the selection limit

- [var selectionLimit: Int](/documentation/photosui/phpickerconfiguration-swift.struct/selectionlimit)
- [var selection: PHPickerConfiguration.Selection](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.property)
- [PHPickerConfigurationSelection](/documentation/photosui/phpickerconfigurationselection)
###### Selection methods

- [case `default`](/documentation/photosui/phpickerconfigurationselection/default)
- [case ordered](/documentation/photosui/phpickerconfigurationselection/ordered)
- [case continuous](/documentation/photosui/phpickerconfigurationselection/continuous)
- [case continuousAndOrdered](/documentation/photosui/phpickerconfigurationselection/continuousandordered)
###### Initializers

- [init?(rawValue: Int)](/documentation/photosui/phpickerconfigurationselection/init(rawvalue:))

- [PHPickerConfiguration.Selection](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum)
###### Selection methods

- [case `default`](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/default)
- [case ordered](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/ordered)
- [case continuous](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/continuous)
- [case continuousAndOrdered](/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/continuousandordered)

##### Customizing picker appearance and behavior

- [var mode: PHPickerMode](/documentation/photosui/phpickerconfiguration-swift.struct/mode)
- [PHPickerMode](/documentation/photosui/phpickermode-swift.struct)
###### Laying out photos

- [static var compact: PHPickerMode](/documentation/photosui/phpickermode-swift.struct/compact)
- [static let `default`: PHPickerMode](/documentation/photosui/phpickermode-swift.struct/default)

- [var disabledCapabilities: PHPickerCapabilities](/documentation/photosui/phpickerconfiguration-swift.struct/disabledcapabilities)
- [PHPickerCapabilities](/documentation/photosui/phpickercapabilities)
###### Specifying features

- [static var collectionNavigation: PHPickerCapabilities](/documentation/photosui/phpickercapabilities/collectionnavigation)
- [static var selectionActions: PHPickerCapabilities](/documentation/photosui/phpickercapabilities/selectionactions)
- [static var search: PHPickerCapabilities](/documentation/photosui/phpickercapabilities/search)
- [static var sensitivityAnalysisIntervention: PHPickerCapabilities](/documentation/photosui/phpickercapabilities/sensitivityanalysisintervention)
- [static var stagingArea: PHPickerCapabilities](/documentation/photosui/phpickercapabilities/stagingarea)
###### Creating a capability

- [init(rawValue: UInt)](/documentation/photosui/phpickercapabilities/init(rawvalue:))

- [var edgesWithoutContentMargins: NSDirectionalRectEdge](/documentation/photosui/phpickerconfiguration-swift.struct/edgeswithoutcontentmargins)
- [PHPickerConfiguration.Update](/documentation/photosui/phpickerconfiguration-swift.struct/update)
###### Creating an update object

- [init()](/documentation/photosui/phpickerconfiguration-swift.struct/update/init())
###### Adjusting selection limits

- [var selectionLimit: Int?](/documentation/photosui/phpickerconfiguration-swift.struct/update/selectionlimit)
###### Adjusting content margins

- [var edgesWithoutContentMargins: NSDirectionalRectEdge?](/documentation/photosui/phpickerconfiguration-swift.struct/update/edgeswithoutcontentmargins)
###### Instance Properties

- [var searchText: PHPickerSearchText?](/documentation/photosui/phpickerconfiguration-swift.struct/update/searchtext)

##### Instance Properties

- [var metadataOptions: PHPickerMetadataOptions](/documentation/photosui/phpickerconfiguration-swift.struct/metadataoptions)
- [var searchText: PHPickerSearchText?](/documentation/photosui/phpickerconfiguration-swift.struct/searchtext)

#### Managing the configuration

- [var configuration: PHPickerConfiguration](/documentation/photosui/phpickerviewcontroller/configuration-17a8p)
- [func updatePicker(using: PHPickerConfiguration.Update)](/documentation/photosui/phpickerviewcontroller/updatepicker(using:))
#### Setting content position and scale

- [func scrollToInitialPosition()](/documentation/photosui/phpickerviewcontroller/scrolltoinitialposition())
- [func zoomIn()](/documentation/photosui/phpickerviewcontroller/zoomin())
- [func zoomOut()](/documentation/photosui/phpickerviewcontroller/zoomout())
#### Responding to user selection

- [var delegate: (any PHPickerViewControllerDelegate)?](/documentation/photosui/phpickerviewcontroller/delegate-3zqmt)
- [PHPickerViewControllerDelegate](/documentation/photosui/phpickerviewcontrollerdelegate-5yntc)
##### Instance Methods

- [func picker(PHPickerViewController, didFinishPicking: [PHPickerResult])](/documentation/photosui/phpickerviewcontrollerdelegate-5yntc/picker(_:didfinishpicking:))

- [PHPickerResult](/documentation/photosui/phpickerresult-swift.struct)
##### Inspecting the Result

- [var assetIdentifier: String?](/documentation/photosui/phpickerresult-swift.struct/assetidentifier)
- [let itemProvider: NSItemProvider](/documentation/photosui/phpickerresult-swift.struct/itemprovider)

#### Deselecting assets

- [func deselectAssets(withIdentifiers: [String])](/documentation/photosui/phpickerviewcontroller/deselectassets(withidentifiers:))
#### Reordering assets

- [func moveAsset(withIdentifier: String, afterAssetWithIdentifier: String?)](/documentation/photosui/phpickerviewcontroller/moveasset(withidentifier:afterassetwithidentifier:))

- [PHPickerViewControllerDelegate](/documentation/photosui/phpickerviewcontrollerdelegate-5yntc)
#### Instance Methods

- [func picker(PHPickerViewController, didFinishPicking: [PHPickerResult])](/documentation/photosui/phpickerviewcontrollerdelegate-5yntc/picker(_:didfinishpicking:))

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
##### Instance Properties

- [var searchText: PHPickerSearchText?](/documentation/photosui/phpickerconfiguration-swift.struct/update/searchtext)

#### Instance Properties

- [var metadataOptions: PHPickerMetadataOptions](/documentation/photosui/phpickerconfiguration-swift.struct/metadataoptions)
- [var searchText: PHPickerSearchText?](/documentation/photosui/phpickerconfiguration-swift.struct/searchtext)

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

- [PHPickerResult](/documentation/photosui/phpickerresult-swift.struct)
#### Inspecting the Result

- [var assetIdentifier: String?](/documentation/photosui/phpickerresult-swift.struct/assetidentifier)
- [let itemProvider: NSItemProvider](/documentation/photosui/phpickerresult-swift.struct/itemprovider)

### Photos picker for SwiftUI

- [Bringing Photos picker to your SwiftUI app](/documentation/photokit/bringing-photos-picker-to-your-swiftui-app)
- [Implementing an inline Photos picker](/documentation/photokit/implementing-an-inline-photos-picker)
- [PhotosPicker](/documentation/photosui/photospicker)
#### Creating a picker

- [init(selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, label: () -> Label)](/documentation/photosui/photospicker/init(selection:matching:preferreditemencoding:label:))
- [init(selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, label: () -> Label)](/documentation/photosui/photospicker/init(selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:label:))
- [init(selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary, label: () -> Label)](/documentation/photosui/photospicker/init(selection:matching:preferreditemencoding:photolibrary:label:))
- [init(selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary, label: () -> Label)](/documentation/photosui/photospicker/init(selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:photolibrary:label:))
#### Creating a picker with a title

- [init(LocalizedStringKey, selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy)](/documentation/photosui/photospicker/init(_:selection:matching:preferreditemencoding:)-7jbef)
- [init<S>(S, selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy)](/documentation/photosui/photospicker/init(_:selection:matching:preferreditemencoding:)-48f7l)
- [init(LocalizedStringKey, selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy)](/documentation/photosui/photospicker/init(_:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:)-8ac23)
- [init<S>(S, selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy)](/documentation/photosui/photospicker/init(_:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:)-6m11r)
- [init(LocalizedStringKey, selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary)](/documentation/photosui/photospicker/init(_:selection:matching:preferreditemencoding:photolibrary:)-bu7c)
- [init<S>(S, selection: Binding<PhotosPickerItem?>, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary)](/documentation/photosui/photospicker/init(_:selection:matching:preferreditemencoding:photolibrary:)-6bm2n)
- [init(LocalizedStringKey, selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary)](/documentation/photosui/photospicker/init(_:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:photolibrary:)-5tpfd)
- [init<S>(S, selection: Binding<[PhotosPickerItem]>, maxSelectionCount: Int?, selectionBehavior: PhotosPickerSelectionBehavior, matching: PHPickerFilter?, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy, photoLibrary: PHPhotoLibrary)](/documentation/photosui/photospicker/init(_:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:photolibrary:)-6fwsc)

- [PhotosPickerItem](/documentation/photosui/photospickeritem)
#### Creating a picker item

- [init(itemIdentifier: String)](/documentation/photosui/photospickeritem/init(itemidentifier:))
#### Inspecting a picker item

- [var itemIdentifier: String?](/documentation/photosui/photospickeritem/itemidentifier)
- [var supportedContentTypes: [UTType]](/documentation/photosui/photospickeritem/supportedcontenttypes)
#### Getting an encoding policy

- [PhotosPickerItem.EncodingDisambiguationPolicy](/documentation/photosui/photospickeritem/encodingdisambiguationpolicy)
##### Getting standard encoding policies

- [static let automatic: PhotosPickerItem.EncodingDisambiguationPolicy](/documentation/photosui/photospickeritem/encodingdisambiguationpolicy/automatic)
- [static let current: PhotosPickerItem.EncodingDisambiguationPolicy](/documentation/photosui/photospickeritem/encodingdisambiguationpolicy/current)
- [static let compatible: PhotosPickerItem.EncodingDisambiguationPolicy](/documentation/photosui/photospickeritem/encodingdisambiguationpolicy/compatible)

#### Loading the provider’s contents

- [func loadTransferable<T>(type: T.Type) async throws -> sending T?](/documentation/photosui/photospickeritem/loadtransferable(type:))
- [func loadTransferable<T>(type: T.Type, completionHandler: (Result<T?, any Error>) -> Void) -> Progress](/documentation/photosui/photospickeritem/loadtransferable(type:completionhandler:))

- [PhotosPickerSelectionBehavior](/documentation/photosui/photospickerselectionbehavior)
#### Getting standard selection behaviors

- [static let `default`: PhotosPickerSelectionBehavior](/documentation/photosui/photospickerselectionbehavior/default)
- [static let ordered: PhotosPickerSelectionBehavior](/documentation/photosui/photospickerselectionbehavior/ordered)
#### Type Properties

- [static let continuous: PhotosPickerSelectionBehavior](/documentation/photosui/photospickerselectionbehavior/continuous)
- [static let continuousAndOrdered: PhotosPickerSelectionBehavior](/documentation/photosui/photospickerselectionbehavior/continuousandordered)

- [PhotosPickerStyle](/documentation/photosui/photospickerstyle)
#### Type Properties

- [static let compact: PhotosPickerStyle](/documentation/photosui/photospickerstyle/compact)
- [static let inline: PhotosPickerStyle](/documentation/photosui/photospickerstyle/inline)
- [static let presentation: PhotosPickerStyle](/documentation/photosui/photospickerstyle/presentation)

### Live Photos

- [Displaying Live Photos](/documentation/photokit/displaying-live-photos)
### Photo Editing Extensions

- [Creating Photo Editing Extensions](/documentation/photokit/creating-photo-editing-extensions)
- [PHContentEditingController](/documentation/photosui/phcontenteditingcontroller)
#### Working with Adjustment Data

- [func canHandle(PHAdjustmentData) -> Bool](/documentation/photosui/phcontenteditingcontroller/canhandle(_:))
#### Performing an Edit

- [func startContentEditing(with: PHContentEditingInput, placeholderImage: UIImage)](/documentation/photosui/phcontenteditingcontroller/startcontentediting(with:placeholderimage:))
- [func finishContentEditing(completionHandler: (PHContentEditingOutput?) -> Void)](/documentation/photosui/phcontenteditingcontroller/finishcontentediting(completionhandler:))
#### Canceling an Edit

- [var shouldShowCancelConfirmation: Bool](/documentation/photosui/phcontenteditingcontroller/shouldshowcancelconfirmation)
- [func cancelContentEditing()](/documentation/photosui/phcontenteditingcontroller/cancelcontentediting())

### macOS Photos Project Extensions

- [Creating a Slideshow Project Extension for Photos](/documentation/photokit/creating-a-slideshow-project-extension-for-photos)
- [PHProject](/documentation/photos/phproject)
#### Project Extension Properties

- [var hasProjectPreview: Bool](/documentation/photos/phproject/hasprojectpreview)
- [var projectExtensionData: Data](/documentation/photos/phproject/projectextensiondata)

- [PHProjectInfo](/documentation/photosui/phprojectinfo)
#### Determining Project Type

- [var projectType: PHProjectType](/documentation/photosui/phprojectinfo/projecttype)
- [PHProjectType](/documentation/photosui/phprojecttype)
##### Initializing a Project Type

- [init(String)](/documentation/photosui/phprojecttype/init(_:))
- [init(rawValue: String)](/documentation/photosui/phprojecttype/init(rawvalue:))
##### Defining a Project Type

- [static let undefined: PHProjectType](/documentation/photosui/phprojecttype/undefined)

- [var creationSource: PHProjectInfo.CreationSource](/documentation/photosui/phprojectinfo/creationsource-swift.property)
- [var sections: [PHProjectSection]](/documentation/photosui/phprojectinfo/sections)
- [PHProjectTypeDescription](/documentation/photosui/phprojecttypedescription)
##### Creating a Project Type Description

- [convenience init(projectType: PHProjectType, title: String, description: String?, image: NSImage?)](/documentation/photosui/phprojecttypedescription/init(projecttype:title:description:image:))
- [init(projectType: PHProjectType, title: String, description: String?, image: NSImage?, subtypeDescriptions: [PHProjectTypeDescription])](/documentation/photosui/phprojecttypedescription/init(projecttype:title:description:image:subtypedescriptions:))
- [init(projectType: PHProjectType, title: String, attributedDescription: NSAttributedString?, image: NSImage?, subtypeDescriptions: [PHProjectTypeDescription])](/documentation/photosui/phprojecttypedescription/init(projecttype:title:attributeddescription:image:subtypedescriptions:))
- [init(projectType: PHProjectType, title: String, description: String?, image: NSImage?, canProvideSubtypes: Bool)](/documentation/photosui/phprojecttypedescription/init(projecttype:title:description:image:canprovidesubtypes:))
- [init(projectType: PHProjectType, title: String, attributedDescription: NSAttributedString?, image: NSImage?, canProvideSubtypes: Bool)](/documentation/photosui/phprojecttypedescription/init(projecttype:title:attributeddescription:image:canprovidesubtypes:))
##### Describing a Project Type

- [var projectType: PHProjectType](/documentation/photosui/phprojecttypedescription/projecttype)
- [var localizedTitle: String](/documentation/photosui/phprojecttypedescription/localizedtitle)
- [var localizedDescription: String?](/documentation/photosui/phprojecttypedescription/localizeddescription)
- [var localizedAttributedDescription: NSAttributedString?](/documentation/photosui/phprojecttypedescription/localizedattributeddescription)
- [var image: NSImage?](/documentation/photosui/phprojecttypedescription/image)
- [var subtypeDescriptions: [PHProjectTypeDescription]](/documentation/photosui/phprojecttypedescription/subtypedescriptions)
- [var canProvideSubtypes: Bool](/documentation/photosui/phprojecttypedescription/canprovidesubtypes)
##### Initializers

- [init?(coder: NSCoder)](/documentation/photosui/phprojecttypedescription/init(coder:))

- [PHProjectTypeDescriptionDataSource](/documentation/photosui/phprojecttypedescriptiondatasource)
##### Providing Required Fields

- [func subtypes(for: PHProjectType) -> [PHProjectTypeDescription]](/documentation/photosui/phprojecttypedescriptiondatasource/subtypes(for:))
- [func typeDescription(for: PHProjectType) -> PHProjectTypeDescription?](/documentation/photosui/phprojecttypedescriptiondatasource/typedescription(for:))
- [func footerText(forSubtypesOf: PHProjectType) -> NSAttributedString?](/documentation/photosui/phprojecttypedescriptiondatasource/footertext(forsubtypesof:))
##### Responding to Removal

- [func extensionWillDiscardDataSource()](/documentation/photosui/phprojecttypedescriptiondatasource/extensionwilldiscarddatasource())

- [PHProjectTypeDescriptionInvalidator](/documentation/photosui/phprojecttypedescriptioninvalidator)
##### Invalidating a Project Type

- [func invalidateTypeDescription(for: PHProjectType)](/documentation/photosui/phprojecttypedescriptioninvalidator/invalidatetypedescription(for:))
- [func invalidateFooterText(forSubtypesOf: PHProjectType)](/documentation/photosui/phprojecttypedescriptioninvalidator/invalidatefootertext(forsubtypesof:))

- [PHProjectInfo.CreationSource](/documentation/photosui/phprojectinfo/creationsource-swift.enum)
##### Project Sources

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
##### Initializers

- [init?(rawValue: Int)](/documentation/photosui/phprojectinfo/creationsource-swift.enum/init(rawvalue:))

#### Creating a Project from an Apple Print Product

- [var brandingEnabled: Bool](/documentation/photosui/phprojectinfo/brandingenabled)
- [var pageNumbersEnabled: Bool](/documentation/photosui/phprojectinfo/pagenumbersenabled)
- [var productIdentifier: String?](/documentation/photosui/phprojectinfo/productidentifier)
- [var themeIdentifier: String?](/documentation/photosui/phprojectinfo/themeidentifier)
#### Initializers

- [init?(coder: NSCoder)](/documentation/photosui/phprojectinfo/init(coder:))

- [PHProjectExtensionContext](/documentation/photosui/phprojectextensioncontext)
#### Accessing the Project and the Photo Library

- [var project: PHProject](/documentation/photosui/phprojectextensioncontext/project)
- [var photoLibrary: PHPhotoLibrary](/documentation/photosui/phprojectextensioncontext/photolibrary)
#### Updating Assets

- [func showEditor(for: PHAsset)](/documentation/photosui/phprojectextensioncontext/showeditor(for:))
- [func updatedProjectInfo(from: PHProjectInfo?, completion: (PHProjectInfo?) -> Void) -> Progress](/documentation/photosui/phprojectextensioncontext/updatedprojectinfo(from:completion:))

- [PHProjectElement](/documentation/photosui/phprojectelement)
#### Subclassing Project Elements

- [PHProjectAssetElement](/documentation/photosui/phprojectassetelement)
##### Characterizing an Asset Element

- [var annotation: String](/documentation/photosui/phprojectassetelement/annotation)
- [var cloudAssetIdentifier: PHCloudIdentifier](/documentation/photosui/phprojectassetelement/cloudassetidentifier)
- [var cropRect: CGRect](/documentation/photosui/phprojectassetelement/croprect)
- [var regionsOfInterest: [PHProjectRegionOfInterest]](/documentation/photosui/phprojectassetelement/regionsofinterest)
- [var horizontallyFlipped: Bool](/documentation/photosui/phprojectassetelement/horizontallyflipped)
- [var verticallyFlipped: Bool](/documentation/photosui/phprojectassetelement/verticallyflipped)

- [PHProjectTextElement](/documentation/photosui/phprojecttextelement)
##### Describing a Text Element

- [var text: String](/documentation/photosui/phprojecttextelement/text)
- [var attributedText: NSAttributedString?](/documentation/photosui/phprojecttextelement/attributedtext)
- [var textElementType: PHProjectTextElement.ElementType](/documentation/photosui/phprojecttextelement/textelementtype)
- [PHProjectTextElement.ElementType](/documentation/photosui/phprojecttextelement/elementtype)
###### Types of Text Elements

- [case body](/documentation/photosui/phprojecttextelement/elementtype/body)
- [case title](/documentation/photosui/phprojecttextelement/elementtype/title)
- [case subtitle](/documentation/photosui/phprojecttextelement/elementtype/subtitle)
###### Initializers

- [init?(rawValue: Int)](/documentation/photosui/phprojecttextelement/elementtype/init(rawvalue:))


- [PHProjectJournalEntryElement](/documentation/photosui/phprojectjournalentryelement)
##### Describing a Journal Entry

- [var date: Date](/documentation/photosui/phprojectjournalentryelement/date)
- [var assetElement: PHProjectAssetElement?](/documentation/photosui/phprojectjournalentryelement/assetelement)
- [var textElement: PHProjectTextElement?](/documentation/photosui/phprojectjournalentryelement/textelement)

- [PHProjectMapElement](/documentation/photosui/phprojectmapelement)
##### Pinpointing the Map

- [var mapType: MKMapType](/documentation/photosui/phprojectmapelement/maptype)
- [var centerCoordinate: CLLocationCoordinate2D](/documentation/photosui/phprojectmapelement/centercoordinate)
- [var heading: CLLocationDirection](/documentation/photosui/phprojectmapelement/heading)
- [var pitch: CGFloat](/documentation/photosui/phprojectmapelement/pitch)
- [var altitude: CLLocationDistance](/documentation/photosui/phprojectmapelement/altitude)
- [var annotations: [any MKAnnotation]](/documentation/photosui/phprojectmapelement/annotations)

#### Describing Project Elements

- [var weight: Double](/documentation/photosui/phprojectelement/weight)
- [var placement: CGRect](/documentation/photosui/phprojectelement/placement)
#### Initializers

- [init?(coder: NSCoder)](/documentation/photosui/phprojectelement/init(coder:))

- [PHProjectSection](/documentation/photosui/phprojectsection)
#### Determining Section Contents

- [var title: String](/documentation/photosui/phprojectsection/title)
- [var sectionContents: [PHProjectSectionContent]](/documentation/photosui/phprojectsection/sectioncontents)
- [PHProjectSectionContent](/documentation/photosui/phprojectsectioncontent)
##### Determining Content Properties

- [var elements: [PHProjectElement]](/documentation/photosui/phprojectsectioncontent/elements)
- [var numberOfColumns: Int](/documentation/photosui/phprojectsectioncontent/numberofcolumns)
- [var aspectRatio: Double](/documentation/photosui/phprojectsectioncontent/aspectratio)
- [var cloudAssetIdentifiers: [PHCloudIdentifier]](/documentation/photosui/phprojectsectioncontent/cloudassetidentifiers)
- [var backgroundColor: NSColor?](/documentation/photosui/phprojectsectioncontent/backgroundcolor)
##### Initializers

- [init?(coder: NSCoder)](/documentation/photosui/phprojectsectioncontent/init(coder:))

#### Defining the Section Type

- [var sectionType: PHProjectSection.SectionType](/documentation/photosui/phprojectsection/sectiontype-swift.property)
- [PHProjectSection.SectionType](/documentation/photosui/phprojectsection/sectiontype-swift.enum)
##### Section Types

- [case undefined](/documentation/photosui/phprojectsection/sectiontype-swift.enum/undefined)
- [case cover](/documentation/photosui/phprojectsection/sectiontype-swift.enum/cover)
- [case content](/documentation/photosui/phprojectsection/sectiontype-swift.enum/content)
- [case auxiliary](/documentation/photosui/phprojectsection/sectiontype-swift.enum/auxiliary)
##### Initializers

- [init?(rawValue: Int)](/documentation/photosui/phprojectsection/sectiontype-swift.enum/init(rawvalue:))

#### Initializers

- [init?(coder: NSCoder)](/documentation/photosui/phprojectsection/init(coder:))

- [PHProjectRegionOfInterest](/documentation/photosui/phprojectregionofinterest)
#### Identifying Regions of Interest

- [PHProjectRegionOfInterest.Identifier](/documentation/photosui/phprojectregionofinterest/identifier-swift.struct)
##### Initializing an Identifier

- [init(String)](/documentation/photosui/phprojectregionofinterest/identifier-swift.struct/init(_:))
- [init(rawValue: String)](/documentation/photosui/phprojectregionofinterest/identifier-swift.struct/init(rawvalue:))

#### Determining Region Properties

- [var rect: CGRect](/documentation/photosui/phprojectregionofinterest/rect)
- [var identifier: PHProjectRegionOfInterest.Identifier](/documentation/photosui/phprojectregionofinterest/identifier-swift.property)
- [var weight: Double](/documentation/photosui/phprojectregionofinterest/weight)
- [var quality: Double](/documentation/photosui/phprojectregionofinterest/quality)
#### Initializers

- [init?(coder: NSCoder)](/documentation/photosui/phprojectregionofinterest/init(coder:))

- [PHProjectChangeRequest](/documentation/photos/phprojectchangerequest)
#### Creating Change Requests

- [init(project: PHProject)](/documentation/photos/phprojectchangerequest/init(project:))
- [var title: String](/documentation/photos/phprojectchangerequest/title)
- [var projectExtensionData: Data](/documentation/photos/phprojectchangerequest/projectextensiondata)
#### Responding to Change Requests

- [func setProjectPreviewImage(NSImage)](/documentation/photos/phprojectchangerequest/setprojectpreviewimage(_:))
- [func setKeyAsset(PHAsset?)](/documentation/photos/phprojectchangerequest/setkeyasset(_:))
#### Removing Assets

- [func removeAssets<T>(T)](/documentation/photos/phprojectchangerequest/removeassets(_:)-n825)
- [func removeAssets(PHFetchResult<PHAsset>)](/documentation/photos/phprojectchangerequest/removeassets(_:)-3ytt3)

- [PHProjectExtensionController](/documentation/photosui/phprojectextensioncontroller)
#### Tracking the Project Extension Life Cycle

- [func beginProject(with: PHProjectExtensionContext, projectInfo: PHProjectInfo, completion: ((any Error)?) -> Void)](/documentation/photosui/phprojectextensioncontroller/beginproject(with:projectinfo:completion:))
- [func finishProject(completionHandler: () -> Void)](/documentation/photosui/phprojectextensioncontroller/finishproject(completionhandler:))
- [func resumeProject(with: PHProjectExtensionContext, completion: ((any Error)?) -> Void)](/documentation/photosui/phprojectextensioncontroller/resumeproject(with:completion:))
- [func typeDescriptionDataSource(for: PHProjectCategory, invalidator: any PHProjectTypeDescriptionInvalidator) -> any PHProjectTypeDescriptionDataSource](/documentation/photosui/phprojectextensioncontroller/typedescriptiondatasource(for:invalidator:))
#### Defining Supported Project Types

- [var supportedProjectTypes: [PHProjectTypeDescription]](/documentation/photosui/phprojectextensioncontroller/supportedprojecttypes)

- [PHProjectCategory](/documentation/photosui/phprojectcategory)
#### Creating a Project Category

- [init(rawValue: String)](/documentation/photosui/phprojectcategory/init(rawvalue:))
#### Designating Type Properties

- [static let book: PHProjectCategory](/documentation/photosui/phprojectcategory/book)
- [static let calendar: PHProjectCategory](/documentation/photosui/phprojectcategory/calendar)
- [static let card: PHProjectCategory](/documentation/photosui/phprojectcategory/card)
- [static let prints: PHProjectCategory](/documentation/photosui/phprojectcategory/prints)
- [static let slideshow: PHProjectCategory](/documentation/photosui/phprojectcategory/slideshow)
- [static let wallDecor: PHProjectCategory](/documentation/photosui/phprojectcategory/walldecor)
- [static let other: PHProjectCategory](/documentation/photosui/phprojectcategory/other)
- [static let undefined: PHProjectCategory](/documentation/photosui/phprojectcategory/undefined)

### Classes

- [PHSharedAlbumCreationViewController](/documentation/photosui/phsharedalbumcreationviewcontroller)
#### Protocols

- [PHSharedAlbumCreationViewController.Delegate](/documentation/photosui/phsharedalbumcreationviewcontroller/delegate-swift.protocol)
##### Instance Methods

- [func sharedAlbumCreationViewController(PHSharedAlbumCreationViewController, didCompleteWithError: (any Error)?)](/documentation/photosui/phsharedalbumcreationviewcontroller/delegate-swift.protocol/sharedalbumcreationviewcontroller(_:didcompletewitherror:))

#### Initializers

- [convenience init(configuration: PHSharedAlbumCreationConfiguration)](/documentation/photosui/phsharedalbumcreationviewcontroller/init(configuration:))
#### Instance Properties

- [var creationResult: __PHSharedAlbumCreationResult?](/documentation/photosui/phsharedalbumcreationviewcontroller/creationresult)
- [var delegate: (any PHSharedAlbumCreationViewController.Delegate)?](/documentation/photosui/phsharedalbumcreationviewcontroller/delegate-swift.property)

- [PHSharedAlbumCustomizationViewController](/documentation/photosui/phsharedalbumcustomizationviewcontroller)
#### Protocols

- [PHSharedAlbumCustomizationViewController.Delegate](/documentation/photosui/phsharedalbumcustomizationviewcontroller/delegate-swift.protocol)
##### Instance Methods

- [func sharedAlbumCustomizationViewController(PHSharedAlbumCustomizationViewController, didCompleteWithError: (any Error)?)](/documentation/photosui/phsharedalbumcustomizationviewcontroller/delegate-swift.protocol/sharedalbumcustomizationviewcontroller(_:didcompletewitherror:))

#### Initializers

- [init(albumIdentifier: String, photoLibrary: PHPhotoLibrary)](/documentation/photosui/phsharedalbumcustomizationviewcontroller/init(albumidentifier:photolibrary:))
#### Instance Properties

- [var albumIdentifier: String](/documentation/photosui/phsharedalbumcustomizationviewcontroller/albumidentifier)
- [var delegate: (any PHSharedAlbumCustomizationViewController.Delegate)?](/documentation/photosui/phsharedalbumcustomizationviewcontroller/delegate-swift.property)

- [PHSharedAlbumPostingViewController](/documentation/photosui/phsharedalbumpostingviewcontroller)
#### Protocols

- [PHSharedAlbumPostingViewController.Delegate](/documentation/photosui/phsharedalbumpostingviewcontroller/delegate-swift.protocol)
##### Instance Methods

- [func sharedAlbumPostingViewController(PHSharedAlbumPostingViewController, didCompleteWithError: (any Error)?)](/documentation/photosui/phsharedalbumpostingviewcontroller/delegate-swift.protocol/sharedalbumpostingviewcontroller(_:didcompletewitherror:))

#### Initializers

- [convenience init(items: [PHPickerResult], defaultAlbumIdentifier: String?, photoLibrary: PHPhotoLibrary)](/documentation/photosui/phsharedalbumpostingviewcontroller/init(items:defaultalbumidentifier:photolibrary:))
#### Instance Properties

- [var albumIdentifier: String?](/documentation/photosui/phsharedalbumpostingviewcontroller/albumidentifier)
- [var delegate: (any PHSharedAlbumPostingViewController.Delegate)?](/documentation/photosui/phsharedalbumpostingviewcontroller/delegate-swift.property)

### Structures

- [PHPickerMetadataOptions](/documentation/photosui/phpickermetadataoptions)
#### Initializers

- [init(rawValue: UInt)](/documentation/photosui/phpickermetadataoptions/init(rawvalue:))
#### Type Properties

- [static var removeCaptions: PHPickerMetadataOptions](/documentation/photosui/phpickermetadataoptions/removecaptions)
- [static var removeLocation: PHPickerMetadataOptions](/documentation/photosui/phpickermetadataoptions/removelocation)

- [PHPickerSearchText](/documentation/photosui/phpickersearchtext-swift.struct)
#### Initializers

- [init(String)](/documentation/photosui/phpickersearchtext-swift.struct/init(_:))

- [PHSharedAlbumCreationConfiguration](/documentation/photosui/phsharedalbumcreationconfiguration-swift.struct)
#### Initializers

- [init(photoLibrary: PHPhotoLibrary)](/documentation/photosui/phsharedalbumcreationconfiguration-swift.struct/init(photolibrary:))
#### Instance Properties

- [var defaultPolicy: PHSharedAlbumCreationSharingPolicy](/documentation/photosui/phsharedalbumcreationconfiguration-swift.struct/defaultpolicy)
- [var defaultTitle: String?](/documentation/photosui/phsharedalbumcreationconfiguration-swift.struct/defaulttitle)
- [let photoLibrary: PHPhotoLibrary](/documentation/photosui/phsharedalbumcreationconfiguration-swift.struct/photolibrary)

- [PHSharedAlbumCreationResult](/documentation/photosui/phsharedalbumcreationresult-swift.struct)
#### Instance Properties

- [var albumIdentifier: String](/documentation/photosui/phsharedalbumcreationresult-swift.struct/albumidentifier)
- [var albumURL: URL](/documentation/photosui/phsharedalbumcreationresult-swift.struct/albumurl)

### Enumerations

- [PHSharedAlbumCreationSharingPolicy](/documentation/photosui/phsharedalbumcreationsharingpolicy)
#### Enumeration Cases

- [case `private`](/documentation/photosui/phsharedalbumcreationsharingpolicy/private)
- [case `public`](/documentation/photosui/phsharedalbumcreationsharingpolicy/public)
#### Initializers

- [init?(rawValue: Int)](/documentation/photosui/phsharedalbumcreationsharingpolicy/init(rawvalue:))


## Sample code

- [Browsing and Modifying Photo Albums](/documentation/photokit/browsing-and-modifying-photo-albums)
- [Selecting Photos and Videos in iOS](/documentation/photokit/selecting-photos-and-videos-in-ios)
- [Bringing Photos picker to your SwiftUI app](/documentation/photokit/bringing-photos-picker-to-your-swiftui-app)
- [Implementing an inline Photos picker](/documentation/photokit/implementing-an-inline-photos-picker)
- [Creating a Slideshow Project Extension for Photos](/documentation/photokit/creating-a-slideshow-project-extension-for-photos)
## Articles

- [Delivering an Enhanced Privacy Experience in Your Photos App](/documentation/photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app)
- [Fetching Objects and Requesting Changes](/documentation/photokit/fetching-objects-and-requesting-changes)
- [Loading and Caching Assets and Thumbnails](/documentation/photokit/loading-and-caching-assets-and-thumbnails)
- [Displaying Live Photos](/documentation/photokit/displaying-live-photos)
- [Creating Photo Editing Extensions](/documentation/photokit/creating-photo-editing-extensions)

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*
