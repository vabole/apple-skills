---
title: HKQuantityTypeIdentifier
description: The identifiers that create quantity type objects.
source: https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier
timestamp: 2026-01-19T10:21:33.419Z
---

**Navigation:** [Healthkit](/documentation/healthkit)

**Structure**

# HKQuantityTypeIdentifier

**Available on:** iOS undefined+, iPadOS undefined+, Mac Catalyst undefined+, macOS undefined+, visionOS undefined+, watchOS undefined+

> The identifiers that create quantity type objects.

```swift
struct HKQuantityTypeIdentifier
```

## Overview

To create an [HKQuantity Type](/documentation/healthkit/hkquantitytype) instance, pass an [HKQuantity Type Identifier](/documentation/healthkit/hkquantitytypeidentifier) value to the [quantityType(forIdentifier:)](/documentation/healthkit/hkobjecttype/quantitytype(foridentifier:)) method.

## Conforms To

- [Equatable](/documentation/Swift/Equatable)
- [Hashable](/documentation/Swift/Hashable)
- [RawRepresentable](/documentation/Swift/RawRepresentable)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Activity

- [stepCount](/documentation/healthkit/hkquantitytypeidentifier/stepcount) A quantity sample type that measures the number of steps the user has taken.
- [distanceWalkingRunning](/documentation/healthkit/hkquantitytypeidentifier/distancewalkingrunning) A quantity sample type that measures the distance the user has moved by walking or running.
- [runningGroundContactTime](/documentation/healthkit/hkquantitytypeidentifier/runninggroundcontacttime) A quantity sample type that measures the amount of time the runner’s foot is in contact with the ground while running.
- [runningPower](/documentation/healthkit/hkquantitytypeidentifier/runningpower) A quantity sample type that measures the rate of work required for the runner to maintain their speed.
- [runningSpeed](/documentation/healthkit/hkquantitytypeidentifier/runningspeed) A quantity sample type that measures the runner’s speed.
- [runningStrideLength](/documentation/healthkit/hkquantitytypeidentifier/runningstridelength) A quantity sample type that measures the distance covered by a single step while running.
- [runningVerticalOscillation](/documentation/healthkit/hkquantitytypeidentifier/runningverticaloscillation) A quantity sample type measuring pelvis vertical range of motion during a single running stride.
- [distanceCycling](/documentation/healthkit/hkquantitytypeidentifier/distancecycling) A quantity sample type that measures the distance the user has moved by cycling.
- [pushCount](/documentation/healthkit/hkquantitytypeidentifier/pushcount) A quantity sample type that measures the number of pushes that the user has performed while using a wheelchair.
- [distanceWheelchair](/documentation/healthkit/hkquantitytypeidentifier/distancewheelchair) A quantity sample type that measures the distance the user has moved using a wheelchair.
- [swimmingStrokeCount](/documentation/healthkit/hkquantitytypeidentifier/swimmingstrokecount) A quantity sample type that measures the number of strokes performed while swimming.
- [distanceSwimming](/documentation/healthkit/hkquantitytypeidentifier/distanceswimming) A quantity sample type that measures the distance the user has moved while swimming.
- [distanceDownhillSnowSports](/documentation/healthkit/hkquantitytypeidentifier/distancedownhillsnowsports) A quantity sample type that measures the distance the user has traveled while skiing or snowboarding.
- [basalEnergyBurned](/documentation/healthkit/hkquantitytypeidentifier/basalenergyburned) A quantity sample type that measures the resting energy burned by the user.
- [activeEnergyBurned](/documentation/healthkit/hkquantitytypeidentifier/activeenergyburned) A quantity sample type that measures the amount of active energy the user has burned.
- [flightsClimbed](/documentation/healthkit/hkquantitytypeidentifier/flightsclimbed) A quantity sample type that measures the number flights of stairs that the user has climbed.
- [nikeFuel](/documentation/healthkit/hkquantitytypeidentifier/nikefuel) A quantity sample type that measures the number of NikeFuel points the user has earned.
- [appleExerciseTime](/documentation/healthkit/hkquantitytypeidentifier/appleexercisetime) A quantity sample type that measures the amount of time the user spent exercising.
- [appleMoveTime](/documentation/healthkit/hkquantitytypeidentifier/applemovetime) A quantity sample type that measures the amount of time the user has spent performing activities that involve full-body movements during the specified day.
- [appleStandTime](/documentation/healthkit/hkquantitytypeidentifier/applestandtime) A quantity sample type that measures the amount of time the user has spent standing.
- [vo2Max](/documentation/healthkit/hkquantitytypeidentifier/vo2max) A quantity sample that measures the maximal oxygen consumption during exercise.
- [crossCountrySkiingSpeed](/documentation/healthkit/hkquantitytypeidentifier/crosscountryskiingspeed) A quantity sample type that measures how fast you are traveling while cross country skiing.
- [cyclingCadence](/documentation/healthkit/hkquantitytypeidentifier/cyclingcadence) A quantity sample type that represents the rate at which the user is pedaling.
- [cyclingFunctionalThresholdPower](/documentation/healthkit/hkquantitytypeidentifier/cyclingfunctionalthresholdpower) A quantity sample type that measures the estimated maximum average power sustained while riding a bike for 60 minutes.
- [cyclingPower](/documentation/healthkit/hkquantitytypeidentifier/cyclingpower) A quantity sample type that measures the estimated power being used while riding a bike.
- [cyclingSpeed](/documentation/healthkit/hkquantitytypeidentifier/cyclingspeed) A quantity sample type that measures how fast you are traveling while riding a bike.
- [distanceCrossCountrySkiing](/documentation/healthkit/hkquantitytypeidentifier/distancecrosscountryskiing) A quantity sample type that measures the distance the user has moved by cross country skiing.
- [distancePaddleSports](/documentation/healthkit/hkquantitytypeidentifier/distancepaddlesports) A quantity sample type that measures the distance the user has moved by paddling sports.
- [distanceRowing](/documentation/healthkit/hkquantitytypeidentifier/distancerowing) A quantity sample type that measures the distance the user has moved by rowing.
- [distanceSkatingSports](/documentation/healthkit/hkquantitytypeidentifier/distanceskatingsports) A quantity sample type that measures the distance the user has moved by skating.
- [estimatedWorkoutEffortScore](/documentation/healthkit/hkquantitytypeidentifier/estimatedworkouteffortscore)
- [paddleSportsSpeed](/documentation/healthkit/hkquantitytypeidentifier/paddlesportsspeed) A quantity sample type that measures the distance the user has moved by paddling sports.
- [physicalEffort](/documentation/healthkit/hkquantitytypeidentifier/physicaleffort) A quantity sample type that measures the estimated amount of energy being used to perform a task excluding other factors such as temperature, altitude, or heart rate.
- [rowingSpeed](/documentation/healthkit/hkquantitytypeidentifier/rowingspeed) A quantity sample type that measures how fast the rower is moving.
- [workoutEffortScore](/documentation/healthkit/hkquantitytypeidentifier/workouteffortscore)

