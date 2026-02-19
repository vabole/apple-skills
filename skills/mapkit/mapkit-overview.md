---
title: MapKit
source: https://developer.apple.com/documentation/mapkit
timestamp: 2026-02-19T07:52:17.767Z
---

## The MapKit APIs

- [MapKit for AppKit and UIKit](/documentation/mapkit/mapkit-for-appkit-and-uikit)

### Essentials

- [Enabling Maps capability in Xcode](/documentation/mapkit/enabling-maps-capability-in-xcode)
- [Identifying unique locations with Place IDs](/documentation/mapkit/identifying-unique-locations-with-place-ids)
- [MKMapView](/documentation/mapkit/mkmapview)

#### Configuring the map appearance

- [var preferredConfiguration: MKMapConfiguration](/documentation/mapkit/mkmapview/preferredconfiguration)
- [var pitchButtonVisibility: MKFeatureVisibility](/documentation/mapkit/mkmapview/pitchbuttonvisibility)
- [var showsUserTrackingButton: Bool](/documentation/mapkit/mkmapview/showsusertrackingbutton)
- [MKMapConfiguration](/documentation/mapkit/mkmapconfiguration)

##### Controlling the elevation style

- [var elevationStyle: MKMapConfiguration.ElevationStyle](/documentation/mapkit/mkmapconfiguration/elevationstyle-swift.property)
- [MKMapConfiguration.ElevationStyle](/documentation/mapkit/mkmapconfiguration/elevationstyle-swift.enum)

###### Constants

- [case flat](/documentation/mapkit/mkmapconfiguration/elevationstyle-swift.enum/flat)
- [case realistic](/documentation/mapkit/mkmapconfiguration/elevationstyle-swift.enum/realistic)

###### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkmapconfiguration/elevationstyle-swift.enum/init(rawvalue:))
- [MKStandardMapConfiguration](/documentation/mapkit/mkstandardmapconfiguration)

##### Creating a standard map configuration

- [init()](/documentation/mapkit/mkstandardmapconfiguration/init())
- [convenience init(elevationStyle: MKMapConfiguration.ElevationStyle)](/documentation/mapkit/mkstandardmapconfiguration/init(elevationstyle:))
- [convenience init(elevationStyle: MKMapConfiguration.ElevationStyle, emphasisStyle: MKStandardMapConfiguration.EmphasisStyle)](/documentation/mapkit/mkstandardmapconfiguration/init(elevationstyle:emphasisstyle:))
- [convenience init(emphasisStyle: MKStandardMapConfiguration.EmphasisStyle)](/documentation/mapkit/mkstandardmapconfiguration/init(emphasisstyle:))
- [MKMapConfiguration.ElevationStyle](/documentation/mapkit/mkmapconfiguration/elevationstyle-swift.enum)

###### Constants

- [case flat](/documentation/mapkit/mkmapconfiguration/elevationstyle-swift.enum/flat)
- [case realistic](/documentation/mapkit/mkmapconfiguration/elevationstyle-swift.enum/realistic)

###### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkmapconfiguration/elevationstyle-swift.enum/init(rawvalue:))
- [MKStandardMapConfiguration.EmphasisStyle](/documentation/mapkit/mkstandardmapconfiguration/emphasisstyle-swift.enum)

###### Controlling the map’s emphasis

- [case `default`](/documentation/mapkit/mkstandardmapconfiguration/emphasisstyle-swift.enum/default)
- [case muted](/documentation/mapkit/mkstandardmapconfiguration/emphasisstyle-swift.enum/muted)
- [case `default`](/documentation/mapkit/mkstandardmapconfiguration/emphasisstyle-swift.enum/default)
- [case muted](/documentation/mapkit/mkstandardmapconfiguration/emphasisstyle-swift.enum/muted)

###### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkstandardmapconfiguration/emphasisstyle-swift.enum/init(rawvalue:))

##### Customizing the map display

- [var emphasisStyle: MKStandardMapConfiguration.EmphasisStyle](/documentation/mapkit/mkstandardmapconfiguration/emphasisstyle-swift.property)
- [MKStandardMapConfiguration.EmphasisStyle](/documentation/mapkit/mkstandardmapconfiguration/emphasisstyle-swift.enum)

###### Controlling the map’s emphasis

- [case `default`](/documentation/mapkit/mkstandardmapconfiguration/emphasisstyle-swift.enum/default)
- [case muted](/documentation/mapkit/mkstandardmapconfiguration/emphasisstyle-swift.enum/muted)
- [case `default`](/documentation/mapkit/mkstandardmapconfiguration/emphasisstyle-swift.enum/default)
- [case muted](/documentation/mapkit/mkstandardmapconfiguration/emphasisstyle-swift.enum/muted)

###### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkstandardmapconfiguration/emphasisstyle-swift.enum/init(rawvalue:))
- [var pointOfInterestFilter: MKPointOfInterestFilter?](/documentation/mapkit/mkstandardmapconfiguration/pointofinterestfilter)
- [var showsTraffic: Bool](/documentation/mapkit/mkstandardmapconfiguration/showstraffic)
- [MKHybridMapConfiguration](/documentation/mapkit/mkhybridmapconfiguration)

##### Creating a hybrid map configuration

- [init()](/documentation/mapkit/mkhybridmapconfiguration/init())
- [convenience init(elevationStyle: MKMapConfiguration.ElevationStyle)](/documentation/mapkit/mkhybridmapconfiguration/init(elevationstyle:))
- [MKMapConfiguration.ElevationStyle](/documentation/mapkit/mkmapconfiguration/elevationstyle-swift.enum)

###### Constants

- [case flat](/documentation/mapkit/mkmapconfiguration/elevationstyle-swift.enum/flat)
- [case realistic](/documentation/mapkit/mkmapconfiguration/elevationstyle-swift.enum/realistic)

###### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkmapconfiguration/elevationstyle-swift.enum/init(rawvalue:))

##### Controlling what the map displays

- [var pointOfInterestFilter: MKPointOfInterestFilter?](/documentation/mapkit/mkhybridmapconfiguration/pointofinterestfilter)
- [var showsTraffic: Bool](/documentation/mapkit/mkhybridmapconfiguration/showstraffic)
- [MKImageryMapConfiguration](/documentation/mapkit/mkimagerymapconfiguration)

##### Creating a map imagery configuration

- [init()](/documentation/mapkit/mkimagerymapconfiguration/init())
- [convenience init(elevationStyle: MKMapConfiguration.ElevationStyle)](/documentation/mapkit/mkimagerymapconfiguration/init(elevationstyle:))

#### Customizing the map view behavior

- [var delegate: (any MKMapViewDelegate)?](/documentation/mapkit/mkmapview/delegate)
- [MKMapViewDelegate](/documentation/mapkit/mkmapviewdelegate)

##### Responding to map position changes

- [func mapView(MKMapView, regionWillChangeAnimated: Bool)](/documentation/mapkit/mkmapviewdelegate/mapview(_:regionwillchangeanimated:))
- [func mapViewDidChangeVisibleRegion(MKMapView)](/documentation/mapkit/mkmapviewdelegate/mapviewdidchangevisibleregion(_:))
- [func mapView(MKMapView, regionDidChangeAnimated: Bool)](/documentation/mapkit/mkmapviewdelegate/mapview(_:regiondidchangeanimated:))

##### Loading the map data

- [func mapViewWillStartLoadingMap(MKMapView)](/documentation/mapkit/mkmapviewdelegate/mapviewwillstartloadingmap(_:))
- [func mapViewDidFinishLoadingMap(MKMapView)](/documentation/mapkit/mkmapviewdelegate/mapviewdidfinishloadingmap(_:))
- [func mapViewDidFailLoadingMap(MKMapView, withError: any Error)](/documentation/mapkit/mkmapviewdelegate/mapviewdidfailloadingmap(_:witherror:))
- [func mapViewWillStartRenderingMap(MKMapView)](/documentation/mapkit/mkmapviewdelegate/mapviewwillstartrenderingmap(_:))
- [func mapViewDidFinishRenderingMap(MKMapView, fullyRendered: Bool)](/documentation/mapkit/mkmapviewdelegate/mapviewdidfinishrenderingmap(_:fullyrendered:))

##### Tracking the user’s location

- [func mapViewWillStartLocatingUser(MKMapView)](/documentation/mapkit/mkmapviewdelegate/mapviewwillstartlocatinguser(_:))
- [func mapViewDidStopLocatingUser(MKMapView)](/documentation/mapkit/mkmapviewdelegate/mapviewdidstoplocatinguser(_:))
- [func mapView(MKMapView, didUpdate: MKUserLocation)](/documentation/mapkit/mkmapviewdelegate/mapview(_:didupdate:))
- [func mapView(MKMapView, didFailToLocateUserWithError: any Error)](/documentation/mapkit/mkmapviewdelegate/mapview(_:didfailtolocateuserwitherror:))
- [func mapView(MKMapView, didChange: MKUserTrackingMode, animated: Bool)](/documentation/mapkit/mkmapviewdelegate/mapview(_:didchange:animated:))

##### Managing annotation views

- [func mapView(MKMapView, viewFor: any MKAnnotation) -> MKAnnotationView?](/documentation/mapkit/mkmapviewdelegate/mapview(_:viewfor:)-8humz)
- [func mapView(MKMapView, didAdd: [MKAnnotationView])](/documentation/mapkit/mkmapviewdelegate/mapview(_:didadd:)-44xon)
- [func mapView(MKMapView, annotationView: MKAnnotationView, calloutAccessoryControlTapped: UIControl)](/documentation/mapkit/mkmapviewdelegate/mapview(_:annotationview:calloutaccessorycontroltapped:))
- [func mapView(MKMapView, clusterAnnotationForMemberAnnotations: [any MKAnnotation]) -> MKClusterAnnotation](/documentation/mapkit/mkmapviewdelegate/mapview(_:clusterannotationformemberannotations:))

##### Dragging an annotation view

- [func mapView(MKMapView, annotationView: MKAnnotationView, didChange: MKAnnotationView.DragState, fromOldState: MKAnnotationView.DragState)](/documentation/mapkit/mkmapviewdelegate/mapview(_:annotationview:didchange:fromoldstate:))

##### Selecting annotations and annotations views

- [func mapView(MKMapView, didSelect: MKAnnotationView)](/documentation/mapkit/mkmapviewdelegate/mapview(_:didselect:)-41by3)
- [func mapView(MKMapView, didDeselect: MKAnnotationView)](/documentation/mapkit/mkmapviewdelegate/mapview(_:diddeselect:)-yo7q)
- [func mapView(MKMapView, didDeselect: any MKAnnotation)](/documentation/mapkit/mkmapviewdelegate/mapview(_:diddeselect:)-4ldss)
- [func mapView(MKMapView, didSelect: any MKAnnotation)](/documentation/mapkit/mkmapviewdelegate/mapview(_:didselect:)-9km43)
- [var selectableMapFeatures: MKMapFeatureOptions](/documentation/mapkit/mkmapview/selectablemapfeatures)

##### Managing the display of overlays

- [func mapView(MKMapView, selectionAccessoryFor: any MKAnnotation) -> MKSelectionAccessory?](/documentation/mapkit/mkmapviewdelegate/mapview(_:selectionaccessoryfor:))
- [func mapView(MKMapView, rendererFor: any MKOverlay) -> MKOverlayRenderer](/documentation/mapkit/mkmapviewdelegate/mapview(_:rendererfor:))
- [func mapView(MKMapView, didAdd: [MKOverlayRenderer])](/documentation/mapkit/mkmapviewdelegate/mapview(_:didadd:)-793gj)
- [func mapView(MKMapView, viewFor: any MKOverlay) -> MKOverlayView](/documentation/mapkit/mkmapviewdelegate/mapview(_:viewfor:)-6j267)
- [func mapView(MKMapView, didAddOverlayViews: [Any])](/documentation/mapkit/mkmapviewdelegate/mapview(_:didaddoverlayviews:))

#### Accessing map properties

- [MKMapType](/documentation/mapkit/mkmaptype)

##### Constants

- [case standard](/documentation/mapkit/mkmaptype/standard)
- [case satellite](/documentation/mapkit/mkmaptype/satellite)
- [case hybrid](/documentation/mapkit/mkmaptype/hybrid)
- [case satelliteFlyover](/documentation/mapkit/mkmaptype/satelliteflyover)
- [case hybridFlyover](/documentation/mapkit/mkmaptype/hybridflyover)
- [case mutedStandard](/documentation/mapkit/mkmaptype/mutedstandard)

##### Initializers

- [init?(rawValue: UInt)](/documentation/mapkit/mkmaptype/init(rawvalue:))
- [var isZoomEnabled: Bool](/documentation/mapkit/mkmapview/iszoomenabled)
- [var isScrollEnabled: Bool](/documentation/mapkit/mkmapview/isscrollenabled)
- [var isPitchEnabled: Bool](/documentation/mapkit/mkmapview/ispitchenabled)
- [var isRotateEnabled: Bool](/documentation/mapkit/mkmapview/isrotateenabled)
- [var mapType: MKMapType](/documentation/mapkit/mkmapview/maptype)

#### Manipulating the visible portion of the map

- [var region: MKCoordinateRegion](/documentation/mapkit/mkmapview/region)
- [func setRegion(MKCoordinateRegion, animated: Bool)](/documentation/mapkit/mkmapview/setregion(_:animated:))
- [var centerCoordinate: CLLocationCoordinate2D](/documentation/mapkit/mkmapview/centercoordinate)
- [func setCenter(CLLocationCoordinate2D, animated: Bool)](/documentation/mapkit/mkmapview/setcenter(_:animated:))
- [func showAnnotations([any MKAnnotation], animated: Bool)](/documentation/mapkit/mkmapview/showannotations(_:animated:))
- [var visibleMapRect: MKMapRect](/documentation/mapkit/mkmapview/visiblemaprect)
- [func setVisibleMapRect(MKMapRect, animated: Bool)](/documentation/mapkit/mkmapview/setvisiblemaprect(_:animated:))
- [func setVisibleMapRect(MKMapRect, edgePadding: UIEdgeInsets, animated: Bool)](/documentation/mapkit/mkmapview/setvisiblemaprect(_:edgepadding:animated:))

#### Constraining the map view

- [func setCameraBoundary(MKMapView.CameraBoundary?, animated: Bool)](/documentation/mapkit/mkmapview/setcameraboundary(_:animated:))
- [var cameraBoundary: MKMapView.CameraBoundary?](/documentation/mapkit/mkmapview/cameraboundary-swift.property)
- [func setCameraZoomRange(MKMapView.CameraZoomRange?, animated: Bool)](/documentation/mapkit/mkmapview/setcamerazoomrange(_:animated:))
- [var cameraZoomRange: MKMapView.CameraZoomRange!](/documentation/mapkit/mkmapview/camerazoomrange-swift.property)
- [MKMapView.CameraBoundary](/documentation/mapkit/mkmapview/cameraboundary-swift.class)

##### Creating a camera boundary

- [init?(coder: NSCoder)](/documentation/mapkit/mkmapview/cameraboundary-swift.class/init(coder:))
- [init?(coordinateRegion: MKCoordinateRegion)](/documentation/mapkit/mkmapview/cameraboundary-swift.class/init(coordinateregion:))
- [init?(mapRect: MKMapRect)](/documentation/mapkit/mkmapview/cameraboundary-swift.class/init(maprect:))

##### Accessing the boundary

- [var mapRect: MKMapRect](/documentation/mapkit/mkmapview/cameraboundary-swift.class/maprect)
- [var region: MKCoordinateRegion](/documentation/mapkit/mkmapview/cameraboundary-swift.class/region)
- [MKMapView.CameraZoomRange](/documentation/mapkit/mkmapview/camerazoomrange-swift.class)

##### Creating a camera zoom range

- [init?(minCenterCoordinateDistance: CLLocationDistance, maxCenterCoordinateDistance: CLLocationDistance)](/documentation/mapkit/mkmapview/camerazoomrange-swift.class/init(mincentercoordinatedistance:maxcentercoordinatedistance:))
- [convenience init?(minCenterCoordinateDistance: CLLocationDistance)](/documentation/mapkit/mkmapview/camerazoomrange-swift.class/init(mincentercoordinatedistance:))
- [convenience init?(maxCenterCoordinateDistance: CLLocationDistance)](/documentation/mapkit/mkmapview/camerazoomrange-swift.class/init(maxcentercoordinatedistance:))
- [let MKMapCameraZoomDefault: CLLocationDistance](/documentation/mapkit/mkmapcamerazoomdefault)

##### Accessing zoom range values

- [var maxCenterCoordinateDistance: CLLocationDistance](/documentation/mapkit/mkmapview/camerazoomrange-swift.class/maxcentercoordinatedistance)
- [var minCenterCoordinateDistance: CLLocationDistance](/documentation/mapkit/mkmapview/camerazoomrange-swift.class/mincentercoordinatedistance)

#### Configuring the map display

- [func setCamera(MKMapCamera, animated: Bool)](/documentation/mapkit/mkmapview/setcamera(_:animated:))
- [var camera: MKMapCamera](/documentation/mapkit/mkmapview/camera)
- [var showsCompass: Bool](/documentation/mapkit/mkmapview/showscompass)
- [var showsPitchControl: Bool](/documentation/mapkit/mkmapview/showspitchcontrol)
- [var showsScale: Bool](/documentation/mapkit/mkmapview/showsscale)
- [var showsZoomControls: Bool](/documentation/mapkit/mkmapview/showszoomcontrols)
- [var showsBuildings: Bool](/documentation/mapkit/mkmapview/showsbuildings)
- [var showsPointsOfInterest: Bool](/documentation/mapkit/mkmapview/showspointsofinterest)
- [var pointOfInterestFilter: MKPointOfInterestFilter?](/documentation/mapkit/mkmapview/pointofinterestfilter)
- [var showsTraffic: Bool](/documentation/mapkit/mkmapview/showstraffic)

#### Displaying the user’s location

- [Converting a user’s location to a descriptive placemark](/documentation/mapkit/converting-a-user-s-location-to-a-descriptive-placemark)
- [var showsUserLocation: Bool](/documentation/mapkit/mkmapview/showsuserlocation)
- [var isUserLocationVisible: Bool](/documentation/mapkit/mkmapview/isuserlocationvisible)
- [var userLocation: MKUserLocation](/documentation/mapkit/mkmapview/userlocation)
- [var userTrackingMode: MKUserTrackingMode](/documentation/mapkit/mkmapview/usertrackingmode)
- [func setUserTrackingMode(MKUserTrackingMode, animated: Bool)](/documentation/mapkit/mkmapview/setusertrackingmode(_:animated:))
- [MKUserTrackingMode](/documentation/mapkit/mkusertrackingmode)

##### Constants

- [case none](/documentation/mapkit/mkusertrackingmode/none)
- [case follow](/documentation/mapkit/mkusertrackingmode/follow)
- [case followWithHeading](/documentation/mapkit/mkusertrackingmode/followwithheading)

##### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkusertrackingmode/init(rawvalue:))

#### Annotating the map

- [var annotations: [any MKAnnotation]](/documentation/mapkit/mkmapview/annotations)
- [func addAnnotation(any MKAnnotation)](/documentation/mapkit/mkmapview/addannotation(_:))
- [func addAnnotations([any MKAnnotation])](/documentation/mapkit/mkmapview/addannotations(_:))
- [func removeAnnotation(any MKAnnotation)](/documentation/mapkit/mkmapview/removeannotation(_:))
- [func removeAnnotations([any MKAnnotation])](/documentation/mapkit/mkmapview/removeannotations(_:))
- [func annotations(in: MKMapRect) -> Set<AnyHashable>](/documentation/mapkit/mkmapview/annotations(in:))

#### Managing annotation selections

- [var annotationVisibleRect: CGRect](/documentation/mapkit/mkmapview/annotationvisiblerect)
- [var selectedAnnotations: [any MKAnnotation]](/documentation/mapkit/mkmapview/selectedannotations)
- [func selectAnnotation(any MKAnnotation, animated: Bool)](/documentation/mapkit/mkmapview/selectannotation(_:animated:))
- [func deselectAnnotation((any MKAnnotation)?, animated: Bool)](/documentation/mapkit/mkmapview/deselectannotation(_:animated:))

#### Creating annotation views

- [func register(AnyClass?, forAnnotationViewWithReuseIdentifier: String)](/documentation/mapkit/mkmapview/register(_:forannotationviewwithreuseidentifier:))
- [func dequeueReusableAnnotationView(withIdentifier: String, for: any MKAnnotation) -> MKAnnotationView](/documentation/mapkit/mkmapview/dequeuereusableannotationview(withidentifier:for:))
- [func dequeueReusableAnnotationView(withIdentifier: String) -> MKAnnotationView?](/documentation/mapkit/mkmapview/dequeuereusableannotationview(withidentifier:))
- [func view(for: any MKAnnotation) -> MKAnnotationView?](/documentation/mapkit/mkmapview/view(for:)-33w8k)
- [let MKMapViewDefaultAnnotationViewReuseIdentifier: String](/documentation/mapkit/mkmapviewdefaultannotationviewreuseidentifier)
- [let MKMapViewDefaultClusterAnnotationViewReuseIdentifier: String](/documentation/mapkit/mkmapviewdefaultclusterannotationviewreuseidentifier)

#### Accessing overlays

- [var overlays: [any MKOverlay]](/documentation/mapkit/mkmapview/overlays)
- [func overlays(in: MKOverlayLevel) -> [any MKOverlay]](/documentation/mapkit/mkmapview/overlays(in:))
- [func renderer(for: any MKOverlay) -> MKOverlayRenderer?](/documentation/mapkit/mkmapview/renderer(for:))
- [MKOverlayLevel](/documentation/mapkit/mkoverlaylevel)

##### Constants

- [case aboveRoads](/documentation/mapkit/mkoverlaylevel/aboveroads)
- [case aboveLabels](/documentation/mapkit/mkoverlaylevel/abovelabels)

##### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkoverlaylevel/init(rawvalue:))
- [func view(for: any MKOverlay) -> MKOverlayView](/documentation/mapkit/mkmapview/view(for:)-38z60)

#### Adding and inserting overlays

