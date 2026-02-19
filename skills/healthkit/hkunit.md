---
title: HKUnit
description: A class for managing the units of measure within HealthKit.
source: https://developer.apple.com/documentation/healthkit/hkunit
timestamp: 2026-01-19T10:21:35.944Z
---

**Navigation:** [Healthkit](/documentation/healthkit)

**Class**

# HKUnit

**Available on:** iOS 8.0+, iPadOS 8.0+, Mac Catalyst 13.0+, macOS 13.0+, visionOS 1.0+, watchOS 2.0+

> A class for managing the units of measure within HealthKit.

```swift
class HKUnit
```

## Overview

The unit class supports most standard SI units (meters, seconds, and grams), SI units with prefixes (centimeters, milliseconds and kilograms) and equivalent non-SI units (feet, minutes, and pounds). HealthKit also supports creating complex units by mathematically combining existing units.

You use units when working with HealthKit quantities. Quantities store both the value (as a `double` data type) and its corresponding unit. You can then request the value from the quantity in any compatible units. For more information on working with quantities, see [HKQuantity](/documentation/healthkit/hkquantity).

> [!NOTE]
> Number formatters that use units (for example, [Energy Formatter](/documentation/Foundation/EnergyFormatter), [Length Formatter](/documentation/Foundation/LengthFormatter), and [Mass Formatter](/documentation/Foundation/MassFormatter)) use a custom enumeration to specify their units. For example, the [Energy Formatter](/documentation/Foundation/EnergyFormatter) class uses the [Unit](/documentation/Foundation/EnergyFormatter/Unit) enum. The [HKUnit](/documentation/healthkit/hkunit) class provides several methods to translate between the formatter enumerations and the HealthKit units. For more information, see Working with formatter units.

### Using Units

Like many HealthKit classes, the `HKUnit` class is not extendable and should not be subclassed.

The `HKUnit` class is implemented using a facade design pattern. It uses custom subclasses to represent instances of the different unit types. For example, the [second()](/documentation/healthkit/hkunit/second()) convenience method actually returns an instance of the private `HKTimeUnit` subclass.

Additionally, the unit class uses a single unit instance to represent all copies of the same unit in your app, wherever possible. For example, two calls to the [second()](/documentation/healthkit/hkunit/second()) method return the same unit object. This helps reduce the amount of memory used by unit instances.

## Inherits From

- [NSObject](/documentation/ObjectiveC/NSObject-swift.class)

## Conforms To

- [CVarArg](/documentation/Swift/CVarArg)
- [CustomDebugStringConvertible](/documentation/Swift/CustomDebugStringConvertible)
- [CustomStringConvertible](/documentation/Swift/CustomStringConvertible)
- [Equatable](/documentation/Swift/Equatable)
- [Hashable](/documentation/Swift/Hashable)
- [NSCoding](/documentation/Foundation/NSCoding)
- [NSCopying](/documentation/Foundation/NSCopying)
- [NSObjectProtocol](/documentation/ObjectiveC/NSObjectProtocol)
- [NSSecureCoding](/documentation/Foundation/NSSecureCoding)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Working with units

- [init(from:)](/documentation/healthkit/hkunit/init(from:)-9qont) Returns the unit instance described by the provided string.
- [unitString](/documentation/healthkit/hkunit/unitstring) A string representation of the unit object.
- [isNull()](/documentation/healthkit/hkunit/isnull()) Returns a Boolean value indicating whether the unit is null.

## Working with formatter units

- [energyFormatterUnit(from:)](/documentation/healthkit/hkunit/energyformatterunit(from:)) Converts a HealthKit unit object into a corresponding energy formatter enumeration value.
- [init(from:)](/documentation/healthkit/hkunit/init(from:)-1j1pq) Converts an energy formatter enumeration value into a corresponding HealthKit unit object.
- [lengthFormatterUnit(from:)](/documentation/healthkit/hkunit/lengthformatterunit(from:)) Converts a HealthKit unit object into a corresponding length formatter enumeration value.
- [init(from:)](/documentation/healthkit/hkunit/init(from:)-55e1u) Converts a length formatter enumeration value into a corresponding HealthKit object.
- [massFormatterUnit(from:)](/documentation/healthkit/hkunit/massformatterunit(from:)) Converts a HealthKit unit object into a corresponding mass formatter enumeration value.
- [init(from:)](/documentation/healthkit/hkunit/init(from:)-7h2li) Converts a mass formatter enumeration value into a corresponding HealthKit unit object.

## Constructing mass units

