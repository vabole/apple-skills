---
title: HealthKit
source: https://developer.apple.com/documentation/healthkit
timestamp: 2026-02-19T07:56:01.770Z
---

## Essentials

- [About the HealthKit framework](/documentation/healthkit/about-the-healthkit-framework)
- [Setting up HealthKit](/documentation/healthkit/setting-up-healthkit)

### Entitlements

- [HealthKit Entitlement](/documentation/bundleresources/entitlements/com.apple.developer.healthkit)
- [HealthKit Capabilities Entitlement](/documentation/bundleresources/entitlements/com.apple.developer.healthkit.access)

### Information property list keys

- [NSHealthUpdateUsageDescription](/documentation/bundleresources/information-property-list/nshealthupdateusagedescription)
- [NSHealthShareUsageDescription](/documentation/bundleresources/information-property-list/nshealthshareusagedescription)
- [NSHealthRequiredReadAuthorizationTypeIdentifiers](/documentation/bundleresources/information-property-list/nshealthrequiredreadauthorizationtypeidentifiers)
- [NSHealthClinicalHealthRecordsShareUsageDescription](/documentation/bundleresources/information-property-list/nshealthclinicalhealthrecordsshareusagedescription)
- [Authorizing access to health data](/documentation/healthkit/authorizing-access-to-health-data)
- [Protecting user privacy](/documentation/healthkit/protecting-user-privacy)
- [HealthKit updates](/documentation/updates/healthkit)
- [HealthKitUI](/documentation/healthkitui)

## Health data

- [Saving data to HealthKit](/documentation/healthkit/saving-data-to-healthkit)
- [Reading data from HealthKit](/documentation/healthkit/reading-data-from-healthkit)
- [HKHealthStore](/documentation/healthkit/hkhealthstore)

### Accessing HealthKit

- [func authorizationStatus(for: HKObjectType) -> HKAuthorizationStatus](/documentation/healthkit/hkhealthstore/authorizationstatus(for:))
- [HKAuthorizationStatus](/documentation/healthkit/hkauthorizationstatus)

#### Constants

- [case notDetermined](/documentation/healthkit/hkauthorizationstatus/notdetermined)
- [case sharingDenied](/documentation/healthkit/hkauthorizationstatus/sharingdenied)
- [case sharingAuthorized](/documentation/healthkit/hkauthorizationstatus/sharingauthorized)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkauthorizationstatus/init(rawvalue:))
- [func getRequestStatusForAuthorization(toShare: Set<HKSampleType>, read: Set<HKObjectType>, completion: (HKAuthorizationRequestStatus, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/getrequeststatusforauthorization(toshare:read:completion:))
- [HKAuthorizationRequestStatus](/documentation/healthkit/hkauthorizationrequeststatus)

#### Statuses

- [case unknown](/documentation/healthkit/hkauthorizationrequeststatus/unknown)
- [case shouldRequest](/documentation/healthkit/hkauthorizationrequeststatus/shouldrequest)
- [case unnecessary](/documentation/healthkit/hkauthorizationrequeststatus/unnecessary)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkauthorizationrequeststatus/init(rawvalue:))
- [class func isHealthDataAvailable() -> Bool](/documentation/healthkit/hkhealthstore/ishealthdataavailable())
- [func supportsHealthRecords() -> Bool](/documentation/healthkit/hkhealthstore/supportshealthrecords())
- [func requestAuthorization(toShare: Set<HKSampleType>?, read: Set<HKObjectType>?, completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/requestauthorization(toshare:read:completion:))
- [func requestAuthorization(toShare: Set<HKSampleType>, read: Set<HKObjectType>) async throws](/documentation/healthkit/hkhealthstore/requestauthorization(toshare:read:))
- [func requestPerObjectReadAuthorization(for: HKObjectType, predicate: NSPredicate?, completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/requestperobjectreadauthorization(for:predicate:completion:))
- [func handleAuthorizationForExtension(completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/handleauthorizationforextension(completion:))
- [var authorizationViewControllerPresenter: UIViewController?](/documentation/healthkit/hkhealthstore/authorizationviewcontrollerpresenter)

### Querying HealthKit data

- [func execute(HKQuery)](/documentation/healthkit/hkhealthstore/execute(_:))
- [func stop(HKQuery)](/documentation/healthkit/hkhealthstore/stop(_:))

### Reading characteristic data

- [func biologicalSex() throws -> HKBiologicalSexObject](/documentation/healthkit/hkhealthstore/biologicalsex())

#### Possible Values

- [HKBiologicalSexObject](/documentation/healthkit/hkbiologicalsexobject)

##### Getting Biological Sex Data

- [var biologicalSex: HKBiologicalSex](/documentation/healthkit/hkbiologicalsexobject/biologicalsex)

###### Valid Biological Sex Values

- [HKBiologicalSex](/documentation/healthkit/hkbiologicalsex)

###### Constants

- [case notSet](/documentation/healthkit/hkbiologicalsex/notset)
- [case female](/documentation/healthkit/hkbiologicalsex/female)
- [case male](/documentation/healthkit/hkbiologicalsex/male)
- [case other](/documentation/healthkit/hkbiologicalsex/other)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkbiologicalsex/init(rawvalue:))
- [HKBiologicalSex](/documentation/healthkit/hkbiologicalsex)

##### Constants

- [case notSet](/documentation/healthkit/hkbiologicalsex/notset)
- [case female](/documentation/healthkit/hkbiologicalsex/female)
- [case male](/documentation/healthkit/hkbiologicalsex/male)
- [case other](/documentation/healthkit/hkbiologicalsex/other)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkbiologicalsex/init(rawvalue:))
- [func bloodType() throws -> HKBloodTypeObject](/documentation/healthkit/hkhealthstore/bloodtype())

#### Possible Values

- [HKBloodTypeObject](/documentation/healthkit/hkbloodtypeobject)

##### Getting Blood Type Data

- [var bloodType: HKBloodType](/documentation/healthkit/hkbloodtypeobject/bloodtype)

###### Valid Blood Types

- [HKBloodType](/documentation/healthkit/hkbloodtype)

###### Constants

- [case notSet](/documentation/healthkit/hkbloodtype/notset)
- [case aPositive](/documentation/healthkit/hkbloodtype/apositive)
- [case aNegative](/documentation/healthkit/hkbloodtype/anegative)
- [case bPositive](/documentation/healthkit/hkbloodtype/bpositive)
- [case bNegative](/documentation/healthkit/hkbloodtype/bnegative)
- [case abPositive](/documentation/healthkit/hkbloodtype/abpositive)
- [case abNegative](/documentation/healthkit/hkbloodtype/abnegative)
- [case oPositive](/documentation/healthkit/hkbloodtype/opositive)
- [case oNegative](/documentation/healthkit/hkbloodtype/onegative)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkbloodtype/init(rawvalue:))
- [HKBloodType](/documentation/healthkit/hkbloodtype)

##### Constants

- [case notSet](/documentation/healthkit/hkbloodtype/notset)
- [case aPositive](/documentation/healthkit/hkbloodtype/apositive)
- [case aNegative](/documentation/healthkit/hkbloodtype/anegative)
- [case bPositive](/documentation/healthkit/hkbloodtype/bpositive)
- [case bNegative](/documentation/healthkit/hkbloodtype/bnegative)
- [case abPositive](/documentation/healthkit/hkbloodtype/abpositive)
- [case abNegative](/documentation/healthkit/hkbloodtype/abnegative)
- [case oPositive](/documentation/healthkit/hkbloodtype/opositive)
- [case oNegative](/documentation/healthkit/hkbloodtype/onegative)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkbloodtype/init(rawvalue:))
- [func dateOfBirth() throws -> Date](/documentation/healthkit/hkhealthstore/dateofbirth())
- [func dateOfBirthComponents() throws -> DateComponents](/documentation/healthkit/hkhealthstore/dateofbirthcomponents())
- [func fitzpatrickSkinType() throws -> HKFitzpatrickSkinTypeObject](/documentation/healthkit/hkhealthstore/fitzpatrickskintype())

#### Possible Values

- [HKFitzpatrickSkinTypeObject](/documentation/healthkit/hkfitzpatrickskintypeobject)

##### Accessing Skin Type Data

- [var skinType: HKFitzpatrickSkinType](/documentation/healthkit/hkfitzpatrickskintypeobject/skintype)

###### Valid Skin Types

- [HKFitzpatrickSkinType](/documentation/healthkit/hkfitzpatrickskintype)

###### Constants

- [case notSet](/documentation/healthkit/hkfitzpatrickskintype/notset)
- [case I](/documentation/healthkit/hkfitzpatrickskintype/i)
- [case II](/documentation/healthkit/hkfitzpatrickskintype/ii)
- [case III](/documentation/healthkit/hkfitzpatrickskintype/iii)
- [case IV](/documentation/healthkit/hkfitzpatrickskintype/iv)
- [case V](/documentation/healthkit/hkfitzpatrickskintype/v)
- [case VI](/documentation/healthkit/hkfitzpatrickskintype/vi)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkfitzpatrickskintype/init(rawvalue:))
- [HKFitzpatrickSkinType](/documentation/healthkit/hkfitzpatrickskintype)

##### Constants

- [case notSet](/documentation/healthkit/hkfitzpatrickskintype/notset)
- [case I](/documentation/healthkit/hkfitzpatrickskintype/i)
- [case II](/documentation/healthkit/hkfitzpatrickskintype/ii)
- [case III](/documentation/healthkit/hkfitzpatrickskintype/iii)
- [case IV](/documentation/healthkit/hkfitzpatrickskintype/iv)
- [case V](/documentation/healthkit/hkfitzpatrickskintype/v)
- [case VI](/documentation/healthkit/hkfitzpatrickskintype/vi)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkfitzpatrickskintype/init(rawvalue:))
- [func wheelchairUse() throws -> HKWheelchairUseObject](/documentation/healthkit/hkhealthstore/wheelchairuse())

#### Possible Values

- [HKWheelchairUseObject](/documentation/healthkit/hkwheelchairuseobject)

##### Accessing Wheelchair Use Data

- [var wheelchairUse: HKWheelchairUse](/documentation/healthkit/hkwheelchairuseobject/wheelchairuse)

###### Valid Wheelchair Use Values

- [HKWheelchairUse](/documentation/healthkit/hkwheelchairuse)

###### Constants

- [case notSet](/documentation/healthkit/hkwheelchairuse/notset)
- [case no](/documentation/healthkit/hkwheelchairuse/no)
- [case yes](/documentation/healthkit/hkwheelchairuse/yes)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkwheelchairuse/init(rawvalue:))
- [HKWheelchairUse](/documentation/healthkit/hkwheelchairuse)

##### Constants

- [case notSet](/documentation/healthkit/hkwheelchairuse/notset)
- [case no](/documentation/healthkit/hkwheelchairuse/no)
- [case yes](/documentation/healthkit/hkwheelchairuse/yes)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkwheelchairuse/init(rawvalue:))

### Working with HealthKit objects