- [func addOverlay(any MKOverlay, level: MKOverlayLevel)](/documentation/mapkit/mkmapview/addoverlay(_:level:))
- [func addOverlays([any MKOverlay], level: MKOverlayLevel)](/documentation/mapkit/mkmapview/addoverlays(_:level:))
- [func addOverlay(any MKOverlay)](/documentation/mapkit/mkmapview/addoverlay(_:))
- [func addOverlays([any MKOverlay])](/documentation/mapkit/mkmapview/addoverlays(_:))
- [func insertOverlay(any MKOverlay, at: Int, level: MKOverlayLevel)](/documentation/mapkit/mkmapview/insertoverlay(_:at:level:))
- [func insertOverlay(any MKOverlay, at: Int)](/documentation/mapkit/mkmapview/insertoverlay(_:at:))
- [func insertOverlay(any MKOverlay, above: any MKOverlay)](/documentation/mapkit/mkmapview/insertoverlay(_:above:))
- [func insertOverlay(any MKOverlay, below: any MKOverlay)](/documentation/mapkit/mkmapview/insertoverlay(_:below:))
- [func exchangeOverlay(any MKOverlay, with: any MKOverlay)](/documentation/mapkit/mkmapview/exchangeoverlay(_:with:))
- [func exchangeOverlay(at: Int, withOverlayAt: Int)](/documentation/mapkit/mkmapview/exchangeoverlay(at:withoverlayat:))

#### Removing overlays

- [func removeOverlay(any MKOverlay)](/documentation/mapkit/mkmapview/removeoverlay(_:))
- [func removeOverlays([any MKOverlay])](/documentation/mapkit/mkmapview/removeoverlays(_:))

#### Converting map coordinates

- [func convert(CLLocationCoordinate2D, toPointTo: UIView?) -> CGPoint](/documentation/mapkit/mkmapview/convert(_:topointto:))
- [func convert(CGPoint, toCoordinateFrom: UIView?) -> CLLocationCoordinate2D](/documentation/mapkit/mkmapview/convert(_:tocoordinatefrom:))
- [func convert(MKCoordinateRegion, toRectTo: UIView?) -> CGRect](/documentation/mapkit/mkmapview/convert(_:torectto:))
- [func convert(CGRect, toRegionFrom: UIView?) -> MKCoordinateRegion](/documentation/mapkit/mkmapview/convert(_:toregionfrom:))

#### Adjusting map regions and rectangles

- [func regionThatFits(MKCoordinateRegion) -> MKCoordinateRegion](/documentation/mapkit/mkmapview/regionthatfits(_:))
- [func mapRectThatFits(MKMapRect) -> MKMapRect](/documentation/mapkit/mkmapview/maprectthatfits(_:))
- [func mapRectThatFits(MKMapRect, edgePadding: UIEdgeInsets) -> MKMapRect](/documentation/mapkit/mkmapview/maprectthatfits(_:edgepadding:))

#### Instance Properties

- [var selectableMapFeatures: MKMapFeatureOptions](/documentation/mapkit/mkmapview/selectablemapfeatures)
- [MKMapItem](/documentation/mapkit/mkmapitem)

#### Creating map items

- [init(placemark: MKPlacemark)](/documentation/mapkit/mkmapitem/init(placemark:))
- [class func forCurrentLocation() -> MKMapItem](/documentation/mapkit/mkmapitem/forcurrentlocation())

#### Accessing the map item attributes

- [MKMapItem.Identifier](/documentation/mapkit/mkmapitem/identifier-swift.class)
- [var alternateIdentifiers: Set<MKMapItem.Identifier>](/documentation/mapkit/mkmapitem/alternateidentifiers)
- [var identifier: MKMapItem.Identifier?](/documentation/mapkit/mkmapitem/identifier-swift.property)
- [var isCurrentLocation: Bool](/documentation/mapkit/mkmapitem/iscurrentlocation)
- [var name: String?](/documentation/mapkit/mkmapitem/name)
- [var placemark: MKPlacemark](/documentation/mapkit/mkmapitem/placemark)
- [var pointOfInterestCategory: MKPointOfInterestCategory?](/documentation/mapkit/mkmapitem/pointofinterestcategory)
- [var phoneNumber: String?](/documentation/mapkit/mkmapitem/phonenumber)
- [var timeZone: TimeZone?](/documentation/mapkit/mkmapitem/timezone)
- [var url: URL?](/documentation/mapkit/mkmapitem/url)

#### Launching the Maps app

- [class func openMaps(with: [MKMapItem], launchOptions: [String : Any]?) -> Bool](/documentation/mapkit/mkmapitem/openmaps(with:launchoptions:))
- [class func openMaps(with: [MKMapItem], launchOptions: [String : Any]?, completionHandler: ((Bool) -> Void)?)](/documentation/mapkit/mkmapitem/openmaps(with:launchoptions:completionhandler:))
- [class func openMaps(with: [MKMapItem], launchOptions: [String : Any]?, from: UIScene?, completionHandler: ((Bool) -> Void)?)](/documentation/mapkit/mkmapitem/openmaps(with:launchoptions:from:completionhandler:))
- [func openInMaps(launchOptions: [String : Any]?) -> Bool](/documentation/mapkit/mkmapitem/openinmaps(launchoptions:))
- [func openInMaps(launchOptions: [String : Any]?, completionHandler: ((Bool) -> Void)?)](/documentation/mapkit/mkmapitem/openinmaps(launchoptions:completionhandler:))
- [func openInMaps(launchOptions: [String : Any]?, from: UIScene?, completionHandler: ((Bool) -> Void)?)](/documentation/mapkit/mkmapitem/openinmaps(launchoptions:from:completionhandler:))

#### Serializing a map item

- [let MKMapItemTypeIdentifier: String](/documentation/mapkit/mkmapitemtypeidentifier)

#### Opening items at launch time

- [Launch options dictionary keys](/documentation/mapkit/launch-options-dictionary-keys)

##### Launch options

- [let MKLaunchOptionsDirectionsModeKey: String](/documentation/mapkit/mklaunchoptionsdirectionsmodekey)
- [let MKLaunchOptionsMapTypeKey: String](/documentation/mapkit/mklaunchoptionsmaptypekey)
- [let MKLaunchOptionsMapCenterKey: String](/documentation/mapkit/mklaunchoptionsmapcenterkey)
- [let MKLaunchOptionsMapSpanKey: String](/documentation/mapkit/mklaunchoptionsmapspankey)
- [let MKLaunchOptionsShowsTrafficKey: String](/documentation/mapkit/mklaunchoptionsshowstraffickey)
- [let MKLaunchOptionsCameraKey: String](/documentation/mapkit/mklaunchoptionscamerakey)
- [Directions mode values](/documentation/mapkit/directions-mode-values)

##### Directions keys

- [let MKLaunchOptionsDirectionsModeDriving: String](/documentation/mapkit/mklaunchoptionsdirectionsmodedriving)
- [let MKLaunchOptionsDirectionsModeWalking: String](/documentation/mapkit/mklaunchoptionsdirectionsmodewalking)
- [let MKLaunchOptionsDirectionsModeTransit: String](/documentation/mapkit/mklaunchoptionsdirectionsmodetransit)
- [let MKLaunchOptionsDirectionsModeCycling: String](/documentation/mapkit/mklaunchoptionsdirectionsmodecycling)
- [let MKLaunchOptionsDirectionsModeDefault: String](/documentation/mapkit/mklaunchoptionsdirectionsmodedefault)

#### Initializers

- [init(location: CLLocation, address: MKAddress?)](/documentation/mapkit/mkmapitem/init(location:address:))

#### Instance Properties

- [var address: MKAddress?](/documentation/mapkit/mkmapitem/address)
- [var addressRepresentations: MKAddressRepresentations?](/documentation/mapkit/mkmapitem/addressrepresentations)
- [var location: CLLocation](/documentation/mapkit/mkmapitem/location)

#### Default Implementations

- [MKMapItem Implementations](/documentation/mapkit/mkmapitem/mkmapitem-implementations)

##### Initializers

- [init?(coder: NSCoder)](/documentation/mapkit/mkmapitem/init(coder:))

### Map coordinates

- [MKCoordinateRegion](/documentation/mapkit/mkcoordinateregion)

#### Creating a region

- [init()](/documentation/mapkit/mkcoordinateregion/init())
- [init(center: CLLocationCoordinate2D, latitudinalMeters: CLLocationDistance, longitudinalMeters: CLLocationDistance)](/documentation/mapkit/mkcoordinateregion/init(center:latitudinalmeters:longitudinalmeters:))
- [init(MKMapRect)](/documentation/mapkit/mkcoordinateregion/init(_:))
- [init(center: CLLocationCoordinate2D, span: MKCoordinateSpan)](/documentation/mapkit/mkcoordinateregion/init(center:span:))

#### Getting the region coordinates

- [var center: CLLocationCoordinate2D](/documentation/mapkit/mkcoordinateregion/center)
- [var span: MKCoordinateSpan](/documentation/mapkit/mkcoordinateregion/span)
- [MKCoordinateSpan](/documentation/mapkit/mkcoordinatespan)

#### Creating a coordinate span

- [init()](/documentation/mapkit/mkcoordinatespan/init())
- [init(latitudeDelta: CLLocationDegrees, longitudeDelta: CLLocationDegrees)](/documentation/mapkit/mkcoordinatespan/init(latitudedelta:longitudedelta:))

#### Getting the span coordinates

- [var latitudeDelta: CLLocationDegrees](/documentation/mapkit/mkcoordinatespan/latitudedelta)
- [var longitudeDelta: CLLocationDegrees](/documentation/mapkit/mkcoordinatespan/longitudedelta)
- [MKMapRect](/documentation/mapkit/mkmaprect)

#### Creating a map rectangle

- [init()](/documentation/mapkit/mkmaprect/init())
- [init(origin: MKMapPoint, size: MKMapSize)](/documentation/mapkit/mkmaprect/init(origin:size:))
- [init(x: Double, y: Double, width: Double, height: Double)](/documentation/mapkit/mkmaprect/init(x:y:width:height:))
- [init(MKMapRect)](/documentation/mapkit/mkcoordinateregion/init(_:))

#### Getting standard map rectangles

- [static let null: MKMapRect](/documentation/mapkit/mkmaprect/null)
- [static let world: MKMapRect](/documentation/mapkit/mkmaprect/world)

#### Getting the rectangle coordinates

- [var origin: MKMapPoint](/documentation/mapkit/mkmaprect/origin)
- [var size: MKMapSize](/documentation/mapkit/mkmaprect/size)

#### Getting the boundaries

- [var minX: Double](/documentation/mapkit/mkmaprect/minx)
- [var minY: Double](/documentation/mapkit/mkmaprect/miny)
- [var midX: Double](/documentation/mapkit/mkmaprect/midx)
- [var midY: Double](/documentation/mapkit/mkmaprect/midy)
- [var maxX: Double](/documentation/mapkit/mkmaprect/maxx)
- [var maxY: Double](/documentation/mapkit/mkmaprect/maxy)
- [var width: Double](/documentation/mapkit/mkmaprect/width)
- [var height: Double](/documentation/mapkit/mkmaprect/height)

#### Comparing rectangles

- [var isNull: Bool](/documentation/mapkit/mkmaprect/isnull)
- [func MKMapRectEqualToRect(MKMapRect, MKMapRect) -> Bool](/documentation/mapkit/mkmaprectequaltorect(_:_:))
- [var isEmpty: Bool](/documentation/mapkit/mkmaprect/isempty)
- [var spans180thMeridian: Bool](/documentation/mapkit/mkmaprect/spans180thmeridian)
- [var remainder: MKMapRect](/documentation/mapkit/mkmaprect/remainder)

#### Intersecting the rectangle

- [func contains(MKMapPoint) -> Bool](/documentation/mapkit/mkmaprect/contains(_:)-79tjt)
- [func contains(MKMapRect) -> Bool](/documentation/mapkit/mkmaprect/contains(_:)-1z5oa)
- [func intersects(MKMapRect) -> Bool](/documentation/mapkit/mkmaprect/intersects(_:))

#### Modifying the rectangle

- [func union(MKMapRect) -> MKMapRect](/documentation/mapkit/mkmaprect/union(_:))
- [func intersection(MKMapRect) -> MKMapRect](/documentation/mapkit/mkmaprect/intersection(_:))
- [func insetBy(dx: Double, dy: Double) -> MKMapRect](/documentation/mapkit/mkmaprect/insetby(dx:dy:))
- [func offsetBy(dx: Double, dy: Double) -> MKMapRect](/documentation/mapkit/mkmaprect/offsetby(dx:dy:))
- [func MKMapRectDivide(MKMapRect, UnsafeMutablePointer<MKMapRect>, UnsafeMutablePointer<MKMapRect>, Double, CGRectEdge)](/documentation/mapkit/mkmaprectdivide(_:_:_:_:_:))

#### Getting a description of the rectangle

- [func MKStringFromMapRect(MKMapRect) -> String](/documentation/mapkit/mkstringfrommaprect(_:))
- [MKMapPoint](/documentation/mapkit/mkmappoint)

#### Creating a map point

- [init()](/documentation/mapkit/mkmappoint/init())
- [init(x: Double, y: Double)](/documentation/mapkit/mkmappoint/init(x:y:))
- [init(CLLocationCoordinate2D)](/documentation/mapkit/mkmappoint/init(_:))

#### Getting the point coordinates

- [var x: Double](/documentation/mapkit/mkmappoint/x)
- [var y: Double](/documentation/mapkit/mkmappoint/y)
- [var coordinate: CLLocationCoordinate2D](/documentation/mapkit/mkmappoint/coordinate)

#### Comparing map points

- [func MKMapPointEqualToPoint(MKMapPoint, MKMapPoint) -> Bool](/documentation/mapkit/mkmappointequaltopoint(_:_:))

#### Getting the distance between points

- [func distance(to: MKMapPoint) -> CLLocationDistance](/documentation/mapkit/mkmappoint/distance(to:))
- [func MKMetersPerMapPointAtLatitude(CLLocationDegrees) -> CLLocationDistance](/documentation/mapkit/mkmeterspermappointatlatitude(_:))
- [func MKMapPointsPerMeterAtLatitude(CLLocationDegrees) -> Double](/documentation/mapkit/mkmappointspermeteratlatitude(_:))

#### Getting a description of the point

- [func MKStringFromMapPoint(MKMapPoint) -> String](/documentation/mapkit/mkstringfrommappoint(_:))
- [MKMapSize](/documentation/mapkit/mkmapsize)

#### Creating a map size

- [init()](/documentation/mapkit/mkmapsize/init())
- [init(width: Double, height: Double)](/documentation/mapkit/mkmapsize/init(width:height:))

#### Getting standard map sizes

- [static let world: MKMapSize](/documentation/mapkit/mkmapsize/world)

#### Getting the width and height

- [var height: Double](/documentation/mapkit/mkmapsize/height)
- [var width: Double](/documentation/mapkit/mkmapsize/width)

#### Comparing map sizes

- [func MKMapSizeEqualToSize(MKMapSize, MKMapSize) -> Bool](/documentation/mapkit/mkmapsizeequaltosize(_:_:))

#### Getting a description of the size

- [func MKStringFromMapSize(MKMapSize) -> String](/documentation/mapkit/mkstringfrommapsize(_:))
- [MKDistanceFormatter](/documentation/mapkit/mkdistanceformatter)

#### Converting distances

- [func string(fromDistance: CLLocationDistance) -> String](/documentation/mapkit/mkdistanceformatter/string(fromdistance:))
- [func distance(from: String) -> CLLocationDistance](/documentation/mapkit/mkdistanceformatter/distance(from:))

#### Specifying the format

- [var locale: Locale!](/documentation/mapkit/mkdistanceformatter/locale)
- [var units: MKDistanceFormatter.Units](/documentation/mapkit/mkdistanceformatter/units-swift.property)
- [MKDistanceFormatter.Units](/documentation/mapkit/mkdistanceformatter/units-swift.enum)

##### Constants

- [case `default`](/documentation/mapkit/mkdistanceformatter/units-swift.enum/default)
- [case metric](/documentation/mapkit/mkdistanceformatter/units-swift.enum/metric)
- [case imperial](/documentation/mapkit/mkdistanceformatter/units-swift.enum/imperial)
- [case imperialWithYards](/documentation/mapkit/mkdistanceformatter/units-swift.enum/imperialwithyards)
- [case `default`](/documentation/mapkit/mkdistanceformatter/units-swift.enum/default)
- [case metric](/documentation/mapkit/mkdistanceformatter/units-swift.enum/metric)
- [case imperial](/documentation/mapkit/mkdistanceformatter/units-swift.enum/imperial)
- [case imperialWithYards](/documentation/mapkit/mkdistanceformatter/units-swift.enum/imperialwithyards)

##### Initializers

- [init?(rawValue: UInt)](/documentation/mapkit/mkdistanceformatter/units-swift.enum/init(rawvalue:))
- [var unitStyle: MKDistanceFormatter.DistanceUnitStyle](/documentation/mapkit/mkdistanceformatter/unitstyle)
- [MKDistanceFormatter.DistanceUnitStyle](/documentation/mapkit/mkdistanceformatter/distanceunitstyle)

##### Constants

- [case `default`](/documentation/mapkit/mkdistanceformatter/distanceunitstyle/default)
- [case abbreviated](/documentation/mapkit/mkdistanceformatter/distanceunitstyle/abbreviated)
- [case full](/documentation/mapkit/mkdistanceformatter/distanceunitstyle/full)
- [case `default`](/documentation/mapkit/mkdistanceformatter/distanceunitstyle/default)
- [case abbreviated](/documentation/mapkit/mkdistanceformatter/distanceunitstyle/abbreviated)
- [case full](/documentation/mapkit/mkdistanceformatter/distanceunitstyle/full)

##### Initializers

- [init?(rawValue: UInt)](/documentation/mapkit/mkdistanceformatter/distanceunitstyle/init(rawvalue:))

### Map customization

- [MKMapCamera](/documentation/mapkit/mkmapcamera)

#### Getting a camera object

- [convenience init(lookingAtCenter: CLLocationCoordinate2D, fromEyeCoordinate: CLLocationCoordinate2D, eyeAltitude: CLLocationDistance)](/documentation/mapkit/mkmapcamera/init(lookingatcenter:fromeyecoordinate:eyealtitude:))
- [convenience init(lookingAtCenter: CLLocationCoordinate2D, fromDistance: CLLocationDistance, pitch: CGFloat, heading: CLLocationDirection)](/documentation/mapkit/mkmapcamera/init(lookingatcenter:fromdistance:pitch:heading:))
- [convenience init(lookingAt: MKMapItem, forViewSize: CGSize, allowPitch: Bool)](/documentation/mapkit/mkmapcamera/init(lookingat:forviewsize:allowpitch:))

#### Configuring the viewing angle

- [var centerCoordinate: CLLocationCoordinate2D](/documentation/mapkit/mkmapcamera/centercoordinate)
- [var heading: CLLocationDirection](/documentation/mapkit/mkmapcamera/heading)
- [var centerCoordinateDistance: CLLocationDistance](/documentation/mapkit/mkmapcamera/centercoordinatedistance)
- [var pitch: CGFloat](/documentation/mapkit/mkmapcamera/pitch)
- [var altitude: CLLocationDistance](/documentation/mapkit/mkmapcamera/altitude)
- [MKCompassButton](/documentation/mapkit/mkcompassbutton)

#### Creating a compass button

- [convenience init(mapView: MKMapView?)](/documentation/mapkit/mkcompassbutton/init(mapview:))

#### Getting the compass attributes

- [var mapView: MKMapView?](/documentation/mapkit/mkcompassbutton/mapview)
- [var compassVisibility: MKFeatureVisibility](/documentation/mapkit/mkcompassbutton/compassvisibility)
- [MKFeatureVisibility](/documentation/mapkit/mkfeaturevisibility)

##### Visibility options

- [case adaptive](/documentation/mapkit/mkfeaturevisibility/adaptive)
- [case hidden](/documentation/mapkit/mkfeaturevisibility/hidden)
- [case visible](/documentation/mapkit/mkfeaturevisibility/visible)

##### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkfeaturevisibility/init(rawvalue:))
- [MKScaleView](/documentation/mapkit/mkscaleview)

#### Creating a scale view

- [convenience init(mapView: MKMapView?)](/documentation/mapkit/mkscaleview/init(mapview:))

#### Getting the scale view attributes

- [var mapView: MKMapView?](/documentation/mapkit/mkscaleview/mapview)
- [var scaleVisibility: MKFeatureVisibility](/documentation/mapkit/mkscaleview/scalevisibility)
- [var legendAlignment: MKScaleView.Alignment](/documentation/mapkit/mkscaleview/legendalignment)
- [MKScaleView.Alignment](/documentation/mapkit/mkscaleview/alignment)

##### Alignment options

- [case leading](/documentation/mapkit/mkscaleview/alignment/leading)
- [case trailing](/documentation/mapkit/mkscaleview/alignment/trailing)
- [case center](/documentation/mapkit/mkscaleview/alignment/center)

##### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkscaleview/alignment/init(rawvalue:))
- [MKZoomControl](/documentation/mapkit/mkzoomcontrol)

#### Creating a zoom control

- [convenience init(mapView: MKMapView?)](/documentation/mapkit/mkzoomcontrol/init(mapview:))

#### Accessing the map view

- [var mapView: MKMapView?](/documentation/mapkit/mkzoomcontrol/mapview)
- [MKPitchControl](/documentation/mapkit/mkpitchcontrol)

#### Creating a pitch control

- [convenience init(mapView: MKMapView?)](/documentation/mapkit/mkpitchcontrol/init(mapview:))

#### Accessing the map view

- [var mapView: MKMapView?](/documentation/mapkit/mkpitchcontrol/mapview)
- [MKUserTrackingButton](/documentation/mapkit/mkusertrackingbutton)

#### Creating a user tracking button

- [convenience init(mapView: MKMapView?)](/documentation/mapkit/mkusertrackingbutton/init(mapview:))

#### Getting the parent map

- [var mapView: MKMapView?](/documentation/mapkit/mkusertrackingbutton/mapview)
- [MKUserTrackingBarButtonItem](/documentation/mapkit/mkusertrackingbarbuttonitem)

#### Creating a user tracking bar button item

- [init(mapView: MKMapView?)](/documentation/mapkit/mkusertrackingbarbuttonitem/init(mapview:))

#### Accessing the owning map

