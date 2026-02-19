---
title: ModelContext
description: An object that enables you to fetch, insert, and delete models, and save any changes to disk.
source: https://developer.apple.com/documentation/swiftdata/modelcontext
timestamp: 2026-01-19T10:21:54.101Z
---

**Navigation:** [Swiftdata](/documentation/swiftdata)

**Class**

# ModelContext

**Available on:** iOS 17.0+, iPadOS 17.0+, Mac Catalyst 17.0+, macOS 14.0+, tvOS 17.0+, visionOS 1.0+, watchOS 10.0+, Swift 5.9+

> An object that enables you to fetch, insert, and delete models, and save any changes to disk.

```swift
class ModelContext
```

## Overview

A model context is central to SwiftData as it’s responsible for managing the entire lifecycle of your persistent models. You use a context to insert new models, track and persist changes to those models, and to delete those models when you no longer need them. A context understands your app’s schema but doesn’t know about any individual models until you tell it to fetch some from the persistent storage or populate it with new models. Afterwards, any changes made to those models exist only in memory until the context implicitly writes them to the persistent storage, or you manually invoke [save()](/documentation/swiftdata/modelcontext/save()). For more information about implicit writes, see [autosave Enabled](/documentation/swiftdata/modelcontext/autosaveenabled).

If your app’s schema describes relationships between models, you don’t need to manually insert each model into the context when you first create them. Instead, create the graph of related models and insert only the graph’s root model into the context. The context recognizes the hierarchy and automatically handles the insertion of the related models. The same behavior applies even if the graph contains both new and existing models.

A model context depends on a model container for knowledge about your app’s schema and persistent storage. After you attach a container to your app’s window group or view hierarchy, an associated context becomes available in the SwiftUI environment. This context is bound to the main actor and the framework configures the context to implicitly save future model changes. The [Query()](/documentation/swiftdata/query()) macros use the same context to perform their fetches.

```swift
struct LastModifiedView: View {
    @Environment(\.modelContext) private var modelContext

}
```

> [!IMPORTANT]
> If you don’t explicitly attach a model container, the environment provides a context bound to an in-memory, schema-less container. Any attempt to insert a model into this context causes the framework to throw an error, and any fetches you run will return empty results.

After you establish access to a model context, use that context’s [insert(_:)](/documentation/swiftdata/modelcontext/insert(_:)) and [delete(_:)](/documentation/swiftdata/modelcontext/delete(_:)) methods to add and remove models. You can also delete several models at once using [delete(model:where:includeSubclasses:)](/documentation/swiftdata/modelcontext/delete(model:where:includesubclasses:)). There isn’t a corresponding method to update a model because the context automatically tracks all changes to its known models. Use the [has Changes](/documentation/swiftdata/modelcontext/haschanges) property to determine if the context has unsaved changes, and call [rollback()](/documentation/swiftdata/modelcontext/rollback()) to discard any pending inserts and deletes and any restore changed models to their most recent saved state.

Although you fetch models primarily with the `Query()` macro (and its variants), you can use a model context to perform almost identical fetches. For example, use the [fetch(_:)](/documentation/swiftdata/modelcontext/fetch(_:)) and [fetch(_:batchSize:)](/documentation/swiftdata/modelcontext/fetch(_:batchsize:)) methods to retrieve all models of a certain type that match a set of criteria. And use [fetchCount(_:)](/documentation/swiftdata/modelcontext/fetchcount(_:)) to determine the number of models that match some criteria without the overhead of fetching the models themselves. If you need to be able to identify models that match some criteria but don’t require all of the associated data, use [fetchIdentifiers(_:)](/documentation/swiftdata/modelcontext/fetchidentifiers(_:)) and [fetchIdentifiers(_:batchSize:)](/documentation/swiftdata/modelcontext/fetchidentifiers(_:batchsize:)) to retrieve only those models’ persistent identifiers.

A model context posts a [will Save](/documentation/swiftdata/modelcontext/willsave) notification before it attempts a save operation, and a [did Save](/documentation/swiftdata/modelcontext/didsave) notification immediately after that operation succeeds. Subscribe to one, or both, of these notifications if your app needs to be aware of these events. The `didSave` notification provides additional information about any inserted, updated, and deleted models.

```swift
struct LastModifiedView: View {
    @Environment(\.modelContext) private var context
    @State private var lastModified = Date.now
    
    private var didSavePublisher: NotificationCenter.Publisher {
        NotificationCenter.default
            .publisher(for: ModelContext.willSave, object: context)
    }
    
    var body: some View {
        Text(lastModified.formatted(date: .abbreviated, time: .shortened))
            .onReceive(didSavePublisher) { _ in
                lastModified = Date.now
            }
    }
}
```

> [!NOTE]
> To avoid receiving unwanted or unexpected notifications, always specify the model context as the `object` parameter when creating a publisher.

## Conforms To