- [func delete(HKObject, withCompletion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/delete(_:withcompletion:)-78l1m)
- [func delete([HKObject], withCompletion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/delete(_:withcompletion:)-17hzm)
- [func deleteObjects(of: HKObjectType, predicate: NSPredicate, withCompletion: (Bool, Int, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/deleteobjects(of:predicate:withcompletion:))
- [func earliestPermittedSampleDate() -> Date](/documentation/healthkit/hkhealthstore/earliestpermittedsampledate())
- [func save(HKObject, withCompletion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/save(_:withcompletion:)-6fmtg)
- [func save([HKObject], withCompletion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/save(_:withcompletion:)-47iwb)

### Accessing the preferred units

- [func preferredUnits(for: Set<HKQuantityType>, completion: ([HKQuantityType : HKUnit], (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/preferredunits(for:completion:))
- [static let HKUserPreferencesDidChange: NSNotification.Name](/documentation/foundation/nsnotification/name-swift.struct/hkuserpreferencesdidchange)

### Managing background delivery

- [func enableBackgroundDelivery(for: HKObjectType, frequency: HKUpdateFrequency, withCompletion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/enablebackgrounddelivery(for:frequency:withcompletion:))
- [com.apple.developer.healthkit.background-delivery](/documentation/bundleresources/entitlements/com.apple.developer.healthkit.background-delivery)
- [HKUpdateFrequency](/documentation/healthkit/hkupdatefrequency)

#### Constants

- [case immediate](/documentation/healthkit/hkupdatefrequency/immediate)
- [case hourly](/documentation/healthkit/hkupdatefrequency/hourly)
- [case daily](/documentation/healthkit/hkupdatefrequency/daily)
- [case weekly](/documentation/healthkit/hkupdatefrequency/weekly)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkupdatefrequency/init(rawvalue:))
- [func disableBackgroundDelivery(for: HKObjectType, withCompletion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/disablebackgrounddelivery(for:withcompletion:))
- [func disableAllBackgroundDelivery(completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/disableallbackgrounddelivery(completion:))

### Managing workouts

- [func splitTotalEnergy(HKQuantity, start: Date, end: Date, resultsHandler: (HKQuantity?, HKQuantity?, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/splittotalenergy(_:start:end:resultshandler:))
- [func recoverActiveWorkoutSession(completion: (HKWorkoutSession?, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/recoveractiveworkoutsession(completion:))

### Managing workout sessions

- [var workoutSessionMirroringStartHandler: ((HKWorkoutSession) -> Void)?](/documentation/healthkit/hkhealthstore/workoutsessionmirroringstarthandler)
- [func startWatchApp(with: HKWorkoutConfiguration, completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/startwatchapp(with:completion:))
- [func pause(HKWorkoutSession)](/documentation/healthkit/hkhealthstore/pause(_:))
- [func resumeWorkoutSession(HKWorkoutSession)](/documentation/healthkit/hkhealthstore/resumeworkoutsession(_:))

### Managing estimates

- [func recalibrateEstimates(sampleType: HKSampleType, date: Date, completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/recalibrateestimates(sampletype:date:completion:))

### Accessing the move mode

- [func activityMoveMode() throws -> HKActivityMoveModeObject](/documentation/healthkit/hkhealthstore/activitymovemode())
- [static let HKUserPreferencesDidChange: NSNotification.Name](/documentation/foundation/nsnotification/name-swift.struct/hkuserpreferencesdidchange)

### Deprecated symbols

- [func add([HKSample], to: HKWorkout, completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/add(_:to:completion:))
- [func start(HKWorkoutSession)](/documentation/healthkit/hkhealthstore/start(_:))
- [func end(HKWorkoutSession)](/documentation/healthkit/hkhealthstore/end(_:))

### Structures

- [HKHealthStore.HKUserPreferencesDidChangeMessage](/documentation/healthkit/hkhealthstore/hkuserpreferencesdidchangemessage) **Beta**

### Instance Methods

- [func relateWorkoutEffortSample(HKSample, with: HKWorkout, activity: HKWorkoutActivity?, completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/relateworkouteffortsample(_:with:activity:completion:))
- [func unrelateWorkoutEffortSample(HKSample, from: HKWorkout, activity: HKWorkoutActivity?, completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkhealthstore/unrelateworkouteffortsample(_:from:activity:completion:))
- [Creating a Mobility Health App](/documentation/healthkit/creating-a-mobility-health-app)
- [Data types](/documentation/healthkit/data-types)

### Object type subclasses

- [HKCharacteristicType](/documentation/healthkit/hkcharacteristictype)

#### Creating Characteristic Types

- [convenience init(HKCharacteristicTypeIdentifier)](/documentation/healthkit/hkcharacteristictype/init(_:))
- [HKQuantityType](/documentation/healthkit/hkquantitytype)

#### Creating Quantity Types

- [convenience init(HKQuantityTypeIdentifier)](/documentation/healthkit/hkquantitytype/init(_:))

#### Accessing Quantity Type Data

- [var aggregationStyle: HKQuantityAggregationStyle](/documentation/healthkit/hkquantitytype/aggregationstyle)
- [HKQuantityAggregationStyle](/documentation/healthkit/hkquantityaggregationstyle)

##### Aggregation Styles

- [case cumulative](/documentation/healthkit/hkquantityaggregationstyle/cumulative)
- [case discreteArithmetic](/documentation/healthkit/hkquantityaggregationstyle/discretearithmetic)
- [case discreteTemporallyWeighted](/documentation/healthkit/hkquantityaggregationstyle/discretetemporallyweighted)
- [case discreteEquivalentContinuousLevel](/documentation/healthkit/hkquantityaggregationstyle/discreteequivalentcontinuouslevel)

##### Deprecated Styles

- [static var discrete: HKQuantityAggregationStyle](/documentation/healthkit/hkquantityaggregationstyle/discrete)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkquantityaggregationstyle/init(rawvalue:))
- [func `is`(compatibleWith: HKUnit) -> Bool](/documentation/healthkit/hkquantitytype/is(compatiblewith:))
- [HKCategoryType](/documentation/healthkit/hkcategorytype)

#### Creating Category Types

- [convenience init(HKCategoryTypeIdentifier)](/documentation/healthkit/hkcategorytype/init(_:))
- [HKCorrelationType](/documentation/healthkit/hkcorrelationtype)

#### Creating Correlation Types

- [convenience init(HKCorrelationTypeIdentifier)](/documentation/healthkit/hkcorrelationtype/init(_:))
- [HKActivitySummaryType](/documentation/healthkit/hkactivitysummarytype)
- [HKAudiogramSampleType](/documentation/healthkit/hkaudiogramsampletype)
- [HKElectrocardiogramType](/documentation/healthkit/hkelectrocardiogramtype)
- [HKSeriesType](/documentation/healthkit/hkseriestype)

#### Accessing Series Types

- [class func workoutRoute() -> Self](/documentation/healthkit/hkseriestype/workoutroute())
- [class func heartbeat() -> Self](/documentation/healthkit/hkseriestype/heartbeat())
- [HKClinicalType](/documentation/healthkit/hkclinicaltype)

#### Creating Clinical Types

- [convenience init(HKClinicalTypeIdentifier)](/documentation/healthkit/hkclinicaltype/init(_:))
- [HKWorkoutType](/documentation/healthkit/hkworkouttype)
- [HKObjectType](/documentation/healthkit/hkobjecttype)

#### Creating quantity types

- [class func quantityType(forIdentifier: HKQuantityTypeIdentifier) -> HKQuantityType?](/documentation/healthkit/hkobjecttype/quantitytype(foridentifier:))
- [HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier)

##### Activity

- [static let stepCount: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/stepcount)
- [static let distanceWalkingRunning: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/distancewalkingrunning)
- [static let runningGroundContactTime: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/runninggroundcontacttime)
- [static let runningPower: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/runningpower)
- [static let runningSpeed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/runningspeed)
- [static let runningStrideLength: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/runningstridelength)
- [static let runningVerticalOscillation: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/runningverticaloscillation)
- [static let distanceCycling: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/distancecycling)
- [static let pushCount: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/pushcount)
- [static let distanceWheelchair: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/distancewheelchair)
- [static let swimmingStrokeCount: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/swimmingstrokecount)
- [static let distanceSwimming: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/distanceswimming)
- [static let distanceDownhillSnowSports: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/distancedownhillsnowsports)
- [static let basalEnergyBurned: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/basalenergyburned)
- [static let activeEnergyBurned: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/activeenergyburned)
- [static let flightsClimbed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/flightsclimbed)
- [static let nikeFuel: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/nikefuel)
- [static let appleExerciseTime: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/appleexercisetime)
- [static let appleMoveTime: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/applemovetime)
- [static let appleStandTime: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/applestandtime)
- [static let vo2Max: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/vo2max)

###### Metadata Keys

- [let HKMetadataKeyVO2MaxTestType: String](/documentation/healthkit/hkmetadatakeyvo2maxtesttype)

###### Valid Test Types

- [HKVO2MaxTestType](/documentation/healthkit/hkvo2maxtesttype)

###### Test Types

- [case maxExercise](/documentation/healthkit/hkvo2maxtesttype/maxexercise)
- [case predictionSubMaxExercise](/documentation/healthkit/hkvo2maxtesttype/predictionsubmaxexercise)
- [case predictionNonExercise](/documentation/healthkit/hkvo2maxtesttype/predictionnonexercise)

###### Enumeration Cases

- [case predictionStepTest](/documentation/healthkit/hkvo2maxtesttype/predictionsteptest)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkvo2maxtesttype/init(rawvalue:))
- [static let crossCountrySkiingSpeed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/crosscountryskiingspeed)
- [static let cyclingCadence: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/cyclingcadence)
- [static let cyclingFunctionalThresholdPower: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/cyclingfunctionalthresholdpower)
- [static let cyclingPower: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/cyclingpower)
- [static let cyclingSpeed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/cyclingspeed)
- [static let distanceCrossCountrySkiing: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/distancecrosscountryskiing)
- [static let distancePaddleSports: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/distancepaddlesports)
- [static let distanceRowing: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/distancerowing)
- [static let distanceSkatingSports: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/distanceskatingsports)
- [static let estimatedWorkoutEffortScore: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/estimatedworkouteffortscore)
- [static let paddleSportsSpeed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/paddlesportsspeed)
- [static let physicalEffort: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/physicaleffort)
- [static let rowingSpeed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/rowingspeed)
- [static let workoutEffortScore: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/workouteffortscore)

##### Body measurements

- [static let height: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/height)
- [static let bodyMass: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bodymass)
- [static let bodyMassIndex: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bodymassindex)
- [static let leanBodyMass: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/leanbodymass)
- [static let bodyFatPercentage: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bodyfatpercentage)
- [static let waistCircumference: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/waistcircumference)
- [static let appleSleepingWristTemperature: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/applesleepingwristtemperature)

##### Reproductive health

- [static let basalBodyTemperature: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/basalbodytemperature)

##### Hearing

- [static let environmentalAudioExposure: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/environmentalaudioexposure)
- [static let environmentalSoundReduction: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/environmentalsoundreduction)
- [static let headphoneAudioExposure: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/headphoneaudioexposure)

##### Vital signs

- [static let heartRate: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/heartrate)

###### Metadata Keys

- [let HKMetadataKeyHeartRateSensorLocation: String](/documentation/healthkit/hkmetadatakeyheartratesensorlocation)

###### Valid Locations

- [HKHeartRateSensorLocation](/documentation/healthkit/hkheartratesensorlocation)

###### Locations

- [case other](/documentation/healthkit/hkheartratesensorlocation/other)
- [case chest](/documentation/healthkit/hkheartratesensorlocation/chest)
- [case wrist](/documentation/healthkit/hkheartratesensorlocation/wrist)
- [case finger](/documentation/healthkit/hkheartratesensorlocation/finger)
- [case hand](/documentation/healthkit/hkheartratesensorlocation/hand)
- [case earLobe](/documentation/healthkit/hkheartratesensorlocation/earlobe)
- [case foot](/documentation/healthkit/hkheartratesensorlocation/foot)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkheartratesensorlocation/init(rawvalue:))
- [let HKMetadataKeyHeartRateMotionContext: String](/documentation/healthkit/hkmetadatakeyheartratemotioncontext)

###### Valid Motion Contexts

- [HKHeartRateMotionContext](/documentation/healthkit/hkheartratemotioncontext)

###### Motion Contextes

- [case active](/documentation/healthkit/hkheartratemotioncontext/active)
- [case notSet](/documentation/healthkit/hkheartratemotioncontext/notset)
- [case sedentary](/documentation/healthkit/hkheartratemotioncontext/sedentary)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkheartratemotioncontext/init(rawvalue:))
- [static let restingHeartRate: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/restingheartrate)
- [static let walkingHeartRateAverage: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/walkingheartrateaverage)
- [static let heartRateVariabilitySDNN: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/heartratevariabilitysdnn)

###### Metadata

- [let HKMetadataKeyAlgorithmVersion: String](/documentation/healthkit/hkmetadatakeyalgorithmversion)
- [static let heartRateRecoveryOneMinute: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/heartraterecoveryoneminute)
- [static let atrialFibrillationBurden: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/atrialfibrillationburden)
- [static let oxygenSaturation: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/oxygensaturation)
- [static let bodyTemperature: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bodytemperature)

###### Metadata Keys

- [let HKMetadataKeyBodyTemperatureSensorLocation: String](/documentation/healthkit/hkmetadatakeybodytemperaturesensorlocation)

###### Valid Locations

- [HKBodyTemperatureSensorLocation](/documentation/healthkit/hkbodytemperaturesensorlocation)

###### Locations

- [case other](/documentation/healthkit/hkbodytemperaturesensorlocation/other)
- [case armpit](/documentation/healthkit/hkbodytemperaturesensorlocation/armpit)
- [case body](/documentation/healthkit/hkbodytemperaturesensorlocation/body)
- [case ear](/documentation/healthkit/hkbodytemperaturesensorlocation/ear)
- [case finger](/documentation/healthkit/hkbodytemperaturesensorlocation/finger)
- [case gastroIntestinal](/documentation/healthkit/hkbodytemperaturesensorlocation/gastrointestinal)
- [case mouth](/documentation/healthkit/hkbodytemperaturesensorlocation/mouth)
- [case rectum](/documentation/healthkit/hkbodytemperaturesensorlocation/rectum)
- [case toe](/documentation/healthkit/hkbodytemperaturesensorlocation/toe)
- [case earDrum](/documentation/healthkit/hkbodytemperaturesensorlocation/eardrum)
- [case temporalArtery](/documentation/healthkit/hkbodytemperaturesensorlocation/temporalartery)
- [case forehead](/documentation/healthkit/hkbodytemperaturesensorlocation/forehead)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkbodytemperaturesensorlocation/init(rawvalue:))
- [static let bloodPressureDiastolic: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bloodpressurediastolic)
- [static let bloodPressureSystolic: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bloodpressuresystolic)
- [static let respiratoryRate: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/respiratoryrate)

##### Lab and test results

- [static let bloodGlucose: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bloodglucose)

###### Metadata Keys

- [let HKMetadataKeyBloodGlucoseMealTime: String](/documentation/healthkit/hkmetadatakeybloodglucosemealtime)

###### Valid Values

- [HKBloodGlucoseMealTime](/documentation/healthkit/hkbloodglucosemealtime)

###### Relative Meal Times

- [case postprandial](/documentation/healthkit/hkbloodglucosemealtime/postprandial)
- [case preprandial](/documentation/healthkit/hkbloodglucosemealtime/preprandial)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkbloodglucosemealtime/init(rawvalue:))
- [static let electrodermalActivity: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/electrodermalactivity)
- [static let forcedExpiratoryVolume1: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/forcedexpiratoryvolume1)
- [static let forcedVitalCapacity: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/forcedvitalcapacity)
- [static let inhalerUsage: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/inhalerusage)
- [static let insulinDelivery: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/insulindelivery)

###### Metadata Keys

- [let HKMetadataKeyInsulinDeliveryReason: String](/documentation/healthkit/hkmetadatakeyinsulindeliveryreason)

###### Valid Delivery Reasons

- [HKInsulinDeliveryReason](/documentation/healthkit/hkinsulindeliveryreason)

###### Delivery Reasons

- [case basal](/documentation/healthkit/hkinsulindeliveryreason/basal)
- [case bolus](/documentation/healthkit/hkinsulindeliveryreason/bolus)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkinsulindeliveryreason/init(rawvalue:))
- [static let numberOfTimesFallen: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/numberoftimesfallen)
- [static let peakExpiratoryFlowRate: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/peakexpiratoryflowrate)
- [static let peripheralPerfusionIndex: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/peripheralperfusionindex)

##### Mindfulness and Sleep

- [static let appleSleepingWristTemperature: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/applesleepingwristtemperature)

##### Nutrition

- [static let dietaryBiotin: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarybiotin)
- [static let dietaryCaffeine: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarycaffeine)
- [static let dietaryCalcium: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarycalcium)
- [static let dietaryCarbohydrates: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarycarbohydrates)
- [static let dietaryChloride: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarychloride)
- [static let dietaryCholesterol: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarycholesterol)
- [static let dietaryChromium: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarychromium)
- [static let dietaryCopper: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarycopper)
- [static let dietaryEnergyConsumed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryenergyconsumed)
- [static let dietaryFatMonounsaturated: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryfatmonounsaturated)
- [static let dietaryFatPolyunsaturated: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryfatpolyunsaturated)
- [static let dietaryFatSaturated: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryfatsaturated)
- [static let dietaryFatTotal: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryfattotal)
- [static let dietaryFiber: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryfiber)
- [static let dietaryFolate: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryfolate)
- [static let dietaryIodine: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryiodine)
- [static let dietaryIron: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryiron)
- [static let dietaryMagnesium: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarymagnesium)
- [static let dietaryManganese: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarymanganese)
- [static let dietaryMolybdenum: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarymolybdenum)
- [static let dietaryNiacin: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryniacin)
- [static let dietaryPantothenicAcid: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarypantothenicacid)
- [static let dietaryPhosphorus: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryphosphorus)
- [static let dietaryPotassium: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarypotassium)
- [static let dietaryProtein: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryprotein)
- [static let dietaryRiboflavin: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryriboflavin)
- [static let dietarySelenium: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryselenium)
- [static let dietarySodium: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarysodium)
- [static let dietarySugar: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarysugar)
- [static let dietaryThiamin: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarythiamin)
- [static let dietaryVitaminA: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitamina)
- [static let dietaryVitaminB12: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitaminb12)
- [static let dietaryVitaminB6: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitaminb6)
- [static let dietaryVitaminC: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitaminc)
- [static let dietaryVitaminD: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitamind)
- [static let dietaryVitaminE: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitamine)
- [static let dietaryVitaminK: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitamink)
- [static let dietaryWater: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarywater)
- [static let dietaryZinc: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryzinc)

##### Alcohol consumption

- [static let bloodAlcoholContent: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bloodalcoholcontent)
- [static let numberOfAlcoholicBeverages: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/numberofalcoholicbeverages)

##### Mobility

- [static let appleWalkingSteadiness: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/applewalkingsteadiness)
- [static let sixMinuteWalkTestDistance: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/sixminutewalktestdistance)

###### Enabling Recalibration

- [com.apple.developer.healthkit.recalibrate-estimates](/documentation/bundleresources/entitlements/com.apple.developer.healthkit.recalibrate-estimates)

###### Accessing Estimate Dates

- [let HKMetadataKeyDateOfEarliestDataUsedForEstimate: String](/documentation/healthkit/hkmetadatakeydateofearliestdatausedforestimate)
- [static let walkingSpeed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/walkingspeed)
- [static let walkingStepLength: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/walkingsteplength)
- [static let walkingAsymmetryPercentage: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/walkingasymmetrypercentage)
- [static let walkingDoubleSupportPercentage: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/walkingdoublesupportpercentage)
- [static let stairAscentSpeed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/stairascentspeed)
- [static let stairDescentSpeed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/stairdescentspeed)

##### UV exposure

- [static let timeInDaylight: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/timeindaylight)
- [static let uvExposure: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/uvexposure)

##### Diving

- [static let underwaterDepth: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/underwaterdepth)
- [static let waterTemperature: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/watertemperature)

##### Initializers

- [init(rawValue: String)](/documentation/healthkit/hkquantitytypeidentifier/init(rawvalue:))

##### Type Properties

- [static let appleSleepingBreathingDisturbances: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/applesleepingbreathingdisturbances)

#### Creating category types

- [class func categoryType(forIdentifier: HKCategoryTypeIdentifier) -> HKCategoryType?](/documentation/healthkit/hkobjecttype/categorytype(foridentifier:))
- [HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier)

##### Activity

- [static let appleStandHour: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/applestandhour)
- [static let lowCardioFitnessEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/lowcardiofitnessevent)

##### Reproductive Health

- [static let menstrualFlow: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/menstrualflow)

###### Metadata Keys

- [let HKMetadataKeyMenstrualCycleStart: String](/documentation/healthkit/hkmetadatakeymenstrualcyclestart)
- [static let intermenstrualBleeding: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/intermenstrualbleeding)
- [static let infrequentMenstrualCycles: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/infrequentmenstrualcycles)
- [static let irregularMenstrualCycles: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/irregularmenstrualcycles)
- [static let persistentIntermenstrualBleeding: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/persistentintermenstrualbleeding)
- [static let prolongedMenstrualPeriods: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/prolongedmenstrualperiods)
- [static let cervicalMucusQuality: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/cervicalmucusquality)
- [static let ovulationTestResult: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/ovulationtestresult)
- [static let progesteroneTestResult: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/progesteronetestresult)
- [static let sexualActivity: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/sexualactivity)

###### Metadata Keys

- [let HKMetadataKeySexualActivityProtectionUsed: String](/documentation/healthkit/hkmetadatakeysexualactivityprotectionused)
- [static let contraceptive: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/contraceptive)
- [static let pregnancy: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/pregnancy)
- [static let pregnancyTestResult: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/pregnancytestresult)
- [static let lactation: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/lactation)

##### Hearing

- [static let environmentalAudioExposureEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/environmentalaudioexposureevent)
- [HKCategoryValueEnvironmentalAudioExposureEvent](/documentation/healthkit/hkcategoryvalueenvironmentalaudioexposureevent)

###### Events

- [case momentaryLimit](/documentation/healthkit/hkcategoryvalueenvironmentalaudioexposureevent/momentarylimit)

###### Metadata Keys

- [let HKMetadataKeyAudioExposureLevel: String](/documentation/healthkit/hkmetadatakeyaudioexposurelevel)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvalueenvironmentalaudioexposureevent/init(rawvalue:))
- [static let headphoneAudioExposureEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/headphoneaudioexposureevent)

###### Metadata Keys

- [let HKMetadataKeyAudioExposureLevel: String](/documentation/healthkit/hkmetadatakeyaudioexposurelevel)
- [let HKMetadataKeyAudioExposureDuration: String](/documentation/healthkit/hkmetadatakeyaudioexposureduration)
- [HKCategoryValueHeadphoneAudioExposureEvent](/documentation/healthkit/hkcategoryvalueheadphoneaudioexposureevent)

###### Events

- [case sevenDayLimit](/documentation/healthkit/hkcategoryvalueheadphoneaudioexposureevent/sevendaylimit)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvalueheadphoneaudioexposureevent/init(rawvalue:))
- [static let audioExposureEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/audioexposureevent)

###### Metadata Keys

- [let HKMetadataKeyAudioExposureLevel: String](/documentation/healthkit/hkmetadatakeyaudioexposurelevel)

##### Vital Signs

- [static let lowHeartRateEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/lowheartrateevent)

###### Metadata Keys

- [let HKMetadataKeyHeartRateEventThreshold: String](/documentation/healthkit/hkmetadatakeyheartrateeventthreshold)
- [static let highHeartRateEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/highheartrateevent)

###### Metadata Keys

- [let HKMetadataKeyHeartRateEventThreshold: String](/documentation/healthkit/hkmetadatakeyheartrateeventthreshold)
- [static let irregularHeartRhythmEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/irregularheartrhythmevent)

##### Mobility

- [static let appleWalkingSteadinessEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/applewalkingsteadinessevent)

##### Symptoms

- [Symptom Type Identifiers](/documentation/healthkit/symptom-type-identifiers)

###### Abdominal and Gastrointestinal

- [static let abdominalCramps: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/abdominalcramps)
- [static let bloating: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/bloating)
- [static let constipation: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/constipation)
- [static let diarrhea: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/diarrhea)
- [static let heartburn: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/heartburn)
- [static let nausea: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/nausea)
- [static let vomiting: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/vomiting)

###### Constitutional

- [static let appetiteChanges: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/appetitechanges)
- [static let chills: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/chills)
- [static let dizziness: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/dizziness)
- [static let fainting: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/fainting)
- [static let fatigue: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/fatigue)
- [static let fever: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/fever)
- [static let generalizedBodyAche: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/generalizedbodyache)
- [static let hotFlashes: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/hotflashes)

###### Heart and Lung

- [static let chestTightnessOrPain: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/chesttightnessorpain)
- [static let coughing: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/coughing)
- [static let rapidPoundingOrFlutteringHeartbeat: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/rapidpoundingorflutteringheartbeat)
- [static let shortnessOfBreath: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/shortnessofbreath)
- [static let skippedHeartbeat: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/skippedheartbeat)
- [static let wheezing: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/wheezing)

###### Musculoskeletal

- [static let lowerBackPain: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/lowerbackpain)

###### Neurological

- [static let headache: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/headache)
- [static let memoryLapse: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/memorylapse)
- [static let moodChanges: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/moodchanges)

###### Nose and Throat

- [static let lossOfSmell: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/lossofsmell)
- [static let lossOfTaste: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/lossoftaste)
- [static let runnyNose: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/runnynose)
- [static let soreThroat: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/sorethroat)
- [static let sinusCongestion: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/sinuscongestion)

###### Reproduction

- [static let breastPain: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/breastpain)
- [static let pelvicPain: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/pelvicpain)
- [static let vaginalDryness: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/vaginaldryness)

###### Skin and Hair

- [static let acne: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/acne)
- [static let drySkin: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/dryskin)
- [static let hairLoss: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/hairloss)

###### Sleep

- [static let nightSweats: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/nightsweats)
- [static let sleepChanges: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/sleepchanges)

###### Urinary

- [static let bladderIncontinence: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/bladderincontinence)

##### Mindfulness and Sleep

- [static let mindfulSession: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/mindfulsession)
- [static let sleepAnalysis: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/sleepanalysis)

##### Self Care

- [static let toothbrushingEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/toothbrushingevent)
- [static let handwashingEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/handwashingevent)

##### Initializers

- [init(rawValue: String)](/documentation/healthkit/hkcategorytypeidentifier/init(rawvalue:))

##### Type Properties

- [static let hypertensionEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/hypertensionevent)

#### Creating characteristic types

- [class func characteristicType(forIdentifier: HKCharacteristicTypeIdentifier) -> HKCharacteristicType?](/documentation/healthkit/hkobjecttype/characteristictype(foridentifier:))
- [HKCharacteristicTypeIdentifier](/documentation/healthkit/hkcharacteristictypeidentifier)

##### Characteristic Types

- [static let activityMoveMode: HKCharacteristicTypeIdentifier](/documentation/healthkit/hkcharacteristictypeidentifier/activitymovemode)
- [static let biologicalSex: HKCharacteristicTypeIdentifier](/documentation/healthkit/hkcharacteristictypeidentifier/biologicalsex)
- [static let bloodType: HKCharacteristicTypeIdentifier](/documentation/healthkit/hkcharacteristictypeidentifier/bloodtype)
- [static let dateOfBirth: HKCharacteristicTypeIdentifier](/documentation/healthkit/hkcharacteristictypeidentifier/dateofbirth)
- [static let fitzpatrickSkinType: HKCharacteristicTypeIdentifier](/documentation/healthkit/hkcharacteristictypeidentifier/fitzpatrickskintype)
- [static let wheelchairUse: HKCharacteristicTypeIdentifier](/documentation/healthkit/hkcharacteristictypeidentifier/wheelchairuse)

##### Initializers

- [init(rawValue: String)](/documentation/healthkit/hkcharacteristictypeidentifier/init(rawvalue:))

#### Creating correlation types

- [class func correlationType(forIdentifier: HKCorrelationTypeIdentifier) -> HKCorrelationType?](/documentation/healthkit/hkobjecttype/correlationtype(foridentifier:))
- [HKCorrelationTypeIdentifier](/documentation/healthkit/hkcorrelationtypeidentifier)

##### Correlation Types

- [static let bloodPressure: HKCorrelationTypeIdentifier](/documentation/healthkit/hkcorrelationtypeidentifier/bloodpressure)
- [static let food: HKCorrelationTypeIdentifier](/documentation/healthkit/hkcorrelationtypeidentifier/food)

##### Initializers

- [init(rawValue: String)](/documentation/healthkit/hkcorrelationtypeidentifier/init(rawvalue:))

#### Creating workout types

- [class func workoutType() -> HKWorkoutType](/documentation/healthkit/hkobjecttype/workouttype())

#### Creating activity summary types

- [class func activitySummaryType() -> HKActivitySummaryType](/documentation/healthkit/hkobjecttype/activitysummarytype())

#### Creating electrocardiogram types

- [class func electrocardiogramType() -> HKElectrocardiogramType](/documentation/healthkit/hkobjecttype/electrocardiogramtype())

#### Creating audiogram sample types

- [class func audiogramSampleType() -> HKAudiogramSampleType](/documentation/healthkit/hkobjecttype/audiogramsampletype())

#### Creating vision prescription types

- [class func visionPrescriptionType() -> HKPrescriptionType](/documentation/healthkit/hkobjecttype/visionprescriptiontype())

#### Creating clinical record types

- [class func clinicalType(forIdentifier: HKClinicalTypeIdentifier) -> HKClinicalType?](/documentation/healthkit/hkobjecttype/clinicaltype(foridentifier:))

#### Creating series types

- [class func seriesType(forIdentifier: String) -> HKSeriesType?](/documentation/healthkit/hkobjecttype/seriestype(foridentifier:))

#### Creating document types

- [class func documentType(forIdentifier: HKDocumentTypeIdentifier) -> HKDocumentType?](/documentation/healthkit/hkobjecttype/documenttype(foridentifier:))
- [HKDocumentTypeIdentifier](/documentation/healthkit/hkdocumenttypeidentifier)

##### Document Types

- [static let CDA: HKDocumentTypeIdentifier](/documentation/healthkit/hkdocumenttypeidentifier/cda)

##### Initializers

- [init(rawValue: String)](/documentation/healthkit/hkdocumenttypeidentifier/init(rawvalue:))

#### Getting property data

- [var identifier: String](/documentation/healthkit/hkobjecttype/identifier)
- [func requiresPerObjectAuthorization() -> Bool](/documentation/healthkit/hkobjecttype/requiresperobjectauthorization())

#### Type Methods

- [class func medicationDoseEventType() -> HKMedicationDoseEventType](/documentation/healthkit/hkobjecttype/medicationdoseeventtype())
- [class func stateOfMindType() -> HKStateOfMindType](/documentation/healthkit/hkobjecttype/stateofmindtype())
- [class func userAnnotatedMedicationType() -> HKUserAnnotatedMedicationType](/documentation/healthkit/hkobjecttype/userannotatedmedicationtype())
- [HKSampleType](/documentation/healthkit/hksampletype)

#### Checking the Duration Restriction

- [var isMinimumDurationRestricted: Bool](/documentation/healthkit/hksampletype/isminimumdurationrestricted)
- [var minimumAllowedDuration: TimeInterval](/documentation/healthkit/hksampletype/minimumallowedduration)
- [var isMaximumDurationRestricted: Bool](/documentation/healthkit/hksampletype/ismaximumdurationrestricted)
- [var maximumAllowedDuration: TimeInterval](/documentation/healthkit/hksampletype/maximumallowedduration)

#### Checking on Recalibrating Estimates

- [var allowsRecalibrationForEstimates: Bool](/documentation/healthkit/hksampletype/allowsrecalibrationforestimates)

### Characteristic identifiers

- [static let activityMoveMode: HKCharacteristicTypeIdentifier](/documentation/healthkit/hkcharacteristictypeidentifier/activitymovemode)
- [static let biologicalSex: HKCharacteristicTypeIdentifier](/documentation/healthkit/hkcharacteristictypeidentifier/biologicalsex)
- [static let bloodType: HKCharacteristicTypeIdentifier](/documentation/healthkit/hkcharacteristictypeidentifier/bloodtype)
- [static let dateOfBirth: HKCharacteristicTypeIdentifier](/documentation/healthkit/hkcharacteristictypeidentifier/dateofbirth)
- [static let fitzpatrickSkinType: HKCharacteristicTypeIdentifier](/documentation/healthkit/hkcharacteristictypeidentifier/fitzpatrickskintype)
- [static let wheelchairUse: HKCharacteristicTypeIdentifier](/documentation/healthkit/hkcharacteristictypeidentifier/wheelchairuse)

### Activity

- [static let stepCount: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/stepcount)
- [static let distanceWalkingRunning: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/distancewalkingrunning)
- [static let runningSpeed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/runningspeed)
- [static let runningStrideLength: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/runningstridelength)
- [static let runningPower: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/runningpower)
- [static let runningGroundContactTime: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/runninggroundcontacttime)
- [static let runningVerticalOscillation: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/runningverticaloscillation)
- [static let distanceCycling: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/distancecycling)
- [static let pushCount: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/pushcount)
- [static let distanceWheelchair: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/distancewheelchair)
- [static let swimmingStrokeCount: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/swimmingstrokecount)
- [static let distanceSwimming: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/distanceswimming)
- [static let distanceDownhillSnowSports: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/distancedownhillsnowsports)
- [static let basalEnergyBurned: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/basalenergyburned)
- [static let activeEnergyBurned: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/activeenergyburned)
- [static let flightsClimbed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/flightsclimbed)
- [static let nikeFuel: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/nikefuel)
- [static let appleExerciseTime: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/appleexercisetime)
- [static let appleMoveTime: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/applemovetime)
- [static let appleStandHour: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/applestandhour)
- [static let appleStandTime: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/applestandtime)
- [static let vo2Max: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/vo2max)

#### Metadata Keys

- [let HKMetadataKeyVO2MaxTestType: String](/documentation/healthkit/hkmetadatakeyvo2maxtesttype)

##### Valid Test Types

- [HKVO2MaxTestType](/documentation/healthkit/hkvo2maxtesttype)

###### Test Types

- [case maxExercise](/documentation/healthkit/hkvo2maxtesttype/maxexercise)
- [case predictionSubMaxExercise](/documentation/healthkit/hkvo2maxtesttype/predictionsubmaxexercise)
- [case predictionNonExercise](/documentation/healthkit/hkvo2maxtesttype/predictionnonexercise)

###### Enumeration Cases

- [case predictionStepTest](/documentation/healthkit/hkvo2maxtesttype/predictionsteptest)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkvo2maxtesttype/init(rawvalue:))
- [static let lowCardioFitnessEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/lowcardiofitnessevent)

### Attachments

- [HKAttachment](/documentation/healthkit/hkattachment)

#### Accessing attachment data

- [var name: String](/documentation/healthkit/hkattachment/name)
- [var identifier: UUID](/documentation/healthkit/hkattachment/identifier)
- [var contentType: UTType](/documentation/healthkit/hkattachment/contenttype)
- [var size: Int](/documentation/healthkit/hkattachment/size)
- [var creationDate: Date](/documentation/healthkit/hkattachment/creationdate)
- [var metadata: [String : Any]?](/documentation/healthkit/hkattachment/metadata)
- [HKAttachment.AsyncBytes](/documentation/healthkit/hkattachment/asyncbytes)
- [HKAttachmentStore](/documentation/healthkit/hkattachmentstore)

#### Creating an attachment store

- [init(healthStore: HKHealthStore)](/documentation/healthkit/hkattachmentstore/init(healthstore:))

#### Adding attachments

- [func addAttachment(to: HKObject, name: String, contentType: UTType, url: URL, metadata: [String : Any]) async throws -> HKAttachment](/documentation/healthkit/hkattachmentstore/addattachment(to:name:contenttype:url:metadata:))
- [func addAttachment(to: HKObject, name: String, contentType: UTType, url: URL, metadata: [String : Any], completion: (HKAttachment?, (any Error)?) -> Void)](/documentation/healthkit/hkattachmentstore/addattachment(to:name:contenttype:url:metadata:completion:))

#### Accessing attachments

- [func getAttachments(for: HKObject, completion: ([HKAttachment]?, (any Error)?) -> Void)](/documentation/healthkit/hkattachmentstore/getattachments(for:completion:))
- [func dataReader(for: HKAttachment) -> HKAttachmentDataReader](/documentation/healthkit/hkattachmentstore/datareader(for:))
- [func getData(for: HKAttachment, completion: (Data?, (any Error)?) -> Void) -> Progress](/documentation/healthkit/hkattachmentstore/getdata(for:completion:))
- [func streamData(for: HKAttachment, dataHandler: (Data?, (any Error)?, Bool) -> Void) -> Progress](/documentation/healthkit/hkattachmentstore/streamdata(for:datahandler:))

#### Removing attachments

- [func removeAttachment(HKAttachment, from: HKObject, completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkattachmentstore/removeattachment(_:from:completion:))
- [HKAttachmentDataReader](/documentation/healthkit/hkattachmentdatareader)

#### Reading attachment data

- [var data: Data](/documentation/healthkit/hkattachmentdatareader/data)
- [var bytes: HKAttachment.AsyncBytes](/documentation/healthkit/hkattachmentdatareader/bytes)
- [var progress: Progress](/documentation/healthkit/hkattachmentdatareader/progress)

#### Accessing the attachment object

- [var attachment: HKAttachment](/documentation/healthkit/hkattachmentdatareader/attachment)

### Body measurements

- [static let height: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/height)
- [static let bodyMass: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bodymass)
- [static let bodyMassIndex: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bodymassindex)
- [static let leanBodyMass: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/leanbodymass)
- [static let bodyFatPercentage: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bodyfatpercentage)
- [static let waistCircumference: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/waistcircumference)

### Reproductive health

- [static let menstrualFlow: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/menstrualflow)

#### Metadata Keys

- [let HKMetadataKeyMenstrualCycleStart: String](/documentation/healthkit/hkmetadatakeymenstrualcyclestart)
- [static let intermenstrualBleeding: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/intermenstrualbleeding)
- [static let infrequentMenstrualCycles: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/infrequentmenstrualcycles)
- [static let irregularMenstrualCycles: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/irregularmenstrualcycles)
- [static let persistentIntermenstrualBleeding: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/persistentintermenstrualbleeding)
- [static let prolongedMenstrualPeriods: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/prolongedmenstrualperiods)
- [static let basalBodyTemperature: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/basalbodytemperature)
- [static let cervicalMucusQuality: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/cervicalmucusquality)
- [static let ovulationTestResult: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/ovulationtestresult)
- [static let progesteroneTestResult: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/progesteronetestresult)
- [static let sexualActivity: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/sexualactivity)

#### Metadata Keys

- [let HKMetadataKeySexualActivityProtectionUsed: String](/documentation/healthkit/hkmetadatakeysexualactivityprotectionused)
- [static let contraceptive: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/contraceptive)
- [static let pregnancy: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/pregnancy)
- [static let pregnancyTestResult: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/pregnancytestresult)
- [static let lactation: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/lactation)

### Hearing

- [static let environmentalAudioExposure: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/environmentalaudioexposure)
- [static let headphoneAudioExposure: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/headphoneaudioexposure)
- [static let environmentalAudioExposureEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/environmentalaudioexposureevent)
- [static let headphoneAudioExposureEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/headphoneaudioexposureevent)

#### Metadata Keys

- [let HKMetadataKeyAudioExposureLevel: String](/documentation/healthkit/hkmetadatakeyaudioexposurelevel)
- [let HKMetadataKeyAudioExposureDuration: String](/documentation/healthkit/hkmetadatakeyaudioexposureduration)
- [static let audioExposureEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/audioexposureevent)

#### Metadata Keys

- [let HKMetadataKeyAudioExposureLevel: String](/documentation/healthkit/hkmetadatakeyaudioexposurelevel)

### Vital signs

- [static let heartRate: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/heartrate)

#### Metadata Keys

- [let HKMetadataKeyHeartRateSensorLocation: String](/documentation/healthkit/hkmetadatakeyheartratesensorlocation)

##### Valid Locations

- [HKHeartRateSensorLocation](/documentation/healthkit/hkheartratesensorlocation)

###### Locations

- [case other](/documentation/healthkit/hkheartratesensorlocation/other)
- [case chest](/documentation/healthkit/hkheartratesensorlocation/chest)
- [case wrist](/documentation/healthkit/hkheartratesensorlocation/wrist)
- [case finger](/documentation/healthkit/hkheartratesensorlocation/finger)
- [case hand](/documentation/healthkit/hkheartratesensorlocation/hand)
- [case earLobe](/documentation/healthkit/hkheartratesensorlocation/earlobe)
- [case foot](/documentation/healthkit/hkheartratesensorlocation/foot)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkheartratesensorlocation/init(rawvalue:))
- [let HKMetadataKeyHeartRateMotionContext: String](/documentation/healthkit/hkmetadatakeyheartratemotioncontext)

##### Valid Motion Contexts

- [HKHeartRateMotionContext](/documentation/healthkit/hkheartratemotioncontext)

###### Motion Contextes

- [case active](/documentation/healthkit/hkheartratemotioncontext/active)
- [case notSet](/documentation/healthkit/hkheartratemotioncontext/notset)
- [case sedentary](/documentation/healthkit/hkheartratemotioncontext/sedentary)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkheartratemotioncontext/init(rawvalue:))
- [static let lowHeartRateEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/lowheartrateevent)

#### Metadata Keys

- [let HKMetadataKeyHeartRateEventThreshold: String](/documentation/healthkit/hkmetadatakeyheartrateeventthreshold)
- [static let highHeartRateEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/highheartrateevent)

#### Metadata Keys

- [let HKMetadataKeyHeartRateEventThreshold: String](/documentation/healthkit/hkmetadatakeyheartrateeventthreshold)
- [static let irregularHeartRhythmEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/irregularheartrhythmevent)
- [static let restingHeartRate: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/restingheartrate)
- [static let heartRateVariabilitySDNN: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/heartratevariabilitysdnn)

#### Metadata

- [let HKMetadataKeyAlgorithmVersion: String](/documentation/healthkit/hkmetadatakeyalgorithmversion)
- [static let heartRateRecoveryOneMinute: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/heartraterecoveryoneminute)
- [static let atrialFibrillationBurden: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/atrialfibrillationburden)
- [static let walkingHeartRateAverage: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/walkingheartrateaverage)
- [let HKDataTypeIdentifierHeartbeatSeries: String](/documentation/healthkit/hkdatatypeidentifierheartbeatseries)
- [HKElectrocardiogramType](/documentation/healthkit/hkelectrocardiogramtype)
- [static let oxygenSaturation: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/oxygensaturation)
- [static let bodyTemperature: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bodytemperature)

#### Metadata Keys

- [let HKMetadataKeyBodyTemperatureSensorLocation: String](/documentation/healthkit/hkmetadatakeybodytemperaturesensorlocation)

##### Valid Locations

- [HKBodyTemperatureSensorLocation](/documentation/healthkit/hkbodytemperaturesensorlocation)

###### Locations

- [case other](/documentation/healthkit/hkbodytemperaturesensorlocation/other)
- [case armpit](/documentation/healthkit/hkbodytemperaturesensorlocation/armpit)
- [case body](/documentation/healthkit/hkbodytemperaturesensorlocation/body)
- [case ear](/documentation/healthkit/hkbodytemperaturesensorlocation/ear)
- [case finger](/documentation/healthkit/hkbodytemperaturesensorlocation/finger)
- [case gastroIntestinal](/documentation/healthkit/hkbodytemperaturesensorlocation/gastrointestinal)
- [case mouth](/documentation/healthkit/hkbodytemperaturesensorlocation/mouth)
- [case rectum](/documentation/healthkit/hkbodytemperaturesensorlocation/rectum)
- [case toe](/documentation/healthkit/hkbodytemperaturesensorlocation/toe)
- [case earDrum](/documentation/healthkit/hkbodytemperaturesensorlocation/eardrum)
- [case temporalArtery](/documentation/healthkit/hkbodytemperaturesensorlocation/temporalartery)
- [case forehead](/documentation/healthkit/hkbodytemperaturesensorlocation/forehead)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkbodytemperaturesensorlocation/init(rawvalue:))
- [static let bloodPressure: HKCorrelationTypeIdentifier](/documentation/healthkit/hkcorrelationtypeidentifier/bloodpressure)
- [static let bloodPressureSystolic: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bloodpressuresystolic)
- [static let bloodPressureDiastolic: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bloodpressurediastolic)
- [static let respiratoryRate: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/respiratoryrate)

### Nutrition

- [Nutrition Type Identifiers](/documentation/healthkit/nutrition-type-identifiers)

#### Essentials

- [static let food: HKCorrelationTypeIdentifier](/documentation/healthkit/hkcorrelationtypeidentifier/food)
- [let HKMetadataKeyFoodType: String](/documentation/healthkit/hkmetadatakeyfoodtype)

#### Macronutrients

- [static let dietaryEnergyConsumed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryenergyconsumed)
- [static let dietaryCarbohydrates: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarycarbohydrates)
- [static let dietaryFiber: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryfiber)
- [static let dietarySugar: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarysugar)
- [static let dietaryFatTotal: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryfattotal)
- [static let dietaryFatMonounsaturated: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryfatmonounsaturated)
- [static let dietaryFatPolyunsaturated: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryfatpolyunsaturated)
- [static let dietaryFatSaturated: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryfatsaturated)
- [static let dietaryCholesterol: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarycholesterol)
- [static let dietaryProtein: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryprotein)

#### Vitamins

- [static let dietaryVitaminA: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitamina)
- [static let dietaryThiamin: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarythiamin)
- [static let dietaryRiboflavin: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryriboflavin)
- [static let dietaryNiacin: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryniacin)
- [static let dietaryPantothenicAcid: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarypantothenicacid)
- [static let dietaryVitaminB6: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitaminb6)
- [static let dietaryBiotin: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarybiotin)
- [static let dietaryVitaminB12: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitaminb12)
- [static let dietaryVitaminC: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitaminc)
- [static let dietaryVitaminD: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitamind)
- [static let dietaryVitaminE: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitamine)
- [static let dietaryVitaminK: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitamink)
- [static let dietaryFolate: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryfolate)

#### Minerals

- [static let dietaryCalcium: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarycalcium)
- [static let dietaryChloride: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarychloride)
- [static let dietaryIron: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryiron)
- [static let dietaryMagnesium: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarymagnesium)
- [static let dietaryPhosphorus: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryphosphorus)
- [static let dietaryPotassium: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarypotassium)
- [static let dietarySodium: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarysodium)
- [static let dietaryZinc: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryzinc)

#### Hydration

- [static let dietaryWater: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarywater)

#### Caffeination

- [static let dietaryCaffeine: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarycaffeine)

#### Ultratrace Minerals

- [static let dietaryChromium: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarychromium)
- [static let dietaryCopper: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarycopper)
- [static let dietaryIodine: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryiodine)
- [static let dietaryManganese: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarymanganese)
- [static let dietaryMolybdenum: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietarymolybdenum)
- [static let dietarySelenium: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/dietaryselenium)

### Alcohol consumption

- [static let bloodAlcoholContent: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bloodalcoholcontent)
- [static let numberOfAlcoholicBeverages: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/numberofalcoholicbeverages)

### Mobility

- [static let appleWalkingSteadiness: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/applewalkingsteadiness)
- [static let appleWalkingSteadinessEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/applewalkingsteadinessevent)
- [static let sixMinuteWalkTestDistance: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/sixminutewalktestdistance)

#### Enabling Recalibration

- [com.apple.developer.healthkit.recalibrate-estimates](/documentation/bundleresources/entitlements/com.apple.developer.healthkit.recalibrate-estimates)

#### Accessing Estimate Dates

- [let HKMetadataKeyDateOfEarliestDataUsedForEstimate: String](/documentation/healthkit/hkmetadatakeydateofearliestdatausedforestimate)
- [static let walkingSpeed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/walkingspeed)
- [static let walkingStepLength: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/walkingsteplength)
- [static let walkingAsymmetryPercentage: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/walkingasymmetrypercentage)
- [static let walkingDoubleSupportPercentage: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/walkingdoublesupportpercentage)
- [static let stairAscentSpeed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/stairascentspeed)
- [static let stairDescentSpeed: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/stairdescentspeed)

### Symptoms

- [Symptom Type Identifiers](/documentation/healthkit/symptom-type-identifiers)

#### Abdominal and Gastrointestinal

- [static let abdominalCramps: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/abdominalcramps)
- [static let bloating: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/bloating)
- [static let constipation: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/constipation)
- [static let diarrhea: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/diarrhea)
- [static let heartburn: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/heartburn)
- [static let nausea: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/nausea)
- [static let vomiting: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/vomiting)

#### Constitutional

- [static let appetiteChanges: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/appetitechanges)
- [static let chills: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/chills)
- [static let dizziness: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/dizziness)
- [static let fainting: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/fainting)
- [static let fatigue: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/fatigue)
- [static let fever: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/fever)
- [static let generalizedBodyAche: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/generalizedbodyache)
- [static let hotFlashes: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/hotflashes)

#### Heart and Lung

- [static let chestTightnessOrPain: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/chesttightnessorpain)
- [static let coughing: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/coughing)
- [static let rapidPoundingOrFlutteringHeartbeat: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/rapidpoundingorflutteringheartbeat)
- [static let shortnessOfBreath: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/shortnessofbreath)
- [static let skippedHeartbeat: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/skippedheartbeat)
- [static let wheezing: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/wheezing)

#### Musculoskeletal

- [static let lowerBackPain: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/lowerbackpain)

#### Neurological

- [static let headache: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/headache)
- [static let memoryLapse: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/memorylapse)
- [static let moodChanges: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/moodchanges)

#### Nose and Throat

- [static let lossOfSmell: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/lossofsmell)
- [static let lossOfTaste: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/lossoftaste)
- [static let runnyNose: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/runnynose)
- [static let soreThroat: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/sorethroat)
- [static let sinusCongestion: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/sinuscongestion)

#### Reproduction

- [static let breastPain: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/breastpain)
- [static let pelvicPain: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/pelvicpain)
- [static let vaginalDryness: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/vaginaldryness)

#### Skin and Hair

- [static let acne: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/acne)
- [static let drySkin: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/dryskin)
- [static let hairLoss: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/hairloss)

#### Sleep

- [static let nightSweats: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/nightsweats)
- [static let sleepChanges: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/sleepchanges)

#### Urinary

- [static let bladderIncontinence: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/bladderincontinence)

### Lab and test results

- [static let bloodAlcoholContent: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bloodalcoholcontent)
- [static let bloodGlucose: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/bloodglucose)

#### Metadata Keys

- [let HKMetadataKeyBloodGlucoseMealTime: String](/documentation/healthkit/hkmetadatakeybloodglucosemealtime)

##### Valid Values

- [HKBloodGlucoseMealTime](/documentation/healthkit/hkbloodglucosemealtime)

###### Relative Meal Times

- [case postprandial](/documentation/healthkit/hkbloodglucosemealtime/postprandial)
- [case preprandial](/documentation/healthkit/hkbloodglucosemealtime/preprandial)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkbloodglucosemealtime/init(rawvalue:))
- [static let electrodermalActivity: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/electrodermalactivity)
- [static let forcedExpiratoryVolume1: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/forcedexpiratoryvolume1)
- [static let forcedVitalCapacity: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/forcedvitalcapacity)
- [static let inhalerUsage: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/inhalerusage)
- [static let insulinDelivery: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/insulindelivery)

#### Metadata Keys

- [let HKMetadataKeyInsulinDeliveryReason: String](/documentation/healthkit/hkmetadatakeyinsulindeliveryreason)

##### Valid Delivery Reasons

- [HKInsulinDeliveryReason](/documentation/healthkit/hkinsulindeliveryreason)

###### Delivery Reasons

- [case basal](/documentation/healthkit/hkinsulindeliveryreason/basal)
- [case bolus](/documentation/healthkit/hkinsulindeliveryreason/bolus)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkinsulindeliveryreason/init(rawvalue:))
- [static let numberOfTimesFallen: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/numberoftimesfallen)
- [static let peakExpiratoryFlowRate: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/peakexpiratoryflowrate)
- [static let peripheralPerfusionIndex: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/peripheralperfusionindex)

### Mindfulness and sleep

- [static let mindfulSession: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/mindfulsession)
- [static let sleepAnalysis: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/sleepanalysis)
- [static let appleSleepingWristTemperature: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/applesleepingwristtemperature)
- [HKAppleSleepingBreathingDisturbancesClassification](/documentation/healthkit/hkapplesleepingbreathingdisturbancesclassification)

#### Enumeration Cases

- [case elevated](/documentation/healthkit/hkapplesleepingbreathingdisturbancesclassification/elevated)
- [case notElevated](/documentation/healthkit/hkapplesleepingbreathingdisturbancesclassification/notelevated)

#### Instance Properties

- [var minimum: HKQuantity](/documentation/healthkit/hkapplesleepingbreathingdisturbancesclassification/minimum)

#### Initializers

- [init?(classifying: HKQuantity)](/documentation/healthkit/hkapplesleepingbreathingdisturbancesclassification/init(classifying:))
- [init?(rawValue: Int)](/documentation/healthkit/hkapplesleepingbreathingdisturbancesclassification/init(rawvalue:))

#### Default Implementations

- [CaseIterable Implementations](/documentation/healthkit/hkapplesleepingbreathingdisturbancesclassification/caseiterable-implementations)

##### Type Properties

- [static var allCases: [HKAppleSleepingBreathingDisturbancesClassification]](/documentation/healthkit/hkapplesleepingbreathingdisturbancesclassification/allcases)

### Self care

- [static let toothbrushingEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/toothbrushingevent)
- [static let handwashingEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/handwashingevent)

### Workouts

- [let HKWorkoutTypeIdentifier: String](/documentation/healthkit/hkworkouttypeidentifier)
- [let HKWorkoutRouteTypeIdentifier: String](/documentation/healthkit/hkworkoutroutetypeidentifier)

### Clinical records

- [HKClinicalTypeIdentifier](/documentation/healthkit/hkclinicaltypeidentifier)

#### Clinical Record Type Identifiers

- [static let allergyRecord: HKClinicalTypeIdentifier](/documentation/healthkit/hkclinicaltypeidentifier/allergyrecord)
- [static let clinicalNoteRecord: HKClinicalTypeIdentifier](/documentation/healthkit/hkclinicaltypeidentifier/clinicalnoterecord)
- [static let conditionRecord: HKClinicalTypeIdentifier](/documentation/healthkit/hkclinicaltypeidentifier/conditionrecord)
- [static let immunizationRecord: HKClinicalTypeIdentifier](/documentation/healthkit/hkclinicaltypeidentifier/immunizationrecord)
- [static let labResultRecord: HKClinicalTypeIdentifier](/documentation/healthkit/hkclinicaltypeidentifier/labresultrecord)
- [static let medicationRecord: HKClinicalTypeIdentifier](/documentation/healthkit/hkclinicaltypeidentifier/medicationrecord)
- [static let procedureRecord: HKClinicalTypeIdentifier](/documentation/healthkit/hkclinicaltypeidentifier/procedurerecord)
- [static let vitalSignRecord: HKClinicalTypeIdentifier](/documentation/healthkit/hkclinicaltypeidentifier/vitalsignrecord)
- [static let coverageRecord: HKClinicalTypeIdentifier](/documentation/healthkit/hkclinicaltypeidentifier/coveragerecord)

#### Initializers

- [init(rawValue: String)](/documentation/healthkit/hkclinicaltypeidentifier/init(rawvalue:))

### UV exposure

- [static let uvExposure: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/uvexposure)

### Vision

- [let HKVisionPrescriptionTypeIdentifier: String](/documentation/healthkit/hkvisionprescriptiontypeidentifier)

### Diving

- [static let underwaterDepth: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/underwaterdepth)
- [static let waterTemperature: HKQuantityTypeIdentifier](/documentation/healthkit/hkquantitytypeidentifier/watertemperature)

### Utilities

- [BufferedAsyncByteIterator](/documentation/healthkit/bufferedasyncbyteiterator)
- [Samples](/documentation/healthkit/samples)

### Essentials

- [Saving data to HealthKit](/documentation/healthkit/saving-data-to-healthkit)
- [Reading and Writing HealthKit Series Data](/documentation/healthkit/reading-and-writing-healthkit-series-data)

### Basic samples

- [HKCumulativeQuantitySample](/documentation/healthkit/hkcumulativequantitysample)

#### Accessing Calculated Data

- [var sumQuantity: HKQuantity](/documentation/healthkit/hkcumulativequantitysample/sumquantity)
- [HKDiscreteQuantitySample](/documentation/healthkit/hkdiscretequantitysample)

#### Accessing Calculated Values

- [var averageQuantity: HKQuantity](/documentation/healthkit/hkdiscretequantitysample/averagequantity)
- [var maximumQuantity: HKQuantity](/documentation/healthkit/hkdiscretequantitysample/maximumquantity)
- [var minimumQuantity: HKQuantity](/documentation/healthkit/hkdiscretequantitysample/minimumquantity)
- [var mostRecentQuantity: HKQuantity](/documentation/healthkit/hkdiscretequantitysample/mostrecentquantity)
- [var mostRecentQuantityDateInterval: DateInterval](/documentation/healthkit/hkdiscretequantitysample/mostrecentquantitydateinterval)

#### Specifying Predicate Key Paths

- [let HKPredicateKeyPathMin: String](/documentation/healthkit/hkpredicatekeypathmin)
- [let HKPredicateKeyPathAverage: String](/documentation/healthkit/hkpredicatekeypathaverage)
- [let HKPredicateKeyPathMax: String](/documentation/healthkit/hkpredicatekeypathmax)
- [let HKPredicateKeyPathMostRecent: String](/documentation/healthkit/hkpredicatekeypathmostrecent)
- [let HKPredicateKeyPathMostRecentStartDate: String](/documentation/healthkit/hkpredicatekeypathmostrecentstartdate)
- [let HKPredicateKeyPathMostRecentEndDate: String](/documentation/healthkit/hkpredicatekeypathmostrecentenddate)
- [let HKPredicateKeyPathMostRecentDuration: String](/documentation/healthkit/hkpredicatekeypathmostrecentduration)
- [HKQuantitySample](/documentation/healthkit/hkquantitysample)

#### Creating Quantity Samples

- [convenience init(type: HKQuantityType, quantity: HKQuantity, start: Date, end: Date)](/documentation/healthkit/hkquantitysample/init(type:quantity:start:end:))
- [convenience init(type: HKQuantityType, quantity: HKQuantity, start: Date, end: Date, metadata: [String : Any]?)](/documentation/healthkit/hkquantitysample/init(type:quantity:start:end:metadata:))
- [convenience init(type: HKQuantityType, quantity: HKQuantity, start: Date, end: Date, device: HKDevice?, metadata: [String : Any]?)](/documentation/healthkit/hkquantitysample/init(type:quantity:start:end:device:metadata:))

#### Getting Property Data

- [var quantity: HKQuantity](/documentation/healthkit/hkquantitysample/quantity)
- [var count: Int](/documentation/healthkit/hkquantitysample/count)
- [var quantityType: HKQuantityType](/documentation/healthkit/hkquantitysample/quantitytype)

#### Specifying Predicate Key Paths

- [let HKPredicateKeyPathQuantity: String](/documentation/healthkit/hkpredicatekeypathquantity)
- [let HKPredicateKeyPathCount: String](/documentation/healthkit/hkpredicatekeypathcount)
- [HKCategorySample](/documentation/healthkit/hkcategorysample)

#### Creating Category Samples

- [convenience init(type: HKCategoryType, value: Int, start: Date, end: Date)](/documentation/healthkit/hkcategorysample/init(type:value:start:end:))
- [convenience init(type: HKCategoryType, value: Int, start: Date, end: Date, metadata: [String : Any]?)](/documentation/healthkit/hkcategorysample/init(type:value:start:end:metadata:))
- [convenience init(type: HKCategoryType, value: Int, start: Date, end: Date, device: HKDevice?, metadata: [String : Any]?)](/documentation/healthkit/hkcategorysample/init(type:value:start:end:device:metadata:))

#### Getting Property Data

- [var categoryType: HKCategoryType](/documentation/healthkit/hkcategorysample/categorytype)
- [var value: Int](/documentation/healthkit/hkcategorysample/value)

#### Assigning Values

- [HKCategoryValue](/documentation/healthkit/hkcategoryvalue)

##### Constants

- [case notApplicable](/documentation/healthkit/hkcategoryvalue/notapplicable)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvalue/init(rawvalue:))
- [HKCategoryValueCervicalMucusQuality](/documentation/healthkit/hkcategoryvaluecervicalmucusquality)

##### Constants

- [case dry](/documentation/healthkit/hkcategoryvaluecervicalmucusquality/dry)
- [case sticky](/documentation/healthkit/hkcategoryvaluecervicalmucusquality/sticky)
- [case creamy](/documentation/healthkit/hkcategoryvaluecervicalmucusquality/creamy)
- [case watery](/documentation/healthkit/hkcategoryvaluecervicalmucusquality/watery)
- [case eggWhite](/documentation/healthkit/hkcategoryvaluecervicalmucusquality/eggwhite)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvaluecervicalmucusquality/init(rawvalue:))
- [HKCategoryValueMenstrualFlow](/documentation/healthkit/hkcategoryvaluemenstrualflow)

##### Constants

- [case unspecified](/documentation/healthkit/hkcategoryvaluemenstrualflow/unspecified)
- [case none](/documentation/healthkit/hkcategoryvaluemenstrualflow/none)
- [case light](/documentation/healthkit/hkcategoryvaluemenstrualflow/light)
- [case medium](/documentation/healthkit/hkcategoryvaluemenstrualflow/medium)
- [case heavy](/documentation/healthkit/hkcategoryvaluemenstrualflow/heavy)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvaluemenstrualflow/init(rawvalue:))
- [HKCategoryValueOvulationTestResult](/documentation/healthkit/hkcategoryvalueovulationtestresult)

##### Ovulation Test Results

- [case negative](/documentation/healthkit/hkcategoryvalueovulationtestresult/negative)
- [case luteinizingHormoneSurge](/documentation/healthkit/hkcategoryvalueovulationtestresult/luteinizinghormonesurge)
- [case indeterminate](/documentation/healthkit/hkcategoryvalueovulationtestresult/indeterminate)
- [case estrogenSurge](/documentation/healthkit/hkcategoryvalueovulationtestresult/estrogensurge)
- [static var positive: HKCategoryValueOvulationTestResult](/documentation/healthkit/hkcategoryvalueovulationtestresult/positive)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvalueovulationtestresult/init(rawvalue:))
- [HKCategoryValueContraceptive](/documentation/healthkit/hkcategoryvaluecontraceptive)

##### Contraceptive Types

- [case unspecified](/documentation/healthkit/hkcategoryvaluecontraceptive/unspecified)
- [case implant](/documentation/healthkit/hkcategoryvaluecontraceptive/implant)
- [case injection](/documentation/healthkit/hkcategoryvaluecontraceptive/injection)
- [case intrauterineDevice](/documentation/healthkit/hkcategoryvaluecontraceptive/intrauterinedevice)
- [case intravaginalRing](/documentation/healthkit/hkcategoryvaluecontraceptive/intravaginalring)
- [case oral](/documentation/healthkit/hkcategoryvaluecontraceptive/oral)
- [case patch](/documentation/healthkit/hkcategoryvaluecontraceptive/patch)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvaluecontraceptive/init(rawvalue:))
- [HKCategoryValueSleepAnalysis](/documentation/healthkit/hkcategoryvaluesleepanalysis)

##### Values for Tracking Time In-Bed

- [case inBed](/documentation/healthkit/hkcategoryvaluesleepanalysis/inbed)

##### Values for Tracking Sleep States

- [case awake](/documentation/healthkit/hkcategoryvaluesleepanalysis/awake)
- [case asleepCore](/documentation/healthkit/hkcategoryvaluesleepanalysis/asleepcore)
- [case asleepDeep](/documentation/healthkit/hkcategoryvaluesleepanalysis/asleepdeep)
- [case asleepREM](/documentation/healthkit/hkcategoryvaluesleepanalysis/asleeprem)
- [case asleepUnspecified](/documentation/healthkit/hkcategoryvaluesleepanalysis/asleepunspecified)

##### Deprecated values

- [static var asleep: HKCategoryValueSleepAnalysis](/documentation/healthkit/hkcategoryvaluesleepanalysis/asleep)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvaluesleepanalysis/init(rawvalue:))