## Body measurements

- [height](/documentation/healthkit/hkquantitytypeidentifier/height) A quantity sample type that measures the user’s height.
- [bodyMass](/documentation/healthkit/hkquantitytypeidentifier/bodymass) A quantity sample type that measures the user’s weight.
- [bodyMassIndex](/documentation/healthkit/hkquantitytypeidentifier/bodymassindex) A quantity sample type that measures the user’s body mass index.
- [leanBodyMass](/documentation/healthkit/hkquantitytypeidentifier/leanbodymass) A quantity sample type that measures the user’s lean body mass.
- [bodyFatPercentage](/documentation/healthkit/hkquantitytypeidentifier/bodyfatpercentage) A quantity sample type that measures the user’s body fat percentage.
- [waistCircumference](/documentation/healthkit/hkquantitytypeidentifier/waistcircumference) A quantity sample type that measures the user’s waist circumference.
- [appleSleepingWristTemperature](/documentation/healthkit/hkquantitytypeidentifier/applesleepingwristtemperature) A quantity sample type that records the wrist temperature during sleep.

## Reproductive health

- [basalBodyTemperature](/documentation/healthkit/hkquantitytypeidentifier/basalbodytemperature) A quantity sample type that records the user’s basal body temperature.

## Hearing

- [environmentalAudioExposure](/documentation/healthkit/hkquantitytypeidentifier/environmentalaudioexposure) A quantity sample type that measures audio exposure to sounds in the environment.
- [environmentalSoundReduction](/documentation/healthkit/hkquantitytypeidentifier/environmentalsoundreduction) A quantity sample type that measures the difference in sound intensity when wearing headphones that lower environmental sound levels.
- [headphoneAudioExposure](/documentation/healthkit/hkquantitytypeidentifier/headphoneaudioexposure) A quantity sample type that measures audio exposure from headphones.