- [Equatable](/documentation/Swift/Equatable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Creating a model context

- [init(_:)](/documentation/swiftdata/modelcontext/init(_:)) Creates a context that belongs to the specified model container.
- [ModelContainer](/documentation/swiftdata/modelcontainer) An object that manages an app’s schema and model storage configuration.

## Fetching models

- [fetch(_:)](/documentation/swiftdata/modelcontext/fetch(_:)) Returns an array of typed models that match the criteria of the specified fetch descriptor.
- [fetch(_:batchSize:)](/documentation/swiftdata/modelcontext/fetch(_:batchsize:)) Returns a collection of typed models, in batches, which match the criteria of the specified fetch descriptor.
- [fetchCount(_:)](/documentation/swiftdata/modelcontext/fetchcount(_:)) Returns the number of models that match the criteria of the specified fetch descriptor.
- [FetchDescriptor](/documentation/swiftdata/fetchdescriptor) A type that describes the criteria, sort order, and any additional configuration to use when performing a fetch.
- [FetchResultsCollection](/documentation/swiftdata/fetchresultscollection) A collection that efficiently provides the results of a completed fetch.
- [enumerate(_:batchSize:allowEscapingMutations:block:)](/documentation/swiftdata/modelcontext/enumerate(_:batchsize:allowescapingmutations:block:)) Runs a closure for each model that matches the criteria of the specified fetch descriptor.
- [model(for:)](/documentation/swiftdata/modelcontext/model(for:)) Returns the persistent model for the specified identifier.
- [registeredModel(for:)](/documentation/swiftdata/modelcontext/registeredmodel(for:)) Returns the typed model for the specified identifier.

## Inserting models

- [insertedModelsArray](/documentation/swiftdata/modelcontext/insertedmodelsarray) The array of inserted models that the context is yet to persist.
- [insert(_:)](/documentation/swiftdata/modelcontext/insert(_:)) Registers the specified model with the context so it can include the model in the next save operation.

## Modifying models

- [hasChanges](/documentation/swiftdata/modelcontext/haschanges) A Boolean value that indicates whether the context has unsaved changes.
- [changedModelsArray](/documentation/swiftdata/modelcontext/changedmodelsarray) The array of registered models that have unsaved changes.

## Deleting models

- [deletedModelsArray](/documentation/swiftdata/modelcontext/deletedmodelsarray) The array of registered models that the context will remove from the persistent storage during the next save operation.
- [delete(_:)](/documentation/swiftdata/modelcontext/delete(_:)) Removes the specified model from the persistent storage during the next save operation.
- [delete(model:where:includeSubclasses:)](/documentation/swiftdata/modelcontext/delete(model:where:includesubclasses:)) Removes each model satisfying the given predicate from the persistent storage during the next save operation.

## Persisting unsaved changes

- [autosaveEnabled](/documentation/swiftdata/modelcontext/autosaveenabled) A Boolean value that indicates whether the context should automatically save any pending changes when certain events occur.
- [save()](/documentation/swiftdata/modelcontext/save()) Writes any pending inserts, changes, and deletes to the persistent storage.
- [transaction(block:)](/documentation/swiftdata/modelcontext/transaction(block:)) Runs the provided closure, and once it finishes, writes any pending inserts, changes, and deletes to the persistent storage.
- [rollback()](/documentation/swiftdata/modelcontext/rollback()) Discards pending inserts and deletes, restores changed models to their most recent committed state, and empties the undo stack.

## Fetching only persistent identifiers

- [fetchIdentifiers(_:)](/documentation/swiftdata/modelcontext/fetchidentifiers(_:)) Returns an array of persistent identifiers, where each identifier represents a single model that satisfies the criteria of the specified fetch descriptor.
- [fetchIdentifiers(_:batchSize:)](/documentation/swiftdata/modelcontext/fetchidentifiers(_:batchsize:)) Returns a collection of persistent identifiers, in batches, where each identifier represents a single model that satisfies the criteria of the specified fetch descriptor.

## Accessing the container

- [container](/documentation/swiftdata/modelcontext/container) The context’s model container.

## Performing undo and redo

- [processPendingChanges()](/documentation/swiftdata/modelcontext/processpendingchanges()) Tells the undo manager to record any changes made to the context’s registered models.
- [undoManager](/documentation/swiftdata/modelcontext/undomanager) The object that provides undo support for the context.

## Registering for notifications

- [willSave](/documentation/swiftdata/modelcontext/willsave) A notification that posts when the context is about to process pending inserts, changes, and deletes.
- [didSave](/documentation/swiftdata/modelcontext/didsave) A notification that posts when the context finishes processing pending inserts, changes, and deletes.
- [ModelContext.NotificationKey](/documentation/swiftdata/modelcontext/notificationkey) Describes the data in the user info dictionary of a notification sent by a model context.

## Debugging contexts

- [debugDescription](/documentation/swiftdata/modelcontext/debugdescription) A textual representation of the context, suitable for debugging.

## Instance Properties

- [author](/documentation/swiftdata/modelcontext/author)
- [editingState](/documentation/swiftdata/modelcontext/editingstate)

## Instance Methods

- [deleteHistory(_:)](/documentation/swiftdata/modelcontext/deletehistory(_:))
- [fetchHistory(_:)](/documentation/swiftdata/modelcontext/fetchhistory(_:))

## Model life cycle

- [ModelContainer](/documentation/swiftdata/modelcontainer)
- [Fetching and filtering time-based model changes](/documentation/swiftdata/fetching-and-filtering-time-based-model-changes)
- [HistoryDescriptor](/documentation/swiftdata/historydescriptor)
- [Deleting persistent data from your app](/documentation/swiftdata/deleting-persistent-data-from-your-app)
- [Reverting data changes using the undo manager](/documentation/swiftdata/reverting-data-changes-using-the-undo-manager)
- [Syncing model data across a person’s devices](/documentation/swiftdata/syncing-model-data-across-a-persons-devices)
- [Concurrency support](/documentation/swiftdata/concurrencysupport)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