##### Type Properties

- [static var allAsleepValues: Set<HKCategoryValueSleepAnalysis>](/documentation/healthkit/hkcategoryvaluesleepanalysis/allasleepvalues)
- [HKCategoryValueAppetiteChanges](/documentation/healthkit/hkcategoryvalueappetitechanges)

##### Appetite Changes

- [case decreased](/documentation/healthkit/hkcategoryvalueappetitechanges/decreased)
- [case increased](/documentation/healthkit/hkcategoryvalueappetitechanges/increased)
- [case noChange](/documentation/healthkit/hkcategoryvalueappetitechanges/nochange)
- [case unspecified](/documentation/healthkit/hkcategoryvalueappetitechanges/unspecified)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvalueappetitechanges/init(rawvalue:))
- [HKCategoryValuePresence](/documentation/healthkit/hkcategoryvaluepresence)

##### Presence of Symptoms

- [case notPresent](/documentation/healthkit/hkcategoryvaluepresence/notpresent)
- [case present](/documentation/healthkit/hkcategoryvaluepresence/present)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvaluepresence/init(rawvalue:))
- [HKCategoryValueSeverity](/documentation/healthkit/hkcategoryvalueseverity)

##### Severity Categories

- [case notPresent](/documentation/healthkit/hkcategoryvalueseverity/notpresent)
- [case mild](/documentation/healthkit/hkcategoryvalueseverity/mild)
- [case moderate](/documentation/healthkit/hkcategoryvalueseverity/moderate)
- [case severe](/documentation/healthkit/hkcategoryvalueseverity/severe)
- [case unspecified](/documentation/healthkit/hkcategoryvalueseverity/unspecified)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvalueseverity/init(rawvalue:))
- [HKCategoryValueEnvironmentalAudioExposureEvent](/documentation/healthkit/hkcategoryvalueenvironmentalaudioexposureevent)

##### Events

- [case momentaryLimit](/documentation/healthkit/hkcategoryvalueenvironmentalaudioexposureevent/momentarylimit)

##### Metadata Keys

- [let HKMetadataKeyAudioExposureLevel: String](/documentation/healthkit/hkmetadatakeyaudioexposurelevel)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvalueenvironmentalaudioexposureevent/init(rawvalue:))
- [HKCategoryValueHeadphoneAudioExposureEvent](/documentation/healthkit/hkcategoryvalueheadphoneaudioexposureevent)

##### Events

- [case sevenDayLimit](/documentation/healthkit/hkcategoryvalueheadphoneaudioexposureevent/sevendaylimit)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvalueheadphoneaudioexposureevent/init(rawvalue:))
- [HKCategoryValueLowCardioFitnessEvent](/documentation/healthkit/hkcategoryvaluelowcardiofitnessevent)

##### Events

- [case lowFitness](/documentation/healthkit/hkcategoryvaluelowcardiofitnessevent/lowfitness)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvaluelowcardiofitnessevent/init(rawvalue:))
- [HKAppleWalkingSteadinessClassification](/documentation/healthkit/hkapplewalkingsteadinessclassification)

##### Accessing Classifications

- [case ok](/documentation/healthkit/hkapplewalkingsteadinessclassification/ok)
- [case low](/documentation/healthkit/hkapplewalkingsteadinessclassification/low)
- [case veryLow](/documentation/healthkit/hkapplewalkingsteadinessclassification/verylow)

##### Initializers

- [init(for: HKQuantity) throws](/documentation/healthkit/hkapplewalkingsteadinessclassification/init(for:))
- [init?(rawValue: Int)](/documentation/healthkit/hkapplewalkingsteadinessclassification/init(rawvalue:))

##### Instance Properties

- [var maximum: HKQuantity](/documentation/healthkit/hkapplewalkingsteadinessclassification/maximum)
- [var minimum: HKQuantity](/documentation/healthkit/hkapplewalkingsteadinessclassification/minimum)

##### Default Implementations

- [CaseIterable Implementations](/documentation/healthkit/hkapplewalkingsteadinessclassification/caseiterable-implementations)

###### Type Properties

- [static var allCases: [HKAppleWalkingSteadinessClassification]](/documentation/healthkit/hkapplewalkingsteadinessclassification/allcases)
- [HKCategoryValueAppleWalkingSteadinessEvent](/documentation/healthkit/hkcategoryvalueapplewalkingsteadinessevent)

##### Steadiness Values

- [case initialLow](/documentation/healthkit/hkcategoryvalueapplewalkingsteadinessevent/initiallow)
- [case initialVeryLow](/documentation/healthkit/hkcategoryvalueapplewalkingsteadinessevent/initialverylow)
- [case repeatLow](/documentation/healthkit/hkcategoryvalueapplewalkingsteadinessevent/repeatlow)
- [case repeatVeryLow](/documentation/healthkit/hkcategoryvalueapplewalkingsteadinessevent/repeatverylow)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvalueapplewalkingsteadinessevent/init(rawvalue:))
- [HKCategoryValuePregnancyTestResult](/documentation/healthkit/hkcategoryvaluepregnancytestresult)

##### Test Results

- [case positive](/documentation/healthkit/hkcategoryvaluepregnancytestresult/positive)
- [case negative](/documentation/healthkit/hkcategoryvaluepregnancytestresult/negative)
- [case indeterminate](/documentation/healthkit/hkcategoryvaluepregnancytestresult/indeterminate)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvaluepregnancytestresult/init(rawvalue:))
- [HKCategoryValueProgesteroneTestResult](/documentation/healthkit/hkcategoryvalueprogesteronetestresult)

##### Test Results

- [case positive](/documentation/healthkit/hkcategoryvalueprogesteronetestresult/positive)
- [case negative](/documentation/healthkit/hkcategoryvalueprogesteronetestresult/negative)
- [case indeterminate](/documentation/healthkit/hkcategoryvalueprogesteronetestresult/indeterminate)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvalueprogesteronetestresult/init(rawvalue:))
- [HKCategoryValueAudioExposureEvent](/documentation/healthkit/hkcategoryvalueaudioexposureevent)

##### Exposure Events

- [case loudEnvironment](/documentation/healthkit/hkcategoryvalueaudioexposureevent/loudenvironment)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvalueaudioexposureevent/init(rawvalue:))

#### Specifying Predicate Key Paths

- [let HKPredicateKeyPathCategoryValue: String](/documentation/healthkit/hkpredicatekeypathcategoryvalue)
- [HKCorrelation](/documentation/healthkit/hkcorrelation)

#### Creating Correlations

- [convenience init(type: HKCorrelationType, start: Date, end: Date, objects: Set<HKSample>)](/documentation/healthkit/hkcorrelation/init(type:start:end:objects:))
- [convenience init(type: HKCorrelationType, start: Date, end: Date, objects: Set<HKSample>, metadata: [String : Any]?)](/documentation/healthkit/hkcorrelation/init(type:start:end:objects:metadata:))
- [convenience init(type: HKCorrelationType, start: Date, end: Date, objects: Set<HKSample>, device: HKDevice?, metadata: [String : Any]?)](/documentation/healthkit/hkcorrelation/init(type:start:end:objects:device:metadata:))

#### Getting Correlation Data

- [var correlationType: HKCorrelationType](/documentation/healthkit/hkcorrelation/correlationtype)
- [var objects: Set<HKSample>](/documentation/healthkit/hkcorrelation/objects)
- [func objects(for: HKObjectType) -> Set<HKSample>](/documentation/healthkit/hkcorrelation/objects(for:))

#### Specifying Predicate Key Paths

- [let HKPredicateKeyPathCorrelation: String](/documentation/healthkit/hkpredicatekeypathcorrelation)
- [Units and quantities](/documentation/healthkit/units-and-quantities)

#### Units and quantities

- [Defining and converting units and quantities](/documentation/healthkit/defining-and-converting-units-and-quantities)
- [HKQuantity](/documentation/healthkit/hkquantity)

##### Creating Quantities

- [convenience init(unit: HKUnit, doubleValue: Double)](/documentation/healthkit/hkquantity/init(unit:doublevalue:))

##### Working With Units

- [func `is`(compatibleWith: HKUnit) -> Bool](/documentation/healthkit/hkquantity/is(compatiblewith:))
- [func doubleValue(for: HKUnit) -> Double](/documentation/healthkit/hkquantity/doublevalue(for:))

##### Comparing Quantities

- [func compare(HKQuantity) -> ComparisonResult](/documentation/healthkit/hkquantity/compare(_:))
- [HKUnit](/documentation/healthkit/hkunit)

##### Working with units

- [convenience init(from: String)](/documentation/healthkit/hkunit/init(from:)-9qont)
- [var unitString: String](/documentation/healthkit/hkunit/unitstring)
- [func isNull() -> Bool](/documentation/healthkit/hkunit/isnull())

##### Working with formatter units

- [class func energyFormatterUnit(from: HKUnit) -> EnergyFormatter.Unit](/documentation/healthkit/hkunit/energyformatterunit(from:))
- [convenience init(from: EnergyFormatter.Unit)](/documentation/healthkit/hkunit/init(from:)-1j1pq)
- [class func lengthFormatterUnit(from: HKUnit) -> LengthFormatter.Unit](/documentation/healthkit/hkunit/lengthformatterunit(from:))
- [convenience init(from: LengthFormatter.Unit)](/documentation/healthkit/hkunit/init(from:)-55e1u)
- [class func massFormatterUnit(from: HKUnit) -> MassFormatter.Unit](/documentation/healthkit/hkunit/massformatterunit(from:))
- [convenience init(from: MassFormatter.Unit)](/documentation/healthkit/hkunit/init(from:)-7h2li)

##### Constructing mass units

- [class func gram() -> Self](/documentation/healthkit/hkunit/gram())
- [class func gramUnit(with: HKMetricPrefix) -> Self](/documentation/healthkit/hkunit/gramunit(with:))
- [class func ounce() -> Self](/documentation/healthkit/hkunit/ounce())
- [class func pound() -> Self](/documentation/healthkit/hkunit/pound())
- [class func stone() -> Self](/documentation/healthkit/hkunit/stone())
- [class func moleUnit(withMolarMass: Double) -> Self](/documentation/healthkit/hkunit/moleunit(withmolarmass:))
- [class func moleUnit(with: HKMetricPrefix, molarMass: Double) -> Self](/documentation/healthkit/hkunit/moleunit(with:molarmass:))
- [var HKUnitMolarMassBloodGlucose: Double](/documentation/healthkit/hkunitmolarmassbloodglucose)

##### Constructing length units

- [class func meter() -> Self](/documentation/healthkit/hkunit/meter())
- [class func meterUnit(with: HKMetricPrefix) -> Self](/documentation/healthkit/hkunit/meterunit(with:))
- [class func inch() -> Self](/documentation/healthkit/hkunit/inch())
- [class func foot() -> Self](/documentation/healthkit/hkunit/foot())
- [class func yard() -> Self](/documentation/healthkit/hkunit/yard())
- [class func mile() -> Self](/documentation/healthkit/hkunit/mile())

##### Constructing volume units

- [class func liter() -> Self](/documentation/healthkit/hkunit/liter())
- [class func literUnit(with: HKMetricPrefix) -> Self](/documentation/healthkit/hkunit/literunit(with:))
- [class func fluidOunceUS() -> Self](/documentation/healthkit/hkunit/fluidounceus())
- [class func fluidOunceImperial() -> Self](/documentation/healthkit/hkunit/fluidounceimperial())
- [class func cupUS() -> Self](/documentation/healthkit/hkunit/cupus())
- [class func cupImperial() -> Self](/documentation/healthkit/hkunit/cupimperial())
- [class func pintUS() -> Self](/documentation/healthkit/hkunit/pintus())
- [class func pintImperial() -> Self](/documentation/healthkit/hkunit/pintimperial())

##### Constructing pressure units

- [class func pascal() -> Self](/documentation/healthkit/hkunit/pascal())
- [class func pascalUnit(with: HKMetricPrefix) -> Self](/documentation/healthkit/hkunit/pascalunit(with:))
- [class func millimeterOfMercury() -> Self](/documentation/healthkit/hkunit/millimeterofmercury())
- [class func inchesOfMercury() -> Self](/documentation/healthkit/hkunit/inchesofmercury())
- [class func centimeterOfWater() -> Self](/documentation/healthkit/hkunit/centimeterofwater())
- [class func atmosphere() -> Self](/documentation/healthkit/hkunit/atmosphere())
- [class func decibelAWeightedSoundPressureLevel() -> Self](/documentation/healthkit/hkunit/decibelaweightedsoundpressurelevel())

##### Constructing time units

- [class func second() -> Self](/documentation/healthkit/hkunit/second())
- [class func secondUnit(with: HKMetricPrefix) -> Self](/documentation/healthkit/hkunit/secondunit(with:))
- [class func minute() -> Self](/documentation/healthkit/hkunit/minute())
- [class func hour() -> Self](/documentation/healthkit/hkunit/hour())
- [class func day() -> Self](/documentation/healthkit/hkunit/day())

##### Constructing energy units

- [class func joule() -> Self](/documentation/healthkit/hkunit/joule())
- [class func jouleUnit(with: HKMetricPrefix) -> Self](/documentation/healthkit/hkunit/jouleunit(with:))
- [class func kilocalorie() -> Self](/documentation/healthkit/hkunit/kilocalorie())
- [class func largeCalorie() -> Self](/documentation/healthkit/hkunit/largecalorie())
- [class func smallCalorie() -> Self](/documentation/healthkit/hkunit/smallcalorie())
- [class func calorie() -> Self](/documentation/healthkit/hkunit/calorie())

##### Constructing power units

- [class func watt() -> Self](/documentation/healthkit/hkunit/watt())
- [class func wattUnit(with: HKMetricPrefix) -> Self](/documentation/healthkit/hkunit/wattunit(with:))

##### Constructing temperature units

- [class func degreeCelsius() -> Self](/documentation/healthkit/hkunit/degreecelsius())
- [class func degreeFahrenheit() -> Self](/documentation/healthkit/hkunit/degreefahrenheit())
- [class func kelvin() -> Self](/documentation/healthkit/hkunit/kelvin())

##### Constructing hearing sensitivity units

- [class func decibelHearingLevel() -> Self](/documentation/healthkit/hkunit/decibelhearinglevel())

##### Constructing frequency units

- [class func hertz() -> Self](/documentation/healthkit/hkunit/hertz())
- [class func hertzUnit(with: HKMetricPrefix) -> Self](/documentation/healthkit/hkunit/hertzunit(with:))

##### Constructing vision units

- [class func diopter() -> Self](/documentation/healthkit/hkunit/diopter())
- [class func prismDiopter() -> Self](/documentation/healthkit/hkunit/prismdiopter())

##### Constructing angle units

- [class func degreeAngle() -> Self](/documentation/healthkit/hkunit/degreeangle())
- [class func radianAngle() -> Self](/documentation/healthkit/hkunit/radianangle())
- [class func radianAngleUnit(with: HKMetricPrefix) -> Self](/documentation/healthkit/hkunit/radianangleunit(with:))

##### Constructing electrical conductance units

- [class func siemen() -> Self](/documentation/healthkit/hkunit/siemen())
- [class func siemenUnit(with: HKMetricPrefix) -> Self](/documentation/healthkit/hkunit/siemenunit(with:))

##### Electrical potential difference

- [class func volt() -> Self](/documentation/healthkit/hkunit/volt())
- [class func voltUnit(with: HKMetricPrefix) -> Self](/documentation/healthkit/hkunit/voltunit(with:))

##### Constructing pharmacology units

- [class func internationalUnit() -> Self](/documentation/healthkit/hkunit/internationalunit())

##### Constructing scalar units

- [class func count() -> Self](/documentation/healthkit/hkunit/count())
- [class func percent() -> Self](/documentation/healthkit/hkunit/percent())

##### Performing unit math

- [func unitMultiplied(by: HKUnit) -> HKUnit](/documentation/healthkit/hkunit/unitmultiplied(by:))
- [func unitDivided(by: HKUnit) -> HKUnit](/documentation/healthkit/hkunit/unitdivided(by:))
- [func unitRaised(toPower: Int) -> HKUnit](/documentation/healthkit/hkunit/unitraised(topower:))
- [func reciprocal() -> HKUnit](/documentation/healthkit/hkunit/reciprocal())

##### Constants

- [HKMetricPrefix](/documentation/healthkit/hkmetricprefix)

###### Prefixes

- [case none](/documentation/healthkit/hkmetricprefix/none)
- [case femto](/documentation/healthkit/hkmetricprefix/femto)
- [case pico](/documentation/healthkit/hkmetricprefix/pico)
- [case nano](/documentation/healthkit/hkmetricprefix/nano)
- [case micro](/documentation/healthkit/hkmetricprefix/micro)
- [case milli](/documentation/healthkit/hkmetricprefix/milli)
- [case centi](/documentation/healthkit/hkmetricprefix/centi)
- [case deci](/documentation/healthkit/hkmetricprefix/deci)
- [case deca](/documentation/healthkit/hkmetricprefix/deca)
- [case hecto](/documentation/healthkit/hkmetricprefix/hecto)
- [case kilo](/documentation/healthkit/hkmetricprefix/kilo)
- [case mega](/documentation/healthkit/hkmetricprefix/mega)
- [case giga](/documentation/healthkit/hkmetricprefix/giga)
- [case tera](/documentation/healthkit/hkmetricprefix/tera)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkmetricprefix/init(rawvalue:))

##### Type Methods

- [class func appleEffortScore() -> Self](/documentation/healthkit/hkunit/appleeffortscore())
- [class func lux() -> Self](/documentation/healthkit/hkunit/lux())
- [class func luxUnit(with: HKMetricPrefix) -> Self](/documentation/healthkit/hkunit/luxunit(with:))
- [HKMetricPrefix](/documentation/healthkit/hkmetricprefix)

##### Prefixes

- [case none](/documentation/healthkit/hkmetricprefix/none)
- [case femto](/documentation/healthkit/hkmetricprefix/femto)
- [case pico](/documentation/healthkit/hkmetricprefix/pico)
- [case nano](/documentation/healthkit/hkmetricprefix/nano)
- [case micro](/documentation/healthkit/hkmetricprefix/micro)
- [case milli](/documentation/healthkit/hkmetricprefix/milli)
- [case centi](/documentation/healthkit/hkmetricprefix/centi)
- [case deci](/documentation/healthkit/hkmetricprefix/deci)
- [case deca](/documentation/healthkit/hkmetricprefix/deca)
- [case hecto](/documentation/healthkit/hkmetricprefix/hecto)
- [case kilo](/documentation/healthkit/hkmetricprefix/kilo)
- [case mega](/documentation/healthkit/hkmetricprefix/mega)
- [case giga](/documentation/healthkit/hkmetricprefix/giga)
- [case tera](/documentation/healthkit/hkmetricprefix/tera)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkmetricprefix/init(rawvalue:))
- [Metadata Keys](/documentation/healthkit/metadata-keys)

#### General Keys

- [let HKMetadataKeyExternalUUID: String](/documentation/healthkit/hkmetadatakeyexternaluuid)
- [let HKMetadataKeyTimeZone: String](/documentation/healthkit/hkmetadatakeytimezone)
- [let HKMetadataKeyWasUserEntered: String](/documentation/healthkit/hkmetadatakeywasuserentered)
- [let HKMetadataKeyQuantityClampedToLowerBound: String](/documentation/healthkit/hkmetadatakeyquantityclampedtolowerbound)
- [let HKMetadataKeyQuantityClampedToUpperBound: String](/documentation/healthkit/hkmetadatakeyquantityclampedtoupperbound)

#### Estimate Keys

- [let HKMetadataKeyDateOfEarliestDataUsedForEstimate: String](/documentation/healthkit/hkmetadatakeydateofearliestdatausedforestimate)
- [let HKMetadataKeySessionEstimate: String](/documentation/healthkit/hkmetadatakeysessionestimate)

#### Device Information Keys

- [let HKMetadataKeyDeviceSerialNumber: String](/documentation/healthkit/hkmetadatakeydeviceserialnumber)
- [let HKMetadataKeyUDIDeviceIdentifier: String](/documentation/healthkit/hkmetadatakeyudideviceidentifier)
- [let HKMetadataKeyUDIProductionIdentifier: String](/documentation/healthkit/hkmetadatakeyudiproductionidentifier)
- [let HKMetadataKeyDigitalSignature: String](/documentation/healthkit/hkmetadatakeydigitalsignature)
- [let HKMetadataKeyDeviceName: String](/documentation/healthkit/hkmetadatakeydevicename)
- [let HKMetadataKeyDeviceManufacturerName: String](/documentation/healthkit/hkmetadatakeydevicemanufacturername)
- [let HKMetadataKeyDevicePlacementSide: String](/documentation/healthkit/hkmetadatakeydeviceplacementside)
- [HKDevicePlacementSide](/documentation/healthkit/hkdeviceplacementside)

##### Placements

- [case central](/documentation/healthkit/hkdeviceplacementside/central)
- [case left](/documentation/healthkit/hkdeviceplacementside/left)
- [case right](/documentation/healthkit/hkdeviceplacementside/right)
- [case unknown](/documentation/healthkit/hkdeviceplacementside/unknown)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkdeviceplacementside/init(rawvalue:))
- [let HKMetadataKeyAppleDeviceCalibrated: String](/documentation/healthkit/hkmetadatakeyappledevicecalibrated)

#### Sync Keys

- [let HKMetadataKeySyncIdentifier: String](/documentation/healthkit/hkmetadatakeysyncidentifier)
- [let HKMetadataKeySyncVersion: String](/documentation/healthkit/hkmetadatakeysyncversion)

#### Lab Keys

- [let HKMetadataKeyWasTakenInLab: String](/documentation/healthkit/hkmetadatakeywastakeninlab)
- [let HKMetadataKeyReferenceRangeLowerLimit: String](/documentation/healthkit/hkmetadatakeyreferencerangelowerlimit)
- [let HKMetadataKeyReferenceRangeUpperLimit: String](/documentation/healthkit/hkmetadatakeyreferencerangeupperlimit)

#### Weather Keys

- [let HKMetadataKeyBarometricPressure: String](/documentation/healthkit/hkmetadatakeybarometricpressure)
- [let HKMetadataKeyWeatherCondition: String](/documentation/healthkit/hkmetadatakeyweathercondition)

##### Valid Weather Conditions

- [HKWeatherCondition](/documentation/healthkit/hkweathercondition)

###### Weather Conditions

- [case none](/documentation/healthkit/hkweathercondition/none)
- [case clear](/documentation/healthkit/hkweathercondition/clear)
- [case fair](/documentation/healthkit/hkweathercondition/fair)
- [case partlyCloudy](/documentation/healthkit/hkweathercondition/partlycloudy)
- [case mostlyCloudy](/documentation/healthkit/hkweathercondition/mostlycloudy)
- [case cloudy](/documentation/healthkit/hkweathercondition/cloudy)
- [case foggy](/documentation/healthkit/hkweathercondition/foggy)
- [case haze](/documentation/healthkit/hkweathercondition/haze)
- [case windy](/documentation/healthkit/hkweathercondition/windy)
- [case blustery](/documentation/healthkit/hkweathercondition/blustery)
- [case smoky](/documentation/healthkit/hkweathercondition/smoky)
- [case dust](/documentation/healthkit/hkweathercondition/dust)
- [case snow](/documentation/healthkit/hkweathercondition/snow)
- [case hail](/documentation/healthkit/hkweathercondition/hail)
- [case sleet](/documentation/healthkit/hkweathercondition/sleet)
- [case freezingDrizzle](/documentation/healthkit/hkweathercondition/freezingdrizzle)
- [case freezingRain](/documentation/healthkit/hkweathercondition/freezingrain)
- [case mixedRainAndHail](/documentation/healthkit/hkweathercondition/mixedrainandhail)
- [case mixedRainAndSnow](/documentation/healthkit/hkweathercondition/mixedrainandsnow)
- [case mixedRainAndSleet](/documentation/healthkit/hkweathercondition/mixedrainandsleet)
- [case mixedSnowAndSleet](/documentation/healthkit/hkweathercondition/mixedsnowandsleet)
- [case drizzle](/documentation/healthkit/hkweathercondition/drizzle)
- [case scatteredShowers](/documentation/healthkit/hkweathercondition/scatteredshowers)
- [case showers](/documentation/healthkit/hkweathercondition/showers)
- [case thunderstorms](/documentation/healthkit/hkweathercondition/thunderstorms)
- [case tropicalStorm](/documentation/healthkit/hkweathercondition/tropicalstorm)
- [case hurricane](/documentation/healthkit/hkweathercondition/hurricane)
- [case tornado](/documentation/healthkit/hkweathercondition/tornado)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkweathercondition/init(rawvalue:))
- [let HKMetadataKeyWeatherHumidity: String](/documentation/healthkit/hkmetadatakeyweatherhumidity)
- [let HKMetadataKeyWeatherTemperature: String](/documentation/healthkit/hkmetadatakeyweathertemperature)

#### Workout Keys

- [Workout Metadata Keys](/documentation/healthkit/workout-metadata-keys)

##### Workout Type

- [let HKMetadataKeyActivityType: String](/documentation/healthkit/hkmetadatakeyactivitytype)
- [let HKMetadataKeyAppleFitnessPlusSession: String](/documentation/healthkit/hkmetadatakeyapplefitnessplussession)
- [let HKMetadataKeyCoachedWorkout: String](/documentation/healthkit/hkmetadatakeycoachedworkout)
- [let HKMetadataKeyGroupFitness: String](/documentation/healthkit/hkmetadatakeygroupfitness)
- [let HKMetadataKeyIndoorWorkout: String](/documentation/healthkit/hkmetadatakeyindoorworkout)
- [let HKMetadataKeyWorkoutBrandName: String](/documentation/healthkit/hkmetadatakeyworkoutbrandname)

##### Cycling

- [let HKMetadataKeyCyclingFunctionalThresholdPowerTestType: String](/documentation/healthkit/hkmetadatakeycyclingfunctionalthresholdpowertesttype)

###### Valid test types

- [HKCyclingFunctionalThresholdPowerTestType](/documentation/healthkit/hkcyclingfunctionalthresholdpowertesttype)

###### Enumeration Cases

- [case maxExercise20Minute](/documentation/healthkit/hkcyclingfunctionalthresholdpowertesttype/maxexercise20minute)
- [case maxExercise60Minute](/documentation/healthkit/hkcyclingfunctionalthresholdpowertesttype/maxexercise60minute)
- [case predictionExercise](/documentation/healthkit/hkcyclingfunctionalthresholdpowertesttype/predictionexercise)
- [case rampTest](/documentation/healthkit/hkcyclingfunctionalthresholdpowertesttype/ramptest)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcyclingfunctionalthresholdpowertesttype/init(rawvalue:))

##### GymKit Fitness Equipment

- [let HKMetadataKeyFitnessMachineDuration: String](/documentation/healthkit/hkmetadatakeyfitnessmachineduration)
- [let HKMetadataKeyCrossTrainerDistance: String](/documentation/healthkit/hkmetadatakeycrosstrainerdistance)
- [let HKMetadataKeyIndoorBikeDistance: String](/documentation/healthkit/hkmetadatakeyindoorbikedistance)

##### Intensity

- [let HKMetadataKeyAverageMETs: String](/documentation/healthkit/hkmetadatakeyaveragemets)
- [let HKMetadataKeyPhysicalEffortEstimationType: String](/documentation/healthkit/hkmetadatakeyphysicaleffortestimationtype)

###### Valid estimation types

- [HKPhysicalEffortEstimationType](/documentation/healthkit/hkphysicaleffortestimationtype)

###### Enumeration Cases

- [case activityLookup](/documentation/healthkit/hkphysicaleffortestimationtype/activitylookup)
- [case deviceSensed](/documentation/healthkit/hkphysicaleffortestimationtype/devicesensed)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkphysicaleffortestimationtype/init(rawvalue:))

##### Skiing and Snowboarding

- [let HKMetadataKeyAlpineSlopeGrade: String](/documentation/healthkit/hkmetadatakeyalpineslopegrade)
- [let HKMetadataKeyElevationAscended: String](/documentation/healthkit/hkmetadatakeyelevationascended)
- [let HKMetadataKeyElevationDescended: String](/documentation/healthkit/hkmetadatakeyelevationdescended)

##### Speed

- [let HKMetadataKeyAverageSpeed: String](/documentation/healthkit/hkmetadatakeyaveragespeed)
- [let HKMetadataKeyMaximumSpeed: String](/documentation/healthkit/hkmetadatakeymaximumspeed)

##### Swimming

- [let HKMetadataKeySwimmingLocationType: String](/documentation/healthkit/hkmetadatakeyswimminglocationtype)

###### Valid Swimming Locations

- [HKWorkoutSwimmingLocationType](/documentation/healthkit/hkworkoutswimminglocationtype)

###### Swimming Locations

- [case openWater](/documentation/healthkit/hkworkoutswimminglocationtype/openwater)
- [case pool](/documentation/healthkit/hkworkoutswimminglocationtype/pool)
- [case unknown](/documentation/healthkit/hkworkoutswimminglocationtype/unknown)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkworkoutswimminglocationtype/init(rawvalue:))
- [let HKMetadataKeySwimmingStrokeStyle: String](/documentation/healthkit/hkmetadatakeyswimmingstrokestyle)

###### Valid Stroke Styles

- [HKSwimmingStrokeStyle](/documentation/healthkit/hkswimmingstrokestyle)

###### Strokes

- [case backstroke](/documentation/healthkit/hkswimmingstrokestyle/backstroke)
- [case breaststroke](/documentation/healthkit/hkswimmingstrokestyle/breaststroke)
- [case butterfly](/documentation/healthkit/hkswimmingstrokestyle/butterfly)
- [case freestyle](/documentation/healthkit/hkswimmingstrokestyle/freestyle)
- [case mixed](/documentation/healthkit/hkswimmingstrokestyle/mixed)
- [case kickboard](/documentation/healthkit/hkswimmingstrokestyle/kickboard)
- [case unknown](/documentation/healthkit/hkswimmingstrokestyle/unknown)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkswimmingstrokestyle/init(rawvalue:))
- [let HKMetadataKeyLapLength: String](/documentation/healthkit/hkmetadatakeylaplength)
- [let HKMetadataKeySWOLFScore: String](/documentation/healthkit/hkmetadatakeyswolfscore)
- [let HKMetadataKeyWaterSalinity: String](/documentation/healthkit/hkmetadatakeywatersalinity)

###### Valid water salinity

- [HKWaterSalinity](/documentation/healthkit/hkwatersalinity)

###### Enumeration Cases

- [case freshWater](/documentation/healthkit/hkwatersalinity/freshwater)
- [case saltWater](/documentation/healthkit/hkwatersalinity/saltwater)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkwatersalinity/init(rawvalue:))

#### Cardio Fitness Keys

- [let HKMetadataKeyVO2MaxValue: String](/documentation/healthkit/hkmetadatakeyvo2maxvalue)
- [let HKMetadataKeyLowCardioFitnessEventThreshold: String](/documentation/healthkit/hkmetadatakeylowcardiofitnesseventthreshold)

#### Motion Keys

- [let HKMetadataKeyUserMotionContext: String](/documentation/healthkit/hkmetadatakeyusermotioncontext)

##### Valid motion contexts

- [HKUserMotionContext](/documentation/healthkit/hkusermotioncontext)

###### Motion contexts

- [case notSet](/documentation/healthkit/hkusermotioncontext/notset)
- [case active](/documentation/healthkit/hkusermotioncontext/active)
- [case stationary](/documentation/healthkit/hkusermotioncontext/stationary)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkusermotioncontext/init(rawvalue:))

#### Nutrition Keys

- [let HKMetadataKeyFoodType: String](/documentation/healthkit/hkmetadatakeyfoodtype)

#### Vitals Sensors Keys

- [let HKMetadataKeyBodyTemperatureSensorLocation: String](/documentation/healthkit/hkmetadatakeybodytemperaturesensorlocation)

##### Valid Locations

- [HKBodyTemperatureSensorLocation](/documentation/healthkit/hkbodytemperaturesensorlocation)

###### Locations

- [case other](/documentation/healthkit/hkbodytemperaturesensorlocation/other)
- [case armpit](/documentation/healthkit/hkbodytemperaturesensorlocation/armpit)
- [case body](/documentation/healthkit/hkbodytemperaturesensorlocation/body)
- [case ear](/documentation/healthkit/hkbodytemperaturesensorlocation/ear)
- [case finger](/documentation/healthkit/hkbodytemperaturesensorlocation/finger)
- [case gastroIntestinal](/documentation/healthkit/hkbodytemperaturesensorlocation/gastrointestinal)
- [case mouth](/documentation/healthkit/hkbodytemperaturesensorlocation/mouth)
- [case rectum](/documentation/healthkit/hkbodytemperaturesensorlocation/rectum)
- [case toe](/documentation/healthkit/hkbodytemperaturesensorlocation/toe)
- [case earDrum](/documentation/healthkit/hkbodytemperaturesensorlocation/eardrum)
- [case temporalArtery](/documentation/healthkit/hkbodytemperaturesensorlocation/temporalartery)
- [case forehead](/documentation/healthkit/hkbodytemperaturesensorlocation/forehead)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkbodytemperaturesensorlocation/init(rawvalue:))
- [let HKMetadataKeyHeartRateSensorLocation: String](/documentation/healthkit/hkmetadatakeyheartratesensorlocation)

##### Valid Locations

- [HKHeartRateSensorLocation](/documentation/healthkit/hkheartratesensorlocation)

###### Locations

- [case other](/documentation/healthkit/hkheartratesensorlocation/other)
- [case chest](/documentation/healthkit/hkheartratesensorlocation/chest)
- [case wrist](/documentation/healthkit/hkheartratesensorlocation/wrist)
- [case finger](/documentation/healthkit/hkheartratesensorlocation/finger)
- [case hand](/documentation/healthkit/hkheartratesensorlocation/hand)
- [case earLobe](/documentation/healthkit/hkheartratesensorlocation/earlobe)
- [case foot](/documentation/healthkit/hkheartratesensorlocation/foot)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkheartratesensorlocation/init(rawvalue:))
- [let HKMetadataKeyHeartRateMotionContext: String](/documentation/healthkit/hkmetadatakeyheartratemotioncontext)

##### Valid Motion Contexts

- [HKHeartRateMotionContext](/documentation/healthkit/hkheartratemotioncontext)

###### Motion Contextes

- [case active](/documentation/healthkit/hkheartratemotioncontext/active)
- [case notSet](/documentation/healthkit/hkheartratemotioncontext/notset)
- [case sedentary](/documentation/healthkit/hkheartratemotioncontext/sedentary)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkheartratemotioncontext/init(rawvalue:))
- [let HKPredicateKeyPathAverageHeartRate: String](/documentation/healthkit/hkpredicatekeypathaverageheartrate)
- [let HKMetadataKeyHeartRateRecoveryActivityDuration: String](/documentation/healthkit/hkmetadatakeyheartraterecoveryactivityduration)
- [let HKMetadataKeyHeartRateRecoveryActivityType: String](/documentation/healthkit/hkmetadatakeyheartraterecoveryactivitytype)
- [let HKMetadataKeyHeartRateRecoveryMaxObservedRecoveryHeartRate: String](/documentation/healthkit/hkmetadatakeyheartraterecoverymaxobservedrecoveryheartrate)
- [let HKMetadataKeyHeartRateRecoveryTestType: String](/documentation/healthkit/hkmetadatakeyheartraterecoverytesttype)

##### Heart rate recovery tests

- [HKHeartRateRecoveryTestType](/documentation/healthkit/hkheartraterecoverytesttype)

###### Heart-rate recovery tests

- [case maxExercise](/documentation/healthkit/hkheartraterecoverytesttype/maxexercise)
- [case predictionNonExercise](/documentation/healthkit/hkheartraterecoverytesttype/predictionnonexercise)
- [case predictionSubMaxExercise](/documentation/healthkit/hkheartraterecoverytesttype/predictionsubmaxexercise)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkheartraterecoverytesttype/init(rawvalue:))
- [let HKMetadataKeyVO2MaxTestType: String](/documentation/healthkit/hkmetadatakeyvo2maxtesttype)

##### Valid Test Types

- [HKVO2MaxTestType](/documentation/healthkit/hkvo2maxtesttype)

###### Test Types

- [case maxExercise](/documentation/healthkit/hkvo2maxtesttype/maxexercise)
- [case predictionSubMaxExercise](/documentation/healthkit/hkvo2maxtesttype/predictionsubmaxexercise)
- [case predictionNonExercise](/documentation/healthkit/hkvo2maxtesttype/predictionnonexercise)

###### Enumeration Cases

- [case predictionStepTest](/documentation/healthkit/hkvo2maxtesttype/predictionsteptest)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkvo2maxtesttype/init(rawvalue:))

#### Audio Event Keys

- [let HKMetadataKeyAudioExposureLevel: String](/documentation/healthkit/hkmetadatakeyaudioexposurelevel)
- [let HKMetadataKeyAudioExposureDuration: String](/documentation/healthkit/hkmetadatakeyaudioexposureduration)
- [let HKMetadataKeyHeadphoneGain: String](/documentation/healthkit/hkmetadatakeyheadphonegain)

#### Blood Glucose Keys

- [let HKMetadataKeyBloodGlucoseMealTime: String](/documentation/healthkit/hkmetadatakeybloodglucosemealtime)

##### Valid Values

- [HKBloodGlucoseMealTime](/documentation/healthkit/hkbloodglucosemealtime)

###### Relative Meal Times

- [case postprandial](/documentation/healthkit/hkbloodglucosemealtime/postprandial)
- [case preprandial](/documentation/healthkit/hkbloodglucosemealtime/preprandial)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkbloodglucosemealtime/init(rawvalue:))
- [let HKMetadataKeyInsulinDeliveryReason: String](/documentation/healthkit/hkmetadatakeyinsulindeliveryreason)

