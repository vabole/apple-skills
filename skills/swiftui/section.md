---
title: Section
description: A container view that you can use to add hierarchy within certain views.
source: https://developer.apple.com/documentation/swiftui/section
timestamp: 2026-01-19T10:23:07.089Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# Section

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A container view that you can use to add hierarchy within certain views.

```swift
struct Section<Parent, Content, Footer>
```

## Overview

Use `Section` instances in views like [List](/documentation/swiftui/list), [Picker](/documentation/swiftui/picker), and [Form](/documentation/swiftui/form) to organize content into separate sections. Each section has custom content that you provide on a per-instance basis. You can also provide headers and footers for each section.

### Collapsible sections

Create sections that expand and collapse by using an initializer that accepts an `isExpanded` binding. A collapsible section in a [List](/documentation/swiftui/list) that uses the [sidebar](/documentation/swiftui/liststyle/sidebar) style shows a disclosure indicator next to the section’s header. Tapping on the disclosure indicator toggles the appearance of the section’s content.

> [!NOTE]
> Not all contexts provide a default control to trigger collapse or expansion.

## Conforms To

- [Copyable](/documentation/Swift/Copyable)
- [TableRowContent](/documentation/swiftui/tablerowcontent)
- [View](/documentation/swiftui/view)

## Creating a section

- [init(content:)](/documentation/swiftui/section/init(content:)) Creates a section with the provided section content.
- [init(_:content:)](/documentation/swiftui/section/init(_:content:)) Creates a section with the provided section content.

## Adding headers and footers

- [init(content:header:)](/documentation/swiftui/section/init(content:header:)) Creates a section with a header and the provided section content.
- [init(content:footer:)](/documentation/swiftui/section/init(content:footer:)) Creates a section with a footer and the provided section content.
- [init(content:header:footer:)](/documentation/swiftui/section/init(content:header:footer:)) Creates a section with a header, footer, and the provided section content.

## Controlling collapsibility

- [init(_:isExpanded:content:)](/documentation/swiftui/section/init(_:isexpanded:content:)) Creates a section with the provided section content.
- [init(isExpanded:content:header:)](/documentation/swiftui/section/init(isexpanded:content:header:)) Creates a section with a header, the provided section content, and a binding representing the section’s expansion state.

## Deprecated symbols

- [init(header:content:)](/documentation/swiftui/section/init(header:content:)) Creates a section with a header and the provided section content.
- [init(footer:content:)](/documentation/swiftui/section/init(footer:content:)) Creates a section with a footer and the provided section content.
- [init(header:footer:content:)](/documentation/swiftui/section/init(header:footer:content:)) Creates a section with a header, footer, and the provided section content.
- [collapsible(_:)](/documentation/swiftui/section/collapsible(_:)) Sets whether a section can be collapsed by the user.

## Organizing views into sections

- [SectionCollection](/documentation/swiftui/sectioncollection)
- [SectionConfiguration](/documentation/swiftui/sectionconfiguration)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
