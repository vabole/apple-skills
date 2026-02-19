---
title: EventKit
source: https://developer.apple.com/documentation/eventkit
timestamp: 2026-01-19T11:02:43.505Z
---

## Essentials

- [Accessing the event store](/documentation/eventkit/accessing-the-event-store)
- [EKEventStore](/documentation/eventkit/ekeventstore)

### Creating event stores

- [init()](/documentation/eventkit/ekeventstore/init())
- [init(sources: [EKSource])](/documentation/eventkit/ekeventstore/init(sources:))
- [var eventStoreIdentifier: String](/documentation/eventkit/ekeventstore/eventstoreidentifier)

### Requesting access to events and reminders

- [func requestWriteOnlyAccessToEvents(completion: (Bool, (any Error)?) -> Void)](/documentation/eventkit/ekeventstore/requestwriteonlyaccesstoevents(completion:))
- [func requestFullAccessToEvents(completion: (Bool, (any Error)?) -> Void)](/documentation/eventkit/ekeventstore/requestfullaccesstoevents(completion:))
- [func requestFullAccessToReminders(completion: (Bool, (any Error)?) -> Void)](/documentation/eventkit/ekeventstore/requestfullaccesstoreminders(completion:))
- [class func authorizationStatus(for: EKEntityType) -> EKAuthorizationStatus](/documentation/eventkit/ekeventstore/authorizationstatus(for:))
- [EKAuthorizationStatus](/documentation/eventkit/ekauthorizationstatus)

#### Status

- [case fullAccess](/documentation/eventkit/ekauthorizationstatus/fullaccess)
- [case writeOnly](/documentation/eventkit/ekauthorizationstatus/writeonly)
- [case denied](/documentation/eventkit/ekauthorizationstatus/denied)
- [case notDetermined](/documentation/eventkit/ekauthorizationstatus/notdetermined)
- [case restricted](/documentation/eventkit/ekauthorizationstatus/restricted)

#### Deprecated values

- [static var authorized: EKAuthorizationStatus](/documentation/eventkit/ekauthorizationstatus/authorized)

#### Initializers

- [init?(rawValue: Int)](/documentation/eventkit/ekauthorizationstatus/init(rawvalue:))
- [EKEventStoreRequestAccessCompletionHandler](/documentation/eventkit/ekeventstorerequestaccesscompletionhandler)
- [NSCalendarsFullAccessUsageDescription](/documentation/bundleresources/information-property-list/nscalendarsfullaccessusagedescription)
- [NSCalendarsWriteOnlyAccessUsageDescription](/documentation/bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription)
- [NSRemindersFullAccessUsageDescription](/documentation/bundleresources/information-property-list/nsremindersfullaccessusagedescription)

### Accessing account sources

- [var sources: [EKSource]](/documentation/eventkit/ekeventstore/sources)
- [var delegateSources: [EKSource]](/documentation/eventkit/ekeventstore/delegatesources)
- [func source(withIdentifier: String) -> EKSource?](/documentation/eventkit/ekeventstore/source(withidentifier:))

### Saving and restoring state

- [func commit() throws](/documentation/eventkit/ekeventstore/commit())
- [func reset()](/documentation/eventkit/ekeventstore/reset())
- [func refreshSourcesIfNecessary()](/documentation/eventkit/ekeventstore/refreshsourcesifnecessary())

### Accessing calendars

- [var defaultCalendarForNewEvents: EKCalendar?](/documentation/eventkit/ekeventstore/defaultcalendarfornewevents)
- [func defaultCalendarForNewReminders() -> EKCalendar?](/documentation/eventkit/ekeventstore/defaultcalendarfornewreminders())
- [func calendars(for: EKEntityType) -> [EKCalendar]](/documentation/eventkit/ekeventstore/calendars(for:))
- [func calendar(withIdentifier: String) -> EKCalendar?](/documentation/eventkit/ekeventstore/calendar(withidentifier:))
- [func saveCalendar(EKCalendar, commit: Bool) throws](/documentation/eventkit/ekeventstore/savecalendar(_:commit:))
- [func removeCalendar(EKCalendar, commit: Bool) throws](/documentation/eventkit/ekeventstore/removecalendar(_:commit:))
- [var calendars: [EKCalendar]](/documentation/eventkit/ekeventstore/calendars)

### Accessing calendar events

- [func event(withIdentifier: String) -> EKEvent?](/documentation/eventkit/ekeventstore/event(withidentifier:))
- [func calendarItem(withIdentifier: String) -> EKCalendarItem?](/documentation/eventkit/ekeventstore/calendaritem(withidentifier:))
- [func calendarItems(withExternalIdentifier: String) -> [EKCalendarItem]](/documentation/eventkit/ekeventstore/calendaritems(withexternalidentifier:))
- [func remove(EKEvent, span: EKSpan) throws](/documentation/eventkit/ekeventstore/remove(_:span:))
- [func remove(EKEvent, span: EKSpan, commit: Bool) throws](/documentation/eventkit/ekeventstore/remove(_:span:commit:))
- [func remove(EKReminder, commit: Bool) throws](/documentation/eventkit/ekeventstore/remove(_:commit:))
- [func save(EKEvent, span: EKSpan) throws](/documentation/eventkit/ekeventstore/save(_:span:))
- [func save(EKEvent, span: EKSpan, commit: Bool) throws](/documentation/eventkit/ekeventstore/save(_:span:commit:))
- [func save(EKReminder, commit: Bool) throws](/documentation/eventkit/ekeventstore/save(_:commit:))

### Searching calendars

