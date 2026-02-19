---
title: Scroll views
description: A scroll view lets people view content that’s larger than the view’s boundaries by moving the content vertically or horizontally.
source: https://developer.apple.com/design/human-interface-guidelines/scroll-views
timestamp: 2026-01-19T10:22:58.232Z
---

**Navigation:** [Human Interface Guidelines](/design/human-interface-guidelines)

**article**

# Scroll views

> A scroll view lets people view content that’s larger than the view’s boundaries by moving the content vertically or horizontally.



The scroll view itself has no appearance, but it can display a translucent *scroll indicator* that typically appears after people begin scrolling the view’s content. Although the appearance and behavior of scroll indicators can vary per platform, all indicators provide visual feedback about the scrolling action. For example, in iOS, iPadOS, macOS, visionOS, and watchOS, the indicator shows whether the currently visible content is near the beginning, middle, or end of the view.

## Best practices

**Support default scrolling gestures and keyboard shortcuts.** People are accustomed to the systemwide scrolling behavior and expect it to work everywhere. If you build custom scrolling for a view, make sure your scroll indicators use the elastic behavior that people expect.

**Make it apparent when content is scrollable.** Because scroll indicators aren’t always visible, it can be helpful to make it obvious when content extends beyond the view. For example, displaying partial content at the edge of a view indicates that there’s more content in that direction. Although most people immediately try scrolling a view to discover if additional content is available, it’s considerate to draw their attention to it.

**Avoid putting a scroll view inside another scroll view with the same orientation.** Nesting scroll views that have the same orientation can create an unpredictable interface that’s difficult to control. It’s alright to place a horizontal scroll view inside a vertical scroll view (or vice versa), however.

**Consider supporting page-by-page scrolling if it makes sense for your content.** In some situations, people appreciate scrolling by a fixed amount of content per interaction instead of scrolling continuously. On most platforms, you can define the size of such a *page* — typically the current height or width of the view — and define an interaction that scrolls one page at a time. To help maintain context during page-by-page scrolling, you can define a unit of overlap, such as a line of text, a row of glyphs, or part of a picture, and subtract the unit from the page size. For developer guidance, see [PagingScrollTargetBehavior](/documentation/SwiftUI/PagingScrollTargetBehavior).

**In some cases, scroll automatically to help people find their place.** Although people initiate almost all scrolling, automatic scrolling can be helpful when relevant content is no longer in view, such as when:

- Your app performs an operation that selects content or places the insertion point in an area that’s currently hidden. For example, when your app locates text that people are searching for, scroll the content to bring the new selection into view.
- People start entering information in a location that’s not currently visible. For example, if the insertion point is on one page and people navigate to another page, scroll back to the insertion point as soon as they begin to enter text.
- The pointer moves past the edge of the view while people are making a selection. In this case, follow the pointer by scrolling in the direction it moves.
- People select something and scroll to a new location before acting on the selection. In this case, scroll until the selection is in view before performing the operation.

In all cases, automatically scroll the content only as much as necessary to help people retain context. For example, if part of a selection is visible, you don’t need to scroll the entire selection into view.

**If you support zoom, set appropriate maximum and minimum scale values.** For example, zooming in on text until a single character fills the screen doesn’t make sense in most situations.

## Scroll edge effects