## Vital signs

- [heartRate](/documentation/healthkit/hkquantitytypeidentifier/heartrate) A quantity sample type that measures the user’s heart rate.
- [restingHeartRate](/documentation/healthkit/hkquantitytypeidentifier/restingheartrate) A quantity sample type that measures the user’s resting heart rate.
- [walkingHeartRateAverage](/documentation/healthkit/hkquantitytypeidentifier/walkingheartrateaverage) A quantity sample type that measures the user’s heart rate while walking.
- [heartRateVariabilitySDNN](/documentation/healthkit/hkquantitytypeidentifier/heartratevariabilitysdnn) A quantity sample type that measures the standard deviation of heartbeat intervals.
- [heartRateRecoveryOneMinute](/documentation/healthkit/hkquantitytypeidentifier/heartraterecoveryoneminute) A quantity sample that records the reduction in heart rate from the peak exercise rate to the rate one minute after exercising ended.
- [atrialFibrillationBurden](/documentation/healthkit/hkquantitytypeidentifier/atrialfibrillationburden) A quantity type that measures an estimate of the percentage of time a person’s heart shows signs of atrial fibrillation (AFib) while wearing Apple Watch.
- [oxygenSaturation](/documentation/healthkit/hkquantitytypeidentifier/oxygensaturation) A quantity sample type that measures the user’s oxygen saturation.
- [bodyTemperature](/documentation/healthkit/hkquantitytypeidentifier/bodytemperature) A quantity sample type that measures the user’s body temperature.
- [bloodPressureDiastolic](/documentation/healthkit/hkquantitytypeidentifier/bloodpressurediastolic) A quantity sample type that measures the user’s diastolic blood pressure.
- [bloodPressureSystolic](/documentation/healthkit/hkquantitytypeidentifier/bloodpressuresystolic) A quantity sample type that measures the user’s systolic blood pressure.
- [respiratoryRate](/documentation/healthkit/hkquantitytypeidentifier/respiratoryrate) A quantity sample type that measures the user’s respiratory rate.

## Lab and test results

- [bloodGlucose](/documentation/healthkit/hkquantitytypeidentifier/bloodglucose) A quantity sample type that measures the user’s blood glucose level.
- [electrodermalActivity](/documentation/healthkit/hkquantitytypeidentifier/electrodermalactivity) A quantity sample type that measures electrodermal activity.
- [forcedExpiratoryVolume1](/documentation/healthkit/hkquantitytypeidentifier/forcedexpiratoryvolume1) A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs during the first second of a forced exhalation.
- [forcedVitalCapacity](/documentation/healthkit/hkquantitytypeidentifier/forcedvitalcapacity) A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs after taking the deepest breath possible.
- [inhalerUsage](/documentation/healthkit/hkquantitytypeidentifier/inhalerusage) A quantity sample type that measures the number of puffs the user takes from their inhaler.
- [insulinDelivery](/documentation/healthkit/hkquantitytypeidentifier/insulindelivery) A quantity sample that measures the amount of insulin delivered.
- [numberOfTimesFallen](/documentation/healthkit/hkquantitytypeidentifier/numberoftimesfallen) A quantity sample type that measures the number of times the user fell.
- [peakExpiratoryFlowRate](/documentation/healthkit/hkquantitytypeidentifier/peakexpiratoryflowrate) A quantity sample type that measures the user’s maximum flow rate generated during a forceful exhalation.
- [peripheralPerfusionIndex](/documentation/healthkit/hkquantitytypeidentifier/peripheralperfusionindex) A quantity sample type that measures the user’s peripheral perfusion index.

## Mindfulness and Sleep

- [appleSleepingWristTemperature](/documentation/healthkit/hkquantitytypeidentifier/applesleepingwristtemperature) A quantity sample type that records the wrist temperature during sleep.

## Nutrition