- [func enumerateEvents(matching: NSPredicate, using: EKEventSearchCallback)](/documentation/eventkit/ekeventstore/enumerateevents(matching:using:))
- [func events(matching: NSPredicate) -> [EKEvent]](/documentation/eventkit/ekeventstore/events(matching:))
- [func fetchReminders(matching: NSPredicate, completion: ([EKReminder]?) -> Void) -> Any](/documentation/eventkit/ekeventstore/fetchreminders(matching:completion:))
- [func cancelFetchRequest(Any)](/documentation/eventkit/ekeventstore/cancelfetchrequest(_:))
- [func predicateForEvents(withStart: Date, end: Date, calendars: [EKCalendar]?) -> NSPredicate](/documentation/eventkit/ekeventstore/predicateforevents(withstart:end:calendars:))
- [func predicateForReminders(in: [EKCalendar]?) -> NSPredicate](/documentation/eventkit/ekeventstore/predicateforreminders(in:))
- [func predicateForCompletedReminders(withCompletionDateStarting: Date?, ending: Date?, calendars: [EKCalendar]?) -> NSPredicate](/documentation/eventkit/ekeventstore/predicateforcompletedreminders(withcompletiondatestarting:ending:calendars:))
- [func predicateForIncompleteReminders(withDueDateStarting: Date?, ending: Date?, calendars: [EKCalendar]?) -> NSPredicate](/documentation/eventkit/ekeventstore/predicateforincompletereminders(withduedatestarting:ending:calendars:))
- [EKEventSearchCallback](/documentation/eventkit/ekeventsearchcallback)

### Deprecated methods

- [func requestAccess(to: EKEntityType, completion: (Bool, (any Error)?) -> Void)](/documentation/eventkit/ekeventstore/requestaccess(to:completion:))

### Structures

- [EKEventStore.EventStoreChanged](/documentation/eventkit/ekeventstore/eventstorechanged)

#### Initializers

- [init()](/documentation/eventkit/ekeventstore/eventstorechanged/init())
- [Accessing Calendar using EventKit and EventKitUI](/documentation/eventkit/accessing-calendar-using-eventkit-and-eventkitui)

## Events and reminders

- [Creating events and reminders](/documentation/eventkit/creating-events-and-reminders)
- [Retrieving events and reminders](/documentation/eventkit/retrieving-events-and-reminders)
- [Updating with notifications](/documentation/eventkit/updating-with-notifications)
- [Managing location-based reminders](/documentation/eventkit/managing-location-based-reminders)
- [EKEvent](/documentation/eventkit/ekevent)

### Creating Events

- [init(eventStore: EKEventStore)](/documentation/eventkit/ekevent/init(eventstore:))

### Scheduling Events

- [EKEventStatus](/documentation/eventkit/ekeventstatus)

#### Constants

- [case none](/documentation/eventkit/ekeventstatus/none)
- [case confirmed](/documentation/eventkit/ekeventstatus/confirmed)
- [case tentative](/documentation/eventkit/ekeventstatus/tentative)
- [case canceled](/documentation/eventkit/ekeventstatus/canceled)

#### Initializers

- [init?(rawValue: Int)](/documentation/eventkit/ekeventstatus/init(rawvalue:))
- [EKEventAvailability](/documentation/eventkit/ekeventavailability)

#### Constants

- [case notSupported](/documentation/eventkit/ekeventavailability/notsupported)
- [case busy](/documentation/eventkit/ekeventavailability/busy)
- [case free](/documentation/eventkit/ekeventavailability/free)
- [case tentative](/documentation/eventkit/ekeventavailability/tentative)
- [case unavailable](/documentation/eventkit/ekeventavailability/unavailable)

#### Initializers

- [init?(rawValue: Int)](/documentation/eventkit/ekeventavailability/init(rawvalue:))

### Comparing Events

- [func compareStartDate(with: EKEvent) -> ComparisonResult](/documentation/eventkit/ekevent/comparestartdate(with:))

### Accessing Event Properties

- [var eventIdentifier: String!](/documentation/eventkit/ekevent/eventidentifier)
- [var availability: EKEventAvailability](/documentation/eventkit/ekevent/availability)
- [var startDate: Date!](/documentation/eventkit/ekevent/startdate)
- [var endDate: Date!](/documentation/eventkit/ekevent/enddate)
- [var isAllDay: Bool](/documentation/eventkit/ekevent/isallday)
- [var occurrenceDate: Date!](/documentation/eventkit/ekevent/occurrencedate)
- [var isDetached: Bool](/documentation/eventkit/ekevent/isdetached)
- [var organizer: EKParticipant?](/documentation/eventkit/ekevent/organizer)
- [var status: EKEventStatus](/documentation/eventkit/ekevent/status)
- [var birthdayContactIdentifier: String?](/documentation/eventkit/ekevent/birthdaycontactidentifier)
- [var structuredLocation: EKStructuredLocation?](/documentation/eventkit/ekevent/structuredlocation)
- [var birthdayPersonID: Int](/documentation/eventkit/ekevent/birthdaypersonid)
- [var birthdayPersonUniqueID: String?](/documentation/eventkit/ekevent/birthdaypersonuniqueid)

### Refreshing Event Data

- [func refresh() -> Bool](/documentation/eventkit/ekevent/refresh())
- [EKReminder](/documentation/eventkit/ekreminder)

### Creating a Reminder

- [init(eventStore: EKEventStore)](/documentation/eventkit/ekreminder/init(eventstore:))

### Accessing Reminder Properties

- [EKReminderPriority](/documentation/eventkit/ekreminderpriority)

#### Constants

- [case none](/documentation/eventkit/ekreminderpriority/none)
- [case high](/documentation/eventkit/ekreminderpriority/high)
- [case medium](/documentation/eventkit/ekreminderpriority/medium)
- [case low](/documentation/eventkit/ekreminderpriority/low)

#### Initializers

