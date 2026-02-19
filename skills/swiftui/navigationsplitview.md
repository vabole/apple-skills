---
title: NavigationSplitView
description: A view that presents views in two or three columns, where selections in leading columns control presentations in subsequent columns.
source: https://developer.apple.com/documentation/swiftui/navigationsplitview
timestamp: 2026-01-17T15:34:51.279Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# NavigationSplitView

**Available on:** iOS 16.0+, iPadOS 16.0+, Mac Catalyst 16.0+, macOS 13.0+, tvOS 16.0+, visionOS 1.0+, watchOS 9.0+

> A view that presents views in two or three columns, where selections in leading columns control presentations in subsequent columns.

```swift
struct NavigationSplitView<Sidebar, Content, Detail> where Sidebar : View, Content : View, Detail : View
```

## Overview

You create a navigation split view with two or three columns, and typically use it as the root view in a [Scene](/documentation/swiftui/scene). People choose one or more items in a leading column to display details about those items in subsequent columns.

To create a two-column navigation split view, use the [init(sidebar:detail:)](/documentation/swiftui/navigationsplitview/init(sidebar:detail:)) initializer:

```swift
@State private var employeeIds: Set<Employee.ID> = []

var body: some View {
    NavigationSplitView {
        List(model.employees, selection: $employeeIds) { employee in
            Text(employee.name)
        }
    } detail: {
        EmployeeDetails(for: employeeIds)
    }
}
```

In the above example, the navigation split view coordinates with the [List](/documentation/swiftui/list) in its first column, so that when people make a selection, the detail view updates accordingly. Programmatic changes that you make to the selection property also affect both the list appearance and the presented detail view.

To create a three-column view, use the [init(sidebar:content:detail:)](/documentation/swiftui/navigationsplitview/init(sidebar:content:detail:)) initializer. The selection in the first column affects the second, and the selection in the second column affects the third. For example, you can show a list of departments, the list of employees in the selected department, and the details about all of the selected employees:

```swift
@State private var departmentId: Department.ID? // Single selection.
@State private var employeeIds: Set<Employee.ID> = [] // Multiple selection.

var body: some View {
    NavigationSplitView {
        List(model.departments, selection: $departmentId) { department in
            Text(department.name)
        }
    } content: {
        if let department = model.department(id: departmentId) {
            List(department.employees, selection: $employeeIds) { employee in
                Text(employee.name)
            }
        } else {
            Text("Select a department")
        }
    } detail: {
        EmployeeDetails(for: employeeIds)
    }
}
```

You can also embed a [Navigation Stack](/documentation/swiftui/navigationstack) in a column. Tapping or clicking a [Navigation Link](/documentation/swiftui/navigationlink) that appears in an earlier column sets the view that the stack displays over its root view. Activating a link in the same column adds a view to the stack. Either way, the link must present a data type for which the stack has a corresponding [navigationDestination(for:destination:)](/documentation/swiftui/view/navigationdestination(for:destination:)) modifier.

On watchOS and tvOS, and with narrow sizes like on iPhone or on iPad in Slide Over, the navigation split view collapses all of its columns into a stack, and shows the last column that displays useful information. For example, the three-column example above shows the list of departments to start, the employees in the department after someone selects a department, and the employee details when someone selects an employee. For rows in a list that have [Navigation Link](/documentation/swiftui/navigationlink) instances, the list draws disclosure chevrons while in the collapsed state.

### Control column visibility

You can programmatically control the visibility of navigation split view columns by creating a [State](/documentation/swiftui/state) value of type [Navigation Split View Visibility](/documentation/swiftui/navigationsplitviewvisibility). Then pass a [Binding](/documentation/swiftui/binding) to that state to the appropriate initializer — such as [init(columnVisibility:sidebar:detail:)](/documentation/swiftui/navigationsplitview/init(columnvisibility:sidebar:detail:)) for two columns, or the [init(columnVisibility:sidebar:content:detail:)](/documentation/swiftui/navigationsplitview/init(columnvisibility:sidebar:content:detail:)) for three columns.

The following code updates the first example above to always hide the first column when the view appears:

```swift
@State private var employeeIds: Set<Employee.ID> = []
@State private var columnVisibility =
    NavigationSplitViewVisibility.detailOnly

var body: some View {
    NavigationSplitView(columnVisibility: $columnVisibility) {
        List(model.employees, selection: $employeeIds) { employee in
            Text(employee.name)
        }
    } detail: {
        EmployeeDetails(for: employeeIds)
    }
}
```

The split view ignores the visibility control when it collapses its columns into a stack.

### Collapsed split views

At narrow size classes, such as on iPhone or Apple Watch, a navigation split view collapses into a single stack. Typically SwiftUI automatically chooses the view to show on top of this single stack, based on the content of the split view’s columns.