- [dietaryBiotin](/documentation/healthkit/hkquantitytypeidentifier/dietarybiotin) A quantity sample type that measures the amount of biotin (vitamin B7) consumed.
- [dietaryCaffeine](/documentation/healthkit/hkquantitytypeidentifier/dietarycaffeine) A quantity sample type that measures the amount of caffeine consumed.
- [dietaryCalcium](/documentation/healthkit/hkquantitytypeidentifier/dietarycalcium) A quantity sample type that measures the amount of calcium consumed.
- [dietaryCarbohydrates](/documentation/healthkit/hkquantitytypeidentifier/dietarycarbohydrates) A quantity sample type that measures the amount of carbohydrates consumed.
- [dietaryChloride](/documentation/healthkit/hkquantitytypeidentifier/dietarychloride) A quantity sample type that measures the amount of chloride consumed.
- [dietaryCholesterol](/documentation/healthkit/hkquantitytypeidentifier/dietarycholesterol) A quantity sample type that measures the amount of cholesterol consumed.
- [dietaryChromium](/documentation/healthkit/hkquantitytypeidentifier/dietarychromium) A quantity sample type that measures the amount of chromium consumed.
- [dietaryCopper](/documentation/healthkit/hkquantitytypeidentifier/dietarycopper) A quantity sample type that measures the amount of copper consumed.
- [dietaryEnergyConsumed](/documentation/healthkit/hkquantitytypeidentifier/dietaryenergyconsumed) A quantity sample type that measures the amount of energy consumed.
- [dietaryFatMonounsaturated](/documentation/healthkit/hkquantitytypeidentifier/dietaryfatmonounsaturated) A quantity sample type that measures the amount of monounsaturated fat consumed.
- [dietaryFatPolyunsaturated](/documentation/healthkit/hkquantitytypeidentifier/dietaryfatpolyunsaturated) A quantity sample type that measures the amount of polyunsaturated fat consumed.
- [dietaryFatSaturated](/documentation/healthkit/hkquantitytypeidentifier/dietaryfatsaturated) A quantity sample type that measures the amount of saturated fat consumed.
- [dietaryFatTotal](/documentation/healthkit/hkquantitytypeidentifier/dietaryfattotal) A quantity sample type that measures the total amount of fat consumed.
- [dietaryFiber](/documentation/healthkit/hkquantitytypeidentifier/dietaryfiber) A quantity sample type that measures the amount of fiber consumed.
- [dietaryFolate](/documentation/healthkit/hkquantitytypeidentifier/dietaryfolate) A quantity sample type that measures the amount of folate (folic acid) consumed.
- [dietaryIodine](/documentation/healthkit/hkquantitytypeidentifier/dietaryiodine) A quantity sample type that measures the amount of iodine consumed.
- [dietaryIron](/documentation/healthkit/hkquantitytypeidentifier/dietaryiron) A quantity sample type that measures the amount of iron consumed.
- [dietaryMagnesium](/documentation/healthkit/hkquantitytypeidentifier/dietarymagnesium) A quantity sample type that measures the amount of magnesium consumed.
- [dietaryManganese](/documentation/healthkit/hkquantitytypeidentifier/dietarymanganese) A quantity sample type that measures the amount of manganese consumed.
- [dietaryMolybdenum](/documentation/healthkit/hkquantitytypeidentifier/dietarymolybdenum) A quantity sample type that measures the amount of molybdenum consumed.
- [dietaryNiacin](/documentation/healthkit/hkquantitytypeidentifier/dietaryniacin) A quantity sample type that measures the amount of niacin (vitamin B3) consumed.
- [dietaryPantothenicAcid](/documentation/healthkit/hkquantitytypeidentifier/dietarypantothenicacid) A quantity sample type that measures the amount of pantothenic acid (vitamin B5) consumed.
- [dietaryPhosphorus](/documentation/healthkit/hkquantitytypeidentifier/dietaryphosphorus) A quantity sample type that measures the amount of phosphorus consumed.
- [dietaryPotassium](/documentation/healthkit/hkquantitytypeidentifier/dietarypotassium) A quantity sample type that measures the amount of potassium consumed.
- [dietaryProtein](/documentation/healthkit/hkquantitytypeidentifier/dietaryprotein) A quantity sample type that measures the amount of protein consumed.
- [dietaryRiboflavin](/documentation/healthkit/hkquantitytypeidentifier/dietaryriboflavin) A quantity sample type that measures the amount of riboflavin (vitamin B2) consumed.
- [dietarySelenium](/documentation/healthkit/hkquantitytypeidentifier/dietaryselenium) A quantity sample type that measures the amount of selenium consumed.
- [dietarySodium](/documentation/healthkit/hkquantitytypeidentifier/dietarysodium) A quantity sample type that measures the amount of sodium consumed.
- [dietarySugar](/documentation/healthkit/hkquantitytypeidentifier/dietarysugar) A quantity sample type that measures the amount of sugar consumed.
- [dietaryThiamin](/documentation/healthkit/hkquantitytypeidentifier/dietarythiamin) A quantity sample type that measures the amount of thiamin (vitamin B1) consumed.
- [dietaryVitaminA](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitamina) A quantity sample type that measures the amount of vitamin A consumed.
- [dietaryVitaminB12](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitaminb12) A quantity sample type that measures the amount of cyanocobalamin (vitamin B12) consumed.
- [dietaryVitaminB6](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitaminb6) A quantity sample type that measures the amount of pyridoxine (vitamin B6) consumed.
- [dietaryVitaminC](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitaminc) A quantity sample type that measures the amount of vitamin C consumed.
- [dietaryVitaminD](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitamind) A quantity sample type that measures the amount of vitamin D consumed.
- [dietaryVitaminE](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitamine) A quantity sample type that measures the amount of vitamin E consumed.
- [dietaryVitaminK](/documentation/healthkit/hkquantitytypeidentifier/dietaryvitamink) A quantity sample type that measures the amount of vitamin K consumed.
- [dietaryWater](/documentation/healthkit/hkquantitytypeidentifier/dietarywater) A quantity sample type that measures the amount of water consumed.
- [dietaryZinc](/documentation/healthkit/hkquantitytypeidentifier/dietaryzinc) A quantity sample type that measures the amount of zinc consumed.

