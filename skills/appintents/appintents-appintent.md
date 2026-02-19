---
title: AppIntent
description: An interface for providing an app-specific capability that people invoke from system experiences like Siri and the Shortcuts app.
source: https://developer.apple.com/documentation/appintents/appintent
timestamp: 2026-01-19T10:21:58.967Z
---

**Navigation:** [Appintents](/documentation/appintents)

**Protocol**

# AppIntent

**Available on:** iOS 16.0+, iPadOS 16.0+, Mac Catalyst undefined+, macOS 13.0+, tvOS 16.0+, visionOS undefined+, watchOS 9.0+

> An interface for providing an app-specific capability that people invoke from system experiences like Siri and the Shortcuts app.

```swift
protocol AppIntent : PersistentlyIdentifiable, _SupportsAppDependencies, Sendable
```

## Overview

To expose your app’s functionality to system experiences like Siri or the Shortcuts app, and to support interactivity in widgets, you need to implement the `AppIntent` protocol. Use it to provide phrases that can launch the functionality, describe the needed data for the functionality you make available, and implement the method that performs the functionality.

The system instantiates an app intent you create parameter-less using the [init()](/documentation/appintents/appintent/init()) initializer whenever a person invokes it through a system service like Siri, Shortcuts, and so on. If available, the system sets parameters based on user input or other available sources. With set parameters, the system attempts to resolve them in the order of their declaration in the `AppIntent` body. After it resolves all parameters, the system calls [perform()](/documentation/appintents/appintent/perform()) to perform the app intent with its configured parameters. Note that the system retains the app intent and its output only for the duration of the invocation.

> [!NOTE]
> Session 10032: [10032](https://developer.apple.com/videos/play/wwdc2022/10032).

### Implement the AppIntent Protocol

Declare a custom intent type by defining a structure that conforms to the `AppIntent` protocol:

```swift
struct OrderSoupIntent: AppIntent {
   static var title = LocalizedStringResource("Order Soup")
   static var description = IntentDescription("Orders a soup from your favorite restaurant.")
}
```

Then, declare the AppIntent’s parameters. When you implement an `AppIntent` type, parameters must be declared with the `@Parameter` property wrapper. For more information about declaring parameters, see [Adding-parameters-to-an-app](/documentation/appintents/adding-parameters-to-an-app-intent).

```swift
struct OrderSoupIntent: AppIntent {
   @Parameter(title: "Soup")
   var soup: Soup

   @Parameter(title: "Quantity")
   var quantity: Int?
}
```

Next, implement the required [perform()](/documentation/appintents/appintent/perform())function: Validate your intent’s parameters, execute the intent, and return an [Intent Result](/documentation/appintents/intentresult) that represents the output of a completed intent; for example, a [Perform Result](/documentation/appintents/appintent/performresult).

```swift
struct OrderSoupIntent: AppIntent {
    @Parameter(title: "Soup")
    var soup: Soup

    @Parameter(title: "Quantity")
    var quantity: Int?

    static var parameterSummary: some ParameterSummary {
        Summary("Order \(\.$soup)") {
            \.$quantity
        }
    }

    func perform() async throws -> some IntentResult {
        guard let quantity = quantity, quantity < 10 else {
            throw $quantity.needsValue
        }
        soup.order(quantity: quantity)
        return .result()
    }
}
```

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
- [ControlConfigurationIntent](/documentation/appintents/controlconfigurationintent)
- [CustomIntentMigratedAppIntent](/documentation/appintents/customintentmigratedappintent)
- [DeleteIntent](/documentation/appintents/deleteintent)
- [DeprecatedAppIntent](/documentation/appintents/deprecatedappintent)
- [ForegroundContinuableIntent](/documentation/appintents/foregroundcontinuableintent)
- [LiveActivityIntent](/documentation/appintents/liveactivityintent)
- [LiveActivityStartingIntent](/documentation/appintents/liveactivitystartingintent)
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

## Creating an app intent

- [init()](/documentation/appintents/appintent/init()) Creates an app intent.

## Specifying the authentication policy

- [authenticationPolicy](/documentation/appintents/appintent/authenticationpolicy) A property that defines the authentication policy that indicates whether this app intent requires the device to be unlocked or otherwise authenticated.
- [IntentAuthenticationPolicy](/documentation/appintents/intentauthenticationpolicy) An enumeration that describes the authentication policy to use when running an app intent.

## Configuring the metadata

- [title](/documentation/appintents/appintent/title) A short, localized, human-readable string that describes the app intent using a verb and a noun in title case.
- [description](/documentation/appintents/appintent/description) A description of the app intent that the system shows to people.
- [openAppWhenRun](/documentation/appintents/appintent/openappwhenrun) A boolean property that tells the system to consider the app intent even if its app is not in the foreground.
- [isDiscoverable](/documentation/appintents/appintent/isdiscoverable) A boolean value that determines whether system features such as Shortcuts and Spotlight can discover this app intent.

## Performing the action

- [perform()](/documentation/appintents/appintent/perform()) Performs the intent after resolving the provided parameters.
- [systemContext](/documentation/appintents/appintent/systemcontext) Context information that’s available while the system performs the app intent’s action.
- [PerformResult](/documentation/appintents/appintent/performresult)

## Requesting confirmation

- [requestConfirmation()](/documentation/appintents/appintent/requestconfirmation()) Requests user confirmation before performing the app intent.
- [requestConfirmation(conditions:actionName:dialog:)](/documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:)) Requests user confirmation before performing the app intent.
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:content:)](/documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:showdialogasprompt:content:)) Request user confirmation before performing the app intent.
- [requestConfirmation(result:confirmationActionName:showPrompt:)](/documentation/appintents/appintent/requestconfirmation(result:confirmationactionname:showprompt:)) Requests user confirmation before performing the app intent.
- [requestConfirmation(output:confirmationActionName:showPrompt:)](/documentation/appintents/appintent/requestconfirmation(output:confirmationactionname:showprompt:))

