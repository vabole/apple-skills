---
title: Observation
source: https://developer.apple.com/documentation/observation
timestamp: 2026-01-17T15:36:07.478Z
---

## Observable conformance

- [macro Observable()](/documentation/observation/observable())
- [Observable](/documentation/observation/observable)

## Change tracking

- [func withObservationTracking<T>(() -> T, onChange: @autoclosure () -> () -> Void) -> T](/documentation/observation/withobservationtracking(_:onchange:))
- [ObservationRegistrar](/documentation/observation/observationregistrar)

### Creating an observation registrar

- [init()](/documentation/observation/observationregistrar/init())

### Receiving change notifications

- [func willSet<Subject, Member>(Subject, keyPath: KeyPath<Subject, Member>)](/documentation/observation/observationregistrar/willset(_:keypath:))
- [func didSet<Subject, Member>(Subject, keyPath: KeyPath<Subject, Member>)](/documentation/observation/observationregistrar/didset(_:keypath:))

### Identifying transactional access

- [func access<Subject, Member>(Subject, keyPath: KeyPath<Subject, Member>)](/documentation/observation/observationregistrar/access(_:keypath:))
- [func withMutation<Subject, Member, T>(of: Subject, keyPath: KeyPath<Subject, Member>, () throws -> T) rethrows -> T](/documentation/observation/observationregistrar/withmutation(of:keypath:_:))

## Observation in SwiftUI

- [Managing model data in your app](/documentation/swiftui/managing-model-data-in-your-app)
- [Migrating from the Observable Object protocol to the Observable macro](/documentation/swiftui/migrating-from-the-observable-object-protocol-to-the-observable-macro)

## Structures

- [Observations](/documentation/observation/observations)

### Structures

- [Observations.Iterator](/documentation/observation/observations/iterator)

### Initializers

- [init(() throws(Failure) -> Element)](/documentation/observation/observations/init(_:))

### Type Methods

- [static func untilFinished(() throws(Failure) -> Observations<Element, Failure>.Iteration) -> Observations<Element, Failure>](/documentation/observation/observations/untilfinished(_:))

### Enumerations

- [Observations.Iteration](/documentation/observation/observations/iteration)

#### Enumeration Cases

- [case finish](/documentation/observation/observations/iteration/finish)
- [case next(Element)](/documentation/observation/observations/iteration/next(_:))

## Macros

- [macro ObservationIgnored()](/documentation/observation/observationignored())
- [macro ObservationTracked()](/documentation/observation/observationtracked())

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
