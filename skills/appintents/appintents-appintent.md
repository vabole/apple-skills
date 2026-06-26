---
title: AppIntent
description: An interface you use to express app-specific actions and make them available to the rest of the system.
source: https://developer.apple.com/documentation/appintents/appintent
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/documentation/appintents/appintent.json
timestamp: 2026-06-26T06:39:35.592Z
---

**Navigation:** [App Intents](/documentation/appintents)

**Protocol**

# AppIntent

**Available on:** iOS 16.0+, iPadOS 16.0+, Mac Catalyst, macOS 13.0+, tvOS 16.0+, visionOS, watchOS 9.0+

> An interface you use to express app-specific actions and make them available to the rest of the system.

```swift
protocol AppIntent : PersistentlyIdentifiable, _SupportsAppDependencies, Sendable
```

## Overview

The [AppIntent](/documentation/appintents/appintent) protocol defines the interface you use to make your app’s actions discoverable by Apple Intelligence and Siri, the Shortcuts app, and other system experiences. This protocol defines the common features that help the system identify your app’s actions and access basic information about them. Implement this protocol in all your app intents, and supplement it with other protocols as needed to support specific types of actions.

Implement this protocol in a new type or existing type in your app, app extension, framework, or Swift package. In your type, use the [perform()](/documentation/appintents/appintent/perform()) method to perform the action and return a result back to the system. If you require input from the person performing the action, add one or more variables to your type and apply the `@Parameter` property wrapper to each. For example, an app intent to start a workout might require the person to specify which workout they want. Before calling your [perform()](/documentation/appintents/appintent/perform()) method, the system resolves any parameters with this wrapper by inferring values from the current conversation or by asking someone explicitly to provide the value. If your app intent requires app-specific data to perform its action, apply the `@Dependency` property wrapper to any variables with that data.

In addition to performing an action, an app intent provides information about the action itself. Implement the [title](/documentation/appintents/appintent/title) and [description](/documentation/appintents/appintent/description) properties and set them to localized strings describing your action. If your app intent has parameters, fill in the [parameterSummary](/documentation/appintents/appintent/parametersummary) property with a description of the action and parameters together. The system uses this information during conversations or when displaying information about your intent.

The following example shows an app intent for ordering an album of music. The intent requires the person to specify the album name at order time. The intent also uses an internal album manager type to locate albums by name and initiate the purchase.

```swift
struct OrderAlbum: AppIntent {
    static var title: LocalizedStringResource { "Order Album" }
    static var description = IntentDescription("Order a vinyl record album.")

    @Parameter(title: "Album", description: "The name of the album to order.")
    var albumName: String

   @Dependency
    private var albumManager: AlbumDataManager

    func perform() async throws -> some IntentResult {
        // Perform the action...
        return .result()
    }

    static var parameterSummary: some ParameterSummary {
        Summary("Order \(\.$albumName)")
    }
}
```

In addition to this protocol, you can define intents that support common actions. System-defined schemas define the requirements needed to support common actions, including the app intent protocol your type needs to adopt and any parameters it needs to define. For example, the `AssistantSchemas.PhotosIntent.openAlbum` intent requires conformance to the [OpenIntent](/documentation/appintents/openintent) protocol and a property with an [AppEntity](/documentation/appintents/appentity) type for the photo album. For information about the available schemas, see [App schema domains](/documentation/appintents/app-schema-domains).

For additional app intent protocols you can adopt in your app, see [App intent types](/documentation/appintents/app-intent-types). For information on how to create an app intent, see [Creating your first app intent](/documentation/appintents/creating-your-first-app-intent).

## Inherits From

- [PersistentlyIdentifiable](/documentation/appintents/persistentlyidentifiable)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Inherited By

