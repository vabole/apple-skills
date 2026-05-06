---
title: TipUIPopoverViewController
description: A view controller that displays a popover tip in UIKit applications.
source: https://developer.apple.com/documentation/tipkit/tipuipopoverviewcontroller
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/documentation/tipkit/tipuipopoverviewcontroller.json
timestamp: 2026-05-06T06:19:05.999Z
---

**Navigation:** [TipKit](/documentation/tipkit)

**Class**

# TipUIPopoverViewController

**Available on:** iOS 17.0+, iPadOS 17.0+, Mac Catalyst 17.0+, visionOS 1.0+

> A view controller that displays a popover tip in UIKit applications.

```swift
@MainActor @objc @preconcurrency final class TipUIPopoverViewController
```

## Overview

Use this view controller to present a tip you want to display using [UIPopoverPresentationController](/documentation/UIKit/UIPopoverPresentationController).

Presenting or dismissing TipUIPopoverViewController is done by listening to a tip’s [shouldDisplayUpdates](/documentation/tipkit/tip/shoulddisplayupdates) or [statusUpdates](/documentation/tipkit/tip/statusupdates).

```swift
import TipKit
import UIKit

struct CatTracksFeatureTip: Tip {
    var title: Text {
        Text("Sample tip title")
    }

    var message: Text? {
        Text("Sample tip message")
    }

    var image: Image? {
        Image(systemName: "globe")
    }
}

class CatTracksViewController: UIViewController {
    @IBOutlet weak var catTracksFeatureButton: UIButton!

    private var catTracksFeatureTip = CatTracksFeatureTip()
    private var tipObservationTask: Task<Void, Never>?
    private weak var tipPopoverController: TipUIPopoverViewController?

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)

        tipObservationTask = tipObservationTask ?? Task { @MainActor in
            for await shouldDisplay in catTracksFeatureTip.shouldDisplayUpdates {
                if shouldDisplay {
                    let popoverController = TipUIPopoverViewController(catTracksFeatureTip, sourceItem: catTracksFeatureButton)
                    present(popoverController, animated: animated)
                    tipPopoverController = popoverController
                }
                else {
                    if presentedViewController is TipUIPopoverViewController {
                        dismiss(animated: animated)
                        tipPopoverController = nil
                    }
                }
            }
        }
    }

    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)

        tipObservationTask?.cancel()
        tipObservationTask = nil
    }
}
```

## Inherits From

- [UIViewController](/documentation/UIKit/UIViewController)

## Conforms To

- [CVarArg](/documentation/Swift/CVarArg)
- [CustomDebugStringConvertible](/documentation/Swift/CustomDebugStringConvertible)
- [CustomStringConvertible](/documentation/Swift/CustomStringConvertible)
- [Equatable](/documentation/Swift/Equatable)
- [Hashable](/documentation/Swift/Hashable)
- [NSCoding](/documentation/Foundation/NSCoding)
- [NSExtensionRequestHandling](/documentation/Foundation/NSExtensionRequestHandling)
- [NSObjectProtocol](/documentation/ObjectiveC/NSObjectProtocol)
- [NSTouchBarProvider](/documentation/AppKit/NSTouchBarProvider)
- [UIActivityItemsConfigurationProviding](/documentation/UIKit/UIActivityItemsConfigurationProviding)
- [UIContentContainer](/documentation/UIKit/UIContentContainer)
- [UIFocusEnvironment](/documentation/UIKit/UIFocusEnvironment)
- [UIKit.UIAppearanceContainer](/doc://com.apple.TipKit/objc(pl)UIAppearanceContainer)
- [UIPasteConfigurationSupporting](/documentation/UIKit/UIPasteConfigurationSupporting)
- [UIResponderStandardEditActions](/documentation/UIKit/UIResponderStandardEditActions)
- [UIStateRestoring](/documentation/UIKit/UIStateRestoring)
- [UITraitChangeObservable](/documentation/UIKit/UITraitChangeObservable-67e94)
- [UITraitEnvironment](/documentation/UIKit/UITraitEnvironment)
- [UIUserActivityRestoring](/documentation/UIKit/UIUserActivityRestoring)

## Initializers

- [init(_:sourceItem:actionHandler:)](/documentation/tipkit/tipuipopoverviewcontroller/init(_:sourceitem:actionhandler:)) Initializes a popover controller with the specified tip.
- [init(coder:)](/documentation/tipkit/tipuipopoverviewcontroller/init(coder:))
- [init(nibName:bundle:)](/documentation/tipkit/tipuipopoverviewcontroller/init(nibname:bundle:))

## Instance Properties

- [backgroundColor](/documentation/tipkit/tipuipopoverviewcontroller/backgroundcolor) The background color to use for the tip view.
- [backgroundStyle](/documentation/tipkit/tipuipopoverviewcontroller/backgroundstyle) The background style to use for the tip view.
- [imageSize](/documentation/tipkit/tipuipopoverviewcontroller/imagesize) Size of the image displayed in the tip view.
- [imageStyle](/documentation/tipkit/tipuipopoverviewcontroller/imagestyle) Foreground style for the tip’s image.
- [presentationDelegate](/documentation/tipkit/tipuipopoverviewcontroller/presentationdelegate) The popover presentation delegate, which lets you customize the behavior of a popover-based presentation.
- [sourceItem](/documentation/tipkit/tipuipopoverviewcontroller/sourceitem) The item on which to anchor the tip popover.
- [viewStyle](/documentation/tipkit/tipuipopoverviewcontroller/viewstyle) The given style for TipView within the view hierarchy.

## UIKit Views

- [TipUIView](/documentation/tipkit/tipuiview) A user interface element that represents a tip in UIKit applications.
- [TipUICollectionViewCell](/documentation/tipkit/tipuicollectionviewcell) A collection view cell that embeds a tip.
- [TipUICollectionReusableView](/documentation/tipkit/tipuicollectionreusableview) A UICollectionReusableView subclass that represents a tip.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*
