---
title: Searching
description: People use various search techniques to find content on their device, within an app, and within a document or file.
source: https://developer.apple.com/design/human-interface-guidelines/searching
timestamp: 2026-01-17T15:45:02.076Z
---

**Navigation:** [Human Interface Guidelines](/design/human-interface-guidelines)

**article**

# Searching

> People use various search techniques to find content on their device, within an app, and within a document or file.



To search for content within an app, people generally expect to use a [Search fields](/design/human-interface-guidelines/search-fields). When it makes sense, you can personalize the search experience by using what you know about how people interact with your app. For example, you might display recent searches, search suggestions, completions, or corrections based on terms people searched earlier in your app.

In some cases, people appreciate the ability to scope a search or filter the results. For example, people might want to search for items by specifying attributes like creation date, file size, or file type. For guidance, see [Scope controls and tokens](/design/human-interface-guidelines/search-fields#Scope-controls-and-tokens). You can also help people find content within an open document or file by implementing ways to find content in a window or page in your iOS, iPadOS, or macOS app.

In iOS, iPadOS, and macOS, Spotlight helps people find content across all apps in the system and on the web. When you index and provide information about your app’s content, people can use Spotlight to find content your app contains without opening it first. For guidance, see [Systemwide search](/design/human-interface-guidelines/searching#Systemwide-search).

## Best practices

**If search is important, consider making it a primary action.** For example, in the Apple TV, Photos, and Phone apps in iOS, search occupies a distinct tab in the [Tab bars](/design/human-interface-guidelines/tab-bars). In the Notes app, a search field is in the [Toolbars](/design/human-interface-guidelines/toolbars), making search clearly visible and easily accessible.

**Aim to make your app’s content searchable through a single location.** People appreciate having one clearly identified location they can use to find anything in your app that they are looking for. For apps with clearly distinct sections, it may still be useful to offer a local search. For example, search acts as a filter on the current view when searching your Recents and Contacts in the iOS Phone app.

**Use placeholder text to indicate what content is searchable.** For example, the Apple TV app includes the placeholder text *Shows, Movies, and More*.

**Clearly display the current scope of a search.** Use a descriptive placeholder text, a [Scope controls and tokens](/design/human-interface-guidelines/search-fields#Scope-controls-and-tokens), or a title to help reinforce what someone is currently searching. For example, in the Mail app there is always a clear reference to the mailbox someone is searching.

**Provide suggestions to make searching easier.** When you display a personʼs recent searches or offer search suggestions both before and while they’re typing, you can help people search faster and type less. For developer guidance, see [searchSuggestions(_:)](/documentation/SwiftUI/View/searchSuggestions(_:)).

**Take privacy into consideration before displaying search history.** People might not appreciate having their search history appear where others might see it. Depending on the context, consider providing other ways to narrow the search instead. If you do show search history, provide a way for people to clear it if they want.

## Systemwide search

**Make your app’s content searchable in Spotlight.** You can share content with Spotlight by making it indexable and specifying descriptive attributes known as *metadata*. Spotlight extracts, stores, and organizes this information to allow for fast, comprehensive searches.

**Define metadata for custom file types you handle.** Supply a Spotlight File Importer plug-in that describes the types of metadata your file format contains. For developer guidance, see [CSImportExtension](/documentation/CoreSpotlight/CSImportExtension).

**Use Spotlight to offer advanced file-search capabilities within the context of your app.** For example, you might include a button that instantly initiates a Spotlight search based on the current selection. You might then display a custom view that presents the search results or a filtered subset of them.

**Prefer using the system-provided open and save views.** The system-provided open and save views generally include a built-in search field that people can use to search and filter the entire system. For related guidance, see [File management](/design/human-interface-guidelines/file-management).

**Implement a Quick Look generator if your app produces custom file types.** A Quick Look generator helps Spotlight and other apps show previews of your documents. For developer guidance, see [Quick Look](/documentation/QuickLook).

## Platform considerations

*No additional considerations for iOS, iPadOS, macOS, tvOS, visionOS, or watchOS.*

## Resources

#### Related

[Search fields](/design/human-interface-guidelines/search-fields)

#### Developer documentation

[Adding your app’s content to Spotlight indexes](/documentation/CoreSpotlight/adding-your-app-s-content-to-spotlight-indexes) — Core Spotlight

#### Videos

- [Support semantic search with Core Spotlight](https://developer.apple.com/videos/play/wwdc2024/10131) - Learn how to provide semantic search results in your app using Core Spotlight. Understand how to make your app’s content available in the user’s private, on-device index so people can search for items using natural language. We’ll also share how to optimize your app’s performance by scheduling indexing activities.

To get the most out of this session, we recommend first checking out Core Spotlight documentation on the Apple Developer website.
- [What’s new in iPad app design](https://developer.apple.com/videos/play/wwdc2022/10009) - Discover the latest updates in iPad app design. We’ll take you through improvements to search, navigation bars, edit menus, multi-selection, and more. Learn how you can make your app both more powerful and easier to use when you incorporate customizable toolbars, multi-column tables, and find and replace.

- [Craft search experiences in SwiftUI](https://developer.apple.com/videos/play/wwdc2021/10176) - Discover how you can help people quickly find specific content within your apps. Learn how to use SwiftUI’s .searchable modifier in conjunction with other views to best incorporate search for your app. And we’ll show you how to elevate your implementation by providing search suggestions to help people understand the types of searches they can perform.

## Change log

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All Human Interface Guidelines belong to Apple Inc.*