- [init?(rawValue: UInt)](/documentation/eventkit/ekreminderpriority/init(rawvalue:))
- [var priority: Int](/documentation/eventkit/ekreminder/priority)
- [var startDateComponents: DateComponents?](/documentation/eventkit/ekreminder/startdatecomponents)
- [var dueDateComponents: DateComponents?](/documentation/eventkit/ekreminder/duedatecomponents)
- [var isCompleted: Bool](/documentation/eventkit/ekreminder/iscompleted)
- [var completionDate: Date?](/documentation/eventkit/ekreminder/completiondate)

## Calendars

- [EKCalendar](/documentation/eventkit/ekcalendar)

### Creating Calendars

- [init(for: EKEntityType, eventStore: EKEventStore)](/documentation/eventkit/ekcalendar/init(for:eventstore:))
- [init(eventStore: EKEventStore)](/documentation/eventkit/ekcalendar/init(eventstore:))

### Accessing Calendar Properties

- [EKCalendarType](/documentation/eventkit/ekcalendartype)

#### Constants

- [case local](/documentation/eventkit/ekcalendartype/local)
- [case calDAV](/documentation/eventkit/ekcalendartype/caldav)
- [case exchange](/documentation/eventkit/ekcalendartype/exchange)
- [case subscription](/documentation/eventkit/ekcalendartype/subscription)
- [case birthday](/documentation/eventkit/ekcalendartype/birthday)

#### Initializers

- [init?(rawValue: Int)](/documentation/eventkit/ekcalendartype/init(rawvalue:))
- [EKCalendarEventAvailabilityMask](/documentation/eventkit/ekcalendareventavailabilitymask)

#### Initializers

- [init(rawValue: UInt)](/documentation/eventkit/ekcalendareventavailabilitymask/init(rawvalue:))

#### Type Properties

- [static var busy: EKCalendarEventAvailabilityMask](/documentation/eventkit/ekcalendareventavailabilitymask/busy)
- [static var free: EKCalendarEventAvailabilityMask](/documentation/eventkit/ekcalendareventavailabilitymask/free)
- [static var tentative: EKCalendarEventAvailabilityMask](/documentation/eventkit/ekcalendareventavailabilitymask/tentative)
- [static var unavailable: EKCalendarEventAvailabilityMask](/documentation/eventkit/ekcalendareventavailabilitymask/unavailable)
- [var allowsContentModifications: Bool](/documentation/eventkit/ekcalendar/allowscontentmodifications)
- [var cgColor: CGColor!](/documentation/eventkit/ekcalendar/cgcolor)
- [var color: NSColor!](/documentation/eventkit/ekcalendar/color)
- [var isImmutable: Bool](/documentation/eventkit/ekcalendar/isimmutable)
- [var title: String](/documentation/eventkit/ekcalendar/title)
- [var type: EKCalendarType](/documentation/eventkit/ekcalendar/type)
- [var allowedEntityTypes: EKEntityMask](/documentation/eventkit/ekcalendar/allowedentitytypes)
- [var source: EKSource!](/documentation/eventkit/ekcalendar/source)
- [var isSubscribed: Bool](/documentation/eventkit/ekcalendar/issubscribed)
- [var supportedEventAvailabilities: EKCalendarEventAvailabilityMask](/documentation/eventkit/ekcalendar/supportedeventavailabilities)
- [var calendarIdentifier: String](/documentation/eventkit/ekcalendar/calendaridentifier)
- [func DATETIME_COMPONENTS_DO_NOT_USE()](/documentation/eventkit/datetime_components_do_not_use())
- [func DATE_COMPONENTS_DO_NOT_USE()](/documentation/eventkit/date_components_do_not_use())
- [EKParticipant](/documentation/eventkit/ekparticipant)

### Defining Participants

- [EKParticipantRole](/documentation/eventkit/ekparticipantrole)

#### Constants

- [case unknown](/documentation/eventkit/ekparticipantrole/unknown)
- [case required](/documentation/eventkit/ekparticipantrole/required)
- [case optional](/documentation/eventkit/ekparticipantrole/optional)
- [case chair](/documentation/eventkit/ekparticipantrole/chair)
- [case nonParticipant](/documentation/eventkit/ekparticipantrole/nonparticipant)

#### Initializers

- [init?(rawValue: Int)](/documentation/eventkit/ekparticipantrole/init(rawvalue:))
- [EKParticipantType](/documentation/eventkit/ekparticipanttype)

#### Constants

- [case unknown](/documentation/eventkit/ekparticipanttype/unknown)
- [case person](/documentation/eventkit/ekparticipanttype/person)
- [case room](/documentation/eventkit/ekparticipanttype/room)
- [case resource](/documentation/eventkit/ekparticipanttype/resource)
- [case group](/documentation/eventkit/ekparticipanttype/group)

#### Initializers

- [init?(rawValue: Int)](/documentation/eventkit/ekparticipanttype/init(rawvalue:))
- [EKParticipantStatus](/documentation/eventkit/ekparticipantstatus)

#### Constants

- [case unknown](/documentation/eventkit/ekparticipantstatus/unknown)
- [case pending](/documentation/eventkit/ekparticipantstatus/pending)
- [case accepted](/documentation/eventkit/ekparticipantstatus/accepted)
- [case declined](/documentation/eventkit/ekparticipantstatus/declined)
- [case tentative](/documentation/eventkit/ekparticipantstatus/tentative)
- [case delegated](/documentation/eventkit/ekparticipantstatus/delegated)
- [case completed](/documentation/eventkit/ekparticipantstatus/completed)
- [case inProcess](/documentation/eventkit/ekparticipantstatus/inprocess)

#### Initializers

- [init?(rawValue: Int)](/documentation/eventkit/ekparticipantstatus/init(rawvalue:))
- [EKParticipantScheduleStatus](/documentation/eventkit/ekparticipantschedulestatus)