- [var mapView: MKMapView?](/documentation/mapkit/mkusertrackingbarbuttonitem/mapview)

### Annotations and overlays

- [MapKit annotations](/documentation/mapkit/mapkit-annotations)

#### Location annotations

- [Annotating a Map with Custom Data](/documentation/mapkit/annotating-a-map-with-custom-data)
- [MKPointAnnotation](/documentation/mapkit/mkpointannotation)

##### Creating a Point Annotation

- [init()](/documentation/mapkit/mkpointannotation/init())
- [convenience init(coordinate: CLLocationCoordinate2D)](/documentation/mapkit/mkpointannotation/init(coordinate:))
- [convenience init(coordinate: CLLocationCoordinate2D, title: String?, subtitle: String?)](/documentation/mapkit/mkpointannotation/init(coordinate:title:subtitle:))

##### Accessing the Annotation’s Location

- [var coordinate: CLLocationCoordinate2D](/documentation/mapkit/mkpointannotation/coordinate)
- [MKMapItemAnnotation](/documentation/mapkit/mkmapitemannotation)

##### Creating a map item annotation

- [init?(mapItem: MKMapItem)](/documentation/mapkit/mkmapitemannotation/init(mapitem:))

##### Accessing the annotation’s map item

- [var mapItem: MKMapItem](/documentation/mapkit/mkmapitemannotation/mapitem)
- [MKMarkerAnnotationView](/documentation/mapkit/mkmarkerannotationview)

##### Setting the Marker Color

- [var markerTintColor: UIColor?](/documentation/mapkit/mkmarkerannotationview/markertintcolor)

##### Setting the Marker Content

- [var glyphText: String?](/documentation/mapkit/mkmarkerannotationview/glyphtext)
- [var glyphImage: UIImage?](/documentation/mapkit/mkmarkerannotationview/glyphimage)
- [var glyphTintColor: UIColor?](/documentation/mapkit/mkmarkerannotationview/glyphtintcolor)
- [var selectedGlyphImage: UIImage?](/documentation/mapkit/mkmarkerannotationview/selectedglyphimage)

##### Setting the Visibility

- [var titleVisibility: MKFeatureVisibility](/documentation/mapkit/mkmarkerannotationview/titlevisibility)
- [var subtitleVisibility: MKFeatureVisibility](/documentation/mapkit/mkmarkerannotationview/subtitlevisibility)
- [MKFeatureVisibility](/documentation/mapkit/mkfeaturevisibility)

###### Visibility options

- [case adaptive](/documentation/mapkit/mkfeaturevisibility/adaptive)
- [case hidden](/documentation/mapkit/mkfeaturevisibility/hidden)
- [case visible](/documentation/mapkit/mkfeaturevisibility/visible)

###### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkfeaturevisibility/init(rawvalue:))

##### Animating the Marker onto the Screen

- [var animatesWhenAdded: Bool](/documentation/mapkit/mkmarkerannotationview/animateswhenadded)
- [MKPinAnnotationView](/documentation/mapkit/mkpinannotationview)

##### Getting Standard Pin Colors

- [class func redPinColor() -> UIColor](/documentation/mapkit/mkpinannotationview/redpincolor())
- [class func greenPinColor() -> UIColor](/documentation/mapkit/mkpinannotationview/greenpincolor())
- [class func purplePinColor() -> UIColor](/documentation/mapkit/mkpinannotationview/purplepincolor())
- [MKPinAnnotationColor](/documentation/mapkit/mkpinannotationcolor)

###### Constants

- [case red](/documentation/mapkit/mkpinannotationcolor/red)
- [case green](/documentation/mapkit/mkpinannotationcolor/green)
- [case purple](/documentation/mapkit/mkpinannotationcolor/purple)

###### Initializers

- [init?(rawValue: UInt)](/documentation/mapkit/mkpinannotationcolor/init(rawvalue:))

##### Getting and Setting Attributes

- [var pinTintColor: UIColor!](/documentation/mapkit/mkpinannotationview/pintintcolor)
- [var animatesDrop: Bool](/documentation/mapkit/mkpinannotationview/animatesdrop)
- [var pinColor: MKPinAnnotationColor](/documentation/mapkit/mkpinannotationview/pincolor)

#### Grouped annotations

- [Decluttering a Map with MapKit Annotation Clustering](/documentation/mapkit/decluttering-a-map-with-mapkit-annotation-clustering)
- [MKClusterAnnotation](/documentation/mapkit/mkclusterannotation)

##### Creating a cluster annotation

- [init(memberAnnotations: [any MKAnnotation])](/documentation/mapkit/mkclusterannotation/init(memberannotations:))

##### Getting the cluster attributes

- [var title: String?](/documentation/mapkit/mkclusterannotation/title)
- [var subtitle: String?](/documentation/mapkit/mkclusterannotation/subtitle)

##### Getting the annotations

- [var memberAnnotations: [any MKAnnotation]](/documentation/mapkit/mkclusterannotation/memberannotations)

#### User location

- [Converting a user’s location to a descriptive placemark](/documentation/mapkit/converting-a-user-s-location-to-a-descriptive-placemark)
- [MKUserLocation](/documentation/mapkit/mkuserlocation)

##### Determining the user’s location

- [var location: CLLocation?](/documentation/mapkit/mkuserlocation/location)
- [var isUpdating: Bool](/documentation/mapkit/mkuserlocation/isupdating)
- [var heading: CLHeading?](/documentation/mapkit/mkuserlocation/heading)

##### Accessing the user’s location annotation

- [var title: String?](/documentation/mapkit/mkuserlocation/title)
- [var subtitle: String?](/documentation/mapkit/mkuserlocation/subtitle)
- [MKUserLocationView](/documentation/mapkit/mkuserlocationview)

#### Annotations in SwiftUI

- [MapMarker](/documentation/mapkit/mapmarker)

##### Creating a map marker

- [init(coordinate: CLLocationCoordinate2D, tint: Color?)](/documentation/mapkit/mapmarker/init(coordinate:tint:))
- [MapPin](/documentation/mapkit/mappin)

##### Creating a map pin

- [init(coordinate: CLLocationCoordinate2D, tint: Color?)](/documentation/mapkit/mappin/init(coordinate:tint:))
- [MapAnnotation](/documentation/mapkit/mapannotation)

##### Creating a map annotation

- [init(coordinate: CLLocationCoordinate2D, anchorPoint: CGPoint, content: () -> Content)](/documentation/mapkit/mapannotation/init(coordinate:anchorpoint:content:))
- [MapAnnotationProtocol](/documentation/mapkit/mapannotationprotocol)

#### Shared behavior

- [MKPlacemark](/documentation/mapkit/mkplacemark)

##### Creating a placemark object

- [init(coordinate: CLLocationCoordinate2D)](/documentation/mapkit/mkplacemark/init(coordinate:))
- [init(coordinate: CLLocationCoordinate2D, postalAddress: CNPostalAddress)](/documentation/mapkit/mkplacemark/init(coordinate:postaladdress:))
- [init(coordinate: CLLocationCoordinate2D, addressDictionary: [String : Any]?)](/documentation/mapkit/mkplacemark/init(coordinate:addressdictionary:))

##### Accessing the placemark attributes

- [var countryCode: String?](/documentation/mapkit/mkplacemark/countrycode)
- [MKAnnotation](/documentation/mapkit/mkannotation)

##### Position attributes

- [var coordinate: CLLocationCoordinate2D](/documentation/mapkit/mkannotation/coordinate)

##### Title attributes

- [var title: String?](/documentation/mapkit/mkannotation/title)
- [var subtitle: String?](/documentation/mapkit/mkannotation/subtitle)
- [MKAnnotationView](/documentation/mapkit/mkannotationview)

##### Creating and preparing an annotation view

- [init(annotation: (any MKAnnotation)?, reuseIdentifier: String?)](/documentation/mapkit/mkannotationview/init(annotation:reuseidentifier:))
- [init?(coder: NSCoder)](/documentation/mapkit/mkannotationview/init(coder:))
- [func prepareForReuse()](/documentation/mapkit/mkannotationview/prepareforreuse())
- [func prepareForDisplay()](/documentation/mapkit/mkannotationview/preparefordisplay())

##### Setting the priority for display

- [var displayPriority: MKFeatureDisplayPriority](/documentation/mapkit/mkannotationview/displaypriority)
- [MKFeatureDisplayPriority](/documentation/mapkit/mkfeaturedisplaypriority)

###### Priorities

- [static var required: MKFeatureDisplayPriority](/documentation/mapkit/mkfeaturedisplaypriority/required)
- [static var defaultHigh: MKFeatureDisplayPriority](/documentation/mapkit/mkfeaturedisplaypriority/defaulthigh)
- [static var defaultLow: MKFeatureDisplayPriority](/documentation/mapkit/mkfeaturedisplaypriority/defaultlow)

###### Creating Feature Display Priorities

- [init(Float)](/documentation/mapkit/mkfeaturedisplaypriority/init(_:))
- [init(rawValue: Float)](/documentation/mapkit/mkfeaturedisplaypriority/init(rawvalue:))
- [var zPriority: MKAnnotationViewZPriority](/documentation/mapkit/mkannotationview/zpriority)
- [var selectedZPriority: MKAnnotationViewZPriority](/documentation/mapkit/mkannotationview/selectedzpriority)
- [MKAnnotationViewZPriority](/documentation/mapkit/mkannotationviewzpriority)

###### Priorities

- [static var defaultSelected: MKAnnotationViewZPriority](/documentation/mapkit/mkannotationviewzpriority/defaultselected)
- [static var defaultUnselected: MKAnnotationViewZPriority](/documentation/mapkit/mkannotationviewzpriority/defaultunselected)
- [static var max: MKAnnotationViewZPriority](/documentation/mapkit/mkannotationviewzpriority/max)
- [static var min: MKAnnotationViewZPriority](/documentation/mapkit/mkannotationviewzpriority/min)

###### Initializers

- [init(Float)](/documentation/mapkit/mkannotationviewzpriority/init(_:))
- [init(rawValue: Float)](/documentation/mapkit/mkannotationviewzpriority/init(rawvalue:))

##### Getting and setting attributes

- [var isEnabled: Bool](/documentation/mapkit/mkannotationview/isenabled)
- [var image: UIImage?](/documentation/mapkit/mkannotationview/image)
- [var isHighlighted: Bool](/documentation/mapkit/mkannotationview/ishighlighted)
- [var annotation: (any MKAnnotation)?](/documentation/mapkit/mkannotationview/annotation)
- [var centerOffset: CGPoint](/documentation/mapkit/mkannotationview/centeroffset)
- [var calloutOffset: CGPoint](/documentation/mapkit/mkannotationview/calloutoffset)
- [var reuseIdentifier: String?](/documentation/mapkit/mkannotationview/reuseidentifier)

##### Managing the selection state

- [func setSelected(Bool, animated: Bool)](/documentation/mapkit/mkannotationview/setselected(_:animated:))
- [var isSelected: Bool](/documentation/mapkit/mkannotationview/isselected)

##### Managing callout views

- [var accessoryOffset: CGPoint](/documentation/mapkit/mkannotationview/accessoryoffset)
- [var canShowCallout: Bool](/documentation/mapkit/mkannotationview/canshowcallout)
- [var leftCalloutAccessoryView: UIView?](/documentation/mapkit/mkannotationview/leftcalloutaccessoryview)
- [var rightCalloutAccessoryView: UIView?](/documentation/mapkit/mkannotationview/rightcalloutaccessoryview)
- [var detailCalloutAccessoryView: UIView?](/documentation/mapkit/mkannotationview/detailcalloutaccessoryview)
- [var leftCalloutOffset: CGPoint](/documentation/mapkit/mkannotationview/leftcalloutoffset)
- [var rightCalloutOffset: CGPoint](/documentation/mapkit/mkannotationview/rightcalloutoffset)

##### Supporting drag operations

- [var isDraggable: Bool](/documentation/mapkit/mkannotationview/isdraggable)
- [func setDragState(MKAnnotationView.DragState, animated: Bool)](/documentation/mapkit/mkannotationview/setdragstate(_:animated:))
- [var dragState: MKAnnotationView.DragState](/documentation/mapkit/mkannotationview/dragstate-swift.property)

##### Managing collisions between annotation views

- [var collisionMode: MKAnnotationView.CollisionMode](/documentation/mapkit/mkannotationview/collisionmode-swift.property)
- [MKAnnotationView.CollisionMode](/documentation/mapkit/mkannotationview/collisionmode-swift.enum)

###### Enumeration Cases

- [case rectangle](/documentation/mapkit/mkannotationview/collisionmode-swift.enum/rectangle)
- [case circle](/documentation/mapkit/mkannotationview/collisionmode-swift.enum/circle)
- [case none](/documentation/mapkit/mkannotationview/collisionmode-swift.enum/none)
- [case rectangle](/documentation/mapkit/mkannotationview/collisionmode-swift.enum/rectangle)
- [case circle](/documentation/mapkit/mkannotationview/collisionmode-swift.enum/circle)
- [case none](/documentation/mapkit/mkannotationview/collisionmode-swift.enum/none)

###### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkannotationview/collisionmode-swift.enum/init(rawvalue:))

##### Clustering annotation views

- [Decluttering a Map with MapKit Annotation Clustering](/documentation/mapkit/decluttering-a-map-with-mapkit-annotation-clustering)
- [var clusteringIdentifier: String?](/documentation/mapkit/mkannotationview/clusteringidentifier)
- [var cluster: MKAnnotationView?](/documentation/mapkit/mkannotationview/cluster)

##### Constants

- [MKAnnotationView.DragState](/documentation/mapkit/mkannotationview/dragstate-swift.enum)

###### Constants

- [case none](/documentation/mapkit/mkannotationview/dragstate-swift.enum/none)
- [case starting](/documentation/mapkit/mkannotationview/dragstate-swift.enum/starting)
- [case dragging](/documentation/mapkit/mkannotationview/dragstate-swift.enum/dragging)
- [case canceling](/documentation/mapkit/mkannotationview/dragstate-swift.enum/canceling)
- [case ending](/documentation/mapkit/mkannotationview/dragstate-swift.enum/ending)

###### Initializers

- [init?(rawValue: UInt)](/documentation/mapkit/mkannotationview/dragstate-swift.enum/init(rawvalue:))
- [MapKit overlays](/documentation/mapkit/mapkit-overlays)

#### Samples

- [Displaying overlays on a map](/documentation/mapkit/displaying-overlays-on-a-map)
- [Displaying an updating path of a user’s location history](/documentation/mapkit/displaying-an-updating-path-of-a-user-s-location-history)

#### Circular overlays

- [MKCircle](/documentation/mapkit/mkcircle)

##### Creating a circle overlay

- [convenience init(center: CLLocationCoordinate2D, radius: CLLocationDistance)](/documentation/mapkit/mkcircle/init(center:radius:))
- [convenience init(mapRect: MKMapRect)](/documentation/mapkit/mkcircle/init(maprect:))

##### Accessing the overlay’s attributes

- [var coordinate: CLLocationCoordinate2D](/documentation/mapkit/mkcircle/coordinate)
- [var radius: CLLocationDistance](/documentation/mapkit/mkcircle/radius)
- [var boundingMapRect: MKMapRect](/documentation/mapkit/mkcircle/boundingmaprect)
- [MKCircleRenderer](/documentation/mapkit/mkcirclerenderer)

##### Creating a circle renderer

- [init(circle: MKCircle)](/documentation/mapkit/mkcirclerenderer/init(circle:))

##### Accessing the overlay object

- [var circle: MKCircle](/documentation/mapkit/mkcirclerenderer/circle)

##### Accessing the stroke

- [var strokeStart: CGFloat](/documentation/mapkit/mkcirclerenderer/strokestart)
- [var strokeEnd: CGFloat](/documentation/mapkit/mkcirclerenderer/strokeend)

#### Custom shape overlays

- [MKPolygon](/documentation/mapkit/mkpolygon)

##### Creating a polygon overlay

- [convenience init(points: UnsafePointer<MKMapPoint>, count: Int)](/documentation/mapkit/mkpolygon/init(points:count:))
- [convenience init(points: UnsafePointer<MKMapPoint>, count: Int, interiorPolygons: [MKPolygon]?)](/documentation/mapkit/mkpolygon/init(points:count:interiorpolygons:))
- [convenience init(coordinates: UnsafePointer<CLLocationCoordinate2D>, count: Int)](/documentation/mapkit/mkpolygon/init(coordinates:count:))
- [convenience init(coordinates: UnsafePointer<CLLocationCoordinate2D>, count: Int, interiorPolygons: [MKPolygon]?)](/documentation/mapkit/mkpolygon/init(coordinates:count:interiorpolygons:))

##### Accessing the interior polygons

- [var interiorPolygons: [MKPolygon]?](/documentation/mapkit/mkpolygon/interiorpolygons)
- [MKPolygonRenderer](/documentation/mapkit/mkpolygonrenderer)

##### Creating a polygon renderer

- [init(polygon: MKPolygon)](/documentation/mapkit/mkpolygonrenderer/init(polygon:))

##### Accessing the polygon overlay object

- [var polygon: MKPolygon](/documentation/mapkit/mkpolygonrenderer/polygon)

##### Accessing the stroke

- [var strokeStart: CGFloat](/documentation/mapkit/mkpolygonrenderer/strokestart)
- [var strokeEnd: CGFloat](/documentation/mapkit/mkpolygonrenderer/strokeend)
- [MKMultiPolygon](/documentation/mapkit/mkmultipolygon)

##### Creating a multipolygon

- [init([MKPolygon])](/documentation/mapkit/mkmultipolygon/init(_:))

##### Accessing polygons

- [var polygons: [MKPolygon]](/documentation/mapkit/mkmultipolygon/polygons)
- [MKMultiPolygonRenderer](/documentation/mapkit/mkmultipolygonrenderer)

##### Creating a multipolygon renderer

- [init(multiPolygon: MKMultiPolygon)](/documentation/mapkit/mkmultipolygonrenderer/init(multipolygon:))

##### Accessing the multipolygon object

- [var multiPolygon: MKMultiPolygon](/documentation/mapkit/mkmultipolygonrenderer/multipolygon)
- [MKOverlayPathRenderer](/documentation/mapkit/mkoverlaypathrenderer)

##### Creating and managing the path

- [var path: CGPath!](/documentation/mapkit/mkoverlaypathrenderer/path)
- [func createPath()](/documentation/mapkit/mkoverlaypathrenderer/createpath())
- [func invalidatePath()](/documentation/mapkit/mkoverlaypathrenderer/invalidatepath())

##### Accessing the drawing attributes

- [var fillColor: UIColor?](/documentation/mapkit/mkoverlaypathrenderer/fillcolor)
- [var strokeColor: UIColor?](/documentation/mapkit/mkoverlaypathrenderer/strokecolor)
- [var lineWidth: CGFloat](/documentation/mapkit/mkoverlaypathrenderer/linewidth)
- [var lineJoin: CGLineJoin](/documentation/mapkit/mkoverlaypathrenderer/linejoin)
- [var lineCap: CGLineCap](/documentation/mapkit/mkoverlaypathrenderer/linecap)
- [var miterLimit: CGFloat](/documentation/mapkit/mkoverlaypathrenderer/miterlimit)
- [var lineDashPhase: CGFloat](/documentation/mapkit/mkoverlaypathrenderer/linedashphase)
- [var lineDashPattern: [NSNumber]?](/documentation/mapkit/mkoverlaypathrenderer/linedashpattern)

##### Drawing the path

- [func applyStrokeProperties(to: CGContext, atZoomScale: MKZoomScale)](/documentation/mapkit/mkoverlaypathrenderer/applystrokeproperties(to:atzoomscale:))
- [func applyFillProperties(to: CGContext, atZoomScale: MKZoomScale)](/documentation/mapkit/mkoverlaypathrenderer/applyfillproperties(to:atzoomscale:))
- [func strokePath(CGPath, in: CGContext)](/documentation/mapkit/mkoverlaypathrenderer/strokepath(_:in:))
- [func fillPath(CGPath, in: CGContext)](/documentation/mapkit/mkoverlaypathrenderer/fillpath(_:in:))
- [var shouldRasterize: Bool](/documentation/mapkit/mkoverlaypathrenderer/shouldrasterize)

#### Multiple segment lines

- [MKPolyline](/documentation/mapkit/mkpolyline)

##### Creating a polyline overlay

- [convenience init(points: UnsafePointer<MKMapPoint>, count: Int)](/documentation/mapkit/mkpolyline/init(points:count:))
- [convenience init(coordinates: UnsafePointer<CLLocationCoordinate2D>, count: Int)](/documentation/mapkit/mkpolyline/init(coordinates:count:))
- [MKGeodesicPolyline](/documentation/mapkit/mkgeodesicpolyline)

##### Creating a geodesic polyline overlay

- [convenience init(points: UnsafePointer<MKMapPoint>, count: Int)](/documentation/mapkit/mkgeodesicpolyline/init(points:count:))
- [convenience init(coordinates: UnsafePointer<CLLocationCoordinate2D>, count: Int)](/documentation/mapkit/mkgeodesicpolyline/init(coordinates:count:))
- [MKMultiPolyline](/documentation/mapkit/mkmultipolyline)

##### Creating a multipolyline object

- [init([MKPolyline])](/documentation/mapkit/mkmultipolyline/init(_:))

##### Accessing polyline objects

- [var polylines: [MKPolyline]](/documentation/mapkit/mkmultipolyline/polylines)
- [MKPolylineRenderer](/documentation/mapkit/mkpolylinerenderer)

##### Creating a polyline renderer

- [init(polyline: MKPolyline)](/documentation/mapkit/mkpolylinerenderer/init(polyline:))

##### Accessing the polyline overlay

- [var polyline: MKPolyline](/documentation/mapkit/mkpolylinerenderer/polyline)

##### Accessing the stroke

- [var strokeStart: CGFloat](/documentation/mapkit/mkpolylinerenderer/strokestart)
- [var strokeEnd: CGFloat](/documentation/mapkit/mkpolylinerenderer/strokeend)
- [MKMultiPolylineRenderer](/documentation/mapkit/mkmultipolylinerenderer)

##### Creating a multipolyline renderer

- [init(multiPolyline: MKMultiPolyline)](/documentation/mapkit/mkmultipolylinerenderer/init(multipolyline:))

