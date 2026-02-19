---
title: EKEventStore
description: An object that accesses a person’s calendar events and reminders and supports the scheduling of new events.
source: https://developer.apple.com/documentation/eventkit/ekeventstore
timestamp: 2026-01-19T11:03:12.623Z
---

**Navigation:** [Eventkit](/documentation/eventkit)

**Class**

# EKEventStore

**Available on:** iOS 4.0+, iPadOS 4.0+, Mac Catalyst 13.1+, macOS 10.8+, visionOS 1.0+, watchOS 2.0+

> An object that accesses a person’s calendar events and reminders and supports the scheduling of new events.

```swift
class EKEventStore
```

## Overview

The `EKEventStore` class is an app’s point of contact for accessing calendar and reminder data.

After initializing the event store, you must request access to events or reminders before attempting to fetch or create data. To request access to reminders, call [requestFullAccessToReminders(completion:)](/documentation/eventkit/ekeventstore/requestfullaccesstoreminders(completion:)). To request access to events, call [requestWriteOnlyAccessToEvents(completion:)](/documentation/eventkit/ekeventstore/requestwriteonlyaccesstoevents(completion:)) or [requestFullAccessToEvents(completion:)](/documentation/eventkit/ekeventstore/requestfullaccesstoevents(completion:)).

> [!IMPORTANT]
> To request access to events and reminders, your app needs to include permission strings in its `Info.plist` file that explain to someone why the app needs access. For more information, see [accessing-the-event](/documentation/eventkit/accessing-the-event-store).

A typical workflow for using an event store is:

1. Create a predicate, or a search query for events, with [predicateForEvents(withStart:end:calendars:)](/documentation/eventkit/ekeventstore/predicateforevents(withstart:end:calendars:)).
2. Fetch and process events that match the predicate with the [events(matching:)](/documentation/eventkit/ekeventstore/events(matching:)) and [enumerateEvents(matching:using:)](/documentation/eventkit/ekeventstore/enumerateevents(matching:using:)) methods.
3. Save and delete events from the event store with the [save(_:span:commit:)](/documentation/eventkit/ekeventstore/save(_:span:commit:)) and [remove(_:span:commit:)](/documentation/eventkit/ekeventstore/remove(_:span:commit:)) methods.

Use similar methods to access and manipulate reminders.

After receiving an object from an event store, don’t use that object with a different event store. This restriction applies to [EKObject](/documentation/eventkit/ekobject) subclasses such as [EKEvent](/documentation/eventkit/ekevent), [EKReminder](/documentation/eventkit/ekreminder), [EKCalendar](/documentation/eventkit/ekcalendar), and [EKSource](/documentation/eventkit/eksource), as well as predicates that the event store creates. For example, don’t fetch an event from one event store, modify the event, and then pass it to [save(_:span:)](/documentation/eventkit/ekeventstore/save(_:span:)) in a different store.

## Inherits From

- [NSObject](/documentation/ObjectiveC/NSObject-swift.class)

## Conforms To

- [CVarArg](/documentation/Swift/CVarArg)
- [CustomDebugStringConvertible](/documentation/Swift/CustomDebugStringConvertible)
- [CustomStringConvertible](/documentation/Swift/CustomStringConvertible)
- [Equatable](/documentation/Swift/Equatable)
- [Hashable](/documentation/Swift/Hashable)
- [NSObjectProtocol](/documentation/ObjectiveC/NSObjectProtocol)

## Creating event stores

- [init()](/documentation/eventkit/ekeventstore/init()) Creates a new event store.
- [init(sources:)](/documentation/eventkit/ekeventstore/init(sources:)) Creates an event store that contains data for the specified sources.
- [eventStoreIdentifier](/documentation/eventkit/ekeventstore/eventstoreidentifier) The unique identifier for the event store.

## Requesting access to events and reminders

- [requestWriteOnlyAccessToEvents(completion:)](/documentation/eventkit/ekeventstore/requestwriteonlyaccesstoevents(completion:)) Prompts the person using your app to grant or deny write access to event data.
- [requestFullAccessToEvents(completion:)](/documentation/eventkit/ekeventstore/requestfullaccesstoevents(completion:)) Prompts people to grant or deny read and write access to event data.
- [requestFullAccessToReminders(completion:)](/documentation/eventkit/ekeventstore/requestfullaccesstoreminders(completion:)) Prompts people to grant or deny read and write access to reminders.
- [authorizationStatus(for:)](/documentation/eventkit/ekeventstore/authorizationstatus(for:)) Determines the authorization status for the given entity type.
- [EKAuthorizationStatus](/documentation/eventkit/ekauthorizationstatus) The current authorization status for a specific entity type.
- [EKEventStoreRequestAccessCompletionHandler](/documentation/eventkit/ekeventstorerequestaccesscompletionhandler) The signature for a closure that EventKit calls when requesting access to event and reminder data.
- [NSCalendarsFullAccessUsageDescription](/documentation/BundleResources/Information-Property-List/NSCalendarsFullAccessUsageDescription) A message that tells people why the app is requesting access to read and write their calendar data.
- [NSCalendarsWriteOnlyAccessUsageDescription](/documentation/BundleResources/Information-Property-List/NSCalendarsWriteOnlyAccessUsageDescription) A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](/documentation/BundleResources/Information-Property-List/NSRemindersFullAccessUsageDescription) A message that tells people why the app is requesting access to read and write their reminders data.

## Accessing account sources