- [gram()](/documentation/healthkit/hkunit/gram()) Returns a HealthKit unit for measuring mass in grams.
- [gramUnit(with:)](/documentation/healthkit/hkunit/gramunit(with:)) Returns a HealthKit unit for measuring mass, using gram units with the provided prefix.
- [ounce()](/documentation/healthkit/hkunit/ounce()) Returns a HealthKit unit for measuring mass in ounces.
- [pound()](/documentation/healthkit/hkunit/pound()) Returns a HealthKit unit for measuring mass in pounds.
- [stone()](/documentation/healthkit/hkunit/stone()) Returns a HealthKit unit for measuring mass in stones.
- [moleUnit(withMolarMass:)](/documentation/healthkit/hkunit/moleunit(withmolarmass:)) Returns a HealthKit unit for measuring mass in moles for a given molar mass.
- [moleUnit(with:molarMass:)](/documentation/healthkit/hkunit/moleunit(with:molarmass:)) Returns a HealthKit unit for measuring mass in moles, with the given prefix and molar mass.
- [HKUnitMolarMassBloodGlucose](/documentation/healthkit/hkunitmolarmassbloodglucose) The molecular mass of blood glucose, typically used to create mole units for blood glucose.

## Constructing length units

- [meter()](/documentation/healthkit/hkunit/meter()) Returns a HealthKit unit for measuring length in meters.
- [meterUnit(with:)](/documentation/healthkit/hkunit/meterunit(with:)) Returns a HealthKit unit for measuring length, using meter units with the provided prefix.
- [inch()](/documentation/healthkit/hkunit/inch()) Returns a HealthKit unit for measuring length in inches.
- [foot()](/documentation/healthkit/hkunit/foot()) Returns a HealthKit unit for measuring length in feet.
- [yard()](/documentation/healthkit/hkunit/yard()) Returns a HealthKit unit for measuring length in yards.
- [mile()](/documentation/healthkit/hkunit/mile()) Returns a HealthKit unit for measuring length in miles.

## Constructing volume units

- [liter()](/documentation/healthkit/hkunit/liter()) Returns a HealthKit unit for measuring volume in liters.
- [literUnit(with:)](/documentation/healthkit/hkunit/literunit(with:)) Returns a HealthKit unit for measuring volume, using liter units with the provided prefix.
- [fluidOunceUS()](/documentation/healthkit/hkunit/fluidounceus()) Returns a HealthKit unit for measuring volume in US fluid ounces.
- [fluidOunceImperial()](/documentation/healthkit/hkunit/fluidounceimperial()) Returns a HealthKit unit for measuring volume in imperial fluid ounces.
- [cupUS()](/documentation/healthkit/hkunit/cupus()) Returns a HealthKit unit for measuring volume in US cups.
- [cupImperial()](/documentation/healthkit/hkunit/cupimperial()) Returns a HealthKit unit for measuring volume in imperial cups.
- [pintUS()](/documentation/healthkit/hkunit/pintus()) Returns a HealthKit unit for measuring volume in US pints.
- [pintImperial()](/documentation/healthkit/hkunit/pintimperial()) Returns a HealthKit unit for measuring volume in imperial pints.

## Constructing pressure units

- [pascal()](/documentation/healthkit/hkunit/pascal()) Returns a HealthKit unit for measuring pressure in pascals.
- [pascalUnit(with:)](/documentation/healthkit/hkunit/pascalunit(with:)) Returns a HealthKit unit for measuring pressure, using pascal units with the provided prefix.
- [millimeterOfMercury()](/documentation/healthkit/hkunit/millimeterofmercury()) Returns a HealthKit unit for measuring pressure in millimeters of mercury.
- [inchesOfMercury()](/documentation/healthkit/hkunit/inchesofmercury()) Returns a HealthKit unit for measuring pressure in inches of mercury.
- [centimeterOfWater()](/documentation/healthkit/hkunit/centimeterofwater()) Returns a HealthKit unit for measuring pressure in centimeters of water.
- [atmosphere()](/documentation/healthkit/hkunit/atmosphere()) Returns a HealthKit unit for measuring pressure in atmospheres.
- [decibelAWeightedSoundPressureLevel()](/documentation/healthkit/hkunit/decibelaweightedsoundpressurelevel()) Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.

## Constructing time units

- [second()](/documentation/healthkit/hkunit/second()) Returns a HealthKit unit for measuring time in seconds.
- [secondUnit(with:)](/documentation/healthkit/hkunit/secondunit(with:)) Returns a HealthKit unit for measuring time, using second units with the provided prefix.
- [minute()](/documentation/healthkit/hkunit/minute()) Returns a HealthKit unit for measuring time in minutes.
- [hour()](/documentation/healthkit/hkunit/hour()) Returns a HealthKit unit for measuring time in hours.
- [day()](/documentation/healthkit/hkunit/day()) Returns a HealthKit unit for measuring time in days.

## Constructing energy units

- [joule()](/documentation/healthkit/hkunit/joule()) Returns a HealthKit unit for measuring energy in joules.
- [jouleUnit(with:)](/documentation/healthkit/hkunit/jouleunit(with:)) Returns a HealthKit unit for measuring energy, using joule units with the provided prefix.
- [kilocalorie()](/documentation/healthkit/hkunit/kilocalorie()) Returns a HealthKit unit for measuring energy in kilocalories.
- [largeCalorie()](/documentation/healthkit/hkunit/largecalorie()) Returns a HealthKit unit for measuring energy in large calories (Cal).
- [smallCalorie()](/documentation/healthkit/hkunit/smallcalorie()) Returns a HealthKit unit for measuring energy in small calories (cal).
- [calorie()](/documentation/healthkit/hkunit/calorie()) Returns a HealthKit unit for measuring energy in calories.