##### Accessing the multipolyline object

- [var multiPolyline: MKMultiPolyline](/documentation/mapkit/mkmultipolylinerenderer/multipolyline)
- [MKGradientPolylineRenderer](/documentation/mapkit/mkgradientpolylinerenderer)

##### Accessing the gradient colors

- [func setColors([UIColor], locations: [CGFloat])](/documentation/mapkit/mkgradientpolylinerenderer/setcolors(_:locations:)-3xrou)
- [func setColors([NSColor], locations: [CGFloat])](/documentation/mapkit/mkgradientpolylinerenderer/setcolors(_:locations:)-1tuft)
- [var colors: [UIColor]](/documentation/mapkit/mkgradientpolylinerenderer/colors)
- [var locations: [CGFloat]](/documentation/mapkit/mkgradientpolylinerenderer/locations-7k6qz)

#### Tiled image overlays

- [MKTileOverlay](/documentation/mapkit/mktileoverlay)

##### Creating a tile overlay

- [init(urlTemplate: String?)](/documentation/mapkit/mktileoverlay/init(urltemplate:))

##### Accessing the tile attributes

- [var tileSize: CGSize](/documentation/mapkit/mktileoverlay/tilesize)
- [var isGeometryFlipped: Bool](/documentation/mapkit/mktileoverlay/isgeometryflipped)
- [var minimumZ: Int](/documentation/mapkit/mktileoverlay/minimumz)
- [var maximumZ: Int](/documentation/mapkit/mktileoverlay/maximumz)
- [var canReplaceMapContent: Bool](/documentation/mapkit/mktileoverlay/canreplacemapcontent)

##### Customizing the loading of tiles

- [var urlTemplate: String?](/documentation/mapkit/mktileoverlay/urltemplate)
- [func url(forTilePath: MKTileOverlayPath) -> URL](/documentation/mapkit/mktileoverlay/url(fortilepath:))
- [func loadTile(at: MKTileOverlayPath, result: (Data?, (any Error)?) -> Void)](/documentation/mapkit/mktileoverlay/loadtile(at:result:))
- [MKTileOverlayPath](/documentation/mapkit/mktileoverlaypath)

###### Creating a tile overlay path

- [init()](/documentation/mapkit/mktileoverlaypath/init())
- [init(x: Int, y: Int, z: Int, contentScaleFactor: CGFloat)](/documentation/mapkit/mktileoverlaypath/init(x:y:z:contentscalefactor:))

###### Instance properties

- [var x: Int](/documentation/mapkit/mktileoverlaypath/x)
- [var y: Int](/documentation/mapkit/mktileoverlaypath/y)
- [var z: Int](/documentation/mapkit/mktileoverlaypath/z)
- [var contentScaleFactor: CGFloat](/documentation/mapkit/mktileoverlaypath/contentscalefactor)
- [MKTileOverlayRenderer](/documentation/mapkit/mktileoverlayrenderer)

##### Creating a tile renderer

- [init(tileOverlay: MKTileOverlay)](/documentation/mapkit/mktileoverlayrenderer/init(tileoverlay:))

##### Reloading the tile data

- [func reloadData()](/documentation/mapkit/mktileoverlayrenderer/reloaddata())

#### Shared behavior

- [MKOverlay](/documentation/mapkit/mkoverlay)

##### Describing the overlay geometry

- [var coordinate: CLLocationCoordinate2D](/documentation/mapkit/mkoverlay/coordinate)
- [var boundingMapRect: MKMapRect](/documentation/mapkit/mkoverlay/boundingmaprect)

##### Determining map intersections

- [func intersects(MKMapRect) -> Bool](/documentation/mapkit/mkoverlay/intersects(_:))

##### Optimizing map rendering

- [func canReplaceMapContent() -> Bool](/documentation/mapkit/mkoverlay/canreplacemapcontent())
- [MKOverlayRenderer](/documentation/mapkit/mkoverlayrenderer)

##### Creating an overlay view

- [init(overlay: any MKOverlay)](/documentation/mapkit/mkoverlayrenderer/init(overlay:))

##### Attributes of the overlay

- [var overlay: any MKOverlay](/documentation/mapkit/mkoverlayrenderer/overlay)
- [var alpha: CGFloat](/documentation/mapkit/mkoverlayrenderer/alpha)
- [var contentScaleFactor: CGFloat](/documentation/mapkit/mkoverlayrenderer/contentscalefactor)
- [var blendMode: CGBlendMode](/documentation/mapkit/mkoverlayrenderer/blendmode)

##### Converting points on the map

- [func point(for: MKMapPoint) -> CGPoint](/documentation/mapkit/mkoverlayrenderer/point(for:))
- [func mapPoint(for: CGPoint) -> MKMapPoint](/documentation/mapkit/mkoverlayrenderer/mappoint(for:))
- [func rect(for: MKMapRect) -> CGRect](/documentation/mapkit/mkoverlayrenderer/rect(for:))
- [func mapRect(for: CGRect) -> MKMapRect](/documentation/mapkit/mkoverlayrenderer/maprect(for:))

##### Drawing the overlay

- [func canDraw(MKMapRect, zoomScale: MKZoomScale) -> Bool](/documentation/mapkit/mkoverlayrenderer/candraw(_:zoomscale:))
- [func draw(MKMapRect, zoomScale: MKZoomScale, in: CGContext)](/documentation/mapkit/mkoverlayrenderer/draw(_:zoomscale:in:))
- [func setNeedsDisplay()](/documentation/mapkit/mkoverlayrenderer/setneedsdisplay())
- [func setNeedsDisplay(MKMapRect)](/documentation/mapkit/mkoverlayrenderer/setneedsdisplay(_:))
- [func setNeedsDisplay(MKMapRect, zoomScale: MKZoomScale)](/documentation/mapkit/mkoverlayrenderer/setneedsdisplay(_:zoomscale:))

##### Types

- [MKZoomScale](/documentation/mapkit/mkzoomscale)
- [func MKRoadWidthAtZoomScale(MKZoomScale) -> CGFloat](/documentation/mapkit/mkroadwidthatzoomscale(_:))
- [MKShape](/documentation/mapkit/mkshape)

##### Accessing the shape attributes

- [var title: String?](/documentation/mapkit/mkshape/title)
- [var subtitle: String?](/documentation/mapkit/mkshape/subtitle)
- [MKMultiPoint](/documentation/mapkit/mkmultipoint)

##### Accessing the points in the shape

- [func points() -> UnsafeMutablePointer<MKMapPoint>](/documentation/mapkit/mkmultipoint/points())
- [var pointCount: Int](/documentation/mapkit/mkmultipoint/pointcount)
- [func location(atPointIndex: Int) -> CGFloat](/documentation/mapkit/mkmultipoint/location(atpointindex:))
- [func locations(at: IndexSet) -> [CGFloat]](/documentation/mapkit/mkmultipoint/locations(at:))

##### Getting coordinate values

- [func getCoordinates(UnsafeMutablePointer<CLLocationCoordinate2D>, range: NSRange)](/documentation/mapkit/mkmultipoint/getcoordinates(_:range:))
- [MKPlacemark](/documentation/mapkit/mkplacemark)

##### Creating a placemark object

- [init(coordinate: CLLocationCoordinate2D)](/documentation/mapkit/mkplacemark/init(coordinate:))
- [init(coordinate: CLLocationCoordinate2D, postalAddress: CNPostalAddress)](/documentation/mapkit/mkplacemark/init(coordinate:postaladdress:))
- [init(coordinate: CLLocationCoordinate2D, addressDictionary: [String : Any]?)](/documentation/mapkit/mkplacemark/init(coordinate:addressdictionary:))

##### Accessing the placemark attributes

- [var countryCode: String?](/documentation/mapkit/mkplacemark/countrycode)

### Directions

- [MKDirections](/documentation/mapkit/mkdirections)

#### Creating a directions object

- [init(request: MKDirections.Request)](/documentation/mapkit/mkdirections/init(request:))
- [MKDirections.Request](/documentation/mapkit/mkdirections/request)

##### Creating a directions request object

- [class func isDirectionsRequest(URL) -> Bool](/documentation/mapkit/mkdirections/request/isdirectionsrequest(_:))
- [init(contentsOfURL: URL)](/documentation/mapkit/mkdirections/request/init(contentsofurl:))

##### Accessing the start and end points

- [var source: MKMapItem?](/documentation/mapkit/mkdirections/request/source)
- [var destination: MKMapItem?](/documentation/mapkit/mkdirections/request/destination)

##### Specifying transportation options

- [var transportType: MKDirectionsTransportType](/documentation/mapkit/mkdirections/request/transporttype)
- [var highwayPreference: MKDirections.RoutePreference](/documentation/mapkit/mkdirections/request/highwaypreference)
- [var tollPreference: MKDirections.RoutePreference](/documentation/mapkit/mkdirections/request/tollpreference)
- [MKDirections.RoutePreference](/documentation/mapkit/mkdirections/routepreference)

###### Route selection options

- [case any](/documentation/mapkit/mkdirections/routepreference/any)
- [case avoid](/documentation/mapkit/mkdirections/routepreference/avoid)

###### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkdirections/routepreference/init(rawvalue:))
- [var requestsAlternateRoutes: Bool](/documentation/mapkit/mkdirections/request/requestsalternateroutes)
- [var departureDate: Date?](/documentation/mapkit/mkdirections/request/departuredate)
- [var arrivalDate: Date?](/documentation/mapkit/mkdirections/request/arrivaldate)

##### Constants

- [MKDirectionsTransportType](/documentation/mapkit/mkdirectionstransporttype)

###### Transport types

- [static var any: MKDirectionsTransportType](/documentation/mapkit/mkdirectionstransporttype/any)
- [static var automobile: MKDirectionsTransportType](/documentation/mapkit/mkdirectionstransporttype/automobile)
- [static var cycling: MKDirectionsTransportType](/documentation/mapkit/mkdirectionstransporttype/cycling)
- [static var transit: MKDirectionsTransportType](/documentation/mapkit/mkdirectionstransporttype/transit)
- [static var walking: MKDirectionsTransportType](/documentation/mapkit/mkdirectionstransporttype/walking)

###### Creating direction transport types

- [init(rawValue: UInt)](/documentation/mapkit/mkdirectionstransporttype/init(rawvalue:))

##### Launch options

- [let MKLaunchOptionsCameraKey: String](/documentation/mapkit/mklaunchoptionscamerakey)
- [let MKLaunchOptionsDirectionsModeCycling: String](/documentation/mapkit/mklaunchoptionsdirectionsmodecycling)
- [let MKLaunchOptionsDirectionsModeDefault: String](/documentation/mapkit/mklaunchoptionsdirectionsmodedefault)
- [let MKLaunchOptionsDirectionsModeDriving: String](/documentation/mapkit/mklaunchoptionsdirectionsmodedriving)
- [let MKLaunchOptionsDirectionsModeKey: String](/documentation/mapkit/mklaunchoptionsdirectionsmodekey)
- [let MKLaunchOptionsDirectionsModeTransit: String](/documentation/mapkit/mklaunchoptionsdirectionsmodetransit)
- [let MKLaunchOptionsDirectionsModeWalking: String](/documentation/mapkit/mklaunchoptionsdirectionsmodewalking)
- [let MKLaunchOptionsMapCenterKey: String](/documentation/mapkit/mklaunchoptionsmapcenterkey)
- [let MKLaunchOptionsMapSpanKey: String](/documentation/mapkit/mklaunchoptionsmapspankey)
- [let MKLaunchOptionsMapTypeKey: String](/documentation/mapkit/mklaunchoptionsmaptypekey)
- [let MKLaunchOptionsShowsTrafficKey: String](/documentation/mapkit/mklaunchoptionsshowstraffickey)

##### Initializers

- [init(contentsOf: URL)](/documentation/mapkit/mkdirections/request/init(contentsof:))

##### Default Implementations

- [Request Implementations](/documentation/mapkit/mkdirections/request/request-implementations)

###### Initializers

- [init(contentsOfURL: URL)](/documentation/mapkit/mkdirections/request/init(contentsofurl:))
- [MKDirections.RoutePreference](/documentation/mapkit/mkdirections/routepreference)

##### Route selection options

- [case any](/documentation/mapkit/mkdirections/routepreference/any)
- [case avoid](/documentation/mapkit/mkdirections/routepreference/avoid)

##### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkdirections/routepreference/init(rawvalue:))

#### Getting the directions

- [func calculate(completionHandler: (MKDirections.Response?, (any Error)?) -> Void)](/documentation/mapkit/mkdirections/calculate(completionhandler:))
- [MKDirections.DirectionsHandler](/documentation/mapkit/mkdirections/directionshandler)
- [MKDirections.Response](/documentation/mapkit/mkdirections/response)

##### Getting the end points

- [var source: MKMapItem](/documentation/mapkit/mkdirections/response/source)
- [var destination: MKMapItem](/documentation/mapkit/mkdirections/response/destination)

##### Getting the route information

- [var routes: [MKRoute]](/documentation/mapkit/mkdirections/response/routes)

#### Getting the ETA

- [func calculateETA(completionHandler: (MKDirections.ETAResponse?, (any Error)?) -> Void)](/documentation/mapkit/mkdirections/calculateeta(completionhandler:))
- [MKDirections.ETAHandler](/documentation/mapkit/mkdirections/etahandler)
- [MKDirections.ETAResponse](/documentation/mapkit/mkdirections/etaresponse)

##### Getting the end points

- [var source: MKMapItem](/documentation/mapkit/mkdirections/etaresponse/source)
- [var destination: MKMapItem](/documentation/mapkit/mkdirections/etaresponse/destination)

##### Getting the travel information

- [var expectedTravelTime: TimeInterval](/documentation/mapkit/mkdirections/etaresponse/expectedtraveltime)
- [var expectedDepartureDate: Date](/documentation/mapkit/mkdirections/etaresponse/expecteddeparturedate)
- [var expectedArrivalDate: Date](/documentation/mapkit/mkdirections/etaresponse/expectedarrivaldate)
- [var distance: CLLocationDistance](/documentation/mapkit/mkdirections/etaresponse/distance)
- [var transportType: MKDirectionsTransportType](/documentation/mapkit/mkdirections/etaresponse/transporttype)

#### Managing the request

- [func cancel()](/documentation/mapkit/mkdirections/cancel())
- [var isCalculating: Bool](/documentation/mapkit/mkdirections/iscalculating)
- [MKDirections.Request](/documentation/mapkit/mkdirections/request)

#### Creating a directions request object

- [class func isDirectionsRequest(URL) -> Bool](/documentation/mapkit/mkdirections/request/isdirectionsrequest(_:))
- [init(contentsOfURL: URL)](/documentation/mapkit/mkdirections/request/init(contentsofurl:))

#### Accessing the start and end points

- [var source: MKMapItem?](/documentation/mapkit/mkdirections/request/source)
- [var destination: MKMapItem?](/documentation/mapkit/mkdirections/request/destination)

#### Specifying transportation options

- [var transportType: MKDirectionsTransportType](/documentation/mapkit/mkdirections/request/transporttype)
- [var highwayPreference: MKDirections.RoutePreference](/documentation/mapkit/mkdirections/request/highwaypreference)
- [var tollPreference: MKDirections.RoutePreference](/documentation/mapkit/mkdirections/request/tollpreference)
- [MKDirections.RoutePreference](/documentation/mapkit/mkdirections/routepreference)

##### Route selection options

- [case any](/documentation/mapkit/mkdirections/routepreference/any)
- [case avoid](/documentation/mapkit/mkdirections/routepreference/avoid)

##### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkdirections/routepreference/init(rawvalue:))
- [var requestsAlternateRoutes: Bool](/documentation/mapkit/mkdirections/request/requestsalternateroutes)
- [var departureDate: Date?](/documentation/mapkit/mkdirections/request/departuredate)
- [var arrivalDate: Date?](/documentation/mapkit/mkdirections/request/arrivaldate)

#### Constants

- [MKDirectionsTransportType](/documentation/mapkit/mkdirectionstransporttype)

##### Transport types

- [static var any: MKDirectionsTransportType](/documentation/mapkit/mkdirectionstransporttype/any)
- [static var automobile: MKDirectionsTransportType](/documentation/mapkit/mkdirectionstransporttype/automobile)
- [static var cycling: MKDirectionsTransportType](/documentation/mapkit/mkdirectionstransporttype/cycling)
- [static var transit: MKDirectionsTransportType](/documentation/mapkit/mkdirectionstransporttype/transit)
- [static var walking: MKDirectionsTransportType](/documentation/mapkit/mkdirectionstransporttype/walking)

##### Creating direction transport types

- [init(rawValue: UInt)](/documentation/mapkit/mkdirectionstransporttype/init(rawvalue:))

#### Launch options

- [let MKLaunchOptionsCameraKey: String](/documentation/mapkit/mklaunchoptionscamerakey)
- [let MKLaunchOptionsDirectionsModeCycling: String](/documentation/mapkit/mklaunchoptionsdirectionsmodecycling)
- [let MKLaunchOptionsDirectionsModeDefault: String](/documentation/mapkit/mklaunchoptionsdirectionsmodedefault)
- [let MKLaunchOptionsDirectionsModeDriving: String](/documentation/mapkit/mklaunchoptionsdirectionsmodedriving)
- [let MKLaunchOptionsDirectionsModeKey: String](/documentation/mapkit/mklaunchoptionsdirectionsmodekey)
- [let MKLaunchOptionsDirectionsModeTransit: String](/documentation/mapkit/mklaunchoptionsdirectionsmodetransit)
- [let MKLaunchOptionsDirectionsModeWalking: String](/documentation/mapkit/mklaunchoptionsdirectionsmodewalking)
- [let MKLaunchOptionsMapCenterKey: String](/documentation/mapkit/mklaunchoptionsmapcenterkey)
- [let MKLaunchOptionsMapSpanKey: String](/documentation/mapkit/mklaunchoptionsmapspankey)
- [let MKLaunchOptionsMapTypeKey: String](/documentation/mapkit/mklaunchoptionsmaptypekey)
- [let MKLaunchOptionsShowsTrafficKey: String](/documentation/mapkit/mklaunchoptionsshowstraffickey)

#### Initializers

- [init(contentsOf: URL)](/documentation/mapkit/mkdirections/request/init(contentsof:))

#### Default Implementations

- [Request Implementations](/documentation/mapkit/mkdirections/request/request-implementations)

##### Initializers

- [init(contentsOfURL: URL)](/documentation/mapkit/mkdirections/request/init(contentsofurl:))
- [MKDirections.Response](/documentation/mapkit/mkdirections/response)

#### Getting the end points

- [var source: MKMapItem](/documentation/mapkit/mkdirections/response/source)
- [var destination: MKMapItem](/documentation/mapkit/mkdirections/response/destination)

#### Getting the route information

- [var routes: [MKRoute]](/documentation/mapkit/mkdirections/response/routes)
- [MKDirections.ETAResponse](/documentation/mapkit/mkdirections/etaresponse)

#### Getting the end points

- [var source: MKMapItem](/documentation/mapkit/mkdirections/etaresponse/source)
- [var destination: MKMapItem](/documentation/mapkit/mkdirections/etaresponse/destination)

#### Getting the travel information

- [var expectedTravelTime: TimeInterval](/documentation/mapkit/mkdirections/etaresponse/expectedtraveltime)
- [var expectedDepartureDate: Date](/documentation/mapkit/mkdirections/etaresponse/expecteddeparturedate)
- [var expectedArrivalDate: Date](/documentation/mapkit/mkdirections/etaresponse/expectedarrivaldate)
- [var distance: CLLocationDistance](/documentation/mapkit/mkdirections/etaresponse/distance)
- [var transportType: MKDirectionsTransportType](/documentation/mapkit/mkdirections/etaresponse/transporttype)
- [MKRoute](/documentation/mapkit/mkroute)

#### Getting the route geometry

- [var polyline: MKPolyline](/documentation/mapkit/mkroute/polyline)
- [var steps: [MKRoute.Step]](/documentation/mapkit/mkroute/steps)
- [MKRoute.Step](/documentation/mapkit/mkroute/step)

##### Getting the step geometry

- [var polyline: MKPolyline](/documentation/mapkit/mkroute/step/polyline)

##### Getting additional step details

- [var instructions: String](/documentation/mapkit/mkroute/step/instructions)
- [var notice: String?](/documentation/mapkit/mkroute/step/notice)
- [var distance: CLLocationDistance](/documentation/mapkit/mkroute/step/distance)
- [var transportType: MKDirectionsTransportType](/documentation/mapkit/mkroute/step/transporttype)

#### Getting additional route details

- [var name: String](/documentation/mapkit/mkroute/name)
- [var hasHighways: Bool](/documentation/mapkit/mkroute/hashighways)
- [var hasTolls: Bool](/documentation/mapkit/mkroute/hastolls)
- [var advisoryNotices: [String]](/documentation/mapkit/mkroute/advisorynotices)
- [var distance: CLLocationDistance](/documentation/mapkit/mkroute/distance)
- [var expectedTravelTime: TimeInterval](/documentation/mapkit/mkroute/expectedtraveltime)
- [var transportType: MKDirectionsTransportType](/documentation/mapkit/mkroute/transporttype)
- [MKRoute.Step](/documentation/mapkit/mkroute/step)

#### Getting the step geometry

- [var polyline: MKPolyline](/documentation/mapkit/mkroute/step/polyline)

#### Getting additional step details

- [var instructions: String](/documentation/mapkit/mkroute/step/instructions)
- [var notice: String?](/documentation/mapkit/mkroute/step/notice)
- [var distance: CLLocationDistance](/documentation/mapkit/mkroute/step/distance)
- [var transportType: MKDirectionsTransportType](/documentation/mapkit/mkroute/step/transporttype)

### Geographical features

- [Displaying an Indoor Map](/documentation/mapkit/displaying-an-indoor-map)
- [MKGeoJSONDecoder](/documentation/mapkit/mkgeojsondecoder)

#### Decoding GeoJSON objects

- [func decode(Data) throws -> [any MKGeoJSONObject]](/documentation/mapkit/mkgeojsondecoder/decode(_:))
- [MKGeoJSONFeature](/documentation/mapkit/mkgeojsonfeature)

#### Feature properties