- [AssistantIntent](/documentation/appintents/assistantintent)
- [AssistantSchemaIntent](/documentation/appintents/assistantschemaintent)
- [AudioPlaybackIntent](/documentation/appintents/audioplaybackintent)
- [AudioRecordingIntent](/documentation/appintents/audiorecordingintent)
- [AudioStartingIntent](/documentation/appintents/audiostartingintent)
- [CameraCaptureIntent](/documentation/appintents/cameracaptureintent)
- [CancellableIntent](/documentation/appintents/cancellableintent)
- [ControlConfigurationIntent](/documentation/appintents/controlconfigurationintent)
- [CustomIntentMigratedAppIntent](/documentation/appintents/customintentmigratedappintent)
- [DeleteIntent](/documentation/appintents/deleteintent)
- [DeprecatedAppIntent](/documentation/appintents/deprecatedappintent)
- [ForegroundContinuableIntent](/documentation/appintents/foregroundcontinuableintent)
- [LiveActivityIntent](/documentation/appintents/liveactivityintent)
- [LiveActivityStartingIntent](/documentation/appintents/liveactivitystartingintent)
- [LongRunningIntent](/documentation/appintents/longrunningintent)
- [OpenIntent](/documentation/appintents/openintent)
- [PauseWorkoutIntent](/documentation/appintents/pauseworkoutintent)
- [PlayVideoIntent](/documentation/appintents/playvideointent)
- [PredictableIntent](/documentation/appintents/predictableintent)
- [ProgressReportingIntent](/documentation/appintents/progressreportingintent)
- [PushToTalkTransmissionIntent](/documentation/appintents/pushtotalktransmissionintent)
- [ResumeWorkoutIntent](/documentation/appintents/resumeworkoutintent)
- [SetFocusFilterIntent](/documentation/appintents/setfocusfilterintent)
- [SetValueIntent](/documentation/appintents/setvalueintent)
- [ShowInAppSearchResultsIntent](/documentation/appintents/showinappsearchresultsintent)
- [SnippetIntent](/documentation/appintents/snippetintent)
- [StartDiveIntent](/documentation/appintents/startdiveintent)
- [StartWorkoutIntent](/documentation/appintents/startworkoutintent)
- [SystemIntent](/documentation/appintents/systemintent)
- [TargetContentProvidingIntent](/documentation/appintents/targetcontentprovidingintent)
- [UISceneAppIntent](/documentation/appintents/uisceneappintent)
- [URLRepresentableIntent](/documentation/appintents/urlrepresentableintent)
- [UndoableIntent](/documentation/appintents/undoableintent)
- [WidgetConfigurationIntent](/documentation/appintents/widgetconfigurationintent)

## Conforming Types

- [EmptySnippetIntent](/documentation/appintents/emptysnippetintent)
- [OpenURLIntent](/documentation/appintents/openurlintent)
- [RunSystemShortcutIntent](/documentation/appintents/runsystemshortcutintent)

## Creating an app intent

- [init()](/documentation/appintents/appintent/init()) Creates and returns the app intent.

## Specifying the authentication policy

- [authenticationPolicy](/documentation/appintents/appintent/authenticationpolicy) The authentication policy to enforce when running the app intent.
- [IntentAuthenticationPolicy](/documentation/appintents/intentauthenticationpolicy) The authentication policies you can apply to an app intent when it runs.

## Specifying the intent’s allowed target

- [allowedExecutionTargets](/documentation/appintents/appintent/allowedexecutiontargets) The list of targets this intent can be executed against.
- [IntentExecutionTargets](/documentation/appintents/intentexecutiontargets) A set of options that describes which process performs an intent or entity query.
- [AppIntent.ExecutionTargets](/documentation/appintents/appintent/executiontargets)

## Configuring the metadata

- [title](/documentation/appintents/appintent/title) A short, localized, human-readable string that conveys the app intent’s action.
- [description](/documentation/appintents/appintent/description) A localized string that describes what the app intent does.
- [isDiscoverable](/documentation/appintents/appintent/isdiscoverable) A Boolean value that indicates whether system features can discover this app intent.

## Performing the action

- [perform()](/documentation/appintents/appintent/perform()) Performs the intent’s action and returns a result, after resolving any parameters.
- [systemContext](/documentation/appintents/appintent/systemcontext) Contextual information that the system provides while it performs the app intent.
- [PerformResult](/documentation/appintents/appintent/performresult)

## Running in the foreground or background

- [supportedModes](/documentation/appintents/appintent/supportedmodes) The foreground and background modes the app intent supports.
- [IntentModes](/documentation/appintents/intentmodes) A set of options you use to configure the runtime behavior of an app intent.
- [continueInForeground(_:alwaysConfirm:)](/documentation/appintents/appintent/continueinforeground(_:alwaysconfirm:)) Attempts to transition the app to the foreground after optionally requesting permission to do so.
- [needsToContinueInForegroundError(_:alwaysConfirm:)](/documentation/appintents/appintent/needstocontinueinforegrounderror(_:alwaysconfirm:)) Asks the person to continue the intent’s action in the foreground.

## Requesting more information