#### Constants

- [case none](/documentation/eventkit/ekparticipantschedulestatus/none)
- [case pending](/documentation/eventkit/ekparticipantschedulestatus/pending)
- [case sent](/documentation/eventkit/ekparticipantschedulestatus/sent)
- [case delivered](/documentation/eventkit/ekparticipantschedulestatus/delivered)
- [case recipientNotRecognized](/documentation/eventkit/ekparticipantschedulestatus/recipientnotrecognized)
- [case noPrivileges](/documentation/eventkit/ekparticipantschedulestatus/noprivileges)
- [case deliveryFailed](/documentation/eventkit/ekparticipantschedulestatus/deliveryfailed)
- [case cannotDeliver](/documentation/eventkit/ekparticipantschedulestatus/cannotdeliver)
- [case recipientNotAllowed](/documentation/eventkit/ekparticipantschedulestatus/recipientnotallowed)

#### Initializers

- [init?(rawValue: Int)](/documentation/eventkit/ekparticipantschedulestatus/init(rawvalue:))

### Accessing Participant Properties

- [var isCurrentUser: Bool](/documentation/eventkit/ekparticipant/iscurrentuser)
- [var name: String?](/documentation/eventkit/ekparticipant/name)
- [var participantRole: EKParticipantRole](/documentation/eventkit/ekparticipant/participantrole)
- [var participantStatus: EKParticipantStatus](/documentation/eventkit/ekparticipant/participantstatus)
- [var participantType: EKParticipantType](/documentation/eventkit/ekparticipant/participanttype)
- [var url: URL](/documentation/eventkit/ekparticipant/url)
- [var contactPredicate: NSPredicate](/documentation/eventkit/ekparticipant/contactpredicate)

### Finding Participant Address Book Records

- [func abRecord(with: ABAddressBook) -> ABRecord?](/documentation/eventkit/ekparticipant/abrecord(with:))
- [func abPerson(in: ABAddressBook) -> ABPerson?](/documentation/eventkit/ekparticipant/abperson(in:))
- [ABAddressBook](/documentation/eventkit/abaddressbook)
- [ABRecord](/documentation/eventkit/abrecord)

## Recurrence

- [Creating a recurring event](/documentation/eventkit/creating-a-recurring-event)
- [EKRecurrenceDayOfWeek](/documentation/eventkit/ekrecurrencedayofweek)

### Creating a Day of the Week

- [EKWeekday](/documentation/eventkit/ekweekday)

#### Constants

- [case sunday](/documentation/eventkit/ekweekday/sunday)
- [case monday](/documentation/eventkit/ekweekday/monday)
- [case tuesday](/documentation/eventkit/ekweekday/tuesday)
- [case wednesday](/documentation/eventkit/ekweekday/wednesday)
- [case thursday](/documentation/eventkit/ekweekday/thursday)
- [case friday](/documentation/eventkit/ekweekday/friday)
- [case saturday](/documentation/eventkit/ekweekday/saturday)

#### Deprecated

- [static var EKSunday: EKWeekday](/documentation/eventkit/ekweekday/eksunday)
- [static var EKMonday: EKWeekday](/documentation/eventkit/ekweekday/ekmonday)
- [static var EKTuesday: EKWeekday](/documentation/eventkit/ekweekday/ektuesday)
- [static var EKWednesday: EKWeekday](/documentation/eventkit/ekweekday/ekwednesday)
- [static var EKThursday: EKWeekday](/documentation/eventkit/ekweekday/ekthursday)
- [static var EKFriday: EKWeekday](/documentation/eventkit/ekweekday/ekfriday)
- [static var EKSaturday: EKWeekday](/documentation/eventkit/ekweekday/eksaturday)

#### Initializers

- [init?(rawValue: Int)](/documentation/eventkit/ekweekday/init(rawvalue:))
- [convenience init(EKWeekday)](/documentation/eventkit/ekrecurrencedayofweek/init(_:))
- [convenience init(EKWeekday, weekNumber: Int)](/documentation/eventkit/ekrecurrencedayofweek/init(_:weeknumber:))
- [init(dayOfTheWeek: EKWeekday, weekNumber: Int)](/documentation/eventkit/ekrecurrencedayofweek/init(dayoftheweek:weeknumber:))

### Accessing Properties of a Day of the Week

- [var dayOfTheWeek: EKWeekday](/documentation/eventkit/ekrecurrencedayofweek/dayoftheweek)
- [var weekNumber: Int](/documentation/eventkit/ekrecurrencedayofweek/weeknumber)
- [EKRecurrenceEnd](/documentation/eventkit/ekrecurrenceend)

### Creating a Recurrence End

- [convenience init(end: Date)](/documentation/eventkit/ekrecurrenceend/init(end:))
- [convenience init(occurrenceCount: Int)](/documentation/eventkit/ekrecurrenceend/init(occurrencecount:))

### Accessing Recurrence End Properties

- [var endDate: Date?](/documentation/eventkit/ekrecurrenceend/enddate)
- [var occurrenceCount: Int](/documentation/eventkit/ekrecurrenceend/occurrencecount)
- [EKRecurrenceRule](/documentation/eventkit/ekrecurrencerule)

### Creating a Basic Recurrence Rule

- [EKSpan](/documentation/eventkit/ekspan)

#### Constants

- [case thisEvent](/documentation/eventkit/ekspan/thisevent)
- [case futureEvents](/documentation/eventkit/ekspan/futureevents)

#### Initializers

- [init?(rawValue: Int)](/documentation/eventkit/ekspan/init(rawvalue:))
- [init(recurrenceWith: EKRecurrenceFrequency, interval: Int, end: EKRecurrenceEnd?)](/documentation/eventkit/ekrecurrencerule/init(recurrencewith:interval:end:))