In iOS, iPadOS, and macOS, a *scroll edge effect* is a variable blur that provides a transition between a content area and an area with [Liquid Glass](/design/human-interface-guidelines/materials#Liquid-Glass) controls, such as [Toolbars](/design/human-interface-guidelines/toolbars). In most cases, the system applies a scroll edge effect automatically when a pinned element overlaps with scrolling content. If you use custom controls or layouts, the effect might not appear, and you may need to add it manually. For developer guidance, see [ScrollEdgeEffectStyle](/documentation/SwiftUI/ScrollEdgeEffectStyle) and [UIScrollEdgeEffect](/documentation/UIKit/UIScrollEdgeEffect).

There are two styles of scroll edge effect: soft and hard.

- Use a [soft](/documentation/SwiftUI/ScrollEdgeEffectStyle/soft) edge effect in most cases, especially in iOS and iPadOS, to provide a subtle transition that works well for toolbars and interactive elements like buttons.
- Use a [hard](/documentation/SwiftUI/ScrollEdgeEffectStyle/hard) edge effect primarily in macOS for a stronger, more opaque boundary that’s ideal for interactive text, backless controls, or pinned table headers that need extra clarity.

**Only use a scroll edge effect when a scroll view is adjacent to floating interface elements.** Scroll edge effects aren’t decorative. They don’t block or darken like overlays; they exist to clarify where controls and content meet.

**Apply one scroll edge effect per view.** In split view layouts on iPad and Mac, each pane can have its own scroll edge effect; in this case, keep them consistent in height to maintain alignment.

## Platform considerations

### iOS, iPadOS

**Consider showing a page control when a scroll view is in page-by-page mode.** [Page controls](/design/human-interface-guidelines/page-controls) show how many pages, screens, or other chunks of content are available and indicates which one is currently visible. For example, Weather uses a page control to indicate movement between people’s saved locations. If you show a page control with a scroll view, don’t show the scrolling indicator on the same axis to avoid confusing people with redundant controls.

### macOS

In macOS, a *scroll indicator* is commonly called a *scroll bar*.

**If necessary, use small or mini scroll bars in a panel.** When space is tight, you can use smaller scroll bars in panels that need to coexist with other windows. Be sure to use the same size for all controls in such a panel.

### tvOS

Views in tvOS can scroll, but they aren’t treated as distinct objects with scroll indicators. Instead, when content exceeds the size of the screen, the system automatically scrolls the interface to keep focused items visible.

### visionOS

In visionOS, the scroll indicator has a small, fixed size to help communicate that people can scroll efficiently without making large movements. To make it easy to find, the scroll indicator always appears in a predictable location with respect to the window: vertically centered at the trailing edge during vertical scrolling and horizontally centered at the window’s bottom edge during horizontal scrolling.

When people begin swiping content in the direction they want it to scroll, the scroll indicator appears at the window’s edge, visually reinforcing the effect of their gesture and providing feedback about the content’s current position and overall length. When people look at the scroll indicator and begin a drag gesture, the indicator enables a jog bar experience that lets people manipulate the scrolling speed instead of the content’s position. In this experience, the scroll indicator reveals tick marks that speed up or slow down as people make small adjustments to their gesture, providing visual feedback that helps people precisely control scrolling acceleration.

**If necessary, account for the size of the scroll indicator.** Although the indicator’s overall size is small, it’s a little thicker than the same component in iOS. If your content uses tight margins, consider increasing them to prevent the scroll indicator from overlapping the content.

### watchOS

**Prefer vertically scrolling content.** People are accustomed to using the Digital Crown to navigate to and within apps on Apple Watch. If your app contains a single list or content view, rotating the Digital Crown scrolls vertically when your app’s content is taller than the height of the display.

**Use tab views to provide page-by-page scrolling.** watchOS displays tab views as pages. If you place tab views in a vertical stack, people can rotate the Digital Crown to move vertically through full-screen pages of content. In this scenario, the system displays a page indicator next to the Digital Crown that shows people where they are in the content, both within the current page and within a set of pages. For guidance, see [Tab views](/design/human-interface-guidelines/tab-views).

**When displaying paged content, consider limiting the content of an individual page to a single screen height.** Embracing this constraint clarifies the purpose of each page, helping you create a more glanceable design. However, if your app has long pages, people can still use the Digital Crown both to navigate between shorter pages and to scroll content in a longer page because the page indicator expands into a scroll indicator when necessary. Use variable-height pages judiciously and place them after fixed-height pages when possible.

## Resources

#### Related

[Page controls](/design/human-interface-guidelines/page-controls)

[Gestures](/design/human-interface-guidelines/gestures)

[Pointing devices](/design/human-interface-guidelines/pointing-devices)

#### Developer documentation

[ScrollView](/documentation/SwiftUI/ScrollView)

[UIScrollView](/documentation/UIKit/UIScrollView)

[NSScrollView](/documentation/AppKit/NSScrollView)

[WKPageOrientation](/documentation/WatchKit/WKPageOrientation)

## Change log

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All Human Interface Guidelines belong to Apple Inc.*