For custom navigation experiences, you can provide more information to help SwiftUI choose the right column. Create a `State` value of type [Navigation Split View Column](/documentation/swiftui/navigationsplitviewcolumn). Then pass a `Binding` to that state to the appropriate initializer, such as [init(preferredCompactColumn:sidebar:detail:)](/documentation/swiftui/navigationsplitview/init(preferredcompactcolumn:sidebar:detail:)) or [init(preferredCompactColumn:sidebar:content:detail:)](/documentation/swiftui/navigationsplitview/init(preferredcompactcolumn:sidebar:content:detail:)).

The following code shows the blue detail view when run on iPhone. When the person using the app taps the back button, they’ll see the yellow view. The value of `preferredPreferredCompactColumn` will change from `.detail` to `.sidebar`:

```swift
@State private var preferredColumn =
    NavigationSplitViewColumn.detail

var body: some View {
    NavigationSplitView(preferredCompactColumn: $preferredColumn) {
        Color.yellow
    } detail: {
        Color.blue
    }
}
```

### Customize a split view

To specify a preferred column width in a navigation split view, use the [navigationSplitViewColumnWidth(_:)](/documentation/swiftui/view/navigationsplitviewcolumnwidth(_:)) modifier. To set minimum, maximum, and ideal sizes for a column, use [navigationSplitViewColumnWidth(min:ideal:max:)](/documentation/swiftui/view/navigationsplitviewcolumnwidth(min:ideal:max:)). You can specify a different modifier in each column. The navigation split view does its best to accommodate the preferences that you specify, but might make adjustments based on other constraints.

To specify how columns in a navigation split view interact, use the [navigationSplitViewStyle(_:)](/documentation/swiftui/view/navigationsplitviewstyle(_:)) modifier with a [Navigation Split View Style](/documentation/swiftui/navigationsplitviewstyle) value. For example, you can specify whether to emphasize the detail column or to give all of the columns equal prominence.

On some platforms, `NavigationSplitView` adds a [sidebar Toggle](/documentation/swiftui/toolbardefaultitemkind/sidebartoggle) toolbar item. Use the [toolbar(removing:)](/documentation/swiftui/view/toolbar(removing:)) modifier to remove the default item.

## Conforms To

- [View](/documentation/swiftui/view)

## Creating a navigation split view

- [init(sidebar:detail:)](/documentation/swiftui/navigationsplitview/init(sidebar:detail:)) Creates a two-column navigation split view.
- [init(sidebar:content:detail:)](/documentation/swiftui/navigationsplitview/init(sidebar:content:detail:)) Creates a three-column navigation split view.

## Hiding columns in a navigation split view

- [init(columnVisibility:sidebar:detail:)](/documentation/swiftui/navigationsplitview/init(columnvisibility:sidebar:detail:)) Creates a two-column navigation split view that enables programmatic control of the sidebar’s visibility.
- [init(columnVisibility:sidebar:content:detail:)](/documentation/swiftui/navigationsplitview/init(columnvisibility:sidebar:content:detail:)) Creates a three-column navigation split view that enables programmatic control of leading columns’ visibility.

## Specifying a preferred compact column

- [init(preferredCompactColumn:sidebar:detail:)](/documentation/swiftui/navigationsplitview/init(preferredcompactcolumn:sidebar:detail:)) Creates a two-column navigation split view that enables programmatic control over which column appears on top when the view collapses into a single column in narrow sizes.
- [init(preferredCompactColumn:sidebar:content:detail:)](/documentation/swiftui/navigationsplitview/init(preferredcompactcolumn:sidebar:content:detail:)) Creates a three-column navigation split view that enables programmatic control over which column appears on top when the view collapses into a single column in narrow sizes.

## Specifying a preferred compact column and column visibility

- [init(columnVisibility:preferredCompactColumn:sidebar:detail:)](/documentation/swiftui/navigationsplitview/init(columnvisibility:preferredcompactcolumn:sidebar:detail:)) Creates a two-column navigation split view that enables programmatic control of the sidebar’s visibility in regular sizes and which column appears on top when the view collapses into a single column in narrow sizes.
- [init(columnVisibility:preferredCompactColumn:sidebar:content:detail:)](/documentation/swiftui/navigationsplitview/init(columnvisibility:preferredcompactcolumn:sidebar:content:detail:)) Creates a three-column navigation split view that enables programmatic control of leading columns’ visibility in regular sizes and which column appears on top when the view collapses into a single column in narrow sizes.

## Presenting views in columns

- [Bringing robust navigation structure to your SwiftUI app](/documentation/swiftui/bringing-robust-navigation-structure-to-your-swiftui-app)
- [Migrating to new navigation types](/documentation/swiftui/migrating-to-new-navigation-types)
- [navigationSplitViewStyle(_:)](/documentation/swiftui/view/navigationsplitviewstyle(_:))
- [navigationSplitViewColumnWidth(_:)](/documentation/swiftui/view/navigationsplitviewcolumnwidth(_:))
- [navigationSplitViewColumnWidth(min:ideal:max:)](/documentation/swiftui/view/navigationsplitviewcolumnwidth(min:ideal:max:))
- [NavigationSplitViewVisibility](/documentation/swiftui/navigationsplitviewvisibility)
- [NavigationLink](/documentation/swiftui/navigationlink)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
