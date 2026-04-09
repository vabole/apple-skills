export const APPLE_BASE_URL = "https://developer.apple.com"
export const APPLE_JSON_BASE_URL = "https://developer.apple.com/tutorials/data"
export const DEFAULT_TIMEOUT_MS = Number(process.env.APPLE_DOC_TIMEOUT_MS || 30000)
export const DEFAULT_RETRIES = Number(process.env.APPLE_DOC_RETRIES || 2)

export const USER_AGENT =
  process.env.APPLE_DOC_USER_AGENT ||
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15"

export const TITLE_OVERRIDES: Record<string, string> = {
  appintents: "App Intents",
  appkit: "AppKit",
  backgroundtasks: "BackgroundTasks",
  combine: "Combine",
  corehaptics: "Core Haptics",
  eventkit: "EventKit",
  healthkit: "HealthKit",
  mapkit: "MapKit",
  photosui: "PhotosUI",
  storekit: "StoreKit",
  swiftdata: "SwiftData",
  swiftui: "SwiftUI",
  tipkit: "TipKit",
  uikit: "UIKit",
  usernotifications: "UserNotifications",
  widgetkit: "WidgetKit",
  xctest: "XCTest",
  xcuiautomation: "XCUIAutomation",
}