### Creating a Complex Recurrence Rule

- [init(recurrenceWith: EKRecurrenceFrequency, interval: Int, daysOfTheWeek: [EKRecurrenceDayOfWeek]?, daysOfTheMonth: [NSNumber]?, monthsOfTheYear: [NSNumber]?, weeksOfTheYear: [NSNumber]?, daysOfTheYear: [NSNumber]?, setPositions: [NSNumber]?, end: EKRecurrenceEnd?)](/documentation/eventkit/ekrecurrencerule/init(recurrencewith:interval:daysoftheweek:daysofthemonth:monthsoftheyear:weeksoftheyear:daysoftheyear:setpositions:end:))

### Accessing Recurrence Rule Properties

- [EKRecurrenceFrequency](/documentation/eventkit/ekrecurrencefrequency)

#### Constants

- [case daily](/documentation/eventkit/ekrecurrencefrequency/daily)
- [case weekly](/documentation/eventkit/ekrecurrencefrequency/weekly)
- [case monthly](/documentation/eventkit/ekrecurrencefrequency/monthly)
- [case yearly](/documentation/eventkit/ekrecurrencefrequency/yearly)

#### Initializers

- [init?(rawValue: Int)](/documentation/eventkit/ekrecurrencefrequency/init(rawvalue:))
- [var calendarIdentifier: String](/documentation/eventkit/ekrecurrencerule/calendaridentifier)
- [var recurrenceEnd: EKRecurrenceEnd?](/documentation/eventkit/ekrecurrencerule/recurrenceend)
- [var frequency: EKRecurrenceFrequency](/documentation/eventkit/ekrecurrencerule/frequency)
- [var interval: Int](/documentation/eventkit/ekrecurrencerule/interval)
- [var firstDayOfTheWeek: Int](/documentation/eventkit/ekrecurrencerule/firstdayoftheweek)
- [var daysOfTheWeek: [EKRecurrenceDayOfWeek]?](/documentation/eventkit/ekrecurrencerule/daysoftheweek)
- [var daysOfTheMonth: [NSNumber]?](/documentation/eventkit/ekrecurrencerule/daysofthemonth)
- [var daysOfTheYear: [NSNumber]?](/documentation/eventkit/ekrecurrencerule/daysoftheyear)
- [var weeksOfTheYear: [NSNumber]?](/documentation/eventkit/ekrecurrencerule/weeksoftheyear)
- [var monthsOfTheYear: [NSNumber]?](/documentation/eventkit/ekrecurrencerule/monthsoftheyear)
- [var setPositions: [NSNumber]?](/documentation/eventkit/ekrecurrencerule/setpositions)
- [func EK_LOSE_FRACTIONAL_SECONDS_DO_NOT_USE()](/documentation/eventkit/ek_lose_fractional_seconds_do_not_use())

## Alarms

- [Setting an alarm](/documentation/eventkit/setting-an-alarm)
- [EKAlarm](/documentation/eventkit/ekalarm)

### Creating an Alarm

- [init(absoluteDate: Date)](/documentation/eventkit/ekalarm/init(absolutedate:))
- [init(relativeOffset: TimeInterval)](/documentation/eventkit/ekalarm/init(relativeoffset:))

### Accessing Alarm Dates

- [var absoluteDate: Date?](/documentation/eventkit/ekalarm/absolutedate)
- [var relativeOffset: TimeInterval](/documentation/eventkit/ekalarm/relativeoffset)

### Setting GeoFence-based Alarms

- [EKAlarmProximity](/documentation/eventkit/ekalarmproximity)

#### Constants

- [case none](/documentation/eventkit/ekalarmproximity/none)
- [case enter](/documentation/eventkit/ekalarmproximity/enter)
- [case leave](/documentation/eventkit/ekalarmproximity/leave)

#### Initializers

- [init?(rawValue: Int)](/documentation/eventkit/ekalarmproximity/init(rawvalue:))
- [var proximity: EKAlarmProximity](/documentation/eventkit/ekalarm/proximity)
- [var structuredLocation: EKStructuredLocation?](/documentation/eventkit/ekalarm/structuredlocation)

### Triggering Alarm Actions

- [EKAlarmType](/documentation/eventkit/ekalarmtype)

#### Constants

- [case display](/documentation/eventkit/ekalarmtype/display)
- [case audio](/documentation/eventkit/ekalarmtype/audio)
- [case procedure](/documentation/eventkit/ekalarmtype/procedure)
- [case email](/documentation/eventkit/ekalarmtype/email)

#### Initializers

- [init?(rawValue: Int)](/documentation/eventkit/ekalarmtype/init(rawvalue:))
- [var type: EKAlarmType](/documentation/eventkit/ekalarm/type)
- [var emailAddress: String?](/documentation/eventkit/ekalarm/emailaddress)
- [var soundName: String?](/documentation/eventkit/ekalarm/soundname)
- [EKStructuredLocation](/documentation/eventkit/ekstructuredlocation)

### Creating Structured Locations

- [convenience init(title: String)](/documentation/eventkit/ekstructuredlocation/init(title:))
- [convenience init(mapItem: MKMapItem)](/documentation/eventkit/ekstructuredlocation/init(mapitem:))

### Accessing Structured Location Properties

- [var title: String?](/documentation/eventkit/ekstructuredlocation/title)
- [var geoLocation: CLLocation?](/documentation/eventkit/ekstructuredlocation/geolocation)
- [var radius: Double](/documentation/eventkit/ekstructuredlocation/radius)

## Common objects

- [EKCalendarItem](/documentation/eventkit/ekcalendaritem)

### Accessing Calendar Items