- [var geometry: [any MKShape & MKGeoJSONObject]](/documentation/mapkit/mkgeojsonfeature/geometry)
- [var identifier: String?](/documentation/mapkit/mkgeojsonfeature/identifier)
- [var properties: Data?](/documentation/mapkit/mkgeojsonfeature/properties)
- [MKGeoJSONObject](/documentation/mapkit/mkgeojsonobject)

### Local search

- [Interacting with nearby points of interest](/documentation/mapkit/interacting-with-nearby-points-of-interest)
- [MKLocalSearchRegionPriority](/documentation/mapkit/mklocalsearchregionpriority)

#### Setting region priority

- [case `default`](/documentation/mapkit/mklocalsearchregionpriority/default)
- [case required](/documentation/mapkit/mklocalsearchregionpriority/required)

#### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mklocalsearchregionpriority/init(rawvalue:))
- [MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/resulttype)

#### Creating the result type

- [init(rawValue: UInt)](/documentation/mapkit/mklocalsearch/resulttype/init(rawvalue:))

#### Specifying types of search results

- [static var address: MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/resulttype/address)
- [static var pointOfInterest: MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/resulttype/pointofinterest)
- [static var physicalFeature: MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/resulttype/physicalfeature)
- [static var address: MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/resulttype/address)
- [static var pointOfInterest: MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/resulttype/pointofinterest)
- [static var physicalFeature: MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/resulttype/physicalfeature)
- [MKLocalSearch](/documentation/mapkit/mklocalsearch)

#### Creating a search request

- [init(request: MKLocalSearch.Request)](/documentation/mapkit/mklocalsearch/init(request:)-12tf0)
- [init(request: MKLocalPointsOfInterestRequest)](/documentation/mapkit/mklocalsearch/init(request:)-9x8kn)
- [MKLocalSearch.Request](/documentation/mapkit/mklocalsearch/request)

##### Creating a local search request

- [init()](/documentation/mapkit/mklocalsearch/request/init())
- [init(completion: MKLocalSearchCompletion)](/documentation/mapkit/mklocalsearch/request/init(completion:))

##### Initializing a natural language search request

- [convenience init(naturalLanguageQuery: String)](/documentation/mapkit/mklocalsearch/request/init(naturallanguagequery:))
- [convenience init(naturalLanguageQuery: String, region: MKCoordinateRegion)](/documentation/mapkit/mklocalsearch/request/init(naturallanguagequery:region:))

##### Configuring the search parameters

- [var addressFilter: MKAddressFilter?](/documentation/mapkit/mklocalsearch/request/addressfilter)
- [var naturalLanguageQuery: String?](/documentation/mapkit/mklocalsearch/request/naturallanguagequery)
- [var region: MKCoordinateRegion](/documentation/mapkit/mklocalsearch/request/region)
- [static var physicalFeature: MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/resulttype/physicalfeature)
- [var pointOfInterestFilter: MKPointOfInterestFilter?](/documentation/mapkit/mklocalsearch/request/pointofinterestfilter)
- [var regionPriority: MKLocalSearchRegionPriority](/documentation/mapkit/mklocalsearch/request/regionpriority)
- [var resultTypes: MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/request/resulttypes)
- [MKLocalSearch.Request.ResultType](/documentation/mapkit/mklocalsearch/request/resulttype)
- [MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/resulttype)

##### Creating the result type

- [init(rawValue: UInt)](/documentation/mapkit/mklocalsearch/resulttype/init(rawvalue:))

##### Specifying types of search results

- [static var address: MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/resulttype/address)
- [static var pointOfInterest: MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/resulttype/pointofinterest)
- [static var physicalFeature: MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/resulttype/physicalfeature)
- [static var address: MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/resulttype/address)
- [static var pointOfInterest: MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/resulttype/pointofinterest)
- [static var physicalFeature: MKLocalSearch.ResultType](/documentation/mapkit/mklocalsearch/resulttype/physicalfeature)

#### Performing the search

- [func start(completionHandler: (MKLocalSearch.Response?, (any Error)?) -> Void)](/documentation/mapkit/mklocalsearch/start(completionhandler:))
- [MKLocalSearch.CompletionHandler](/documentation/mapkit/mklocalsearch/completionhandler)
- [var isSearching: Bool](/documentation/mapkit/mklocalsearch/issearching)
- [func cancel()](/documentation/mapkit/mklocalsearch/cancel())

#### Getting search results

- [MKLocalSearch.Response](/documentation/mapkit/mklocalsearch/response)

##### Getting the search results

- [var mapItems: [MKMapItem]](/documentation/mapkit/mklocalsearch/response/mapitems)
- [var boundingRegion: MKCoordinateRegion](/documentation/mapkit/mklocalsearch/response/boundingregion)
- [MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options)

#### Creating a filter result

- [init(rawValue: UInt)](/documentation/mapkit/mkaddressfilter/options/init(rawvalue:))

#### Getting search filter options

- [static var administrativeArea: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/administrativearea)
- [static var country: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/country)
- [static var locality: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/locality)
- [static var postalCode: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/postalcode)
- [static var subAdministrativeArea: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/subadministrativearea)
- [static var subLocality: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/sublocality)
- [static var administrativeArea: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/administrativearea)
- [static var country: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/country)
- [static var locality: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/locality)
- [static var postalCode: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/postalcode)
- [static var subAdministrativeArea: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/subadministrativearea)
- [static var subLocality: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/sublocality)
- [MKAddressFilter](/documentation/mapkit/mkaddressfilter)

#### Creating a filter

- [init(excluding: MKAddressFilter.Options)](/documentation/mapkit/mkaddressfilter/init(excluding:))
- [init(including: MKAddressFilter.Options)](/documentation/mapkit/mkaddressfilter/init(including:))

#### Filtering results

- [MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options)

##### Creating a filter result

- [init(rawValue: UInt)](/documentation/mapkit/mkaddressfilter/options/init(rawvalue:))

##### Getting search filter options

- [static var administrativeArea: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/administrativearea)
- [static var country: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/country)
- [static var locality: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/locality)
- [static var postalCode: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/postalcode)
- [static var subAdministrativeArea: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/subadministrativearea)
- [static var subLocality: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/sublocality)
- [static var administrativeArea: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/administrativearea)
- [static var country: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/country)
- [static var locality: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/locality)
- [static var postalCode: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/postalcode)
- [static var subAdministrativeArea: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/subadministrativearea)
- [static var subLocality: MKAddressFilter.Options](/documentation/mapkit/mkaddressfilter/options/sublocality)
- [class var excludingAll: MKAddressFilter](/documentation/mapkit/mkaddressfilter/excludingall)
- [class var includingAll: MKAddressFilter](/documentation/mapkit/mkaddressfilter/includingall)
- [func excludes(MKAddressFilter.Options) -> Bool](/documentation/mapkit/mkaddressfilter/excludes(_:))
- [func includes(MKAddressFilter.Options) -> Bool](/documentation/mapkit/mkaddressfilter/includes(_:))
- [MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype)

#### Type properties

- [static var address: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/address)
- [static var pointOfInterest: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/pointofinterest)
- [static var physicalFeature: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/physicalfeature)
- [static var query: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/query)

#### Initializers

- [init(rawValue: UInt)](/documentation/mapkit/mklocalsearchcompleter/resulttype/init(rawvalue:))
- [static var address: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/address)
- [static var pointOfInterest: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/pointofinterest)
- [static var physicalFeature: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/physicalfeature)
- [static var query: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/query)
- [MKLocalSearchCompleter](/documentation/mapkit/mklocalsearchcompleter)

#### Receiving the search results

- [var delegate: (any MKLocalSearchCompleterDelegate)?](/documentation/mapkit/mklocalsearchcompleter/delegate)
- [MKLocalSearchCompleterDelegate](/documentation/mapkit/mklocalsearchcompleterdelegate)

##### Getting the search results

- [func completerDidUpdateResults(MKLocalSearchCompleter)](/documentation/mapkit/mklocalsearchcompleterdelegate/completerdidupdateresults(_:))
- [func completer(MKLocalSearchCompleter, didFailWithError: any Error)](/documentation/mapkit/mklocalsearchcompleterdelegate/completer(_:didfailwitherror:))

#### Specifying the query attributes

- [var addressFilter: MKAddressFilter?](/documentation/mapkit/mklocalsearchcompleter/addressfilter)
- [var queryFragment: String](/documentation/mapkit/mklocalsearchcompleter/queryfragment)
- [var region: MKCoordinateRegion](/documentation/mapkit/mklocalsearchcompleter/region)
- [var regionPriority: MKLocalSearchRegionPriority](/documentation/mapkit/mklocalsearchcompleter/regionpriority)
- [var resultTypes: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttypes)
- [var pointOfInterestFilter: MKPointOfInterestFilter?](/documentation/mapkit/mklocalsearchcompleter/pointofinterestfilter)
- [var filterType: MKLocalSearchCompleter.FilterType](/documentation/mapkit/mklocalsearchcompleter/filtertype-swift.property)
- [MKLocalSearchCompleter.FilterType](/documentation/mapkit/mklocalsearchcompleter/filtertype-swift.enum)

##### Constants

- [case locationsAndQueries](/documentation/mapkit/mklocalsearchcompleter/filtertype-swift.enum/locationsandqueries)
- [case locationsOnly](/documentation/mapkit/mklocalsearchcompleter/filtertype-swift.enum/locationsonly)
- [case locationsAndQueries](/documentation/mapkit/mklocalsearchcompleter/filtertype-swift.enum/locationsandqueries)
- [case locationsOnly](/documentation/mapkit/mklocalsearchcompleter/filtertype-swift.enum/locationsonly)

##### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mklocalsearchcompleter/filtertype-swift.enum/init(rawvalue:))
- [MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype)

##### Type properties

- [static var address: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/address)
- [static var pointOfInterest: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/pointofinterest)
- [static var physicalFeature: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/physicalfeature)
- [static var query: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/query)

##### Initializers

- [init(rawValue: UInt)](/documentation/mapkit/mklocalsearchcompleter/resulttype/init(rawvalue:))
- [static var address: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/address)
- [static var pointOfInterest: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/pointofinterest)
- [static var physicalFeature: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/physicalfeature)
- [static var query: MKLocalSearchCompleter.ResultType](/documentation/mapkit/mklocalsearchcompleter/resulttype/query)

#### Canceling the query

- [func cancel()](/documentation/mapkit/mklocalsearchcompleter/cancel())
- [var isSearching: Bool](/documentation/mapkit/mklocalsearchcompleter/issearching)

#### Getting the current query results

- [var results: [MKLocalSearchCompletion]](/documentation/mapkit/mklocalsearchcompleter/results)
- [MKLocalSearchCompletion](/documentation/mapkit/mklocalsearchcompletion)

#### Getting the search completions

- [var title: String](/documentation/mapkit/mklocalsearchcompletion/title)
- [var subtitle: String](/documentation/mapkit/mklocalsearchcompletion/subtitle)
- [var titleHighlightRanges: [NSValue]](/documentation/mapkit/mklocalsearchcompletion/titlehighlightranges)
- [var subtitleHighlightRanges: [NSValue]](/documentation/mapkit/mklocalsearchcompletion/subtitlehighlightranges)
- [MKLocalPointsOfInterestRequest](/documentation/mapkit/mklocalpointsofinterestrequest)

#### Creating a point of interest request

- [init(center: CLLocationCoordinate2D, radius: CLLocationDistance)](/documentation/mapkit/mklocalpointsofinterestrequest/init(center:radius:))
- [init(coordinateRegion: MKCoordinateRegion)](/documentation/mapkit/mklocalpointsofinterestrequest/init(coordinateregion:))

#### Configuring the request parameters

- [var region: MKCoordinateRegion](/documentation/mapkit/mklocalpointsofinterestrequest/region)
- [var coordinate: CLLocationCoordinate2D](/documentation/mapkit/mklocalpointsofinterestrequest/coordinate)
- [var radius: CLLocationDistance](/documentation/mapkit/mklocalpointsofinterestrequest/radius)
- [var pointOfInterestFilter: MKPointOfInterestFilter?](/documentation/mapkit/mklocalpointsofinterestrequest/pointofinterestfilter)

#### Getting the maximum radius

- [class let maxRadius: CLLocationDistance](/documentation/mapkit/mklocalpointsofinterestrequest/maxradius)

### Exploring at street level

- [MKLookAroundScene](/documentation/mapkit/mklookaroundscene)
- [MKLookAroundSceneRequest](/documentation/mapkit/mklookaroundscenerequest)

#### Creating a LookAround scene

- [init(coordinate: CLLocationCoordinate2D)](/documentation/mapkit/mklookaroundscenerequest/init(coordinate:))
- [init(mapItem: MKMapItem)](/documentation/mapkit/mklookaroundscenerequest/init(mapitem:))

#### Specifying the request’s location

- [var coordinate: CLLocationCoordinate2D](/documentation/mapkit/mklookaroundscenerequest/coordinate)
- [var mapItem: MKMapItem?](/documentation/mapkit/mklookaroundscenerequest/mapitem)

#### Starting and stopping scene requests

- [func cancel()](/documentation/mapkit/mklookaroundscenerequest/cancel())
- [func getSceneWithCompletionHandler((MKLookAroundScene?, (any Error)?) -> Void)](/documentation/mapkit/mklookaroundscenerequest/getscenewithcompletionhandler(_:))

#### Monitoring the progress of scene requests

- [var isCancelled: Bool](/documentation/mapkit/mklookaroundscenerequest/iscancelled)
- [var isLoading: Bool](/documentation/mapkit/mklookaroundscenerequest/isloading)
- [MKLookAroundViewController](/documentation/mapkit/mklookaroundviewcontroller)

#### Creating a LookAround controller

- [init?(coder: NSCoder)](/documentation/mapkit/mklookaroundviewcontroller/init(coder:))
- [init(nibName: String?, bundle: Bundle?)](/documentation/mapkit/mklookaroundviewcontroller/init(nibname:bundle:))
- [init(scene: MKLookAroundScene)](/documentation/mapkit/mklookaroundviewcontroller/init(scene:))

#### Customizing the LookAround display

- [var isNavigationEnabled: Bool](/documentation/mapkit/mklookaroundviewcontroller/isnavigationenabled)
- [var pointOfInterestFilter: MKPointOfInterestFilter?](/documentation/mapkit/mklookaroundviewcontroller/pointofinterestfilter)
- [var showsRoadLabels: Bool](/documentation/mapkit/mklookaroundviewcontroller/showsroadlabels)
- [var badgePosition: MKLookAroundBadgePosition](/documentation/mapkit/mklookaroundviewcontroller/badgeposition)
- [MKLookAroundBadgePosition](/documentation/mapkit/mklookaroundbadgeposition)

##### Badge positions

- [case bottomTrailing](/documentation/mapkit/mklookaroundbadgeposition/bottomtrailing)
- [case topLeading](/documentation/mapkit/mklookaroundbadgeposition/topleading)
- [case topTrailing](/documentation/mapkit/mklookaroundbadgeposition/toptrailing)

##### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mklookaroundbadgeposition/init(rawvalue:))

#### Interacting with the controller

- [var delegate: (any MKLookAroundViewControllerDelegate)?](/documentation/mapkit/mklookaroundviewcontroller/delegate)
- [MKLookAroundViewControllerDelegate](/documentation/mapkit/mklookaroundviewcontrollerdelegate)

##### Responding to scene changes

- [func lookAroundViewControllerWillUpdateScene(MKLookAroundViewController)](/documentation/mapkit/mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerwillupdatescene(_:))
- [func lookAroundViewControllerDidUpdateScene(MKLookAroundViewController)](/documentation/mapkit/mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerdidupdatescene(_:))

##### Entering and exiting full-screen modes

- [func lookAroundViewControllerWillPresentFullScreen(MKLookAroundViewController)](/documentation/mapkit/mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerwillpresentfullscreen(_:))
- [func lookAroundViewControllerDidPresentFullScreen(MKLookAroundViewController)](/documentation/mapkit/mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerdidpresentfullscreen(_:))
- [func lookAroundViewControllerWillDismissFullScreen(MKLookAroundViewController)](/documentation/mapkit/mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerwilldismissfullscreen(_:))
- [func lookAroundViewControllerDidDismissFullScreen(MKLookAroundViewController)](/documentation/mapkit/mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerdiddismissfullscreen(_:))

#### Accessing the scene

- [var scene: MKLookAroundScene?](/documentation/mapkit/mklookaroundviewcontroller/scene)
- [MKLookAroundSnapshotter](/documentation/mapkit/mklookaroundsnapshotter)

#### Creating a snapshotter object

- [init(scene: MKLookAroundScene, options: MKLookAroundSnapshotter.Options)](/documentation/mapkit/mklookaroundsnapshotter/init(scene:options:))

#### Starting and stopping a snapshot

- [func cancel()](/documentation/mapkit/mklookaroundsnapshotter/cancel())
- [func getSnapshotWithCompletionHandler((MKLookAroundSnapshotter.Snapshot?, (any Error)?) -> Void)](/documentation/mapkit/mklookaroundsnapshotter/getsnapshotwithcompletionhandler(_:))

#### Monitoring the progress of a snaphot

- [var isLoading: Bool](/documentation/mapkit/mklookaroundsnapshotter/isloading)

#### Customizing the snapshot

- [MKLookAroundSnapshotter.Options](/documentation/mapkit/mklookaroundsnapshotter/options)

##### Customizing Snaphot Appearance

- [var pointOfInterestFilter: MKPointOfInterestFilter?](/documentation/mapkit/mklookaroundsnapshotter/options/pointofinterestfilter)
- [var size: CGSize](/documentation/mapkit/mklookaroundsnapshotter/options/size)
- [var traitCollection: UITraitCollection](/documentation/mapkit/mklookaroundsnapshotter/options/traitcollection)

#### Accessing snapshot imagery

- [MKLookAroundSnapshotter.Snapshot](/documentation/mapkit/mklookaroundsnapshotter/snapshot)

##### Accessing the Snapshot Image

- [var image: UIImage](/documentation/mapkit/mklookaroundsnapshotter/snapshot/image)

### Place information

- [MKMapItemDetailViewControllerDelegate](/documentation/mapkit/mkmapitemdetailviewcontrollerdelegate)

#### Instance Methods

- [func mapItemDetailViewControllerDidFinish(MKMapItemDetailViewController)](/documentation/mapkit/mkmapitemdetailviewcontrollerdelegate/mapitemdetailviewcontrollerdidfinish(_:))
- [MKMapItemDetailViewController](/documentation/mapkit/mkmapitemdetailviewcontroller)

#### Creating a map item detail view controller

- [init(mapItem: MKMapItem?)](/documentation/mapkit/mkmapitemdetailviewcontroller/init(mapitem:))
- [init(mapItem: MKMapItem?, displaysMap: Bool)](/documentation/mapkit/mkmapitemdetailviewcontroller/init(mapitem:displaysmap:))

#### Dismissing the map item detail interface

- [var delegate: (any MKMapItemDetailViewControllerDelegate)?](/documentation/mapkit/mkmapitemdetailviewcontroller/delegate)

#### Getting and setting the map item

- [var mapItem: MKMapItem?](/documentation/mapkit/mkmapitemdetailviewcontroller/mapitem)
- [MKSelectionAccessory.MapItemDetailPresentationStyle](/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle)

#### Creating a presentation style

- [static func automatic(presentationViewController: UIViewController?) -> MKSelectionAccessory.MapItemDetailPresentationStyle](/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/automatic(presentationviewcontroller:)-648ee)
- [static func automatic(presentationViewController: NSViewController?) -> MKSelectionAccessory.MapItemDetailPresentationStyle](/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/automatic(presentationviewcontroller:)-9t9vt)
- [class var callout: MKSelectionAccessory.MapItemDetailPresentationStyle](/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/callout)
- [static func callout(MKSelectionAccessory.MapItemDetailPresentationStyle.CalloutStyle) -> MKSelectionAccessory.MapItemDetailPresentationStyle](/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/callout(_:))
- [class var openInMaps: MKSelectionAccessory.MapItemDetailPresentationStyle](/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/openinmaps)
- [class func sheet(presentedFrom: UIViewController) -> MKSelectionAccessory.MapItemDetailPresentationStyle](/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/sheet(presentedfrom:))
- [MKSelectionAccessory](/documentation/mapkit/mkselectionaccessory)

#### Creating a selection accessory

- [class func mapItemDetail(MKSelectionAccessory.MapItemDetailPresentationStyle) -> MKSelectionAccessory](/documentation/mapkit/mkselectionaccessory/mapitemdetail(_:))
- [MKSelectionAccessory.MapItemDetailPresentationStyle.CalloutStyle](/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/calloutstyle)

#### Enumeration Cases

- [case automatic](/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/calloutstyle/automatic)
- [case compact](/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/calloutstyle/compact)
- [case full](/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/calloutstyle/full)

#### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/calloutstyle/init(rawvalue:))

### Points of interest

- [Identifying unique locations with Place IDs](/documentation/mapkit/identifying-unique-locations-with-place-ids)
- [MKMapFeatureAnnotation](/documentation/mapkit/mkmapfeatureannotation)

#### Customizing the annotation

- [var featureType: MKMapFeatureAnnotation.FeatureType](/documentation/mapkit/mkmapfeatureannotation/featuretype-swift.property)
- [MKMapFeatureAnnotation.FeatureType](/documentation/mapkit/mkmapfeatureannotation/featuretype-swift.enum)

##### Kinds of annotations

- [case physicalFeature](/documentation/mapkit/mkmapfeatureannotation/featuretype-swift.enum/physicalfeature)
- [case pointOfInterest](/documentation/mapkit/mkmapfeatureannotation/featuretype-swift.enum/pointofinterest)
- [case territory](/documentation/mapkit/mkmapfeatureannotation/featuretype-swift.enum/territory)
- [case physicalFeature](/documentation/mapkit/mkmapfeatureannotation/featuretype-swift.enum/physicalfeature)
- [case pointOfInterest](/documentation/mapkit/mkmapfeatureannotation/featuretype-swift.enum/pointofinterest)
- [case territory](/documentation/mapkit/mkmapfeatureannotation/featuretype-swift.enum/territory)

##### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mkmapfeatureannotation/featuretype-swift.enum/init(rawvalue:))
- [var iconStyle: MKIconStyle?](/documentation/mapkit/mkmapfeatureannotation/iconstyle)
- [var pointOfInterestCategory: MKPointOfInterestCategory?](/documentation/mapkit/mkmapfeatureannotation/pointofinterestcategory)
- [MKMapFeatureOptions](/documentation/mapkit/mkmapfeatureoptions)

#### Initializers

- [init(rawValue: Int)](/documentation/mapkit/mkmapfeatureoptions/init(rawvalue:))

#### Selecting interactive map features

- [static var physicalFeatures: MKMapFeatureOptions](/documentation/mapkit/mkmapfeatureoptions/physicalfeatures)
- [static var pointsOfInterest: MKMapFeatureOptions](/documentation/mapkit/mkmapfeatureoptions/pointsofinterest)
- [static var territories: MKMapFeatureOptions](/documentation/mapkit/mkmapfeatureoptions/territories)
- [MKMapItemRequest](/documentation/mapkit/mkmapitemrequest)

#### Creating a request

- [convenience init(feature: MapFeature)](/documentation/mapkit/mkmapitemrequest/init(feature:))
- [init(mapItemIdentifier: MKMapItem.Identifier)](/documentation/mapkit/mkmapitemrequest/init(mapitemidentifier:))
- [init(mapFeatureAnnotation: MKMapFeatureAnnotation)](/documentation/mapkit/mkmapitemrequest/init(mapfeatureannotation:))

#### Configuring the item request

- [var mapFeature: MapFeature?](/documentation/mapkit/mkmapitemrequest/mapfeature)
- [var mapFeatureAnnotation: MKMapFeatureAnnotation?](/documentation/mapkit/mkmapitemrequest/mapfeatureannotation)
- [var mapItemIdentifier: MKMapItem.Identifier?](/documentation/mapkit/mkmapitemrequest/mapitemidentifier)
- [var feature: MapFeature](/documentation/mapkit/mkmapitemrequest/feature)
- [var featureAnnotation: MKMapFeatureAnnotation](/documentation/mapkit/mkmapitemrequest/featureannotation)
- [var placeDescriptor: PlaceDescriptor?](/documentation/mapkit/mkmapitemrequest/placedescriptor)

#### Starting and stopping requests

- [func cancel()](/documentation/mapkit/mkmapitemrequest/cancel())
- [func getMapItem(completionHandler: (MKMapItem?, (any Error)?) -> Void)](/documentation/mapkit/mkmapitemrequest/getmapitem(completionhandler:))

#### Checking the status of a request

- [var isCancelled: Bool](/documentation/mapkit/mkmapitemrequest/iscancelled)
- [var isLoading: Bool](/documentation/mapkit/mkmapitemrequest/isloading)

#### Initializers

- [convenience init(placeDescriptor: PlaceDescriptor)](/documentation/mapkit/mkmapitemrequest/init(placedescriptor:))
- [MKIconStyle](/documentation/mapkit/mkiconstyle)

#### Customizing the icon view

- [var backgroundColor: UIColor](/documentation/mapkit/mkiconstyle/backgroundcolor)
- [var image: UIImage](/documentation/mapkit/mkiconstyle/image)
- [MKPointOfInterestFilter](/documentation/mapkit/mkpointofinterestfilter)

#### Creating filters

- [class var excludingAll: MKPointOfInterestFilter](/documentation/mapkit/mkpointofinterestfilter/excludingall)
- [class var includingAll: MKPointOfInterestFilter](/documentation/mapkit/mkpointofinterestfilter/includingall)
- [init(excluding: [MKPointOfInterestCategory])](/documentation/mapkit/mkpointofinterestfilter/init(excluding:))
- [init(including: [MKPointOfInterestCategory])](/documentation/mapkit/mkpointofinterestfilter/init(including:))

#### Querying filter behavior

- [func excludes(MKPointOfInterestCategory) -> Bool](/documentation/mapkit/mkpointofinterestfilter/excludes(_:))
- [func includes(MKPointOfInterestCategory) -> Bool](/documentation/mapkit/mkpointofinterestfilter/includes(_:))
- [MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory)

#### Category creation

- [init(rawValue: String)](/documentation/mapkit/mkpointofinterestcategory/init(rawvalue:))

#### Arts and culture

- [static let museum: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/museum)
- [static let musicVenue: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/musicvenue)
- [static let theater: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/theater)

#### Education

- [static let library: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/library)
- [static let planetarium: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/planetarium)
- [static let school: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/school)
- [static let university: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/university)

#### Entertainment

- [static let movieTheater: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/movietheater)
- [static let nightlife: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/nightlife)

#### Health and safety

- [static let fireStation: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/firestation)
- [static let hospital: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/hospital)
- [static let pharmacy: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/pharmacy)
- [static let police: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/police)

#### Historical and cultural landmarks

- [static let castle: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/castle)
- [static let fortress: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/fortress)
- [static let landmark: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/landmark)
- [static let nationalMonument: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/nationalmonument)

#### Food and drink

- [static let bakery: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/bakery)
- [static let brewery: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/brewery)
- [static let cafe: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/cafe)
- [static let distillery: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/distillery)
- [static let foodMarket: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/foodmarket)
- [static let restaurant: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/restaurant)
- [static let winery: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/winery)

#### Personal services

- [static let animalService: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/animalservice)
- [static let atm: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/atm)
- [static let automotiveRepair: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/automotiverepair)
- [static let bank: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/bank)
- [static let beauty: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/beauty)
- [static let evCharger: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/evcharger)
- [static let fitnessCenter: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/fitnesscenter)
- [static let laundry: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/laundry)
- [static let mailbox: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/mailbox)
- [static let postOffice: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/postoffice)
- [static let restroom: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/restroom)
- [static let spa: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/spa)
- [static let store: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/store)

#### Parks and recreation

- [static let amusementPark: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/amusementpark)
- [static let aquarium: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/aquarium)
- [static let beach: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/beach)
- [static let campground: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/campground)
- [static let fairground: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/fairground)
- [static let marina: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/marina)
- [static let nationalPark: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/nationalpark)
- [static let park: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/park)
- [static let rvPark: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/rvpark)
- [static let zoo: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/zoo)

#### Sports

- [static let baseball: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/baseball)
- [static let basketball: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/basketball)
- [static let bowling: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/bowling)
- [static let goKart: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/gokart)
- [static let golf: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/golf)
- [static let hiking: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/hiking)
- [static let miniGolf: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/minigolf)
- [static let rockClimbing: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/rockclimbing)
- [static let skatePark: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/skatepark)
- [static let skating: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/skating)
- [static let skiing: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/skiing)
- [static let soccer: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/soccer)
- [static let stadium: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/stadium)
- [static let tennis: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/tennis)
- [static let volleyball: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/volleyball)

#### Travel

- [static let airport: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/airport)
- [static let carRental: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/carrental)
- [static let conventionCenter: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/conventioncenter)
- [static let gasStation: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/gasstation)
- [static let hotel: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/hotel)
- [static let parking: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/parking)
- [static let publicTransport: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/publictransport)

#### Water sports

- [static let fishing: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/fishing)
- [static let kayaking: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/kayaking)
- [static let surfing: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/surfing)
- [static let swimming: MKPointOfInterestCategory](/documentation/mapkit/mkpointofinterestcategory/swimming)

### Static map snapshots

- [MKMapSnapshotter](/documentation/mapkit/mkmapsnapshotter)

#### Creating a snapshotter object

- [init(options: MKMapSnapshotter.Options)](/documentation/mapkit/mkmapsnapshotter/init(options:))
- [MKMapSnapshotter.Options](/documentation/mapkit/mkmapsnapshotter/options)

##### Configuring the snapshot region

- [var region: MKCoordinateRegion](/documentation/mapkit/mkmapsnapshotter/options/region)
- [var mapRect: MKMapRect](/documentation/mapkit/mkmapsnapshotter/options/maprect)
- [var camera: MKMapCamera](/documentation/mapkit/mkmapsnapshotter/options/camera)

##### Configuring the map data

- [var preferredConfiguration: MKMapConfiguration](/documentation/mapkit/mkmapsnapshotter/options/preferredconfiguration)
- [var mapType: MKMapType](/documentation/mapkit/mkmapsnapshotter/options/maptype)
- [var showsBuildings: Bool](/documentation/mapkit/mkmapsnapshotter/options/showsbuildings)
- [var pointOfInterestFilter: MKPointOfInterestFilter?](/documentation/mapkit/mkmapsnapshotter/options/pointofinterestfilter)
- [var showsPointsOfInterest: Bool](/documentation/mapkit/mkmapsnapshotter/options/showspointsofinterest)

##### Configuring the image output

- [var traitCollection: UITraitCollection](/documentation/mapkit/mkmapsnapshotter/options/traitcollection)
- [var size: CGSize](/documentation/mapkit/mkmapsnapshotter/options/size)
- [var appearance: NSAppearance?](/documentation/mapkit/mkmapsnapshotter/options/appearance)
- [var scale: CGFloat](/documentation/mapkit/mkmapsnapshotter/options/scale)

#### Generating a snapshot

- [func start(completionHandler: (MKMapSnapshotter.Snapshot?, (any Error)?) -> Void)](/documentation/mapkit/mkmapsnapshotter/start(completionhandler:))
- [func start(with: dispatch_queue_t, completionHandler: (MKMapSnapshotter.Snapshot?, (any Error)?) -> Void)](/documentation/mapkit/mkmapsnapshotter/start(with:completionhandler:))
- [MKMapSnapshotter.CompletionHandler](/documentation/mapkit/mkmapsnapshotter/completionhandler)
- [func cancel()](/documentation/mapkit/mkmapsnapshotter/cancel())
- [var isLoading: Bool](/documentation/mapkit/mkmapsnapshotter/isloading)

#### Snapshot output

- [MKMapSnapshotter.Snapshot](/documentation/mapkit/mkmapsnapshotter/snapshot)

##### Getting the snapshot image

- [var image: UIImage](/documentation/mapkit/mkmapsnapshotter/snapshot/image)
- [var appearance: NSAppearance](/documentation/mapkit/mkmapsnapshotter/snapshot/appearance)

##### Getting points on the image

- [func point(for: CLLocationCoordinate2D) -> CGPoint](/documentation/mapkit/mkmapsnapshotter/snapshot/point(for:))

##### Getting appearance traits

- [var traitCollection: UITraitCollection](/documentation/mapkit/mkmapsnapshotter/snapshot/traitcollection)
- [MKMapSnapshotter.Snapshot](/documentation/mapkit/mkmapsnapshotter/snapshot)

#### Getting the snapshot image

- [var image: UIImage](/documentation/mapkit/mkmapsnapshotter/snapshot/image)
- [var appearance: NSAppearance](/documentation/mapkit/mkmapsnapshotter/snapshot/appearance)

#### Getting points on the image

- [func point(for: CLLocationCoordinate2D) -> CGPoint](/documentation/mapkit/mkmapsnapshotter/snapshot/point(for:))

#### Getting appearance traits

- [var traitCollection: UITraitCollection](/documentation/mapkit/mkmapsnapshotter/snapshot/traitcollection)

### Reference

- [MapKit Functions](/documentation/mapkit/mapkit-functions)

#### Functions

- [init(center: CLLocationCoordinate2D, latitudinalMeters: CLLocationDistance, longitudinalMeters: CLLocationDistance)](/documentation/mapkit/mkcoordinateregion/init(center:latitudinalmeters:longitudinalmeters:))
- [init(CLLocationCoordinate2D)](/documentation/mapkit/mkmappoint/init(_:))

### Errors

- [let MKErrorDomain: String](/documentation/mapkit/mkerrordomain)
- [MKError](/documentation/mapkit/mkerror)

#### Error codes

- [static var decodingFailed: MKError.Code](/documentation/mapkit/mkerror/decodingfailed)
- [static var directionsNotFound: MKError.Code](/documentation/mapkit/mkerror/directionsnotfound)
- [static var loadingThrottled: MKError.Code](/documentation/mapkit/mkerror/loadingthrottled)
- [static var placemarkNotFound: MKError.Code](/documentation/mapkit/mkerror/placemarknotfound)
- [static var serverFailure: MKError.Code](/documentation/mapkit/mkerror/serverfailure)
- [static var unknown: MKError.Code](/documentation/mapkit/mkerror/unknown)
- [MKError.Code](/documentation/mapkit/mkerror/code)

##### Constants

- [case decodingFailed](/documentation/mapkit/mkerror/code/decodingfailed)
- [case directionsNotFound](/documentation/mapkit/mkerror/code/directionsnotfound)
- [case loadingThrottled](/documentation/mapkit/mkerror/code/loadingthrottled)
- [case placemarkNotFound](/documentation/mapkit/mkerror/code/placemarknotfound)
- [case serverFailure](/documentation/mapkit/mkerror/code/serverfailure)
- [case unknown](/documentation/mapkit/mkerror/code/unknown)

##### Initializers

- [init?(rawValue: UInt)](/documentation/mapkit/mkerror/code/init(rawvalue:))

#### Type Properties

- [static var errorDomain: String](/documentation/mapkit/mkerror/errordomain)
- [MKError.Code](/documentation/mapkit/mkerror/code)

#### Constants

- [case decodingFailed](/documentation/mapkit/mkerror/code/decodingfailed)
- [case directionsNotFound](/documentation/mapkit/mkerror/code/directionsnotfound)
- [case loadingThrottled](/documentation/mapkit/mkerror/code/loadingthrottled)
- [case placemarkNotFound](/documentation/mapkit/mkerror/code/placemarknotfound)
- [case serverFailure](/documentation/mapkit/mkerror/code/serverfailure)
- [case unknown](/documentation/mapkit/mkerror/code/unknown)

#### Initializers

- [init?(rawValue: UInt)](/documentation/mapkit/mkerror/code/init(rawvalue:))

### Deprecated

- [Deprecated Symbols](/documentation/mapkit/deprecated-symbols)

#### Initializers

- [init(coordinateRegion: Binding<MKCoordinateRegion>, interactionModes: MapInteractionModes, showsUserLocation: Bool, userTrackingMode: Binding<MapUserTrackingMode>?)](/documentation/mapkit/map/init(coordinateregion:interactionmodes:showsuserlocation:usertrackingmode:))
- [init<Items, Annotation>(coordinateRegion: Binding<MKCoordinateRegion>, interactionModes: MapInteractionModes, showsUserLocation: Bool, userTrackingMode: Binding<MapUserTrackingMode>?, annotationItems: Items, annotationContent: (Items.Element) -> Annotation)](/documentation/mapkit/map/init(coordinateregion:interactionmodes:showsuserlocation:usertrackingmode:annotationitems:annotationcontent:))
- [init(mapRect: Binding<MKMapRect>, interactionModes: MapInteractionModes, showsUserLocation: Bool, userTrackingMode: Binding<MapUserTrackingMode>?)](/documentation/mapkit/map/init(maprect:interactionmodes:showsuserlocation:usertrackingmode:))
- [init<Items, Annotation>(mapRect: Binding<MKMapRect>, interactionModes: MapInteractionModes, showsUserLocation: Bool, userTrackingMode: Binding<MapUserTrackingMode>?, annotationItems: Items, annotationContent: (Items.Element) -> Annotation)](/documentation/mapkit/map/init(maprect:interactionmodes:showsuserlocation:usertrackingmode:annotationitems:annotationcontent:))

#### Structures

- [MapAnnotation](/documentation/mapkit/mapannotation)

##### Creating a map annotation

- [init(coordinate: CLLocationCoordinate2D, anchorPoint: CGPoint, content: () -> Content)](/documentation/mapkit/mapannotation/init(coordinate:anchorpoint:content:))
- [MapMarker](/documentation/mapkit/mapmarker)

##### Creating a map marker

- [init(coordinate: CLLocationCoordinate2D, tint: Color?)](/documentation/mapkit/mapmarker/init(coordinate:tint:))
- [MapPin](/documentation/mapkit/mappin)

##### Creating a map pin

- [init(coordinate: CLLocationCoordinate2D, tint: Color?)](/documentation/mapkit/mappin/init(coordinate:tint:))

#### Enumerations

- [MapUserTrackingMode](/documentation/mapkit/mapusertrackingmode)

##### Setting the user tracking mode

- [case none](/documentation/mapkit/mapusertrackingmode/none)
- [case follow](/documentation/mapkit/mapusertrackingmode/follow)
- [case followWithHeading](/documentation/mapkit/mapusertrackingmode/followwithheading)
- [MapKit for SwiftUI](/documentation/mapkit/mapkit-for-swiftui)

### null

- [Searching, displaying, and navigating to places](/documentation/mapkit/searching-displaying-and-navigating-to-places)

### Essentials

- [Map](/documentation/mapkit/map)

#### Creating a map

- [init(bounds: MapCameraBounds?, interactionModes: MapInteractionModes, scope: Namespace.ID?)](/documentation/mapkit/map/init(bounds:interactionmodes:scope:))
- [init<C>(bounds: MapCameraBounds?, interactionModes: MapInteractionModes, scope: Namespace.ID?, content: () -> C)](/documentation/mapkit/map/init(bounds:interactionmodes:scope:content:))
- [init(bounds: MapCameraBounds?, interactionModes: MapInteractionModes, selection: Binding<MapFeature?>, scope: Namespace.ID?)](/documentation/mapkit/map/init(bounds:interactionmodes:selection:scope:)-11lec)
- [init<SelectedValue>(bounds: MapCameraBounds?, interactionModes: MapInteractionModes, selection: Binding<SelectedValue?>, scope: Namespace.ID?)](/documentation/mapkit/map/init(bounds:interactionmodes:selection:scope:)-236di)
- [init<C>(bounds: MapCameraBounds?, interactionModes: MapInteractionModes, selection: Binding<MapFeature?>, scope: Namespace.ID?, content: () -> C)](/documentation/mapkit/map/init(bounds:interactionmodes:selection:scope:content:)-28wns)
- [init<SelectedValue, C>(bounds: MapCameraBounds?, interactionModes: MapInteractionModes, selection: Binding<SelectedValue?>, scope: Namespace.ID?, content: () -> C)](/documentation/mapkit/map/init(bounds:interactionmodes:selection:scope:content:)-2tdbr)
- [init(initialPosition: MapCameraPosition, bounds: MapCameraBounds?, interactionModes: MapInteractionModes, scope: Namespace.ID?)](/documentation/mapkit/map/init(initialposition:bounds:interactionmodes:scope:))
- [init<C>(initialPosition: MapCameraPosition, bounds: MapCameraBounds?, interactionModes: MapInteractionModes, scope: Namespace.ID?, content: () -> C)](/documentation/mapkit/map/init(initialposition:bounds:interactionmodes:scope:content:))
- [init(initialPosition: MapCameraPosition, bounds: MapCameraBounds?, interactionModes: MapInteractionModes, selection: Binding<MapFeature?>, scope: Namespace.ID?)](/documentation/mapkit/map/init(initialposition:bounds:interactionmodes:selection:scope:))
- [init<C>(initialPosition: MapCameraPosition, bounds: MapCameraBounds?, interactionModes: MapInteractionModes, selection: Binding<MapFeature?>, scope: Namespace.ID?, content: () -> C)](/documentation/mapkit/map/init(initialposition:bounds:interactionmodes:selection:scope:content:)-9feos)
- [init<SelectedValue, C>(initialPosition: MapCameraPosition, bounds: MapCameraBounds?, interactionModes: MapInteractionModes, selection: Binding<SelectedValue?>, scope: Namespace.ID?, content: () -> C)](/documentation/mapkit/map/init(initialposition:bounds:interactionmodes:selection:scope:content:)-451vp)
- [init(position: Binding<MapCameraPosition>, bounds: MapCameraBounds?, interactionModes: MapInteractionModes, scope: Namespace.ID?)](/documentation/mapkit/map/init(position:bounds:interactionmodes:scope:))
- [init<C>(position: Binding<MapCameraPosition>, bounds: MapCameraBounds?, interactionModes: MapInteractionModes, scope: Namespace.ID?, content: () -> C)](/documentation/mapkit/map/init(position:bounds:interactionmodes:scope:content:))
- [init(position: Binding<MapCameraPosition>, bounds: MapCameraBounds?, interactionModes: MapInteractionModes, selection: Binding<MapFeature?>, scope: Namespace.ID?)](/documentation/mapkit/map/init(position:bounds:interactionmodes:selection:scope:))
- [init<C>(position: Binding<MapCameraPosition>, bounds: MapCameraBounds?, interactionModes: MapInteractionModes, selection: Binding<MapFeature?>, scope: Namespace.ID?, content: () -> C)](/documentation/mapkit/map/init(position:bounds:interactionmodes:selection:scope:content:)-47y4p)
- [init<SelectedValue, C>(position: Binding<MapCameraPosition>, bounds: MapCameraBounds?, interactionModes: MapInteractionModes, selection: Binding<SelectedValue?>, scope: Namespace.ID?, content: () -> C)](/documentation/mapkit/map/init(position:bounds:interactionmodes:selection:scope:content:)-9xq1q)
- [MapInteractionModes](/documentation/mapkit/mapinteractionmodes)

##### Declared interaction modes

- [static let all: MapInteractionModes](/documentation/mapkit/mapinteractionmodes/all)
- [static let pan: MapInteractionModes](/documentation/mapkit/mapinteractionmodes/pan)
- [static let zoom: MapInteractionModes](/documentation/mapkit/mapinteractionmodes/zoom)
- [static let pitch: MapInteractionModes](/documentation/mapkit/mapinteractionmodes/pitch)
- [static let rotate: MapInteractionModes](/documentation/mapkit/mapinteractionmodes/rotate)

#### Deprecated

- [Deprecated Symbols](/documentation/mapkit/deprecated-symbols)

##### Initializers