## Constructing power units

- [watt()](/documentation/healthkit/hkunit/watt()) Returns a HealthKit unit for measuring power in watts.
- [wattUnit(with:)](/documentation/healthkit/hkunit/wattunit(with:)) Returns a HealthKit unit for measuring power, using watt units with the provided prefix.

## Constructing temperature units

- [degreeCelsius()](/documentation/healthkit/hkunit/degreecelsius()) Returns a HealthKit unit for measuring temperature in degrees Celsius.
- [degreeFahrenheit()](/documentation/healthkit/hkunit/degreefahrenheit()) Returns a HealthKit unit for measuring temperature in degrees Fahrenheit.
- [kelvin()](/documentation/healthkit/hkunit/kelvin()) Returns a HealthKit unit for measuring temperature in kelvins.

## Constructing hearing sensitivity units

- [decibelHearingLevel()](/documentation/healthkit/hkunit/decibelhearinglevel()) Returns a HealthKit unit for measuring the intensity of a sound.

## Constructing frequency units

- [hertz()](/documentation/healthkit/hkunit/hertz()) Returns a HealthKit unit for measuring frequency in hertz.
- [hertzUnit(with:)](/documentation/healthkit/hkunit/hertzunit(with:)) Returns a HealthKit unit for measuring frequency in hertz with the provided prefix.

## Constructing vision units

- [diopter()](/documentation/healthkit/hkunit/diopter()) Returns a HealthKit unit for measuring the optical power of a lens using diopter units.
- [prismDiopter()](/documentation/healthkit/hkunit/prismdiopter()) Returns a HealthKit unit for measuring the prismatic deviation of a lens using prism diopter units.

## Constructing angle units

- [degreeAngle()](/documentation/healthkit/hkunit/degreeangle()) Returns a HealthKit unit for measuring angles using degrees.
- [radianAngle()](/documentation/healthkit/hkunit/radianangle()) Returns a HealthKit unit for measuring angles using radians.
- [radianAngleUnit(with:)](/documentation/healthkit/hkunit/radianangleunit(with:)) Returns a HealthKit unit for measuring angles, using radian units with the provided prefix.

## Constructing electrical conductance units

- [siemen()](/documentation/healthkit/hkunit/siemen()) Returns a HealthKit unit for measuring electrical conductance in siemens.
- [siemenUnit(with:)](/documentation/healthkit/hkunit/siemenunit(with:)) Returns a HealthKit unit for measuring electrical conductance, using siemen units with the provided prefix.

## Electrical potential difference

- [volt()](/documentation/healthkit/hkunit/volt()) Returns a HealthKit unit for measuring the difference in electrical potential using volts.
- [voltUnit(with:)](/documentation/healthkit/hkunit/voltunit(with:)) Returns a HealthKit unit for measuring the electrical potential difference in volts with the provided prefix.

## Constructing pharmacology units

- [internationalUnit()](/documentation/healthkit/hkunit/internationalunit()) Returns a HealthKit unit that measures the amount of a biologically active substance in international units (IU).

## Constructing scalar units

- [count()](/documentation/healthkit/hkunit/count()) Returns a HealthKit unit for measuring counts.
- [percent()](/documentation/healthkit/hkunit/percent()) Returns a HealthKit unit for measuring percentages.

## Performing unit math

- [unitMultiplied(by:)](/documentation/healthkit/hkunit/unitmultiplied(by:)) Creates a complex unit by multiplying the receiving unit with another unit.
- [unitDivided(by:)](/documentation/healthkit/hkunit/unitdivided(by:)) Creates a complex unit by dividing the receiving unit by another unit.
- [unitRaised(toPower:)](/documentation/healthkit/hkunit/unitraised(topower:)) Creates a complex unit by raising the unit to the given power.
- [reciprocal()](/documentation/healthkit/hkunit/reciprocal()) Returns a complex unit representing the unit’s reciprocal.

## Constants

- [HKMetricPrefix](/documentation/healthkit/hkmetricprefix) Prefixes that can be added to SI units to change the order of magnitude.

## Type Methods

- [appleEffortScore()](/documentation/healthkit/hkunit/appleeffortscore())
- [lux()](/documentation/healthkit/hkunit/lux()) Returns a HealthKit unit for measuring illuminance in lux.
- [luxUnit(with:)](/documentation/healthkit/hkunit/luxunit(with:)) Returns a HealthKit unit for measuring illuminance, using lux units with the provided prefix.

## Units and quantities

- [Defining and converting units and quantities](/documentation/healthkit/defining-and-converting-units-and-quantities)
- [HKQuantity](/documentation/healthkit/hkquantity)
- [HKMetricPrefix](/documentation/healthkit/hkmetricprefix)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