##### Valid Delivery Reasons

- [HKInsulinDeliveryReason](/documentation/healthkit/hkinsulindeliveryreason)

###### Delivery Reasons

- [case basal](/documentation/healthkit/hkinsulindeliveryreason/basal)
- [case bolus](/documentation/healthkit/hkinsulindeliveryreason/bolus)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkinsulindeliveryreason/init(rawvalue:))

#### Reproductive Health Keys

- [let HKMetadataKeyMenstrualCycleStart: String](/documentation/healthkit/hkmetadatakeymenstrualcyclestart)
- [let HKMetadataKeySexualActivityProtectionUsed: String](/documentation/healthkit/hkmetadatakeysexualactivityprotectionused)

#### Algorithm Keys

- [let HKMetadataKeyAlgorithmVersion: String](/documentation/healthkit/hkmetadatakeyalgorithmversion)
- [let HKMetadataKeyAppleECGAlgorithmVersion: String](/documentation/healthkit/hkmetadatakeyappleecgalgorithmversion)
- [HKAppleECGAlgorithmVersion](/documentation/healthkit/hkappleecgalgorithmversion)

##### Versions

- [case version1](/documentation/healthkit/hkappleecgalgorithmversion/version1)
- [case version2](/documentation/healthkit/hkappleecgalgorithmversion/version2)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkappleecgalgorithmversion/init(rawvalue:))
- [let HKPredicateKeyPathECGClassification: String](/documentation/healthkit/hkpredicatekeypathecgclassification)
- [let HKPredicateKeyPathECGSymptomsStatus: String](/documentation/healthkit/hkpredicatekeypathecgsymptomsstatus)

### Series data

- [HKQuantitySeriesSampleBuilder](/documentation/healthkit/hkquantityseriessamplebuilder)

#### Creating a Quantity Series Builder

- [init(healthStore: HKHealthStore, quantityType: HKQuantityType, startDate: Date, device: HKDevice?)](/documentation/healthkit/hkquantityseriessamplebuilder/init(healthstore:quantitytype:startdate:device:))
- [var quantityType: HKQuantityType](/documentation/healthkit/hkquantityseriessamplebuilder/quantitytype)
- [var startDate: Date](/documentation/healthkit/hkquantityseriessamplebuilder/startdate)
- [var device: HKDevice?](/documentation/healthkit/hkquantityseriessamplebuilder/device)

#### Adding Values

- [func insert(HKQuantity, at: Date) throws](/documentation/healthkit/hkquantityseriessamplebuilder/insert(_:at:))
- [func insert(HKQuantity, for: DateInterval) throws](/documentation/healthkit/hkquantityseriessamplebuilder/insert(_:for:))

#### Ending the Collection

- [func discard()](/documentation/healthkit/hkquantityseriessamplebuilder/discard())
- [func finishSeries(metadata: [String : Any]?, completion: ([HKQuantitySample]?, (any Error)?) -> Void)](/documentation/healthkit/hkquantityseriessamplebuilder/finishseries(metadata:completion:))
- [func finishSeries(metadata: [String : Any]?, endDate: Date?, completion: ([HKQuantitySample]?, (any Error)?) -> Void)](/documentation/healthkit/hkquantityseriessamplebuilder/finishseries(metadata:enddate:completion:))
- [HKHeartbeatSeriesBuilder](/documentation/healthkit/hkheartbeatseriesbuilder)

#### Creating a Heartbeat Series Builder

- [init(healthStore: HKHealthStore, device: HKDevice?, start: Date)](/documentation/healthkit/hkheartbeatseriesbuilder/init(healthstore:device:start:))
- [class var maximumCount: Int](/documentation/healthkit/hkheartbeatseriesbuilder/maximumcount)

#### Adding Data

- [func addHeartbeatWithTimeInterval(sinceSeriesStartDate: TimeInterval, precededByGap: Bool, completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkheartbeatseriesbuilder/addheartbeatwithtimeinterval(sinceseriesstartdate:precededbygap:completion:))
- [func addMetadata([String : Any], completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkheartbeatseriesbuilder/addmetadata(_:completion:))

#### Ending the Collection

- [func finishSeries(completion: (HKHeartbeatSeriesSample?, (any Error)?) -> Void)](/documentation/healthkit/hkheartbeatseriesbuilder/finishseries(completion:))
- [HKHeartbeatSeriesSample](/documentation/healthkit/hkheartbeatseriessample)

#### Metadata

- [let HKMetadataKeyAlgorithmVersion: String](/documentation/healthkit/hkmetadatakeyalgorithmversion)

### Electrocardiograms

- [HKElectrocardiogram](/documentation/healthkit/hkelectrocardiogram)

#### Accessing Overview Information

- [var classification: HKElectrocardiogram.Classification](/documentation/healthkit/hkelectrocardiogram/classification-swift.property)
- [HKElectrocardiogram.Classification](/documentation/healthkit/hkelectrocardiogram/classification-swift.enum)

##### Classifications

- [case sinusRhythm](/documentation/healthkit/hkelectrocardiogram/classification-swift.enum/sinusrhythm)
- [case atrialFibrillation](/documentation/healthkit/hkelectrocardiogram/classification-swift.enum/atrialfibrillation)
- [case inconclusiveHighHeartRate](/documentation/healthkit/hkelectrocardiogram/classification-swift.enum/inconclusivehighheartrate)
- [case inconclusiveLowHeartRate](/documentation/healthkit/hkelectrocardiogram/classification-swift.enum/inconclusivelowheartrate)
- [case inconclusivePoorReading](/documentation/healthkit/hkelectrocardiogram/classification-swift.enum/inconclusivepoorreading)
- [case inconclusiveOther](/documentation/healthkit/hkelectrocardiogram/classification-swift.enum/inconclusiveother)
- [case unrecognized](/documentation/healthkit/hkelectrocardiogram/classification-swift.enum/unrecognized)
- [case notSet](/documentation/healthkit/hkelectrocardiogram/classification-swift.enum/notset)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkelectrocardiogram/classification-swift.enum/init(rawvalue:))
- [var averageHeartRate: HKQuantity?](/documentation/healthkit/hkelectrocardiogram/averageheartrate)
- [var symptomsStatus: HKElectrocardiogram.SymptomsStatus](/documentation/healthkit/hkelectrocardiogram/symptomsstatus-swift.property)
- [HKElectrocardiogram.SymptomsStatus](/documentation/healthkit/hkelectrocardiogram/symptomsstatus-swift.enum)

##### Status

- [case none](/documentation/healthkit/hkelectrocardiogram/symptomsstatus-swift.enum/none)
- [case present](/documentation/healthkit/hkelectrocardiogram/symptomsstatus-swift.enum/present)
- [case notSet](/documentation/healthkit/hkelectrocardiogram/symptomsstatus-swift.enum/notset)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkelectrocardiogram/symptomsstatus-swift.enum/init(rawvalue:))

#### Accessing Voltage Measurements

- [var numberOfVoltageMeasurements: Int](/documentation/healthkit/hkelectrocardiogram/numberofvoltagemeasurements)
- [var samplingFrequency: HKQuantity?](/documentation/healthkit/hkelectrocardiogram/samplingfrequency)
- [HKElectrocardiogram.VoltageMeasurement](/documentation/healthkit/hkelectrocardiogram/voltagemeasurement)

##### Accessing Data

- [func quantity(for: HKElectrocardiogram.Lead) -> HKQuantity?](/documentation/healthkit/hkelectrocardiogram/voltagemeasurement/quantity(for:))
- [var timeSinceSampleStart: TimeInterval](/documentation/healthkit/hkelectrocardiogram/voltagemeasurement/timesincesamplestart)
- [HKElectrocardiogram.Lead](/documentation/healthkit/hkelectrocardiogram/lead)

##### Leads

- [case appleWatchSimilarToLeadI](/documentation/healthkit/hkelectrocardiogram/lead/applewatchsimilartoleadi)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkelectrocardiogram/lead/init(rawvalue:))

#### Specifying Metadata

- [let HKMetadataKeyAppleECGAlgorithmVersion: String](/documentation/healthkit/hkmetadatakeyappleecgalgorithmversion)
- [HKAppleECGAlgorithmVersion](/documentation/healthkit/hkappleecgalgorithmversion)

##### Versions

- [case version1](/documentation/healthkit/hkappleecgalgorithmversion/version1)
- [case version2](/documentation/healthkit/hkappleecgalgorithmversion/version2)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkappleecgalgorithmversion/init(rawvalue:))

#### Specifying Predicate Key Paths

- [let HKPredicateKeyPathECGClassification: String](/documentation/healthkit/hkpredicatekeypathecgclassification)
- [let HKPredicateKeyPathECGSymptomsStatus: String](/documentation/healthkit/hkpredicatekeypathecgsymptomsstatus)
- [let HKPredicateKeyPathAverageHeartRate: String](/documentation/healthkit/hkpredicatekeypathaverageheartrate)
- [HKElectrocardiogram.VoltageMeasurement](/documentation/healthkit/hkelectrocardiogram/voltagemeasurement)

#### Accessing Data

- [func quantity(for: HKElectrocardiogram.Lead) -> HKQuantity?](/documentation/healthkit/hkelectrocardiogram/voltagemeasurement/quantity(for:))
- [var timeSinceSampleStart: TimeInterval](/documentation/healthkit/hkelectrocardiogram/voltagemeasurement/timesincesamplestart)

### Audiograms

- [HKAudiogramSample](/documentation/healthkit/hkaudiogramsample)

#### Creating Audiogram Samples

- [convenience init(sensitivityPoints: [HKAudiogramSensitivityPoint], start: Date, end: Date, metadata: [String : Any]?)](/documentation/healthkit/hkaudiogramsample/init(sensitivitypoints:start:end:metadata:))

#### Accessing Sensitivity Point Data

- [var sensitivityPoints: [HKAudiogramSensitivityPoint]](/documentation/healthkit/hkaudiogramsample/sensitivitypoints)

#### Initializers

- [convenience init(sensitivityPoints: [HKAudiogramSensitivityPoint], start: Date, end: Date, device: HKDevice?, metadata: [String : Any]?)](/documentation/healthkit/hkaudiogramsample/init(sensitivitypoints:start:end:device:metadata:))
- [HKAudiogramSensitivityPoint](/documentation/healthkit/hkaudiogramsensitivitypoint)

#### Creating Sensitivity Points

- [convenience init(frequency: HKQuantity, leftEarSensitivity: HKQuantity?, rightEarSensitivity: HKQuantity?) throws](/documentation/healthkit/hkaudiogramsensitivitypoint/init(frequency:leftearsensitivity:rightearsensitivity:))

#### Accessing Data

- [var frequency: HKQuantity](/documentation/healthkit/hkaudiogramsensitivitypoint/frequency)
- [var leftEarSensitivity: HKQuantity?](/documentation/healthkit/hkaudiogramsensitivitypoint/leftearsensitivity)
- [var rightEarSensitivity: HKQuantity?](/documentation/healthkit/hkaudiogramsensitivitypoint/rightearsensitivity)

#### Initializers

- [convenience init(frequency: HKQuantity, tests: [HKAudiogramSensitivityTest]) throws](/documentation/healthkit/hkaudiogramsensitivitypoint/init(frequency:tests:))

#### Instance Properties

- [var tests: [HKAudiogramSensitivityTest]](/documentation/healthkit/hkaudiogramsensitivitypoint/tests)

### Medical records

- [Accessing Health Records](/documentation/healthkit/accessing-health-records)
- [Accessing Sample Data in the Simulator](/documentation/healthkit/accessing-sample-data-in-the-simulator)
- [Accessing a User’s Clinical Records](/documentation/healthkit/accessing-a-user-s-clinical-records)
- [Accessing Data from a SMART Health Card](/documentation/healthkit/accessing-data-from-a-smart-health-card)
- [HKClinicalRecord](/documentation/healthkit/hkclinicalrecord)

#### Accessing Clinical Record Data

- [var clinicalType: HKClinicalType](/documentation/healthkit/hkclinicalrecord/clinicaltype)
- [var displayName: String](/documentation/healthkit/hkclinicalrecord/displayname)
- [var fhirResource: HKFHIRResource?](/documentation/healthkit/hkclinicalrecord/fhirresource)
- [HKFHIRResource](/documentation/healthkit/hkfhirresource)

#### Accessing FHIR Data

- [var identifier: String](/documentation/healthkit/hkfhirresource/identifier)
- [var fhirVersion: HKFHIRVersion](/documentation/healthkit/hkfhirresource/fhirversion)
- [HKFHIRVersion](/documentation/healthkit/hkfhirversion)

##### Creating Version Objects

- [convenience init(fromVersionString: String) throws](/documentation/healthkit/hkfhirversion/init(fromversionstring:))
- [class func primaryDSTU2() -> Self](/documentation/healthkit/hkfhirversion/primarydstu2())
- [class func primaryR4() -> Self](/documentation/healthkit/hkfhirversion/primaryr4())

##### Accessing Version Data

- [var majorVersion: Int](/documentation/healthkit/hkfhirversion/majorversion)
- [var minorVersion: Int](/documentation/healthkit/hkfhirversion/minorversion)
- [var patchVersion: Int](/documentation/healthkit/hkfhirversion/patchversion)
- [var stringRepresentation: String](/documentation/healthkit/hkfhirversion/stringrepresentation)

##### Accessing the Release

- [var fhirRelease: HKFHIRRelease](/documentation/healthkit/hkfhirversion/fhirrelease)
- [HKFHIRRelease](/documentation/healthkit/hkfhirrelease)

###### Releases

- [static let dstu2: HKFHIRRelease](/documentation/healthkit/hkfhirrelease/dstu2)
- [static let r4: HKFHIRRelease](/documentation/healthkit/hkfhirrelease/r4)
- [static let unknown: HKFHIRRelease](/documentation/healthkit/hkfhirrelease/unknown)

###### Initializers

- [init(rawValue: String)](/documentation/healthkit/hkfhirrelease/init(rawvalue:))
- [var resourceType: HKFHIRResourceType](/documentation/healthkit/hkfhirresource/resourcetype)
- [HKFHIRResourceType](/documentation/healthkit/hkfhirresourcetype)

##### Resource Types

- [static let allergyIntolerance: HKFHIRResourceType](/documentation/healthkit/hkfhirresourcetype/allergyintolerance)
- [static let condition: HKFHIRResourceType](/documentation/healthkit/hkfhirresourcetype/condition)
- [static let diagnosticReport: HKFHIRResourceType](/documentation/healthkit/hkfhirresourcetype/diagnosticreport)
- [static let documentReference: HKFHIRResourceType](/documentation/healthkit/hkfhirresourcetype/documentreference)
- [static let immunization: HKFHIRResourceType](/documentation/healthkit/hkfhirresourcetype/immunization)
- [static let medicationOrder: HKFHIRResourceType](/documentation/healthkit/hkfhirresourcetype/medicationorder)
- [static let medicationDispense: HKFHIRResourceType](/documentation/healthkit/hkfhirresourcetype/medicationdispense)
- [static let medicationStatement: HKFHIRResourceType](/documentation/healthkit/hkfhirresourcetype/medicationstatement)
- [static let medicationRequest: HKFHIRResourceType](/documentation/healthkit/hkfhirresourcetype/medicationrequest)
- [static let observation: HKFHIRResourceType](/documentation/healthkit/hkfhirresourcetype/observation)
- [static let procedure: HKFHIRResourceType](/documentation/healthkit/hkfhirresourcetype/procedure)
- [static let coverage: HKFHIRResourceType](/documentation/healthkit/hkfhirresourcetype/coverage)

##### Initializers

- [init(rawValue: String)](/documentation/healthkit/hkfhirresourcetype/init(rawvalue:))
- [var sourceURL: URL?](/documentation/healthkit/hkfhirresource/sourceurl)
- [var data: Data](/documentation/healthkit/hkfhirresource/data)
- [HKVerifiableClinicalRecord](/documentation/healthkit/hkverifiableclinicalrecord)

#### Identifying the Subject

- [var subject: HKVerifiableClinicalRecordSubject](/documentation/healthkit/hkverifiableclinicalrecord/subject)

#### Identifying the Issuer

- [var issuerIdentifier: String](/documentation/healthkit/hkverifiableclinicalrecord/issueridentifier)

#### Reading Metadata

- [var issuedDate: Date](/documentation/healthkit/hkverifiableclinicalrecord/issueddate)
- [var relevantDate: Date](/documentation/healthkit/hkverifiableclinicalrecord/relevantdate)
- [var expirationDate: Date?](/documentation/healthkit/hkverifiableclinicalrecord/expirationdate)
- [var recordTypes: [String]](/documentation/healthkit/hkverifiableclinicalrecord/recordtypes)
- [var sourceType: HKVerifiableClinicalRecordSourceType?](/documentation/healthkit/hkverifiableclinicalrecord/sourcetype)
- [HKVerifiableClinicalRecordSourceType](/documentation/healthkit/hkverifiableclinicalrecordsourcetype)

##### Identifying Source Types

- [static let euDigitalCOVIDCertificate: HKVerifiableClinicalRecordSourceType](/documentation/healthkit/hkverifiableclinicalrecordsourcetype/eudigitalcovidcertificate)
- [static let smartHealthCard: HKVerifiableClinicalRecordSourceType](/documentation/healthkit/hkverifiableclinicalrecordsourcetype/smarthealthcard)

##### Creating Source Types

- [init(rawValue: String)](/documentation/healthkit/hkverifiableclinicalrecordsourcetype/init(rawvalue:))
- [var itemNames: [String]](/documentation/healthkit/hkverifiableclinicalrecord/itemnames)

#### Accessing the Raw Payload

- [var dataRepresentation: Data](/documentation/healthkit/hkverifiableclinicalrecord/datarepresentation)
- [var jwsRepresentation: Data](/documentation/healthkit/hkverifiableclinicalrecord/jwsrepresentation)
- [HKVerifiableClinicalRecordSubject](/documentation/healthkit/hkverifiableclinicalrecordsubject)

#### Accessing Patient Data

- [var fullName: String](/documentation/healthkit/hkverifiableclinicalrecordsubject/fullname)
- [var dateOfBirthComponents: DateComponents?](/documentation/healthkit/hkverifiableclinicalrecordsubject/dateofbirthcomponents)
- [HKCDADocumentSample](/documentation/healthkit/hkcdadocumentsample)

#### Creating CDA Samples

- [convenience init(data: Data, start: Date, end: Date, metadata: [String : Any]?) throws](/documentation/healthkit/hkcdadocumentsample/init(data:start:end:metadata:))
- [let HKDetailedCDAValidationErrorKey: String](/documentation/healthkit/hkdetailedcdavalidationerrorkey)

#### Accessing the Document

- [var document: HKCDADocument?](/documentation/healthkit/hkcdadocumentsample/document)
- [HKCDADocument](/documentation/healthkit/hkcdadocument)

##### Accessing the Document’s Data

- [var authorName: String](/documentation/healthkit/hkcdadocument/authorname)
- [var custodianName: String](/documentation/healthkit/hkcdadocument/custodianname)
- [var documentData: Data?](/documentation/healthkit/hkcdadocument/documentdata)
- [var patientName: String](/documentation/healthkit/hkcdadocument/patientname)
- [var title: String](/documentation/healthkit/hkcdadocument/title)

#### Accessing Validation Errors

- [let HKDetailedCDAValidationErrorKey: String](/documentation/healthkit/hkdetailedcdavalidationerrorkey)

#### Specifying Predicate Key Paths

- [let HKPredicateKeyPathCDAAuthorName: String](/documentation/healthkit/hkpredicatekeypathcdaauthorname)
- [let HKPredicateKeyPathCDACustodianName: String](/documentation/healthkit/hkpredicatekeypathcdacustodianname)
- [let HKPredicateKeyPathCDAPatientName: String](/documentation/healthkit/hkpredicatekeypathcdapatientname)
- [let HKPredicateKeyPathCDATitle: String](/documentation/healthkit/hkpredicatekeypathcdatitle)
- [HKDocumentSample](/documentation/healthkit/hkdocumentsample)

#### Accessing the Document Sample Properties

- [var documentType: HKDocumentType](/documentation/healthkit/hkdocumentsample/documenttype)
- [static let CDA: HKDocumentTypeIdentifier](/documentation/healthkit/hkdocumenttypeidentifier/cda)
- [HKDocumentType](/documentation/healthkit/hkdocumenttype)

#### Creating Document Types

- [convenience init(HKDocumentTypeIdentifier)](/documentation/healthkit/hkdocumenttype/init(_:))

### Vision prescriptions

- [HKVisionPrescription](/documentation/healthkit/hkvisionprescription)

#### Creating vision prescription samples

- [convenience init(type: HKVisionPrescriptionType, dateIssued: Date, expirationDate: Date?, device: HKDevice?, metadata: [String : Any]?)](/documentation/healthkit/hkvisionprescription/init(type:dateissued:expirationdate:device:metadata:))

#### Accessing the prescription data

- [var prescriptionType: HKVisionPrescriptionType](/documentation/healthkit/hkvisionprescription/prescriptiontype)
- [HKVisionPrescriptionType](/documentation/healthkit/hkvisionprescriptiontype)

##### Prescription types

- [case glasses](/documentation/healthkit/hkvisionprescriptiontype/glasses)
- [case contacts](/documentation/healthkit/hkvisionprescriptiontype/contacts)

##### Initializers

- [init?(rawValue: UInt)](/documentation/healthkit/hkvisionprescriptiontype/init(rawvalue:))
- [var dateIssued: Date](/documentation/healthkit/hkvisionprescription/dateissued)
- [var expirationDate: Date?](/documentation/healthkit/hkvisionprescription/expirationdate)
- [HKGlassesPrescription](/documentation/healthkit/hkglassesprescription)

#### Creating glasses prescription samples

- [convenience init(rightEyeSpecification: HKGlassesLensSpecification?, leftEyeSpecification: HKGlassesLensSpecification?, dateIssued: Date, expirationDate: Date?, device: HKDevice?, metadata: [String : Any]?)](/documentation/healthkit/hkglassesprescription/init(righteyespecification:lefteyespecification:dateissued:expirationdate:device:metadata:))

#### Accessing the glasses prescription data

- [var leftEye: HKGlassesLensSpecification?](/documentation/healthkit/hkglassesprescription/lefteye)
- [var rightEye: HKGlassesLensSpecification?](/documentation/healthkit/hkglassesprescription/righteye)

#### Adding metadata

- [let HKMetadataKeyGlassesPrescriptionDescription: String](/documentation/healthkit/hkmetadatakeyglassesprescriptiondescription)
- [HKContactsPrescription](/documentation/healthkit/hkcontactsprescription)

#### Creating contacts prescription samples

- [convenience init(rightEyeSpecification: HKContactsLensSpecification?, leftEyeSpecification: HKContactsLensSpecification?, brand: String, dateIssued: Date, expirationDate: Date?, device: HKDevice?, metadata: [String : Any]?)](/documentation/healthkit/hkcontactsprescription/init(righteyespecification:lefteyespecification:brand:dateissued:expirationdate:device:metadata:))

#### Accessing the contacts prescription data

- [var brand: String](/documentation/healthkit/hkcontactsprescription/brand)
- [var leftEye: HKContactsLensSpecification?](/documentation/healthkit/hkcontactsprescription/lefteye)
- [var rightEye: HKContactsLensSpecification?](/documentation/healthkit/hkcontactsprescription/righteye)
- [HKGlassesLensSpecification](/documentation/healthkit/hkglasseslensspecification)

#### Creating glasses lens specifications

- [init(sphere: HKQuantity, cylinder: HKQuantity?, axis: HKQuantity?, addPower: HKQuantity?, vertexDistance: HKQuantity?, prism: HKVisionPrism?, farPupillaryDistance: HKQuantity?, nearPupillaryDistance: HKQuantity?)](/documentation/healthkit/hkglasseslensspecification/init(sphere:cylinder:axis:addpower:vertexdistance:prism:farpupillarydistance:nearpupillarydistance:))

#### Accessing the specification’s data

- [var farPupillaryDistance: HKQuantity?](/documentation/healthkit/hkglasseslensspecification/farpupillarydistance)
- [var nearPupillaryDistance: HKQuantity?](/documentation/healthkit/hkglasseslensspecification/nearpupillarydistance)
- [var prism: HKVisionPrism?](/documentation/healthkit/hkglasseslensspecification/prism)
- [var vertexDistance: HKQuantity?](/documentation/healthkit/hkglasseslensspecification/vertexdistance)
- [HKContactsLensSpecification](/documentation/healthkit/hkcontactslensspecification)

#### Creating contacts lens specifications

- [init(sphere: HKQuantity, cylinder: HKQuantity?, axis: HKQuantity?, addPower: HKQuantity?, baseCurve: HKQuantity?, diameter: HKQuantity?)](/documentation/healthkit/hkcontactslensspecification/init(sphere:cylinder:axis:addpower:basecurve:diameter:))

#### Accessing the specification’s data

- [var baseCurve: HKQuantity?](/documentation/healthkit/hkcontactslensspecification/basecurve)
- [var diameter: HKQuantity?](/documentation/healthkit/hkcontactslensspecification/diameter)
- [HKLensSpecification](/documentation/healthkit/hklensspecification)

#### Accessing lens specification data

- [var sphere: HKQuantity](/documentation/healthkit/hklensspecification/sphere)
- [var cylinder: HKQuantity?](/documentation/healthkit/hklensspecification/cylinder)
- [var axis: HKQuantity?](/documentation/healthkit/hklensspecification/axis)
- [var addPower: HKQuantity?](/documentation/healthkit/hklensspecification/addpower)
- [HKVisionPrism](/documentation/healthkit/hkvisionprism)

#### Creating vision prism objects

- [init(amount: HKQuantity, angle: HKQuantity, eye: HKVisionEye)](/documentation/healthkit/hkvisionprism/init(amount:angle:eye:))
- [init(verticalAmount: HKQuantity, verticalBase: HKPrismBase, horizontalAmount: HKQuantity, horizontalBase: HKPrismBase, eye: HKVisionEye)](/documentation/healthkit/hkvisionprism/init(verticalamount:verticalbase:horizontalamount:horizontalbase:eye:))

#### Accessing lens specification data

- [var eye: HKVisionEye](/documentation/healthkit/hkvisionprism/eye)
- [HKVisionEye](/documentation/healthkit/hkvisioneye)

##### Eyes

- [case left](/documentation/healthkit/hkvisioneye/left)
- [case right](/documentation/healthkit/hkvisioneye/right)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkvisioneye/init(rawvalue:))
- [var amount: HKQuantity](/documentation/healthkit/hkvisionprism/amount)
- [var angle: HKQuantity](/documentation/healthkit/hkvisionprism/angle)
- [var horizontalAmount: HKQuantity](/documentation/healthkit/hkvisionprism/horizontalamount)
- [var horizontalBase: HKPrismBase](/documentation/healthkit/hkvisionprism/horizontalbase)
- [var verticalAmount: HKQuantity](/documentation/healthkit/hkvisionprism/verticalamount)
- [var verticalBase: HKPrismBase](/documentation/healthkit/hkvisionprism/verticalbase)
- [HKPrismBase](/documentation/healthkit/hkprismbase)

##### Prism Base

- [case none](/documentation/healthkit/hkprismbase/none)
- [case up](/documentation/healthkit/hkprismbase/up)
- [case down](/documentation/healthkit/hkprismbase/down)
- [case `in`](/documentation/healthkit/hkprismbase/in)
- [case out](/documentation/healthkit/hkprismbase/out)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkprismbase/init(rawvalue:))
- [HKPrescriptionType](/documentation/healthkit/hkprescriptiontype)

### Walking steadiness classifications

- [HKAppleWalkingSteadinessClassification](/documentation/healthkit/hkapplewalkingsteadinessclassification)

#### Accessing Classifications

- [case ok](/documentation/healthkit/hkapplewalkingsteadinessclassification/ok)
- [case low](/documentation/healthkit/hkapplewalkingsteadinessclassification/low)
- [case veryLow](/documentation/healthkit/hkapplewalkingsteadinessclassification/verylow)

#### Initializers

- [init(for: HKQuantity) throws](/documentation/healthkit/hkapplewalkingsteadinessclassification/init(for:))
- [init?(rawValue: Int)](/documentation/healthkit/hkapplewalkingsteadinessclassification/init(rawvalue:))

#### Instance Properties

- [var maximum: HKQuantity](/documentation/healthkit/hkapplewalkingsteadinessclassification/maximum)
- [var minimum: HKQuantity](/documentation/healthkit/hkapplewalkingsteadinessclassification/minimum)

#### Default Implementations

- [CaseIterable Implementations](/documentation/healthkit/hkapplewalkingsteadinessclassification/caseiterable-implementations)

##### Type Properties

- [static var allCases: [HKAppleWalkingSteadinessClassification]](/documentation/healthkit/hkapplewalkingsteadinessclassification/allcases)

### Attachments

- [HKAttachment](/documentation/healthkit/hkattachment)

#### Accessing attachment data

- [var name: String](/documentation/healthkit/hkattachment/name)
- [var identifier: UUID](/documentation/healthkit/hkattachment/identifier)
- [var contentType: UTType](/documentation/healthkit/hkattachment/contenttype)
- [var size: Int](/documentation/healthkit/hkattachment/size)
- [var creationDate: Date](/documentation/healthkit/hkattachment/creationdate)
- [var metadata: [String : Any]?](/documentation/healthkit/hkattachment/metadata)
- [HKAttachment.AsyncBytes](/documentation/healthkit/hkattachment/asyncbytes)
- [HKAttachmentStore](/documentation/healthkit/hkattachmentstore)

#### Creating an attachment store

- [init(healthStore: HKHealthStore)](/documentation/healthkit/hkattachmentstore/init(healthstore:))

#### Adding attachments

- [func addAttachment(to: HKObject, name: String, contentType: UTType, url: URL, metadata: [String : Any]) async throws -> HKAttachment](/documentation/healthkit/hkattachmentstore/addattachment(to:name:contenttype:url:metadata:))
- [func addAttachment(to: HKObject, name: String, contentType: UTType, url: URL, metadata: [String : Any], completion: (HKAttachment?, (any Error)?) -> Void)](/documentation/healthkit/hkattachmentstore/addattachment(to:name:contenttype:url:metadata:completion:))

#### Accessing attachments

- [func getAttachments(for: HKObject, completion: ([HKAttachment]?, (any Error)?) -> Void)](/documentation/healthkit/hkattachmentstore/getattachments(for:completion:))
- [func dataReader(for: HKAttachment) -> HKAttachmentDataReader](/documentation/healthkit/hkattachmentstore/datareader(for:))
- [func getData(for: HKAttachment, completion: (Data?, (any Error)?) -> Void) -> Progress](/documentation/healthkit/hkattachmentstore/getdata(for:completion:))
- [func streamData(for: HKAttachment, dataHandler: (Data?, (any Error)?, Bool) -> Void) -> Progress](/documentation/healthkit/hkattachmentstore/streamdata(for:datahandler:))

#### Removing attachments