- [init(coordinateRegion: Binding<MKCoordinateRegion>, interactionModes: MapInteractionModes, showsUserLocation: Bool, userTrackingMode: Binding<MapUserTrackingMode>?)](/documentation/mapkit/map/init(coordinateregion:interactionmodes:showsuserlocation:usertrackingmode:))
- [init<Items, Annotation>(coordinateRegion: Binding<MKCoordinateRegion>, interactionModes: MapInteractionModes, showsUserLocation: Bool, userTrackingMode: Binding<MapUserTrackingMode>?, annotationItems: Items, annotationContent: (Items.Element) -> Annotation)](/documentation/mapkit/map/init(coordinateregion:interactionmodes:showsuserlocation:usertrackingmode:annotationitems:annotationcontent:))
- [init(mapRect: Binding<MKMapRect>, interactionModes: MapInteractionModes, showsUserLocation: Bool, userTrackingMode: Binding<MapUserTrackingMode>?)](/documentation/mapkit/map/init(maprect:interactionmodes:showsuserlocation:usertrackingmode:))
- [init<Items, Annotation>(mapRect: Binding<MKMapRect>, interactionModes: MapInteractionModes, showsUserLocation: Bool, userTrackingMode: Binding<MapUserTrackingMode>?, annotationItems: Items, annotationContent: (Items.Element) -> Annotation)](/documentation/mapkit/map/init(maprect:interactionmodes:showsuserlocation:usertrackingmode:annotationitems:annotationcontent:))

##### Structures

- [MapAnnotation](/documentation/mapkit/mapannotation)

###### Creating a map annotation

- [init(coordinate: CLLocationCoordinate2D, anchorPoint: CGPoint, content: () -> Content)](/documentation/mapkit/mapannotation/init(coordinate:anchorpoint:content:))
- [MapMarker](/documentation/mapkit/mapmarker)

###### Creating a map marker

- [init(coordinate: CLLocationCoordinate2D, tint: Color?)](/documentation/mapkit/mapmarker/init(coordinate:tint:))
- [MapPin](/documentation/mapkit/mappin)

###### Creating a map pin

- [init(coordinate: CLLocationCoordinate2D, tint: Color?)](/documentation/mapkit/mappin/init(coordinate:tint:))

##### Enumerations

- [MapUserTrackingMode](/documentation/mapkit/mapusertrackingmode)

###### Setting the user tracking mode

- [case none](/documentation/mapkit/mapusertrackingmode/none)
- [case follow](/documentation/mapkit/mapusertrackingmode/follow)
- [case followWithHeading](/documentation/mapkit/mapusertrackingmode/followwithheading)

#### Displaying place information

- [func mapItemDetailSelectionAccessory(MapItemDetailSelectionAccessoryStyle?) -> some MapContent](/documentation/mapkit/mapcontent/mapitemdetailselectionaccessory(_:))

#### Initializers

- [init<SelectedValue, C>(bounds: MapCameraBounds?, interactionModes: MapInteractionModes, selection: Binding<SelectedValue?>, scope: Namespace.ID?, content: () -> C)](/documentation/mapkit/map/init(bounds:interactionmodes:selection:scope:content:)-335qt)
- [init<SelectedValue, C>(initialPosition: MapCameraPosition, bounds: MapCameraBounds?, interactionModes: MapInteractionModes, selection: Binding<SelectedValue?>, scope: Namespace.ID?, content: () -> C)](/documentation/mapkit/map/init(initialposition:bounds:interactionmodes:selection:scope:content:)-2u4ry)
- [init<SelectedValue, C>(position: Binding<MapCameraPosition>, bounds: MapCameraBounds?, interactionModes: MapInteractionModes, selection: Binding<SelectedValue?>, scope: Namespace.ID?, content: () -> C)](/documentation/mapkit/map/init(position:bounds:interactionmodes:selection:scope:content:)-96bhq)
- [MapStyle](/documentation/mapkit/mapstyle)

#### Creating map styles

- [static func hybrid(elevation: MapStyle.Elevation, pointsOfInterest: PointOfInterestCategories, showsTraffic: Bool) -> MapStyle](/documentation/mapkit/mapstyle/hybrid(elevation:pointsofinterest:showstraffic:))
- [static func imagery(elevation: MapStyle.Elevation) -> MapStyle](/documentation/mapkit/mapstyle/imagery(elevation:))
- [static func standard(elevation: MapStyle.Elevation, emphasis: MapStyle.StandardEmphasis, pointsOfInterest: PointOfInterestCategories, showsTraffic: Bool) -> MapStyle](/documentation/mapkit/mapstyle/standard(elevation:emphasis:pointsofinterest:showstraffic:))
- [MapStyle.Elevation](/documentation/mapkit/mapstyle/elevation)

##### Elevation styles

- [static var automatic: MapStyle.Elevation](/documentation/mapkit/mapstyle/elevation/automatic)
- [static var flat: MapStyle.Elevation](/documentation/mapkit/mapstyle/elevation/flat)
- [static var realistic: MapStyle.Elevation](/documentation/mapkit/mapstyle/elevation/realistic)
- [MapStyle.StandardEmphasis](/documentation/mapkit/mapstyle/standardemphasis)

##### Controlling the map’s emphasis

- [static var automatic: MapStyle.StandardEmphasis](/documentation/mapkit/mapstyle/standardemphasis/automatic)
- [static var muted: MapStyle.StandardEmphasis](/documentation/mapkit/mapstyle/standardemphasis/muted)

#### Map styles

- [static var hybrid: MapStyle](/documentation/mapkit/mapstyle/hybrid)
- [static var imagery: MapStyle](/documentation/mapkit/mapstyle/imagery)
- [static var standard: MapStyle](/documentation/mapkit/mapstyle/standard)

### Annotations and overlays

- [Annotation](/documentation/mapkit/annotation)

#### Creating annotations

- [init(LocalizedStringKey, coordinate: CLLocationCoordinate2D, anchor: UnitPoint, accessoryAnchor: UnitPoint, content: () -> Content)](/documentation/mapkit/annotation/init(_:coordinate:anchor:accessoryanchor:content:)-6rxmn)
- [init<S>(S, coordinate: CLLocationCoordinate2D, anchor: UnitPoint, accessoryAnchor: UnitPoint, content: () -> Content)](/documentation/mapkit/annotation/init(_:coordinate:anchor:accessoryanchor:content:)-14m3t)
- [init(coordinate: CLLocationCoordinate2D, anchor: UnitPoint, accessoryAnchor: UnitPoint, content: () -> Content, label: () -> Label)](/documentation/mapkit/annotation/init(coordinate:anchor:accessoryanchor:content:label:))
- [init(item: MKMapItem, anchor: UnitPoint, accessoryAnchor: UnitPoint, content: () -> Content)](/documentation/mapkit/annotation/init(item:anchor:accessoryanchor:content:))
- [init(LocalizedStringKey, coordinate: CLLocationCoordinate2D, anchor: UnitPoint, content: () -> Content)](/documentation/mapkit/annotation/init(_:coordinate:anchor:content:)-2w242)
- [init<S>(S, coordinate: CLLocationCoordinate2D, anchor: UnitPoint, content: () -> Content)](/documentation/mapkit/annotation/init(_:coordinate:anchor:content:)-6wnoh)
- [init(coordinate: CLLocationCoordinate2D, anchor: UnitPoint, content: () -> Content, label: () -> Label)](/documentation/mapkit/annotation/init(coordinate:anchor:content:label:))

#### Displaying place information

- [func mapItemDetailSelectionAccessory(MapItemDetailSelectionAccessoryStyle?) -> some MapContent](/documentation/mapkit/mapcontent/mapitemdetailselectionaccessory(_:))

#### Initializers

- [init(LocalizedStringResource, coordinate: CLLocationCoordinate2D, anchor: UnitPoint, accessoryAnchor: UnitPoint, content: () -> Content)](/documentation/mapkit/annotation/init(_:coordinate:anchor:accessoryanchor:content:)-8wi4r)
- [init(LocalizedStringResource, coordinate: CLLocationCoordinate2D, anchor: UnitPoint, content: () -> Content)](/documentation/mapkit/annotation/init(_:coordinate:anchor:content:)-8k419)
- [MapCircle](/documentation/mapkit/mapcircle)

#### Creating a map circle

- [init(MKCircle)](/documentation/mapkit/mapcircle/init(_:))
- [init(center: CLLocationCoordinate2D, radius: CLLocationDistance)](/documentation/mapkit/mapcircle/init(center:radius:))
- [init(mapRect: MKMapRect)](/documentation/mapkit/mapcircle/init(maprect:))
- [MapPolygon](/documentation/mapkit/mappolygon)

#### Creating a map polygon

- [init(coordinates: [CLLocationCoordinate2D])](/documentation/mapkit/mappolygon/init(coordinates:))
- [init(points: [MKMapPoint])](/documentation/mapkit/mappolygon/init(points:))
- [init(MKPolygon)](/documentation/mapkit/mappolygon/init(_:))
- [MapPolyline](/documentation/mapkit/mappolyline)

#### Creating a polyline

- [init(MKPolyline)](/documentation/mapkit/mappolyline/init(_:)-93u7w)
- [init(MKRoute)](/documentation/mapkit/mappolyline/init(_:)-5p2kx)
- [init(coordinates: [CLLocationCoordinate2D], contourStyle: MapPolyline.ContourStyle)](/documentation/mapkit/mappolyline/init(coordinates:contourstyle:))
- [init(points: [MKMapPoint], contourStyle: MapPolyline.ContourStyle)](/documentation/mapkit/mappolyline/init(points:contourstyle:))

#### Styling the polyline

- [MapPolyline.ContourStyle](/documentation/mapkit/mappolyline/contourstyle)

##### Styles

- [static var geodesic: MapPolyline.ContourStyle](/documentation/mapkit/mappolyline/contourstyle/geodesic)
- [static var straight: MapPolyline.ContourStyle](/documentation/mapkit/mappolyline/contourstyle/straight)
- [Marker](/documentation/mapkit/marker)

#### Creating a marker

- [init<S>(S, coordinate: CLLocationCoordinate2D)](/documentation/mapkit/marker/init(_:coordinate:)-82942)
- [init<S>(S, image: String, coordinate: CLLocationCoordinate2D)](/documentation/mapkit/marker/init(_:image:coordinate:)-36l1p)
- [init<S>(S, systemImage: String, coordinate: CLLocationCoordinate2D)](/documentation/mapkit/marker/init(_:systemimage:coordinate:)-50yl4)
- [init(LocalizedStringKey, coordinate: CLLocationCoordinate2D)](/documentation/mapkit/marker/init(_:coordinate:)-8wxlv)
- [init(LocalizedStringKey, image: String, coordinate: CLLocationCoordinate2D)](/documentation/mapkit/marker/init(_:image:coordinate:)-28mge)
- [init(LocalizedStringKey, monogram: Text, coordinate: CLLocationCoordinate2D)](/documentation/mapkit/marker/init(_:monogram:coordinate:)-2ojcy)
- [init<S>(S, monogram: Text, coordinate: CLLocationCoordinate2D)](/documentation/mapkit/marker/init(_:monogram:coordinate:)-21hql)
- [init(LocalizedStringKey, systemImage: String, coordinate: CLLocationCoordinate2D)](/documentation/mapkit/marker/init(_:systemimage:coordinate:)-2t4i0)
- [init(coordinate: CLLocationCoordinate2D, label: () -> Label)](/documentation/mapkit/marker/init(coordinate:label:))
- [init(item: MKMapItem)](/documentation/mapkit/marker/init(item:))

#### Displaying place information

- [func mapItemDetailSelectionAccessory(MapItemDetailSelectionAccessoryStyle?) -> some MapContent](/documentation/mapkit/mapcontent/mapitemdetailselectionaccessory(_:))

#### Initializers

- [init(LocalizedStringResource, coordinate: CLLocationCoordinate2D)](/documentation/mapkit/marker/init(_:coordinate:)-3bjj6)
- [init(LocalizedStringResource, image: String, coordinate: CLLocationCoordinate2D)](/documentation/mapkit/marker/init(_:image:coordinate:)-1q3pz)
- [init(LocalizedStringResource, monogram: Text, coordinate: CLLocationCoordinate2D)](/documentation/mapkit/marker/init(_:monogram:coordinate:)-77k4r)
- [init(LocalizedStringResource, systemImage: String, coordinate: CLLocationCoordinate2D)](/documentation/mapkit/marker/init(_:systemimage:coordinate:)-18xnl)
- [UserAnnotation](/documentation/mapkit/userannotation)

#### Creating a user annotation

- [init()](/documentation/mapkit/userannotation/init())
- [init(anchor: UnitPoint)](/documentation/mapkit/userannotation/init(anchor:))
- [init(anchor: UnitPoint, content: (UserLocation) -> Content)](/documentation/mapkit/userannotation/init(anchor:content:)-8u3r4)
- [init(anchor: UnitPoint, content: () -> Content)](/documentation/mapkit/userannotation/init(anchor:content:)-3e78j)

#### Information about a person’s location

- [UserLocation](/documentation/mapkit/userlocation)

##### Accessing the user’s location and heading

- [var heading: CLHeading?](/documentation/mapkit/userlocation/heading)
- [var location: CLLocation?](/documentation/mapkit/userlocation/location)

### Map controls

- [MapCompass](/documentation/mapkit/mapcompass)

#### Creating a map compass

- [init(scope: Namespace.ID?)](/documentation/mapkit/mapcompass/init(scope:))
- [MapLocationCompass](/documentation/mapkit/maplocationcompass)

#### Creating a map loction compass

- [init(scope: Namespace.ID?)](/documentation/mapkit/maplocationcompass/init(scope:))
- [MapPitchSlider](/documentation/mapkit/mappitchslider)

#### Creating a map pitch slider

- [init(scope: Namespace.ID?)](/documentation/mapkit/mappitchslider/init(scope:))
- [MapPitchToggle](/documentation/mapkit/mappitchtoggle)

#### Creating a map pitch toggle

- [init(scope: Namespace.ID?)](/documentation/mapkit/mappitchtoggle/init(scope:))
- [MapScaleView](/documentation/mapkit/mapscaleview)

#### Creating a map scale view

- [init(anchorEdge: HorizontalEdge, scope: Namespace.ID?)](/documentation/mapkit/mapscaleview/init(anchoredge:scope:))
- [init(alignment: HorizontalAlignment, scope: Namespace.ID?)](/documentation/mapkit/mapscaleview/init(alignment:scope:))
- [MapUserLocationButton](/documentation/mapkit/mapuserlocationbutton)

#### Creating a map user location button

- [init(scope: Namespace.ID?)](/documentation/mapkit/mapuserlocationbutton/init(scope:))
- [MapZoomStepper](/documentation/mapkit/mapzoomstepper)

#### Creating a zoom stepper

- [init(scope: Namespace.ID?)](/documentation/mapkit/mapzoomstepper/init(scope:))

### Exploring at street level

- [LookAroundPreview](/documentation/mapkit/lookaroundpreview)

#### Creating a Look Around preview

- [init(initialScene: MKLookAroundScene?, allowsNavigation: Bool, showsRoadLabels: Bool, pointsOfInterest: PointOfInterestCategories, badgePosition: MKLookAroundBadgePosition)](/documentation/mapkit/lookaroundpreview/init(initialscene:allowsnavigation:showsroadlabels:pointsofinterest:badgeposition:))
- [init(scene: Binding<MKLookAroundScene?>, allowsNavigation: Bool, showsRoadLabels: Bool, pointsOfInterest: PointOfInterestCategories, badgePosition: MKLookAroundBadgePosition)](/documentation/mapkit/lookaroundpreview/init(scene:allowsnavigation:showsroadlabels:pointsofinterest:badgeposition:))

### Map features

- [MapFeature](/documentation/mapkit/mapfeature)

#### Accessing the feature’s properties

- [var kind: MapFeature.FeatureKind](/documentation/mapkit/mapfeature/kind)
- [MapFeature.FeatureKind](/documentation/mapkit/mapfeature/featurekind)

##### Kinds of features

- [static var physicalFeature: MapFeature.FeatureKind](/documentation/mapkit/mapfeature/featurekind/physicalfeature)
- [static var pointOfInterest: MapFeature.FeatureKind](/documentation/mapkit/mapfeature/featurekind/pointofinterest)
- [static var territory: MapFeature.FeatureKind](/documentation/mapkit/mapfeature/featurekind/territory)
- [var coordinate: CLLocationCoordinate2D](/documentation/mapkit/mapfeature/coordinate)
- [var title: String?](/documentation/mapkit/mapfeature/title)
- [var backgroundColor: Color?](/documentation/mapkit/mapfeature/backgroundcolor)
- [var image: Image?](/documentation/mapkit/mapfeature/image)
- [var pointOfInterestCategory: MKPointOfInterestCategory?](/documentation/mapkit/mapfeature/pointofinterestcategory)
- [MapSelection](/documentation/mapkit/mapselection)

#### Creating a map selection

- [init(SelectionValue)](/documentation/mapkit/mapselection/init(_:))

#### Getting the properties

- [var value: SelectionValue?](/documentation/mapkit/mapselection/value)
- [MapSelectable](/documentation/mapkit/mapselectable)

#### Initializers

- [init(MapFeature?)](/documentation/mapkit/mapselectable/init(_:))

#### Instance Properties

- [var feature: MapFeature?](/documentation/mapkit/mapselectable/feature)

### Map customization

- [MapCamera](/documentation/mapkit/mapcamera)

#### Creating a map camera

- [init(MKMapCamera)](/documentation/mapkit/mapcamera/init(_:))
- [init(centerCoordinate: CLLocationCoordinate2D, distance: Double, heading: Double, pitch: Double)](/documentation/mapkit/mapcamera/init(centercoordinate:distance:heading:pitch:))

#### Accessing the camera properties

- [var centerCoordinate: CLLocationCoordinate2D](/documentation/mapkit/mapcamera/centercoordinate)
- [var distance: Double](/documentation/mapkit/mapcamera/distance)
- [var heading: Double](/documentation/mapkit/mapcamera/heading)
- [var pitch: Double](/documentation/mapkit/mapcamera/pitch)
- [MapCameraBounds](/documentation/mapkit/mapcamerabounds)

#### Creating a map camera bounds

- [init(centerCoordinateBounds: MKCoordinateRegion, minimumDistance: Double?, maximumDistance: Double?)](/documentation/mapkit/mapcamerabounds/init(centercoordinatebounds:minimumdistance:maximumdistance:)-97kis)
- [init(centerCoordinateBounds: MKMapRect, minimumDistance: Double?, maximumDistance: Double?)](/documentation/mapkit/mapcamerabounds/init(centercoordinatebounds:minimumdistance:maximumdistance:)-27z4p)
- [init(minimumDistance: Double?, maximumDistance: Double?)](/documentation/mapkit/mapcamerabounds/init(minimumdistance:maximumdistance:))
- [MapCameraPosition](/documentation/mapkit/mapcameraposition)

#### Creating a camera position

- [static func camera(MapCamera) -> MapCameraPosition](/documentation/mapkit/mapcameraposition/camera(_:))
- [static func item(MKMapItem, allowsAutomaticPitch: Bool) -> MapCameraPosition](/documentation/mapkit/mapcameraposition/item(_:allowsautomaticpitch:))
- [static func rect(MKMapRect) -> MapCameraPosition](/documentation/mapkit/mapcameraposition/rect(_:))
- [static func region(MKCoordinateRegion) -> MapCameraPosition](/documentation/mapkit/mapcameraposition/region(_:))
- [static func userLocation(followsHeading: Bool, fallback: MapCameraPosition) -> MapCameraPosition](/documentation/mapkit/mapcameraposition/userlocation(followsheading:fallback:))

#### Information about camera position and framing

- [static var automatic: MapCameraPosition](/documentation/mapkit/mapcameraposition/automatic)
- [var allowsAutomaticPitch: Bool](/documentation/mapkit/mapcameraposition/allowsautomaticpitch)
- [var camera: MapCamera?](/documentation/mapkit/mapcameraposition/camera)
- [var fallbackPosition: MapCameraPosition?](/documentation/mapkit/mapcameraposition/fallbackposition)
- [var item: MKMapItem?](/documentation/mapkit/mapcameraposition/item)
- [var positionedByUser: Bool](/documentation/mapkit/mapcameraposition/positionedbyuser)
- [var rect: MKMapRect?](/documentation/mapkit/mapcameraposition/rect)
- [var region: MKCoordinateRegion?](/documentation/mapkit/mapcameraposition/region)

#### Accessing information about someone’s location

- [var followsUserHeading: Bool](/documentation/mapkit/mapcameraposition/followsuserheading)
- [var followsUserLocation: Bool](/documentation/mapkit/mapcameraposition/followsuserlocation)
- [MapCameraUpdateContext](/documentation/mapkit/mapcameraupdatecontext)

#### Accessing information about the camera

- [let camera: MapCamera](/documentation/mapkit/mapcameraupdatecontext/camera)
- [let rect: MKMapRect](/documentation/mapkit/mapcameraupdatecontext/rect)
- [let region: MKCoordinateRegion](/documentation/mapkit/mapcameraupdatecontext/region)
- [MapCameraUpdateFrequency](/documentation/mapkit/mapcameraupdatefrequency)

#### Timing of camera updates

- [static var continuous: MapCameraUpdateFrequency](/documentation/mapkit/mapcameraupdatefrequency/continuous)
- [static var onEnd: MapCameraUpdateFrequency](/documentation/mapkit/mapcameraupdatefrequency/onend)

### Place information

- [MapItemDetailSelectionAccessoryStyle](/documentation/mapkit/mapitemdetailselectionaccessorystyle)

#### Accessory styles

- [static var automatic: MapItemDetailSelectionAccessoryStyle](/documentation/mapkit/mapitemdetailselectionaccessorystyle/automatic)
- [static var callout: MapItemDetailSelectionAccessoryStyle](/documentation/mapkit/mapitemdetailselectionaccessorystyle/callout)
- [static var caption: MapItemDetailSelectionAccessoryStyle](/documentation/mapkit/mapitemdetailselectionaccessorystyle/caption)
- [static var sheet: MapItemDetailSelectionAccessoryStyle](/documentation/mapkit/mapitemdetailselectionaccessorystyle/sheet)

#### Callout styles

- [MapItemDetailSelectionAccessoryStyle.CalloutStyle](/documentation/mapkit/mapitemdetailselectionaccessorystyle/calloutstyle)

##### Type Properties