- [var calendarItemIdentifier: String](/documentation/eventkit/ekcalendaritem/calendaritemidentifier)
- [var calendarItemExternalIdentifier: String!](/documentation/eventkit/ekcalendaritem/calendaritemexternalidentifier)
- [var uuid: String](/documentation/eventkit/ekcalendaritem/uuid)

### Accessing Calendar Item Properties

- [var calendar: EKCalendar!](/documentation/eventkit/ekcalendaritem/calendar)
- [var title: String!](/documentation/eventkit/ekcalendaritem/title)
- [var location: String?](/documentation/eventkit/ekcalendaritem/location)
- [var creationDate: Date?](/documentation/eventkit/ekcalendaritem/creationdate)
- [var lastModifiedDate: Date?](/documentation/eventkit/ekcalendaritem/lastmodifieddate)
- [var timeZone: TimeZone?](/documentation/eventkit/ekcalendaritem/timezone)
- [var url: URL?](/documentation/eventkit/ekcalendaritem/url)

### Attaching Notes

- [var hasNotes: Bool](/documentation/eventkit/ekcalendaritem/hasnotes)
- [var notes: String?](/documentation/eventkit/ekcalendaritem/notes)

### Displaying Attendees

- [var hasAttendees: Bool](/documentation/eventkit/ekcalendaritem/hasattendees)
- [var attendees: [EKParticipant]?](/documentation/eventkit/ekcalendaritem/attendees)

### Adding and Removing Alarms

- [var hasAlarms: Bool](/documentation/eventkit/ekcalendaritem/hasalarms)
- [func addAlarm(EKAlarm)](/documentation/eventkit/ekcalendaritem/addalarm(_:))
- [func removeAlarm(EKAlarm)](/documentation/eventkit/ekcalendaritem/removealarm(_:))
- [var alarms: [EKAlarm]?](/documentation/eventkit/ekcalendaritem/alarms)

### Setting Recurrence Rules

- [var hasRecurrenceRules: Bool](/documentation/eventkit/ekcalendaritem/hasrecurrencerules)
- [func addRecurrenceRule(EKRecurrenceRule)](/documentation/eventkit/ekcalendaritem/addrecurrencerule(_:))
- [func removeRecurrenceRule(EKRecurrenceRule)](/documentation/eventkit/ekcalendaritem/removerecurrencerule(_:))
- [var recurrenceRules: [EKRecurrenceRule]?](/documentation/eventkit/ekcalendaritem/recurrencerules)
- [EKObject](/documentation/eventkit/ekobject)

### Saving and Restoring State

- [var hasChanges: Bool](/documentation/eventkit/ekobject/haschanges)
- [var isNew: Bool](/documentation/eventkit/ekobject/isnew)
- [func refresh() -> Bool](/documentation/eventkit/ekobject/refresh())
- [func reset()](/documentation/eventkit/ekobject/reset())
- [func rollback()](/documentation/eventkit/ekobject/rollback())
- [EKSource](/documentation/eventkit/eksource)

### Accessing Source Properties

- [EKSourceType](/documentation/eventkit/eksourcetype)

#### EventKit Source Types

- [case local](/documentation/eventkit/eksourcetype/local)
- [case exchange](/documentation/eventkit/eksourcetype/exchange)
- [case calDAV](/documentation/eventkit/eksourcetype/caldav)
- [case mobileMe](/documentation/eventkit/eksourcetype/mobileme)
- [case subscribed](/documentation/eventkit/eksourcetype/subscribed)
- [case birthdays](/documentation/eventkit/eksourcetype/birthdays)

#### Initializers

- [init?(rawValue: Int)](/documentation/eventkit/eksourcetype/init(rawvalue:))
- [var sourceIdentifier: String](/documentation/eventkit/eksource/sourceidentifier)
- [var sourceType: EKSourceType](/documentation/eventkit/eksource/sourcetype)
- [var title: String](/documentation/eventkit/eksource/title)

### Accessing Calendars

- [func calendars(for: EKEntityType) -> Set<EKCalendar>](/documentation/eventkit/eksource/calendars(for:))
- [var calendars: Set<EKCalendar>](/documentation/eventkit/eksource/calendars)

### Entity Type

- [EKEntityType](/documentation/eventkit/ekentitytype)

#### Specifying Multiple Entities

- [EKEntityMask](/documentation/eventkit/ekentitymask)

##### Initializers

- [init(rawValue: UInt)](/documentation/eventkit/ekentitymask/init(rawvalue:))

##### Constants

- [static var event: EKEntityMask](/documentation/eventkit/ekentitymask/event)
- [static var reminder: EKEntityMask](/documentation/eventkit/ekentitymask/reminder)

#### Constants

- [case event](/documentation/eventkit/ekentitytype/event)
- [case reminder](/documentation/eventkit/ekentitytype/reminder)

#### Initializers

- [init?(rawValue: UInt)](/documentation/eventkit/ekentitytype/init(rawvalue:))

### Instance Properties

- [var isDelegate: Bool](/documentation/eventkit/eksource/isdelegate)

## Virtual conferences

- [EKVirtualConferenceProvider](/documentation/eventkit/ekvirtualconferenceprovider)

### Providing Rooms

- [func fetchAvailableRoomTypes(completionHandler: ([EKVirtualConferenceRoomTypeDescriptor]?, (any Error)?) -> Void)](/documentation/eventkit/ekvirtualconferenceprovider/fetchavailableroomtypes(completionhandler:))

### Providing Virtual Conferences

- [func fetchVirtualConference(identifier: EKVirtualConferenceRoomTypeIdentifier, completionHandler: (EKVirtualConferenceDescriptor?, (any Error)?) -> Void)](/documentation/eventkit/ekvirtualconferenceprovider/fetchvirtualconference(identifier:completionhandler:))
- [EKVirtualConferenceDescriptor](/documentation/eventkit/ekvirtualconferencedescriptor)

