---
title: Tips
description: TipKit namespace.
source: https://developer.apple.com/documentation/tipkit/tips
timestamp: 2026-02-19T07:52:36.770Z
---

**Navigation:** [Tipkit](/documentation/tipkit)

**Enumeration**

# Tips

**Available on:** iOS 17.0+, iPadOS 17.0+, Mac Catalyst 17.0+, macOS 14.0+, tvOS 17.0+, visionOS 1.0+, watchOS 10.0+

> TipKit namespace.

```swift
@frozen enum Tips
```

## Overview

A collection of objects for controlling the display of your tips.

## Conforms To

- [BitwiseCopyable](/documentation/Swift/BitwiseCopyable)
- [Copyable](/documentation/Swift/Copyable)

## Configuration

- [configure(_:)](/documentation/tipkit/tips/configure(_:)) Loads and configures the persistent state of all tips in your app.
- [ConfigurationOption](/documentation/tipkit/tips/configurationoption) A type that marks an object as a tip configuration.

## Testing

- [showAllTipsForTesting()](/documentation/tipkit/tips/showalltipsfortesting()) Show all tips regardless of their display rule eligibility or display frequency status for UI testing of tips.
- [showTipsForTesting(_:)](/documentation/tipkit/tips/showtipsfortesting(_:)) Show specified tips regardless of their display rule eligibility or display frequency status for UI testing of certain tips.
- [hideAllTipsForTesting()](/documentation/tipkit/tips/hidealltipsfortesting()) Hide all tips regardless of their display rule eligibility for UI testing without tips.
- [hideTipsForTesting(_:)](/documentation/tipkit/tips/hidetipsfortesting(_:)) Hide specified tips regardless of their display rule eligibility for UI testing without certain tips.
- [resetDatastore()](/documentation/tipkit/tips/resetdatastore()) Resets the tips’ datastore to the initial state for re-testing tip display rules and eligibility.

## Actions

- [Action](/documentation/tipkit/tips/action) A type that describes a control associated with a tip.

## Rules

- [Rule](/documentation/tipkit/tips/rule) A condition to meet before displaying a tip.

## Events

- [Event](/documentation/tipkit/tips/event) A repeatable user-defined action.
- [DonationTimeRange](/documentation/tipkit/tips/donationtimerange) A duration of time for filtering event donations.
- [DonationLimit](/documentation/tipkit/tips/donationlimit) Specify the maximum number of donations for an event.
- [EmptyDonation](/documentation/tipkit/tips/emptydonation) An empty event donation.

## Parameters

- [Parameter](/documentation/tipkit/tips/parameter) A type that monitors the state of its wrapped value to reevaluate any dependent tip rules when the value changes.
- [ParameterOption](/documentation/tipkit/tips/parameteroption) A type that represents the various customizations that you can make to a tip parameter.

## Options

- [IgnoresDisplayFrequency](/documentation/tipkit/tips/ignoresdisplayfrequency) Controls whether a tip obeys the preconfigured display frequency interval.
- [MaxDisplayCount](/documentation/tipkit/tips/maxdisplaycount) Specifies the maximum number of times a tip displays before the system automatically invalidates it.
- [MaxDisplayDuration](/documentation/tipkit/tips/maxdisplayduration) Specifies the maximum amount of time a tip is displayed before it is invalidated.

## Status

- [Status](/documentation/tipkit/tips/status) A type that describes the current display eligibility status for a tip.
- [InvalidationReason](/documentation/tipkit/tips/invalidationreason) A type that describes why the system permanently invalidated a tip.

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