- [func removeAttachment(HKAttachment, from: HKObject, completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkattachmentstore/removeattachment(_:from:completion:))
- [HKAttachmentDataReader](/documentation/healthkit/hkattachmentdatareader)

#### Reading attachment data

- [var data: Data](/documentation/healthkit/hkattachmentdatareader/data)
- [var bytes: HKAttachment.AsyncBytes](/documentation/healthkit/hkattachmentdatareader/bytes)
- [var progress: Progress](/documentation/healthkit/hkattachmentdatareader/progress)

#### Accessing the attachment object

- [var attachment: HKAttachment](/documentation/healthkit/hkattachmentdatareader/attachment)

### Digital signatures

- [Adding Digital Signatures](/documentation/healthkit/adding-digital-signatures)

### Abstract superclasses

- [HKQuantitySample](/documentation/healthkit/hkquantitysample)

#### Creating Quantity Samples

- [convenience init(type: HKQuantityType, quantity: HKQuantity, start: Date, end: Date)](/documentation/healthkit/hkquantitysample/init(type:quantity:start:end:))
- [convenience init(type: HKQuantityType, quantity: HKQuantity, start: Date, end: Date, metadata: [String : Any]?)](/documentation/healthkit/hkquantitysample/init(type:quantity:start:end:metadata:))
- [convenience init(type: HKQuantityType, quantity: HKQuantity, start: Date, end: Date, device: HKDevice?, metadata: [String : Any]?)](/documentation/healthkit/hkquantitysample/init(type:quantity:start:end:device:metadata:))

#### Getting Property Data

- [var quantity: HKQuantity](/documentation/healthkit/hkquantitysample/quantity)
- [var count: Int](/documentation/healthkit/hkquantitysample/count)
- [var quantityType: HKQuantityType](/documentation/healthkit/hkquantitysample/quantitytype)

#### Specifying Predicate Key Paths

- [let HKPredicateKeyPathQuantity: String](/documentation/healthkit/hkpredicatekeypathquantity)
- [let HKPredicateKeyPathCount: String](/documentation/healthkit/hkpredicatekeypathcount)
- [HKSample](/documentation/healthkit/hksample)

#### Accessing the Sample’s Data

- [var startDate: Date](/documentation/healthkit/hksample/startdate)
- [var endDate: Date](/documentation/healthkit/hksample/enddate)
- [var hasUndeterminedDuration: Bool](/documentation/healthkit/hksample/hasundeterminedduration)
- [var sampleType: HKSampleType](/documentation/healthkit/hksample/sampletype)

#### Specifying Sort Identifiers

- [let HKSampleSortIdentifierStartDate: String](/documentation/healthkit/hksamplesortidentifierstartdate)
- [let HKSampleSortIdentifierEndDate: String](/documentation/healthkit/hksamplesortidentifierenddate)

#### Specifying Predicate Key Paths

- [let HKPredicateKeyPathStartDate: String](/documentation/healthkit/hkpredicatekeypathstartdate)
- [let HKPredicateKeyPathEndDate: String](/documentation/healthkit/hkpredicatekeypathenddate)
- [HKObject](/documentation/healthkit/hkobject)

#### Accessing Properties

- [var uuid: UUID](/documentation/healthkit/hkobject/uuid)
- [var metadata: [String : Any]?](/documentation/healthkit/hkobject/metadata)
- [var device: HKDevice?](/documentation/healthkit/hkobject/device)
- [var sourceRevision: HKSourceRevision](/documentation/healthkit/hkobject/sourcerevision)
- [var source: HKSource](/documentation/healthkit/hkobject/source)

#### Specifying Predicate Key Paths

- [let HKPredicateKeyPathUUID: String](/documentation/healthkit/hkpredicatekeypathuuid)
- [let HKPredicateKeyPathMetadata: String](/documentation/healthkit/hkpredicatekeypathmetadata)

### Deprecated classes

- [HKCumulativeQuantitySeriesSample](/documentation/healthkit/hkcumulativequantityseriessample)

#### Accessing Data

- [var sum: HKQuantity](/documentation/healthkit/hkcumulativequantityseriessample/sum)

#### Specifying Predicate Key Paths

- [let HKPredicateKeyPathSum: String](/documentation/healthkit/hkpredicatekeypathsum)
- [Queries](/documentation/healthkit/queries)

### Essentials

- [Reading data from HealthKit](/documentation/healthkit/reading-data-from-healthkit)

### Swift concurrency support

- [Running Queries with Swift Concurrency](/documentation/healthkit/running-queries-with-swift-concurrency)
- [HKAsyncQuery](/documentation/healthkit/hkasyncquery)

#### Running Queries

- [Output](/documentation/healthkit/hkasyncquery/output)
- [func result(for: HKHealthStore) async throws -> Self.Output](/documentation/healthkit/hkasyncquery/result(for:))
- [HKAsyncSequenceQuery](/documentation/healthkit/hkasyncsequencequery)

#### Running Queries

- [Sequence](/documentation/healthkit/hkasyncsequencequery/sequence)
- [func results(for: HKHealthStore) -> Self.Sequence](/documentation/healthkit/hkasyncsequencequery/results(for:))
- [HKSamplePredicate](/documentation/healthkit/hksamplepredicate)

#### Creating Sample Predicates

- [static func audiogram(NSPredicate?) -> HKSamplePredicate<HKAudiogramSample>](/documentation/healthkit/hksamplepredicate/audiogram(_:))
- [static func categorySample(type: HKCategoryType, predicate: NSPredicate?) -> HKSamplePredicate<HKCategorySample>](/documentation/healthkit/hksamplepredicate/categorysample(type:predicate:))
- [static func clinicalRecord(type: HKClinicalType, predicate: NSPredicate?) -> HKSamplePredicate<HKClinicalRecord>](/documentation/healthkit/hksamplepredicate/clinicalrecord(type:predicate:))
- [static func correlation(type: HKCorrelationType, predicate: NSPredicate?) -> HKSamplePredicate<HKCorrelation>](/documentation/healthkit/hksamplepredicate/correlation(type:predicate:))
- [static func electrocardiogram(NSPredicate?) -> HKSamplePredicate<HKElectrocardiogram>](/documentation/healthkit/hksamplepredicate/electrocardiogram(_:))
- [static func heartbeatSeries(NSPredicate?) -> HKSamplePredicate<HKHeartbeatSeriesSample>](/documentation/healthkit/hksamplepredicate/heartbeatseries(_:))
- [static func quantitySample(type: HKQuantityType, predicate: NSPredicate?) -> HKSamplePredicate<HKQuantitySample>](/documentation/healthkit/hksamplepredicate/quantitysample(type:predicate:))
- [static func sample(type: HKSampleType, predicate: NSPredicate?) -> HKSamplePredicate<HKSample>](/documentation/healthkit/hksamplepredicate/sample(type:predicate:))
- [static func visionPrescription(NSPredicate?) -> HKSamplePredicate<HKVisionPrescription>](/documentation/healthkit/hksamplepredicate/visionprescription(_:))
- [static func workout(NSPredicate?) -> HKSamplePredicate<HKWorkout>](/documentation/healthkit/hksamplepredicate/workout(_:))
- [static func workoutRoute(NSPredicate?) -> HKSamplePredicate<HKWorkoutRoute>](/documentation/healthkit/hksamplepredicate/workoutroute(_:))

#### Accessing Sample Predicate Data

- [let nsPredicate: NSPredicate?](/documentation/healthkit/hksamplepredicate/nspredicate)
- [let sampleType: HKSampleType](/documentation/healthkit/hksamplepredicate/sampletype)

#### Type Methods

- [static func gad7Assessment(NSPredicate?) -> HKSamplePredicate<HKGAD7Assessment>](/documentation/healthkit/hksamplepredicate/gad7assessment(_:))
- [static func phq9Assessment(NSPredicate?) -> HKSamplePredicate<HKPHQ9Assessment>](/documentation/healthkit/hksamplepredicate/phq9assessment(_:))
- [static func stateOfMind(NSPredicate?) -> HKSamplePredicate<HKStateOfMind>](/documentation/healthkit/hksamplepredicate/stateofmind(_:))

### Basic queries

- [HKSampleQueryDescriptor](/documentation/healthkit/hksamplequerydescriptor)

#### Creating Query Descriptors

- [init(predicates: [HKSamplePredicate<Sample>], sortDescriptors: [SortDescriptor<Sample>], limit: Int?)](/documentation/healthkit/hksamplequerydescriptor/init(predicates:sortdescriptors:limit:))

#### Running Queries

- [func result(for: HKHealthStore) async throws -> [Sample]](/documentation/healthkit/hksamplequerydescriptor/result(for:))

#### Accessing Query Properties

- [var limit: Int?](/documentation/healthkit/hksamplequerydescriptor/limit)
- [var predicates: [HKSamplePredicate<Sample>]](/documentation/healthkit/hksamplequerydescriptor/predicates)
- [var sortDescriptors: [SortDescriptor<Sample>]](/documentation/healthkit/hksamplequerydescriptor/sortdescriptors)

#### Default Implementations

- [HKAsyncQuery Implementations](/documentation/healthkit/hksamplequerydescriptor/hkasyncquery-implementations)

##### Instance Methods

- [func result(for: HKHealthStore) async throws -> [Sample]](/documentation/healthkit/hksamplequerydescriptor/result(for:))
- [HKSampleQuery](/documentation/healthkit/hksamplequery)

#### Creating Sample Queries

- [Executing Sample Queries](/documentation/healthkit/executing-sample-queries)
- [init(sampleType: HKSampleType, predicate: NSPredicate?, limit: Int, sortDescriptors: [NSSortDescriptor]?, resultsHandler: (HKSampleQuery, [HKSample]?, (any Error)?) -> Void)](/documentation/healthkit/hksamplequery/init(sampletype:predicate:limit:sortdescriptors:resultshandler:))
- [init(queryDescriptors: [HKQueryDescriptor], limit: Int, resultsHandler: (HKSampleQuery, [HKSample]?, (any Error)?) -> Void)](/documentation/healthkit/hksamplequery/init(querydescriptors:limit:resultshandler:))
- [init(queryDescriptors: [HKQueryDescriptor], limit: Int, sortDescriptors: [NSSortDescriptor], resultsHandler: (HKSampleQuery, [HKSample]?, (any Error)?) -> Void)](/documentation/healthkit/hksamplequery/init(querydescriptors:limit:sortdescriptors:resultshandler:))
- [var HKObjectQueryNoLimit: Int](/documentation/healthkit/hkobjectquerynolimit)
- [HealthKit sort descriptors](/documentation/healthkit/healthkit-sort-descriptors)

##### Sample sort identifiers

- [let HKSampleSortIdentifierStartDate: String](/documentation/healthkit/hksamplesortidentifierstartdate)
- [let HKSampleSortIdentifierEndDate: String](/documentation/healthkit/hksamplesortidentifierenddate)

##### Workout sort identifiers

- [let HKWorkoutSortIdentifierDuration: String](/documentation/healthkit/hkworkoutsortidentifierduration)
- [let HKWorkoutSortIdentifierTotalDistance: String](/documentation/healthkit/hkworkoutsortidentifiertotaldistance)
- [let HKWorkoutSortIdentifierTotalFlightsClimbed: String](/documentation/healthkit/hkworkoutsortidentifiertotalflightsclimbed)
- [let HKWorkoutSortIdentifierTotalEnergyBurned: String](/documentation/healthkit/hkworkoutsortidentifiertotalenergyburned)
- [let HKWorkoutSortIdentifierTotalSwimmingStrokeCount: String](/documentation/healthkit/hkworkoutsortidentifiertotalswimmingstrokecount)

#### Getting Property Data

- [var limit: Int](/documentation/healthkit/hksamplequery/limit)
- [var sortDescriptors: [NSSortDescriptor]?](/documentation/healthkit/hksamplequery/sortdescriptors)

#### Setting Limits

- [var HKObjectQueryNoLimit: Int](/documentation/healthkit/hkobjectquerynolimit)
- [HKCorrelationQuery](/documentation/healthkit/hkcorrelationquery)

#### Creating Correlation Queries

- [init(type: HKCorrelationType, predicate: NSPredicate?, samplePredicates: [HKSampleType : NSPredicate]?, completion: (HKCorrelationQuery, [HKCorrelation]?, (any Error)?) -> Void)](/documentation/healthkit/hkcorrelationquery/init(type:predicate:samplepredicates:completion:))

#### Getting Property Data

- [var correlationType: HKCorrelationType](/documentation/healthkit/hkcorrelationquery/correlationtype)
- [var samplePredicates: [HKSampleType : NSPredicate]?](/documentation/healthkit/hkcorrelationquery/samplepredicates)
- [HKQueryDescriptor](/documentation/healthkit/hkquerydescriptor)

#### Creating Query Descriptors

- [init(sampleType: HKSampleType, predicate: NSPredicate?)](/documentation/healthkit/hkquerydescriptor/init(sampletype:predicate:))

#### Accessing Descriptor Data

- [var predicate: NSPredicate?](/documentation/healthkit/hkquerydescriptor/predicate)
- [var sampleType: HKSampleType](/documentation/healthkit/hkquerydescriptor/sampletype)
- [HKQuery](/documentation/healthkit/hkquery)

#### Accessing properties

- [var predicate: NSPredicate?](/documentation/healthkit/hkquery/predicate)
- [var objectType: HKObjectType?](/documentation/healthkit/hkquery/objecttype)
- [var sampleType: HKSampleType?](/documentation/healthkit/hkquery/sampletype)

#### Creating object predicates

- [class func predicateForObject(with: UUID) -> NSPredicate](/documentation/healthkit/hkquery/predicateforobject(with:))
- [class func predicateForObjects(with: Set<UUID>) -> NSPredicate](/documentation/healthkit/hkquery/predicateforobjects(with:))
- [class func predicateForObjects(from: HKSource) -> NSPredicate](/documentation/healthkit/hkquery/predicateforobjects(from:)-7j3p2)
- [class func predicateForObjects(from: Set<HKSource>) -> NSPredicate](/documentation/healthkit/hkquery/predicateforobjects(from:)-89b4t)
- [class func predicateForObjects(from: Set<HKDevice>) -> NSPredicate](/documentation/healthkit/hkquery/predicateforobjects(from:)-9h87f)
- [class func predicateForObjects(withDeviceProperty: String, allowedValues: Set<String>) -> NSPredicate](/documentation/healthkit/hkquery/predicateforobjects(withdeviceproperty:allowedvalues:))

##### Valid Device Property Keys

- [let HKDevicePropertyKeyName: String](/documentation/healthkit/hkdevicepropertykeyname)
- [let HKDevicePropertyKeyManufacturer: String](/documentation/healthkit/hkdevicepropertykeymanufacturer)
- [let HKDevicePropertyKeyModel: String](/documentation/healthkit/hkdevicepropertykeymodel)
- [let HKDevicePropertyKeyHardwareVersion: String](/documentation/healthkit/hkdevicepropertykeyhardwareversion)
- [let HKDevicePropertyKeyFirmwareVersion: String](/documentation/healthkit/hkdevicepropertykeyfirmwareversion)
- [let HKDevicePropertyKeySoftwareVersion: String](/documentation/healthkit/hkdevicepropertykeysoftwareversion)
- [let HKDevicePropertyKeyLocalIdentifier: String](/documentation/healthkit/hkdevicepropertykeylocalidentifier)
- [let HKDevicePropertyKeyUDIDeviceIdentifier: String](/documentation/healthkit/hkdevicepropertykeyudideviceidentifier)
- [class func predicateForObjects(from: Set<HKSourceRevision>) -> NSPredicate](/documentation/healthkit/hkquery/predicateforobjects(from:)-1ar4g)
- [class func predicateForObjects(withMetadataKey: String) -> NSPredicate](/documentation/healthkit/hkquery/predicateforobjects(withmetadatakey:))
- [class func predicateForObjects(withMetadataKey: String, allowedValues: [Any]) -> NSPredicate](/documentation/healthkit/hkquery/predicateforobjects(withmetadatakey:allowedvalues:))
- [class func predicateForObjects(withMetadataKey: String, operatorType: NSComparisonPredicate.Operator, value: Any) -> NSPredicate](/documentation/healthkit/hkquery/predicateforobjects(withmetadatakey:operatortype:value:))
- [class func predicateForObjectsWithNoCorrelation() -> NSPredicate](/documentation/healthkit/hkquery/predicateforobjectswithnocorrelation())

#### Creating sample predicates

- [class func predicateForSamples(withStart: Date?, end: Date?, options: HKQueryOptions) -> NSPredicate](/documentation/healthkit/hkquery/predicateforsamples(withstart:end:options:))
- [HKQueryOptions](/documentation/healthkit/hkqueryoptions)

##### Constants

- [static var strictStartDate: HKQueryOptions](/documentation/healthkit/hkqueryoptions/strictstartdate)
- [static var strictEndDate: HKQueryOptions](/documentation/healthkit/hkqueryoptions/strictenddate)

##### Initializers

- [init(rawValue: UInt)](/documentation/healthkit/hkqueryoptions/init(rawvalue:))

#### Creating quantity sample predicates

- [class func predicateForQuantitySamples(with: NSComparisonPredicate.Operator, quantity: HKQuantity) -> NSPredicate](/documentation/healthkit/hkquery/predicateforquantitysamples(with:quantity:))

#### Creating category sample predicates

- [class func predicateForCategorySamples(with: NSComparisonPredicate.Operator, value: Int) -> NSPredicate](/documentation/healthkit/hkquery/predicateforcategorysamples(with:value:))
- [HKCategoryValuePredicateProviding](/documentation/healthkit/hkcategoryvaluepredicateproviding)

##### Creating predicates

- [static func predicateForSamples(NSComparisonPredicate.Operator, value: Self) -> NSPredicate](/documentation/healthkit/hkcategoryvaluepredicateproviding/predicateforsamples(_:value:))
- [static func predicateForSamples(equalTo: Set<Self>) -> NSPredicate](/documentation/healthkit/hkcategoryvaluepredicateproviding/predicateforsamples(equalto:))

#### Creating clinical record predicates

- [class func predicateForClinicalRecords(from: HKSource, fhirResourceType: HKFHIRResourceType, identifier: String) -> NSPredicate](/documentation/healthkit/hkquery/predicateforclinicalrecords(from:fhirresourcetype:identifier:))
- [class func predicateForClinicalRecords(withFHIRResourceType: HKFHIRResourceType) -> NSPredicate](/documentation/healthkit/hkquery/predicateforclinicalrecords(withfhirresourcetype:))
- [class func predicateForVerifiableClinicalRecords(withRelevantDateWithin: DateInterval) -> NSPredicate](/documentation/healthkit/hkquery/predicateforverifiableclinicalrecords(withrelevantdatewithin:))

#### Creating workout predicates

- [class func predicateForObjects(from: HKWorkout) -> NSPredicate](/documentation/healthkit/hkquery/predicateforobjects(from:)-5irg9)
- [class func predicateForWorkouts(with: HKWorkoutActivityType) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkouts(with:))
- [class func predicateForWorkouts(activityPredicate: NSPredicate) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkouts(activitypredicate:))
- [class func predicateForWorkouts(with: NSComparisonPredicate.Operator, duration: TimeInterval) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkouts(with:duration:))
- [class func predicateForWorkouts(operatorType: NSComparisonPredicate.Operator, quantityType: HKQuantityType, averageQuantity: HKQuantity) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkouts(operatortype:quantitytype:averagequantity:))
- [class func predicateForWorkouts(operatorType: NSComparisonPredicate.Operator, quantityType: HKQuantityType, maximumQuantity: HKQuantity) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkouts(operatortype:quantitytype:maximumquantity:))
- [class func predicateForWorkouts(operatorType: NSComparisonPredicate.Operator, quantityType: HKQuantityType, minimumQuantity: HKQuantity) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkouts(operatortype:quantitytype:minimumquantity:))
- [class func predicateForWorkouts(operatorType: NSComparisonPredicate.Operator, quantityType: HKQuantityType, sumQuantity: HKQuantity) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkouts(operatortype:quantitytype:sumquantity:))
- [class func predicateForWorkouts(with: NSComparisonPredicate.Operator, totalDistance: HKQuantity) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkouts(with:totaldistance:))
- [class func predicateForWorkouts(with: NSComparisonPredicate.Operator, totalEnergyBurned: HKQuantity) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkouts(with:totalenergyburned:))
- [class func predicateForWorkouts(with: NSComparisonPredicate.Operator, totalFlightsClimbed: HKQuantity) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkouts(with:totalflightsclimbed:))
- [class func predicateForWorkouts(with: NSComparisonPredicate.Operator, totalSwimmingStrokeCount: HKQuantity) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkouts(with:totalswimmingstrokecount:))

#### Creating workout activity predicates

- [class func predicateForWorkoutActivities(workoutActivityType: HKWorkoutActivityType) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkoutactivities(workoutactivitytype:))
- [class func predicateForWorkoutActivities(operatorType: NSComparisonPredicate.Operator, duration: TimeInterval) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkoutactivities(operatortype:duration:))
- [class func predicateForWorkoutActivities(start: Date?, end: Date?, options: HKQueryOptions) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkoutactivities(start:end:options:))
- [class func predicateForWorkoutActivities(operatorType: NSComparisonPredicate.Operator, quantityType: HKQuantityType, averageQuantity: HKQuantity) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkoutactivities(operatortype:quantitytype:averagequantity:))
- [class func predicateForWorkoutActivities(operatorType: NSComparisonPredicate.Operator, quantityType: HKQuantityType, maximumQuantity: HKQuantity) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkoutactivities(operatortype:quantitytype:maximumquantity:))
- [class func predicateForWorkoutActivities(operatorType: NSComparisonPredicate.Operator, quantityType: HKQuantityType, minimumQuantity: HKQuantity) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkoutactivities(operatortype:quantitytype:minimumquantity:))
- [class func predicateForWorkoutActivities(operatorType: NSComparisonPredicate.Operator, quantityType: HKQuantityType, sumQuantity: HKQuantity) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkoutactivities(operatortype:quantitytype:sumquantity:))

#### Creating activity summary predicates

- [class func predicateForActivitySummary(with: DateComponents) -> NSPredicate](/documentation/healthkit/hkquery/predicateforactivitysummary(with:))
- [class func predicate(forActivitySummariesBetweenStart: DateComponents, end: DateComponents) -> NSPredicate](/documentation/healthkit/hkquery/predicate(foractivitysummariesbetweenstart:end:))

#### Creating electrocardiogram predicates

- [class func predicateForElectrocardiograms(classification: HKElectrocardiogram.Classification) -> NSPredicate](/documentation/healthkit/hkquery/predicateforelectrocardiograms(classification:))
- [class func predicateForElectrocardiograms(symptomsStatus: HKElectrocardiogram.SymptomsStatus) -> NSPredicate](/documentation/healthkit/hkquery/predicateforelectrocardiograms(symptomsstatus:))
- [class func predicateForObjectsAssociated(electrocardiogram: HKElectrocardiogram) -> NSPredicate](/documentation/healthkit/hkquery/predicateforobjectsassociated(electrocardiogram:))

#### Creating predicate format strings

- [Predicate format strings](/documentation/healthkit/predicate-format-strings)

##### Object keys

- [let HKPredicateKeyPathUUID: String](/documentation/healthkit/hkpredicatekeypathuuid)
- [let HKPredicateKeyPathMetadata: String](/documentation/healthkit/hkpredicatekeypathmetadata)
- [let HKPredicateKeyPathSum: String](/documentation/healthkit/hkpredicatekeypathsum)

##### Quantity sample keys

- [let HKPredicateKeyPathQuantity: String](/documentation/healthkit/hkpredicatekeypathquantity)

##### Category sample keys

- [let HKPredicateKeyPathCategoryValue: String](/documentation/healthkit/hkpredicatekeypathcategoryvalue)

##### Correlation sample keys

- [let HKPredicateKeyPathCorrelation: String](/documentation/healthkit/hkpredicatekeypathcorrelation)

##### Device and source keys

- [let HKPredicateKeyPathDevice: String](/documentation/healthkit/hkpredicatekeypathdevice)
- [let HKPredicateKeyPathSource: String](/documentation/healthkit/hkpredicatekeypathsource)
- [let HKPredicateKeyPathSourceRevision: String](/documentation/healthkit/hkpredicatekeypathsourcerevision)

##### Start and end date keys

- [let HKPredicateKeyPathStartDate: String](/documentation/healthkit/hkpredicatekeypathstartdate)
- [let HKPredicateKeyPathEndDate: String](/documentation/healthkit/hkpredicatekeypathenddate)

##### Activity summary keys

- [let HKPredicateKeyPathDateComponents: String](/documentation/healthkit/hkpredicatekeypathdatecomponents)

##### Document keys

- [let HKPredicateKeyPathCDAAuthorName: String](/documentation/healthkit/hkpredicatekeypathcdaauthorname)
- [let HKPredicateKeyPathCDACustodianName: String](/documentation/healthkit/hkpredicatekeypathcdacustodianname)
- [let HKPredicateKeyPathCDAPatientName: String](/documentation/healthkit/hkpredicatekeypathcdapatientname)
- [let HKPredicateKeyPathCDATitle: String](/documentation/healthkit/hkpredicatekeypathcdatitle)

##### Clinical record keys

- [let HKPredicateKeyPathClinicalRecordFHIRResourceIdentifier: String](/documentation/healthkit/hkpredicatekeypathclinicalrecordfhirresourceidentifier)
- [let HKPredicateKeyPathClinicalRecordFHIRResourceType: String](/documentation/healthkit/hkpredicatekeypathclinicalrecordfhirresourcetype)

##### Workout keys

- [let HKPredicateKeyPathWorkout: String](/documentation/healthkit/hkpredicatekeypathworkout)
- [let HKPredicateKeyPathWorkoutType: String](/documentation/healthkit/hkpredicatekeypathworkouttype)
- [let HKPredicateKeyPathWorkoutDuration: String](/documentation/healthkit/hkpredicatekeypathworkoutduration)
- [let HKPredicateKeyPathWorkoutAverageQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutaveragequantity)
- [let HKPredicateKeyPathWorkoutMaximumQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutmaximumquantity)
- [let HKPredicateKeyPathWorkoutMinimumQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutminimumquantity)
- [let HKPredicateKeyPathWorkoutSumQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutsumquantity)
- [let HKPredicateKeyPathWorkoutTotalDistance: String](/documentation/healthkit/hkpredicatekeypathworkouttotaldistance)
- [let HKPredicateKeyPathWorkoutTotalEnergyBurned: String](/documentation/healthkit/hkpredicatekeypathworkouttotalenergyburned)
- [let HKPredicateKeyPathWorkoutTotalFlightsClimbed: String](/documentation/healthkit/hkpredicatekeypathworkouttotalflightsclimbed)
- [let HKPredicateKeyPathWorkoutTotalSwimmingStrokeCount: String](/documentation/healthkit/hkpredicatekeypathworkouttotalswimmingstrokecount)

##### Workout activity keys

- [let HKPredicateKeyPathWorkoutActivity: String](/documentation/healthkit/hkpredicatekeypathworkoutactivity)
- [let HKPredicateKeyPathWorkoutActivityType: String](/documentation/healthkit/hkpredicatekeypathworkoutactivitytype)
- [let HKPredicateKeyPathWorkoutActivityStartDate: String](/documentation/healthkit/hkpredicatekeypathworkoutactivitystartdate)
- [let HKPredicateKeyPathWorkoutActivityEndDate: String](/documentation/healthkit/hkpredicatekeypathworkoutactivityenddate)
- [let HKPredicateKeyPathWorkoutActivityDuration: String](/documentation/healthkit/hkpredicatekeypathworkoutactivityduration)
- [let HKPredicateKeyPathWorkoutActivityAverageQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutactivityaveragequantity)
- [let HKPredicateKeyPathWorkoutActivityMaximumQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutactivitymaximumquantity)
- [let HKPredicateKeyPathWorkoutActivityMinimumQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutactivityminimumquantity)
- [let HKPredicateKeyPathWorkoutActivitySumQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutactivitysumquantity)

#### Creating sort descriptors

- [HealthKit sort descriptors](/documentation/healthkit/healthkit-sort-descriptors)

##### Sample sort identifiers

- [let HKSampleSortIdentifierStartDate: String](/documentation/healthkit/hksamplesortidentifierstartdate)
- [let HKSampleSortIdentifierEndDate: String](/documentation/healthkit/hksamplesortidentifierenddate)

##### Workout sort identifiers

- [let HKWorkoutSortIdentifierDuration: String](/documentation/healthkit/hkworkoutsortidentifierduration)
- [let HKWorkoutSortIdentifierTotalDistance: String](/documentation/healthkit/hkworkoutsortidentifiertotaldistance)
- [let HKWorkoutSortIdentifierTotalFlightsClimbed: String](/documentation/healthkit/hkworkoutsortidentifiertotalflightsclimbed)
- [let HKWorkoutSortIdentifierTotalEnergyBurned: String](/documentation/healthkit/hkworkoutsortidentifiertotalenergyburned)
- [let HKWorkoutSortIdentifierTotalSwimmingStrokeCount: String](/documentation/healthkit/hkworkoutsortidentifiertotalswimmingstrokecount)

#### Type Methods

- [class func predicateForMedicationDoseEvent(medicationConceptIdentifier: HKHealthConceptIdentifier) -> NSPredicate](/documentation/healthkit/hkquery/predicateformedicationdoseevent(medicationconceptidentifier:))
- [class func predicateForMedicationDoseEvent(medicationConceptIdentifiers: Set<HKHealthConceptIdentifier>) -> NSPredicate](/documentation/healthkit/hkquery/predicateformedicationdoseevent(medicationconceptidentifiers:))
- [class func predicateForMedicationDoseEvent(scheduledDate: Date) -> NSPredicate](/documentation/healthkit/hkquery/predicateformedicationdoseevent(scheduleddate:))
- [class func predicateForMedicationDoseEvent(scheduledDates: Set<Date>) -> NSPredicate](/documentation/healthkit/hkquery/predicateformedicationdoseevent(scheduleddates:))
- [class func predicateForMedicationDoseEvent(scheduledStart: Date?, end: Date?) -> NSPredicate](/documentation/healthkit/hkquery/predicateformedicationdoseevent(scheduledstart:end:))
- [class func predicateForMedicationDoseEvent(status: HKMedicationDoseEvent.LogStatus) -> NSPredicate](/documentation/healthkit/hkquery/predicateformedicationdoseevent(status:))
- [class func predicateForMedicationDoseEvent(statuses: Set<NSNumber>) -> NSPredicate](/documentation/healthkit/hkquery/predicateformedicationdoseevent(statuses:))
- [class func predicateForStatesOfMind(with: HKStateOfMind.Label) -> NSPredicate](/documentation/healthkit/hkquery/predicateforstatesofmind(with:)-3iyym)
- [class func predicateForStatesOfMind(with: HKStateOfMind.Kind) -> NSPredicate](/documentation/healthkit/hkquery/predicateforstatesofmind(with:)-6obe4)
- [class func predicateForStatesOfMind(with: HKStateOfMind.Association) -> NSPredicate](/documentation/healthkit/hkquery/predicateforstatesofmind(with:)-9fny6)
- [class func predicateForStatesOfMind(withValence: Double, operatorType: NSComparisonPredicate.Operator) -> NSPredicate](/documentation/healthkit/hkquery/predicateforstatesofmind(withvalence:operatortype:))
- [class func predicateForUserAnnotatedMedications(hasSchedule: Bool) -> NSPredicate](/documentation/healthkit/hkquery/predicateforuserannotatedmedications(hasschedule:))
- [class func predicateForUserAnnotatedMedications(isArchived: Bool) -> NSPredicate](/documentation/healthkit/hkquery/predicateforuserannotatedmedications(isarchived:))
- [class func predicateForWorkoutEffortSamplesRelated(workout: HKWorkout, activity: HKWorkoutActivity?) -> NSPredicate](/documentation/healthkit/hkquery/predicateforworkouteffortsamplesrelated(workout:activity:))

### Series queries

- [HKQuantitySeriesSampleQueryDescriptor](/documentation/healthkit/hkquantityseriessamplequerydescriptor)

#### Creating Series Query Descriptors

- [init(predicate: HKSamplePredicate<HKQuantitySample>, options: HKQuantitySeriesSampleQueryDescriptor.Options)](/documentation/healthkit/hkquantityseriessamplequerydescriptor/init(predicate:options:))
- [HKQuantitySeriesSampleQueryDescriptor.Options](/documentation/healthkit/hkquantityseriessamplequerydescriptor/options-swift.struct)

##### Setting Options

- [static let includeSample: HKQuantitySeriesSampleQueryDescriptor.Options](/documentation/healthkit/hkquantityseriessamplequerydescriptor/options-swift.struct/includesample)
- [static let orderByQuantitySampleStartDate: HKQuantitySeriesSampleQueryDescriptor.Options](/documentation/healthkit/hkquantityseriessamplequerydescriptor/options-swift.struct/orderbyquantitysamplestartdate)

#### Running Queries

- [func results(for: HKHealthStore) -> HKQuantitySeriesSampleQueryDescriptor.Results](/documentation/healthkit/hkquantityseriessamplequerydescriptor/results(for:))
- [HKQuantitySeriesSampleQueryDescriptor.Results](/documentation/healthkit/hkquantityseriessamplequerydescriptor/results)

##### Creating an Iterator

- [HKQuantitySeriesSampleQueryDescriptor.Results.Iterator](/documentation/healthkit/hkquantityseriessamplequerydescriptor/results/iterator)
- [HKQuantitySeriesSampleQueryDescriptor.Result](/documentation/healthkit/hkquantityseriessamplequerydescriptor/result)

##### Accessing Sample Data

- [let sample: HKQuantitySample?](/documentation/healthkit/hkquantityseriessamplequerydescriptor/result/sample)
- [let quantity: HKQuantity](/documentation/healthkit/hkquantityseriessamplequerydescriptor/result/quantity)
- [let dateInterval: DateInterval](/documentation/healthkit/hkquantityseriessamplequerydescriptor/result/dateinterval)

#### Accessing Query Properties

- [var options: HKQuantitySeriesSampleQueryDescriptor.Options](/documentation/healthkit/hkquantityseriessamplequerydescriptor/options-swift.property)
- [var predicate: HKSamplePredicate<HKQuantitySample>](/documentation/healthkit/hkquantityseriessamplequerydescriptor/predicate)

#### Default Implementations

- [HKAsyncSequenceQuery Implementations](/documentation/healthkit/hkquantityseriessamplequerydescriptor/hkasyncsequencequery-implementations)

##### Instance Methods

- [func results(for: HKHealthStore) -> HKQuantitySeriesSampleQueryDescriptor.Results](/documentation/healthkit/hkquantityseriessamplequerydescriptor/results(for:))
- [HKQuantitySeriesSampleQuery](/documentation/healthkit/hkquantityseriessamplequery)

#### Creating a Series Query

- [init(quantityType: HKQuantityType, predicate: NSPredicate?, quantityHandler: (HKQuantitySeriesSampleQuery, HKQuantity?, DateInterval?, HKQuantitySample?, Bool, (any Error)?) -> Void)](/documentation/healthkit/hkquantityseriessamplequery/init(quantitytype:predicate:quantityhandler:))
- [var includeSample: Bool](/documentation/healthkit/hkquantityseriessamplequery/includesample)
- [var orderByQuantitySampleStartDate: Bool](/documentation/healthkit/hkquantityseriessamplequery/orderbyquantitysamplestartdate)

#### Deprecated Mehtods

- [init(sample: HKQuantitySample, quantityHandler: (HKQuantitySeriesSampleQuery, HKQuantity?, Date?, Bool, (any Error)?) -> Void)](/documentation/healthkit/hkquantityseriessamplequery/init(sample:quantityhandler:))
- [HKWorkoutRouteQueryDescriptor](/documentation/healthkit/hkworkoutroutequerydescriptor)

#### Creating workout route query descriptors

- [init(HKWorkoutRoute)](/documentation/healthkit/hkworkoutroutequerydescriptor/init(_:))

#### Running queries

- [func results(for: HKHealthStore) -> HKWorkoutRouteQueryDescriptor.Results](/documentation/healthkit/hkworkoutroutequerydescriptor/results(for:))
- [HKWorkoutRouteQueryDescriptor.Results](/documentation/healthkit/hkworkoutroutequerydescriptor/results)

##### Creating an Iterator

- [HKWorkoutRouteQueryDescriptor.Results.Iterator](/documentation/healthkit/hkworkoutroutequerydescriptor/results/iterator)

#### Accessing query properties

- [var workoutRoute: HKWorkoutRoute](/documentation/healthkit/hkworkoutroutequerydescriptor/workoutroute)

#### Default Implementations

- [HKAsyncSequenceQuery Implementations](/documentation/healthkit/hkworkoutroutequerydescriptor/hkasyncsequencequery-implementations)

##### Instance Methods

- [func results(for: HKHealthStore) -> HKWorkoutRouteQueryDescriptor.Results](/documentation/healthkit/hkworkoutroutequerydescriptor/results(for:))
- [HKWorkoutRouteQuery](/documentation/healthkit/hkworkoutroutequery)

#### Creating route queries

- [init(route: HKWorkoutRoute, dataHandler: (HKWorkoutRouteQuery, [CLLocation]?, Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutroutequery/init(route:datahandler:))
- [init(route: HKWorkoutRoute, dateInterval: DateInterval, dataHandler: (HKWorkoutRouteQuery, [CLLocation]?, Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutroutequery/init(route:dateinterval:datahandler:))
- [HKHeartbeatSeriesQueryDescriptor](/documentation/healthkit/hkheartbeatseriesquerydescriptor)

#### Creating Heartbeat Series Query Descriptors

- [init(HKHeartbeatSeriesSample)](/documentation/healthkit/hkheartbeatseriesquerydescriptor/init(_:))

#### Running Queries

- [func results(for: HKHealthStore) -> HKHeartbeatSeriesQueryDescriptor.Results](/documentation/healthkit/hkheartbeatseriesquerydescriptor/results(for:))
- [HKHeartbeatSeriesQueryDescriptor.Results](/documentation/healthkit/hkheartbeatseriesquerydescriptor/results)

##### Creating an Iterator

- [HKHeartbeatSeriesQueryDescriptor.Results.Iterator](/documentation/healthkit/hkheartbeatseriesquerydescriptor/results/iterator)
- [HKHeartbeatSeriesQueryDescriptor.Heartbeat](/documentation/healthkit/hkheartbeatseriesquerydescriptor/heartbeat)

##### Accessing Heartbeat Data

- [let precededByGap: Bool](/documentation/healthkit/hkheartbeatseriesquerydescriptor/heartbeat/precededbygap)
- [let timeIntervalSinceStart: TimeInterval](/documentation/healthkit/hkheartbeatseriesquerydescriptor/heartbeat/timeintervalsincestart)

#### Accessing Query Properties

- [var sample: HKHeartbeatSeriesSample](/documentation/healthkit/hkheartbeatseriesquerydescriptor/sample)

#### Default Implementations

- [HKAsyncSequenceQuery Implementations](/documentation/healthkit/hkheartbeatseriesquerydescriptor/hkasyncsequencequery-implementations)

##### Instance Methods

- [func results(for: HKHealthStore) -> HKHeartbeatSeriesQueryDescriptor.Results](/documentation/healthkit/hkheartbeatseriesquerydescriptor/results(for:))
- [HKHeartbeatSeriesQuery](/documentation/healthkit/hkheartbeatseriesquery)

#### Creating a Heartbeat Series Query

- [init(heartbeatSeries: HKHeartbeatSeriesSample, dataHandler: (HKHeartbeatSeriesQuery, TimeInterval, Bool, Bool, (any Error)?) -> Void)](/documentation/healthkit/hkheartbeatseriesquery/init(heartbeatseries:datahandler:))
- [HKElectrocardiogramQueryDescriptor](/documentation/healthkit/hkelectrocardiogramquerydescriptor)

#### Creating Electrocardiogram Query Descriptors

- [init(HKElectrocardiogram)](/documentation/healthkit/hkelectrocardiogramquerydescriptor/init(_:))

#### Running Queries

- [func results(for: HKHealthStore) -> HKElectrocardiogramQueryDescriptor.Results](/documentation/healthkit/hkelectrocardiogramquerydescriptor/results(for:))
- [HKElectrocardiogramQueryDescriptor.Results](/documentation/healthkit/hkelectrocardiogramquerydescriptor/results)

##### Creating an Iterator

- [HKElectrocardiogramQueryDescriptor.Results.Iterator](/documentation/healthkit/hkelectrocardiogramquerydescriptor/results/iterator)

#### Accessing Query Properties

- [var electrocardiogram: HKElectrocardiogram](/documentation/healthkit/hkelectrocardiogramquerydescriptor/electrocardiogram)

#### Default Implementations

- [HKAsyncSequenceQuery Implementations](/documentation/healthkit/hkelectrocardiogramquerydescriptor/hkasyncsequencequery-implementations)

##### Instance Methods

- [func results(for: HKHealthStore) -> HKElectrocardiogramQueryDescriptor.Results](/documentation/healthkit/hkelectrocardiogramquerydescriptor/results(for:))
- [HKElectrocardiogramQuery](/documentation/healthkit/hkelectrocardiogramquery)

#### Creating the Query

- [convenience init(HKElectrocardiogram, dataHandler: (HKElectrocardiogramQuery, HKElectrocardiogramQuery.Result) -> Void)](/documentation/healthkit/hkelectrocardiogramquery/init(_:datahandler:))

#### Accessing the Results

- [HKElectrocardiogramQuery.Result](/documentation/healthkit/hkelectrocardiogramquery/result)

##### Results

- [case measurement(HKElectrocardiogram.VoltageMeasurement)](/documentation/healthkit/hkelectrocardiogramquery/result/measurement(_:))
- [case done](/documentation/healthkit/hkelectrocardiogramquery/result/done)
- [case error(any Error)](/documentation/healthkit/hkelectrocardiogramquery/result/error(_:))
- [init(electrocardiogram: HKElectrocardiogram, dataHandler: (HKElectrocardiogramQuery, HKElectrocardiogram.VoltageMeasurement?, Bool, (any Error)?) -> Void)](/documentation/healthkit/hkelectrocardiogramquery/init(electrocardiogram:datahandler:))
- [HKWorkoutEffortRelationship](/documentation/healthkit/hkworkouteffortrelationship)

#### Instance Properties

- [var activity: HKWorkoutActivity?](/documentation/healthkit/hkworkouteffortrelationship/activity)
- [var samples: [HKSample]?](/documentation/healthkit/hkworkouteffortrelationship/samples)
- [var workout: HKWorkout](/documentation/healthkit/hkworkouteffortrelationship/workout)
- [HKWorkoutEffortRelationshipQuery](/documentation/healthkit/hkworkouteffortrelationshipquery)

#### Initializers

- [init(predicate: NSPredicate?, anchor: HKQueryAnchor?, options: HKWorkoutEffortRelationshipQueryOptions, resultsHandler: (HKWorkoutEffortRelationshipQuery, [HKWorkoutEffortRelationship]?, HKQueryAnchor?, (any Error)?) -> Void)](/documentation/healthkit/hkworkouteffortrelationshipquery/init(predicate:anchor:options:resultshandler:))

### Long-running queries

- [HKActivitySummaryQueryDescriptor](/documentation/healthkit/hkactivitysummaryquerydescriptor)

#### Creating query descriptors

- [init(predicate: NSPredicate?)](/documentation/healthkit/hkactivitysummaryquerydescriptor/init(predicate:))

#### Running queries

- [func result(for: HKHealthStore) async throws -> [HKActivitySummary]](/documentation/healthkit/hkactivitysummaryquerydescriptor/result(for:))
- [func results(for: HKHealthStore) -> HKActivitySummaryQueryDescriptor.Results](/documentation/healthkit/hkactivitysummaryquerydescriptor/results(for:))
- [HKActivitySummaryQueryDescriptor.Results](/documentation/healthkit/hkactivitysummaryquerydescriptor/results)

##### Creating an Iterator

- [HKActivitySummaryQueryDescriptor.Results.Iterator](/documentation/healthkit/hkactivitysummaryquerydescriptor/results/iterator)

#### Accessing query properties

- [var predicate: NSPredicate?](/documentation/healthkit/hkactivitysummaryquerydescriptor/predicate)

#### Default Implementations

- [HKAsyncQuery Implementations](/documentation/healthkit/hkactivitysummaryquerydescriptor/hkasyncquery-implementations)

##### Instance Methods

- [func result(for: HKHealthStore) async throws -> [HKActivitySummary]](/documentation/healthkit/hkactivitysummaryquerydescriptor/result(for:))
- [HKAsyncSequenceQuery Implementations](/documentation/healthkit/hkactivitysummaryquerydescriptor/hkasyncsequencequery-implementations)

##### Instance Methods

- [func results(for: HKHealthStore) -> HKActivitySummaryQueryDescriptor.Results](/documentation/healthkit/hkactivitysummaryquerydescriptor/results(for:))
- [HKActivitySummaryQuery](/documentation/healthkit/hkactivitysummaryquery)

#### Creating activity summary queries

- [Executing Activity Summary Queries](/documentation/healthkit/executing-activity-summary-queries)
- [init(predicate: NSPredicate?, resultsHandler: (HKActivitySummaryQuery, [HKActivitySummary]?, (any Error)?) -> Void)](/documentation/healthkit/hkactivitysummaryquery/init(predicate:resultshandler:))

#### Getting property data

- [var updateHandler: ((HKActivitySummaryQuery, [HKActivitySummary]?, (any Error)?) -> Void)?](/documentation/healthkit/hkactivitysummaryquery/updatehandler)
- [HKAnchoredObjectQueryDescriptor](/documentation/healthkit/hkanchoredobjectquerydescriptor)

#### Creating Query Descriptors

- [init(predicates: [HKSamplePredicate<Sample>], anchor: HKQueryAnchor?, limit: Int?)](/documentation/healthkit/hkanchoredobjectquerydescriptor/init(predicates:anchor:limit:))

#### Running Queries

- [func result(for: HKHealthStore) async throws -> HKAnchoredObjectQueryDescriptor<Sample>.Result](/documentation/healthkit/hkanchoredobjectquerydescriptor/result(for:))
- [func results(for: HKHealthStore) -> HKAnchoredObjectQueryDescriptor<Sample>.Results](/documentation/healthkit/hkanchoredobjectquerydescriptor/results(for:))
- [HKAnchoredObjectQueryDescriptor.Result](/documentation/healthkit/hkanchoredobjectquerydescriptor/result)

##### Accessing the Results

- [let addedSamples: [Sample]](/documentation/healthkit/hkanchoredobjectquerydescriptor/result/addedsamples)
- [let deletedObjects: [HKDeletedObject]](/documentation/healthkit/hkanchoredobjectquerydescriptor/result/deletedobjects)
- [let newAnchor: HKQueryAnchor](/documentation/healthkit/hkanchoredobjectquerydescriptor/result/newanchor)
- [HKAnchoredObjectQueryDescriptor.Results](/documentation/healthkit/hkanchoredobjectquerydescriptor/results)

##### Creating an Iterator

- [HKAnchoredObjectQueryDescriptor.Results.Iterator](/documentation/healthkit/hkanchoredobjectquerydescriptor/results/iterator)

#### Accessing Query Properties

- [var predicates: [HKSamplePredicate<Sample>]](/documentation/healthkit/hkanchoredobjectquerydescriptor/predicates)
- [var anchor: HKQueryAnchor?](/documentation/healthkit/hkanchoredobjectquerydescriptor/anchor)
- [var limit: Int?](/documentation/healthkit/hkanchoredobjectquerydescriptor/limit)

#### Default Implementations

- [HKAsyncQuery Implementations](/documentation/healthkit/hkanchoredobjectquerydescriptor/hkasyncquery-implementations)

##### Instance Methods

- [func result(for: HKHealthStore) async throws -> HKAnchoredObjectQueryDescriptor<Sample>.Result](/documentation/healthkit/hkanchoredobjectquerydescriptor/result(for:))
- [HKAsyncSequenceQuery Implementations](/documentation/healthkit/hkanchoredobjectquerydescriptor/hkasyncsequencequery-implementations)

##### Instance Methods

- [func results(for: HKHealthStore) -> HKAnchoredObjectQueryDescriptor<Sample>.Results](/documentation/healthkit/hkanchoredobjectquerydescriptor/results(for:))
- [HKAnchoredObjectQuery](/documentation/healthkit/hkanchoredobjectquery)

#### Creating Anchored Object Queries

- [Executing Anchored Object Queries](/documentation/healthkit/executing-anchored-object-queries)
- [init(type: HKSampleType, predicate: NSPredicate?, anchor: HKQueryAnchor?, limit: Int, resultsHandler: (HKAnchoredObjectQuery, [HKSample]?, [HKDeletedObject]?, HKQueryAnchor?, (any Error)?) -> Void)](/documentation/healthkit/hkanchoredobjectquery/init(type:predicate:anchor:limit:resultshandler:))
- [init(queryDescriptors: [HKQueryDescriptor], anchor: HKQueryAnchor?, limit: Int, resultsHandler: (HKAnchoredObjectQuery, [HKSample]?, [HKDeletedObject]?, HKQueryAnchor?, (any Error)?) -> Void)](/documentation/healthkit/hkanchoredobjectquery/init(querydescriptors:anchor:limit:resultshandler:))
- [var HKObjectQueryNoLimit: Int](/documentation/healthkit/hkobjectquerynolimit)
- [init(type: HKSampleType, predicate: NSPredicate?, anchor: Int, limit: Int, completionHandler: (HKAnchoredObjectQuery, [HKSample]?, Int, (any Error)?) -> Void)](/documentation/healthkit/hkanchoredobjectquery/init(type:predicate:anchor:limit:completionhandler:))

##### Constants

- [var HKAnchoredObjectQueryNoAnchor: Int32](/documentation/healthkit/hkanchoredobjectquerynoanchor)

#### Receiving Updates

- [var updateHandler: ((HKAnchoredObjectQuery, [HKSample]?, [HKDeletedObject]?, HKQueryAnchor?, (any Error)?) -> Void)?](/documentation/healthkit/hkanchoredobjectquery/updatehandler)

#### Tracking Anchors

- [HKQueryAnchor](/documentation/healthkit/hkqueryanchor)

##### Creating Anchor Objects

- [convenience init(fromValue: Int)](/documentation/healthkit/hkqueryanchor/init(fromvalue:))

#### Tracking Deleted Objects

- [HKDeletedObject](/documentation/healthkit/hkdeletedobject)

##### Identifying Deleted Objects

- [var uuid: UUID](/documentation/healthkit/hkdeletedobject/uuid)
- [var metadata: [String : Any]?](/documentation/healthkit/hkdeletedobject/metadata)
- [HKObserverQuery](/documentation/healthkit/hkobserverquery)

#### Creating Observer Queries

- [Executing Observer Queries](/documentation/healthkit/executing-observer-queries)
- [init(sampleType: HKSampleType, predicate: NSPredicate?, updateHandler: (HKObserverQuery, HKObserverQueryCompletionHandler, (any Error)?) -> Void)](/documentation/healthkit/hkobserverquery/init(sampletype:predicate:updatehandler:))
- [init(queryDescriptors: [HKQueryDescriptor], updateHandler: (HKObserverQuery, Set<HKSampleType>?, HKObserverQueryCompletionHandler, (any Error)?) -> Void)](/documentation/healthkit/hkobserverquery/init(querydescriptors:updatehandler:))
- [HKObserverQueryCompletionHandler](/documentation/healthkit/hkobserverquerycompletionhandler)

### Sources and devices

- [HKSourceQueryDescriptor](/documentation/healthkit/hksourcequerydescriptor)

#### Creating Source Query Descriptors

- [init(predicate: HKSamplePredicate<Sample>)](/documentation/healthkit/hksourcequerydescriptor/init(predicate:))

#### Running Queries

- [func result(for: HKHealthStore) async throws -> [HKSource]](/documentation/healthkit/hksourcequerydescriptor/result(for:))

#### Accessing Query Properties

- [var predicate: HKSamplePredicate<Sample>](/documentation/healthkit/hksourcequerydescriptor/predicate)

#### Default Implementations

- [HKAsyncQuery Implementations](/documentation/healthkit/hksourcequerydescriptor/hkasyncquery-implementations)

##### Instance Methods

- [func result(for: HKHealthStore) async throws -> [HKSource]](/documentation/healthkit/hksourcequerydescriptor/result(for:))
- [HKSourceRevision](/documentation/healthkit/hksourcerevision)

#### Creating Source Revision Objects

- [init(source: HKSource, version: String?)](/documentation/healthkit/hksourcerevision/init(source:version:))
- [init(source: HKSource, version: String?, productType: String?, operatingSystemVersion: OperatingSystemVersion)](/documentation/healthkit/hksourcerevision/init(source:version:producttype:operatingsystemversion:))

#### Accessing Source and Version Information

- [var source: HKSource](/documentation/healthkit/hksourcerevision/source)
- [var version: String?](/documentation/healthkit/hksourcerevision/version)

##### Constants

- [let HKSourceRevisionAnyVersion: String](/documentation/healthkit/hksourcerevisionanyversion)
- [var operatingSystemVersion: OperatingSystemVersion](/documentation/healthkit/hksourcerevision/operatingsystemversion)

##### Constants

- [let HKSourceRevisionAnyOperatingSystem: OperatingSystemVersion](/documentation/healthkit/hksourcerevisionanyoperatingsystem)
- [var productType: String?](/documentation/healthkit/hksourcerevision/producttype)

##### Constants

- [let HKSourceRevisionAnyProductType: String](/documentation/healthkit/hksourcerevisionanyproducttype)
- [HKSource](/documentation/healthkit/hksource)

#### Getting the Current Source

- [class func `default`() -> HKSource](/documentation/healthkit/hksource/default())

#### Getting Property Data

- [var bundleIdentifier: String](/documentation/healthkit/hksource/bundleidentifier)
- [var name: String](/documentation/healthkit/hksource/name)
- [HKDevice](/documentation/healthkit/hkdevice)

#### Creating Device Objects

- [init(name: String?, manufacturer: String?, model: String?, hardwareVersion: String?, firmwareVersion: String?, softwareVersion: String?, localIdentifier: String?, udiDeviceIdentifier: String?)](/documentation/healthkit/hkdevice/init(name:manufacturer:model:hardwareversion:firmwareversion:softwareversion:localidentifier:udideviceidentifier:))
- [class func local() -> HKDevice](/documentation/healthkit/hkdevice/local())

#### Accessing Data About a Device

- [var udiDeviceIdentifier: String?](/documentation/healthkit/hkdevice/udideviceidentifier)
- [var firmwareVersion: String?](/documentation/healthkit/hkdevice/firmwareversion)
- [var hardwareVersion: String?](/documentation/healthkit/hkdevice/hardwareversion)
- [var localIdentifier: String?](/documentation/healthkit/hkdevice/localidentifier)
- [var manufacturer: String?](/documentation/healthkit/hkdevice/manufacturer)
- [var model: String?](/documentation/healthkit/hkdevice/model)
- [var name: String?](/documentation/healthkit/hkdevice/name)
- [var softwareVersion: String?](/documentation/healthkit/hkdevice/softwareversion)
- [HKSourceQuery](/documentation/healthkit/hksourcequery)

#### Creating Source Queries

- [Executing Source Queries](/documentation/healthkit/executing-source-queries)
- [init(sampleType: HKSampleType, samplePredicate: NSPredicate?, completionHandler: (HKSourceQuery, Set<HKSource>?, (any Error)?) -> Void)](/documentation/healthkit/hksourcequery/init(sampletype:samplepredicate:completionhandler:))

### Statistics

- [Executing Statistical Queries](/documentation/healthkit/executing-statistical-queries)
- [Executing Statistics Collection Queries](/documentation/healthkit/executing-statistics-collection-queries)
- [HKStatisticsQueryDescriptor](/documentation/healthkit/hkstatisticsquerydescriptor)

#### Creating Query Descriptors

- [init(predicate: HKSamplePredicate<HKQuantitySample>, options: HKStatisticsOptions)](/documentation/healthkit/hkstatisticsquerydescriptor/init(predicate:options:))

#### Running Queries

- [func result(for: HKHealthStore) async throws -> HKStatistics?](/documentation/healthkit/hkstatisticsquerydescriptor/result(for:))

#### Accessing Query Properties

- [var predicate: HKSamplePredicate<HKQuantitySample>](/documentation/healthkit/hkstatisticsquerydescriptor/predicate)
- [var options: HKStatisticsOptions](/documentation/healthkit/hkstatisticsquerydescriptor/options)

#### Default Implementations

- [HKAsyncQuery Implementations](/documentation/healthkit/hkstatisticsquerydescriptor/hkasyncquery-implementations)

##### Instance Methods

- [func result(for: HKHealthStore) async throws -> HKStatistics?](/documentation/healthkit/hkstatisticsquerydescriptor/result(for:))
- [HKStatisticsQuery](/documentation/healthkit/hkstatisticsquery)

#### Creating Statistics Queries

- [init(quantityType: HKQuantityType, quantitySamplePredicate: NSPredicate?, options: HKStatisticsOptions, completionHandler: (HKStatisticsQuery, HKStatistics?, (any Error)?) -> Void)](/documentation/healthkit/hkstatisticsquery/init(quantitytype:quantitysamplepredicate:options:completionhandler:))
- [Executing Statistical Queries](/documentation/healthkit/executing-statistical-queries)
- [HKStatisticsCollectionQueryDescriptor](/documentation/healthkit/hkstatisticscollectionquerydescriptor)

#### Creating Query Descriptors

- [init(predicate: HKSamplePredicate<HKQuantitySample>, options: HKStatisticsOptions, anchorDate: Date, intervalComponents: DateComponents)](/documentation/healthkit/hkstatisticscollectionquerydescriptor/init(predicate:options:anchordate:intervalcomponents:))

#### Running Queries

- [func result(for: HKHealthStore) async throws -> HKStatisticsCollection](/documentation/healthkit/hkstatisticscollectionquerydescriptor/result(for:))
- [func results(for: HKHealthStore) -> HKStatisticsCollectionQueryDescriptor.Results](/documentation/healthkit/hkstatisticscollectionquerydescriptor/results(for:))
- [HKStatisticsCollectionQueryDescriptor.Results](/documentation/healthkit/hkstatisticscollectionquerydescriptor/results)

##### Creating an Iterator

- [HKStatisticsCollectionQueryDescriptor.Results.Iterator](/documentation/healthkit/hkstatisticscollectionquerydescriptor/results/iterator)
- [HKStatisticsCollectionQueryDescriptor.Result](/documentation/healthkit/hkstatisticscollectionquerydescriptor/result)

###### Accessing Statistical Data

- [let statisticsCollection: HKStatisticsCollection](/documentation/healthkit/hkstatisticscollectionquerydescriptor/result/statisticscollection)
- [let updatedStatistics: [HKStatistics]?](/documentation/healthkit/hkstatisticscollectionquerydescriptor/result/updatedstatistics)

#### Accessing Query Properties

- [var predicate: HKSamplePredicate<HKQuantitySample>](/documentation/healthkit/hkstatisticscollectionquerydescriptor/predicate)
- [var options: HKStatisticsOptions](/documentation/healthkit/hkstatisticscollectionquerydescriptor/options)
- [var anchorDate: Date](/documentation/healthkit/hkstatisticscollectionquerydescriptor/anchordate)
- [var intervalComponents: DateComponents](/documentation/healthkit/hkstatisticscollectionquerydescriptor/intervalcomponents)

#### Structures

- [HKStatisticsCollectionQueryDescriptor.Result](/documentation/healthkit/hkstatisticscollectionquerydescriptor/result)

##### Accessing Statistical Data

- [let statisticsCollection: HKStatisticsCollection](/documentation/healthkit/hkstatisticscollectionquerydescriptor/result/statisticscollection)
- [let updatedStatistics: [HKStatistics]?](/documentation/healthkit/hkstatisticscollectionquerydescriptor/result/updatedstatistics)

#### Default Implementations

- [HKAsyncQuery Implementations](/documentation/healthkit/hkstatisticscollectionquerydescriptor/hkasyncquery-implementations)

##### Instance Methods

- [func result(for: HKHealthStore) async throws -> HKStatisticsCollection](/documentation/healthkit/hkstatisticscollectionquerydescriptor/result(for:))
- [HKAsyncSequenceQuery Implementations](/documentation/healthkit/hkstatisticscollectionquerydescriptor/hkasyncsequencequery-implementations)

##### Instance Methods

- [func results(for: HKHealthStore) -> HKStatisticsCollectionQueryDescriptor.Results](/documentation/healthkit/hkstatisticscollectionquerydescriptor/results(for:))
- [HKStatisticsCollectionQuery](/documentation/healthkit/hkstatisticscollectionquery)

#### Creating Statistics Collection Objects

- [Executing Statistics Collection Queries](/documentation/healthkit/executing-statistics-collection-queries)
- [init(quantityType: HKQuantityType, quantitySamplePredicate: NSPredicate?, options: HKStatisticsOptions, anchorDate: Date, intervalComponents: DateComponents)](/documentation/healthkit/hkstatisticscollectionquery/init(quantitytype:quantitysamplepredicate:options:anchordate:intervalcomponents:))

#### Getting and Setting Results Handlers

- [var initialResultsHandler: ((HKStatisticsCollectionQuery, HKStatisticsCollection?, (any Error)?) -> Void)?](/documentation/healthkit/hkstatisticscollectionquery/initialresultshandler)
- [var statisticsUpdateHandler: ((HKStatisticsCollectionQuery, HKStatistics?, HKStatisticsCollection?, (any Error)?) -> Void)?](/documentation/healthkit/hkstatisticscollectionquery/statisticsupdatehandler)

#### Getting Property Data

- [var anchorDate: Date](/documentation/healthkit/hkstatisticscollectionquery/anchordate)
- [var intervalComponents: DateComponents](/documentation/healthkit/hkstatisticscollectionquery/intervalcomponents)
- [var options: HKStatisticsOptions](/documentation/healthkit/hkstatisticscollectionquery/options)
- [HKStatistics](/documentation/healthkit/hkstatistics)

#### Getting Property Data

- [var startDate: Date](/documentation/healthkit/hkstatistics/startdate)
- [var endDate: Date](/documentation/healthkit/hkstatistics/enddate)
- [var quantityType: HKQuantityType](/documentation/healthkit/hkstatistics/quantitytype)
- [var sources: [HKSource]?](/documentation/healthkit/hkstatistics/sources)

#### Getting Statistics Data

- [func averageQuantity() -> HKQuantity?](/documentation/healthkit/hkstatistics/averagequantity())
- [func averageQuantity(for: HKSource) -> HKQuantity?](/documentation/healthkit/hkstatistics/averagequantity(for:))
- [func maximumQuantity() -> HKQuantity?](/documentation/healthkit/hkstatistics/maximumquantity())
- [func maximumQuantity(for: HKSource) -> HKQuantity?](/documentation/healthkit/hkstatistics/maximumquantity(for:))
- [func minimumQuantity() -> HKQuantity?](/documentation/healthkit/hkstatistics/minimumquantity())
- [func minimumQuantity(for: HKSource) -> HKQuantity?](/documentation/healthkit/hkstatistics/minimumquantity(for:))
- [func sumQuantity() -> HKQuantity?](/documentation/healthkit/hkstatistics/sumquantity())
- [func sumQuantity(for: HKSource) -> HKQuantity?](/documentation/healthkit/hkstatistics/sumquantity(for:))
- [func duration() -> HKQuantity?](/documentation/healthkit/hkstatistics/duration())
- [func duration(for: HKSource) -> HKQuantity?](/documentation/healthkit/hkstatistics/duration(for:))

#### Getting the Most Recent Quantity

- [func mostRecentQuantity() -> HKQuantity?](/documentation/healthkit/hkstatistics/mostrecentquantity())
- [func mostRecentQuantity(for: HKSource) -> HKQuantity?](/documentation/healthkit/hkstatistics/mostrecentquantity(for:))
- [func mostRecentQuantityDateInterval() -> DateInterval?](/documentation/healthkit/hkstatistics/mostrecentquantitydateinterval())
- [func mostRecentQuantityDateInterval(for: HKSource) -> DateInterval?](/documentation/healthkit/hkstatistics/mostrecentquantitydateinterval(for:))
- [HKStatisticsCollection](/documentation/healthkit/hkstatisticscollection)

#### Accessing Statistics Collections

- [func statistics() -> [HKStatistics]](/documentation/healthkit/hkstatisticscollection/statistics())
- [func statistics(for: Date) -> HKStatistics?](/documentation/healthkit/hkstatisticscollection/statistics(for:))
- [func enumerateStatistics(from: Date, to: Date, with: (HKStatistics, UnsafeMutablePointer<ObjCBool>) -> Void)](/documentation/healthkit/hkstatisticscollection/enumeratestatistics(from:to:with:))

#### Getting Information About Statistics Collections

- [func sources() -> Set<HKSource>](/documentation/healthkit/hkstatisticscollection/sources())
- [HKStatisticsOptions](/documentation/healthkit/hkstatisticsoptions)

#### Constants

- [static var separateBySource: HKStatisticsOptions](/documentation/healthkit/hkstatisticsoptions/separatebysource)
- [static var discreteAverage: HKStatisticsOptions](/documentation/healthkit/hkstatisticsoptions/discreteaverage)
- [static var discreteMin: HKStatisticsOptions](/documentation/healthkit/hkstatisticsoptions/discretemin)
- [static var discreteMax: HKStatisticsOptions](/documentation/healthkit/hkstatisticsoptions/discretemax)
- [static var cumulativeSum: HKStatisticsOptions](/documentation/healthkit/hkstatisticsoptions/cumulativesum)
- [static var mostRecent: HKStatisticsOptions](/documentation/healthkit/hkstatisticsoptions/mostrecent)
- [static var duration: HKStatisticsOptions](/documentation/healthkit/hkstatisticsoptions/duration)

#### Deprecated Constants

- [static var discreteMostRecent: HKStatisticsOptions](/documentation/healthkit/hkstatisticsoptions/discretemostrecent)

#### Initializers

- [init(rawValue: UInt)](/documentation/healthkit/hkstatisticsoptions/init(rawvalue:))

### Clinical record queries

- [HKVerifiableClinicalRecordQueryDescriptor](/documentation/healthkit/hkverifiableclinicalrecordquerydescriptor)

#### Creating Query Descriptors

- [init(recordTypes: [HKVerifiableClinicalRecordCredentialType], sourceTypes: [HKVerifiableClinicalRecordSourceType], predicate: NSPredicate?)](/documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/init(recordtypes:sourcetypes:predicate:))

#### Running Queries

- [func result(for: HKHealthStore) async throws -> [HKVerifiableClinicalRecord]](/documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/result(for:))

#### Accessing Query Properties

- [var recordTypes: [HKVerifiableClinicalRecordCredentialType]](/documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/recordtypes)
- [var sourceTypes: [HKVerifiableClinicalRecordSourceType]](/documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/sourcetypes)
- [var predicate: NSPredicate?](/documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/predicate)

#### Default Implementations

- [HKAsyncQuery Implementations](/documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/hkasyncquery-implementations)

##### Instance Methods

- [func result(for: HKHealthStore) async throws -> [HKVerifiableClinicalRecord]](/documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/result(for:))
- [HKVerifiableClinicalRecordQuery](/documentation/healthkit/hkverifiableclinicalrecordquery)

#### Creating Queries

- [init(recordTypes: [String], sourceTypes: [HKVerifiableClinicalRecordSourceType], predicate: NSPredicate?, resultsHandler: (HKVerifiableClinicalRecordQuery, [HKVerifiableClinicalRecord]?, (any Error)?) -> Void)](/documentation/healthkit/hkverifiableclinicalrecordquery/init(recordtypes:sourcetypes:predicate:resultshandler:))
- [init(recordTypes: [String], predicate: NSPredicate?, resultsHandler: (HKVerifiableClinicalRecordQuery, [HKVerifiableClinicalRecord]?, (any Error)?) -> Void)](/documentation/healthkit/hkverifiableclinicalrecordquery/init(recordtypes:predicate:resultshandler:))

#### Accessing the Metadata

- [var recordTypes: [String]](/documentation/healthkit/hkverifiableclinicalrecordquery/recordtypes)
- [var sourceTypes: [HKVerifiableClinicalRecordSourceType]](/documentation/healthkit/hkverifiableclinicalrecordquery/sourcetypes)
- [HKVerifiableClinicalRecordSourceType](/documentation/healthkit/hkverifiableclinicalrecordsourcetype)

#### Identifying Source Types

- [static let euDigitalCOVIDCertificate: HKVerifiableClinicalRecordSourceType](/documentation/healthkit/hkverifiableclinicalrecordsourcetype/eudigitalcovidcertificate)
- [static let smartHealthCard: HKVerifiableClinicalRecordSourceType](/documentation/healthkit/hkverifiableclinicalrecordsourcetype/smarthealthcard)

#### Creating Source Types

- [init(rawValue: String)](/documentation/healthkit/hkverifiableclinicalrecordsourcetype/init(rawvalue:))
- [HKVerifiableClinicalRecordCredentialType](/documentation/healthkit/hkverifiableclinicalrecordcredentialtype)

#### Identifying Record Types

- [static let covid19: HKVerifiableClinicalRecordCredentialType](/documentation/healthkit/hkverifiableclinicalrecordcredentialtype/covid19)
- [static let immunization: HKVerifiableClinicalRecordCredentialType](/documentation/healthkit/hkverifiableclinicalrecordcredentialtype/immunization)
- [static let laboratory: HKVerifiableClinicalRecordCredentialType](/documentation/healthkit/hkverifiableclinicalrecordcredentialtype/laboratory)
- [static let recovery: HKVerifiableClinicalRecordCredentialType](/documentation/healthkit/hkverifiableclinicalrecordcredentialtype/recovery)

#### Creating Record Types

- [init(rawValue: String)](/documentation/healthkit/hkverifiableclinicalrecordcredentialtype/init(rawvalue:))
- [HKDocumentQuery](/documentation/healthkit/hkdocumentquery)

#### Creating Document Queries

- [init(documentType: HKDocumentType, predicate: NSPredicate?, limit: Int, sortDescriptors: [NSSortDescriptor]?, includeDocumentData: Bool, resultsHandler: (HKDocumentQuery, [HKDocumentSample]?, Bool, (any Error)?) -> Void)](/documentation/healthkit/hkdocumentquery/init(documenttype:predicate:limit:sortdescriptors:includedocumentdata:resultshandler:))
- [var HKObjectQueryNoLimit: Int](/documentation/healthkit/hkobjectquerynolimit)

#### Accessing the Document Query’s Properties

- [var includeDocumentData: Bool](/documentation/healthkit/hkdocumentquery/includedocumentdata)
- [var limit: Int](/documentation/healthkit/hkdocumentquery/limit)
- [var sortDescriptors: [NSSortDescriptor]?](/documentation/healthkit/hkdocumentquery/sortdescriptors)

### Medication queries

- [HKClinicalCoding](/documentation/healthkit/hkclinicalcoding)

#### Initializers

- [init(system: String, version: String?, code: String)](/documentation/healthkit/hkclinicalcoding/init(system:version:code:))

#### Instance Properties

- [var code: String](/documentation/healthkit/hkclinicalcoding/code)
- [var system: String](/documentation/healthkit/hkclinicalcoding/system)
- [var version: String?](/documentation/healthkit/hkclinicalcoding/version)
- [HKHealthConceptIdentifier](/documentation/healthkit/hkhealthconceptidentifier)

#### Instance Properties

- [var domain: HKHealthConceptDomain](/documentation/healthkit/hkhealthconceptidentifier/domain)
- [HKMedicationConcept](/documentation/healthkit/hkmedicationconcept)

#### Instance Properties

- [var displayText: String](/documentation/healthkit/hkmedicationconcept/displaytext)
- [var generalForm: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationconcept/generalform)
- [var identifier: HKHealthConceptIdentifier](/documentation/healthkit/hkmedicationconcept/identifier)
- [var relatedCodings: Set<HKClinicalCoding>](/documentation/healthkit/hkmedicationconcept/relatedcodings)
- [HKMedicationDoseEvent](/documentation/healthkit/hkmedicationdoseevent)

#### Instance Properties

- [var doseQuantity: Double?](/documentation/healthkit/hkmedicationdoseevent/dosequantity-4cb5m)
- [var logStatus: HKMedicationDoseEvent.LogStatus](/documentation/healthkit/hkmedicationdoseevent/logstatus-swift.property)
- [var medicationConceptIdentifier: HKHealthConceptIdentifier](/documentation/healthkit/hkmedicationdoseevent/medicationconceptidentifier)
- [var medicationDoseEventType: HKMedicationDoseEventType](/documentation/healthkit/hkmedicationdoseevent/medicationdoseeventtype)
- [var scheduleType: HKMedicationDoseEvent.ScheduleType](/documentation/healthkit/hkmedicationdoseevent/scheduletype-swift.property)
- [var scheduledDate: Date?](/documentation/healthkit/hkmedicationdoseevent/scheduleddate)
- [var scheduledDoseQuantity: Double?](/documentation/healthkit/hkmedicationdoseevent/scheduleddosequantity-477ge)
- [var unit: HKUnit](/documentation/healthkit/hkmedicationdoseevent/unit)

#### Enumerations

- [HKMedicationDoseEvent.LogStatus](/documentation/healthkit/hkmedicationdoseevent/logstatus-swift.enum)

##### Enumeration Cases

- [case notInteracted](/documentation/healthkit/hkmedicationdoseevent/logstatus-swift.enum/notinteracted)
- [case notLogged](/documentation/healthkit/hkmedicationdoseevent/logstatus-swift.enum/notlogged)
- [case notificationNotSent](/documentation/healthkit/hkmedicationdoseevent/logstatus-swift.enum/notificationnotsent)
- [case skipped](/documentation/healthkit/hkmedicationdoseevent/logstatus-swift.enum/skipped)
- [case snoozed](/documentation/healthkit/hkmedicationdoseevent/logstatus-swift.enum/snoozed)
- [case taken](/documentation/healthkit/hkmedicationdoseevent/logstatus-swift.enum/taken)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkmedicationdoseevent/logstatus-swift.enum/init(rawvalue:))
- [HKMedicationDoseEvent.ScheduleType](/documentation/healthkit/hkmedicationdoseevent/scheduletype-swift.enum)

##### Enumeration Cases

- [case asNeeded](/documentation/healthkit/hkmedicationdoseevent/scheduletype-swift.enum/asneeded)
- [case schedule](/documentation/healthkit/hkmedicationdoseevent/scheduletype-swift.enum/schedule)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkmedicationdoseevent/scheduletype-swift.enum/init(rawvalue:))
- [HKMedicationDoseEventType](/documentation/healthkit/hkmedicationdoseeventtype)
- [HKUserAnnotatedMedication](/documentation/healthkit/hkuserannotatedmedication)

#### Instance Properties

- [var hasSchedule: Bool](/documentation/healthkit/hkuserannotatedmedication/hasschedule)
- [var isArchived: Bool](/documentation/healthkit/hkuserannotatedmedication/isarchived)
- [var medication: HKMedicationConcept](/documentation/healthkit/hkuserannotatedmedication/medication)
- [var nickname: String?](/documentation/healthkit/hkuserannotatedmedication/nickname)
- [HKUserAnnotatedMedicationQuery](/documentation/healthkit/hkuserannotatedmedicationquery)

#### Initializers

- [init(predicate: NSPredicate?, limit: Int, resultsHandler: (HKUserAnnotatedMedicationQuery, HKUserAnnotatedMedication?, Bool, (any Error)?) -> Void)](/documentation/healthkit/hkuserannotatedmedicationquery/init(predicate:limit:resultshandler:))
- [HKUserAnnotatedMedicationType](/documentation/healthkit/hkuserannotatedmedicationtype)
- [HKHealthConceptDomain](/documentation/healthkit/hkhealthconceptdomain)

#### Initializers

- [init(rawValue: String)](/documentation/healthkit/hkhealthconceptdomain/init(rawvalue:))

#### Type Properties

- [static let medication: HKHealthConceptDomain](/documentation/healthkit/hkhealthconceptdomain/medication)
- [HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform)

#### Initializers

- [init(rawValue: String)](/documentation/healthkit/hkmedicationgeneralform/init(rawvalue:))

#### Type Properties

- [static let capsule: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/capsule)
- [static let cream: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/cream)
- [static let device: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/device)
- [static let drops: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/drops)
- [static let foam: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/foam)
- [static let gel: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/gel)
- [static let inhaler: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/inhaler)
- [static let injection: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/injection)
- [static let liquid: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/liquid)
- [static let lotion: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/lotion)
- [static let ointment: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/ointment)
- [static let patch: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/patch)
- [static let powder: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/powder)
- [static let spray: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/spray)
- [static let suppository: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/suppository)
- [static let tablet: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/tablet)
- [static let topical: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/topical)
- [static let unknown: HKMedicationGeneralForm](/documentation/healthkit/hkmedicationgeneralform/unknown)
- [HKUserAnnotatedMedicationQueryDescriptor](/documentation/healthkit/hkuserannotatedmedicationquerydescriptor)

#### Initializers

- [init(predicate: NSPredicate?, limit: Int?)](/documentation/healthkit/hkuserannotatedmedicationquerydescriptor/init(predicate:limit:))

#### Instance Properties

- [var limit: Int?](/documentation/healthkit/hkuserannotatedmedicationquerydescriptor/limit)
- [var predicate: NSPredicate?](/documentation/healthkit/hkuserannotatedmedicationquerydescriptor/predicate)

#### Default Implementations

- [HKAsyncQuery Implementations](/documentation/healthkit/hkuserannotatedmedicationquerydescriptor/hkasyncquery-implementations)

##### Instance Methods

- [func result(for: HKHealthStore) async throws -> [HKUserAnnotatedMedication]](/documentation/healthkit/hkuserannotatedmedicationquerydescriptor/result(for:))
- [Visualizing HealthKit State of Mind in visionOS](/documentation/healthkit/visualizing-healthkit-state-of-mind-in-visionos)
- [Logging symptoms associated with a medication](/documentation/healthkit/logging-symptoms-associated-with-a-medication)

## Workout data

- [Workouts and activity rings](/documentation/healthkit/workouts-and-activity-rings)

### Samples

- [Adding samples to a workout](/documentation/healthkit/adding-samples-to-a-workout)
- [Accessing condensed workout samples](/documentation/healthkit/accessing-condensed-workout-samples)
- [Dividing a HealthKit workout into activities](/documentation/healthkit/dividing-a-healthkit-workout-into-activities)
- [HKWorkout](/documentation/healthkit/hkworkout)

#### Creating workouts

- [convenience init(activityType: HKWorkoutActivityType, start: Date, end: Date)](/documentation/healthkit/hkworkout/init(activitytype:start:end:))
- [convenience init(activityType: HKWorkoutActivityType, start: Date, end: Date, duration: TimeInterval, totalEnergyBurned: HKQuantity?, totalDistance: HKQuantity?, metadata: [String : Any]?)](/documentation/healthkit/hkworkout/init(activitytype:start:end:duration:totalenergyburned:totaldistance:metadata:))
- [convenience init(activityType: HKWorkoutActivityType, start: Date, end: Date, workoutEvents: [HKWorkoutEvent]?, totalEnergyBurned: HKQuantity?, totalDistance: HKQuantity?, metadata: [String : Any]?)](/documentation/healthkit/hkworkout/init(activitytype:start:end:workoutevents:totalenergyburned:totaldistance:metadata:))
- [convenience init(activityType: HKWorkoutActivityType, start: Date, end: Date, duration: TimeInterval, totalEnergyBurned: HKQuantity?, totalDistance: HKQuantity?, device: HKDevice?, metadata: [String : Any]?)](/documentation/healthkit/hkworkout/init(activitytype:start:end:duration:totalenergyburned:totaldistance:device:metadata:))
- [convenience init(activityType: HKWorkoutActivityType, start: Date, end: Date, workoutEvents: [HKWorkoutEvent]?, totalEnergyBurned: HKQuantity?, totalDistance: HKQuantity?, device: HKDevice?, metadata: [String : Any]?)](/documentation/healthkit/hkworkout/init(activitytype:start:end:workoutevents:totalenergyburned:totaldistance:device:metadata:))
- [convenience init(activityType: HKWorkoutActivityType, start: Date, end: Date, workoutEvents: [HKWorkoutEvent]?, totalEnergyBurned: HKQuantity?, totalDistance: HKQuantity?, totalFlightsClimbed: HKQuantity?, device: HKDevice?, metadata: [String : Any]?)](/documentation/healthkit/hkworkout/init(activitytype:start:end:workoutevents:totalenergyburned:totaldistance:totalflightsclimbed:device:metadata:))
- [convenience init(activityType: HKWorkoutActivityType, start: Date, end: Date, workoutEvents: [HKWorkoutEvent]?, totalEnergyBurned: HKQuantity?, totalDistance: HKQuantity?, totalSwimmingStrokeCount: HKQuantity?, device: HKDevice?, metadata: [String : Any]?)](/documentation/healthkit/hkworkout/init(activitytype:start:end:workoutevents:totalenergyburned:totaldistance:totalswimmingstrokecount:device:metadata:))

#### Accessing workout data

- [var duration: TimeInterval](/documentation/healthkit/hkworkout/duration)
- [var workoutActivityType: HKWorkoutActivityType](/documentation/healthkit/hkworkout/workoutactivitytype)
- [var workoutActivities: [HKWorkoutActivity]](/documentation/healthkit/hkworkout/workoutactivities)
- [var workoutEvents: [HKWorkoutEvent]?](/documentation/healthkit/hkworkout/workoutevents)
- [func statistics(for: HKQuantityType) -> HKStatistics?](/documentation/healthkit/hkworkout/statistics(for:))
- [var allStatistics: [HKQuantityType : HKStatistics]](/documentation/healthkit/hkworkout/allstatistics)
- [var totalDistance: HKQuantity?](/documentation/healthkit/hkworkout/totaldistance)
- [var totalEnergyBurned: HKQuantity?](/documentation/healthkit/hkworkout/totalenergyburned)
- [var totalFlightsClimbed: HKQuantity?](/documentation/healthkit/hkworkout/totalflightsclimbed)
- [var totalSwimmingStrokeCount: HKQuantity?](/documentation/healthkit/hkworkout/totalswimmingstrokecount)

#### Specifying sort identifiers

- [let HKWorkoutSortIdentifierDuration: String](/documentation/healthkit/hkworkoutsortidentifierduration)
- [let HKWorkoutSortIdentifierTotalDistance: String](/documentation/healthkit/hkworkoutsortidentifiertotaldistance)
- [let HKWorkoutSortIdentifierTotalEnergyBurned: String](/documentation/healthkit/hkworkoutsortidentifiertotalenergyburned)

#### Specifying predicate key paths

- [let HKPredicateKeyPathWorkoutType: String](/documentation/healthkit/hkpredicatekeypathworkouttype)
- [let HKPredicateKeyPathWorkoutDuration: String](/documentation/healthkit/hkpredicatekeypathworkoutduration)
- [let HKPredicateKeyPathWorkoutTotalDistance: String](/documentation/healthkit/hkpredicatekeypathworkouttotaldistance)
- [let HKPredicateKeyPathWorkoutTotalEnergyBurned: String](/documentation/healthkit/hkpredicatekeypathworkouttotalenergyburned)
- [let HKPredicateKeyPathWorkoutAverageQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutaveragequantity)
- [let HKPredicateKeyPathWorkoutMaximumQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutmaximumquantity)
- [let HKPredicateKeyPathWorkoutMinimumQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutminimumquantity)
- [let HKPredicateKeyPathWorkoutSumQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutsumquantity)

#### Specifying metadata keys

- [Workout Metadata Keys](/documentation/healthkit/workout-metadata-keys)

##### Workout Type

- [let HKMetadataKeyActivityType: String](/documentation/healthkit/hkmetadatakeyactivitytype)
- [let HKMetadataKeyAppleFitnessPlusSession: String](/documentation/healthkit/hkmetadatakeyapplefitnessplussession)
- [let HKMetadataKeyCoachedWorkout: String](/documentation/healthkit/hkmetadatakeycoachedworkout)
- [let HKMetadataKeyGroupFitness: String](/documentation/healthkit/hkmetadatakeygroupfitness)
- [let HKMetadataKeyIndoorWorkout: String](/documentation/healthkit/hkmetadatakeyindoorworkout)
- [let HKMetadataKeyWorkoutBrandName: String](/documentation/healthkit/hkmetadatakeyworkoutbrandname)

##### Cycling

- [let HKMetadataKeyCyclingFunctionalThresholdPowerTestType: String](/documentation/healthkit/hkmetadatakeycyclingfunctionalthresholdpowertesttype)

###### Valid test types

- [HKCyclingFunctionalThresholdPowerTestType](/documentation/healthkit/hkcyclingfunctionalthresholdpowertesttype)

###### Enumeration Cases

- [case maxExercise20Minute](/documentation/healthkit/hkcyclingfunctionalthresholdpowertesttype/maxexercise20minute)
- [case maxExercise60Minute](/documentation/healthkit/hkcyclingfunctionalthresholdpowertesttype/maxexercise60minute)
- [case predictionExercise](/documentation/healthkit/hkcyclingfunctionalthresholdpowertesttype/predictionexercise)
- [case rampTest](/documentation/healthkit/hkcyclingfunctionalthresholdpowertesttype/ramptest)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcyclingfunctionalthresholdpowertesttype/init(rawvalue:))

##### GymKit Fitness Equipment

- [let HKMetadataKeyFitnessMachineDuration: String](/documentation/healthkit/hkmetadatakeyfitnessmachineduration)
- [let HKMetadataKeyCrossTrainerDistance: String](/documentation/healthkit/hkmetadatakeycrosstrainerdistance)
- [let HKMetadataKeyIndoorBikeDistance: String](/documentation/healthkit/hkmetadatakeyindoorbikedistance)

##### Intensity

- [let HKMetadataKeyAverageMETs: String](/documentation/healthkit/hkmetadatakeyaveragemets)
- [let HKMetadataKeyPhysicalEffortEstimationType: String](/documentation/healthkit/hkmetadatakeyphysicaleffortestimationtype)

###### Valid estimation types

- [HKPhysicalEffortEstimationType](/documentation/healthkit/hkphysicaleffortestimationtype)

###### Enumeration Cases

- [case activityLookup](/documentation/healthkit/hkphysicaleffortestimationtype/activitylookup)
- [case deviceSensed](/documentation/healthkit/hkphysicaleffortestimationtype/devicesensed)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkphysicaleffortestimationtype/init(rawvalue:))

##### Skiing and Snowboarding

- [let HKMetadataKeyAlpineSlopeGrade: String](/documentation/healthkit/hkmetadatakeyalpineslopegrade)
- [let HKMetadataKeyElevationAscended: String](/documentation/healthkit/hkmetadatakeyelevationascended)
- [let HKMetadataKeyElevationDescended: String](/documentation/healthkit/hkmetadatakeyelevationdescended)

##### Speed

- [let HKMetadataKeyAverageSpeed: String](/documentation/healthkit/hkmetadatakeyaveragespeed)
- [let HKMetadataKeyMaximumSpeed: String](/documentation/healthkit/hkmetadatakeymaximumspeed)

##### Swimming

- [let HKMetadataKeySwimmingLocationType: String](/documentation/healthkit/hkmetadatakeyswimminglocationtype)

###### Valid Swimming Locations

- [HKWorkoutSwimmingLocationType](/documentation/healthkit/hkworkoutswimminglocationtype)

###### Swimming Locations

- [case openWater](/documentation/healthkit/hkworkoutswimminglocationtype/openwater)
- [case pool](/documentation/healthkit/hkworkoutswimminglocationtype/pool)
- [case unknown](/documentation/healthkit/hkworkoutswimminglocationtype/unknown)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkworkoutswimminglocationtype/init(rawvalue:))
- [let HKMetadataKeySwimmingStrokeStyle: String](/documentation/healthkit/hkmetadatakeyswimmingstrokestyle)

