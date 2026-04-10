---
name: uikit
user-invocable: true
description: "API reference: UIKit. Query for UIView, UIViewController, controls, table and collection views, navigation controllers, scenes, Auto Layout, images, colors, gestures, presentation, and SwiftUI hosting."
context: fork
agent: Explore
---

# UIKit Reference

UIKit framework documentation for iOS and iPadOS apps.

## Downloaded Reference Files

Search the local files first. `uikit-overview.md` is the full framework index and is large, so prefer `rg` over opening it directly.

| File | Content |
|------|---------|
| [uikit-overview.md](uikit-overview.md) | Full UIKit framework index |
| [uikit-updates.md](uikit-updates.md) | UIKit updates |
| [uiapplication.md](uiapplication.md) | UIApplication |
| [uiapplicationdelegate.md](uiapplicationdelegate.md) | UIApplicationDelegate |
| [uiwindowscene.md](uiwindowscene.md) | UIWindowScene |
| [uiview.md](uiview.md) | UIView |
| [uiviewcontroller.md](uiviewcontroller.md) | UIViewController |
| [uicontrol.md](uicontrol.md) | UIControl |
| [uibutton.md](uibutton.md) | UIButton |
| [uilabel.md](uilabel.md) | UILabel |
| [uiimage.md](uiimage.md) | UIImage |
| [uiimageview.md](uiimageview.md) | UIImageView |
| [uicolor.md](uicolor.md) | UIColor |
| [uifont.md](uifont.md) | UIFont |
| [uiscrollview.md](uiscrollview.md) | UIScrollView |
| [uitableview.md](uitableview.md) | UITableView |
| [uicollectionview.md](uicollectionview.md) | UICollectionView |
| [uistackview.md](uistackview.md) | UIStackView |
| [nslayoutconstraint.md](nslayoutconstraint.md) | NSLayoutConstraint |
| [uinavigationcontroller.md](uinavigationcontroller.md) | UINavigationController |
| [uitabbarcontroller.md](uitabbarcontroller.md) | UITabBarController |
| [uisplitviewcontroller.md](uisplitviewcontroller.md) | UISplitViewController |
| [uigesturerecognizer.md](uigesturerecognizer.md) | UIGestureRecognizer |
| [uialertcontroller.md](uialertcontroller.md) | UIAlertController |
| [uiactivityviewcontroller.md](uiactivityviewcontroller.md) | UIActivityViewController |
| [uivisualeffectview.md](uivisualeffectview.md) | UIVisualEffectView |
| [uiblureffect.md](uiblureffect.md) | UIBlurEffect |
| [uihostingcontroller.md](uihostingcontroller.md) | UIHostingController bridge from SwiftUI |
| [using-swiftui-with-uikit.md](using-swiftui-with-uikit.md) | Using SwiftUI with UIKit |

## Fetching More Docs

Use the repo's direct Apple DocC fetcher:

```bash
pnpm fetch-doc -- /documentation/uikit/{topic} --output skills/uikit/{topic}.md
```

Some UIKit-adjacent APIs live in other frameworks. For example:

```bash
pnpm fetch-doc -- /documentation/swiftui/uihostingcontroller --output skills/uikit/uihostingcontroller.md
```