## Donating the intent to the system

- [donate()](/documentation/appintents/appintent/donate()-1e60c) Donates the intent to the transcript.
- [donate()](/documentation/appintents/appintent/donate()-jp6k) Donates the intent to the transcript.
- [donate(result:)](/documentation/appintents/appintent/donate(result:)-36cia) Donates the intent and optional result to the transcript.
- [donate(result:)](/documentation/appintents/appintent/donate(result:)-9b25i) Donates the intent and optional result to the transcript.
- [callAsFunction(donate:)](/documentation/appintents/appintent/callasfunction(donate:)-3qvbt)
- [callAsFunction(donate:)](/documentation/appintents/appintent/callasfunction(donate:)-7v1om)

## Summarizing the parameters

- [SummaryContent](/documentation/appintents/appintent/summarycontent) The type of parameter summary representing this intent.
- [parameterSummary](/documentation/appintents/appintent/parametersummary) Defines the summary of this intent in relation to how its parameters are populated.
- [parameterSummary](/documentation/appintents/appintent/parametersummary-4vgic)
- [ParameterSummaryBuilder](/documentation/appintents/parametersummarybuilder) A result builder that allows you to declaratively describe a parameter summary.
- [AppIntent.Parameter](/documentation/appintents/appintent/parameter)
- [AppIntent.Case](/documentation/appintents/appintent/case)
- [AppIntent.DefaultCase](/documentation/appintents/appintent/defaultcase)
- [AppIntent.Summary](/documentation/appintents/appintent/summary)
- [AppIntent.Switch](/documentation/appintents/appintent/switch)
- [AppIntent.When](/documentation/appintents/appintent/when)

## Instance Methods

- [continueInForeground(_:alwaysConfirm:)](/documentation/appintents/appintent/continueinforeground(_:alwaysconfirm:)) A method you call to ask a person to continue an action in the foreground.
- [needsToContinueInForegroundError(_:alwaysConfirm:)](/documentation/appintents/appintent/needstocontinueinforegrounderror(_:alwaysconfirm:)) A method you call to ask a person to continue an intent’s action in the foreground after it encounters an error.
- [requestChoice(between:dialog:)](/documentation/appintents/appintent/requestchoice(between:dialog:)) Pauses the app intent to request a person to choose from several options.
- [requestChoice(between:dialog:content:)](/documentation/appintents/appintent/requestchoice(between:dialog:content:)) Pauses the app intent to request a person to choose from several options.
- [requestChoice(between:dialog:view:)](/documentation/appintents/appintent/requestchoice(between:dialog:view:)) Pauses the app intent to request a person to choose from several options.
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:snippetIntent:)](/documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:showdialogasprompt:snippetintent:)-3vewj)
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:snippetIntent:)](/documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:showdialogasprompt:snippetintent:)-jxb8) Requests user confirmation before performing the app intent.

## Type Aliases

- [AppIntent.Option](/documentation/appintents/appintent/option) A convenience type alias that represents a choice option within the scope of an app intent.

## Type Properties

- [supportedModes](/documentation/appintents/appintent/supportedmodes) Defines the supported modes that describe the behavior of your app intent.

## Actions

- [AudioPlaybackIntent](/documentation/appintents/audioplaybackintent)
- [AudioRecordingIntent](/documentation/appintents/audiorecordingintent)
- [AudioStartingIntent](/documentation/appintents/audiostartingintent)
- [CameraCaptureIntent](/documentation/appintents/cameracaptureintent)
- [DeleteIntent](/documentation/appintents/deleteintent)
- [DeprecatedAppIntent](/documentation/appintents/deprecatedappintent)
- [ForegroundContinuableIntent](/documentation/appintents/foregroundcontinuableintent)
- [OpenIntent](/documentation/appintents/openintent)
- [OpenURLIntent](/documentation/appintents/openurlintent)
- [PlayVideoIntent](/documentation/appintents/playvideointent)
- [ProgressReportingIntent](/documentation/appintents/progressreportingintent)
- [PushToTalkTransmissionIntent](/documentation/appintents/pushtotalktransmissionintent)
- [URLRepresentableIntent](/documentation/appintents/urlrepresentableintent)
- [SetValueIntent](/documentation/appintents/setvalueintent)
- [ShowInAppSearchResultsIntent](/documentation/appintents/showinappsearchresultsintent)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