###### Valid Stroke Styles

- [HKSwimmingStrokeStyle](/documentation/healthkit/hkswimmingstrokestyle)

###### Strokes

- [case backstroke](/documentation/healthkit/hkswimmingstrokestyle/backstroke)
- [case breaststroke](/documentation/healthkit/hkswimmingstrokestyle/breaststroke)
- [case butterfly](/documentation/healthkit/hkswimmingstrokestyle/butterfly)
- [case freestyle](/documentation/healthkit/hkswimmingstrokestyle/freestyle)
- [case mixed](/documentation/healthkit/hkswimmingstrokestyle/mixed)
- [case kickboard](/documentation/healthkit/hkswimmingstrokestyle/kickboard)
- [case unknown](/documentation/healthkit/hkswimmingstrokestyle/unknown)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkswimmingstrokestyle/init(rawvalue:))
- [let HKMetadataKeyLapLength: String](/documentation/healthkit/hkmetadatakeylaplength)
- [let HKMetadataKeySWOLFScore: String](/documentation/healthkit/hkmetadatakeyswolfscore)
- [let HKMetadataKeyWaterSalinity: String](/documentation/healthkit/hkmetadatakeywatersalinity)

###### Valid water salinity

- [HKWaterSalinity](/documentation/healthkit/hkwatersalinity)