- [requestChoice(between:dialog:)](/documentation/appintents/appintent/requestchoice(between:dialog:)) Pauses the app intent and asks the person to choose an option from the specified list.
- [requestChoice(between:dialog:content:)](/documentation/appintents/appintent/requestchoice(between:dialog:content:)) Pauses the app intent, asks the person to choose from the specified options, and provides additional content related to those options.
- [requestChoice(between:dialog:view:)](/documentation/appintents/appintent/requestchoice(between:dialog:view:)) Pauses the app intent, asks the person to choose from the specified options, and provides a view with additional data.

## Requesting confirmation

- [requestConfirmation()](/documentation/appintents/appintent/requestconfirmation()) Displays a prompt that asks the person for confirmation before performing the app intent.
- [requestConfirmation(conditions:actionName:dialog:)](/documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:)) Displays a confirmation prompt that includes the specified text and action details.
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:content:)](/documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:showdialogasprompt:content:)) Displays a confirmation prompt with an interactive snippet.
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:snippetIntent:)](/documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:showdialogasprompt:snippetintent:)-3vewj) Displays a confirmation prompt that includes an interactive snippet.
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:snippetIntent:)](/documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:showdialogasprompt:snippetintent:)-jxb8) Displays a confirmation prompt with an interactive snippet.

## Donating the intent to the system

- [donate()](/documentation/appintents/appintent/donate()-1e60c) Donates the app intent to the system asynchronously.
- [donate()](/documentation/appintents/appintent/donate()-jp6k) Donates the app intent to the system.
- [donate(result:)](/documentation/appintents/appintent/donate(result:)-36cia) Donates the app intent and a result to the system asynchronously.
- [donate(result:)](/documentation/appintents/appintent/donate(result:)-9b25i) Donates the app intent and a result to the system asynchronously.
- [callAsFunction(donate:)](/documentation/appintents/appintent/callasfunction(donate:)-3qvbt) Runs the intent’s action after resolving any parameters, returns the resulting value, and optionally donates the intent to the system.
- [callAsFunction(donate:)](/documentation/appintents/appintent/callasfunction(donate:)-7v1om) Runs the intent’s action after resolving any parameters, and optionally donates the intent to the system.

## Summarizing the parameters

- [SummaryContent](/documentation/appintents/appintent/summarycontent) The type of parameter summary representing this intent.
- [parameterSummary](/documentation/appintents/appintent/parametersummary) The parameter summary the Shortcuts app uses to generate shortcuts for this intent.
- [parameterSummary](/documentation/appintents/appintent/parametersummary-4vgic)
- [ParameterSummaryBuilder](/documentation/appintents/parametersummarybuilder) A result builder that allows you to declaratively describe a parameter summary.
- [AppIntent.Parameter](/documentation/appintents/appintent/parameter)
- [AppIntent.Case](/documentation/appintents/appintent/case)
- [AppIntent.DefaultCase](/documentation/appintents/appintent/defaultcase)
- [AppIntent.Summary](/documentation/appintents/appintent/summary)
- [AppIntent.Switch](/documentation/appintents/appintent/switch)
- [AppIntent.When](/documentation/appintents/appintent/when)
- [AppIntent.Option](/documentation/appintents/appintent/option) A convenience type alias that represents a choice option within the scope of an app intent.

## Deprecated

- [openAppWhenRun](/documentation/appintents/appintent/openappwhenrun) A Boolean property that tells the system to consider the app intent even if its app is not in the foreground.
- [requestConfirmation(result:confirmationActionName:showPrompt:)](/documentation/appintents/appintent/requestconfirmation(result:confirmationactionname:showprompt:)) Requests user confirmation before performing the app intent.
- [requestConfirmation(output:confirmationActionName:showPrompt:)](/documentation/appintents/appintent/requestconfirmation(output:confirmationactionname:showprompt:))

## App intent definition

- [Creating your first app intent](/documentation/appintents/creating-your-first-app-intent) Create your first app intent that makes your app available in system experiences like Spotlight or the Shortcuts app.
- [Accelerating app interactions with App Intents](/documentation/appintents/acceleratingappinteractionswithappintents) Enable people to use your app’s features quickly through Siri, Spotlight, and Shortcuts.
- [Soup Chef with App Intents: Migrating custom intents](/documentation/SiriKit/soup-chef-with-app-intents-migrating-custom-intents) Integrating App Intents to provide your appʼs actions to Siri and Shortcuts.
- [App intent types](/documentation/appintents/app-intent-types) Build your intents from types that define common behaviors such as opening or deleting items, playing or recording media, and more.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*