### Creating Conference Descriptors

- [init(title: String?, urlDescriptors: [EKVirtualConferenceURLDescriptor], conferenceDetails: String?)](/documentation/eventkit/ekvirtualconferencedescriptor/init(title:urldescriptors:conferencedetails:))

### Configuring Virtual Conferences

- [var title: String?](/documentation/eventkit/ekvirtualconferencedescriptor/title)
- [var urlDescriptors: [EKVirtualConferenceURLDescriptor]](/documentation/eventkit/ekvirtualconferencedescriptor/urldescriptors)
- [EKVirtualConferenceURLDescriptor](/documentation/eventkit/ekvirtualconferenceurldescriptor)

#### Creating URL Descriptors

- [init(title: String?, url: URL)](/documentation/eventkit/ekvirtualconferenceurldescriptor/init(title:url:))

#### Configuring URL Descriptors

- [var title: String?](/documentation/eventkit/ekvirtualconferenceurldescriptor/title)
- [var url: URL](/documentation/eventkit/ekvirtualconferenceurldescriptor/url)
- [var conferenceDetails: String?](/documentation/eventkit/ekvirtualconferencedescriptor/conferencedetails)
- [EKVirtualConferenceRoomTypeDescriptor](/documentation/eventkit/ekvirtualconferenceroomtypedescriptor)

### Creating Room Type Descriptors

- [init(title: String, identifier: EKVirtualConferenceRoomTypeIdentifier)](/documentation/eventkit/ekvirtualconferenceroomtypedescriptor/init(title:identifier:))

### Configuring Room Type Descriptors

- [var title: String](/documentation/eventkit/ekvirtualconferenceroomtypedescriptor/title)
- [var identifier: EKVirtualConferenceRoomTypeIdentifier](/documentation/eventkit/ekvirtualconferenceroomtypedescriptor/identifier)
- [EKVirtualConferenceRoomTypeIdentifier](/documentation/eventkit/ekvirtualconferenceroomtypeidentifier)

## Errors

- [EKError](/documentation/eventkit/ekerror)

### Error Codes

- [static var eventNotMutable: EKError.Code](/documentation/eventkit/ekerror/eventnotmutable)
- [static var noCalendar: EKError.Code](/documentation/eventkit/ekerror/nocalendar)
- [static var noEndDate: EKError.Code](/documentation/eventkit/ekerror/noenddate)
- [static var noStartDate: EKError.Code](/documentation/eventkit/ekerror/nostartdate)
- [static var datesInverted: EKError.Code](/documentation/eventkit/ekerror/datesinverted)
- [static var internalFailure: EKError.Code](/documentation/eventkit/ekerror/internalfailure)
- [static var calendarReadOnly: EKError.Code](/documentation/eventkit/ekerror/calendarreadonly)
- [static var durationGreaterThanRecurrence: EKError.Code](/documentation/eventkit/ekerror/durationgreaterthanrecurrence)
- [static var alarmGreaterThanRecurrence: EKError.Code](/documentation/eventkit/ekerror/alarmgreaterthanrecurrence)
- [static var startDateTooFarInFuture: EKError.Code](/documentation/eventkit/ekerror/startdatetoofarinfuture)
- [static var startDateCollidesWithOtherOccurrence: EKError.Code](/documentation/eventkit/ekerror/startdatecollideswithotheroccurrence)
- [static var objectBelongsToDifferentStore: EKError.Code](/documentation/eventkit/ekerror/objectbelongstodifferentstore)
- [static var invitesCannotBeMoved: EKError.Code](/documentation/eventkit/ekerror/invitescannotbemoved)
- [static var invalidSpan: EKError.Code](/documentation/eventkit/ekerror/invalidspan)
- [static var calendarHasNoSource: EKError.Code](/documentation/eventkit/ekerror/calendarhasnosource)
- [static var calendarSourceCannotBeModified: EKError.Code](/documentation/eventkit/ekerror/calendarsourcecannotbemodified)
- [static var calendarIsImmutable: EKError.Code](/documentation/eventkit/ekerror/calendarisimmutable)
- [static var sourceDoesNotAllowCalendarAddDelete: EKError.Code](/documentation/eventkit/ekerror/sourcedoesnotallowcalendaradddelete)
- [static var recurringReminderRequiresDueDate: EKError.Code](/documentation/eventkit/ekerror/recurringreminderrequiresduedate)
- [static var structuredLocationsNotSupported: EKError.Code](/documentation/eventkit/ekerror/structuredlocationsnotsupported)
- [static var reminderLocationsNotSupported: EKError.Code](/documentation/eventkit/ekerror/reminderlocationsnotsupported)
- [static var alarmProximityNotSupported: EKError.Code](/documentation/eventkit/ekerror/alarmproximitynotsupported)
- [static var calendarDoesNotAllowEvents: EKError.Code](/documentation/eventkit/ekerror/calendardoesnotallowevents)
- [static var calendarDoesNotAllowReminders: EKError.Code](/documentation/eventkit/ekerror/calendardoesnotallowreminders)
- [static var sourceDoesNotAllowReminders: EKError.Code](/documentation/eventkit/ekerror/sourcedoesnotallowreminders)
- [static var sourceDoesNotAllowEvents: EKError.Code](/documentation/eventkit/ekerror/sourcedoesnotallowevents)
- [static var priorityIsInvalid: EKError.Code](/documentation/eventkit/ekerror/priorityisinvalid)
- [static var invalidEntityType: EKError.Code](/documentation/eventkit/ekerror/invalidentitytype)
- [static var procedureAlarmsNotMutable: EKError.Code](/documentation/eventkit/ekerror/procedurealarmsnotmutable)
- [static var eventStoreNotAuthorized: EKError.Code](/documentation/eventkit/ekerror/eventstorenotauthorized)
- [static var osNotSupported: EKError.Code](/documentation/eventkit/ekerror/osnotsupported)
- [static var invalidInviteReplyCalendar: EKError.Code](/documentation/eventkit/ekerror/invalidinvitereplycalendar)
- [static var notificationsCollectionFlagNotSet: EKError.Code](/documentation/eventkit/ekerror/notificationscollectionflagnotset)
- [static var sourceMismatch: EKError.Code](/documentation/eventkit/ekerror/sourcemismatch)
- [static var notificationCollectionMismatch: EKError.Code](/documentation/eventkit/ekerror/notificationcollectionmismatch)
- [static var notificationSavedWithoutCollection: EKError.Code](/documentation/eventkit/ekerror/notificationsavedwithoutcollection)
- [static var last: EKError.Code](/documentation/eventkit/ekerror/last)