###### Enumeration Cases

- [case freshWater](/documentation/healthkit/hkwatersalinity/freshwater)
- [case saltWater](/documentation/healthkit/hkwatersalinity/saltwater)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkwatersalinity/init(rawvalue:))

#### Instance Properties

- [var workoutPlan: WorkoutPlan?](/documentation/healthkit/hkworkout/workoutplan)
- [HKWorkoutActivity](/documentation/healthkit/hkworkoutactivity)

#### Creating workout activities

- [init(workoutConfiguration: HKWorkoutConfiguration, start: Date, end: Date?, metadata: [String : Any]?)](/documentation/healthkit/hkworkoutactivity/init(workoutconfiguration:start:end:metadata:))

#### Accessing workout data

- [var uuid: UUID](/documentation/healthkit/hkworkoutactivity/uuid)
- [var startDate: Date](/documentation/healthkit/hkworkoutactivity/startdate)
- [var endDate: Date?](/documentation/healthkit/hkworkoutactivity/enddate)
- [var duration: TimeInterval](/documentation/healthkit/hkworkoutactivity/duration)
- [var allStatistics: [HKQuantityType : HKStatistics]](/documentation/healthkit/hkworkoutactivity/allstatistics)
- [func statistics(for: HKQuantityType) -> HKStatistics?](/documentation/healthkit/hkworkoutactivity/statistics(for:))
- [var metadata: [String : Any]?](/documentation/healthkit/hkworkoutactivity/metadata)
- [var workoutConfiguration: HKWorkoutConfiguration](/documentation/healthkit/hkworkoutactivity/workoutconfiguration)
- [var workoutEvents: [HKWorkoutEvent]](/documentation/healthkit/hkworkoutactivity/workoutevents)

#### Specifying predicate key paths

- [let HKPredicateKeyPathWorkoutActivity: String](/documentation/healthkit/hkpredicatekeypathworkoutactivity)
- [let HKPredicateKeyPathWorkoutActivityType: String](/documentation/healthkit/hkpredicatekeypathworkoutactivitytype)
- [let HKPredicateKeyPathWorkoutActivityStartDate: String](/documentation/healthkit/hkpredicatekeypathworkoutactivitystartdate)
- [let HKPredicateKeyPathWorkoutActivityEndDate: String](/documentation/healthkit/hkpredicatekeypathworkoutactivityenddate)
- [let HKPredicateKeyPathWorkoutActivityDuration: String](/documentation/healthkit/hkpredicatekeypathworkoutactivityduration)
- [let HKPredicateKeyPathWorkoutActivityAverageQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutactivityaveragequantity)
- [let HKPredicateKeyPathWorkoutActivityMaximumQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutactivitymaximumquantity)
- [let HKPredicateKeyPathWorkoutActivityMinimumQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutactivityminimumquantity)
- [let HKPredicateKeyPathWorkoutActivitySumQuantity: String](/documentation/healthkit/hkpredicatekeypathworkoutactivitysumquantity)
- [HKWorkoutBuilder](/documentation/healthkit/hkworkoutbuilder)

#### Creating the builder

- [init(healthStore: HKHealthStore, configuration: HKWorkoutConfiguration, device: HKDevice?)](/documentation/healthkit/hkworkoutbuilder/init(healthstore:configuration:device:))
- [var device: HKDevice?](/documentation/healthkit/hkworkoutbuilder/device)
- [var workoutConfiguration: HKWorkoutConfiguration](/documentation/healthkit/hkworkoutbuilder/workoutconfiguration)

#### Starting the workout

- [func beginCollection(withStart: Date, completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutbuilder/begincollection(withstart:completion:))
- [var startDate: Date?](/documentation/healthkit/hkworkoutbuilder/startdate)
- [func elapsedTime(at: Date) -> TimeInterval](/documentation/healthkit/hkworkoutbuilder/elapsedtime(at:))

#### Associating samples with the workout

- [func add([HKSample], completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutbuilder/add(_:completion:))
- [func seriesBuilder(for: HKSeriesType) -> HKSeriesBuilder?](/documentation/healthkit/hkworkoutbuilder/seriesbuilder(for:))
- [func statistics(for: HKQuantityType) -> HKStatistics?](/documentation/healthkit/hkworkoutbuilder/statistics(for:))

#### Adding metadata to the workout

- [func addMetadata([String : Any], completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutbuilder/addmetadata(_:completion:))
- [var metadata: [String : Any]](/documentation/healthkit/hkworkoutbuilder/metadata)

#### Adding events to the workout

- [func addWorkoutEvents([HKWorkoutEvent], completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutbuilder/addworkoutevents(_:completion:))
- [var workoutEvents: [HKWorkoutEvent]](/documentation/healthkit/hkworkoutbuilder/workoutevents)

#### Managing workout activities

- [func addWorkoutActivity(HKWorkoutActivity, completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutbuilder/addworkoutactivity(_:completion:))
- [func updateActivity(uuid: UUID, adding: [String : Any], completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutbuilder/updateactivity(uuid:adding:completion:))
- [func updateActivity(uuid: UUID, end: Date, completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutbuilder/updateactivity(uuid:end:completion:))
- [var workoutActivities: [HKWorkoutActivity]](/documentation/healthkit/hkworkoutbuilder/workoutactivities)

#### Ending the workout

- [func endCollection(withEnd: Date, completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutbuilder/endcollection(withend:completion:))
- [var endDate: Date?](/documentation/healthkit/hkworkoutbuilder/enddate)
- [func finishWorkout(completion: (HKWorkout?, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutbuilder/finishworkout(completion:))
- [func discardWorkout()](/documentation/healthkit/hkworkoutbuilder/discardworkout())

#### Accessing workout statistics

- [var allStatistics: [HKQuantityType : HKStatistics]](/documentation/healthkit/hkworkoutbuilder/allstatistics)
- [HKWorkoutType](/documentation/healthkit/hkworkouttype)
- [let HKWorkoutTypeIdentifier: String](/documentation/healthkit/hkworkouttypeidentifier)
- [HKWorkoutActivityType](/documentation/healthkit/hkworkoutactivitytype)

#### Individual sports

- [case archery](/documentation/healthkit/hkworkoutactivitytype/archery)
- [case bowling](/documentation/healthkit/hkworkoutactivitytype/bowling)
- [case fencing](/documentation/healthkit/hkworkoutactivitytype/fencing)
- [case gymnastics](/documentation/healthkit/hkworkoutactivitytype/gymnastics)
- [case trackAndField](/documentation/healthkit/hkworkoutactivitytype/trackandfield)

#### Team sports

- [case americanFootball](/documentation/healthkit/hkworkoutactivitytype/americanfootball)
- [case australianFootball](/documentation/healthkit/hkworkoutactivitytype/australianfootball)
- [case baseball](/documentation/healthkit/hkworkoutactivitytype/baseball)
- [case basketball](/documentation/healthkit/hkworkoutactivitytype/basketball)
- [case cricket](/documentation/healthkit/hkworkoutactivitytype/cricket)
- [case discSports](/documentation/healthkit/hkworkoutactivitytype/discsports)
- [case handball](/documentation/healthkit/hkworkoutactivitytype/handball)
- [case hockey](/documentation/healthkit/hkworkoutactivitytype/hockey)
- [case lacrosse](/documentation/healthkit/hkworkoutactivitytype/lacrosse)
- [case rugby](/documentation/healthkit/hkworkoutactivitytype/rugby)
- [case soccer](/documentation/healthkit/hkworkoutactivitytype/soccer)
- [case softball](/documentation/healthkit/hkworkoutactivitytype/softball)
- [case volleyball](/documentation/healthkit/hkworkoutactivitytype/volleyball)

#### Exercise and fitness

- [case preparationAndRecovery](/documentation/healthkit/hkworkoutactivitytype/preparationandrecovery)
- [case flexibility](/documentation/healthkit/hkworkoutactivitytype/flexibility)
- [case cooldown](/documentation/healthkit/hkworkoutactivitytype/cooldown)
- [case walking](/documentation/healthkit/hkworkoutactivitytype/walking)
- [case running](/documentation/healthkit/hkworkoutactivitytype/running)
- [case wheelchairWalkPace](/documentation/healthkit/hkworkoutactivitytype/wheelchairwalkpace)
- [case wheelchairRunPace](/documentation/healthkit/hkworkoutactivitytype/wheelchairrunpace)
- [case cycling](/documentation/healthkit/hkworkoutactivitytype/cycling)
- [case handCycling](/documentation/healthkit/hkworkoutactivitytype/handcycling)
- [case coreTraining](/documentation/healthkit/hkworkoutactivitytype/coretraining)
- [case elliptical](/documentation/healthkit/hkworkoutactivitytype/elliptical)
- [case functionalStrengthTraining](/documentation/healthkit/hkworkoutactivitytype/functionalstrengthtraining)
- [case traditionalStrengthTraining](/documentation/healthkit/hkworkoutactivitytype/traditionalstrengthtraining)
- [case crossTraining](/documentation/healthkit/hkworkoutactivitytype/crosstraining)
- [case mixedCardio](/documentation/healthkit/hkworkoutactivitytype/mixedcardio)
- [case highIntensityIntervalTraining](/documentation/healthkit/hkworkoutactivitytype/highintensityintervaltraining)
- [case jumpRope](/documentation/healthkit/hkworkoutactivitytype/jumprope)
- [case stairClimbing](/documentation/healthkit/hkworkoutactivitytype/stairclimbing)
- [case stairs](/documentation/healthkit/hkworkoutactivitytype/stairs)
- [case stepTraining](/documentation/healthkit/hkworkoutactivitytype/steptraining)
- [case fitnessGaming](/documentation/healthkit/hkworkoutactivitytype/fitnessgaming)

#### Studio activities

- [case barre](/documentation/healthkit/hkworkoutactivitytype/barre)
- [case cardioDance](/documentation/healthkit/hkworkoutactivitytype/cardiodance)
- [case socialDance](/documentation/healthkit/hkworkoutactivitytype/socialdance)
- [case yoga](/documentation/healthkit/hkworkoutactivitytype/yoga)
- [case mindAndBody](/documentation/healthkit/hkworkoutactivitytype/mindandbody)
- [case pilates](/documentation/healthkit/hkworkoutactivitytype/pilates)

#### Racket sports

- [case badminton](/documentation/healthkit/hkworkoutactivitytype/badminton)
- [case pickleball](/documentation/healthkit/hkworkoutactivitytype/pickleball)
- [case racquetball](/documentation/healthkit/hkworkoutactivitytype/racquetball)
- [case squash](/documentation/healthkit/hkworkoutactivitytype/squash)
- [case tableTennis](/documentation/healthkit/hkworkoutactivitytype/tabletennis)
- [case tennis](/documentation/healthkit/hkworkoutactivitytype/tennis)

#### Outdoor activities

- [case climbing](/documentation/healthkit/hkworkoutactivitytype/climbing)
- [case equestrianSports](/documentation/healthkit/hkworkoutactivitytype/equestriansports)
- [case fishing](/documentation/healthkit/hkworkoutactivitytype/fishing)
- [case golf](/documentation/healthkit/hkworkoutactivitytype/golf)
- [case hiking](/documentation/healthkit/hkworkoutactivitytype/hiking)
- [case hunting](/documentation/healthkit/hkworkoutactivitytype/hunting)
- [case play](/documentation/healthkit/hkworkoutactivitytype/play)

#### Snow and ice sports

- [case crossCountrySkiing](/documentation/healthkit/hkworkoutactivitytype/crosscountryskiing)
- [case curling](/documentation/healthkit/hkworkoutactivitytype/curling)
- [case downhillSkiing](/documentation/healthkit/hkworkoutactivitytype/downhillskiing)

##### Monitoring Downhill Skiing Workout Sessions

- [Receiving Downhill Skiing and Snowboarding Data](/documentation/healthkit/receiving-downhill-skiing-and-snowboarding-data)
- [case snowSports](/documentation/healthkit/hkworkoutactivitytype/snowsports)
- [case snowboarding](/documentation/healthkit/hkworkoutactivitytype/snowboarding)

##### Monitoring Downhill Skiing Workout Sessions

- [Receiving Downhill Skiing and Snowboarding Data](/documentation/healthkit/receiving-downhill-skiing-and-snowboarding-data)
- [case skatingSports](/documentation/healthkit/hkworkoutactivitytype/skatingsports)

#### Water activities

- [case paddleSports](/documentation/healthkit/hkworkoutactivitytype/paddlesports)
- [case rowing](/documentation/healthkit/hkworkoutactivitytype/rowing)
- [case sailing](/documentation/healthkit/hkworkoutactivitytype/sailing)
- [case surfingSports](/documentation/healthkit/hkworkoutactivitytype/surfingsports)
- [case swimming](/documentation/healthkit/hkworkoutactivitytype/swimming)
- [case underwaterDiving](/documentation/healthkit/hkworkoutactivitytype/underwaterdiving)
- [case waterFitness](/documentation/healthkit/hkworkoutactivitytype/waterfitness)
- [case waterPolo](/documentation/healthkit/hkworkoutactivitytype/waterpolo)
- [case waterSports](/documentation/healthkit/hkworkoutactivitytype/watersports)

#### Martial arts

- [case boxing](/documentation/healthkit/hkworkoutactivitytype/boxing)
- [case kickboxing](/documentation/healthkit/hkworkoutactivitytype/kickboxing)
- [case martialArts](/documentation/healthkit/hkworkoutactivitytype/martialarts)
- [case taiChi](/documentation/healthkit/hkworkoutactivitytype/taichi)
- [case wrestling](/documentation/healthkit/hkworkoutactivitytype/wrestling)

#### Other activities

- [case other](/documentation/healthkit/hkworkoutactivitytype/other)

#### Deprecated activity types

- [case dance](/documentation/healthkit/hkworkoutactivitytype/dance)
- [case danceInspiredTraining](/documentation/healthkit/hkworkoutactivitytype/danceinspiredtraining)
- [case mixedMetabolicCardioTraining](/documentation/healthkit/hkworkoutactivitytype/mixedmetaboliccardiotraining)

#### Multisport activities

- [case swimBikeRun](/documentation/healthkit/hkworkoutactivitytype/swimbikerun)
- [case transition](/documentation/healthkit/hkworkoutactivitytype/transition)

#### Initializers

- [init?(rawValue: UInt)](/documentation/healthkit/hkworkoutactivitytype/init(rawvalue:))
- [HKWorkoutSessionType](/documentation/healthkit/hkworkoutsessiontype)

#### Types

- [case mirrored](/documentation/healthkit/hkworkoutsessiontype/mirrored)
- [case primary](/documentation/healthkit/hkworkoutsessiontype/primary)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkworkoutsessiontype/init(rawvalue:))
- [HKWorkoutEvent](/documentation/healthkit/hkworkoutevent)

#### Creating workout events

- [convenience init(type: HKWorkoutEventType, dateInterval: DateInterval, metadata: [String : Any]?)](/documentation/healthkit/hkworkoutevent/init(type:dateinterval:metadata:))

#### Getting property data

- [var dateInterval: DateInterval](/documentation/healthkit/hkworkoutevent/dateinterval)
- [var type: HKWorkoutEventType](/documentation/healthkit/hkworkoutevent/type)
- [var metadata: [String : Any]?](/documentation/healthkit/hkworkoutevent/metadata)

#### Determining the event type

- [HKWorkoutEventType](/documentation/healthkit/hkworkouteventtype)

##### Events

- [case pause](/documentation/healthkit/hkworkouteventtype/pause)
- [case resume](/documentation/healthkit/hkworkouteventtype/resume)
- [case motionPaused](/documentation/healthkit/hkworkouteventtype/motionpaused)
- [case motionResumed](/documentation/healthkit/hkworkouteventtype/motionresumed)
- [case pauseOrResumeRequest](/documentation/healthkit/hkworkouteventtype/pauseorresumerequest)
- [case lap](/documentation/healthkit/hkworkouteventtype/lap)
- [case segment](/documentation/healthkit/hkworkouteventtype/segment)
- [case marker](/documentation/healthkit/hkworkouteventtype/marker)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkworkouteventtype/init(rawvalue:))

#### Deprecated

- [convenience init(type: HKWorkoutEventType, date: Date)](/documentation/healthkit/hkworkoutevent/init(type:date:))
- [convenience init(type: HKWorkoutEventType, date: Date, metadata: [String : Any])](/documentation/healthkit/hkworkoutevent/init(type:date:metadata:))
- [var date: Date](/documentation/healthkit/hkworkoutevent/date)

### Sessions

- [Running workout sessions](/documentation/healthkit/running-workout-sessions)
- [Build a workout app for Apple Watch](/documentation/healthkit/build-a-workout-app-for-apple-watch)
- [Building a multidevice workout app](/documentation/healthkit/building-a-multidevice-workout-app)
- [Building a workout app for iPhone and iPad](/documentation/healthkit/building-a-workout-app-for-iphone-and-ipad)
- [HKWorkoutSession](/documentation/healthkit/hkworkoutsession)

#### Creating workout sessions

- [init(healthStore: HKHealthStore, configuration: HKWorkoutConfiguration) throws](/documentation/healthkit/hkworkoutsession/init(healthstore:configuration:))

#### Monitoring the session

- [var delegate: (any HKWorkoutSessionDelegate)?](/documentation/healthkit/hkworkoutsession/delegate)
- [HKWorkoutSessionDelegate](/documentation/healthkit/hkworkoutsessiondelegate)

##### Tracking workout sessions

- [func workoutSession(HKWorkoutSession, didChangeTo: HKWorkoutSessionState, from: HKWorkoutSessionState, date: Date)](/documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didchangeto:from:date:))
- [func workoutSession(HKWorkoutSession, didFailWithError: any Error)](/documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didfailwitherror:))
- [func workoutSession(HKWorkoutSession, didGenerate: HKWorkoutEvent)](/documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didgenerate:))
- [func workoutSession(HKWorkoutSession, didBeginActivityWith: HKWorkoutConfiguration, date: Date)](/documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didbeginactivitywith:date:))
- [func workoutSession(HKWorkoutSession, didEndActivityWith: HKWorkoutConfiguration, date: Date)](/documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didendactivitywith:date:))

##### Working with mirrored sessions

- [func workoutSession(HKWorkoutSession, didDisconnectFromRemoteDeviceWithError: (any Error)?)](/documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:diddisconnectfromremotedevicewitherror:))
- [func workoutSession(HKWorkoutSession, didReceiveDataFromRemoteWorkoutSession: [Data])](/documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didreceivedatafromremoteworkoutsession:))

#### Accessing the workout builder

- [func associatedWorkoutBuilder() -> HKLiveWorkoutBuilder](/documentation/healthkit/hkworkoutsession/associatedworkoutbuilder())

#### Managing the workout

- [func prepare()](/documentation/healthkit/hkworkoutsession/prepare())
- [func startActivity(with: Date?)](/documentation/healthkit/hkworkoutsession/startactivity(with:))
- [func pause()](/documentation/healthkit/hkworkoutsession/pause())
- [func resume()](/documentation/healthkit/hkworkoutsession/resume())
- [func stopActivity(with: Date?)](/documentation/healthkit/hkworkoutsession/stopactivity(with:))
- [func end()](/documentation/healthkit/hkworkoutsession/end())

#### Working with remote workout sessions

- [func startMirroringToCompanionDevice(completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutsession/startmirroringtocompaniondevice(completion:))
- [func stopMirroringToCompanionDevice(completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutsession/stopmirroringtocompaniondevice(completion:))
- [func sendToRemoteWorkoutSession(data: Data, completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutsession/sendtoremoteworkoutsession(data:completion:))

#### Accessing session data

- [var endDate: Date?](/documentation/healthkit/hkworkoutsession/enddate)
- [var startDate: Date?](/documentation/healthkit/hkworkoutsession/startdate)
- [var state: HKWorkoutSessionState](/documentation/healthkit/hkworkoutsession/state)
- [var type: HKWorkoutSessionType](/documentation/healthkit/hkworkoutsession/type)
- [var workoutConfiguration: HKWorkoutConfiguration](/documentation/healthkit/hkworkoutsession/workoutconfiguration)

#### Managing workout activities

- [var currentActivity: HKWorkoutActivity](/documentation/healthkit/hkworkoutsession/currentactivity)
- [func beginNewActivity(configuration: HKWorkoutConfiguration, date: Date, metadata: [String : Any]?)](/documentation/healthkit/hkworkoutsession/beginnewactivity(configuration:date:metadata:))
- [func endCurrentActivity(on: Date)](/documentation/healthkit/hkworkoutsession/endcurrentactivity(on:))

#### Deprecated methods

- [init(activityType: HKWorkoutActivityType, locationType: HKWorkoutSessionLocationType)](/documentation/healthkit/hkworkoutsession/init(activitytype:locationtype:))
- [init(configuration: HKWorkoutConfiguration) throws](/documentation/healthkit/hkworkoutsession/init(configuration:))
- [var activityType: HKWorkoutActivityType](/documentation/healthkit/hkworkoutsession/activitytype)
- [var locationType: HKWorkoutSessionLocationType](/documentation/healthkit/hkworkoutsession/locationtype)
- [HKWorkoutConfiguration](/documentation/healthkit/hkworkoutconfiguration)

#### Session settings

- [var activityType: HKWorkoutActivityType](/documentation/healthkit/hkworkoutconfiguration/activitytype)
- [var locationType: HKWorkoutSessionLocationType](/documentation/healthkit/hkworkoutconfiguration/locationtype)
- [HKWorkoutSessionLocationType](/documentation/healthkit/hkworkoutsessionlocationtype)

##### Constants

- [case unknown](/documentation/healthkit/hkworkoutsessionlocationtype/unknown)
- [case indoor](/documentation/healthkit/hkworkoutsessionlocationtype/indoor)
- [case outdoor](/documentation/healthkit/hkworkoutsessionlocationtype/outdoor)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkworkoutsessionlocationtype/init(rawvalue:))
- [var swimmingLocationType: HKWorkoutSwimmingLocationType](/documentation/healthkit/hkworkoutconfiguration/swimminglocationtype)
- [HKWorkoutSwimmingLocationType](/documentation/healthkit/hkworkoutswimminglocationtype)

##### Swimming Locations

- [case openWater](/documentation/healthkit/hkworkoutswimminglocationtype/openwater)
- [case pool](/documentation/healthkit/hkworkoutswimminglocationtype/pool)
- [case unknown](/documentation/healthkit/hkworkoutswimminglocationtype/unknown)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkworkoutswimminglocationtype/init(rawvalue:))
- [var lapLength: HKQuantity?](/documentation/healthkit/hkworkoutconfiguration/laplength)
- [HKWorkoutSessionState](/documentation/healthkit/hkworkoutsessionstate)

#### Session states

- [case notStarted](/documentation/healthkit/hkworkoutsessionstate/notstarted)
- [case prepared](/documentation/healthkit/hkworkoutsessionstate/prepared)
- [case running](/documentation/healthkit/hkworkoutsessionstate/running)
- [case paused](/documentation/healthkit/hkworkoutsessionstate/paused)
- [case stopped](/documentation/healthkit/hkworkoutsessionstate/stopped)
- [case ended](/documentation/healthkit/hkworkoutsessionstate/ended)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkworkoutsessionstate/init(rawvalue:))
- [HKLiveWorkoutBuilder](/documentation/healthkit/hkliveworkoutbuilder)

#### Configuring a live workout builder

- [var dataSource: HKLiveWorkoutDataSource?](/documentation/healthkit/hkliveworkoutbuilder/datasource)
- [var workoutSession: HKWorkoutSession?](/documentation/healthkit/hkliveworkoutbuilder/workoutsession)

#### Monitoring and controlling the workout

- [var delegate: (any HKLiveWorkoutBuilderDelegate)?](/documentation/healthkit/hkliveworkoutbuilder/delegate)
- [HKLiveWorkoutBuilderDelegate](/documentation/healthkit/hkliveworkoutbuilderdelegate)

##### Tracking Live Data

- [func workoutBuilder(HKLiveWorkoutBuilder, didCollectDataOf: Set<HKSampleType>)](/documentation/healthkit/hkliveworkoutbuilderdelegate/workoutbuilder(_:didcollectdataof:))
- [func workoutBuilderDidCollectEvent(HKLiveWorkoutBuilder)](/documentation/healthkit/hkliveworkoutbuilderdelegate/workoutbuilderdidcollectevent(_:))
- [func workoutBuilder(HKLiveWorkoutBuilder, didBegin: HKWorkoutActivity)](/documentation/healthkit/hkliveworkoutbuilderdelegate/workoutbuilder(_:didbegin:))
- [func workoutBuilder(HKLiveWorkoutBuilder, didEnd: HKWorkoutActivity)](/documentation/healthkit/hkliveworkoutbuilderdelegate/workoutbuilder(_:didend:))
- [var currentWorkoutActivity: HKWorkoutActivity?](/documentation/healthkit/hkliveworkoutbuilder/currentworkoutactivity)
- [var shouldCollectWorkoutEvents: Bool](/documentation/healthkit/hkliveworkoutbuilder/shouldcollectworkoutevents)

#### Accessing data

- [var elapsedTime: TimeInterval](/documentation/healthkit/hkliveworkoutbuilder/elapsedtime)
- [HKLiveWorkoutDataSource](/documentation/healthkit/hkliveworkoutdatasource)

#### Creating a live data source

- [init(healthStore: HKHealthStore, workoutConfiguration: HKWorkoutConfiguration?)](/documentation/healthkit/hkliveworkoutdatasource/init(healthstore:workoutconfiguration:))
- [var typesToCollect: Set<HKQuantityType>](/documentation/healthkit/hkliveworkoutdatasource/typestocollect)

#### Calculating statistics

- [func enableCollection(for: HKQuantityType, predicate: NSPredicate?)](/documentation/healthkit/hkliveworkoutdatasource/enablecollection(for:predicate:))
- [func disableCollection(for: HKQuantityType)](/documentation/healthkit/hkliveworkoutdatasource/disablecollection(for:))

### Activity rings

- [HKActivitySummary](/documentation/healthkit/hkactivitysummary)

#### Accessing the summary’s data

- [var activityMoveMode: HKActivityMoveMode](/documentation/healthkit/hkactivitysummary/activitymovemode)
- [HKActivityMoveMode](/documentation/healthkit/hkactivitymovemode)

##### Move Modes

- [case activeEnergy](/documentation/healthkit/hkactivitymovemode/activeenergy)
- [case appleMoveTime](/documentation/healthkit/hkactivitymovemode/applemovetime)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkactivitymovemode/init(rawvalue:))
- [var activeEnergyBurned: HKQuantity](/documentation/healthkit/hkactivitysummary/activeenergyburned)
- [var activeEnergyBurnedGoal: HKQuantity](/documentation/healthkit/hkactivitysummary/activeenergyburnedgoal)
- [var appleMoveTime: HKQuantity](/documentation/healthkit/hkactivitysummary/applemovetime)
- [var appleMoveTimeGoal: HKQuantity](/documentation/healthkit/hkactivitysummary/applemovetimegoal)
- [var appleExerciseTime: HKQuantity](/documentation/healthkit/hkactivitysummary/appleexercisetime)
- [var appleExerciseTimeGoal: HKQuantity](/documentation/healthkit/hkactivitysummary/appleexercisetimegoal)
- [var exerciseTimeGoal: HKQuantity?](/documentation/healthkit/hkactivitysummary/exercisetimegoal)
- [var appleStandHours: HKQuantity](/documentation/healthkit/hkactivitysummary/applestandhours)
- [var standHoursGoal: HKQuantity?](/documentation/healthkit/hkactivitysummary/standhoursgoal)
- [var appleStandHoursGoal: HKQuantity](/documentation/healthkit/hkactivitysummary/applestandhoursgoal)
- [HKCategoryValueAppleStandHour](/documentation/healthkit/hkcategoryvalueapplestandhour)

##### Constants

- [case stood](/documentation/healthkit/hkcategoryvalueapplestandhour/stood)
- [case idle](/documentation/healthkit/hkcategoryvalueapplestandhour/idle)

##### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvalueapplestandhour/init(rawvalue:))
- [func dateComponents(for: Calendar) -> DateComponents](/documentation/healthkit/hkactivitysummary/datecomponents(for:))

#### Specifying predicate key paths

- [let HKPredicateKeyPathDateComponents: String](/documentation/healthkit/hkpredicatekeypathdatecomponents)

#### Instance Properties

- [var isPaused: Bool](/documentation/healthkit/hkactivitysummary/ispaused)
- [HKActivitySummaryQueryDescriptor](/documentation/healthkit/hkactivitysummaryquerydescriptor)

#### Creating query descriptors

- [init(predicate: NSPredicate?)](/documentation/healthkit/hkactivitysummaryquerydescriptor/init(predicate:))

#### Running queries

- [func result(for: HKHealthStore) async throws -> [HKActivitySummary]](/documentation/healthkit/hkactivitysummaryquerydescriptor/result(for:))
- [func results(for: HKHealthStore) -> HKActivitySummaryQueryDescriptor.Results](/documentation/healthkit/hkactivitysummaryquerydescriptor/results(for:))
- [HKActivitySummaryQueryDescriptor.Results](/documentation/healthkit/hkactivitysummaryquerydescriptor/results)

##### Creating an Iterator

- [HKActivitySummaryQueryDescriptor.Results.Iterator](/documentation/healthkit/hkactivitysummaryquerydescriptor/results/iterator)

#### Accessing query properties

- [var predicate: NSPredicate?](/documentation/healthkit/hkactivitysummaryquerydescriptor/predicate)

#### Default Implementations

- [HKAsyncQuery Implementations](/documentation/healthkit/hkactivitysummaryquerydescriptor/hkasyncquery-implementations)

##### Instance Methods

- [func result(for: HKHealthStore) async throws -> [HKActivitySummary]](/documentation/healthkit/hkactivitysummaryquerydescriptor/result(for:))
- [HKAsyncSequenceQuery Implementations](/documentation/healthkit/hkactivitysummaryquerydescriptor/hkasyncsequencequery-implementations)

##### Instance Methods

- [func results(for: HKHealthStore) -> HKActivitySummaryQueryDescriptor.Results](/documentation/healthkit/hkactivitysummaryquerydescriptor/results(for:))
- [HKActivitySummaryQuery](/documentation/healthkit/hkactivitysummaryquery)

#### Creating activity summary queries

- [Executing Activity Summary Queries](/documentation/healthkit/executing-activity-summary-queries)
- [init(predicate: NSPredicate?, resultsHandler: (HKActivitySummaryQuery, [HKActivitySummary]?, (any Error)?) -> Void)](/documentation/healthkit/hkactivitysummaryquery/init(predicate:resultshandler:))