## Alcohol consumption

- [bloodAlcoholContent](/documentation/healthkit/hkquantitytypeidentifier/bloodalcoholcontent) A quantity sample type that measures the user’s blood alcohol content.
- [numberOfAlcoholicBeverages](/documentation/healthkit/hkquantitytypeidentifier/numberofalcoholicbeverages) A quantity sample type that measures the number of standard alcoholic drinks that the user has consumed.

## Mobility

- [appleWalkingSteadiness](/documentation/healthkit/hkquantitytypeidentifier/applewalkingsteadiness) A quantity sample type that measures the steadiness of the user’s gait.
- [sixMinuteWalkTestDistance](/documentation/healthkit/hkquantitytypeidentifier/sixminutewalktestdistance) A quantity sample type that stores the distance a user can walk during a six-minute walk test.
- [walkingSpeed](/documentation/healthkit/hkquantitytypeidentifier/walkingspeed) A quantity sample type that measures the user’s average speed when walking steadily over flat ground.
- [walkingStepLength](/documentation/healthkit/hkquantitytypeidentifier/walkingsteplength) A quantity sample type that measures the average length of the user’s step when walking steadily over flat ground.
- [walkingAsymmetryPercentage](/documentation/healthkit/hkquantitytypeidentifier/walkingasymmetrypercentage) A quantity sample type that measures the percentage of steps in which one foot moves at a different speed than the other when walking on flat ground.
- [walkingDoubleSupportPercentage](/documentation/healthkit/hkquantitytypeidentifier/walkingdoublesupportpercentage) A quantity sample type that measures the percentage of time when both of the user’s feet touch the ground while walking steadily over flat ground.
- [stairAscentSpeed](/documentation/healthkit/hkquantitytypeidentifier/stairascentspeed) A quantity sample type measuring the user’s speed while climbing a flight of stairs.
- [stairDescentSpeed](/documentation/healthkit/hkquantitytypeidentifier/stairdescentspeed) A quantity sample type measuring the user’s speed while descending a flight of stairs.

## UV exposure

- [timeInDaylight](/documentation/healthkit/hkquantitytypeidentifier/timeindaylight) A quantity sample type that measures amount of time the user spent in daylight.
- [uvExposure](/documentation/healthkit/hkquantitytypeidentifier/uvexposure) A quantity sample type that measures the user’s exposure to UV radiation.

## Diving

- [underwaterDepth](/documentation/healthkit/hkquantitytypeidentifier/underwaterdepth) A quantity sample that records a person’s depth underwater.
- [waterTemperature](/documentation/healthkit/hkquantitytypeidentifier/watertemperature) A quantity sample that records the water temperature.

## Initializers

- [init(rawValue:)](/documentation/healthkit/hkquantitytypeidentifier/init(rawvalue:)) Returns a newly initialized quantity type identifier using the provided string.

## Type Properties

- [appleSleepingBreathingDisturbances](/documentation/healthkit/hkquantitytypeidentifier/applesleepingbreathingdisturbances)

## Creating quantity types

- [quantityType(forIdentifier:)](/documentation/healthkit/hkobjecttype/quantitytype(foridentifier:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