### Error Domain

- [let EKErrorDomain: String](/documentation/eventkit/ekerrordomain)

### Type Properties

- [static var errorDomain: String](/documentation/eventkit/ekerror/errordomain)
- [static var reminderAlarmContainsEmailOrUrl: EKError.Code](/documentation/eventkit/ekerror/reminderalarmcontainsemailorurl)
- [EKError.Code](/documentation/eventkit/ekerror/code)

### Constants

- [case eventNotMutable](/documentation/eventkit/ekerror/code/eventnotmutable)
- [case noCalendar](/documentation/eventkit/ekerror/code/nocalendar)
- [case noStartDate](/documentation/eventkit/ekerror/code/nostartdate)
- [case noEndDate](/documentation/eventkit/ekerror/code/noenddate)
- [case datesInverted](/documentation/eventkit/ekerror/code/datesinverted)
- [case internalFailure](/documentation/eventkit/ekerror/code/internalfailure)
- [case calendarReadOnly](/documentation/eventkit/ekerror/code/calendarreadonly)
- [case durationGreaterThanRecurrence](/documentation/eventkit/ekerror/code/durationgreaterthanrecurrence)
- [case alarmGreaterThanRecurrence](/documentation/eventkit/ekerror/code/alarmgreaterthanrecurrence)
- [case startDateTooFarInFuture](/documentation/eventkit/ekerror/code/startdatetoofarinfuture)
- [case startDateCollidesWithOtherOccurrence](/documentation/eventkit/ekerror/code/startdatecollideswithotheroccurrence)
- [case objectBelongsToDifferentStore](/documentation/eventkit/ekerror/code/objectbelongstodifferentstore)
- [case invitesCannotBeMoved](/documentation/eventkit/ekerror/code/invitescannotbemoved)
- [case invalidSpan](/documentation/eventkit/ekerror/code/invalidspan)
- [case calendarHasNoSource](/documentation/eventkit/ekerror/code/calendarhasnosource)
- [case calendarSourceCannotBeModified](/documentation/eventkit/ekerror/code/calendarsourcecannotbemodified)
- [case calendarIsImmutable](/documentation/eventkit/ekerror/code/calendarisimmutable)
- [case sourceDoesNotAllowCalendarAddDelete](/documentation/eventkit/ekerror/code/sourcedoesnotallowcalendaradddelete)
- [case recurringReminderRequiresDueDate](/documentation/eventkit/ekerror/code/recurringreminderrequiresduedate)
- [case structuredLocationsNotSupported](/documentation/eventkit/ekerror/code/structuredlocationsnotsupported)
- [case reminderLocationsNotSupported](/documentation/eventkit/ekerror/code/reminderlocationsnotsupported)
- [case alarmProximityNotSupported](/documentation/eventkit/ekerror/code/alarmproximitynotsupported)
- [case calendarDoesNotAllowEvents](/documentation/eventkit/ekerror/code/calendardoesnotallowevents)
- [case calendarDoesNotAllowReminders](/documentation/eventkit/ekerror/code/calendardoesnotallowreminders)
- [case sourceDoesNotAllowReminders](/documentation/eventkit/ekerror/code/sourcedoesnotallowreminders)
- [case sourceDoesNotAllowEvents](/documentation/eventkit/ekerror/code/sourcedoesnotallowevents)
- [case priorityIsInvalid](/documentation/eventkit/ekerror/code/priorityisinvalid)
- [case invalidEntityType](/documentation/eventkit/ekerror/code/invalidentitytype)
- [case procedureAlarmsNotMutable](/documentation/eventkit/ekerror/code/procedurealarmsnotmutable)
- [case eventStoreNotAuthorized](/documentation/eventkit/ekerror/code/eventstorenotauthorized)
- [case osNotSupported](/documentation/eventkit/ekerror/code/osnotsupported)
- [case invalidInviteReplyCalendar](/documentation/eventkit/ekerror/code/invalidinvitereplycalendar)
- [case notificationsCollectionFlagNotSet](/documentation/eventkit/ekerror/code/notificationscollectionflagnotset)
- [case sourceMismatch](/documentation/eventkit/ekerror/code/sourcemismatch)
- [case notificationCollectionMismatch](/documentation/eventkit/ekerror/code/notificationcollectionmismatch)
- [case notificationSavedWithoutCollection](/documentation/eventkit/ekerror/code/notificationsavedwithoutcollection)
- [case last](/documentation/eventkit/ekerror/code/last)

### Enumeration Cases

- [case reminderAlarmContainsEmailOrUrl](/documentation/eventkit/ekerror/code/reminderalarmcontainsemailorurl)

### Initializers

- [init?(rawValue: Int)](/documentation/eventkit/ekerror/code/init(rawvalue:))
- [let EKErrorDomain: String](/documentation/eventkit/ekerrordomain)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