#### Getting property data

- [var updateHandler: ((HKActivitySummaryQuery, [HKActivitySummary]?, (any Error)?) -> Void)?](/documentation/healthkit/hkactivitysummaryquery/updatehandler)
- [HKActivityRingView](/documentation/healthkitui/hkactivityringview)
- [HKActivityMoveModeObject](/documentation/healthkit/hkactivitymovemodeobject)

#### Accessing the data

- [var activityMoveMode: HKActivityMoveMode](/documentation/healthkit/hkactivitymovemodeobject/activitymovemode)

### Route data

- [Creating a workout route](/documentation/healthkit/creating-a-workout-route)
- [Reading route data](/documentation/healthkit/reading-route-data)
- [HKWorkoutRouteBuilder](/documentation/healthkit/hkworkoutroutebuilder)

#### Creating the builder

- [func seriesBuilder(for: HKSeriesType) -> HKSeriesBuilder?](/documentation/healthkit/hkworkoutbuilder/seriesbuilder(for:))
- [init(healthStore: HKHealthStore, device: HKDevice?)](/documentation/healthkit/hkworkoutroutebuilder/init(healthstore:device:))

#### Building the route

- [func finishRoute(with: HKWorkout, metadata: [String : Any]?, completion: (HKWorkoutRoute?, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutroutebuilder/finishroute(with:metadata:completion:))
- [func insertRouteData([CLLocation], completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutroutebuilder/insertroutedata(_:completion:))
- [func addMetadata([String : Any], completion: (Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutroutebuilder/addmetadata(_:completion:))
- [HKWorkoutRoute](/documentation/healthkit/hkworkoutroute)
- [HKWorkoutRouteQueryDescriptor](/documentation/healthkit/hkworkoutroutequerydescriptor)

#### Creating workout route query descriptors

- [init(HKWorkoutRoute)](/documentation/healthkit/hkworkoutroutequerydescriptor/init(_:))

#### Running queries

- [func results(for: HKHealthStore) -> HKWorkoutRouteQueryDescriptor.Results](/documentation/healthkit/hkworkoutroutequerydescriptor/results(for:))
- [HKWorkoutRouteQueryDescriptor.Results](/documentation/healthkit/hkworkoutroutequerydescriptor/results)

##### Creating an Iterator

- [HKWorkoutRouteQueryDescriptor.Results.Iterator](/documentation/healthkit/hkworkoutroutequerydescriptor/results/iterator)

#### Accessing query properties

- [var workoutRoute: HKWorkoutRoute](/documentation/healthkit/hkworkoutroutequerydescriptor/workoutroute)

#### Default Implementations

- [HKAsyncSequenceQuery Implementations](/documentation/healthkit/hkworkoutroutequerydescriptor/hkasyncsequencequery-implementations)

##### Instance Methods

- [func results(for: HKHealthStore) -> HKWorkoutRouteQueryDescriptor.Results](/documentation/healthkit/hkworkoutroutequerydescriptor/results(for:))
- [HKWorkoutRouteQuery](/documentation/healthkit/hkworkoutroutequery)

#### Creating route queries

- [init(route: HKWorkoutRoute, dataHandler: (HKWorkoutRouteQuery, [CLLocation]?, Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutroutequery/init(route:datahandler:))
- [init(route: HKWorkoutRoute, dateInterval: DateInterval, dataHandler: (HKWorkoutRouteQuery, [CLLocation]?, Bool, (any Error)?) -> Void)](/documentation/healthkit/hkworkoutroutequery/init(route:dateinterval:datahandler:))
- [let HKWorkoutRouteTypeIdentifier: String](/documentation/healthkit/hkworkoutroutetypeidentifier)
- [HKSeriesBuilder](/documentation/healthkit/hkseriesbuilder)

#### Managing series generation

- [func discard()](/documentation/healthkit/hkseriesbuilder/discard())
- [HKSeriesSample](/documentation/healthkit/hkseriessample)

#### Accessing the series

- [var count: Int](/documentation/healthkit/hkseriessample/count)

## Errors

- [HKError](/documentation/healthkit/hkerror)

### Accessing errors

- [HKError.Code](/documentation/healthkit/hkerror/code)

#### Errors

- [case errorHealthDataUnavailable](/documentation/healthkit/hkerror/code/errorhealthdataunavailable)
- [case errorHealthDataRestricted](/documentation/healthkit/hkerror/code/errorhealthdatarestricted)
- [case errorInvalidArgument](/documentation/healthkit/hkerror/code/errorinvalidargument)
- [case errorAuthorizationDenied](/documentation/healthkit/hkerror/code/errorauthorizationdenied)
- [case errorAuthorizationNotDetermined](/documentation/healthkit/hkerror/code/errorauthorizationnotdetermined)
- [case errorRequiredAuthorizationDenied](/documentation/healthkit/hkerror/code/errorrequiredauthorizationdenied)
- [case errorDatabaseInaccessible](/documentation/healthkit/hkerror/code/errordatabaseinaccessible)
- [case errorUserCanceled](/documentation/healthkit/hkerror/code/errorusercanceled)
- [case errorAnotherWorkoutSessionStarted](/documentation/healthkit/hkerror/code/erroranotherworkoutsessionstarted)
- [case errorUserExitedWorkoutSession](/documentation/healthkit/hkerror/code/erroruserexitedworkoutsession)
- [case errorNoData](/documentation/healthkit/hkerror/code/errornodata)

#### Enumeration Cases

- [case errorBackgroundWorkoutSessionNotAllowed](/documentation/healthkit/hkerror/code/errorbackgroundworkoutsessionnotallowed)
- [case errorDataSizeExceeded](/documentation/healthkit/hkerror/code/errordatasizeexceeded)
- [case errorNotPermissibleForGuestUserMode](/documentation/healthkit/hkerror/code/errornotpermissibleforguestusermode)
- [case errorWorkoutActivityNotAllowed](/documentation/healthkit/hkerror/code/errorworkoutactivitynotallowed)
- [case unknownError](/documentation/healthkit/hkerror/code/unknownerror)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkerror/code/init(rawvalue:))

#### Type Properties

- [static var noError: HKError.Code](/documentation/healthkit/hkerror/code/noerror)
- [static var noError: HKError.Code](/documentation/healthkit/hkerror/noerror)
- [static var errorHealthDataUnavailable: HKError.Code](/documentation/healthkit/hkerror/errorhealthdataunavailable)
- [static var errorHealthDataRestricted: HKError.Code](/documentation/healthkit/hkerror/errorhealthdatarestricted)
- [static var errorInvalidArgument: HKError.Code](/documentation/healthkit/hkerror/errorinvalidargument)
- [static var errorAuthorizationDenied: HKError.Code](/documentation/healthkit/hkerror/errorauthorizationdenied)
- [static var errorAuthorizationNotDetermined: HKError.Code](/documentation/healthkit/hkerror/errorauthorizationnotdetermined)
- [static var errorRequiredAuthorizationDenied: HKError.Code](/documentation/healthkit/hkerror/errorrequiredauthorizationdenied)
- [static var errorDatabaseInaccessible: HKError.Code](/documentation/healthkit/hkerror/errordatabaseinaccessible)
- [static var errorUserCanceled: HKError.Code](/documentation/healthkit/hkerror/errorusercanceled)
- [static var errorAnotherWorkoutSessionStarted: HKError.Code](/documentation/healthkit/hkerror/erroranotherworkoutsessionstarted)
- [static var errorUserExitedWorkoutSession: HKError.Code](/documentation/healthkit/hkerror/erroruserexitedworkoutsession)
- [static var errorNoData: HKError.Code](/documentation/healthkit/hkerror/errornodata)

### Type Properties

- [static var errorBackgroundWorkoutSessionNotAllowed: HKError.Code](/documentation/healthkit/hkerror/errorbackgroundworkoutsessionnotallowed)
- [static var errorDataSizeExceeded: HKError.Code](/documentation/healthkit/hkerror/errordatasizeexceeded)
- [static var errorDomain: String](/documentation/healthkit/hkerror/errordomain)
- [static var errorNotPermissibleForGuestUserMode: HKError.Code](/documentation/healthkit/hkerror/errornotpermissibleforguestusermode)
- [static var errorWorkoutActivityNotAllowed: HKError.Code](/documentation/healthkit/hkerror/errorworkoutactivitynotallowed)
- [static var unknownError: HKError.Code](/documentation/healthkit/hkerror/unknownerror)
- [let HKErrorDomain: String](/documentation/healthkit/hkerrordomain)
- [HKError.Code](/documentation/healthkit/hkerror/code)

### Errors

- [case errorHealthDataUnavailable](/documentation/healthkit/hkerror/code/errorhealthdataunavailable)
- [case errorHealthDataRestricted](/documentation/healthkit/hkerror/code/errorhealthdatarestricted)
- [case errorInvalidArgument](/documentation/healthkit/hkerror/code/errorinvalidargument)
- [case errorAuthorizationDenied](/documentation/healthkit/hkerror/code/errorauthorizationdenied)
- [case errorAuthorizationNotDetermined](/documentation/healthkit/hkerror/code/errorauthorizationnotdetermined)
- [case errorRequiredAuthorizationDenied](/documentation/healthkit/hkerror/code/errorrequiredauthorizationdenied)
- [case errorDatabaseInaccessible](/documentation/healthkit/hkerror/code/errordatabaseinaccessible)
- [case errorUserCanceled](/documentation/healthkit/hkerror/code/errorusercanceled)
- [case errorAnotherWorkoutSessionStarted](/documentation/healthkit/hkerror/code/erroranotherworkoutsessionstarted)
- [case errorUserExitedWorkoutSession](/documentation/healthkit/hkerror/code/erroruserexitedworkoutsession)
- [case errorNoData](/documentation/healthkit/hkerror/code/errornodata)

### Enumeration Cases

- [case errorBackgroundWorkoutSessionNotAllowed](/documentation/healthkit/hkerror/code/errorbackgroundworkoutsessionnotallowed)
- [case errorDataSizeExceeded](/documentation/healthkit/hkerror/code/errordatasizeexceeded)
- [case errorNotPermissibleForGuestUserMode](/documentation/healthkit/hkerror/code/errornotpermissibleforguestusermode)
- [case errorWorkoutActivityNotAllowed](/documentation/healthkit/hkerror/code/errorworkoutactivitynotallowed)
- [case unknownError](/documentation/healthkit/hkerror/code/unknownerror)

### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkerror/code/init(rawvalue:))

### Type Properties

- [static var noError: HKError.Code](/documentation/healthkit/hkerror/code/noerror)

## Reference

- [HealthKit Enumerations](/documentation/healthkit/healthkit-enumerations)

### Enumerations

- [HKAudiogramConductionType](/documentation/healthkit/hkaudiogramconductiontype)

#### Enumeration Cases

- [case air](/documentation/healthkit/hkaudiogramconductiontype/air)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkaudiogramconductiontype/init(rawvalue:))
- [HKAudiogramSensitivityTestSide](/documentation/healthkit/hkaudiogramsensitivitytestside)

#### Enumeration Cases

- [case left](/documentation/healthkit/hkaudiogramsensitivitytestside/left)
- [case right](/documentation/healthkit/hkaudiogramsensitivitytestside/right)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkaudiogramsensitivitytestside/init(rawvalue:))
- [HKCategoryValueVaginalBleeding](/documentation/healthkit/hkcategoryvaluevaginalbleeding)

#### Enumeration Cases

- [case heavy](/documentation/healthkit/hkcategoryvaluevaginalbleeding/heavy)
- [case light](/documentation/healthkit/hkcategoryvaluevaginalbleeding/light)
- [case medium](/documentation/healthkit/hkcategoryvaluevaginalbleeding/medium)
- [case none](/documentation/healthkit/hkcategoryvaluevaginalbleeding/none)
- [case unspecified](/documentation/healthkit/hkcategoryvaluevaginalbleeding/unspecified)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkcategoryvaluevaginalbleeding/init(rawvalue:))
- [HKGAD7Assessment.Answer](/documentation/healthkit/hkgad7assessment/answer)

#### Enumeration Cases

- [case moreThanHalfTheDays](/documentation/healthkit/hkgad7assessment/answer/morethanhalfthedays)
- [case nearlyEveryDay](/documentation/healthkit/hkgad7assessment/answer/nearlyeveryday)
- [case notAtAll](/documentation/healthkit/hkgad7assessment/answer/notatall)
- [case severalDays](/documentation/healthkit/hkgad7assessment/answer/severaldays)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkgad7assessment/answer/init(rawvalue:))
- [HKGAD7Assessment.Risk](/documentation/healthkit/hkgad7assessment/risk-swift.enum)

#### Enumeration Cases

- [case mild](/documentation/healthkit/hkgad7assessment/risk-swift.enum/mild)
- [case moderate](/documentation/healthkit/hkgad7assessment/risk-swift.enum/moderate)
- [case noneToMinimal](/documentation/healthkit/hkgad7assessment/risk-swift.enum/nonetominimal)
- [case severe](/documentation/healthkit/hkgad7assessment/risk-swift.enum/severe)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkgad7assessment/risk-swift.enum/init(rawvalue:))
- [HKPHQ9Assessment.Answer](/documentation/healthkit/hkphq9assessment/answer)

#### Enumeration Cases

- [case moreThanHalfTheDays](/documentation/healthkit/hkphq9assessment/answer/morethanhalfthedays)
- [case nearlyEveryDay](/documentation/healthkit/hkphq9assessment/answer/nearlyeveryday)
- [case notAtAll](/documentation/healthkit/hkphq9assessment/answer/notatall)
- [case preferNotToAnswer](/documentation/healthkit/hkphq9assessment/answer/prefernottoanswer)
- [case severalDays](/documentation/healthkit/hkphq9assessment/answer/severaldays)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkphq9assessment/answer/init(rawvalue:))
- [HKPHQ9Assessment.Risk](/documentation/healthkit/hkphq9assessment/risk-swift.enum)

#### Enumeration Cases

- [case mild](/documentation/healthkit/hkphq9assessment/risk-swift.enum/mild)
- [case moderate](/documentation/healthkit/hkphq9assessment/risk-swift.enum/moderate)
- [case moderatelySevere](/documentation/healthkit/hkphq9assessment/risk-swift.enum/moderatelysevere)
- [case noneToMinimal](/documentation/healthkit/hkphq9assessment/risk-swift.enum/nonetominimal)
- [case severe](/documentation/healthkit/hkphq9assessment/risk-swift.enum/severe)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkphq9assessment/risk-swift.enum/init(rawvalue:))
- [HKStateOfMind.Association](/documentation/healthkit/hkstateofmind/association)

#### Enumeration Cases

- [case community](/documentation/healthkit/hkstateofmind/association/community)
- [case currentEvents](/documentation/healthkit/hkstateofmind/association/currentevents)
- [case dating](/documentation/healthkit/hkstateofmind/association/dating)
- [case education](/documentation/healthkit/hkstateofmind/association/education)
- [case family](/documentation/healthkit/hkstateofmind/association/family)
- [case fitness](/documentation/healthkit/hkstateofmind/association/fitness)
- [case friends](/documentation/healthkit/hkstateofmind/association/friends)
- [case health](/documentation/healthkit/hkstateofmind/association/health)
- [case hobbies](/documentation/healthkit/hkstateofmind/association/hobbies)
- [case identity](/documentation/healthkit/hkstateofmind/association/identity)
- [case money](/documentation/healthkit/hkstateofmind/association/money)
- [case partner](/documentation/healthkit/hkstateofmind/association/partner)
- [case selfCare](/documentation/healthkit/hkstateofmind/association/selfcare)
- [case spirituality](/documentation/healthkit/hkstateofmind/association/spirituality)
- [case tasks](/documentation/healthkit/hkstateofmind/association/tasks)
- [case travel](/documentation/healthkit/hkstateofmind/association/travel)
- [case weather](/documentation/healthkit/hkstateofmind/association/weather)
- [case work](/documentation/healthkit/hkstateofmind/association/work)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkstateofmind/association/init(rawvalue:))
- [HKStateOfMind.Kind](/documentation/healthkit/hkstateofmind/kind-swift.enum)

#### Enumeration Cases

- [case dailyMood](/documentation/healthkit/hkstateofmind/kind-swift.enum/dailymood)
- [case momentaryEmotion](/documentation/healthkit/hkstateofmind/kind-swift.enum/momentaryemotion)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkstateofmind/kind-swift.enum/init(rawvalue:))
- [HKStateOfMind.Label](/documentation/healthkit/hkstateofmind/label)

#### Enumeration Cases

- [case amazed](/documentation/healthkit/hkstateofmind/label/amazed)
- [case amused](/documentation/healthkit/hkstateofmind/label/amused)
- [case angry](/documentation/healthkit/hkstateofmind/label/angry)
- [case annoyed](/documentation/healthkit/hkstateofmind/label/annoyed)
- [case anxious](/documentation/healthkit/hkstateofmind/label/anxious)
- [case ashamed](/documentation/healthkit/hkstateofmind/label/ashamed)
- [case brave](/documentation/healthkit/hkstateofmind/label/brave)
- [case calm](/documentation/healthkit/hkstateofmind/label/calm)
- [case confident](/documentation/healthkit/hkstateofmind/label/confident)
- [case content](/documentation/healthkit/hkstateofmind/label/content)
- [case disappointed](/documentation/healthkit/hkstateofmind/label/disappointed)
- [case discouraged](/documentation/healthkit/hkstateofmind/label/discouraged)
- [case disgusted](/documentation/healthkit/hkstateofmind/label/disgusted)
- [case drained](/documentation/healthkit/hkstateofmind/label/drained)
- [case embarrassed](/documentation/healthkit/hkstateofmind/label/embarrassed)
- [case excited](/documentation/healthkit/hkstateofmind/label/excited)
- [case frustrated](/documentation/healthkit/hkstateofmind/label/frustrated)
- [case grateful](/documentation/healthkit/hkstateofmind/label/grateful)
- [case guilty](/documentation/healthkit/hkstateofmind/label/guilty)
- [case happy](/documentation/healthkit/hkstateofmind/label/happy)
- [case hopeful](/documentation/healthkit/hkstateofmind/label/hopeful)
- [case hopeless](/documentation/healthkit/hkstateofmind/label/hopeless)
- [case indifferent](/documentation/healthkit/hkstateofmind/label/indifferent)
- [case irritated](/documentation/healthkit/hkstateofmind/label/irritated)
- [case jealous](/documentation/healthkit/hkstateofmind/label/jealous)
- [case joyful](/documentation/healthkit/hkstateofmind/label/joyful)
- [case lonely](/documentation/healthkit/hkstateofmind/label/lonely)
- [case overwhelmed](/documentation/healthkit/hkstateofmind/label/overwhelmed)
- [case passionate](/documentation/healthkit/hkstateofmind/label/passionate)
- [case peaceful](/documentation/healthkit/hkstateofmind/label/peaceful)
- [case proud](/documentation/healthkit/hkstateofmind/label/proud)
- [case relieved](/documentation/healthkit/hkstateofmind/label/relieved)
- [case sad](/documentation/healthkit/hkstateofmind/label/sad)
- [case satisfied](/documentation/healthkit/hkstateofmind/label/satisfied)
- [case scared](/documentation/healthkit/hkstateofmind/label/scared)
- [case stressed](/documentation/healthkit/hkstateofmind/label/stressed)
- [case surprised](/documentation/healthkit/hkstateofmind/label/surprised)
- [case worried](/documentation/healthkit/hkstateofmind/label/worried)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkstateofmind/label/init(rawvalue:))
- [HKStateOfMind.ValenceClassification](/documentation/healthkit/hkstateofmind/valenceclassification-swift.enum)

#### Enumeration Cases

- [case neutral](/documentation/healthkit/hkstateofmind/valenceclassification-swift.enum/neutral)
- [case pleasant](/documentation/healthkit/hkstateofmind/valenceclassification-swift.enum/pleasant)
- [case slightlyPleasant](/documentation/healthkit/hkstateofmind/valenceclassification-swift.enum/slightlypleasant)
- [case slightlyUnpleasant](/documentation/healthkit/hkstateofmind/valenceclassification-swift.enum/slightlyunpleasant)
- [case unpleasant](/documentation/healthkit/hkstateofmind/valenceclassification-swift.enum/unpleasant)
- [case veryPleasant](/documentation/healthkit/hkstateofmind/valenceclassification-swift.enum/verypleasant)
- [case veryUnpleasant](/documentation/healthkit/hkstateofmind/valenceclassification-swift.enum/veryunpleasant)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkstateofmind/valenceclassification-swift.enum/init(rawvalue:))
- [init?(valence: Double)](/documentation/healthkit/hkstateofmind/valenceclassification-swift.enum/init(valence:))
- [HKWorkoutEffortRelationshipQueryOptions](/documentation/healthkit/hkworkouteffortrelationshipqueryoptions)

#### Enumeration Cases

- [case `default`](/documentation/healthkit/hkworkouteffortrelationshipqueryoptions/default)
- [case mostRelevant](/documentation/healthkit/hkworkouteffortrelationshipqueryoptions/mostrelevant)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkworkouteffortrelationshipqueryoptions/init(rawvalue:))
- [HKBiologicalSex](/documentation/healthkit/hkbiologicalsex)

#### Constants

- [case notSet](/documentation/healthkit/hkbiologicalsex/notset)
- [case female](/documentation/healthkit/hkbiologicalsex/female)
- [case male](/documentation/healthkit/hkbiologicalsex/male)
- [case other](/documentation/healthkit/hkbiologicalsex/other)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkbiologicalsex/init(rawvalue:))
- [HKBloodType](/documentation/healthkit/hkbloodtype)

#### Constants

- [case notSet](/documentation/healthkit/hkbloodtype/notset)
- [case aPositive](/documentation/healthkit/hkbloodtype/apositive)
- [case aNegative](/documentation/healthkit/hkbloodtype/anegative)
- [case bPositive](/documentation/healthkit/hkbloodtype/bpositive)
- [case bNegative](/documentation/healthkit/hkbloodtype/bnegative)
- [case abPositive](/documentation/healthkit/hkbloodtype/abpositive)
- [case abNegative](/documentation/healthkit/hkbloodtype/abnegative)
- [case oPositive](/documentation/healthkit/hkbloodtype/opositive)
- [case oNegative](/documentation/healthkit/hkbloodtype/onegative)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkbloodtype/init(rawvalue:))
- [HKFitzpatrickSkinType](/documentation/healthkit/hkfitzpatrickskintype)

#### Constants

- [case notSet](/documentation/healthkit/hkfitzpatrickskintype/notset)
- [case I](/documentation/healthkit/hkfitzpatrickskintype/i)
- [case II](/documentation/healthkit/hkfitzpatrickskintype/ii)
- [case III](/documentation/healthkit/hkfitzpatrickskintype/iii)
- [case IV](/documentation/healthkit/hkfitzpatrickskintype/iv)
- [case V](/documentation/healthkit/hkfitzpatrickskintype/v)
- [case VI](/documentation/healthkit/hkfitzpatrickskintype/vi)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkfitzpatrickskintype/init(rawvalue:))
- [HKWheelchairUse](/documentation/healthkit/hkwheelchairuse)

#### Constants

- [case notSet](/documentation/healthkit/hkwheelchairuse/notset)
- [case no](/documentation/healthkit/hkwheelchairuse/no)
- [case yes](/documentation/healthkit/hkwheelchairuse/yes)

#### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkwheelchairuse/init(rawvalue:))
- [HealthKit Classes](/documentation/healthkit/healthkit-classes)

### Classes

- [HKAudiogramSensitivityPointClampingRange](/documentation/healthkit/hkaudiogramsensitivitypointclampingrange)

#### Initializers

- [convenience init(lowerBound: NSNumber?, upperBound: NSNumber?) throws](/documentation/healthkit/hkaudiogramsensitivitypointclampingrange/init(lowerbound:upperbound:))

#### Instance Properties

- [var lowerBound: HKQuantity?](/documentation/healthkit/hkaudiogramsensitivitypointclampingrange/lowerbound)
- [var upperBound: HKQuantity?](/documentation/healthkit/hkaudiogramsensitivitypointclampingrange/upperbound)
- [HKAudiogramSensitivityTest](/documentation/healthkit/hkaudiogramsensitivitytest)

#### Initializers

- [init(sensitivity: HKQuantity, type: HKAudiogramConductionType, masked: Bool, side: HKAudiogramSensitivityTestSide, clampingRange: HKAudiogramSensitivityPointClampingRange?) throws](/documentation/healthkit/hkaudiogramsensitivitytest/init(sensitivity:type:masked:side:clampingrange:))

#### Instance Properties

- [var clampingRange: HKAudiogramSensitivityPointClampingRange?](/documentation/healthkit/hkaudiogramsensitivitytest/clampingrange)
- [var masked: Bool](/documentation/healthkit/hkaudiogramsensitivitytest/masked)
- [var sensitivity: HKQuantity](/documentation/healthkit/hkaudiogramsensitivitytest/sensitivity)
- [var side: HKAudiogramSensitivityTestSide](/documentation/healthkit/hkaudiogramsensitivitytest/side)
- [var type: HKAudiogramConductionType](/documentation/healthkit/hkaudiogramsensitivitytest/type)
- [HKBiologicalSexObject](/documentation/healthkit/hkbiologicalsexobject)

#### Getting Biological Sex Data

- [var biologicalSex: HKBiologicalSex](/documentation/healthkit/hkbiologicalsexobject/biologicalsex)

##### Valid Biological Sex Values

- [HKBiologicalSex](/documentation/healthkit/hkbiologicalsex)

###### Constants

- [case notSet](/documentation/healthkit/hkbiologicalsex/notset)
- [case female](/documentation/healthkit/hkbiologicalsex/female)
- [case male](/documentation/healthkit/hkbiologicalsex/male)
- [case other](/documentation/healthkit/hkbiologicalsex/other)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkbiologicalsex/init(rawvalue:))
- [HKBloodTypeObject](/documentation/healthkit/hkbloodtypeobject)

#### Getting Blood Type Data

- [var bloodType: HKBloodType](/documentation/healthkit/hkbloodtypeobject/bloodtype)

##### Valid Blood Types

- [HKBloodType](/documentation/healthkit/hkbloodtype)

###### Constants

- [case notSet](/documentation/healthkit/hkbloodtype/notset)
- [case aPositive](/documentation/healthkit/hkbloodtype/apositive)
- [case aNegative](/documentation/healthkit/hkbloodtype/anegative)
- [case bPositive](/documentation/healthkit/hkbloodtype/bpositive)
- [case bNegative](/documentation/healthkit/hkbloodtype/bnegative)
- [case abPositive](/documentation/healthkit/hkbloodtype/abpositive)
- [case abNegative](/documentation/healthkit/hkbloodtype/abnegative)
- [case oPositive](/documentation/healthkit/hkbloodtype/opositive)
- [case oNegative](/documentation/healthkit/hkbloodtype/onegative)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkbloodtype/init(rawvalue:))
- [HKFitzpatrickSkinTypeObject](/documentation/healthkit/hkfitzpatrickskintypeobject)

#### Accessing Skin Type Data

- [var skinType: HKFitzpatrickSkinType](/documentation/healthkit/hkfitzpatrickskintypeobject/skintype)

##### Valid Skin Types

- [HKFitzpatrickSkinType](/documentation/healthkit/hkfitzpatrickskintype)

###### Constants

- [case notSet](/documentation/healthkit/hkfitzpatrickskintype/notset)
- [case I](/documentation/healthkit/hkfitzpatrickskintype/i)
- [case II](/documentation/healthkit/hkfitzpatrickskintype/ii)
- [case III](/documentation/healthkit/hkfitzpatrickskintype/iii)
- [case IV](/documentation/healthkit/hkfitzpatrickskintype/iv)
- [case V](/documentation/healthkit/hkfitzpatrickskintype/v)
- [case VI](/documentation/healthkit/hkfitzpatrickskintype/vi)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkfitzpatrickskintype/init(rawvalue:))
- [HKGAD7Assessment](/documentation/healthkit/hkgad7assessment)

#### Initializers

- [convenience init(date: Date, answers: [HKGAD7Assessment.Answer], metadata: [String : Any]?)](/documentation/healthkit/hkgad7assessment/init(date:answers:metadata:))

#### Instance Properties

- [var answers: [HKGAD7Assessment.Answer]](/documentation/healthkit/hkgad7assessment/answers-1zj1)
- [var risk: HKGAD7Assessment.Risk](/documentation/healthkit/hkgad7assessment/risk-swift.property)
- [HKPHQ9Assessment](/documentation/healthkit/hkphq9assessment)

#### Initializers

- [convenience init(date: Date, answers: [HKPHQ9Assessment.Answer], metadata: [String : Any]?)](/documentation/healthkit/hkphq9assessment/init(date:answers:metadata:))

#### Instance Properties

- [var answers: [HKPHQ9Assessment.Answer]](/documentation/healthkit/hkphq9assessment/answers-4y95e)
- [var risk: HKPHQ9Assessment.Risk](/documentation/healthkit/hkphq9assessment/risk-swift.property)
- [HKScoredAssessment](/documentation/healthkit/hkscoredassessment)

#### Instance Properties

- [var score: Int](/documentation/healthkit/hkscoredassessment/score)
- [HKScoredAssessmentType](/documentation/healthkit/hkscoredassessmenttype)

#### Initializers

- [convenience init(HKScoredAssessmentTypeIdentifier)](/documentation/healthkit/hkscoredassessmenttype/init(_:))
- [HKStateOfMind](/documentation/healthkit/hkstateofmind)

#### Initializers

- [convenience init(date: Date, kind: HKStateOfMind.Kind, valence: Double, labels: [HKStateOfMind.Label], associations: [HKStateOfMind.Association], metadata: [String : Any]?)](/documentation/healthkit/hkstateofmind/init(date:kind:valence:labels:associations:metadata:))

#### Instance Properties

- [var associations: [HKStateOfMind.Association]](/documentation/healthkit/hkstateofmind/associations-7gwps)
- [var kind: HKStateOfMind.Kind](/documentation/healthkit/hkstateofmind/kind-swift.property)
- [var labels: [HKStateOfMind.Label]](/documentation/healthkit/hkstateofmind/labels-994n4)
- [var valence: Double](/documentation/healthkit/hkstateofmind/valence)
- [var valenceClassification: HKStateOfMind.ValenceClassification](/documentation/healthkit/hkstateofmind/valenceclassification-swift.property)
- [HKStateOfMindType](/documentation/healthkit/hkstateofmindtype)
- [HKWheelchairUseObject](/documentation/healthkit/hkwheelchairuseobject)

#### Accessing Wheelchair Use Data

- [var wheelchairUse: HKWheelchairUse](/documentation/healthkit/hkwheelchairuseobject/wheelchairuse)

##### Valid Wheelchair Use Values

- [HKWheelchairUse](/documentation/healthkit/hkwheelchairuse)

###### Constants

- [case notSet](/documentation/healthkit/hkwheelchairuse/notset)
- [case no](/documentation/healthkit/hkwheelchairuse/no)
- [case yes](/documentation/healthkit/hkwheelchairuse/yes)

###### Initializers

- [init?(rawValue: Int)](/documentation/healthkit/hkwheelchairuse/init(rawvalue:))
- [HealthKit Constants](/documentation/healthkit/healthkit-constants)

### Constants

- [let HKDataTypeIdentifierStateOfMind: String](/documentation/healthkit/hkdatatypeidentifierstateofmind)
- [let HKMetadataKeyAppleFitnessPlusCatalogIdentifier: String](/documentation/healthkit/hkmetadatakeyapplefitnesspluscatalogidentifier)
- [let HKMetadataKeyMaximumLightIntensity: String](/documentation/healthkit/hkmetadatakeymaximumlightintensity)
- [let HKPredicateKeyPathWorkoutEffortRelationship: String](/documentation/healthkit/hkpredicatekeypathworkouteffortrelationship)
- [HealthKit Data Types](/documentation/healthkit/healthkit-data-types)

### Data Types

- [HKScoredAssessmentTypeIdentifier](/documentation/healthkit/hkscoredassessmenttypeidentifier)

#### Initializers

- [init(rawValue: String)](/documentation/healthkit/hkscoredassessmenttypeidentifier/init(rawvalue:))
- [HKWorkoutEffortRelationshipQueryDescriptor](/documentation/healthkit/hkworkouteffortrelationshipquerydescriptor)

#### Structures

- [HKWorkoutEffortRelationshipQueryDescriptor.Result](/documentation/healthkit/hkworkouteffortrelationshipquerydescriptor/result)

##### Instance Properties

- [let newAnchor: HKQueryAnchor](/documentation/healthkit/hkworkouteffortrelationshipquerydescriptor/result/newanchor)
- [let relationships: [HKWorkoutEffortRelationship]](/documentation/healthkit/hkworkouteffortrelationshipquerydescriptor/result/relationships)
- [HKWorkoutEffortRelationshipQueryDescriptor.Results](/documentation/healthkit/hkworkouteffortrelationshipquerydescriptor/results)

##### Structures

- [HKWorkoutEffortRelationshipQueryDescriptor.Results.Iterator](/documentation/healthkit/hkworkouteffortrelationshipquerydescriptor/results/iterator)

#### Initializers

- [init(predicate: NSPredicate?, anchor: HKQueryAnchor?, option: HKWorkoutEffortRelationshipQueryOptions)](/documentation/healthkit/hkworkouteffortrelationshipquerydescriptor/init(predicate:anchor:option:))

#### Instance Properties

- [var anchor: HKQueryAnchor?](/documentation/healthkit/hkworkouteffortrelationshipquerydescriptor/anchor)
- [var option: HKWorkoutEffortRelationshipQueryOptions](/documentation/healthkit/hkworkouteffortrelationshipquerydescriptor/option)
- [var predicate: NSPredicate?](/documentation/healthkit/hkworkouteffortrelationshipquerydescriptor/predicate)

#### Default Implementations

- [HKAsyncQuery Implementations](/documentation/healthkit/hkworkouteffortrelationshipquerydescriptor/hkasyncquery-implementations)

##### Instance Methods

- [func result(for: HKHealthStore) async throws -> HKWorkoutEffortRelationshipQueryDescriptor.Result](/documentation/healthkit/hkworkouteffortrelationshipquerydescriptor/result(for:))
- [HealthKit Functions](/documentation/healthkit/healthkit-functions)
- [Macros](/documentation/healthkit/healthkit-macros)

### Macros

- [var HKAnchoredObjectQueryNoAnchor: Int32](/documentation/healthkit/hkanchoredobjectquerynoanchor)
- [HealthKit Variables](/documentation/healthkit/healthkit-variables)

### Variables

- [static let bleedingAfterPregnancy: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/bleedingafterpregnancy)
- [static let bleedingDuringPregnancy: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/bleedingduringpregnancy)
- [static let sleepApneaEvent: HKCategoryTypeIdentifier](/documentation/healthkit/hkcategorytypeidentifier/sleepapneaevent)
- [let HKDevicePropertyKeyFirmwareVersion: String](/documentation/healthkit/hkdevicepropertykeyfirmwareversion)
- [let HKDevicePropertyKeyHardwareVersion: String](/documentation/healthkit/hkdevicepropertykeyhardwareversion)
- [let HKDevicePropertyKeyLocalIdentifier: String](/documentation/healthkit/hkdevicepropertykeylocalidentifier)
- [let HKDevicePropertyKeyManufacturer: String](/documentation/healthkit/hkdevicepropertykeymanufacturer)
- [let HKDevicePropertyKeyModel: String](/documentation/healthkit/hkdevicepropertykeymodel)
- [let HKDevicePropertyKeyName: String](/documentation/healthkit/hkdevicepropertykeyname)
- [let HKDevicePropertyKeySoftwareVersion: String](/documentation/healthkit/hkdevicepropertykeysoftwareversion)
- [let HKDevicePropertyKeyUDIDeviceIdentifier: String](/documentation/healthkit/hkdevicepropertykeyudideviceidentifier)
- [let HKPredicateKeyPathCount: String](/documentation/healthkit/hkpredicatekeypathcount)
- [static let GAD7: HKScoredAssessmentTypeIdentifier](/documentation/healthkit/hkscoredassessmenttypeidentifier/gad7)
- [static let PHQ9: HKScoredAssessmentTypeIdentifier](/documentation/healthkit/hkscoredassessmenttypeidentifier/phq9)
- [let HKSourceRevisionAnyOperatingSystem: OperatingSystemVersion](/documentation/healthkit/hksourcerevisionanyoperatingsystem)
- [let HKSourceRevisionAnyProductType: String](/documentation/healthkit/hksourcerevisionanyproducttype)
- [let HKSourceRevisionAnyVersion: String](/documentation/healthkit/hksourcerevisionanyversion)
- [let HKDataTypeIdentifierUserAnnotatedMedicationConcept: String](/documentation/healthkit/hkdatatypeidentifieruserannotatedmedicationconcept)
- [let HKMedicationDoseEventTypeIdentifierMedicationDoseEvent: String](/documentation/healthkit/hkmedicationdoseeventtypeidentifiermedicationdoseevent)
- [let HKPredicateKeyPathLogOrigin: String](/documentation/healthkit/hkpredicatekeypathlogorigin)
- [let HKPredicateKeyPathMedicationConceptIdentifier: String](/documentation/healthkit/hkpredicatekeypathmedicationconceptidentifier)
- [let HKPredicateKeyPathScheduledDate: String](/documentation/healthkit/hkpredicatekeypathscheduleddate)
- [let HKPredicateKeyPathStatus: String](/documentation/healthkit/hkpredicatekeypathstatus)
- [let HKUserAnnotatedMedicationPredicateKeyPathHasSchedule: String](/documentation/healthkit/hkuserannotatedmedicationpredicatekeypathhasschedule)
- [let HKUserAnnotatedMedicationPredicateKeyPathIsArchived: String](/documentation/healthkit/hkuserannotatedmedicationpredicatekeypathisarchived)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