- [sources](/documentation/eventkit/ekeventstore/sources) An unordered array of objects that represent accounts that contain calendars.
- [delegateSources](/documentation/eventkit/ekeventstore/delegatesources) The event sources delegated to the person using your app.
- [source(withIdentifier:)](/documentation/eventkit/ekeventstore/source(withidentifier:)) Locates an event source with the specified identifier.

## Saving and restoring state

- [commit()](/documentation/eventkit/ekeventstore/commit()) Commits all unsaved changes to the event store.
- [reset()](/documentation/eventkit/ekeventstore/reset()) Reverts the event store to its saved state.
- [refreshSourcesIfNecessary()](/documentation/eventkit/ekeventstore/refreshsourcesifnecessary()) Pulls new data from remote sources, if necessary.

## Accessing calendars

- [defaultCalendarForNewEvents](/documentation/eventkit/ekeventstore/defaultcalendarfornewevents) The calendar that events are added to by default, as specified by user settings.
- [defaultCalendarForNewReminders()](/documentation/eventkit/ekeventstore/defaultcalendarfornewreminders()) Identifies the default calendar for adding reminders to, as specified by user settings.
- [calendars(for:)](/documentation/eventkit/ekeventstore/calendars(for:)) Identifies the calendars that support a given entity type, such as reminders or events.
- [calendar(withIdentifier:)](/documentation/eventkit/ekeventstore/calendar(withidentifier:)) Locates a calendar with the specified identifier.
- [saveCalendar(_:commit:)](/documentation/eventkit/ekeventstore/savecalendar(_:commit:)) Saves a calendar to the event store by either committing or batching the changes.
- [removeCalendar(_:commit:)](/documentation/eventkit/ekeventstore/removecalendar(_:commit:)) Removes a calendar from the event store by either committing or batching the changes.
- [calendars](/documentation/eventkit/ekeventstore/calendars) The calendars associated with the event store.

## Accessing calendar events

- [event(withIdentifier:)](/documentation/eventkit/ekeventstore/event(withidentifier:)) Locates the first occurrence of an event with a given identifier.
- [calendarItem(withIdentifier:)](/documentation/eventkit/ekeventstore/calendaritem(withidentifier:)) Locates a reminder or the first occurrence of an event with the specified identifier.
- [calendarItems(withExternalIdentifier:)](/documentation/eventkit/ekeventstore/calendaritems(withexternalidentifier:)) Locates all reminders or the first occurrences of all events with the specified external identifier.
- [remove(_:span:)](/documentation/eventkit/ekeventstore/remove(_:span:)) Removes an event from the event store.
- [remove(_:span:commit:)](/documentation/eventkit/ekeventstore/remove(_:span:commit:)) Removes an event or recurring events from the event store by either committing or batching the changes.
- [remove(_:commit:)](/documentation/eventkit/ekeventstore/remove(_:commit:)) Removes a reminder from the event store by either committing or batching the changes.
- [save(_:span:)](/documentation/eventkit/ekeventstore/save(_:span:)) Saves changes to an event permanently.
- [save(_:span:commit:)](/documentation/eventkit/ekeventstore/save(_:span:commit:)) Saves an event or recurring events to the event store by either committing or batching the changes.
- [save(_:commit:)](/documentation/eventkit/ekeventstore/save(_:commit:)) Saves changes to a reminder by either committing or batching the changes.

## Searching calendars

- [enumerateEvents(matching:using:)](/documentation/eventkit/ekeventstore/enumerateevents(matching:using:)) Finds all events that match a given predicate and calls a given callback for each event found.
- [events(matching:)](/documentation/eventkit/ekeventstore/events(matching:)) Finds all events that match a given predicate.
- [fetchReminders(matching:completion:)](/documentation/eventkit/ekeventstore/fetchreminders(matching:completion:)) Fetches reminders that match a given predicate.
- [cancelFetchRequest(_:)](/documentation/eventkit/ekeventstore/cancelfetchrequest(_:)) Cancels the request to fetch reminders.
- [predicateForEvents(withStart:end:calendars:)](/documentation/eventkit/ekeventstore/predicateforevents(withstart:end:calendars:)) Creates a predicate to identify events that occur within a given date range.
- [predicateForReminders(in:)](/documentation/eventkit/ekeventstore/predicateforreminders(in:)) Creates a predicate to identify all reminders in a collection of calendars.
- [predicateForCompletedReminders(withCompletionDateStarting:ending:calendars:)](/documentation/eventkit/ekeventstore/predicateforcompletedreminders(withcompletiondatestarting:ending:calendars:)) Creates a predicate to identify all completed reminders that occur within a given date range.
- [predicateForIncompleteReminders(withDueDateStarting:ending:calendars:)](/documentation/eventkit/ekeventstore/predicateforincompletereminders(withduedatestarting:ending:calendars:)) Creates a predicate to identify all incomplete reminders that occur within a given date range.
- [EKEventSearchCallback](/documentation/eventkit/ekeventsearchcallback) The signature for a closure that operates on events when enumerating them.

## Deprecated methods

- [requestAccess(to:completion:)](/documentation/eventkit/ekeventstore/requestaccess(to:completion:)) Prompts the person using your app to grant or deny access to event or reminder data.

## Structures

- [EKEventStore.EventStoreChanged](/documentation/eventkit/ekeventstore/eventstorechanged) A notification posted when changes are made to the Calendar or Reminders database.

## Essentials

- [Accessing the event store](/documentation/eventkit/accessing-the-event-store)
- [Accessing Calendar using EventKit and EventKitUI](/documentation/eventkit/accessing-calendar-using-eventkit-and-eventkitui)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