- [static var automatic: MapItemDetailSelectionAccessoryStyle.CalloutStyle](/documentation/mapkit/mapitemdetailselectionaccessorystyle/calloutstyle/automatic)
- [static var compact: MapItemDetailSelectionAccessoryStyle.CalloutStyle](/documentation/mapkit/mapitemdetailselectionaccessorystyle/calloutstyle/compact)
- [static var full: MapItemDetailSelectionAccessoryStyle.CalloutStyle](/documentation/mapkit/mapitemdetailselectionaccessorystyle/calloutstyle/full)
- [static var automatic: MapItemDetailSelectionAccessoryStyle.CalloutStyle](/documentation/mapkit/mapitemdetailselectionaccessorystyle/calloutstyle/automatic)
- [static var compact: MapItemDetailSelectionAccessoryStyle.CalloutStyle](/documentation/mapkit/mapitemdetailselectionaccessorystyle/calloutstyle/compact)
- [static var full: MapItemDetailSelectionAccessoryStyle.CalloutStyle](/documentation/mapkit/mapitemdetailselectionaccessorystyle/calloutstyle/full)

#### Type Methods

- [static func callout(MapItemDetailSelectionAccessoryStyle.CalloutStyle) -> MapItemDetailSelectionAccessoryStyle](/documentation/mapkit/mapitemdetailselectionaccessorystyle/callout(_:))
- [func mapItemDetailSelectionAccessory(MapItemDetailSelectionAccessoryStyle?) -> some MapContent](/documentation/mapkit/mapcontent/mapitemdetailselectionaccessory(_:))
- [static func callout(MapItemDetailSelectionAccessoryStyle.CalloutStyle) -> MapItemDetailSelectionAccessoryStyle](/documentation/mapkit/mapitemdetailselectionaccessorystyle/callout(_:))

### Geocoding

- [MKGeocodingRequest](/documentation/mapkit/mkgeocodingrequest)

#### Creating a geocoding request object

- [init?(addressString: String)](/documentation/mapkit/mkgeocodingrequest/init(addressstring:))

#### Getting the geocoder’s state

- [var isLoading: Bool](/documentation/mapkit/mkgeocodingrequest/isloading)
- [var isCancelled: Bool](/documentation/mapkit/mkgeocodingrequest/iscancelled)

#### Controlling the geocoder’s operation

- [func cancel()](/documentation/mapkit/mkgeocodingrequest/cancel())

#### Getting information about the geocoder

- [var addressString: String](/documentation/mapkit/mkgeocodingrequest/addressstring)
- [func getMapItems(completionHandler: ([MKMapItem]?, (any Error)?) -> Void)](/documentation/mapkit/mkgeocodingrequest/getmapitems(completionhandler:))
- [var preferredLocale: Locale?](/documentation/mapkit/mkgeocodingrequest/preferredlocale)
- [var region: MKCoordinateRegion](/documentation/mapkit/mkgeocodingrequest/region)
- [MKReverseGeocodingRequest](/documentation/mapkit/mkreversegeocodingrequest)

#### Creating a request object

- [init?(location: CLLocation)](/documentation/mapkit/mkreversegeocodingrequest/init(location:))

#### Getting the reverse geocoder’s state

- [var isLoading: Bool](/documentation/mapkit/mkreversegeocodingrequest/isloading)
- [var isCancelled: Bool](/documentation/mapkit/mkreversegeocodingrequest/iscancelled)
- [var location: CLLocation](/documentation/mapkit/mkreversegeocodingrequest/location)

#### Controlling the reverse geocoder’s operation

- [func cancel()](/documentation/mapkit/mkreversegeocodingrequest/cancel())

#### Getting information about map items and the reverse geocoder’s locale’

- [func getMapItems(completionHandler: ([MKMapItem]?, (any Error)?) -> Void)](/documentation/mapkit/mkreversegeocodingrequest/getmapitems(completionhandler:))
- [var preferredLocale: Locale?](/documentation/mapkit/mkreversegeocodingrequest/preferredlocale)

### Representing places and addresses

- [MKMapItem](/documentation/mapkit/mkmapitem)

#### Creating map items

- [init(placemark: MKPlacemark)](/documentation/mapkit/mkmapitem/init(placemark:))
- [class func forCurrentLocation() -> MKMapItem](/documentation/mapkit/mkmapitem/forcurrentlocation())

#### Accessing the map item attributes

- [MKMapItem.Identifier](/documentation/mapkit/mkmapitem/identifier-swift.class)
- [var alternateIdentifiers: Set<MKMapItem.Identifier>](/documentation/mapkit/mkmapitem/alternateidentifiers)
- [var identifier: MKMapItem.Identifier?](/documentation/mapkit/mkmapitem/identifier-swift.property)
- [var isCurrentLocation: Bool](/documentation/mapkit/mkmapitem/iscurrentlocation)
- [var name: String?](/documentation/mapkit/mkmapitem/name)
- [var placemark: MKPlacemark](/documentation/mapkit/mkmapitem/placemark)
- [var pointOfInterestCategory: MKPointOfInterestCategory?](/documentation/mapkit/mkmapitem/pointofinterestcategory)
- [var phoneNumber: String?](/documentation/mapkit/mkmapitem/phonenumber)
- [var timeZone: TimeZone?](/documentation/mapkit/mkmapitem/timezone)
- [var url: URL?](/documentation/mapkit/mkmapitem/url)

#### Launching the Maps app

- [class func openMaps(with: [MKMapItem], launchOptions: [String : Any]?) -> Bool](/documentation/mapkit/mkmapitem/openmaps(with:launchoptions:))
- [class func openMaps(with: [MKMapItem], launchOptions: [String : Any]?, completionHandler: ((Bool) -> Void)?)](/documentation/mapkit/mkmapitem/openmaps(with:launchoptions:completionhandler:))
- [class func openMaps(with: [MKMapItem], launchOptions: [String : Any]?, from: UIScene?, completionHandler: ((Bool) -> Void)?)](/documentation/mapkit/mkmapitem/openmaps(with:launchoptions:from:completionhandler:))
- [func openInMaps(launchOptions: [String : Any]?) -> Bool](/documentation/mapkit/mkmapitem/openinmaps(launchoptions:))
- [func openInMaps(launchOptions: [String : Any]?, completionHandler: ((Bool) -> Void)?)](/documentation/mapkit/mkmapitem/openinmaps(launchoptions:completionhandler:))
- [func openInMaps(launchOptions: [String : Any]?, from: UIScene?, completionHandler: ((Bool) -> Void)?)](/documentation/mapkit/mkmapitem/openinmaps(launchoptions:from:completionhandler:))

#### Serializing a map item

- [let MKMapItemTypeIdentifier: String](/documentation/mapkit/mkmapitemtypeidentifier)

#### Opening items at launch time

- [Launch options dictionary keys](/documentation/mapkit/launch-options-dictionary-keys)

##### Launch options

- [let MKLaunchOptionsDirectionsModeKey: String](/documentation/mapkit/mklaunchoptionsdirectionsmodekey)
- [let MKLaunchOptionsMapTypeKey: String](/documentation/mapkit/mklaunchoptionsmaptypekey)
- [let MKLaunchOptionsMapCenterKey: String](/documentation/mapkit/mklaunchoptionsmapcenterkey)
- [let MKLaunchOptionsMapSpanKey: String](/documentation/mapkit/mklaunchoptionsmapspankey)
- [let MKLaunchOptionsShowsTrafficKey: String](/documentation/mapkit/mklaunchoptionsshowstraffickey)
- [let MKLaunchOptionsCameraKey: String](/documentation/mapkit/mklaunchoptionscamerakey)
- [Directions mode values](/documentation/mapkit/directions-mode-values)

##### Directions keys

- [let MKLaunchOptionsDirectionsModeDriving: String](/documentation/mapkit/mklaunchoptionsdirectionsmodedriving)
- [let MKLaunchOptionsDirectionsModeWalking: String](/documentation/mapkit/mklaunchoptionsdirectionsmodewalking)
- [let MKLaunchOptionsDirectionsModeTransit: String](/documentation/mapkit/mklaunchoptionsdirectionsmodetransit)
- [let MKLaunchOptionsDirectionsModeCycling: String](/documentation/mapkit/mklaunchoptionsdirectionsmodecycling)
- [let MKLaunchOptionsDirectionsModeDefault: String](/documentation/mapkit/mklaunchoptionsdirectionsmodedefault)

#### Initializers

- [init(location: CLLocation, address: MKAddress?)](/documentation/mapkit/mkmapitem/init(location:address:))

#### Instance Properties

- [var address: MKAddress?](/documentation/mapkit/mkmapitem/address)
- [var addressRepresentations: MKAddressRepresentations?](/documentation/mapkit/mkmapitem/addressrepresentations)
- [var location: CLLocation](/documentation/mapkit/mkmapitem/location)

#### Default Implementations

- [MKMapItem Implementations](/documentation/mapkit/mkmapitem/mkmapitem-implementations)

##### Initializers

- [init?(coder: NSCoder)](/documentation/mapkit/mkmapitem/init(coder:))
- [MKAddress](/documentation/mapkit/mkaddress)

#### Creating an address

- [init?(fullAddress: String, shortAddress: String?)](/documentation/mapkit/mkaddress/init(fulladdress:shortaddress:))

#### Getting the full and short addresses

- [var fullAddress: String](/documentation/mapkit/mkaddress/fulladdress)
- [var shortAddress: String?](/documentation/mapkit/mkaddress/shortaddress)
- [MKAddressRepresentations](/documentation/mapkit/mkaddressrepresentations)

#### Getting parts of an address

- [var cityName: String?](/documentation/mapkit/mkaddressrepresentations/cityname)
- [var cityWithContext: String?](/documentation/mapkit/mkaddressrepresentations/citywithcontext)
- [var regionName: String?](/documentation/mapkit/mkaddressrepresentations/regionname)
- [var region: Locale.Region?](/documentation/mapkit/mkaddressrepresentations/region)

#### Getting a full address and city name

- [func fullAddress(includingRegion: Bool, singleLine: Bool) -> String?](/documentation/mapkit/mkaddressrepresentations/fulladdress(includingregion:singleline:))
- [func cityWithContext(MKAddressRepresentations.ContextStyle) -> String?](/documentation/mapkit/mkaddressrepresentations/citywithcontext(_:))

#### Controlling the degree of disambiguation to include in an address representation

- [MKAddressRepresentations.ContextStyle](/documentation/mapkit/mkaddressrepresentations/contextstyle)

##### Creating a context style

- [init?(rawValue: Int)](/documentation/mapkit/mkaddressrepresentations/contextstyle/init(rawvalue:))

##### Available context styles

- [case automatic](/documentation/mapkit/mkaddressrepresentations/contextstyle/automatic)
- [case short](/documentation/mapkit/mkaddressrepresentations/contextstyle/short)
- [case full](/documentation/mapkit/mkaddressrepresentations/contextstyle/full)
- [GeoToolbox](/documentation/geotoolbox)

### Points of interest

- [PointOfInterestCategories](/documentation/mapkit/pointofinterestcategories)

#### Categories to include or exclude

- [static var all: PointOfInterestCategories](/documentation/mapkit/pointofinterestcategories/all)
- [static var excludingAll: PointOfInterestCategories](/documentation/mapkit/pointofinterestcategories/excludingall)

#### Modifying the categories to include or exclude

- [static func excluding([MKPointOfInterestCategory]) -> PointOfInterestCategories](/documentation/mapkit/pointofinterestcategories/excluding(_:)-16bp0)
- [static func excluding(MKPointOfInterestCategory...) -> PointOfInterestCategories](/documentation/mapkit/pointofinterestcategories/excluding(_:)-4jo9h)
- [static func including([MKPointOfInterestCategory]) -> PointOfInterestCategories](/documentation/mapkit/pointofinterestcategories/including(_:)-22f7x)
- [static func including(MKPointOfInterestCategory...) -> PointOfInterestCategories](/documentation/mapkit/pointofinterestcategories/including(_:)-6flda)

### Protocols

- [DynamicMapContent](/documentation/mapkit/dynamicmapcontent)

#### Accessing the data

- [var data: Self.Data](/documentation/mapkit/dynamicmapcontent/data-swift.property)

#### Associated types

- [Data](/documentation/mapkit/dynamicmapcontent/data-swift.associatedtype)
- [MapContent](/documentation/mapkit/mapcontent)

#### Accessing the view body

- [var body: Self.Body](/documentation/mapkit/mapcontent/body-swift.property)

#### Supplying annotation titles

- [func annotationTitles(Visibility) -> some MapContent](/documentation/mapkit/mapcontent/annotationtitles(_:))
- [func annotationSubtitles(Visibility) -> some MapContent](/documentation/mapkit/mapcontent/annotationsubtitles(_:))

#### Setting the content style

- [func foregroundStyle(some ShapeStyle) -> some MapContent](/documentation/mapkit/mapcontent/foregroundstyle(_:))
- [func tint<S>(S) -> some MapContent](/documentation/mapkit/mapcontent/tint(_:))

#### Setting stroke properties

- [func stroke(some ShapeStyle, lineWidth: CGFloat) -> some MapContent](/documentation/mapkit/mapcontent/stroke(_:linewidth:))
- [func stroke(some ShapeStyle, style: StrokeStyle) -> some MapContent](/documentation/mapkit/mapcontent/stroke(_:style:))
- [func stroke(lineWidth: CGFloat) -> some MapContent](/documentation/mapkit/mapcontent/stroke(linewidth:))
- [func strokeStyle(style: StrokeStyle) -> some MapContent](/documentation/mapkit/mapcontent/strokestyle(style:))

#### Setting the overlay level

- [func mapOverlayLevel(level: MKOverlayLevel) -> some MapContent](/documentation/mapkit/mapcontent/mapoverlaylevel(level:))

#### Associated types

- [Body](/documentation/mapkit/mapcontent/body-swift.associatedtype)

#### Displaying place information

- [func mapItemDetailSelectionAccessory(MapItemDetailSelectionAccessoryStyle?) -> some MapContent](/documentation/mapkit/mapcontent/mapitemdetailselectionaccessory(_:))

#### Instance Methods

- [func tag<V>(V) -> some MapContent](/documentation/mapkit/mapcontent/tag(_:))
- [MapContentBuilder](/documentation/mapkit/mapcontentbuilder)

#### Map content builders

- [static func buildBlock() -> EmptyMapContent](/documentation/mapkit/mapcontentbuilder/buildblock())
- [static func buildBlock<C>(C) -> C](/documentation/mapkit/mapcontentbuilder/buildblock(_:)-5ewn9)

#### Conditionally building map content

- [static func buildEither<TrueContent, FalseContent>(first: TrueContent) -> _ConditionalMapContent<TrueContent, FalseContent>](/documentation/mapkit/mapcontentbuilder/buildeither(first:))
- [static func buildEither<TrueContent, FalseContent>(second: FalseContent) -> _ConditionalMapContent<TrueContent, FalseContent>](/documentation/mapkit/mapcontentbuilder/buildeither(second:))
- [static func buildExpression<Content>(Content) -> Content](/documentation/mapkit/mapcontentbuilder/buildexpression(_:))
- [static func buildIf<Content>(Content?) -> Content?](/documentation/mapkit/mapcontentbuilder/buildif(_:))
- [static func buildLimitedAvailability(any MapContent) -> some MapContent](/documentation/mapkit/mapcontentbuilder/buildlimitedavailability(_:))

#### Type Methods

- [static func buildBlock<each Content>(repeat each Content) -> TupleMapContent<(repeat each Content)>](/documentation/mapkit/mapcontentbuilder/buildblock(_:)-4omn)
- [MapContentView](/documentation/mapkit/mapcontentview)

### Structures

- [DefaultUserAnnotationContent](/documentation/mapkit/defaultuserannotationcontent)
- [EmptyMapContent](/documentation/mapkit/emptymapcontent)

#### Creating an empty map content structure

- [init()](/documentation/mapkit/emptymapcontent/init())
- [MapProxy](/documentation/mapkit/mapproxy)

#### Creating a camera proxy

- [func camera(framing: MKCoordinateRegion) -> MapCamera](/documentation/mapkit/mapproxy/camera(framing:)-1asl2)
- [func camera(framing: MKMapRect) -> MapCamera](/documentation/mapkit/mapproxy/camera(framing:)-uxov)
- [func camera(framing: MKMapItem, allowPitch: Bool) -> MapCamera](/documentation/mapkit/mapproxy/camera(framing:allowpitch:))

#### Converting between coordinate spaces

- [func convert(CLLocationCoordinate2D, to: some CoordinateSpaceProtocol) -> CGPoint?](/documentation/mapkit/mapproxy/convert(_:to:))
- [func convert(CGPoint, from: some CoordinateSpaceProtocol) -> CLLocationCoordinate2D?](/documentation/mapkit/mapproxy/convert(_:from:))
- [MapReader](/documentation/mapkit/mapreader)

#### Creating a map reader

- [init(content: (MapProxy) -> Content)](/documentation/mapkit/mapreader/init(content:))
- [TupleMapContent](/documentation/mapkit/tuplemapcontent)

#### Accessing the tuple value

- [var value: T](/documentation/mapkit/tuplemapcontent/value)
- [MapSelectableContentView](/documentation/mapkit/mapselectablecontentview)
- [Adopting unified Maps URLs](/documentation/mapkit/unified-map-urls)

## Articles

- [Deprecated Symbols](/documentation/mapkit/mapkit_for_appkit_and_uikit-deprecated-symbols)

### Classes

- [MKCircleView](/documentation/mapkit/mkcircleview)
- [MKOverlayView](/documentation/mapkit/mkoverlayview)
- [MKOverlayPathView](/documentation/mapkit/mkoverlaypathview)
- [MKPolygonView](/documentation/mapkit/mkpolygonview)
- [MKPolylineView](/documentation/mapkit/mkpolylineview)
- [MKPinAnnotationView](/documentation/mapkit/mkpinannotationview)

#### Getting Standard Pin Colors

- [class func redPinColor() -> UIColor](/documentation/mapkit/mkpinannotationview/redpincolor())
- [class func greenPinColor() -> UIColor](/documentation/mapkit/mkpinannotationview/greenpincolor())
- [class func purplePinColor() -> UIColor](/documentation/mapkit/mkpinannotationview/purplepincolor())
- [MKPinAnnotationColor](/documentation/mapkit/mkpinannotationcolor)

##### Constants

- [case red](/documentation/mapkit/mkpinannotationcolor/red)
- [case green](/documentation/mapkit/mkpinannotationcolor/green)
- [case purple](/documentation/mapkit/mkpinannotationcolor/purple)

##### Initializers

- [init?(rawValue: UInt)](/documentation/mapkit/mkpinannotationcolor/init(rawvalue:))

#### Getting and Setting Attributes

- [var pinTintColor: UIColor!](/documentation/mapkit/mkpinannotationview/pintintcolor)
- [var animatesDrop: Bool](/documentation/mapkit/mkpinannotationview/animatesdrop)
- [var pinColor: MKPinAnnotationColor](/documentation/mapkit/mkpinannotationview/pincolor)

### Properties

- [var filterType: MKLocalSearchCompleter.FilterType](/documentation/mapkit/mklocalsearchcompleter/filtertype-swift.property)
- [var pinColor: MKPinAnnotationColor](/documentation/mapkit/mkpinannotationview/pincolor)
- [var showsPointsOfInterest: Bool](/documentation/mapkit/mkmapview/showspointsofinterest)
- [var showsPointsOfInterest: Bool](/documentation/mapkit/mkmapsnapshotter/options/showspointsofinterest)
- [var mapType: MKMapType](/documentation/mapkit/mkmapsnapshotter/options/maptype)

### Methods

- [func view(for: any MKOverlay) -> MKOverlayView](/documentation/mapkit/mkmapview/view(for:)-38z60)
- [func mapView(MKMapView, didAddOverlayViews: [Any])](/documentation/mapkit/mkmapviewdelegate/mapview(_:didaddoverlayviews:))
- [func mapView(MKMapView, viewFor: any MKOverlay) -> MKOverlayView](/documentation/mapkit/mkmapviewdelegate/mapview(_:viewfor:)-6j267)

### Protocols

- [MapPin](/documentation/mapkit/mappin)

#### Creating a map pin

- [init(coordinate: CLLocationCoordinate2D, tint: Color?)](/documentation/mapkit/mappin/init(coordinate:tint:))

### Enumerations

- [MKLocalSearchCompleter.FilterType](/documentation/mapkit/mklocalsearchcompleter/filtertype-swift.enum)

#### Constants

- [case locationsAndQueries](/documentation/mapkit/mklocalsearchcompleter/filtertype-swift.enum/locationsandqueries)
- [case locationsOnly](/documentation/mapkit/mklocalsearchcompleter/filtertype-swift.enum/locationsonly)
- [case locationsAndQueries](/documentation/mapkit/mklocalsearchcompleter/filtertype-swift.enum/locationsandqueries)
- [case locationsOnly](/documentation/mapkit/mklocalsearchcompleter/filtertype-swift.enum/locationsonly)

#### Initializers

- [init?(rawValue: Int)](/documentation/mapkit/mklocalsearchcompleter/filtertype-swift.enum/init(rawvalue:))
- [MKMapType](/documentation/mapkit/mkmaptype)

#### Constants

- [case standard](/documentation/mapkit/mkmaptype/standard)
- [case satellite](/documentation/mapkit/mkmaptype/satellite)
- [case hybrid](/documentation/mapkit/mkmaptype/hybrid)
- [case satelliteFlyover](/documentation/mapkit/mkmaptype/satelliteflyover)
- [case hybridFlyover](/documentation/mapkit/mkmaptype/hybridflyover)
- [case mutedStandard](/documentation/mapkit/mkmaptype/mutedstandard)

#### Initializers

- [init?(rawValue: UInt)](/documentation/mapkit/mkmaptype/init(rawvalue:))
- [MKPinAnnotationColor](/documentation/mapkit/mkpinannotationcolor)

#### Constants

- [case red](/documentation/mapkit/mkpinannotationcolor/red)
- [case green](/documentation/mapkit/mkpinannotationcolor/green)
- [case purple](/documentation/mapkit/mkpinannotationcolor/purple)

#### Initializers

- [init?(rawValue: UInt)](/documentation/mapkit/mkpinannotationcolor/init(rawvalue:))

### Entitlements

- [Maps Entitlement](/documentation/bundleresources/entitlements/com.apple.developer.maps)
- [Preparing your app to be the default navigation app](/documentation/mapkit/preparing-your-app-to-be-the-default-navigation-app)

## Structures

- [AnyMapContent](/documentation/mapkit/anymapcontent)

### Initializers

- [init<Content>(Content)](/documentation/mapkit/anymapcontent/init(_:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
