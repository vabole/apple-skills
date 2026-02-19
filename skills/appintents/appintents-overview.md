---
title: App Intents
source: https://developer.apple.com/documentation/appintents
timestamp: 2026-02-19T07:56:01.983Z
---

## Essentials

- [App Intents updates](/documentation/updates/appintents)
- [Making actions and content discoverable and widely available](/documentation/appintents/making-actions-and-content-discoverable-and-widely-available)
- [Creating your first app intent](/documentation/appintents/creating-your-first-app-intent)
- [Adopting App Intents to support system experiences](/documentation/appintents/adopting-app-intents-to-support-system-experiences)
- [Accelerating app interactions with App Intents](/documentation/appintents/acceleratingappinteractionswithappintents)

## Siri and Apple Intelligence

- [Integrating actions with Siri and Apple Intelligence](/documentation/appintents/integrating-actions-with-siri-and-apple-intelligence)
- [Making onscreen content available to Siri and Apple Intelligence](/documentation/appintents/making-onscreen-content-available-to-siri-and-apple-intelligence)

### System protocols

- [AppEntityAnnotatable](/documentation/appintents/appentityannotatable)

#### Instance Properties

- [var appEntityIdentifier: EntityIdentifier?](/documentation/appintents/appentityannotatable/appentityidentifier)
- [App intent domains](/documentation/appintents/app-intent-domains)

### Macros

- [macro AppIntent<T>(schema: T)](/documentation/appintents/appintent(schema:))
- [macro AppEntity<T>(schema: T)](/documentation/appintents/appentity(schema:))
- [macro AppEnum<T>(schema: T)](/documentation/appintents/appenum(schema:))

### Books

- [Making ebook actions available to Siri and Apple Intelligence](/documentation/appintents/making-ebook-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.BooksIntent](/documentation/appintents/assistantschemas/booksintent)

#### Instance Properties

- [var navigatePage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/navigatepage)
- [var openBook: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/openbook)
- [var playAudiobook: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/playaudiobook)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/search)
- [var updateCharacterSpacing: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatecharacterspacing)
- [var updateFontSize: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatefontsize)
- [var updateLineSpacing: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatelinespacing)
- [var updateSettings: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatesettings)
- [var updateWordSpacing: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatewordspacing)
- [AssistantSchemas.BooksEntity](/documentation/appintents/assistantschemas/booksentity)

#### Instance Properties

- [var audiobook: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/booksentity/audiobook)
- [var book: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/booksentity/book)
- [var settings: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/booksentity/settings)
- [AssistantSchemas.BooksEnum](/documentation/appintents/assistantschemas/booksenum)

#### Instance Properties

- [var contentType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/contenttype)
- [var font: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/font)
- [var fontSize: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/fontsize)
- [var navigationDirection: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/navigationdirection)
- [var pageNavigationSetting: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/pagenavigationsetting)
- [var relativeCharacterSpacingChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativecharacterspacingchange)
- [var relativeFontChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativefontchange)
- [var relativeLineSpacingChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativelinespacingchange)
- [var relativeWordSpacingChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativewordspacingchange)
- [var theme: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/theme)

### Browser

- [Making browser actions available to Siri and Apple Intelligence](/documentation/appintents/making-browser-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.BrowserIntent](/documentation/appintents/assistantschemas/browserintent)

#### Instance Properties

- [var bookmarkTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/bookmarktab)
- [var bookmarkURL: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/bookmarkurl)
- [var clearHistory: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/clearhistory)
- [var closeTabs: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/closetabs)
- [var closeWindows: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/closewindows)
- [var createTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/createtab)
- [var createWindow: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/createwindow)
- [var deleteBookmarks: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/deletebookmarks)
- [var findOnPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/findonpage)
- [var openBookmark: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/openbookmark)
- [var openURLInTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/openurlintab)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/search)
- [var switchTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/switchtab)
- [AssistantSchemas.BrowserEntity](/documentation/appintents/assistantschemas/browserentity)

#### Instance Properties

- [var bookmark: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/browserentity/bookmark)
- [var tab: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/browserentity/tab)
- [var window: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/browserentity/window)
- [AssistantSchemas.BrowserEnum](/documentation/appintents/assistantschemas/browserenum)

#### Instance Properties

- [var clearHistoryTimeFrame: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/browserenum/clearhistorytimeframe)

### Camera

- [Making camera actions available to Siri and Apple Intelligence](/documentation/appintents/making-camera-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.CameraIntent](/documentation/appintents/assistantschemas/cameraintent)

#### Instance Properties

- [var openInCaptureMode: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/openincapturemode)
- [var setDevice: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/setdevice)
- [var startCapture: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/startcapture)
- [var stopCapture: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/stopcapture)
- [var switchDevice: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/switchdevice)
- [AssistantSchemas.CameraEnum](/documentation/appintents/assistantschemas/cameraenum)

#### Instance Properties

- [var captureDevice: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/cameraenum/capturedevice)
- [var captureDuration: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/cameraenum/captureduration)
- [var captureMode: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/cameraenum/capturemode)

### Document reader

- [Making document reader actions available to Siri and Apple Intelligence](/documentation/appintents/making-document-reader-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.ReaderIntent](/documentation/appintents/assistantschemas/readerintent)

#### Instance Properties

- [var deletePages: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/deletepages)
- [var enhanceDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/enhancedocuments)
- [var insertPages: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/insertpages)
- [var openDocument: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/opendocument)
- [var openPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/openpage)
- [var resizeDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/resizedocuments)
- [var rotateDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/rotatedocuments)
- [var rotatePages: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/rotatepages)
- [var searchDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/searchdocuments)
- [AssistantSchemas.ReaderEntity](/documentation/appintents/assistantschemas/readerentity)

#### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/readerentity/document)
- [var page: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/readerentity/page)
- [AssistantSchemas.ReaderEnum](/documentation/appintents/assistantschemas/readerenum)

#### Instance Properties

- [var documentKind: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/readerenum/documentkind)

### File management

- [Making file management actions available to Siri and Apple Intelligence](/documentation/appintents/making-file-management-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.FilesIntent](/documentation/appintents/assistantschemas/filesintent)

#### Instance Properties

- [var createFolder: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/createfolder)
- [var deleteFiles: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/deletefiles)
- [var moveFiles: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/movefiles)
- [var openFile: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/openfile)
- [var renameFile: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/renamefile)
- [AssistantSchemas.FilesEntity](/documentation/appintents/assistantschemas/filesentity)

#### Instance Properties

- [var file: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/filesentity/file)

### iPhone side button access (only in Japan)

- [Launching your voice-based conversational app from the side button of iPhone](/documentation/appintents/launching-your-voice-based-conversational-app-from-the-side-button-of-iphone)
- [AssistantSchemas.AssistantIntent](/documentation/appintents/assistantschemas/assistantintent)

#### Schemas

- [var activate: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/assistantintent/activate)

### Journaling

- [Making journaling actions available to Siri and Apple Intelligence](/documentation/appintents/making-journaling-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.JournalIntent](/documentation/appintents/assistantschemas/journalintent)

#### Instance Properties

- [var createAudioEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/createaudioentry)
- [var createEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/createentry)
- [var deleteEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/deleteentry)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/search)
- [var updateEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/updateentry)
- [AssistantSchemas.JournalEntity](/documentation/appintents/assistantschemas/journalentity)

#### Instance Properties

- [var entry: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/journalentity/entry)

### Email

- [Making email actions available to Siri and Apple Intelligence](/documentation/appintents/making-email-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.MailIntent](/documentation/appintents/assistantschemas/mailintent)

#### Instance Properties

- [var archiveMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/archivemail)
- [var createDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/createdraft)
- [var deleteDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/deletedraft)
- [var deleteMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/deletemail)
- [var forwardMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/forwardmail)
- [var replyMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/replymail)
- [var saveDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/savedraft)
- [var sendDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/senddraft)
- [var updateDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/updatedraft)
- [var updateMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/updatemail)
- [AssistantSchemas.MailEntity](/documentation/appintents/assistantschemas/mailentity)

#### Instance Properties

- [var account: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/account)
- [var draft: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/draft)
- [var mailbox: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/mailbox)
- [var message: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/message)

### Photos and videos

- [Making photo and video actions available to Siri and Apple Intelligence](/documentation/appintents/making-photo-and-video-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.PhotosIntent](/documentation/appintents/assistantschemas/photosintent)

#### Instance Properties

- [var addAssetsToAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/addassetstoalbum)
- [var cleanupPhoto: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/cleanupphoto)
- [var copyEdits: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/copyedits)
- [var createAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/createalbum)
- [var createAssets: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/createassets)
- [var crop: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/crop)
- [var deleteAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/deletealbum)
- [var deleteAssets: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/deleteassets)
- [var duplicateAssets: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/duplicateassets)
- [var openAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/openalbum)
- [var openAsset: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/openasset)
- [var pasteEdits: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/pasteedits)
- [var postToSharedAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/posttosharedalbum)
- [var removeAssetsFromAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/removeassetsfromalbum)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/search)
- [var setDepth: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setdepth)
- [var setExposure: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setexposure)
- [var setFilter: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setfilter)
- [var setRotation: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setrotation)
- [var setSaturation: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setsaturation)
- [var setWarmth: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setwarmth)
- [var straighten: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/straighten)
- [var toggleDepth: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/toggledepth)
- [var toggleSuggestedEdits: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/togglesuggestededits)
- [var updateAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/updatealbum)
- [var updateAsset: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/updateasset)
- [var updateRecognizedPerson: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/updaterecognizedperson)
- [AssistantSchemas.PhotosEntity](/documentation/appintents/assistantschemas/photosentity)

#### Instance Properties

- [var album: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/photosentity/album)
- [var asset: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/photosentity/asset)
- [var recognizedPerson: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/photosentity/recognizedperson)
- [AssistantSchemas.PhotosEnum](/documentation/appintents/assistantschemas/photosenum)

#### Instance Properties

- [var albumType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/albumtype)
- [var assetType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/assettype)
- [var filterType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/filtertype)
- [var rotationDirection: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/rotationdirection)

### Presentations

- [Making presentation actions available to Siri and Apple Intelligence](/documentation/appintents/making-presentation-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.PresentationIntent](/documentation/appintents/assistantschemas/presentationintent)

#### Instance Properties

- [var addAudioToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addaudiotoslide)
- [var addCommentToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addcommenttoslide)
- [var addImageToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addimagetoslide)
- [var addTextBoxToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addtextboxtoslide)
- [var addVideoToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addvideotoslide)
- [var addWebVideoToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addwebvideotoslide)
- [var create: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/create)
- [var createSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/createslide)
- [var deleteSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/deleteslide)
- [var open: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/open)
- [var openSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/openslide)
- [var setSlideTitle: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/setslidetitle)
- [var startPlayback: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/startplayback)
- [var stopPlayback: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/stopplayback)
- [var update: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/update)
- [AssistantSchemas.PresentationEntity](/documentation/appintents/assistantschemas/presentationentity)

#### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/presentationentity/document)
- [var slide: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/presentationentity/slide)
- [var template: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/presentationentity/template)

### Spreadsheets

- [Making spreadsheet actions available to Siri and Apple Intelligence](/documentation/appintents/making-spreadsheet-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.SpreadsheetIntent](/documentation/appintents/assistantschemas/spreadsheetintent)

#### Instance Properties

- [var addAudioToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addaudiotosheet)
- [var addCommentToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addcommenttosheet)
- [var addImageToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addimagetosheet)
- [var addTextBoxToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addtextboxtosheet)
- [var addVideoToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addvideotosheet)
- [var addWebVideoToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addwebvideotosheet)
- [var create: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/create)
- [var createSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/createsheet)
- [var delete: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/delete)
- [var deleteSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/deletesheet)
- [var open: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/open)
- [var openSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/opensheet)
- [var update: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/update)
- [var updateSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/updatesheet)
- [AssistantSchemas.SpreadsheetEntity](/documentation/appintents/assistantschemas/spreadsheetentity)

#### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/spreadsheetentity/document)
- [var sheet: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/spreadsheetentity/sheet)
- [var template: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/spreadsheetentity/template)

### System and in-app search

- [Making in-app search actions available to Siri and Apple Intelligence](/documentation/appintents/making-in-app-search-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.SystemIntent](/documentation/appintents/assistantschemas/systemintent)

#### Instance Properties

- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/systemintent/search)

### Whiteboard

- [Making whiteboard actions available to Siri and Apple Intelligence](/documentation/appintents/making-whiteboard-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.WhiteboardIntent](/documentation/appintents/assistantschemas/whiteboardintent)

#### Instance Properties

- [var createBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/createboard)
- [var createItem: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/createitem)
- [var deleteBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/deleteboard)
- [var deleteItem: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/deleteitem)
- [var openBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/openboard)
- [var updateBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/updateboard)
- [var updateItem: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/updateitem)
- [AssistantSchemas.WhiteboardEntity](/documentation/appintents/assistantschemas/whiteboardentity)

#### Instance Properties

- [var board: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/whiteboardentity/board)
- [var item: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/whiteboardentity/item)
- [AssistantSchemas.WhiteboardEnum](/documentation/appintents/assistantschemas/whiteboardenum)

#### Instance Properties

- [var color: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/whiteboardenum/color)
- [var itemType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/whiteboardenum/itemtype)

### Word processor and text editing

- [Making word processor actions available to Siri and Apple Intelligence](/documentation/appintents/making-word-processor-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.WordProcessorIntent](/documentation/appintents/assistantschemas/wordprocessorintent)

#### Instance Properties

- [var addAudioToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addaudiotopage)
- [var addImageToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addimagetopage)
- [var addTextBoxToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addtextboxtopage)
- [var addVideoToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addvideotopage)
- [var addWebVideoToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addwebvideotopage)
- [var create: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/create)
- [var createPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/createpage)
- [var open: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/open)
- [var openPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/openpage)
- [AssistantSchemas.WordProcessorEntity](/documentation/appintents/assistantschemas/wordprocessorentity)

#### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/wordprocessorentity/document)
- [var page: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/wordprocessorentity/page)
- [var template: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/wordprocessorentity/template)

### Base protocols

- [Assistant schema base protocols](/documentation/appintents/assistant-schema-base-protocols)

#### Assistant schema protocols

- [AssistantSchemas](/documentation/appintents/assistantschemas)

##### Protocols

- [AssistantSchemas.AssistantIntent](/documentation/appintents/assistantschemas/assistantintent)

###### Schemas

- [var activate: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/assistantintent/activate)
- [AssistantSchemas.BooksEntity](/documentation/appintents/assistantschemas/booksentity)

###### Instance Properties

- [var audiobook: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/booksentity/audiobook)
- [var book: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/booksentity/book)
- [var settings: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/booksentity/settings)
- [AssistantSchemas.BooksEnum](/documentation/appintents/assistantschemas/booksenum)

###### Instance Properties

- [var contentType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/contenttype)
- [var font: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/font)
- [var fontSize: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/fontsize)
- [var navigationDirection: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/navigationdirection)
- [var pageNavigationSetting: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/pagenavigationsetting)
- [var relativeCharacterSpacingChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativecharacterspacingchange)
- [var relativeFontChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativefontchange)
- [var relativeLineSpacingChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativelinespacingchange)
- [var relativeWordSpacingChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativewordspacingchange)
- [var theme: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/theme)
- [AssistantSchemas.BooksIntent](/documentation/appintents/assistantschemas/booksintent)

###### Instance Properties

- [var navigatePage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/navigatepage)
- [var openBook: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/openbook)
- [var playAudiobook: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/playaudiobook)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/search)
- [var updateCharacterSpacing: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatecharacterspacing)
- [var updateFontSize: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatefontsize)
- [var updateLineSpacing: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatelinespacing)
- [var updateSettings: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatesettings)
- [var updateWordSpacing: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatewordspacing)
- [AssistantSchemas.BrowserEntity](/documentation/appintents/assistantschemas/browserentity)

###### Instance Properties

- [var bookmark: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/browserentity/bookmark)
- [var tab: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/browserentity/tab)
- [var window: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/browserentity/window)
- [AssistantSchemas.BrowserEnum](/documentation/appintents/assistantschemas/browserenum)

###### Instance Properties

- [var clearHistoryTimeFrame: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/browserenum/clearhistorytimeframe)
- [AssistantSchemas.BrowserIntent](/documentation/appintents/assistantschemas/browserintent)

###### Instance Properties

- [var bookmarkTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/bookmarktab)
- [var bookmarkURL: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/bookmarkurl)
- [var clearHistory: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/clearhistory)
- [var closeTabs: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/closetabs)
- [var closeWindows: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/closewindows)
- [var createTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/createtab)
- [var createWindow: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/createwindow)
- [var deleteBookmarks: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/deletebookmarks)
- [var findOnPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/findonpage)
- [var openBookmark: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/openbookmark)
- [var openURLInTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/openurlintab)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/search)
- [var switchTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/switchtab)
- [AssistantSchemas.CameraEnum](/documentation/appintents/assistantschemas/cameraenum)

###### Instance Properties

- [var captureDevice: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/cameraenum/capturedevice)
- [var captureDuration: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/cameraenum/captureduration)
- [var captureMode: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/cameraenum/capturemode)
- [AssistantSchemas.CameraIntent](/documentation/appintents/assistantschemas/cameraintent)

###### Instance Properties

- [var openInCaptureMode: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/openincapturemode)
- [var setDevice: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/setdevice)
- [var startCapture: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/startcapture)
- [var stopCapture: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/stopcapture)
- [var switchDevice: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/switchdevice)
- [AssistantSchemas.Entity](/documentation/appintents/assistantschemas/entity)

###### Type Properties

- [static var books: some AssistantSchemas.BooksEntity](/documentation/appintents/assistantschemas/entity/books)
- [static var browser: some AssistantSchemas.BrowserEntity](/documentation/appintents/assistantschemas/entity/browser)
- [static var files: some AssistantSchemas.FilesEntity](/documentation/appintents/assistantschemas/entity/files)
- [static var journal: some AssistantSchemas.JournalEntity](/documentation/appintents/assistantschemas/entity/journal)
- [static var mail: some AssistantSchemas.MailEntity](/documentation/appintents/assistantschemas/entity/mail)
- [static var photos: some AssistantSchemas.PhotosEntity](/documentation/appintents/assistantschemas/entity/photos)
- [static var presentation: some AssistantSchemas.PresentationEntity](/documentation/appintents/assistantschemas/entity/presentation)
- [static var reader: some AssistantSchemas.ReaderEntity](/documentation/appintents/assistantschemas/entity/reader)
- [static var spreadsheet: some AssistantSchemas.SpreadsheetEntity](/documentation/appintents/assistantschemas/entity/spreadsheet)
- [static var whiteboard: some AssistantSchemas.WhiteboardEntity](/documentation/appintents/assistantschemas/entity/whiteboard)
- [static var wordProcessor: some AssistantSchemas.WordProcessorEntity](/documentation/appintents/assistantschemas/entity/wordprocessor)
- [AssistantSchemas.Enum](/documentation/appintents/assistantschemas/enum)

###### Type Properties

- [static var books: some AssistantSchemas.BooksEnum](/documentation/appintents/assistantschemas/enum/books)
- [static var browser: some AssistantSchemas.BrowserEnum](/documentation/appintents/assistantschemas/enum/browser)
- [static var camera: some AssistantSchemas.CameraEnum](/documentation/appintents/assistantschemas/enum/camera)
- [static var photos: some AssistantSchemas.PhotosEnum](/documentation/appintents/assistantschemas/enum/photos)
- [static var reader: some AssistantSchemas.ReaderEnum](/documentation/appintents/assistantschemas/enum/reader)
- [static var whiteboard: some AssistantSchemas.WhiteboardEnum](/documentation/appintents/assistantschemas/enum/whiteboard)
- [AssistantSchemas.FilesEntity](/documentation/appintents/assistantschemas/filesentity)

###### Instance Properties

- [var file: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/filesentity/file)
- [AssistantSchemas.FilesIntent](/documentation/appintents/assistantschemas/filesintent)

###### Instance Properties

- [var createFolder: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/createfolder)
- [var deleteFiles: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/deletefiles)
- [var moveFiles: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/movefiles)
- [var openFile: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/openfile)
- [var renameFile: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/renamefile)
- [AssistantSchemas.Intent](/documentation/appintents/assistantschemas/intent)

###### Type Properties

- [static var assistant: some AssistantSchemas.AssistantIntent](/documentation/appintents/assistantschemas/intent/assistant)
- [static var books: some AssistantSchemas.BooksIntent](/documentation/appintents/assistantschemas/intent/books)
- [static var browser: some AssistantSchemas.BrowserIntent](/documentation/appintents/assistantschemas/intent/browser)
- [static var camera: some AssistantSchemas.CameraIntent](/documentation/appintents/assistantschemas/intent/camera)
- [static var files: some AssistantSchemas.FilesIntent](/documentation/appintents/assistantschemas/intent/files)
- [static var journal: some AssistantSchemas.JournalIntent](/documentation/appintents/assistantschemas/intent/journal)
- [static var mail: some AssistantSchemas.MailIntent](/documentation/appintents/assistantschemas/intent/mail)
- [static var photos: some AssistantSchemas.PhotosIntent](/documentation/appintents/assistantschemas/intent/photos)
- [static var presentation: some AssistantSchemas.PresentationIntent](/documentation/appintents/assistantschemas/intent/presentation)
- [static var reader: some AssistantSchemas.ReaderIntent](/documentation/appintents/assistantschemas/intent/reader)
- [static var spreadsheet: some AssistantSchemas.SpreadsheetIntent](/documentation/appintents/assistantschemas/intent/spreadsheet)
- [static var system: some AssistantSchemas.SystemIntent](/documentation/appintents/assistantschemas/intent/system)
- [static var visualIntelligence: some AssistantSchemas.VisualIntelligenceIntent](/documentation/appintents/assistantschemas/intent/visualintelligence)
- [static var whiteboard: some AssistantSchemas.WhiteboardIntent](/documentation/appintents/assistantschemas/intent/whiteboard)
- [static var wordProcessor: some AssistantSchemas.WordProcessorIntent](/documentation/appintents/assistantschemas/intent/wordprocessor)
- [AssistantSchemas.JournalEntity](/documentation/appintents/assistantschemas/journalentity)

###### Instance Properties

- [var entry: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/journalentity/entry)
- [AssistantSchemas.JournalIntent](/documentation/appintents/assistantschemas/journalintent)

###### Instance Properties

- [var createAudioEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/createaudioentry)
- [var createEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/createentry)
- [var deleteEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/deleteentry)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/search)
- [var updateEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/updateentry)
- [AssistantSchemas.MailEntity](/documentation/appintents/assistantschemas/mailentity)

###### Instance Properties

- [var account: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/account)
- [var draft: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/draft)
- [var mailbox: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/mailbox)
- [var message: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/message)
- [AssistantSchemas.MailIntent](/documentation/appintents/assistantschemas/mailintent)

###### Instance Properties

- [var archiveMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/archivemail)
- [var createDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/createdraft)
- [var deleteDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/deletedraft)
- [var deleteMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/deletemail)
- [var forwardMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/forwardmail)
- [var replyMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/replymail)
- [var saveDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/savedraft)
- [var sendDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/senddraft)
- [var updateDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/updatedraft)
- [var updateMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/updatemail)
- [AssistantSchemas.Model](/documentation/appintents/assistantschemas/model)
- [AssistantSchemas.PhotosEntity](/documentation/appintents/assistantschemas/photosentity)

###### Instance Properties

- [var album: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/photosentity/album)
- [var asset: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/photosentity/asset)
- [var recognizedPerson: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/photosentity/recognizedperson)
- [AssistantSchemas.PhotosEnum](/documentation/appintents/assistantschemas/photosenum)

###### Instance Properties

- [var albumType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/albumtype)
- [var assetType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/assettype)
- [var filterType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/filtertype)
- [var rotationDirection: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/rotationdirection)
- [AssistantSchemas.PhotosIntent](/documentation/appintents/assistantschemas/photosintent)

###### Instance Properties

- [var addAssetsToAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/addassetstoalbum)
- [var cleanupPhoto: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/cleanupphoto)
- [var copyEdits: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/copyedits)
- [var createAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/createalbum)
- [var createAssets: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/createassets)
- [var crop: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/crop)
- [var deleteAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/deletealbum)
- [var deleteAssets: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/deleteassets)
- [var duplicateAssets: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/duplicateassets)
- [var openAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/openalbum)
- [var openAsset: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/openasset)
- [var pasteEdits: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/pasteedits)
- [var postToSharedAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/posttosharedalbum)
- [var removeAssetsFromAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/removeassetsfromalbum)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/search)
- [var setDepth: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setdepth)
- [var setExposure: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setexposure)
- [var setFilter: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setfilter)
- [var setRotation: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setrotation)
- [var setSaturation: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setsaturation)
- [var setWarmth: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setwarmth)
- [var straighten: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/straighten)
- [var toggleDepth: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/toggledepth)
- [var toggleSuggestedEdits: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/togglesuggestededits)
- [var updateAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/updatealbum)
- [var updateAsset: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/updateasset)
- [var updateRecognizedPerson: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/updaterecognizedperson)
- [AssistantSchemas.PresentationEntity](/documentation/appintents/assistantschemas/presentationentity)

###### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/presentationentity/document)
- [var slide: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/presentationentity/slide)
- [var template: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/presentationentity/template)
- [AssistantSchemas.PresentationIntent](/documentation/appintents/assistantschemas/presentationintent)

###### Instance Properties

- [var addAudioToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addaudiotoslide)
- [var addCommentToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addcommenttoslide)
- [var addImageToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addimagetoslide)
- [var addTextBoxToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addtextboxtoslide)
- [var addVideoToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addvideotoslide)
- [var addWebVideoToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addwebvideotoslide)
- [var create: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/create)
- [var createSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/createslide)
- [var deleteSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/deleteslide)
- [var open: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/open)
- [var openSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/openslide)
- [var setSlideTitle: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/setslidetitle)
- [var startPlayback: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/startplayback)
- [var stopPlayback: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/stopplayback)
- [var update: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/update)
- [AssistantSchemas.ReaderEntity](/documentation/appintents/assistantschemas/readerentity)

###### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/readerentity/document)
- [var page: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/readerentity/page)
- [AssistantSchemas.ReaderEnum](/documentation/appintents/assistantschemas/readerenum)

###### Instance Properties

- [var documentKind: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/readerenum/documentkind)
- [AssistantSchemas.ReaderIntent](/documentation/appintents/assistantschemas/readerintent)

###### Instance Properties

- [var deletePages: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/deletepages)
- [var enhanceDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/enhancedocuments)
- [var insertPages: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/insertpages)
- [var openDocument: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/opendocument)
- [var openPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/openpage)
- [var resizeDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/resizedocuments)
- [var rotateDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/rotatedocuments)
- [var rotatePages: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/rotatepages)
- [var searchDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/searchdocuments)
- [AssistantSchemas.SpreadsheetEntity](/documentation/appintents/assistantschemas/spreadsheetentity)

###### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/spreadsheetentity/document)
- [var sheet: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/spreadsheetentity/sheet)
- [var template: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/spreadsheetentity/template)
- [AssistantSchemas.SpreadsheetIntent](/documentation/appintents/assistantschemas/spreadsheetintent)

###### Instance Properties

- [var addAudioToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addaudiotosheet)
- [var addCommentToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addcommenttosheet)
- [var addImageToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addimagetosheet)
- [var addTextBoxToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addtextboxtosheet)
- [var addVideoToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addvideotosheet)
- [var addWebVideoToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addwebvideotosheet)
- [var create: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/create)
- [var createSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/createsheet)
- [var delete: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/delete)
- [var deleteSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/deletesheet)
- [var open: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/open)
- [var openSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/opensheet)
- [var update: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/update)
- [var updateSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/updatesheet)
- [AssistantSchemas.SystemIntent](/documentation/appintents/assistantschemas/systemintent)

###### Instance Properties

- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/systemintent/search)
- [AssistantSchemas.VisualIntelligenceIntent](/documentation/appintents/assistantschemas/visualintelligenceintent)

###### Instance Properties

- [var semanticContentSearch: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/visualintelligenceintent/semanticcontentsearch)
- [AssistantSchemas.WhiteboardEntity](/documentation/appintents/assistantschemas/whiteboardentity)

###### Instance Properties

- [var board: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/whiteboardentity/board)
- [var item: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/whiteboardentity/item)
- [AssistantSchemas.WhiteboardEnum](/documentation/appintents/assistantschemas/whiteboardenum)

###### Instance Properties

- [var color: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/whiteboardenum/color)
- [var itemType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/whiteboardenum/itemtype)
- [AssistantSchemas.WhiteboardIntent](/documentation/appintents/assistantschemas/whiteboardintent)

###### Instance Properties

- [var createBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/createboard)
- [var createItem: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/createitem)
- [var deleteBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/deleteboard)
- [var deleteItem: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/deleteitem)
- [var openBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/openboard)
- [var updateBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/updateboard)
- [var updateItem: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/updateitem)
- [AssistantSchemas.WordProcessorEntity](/documentation/appintents/assistantschemas/wordprocessorentity)

###### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/wordprocessorentity/document)
- [var page: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/wordprocessorentity/page)
- [var template: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/wordprocessorentity/template)
- [AssistantSchemas.WordProcessorIntent](/documentation/appintents/assistantschemas/wordprocessorintent)

###### Instance Properties

- [var addAudioToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addaudiotopage)
- [var addImageToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addimagetopage)
- [var addTextBoxToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addtextboxtopage)
- [var addVideoToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addvideotopage)
- [var addWebVideoToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addwebvideotopage)
- [var create: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/create)
- [var createPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/createpage)
- [var open: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/open)
- [var openPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/openpage)

##### Structures

- [AssistantSchemas.EntitySchema](/documentation/appintents/assistantschemas/entityschema)
- [AssistantSchemas.EnumSchema](/documentation/appintents/assistantschemas/enumschema)
- [AssistantSchemas.IntentSchema](/documentation/appintents/assistantschemas/intentschema)
- [AssistantSchema](/documentation/appintents/assistantschema)

##### Structures

- [AssistantSchema.EntitySchema](/documentation/appintents/assistantschema/entityschema)
- [AssistantSchema.EnumSchema](/documentation/appintents/assistantschema/enumschema)
- [AssistantSchema.IntentSchema](/documentation/appintents/assistantschema/intentschema)

##### Initializers

- [init(some AssistantSchemas.Entity)](/documentation/appintents/assistantschema/init(_:)-8yk4w)
- [init(some AssistantSchemas.Intent)](/documentation/appintents/assistantschema/init(_:)-9exua)
- [init(some AssistantSchemas.Enum)](/documentation/appintents/assistantschema/init(_:)-ym1l)

#### Schema conformance

- [AssistantSchema.IntentSchema](/documentation/appintents/assistantschema/intentschema)
- [AssistantSchema.EntitySchema](/documentation/appintents/assistantschema/entityschema)
- [AssistantSchema.EnumSchema](/documentation/appintents/assistantschema/enumschema)

#### Base protocols

- [AssistantIntent](/documentation/appintents/assistantintent)
- [AssistantSchemaIntent](/documentation/appintents/assistantschemaintent)

##### Type Properties

- [static var isAssistantOnly: Bool](/documentation/appintents/assistantschemaintent/isassistantonly)
- [AssistantEntity](/documentation/appintents/assistantentity)
- [AssistantSchemaEntity](/documentation/appintents/assistantschemaentity)

##### Type Properties

- [static var isAssistantOnly: Bool](/documentation/appintents/assistantschemaentity/isassistantonly)
- [AssistantEnum](/documentation/appintents/assistantenum)
- [AssistantSchemaEnum](/documentation/appintents/assistantschemaenum)

##### Type Properties

- [static var isAssistantOnly: Bool](/documentation/appintents/assistantschemaenum/isassistantonly)

### Deprecated symbols

- [macro AssistantIntent<T>(schema: T)](/documentation/appintents/assistantintent(schema:))
- [macro AssistantEntity<T>(schema: T)](/documentation/appintents/assistantentity(schema:))
- [macro AssistantEnum<T>(schema: T)](/documentation/appintents/assistantenum(schema:))
- [Making your app’s functionality available to Siri](/documentation/appintents/making-your-app-s-functionality-available-to-siri)

## Visual intelligence

- [Integrating your app with visual intelligence](/documentation/visualintelligence/integrating-your-app-with-visual-intelligence)
- [Visual Intelligence](/documentation/visualintelligence)
- [IntentValueQuery](/documentation/appintents/intentvaluequery)

### Associated Types

- [Input](/documentation/appintents/intentvaluequery/input)
- [Result](/documentation/appintents/intentvaluequery/result)
- [ResultValue](/documentation/appintents/intentvaluequery/resultvalue)

### Initializers

- [init()](/documentation/appintents/intentvaluequery/init())

### Instance Methods

- [func values(for: Self.Input) async throws -> Self.Result](/documentation/appintents/intentvaluequery/values(for:))

## Interactive Snippets

- [Displaying static and interactive snippets](/documentation/appintents/displaying-static-and-interactive-snippets)
- [SnippetIntent](/documentation/appintents/snippetintent)

### Default implementation

- [EmptySnippetIntent](/documentation/appintents/emptysnippetintent)

### Type Methods

- [static func reload()](/documentation/appintents/snippetintent/reload())

## Other system experiences

- [Making app entities available in Spotlight](/documentation/appintents/making-app-entities-available-in-spotlight)
- [Focus](/documentation/appintents/focus)

### Focus filters

- [SetFocusFilterIntent](/documentation/appintents/setfocusfilterintent)

#### Getting the current app configuration

- [static var current: Self](/documentation/appintents/setfocusfilterintent/current)
- [static func suggestedFocusFilters(for: FocusFilterSuggestionContext) async -> [Self]](/documentation/appintents/setfocusfilterintent/suggestedfocusfilters(for:))

#### Configuring app context for the Focus

- [var appContext: FocusFilterAppContext](/documentation/appintents/setfocusfilterintent/appcontext)
- [static func invalidateFocusFilterAppContext()](/documentation/appintents/setfocusfilterintent/invalidatefocusfilterappcontext())
- [Defining your app’s Focus filter](/documentation/appintents/defining-your-app-s-focus-filter)
- [FocusFilterAppContext](/documentation/appintents/focusfilterappcontext)

#### Creating the app context

- [init(notificationFilterPredicate: NSPredicate?)](/documentation/appintents/focusfilterappcontext/init(notificationfilterpredicate:))

#### Getting the filter predicate

- [let notificationFilterPredicate: NSPredicate?](/documentation/appintents/focusfilterappcontext/notificationfilterpredicate)

#### Initializers

- [init(notificationFilterPredicate: NSPredicate?, targetContentIdentifierPrefix: String?)](/documentation/appintents/focusfilterappcontext/init(notificationfilterpredicate:targetcontentidentifierprefix:))

#### Instance Properties

- [let targetContentIdentifierPrefix: String?](/documentation/appintents/focusfilterappcontext/targetcontentidentifierprefix)
- [FocusFilterSuggestionContext](/documentation/appintents/focusfiltersuggestioncontext)

### Errors

- [SetFocusFilterIntentError](/documentation/appintents/setfocusfilterintenterror)

#### Getting the error codes

- [case missingParameterValue](/documentation/appintents/setfocusfilterintenterror/missingparametervalue)
- [case notFound](/documentation/appintents/setfocusfilterintenterror/notfound)
- [Action button on iPhone and Apple Watch](/documentation/appintents/actionbutton)

### Responding to the Action button

- [Responding to the Action button on Apple Watch Ultra](/documentation/appintents/actionbuttonarticle)
- [StartWorkoutIntent](/documentation/appintents/startworkoutintent)

#### Creating an intent

- [init(style: Self.WorkoutStyle)](/documentation/appintents/startworkoutintent/init(style:))

#### Defining supported workouts

- [WorkoutStyle](/documentation/appintents/startworkoutintent/workoutstyle-swift.associatedtype)
- [var workoutStyle: Self.WorkoutStyle](/documentation/appintents/startworkoutintent/workoutstyle-swift.property)
- [static var suggestedWorkouts: [Self]](/documentation/appintents/startworkoutintent/suggestedworkouts)
- [static func invalidateSuggestedWorkouts()](/documentation/appintents/startworkoutintent/invalidatesuggestedworkouts())
- [PauseWorkoutIntent](/documentation/appintents/pauseworkoutintent)
- [ResumeWorkoutIntent](/documentation/appintents/resumeworkoutintent)
- [StartDiveIntent](/documentation/appintents/startdiveintent)
- [ConfirmationActionName](/documentation/appintents/confirmationactionname)

#### Type Properties

- [static var add: ConfirmationActionName](/documentation/appintents/confirmationactionname/add)
- [static var addData: ConfirmationActionName](/documentation/appintents/confirmationactionname/adddata)
- [static var book: ConfirmationActionName](/documentation/appintents/confirmationactionname/book)
- [static var buy: ConfirmationActionName](/documentation/appintents/confirmationactionname/buy)
- [static var call: ConfirmationActionName](/documentation/appintents/confirmationactionname/call)
- [static var checkIn: ConfirmationActionName](/documentation/appintents/confirmationactionname/checkin)
- [static var `continue`: ConfirmationActionName](/documentation/appintents/confirmationactionname/continue)
- [static var create: ConfirmationActionName](/documentation/appintents/confirmationactionname/create)
- [static var `do`: ConfirmationActionName](/documentation/appintents/confirmationactionname/do)
- [static var download: ConfirmationActionName](/documentation/appintents/confirmationactionname/download)
- [static var filter: ConfirmationActionName](/documentation/appintents/confirmationactionname/filter)
- [static var find: ConfirmationActionName](/documentation/appintents/confirmationactionname/find)
- [static var get: ConfirmationActionName](/documentation/appintents/confirmationactionname/get)
- [static var go: ConfirmationActionName](/documentation/appintents/confirmationactionname/go)
- [static var log: ConfirmationActionName](/documentation/appintents/confirmationactionname/log)
- [static var open: ConfirmationActionName](/documentation/appintents/confirmationactionname/open)
- [static var order: ConfirmationActionName](/documentation/appintents/confirmationactionname/order)
- [static var pay: ConfirmationActionName](/documentation/appintents/confirmationactionname/pay)
- [static var play: ConfirmationActionName](/documentation/appintents/confirmationactionname/play)
- [static var playSound: ConfirmationActionName](/documentation/appintents/confirmationactionname/playsound)
- [static var post: ConfirmationActionName](/documentation/appintents/confirmationactionname/post)
- [static var request: ConfirmationActionName](/documentation/appintents/confirmationactionname/request)
- [static var run: ConfirmationActionName](/documentation/appintents/confirmationactionname/run)
- [static var search: ConfirmationActionName](/documentation/appintents/confirmationactionname/search)
- [static var send: ConfirmationActionName](/documentation/appintents/confirmationactionname/send)
- [static var set: ConfirmationActionName](/documentation/appintents/confirmationactionname/set)
- [static var share: ConfirmationActionName](/documentation/appintents/confirmationactionname/share)
- [static var start: ConfirmationActionName](/documentation/appintents/confirmationactionname/start)
- [static var startNavigation: ConfirmationActionName](/documentation/appintents/confirmationactionname/startnavigation)
- [static var toggle: ConfirmationActionName](/documentation/appintents/confirmationactionname/toggle)
- [static var turnOff: ConfirmationActionName](/documentation/appintents/confirmationactionname/turnoff)
- [static var turnOn: ConfirmationActionName](/documentation/appintents/confirmationactionname/turnon)
- [static var view: ConfirmationActionName](/documentation/appintents/confirmationactionname/view)

#### Type Methods

- [static func custom(acceptLabel: LocalizedStringResource, acceptAlternatives: [LocalizedStringResource], denyLabel: LocalizedStringResource, denyAlternatives: [LocalizedStringResource], destructive: Bool) -> ConfirmationActionName](/documentation/appintents/confirmationactionname/custom(acceptlabel:acceptalternatives:denylabel:denyalternatives:destructive:))
- [Launching your voice-based conversational app from the side button of iPhone](/documentation/appintents/launching-your-voice-based-conversational-app-from-the-side-button-of-iphone)
- [Developing a WidgetKit strategy](/documentation/widgetkit/developing-a-widgetkit-strategy)

## SiriKit migration

- [Soup Chef with App Intents: Migrating custom intents](/documentation/sirikit/soup-chef-with-app-intents-migrating-custom-intents)

## Actions

- [App intents](/documentation/appintents/app-intents)

### Actions

- [AppIntent](/documentation/appintents/appintent)

#### Creating an app intent

- [init()](/documentation/appintents/appintent/init())

#### Specifying the authentication policy

- [static var authenticationPolicy: IntentAuthenticationPolicy](/documentation/appintents/appintent/authenticationpolicy)
- [IntentAuthenticationPolicy](/documentation/appintents/intentauthenticationpolicy)

##### Authentication policies

- [case alwaysAllowed](/documentation/appintents/intentauthenticationpolicy/alwaysallowed)
- [case requiresAuthentication](/documentation/appintents/intentauthenticationpolicy/requiresauthentication)
- [case requiresLocalDeviceAuthentication](/documentation/appintents/intentauthenticationpolicy/requireslocaldeviceauthentication)

#### Configuring the metadata

- [static var title: LocalizedStringResource](/documentation/appintents/appintent/title)
- [static var description: IntentDescription?](/documentation/appintents/appintent/description)
- [static var openAppWhenRun: Bool](/documentation/appintents/appintent/openappwhenrun)
- [static var isDiscoverable: Bool](/documentation/appintents/appintent/isdiscoverable)

#### Performing the action

- [func perform() async throws -> Self.PerformResult](/documentation/appintents/appintent/perform())
- [var systemContext: IntentSystemContext](/documentation/appintents/appintent/systemcontext)
- [PerformResult](/documentation/appintents/appintent/performresult)

#### Requesting confirmation

- [func requestConfirmation() async throws](/documentation/appintents/appintent/requestconfirmation())
- [func requestConfirmation(conditions: ConfirmationConditions, actionName: ConfirmationActionName, dialog: IntentDialog) async throws](/documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:))
- [func requestConfirmation<Content>(conditions: ConfirmationConditions, actionName: ConfirmationActionName, dialog: IntentDialog?, showDialogAsPrompt: Bool, content: () -> Content) async throws](/documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:showdialogasprompt:content:))
- [func requestConfirmation<Result>(result: Result, confirmationActionName: ConfirmationActionName, showPrompt: Bool) async throws](/documentation/appintents/appintent/requestconfirmation(result:confirmationactionname:showprompt:))
- [func requestConfirmation<Result>(output: Result, confirmationActionName: ConfirmationActionName, showPrompt: Bool) async throws](/documentation/appintents/appintent/requestconfirmation(output:confirmationactionname:showprompt:))

#### Donating the intent to the system

- [func donate() async throws -> IntentDonationIdentifier](/documentation/appintents/appintent/donate()-1e60c)
- [func donate() -> IntentDonationIdentifier](/documentation/appintents/appintent/donate()-jp6k)
- [func donate(result: some IntentResult) async throws -> IntentDonationIdentifier](/documentation/appintents/appintent/donate(result:)-36cia)
- [func donate(result: some IntentResult) -> IntentDonationIdentifier](/documentation/appintents/appintent/donate(result:)-9b25i)
- [func callAsFunction(donate: Bool) async throws -> Self.PerformResult.Value](/documentation/appintents/appintent/callasfunction(donate:)-3qvbt)
- [func callAsFunction(donate: Bool) async throws](/documentation/appintents/appintent/callasfunction(donate:)-7v1om)

#### Summarizing the parameters

- [SummaryContent](/documentation/appintents/appintent/summarycontent)
- [static var parameterSummary: Self.SummaryContent](/documentation/appintents/appintent/parametersummary)
- [static var parameterSummary: some ParameterSummary](/documentation/appintents/appintent/parametersummary-4vgic)
- [ParameterSummaryBuilder](/documentation/appintents/parametersummarybuilder)

##### Type Methods

- [static func buildBlock<Summary>(Summary) -> Summary](/documentation/appintents/parametersummarybuilder/buildblock(_:))
- [static func buildExpression<Summary>(Summary) -> Summary](/documentation/appintents/parametersummarybuilder/buildexpression(_:))
- [AppIntent.Parameter](/documentation/appintents/appintent/parameter)
- [AppIntent.Case](/documentation/appintents/appintent/case)
- [AppIntent.DefaultCase](/documentation/appintents/appintent/defaultcase)
- [AppIntent.Summary](/documentation/appintents/appintent/summary)
- [AppIntent.Switch](/documentation/appintents/appintent/switch)
- [AppIntent.When](/documentation/appintents/appintent/when)

#### Instance Methods

- [func continueInForeground(IntentDialog?, alwaysConfirm: Bool) async throws](/documentation/appintents/appintent/continueinforeground(_:alwaysconfirm:))
- [func needsToContinueInForegroundError(IntentDialog?, alwaysConfirm: Bool) -> AppIntentError](/documentation/appintents/appintent/needstocontinueinforegrounderror(_:alwaysconfirm:))
- [func requestChoice(between: [IntentChoiceOption], dialog: IntentDialog?) async throws -> IntentChoiceOption](/documentation/appintents/appintent/requestchoice(between:dialog:))
- [func requestChoice<Content>(between: [IntentChoiceOption], dialog: IntentDialog?, content: () -> Content) async throws -> IntentChoiceOption](/documentation/appintents/appintent/requestchoice(between:dialog:content:))
- [func requestChoice<Content>(between: [IntentChoiceOption], dialog: IntentDialog?, view: Content) async throws -> IntentChoiceOption](/documentation/appintents/appintent/requestchoice(between:dialog:view:))
- [func requestConfirmation<Snippet>(conditions: ConfirmationConditions, actionName: ConfirmationActionName, dialog: IntentDialog?, showDialogAsPrompt: Bool, snippetIntent: Snippet) async throws](/documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:showdialogasprompt:snippetintent:)-3vewj)
- [func requestConfirmation<Snippet>(conditions: ConfirmationConditions, actionName: ConfirmationActionName, dialog: IntentDialog?, showDialogAsPrompt: Bool, snippetIntent: Snippet) async throws -> Snippet.PerformResult.Value](/documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:showdialogasprompt:snippetintent:)-jxb8)

#### Type Aliases

- [AppIntent.Option](/documentation/appintents/appintent/option)

#### Type Properties

- [static var supportedModes: IntentModes](/documentation/appintents/appintent/supportedmodes)
- [AudioPlaybackIntent](/documentation/appintents/audioplaybackintent)
- [AudioRecordingIntent](/documentation/appintents/audiorecordingintent)
- [AudioStartingIntent](/documentation/appintents/audiostartingintent)
- [CameraCaptureIntent](/documentation/appintents/cameracaptureintent)

#### Associated Types

- [AppContext](/documentation/appintents/cameracaptureintent/appcontext-swift.associatedtype)

#### Type Properties

- [static var appContext: Self.AppContext?](/documentation/appintents/cameracaptureintent/appcontext-swift.type.property)

#### Type Methods

- [static func updateAppContext(Self.AppContext?) async throws](/documentation/appintents/cameracaptureintent/updateappcontext(_:))
- [DeleteIntent](/documentation/appintents/deleteintent)

#### Associated Types

- [Entity](/documentation/appintents/deleteintent/entity)

#### Instance Properties

- [var entities: [Self.Entity]](/documentation/appintents/deleteintent/entities)
- [DeprecatedAppIntent](/documentation/appintents/deprecatedappintent)

#### Associated Types

- [ReplacementIntent](/documentation/appintents/deprecatedappintent/replacementintent)

#### Type Properties

- [static var deprecation: IntentDeprecation<Self.ReplacementIntent>](/documentation/appintents/deprecatedappintent/deprecation)
- [ForegroundContinuableIntent](/documentation/appintents/foregroundcontinuableintent)

#### Instance Methods

- [func needsToContinueInForegroundError(IntentDialog?, continuation: (() async throws -> Void)?) -> AppIntentError](/documentation/appintents/foregroundcontinuableintent/needstocontinueinforegrounderror(_:continuation:))
- [func requestToContinueInForeground<ResultValue>(IntentDialog?, continuation: () async throws -> ResultValue) async throws -> ResultValue](/documentation/appintents/foregroundcontinuableintent/requesttocontinueinforeground(_:continuation:))
- [OpenIntent](/documentation/appintents/openintent)

#### Associated Types

- [Value](/documentation/appintents/openintent/value)

#### Instance Properties

- [var target: Self.Value](/documentation/appintents/openintent/target)
- [OpenURLIntent](/documentation/appintents/openurlintent)

#### Initializers

- [init(URL)](/documentation/appintents/openurlintent/init(_:))
- [init(urlRepresentable: some URLRepresentableEnum) throws](/documentation/appintents/openurlintent/init(urlrepresentable:)-53fa0)
- [init(urlRepresentable: some URLRepresentableEntity) async throws](/documentation/appintents/openurlintent/init(urlrepresentable:)-8r4bl)

#### Instance Properties

- [var $url: IntentParameter<URL>](/documentation/appintents/openurlintent/$url)
- [var url: URL](/documentation/appintents/openurlintent/url)
- [PlayVideoIntent](/documentation/appintents/playvideointent)

#### Instance Properties

- [var term: String](/documentation/appintents/playvideointent/term)

#### Type Properties

- [static var supportedCategories: [VideoCategory]](/documentation/appintents/playvideointent/supportedcategories)
- [ProgressReportingIntent](/documentation/appintents/progressreportingintent)

#### Instance Properties

- [var progress: Progress](/documentation/appintents/progressreportingintent/progress)
- [PushToTalkTransmissionIntent](/documentation/appintents/pushtotalktransmissionintent)
- [URLRepresentableIntent](/documentation/appintents/urlrepresentableintent)

#### Type Aliases

- [URLRepresentableIntent.URLRepresentation](/documentation/appintents/urlrepresentableintent/urlrepresentation-swift.typealias)

#### Type Properties

- [static var urlRepresentation: Self.URLRepresentation](/documentation/appintents/urlrepresentableintent/urlrepresentation-4fzwq)
- [SetValueIntent](/documentation/appintents/setvalueintent)

#### Associated Types

- [ValueType](/documentation/appintents/setvalueintent/valuetype)

#### Instance Properties

- [var value: Self.ValueType](/documentation/appintents/setvalueintent/value)
- [ShowInAppSearchResultsIntent](/documentation/appintents/showinappsearchresultsintent)

#### Scoping the search

- [static var searchScopes: Self.Criteria.SearchScopes](/documentation/appintents/showinappsearchresultsintent/searchscopes)
- [StringSearchScope](/documentation/appintents/stringsearchscope)

##### Search scopes

- [case freeformVideo](/documentation/appintents/stringsearchscope/freeformvideo)
- [case general](/documentation/appintents/stringsearchscope/general)
- [case movies](/documentation/appintents/stringsearchscope/movies)
- [case tv](/documentation/appintents/stringsearchscope/tv)

##### Type Aliases

- [StringSearchScope.Specification](/documentation/appintents/stringsearchscope/specification)
- [StringSearchScope.UnwrappedType](/documentation/appintents/stringsearchscope/unwrappedtype)
- [StringSearchScope.ValueType](/documentation/appintents/stringsearchscope/valuetype)

#### Defining the search criteria

- [var criteria: Self.Criteria](/documentation/appintents/showinappsearchresultsintent/criteria-swift.property)
- [SearchCriteria](/documentation/appintents/searchcriteria)

##### Associated Types

- [SearchScopes](/documentation/appintents/searchcriteria/searchscopes)
- [StringSearchCriteria](/documentation/appintents/stringsearchcriteria)

##### Initializers

- [init(term: String)](/documentation/appintents/stringsearchcriteria/init(term:))

##### Instance Properties

- [var term: String](/documentation/appintents/stringsearchcriteria/term)

##### Type Aliases

- [StringSearchCriteria.Specification](/documentation/appintents/stringsearchcriteria/specification)
- [StringSearchCriteria.UnwrappedType](/documentation/appintents/stringsearchcriteria/unwrappedtype)
- [StringSearchCriteria.ValueType](/documentation/appintents/stringsearchcriteria/valuetype)

##### Type Properties

- [static var defaultResolverSpecification: some ResolverSpecification](/documentation/appintents/stringsearchcriteria/defaultresolverspecification)
- [Criteria](/documentation/appintents/showinappsearchresultsintent/criteria-swift.associatedtype)
- [SystemIntent](/documentation/appintents/systemintent)

### Controls, widgets, and Live Activities

- [ControlConfigurationIntent](/documentation/appintents/controlconfigurationintent)

#### Associated Types

- [NeverResult](/documentation/appintents/controlconfigurationintent/neverresult)
- [LiveActivityStartingIntent](/documentation/appintents/liveactivitystartingintent)
- [LiveActivityIntent](/documentation/appintents/liveactivityintent)
- [WidgetConfigurationIntent](/documentation/appintents/widgetconfigurationintent)

#### Widget families

- [IntentWidgetFamily](/documentation/appintents/intentwidgetfamily)

##### Enumeration Cases

- [case accessoryCircular](/documentation/appintents/intentwidgetfamily/accessorycircular)
- [case accessoryCorner](/documentation/appintents/intentwidgetfamily/accessorycorner)
- [case accessoryInline](/documentation/appintents/intentwidgetfamily/accessoryinline)
- [case accessoryRectangular](/documentation/appintents/intentwidgetfamily/accessoryrectangular)
- [case systemExtraLarge](/documentation/appintents/intentwidgetfamily/systemextralarge)
- [case systemLarge](/documentation/appintents/intentwidgetfamily/systemlarge)
- [case systemMedium](/documentation/appintents/intentwidgetfamily/systemmedium)
- [case systemSmall](/documentation/appintents/intentwidgetfamily/systemsmall)

##### Type Aliases

- [IntentWidgetFamily.Specification](/documentation/appintents/intentwidgetfamily/specification)
- [IntentWidgetFamily.UnwrappedType](/documentation/appintents/intentwidgetfamily/unwrappedtype)
- [IntentWidgetFamily.ValueType](/documentation/appintents/intentwidgetfamily/valuetype)

##### Type Properties

- [static var defaultResolverSpecification: EmptyResolverSpecification<IntentWidgetFamily>](/documentation/appintents/intentwidgetfamily/defaultresolverspecification)

#### Associated Types

- [NeverResult](/documentation/appintents/widgetconfigurationintent/neverresult)

### Siri and Apple Intelligence

- [Integrating actions with Siri and Apple Intelligence](/documentation/appintents/integrating-actions-with-siri-and-apple-intelligence)
- [App intent domains](/documentation/appintents/app-intent-domains)

#### Macros

- [macro AppIntent<T>(schema: T)](/documentation/appintents/appintent(schema:))
- [macro AppEntity<T>(schema: T)](/documentation/appintents/appentity(schema:))
- [macro AppEnum<T>(schema: T)](/documentation/appintents/appenum(schema:))

#### Books

- [Making ebook actions available to Siri and Apple Intelligence](/documentation/appintents/making-ebook-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.BooksIntent](/documentation/appintents/assistantschemas/booksintent)

##### Instance Properties

- [var navigatePage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/navigatepage)
- [var openBook: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/openbook)
- [var playAudiobook: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/playaudiobook)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/search)
- [var updateCharacterSpacing: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatecharacterspacing)
- [var updateFontSize: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatefontsize)
- [var updateLineSpacing: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatelinespacing)
- [var updateSettings: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatesettings)
- [var updateWordSpacing: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatewordspacing)
- [AssistantSchemas.BooksEntity](/documentation/appintents/assistantschemas/booksentity)

##### Instance Properties

- [var audiobook: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/booksentity/audiobook)
- [var book: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/booksentity/book)
- [var settings: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/booksentity/settings)
- [AssistantSchemas.BooksEnum](/documentation/appintents/assistantschemas/booksenum)

##### Instance Properties

- [var contentType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/contenttype)
- [var font: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/font)
- [var fontSize: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/fontsize)
- [var navigationDirection: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/navigationdirection)
- [var pageNavigationSetting: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/pagenavigationsetting)
- [var relativeCharacterSpacingChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativecharacterspacingchange)
- [var relativeFontChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativefontchange)
- [var relativeLineSpacingChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativelinespacingchange)
- [var relativeWordSpacingChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativewordspacingchange)
- [var theme: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/theme)

#### Browser

- [Making browser actions available to Siri and Apple Intelligence](/documentation/appintents/making-browser-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.BrowserIntent](/documentation/appintents/assistantschemas/browserintent)

##### Instance Properties

- [var bookmarkTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/bookmarktab)
- [var bookmarkURL: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/bookmarkurl)
- [var clearHistory: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/clearhistory)
- [var closeTabs: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/closetabs)
- [var closeWindows: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/closewindows)
- [var createTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/createtab)
- [var createWindow: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/createwindow)
- [var deleteBookmarks: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/deletebookmarks)
- [var findOnPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/findonpage)
- [var openBookmark: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/openbookmark)
- [var openURLInTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/openurlintab)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/search)
- [var switchTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/switchtab)
- [AssistantSchemas.BrowserEntity](/documentation/appintents/assistantschemas/browserentity)

##### Instance Properties

- [var bookmark: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/browserentity/bookmark)
- [var tab: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/browserentity/tab)
- [var window: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/browserentity/window)
- [AssistantSchemas.BrowserEnum](/documentation/appintents/assistantschemas/browserenum)

##### Instance Properties

- [var clearHistoryTimeFrame: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/browserenum/clearhistorytimeframe)

#### Camera

- [Making camera actions available to Siri and Apple Intelligence](/documentation/appintents/making-camera-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.CameraIntent](/documentation/appintents/assistantschemas/cameraintent)

##### Instance Properties

- [var openInCaptureMode: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/openincapturemode)
- [var setDevice: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/setdevice)
- [var startCapture: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/startcapture)
- [var stopCapture: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/stopcapture)
- [var switchDevice: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/switchdevice)
- [AssistantSchemas.CameraEnum](/documentation/appintents/assistantschemas/cameraenum)

##### Instance Properties

- [var captureDevice: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/cameraenum/capturedevice)
- [var captureDuration: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/cameraenum/captureduration)
- [var captureMode: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/cameraenum/capturemode)

#### Document reader

- [Making document reader actions available to Siri and Apple Intelligence](/documentation/appintents/making-document-reader-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.ReaderIntent](/documentation/appintents/assistantschemas/readerintent)

##### Instance Properties

- [var deletePages: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/deletepages)
- [var enhanceDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/enhancedocuments)
- [var insertPages: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/insertpages)
- [var openDocument: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/opendocument)
- [var openPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/openpage)
- [var resizeDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/resizedocuments)
- [var rotateDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/rotatedocuments)
- [var rotatePages: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/rotatepages)
- [var searchDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/searchdocuments)
- [AssistantSchemas.ReaderEntity](/documentation/appintents/assistantschemas/readerentity)

##### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/readerentity/document)
- [var page: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/readerentity/page)
- [AssistantSchemas.ReaderEnum](/documentation/appintents/assistantschemas/readerenum)

##### Instance Properties

- [var documentKind: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/readerenum/documentkind)

#### File management

- [Making file management actions available to Siri and Apple Intelligence](/documentation/appintents/making-file-management-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.FilesIntent](/documentation/appintents/assistantschemas/filesintent)

##### Instance Properties

- [var createFolder: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/createfolder)
- [var deleteFiles: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/deletefiles)
- [var moveFiles: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/movefiles)
- [var openFile: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/openfile)
- [var renameFile: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/renamefile)
- [AssistantSchemas.FilesEntity](/documentation/appintents/assistantschemas/filesentity)

##### Instance Properties

- [var file: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/filesentity/file)

#### iPhone side button access (only in Japan)

- [Launching your voice-based conversational app from the side button of iPhone](/documentation/appintents/launching-your-voice-based-conversational-app-from-the-side-button-of-iphone)
- [AssistantSchemas.AssistantIntent](/documentation/appintents/assistantschemas/assistantintent)

##### Schemas

- [var activate: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/assistantintent/activate)

#### Journaling

- [Making journaling actions available to Siri and Apple Intelligence](/documentation/appintents/making-journaling-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.JournalIntent](/documentation/appintents/assistantschemas/journalintent)

##### Instance Properties

- [var createAudioEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/createaudioentry)
- [var createEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/createentry)
- [var deleteEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/deleteentry)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/search)
- [var updateEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/updateentry)
- [AssistantSchemas.JournalEntity](/documentation/appintents/assistantschemas/journalentity)

##### Instance Properties

- [var entry: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/journalentity/entry)

#### Email

- [Making email actions available to Siri and Apple Intelligence](/documentation/appintents/making-email-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.MailIntent](/documentation/appintents/assistantschemas/mailintent)

##### Instance Properties

- [var archiveMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/archivemail)
- [var createDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/createdraft)
- [var deleteDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/deletedraft)
- [var deleteMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/deletemail)
- [var forwardMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/forwardmail)
- [var replyMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/replymail)
- [var saveDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/savedraft)
- [var sendDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/senddraft)
- [var updateDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/updatedraft)
- [var updateMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/updatemail)
- [AssistantSchemas.MailEntity](/documentation/appintents/assistantschemas/mailentity)

##### Instance Properties

- [var account: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/account)
- [var draft: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/draft)
- [var mailbox: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/mailbox)
- [var message: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/message)

#### Photos and videos

- [Making photo and video actions available to Siri and Apple Intelligence](/documentation/appintents/making-photo-and-video-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.PhotosIntent](/documentation/appintents/assistantschemas/photosintent)

##### Instance Properties

- [var addAssetsToAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/addassetstoalbum)
- [var cleanupPhoto: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/cleanupphoto)
- [var copyEdits: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/copyedits)
- [var createAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/createalbum)
- [var createAssets: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/createassets)
- [var crop: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/crop)
- [var deleteAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/deletealbum)
- [var deleteAssets: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/deleteassets)
- [var duplicateAssets: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/duplicateassets)
- [var openAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/openalbum)
- [var openAsset: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/openasset)
- [var pasteEdits: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/pasteedits)
- [var postToSharedAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/posttosharedalbum)
- [var removeAssetsFromAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/removeassetsfromalbum)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/search)
- [var setDepth: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setdepth)
- [var setExposure: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setexposure)
- [var setFilter: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setfilter)
- [var setRotation: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setrotation)
- [var setSaturation: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setsaturation)
- [var setWarmth: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setwarmth)
- [var straighten: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/straighten)
- [var toggleDepth: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/toggledepth)
- [var toggleSuggestedEdits: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/togglesuggestededits)
- [var updateAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/updatealbum)
- [var updateAsset: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/updateasset)
- [var updateRecognizedPerson: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/updaterecognizedperson)
- [AssistantSchemas.PhotosEntity](/documentation/appintents/assistantschemas/photosentity)

##### Instance Properties

- [var album: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/photosentity/album)
- [var asset: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/photosentity/asset)
- [var recognizedPerson: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/photosentity/recognizedperson)
- [AssistantSchemas.PhotosEnum](/documentation/appintents/assistantschemas/photosenum)

##### Instance Properties

- [var albumType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/albumtype)
- [var assetType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/assettype)
- [var filterType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/filtertype)
- [var rotationDirection: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/rotationdirection)

#### Presentations

- [Making presentation actions available to Siri and Apple Intelligence](/documentation/appintents/making-presentation-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.PresentationIntent](/documentation/appintents/assistantschemas/presentationintent)

##### Instance Properties

- [var addAudioToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addaudiotoslide)
- [var addCommentToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addcommenttoslide)
- [var addImageToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addimagetoslide)
- [var addTextBoxToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addtextboxtoslide)
- [var addVideoToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addvideotoslide)
- [var addWebVideoToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addwebvideotoslide)
- [var create: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/create)
- [var createSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/createslide)
- [var deleteSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/deleteslide)
- [var open: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/open)
- [var openSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/openslide)
- [var setSlideTitle: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/setslidetitle)
- [var startPlayback: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/startplayback)
- [var stopPlayback: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/stopplayback)
- [var update: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/update)
- [AssistantSchemas.PresentationEntity](/documentation/appintents/assistantschemas/presentationentity)

##### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/presentationentity/document)
- [var slide: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/presentationentity/slide)
- [var template: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/presentationentity/template)

#### Spreadsheets

- [Making spreadsheet actions available to Siri and Apple Intelligence](/documentation/appintents/making-spreadsheet-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.SpreadsheetIntent](/documentation/appintents/assistantschemas/spreadsheetintent)

##### Instance Properties

- [var addAudioToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addaudiotosheet)
- [var addCommentToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addcommenttosheet)
- [var addImageToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addimagetosheet)
- [var addTextBoxToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addtextboxtosheet)
- [var addVideoToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addvideotosheet)
- [var addWebVideoToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addwebvideotosheet)
- [var create: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/create)
- [var createSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/createsheet)
- [var delete: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/delete)
- [var deleteSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/deletesheet)
- [var open: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/open)
- [var openSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/opensheet)
- [var update: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/update)
- [var updateSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/updatesheet)
- [AssistantSchemas.SpreadsheetEntity](/documentation/appintents/assistantschemas/spreadsheetentity)

##### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/spreadsheetentity/document)
- [var sheet: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/spreadsheetentity/sheet)
- [var template: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/spreadsheetentity/template)

#### System and in-app search

- [Making in-app search actions available to Siri and Apple Intelligence](/documentation/appintents/making-in-app-search-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.SystemIntent](/documentation/appintents/assistantschemas/systemintent)

##### Instance Properties

- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/systemintent/search)

#### Whiteboard

- [Making whiteboard actions available to Siri and Apple Intelligence](/documentation/appintents/making-whiteboard-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.WhiteboardIntent](/documentation/appintents/assistantschemas/whiteboardintent)

##### Instance Properties

- [var createBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/createboard)
- [var createItem: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/createitem)
- [var deleteBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/deleteboard)
- [var deleteItem: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/deleteitem)
- [var openBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/openboard)
- [var updateBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/updateboard)
- [var updateItem: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/updateitem)
- [AssistantSchemas.WhiteboardEntity](/documentation/appintents/assistantschemas/whiteboardentity)

##### Instance Properties

- [var board: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/whiteboardentity/board)
- [var item: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/whiteboardentity/item)
- [AssistantSchemas.WhiteboardEnum](/documentation/appintents/assistantschemas/whiteboardenum)

##### Instance Properties

- [var color: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/whiteboardenum/color)
- [var itemType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/whiteboardenum/itemtype)

#### Word processor and text editing

- [Making word processor actions available to Siri and Apple Intelligence](/documentation/appintents/making-word-processor-actions-available-to-siri-and-apple-intelligence)
- [AssistantSchemas.WordProcessorIntent](/documentation/appintents/assistantschemas/wordprocessorintent)

##### Instance Properties

- [var addAudioToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addaudiotopage)
- [var addImageToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addimagetopage)
- [var addTextBoxToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addtextboxtopage)
- [var addVideoToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addvideotopage)
- [var addWebVideoToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addwebvideotopage)
- [var create: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/create)
- [var createPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/createpage)
- [var open: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/open)
- [var openPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/openpage)
- [AssistantSchemas.WordProcessorEntity](/documentation/appintents/assistantschemas/wordprocessorentity)

##### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/wordprocessorentity/document)
- [var page: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/wordprocessorentity/page)
- [var template: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/wordprocessorentity/template)

#### Base protocols

- [Assistant schema base protocols](/documentation/appintents/assistant-schema-base-protocols)

##### Assistant schema protocols

- [AssistantSchemas](/documentation/appintents/assistantschemas)

###### Protocols

- [AssistantSchemas.AssistantIntent](/documentation/appintents/assistantschemas/assistantintent)

###### Schemas

- [var activate: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/assistantintent/activate)
- [AssistantSchemas.BooksEntity](/documentation/appintents/assistantschemas/booksentity)

###### Instance Properties

- [var audiobook: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/booksentity/audiobook)
- [var book: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/booksentity/book)
- [var settings: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/booksentity/settings)
- [AssistantSchemas.BooksEnum](/documentation/appintents/assistantschemas/booksenum)

###### Instance Properties

- [var contentType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/contenttype)
- [var font: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/font)
- [var fontSize: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/fontsize)
- [var navigationDirection: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/navigationdirection)
- [var pageNavigationSetting: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/pagenavigationsetting)
- [var relativeCharacterSpacingChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativecharacterspacingchange)
- [var relativeFontChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativefontchange)
- [var relativeLineSpacingChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativelinespacingchange)
- [var relativeWordSpacingChange: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/relativewordspacingchange)
- [var theme: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/booksenum/theme)
- [AssistantSchemas.BooksIntent](/documentation/appintents/assistantschemas/booksintent)

###### Instance Properties

- [var navigatePage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/navigatepage)
- [var openBook: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/openbook)
- [var playAudiobook: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/playaudiobook)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/search)
- [var updateCharacterSpacing: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatecharacterspacing)
- [var updateFontSize: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatefontsize)
- [var updateLineSpacing: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatelinespacing)
- [var updateSettings: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatesettings)
- [var updateWordSpacing: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/booksintent/updatewordspacing)
- [AssistantSchemas.BrowserEntity](/documentation/appintents/assistantschemas/browserentity)

###### Instance Properties

- [var bookmark: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/browserentity/bookmark)
- [var tab: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/browserentity/tab)
- [var window: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/browserentity/window)
- [AssistantSchemas.BrowserEnum](/documentation/appintents/assistantschemas/browserenum)

###### Instance Properties

- [var clearHistoryTimeFrame: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/browserenum/clearhistorytimeframe)
- [AssistantSchemas.BrowserIntent](/documentation/appintents/assistantschemas/browserintent)

###### Instance Properties

- [var bookmarkTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/bookmarktab)
- [var bookmarkURL: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/bookmarkurl)
- [var clearHistory: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/clearhistory)
- [var closeTabs: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/closetabs)
- [var closeWindows: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/closewindows)
- [var createTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/createtab)
- [var createWindow: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/createwindow)
- [var deleteBookmarks: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/deletebookmarks)
- [var findOnPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/findonpage)
- [var openBookmark: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/openbookmark)
- [var openURLInTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/openurlintab)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/search)
- [var switchTab: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/browserintent/switchtab)
- [AssistantSchemas.CameraEnum](/documentation/appintents/assistantschemas/cameraenum)

###### Instance Properties

- [var captureDevice: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/cameraenum/capturedevice)
- [var captureDuration: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/cameraenum/captureduration)
- [var captureMode: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/cameraenum/capturemode)
- [AssistantSchemas.CameraIntent](/documentation/appintents/assistantschemas/cameraintent)

###### Instance Properties

- [var openInCaptureMode: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/openincapturemode)
- [var setDevice: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/setdevice)
- [var startCapture: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/startcapture)
- [var stopCapture: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/stopcapture)
- [var switchDevice: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/cameraintent/switchdevice)
- [AssistantSchemas.Entity](/documentation/appintents/assistantschemas/entity)

###### Type Properties

- [static var books: some AssistantSchemas.BooksEntity](/documentation/appintents/assistantschemas/entity/books)
- [static var browser: some AssistantSchemas.BrowserEntity](/documentation/appintents/assistantschemas/entity/browser)
- [static var files: some AssistantSchemas.FilesEntity](/documentation/appintents/assistantschemas/entity/files)
- [static var journal: some AssistantSchemas.JournalEntity](/documentation/appintents/assistantschemas/entity/journal)
- [static var mail: some AssistantSchemas.MailEntity](/documentation/appintents/assistantschemas/entity/mail)
- [static var photos: some AssistantSchemas.PhotosEntity](/documentation/appintents/assistantschemas/entity/photos)
- [static var presentation: some AssistantSchemas.PresentationEntity](/documentation/appintents/assistantschemas/entity/presentation)
- [static var reader: some AssistantSchemas.ReaderEntity](/documentation/appintents/assistantschemas/entity/reader)
- [static var spreadsheet: some AssistantSchemas.SpreadsheetEntity](/documentation/appintents/assistantschemas/entity/spreadsheet)
- [static var whiteboard: some AssistantSchemas.WhiteboardEntity](/documentation/appintents/assistantschemas/entity/whiteboard)
- [static var wordProcessor: some AssistantSchemas.WordProcessorEntity](/documentation/appintents/assistantschemas/entity/wordprocessor)
- [AssistantSchemas.Enum](/documentation/appintents/assistantschemas/enum)

###### Type Properties

- [static var books: some AssistantSchemas.BooksEnum](/documentation/appintents/assistantschemas/enum/books)
- [static var browser: some AssistantSchemas.BrowserEnum](/documentation/appintents/assistantschemas/enum/browser)
- [static var camera: some AssistantSchemas.CameraEnum](/documentation/appintents/assistantschemas/enum/camera)
- [static var photos: some AssistantSchemas.PhotosEnum](/documentation/appintents/assistantschemas/enum/photos)
- [static var reader: some AssistantSchemas.ReaderEnum](/documentation/appintents/assistantschemas/enum/reader)
- [static var whiteboard: some AssistantSchemas.WhiteboardEnum](/documentation/appintents/assistantschemas/enum/whiteboard)
- [AssistantSchemas.FilesEntity](/documentation/appintents/assistantschemas/filesentity)

###### Instance Properties

- [var file: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/filesentity/file)
- [AssistantSchemas.FilesIntent](/documentation/appintents/assistantschemas/filesintent)

###### Instance Properties

- [var createFolder: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/createfolder)
- [var deleteFiles: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/deletefiles)
- [var moveFiles: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/movefiles)
- [var openFile: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/openfile)
- [var renameFile: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/filesintent/renamefile)
- [AssistantSchemas.Intent](/documentation/appintents/assistantschemas/intent)

###### Type Properties

- [static var assistant: some AssistantSchemas.AssistantIntent](/documentation/appintents/assistantschemas/intent/assistant)
- [static var books: some AssistantSchemas.BooksIntent](/documentation/appintents/assistantschemas/intent/books)
- [static var browser: some AssistantSchemas.BrowserIntent](/documentation/appintents/assistantschemas/intent/browser)
- [static var camera: some AssistantSchemas.CameraIntent](/documentation/appintents/assistantschemas/intent/camera)
- [static var files: some AssistantSchemas.FilesIntent](/documentation/appintents/assistantschemas/intent/files)
- [static var journal: some AssistantSchemas.JournalIntent](/documentation/appintents/assistantschemas/intent/journal)
- [static var mail: some AssistantSchemas.MailIntent](/documentation/appintents/assistantschemas/intent/mail)
- [static var photos: some AssistantSchemas.PhotosIntent](/documentation/appintents/assistantschemas/intent/photos)
- [static var presentation: some AssistantSchemas.PresentationIntent](/documentation/appintents/assistantschemas/intent/presentation)
- [static var reader: some AssistantSchemas.ReaderIntent](/documentation/appintents/assistantschemas/intent/reader)
- [static var spreadsheet: some AssistantSchemas.SpreadsheetIntent](/documentation/appintents/assistantschemas/intent/spreadsheet)
- [static var system: some AssistantSchemas.SystemIntent](/documentation/appintents/assistantschemas/intent/system)
- [static var visualIntelligence: some AssistantSchemas.VisualIntelligenceIntent](/documentation/appintents/assistantschemas/intent/visualintelligence)
- [static var whiteboard: some AssistantSchemas.WhiteboardIntent](/documentation/appintents/assistantschemas/intent/whiteboard)
- [static var wordProcessor: some AssistantSchemas.WordProcessorIntent](/documentation/appintents/assistantschemas/intent/wordprocessor)
- [AssistantSchemas.JournalEntity](/documentation/appintents/assistantschemas/journalentity)

###### Instance Properties

- [var entry: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/journalentity/entry)
- [AssistantSchemas.JournalIntent](/documentation/appintents/assistantschemas/journalintent)

###### Instance Properties

- [var createAudioEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/createaudioentry)
- [var createEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/createentry)
- [var deleteEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/deleteentry)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/search)
- [var updateEntry: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/journalintent/updateentry)
- [AssistantSchemas.MailEntity](/documentation/appintents/assistantschemas/mailentity)

###### Instance Properties

- [var account: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/account)
- [var draft: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/draft)
- [var mailbox: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/mailbox)
- [var message: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/mailentity/message)
- [AssistantSchemas.MailIntent](/documentation/appintents/assistantschemas/mailintent)

###### Instance Properties

- [var archiveMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/archivemail)
- [var createDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/createdraft)
- [var deleteDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/deletedraft)
- [var deleteMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/deletemail)
- [var forwardMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/forwardmail)
- [var replyMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/replymail)
- [var saveDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/savedraft)
- [var sendDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/senddraft)
- [var updateDraft: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/updatedraft)
- [var updateMail: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/mailintent/updatemail)
- [AssistantSchemas.Model](/documentation/appintents/assistantschemas/model)
- [AssistantSchemas.PhotosEntity](/documentation/appintents/assistantschemas/photosentity)

###### Instance Properties

- [var album: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/photosentity/album)
- [var asset: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/photosentity/asset)
- [var recognizedPerson: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/photosentity/recognizedperson)
- [AssistantSchemas.PhotosEnum](/documentation/appintents/assistantschemas/photosenum)

###### Instance Properties

- [var albumType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/albumtype)
- [var assetType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/assettype)
- [var filterType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/filtertype)
- [var rotationDirection: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/photosenum/rotationdirection)
- [AssistantSchemas.PhotosIntent](/documentation/appintents/assistantschemas/photosintent)

###### Instance Properties

- [var addAssetsToAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/addassetstoalbum)
- [var cleanupPhoto: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/cleanupphoto)
- [var copyEdits: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/copyedits)
- [var createAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/createalbum)
- [var createAssets: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/createassets)
- [var crop: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/crop)
- [var deleteAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/deletealbum)
- [var deleteAssets: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/deleteassets)
- [var duplicateAssets: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/duplicateassets)
- [var openAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/openalbum)
- [var openAsset: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/openasset)
- [var pasteEdits: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/pasteedits)
- [var postToSharedAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/posttosharedalbum)
- [var removeAssetsFromAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/removeassetsfromalbum)
- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/search)
- [var setDepth: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setdepth)
- [var setExposure: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setexposure)
- [var setFilter: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setfilter)
- [var setRotation: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setrotation)
- [var setSaturation: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setsaturation)
- [var setWarmth: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/setwarmth)
- [var straighten: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/straighten)
- [var toggleDepth: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/toggledepth)
- [var toggleSuggestedEdits: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/togglesuggestededits)
- [var updateAlbum: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/updatealbum)
- [var updateAsset: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/updateasset)
- [var updateRecognizedPerson: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/photosintent/updaterecognizedperson)
- [AssistantSchemas.PresentationEntity](/documentation/appintents/assistantschemas/presentationentity)

###### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/presentationentity/document)
- [var slide: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/presentationentity/slide)
- [var template: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/presentationentity/template)
- [AssistantSchemas.PresentationIntent](/documentation/appintents/assistantschemas/presentationintent)

###### Instance Properties

- [var addAudioToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addaudiotoslide)
- [var addCommentToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addcommenttoslide)
- [var addImageToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addimagetoslide)
- [var addTextBoxToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addtextboxtoslide)
- [var addVideoToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addvideotoslide)
- [var addWebVideoToSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/addwebvideotoslide)
- [var create: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/create)
- [var createSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/createslide)
- [var deleteSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/deleteslide)
- [var open: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/open)
- [var openSlide: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/openslide)
- [var setSlideTitle: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/setslidetitle)
- [var startPlayback: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/startplayback)
- [var stopPlayback: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/stopplayback)
- [var update: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/presentationintent/update)
- [AssistantSchemas.ReaderEntity](/documentation/appintents/assistantschemas/readerentity)

###### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/readerentity/document)
- [var page: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/readerentity/page)
- [AssistantSchemas.ReaderEnum](/documentation/appintents/assistantschemas/readerenum)

###### Instance Properties

- [var documentKind: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/readerenum/documentkind)
- [AssistantSchemas.ReaderIntent](/documentation/appintents/assistantschemas/readerintent)

###### Instance Properties

- [var deletePages: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/deletepages)
- [var enhanceDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/enhancedocuments)
- [var insertPages: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/insertpages)
- [var openDocument: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/opendocument)
- [var openPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/openpage)
- [var resizeDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/resizedocuments)
- [var rotateDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/rotatedocuments)
- [var rotatePages: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/rotatepages)
- [var searchDocuments: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/readerintent/searchdocuments)
- [AssistantSchemas.SpreadsheetEntity](/documentation/appintents/assistantschemas/spreadsheetentity)

###### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/spreadsheetentity/document)
- [var sheet: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/spreadsheetentity/sheet)
- [var template: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/spreadsheetentity/template)
- [AssistantSchemas.SpreadsheetIntent](/documentation/appintents/assistantschemas/spreadsheetintent)

###### Instance Properties

- [var addAudioToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addaudiotosheet)
- [var addCommentToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addcommenttosheet)
- [var addImageToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addimagetosheet)
- [var addTextBoxToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addtextboxtosheet)
- [var addVideoToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addvideotosheet)
- [var addWebVideoToSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/addwebvideotosheet)
- [var create: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/create)
- [var createSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/createsheet)
- [var delete: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/delete)
- [var deleteSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/deletesheet)
- [var open: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/open)
- [var openSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/opensheet)
- [var update: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/update)
- [var updateSheet: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/spreadsheetintent/updatesheet)
- [AssistantSchemas.SystemIntent](/documentation/appintents/assistantschemas/systemintent)

###### Instance Properties

- [var search: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/systemintent/search)
- [AssistantSchemas.VisualIntelligenceIntent](/documentation/appintents/assistantschemas/visualintelligenceintent)

###### Instance Properties

- [var semanticContentSearch: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/visualintelligenceintent/semanticcontentsearch)
- [AssistantSchemas.WhiteboardEntity](/documentation/appintents/assistantschemas/whiteboardentity)

###### Instance Properties

- [var board: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/whiteboardentity/board)
- [var item: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/whiteboardentity/item)
- [AssistantSchemas.WhiteboardEnum](/documentation/appintents/assistantschemas/whiteboardenum)

###### Instance Properties

- [var color: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/whiteboardenum/color)
- [var itemType: some AssistantSchemas.Enum](/documentation/appintents/assistantschemas/whiteboardenum/itemtype)
- [AssistantSchemas.WhiteboardIntent](/documentation/appintents/assistantschemas/whiteboardintent)

###### Instance Properties

- [var createBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/createboard)
- [var createItem: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/createitem)
- [var deleteBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/deleteboard)
- [var deleteItem: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/deleteitem)
- [var openBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/openboard)
- [var updateBoard: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/updateboard)
- [var updateItem: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/whiteboardintent/updateitem)
- [AssistantSchemas.WordProcessorEntity](/documentation/appintents/assistantschemas/wordprocessorentity)

###### Instance Properties

- [var document: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/wordprocessorentity/document)
- [var page: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/wordprocessorentity/page)
- [var template: some AssistantSchemas.Entity](/documentation/appintents/assistantschemas/wordprocessorentity/template)
- [AssistantSchemas.WordProcessorIntent](/documentation/appintents/assistantschemas/wordprocessorintent)

###### Instance Properties

- [var addAudioToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addaudiotopage)
- [var addImageToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addimagetopage)
- [var addTextBoxToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addtextboxtopage)
- [var addVideoToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addvideotopage)
- [var addWebVideoToPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/addwebvideotopage)
- [var create: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/create)
- [var createPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/createpage)
- [var open: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/open)
- [var openPage: some AssistantSchemas.Intent](/documentation/appintents/assistantschemas/wordprocessorintent/openpage)

###### Structures

- [AssistantSchemas.EntitySchema](/documentation/appintents/assistantschemas/entityschema)
- [AssistantSchemas.EnumSchema](/documentation/appintents/assistantschemas/enumschema)
- [AssistantSchemas.IntentSchema](/documentation/appintents/assistantschemas/intentschema)
- [AssistantSchema](/documentation/appintents/assistantschema)

###### Structures

- [AssistantSchema.EntitySchema](/documentation/appintents/assistantschema/entityschema)
- [AssistantSchema.EnumSchema](/documentation/appintents/assistantschema/enumschema)
- [AssistantSchema.IntentSchema](/documentation/appintents/assistantschema/intentschema)

###### Initializers

- [init(some AssistantSchemas.Entity)](/documentation/appintents/assistantschema/init(_:)-8yk4w)
- [init(some AssistantSchemas.Intent)](/documentation/appintents/assistantschema/init(_:)-9exua)
- [init(some AssistantSchemas.Enum)](/documentation/appintents/assistantschema/init(_:)-ym1l)

##### Schema conformance

- [AssistantSchema.IntentSchema](/documentation/appintents/assistantschema/intentschema)
- [AssistantSchema.EntitySchema](/documentation/appintents/assistantschema/entityschema)
- [AssistantSchema.EnumSchema](/documentation/appintents/assistantschema/enumschema)

##### Base protocols

- [AssistantIntent](/documentation/appintents/assistantintent)
- [AssistantSchemaIntent](/documentation/appintents/assistantschemaintent)

###### Type Properties

- [static var isAssistantOnly: Bool](/documentation/appintents/assistantschemaintent/isassistantonly)
- [AssistantEntity](/documentation/appintents/assistantentity)
- [AssistantSchemaEntity](/documentation/appintents/assistantschemaentity)

###### Type Properties

- [static var isAssistantOnly: Bool](/documentation/appintents/assistantschemaentity/isassistantonly)
- [AssistantEnum](/documentation/appintents/assistantenum)
- [AssistantSchemaEnum](/documentation/appintents/assistantschemaenum)

###### Type Properties

- [static var isAssistantOnly: Bool](/documentation/appintents/assistantschemaenum/isassistantonly)

#### Deprecated symbols

- [macro AssistantIntent<T>(schema: T)](/documentation/appintents/assistantintent(schema:))
- [macro AssistantEntity<T>(schema: T)](/documentation/appintents/assistantentity(schema:))
- [macro AssistantEnum<T>(schema: T)](/documentation/appintents/assistantenum(schema:))

### SiriKit intent migration

- [CustomIntentMigratedAppIntent](/documentation/appintents/customintentmigratedappintent)

#### Specifying the migrated intent’s class name

- [static var intentClassName: String](/documentation/appintents/customintentmigratedappintent/intentclassname)

### Dependency management

- [AppDependencyManager](/documentation/appintents/appdependencymanager)

#### Initializers

- [init()](/documentation/appintents/appdependencymanager/init())

#### Instance Methods

- [func add<Dependency>(key: AnyHashable?, dependency: @autoclosure () -> () throws -> Dependency)](/documentation/appintents/appdependencymanager/add(key:dependency:)-1hqkg)
- [func add<Dependency>(key: AnyHashable?, dependency: @autoclosure () -> Dependency)](/documentation/appintents/appdependencymanager/add(key:dependency:)-2le3x)
- [func add<Dependency>(key: AnyHashable?, dependency: () async throws -> Dependency)](/documentation/appintents/appdependencymanager/add(key:dependency:)-gth5)

#### Type Properties

- [static var shared: AppDependencyManager](/documentation/appintents/appdependencymanager/shared)

#### Enumerations

- [AppDependencyManager.Error](/documentation/appintents/appdependencymanager/error)

##### Enumeration Cases

- [case failedToLoadDependency(AnyHashable, Value.Type)](/documentation/appintents/appdependencymanager/error/failedtoloaddependency(_:_:))
- [case failedToRetrieveDependency(AnyHashable, Value.Type)](/documentation/appintents/appdependencymanager/error/failedtoretrievedependency(_:_:))
- [case incorrectDependencyType(AnyHashable, Value.Type, any Any.Type)](/documentation/appintents/appdependencymanager/error/incorrectdependencytype(_:_:_:))
- [AppDependency](/documentation/appintents/appdependency)

#### Initializers

- [convenience init(key: AnyHashable?, manager: AppDependencyManager)](/documentation/appintents/appdependency/init(key:manager:))
- [convenience init(key: AnyHashable?, manager: AppDependencyManager, default: () async throws -> Value)](/documentation/appintents/appdependency/init(key:manager:default:)-226je)
- [convenience init(key: AnyHashable?, manager: AppDependencyManager, default: @autoclosure () -> Value)](/documentation/appintents/appdependency/init(key:manager:default:)-wvhz)

#### Instance Properties

- [var projectedValue: AppDependency<Value>](/documentation/appintents/appdependency/projectedvalue)
- [var wrappedValue: Value](/documentation/appintents/appdependency/wrappedvalue)

### Supplementary content

- [AppIntentsPackage](/documentation/appintents/appintentspackage)

#### Type Properties

- [static var includedPackages: [any AppIntentsPackage.Type]](/documentation/appintents/appintentspackage/includedpackages)
- [IntentDescription](/documentation/appintents/intentdescription)

#### Creating a description

- [init(LocalizedStringResource, categoryName: LocalizedStringResource?, searchKeywords: [LocalizedStringResource])](/documentation/appintents/intentdescription/init(_:categoryname:searchkeywords:))

#### Initializers

- [init(LocalizedStringResource, categoryName: LocalizedStringResource?, searchKeywords: [LocalizedStringResource], resultValueName: LocalizedStringResource?)](/documentation/appintents/intentdescription/init(_:categoryname:searchkeywords:resultvaluename:))

#### Instance Properties

- [var categoryName: LocalizedStringResource?](/documentation/appintents/intentdescription/categoryname)
- [var descriptionText: LocalizedStringResource](/documentation/appintents/intentdescription/descriptiontext)
- [var resultValueName: LocalizedStringResource?](/documentation/appintents/intentdescription/resultvaluename)
- [var searchKeywords: [LocalizedStringResource]](/documentation/appintents/intentdescription/searchkeywords)
- [IntentDialog](/documentation/appintents/intentdialog)

#### Creating a dialog

- [init(LocalizedStringResource)](/documentation/appintents/intentdialog/init(_:))
- [init(full: LocalizedStringResource, supporting: LocalizedStringResource)](/documentation/appintents/intentdialog/init(full:supporting:))
- [init(full: LocalizedStringResource, systemImageName: String)](/documentation/appintents/intentdialog/init(full:systemimagename:))
- [init(full: LocalizedStringResource, supporting: LocalizedStringResource, systemImageName: String)](/documentation/appintents/intentdialog/init(full:supporting:systemimagename:))
- [IntentDeprecation](/documentation/appintents/intentdeprecation)

#### Initializers

- [init(message: LocalizedStringResource)](/documentation/appintents/intentdeprecation/init(message:))
- [init(message: LocalizedStringResource, replacedBy: ReplacementIntent.Type?)](/documentation/appintents/intentdeprecation/init(message:replacedby:))
- [init(replacedBy: ReplacementIntent.Type)](/documentation/appintents/intentdeprecation/init(replacedby:))

#### Instance Properties

- [var message: LocalizedStringResource](/documentation/appintents/intentdeprecation/message)
- [var replacedBy: ReplacementIntent.Type?](/documentation/appintents/intentdeprecation/replacedby)
- [IntentProjection](/documentation/appintents/intentprojection)

#### Subscripts

- [subscript<Value>(dynamicMember _: KeyPath<Intent, Value>) -> Value.UnwrappedType](/documentation/appintents/intentprojection/subscript(dynamicmember:))
- [IntentSystemContext](/documentation/appintents/intentsystemcontext)

#### Instance Properties

- [var currentMode: IntentModes.Current](/documentation/appintents/intentsystemcontext/currentmode)
- [var preciseTimestamp: Date?](/documentation/appintents/intentsystemcontext/precisetimestamp)

### Results

- [IntentResult](/documentation/appintents/intentresult)

#### Getting the result value

- [var value: Self.Value?](/documentation/appintents/intentresult/value-swift.property)

#### Communicating the result to the user

- [Dialog](/documentation/appintents/intentresult/dialog)

#### Associated Types

- [OpensAppIntent](/documentation/appintents/intentresult/opensappintent)
- [Snippet](/documentation/appintents/intentresult/snippet)
- [Value](/documentation/appintents/intentresult/value-swift.associatedtype)

#### Type Methods

- [static func result() -> Self](/documentation/appintents/intentresult/result())
- [static func result<Intent>(actionButtonIntent: Intent) -> Self](/documentation/appintents/intentresult/result(actionbuttonintent:))
- [static func result<Intent>(actionButtonIntent: Intent, activityIdentifier: String) -> Self](/documentation/appintents/intentresult/result(actionbuttonintent:activityidentifier:))
- [static func result<Intent>(actionButtonIntent: Intent, activityIdentifier: String, dialog: IntentDialog) -> Self](/documentation/appintents/intentresult/result(actionbuttonintent:activityidentifier:dialog:))
- [static func result<Intent>(actionButtonIntent: Intent, dialog: IntentDialog) -> Self](/documentation/appintents/intentresult/result(actionbuttonintent:dialog:))
- [static func result<Content>(content: () -> Content) -> Self](/documentation/appintents/intentresult/result(content:))
- [static func result(dialog: IntentDialog) -> Self](/documentation/appintents/intentresult/result(dialog:))
- [static func result<Content>(dialog: IntentDialog, content: () -> Content) -> Self](/documentation/appintents/intentresult/result(dialog:content:))
- [static func result(dialog: IntentDialog, snippetIntent: some SnippetIntent) -> Self](/documentation/appintents/intentresult/result(dialog:snippetintent:))
- [static func result<Content>(dialog: IntentDialog, view: Content) -> Self](/documentation/appintents/intentresult/result(dialog:view:))
- [static func result(opensIntent: some AppIntent) -> Self](/documentation/appintents/intentresult/result(opensintent:)-8t8q8)
- [static func result<OpensAppIntent, Content>(opensIntent: OpensAppIntent, content: () -> Content) -> Self](/documentation/appintents/intentresult/result(opensintent:content:)-2h5ux)
- [static func result<Content>(opensIntent: some AppIntent, content: () -> Content) -> Self](/documentation/appintents/intentresult/result(opensintent:content:)-965vk)
- [static func result(opensIntent: some AppIntent, dialog: IntentDialog) -> Self](/documentation/appintents/intentresult/result(opensintent:dialog:)-64q5v)
- [static func result<OpensAppIntent, Content>(opensIntent: OpensAppIntent, dialog: IntentDialog, content: () -> Content) -> Self](/documentation/appintents/intentresult/result(opensintent:dialog:content:)-2g81m)
- [static func result<Content>(opensIntent: some AppIntent, dialog: IntentDialog, content: () -> Content) -> Self](/documentation/appintents/intentresult/result(opensintent:dialog:content:)-9kg66)
- [static func result(opensIntent: some AppIntent, dialog: IntentDialog, snippetIntent: some SnippetIntent) -> Self](/documentation/appintents/intentresult/result(opensintent:dialog:snippetintent:))
- [static func result<Content>(opensIntent: some AppIntent, dialog: IntentDialog, view: Content) -> Self](/documentation/appintents/intentresult/result(opensintent:dialog:view:)-1w6b6)
- [static func result<OpensAppIntent, Content>(opensIntent: OpensAppIntent, dialog: IntentDialog, view: Content) -> Self](/documentation/appintents/intentresult/result(opensintent:dialog:view:)-8wkpg)
- [static func result(opensIntent: some AppIntent, snippetIntent: some SnippetIntent) -> Self](/documentation/appintents/intentresult/result(opensintent:snippetintent:))
- [static func result<OpensAppIntent, Content>(opensIntent: OpensAppIntent, view: Content) -> Self](/documentation/appintents/intentresult/result(opensintent:view:)-4l1d4)
- [static func result<Content>(opensIntent: some AppIntent, view: Content) -> Self](/documentation/appintents/intentresult/result(opensintent:view:)-5hm2s)
- [static func result(snippetIntent: some SnippetIntent) -> Self](/documentation/appintents/intentresult/result(snippetintent:))
- [static func result<Value>(value: Value) -> Self](/documentation/appintents/intentresult/result(value:))
- [static func result<Value, Intent>(value: Value, actionButtonIntent: Intent) -> Self](/documentation/appintents/intentresult/result(value:actionbuttonintent:))
- [static func result<Value, Intent>(value: Value, actionButtonIntent: Intent, activityIdentifier: String) -> Self](/documentation/appintents/intentresult/result(value:actionbuttonintent:activityidentifier:))
- [static func result<Value, Intent>(value: Value, actionButtonIntent: Intent, activityIdentifier: String, dialog: IntentDialog) -> Self](/documentation/appintents/intentresult/result(value:actionbuttonintent:activityidentifier:dialog:))
- [static func result<Value, Intent>(value: Value, actionButtonIntent: Intent, dialog: IntentDialog) -> Self](/documentation/appintents/intentresult/result(value:actionbuttonintent:dialog:))
- [static func result<Value, Content>(value: Value, content: () -> Content) -> Self](/documentation/appintents/intentresult/result(value:content:))
- [static func result<Value>(value: Value, dialog: IntentDialog) -> Self](/documentation/appintents/intentresult/result(value:dialog:))
- [static func result<Value, Content>(value: Value, dialog: IntentDialog, content: () -> Content) -> Self](/documentation/appintents/intentresult/result(value:dialog:content:))
- [static func result<Value>(value: Value, dialog: IntentDialog, snippetIntent: some SnippetIntent) -> Self](/documentation/appintents/intentresult/result(value:dialog:snippetintent:))
- [static func result<Value, Content>(value: Value, dialog: IntentDialog, view: Content) -> Self](/documentation/appintents/intentresult/result(value:dialog:view:))
- [static func result<Value>(value: Value, opensIntent: some AppIntent) -> Self](/documentation/appintents/intentresult/result(value:opensintent:)-8v5op)
- [static func result<Value, Content>(value: Value, opensIntent: some AppIntent, content: () -> Content) -> Self](/documentation/appintents/intentresult/result(value:opensintent:content:)-2f6ht)
- [static func result<Value, OpensAppIntent, Content>(value: Value, opensIntent: OpensAppIntent, content: () -> Content) -> Self](/documentation/appintents/intentresult/result(value:opensintent:content:)-95tmb)
- [static func result<Value>(value: Value, opensIntent: some AppIntent, dialog: IntentDialog) -> Self](/documentation/appintents/intentresult/result(value:opensintent:dialog:)-1eg3x)
- [static func result<Value, OpensAppIntent, Content>(value: Value, opensIntent: OpensAppIntent, dialog: IntentDialog, content: () -> Content) -> Self](/documentation/appintents/intentresult/result(value:opensintent:dialog:content:)-4iwem)
- [static func result<Value, Content>(value: Value, opensIntent: some AppIntent, dialog: IntentDialog, content: () -> Content) -> Self](/documentation/appintents/intentresult/result(value:opensintent:dialog:content:)-mwwf)
- [static func result<Value>(value: Value, opensIntent: some AppIntent, dialog: IntentDialog, snippetIntent: some SnippetIntent) -> Self](/documentation/appintents/intentresult/result(value:opensintent:dialog:snippetintent:))
- [static func result<Value, OpensAppIntent, Content>(value: Value, opensIntent: OpensAppIntent, dialog: IntentDialog, view: Content) -> Self](/documentation/appintents/intentresult/result(value:opensintent:dialog:view:)-5sg4p)
- [static func result<Value, Content>(value: Value, opensIntent: some AppIntent, dialog: IntentDialog, view: Content) -> Self](/documentation/appintents/intentresult/result(value:opensintent:dialog:view:)-88j6a)
- [static func result<Value>(value: Value, opensIntent: some AppIntent, snippetIntent: some SnippetIntent) -> Self](/documentation/appintents/intentresult/result(value:opensintent:snippetintent:))
- [static func result<Value, Content>(value: Value, opensIntent: some AppIntent, view: Content) -> Self](/documentation/appintents/intentresult/result(value:opensintent:view:)-12wbo)
- [static func result<Value, OpensAppIntent, Content>(value: Value, opensIntent: OpensAppIntent, view: Content) -> Self](/documentation/appintents/intentresult/result(value:opensintent:view:)-5z5t0)
- [static func result<Value>(value: Value, snippetIntent: some SnippetIntent) -> Self](/documentation/appintents/intentresult/result(value:snippetintent:))
- [static func result<Value, Content>(value: Value, view: Content) -> Self](/documentation/appintents/intentresult/result(value:view:))
- [static func result<Content>(view: Content) -> Self](/documentation/appintents/intentresult/result(view:))

#### Default Implementations

- [IntentResult Implementations](/documentation/appintents/intentresult/intentresult-implementations)

##### Type Methods

- [static func result<OpensAppIntent>(opensIntent: OpensAppIntent) -> Self](/documentation/appintents/intentresult/result(opensintent:)-6l7s5)
- [static func result<OpensAppIntent>(opensIntent: OpensAppIntent, dialog: IntentDialog) -> Self](/documentation/appintents/intentresult/result(opensintent:dialog:)-925mk)
- [static func result<Value, OpensAppIntent>(value: Value, opensIntent: OpensAppIntent) -> Self](/documentation/appintents/intentresult/result(value:opensintent:)-1mbbt)
- [static func result<Value, OpensAppIntent>(value: Value, opensIntent: OpensAppIntent, dialog: IntentDialog) -> Self](/documentation/appintents/intentresult/result(value:opensintent:dialog:)-2j58s)
- [IntentResultContainer](/documentation/appintents/intentresultcontainer)

#### Instance Properties

- [var activityIdentifier: String?](/documentation/appintents/intentresultcontainer/activityidentifier)
- [var dialog: IntentDialog?](/documentation/appintents/intentresultcontainer/dialog)
- [var opensIntent: OpensAppIntent?](/documentation/appintents/intentresultcontainer/opensintent)
- [OpensIntent](/documentation/appintents/opensintent)
- [ProvidesDialog](/documentation/appintents/providesdialog)
- [ReturnsValue](/documentation/appintents/returnsvalue)
- [ShowsSnippetView](/documentation/appintents/showssnippetview)
- [ResultsCollection](/documentation/appintents/resultscollection)

#### Associated Types

- [Result](/documentation/appintents/resultscollection/result)

#### Instance Properties

- [var items: [Self.Result.ValueType]](/documentation/appintents/resultscollection/items)
- [var promptLabel: LocalizedStringResource?](/documentation/appintents/resultscollection/promptlabel)
- [var usesIndexedCollation: Bool](/documentation/appintents/resultscollection/usesindexedcollation)

#### Type Properties

- [static var empty: Self](/documentation/appintents/resultscollection/empty)

### Extensions

- [AppIntentsExtension](/documentation/appintents/appintentsextension)
- [Intent discovery](/documentation/appintents/intent-discovery)

### Donation management

- [IntentDonationManager](/documentation/appintents/intentdonationmanager)

#### Getting the donation manager

- [static var shared: IntentDonationManager](/documentation/appintents/intentdonationmanager/shared)

#### Donating intents to the system

- [func donate(intent: some AppIntent) -> IntentDonationIdentifier](/documentation/appintents/intentdonationmanager/donate(intent:)-57fg4)
- [func donate(intent: some AppIntent) async throws -> IntentDonationIdentifier](/documentation/appintents/intentdonationmanager/donate(intent:)-hly2)
- [func donate(intent: some AppIntent, result: some IntentResult) async throws -> IntentDonationIdentifier](/documentation/appintents/intentdonationmanager/donate(intent:result:)-1ltmi)
- [func donate(intent: some AppIntent, result: some IntentResult) -> IntentDonationIdentifier](/documentation/appintents/intentdonationmanager/donate(intent:result:)-7ztce)

#### Deleting previous donations

- [func deleteDonations(matching: IntentDonationMatchingPredicate) async throws -> [IntentDonationIdentifier]](/documentation/appintents/intentdonationmanager/deletedonations(matching:))
- [IntentDonationIdentifier](/documentation/appintents/intentdonationidentifier)
- [IntentDonationMatchingPredicate](/documentation/appintents/intentdonationmatchingpredicate)

#### Creating a predicate

- [static func donationIdentifier(IntentDonationIdentifier) -> IntentDonationMatchingPredicate](/documentation/appintents/intentdonationmatchingpredicate/donationidentifier(_:))
- [static func entityIdentifier(EntityIdentifier) -> IntentDonationMatchingPredicate](/documentation/appintents/intentdonationmatchingpredicate/entityidentifier(_:))
- [static func intentType(any AppIntent.Type, entityIdentifier: EntityIdentifier?) -> IntentDonationMatchingPredicate](/documentation/appintents/intentdonationmatchingpredicate/intenttype(_:entityidentifier:))

#### Type Methods

- [static func donationIdentifiers([IntentDonationIdentifier]) -> IntentDonationMatchingPredicate](/documentation/appintents/intentdonationmatchingpredicate/donationidentifiers(_:))
- [static func entityIdentifiers([EntityIdentifier]) -> IntentDonationMatchingPredicate](/documentation/appintents/intentdonationmatchingpredicate/entityidentifiers(_:))

### Intent predictions

- [PredictableIntent](/documentation/appintents/predictableintent)

#### Providing predictions

- [static var predictionConfiguration: Self.Prediction](/documentation/appintents/predictableintent/predictionconfiguration)
- [Prediction](/documentation/appintents/predictableintent/prediction)
- [IntentPredictionConfiguration](/documentation/appintents/intentpredictionconfiguration)

##### Associated Types

- [Intent](/documentation/appintents/intentpredictionconfiguration/intent)
- [IntentPredictionsBuilder](/documentation/appintents/intentpredictionsbuilder)

##### Building predictions

- [static func buildBlock<A0>(A0) -> A0](/documentation/appintents/intentpredictionsbuilder/buildblock(_:))
- [static func buildBlock<A0, A1>(A0, A1) -> TupleIntentPrediction<A0.Intent, (A0, A1)>](/documentation/appintents/intentpredictionsbuilder/buildblock(_:_:))
- [static func buildBlock<A0, A1, A2>(A0, A1, A2) -> TupleIntentPrediction<A0.Intent, (A0, A1, A2)>](/documentation/appintents/intentpredictionsbuilder/buildblock(_:_:_:))
- [TupleIntentPrediction](/documentation/appintents/tupleintentprediction)

##### Type Methods

- [static func buildBlock<A0, A1, A2, A3>(A0, A1, A2, A3) -> TupleIntentPrediction<A0.Intent, (A0, A1, A2, A3)>](/documentation/appintents/intentpredictionsbuilder/buildblock(_:_:_:_:))
- [static func buildBlock<A0, A1, A2, A3, A4>(A0, A1, A2, A3, A4) -> TupleIntentPrediction<A0.Intent, (A0, A1, A2, A3, A4)>](/documentation/appintents/intentpredictionsbuilder/buildblock(_:_:_:_:_:))
- [static func buildBlock<A0, A1, A2, A3, A4, A5>(A0, A1, A2, A3, A4, A5) -> TupleIntentPrediction<A0.Intent, (A0, A1, A2, A3, A4, A5)>](/documentation/appintents/intentpredictionsbuilder/buildblock(_:_:_:_:_:_:))
- [static func buildBlock<A0, A1, A2, A3, A4, A5, A6>(A0, A1, A2, A3, A4, A5, A6) -> TupleIntentPrediction<A0.Intent, (A0, A1, A2, A3, A4, A5, A6)>](/documentation/appintents/intentpredictionsbuilder/buildblock(_:_:_:_:_:_:_:))
- [static func buildBlock<A0, A1, A2, A3, A4, A5, A6, A7>(A0, A1, A2, A3, A4, A5, A6, A7) -> TupleIntentPrediction<A0.Intent, (A0, A1, A2, A3, A4, A5, A6, A7)>](/documentation/appintents/intentpredictionsbuilder/buildblock(_:_:_:_:_:_:_:_:))
- [static func buildBlock<A0, A1, A2, A3, A4, A5, A6, A7, A8>(A0, A1, A2, A3, A4, A5, A6, A7, A8) -> TupleIntentPrediction<A0.Intent, (A0, A1, A2, A3, A4, A5, A6, A7, A8)>](/documentation/appintents/intentpredictionsbuilder/buildblock(_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<A0, A1, A2, A3, A4, A5, A6, A7, A8, A9>(A0, A1, A2, A3, A4, A5, A6, A7, A8, A9) -> TupleIntentPrediction<A0.Intent, (A0, A1, A2, A3, A4, A5, A6, A7, A8, A9)>](/documentation/appintents/intentpredictionsbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10>(A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10) -> TupleIntentPrediction<A0.Intent, (A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10)>](/documentation/appintents/intentpredictionsbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11>(A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11) -> TupleIntentPrediction<A0.Intent, (A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11)>](/documentation/appintents/intentpredictionsbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12>(A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12) -> TupleIntentPrediction<A0.Intent, (A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12)>](/documentation/appintents/intentpredictionsbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13>(A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13) -> TupleIntentPrediction<A0.Intent, (A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13)>](/documentation/appintents/intentpredictionsbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14>(A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14) -> TupleIntentPrediction<A0.Intent, (A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14)>](/documentation/appintents/intentpredictionsbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildExpression<A0>(A0) -> A0](/documentation/appintents/intentpredictionsbuilder/buildexpression(_:))
- [IntentPrediction](/documentation/appintents/intentprediction)

#### Creating a prediction

- [init(displayRepresentation: () -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(displayrepresentation:))
- [init<V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, P0, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>(parameters: T, displayRepresentation: (V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-1zdkp)
- [init<V0, V1, V2, V3, V4, V5, P0, P1, P2, P3, P4, P5, K0, K1, K2, K3, K4, K5>(parameters: T, displayRepresentation: (V0, V1, V2, V3, V4, V5) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-2ct6i)
- [init<V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11, V12, V13, V14, P0, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>(parameters: T, displayRepresentation: (V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11, V12, V13, V14) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-2lf5t)
- [init<V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11, V12, V13, V14, P0, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>(parameters: T, displayRepresentation: (V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11, V12, V13, V14) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-2lf5t)
- [init<V0, V1, P0, P1, K0, K1>(parameters: T, displayRepresentation: (V0, V1) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-39wfu)
- [init<V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, P0, P1, P2, P3, P4, P5, P6, P7, P8, P9, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9>(parameters: T, displayRepresentation: (V0, V1, V2, V3, V4, V5, V6, V7, V8, V9) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-3wlt7)
- [init<V0, P0>(parameters: T, displayRepresentation: (V0) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-5f3e3)
- [init<V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11, V12, P0, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>(parameters: T, displayRepresentation: (V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11, V12) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-620xt)
- [init<V0, V1, V2, V3, V4, P0, P1, P2, P3, P4, K0, K1, K2, K3, K4>(parameters: T, displayRepresentation: (V0, V1, V2, V3, V4) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-6i80a)
- [init<V0, V1, V2, V3, V4, V5, V6, V7, P0, P1, P2, P3, P4, P5, P6, P7, K0, K1, K2, K3, K4, K5, K6, K7>(parameters: T, displayRepresentation: (V0, V1, V2, V3, V4, V5, V6, V7) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-781f1)
- [init<V0, V1, V2, P0, P1, P2, K0, K1, K2>(parameters: T, displayRepresentation: (V0, V1, V2) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-8b851)
- [init<V0, V1, V2, V3, V4, V5, V6, P0, P1, P2, P3, P4, P5, P6, K0, K1, K2, K3, K4, K5, K6>(parameters: T, displayRepresentation: (V0, V1, V2, V3, V4, V5, V6) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-9ibp3)
- [init<V0, V1, V2, V3, V4, V5, V6, V7, V8, P0, P1, P2, P3, P4, P5, P6, P7, P8, K0, K1, K2, K3, K4, K5, K6, K7, K8>(parameters: T, displayRepresentation: (V0, V1, V2, V3, V4, V5, V6, V7, V8) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-alik)

#### Initializers

- [init<V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11, P0, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>(parameters: T, displayRepresentation: (V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-1uup3)
- [init<V0, V1, V2, V3, P0, P1, P2, P3, K0, K1, K2, K3>(parameters: T, displayRepresentation: (V0, V1, V2, V3) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-n8dp)
- [init<V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11, V12, V13, P0, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>(parameters: T, displayRepresentation: (V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11, V12, V13) -> DisplayRepresentation)](/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-te8o)

### Intent relevancy

- [RelevantIntent](/documentation/appintents/relevantintent)

#### Initializers

- [init<IntentType>(IntentType, widgetKind: String, relevance: RelevantContext)](/documentation/appintents/relevantintent/init(_:widgetkind:relevance:))
- [RelevantIntentManager](/documentation/appintents/relevantintentmanager)

#### Instance Methods

- [func updateRelevantIntents([RelevantIntent]) async throws](/documentation/appintents/relevantintentmanager/updaterelevantintents(_:))

#### Type Properties

- [static let shared: RelevantIntentManager](/documentation/appintents/relevantintentmanager/shared)
- [RelevantContext](/documentation/relevancekit/relevantcontext)
- [App Shortcuts](/documentation/appintents/app-shortcuts)

### App Shortcut management

- [AppShortcutsProvider](/documentation/appintents/appshortcutsprovider)

#### Providing App Shortcuts

- [static var appShortcuts: [AppShortcut]](/documentation/appintents/appshortcutsprovider/appshortcuts)
- [AppShortcutsBuilder](/documentation/appintents/appshortcutsbuilder)

##### Building App Shortcuts

- [static func buildBlock() -> [AppShortcut]](/documentation/appintents/appshortcutsbuilder/buildblock())
- [static func buildBlock(AppShortcut...) -> [AppShortcut]](/documentation/appintents/appshortcutsbuilder/buildblock(_:)-110ow)
- [static func buildBlock([AppShortcut]...) -> [AppShortcut]](/documentation/appintents/appshortcutsbuilder/buildblock(_:)-8xfbe)
- [static func buildExpression(AppShortcut) -> AppShortcut](/documentation/appintents/appshortcutsbuilder/buildexpression(_:)-31qci)
- [static func buildExpression(AppShortcut) -> [AppShortcut]](/documentation/appintents/appshortcutsbuilder/buildexpression(_:)-9u47j)
- [static func buildLimitedAvailability([AppShortcut]) -> any _AppShortcutsContentMarker & _LimitedAvailabilityAppShortcutsContentMarker](/documentation/appintents/appshortcutsbuilder/buildlimitedavailability(_:))
- [static func buildOptional((any _AppShortcutsContentEmitterMarker & _AppShortcutsContentMarker & _LimitedAvailabilityAppShortcutsContentMarker)?) -> [AppShortcut]](/documentation/appintents/appshortcutsbuilder/buildoptional(_:)-3pbr9)
- [static func buildOptional((any _AppShortcutsContentMarker & _LimitedAvailabilityAppShortcutsContentMarker)?) -> [AppShortcut]](/documentation/appintents/appshortcutsbuilder/buildoptional(_:)-4urzx)

#### Configuring shortcut tiles

- [static var shortcutTileColor: ShortcutTileColor](/documentation/appintents/appshortcutsprovider/shortcuttilecolor)
- [ShortcutTileColor](/documentation/appintents/shortcuttilecolor)

##### Getting the tile colors

- [case blue](/documentation/appintents/shortcuttilecolor/blue)
- [case grape](/documentation/appintents/shortcuttilecolor/grape)
- [case grayBlue](/documentation/appintents/shortcuttilecolor/grayblue)
- [case grayBrown](/documentation/appintents/shortcuttilecolor/graybrown)
- [case grayGreen](/documentation/appintents/shortcuttilecolor/graygreen)
- [case lightBlue](/documentation/appintents/shortcuttilecolor/lightblue)
- [case lime](/documentation/appintents/shortcuttilecolor/lime)
- [case navy](/documentation/appintents/shortcuttilecolor/navy)
- [case orange](/documentation/appintents/shortcuttilecolor/orange)
- [case pink](/documentation/appintents/shortcuttilecolor/pink)
- [case purple](/documentation/appintents/shortcuttilecolor/purple)
- [case red](/documentation/appintents/shortcuttilecolor/red)
- [case tangerine](/documentation/appintents/shortcuttilecolor/tangerine)
- [case teal](/documentation/appintents/shortcuttilecolor/teal)
- [case yellow](/documentation/appintents/shortcuttilecolor/yellow)

#### Updating stored parameters

- [static func updateAppShortcutParameters()](/documentation/appintents/appshortcutsprovider/updateappshortcutparameters())

#### Type Aliases

- [AppShortcutsProvider.OptionsCollection](/documentation/appintents/appshortcutsprovider/optionscollection)
- [AppShortcutsProvider.ParameterPresentation](/documentation/appintents/appshortcutsprovider/parameterpresentation)
- [AppShortcutsProvider.Summary](/documentation/appintents/appshortcutsprovider/summary)
- [AppShortcutsProvider.Title](/documentation/appintents/appshortcutsprovider/title)

#### Type Properties

- [static var negativePhrases: NegativeAppShortcutPhrases](/documentation/appintents/appshortcutsprovider/negativephrases)

### App Shortcut definition

- [AppShortcut](/documentation/appintents/appshortcut)

#### Creating an app shortcut

- [init<Intent>(intent: Intent, phrases: [AppShortcutPhrase<Intent>], shortTitle: LocalizedStringResource, systemImageName: String)](/documentation/appintents/appshortcut/init(intent:phrases:shorttitle:systemimagename:)-8yntq)
- [init<Intent, Value, Parameter, ParameterKeyPath>(intent: Intent, phrases: [AppShortcutPhrase<Intent>], shortTitle: LocalizedStringResource, systemImageName: String, parameterPresentation: AppShortcutParameterPresentation<Intent, Value, Parameter, ParameterKeyPath>)](/documentation/appintents/appshortcut/init(intent:phrases:shorttitle:systemimagename:parameterpresentation:))
- [init<Intent>(intent: Intent, phrases: [AppShortcutPhrase<Intent>], shortTitle: LocalizedStringResource?, systemImageName: String?)](/documentation/appintents/appshortcut/init(intent:phrases:shorttitle:systemimagename:)-2hk1x)
- [AppShortcutPhrase](/documentation/appintents/appshortcutphrase)

#### Creating a shortcut phrase

- [init(String)](/documentation/appintents/appshortcutphrase/init(_:))
- [NegativeAppShortcutPhrase](/documentation/appintents/negativeappshortcutphrase)

#### Structures

- [NegativeAppShortcutPhrase.StringInterpolation](/documentation/appintents/negativeappshortcutphrase/stringinterpolation)

##### Instance Methods

- [func appendInterpolation(AppShortcutPhraseToken)](/documentation/appintents/negativeappshortcutphrase/stringinterpolation/appendinterpolation(_:))

#### Initializers

- [init(String)](/documentation/appintents/negativeappshortcutphrase/init(_:))
- [NegativeAppShortcutPhrases](/documentation/appintents/negativeappshortcutphrases)

#### Initializers

- [init(phrases: [NegativeAppShortcutPhrase])](/documentation/appintents/negativeappshortcutphrases/init(phrases:))
- [NSAppIconActionTintColorName](/documentation/bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/nsappiconactiontintcolorname)
- [NSAppIconComplementingColorNames](/documentation/bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/nsappiconcomplementingcolornames)
- [AppShortcutsBuilder](/documentation/appintents/appshortcutsbuilder)

#### Building App Shortcuts

- [static func buildBlock() -> [AppShortcut]](/documentation/appintents/appshortcutsbuilder/buildblock())
- [static func buildBlock(AppShortcut...) -> [AppShortcut]](/documentation/appintents/appshortcutsbuilder/buildblock(_:)-110ow)
- [static func buildBlock([AppShortcut]...) -> [AppShortcut]](/documentation/appintents/appshortcutsbuilder/buildblock(_:)-8xfbe)
- [static func buildExpression(AppShortcut) -> AppShortcut](/documentation/appintents/appshortcutsbuilder/buildexpression(_:)-31qci)
- [static func buildExpression(AppShortcut) -> [AppShortcut]](/documentation/appintents/appshortcutsbuilder/buildexpression(_:)-9u47j)
- [static func buildLimitedAvailability([AppShortcut]) -> any _AppShortcutsContentMarker & _LimitedAvailabilityAppShortcutsContentMarker](/documentation/appintents/appshortcutsbuilder/buildlimitedavailability(_:))
- [static func buildOptional((any _AppShortcutsContentEmitterMarker & _AppShortcutsContentMarker & _LimitedAvailabilityAppShortcutsContentMarker)?) -> [AppShortcut]](/documentation/appintents/appshortcutsbuilder/buildoptional(_:)-3pbr9)
- [static func buildOptional((any _AppShortcutsContentMarker & _LimitedAvailabilityAppShortcutsContentMarker)?) -> [AppShortcut]](/documentation/appintents/appshortcutsbuilder/buildoptional(_:)-4urzx)
- [ShortcutTileColor](/documentation/appintents/shortcuttilecolor)

#### Getting the tile colors

- [case blue](/documentation/appintents/shortcuttilecolor/blue)
- [case grape](/documentation/appintents/shortcuttilecolor/grape)
- [case grayBlue](/documentation/appintents/shortcuttilecolor/grayblue)
- [case grayBrown](/documentation/appintents/shortcuttilecolor/graybrown)
- [case grayGreen](/documentation/appintents/shortcuttilecolor/graygreen)
- [case lightBlue](/documentation/appintents/shortcuttilecolor/lightblue)
- [case lime](/documentation/appintents/shortcuttilecolor/lime)
- [case navy](/documentation/appintents/shortcuttilecolor/navy)
- [case orange](/documentation/appintents/shortcuttilecolor/orange)
- [case pink](/documentation/appintents/shortcuttilecolor/pink)
- [case purple](/documentation/appintents/shortcuttilecolor/purple)
- [case red](/documentation/appintents/shortcuttilecolor/red)
- [case tangerine](/documentation/appintents/shortcuttilecolor/tangerine)
- [case teal](/documentation/appintents/shortcuttilecolor/teal)
- [case yellow](/documentation/appintents/shortcuttilecolor/yellow)

### App Shortcut options

- [AppShortcutOptionsCollection](/documentation/appintents/appshortcutoptionscollection)

#### Initializers

- [init(Provider, title: LocalizedStringResource, systemImageName: String?)](/documentation/appintents/appshortcutoptionscollection/init(_:title:systemimagename:))
- [AppShortcutOptionsCollectionProtocol](/documentation/appintents/appshortcutoptionscollectionprotocol)

#### Associated Types

- [Provider](/documentation/appintents/appshortcutoptionscollectionprotocol/provider)

#### Instance Properties

- [var dynamicOptionsProvider: Self.Provider](/documentation/appintents/appshortcutoptionscollectionprotocol/dynamicoptionsprovider)
- [var systemImageName: String?](/documentation/appintents/appshortcutoptionscollectionprotocol/systemimagename)
- [var title: LocalizedStringResource](/documentation/appintents/appshortcutoptionscollectionprotocol/title)
- [AppShortcutOptionsCollectionSpecification](/documentation/appintents/appshortcutoptionscollectionspecification)

#### Associated Types

- [Value](/documentation/appintents/appshortcutoptionscollectionspecification/value)
- [AppShortcutOptionsCollectionSpecificationBuilder](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder)

#### Type Methods

- [static func buildBlock<C0>(C0) -> some AppShortcutOptionsCollectionSpecification<Value>
](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder/buildblock(_:))
- [static func buildBlock<C0, C1>(C0, C1) -> some AppShortcutOptionsCollectionSpecification<Value>
](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:))
- [static func buildBlock<C0, C1, C2>(C0, C1, C2) -> some AppShortcutOptionsCollectionSpecification<Value>
](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:))
- [static func buildBlock<C0, C1, C2, C3>(C0, C1, C2, C3) -> some AppShortcutOptionsCollectionSpecification<Value>
](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4>(C0, C1, C2, C3, C4) -> some AppShortcutOptionsCollectionSpecification<Value>
](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5>(C0, C1, C2, C3, C4, C5) -> some AppShortcutOptionsCollectionSpecification<Value>
](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6>(C0, C1, C2, C3, C4, C5, C6) -> some AppShortcutOptionsCollectionSpecification<Value>
](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7>(C0, C1, C2, C3, C4, C5, C6, C7) -> some AppShortcutOptionsCollectionSpecification<Value>
](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8>(C0, C1, C2, C3, C4, C5, C6, C7, C8) -> some AppShortcutOptionsCollectionSpecification<Value>
](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9) -> some AppShortcutOptionsCollectionSpecification<Value>
](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10) -> some AppShortcutOptionsCollectionSpecification<Value>
](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11) -> some AppShortcutOptionsCollectionSpecification<Value>
](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12) -> some AppShortcutOptionsCollectionSpecification<Value>
](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13) -> some AppShortcutOptionsCollectionSpecification<Value>
](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14) -> some AppShortcutOptionsCollectionSpecification<Value>
](/documentation/appintents/appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

### App Shortcut parameter presentation

- [AppShortcutParameterPresentation](/documentation/appintents/appshortcutparameterpresentation)

#### Initializers

- [init(for: ParameterKeyPath, summary: AppShortcutParameterPresentationSummary<Intent, Value, Parameter, ParameterKeyPath>, optionsCollections: () -> some AppShortcutOptionsCollectionSpecification<Value.UnwrappedType>)](/documentation/appintents/appshortcutparameterpresentation/init(for:summary:optionscollections:))
- [AppShortcutParameterPresentationSummary](/documentation/appintents/appshortcutparameterpresentationsummary)

#### Initializers

- [init(AppShortcutParameterPresentationSummaryString<Intent, Value, Parameter, ParameterKeyPath>, table: StaticString?)](/documentation/appintents/appshortcutparameterpresentationsummary/init(_:table:))
- [AppShortcutParameterPresentationSummaryString](/documentation/appintents/appshortcutparameterpresentationsummarystring)

#### Initializers

- [init(String)](/documentation/appintents/appshortcutparameterpresentationsummarystring/init(_:))
- [AppShortcutParameterPresentationTitle](/documentation/appintents/appshortcutparameterpresentationtitle)

#### Initializers

- [init(specific: AppShortcutParameterPresentationTitleString<Intent, Value, Parameter, ParameterKeyPath>, generic: StaticString, table: StaticString?)](/documentation/appintents/appshortcutparameterpresentationtitle/init(specific:generic:table:))
- [AppShortcutParameterPresentationTitleString](/documentation/appintents/appshortcutparameterpresentationtitlestring)

#### Initializers

- [init(String)](/documentation/appintents/appshortcutparameterpresentationtitlestring/init(_:))

### Buttons

- [ShortcutsUIButton](/documentation/appintents/shortcutsuibutton)

#### Creating the button

- [init(style: ShortcutsLinkStyle)](/documentation/appintents/shortcutsuibutton/init(style:))

#### Getting the button style

- [var style: ShortcutsLinkStyle](/documentation/appintents/shortcutsuibutton/style)

#### Configuring additional actions

- [func addTarget(Any?, action: Selector, for: UIControl.Event)](/documentation/appintents/shortcutsuibutton/addtarget(_:action:for:))

#### Resizing the button

- [func sizeThatFits(CGSize) -> CGSize](/documentation/appintents/shortcutsuibutton/sizethatfits(_:))
- [ShortcutsLink](/documentation/appintents/shortcutslink)

#### Initializers

- [init(action: () -> Void)](/documentation/appintents/shortcutslink/init(action:))
- [ShortcutsLinkStyle](/documentation/appintents/shortcutslinkstyle)

#### Getting the styles

- [static let automatic: ShortcutsLinkStyle](/documentation/appintents/shortcutslinkstyle/automatic)
- [static let automaticOutline: ShortcutsLinkStyle](/documentation/appintents/shortcutslinkstyle/automaticoutline)
- [static let dark: ShortcutsLinkStyle](/documentation/appintents/shortcutslinkstyle/dark)
- [static let darkOutline: ShortcutsLinkStyle](/documentation/appintents/shortcutslinkstyle/darkoutline)
- [static let light: ShortcutsLinkStyle](/documentation/appintents/shortcutslinkstyle/light)
- [static let lightOutline: ShortcutsLinkStyle](/documentation/appintents/shortcutslinkstyle/lightoutline)

### Tip views

- [SiriTipUIView](/documentation/appintents/siritipuiview)

#### Creating a tip view

- [init(style: SiriTipViewStyle)](/documentation/appintents/siritipuiview/init(style:))

#### Getting the view style

- [var style: SiriTipViewStyle](/documentation/appintents/siritipuiview/style)
- [SiriTipViewStyle](/documentation/appintents/siritipviewstyle)

##### Getting the styles

- [static let automatic: SiriTipViewStyle](/documentation/appintents/siritipviewstyle/automatic)
- [static let dark: SiriTipViewStyle](/documentation/appintents/siritipviewstyle/dark)
- [static let light: SiriTipViewStyle](/documentation/appintents/siritipviewstyle/light)

#### Getting the view’s configuration

- [var allowsDismissal: Bool](/documentation/appintents/siritipuiview/allowsdismissal)
- [var isPresented: Bool](/documentation/appintents/siritipuiview/ispresented)

#### Instance Properties

- [var intrinsicContentSize: CGSize](/documentation/appintents/siritipuiview/intrinsiccontentsize)

#### Instance Methods

- [func didMoveToWindow()](/documentation/appintents/siritipuiview/didmovetowindow())
- [func setIntent<Intent>(intent: Intent)](/documentation/appintents/siritipuiview/setintent(intent:))
- [func sizeThatFits(CGSize) -> CGSize](/documentation/appintents/siritipuiview/sizethatfits(_:))
- [SiriTipView](/documentation/appintents/siritipview)

#### Creating the view

- [init<Intent>(intent: Intent, isVisible: Binding<Bool>?)](/documentation/appintents/siritipview/init(intent:isvisible:))
- [SiriTipViewStyle](/documentation/appintents/siritipviewstyle)

#### Getting the styles

- [static let automatic: SiriTipViewStyle](/documentation/appintents/siritipviewstyle/automatic)
- [static let dark: SiriTipViewStyle](/documentation/appintents/siritipviewstyle/dark)
- [static let light: SiriTipViewStyle](/documentation/appintents/siritipviewstyle/light)

## Parameters, custom data types, and queries

- [Adding parameters to an app intent](/documentation/appintents/adding-parameters-to-an-app-intent)
- [Integrating custom data types into your intents](/documentation/appintents/integrating-custom-types-into-your-intents)
- [Parameter resolution](/documentation/appintents/parameter-resolution)

### Intent parameters

- [IntentParameter](/documentation/appintents/intentparameter)

#### Creating an intent parameter for primitive types

- [Integers](/documentation/appintents/intentparameter-int)

##### Creating an intent parameter

- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, controlStyle: IntentParameter<Value>.IntControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-86n3q)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, controlStyle: IntentParameter<Value>.IntControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-8ej37)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, controlStyle: IntentParameter<Value>.IntControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:)-2wjbq)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, controlStyle: IntentParameter<Value>.IntControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:resolvers:)-83igq)
- [IntentParameter.InclusiveRange](/documentation/appintents/intentparameter/inclusiverange-swift.typealias)

##### Accessing the control style

- [var controlStyle: IntentParameter<Value>.IntControlStyle?](/documentation/appintents/intentparameter/controlstyle-4q1s9)
- [IntentParameter.IntControlStyle](/documentation/appintents/intentparameter/intcontrolstyle)

###### Enumeration Cases

- [case field](/documentation/appintents/intentparameter/intcontrolstyle/field)
- [case stepper](/documentation/appintents/intentparameter/intcontrolstyle/stepper)
- [Doubles](/documentation/appintents/intentparameter-double)

##### Creating an intent parameter

- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, controlStyle: IntentParameter<Value>.DoubleControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-3la41)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, controlStyle: IntentParameter<Value>.DoubleControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-2iugu)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, controlStyle: IntentParameter<Value>.DoubleControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:)-4mc52)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, controlStyle: IntentParameter<Value>.DoubleControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:resolvers:)-9yclx)
- [IntentParameter.InclusiveRange](/documentation/appintents/intentparameter/inclusiverange-swift.typealias)

##### Accessing the control style

- [var controlStyle: IntentParameter<Value>.DoubleControlStyle?](/documentation/appintents/intentparameter/controlstyle-5ryd1)
- [IntentParameter.DoubleControlStyle](/documentation/appintents/intentparameter/doublecontrolstyle)

###### Enumeration Cases

- [case field](/documentation/appintents/intentparameter/doublecontrolstyle/field)
- [case slider](/documentation/appintents/intentparameter/doublecontrolstyle/slider)
- [case stepper](/documentation/appintents/intentparameter/doublecontrolstyle/stepper)
- [Booleans](/documentation/appintents/intentparameter-boolean)

##### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, displayName: Bool.IntentDisplayName?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:displayname:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, displayName: Bool.IntentDisplayName?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:displayname:requestvaluedialog:inputconnectionbehavior:resolvers:))

##### Specifying the display name

- [var displayName: Bool.IntentDisplayName?](/documentation/appintents/intentparameter/displayname)
- [Strings](/documentation/appintents/intentparameter-string)

##### Creating an intent parameter for a string

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, inputOptions: String.IntentInputOptions?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:inputoptions:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, inputOptions: String.IntentInputOptions?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:inputoptions:requestvaluedialog:inputconnectionbehavior:resolvers:))
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, inputOptions: String.IntentInputOptions?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:inputoptions:requestvaluedialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, inputOptions: String.IntentInputOptions?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:inputoptions:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))

##### Creating an intent parameter for an attributed string

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:)-5ouxs)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:resolvers:)-7u5zw)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-2i6xs)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-7dvis)

##### Accessing the input options

- [var inputOptions: String.IntentInputOptions?](/documentation/appintents/intentparameter/inputoptions)
- [URLs](/documentation/appintents/intentparameter-url)

##### Creating an intent parameter

- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-17a31)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:)-518bz)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: [Value.ValueType?], requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:)-9wlo0)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: [Value.ValueType?], requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:resolvers:)-6mfw6)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:resolvers:)-7lt0)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-17a31)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-8g3g7)

#### Creating an intent parameter for common framework types

- [Dates](/documentation/appintents/intentparameter-date)

##### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:kind:requestvaluedialog:inputconnectionbehavior:)-97fq8)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-1adrk)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-3hg6n)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:kind:requestvaluedialog:inputconnectionbehavior:resolvers:)-6834b)

##### Accessing the date kind

- [var dateKind: IntentParameter<Value>.DateKind?](/documentation/appintents/intentparameter/datekind-15hd7)
- [IntentParameter.DateKind](/documentation/appintents/intentparameter/datekind-swift.enum)

###### Enumeration Cases

- [case date](/documentation/appintents/intentparameter/datekind-swift.enum/date)
- [case dateTime](/documentation/appintents/intentparameter/datekind-swift.enum/datetime)
- [case time](/documentation/appintents/intentparameter/datekind-swift.enum/time)
- [Date components](/documentation/appintents/intentparameter-date-components)

##### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:kind:requestvaluedialog:inputconnectionbehavior:)-1no2a)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-38o37)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-4438x)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:kind:requestvaluedialog:inputconnectionbehavior:resolvers:)-8vfnx)

##### Accessing the date kind

- [var dateKind: IntentParameter<Value>.DateKind?](/documentation/appintents/intentparameter/datekind-7wjso)
- [IntentParameter.DateKind](/documentation/appintents/intentparameter/datekind-swift.enum)

###### Enumeration Cases

- [case date](/documentation/appintents/intentparameter/datekind-swift.enum/date)
- [case dateTime](/documentation/appintents/intentparameter/datekind-swift.enum/datetime)
- [case time](/documentation/appintents/intentparameter/datekind-swift.enum/time)
- [Files](/documentation/appintents/intentparameter-file)

##### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedTypeIdentifiers: [String], requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:supportedtypeidentifiers:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedTypeIdentifiers: [String], requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:supportedtypeidentifiers:requestvaluedialog:inputconnectionbehavior:resolvers:))
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, supportedTypeIdentifiers: [String], requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:supportedtypeidentifiers:requestvaluedialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, supportedTypeIdentifiers: [String], requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:supportedtypeidentifiers:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [Currencies](/documentation/appintents/intentparameter-currencies)

##### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, currencyCodes: [String], inclusiveRange: IntentParameter<Value>.InclusiveRange<Decimal>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, currencyCodes: [String], inclusiveRange: IntentParameter<Value>.InclusiveRange<Decimal>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, currencyCodes: [String], inclusiveRange: IntentParameter<Value>.InclusiveRange<Decimal>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, currencyCodes: [String], inclusiveRange: IntentParameter<Value>.InclusiveRange<Decimal>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:resolvers:))

##### Accessing the configuration

- [var currencyCodes: [String]?](/documentation/appintents/intentparameter/currencycodes)
- [var inclusiveRange: IntentParameter<Value>.InclusiveRange<Decimal>?](/documentation/appintents/intentparameter/inclusiverange-swift.property)
- [IntentParameter.InclusiveRange](/documentation/appintents/intentparameter/inclusiverange-swift.typealias)
- [Payments](/documentation/appintents/intentparameter-payments)

##### Creating an intent parameter

- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-7urpy)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-7y2uj)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-1x2m9)
- [People](/documentation/appintents/intentparameter-person)

##### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:mode:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:mode:requestvaluedialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:mode:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:mode:requestvaluedialog:inputconnectionbehavior:resolvers:))
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, mode: IntentPerson.ParameterMode, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:mode:size:inputconnectionbehavior:)-1i2sn)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, mode: IntentPerson.ParameterMode, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:mode:size:inputconnectionbehavior:)-6efsz)

##### Accessing the parameter mode

- [var parameterMode: IntentPerson.ParameterMode?](/documentation/appintents/intentparameter/parametermode)
- [IntentPerson.ParameterMode](/documentation/appintents/intentperson/parametermode)

###### Getting the interface type

- [case contact](/documentation/appintents/intentperson/parametermode/contact)
- [case email](/documentation/appintents/intentperson/parametermode/email)
- [case emailOrPhone](/documentation/appintents/intentperson/parametermode/emailorphone)
- [case phone](/documentation/appintents/intentperson/parametermode/phone)
- [Placemarks](/documentation/appintents/intentparameter-placemark)

##### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, displayStyle: IntentParameter<Value>.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:displaystyle:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, displayStyle: IntentParameter<Value>.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:displaystyle:requestvaluedialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, displayStyle: IntentParameter<Value>.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:displaystyle:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, displayStyle: IntentParameter<Value>.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:displaystyle:requestvaluedialog:inputconnectionbehavior:resolvers:))

##### Accessing the display style

- [var displayStyle: IntentParameter<Value>.PlacemarkDisplayStyle?](/documentation/appintents/intentparameter/displaystyle)
- [IntentParameter.PlacemarkDisplayStyle](/documentation/appintents/intentparameter/placemarkdisplaystyle)

###### Getting the display styles

- [case name](/documentation/appintents/intentparameter/placemarkdisplaystyle/name)
- [case address](/documentation/appintents/intentparameter/placemarkdisplaystyle/address)
- [case city](/documentation/appintents/intentparameter/placemarkdisplaystyle/city)
- [Measurements](/documentation/appintents/intentparameter-measurements)

##### Creating an intent parameter for measurements

- [Acceleration](/documentation/appintents/intentparameter-measurements-acceleration)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Acceleration?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-1rgf3)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Acceleration?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-l3in)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Acceleration, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-6r9fy)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Acceleration, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-4yeng)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-ytbn)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-5q8nx)

###### Accessing unit details

- [var unit: IntentParameter<Value>.Acceleration?](/documentation/appintents/intentparameter/unit-4kgwq)
- [IntentParameter.Acceleration](/documentation/appintents/intentparameter/acceleration)

###### Enumeration Cases

- [case gravity](/documentation/appintents/intentparameter/acceleration/gravity)
- [case metersPerSecondSquared](/documentation/appintents/intentparameter/acceleration/meterspersecondsquared)
- [var defaultUnit: IntentParameter<Value>.Acceleration?](/documentation/appintents/intentparameter/defaultunit-6s3bu)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-8d17e)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-2jck9)
- [Angles](/documentation/appintents/intentparameter-measurements-angle)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Angle?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-8tn46)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Angle?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-6avu3)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Angle, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-6ib0k)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Angle, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-8j7z1)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-25607)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-7tt26)

###### Accessing unit details

- [var unit: IntentParameter<Value>.Angle?](/documentation/appintents/intentparameter/unit-egg9)
- [IntentParameter.Angle](/documentation/appintents/intentparameter/angle)

###### Enumeration Cases

- [case arcMinutes](/documentation/appintents/intentparameter/angle/arcminutes)
- [case arcSeconds](/documentation/appintents/intentparameter/angle/arcseconds)
- [case degrees](/documentation/appintents/intentparameter/angle/degrees)
- [case gradians](/documentation/appintents/intentparameter/angle/gradians)
- [case radians](/documentation/appintents/intentparameter/angle/radians)
- [case revolutions](/documentation/appintents/intentparameter/angle/revolutions)
- [var defaultUnit: IntentParameter<Value>.Angle?](/documentation/appintents/intentparameter/defaultunit-9huqe)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-35m3l)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-9lff6)
- [Area](/documentation/appintents/intentparameter-measurements-area)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Area, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-5kph6)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Area?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-8qdin)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Area?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-5jrle)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Area, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-5kph6)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Area, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-8t00h)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-9l0az)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-3m63b)

###### Accessing unit details

- [var unit: IntentParameter<Value>.Area?](/documentation/appintents/intentparameter/unit-42nhg)
- [IntentParameter.Area](/documentation/appintents/intentparameter/area)

###### Enumeration Cases

- [case acres](/documentation/appintents/intentparameter/area/acres)
- [case ares](/documentation/appintents/intentparameter/area/ares)
- [case hectares](/documentation/appintents/intentparameter/area/hectares)
- [case squareCentimeters](/documentation/appintents/intentparameter/area/squarecentimeters)
- [case squareFeet](/documentation/appintents/intentparameter/area/squarefeet)
- [case squareInches](/documentation/appintents/intentparameter/area/squareinches)
- [case squareKilometers](/documentation/appintents/intentparameter/area/squarekilometers)
- [case squareMegameters](/documentation/appintents/intentparameter/area/squaremegameters)
- [case squareMeters](/documentation/appintents/intentparameter/area/squaremeters)
- [case squareMicrometers](/documentation/appintents/intentparameter/area/squaremicrometers)
- [case squareMiles](/documentation/appintents/intentparameter/area/squaremiles)
- [case squareMillimeters](/documentation/appintents/intentparameter/area/squaremillimeters)
- [case squareNanometers](/documentation/appintents/intentparameter/area/squarenanometers)
- [case squareYards](/documentation/appintents/intentparameter/area/squareyards)
- [var defaultUnit: IntentParameter<Value>.Area?](/documentation/appintents/intentparameter/defaultunit-9sm2x)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-38cqc)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-8xbaf)
- [Concentration mass](/documentation/appintents/intentparameter-measurements-concentration-mass)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ConcentrationMass?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-8lmlo)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ConcentrationMass?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-5unqk)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ConcentrationMass, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-940ir)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ConcentrationMass, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-8ymzv)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-6tije)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-4iyul)

###### Accessing unit details

- [var unit: IntentParameter<Value>.ConcentrationMass?](/documentation/appintents/intentparameter/unit-4ukvz)
- [IntentParameter.ConcentrationMass](/documentation/appintents/intentparameter/concentrationmass)

###### Enumeration Cases

- [case gramsPerLiter](/documentation/appintents/intentparameter/concentrationmass/gramsperliter)
- [case milligramsPerDeciliter](/documentation/appintents/intentparameter/concentrationmass/milligramsperdeciliter)
- [var defaultUnit: IntentParameter<Value>.ConcentrationMass?](/documentation/appintents/intentparameter/defaultunit-6mid8)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-5s36k)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-831sz)
- [Dispersion](/documentation/appintents/intentparameter-measurements-dispersion)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Dispersion?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-tpe)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Dispersion?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-4tvhn)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Dispersion, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-sm0d)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Dispersion, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-7o9q1)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-8kqrp)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-5tmvj)

###### Accessing unit details

- [var unit: IntentParameter<Value>.Dispersion?](/documentation/appintents/intentparameter/unit-9rnvi)
- [IntentParameter.Dispersion](/documentation/appintents/intentparameter/dispersion)

###### Enumeration Cases

- [case partsPerMillion](/documentation/appintents/intentparameter/dispersion/partspermillion)
- [var defaultUnit: IntentParameter<Value>.Dispersion?](/documentation/appintents/intentparameter/defaultunit-tk2s)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-1bmpc)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-8ge3z)
- [Durations](/documentation/appintents/intentparameter-measurements-duration)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Duration?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-9llvy)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Duration?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-3enhk)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Duration, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-1nq46)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Duration, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-92pkd)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-hetl)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-8ba5t)

###### Accessing unit details

- [var unit: IntentParameter<Value>.Duration?](/documentation/appintents/intentparameter/unit-6yxwx)
- [IntentParameter.Duration](/documentation/appintents/intentparameter/duration)

###### Enumeration Cases

- [case hours](/documentation/appintents/intentparameter/duration/hours)
- [case microseconds](/documentation/appintents/intentparameter/duration/microseconds)
- [case milliseconds](/documentation/appintents/intentparameter/duration/milliseconds)
- [case minutes](/documentation/appintents/intentparameter/duration/minutes)
- [case nanoseconds](/documentation/appintents/intentparameter/duration/nanoseconds)
- [case picoseconds](/documentation/appintents/intentparameter/duration/picoseconds)
- [case seconds](/documentation/appintents/intentparameter/duration/seconds)
- [var defaultUnit: IntentParameter<Value>.Duration?](/documentation/appintents/intentparameter/defaultunit-7lkkh)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-89ub3)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-2bek3)
- [Electric charge](/documentation/appintents/intentparameter-measurements-electric-charge)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricCharge?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-2csec)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricCharge?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-7lsjk)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricCharge, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-4pk8t)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricCharge, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-28f3o)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-96w5w)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-8kaep)

###### Accessing unit details

- [var unit: IntentParameter<Value>.ElectricCharge?](/documentation/appintents/intentparameter/unit-81ehc)
- [IntentParameter.ElectricCharge](/documentation/appintents/intentparameter/electriccharge)

###### Enumeration Cases

- [case ampereHours](/documentation/appintents/intentparameter/electriccharge/amperehours)
- [case coulombs](/documentation/appintents/intentparameter/electriccharge/coulombs)
- [case kiloampereHours](/documentation/appintents/intentparameter/electriccharge/kiloamperehours)
- [case megaampereHours](/documentation/appintents/intentparameter/electriccharge/megaamperehours)
- [case microampereHours](/documentation/appintents/intentparameter/electriccharge/microamperehours)
- [case milliampereHours](/documentation/appintents/intentparameter/electriccharge/milliamperehours)
- [var defaultUnit: IntentParameter<Value>.ElectricCharge?](/documentation/appintents/intentparameter/defaultunit-1cdc2)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-2g1sv)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-3wgie)
- [Electric current](/documentation/appintents/intentparameter-measurements-electric-current)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricCurrent?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-9yrm9)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricCurrent?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-4214k)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricCurrent, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-6tmsl)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricCurrent, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-631td)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-8rqdf)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-4ixko)

###### Accessing unit details

- [var unit: IntentParameter<Value>.ElectricCurrent?](/documentation/appintents/intentparameter/unit-5prj2)
- [IntentParameter.ElectricCurrent](/documentation/appintents/intentparameter/electriccurrent)

###### Enumeration Cases

- [case amperes](/documentation/appintents/intentparameter/electriccurrent/amperes)
- [case kiloamperes](/documentation/appintents/intentparameter/electriccurrent/kiloamperes)
- [case megaamperes](/documentation/appintents/intentparameter/electriccurrent/megaamperes)
- [case microamperes](/documentation/appintents/intentparameter/electriccurrent/microamperes)
- [case milliamperes](/documentation/appintents/intentparameter/electriccurrent/milliamperes)
- [var defaultUnit: IntentParameter<Value>.ElectricCurrent?](/documentation/appintents/intentparameter/defaultunit-m6h5)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-4hant)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-44r3e)
- [Electric potential difference](/documentation/appintents/intentparameter-measurements-electric-difference)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricPotentialDifference?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-20tna)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricPotentialDifference?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-5zan3)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricPotentialDifference, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-85h1x)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricPotentialDifference, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-90byi)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-5tqr4)

###### Accessing unit details

- [var unit: IntentParameter<Value>.ElectricPotentialDifference?](/documentation/appintents/intentparameter/unit-3clo2)
- [IntentParameter.ElectricPotentialDifference](/documentation/appintents/intentparameter/electricpotentialdifference)

###### Enumeration Cases

- [case kilovolts](/documentation/appintents/intentparameter/electricpotentialdifference/kilovolts)
- [case megavolts](/documentation/appintents/intentparameter/electricpotentialdifference/megavolts)
- [case microvolts](/documentation/appintents/intentparameter/electricpotentialdifference/microvolts)
- [case millivolts](/documentation/appintents/intentparameter/electricpotentialdifference/millivolts)
- [case volts](/documentation/appintents/intentparameter/electricpotentialdifference/volts)
- [var defaultUnit: IntentParameter<Value>.ElectricPotentialDifference?](/documentation/appintents/intentparameter/defaultunit-2uqct)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-4hoq0)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-7e0ti)
- [Electric resistance](/documentation/appintents/intentparameter-measurements-electric-resistance)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricResistance?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-3hah0)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricResistance?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-4kgba)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricResistance, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-65c81)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricResistance, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-19rj5)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-7gjzx)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-7tfgo)

###### Accessing unit details

- [var unit: IntentParameter<Value>.ElectricResistance?](/documentation/appintents/intentparameter/unit-670ic)
- [IntentParameter.ElectricResistance](/documentation/appintents/intentparameter/electricresistance)

###### Enumeration Cases

- [case kiloohms](/documentation/appintents/intentparameter/electricresistance/kiloohms)
- [case megaohms](/documentation/appintents/intentparameter/electricresistance/megaohms)
- [case microohms](/documentation/appintents/intentparameter/electricresistance/microohms)
- [case milliohms](/documentation/appintents/intentparameter/electricresistance/milliohms)
- [case ohms](/documentation/appintents/intentparameter/electricresistance/ohms)
- [var defaultUnit: IntentParameter<Value>.ElectricResistance?](/documentation/appintents/intentparameter/defaultunit-4mrsv)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-8gwi5)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-14ddy)
- [Energy](/documentation/appintents/intentparameter-measurements-energy)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Energy?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-7t16t)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Energy?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-6wqqj)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Energy, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-8xogp)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Energy, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-5ftzv)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-96pe0)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-74lkf)

###### Accessing unit details

- [var unit: IntentParameter<Value>.Energy?](/documentation/appintents/intentparameter/unit-91p3x)
- [IntentParameter.Energy](/documentation/appintents/intentparameter/energy)

###### Enumeration Cases

- [case calories](/documentation/appintents/intentparameter/energy/calories)
- [case joules](/documentation/appintents/intentparameter/energy/joules)
- [case kilocalories](/documentation/appintents/intentparameter/energy/kilocalories)
- [case kilojoules](/documentation/appintents/intentparameter/energy/kilojoules)
- [case kilowattHours](/documentation/appintents/intentparameter/energy/kilowatthours)
- [var defaultUnit: IntentParameter<Value>.Energy?](/documentation/appintents/intentparameter/defaultunit-2n8ud)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-493zp)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-6p731)
- [Frequency](/documentation/appintents/intentparameter-measurements-frequency)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Frequency?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-9tm7b)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Frequency?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-6324p)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Frequency, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-1iwe8)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Frequency, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-5xtid)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-3vk1g)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-4xd9k)

###### Accessing unit details

- [var unit: IntentParameter<Value>.Frequency?](/documentation/appintents/intentparameter/unit-69agf)
- [IntentParameter.Frequency](/documentation/appintents/intentparameter/frequency)

###### Enumeration Cases

- [case framesPerSecond](/documentation/appintents/intentparameter/frequency/framespersecond)
- [case gigahertz](/documentation/appintents/intentparameter/frequency/gigahertz)
- [case hertz](/documentation/appintents/intentparameter/frequency/hertz)
- [case kilohertz](/documentation/appintents/intentparameter/frequency/kilohertz)
- [case megahertz](/documentation/appintents/intentparameter/frequency/megahertz)
- [case microhertz](/documentation/appintents/intentparameter/frequency/microhertz)
- [case millihertz](/documentation/appintents/intentparameter/frequency/millihertz)
- [case nanohertz](/documentation/appintents/intentparameter/frequency/nanohertz)
- [case terahertz](/documentation/appintents/intentparameter/frequency/terahertz)
- [var defaultUnit: IntentParameter<Value>.Frequency?](/documentation/appintents/intentparameter/defaultunit-61co5)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-8i8i1)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-52v1p)
- [Fuel efficiency](/documentation/appintents/intentparameter-measurements-fuel-efficiency)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.FuelEfficiency?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-77uev)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.FuelEfficiency?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-73a7m)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.FuelEfficiency, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-377af)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.FuelEfficiency, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-3uzkv)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-23z3f)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-7fcqo)

###### Accessing unit details

- [var unit: IntentParameter<Value>.FuelEfficiency?](/documentation/appintents/intentparameter/unit-3ek73)
- [IntentParameter.FuelEfficiency](/documentation/appintents/intentparameter/fuelefficiency)

###### Enumeration Cases

- [case litersPer100Kilometers](/documentation/appintents/intentparameter/fuelefficiency/litersper100kilometers)
- [case milesPerGallon](/documentation/appintents/intentparameter/fuelefficiency/milespergallon)
- [case milesPerImperialGallon](/documentation/appintents/intentparameter/fuelefficiency/milesperimperialgallon)
- [var defaultUnit: IntentParameter<Value>.FuelEfficiency?](/documentation/appintents/intentparameter/defaultunit-2u2qw)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-6wblf)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-322mt)
- [Illuminance](/documentation/appintents/intentparameter-measurements-illuminance)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Illuminance?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-81yqr)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Illuminance?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-2486g)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Illuminance, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-73fj3)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Illuminance, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-1ji9i)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-8j88q)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-4hm4)

###### Accessing unit details

- [var unit: IntentParameter<Value>.Illuminance?](/documentation/appintents/intentparameter/unit-5d6kq)
- [IntentParameter.Illuminance](/documentation/appintents/intentparameter/illuminance)

###### Enumeration Cases

- [case lux](/documentation/appintents/intentparameter/illuminance/lux)
- [var defaultUnit: IntentParameter<Value>.Illuminance?](/documentation/appintents/intentparameter/defaultunit-2j2ui)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-6mvvw)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-po5z)
- [Information storage](/documentation/appintents/intentparameter-measurements-information-storage)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.InformationStorage?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-7i4yk)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.InformationStorage?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-53sza)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.InformationStorage, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-38ide)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.InformationStorage, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-2jxve)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-7fp2k)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-zx45)

###### Accessing unit details

- [var unit: IntentParameter<Value>.InformationStorage?](/documentation/appintents/intentparameter/unit-36fxd)
- [IntentParameter.InformationStorage](/documentation/appintents/intentparameter/informationstorage)

###### Enumeration Cases

- [case bits](/documentation/appintents/intentparameter/informationstorage/bits)
- [case bytes](/documentation/appintents/intentparameter/informationstorage/bytes)
- [case exabits](/documentation/appintents/intentparameter/informationstorage/exabits)
- [case exabytes](/documentation/appintents/intentparameter/informationstorage/exabytes)
- [case exbibits](/documentation/appintents/intentparameter/informationstorage/exbibits)
- [case exbibytes](/documentation/appintents/intentparameter/informationstorage/exbibytes)
- [case gibibits](/documentation/appintents/intentparameter/informationstorage/gibibits)
- [case gibibytes](/documentation/appintents/intentparameter/informationstorage/gibibytes)
- [case gigabits](/documentation/appintents/intentparameter/informationstorage/gigabits)
- [case gigabytes](/documentation/appintents/intentparameter/informationstorage/gigabytes)
- [case kibibits](/documentation/appintents/intentparameter/informationstorage/kibibits)
- [case kibibytes](/documentation/appintents/intentparameter/informationstorage/kibibytes)
- [case kilobits](/documentation/appintents/intentparameter/informationstorage/kilobits)
- [case kilobytes](/documentation/appintents/intentparameter/informationstorage/kilobytes)
- [case mebibits](/documentation/appintents/intentparameter/informationstorage/mebibits)
- [case mebibytes](/documentation/appintents/intentparameter/informationstorage/mebibytes)
- [case megabits](/documentation/appintents/intentparameter/informationstorage/megabits)
- [case megabytes](/documentation/appintents/intentparameter/informationstorage/megabytes)
- [case nibbles](/documentation/appintents/intentparameter/informationstorage/nibbles)
- [case pebibits](/documentation/appintents/intentparameter/informationstorage/pebibits)
- [case pebibytes](/documentation/appintents/intentparameter/informationstorage/pebibytes)
- [case petabits](/documentation/appintents/intentparameter/informationstorage/petabits)
- [case petabytes](/documentation/appintents/intentparameter/informationstorage/petabytes)
- [case tebibits](/documentation/appintents/intentparameter/informationstorage/tebibits)
- [case tebibytes](/documentation/appintents/intentparameter/informationstorage/tebibytes)
- [case terabits](/documentation/appintents/intentparameter/informationstorage/terabits)
- [case terabytes](/documentation/appintents/intentparameter/informationstorage/terabytes)
- [case yobibits](/documentation/appintents/intentparameter/informationstorage/yobibits)
- [case yobibytes](/documentation/appintents/intentparameter/informationstorage/yobibytes)
- [case yottabits](/documentation/appintents/intentparameter/informationstorage/yottabits)
- [case yottabytes](/documentation/appintents/intentparameter/informationstorage/yottabytes)
- [case zebibits](/documentation/appintents/intentparameter/informationstorage/zebibits)
- [case zebibytes](/documentation/appintents/intentparameter/informationstorage/zebibytes)
- [case zettabits](/documentation/appintents/intentparameter/informationstorage/zettabits)
- [case zettabytes](/documentation/appintents/intentparameter/informationstorage/zettabytes)
- [var defaultUnit: IntentParameter<Value>.InformationStorage?](/documentation/appintents/intentparameter/defaultunit-ry6s)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-9qbxt)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-f41e)
- [Length](/documentation/appintents/intentparameter-measurements-length)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Length?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-98i2y)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Length?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-638xv)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Length, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-78oc1)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Length, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-qevc)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-1o4j9)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-3wceb)

###### Accessing unit details

- [var unit: IntentParameter<Value>.Length?](/documentation/appintents/intentparameter/unit-9xzg4)
- [IntentParameter.Length](/documentation/appintents/intentparameter/length)

###### Enumeration Cases

- [case astronomicalUnits](/documentation/appintents/intentparameter/length/astronomicalunits)
- [case centimeters](/documentation/appintents/intentparameter/length/centimeters)
- [case decameters](/documentation/appintents/intentparameter/length/decameters)
- [case decimeters](/documentation/appintents/intentparameter/length/decimeters)
- [case fathoms](/documentation/appintents/intentparameter/length/fathoms)
- [case feet](/documentation/appintents/intentparameter/length/feet)
- [case furlongs](/documentation/appintents/intentparameter/length/furlongs)
- [case hectometers](/documentation/appintents/intentparameter/length/hectometers)
- [case inches](/documentation/appintents/intentparameter/length/inches)
- [case kilometers](/documentation/appintents/intentparameter/length/kilometers)
- [case lightyears](/documentation/appintents/intentparameter/length/lightyears)
- [case megameters](/documentation/appintents/intentparameter/length/megameters)
- [case meters](/documentation/appintents/intentparameter/length/meters)
- [case micrometers](/documentation/appintents/intentparameter/length/micrometers)
- [case miles](/documentation/appintents/intentparameter/length/miles)
- [case millimeters](/documentation/appintents/intentparameter/length/millimeters)
- [case nanometers](/documentation/appintents/intentparameter/length/nanometers)
- [case nauticalMiles](/documentation/appintents/intentparameter/length/nauticalmiles)
- [case parsecs](/documentation/appintents/intentparameter/length/parsecs)
- [case picometers](/documentation/appintents/intentparameter/length/picometers)
- [case scandinavianMiles](/documentation/appintents/intentparameter/length/scandinavianmiles)
- [case yards](/documentation/appintents/intentparameter/length/yards)
- [var defaultUnit: IntentParameter<Value>.Length?](/documentation/appintents/intentparameter/defaultunit-2blhs)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-1r83r)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-8ouwi)
- [Mass](/documentation/appintents/intentparameter-measurements-mass)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Mass?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-5l545)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Mass?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-2uf3n)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Mass, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-vfqa)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Mass, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-7ttsy)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-9ao8)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-6hhad)

###### Accessing unit details

- [var unit: IntentParameter<Value>.Mass?](/documentation/appintents/intentparameter/unit-15bj6)
- [IntentParameter.Mass](/documentation/appintents/intentparameter/mass)

###### Enumeration Cases

- [case carats](/documentation/appintents/intentparameter/mass/carats)
- [case centigrams](/documentation/appintents/intentparameter/mass/centigrams)
- [case decigrams](/documentation/appintents/intentparameter/mass/decigrams)
- [case grams](/documentation/appintents/intentparameter/mass/grams)
- [case kilograms](/documentation/appintents/intentparameter/mass/kilograms)
- [case metricTons](/documentation/appintents/intentparameter/mass/metrictons)
- [case micrograms](/documentation/appintents/intentparameter/mass/micrograms)
- [case milligrams](/documentation/appintents/intentparameter/mass/milligrams)
- [case nanograms](/documentation/appintents/intentparameter/mass/nanograms)
- [case ounces](/documentation/appintents/intentparameter/mass/ounces)
- [case ouncesTroy](/documentation/appintents/intentparameter/mass/ouncestroy)
- [case picograms](/documentation/appintents/intentparameter/mass/picograms)
- [case pounds](/documentation/appintents/intentparameter/mass/pounds)
- [case shortTons](/documentation/appintents/intentparameter/mass/shorttons)
- [case slugs](/documentation/appintents/intentparameter/mass/slugs)
- [case stones](/documentation/appintents/intentparameter/mass/stones)
- [var defaultUnit: IntentParameter<Value>.Mass?](/documentation/appintents/intentparameter/defaultunit-6a913)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-5kbp3)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-1lh4n)
- [Power](/documentation/appintents/intentparameter-measurements-power)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Power?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-4mwnc)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Power?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-7nn0p)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Power, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-6bcwl)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Power, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-1j23d)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-dpn5)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-4k1b5)

###### Accessing unit details

- [var unit: IntentParameter<Value>.Power?](/documentation/appintents/intentparameter/unit-3mp17)
- [IntentParameter.Power](/documentation/appintents/intentparameter/power)

###### Enumeration Cases

- [case femtowatts](/documentation/appintents/intentparameter/power/femtowatts)
- [case gigawatts](/documentation/appintents/intentparameter/power/gigawatts)
- [case horsepower](/documentation/appintents/intentparameter/power/horsepower)
- [case kilowatts](/documentation/appintents/intentparameter/power/kilowatts)
- [case megawatts](/documentation/appintents/intentparameter/power/megawatts)
- [case microwatts](/documentation/appintents/intentparameter/power/microwatts)
- [case milliwatts](/documentation/appintents/intentparameter/power/milliwatts)
- [case nanowatts](/documentation/appintents/intentparameter/power/nanowatts)
- [case picowatts](/documentation/appintents/intentparameter/power/picowatts)
- [case terawatts](/documentation/appintents/intentparameter/power/terawatts)
- [case watts](/documentation/appintents/intentparameter/power/watts)
- [var defaultUnit: IntentParameter<Value>.Power?](/documentation/appintents/intentparameter/defaultunit-4fr1a)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-2if8y)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-hnv2)
- [Pressure](/documentation/appintents/intentparameter-measurements-pressure)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Pressure?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-4pnv9)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Pressure?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-6ufuu)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Pressure, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-15i5o)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Pressure, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-31nta)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-8yymb)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-35vja)

###### Accessing unit details

- [var unit: IntentParameter<Value>.Pressure?](/documentation/appintents/intentparameter/unit-991uj)
- [IntentParameter.Pressure](/documentation/appintents/intentparameter/pressure)

###### Enumeration Cases

- [case bars](/documentation/appintents/intentparameter/pressure/bars)
- [case gigapascals](/documentation/appintents/intentparameter/pressure/gigapascals)
- [case hectopascals](/documentation/appintents/intentparameter/pressure/hectopascals)
- [case inchesOfMercury](/documentation/appintents/intentparameter/pressure/inchesofmercury)
- [case kilopascals](/documentation/appintents/intentparameter/pressure/kilopascals)
- [case megapascals](/documentation/appintents/intentparameter/pressure/megapascals)
- [case millibars](/documentation/appintents/intentparameter/pressure/millibars)
- [case millimetersOfMercury](/documentation/appintents/intentparameter/pressure/millimetersofmercury)
- [case newtonsPerMetersSquared](/documentation/appintents/intentparameter/pressure/newtonspermeterssquared)
- [case poundsForcePerSquareInch](/documentation/appintents/intentparameter/pressure/poundsforcepersquareinch)
- [var defaultUnit: IntentParameter<Value>.Pressure?](/documentation/appintents/intentparameter/defaultunit-4p4yh)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-83fjo)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-832oo)
- [Speed](/documentation/appintents/intentparameter-measurements-speed)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Speed?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-5i0hc)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Speed?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-6xvn5)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Speed, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-9yog)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Speed, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-7pyxn)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-6c1ac)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-3owho)

###### Accessing unit details

- [var unit: IntentParameter<Value>.Speed?](/documentation/appintents/intentparameter/unit-620ka)
- [IntentParameter.Speed](/documentation/appintents/intentparameter/speed)

###### Enumeration Cases

- [case kilometersPerHour](/documentation/appintents/intentparameter/speed/kilometersperhour)
- [case knots](/documentation/appintents/intentparameter/speed/knots)
- [case metersPerSecond](/documentation/appintents/intentparameter/speed/meterspersecond)
- [case milesPerHour](/documentation/appintents/intentparameter/speed/milesperhour)
- [var defaultUnit: IntentParameter<Value>.Speed?](/documentation/appintents/intentparameter/defaultunit-92l04)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-1bekt)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-8a31x)
- [Temperature](/documentation/appintents/intentparameter-measurements-temperature)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Speed?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-5i0hc)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Temperature?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-7l000)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Temperature?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-7sgxq)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Temperature, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-2lxxx)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Temperature, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-3t56o)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-3u0y1)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-9iqxr)

###### Accessing unit details

- [var unit: IntentParameter<Value>.Temperature?](/documentation/appintents/intentparameter/unit-irv)
- [IntentParameter.Temperature](/documentation/appintents/intentparameter/temperature)

###### Enumeration Cases

- [case celsius](/documentation/appintents/intentparameter/temperature/celsius)
- [case fahrenheit](/documentation/appintents/intentparameter/temperature/fahrenheit)
- [case kelvin](/documentation/appintents/intentparameter/temperature/kelvin)
- [var defaultUnit: IntentParameter<Value>.Temperature?](/documentation/appintents/intentparameter/defaultunit-62blf)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-9bl77)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-2ca9l)
- [Volume](/documentation/appintents/intentparameter-measurements-volume)

###### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Volume?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-3u9af)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Volume?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-4kad6)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Volume, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-990sk)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Volume, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-59wna)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-2v1t4)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-42ayi)

###### Accessing unit details

- [var unit: IntentParameter<Value>.Volume?](/documentation/appintents/intentparameter/unit-95hrl)
- [IntentParameter.Volume](/documentation/appintents/intentparameter/volume)

###### Enumeration Cases

- [case acreFeet](/documentation/appintents/intentparameter/volume/acrefeet)
- [case bushels](/documentation/appintents/intentparameter/volume/bushels)
- [case centiliters](/documentation/appintents/intentparameter/volume/centiliters)
- [case cubicCentimeters](/documentation/appintents/intentparameter/volume/cubiccentimeters)
- [case cubicDecimeters](/documentation/appintents/intentparameter/volume/cubicdecimeters)
- [case cubicFeet](/documentation/appintents/intentparameter/volume/cubicfeet)
- [case cubicInches](/documentation/appintents/intentparameter/volume/cubicinches)
- [case cubicKilometers](/documentation/appintents/intentparameter/volume/cubickilometers)
- [case cubicMeters](/documentation/appintents/intentparameter/volume/cubicmeters)
- [case cubicMiles](/documentation/appintents/intentparameter/volume/cubicmiles)
- [case cubicMillimeters](/documentation/appintents/intentparameter/volume/cubicmillimeters)
- [case cubicYards](/documentation/appintents/intentparameter/volume/cubicyards)
- [case cups](/documentation/appintents/intentparameter/volume/cups)
- [case deciliters](/documentation/appintents/intentparameter/volume/deciliters)
- [case fluidOunces](/documentation/appintents/intentparameter/volume/fluidounces)
- [case gallons](/documentation/appintents/intentparameter/volume/gallons)
- [case imperialFluidOunces](/documentation/appintents/intentparameter/volume/imperialfluidounces)
- [case imperialGallons](/documentation/appintents/intentparameter/volume/imperialgallons)
- [case imperialPints](/documentation/appintents/intentparameter/volume/imperialpints)
- [case imperialQuarts](/documentation/appintents/intentparameter/volume/imperialquarts)
- [case imperialTablespoons](/documentation/appintents/intentparameter/volume/imperialtablespoons)
- [case imperialTeaspoons](/documentation/appintents/intentparameter/volume/imperialteaspoons)
- [case kiloliters](/documentation/appintents/intentparameter/volume/kiloliters)
- [case liters](/documentation/appintents/intentparameter/volume/liters)
- [case megaliters](/documentation/appintents/intentparameter/volume/megaliters)
- [case metricCups](/documentation/appintents/intentparameter/volume/metriccups)
- [case milliliters](/documentation/appintents/intentparameter/volume/milliliters)
- [case pints](/documentation/appintents/intentparameter/volume/pints)
- [case quarts](/documentation/appintents/intentparameter/volume/quarts)
- [case tablespoons](/documentation/appintents/intentparameter/volume/tablespoons)
- [case teaspoons](/documentation/appintents/intentparameter/volume/teaspoons)
- [var defaultUnit: IntentParameter<Value>.Volume?](/documentation/appintents/intentparameter/defaultunit-2bsyg)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparameter/supportsnegativenumbers-903r6)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparameter/unitadjustforlocale-9ln52)

#### Creating an intent parameter for custom types

- [App entities](/documentation/appintents/intentparameter-app-entity)

##### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:)-90j68)
- [convenience init<Query>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, query: Query)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:query:)-4yyz3)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:resolvers:)-9fsdb)

##### Deprecated intiializers

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:size:inputconnectionbehavior:)-7cox5)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:size:inputconnectionbehavior:resolvers:)-1f92a)
- [convenience init<Query>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, query: Query)](/documentation/appintents/intentparameter/init(title:description:default:size:inputconnectionbehavior:query:)-1rwev)
- [convenience init<Query>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, query: Query)](/documentation/appintents/intentparameter/init(title:description:default:size:inputconnectionbehavior:query:)-7yfm3)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:size:inputconnectionbehavior:resolvers:)-1f92a)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:size:inputconnectionbehavior:resolvers:)-8o0lz)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:size:inputconnectionbehavior:)-8bfkz)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:)-tfj8)
- [convenience init<Query>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, query: Query)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:query:)-49n42)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:resolvers:)-1csrx)
- [App enums](/documentation/appintents/intentparameter-app-enum)

##### Creating an intent parameter

- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType])](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:)-2wsgy)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType])](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:)-9lv7y)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:optionsprovider:)-3vfr6)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:optionsprovider:)-4aw32)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:resolvers:)-1mxkz)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:resolvers:)-21q7p)

#### Accessing the underlying value

- [let defaultValue: Value.UnwrappedType?](/documentation/appintents/intentparameter/defaultvalue)
- [var projectedValue: IntentParameter<Value>](/documentation/appintents/intentparameter/projectedvalue)
- [var wrappedValue: Value](/documentation/appintents/intentparameter/wrappedvalue)
- [var valueState: IntentParameter<Value>.ValueState](/documentation/appintents/intentparameter/valuestate-swift.property)
- [IntentParameter.ValueState](/documentation/appintents/intentparameter/valuestate-swift.enum)

##### Enumeration Cases

- [case set(Value)](/documentation/appintents/intentparameter/valuestate-swift.enum/set(_:))
- [case unset](/documentation/appintents/intentparameter/valuestate-swift.enum/unset)

#### Requesting a value

- [func requestValue(IntentDialog?) async throws -> Value.ValueType](/documentation/appintents/intentparameter/requestvalue(_:)-592nd)
- [func needsValueError(IntentDialog?) -> AppIntentError](/documentation/appintents/intentparameter/needsvalueerror(_:))

#### Requesting confirmation

- [func requestConfirmation(for: Value.ValueType, dialog: IntentDialog?) async throws -> Bool](/documentation/appintents/intentparameter/requestconfirmation(for:dialog:))
- [func requestConfirmation<ViewType>(for: Value.ValueType, dialog: IntentDialog?, view: ViewType) async throws -> Bool](/documentation/appintents/intentparameter/requestconfirmation(for:dialog:view:)-6hiyi)
- [func requestConfirmation<ViewType>(for: Value.ValueType, dialog: IntentDialog?, view: () -> ViewType) async throws -> Bool](/documentation/appintents/intentparameter/requestconfirmation(for:dialog:view:)-9z0pe)

#### Requesting disambiguation

- [func requestDisambiguation(among: [Value.ValueType], dialog: IntentDialog?) async throws -> Value.ValueType](/documentation/appintents/intentparameter/requestdisambiguation(among:dialog:))
- [func needsDisambiguationError(among: [Value.ValueType], dialog: IntentDialog?) -> AppIntentError](/documentation/appintents/intentparameter/needsdisambiguationerror(among:dialog:))

#### Deprecated

- [Deprecated symbols](/documentation/appintents/intentparameter-deprecated)

##### Deprecated methods

- [func requestValue(IntentDialog?) -> any Error](/documentation/appintents/intentparameter/requestvalue(_:)-70qzm)

#### Initializers

- [convenience init<OptionsProvider>(description: LocalizedStringResource?, controlStyle: IntentParameter<Value>.DoubleControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-4kart)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, controlStyle: IntentParameter<Value>.IntControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-5q83i)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, controlStyle: IntentParameter<Value>.IntControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-1xbvu)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, controlStyle: IntentParameter<Value>.DoubleControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-510ma)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, controlStyle: IntentParameter<Value>.IntControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:)-2bbg1)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, controlStyle: IntentParameter<Value>.DoubleControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:)-6rqfz)
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, controlStyle: IntentParameter<Value>.IntControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:resolvers:)-7r5on)
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, controlStyle: IntentParameter<Value>.DoubleControlStyle, inclusiveRange: IntentParameter<Value>.InclusiveRange<Value.ValueType>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:resolvers:)-7sif9)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter<Value>.InclusiveRange<Decimal>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter<Value>.InclusiveRange<Decimal>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter<Value>.InclusiveRange<Decimal>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter<Value>.InclusiveRange<Decimal>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:resolvers:))
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, displayName: Bool.IntentDisplayName?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:displayname:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, displayName: Bool.IntentDisplayName?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:displayname:requestvaluedialog:inputconnectionbehavior:resolvers:))
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter<Value>.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter<Value>.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter<Value>.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter<Value>.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:resolvers:))
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, inputOptions: String.IntentInputOptions?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:inputoptions:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, inputOptions: String.IntentInputOptions?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:inputoptions:requestvaluedialog:inputconnectionbehavior:resolvers:))
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:)-4zlga)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:)-6zhvu)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-4121t)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-5re0u)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-2ygkf)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-78tck)
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:resolvers:)-5zmtp)
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:resolvers:)-74s2f)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:mode:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:default:mode:requestvaluedialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:mode:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:mode:requestvaluedialog:inputconnectionbehavior:resolvers:))
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:mode:size:inputconnectionbehavior:)-2l4ov)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:mode:size:inputconnectionbehavior:)-7ydg)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:)-1u3wz)
- [convenience init(description: LocalizedStringResource?, default: [Value.ValueType?], requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:)-4khhm)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:)-5xajn)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:)-79g5k)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:)-7a6da)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:)-93x40)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-35b55)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-44ugz)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-7u9xb)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-47rdw)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-5w6ra)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-642)
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:resolvers:)-3nq7y)
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:resolvers:)-4sumo)
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:resolvers:)-5nb0u)
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:resolvers:)-68v17)
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:resolvers:)-7t80i)
- [convenience init<Spec>(description: LocalizedStringResource?, default: [Value.ValueType?], requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:resolvers:)-9qj92)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:))
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init<Query>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, query: Query)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:query:))
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:resolvers:))
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType])](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:)-1434d)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType])](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:)-b4tx)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:optionsprovider:)-54xt7)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:optionsprovider:)-6wjhp)
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:resolvers:)-2rbpm)
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:resolvers:)-l5vr)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:size:inputconnectionbehavior:)-3qoix)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:size:inputconnectionbehavior:)-9vgw6)
- [convenience init<Query>(description: LocalizedStringResource?, default: Value.UnwrappedType?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, query: Query)](/documentation/appintents/intentparameter/init(description:default:size:inputconnectionbehavior:query:)-10bai)
- [convenience init<Query>(description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, query: Query)](/documentation/appintents/intentparameter/init(description:default:size:inputconnectionbehavior:query:)-4d8td)
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:size:inputconnectionbehavior:resolvers:)-3wo7r)
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:size:inputconnectionbehavior:resolvers:)-8vbcc)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:resolvers:))
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:))
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init<Query>(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, query: Query)](/documentation/appintents/intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:query:))
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:resolvers:))
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:supportedcontenttypes:size:inputconnectionbehavior:)-7nan7)
- [convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:default:supportedcontenttypes:size:inputconnectionbehavior:)-zkb3)
- [convenience init<Query>(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, query: Query)](/documentation/appintents/intentparameter/init(description:default:supportedcontenttypes:size:inputconnectionbehavior:query:)-4b9u2)
- [convenience init<Query>(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, query: Query)](/documentation/appintents/intentparameter/init(description:default:supportedcontenttypes:size:inputconnectionbehavior:query:)-625v0)
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:supportedcontenttypes:size:inputconnectionbehavior:resolvers:)-1syql)
- [convenience init<Spec>(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:default:supportedcontenttypes:size:inputconnectionbehavior:resolvers:)-8qqfn)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricPotentialDifference?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-1067t)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Length?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-1fhl)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Power?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-1u4dr)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Dispersion?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-2fu0y)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Speed?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-369tw)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Mass?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-3ab0x)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Duration?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-3dz8a)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Angle?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-3yi59)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ConcentrationMass?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-46ecl)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Illuminance?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-4bdbs)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricResistance?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-4idtv)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Frequency?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-58usr)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Pressure?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-5m2ot)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Acceleration?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-5n5su)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Temperature?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-7v8en)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.FuelEfficiency?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-80n05)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Energy?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-8i6zb)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.InformationStorage?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-8y4a0)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricCurrent?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-c6x0)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricCharge?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-rf9a)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Volume?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-szop)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Area?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-v6in)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricResistance?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-18lj9)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Frequency?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-18vow)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.InformationStorage?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-1zt0c)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Pressure?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-22w3s)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricCurrent?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-2f6li)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Speed?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-2mjxs)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Duration?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-2phn6)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricCharge?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-30ua6)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Angle?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-38hj7)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Dispersion?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-40ry4)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Energy?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-4mr62)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Acceleration?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-4n8df)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Area?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-4qbtv)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Temperature?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-56041)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ElectricPotentialDifference?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-58qw5)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Power?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-5n1oa)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.ConcentrationMass?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-78ojh)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Length?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-7uwrs)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Volume?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-7w1ns)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Mass?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-8cr33)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.Illuminance?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-91qbw)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter<Value>.FuelEfficiency?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-9uud7)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Length, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-13r7l)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.FuelEfficiency, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-14cwb)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricCharge, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-1d4mf)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Speed, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-1p7mp)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Area, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-1wc7r)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Angle, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-39lto)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Mass, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-3cv0s)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Duration, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-6493r)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ConcentrationMass, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-6s30)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Energy, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-6vpji)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricResistance, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-76nay)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Pressure, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-7cpkn)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Frequency, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-7ek1r)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.InformationStorage, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-7gy7r)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Dispersion, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-7hhju)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Acceleration, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-7kshz)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Power, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-7o6o1)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricCurrent, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-7r2xv)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Illuminance, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-84hor)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricPotentialDifference, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-8csci)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Volume, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-91m31)
- [convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Temperature, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:)-ry3q)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricCurrent, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-11alu)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Duration, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-1mn4o)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricCharge, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-3ccjw)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Illuminance, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-3e45g)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Speed, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-3k28y)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Area, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-4unh7)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Power, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-4x025)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Volume, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-4y2ji)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Pressure, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-53c8q)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricResistance, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-57xrf)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Length, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-5hik9)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Acceleration, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-5j1w2)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.FuelEfficiency, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-5m5ma)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Frequency, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-71ra6)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.InformationStorage, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-7ktat)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Temperature, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-7na1d)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Dispersion, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-88ndl)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ConcentrationMass, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-8z0m4)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Energy, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-8ze5z)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.ElectricPotentialDifference, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-9aegd)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Angle, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-9dx4v)
- [convenience init<Spec>(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter<Value>.Mass, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:)-zupw)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, inputOptions: String.IntentInputOptions?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:inputoptions:requestvaluedialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, inputOptions: String.IntentInputOptions?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:inputoptions:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:)-420y8)
- [convenience init(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:)-9sr60)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-14xjm)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-18ve1)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-1lhvb)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-1ol4b)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-21pha)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-22ztz)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-31j8q)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-42f7u)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-46vzo)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-4g5iz)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-4g95c)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-5isny)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-6ogfm)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-6ygak)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-7c1z)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-7pg6p)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-7v8ra)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-7x2ja)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-7xgjf)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-80yj5)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-8atn)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-8esp4)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-8sdl4)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-8wayj)
- [convenience init<OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-91uk9)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-6ewsn)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-8nhkf)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-m1gg)
- [convenience init<Spec>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:))
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-1lg4d)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-1ya6b)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-2ds5x)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-2riag)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-318k)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-33314)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-3bxc3)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-3ihoz)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-3wh62)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-51452)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-51c85)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-5ivpx)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-5lqwc)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-5rww1)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-65774)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-6f6od)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-6wwmn)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-8b4zn)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-8k0st)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-8rzn5)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-8wthz)
- [convenience init<Spec, OptionsProvider>(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-evi8)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter<Value>.InclusiveRange<Decimal>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter<Value>.InclusiveRange<Decimal>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter<Value>.InclusiveRange<Decimal>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter<Value>.InclusiveRange<Decimal>?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:resolvers:))
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter<Value>.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter<Value>.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter<Value>.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter<Value>.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:resolvers:))
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:)-2k5c)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:)-66rp4)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-4hzyi)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-9aw39)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-3q2dk)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-7bbuy)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:resolvers:)-1pcc5)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter<Value>.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:resolvers:)-60gke)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:mode:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:default:mode:requestvaluedialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:mode:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:mode:requestvaluedialog:inputconnectionbehavior:resolvers:))
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:mode:size:inputconnectionbehavior:)-6ff6b)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:mode:size:inputconnectionbehavior:)-l6tx)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:)-1vzd0)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:)-673mj)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:)-9tg3i)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-59k0)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-8vbiw)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-98jwx)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-3c8yh)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-ls77)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-unrq)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:resolvers:)-3jk2b)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:resolvers:)-3r9px)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:resolvers:)-942vk)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType])](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:)-61lv3)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:optionsprovider:)-2jzm)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:resolvers:)-4icwn)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:size:inputconnectionbehavior:)-6j6se)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:size:inputconnectionbehavior:)-7i2i4)
- [convenience init<Query>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, query: Query)](/documentation/appintents/intentparameter/init(title:description:default:size:inputconnectionbehavior:query:)-1exoh)
- [convenience init<Query>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, query: Query)](/documentation/appintents/intentparameter/init(title:description:default:size:inputconnectionbehavior:query:)-1u20e)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:size:inputconnectionbehavior:resolvers:)-1qu54)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:size:inputconnectionbehavior:resolvers:)-6781p)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:))
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:resolvers:))
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:))
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:))
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:resolvers:))
- [convenience init<Query>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, query: Query)](/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:query:))
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:resolvers:))
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:size:inputconnectionbehavior:)-2iixv)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:size:inputconnectionbehavior:)-40x5o)
- [convenience init<Query>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, query: Query)](/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:size:inputconnectionbehavior:query:)-3a6vl)
- [convenience init<Query>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, query: Query)](/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:size:inputconnectionbehavior:query:)-5y5ep)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:size:inputconnectionbehavior:resolvers:)-26ujo)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array<UTType>?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:size:inputconnectionbehavior:resolvers:)-3da75)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:)-253ni)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:)-25jti)
- [convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:)-51hn9)
- [convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-8likq)
- [convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)-7twy6)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:)-35yv4)
- [convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -> Spec)](/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:)-k1m2)
- [IntentParameterDependency](/documentation/appintents/intentparameterdependency)

#### Initializers

- [convenience init<V0, P0>(KeyPath<Intent, P0>)](/documentation/appintents/intentparameterdependency/init(_:))
- [convenience init<V0, P0, V1, P1>(KeyPath<Intent, P0>, KeyPath<Intent, P1>)](/documentation/appintents/intentparameterdependency/init(_:_:))
- [convenience init<V0, P0, V1, P1, V2, P2>(KeyPath<Intent, P0>, KeyPath<Intent, P1>, KeyPath<Intent, P2>)](/documentation/appintents/intentparameterdependency/init(_:_:_:))
- [convenience init<V0, P0, V1, P1, V2, P2, V3, P3>(KeyPath<Intent, P0>, KeyPath<Intent, P1>, KeyPath<Intent, P2>, KeyPath<Intent, P3>)](/documentation/appintents/intentparameterdependency/init(_:_:_:_:))
- [convenience init<V0, P0, V1, P1, V2, P2, V3, P3, V4, P4>(KeyPath<Intent, P0>, KeyPath<Intent, P1>, KeyPath<Intent, P2>, KeyPath<Intent, P3>, KeyPath<Intent, P4>)](/documentation/appintents/intentparameterdependency/init(_:_:_:_:_:))
- [convenience init<V0, P0, V1, P1, V2, P2, V3, P3, V4, P4, V5, P5>(KeyPath<Intent, P0>, KeyPath<Intent, P1>, KeyPath<Intent, P2>, KeyPath<Intent, P3>, KeyPath<Intent, P4>, KeyPath<Intent, P5>)](/documentation/appintents/intentparameterdependency/init(_:_:_:_:_:_:))
- [convenience init<V0, P0, V1, P1, V2, P2, V3, P3, V4, P4, V5, P5, V6, P6>(KeyPath<Intent, P0>, KeyPath<Intent, P1>, KeyPath<Intent, P2>, KeyPath<Intent, P3>, KeyPath<Intent, P4>, KeyPath<Intent, P5>, KeyPath<Intent, P6>)](/documentation/appintents/intentparameterdependency/init(_:_:_:_:_:_:_:))
- [convenience init<V0, P0, V1, P1, V2, P2, V3, P3, V4, P4, V5, P5, V6, P6, V7, P7>(KeyPath<Intent, P0>, KeyPath<Intent, P1>, KeyPath<Intent, P2>, KeyPath<Intent, P3>, KeyPath<Intent, P4>, KeyPath<Intent, P5>, KeyPath<Intent, P6>, KeyPath<Intent, P7>)](/documentation/appintents/intentparameterdependency/init(_:_:_:_:_:_:_:_:))
- [convenience init<V0, P0, V1, P1, V2, P2, V3, P3, V4, P4, V5, P5, V6, P6, V7, P7, V8, P8>(KeyPath<Intent, P0>, KeyPath<Intent, P1>, KeyPath<Intent, P2>, KeyPath<Intent, P3>, KeyPath<Intent, P4>, KeyPath<Intent, P5>, KeyPath<Intent, P6>, KeyPath<Intent, P7>, KeyPath<Intent, P8>)](/documentation/appintents/intentparameterdependency/init(_:_:_:_:_:_:_:_:_:))
- [convenience init<V0, P0, V1, P1, V2, P2, V3, P3, V4, P4, V5, P5, V6, P6, V7, P7, V8, P8, V9, P9>(KeyPath<Intent, P0>, KeyPath<Intent, P1>, KeyPath<Intent, P2>, KeyPath<Intent, P3>, KeyPath<Intent, P4>, KeyPath<Intent, P5>, KeyPath<Intent, P6>, KeyPath<Intent, P7>, KeyPath<Intent, P8>, KeyPath<Intent, P9>)](/documentation/appintents/intentparameterdependency/init(_:_:_:_:_:_:_:_:_:_:))
- [convenience init<V0, P0, V1, P1, V2, P2, V3, P3, V4, P4, V5, P5, V6, P6, V7, P7, V8, P8, V9, P9, V10, P10>(KeyPath<Intent, P0>, KeyPath<Intent, P1>, KeyPath<Intent, P2>, KeyPath<Intent, P3>, KeyPath<Intent, P4>, KeyPath<Intent, P5>, KeyPath<Intent, P6>, KeyPath<Intent, P7>, KeyPath<Intent, P8>, KeyPath<Intent, P9>, KeyPath<Intent, P10>)](/documentation/appintents/intentparameterdependency/init(_:_:_:_:_:_:_:_:_:_:_:))
- [convenience init<V0, P0, V1, P1, V2, P2, V3, P3, V4, P4, V5, P5, V6, P6, V7, P7, V8, P8, V9, P9, V10, P10, V11, P11>(KeyPath<Intent, P0>, KeyPath<Intent, P1>, KeyPath<Intent, P2>, KeyPath<Intent, P3>, KeyPath<Intent, P4>, KeyPath<Intent, P5>, KeyPath<Intent, P6>, KeyPath<Intent, P7>, KeyPath<Intent, P8>, KeyPath<Intent, P9>, KeyPath<Intent, P10>, KeyPath<Intent, P11>)](/documentation/appintents/intentparameterdependency/init(_:_:_:_:_:_:_:_:_:_:_:_:))
- [convenience init<V0, P0, V1, P1, V2, P2, V3, P3, V4, P4, V5, P5, V6, P6, V7, P7, V8, P8, V9, P9, V10, P10, V11, P11, V12, P12>(KeyPath<Intent, P0>, KeyPath<Intent, P1>, KeyPath<Intent, P2>, KeyPath<Intent, P3>, KeyPath<Intent, P4>, KeyPath<Intent, P5>, KeyPath<Intent, P6>, KeyPath<Intent, P7>, KeyPath<Intent, P8>, KeyPath<Intent, P9>, KeyPath<Intent, P10>, KeyPath<Intent, P11>, KeyPath<Intent, P12>)](/documentation/appintents/intentparameterdependency/init(_:_:_:_:_:_:_:_:_:_:_:_:_:))
- [convenience init<V0, P0, V1, P1, V2, P2, V3, P3, V4, P4, V5, P5, V6, P6, V7, P7, V8, P8, V9, P9, V10, P10, V11, P11, V12, P12, V13, P13>(KeyPath<Intent, P0>, KeyPath<Intent, P1>, KeyPath<Intent, P2>, KeyPath<Intent, P3>, KeyPath<Intent, P4>, KeyPath<Intent, P5>, KeyPath<Intent, P6>, KeyPath<Intent, P7>, KeyPath<Intent, P8>, KeyPath<Intent, P9>, KeyPath<Intent, P10>, KeyPath<Intent, P11>, KeyPath<Intent, P12>, KeyPath<Intent, P13>)](/documentation/appintents/intentparameterdependency/init(_:_:_:_:_:_:_:_:_:_:_:_:_:_:))
- [convenience init<V0, P0, V1, P1, V2, P2, V3, P3, V4, P4, V5, P5, V6, P6, V7, P7, V8, P8, V9, P9, V10, P10, V11, P11, V12, P12, V13, P13, V14, P14>(KeyPath<Intent, P0>, KeyPath<Intent, P1>, KeyPath<Intent, P2>, KeyPath<Intent, P3>, KeyPath<Intent, P4>, KeyPath<Intent, P5>, KeyPath<Intent, P6>, KeyPath<Intent, P7>, KeyPath<Intent, P8>, KeyPath<Intent, P9>, KeyPath<Intent, P10>, KeyPath<Intent, P11>, KeyPath<Intent, P12>, KeyPath<Intent, P13>, KeyPath<Intent, P14>)](/documentation/appintents/intentparameterdependency/init(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

#### Instance Properties

- [var wrappedValue: IntentProjection<Intent>?](/documentation/appintents/intentparameterdependency/wrappedvalue)
- [IntentParameterContext](/documentation/appintents/intentparametercontext)

#### Instance Properties

- [var controlStyle: IntentParameter<Value>.IntControlStyle?](/documentation/appintents/intentparametercontext/controlstyle-2sflf)
- [var controlStyle: IntentParameter<Value>.DoubleControlStyle?](/documentation/appintents/intentparametercontext/controlstyle-6k0y7)
- [var currencyCodes: [String]?](/documentation/appintents/intentparametercontext/currencycodes)
- [var dateKind: IntentParameter<Value>.DateKind?](/documentation/appintents/intentparametercontext/datekind-1znbd)
- [var dateKind: IntentParameter<Value>.DateKind?](/documentation/appintents/intentparametercontext/datekind-301pp)
- [var defaultUnit: IntentParameter<Measurement<UnitFuelEfficiency>>.FuelEfficiency?](/documentation/appintents/intentparametercontext/defaultunit-14jlt)
- [var defaultUnit: IntentParameter<Measurement<UnitLength>>.Length?](/documentation/appintents/intentparametercontext/defaultunit-1b43r)
- [var defaultUnit: IntentParameter<Measurement<UnitAcceleration>>.Acceleration?](/documentation/appintents/intentparametercontext/defaultunit-1h4fh)
- [var defaultUnit: IntentParameter<Measurement<UnitElectricResistance>>.ElectricResistance?](/documentation/appintents/intentparametercontext/defaultunit-1iv6c)
- [var defaultUnit: IntentParameter<Measurement<UnitDispersion>>.Dispersion?](/documentation/appintents/intentparametercontext/defaultunit-2lxed)
- [var defaultUnit: IntentParameter<Measurement<UnitVolume>>.Volume?](/documentation/appintents/intentparametercontext/defaultunit-31gc1)
- [var defaultUnit: IntentParameter<Measurement<UnitMass>>.Mass?](/documentation/appintents/intentparametercontext/defaultunit-3jg9t)
- [var defaultUnit: IntentParameter<Measurement<UnitConcentrationMass>>.ConcentrationMass?](/documentation/appintents/intentparametercontext/defaultunit-3yj46)
- [var defaultUnit: IntentParameter<Measurement<UnitElectricPotentialDifference>>.ElectricPotentialDifference?](/documentation/appintents/intentparametercontext/defaultunit-4utvz)
- [var defaultUnit: IntentParameter<Measurement<UnitEnergy>>.Energy?](/documentation/appintents/intentparametercontext/defaultunit-60crf)
- [var defaultUnit: IntentParameter<Measurement<UnitFrequency>>.Frequency?](/documentation/appintents/intentparametercontext/defaultunit-60fdy)
- [var defaultUnit: IntentParameter<Measurement<UnitElectricCharge>>.ElectricCharge?](/documentation/appintents/intentparametercontext/defaultunit-65ijm)
- [var defaultUnit: IntentParameter<Measurement<UnitTemperature>>.Temperature?](/documentation/appintents/intentparametercontext/defaultunit-65voi)
- [var defaultUnit: IntentParameter<Measurement<UnitAngle>>.Angle?](/documentation/appintents/intentparametercontext/defaultunit-6qm7u)
- [var defaultUnit: IntentParameter<Measurement<UnitArea>>.Area?](/documentation/appintents/intentparametercontext/defaultunit-7ix5r)
- [var defaultUnit: IntentParameter<Measurement<UnitDuration>>.Duration?](/documentation/appintents/intentparametercontext/defaultunit-7uvfx)
- [var defaultUnit: IntentParameter<Measurement<UnitIlluminance>>.Illuminance?](/documentation/appintents/intentparametercontext/defaultunit-847tm)
- [var defaultUnit: IntentParameter<Measurement<UnitInformationStorage>>.InformationStorage?](/documentation/appintents/intentparametercontext/defaultunit-8ois6)
- [var defaultUnit: IntentParameter<Measurement<UnitPower>>.Power?](/documentation/appintents/intentparametercontext/defaultunit-9ibfi)
- [var defaultUnit: IntentParameter<Measurement<UnitPressure>>.Pressure?](/documentation/appintents/intentparametercontext/defaultunit-b5mb)
- [var defaultUnit: IntentParameter<Measurement<UnitSpeed>>.Speed?](/documentation/appintents/intentparametercontext/defaultunit-dk7x)
- [var defaultUnit: IntentParameter<Measurement<UnitElectricCurrent>>.ElectricCurrent?](/documentation/appintents/intentparametercontext/defaultunit-mzcu)
- [var displayName: Bool.IntentDisplayName?](/documentation/appintents/intentparametercontext/displayname)
- [var displayStyle: IntentParameter<Value>.PlacemarkDisplayStyle?](/documentation/appintents/intentparametercontext/displaystyle)
- [var inclusiveRange: IntentParameter<Value>.InclusiveRange<Decimal>?](/documentation/appintents/intentparametercontext/inclusiverange-276sa)
- [var inclusiveRange: IntentParameter<Value>.InclusiveRange<Double>?](/documentation/appintents/intentparametercontext/inclusiverange-7i6st)
- [var inclusiveRange: IntentParameter<Value>.InclusiveRange<Int>?](/documentation/appintents/intentparametercontext/inclusiverange-8kc7r)
- [var parameterMode: IntentPerson.ParameterMode?](/documentation/appintents/intentparametercontext/parametermode)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-11s8)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-15kgw)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-1e69e)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-25jk6)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-2w87c)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-39689)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-3ds0o)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-3erhs)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-3ljcc)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-41o2y)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-462o4)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-59mfp)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-6hpxs)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-7650x)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-7i28a)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-8617w)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-8i9m4)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-8ssre)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-9d7pr)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-9hw2e)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-d2w4)
- [var supportsNegativeNumbers: Bool?](/documentation/appintents/intentparametercontext/supportsnegativenumbers-jgtm)
- [var unit: IntentParameter<Measurement<UnitPower>>.Power?](/documentation/appintents/intentparametercontext/unit-18npz)
- [var unit: IntentParameter<Measurement<UnitElectricPotentialDifference>>.ElectricPotentialDifference?](/documentation/appintents/intentparametercontext/unit-1mmz4)
- [var unit: IntentParameter<Measurement<UnitMass>>.Mass?](/documentation/appintents/intentparametercontext/unit-2zxw8)
- [var unit: IntentParameter<Measurement<UnitElectricCurrent>>.ElectricCurrent?](/documentation/appintents/intentparametercontext/unit-34157)
- [var unit: IntentParameter<Measurement<UnitSpeed>>.Speed?](/documentation/appintents/intentparametercontext/unit-38zpf)
- [var unit: IntentParameter<Measurement<UnitElectricResistance>>.ElectricResistance?](/documentation/appintents/intentparametercontext/unit-39r8x)
- [var unit: IntentParameter<Measurement<UnitTemperature>>.Temperature?](/documentation/appintents/intentparametercontext/unit-4aapu)
- [var unit: IntentParameter<Measurement<UnitPressure>>.Pressure?](/documentation/appintents/intentparametercontext/unit-4awol)
- [var unit: IntentParameter<Measurement<UnitDispersion>>.Dispersion?](/documentation/appintents/intentparametercontext/unit-4koze)
- [var unit: IntentParameter<Measurement<UnitArea>>.Area?](/documentation/appintents/intentparametercontext/unit-4rx08)
- [var unit: IntentParameter<Measurement<UnitLength>>.Length?](/documentation/appintents/intentparametercontext/unit-5p7x6)
- [var unit: IntentParameter<Measurement<UnitElectricCharge>>.ElectricCharge?](/documentation/appintents/intentparametercontext/unit-6qvx7)
- [var unit: IntentParameter<Measurement<UnitVolume>>.Volume?](/documentation/appintents/intentparametercontext/unit-71usu)
- [var unit: IntentParameter<Measurement<UnitInformationStorage>>.InformationStorage?](/documentation/appintents/intentparametercontext/unit-72hcm)
- [var unit: IntentParameter<Measurement<UnitFrequency>>.Frequency?](/documentation/appintents/intentparametercontext/unit-75ikr)
- [var unit: IntentParameter<Measurement<UnitAngle>>.Angle?](/documentation/appintents/intentparametercontext/unit-78ccp)
- [var unit: IntentParameter<Measurement<UnitIlluminance>>.Illuminance?](/documentation/appintents/intentparametercontext/unit-78p18)
- [var unit: IntentParameter<Measurement<UnitEnergy>>.Energy?](/documentation/appintents/intentparametercontext/unit-7lril)
- [var unit: IntentParameter<Measurement<UnitFuelEfficiency>>.FuelEfficiency?](/documentation/appintents/intentparametercontext/unit-8lih3)
- [var unit: IntentParameter<Measurement<UnitConcentrationMass>>.ConcentrationMass?](/documentation/appintents/intentparametercontext/unit-8omlm)
- [var unit: IntentParameter<Measurement<UnitAcceleration>>.Acceleration?](/documentation/appintents/intentparametercontext/unit-fzbg)
- [var unit: IntentParameter<Measurement<UnitDuration>>.Duration?](/documentation/appintents/intentparametercontext/unit-i68w)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-108qa)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-10odh)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-18j21)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-1gvv5)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-1ndgn)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-3c4a3)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-48rfb)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-4kowc)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-5euoy)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-5xz43)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-6cf45)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-6zbbp)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-77fh8)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-79tzk)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-8w6d0)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-8x6an)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-9b11y)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-9kt4r)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-b2at)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-fh5h)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-q9qf)
- [var unitAdjustForLocale: Bool?](/documentation/appintents/intentparametercontext/unitadjustforlocale-srcg)

#### Instance Methods

- [func needsDisambiguationError(among: [Value.ValueType], dialog: IntentDialog?) -> AppIntentError](/documentation/appintents/intentparametercontext/needsdisambiguationerror(among:dialog:))
- [func needsValueError(IntentDialog?) -> AppIntentError](/documentation/appintents/intentparametercontext/needsvalueerror(_:))
- [func requestConfirmation(for: Value.ValueType, dialog: IntentDialog?) async throws -> Bool](/documentation/appintents/intentparametercontext/requestconfirmation(for:dialog:))
- [func requestConfirmation<ViewType>(for: Value.ValueType, dialog: IntentDialog?, view: ViewType) async throws -> Bool](/documentation/appintents/intentparametercontext/requestconfirmation(for:dialog:view:)-6n0qp)
- [func requestConfirmation<ViewType>(for: Value.ValueType, dialog: IntentDialog?, view: () -> ViewType) async throws -> Bool](/documentation/appintents/intentparametercontext/requestconfirmation(for:dialog:view:)-97i0g)
- [func requestDisambiguation(among: [Value.ValueType], dialog: IntentDialog?) async throws -> Value.ValueType](/documentation/appintents/intentparametercontext/requestdisambiguation(among:dialog:))
- [func requestValue(IntentDialog?) async throws -> Value.ValueType](/documentation/appintents/intentparametercontext/requestvalue(_:))
- [InputConnectionBehavior](/documentation/appintents/inputconnectionbehavior)

#### Getting the connection behaviors

- [case `default`](/documentation/appintents/inputconnectionbehavior/default)
- [case never](/documentation/appintents/inputconnectionbehavior/never)
- [case connectToPreviousIntentResult](/documentation/appintents/inputconnectionbehavior/connecttopreviousintentresult)

### Parameter choices

- [DynamicOptionsProvider](/documentation/appintents/dynamicoptionsprovider)

#### Returning the parameter options

- [func results() async throws -> Self.Result](/documentation/appintents/dynamicoptionsprovider/results())
- [func defaultResult() async -> Self.DefaultValue?](/documentation/appintents/dynamicoptionsprovider/defaultresult())
- [Result](/documentation/appintents/dynamicoptionsprovider/result)

#### Associated Types

- [DefaultValue](/documentation/appintents/dynamicoptionsprovider/defaultvalue)

#### Type Aliases

- [DynamicOptionsProvider.Item](/documentation/appintents/dynamicoptionsprovider/item)
- [DynamicOptionsProvider.ItemCollection](/documentation/appintents/dynamicoptionsprovider/itemcollection)
- [DynamicOptionsProvider.ItemSection](/documentation/appintents/dynamicoptionsprovider/itemsection)
- [DynamicOptionsProvider.ParameterDependency](/documentation/appintents/dynamicoptionsprovider/parameterdependency)
- [AppEnum](/documentation/appintents/appenum)

#### Resolving the type

- [static var defaultResolverSpecification: some ResolverSpecification](/documentation/appintents/appenum/defaultresolverspecification)

### Shortcuts support

- [ParameterSummary](/documentation/appintents/parametersummary)

#### Associated Types

- [Intent](/documentation/appintents/parametersummary/intent)
- [IntentParameterSummary](/documentation/appintents/intentparametersummary)

#### Crearing a parameter summary

- [init()](/documentation/appintents/intentparametersummary/init())
- [init(() -> [PartialKeyPath<Intent>])](/documentation/appintents/intentparametersummary/init(_:))
- [init(ParameterSummaryString<Intent>, table: String?)](/documentation/appintents/intentparametersummary/init(_:table:))
- [init(ParameterSummaryString<Intent>, table: String?, () -> [PartialKeyPath<Intent>])](/documentation/appintents/intentparametersummary/init(_:table:_:))

#### Building the parameter key paths

- [IntentParameterSummary.ParameterKeyPathsBuilder](/documentation/appintents/intentparametersummary/parameterkeypathsbuilder)

##### Building the path

- [static func buildBlock(PartialKeyPath<Intent>...) -> [PartialKeyPath<Intent>]](/documentation/appintents/intentparametersummary/parameterkeypathsbuilder/buildblock(_:))
- [static func buildExpression<ValueType>(KeyPath<Intent, IntentParameter<ValueType>>) -> PartialKeyPath<Intent>](/documentation/appintents/intentparametersummary/parameterkeypathsbuilder/buildexpression(_:))
- [ParameterSummaryString](/documentation/appintents/parametersummarystring)

#### Creating the summary string

- [init(String)](/documentation/appintents/parametersummarystring/init(_:))
- [ParameterSummaryWhenCondition](/documentation/appintents/parametersummarywhencondition)

#### Creating a conditional statement

- [init<Parameter>(KeyPath<Intent, Parameter>, HasValueComparisonOperator, () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(_:_:_:otherwise:))
- [init<ValueType, Parameter>(KeyPath<Intent, Parameter>, ComparableComparisonOperator, ValueType, () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(_:_:_:_:otherwise:)-2aukt)
- [init<ValueType, Parameter>(KeyPath<Intent, Parameter>, EquatableComparisonOperator, ValueType, () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(_:_:_:_:otherwise:)-1u184)
- [init<ValueType, Parameter>(KeyPath<Intent, Parameter>, EquatableComparisonOperator, ValueType.ValueType, () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(_:_:_:_:otherwise:)-6edqt)
- [init<ValueType, Parameter>(KeyPath<Intent, Parameter>, OneOfComparisonOperator, [ValueType.ValueType], () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(_:_:_:_:otherwise:)-rfm5)
- [init<Value, Parameter>(KeyPath<Intent, Parameter>, ComparableComparisonOperator, Value.ValueType, () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(_:_:_:_:otherwise:)-3qvla)
- [init<Parameter>(KeyPath<Intent, Parameter>, identifier: ComparableComparisonOperator, Parameter.Value.ValueType.ID, () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(_:identifier:_:_:otherwise:)-215ub)
- [init<Parameter>(KeyPath<Intent, Parameter>, identifier: EquatableComparisonOperator, String, () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(_:identifier:_:_:otherwise:)-2yug9)
- [init<Parameter>(KeyPath<Intent, Parameter>, identifier: OneOfComparisonOperator, [Parameter.Value.ValueType.ID], () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(_:identifier:_:_:otherwise:)-3xth2)
- [init<IntentType, Parameter>(KeyPath<IntentType, Parameter>, identifier: ComparableComparisonOperator, Parameter.Value.ValueType.ID, () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(_:identifier:_:_:otherwise:)-4f45j)
- [init<Parameter>(KeyPath<Intent, Parameter>, identifier: StringComparisonOperator, String, () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(_:identifier:_:_:otherwise:)-5o5vc)
- [init<IntentType, Parameter>(KeyPath<IntentType, Parameter>, identifier: StringComparisonOperator, String, () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(_:identifier:_:_:otherwise:)-7g15l)
- [init<Parameter>(KeyPath<Intent, Parameter>, identifier: OneOfComparisonOperator, [String], () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(_:identifier:_:_:otherwise:)-7tayy)
- [init<Parameter>(KeyPath<Intent, Parameter>, identifier: EquatableComparisonOperator, Parameter.Value.ValueType.ID, () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(_:identifier:_:_:otherwise:)-9qlh)
- [init(widgetFamily: OneOfComparisonOperator, [IntentWidgetFamily], () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(widgetfamily:_:_:otherwise:)-3fujn)
- [init(widgetFamily: EquatableComparisonOperator, IntentWidgetFamily, () -> WhenCondition, otherwise: () -> Otherwise)](/documentation/appintents/parametersummarywhencondition/init(widgetfamily:_:_:otherwise:)-9l1to)
- [EquatableComparisonOperator](/documentation/appintents/equatablecomparisonoperator)

##### Equatable operators

- [case equalTo](/documentation/appintents/equatablecomparisonoperator/equalto)
- [case notEqualTo](/documentation/appintents/equatablecomparisonoperator/notequalto)
- [ComparableComparisonOperator](/documentation/appintents/comparablecomparisonoperator)

##### Comparable operators

- [case greaterThan](/documentation/appintents/comparablecomparisonoperator/greaterthan)
- [case greaterThanOrEqualTo](/documentation/appintents/comparablecomparisonoperator/greaterthanorequalto)
- [case lessThan](/documentation/appintents/comparablecomparisonoperator/lessthan)
- [case lessThanOrEqualTo](/documentation/appintents/comparablecomparisonoperator/lessthanorequalto)
- [HasValueComparisonOperator](/documentation/appintents/hasvaluecomparisonoperator)

##### Value operators

- [case hasAnyValue](/documentation/appintents/hasvaluecomparisonoperator/hasanyvalue)
- [case hasNoValue](/documentation/appintents/hasvaluecomparisonoperator/hasnovalue)
- [OneOfComparisonOperator](/documentation/appintents/oneofcomparisonoperator)

##### Containment operators

- [case oneOf](/documentation/appintents/oneofcomparisonoperator/oneof)
- [ParameterSummarySwitchCondition](/documentation/appintents/parametersummaryswitchcondition)

#### Creating a switch condition

- [init(ParameterSummarySwitchCondition<Intent, Value, CaseCondition>.WidgetFamily, () -> CaseCondition)](/documentation/appintents/parametersummaryswitchcondition/init(_:_:)-4vxvs)
- [init(KeyPath<Intent, IntentParameter<Value>>, () -> CaseCondition)](/documentation/appintents/parametersummaryswitchcondition/init(_:_:)-6cdw3)
- [ParameterSummaryCaseBuilder](/documentation/appintents/parametersummarycasebuilder)

##### Building switch statement cases

- [static func buildBlock<C0, DefaultSummary>(C0, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)>](/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:))
- [static func buildBlock<C0, C1, DefaultSummary>(C0, C1, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, C1, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)>](/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:))
- [static func buildBlock<C0, C1, C2, DefaultSummary>(C0, C1, C2, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, C1, C2, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)>](/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, DefaultSummary>(C0, C1, C2, C3, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, C1, C2, C3, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)>](/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, DefaultSummary>(C0, C1, C2, C3, C4, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, C1, C2, C3, C4, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)>](/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, DefaultSummary>(C0, C1, C2, C3, C4, C5, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, C1, C2, C3, C4, C5, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)>](/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, DefaultSummary>(C0, C1, C2, C3, C4, C5, C6, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, C1, C2, C3, C4, C5, C6, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)>](/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, DefaultSummary>(C0, C1, C2, C3, C4, C5, C6, C7, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, C1, C2, C3, C4, C5, C6, C7, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)>](/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, DefaultSummary>(C0, C1, C2, C3, C4, C5, C6, C7, C8, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, C1, C2, C3, C4, C5, C6, C7, C8, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)>](/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, DefaultSummary>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)>](/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, DefaultSummary>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)>](/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, DefaultSummary>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)>](/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, DefaultSummary>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)>](/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, DefaultSummary>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)>](/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, DefaultSummary>(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)>](/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))
- [ParameterSummaryTupleCaseCondition](/documentation/appintents/parametersummarytuplecasecondition)

###### Type Aliases

- [ParameterSummaryTupleCaseCondition.Summary](/documentation/appintents/parametersummarytuplecasecondition/summary)

##### Type Methods

- [static func buildExpression<C0>(C0) -> C0](/documentation/appintents/parametersummarycasebuilder/buildexpression(_:))
- [ParameterSummarySwitchCondition.WidgetFamily](/documentation/appintents/parametersummaryswitchcondition/widgetfamily)

##### Enumeration Cases

- [case widgetFamily](/documentation/appintents/parametersummaryswitchcondition/widgetfamily/widgetfamily)
- [ParameterSummaryCaseCondition](/documentation/appintents/parametersummarycasecondition)

#### Creating the case condition

- [init(Value, () -> Summary)](/documentation/appintents/parametersummarycasecondition/init(_:_:)-3680j)
- [init([Value], () -> Summary)](/documentation/appintents/parametersummarycasecondition/init(_:_:)-4029f)
- [ParameterSummaryDefaultCaseCondition](/documentation/appintents/parametersummarydefaultcasecondition)

#### Creating the case condition

- [init(() -> Summary)](/documentation/appintents/parametersummarydefaultcasecondition/init(_:))
- [App entities](/documentation/appintents/app-entities)

### Entities

- [Integrating custom data types into your intents](/documentation/appintents/integrating-custom-types-into-your-intents)
- [AppEntity](/documentation/appintents/appentity)

#### Specifying properties

- [AppEntity.Property](/documentation/appintents/appentity/property)

#### Making the entity queryable

- [static var defaultQuery: Self.DefaultQuery](/documentation/appintents/appentity/defaultquery-4khg7)
- [DefaultQuery](/documentation/appintents/appentity/defaultquery-swift.associatedtype)
- [static var defaultResolverSpecification: EmptyResolverSpecification<Self>](/documentation/appintents/appentity/defaultresolverspecification-2dpf2)
- [static var defaultResolverSpecification: some ResolverSpecification](/documentation/appintents/appentity/defaultresolverspecification-589eq)

#### Default Implementations

- [Identifiable Implementations](/documentation/appintents/appentity/identifiable-implementations)

##### Instance Properties

- [var id: Self.ID](/documentation/appintents/appentity/id)
- [FileEntity](/documentation/appintents/fileentity)

#### Type Properties

- [static var supportedContentTypes: [UTType]](/documentation/appintents/fileentity/supportedcontenttypes)
- [IndexedEntity](/documentation/appintents/indexedentity)

#### Instance Properties

- [var attributeSet: CSSearchableItemAttributeSet](/documentation/appintents/indexedentity/attributeset)
- [var defaultAttributeSet: CSSearchableItemAttributeSet](/documentation/appintents/indexedentity/defaultattributeset)
- [var hideInSpotlight: Bool](/documentation/appintents/indexedentity/hideinspotlight)
- [TransientAppEntity](/documentation/appintents/transientappentity)

#### Initializers

- [init()](/documentation/appintents/transientappentity/init())
- [UniqueAppEntity](/documentation/appintents/uniqueappentity)
- [URLRepresentableEntity](/documentation/appintents/urlrepresentableentity)

#### Type Aliases

- [URLRepresentableEntity.URLRepresentation](/documentation/appintents/urlrepresentableentity/urlrepresentation-swift.typealias)

#### Type Properties

- [static var urlRepresentation: Self.URLRepresentation](/documentation/appintents/urlrepresentableentity/urlrepresentation-swift.type.property)

### Entity identity

- [PersistentlyIdentifiable](/documentation/appintents/persistentlyidentifiable)

#### Type Properties

- [static var persistentIdentifier: String](/documentation/appintents/persistentlyidentifiable/persistentidentifier)
- [EntityIdentifier](/documentation/appintents/entityidentifier)

#### Creating an entity identifier

- [init<Entity>(for: Entity)](/documentation/appintents/entityidentifier/init(for:))
- [init<Entity>(for: Entity.Type, identifier: Entity.ID)](/documentation/appintents/entityidentifier/init(for:identifier:))
- [init?(activityIdentifier: String)](/documentation/appintents/entityidentifier/init(activityidentifier:))

#### Getting the identifier details

- [let identifier: String](/documentation/appintents/entityidentifier/identifier)
- [let entityType: any AppEntity.Type](/documentation/appintents/entityidentifier/entitytype)
- [static let valueMaximumLength: Int](/documentation/appintents/entityidentifier/valuemaximumlength)

#### Type Aliases

- [EntityIdentifier.Specification](/documentation/appintents/entityidentifier/specification)
- [EntityIdentifier.UnwrappedType](/documentation/appintents/entityidentifier/unwrappedtype)
- [EntityIdentifier.ValueType](/documentation/appintents/entityidentifier/valuetype)

#### Type Properties

- [static var defaultResolverSpecification: EmptyResolverSpecification<EntityIdentifier>](/documentation/appintents/entityidentifier/defaultresolverspecification)
- [EntityIdentifierConvertible](/documentation/appintents/entityidentifierconvertible)

#### Creating an identifier string

- [static func entityIdentifier(for: String) -> Self?](/documentation/appintents/entityidentifierconvertible/entityidentifier(for:))

#### Getting the identifier string

- [var entityIdentifierString: String](/documentation/appintents/entityidentifierconvertible/entityidentifierstring)

### Entity content

- [EntityProperty](/documentation/appintents/entityproperty)

#### Initializers

- [convenience init()](/documentation/appintents/entityproperty/init()-1rgp4)
- [convenience init()](/documentation/appintents/entityproperty/init()-24wv7)
- [convenience init()](/documentation/appintents/entityproperty/init()-2eq1j)
- [convenience init()](/documentation/appintents/entityproperty/init()-2gbo1)
- [convenience init()](/documentation/appintents/entityproperty/init()-2rc7b)
- [convenience init()](/documentation/appintents/entityproperty/init()-31od)
- [convenience init()](/documentation/appintents/entityproperty/init()-368si)
- [convenience init()](/documentation/appintents/entityproperty/init()-3aobi)
- [convenience init()](/documentation/appintents/entityproperty/init()-3e3go)
- [convenience init()](/documentation/appintents/entityproperty/init()-3tdgm)
- [convenience init()](/documentation/appintents/entityproperty/init()-43hzm)
- [convenience init()](/documentation/appintents/entityproperty/init()-47d6o)
- [convenience init()](/documentation/appintents/entityproperty/init()-5449c)
- [convenience init()](/documentation/appintents/entityproperty/init()-59zl1)
- [convenience init()](/documentation/appintents/entityproperty/init()-5d6mq)
- [convenience init()](/documentation/appintents/entityproperty/init()-5l6yd)
- [convenience init()](/documentation/appintents/entityproperty/init()-5rjfx)
- [convenience init()](/documentation/appintents/entityproperty/init()-5zbw9)
- [convenience init()](/documentation/appintents/entityproperty/init()-5zvby)
- [convenience init()](/documentation/appintents/entityproperty/init()-6bimh)
- [convenience init()](/documentation/appintents/entityproperty/init()-6h3h5)
- [convenience init()](/documentation/appintents/entityproperty/init()-6n7nc)
- [convenience init()](/documentation/appintents/entityproperty/init()-6vna5)
- [convenience init()](/documentation/appintents/entityproperty/init()-6yx3a)
- [convenience init()](/documentation/appintents/entityproperty/init()-7ebfu)
- [convenience init()](/documentation/appintents/entityproperty/init()-7ix0k)
- [convenience init()](/documentation/appintents/entityproperty/init()-7uz5g)
- [convenience init()](/documentation/appintents/entityproperty/init()-7wcbj)
- [convenience init()](/documentation/appintents/entityproperty/init()-83wqy)
- [convenience init()](/documentation/appintents/entityproperty/init()-8559a)
- [convenience init()](/documentation/appintents/entityproperty/init()-85ux9)
- [convenience init()](/documentation/appintents/entityproperty/init()-86h4g)
- [convenience init()](/documentation/appintents/entityproperty/init()-8k8p6)
- [convenience init()](/documentation/appintents/entityproperty/init()-923hj)
- [convenience init()](/documentation/appintents/entityproperty/init()-93vj2)
- [convenience init()](/documentation/appintents/entityproperty/init()-97rm5)
- [convenience init()](/documentation/appintents/entityproperty/init()-9h9cx)
- [convenience init()](/documentation/appintents/entityproperty/init()-9ojq1)
- [convenience init()](/documentation/appintents/entityproperty/init()-ci85)
- [convenience init()](/documentation/appintents/entityproperty/init()-f4cd)
- [convenience init()](/documentation/appintents/entityproperty/init()-q8rw)
- [convenience init()](/documentation/appintents/entityproperty/init()-zez4)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-1n2f3)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-1tre8)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-2g2gf)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-2yy7v)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-3bkqh)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-3gx88)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-3u0y3)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-3vwb5)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-49w23)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-4edf8)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-4hzv0)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-4v4go)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-4vbp8)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-502qd)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-5ccof)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-5snly)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-5sos9)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-5ua4c)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-5x8sy)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-5zyp8)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-654jt)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-677j5)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-6kbjo)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-6srk9)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-7gl1i)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-7lok5)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-7wbi)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-7z0du)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-8ju0q)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-914o3)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-940cv)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-97gbv)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-9ftku)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-9xbzc)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-fw6i)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-g4g4)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-ko6r)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-pgtj)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-s36s)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-s54t)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-vg7q)
- [convenience init(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(customindexingkey:)-zy6u)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-145bu)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-18sy7)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-1a528)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-1a8ak)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-1hhi9)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-2de4j)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-2jt43)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-2ys0i)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-35vfa)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-372ob)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-3bzjn)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-3ntmn)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-3ri7p)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-3wkd0)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-41ihl)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-4fuf2)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-4x4va)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-4xmpx)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-58ntp)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-5g7nv)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-5tkms)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-62b1k)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-6r7ne)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-6z647)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-70my4)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-71coi)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-73wr9)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-7aauq)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-7dc9c)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-7pjrs)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-7s2an)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-81k0c)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-82pvf)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-8rbz8)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-8weqi)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-90x0x)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-9ja6j)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-9sqv6)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-dccd)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-otqs)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-pk2s)
- [convenience init(identifier: String)](/documentation/appintents/entityproperty/init(identifier:)-yejc)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-11ojg)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-142p3)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-14u70)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-2sf95)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-2v9yk)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-32j81)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-3e0tb)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-3uk2)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-3yqt4)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-3yr4d)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-44nj4)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-4bzxa)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-4cnpk)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-4qmf2)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-4szmj)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-4ug9l)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-4w5mh)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-4zsk5)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-5eiyw)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-5fs2j)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-5uh4)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-5xzle)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-6dcc7)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-72pwy)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-733qo)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-7o3vr)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-7ot5)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-7wd24)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-7xf6)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-7z385)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-89hin)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-8fnw3)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-8oegi)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-8y7ig)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-92os3)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-9byuj)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-9i943)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-9icyi)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-dk9y)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-jro2)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-qhmt)
- [convenience init<Entity>(identifier: String, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-twzl)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-19ts7)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-1d77j)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-1ga6w)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-1kf44)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-1te6v)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-2du0v)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-2jruh)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-32nld)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-336th)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-36xvw)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-3bd2t)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-3j04j)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-42jxe)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-45sbt)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-4axu1)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-4kau5)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-4wqds)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-5aiat)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-5rzfm)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-5vb8j)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-5w5f4)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-61idq)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-6c58)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-6jcht)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-6qym5)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-6uofu)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-7057t)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-70tkw)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-74d4m)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-7j6bw)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-7rl2n)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-921l8)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-9626k)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-96lm9)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-9q91x)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-9tq4f)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-9z3yp)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-dr8c)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-dz25)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-khpz)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-p78n)
- [convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-y5yt)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-1n0oq)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-2317s)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-23k7u)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-27k7b)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-2ykkq)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-30yhq)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-38xi)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-3pu07)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-3rulq)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-4318r)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-49qlm)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-4mri2)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-4nj4l)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-4t2vl)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-5f8ak)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-5sle0)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-5xvlp)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-6cvfv)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-6gjra)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-6h3bp)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-6u9yf)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-6wsdg)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-6x3kk)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-73vgv)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-77xq8)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-7gq4a)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-7hl94)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-7kcu5)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-7n85o)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-7pvov)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-7vfp0)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-7x0e7)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-84f3m)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-8lsws)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-8tt6x)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-97aj9)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-9fdoc)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-9pu9i)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-ned6)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-opaz)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-pt9d)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getsetter:)-rx4y)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-1ivkd)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-1rw79)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-22bk5)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-26ofq)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-28x8v)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-2cu5r)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-2ehoe)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-2h1at)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-2mudq)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-2v38i)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-2xdb9)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-2xqs6)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-31xxq)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-32h54)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-32mgg)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-38c7x)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-3dvry)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-3erdy)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-3ptx0)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-41g7k)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-48kwr)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-4gyqk)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-4qreq)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-570s4)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-5qhvl)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-61uur)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-66ofu)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-6aopq)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-6lxh6)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-6uasv)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-71o75)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-7c84a)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-7nasr)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-7yufv)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-83v5n)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-8fpuh)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-8s3pk)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-8smyb)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-93qu4)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-9lb9p)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-whqs)
- [convenience init<Entity>(identifier: String, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:customindexingkey:getter:)-yu6b)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-16a1n)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-1gtdt)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-1jk73)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-2b0xh)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-2fhr8)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-2qe1n)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-3h7qr)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-3hxqq)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-3k39r)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-46kzs)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-4sxe9)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-4xbgo)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-52abc)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-5evqj)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-5gloc)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-5jkkc)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-5jta5)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-5rdkq)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-6aix5)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-6iakp)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-6ksua)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-6q12y)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-7398m)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-779v3)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-795az)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-7a7li)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-7es1q)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-7gjvq)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-7gl7g)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-7s3ov)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-8bu81)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-8iank)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-8vhf9)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-90fzj)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-9dcdj)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-9f3eu)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-9j5vw)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-9suqv)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-9w9av)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-epfk)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-riag)
- [convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getsetter:)-ty5a)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-10ynr)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-139qa)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-1yuxg)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-25lyv)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-29zo4)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-2so4z)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-303m7)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-33eup)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-3arpe)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-3vrbj)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-48e8p)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-4dd82)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-4dx0j)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-4sry9)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-4vigz)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-5v2e2)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-6j0zg)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-756yu)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-7az66)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-7ibgv)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-7vhil)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-7xein)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-7yd6h)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-829qh)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-8a1d3)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-8ebf0)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-8fpb3)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-8gy65)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-8or16)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-8ztp9)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-996ei)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-9b7ss)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-9jv23)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-9l41i)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-9nw7u)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-9ufj)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-9ydos)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-bhjd)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-i9x)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-ngvd)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-qzcb)
- [convenience init<Entity>(identifier: String, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:getter:)-tjgu)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-108rt)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-11apu)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-1gkg3)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-1il4f)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-1nfql)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-2ddlr)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-2lc2s)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-2u9sg)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-3kwk8)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-3mqqx)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-3oziq)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-42bxu)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-4aeh2)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-53b7s)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-54nfj)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-55ots)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-5cblq)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-5f29o)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-5kut4)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-5n8ae)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-5qczm)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-5rxof)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-5wr9o)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-65jpb)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-6ushp)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-71upj)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-79ep6)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-7fy5y)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-7i0i9)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-7qdhm)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-7u2ie)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-89dlx)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-8bkuw)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-8pndc)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-8vhty)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-90s7c)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-91n72)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-9ah6u)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-9i6fd)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-s9mb)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-tf9i)
- [convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:)-yfhp)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-1b00k)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-1bdxp)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-1mbwl)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-1rsr3)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-1vtdh)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-1x9ef)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-285rk)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-29jby)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-2kea8)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-2pt7d)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-3brlp)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-3hxwp)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-3jd1p)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-3sshm)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-3ul3)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-49dre)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-4aslb)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-4h3w5)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-4qxfy)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-4t8ni)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-4tip7)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-4w1uh)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-5dfbz)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-5dg1t)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-5fowl)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-5mtpi)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-5nzpa)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-5r2ir)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-5spbu)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-69ehg)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-76a5a)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-7xppg)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-84ckj)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-889of)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-8hybh)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-8xx5f)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-960o7)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-9clc3)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-9h77)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-gbh3)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-k5hw)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getsetter:)-kevb)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-12392)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-16q99)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-1d1rt)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-1fle2)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-1uamg)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-2235c)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-2385f)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-2745q)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-27q8s)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-2nq08)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-2x7h9)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-363er)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-3dfoi)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-3ulk0)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-4m36j)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-5b6fs)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-5bqr6)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-5coag)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-5vj60)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-61j07)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-69b1h)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-6gns)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-6hadt)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-6kcqu)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-6r76i)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-6s7tw)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-76ppv)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-7jw10)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-7k8rb)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-7nwho)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-85ash)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-85x3i)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-87yvj)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-89r8e)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-8jcaw)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-8lr5t)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-8lw11)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-8sst)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-8x5s1)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-9x2qd)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-dboi)
- [convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:indexingkey:getter:)-v7ux)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-117h4)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-14z0w)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-189d8)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-1azo2)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-1crrl)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-1h1h2)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-1ivma)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-1nysv)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-1qzrr)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-23wo7)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-2a05k)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-2smdh)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-2uf8c)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-378nv)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-3tnqy)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-3ycg)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-46269)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-4jnoj)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-4m254)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-4oh)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-4p9q1)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-51yri)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-583yi)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-5fsj5)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-5s1hj)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-5zao5)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-6llym)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-6z56x)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-7r73j)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-7shxg)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-8c998)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-8kudn)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-8wluq)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-903lh)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-9g93q)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-9u1uo)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-azfr)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-f3s1)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-fcbf)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-lehi)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-wdj7)
- [convenience init(identifier: String, title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(identifier:title:)-ycdv)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-13xnz)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-1bnq3)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-1c5ws)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-1l8sl)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-1yowe)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-257r8)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-2bj5r)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-2rj9v)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-2w3e8)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-2w70y)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-39qz2)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-3mw8u)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-3tff)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-48ueo)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-4dni8)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-4loqc)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-4n2ip)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-4uijs)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-57f1s)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-5lgys)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-5sni8)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-5ulha)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-666jz)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-6acp)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-6dqqg)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-6drke)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-6lz1t)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-6xtf5)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-6zs71)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-76pb2)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-79zya)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-7wd5t)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-83se5)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-8j12u)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-8rgn4)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-8rhb1)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-8zjbm)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-9bfki)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-9j32a)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-i6t3)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-ljxw)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: (Entity) async throws -> Value)](/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-q0zr)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-18iqn)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-1aujk)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-1bz54)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-1cqi9)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-1io91)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-1l849)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-1mutr)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-1rxvx)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-1s1of)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-1vw32)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-1z8bx)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-27zxe)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-2ebtz)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-2hkfs)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-2ivai)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-2o5qo)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-2s97i)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-2zad4)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-2zctu)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-390xu)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-3ft8h)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-3gop3)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-3x2sx)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-44mvn)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-46ynr)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-4fibl)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-4imv0)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-4muq4)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-4p2vn)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-5acor)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-5ae9)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-5qxv6)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-5uvg5)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-5zne0)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-64kpo)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-79kut)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-89tlg)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-8pfo8)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-98md)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-9aj8g)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-anop)
- [convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:)-yryr)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-1lk96)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-25pox)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-2i6se)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-2w04l)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-33e4b)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-3tv4a)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-3wbqq)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-4bw4h)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-4ewbn)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-4hao9)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-4ohyi)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-4wabd)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-4wekz)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-55ec3)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-58xo2)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-5mo7k)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-5o1ml)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-60qr2)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-62iyd)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-6dk4h)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-6pk7)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-6z3sm)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-70r52)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-79rax)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-7kvdx)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-7o4mm)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-80ten)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-83cy4)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-83rih)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-8b6zc)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-8bowp)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-8jx7j)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-8k5o7)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-8mnme)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-8ns5q)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-8uv4q)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-8zcxx)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-99w0o)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-9eils)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-9p6tz)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-h5gl)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-soy5)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-16zlz)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-1e9p0)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-1ee1p)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-1gsrw)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-1u0pg)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-25een)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-295ww)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-2zrbu)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-3uxvx)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-414a3)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-4cps5)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-4er40)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-4u40z)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-5211a)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-5aac4)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-5dmv4)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-5j217)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-5nki5)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-5swwl)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-6eti7)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-6m6mv)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-7jnk5)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-7ns8d)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-7pbfj)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-81l94)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-8culv)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-8ilsx)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-8ny42)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-8vt4c)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-9ati)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-9au2d)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-9mt17)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-9pk6n)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-9txqu)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-9wx7)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-9yntd)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-9ysll)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-ajvc)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-ij0w)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-mdrk)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-ot1u)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getter:)-sykg)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-13vpt)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-1bjxb)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-1m3gq)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-202nc)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-22ywl)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-2ki7h)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-2qnfi)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-2wlel)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-30j9o)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-316ef)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-34xjy)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-34z2l)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-3f0hh)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-3fdqs)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-3n23x)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-3nt3a)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-3podv)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-40xsb)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-4oqqg)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-4xx1)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-543m)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-5cbob)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-5j2w0)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-62bbz)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-6gjse)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-6iqrp)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-6qxo7)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-7858)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-78e90)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-7bcmj)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-7ih2c)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-7xyp7)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-7y4ga)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-7yw8f)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-87x13)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-8tll6)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-9p3og)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-9pvof)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-9sctk)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-h98w)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-lt86)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-xm9h)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-148sz)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-1p05z)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-20a0p)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-2jzos)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-2lyqk)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-2siy3)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-3dhy5)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-3hwyu)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-3ncc7)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-3slre)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-402fk)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-41eea)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-46hxc)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-48n4e)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-4u6n9)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-50b0e)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-5avq)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-5hgyu)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-5n6ev)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-5rda2)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-5vb5n)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-606d7)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-62h7m)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-638yo)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-69dif)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-6aexd)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-6cudy)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-6doj5)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-6ed5h)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-6prgd)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-7r5sy)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-7v9k0)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-7y6pr)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-7yl7s)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-7yz3u)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-8lcse)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-95t49)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-97xts)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-9hvo5)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-9mfy6)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-rgp)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:getter:)-xk38)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-126me)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-13yp)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-17sbg)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-1d7eh)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-1id3m)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-1oc13)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-1p0ni)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-24ubk)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-2g7so)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-2igvi)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-2lc65)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-2rsrn)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-2u5gr)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-3e46e)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-3iz22)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-3lvfn)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-3w174)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-48ckw)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-4de5a)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-4f1tv)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-4qn5e)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-4sj5q)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-4t4eo)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-5evk3)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-5gnjk)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-5lf3m)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-5ots1)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-63pff)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-6njuf)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-6z0g1)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-719ie)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-76y8o)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-771uy)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-8fqu6)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-8nym6)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-944mi)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-9h6l7)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-9j1ut)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-9qtrh)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-9vp33)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-cajb)
- [convenience init(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:)-dkkw)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-105y3)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-1hphk)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-1hvaq)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-1l5wl)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-1q3zy)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-1ww98)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-2g83r)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-2hh8u)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-2iwfu)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-2v29o)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-2w265)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-3728b)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-3csno)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-3e7gq)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-3pjwg)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-3whod)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-41gci)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-41khy)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-42mzr)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-46iih)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-4fq4c)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-4xy6b)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-4zpwo)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-599lq)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-5imtx)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-5tvf0)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-6ixm)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-72yrv)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-7ngbf)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-7ukkh)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-8p6zg)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-8zs4n)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-9f972)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-9m8x3)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-9myyf)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-9peuj)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-bkz9)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-eep9)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-j4b3)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-kjwe)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-ljc8)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getSetter: WritableKeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getsetter:)-tmzu)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-1ah3y)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-1b8aq)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-1hav2)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-1ppna)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-28ia3)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-2afe)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-2ayhf)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-2fxl8)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-2jt5o)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-2u6ja)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-2vq8b)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-3pnfo)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-4holm)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-4lfwn)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-4m3tr)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-55ksi)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-58az0)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-5hncv)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-5l3d9)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-5ly72)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-5u97v)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-5zemv)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-61mk9)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-6f0g9)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-6furm)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-6rif2)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-6syih)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-6vvka)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-7ky3z)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-7o17a)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-7qicg)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-86bq5)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-89tzd)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-8gtle)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-8ve8n)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-94hnb)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-993zw)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-9hszh)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-9msjb)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-q29p)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-rwuu)
- [convenience init<Entity>(identifier: String, title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, getter: KeyPath<Entity, Value>)](/documentation/appintents/entityproperty/init(identifier:title:indexingkey:getter:)-zvtb)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-16blv)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-1c485)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-1jm7i)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-1tf6w)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-24gfj)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-2s0xw)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-2tvny)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-36eo3)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-3hcko)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-3i9um)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-4erjr)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-4q74p)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-4swp4)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-4uaab)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-4un4q)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-4vo0w)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-50dym)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-54q22)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-5oigm)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-5r3ta)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-5uukx)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-62p8a)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-64hzn)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-67920)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-6ajfc)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-6s7ww)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-6ve4u)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-7ay2p)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-7fpdv)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-7pxdu)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-86ory)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-8bniy)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-8cjiy)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-8igu7)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-8khyg)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-8kiad)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-8ow58)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-8s4qd)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-8s4w0)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-8y2li)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-9lt9d)
- [convenience init(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(indexingkey:)-9thiy)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-1d25v)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-1tc1v)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-28g4s)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-2dp76)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-2gm7f)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-2kb1u)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-2np59)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-2yle4)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-3887n)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-3d77p)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-3g21e)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-3h662)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-3nzru)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-3revp)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-3rjdp)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-4kz7s)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-4url0)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-4v3x3)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-4ziq1)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-58kn8)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-5pb1r)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-5sctd)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-5wa3x)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-6av70)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-6l4hm)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-6n85w)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-6tv32)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-6zgt6)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-7a469)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-7dt1k)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-7txcv)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-7z2pv)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-88r0j)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-8ayaj)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-8ykha)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-98ebz)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-9tfqf)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-9xd4p)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-djmw)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-f3c7)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-l1c6)
- [convenience init(title: LocalizedStringResource)](/documentation/appintents/entityproperty/init(title:)-r1fa)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-19tpd)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-1cly1)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-1kll9)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-1lk5r)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-1pon2)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-27f1h)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-29351)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-2eglc)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-2kgu7)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-2me54)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-2wpks)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-34nxo)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-36akc)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-36gcg)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-3k7y6)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-3y42t)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-40biq)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-43tsx)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-4b9on)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-4ivjp)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-4jvux)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-4ppfn)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-4vub3)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-51xvr)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-5ot57)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-5p4up)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-5r7ga)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-5sp6u)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-5txeg)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-5u4ei)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-63fux)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-644dr)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-72srp)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-73f5l)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-7wvtv)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-8jbsy)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-8rlb5)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-987gm)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-98gxd)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-9jhf1)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-9k3g8)
- [convenience init(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/entityproperty/init(title:customindexingkey:)-l7mf)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-15les)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-1ehae)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-1v6ta)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-1vtfr)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-28z6k)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-2d05x)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-2t5xq)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-2zpkf)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-341lk)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-3f9sk)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-3hivp)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-3jtzk)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-3kx80)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-3o7nw)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-3p35f)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-467g1)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-4ago)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-4dr01)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-4ke5t)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-4v678)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-5e492)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-5fi7j)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-5xk73)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-6dbum)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-6f87j)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-6fcb5)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-6qpbc)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-6woh7)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-7fomp)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-7j59q)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-7jpkk)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-7oyrf)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-7silh)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-7vrqm)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-8nkkg)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-99msx)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-9bcw4)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-9dwm4)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-9j7hv)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-9txtw)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-9yblh)
- [convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/entityproperty/init(title:indexingkey:)-vhxo)

#### Instance Properties

- [var projectedValue: EntityProperty<Value>](/documentation/appintents/entityproperty/projectedvalue)
- [var wrappedValue: Value](/documentation/appintents/entityproperty/wrappedvalue)
- [AppValue](/documentation/appintents/appvalue)
- [AnyIntentValue](/documentation/appintents/anyintentvalue)

#### Getting the value type

- [Value](/documentation/appintents/anyintentvalue/value)

#### Getting type-specific information

- [var title: LocalizedStringResource](/documentation/appintents/anyintentvalue/title)
- [var isOptional: Bool](/documentation/appintents/anyintentvalue/isoptional)
- [AppEnum](/documentation/appintents/appenum)

#### Resolving the type

- [static var defaultResolverSpecification: some ResolverSpecification](/documentation/appintents/appenum/defaultresolverspecification)
- [URLRepresentableEnum](/documentation/appintents/urlrepresentableenum)

#### Type Aliases

- [URLRepresentableEnum.URLRepresentation](/documentation/appintents/urlrepresentableenum/urlrepresentation-swift.typealias)

#### Type Properties

- [static var urlRepresentation: Self.URLRepresentation](/documentation/appintents/urlrepresentableenum/urlrepresentation-swift.type.property)

### Entity property macros

- [macro ComputedProperty()](/documentation/appintents/computedproperty())
- [macro ComputedProperty(title: LocalizedStringResource)](/documentation/appintents/computedproperty(title:))
- [macro ComputedProperty(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/computedproperty(indexingkey:))
- [macro ComputedProperty(customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/computedproperty(customindexingkey:))
- [macro ComputedProperty(title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)](/documentation/appintents/computedproperty(title:customindexingkey:))
- [macro ComputedProperty(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)](/documentation/appintents/computedproperty(title:indexingkey:))
- [macro DeferredProperty()](/documentation/appintents/deferredproperty())
- [macro DeferredProperty(title: LocalizedStringResource)](/documentation/appintents/deferredproperty(title:))

### Entity presentation

- [DisplayRepresentation](/documentation/appintents/displayrepresentation)

#### Creating a representation

- [init(title: LocalizedStringResource, subtitle: LocalizedStringResource?, image: DisplayRepresentation.Image?)](/documentation/appintents/displayrepresentation/init(title:subtitle:image:))

#### Displaying the content

- [var title: LocalizedStringResource](/documentation/appintents/displayrepresentation/title)
- [var subtitle: LocalizedStringResource?](/documentation/appintents/displayrepresentation/subtitle)
- [var image: DisplayRepresentation.Image?](/documentation/appintents/displayrepresentation/image-swift.property)
- [DisplayRepresentation.Image](/documentation/appintents/displayrepresentation/image-swift.struct)

##### Structures

- [DisplayRepresentation.Image.DisplayStyle](/documentation/appintents/displayrepresentation/image-swift.struct/displaystyle)

###### Type Properties

- [static var circular: DisplayRepresentation.Image.DisplayStyle](/documentation/appintents/displayrepresentation/image-swift.struct/displaystyle/circular)
- [static var `default`: DisplayRepresentation.Image.DisplayStyle](/documentation/appintents/displayrepresentation/image-swift.struct/displaystyle/default)

##### Initializers

- [init(data: Data, isTemplate: Bool?)](/documentation/appintents/displayrepresentation/image-swift.struct/init(data:istemplate:))
- [init(data: Data, isTemplate: Bool?, displayStyle: DisplayRepresentation.Image.DisplayStyle)](/documentation/appintents/displayrepresentation/image-swift.struct/init(data:istemplate:displaystyle:))
- [init(named: String, isTemplate: Bool?)](/documentation/appintents/displayrepresentation/image-swift.struct/init(named:istemplate:))
- [init(named: String, isTemplate: Bool?, displayStyle: DisplayRepresentation.Image.DisplayStyle)](/documentation/appintents/displayrepresentation/image-swift.struct/init(named:istemplate:displaystyle:))
- [init(systemName: String, isTemplate: Bool?)](/documentation/appintents/displayrepresentation/image-swift.struct/init(systemname:istemplate:))
- [init?(systemName: String, tintColor: UIColor?, symbolConfiguration: UIImage.SymbolConfiguration?)](/documentation/appintents/displayrepresentation/image-swift.struct/init(systemname:tintcolor:symbolconfiguration:)-3snvy)
- [init?(systemName: String, tintColor: NSColor?, symbolConfiguration: NSImage.SymbolConfiguration?)](/documentation/appintents/displayrepresentation/image-swift.struct/init(systemname:tintcolor:symbolconfiguration:)-5p911)
- [init(url: URL, isTemplate: Bool?)](/documentation/appintents/displayrepresentation/image-swift.struct/init(url:istemplate:))
- [init(url: URL, isTemplate: Bool?, displayStyle: DisplayRepresentation.Image.DisplayStyle)](/documentation/appintents/displayrepresentation/image-swift.struct/init(url:istemplate:displaystyle:))
- [init(url: URL, width: Double, height: Double, isTemplate: Bool?)](/documentation/appintents/displayrepresentation/image-swift.struct/init(url:width:height:istemplate:))
- [init(url: URL, width: Double, height: Double, isTemplate: Bool?, displayStyle: DisplayRepresentation.Image.DisplayStyle)](/documentation/appintents/displayrepresentation/image-swift.struct/init(url:width:height:istemplate:displaystyle:))

#### Initializers

- [init(title: LocalizedStringResource, subtitle: LocalizedStringResource?, image: DisplayRepresentation.Image?, synonyms: [LocalizedStringResource])](/documentation/appintents/displayrepresentation/init(title:subtitle:image:synonyms:))

#### Instance Properties

- [var synonyms: [LocalizedStringResource]](/documentation/appintents/displayrepresentation/synonyms)
- [DisplayRepresentable](/documentation/appintents/displayrepresentable)
- [InstanceDisplayRepresentable](/documentation/appintents/instancedisplayrepresentable)

#### Providing the visual content

- [var displayRepresentation: DisplayRepresentation](/documentation/appintents/instancedisplayrepresentable/displayrepresentation)

#### Providing a localized description

- [var localizedStringResource: LocalizedStringResource](/documentation/appintents/instancedisplayrepresentable/localizedstringresource)
- [TypeDisplayRepresentable](/documentation/appintents/typedisplayrepresentable)

#### Describing the type

- [static var typeDisplayRepresentation: TypeDisplayRepresentation](/documentation/appintents/typedisplayrepresentable/typedisplayrepresentation)
- [TypeDisplayRepresentation](/documentation/appintents/typedisplayrepresentation)

#### Initializers

- [init(name: LocalizedStringResource, numericFormat: LocalizedStringResource?)](/documentation/appintents/typedisplayrepresentation/init(name:numericformat:))
- [init(name: LocalizedStringResource, numericFormat: LocalizedStringResource?, synonyms: [LocalizedStringResource])](/documentation/appintents/typedisplayrepresentation/init(name:numericformat:synonyms:))

#### Instance Properties

- [var name: LocalizedStringResource](/documentation/appintents/typedisplayrepresentation/name)
- [var numericFormat: LocalizedStringResource?](/documentation/appintents/typedisplayrepresentation/numericformat)
- [var synonyms: [LocalizedStringResource]](/documentation/appintents/typedisplayrepresentation/synonyms)
- [StaticDisplayRepresentable](/documentation/appintents/staticdisplayrepresentable)
- [CaseDisplayRepresentable](/documentation/appintents/casedisplayrepresentable)

#### Describing the case conditions

- [static var caseDisplayRepresentations: [Self : DisplayRepresentation]](/documentation/appintents/casedisplayrepresentable/casedisplayrepresentations)

#### Providing a localized description

- [var localizedStringResource: LocalizedStringResource](/documentation/appintents/casedisplayrepresentable/localizedstringresource-7gj71)
- [var localizedStringResource: LocalizedStringResource](/documentation/appintents/casedisplayrepresentable/localizedstringresource-78c15)
- [Entity queries](/documentation/appintents/entity-queries)

### Identifier-based queries

- [EntityQuery](/documentation/appintents/entityquery)

#### Creating a query

- [init()](/documentation/appintents/entityquery/init())

#### Searching for entities

- [func entities(for: [Self.Entity.ID]) async throws -> [Self.Entity]](/documentation/appintents/entityquery/entities(for:))
- [Entity](/documentation/appintents/entityquery/entity)

#### Suggesting entities

- [func suggestedEntities() async throws -> Self.Result](/documentation/appintents/entityquery/suggestedentities())

#### Associated Types

- [Result](/documentation/appintents/entityquery/result)
- [EnumerableEntityQuery](/documentation/appintents/enumerableentityquery)

#### Instance Methods

- [func allEntities() async throws -> Self.Result](/documentation/appintents/enumerableentityquery/allentities())

#### Type Properties

- [static var findIntentDescription: IntentDescription?](/documentation/appintents/enumerableentityquery/findintentdescription)

### String-based queries

- [EntityStringQuery](/documentation/appintents/entitystringquery)

#### Searching for entities

- [func entities(matching: String) async throws -> Self.Result](/documentation/appintents/entitystringquery/entities(matching:))

### Property-matched queries

- [EntityPropertyQuery](/documentation/appintents/entitypropertyquery)

#### Specifying the queryable properties

- [static var properties: Self.QueryProperties](/documentation/appintents/entitypropertyquery/properties)
- [EntityPropertyQuery.QueryProperties](/documentation/appintents/entitypropertyquery/queryproperties)
- [EntityPropertyQuery.Property](/documentation/appintents/entitypropertyquery/property)
- [ComparatorMappingType](/documentation/appintents/entitypropertyquery/comparatormappingtype)

#### Sorting the results

- [static var sortingOptions: Self.SortingOptions](/documentation/appintents/entitypropertyquery/sortingoptions-swift.type.property)
- [EntityPropertyQuery.SortingOptions](/documentation/appintents/entitypropertyquery/sortingoptions-swift.typealias)
- [EntityPropertyQuery.SortableBy](/documentation/appintents/entitypropertyquery/sortableby)

#### Searching for entities

- [func entities(matching: [Self.ComparatorMappingType], mode: Self.ComparatorMode, sortedBy: [EntityQuerySort<Self.Entity>], limit: Int?) async throws -> Self.Result](/documentation/appintents/entitypropertyquery/entities(matching:mode:sortedby:limit:))
- [EntityPropertyQuery.Sort](/documentation/appintents/entitypropertyquery/sort)
- [EntityPropertyQuery.ComparatorMode](/documentation/appintents/entitypropertyquery/comparatormode)
- [EntityQueryComparatorMode](/documentation/appintents/entityquerycomparatormode)

##### Comparator modes

- [case and](/documentation/appintents/entityquerycomparatormode/and)
- [case or](/documentation/appintents/entityquerycomparatormode/or)

#### Type Properties

- [static var findIntentDescription: IntentDescription?](/documentation/appintents/entitypropertyquery/findintentdescription)
- [EntityQueryProperties](/documentation/appintents/entityqueryproperties)

#### Creating the query properties

- [init(properties: () -> [EntityQueryPropertyDeclaration<Entity, ComparatorMappingType>])](/documentation/appintents/entityqueryproperties/init(properties:))
- [EntityQueryPropertiesBuilder](/documentation/appintents/entityquerypropertiesbuilder)

##### Building queryable properties

- [static func buildBlock(EntityQueryPropertyDeclaration<Entity, ComparatorMappingType>...) -> [EntityQueryPropertyDeclaration<Entity, ComparatorMappingType>]](/documentation/appintents/entityquerypropertiesbuilder/buildblock(_:))
- [EntityQueryPropertyDeclaration](/documentation/appintents/entityquerypropertydeclaration)

##### Type Methods

- [static func buildExpression(EntityQueryPropertyDeclaration<Entity, ComparatorMappingType>) -> EntityQueryPropertyDeclaration<Entity, ComparatorMappingType>](/documentation/appintents/entityquerypropertiesbuilder/buildexpression(_:))

#### Getting the query properties

- [subscript(Int) -> EntityQueryPropertyDeclaration<Entity, ComparatorMappingType>](/documentation/appintents/entityqueryproperties/subscript(_:))
- [EntityQueryProperty](/documentation/appintents/entityqueryproperty)

#### Creating queryable properties

- [convenience init(KeyPath<Subject, Property>, comparators: () -> EntityQueryProperty<Entity, Subject, Property, PropertyType, ComparatorMappingType>.QueryComparators)](/documentation/appintents/entityqueryproperty/init(_:comparators:))
- [init(KeyPath<Subject, Property>, entityProvider: (Entity) -> Subject, comparators: () -> EntityQueryProperty<Entity, Subject, Property, PropertyType, ComparatorMappingType>.QueryComparators)](/documentation/appintents/entityqueryproperty/init(_:entityprovider:comparators:))
- [EntityQueryProperty.QueryComparators](/documentation/appintents/entityqueryproperty/querycomparators)
- [EntityQueryComparatorsBuilder](/documentation/appintents/entityquerycomparatorsbuilder)

##### Building query comparators

- [static func buildBlock(AnyEntityQueryComparator<Entity, Subject, Property, PropertyType, ComparatorMappingType>...) -> [AnyEntityQueryComparator<Entity, Subject, Property, PropertyType, ComparatorMappingType>]](/documentation/appintents/entityquerycomparatorsbuilder/buildblock(_:))
- [AnyEntityQueryComparator](/documentation/appintents/anyentityquerycomparator)
- [static func buildExpression(EntityQueryComparator<Property, PropertyType, PropertyType.UnwrappedType, ComparatorMappingType>) -> AnyEntityQueryComparator<Entity, Subject, Property, PropertyType, ComparatorMappingType>](/documentation/appintents/entityquerycomparatorsbuilder/buildexpression(_:)-4g6f9)
- [static func buildExpression(EntityQueryComparator<Property, PropertyType, PropertyType, ComparatorMappingType>) -> AnyEntityQueryComparator<Entity, Subject, Property, PropertyType, ComparatorMappingType>](/documentation/appintents/entityquerycomparatorsbuilder/buildexpression(_:)-5tlbq)
- [static func buildExpression<InputType>(ContainsComparator<Property, PropertyType, InputType, ComparatorMappingType>) -> AnyEntityQueryComparator<Entity, Subject, Property, PropertyType, ComparatorMappingType>](/documentation/appintents/entityquerycomparatorsbuilder/buildexpression(_:)-6v6cj)
- [static func buildExpression<InputType>(IsBetweenComparator<Property, PropertyType, InputType, ComparatorMappingType>) -> AnyEntityQueryComparator<Entity, Subject, Property, PropertyType, ComparatorMappingType>](/documentation/appintents/entityquerycomparatorsbuilder/buildexpression(_:)-8jx4k)
- [EntityQueryComparator](/documentation/appintents/entityquerycomparator)
- [Property comparators](/documentation/appintents/property-comparators)

#### Equatable comparisons

- [EqualToComparator](/documentation/appintents/equaltocomparator)

##### Creating a comparator

- [init(mappingTransform: (PropertyType) -> ComparatorMappingType)](/documentation/appintents/equaltocomparator/init(mappingtransform:))
- [init(mappingTransform: (PropertyType) -> ComparatorMappingType)](/documentation/appintents/equaltocomparator/init(mappingtransform:))
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (PropertyType) -> ComparatorMappingType)](/documentation/appintents/equaltocomparator/init(withresolvers:mappingtransform:))
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (PropertyType) -> ComparatorMappingType)](/documentation/appintents/equaltocomparator/init(withresolvers:mappingtransform:))
- [NotEqualToComparator](/documentation/appintents/notequaltocomparator)

##### Creating a comparator

- [init(mappingTransform: (PropertyType) -> ComparatorMappingType)](/documentation/appintents/notequaltocomparator/init(mappingtransform:))
- [init(mappingTransform: (PropertyType) -> ComparatorMappingType)](/documentation/appintents/notequaltocomparator/init(mappingtransform:))
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (PropertyType) -> ComparatorMappingType)](/documentation/appintents/notequaltocomparator/init(withresolvers:mappingtransform:))
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (PropertyType) -> ComparatorMappingType)](/documentation/appintents/notequaltocomparator/init(withresolvers:mappingtransform:))
- [GreaterThanComparator](/documentation/appintents/greaterthancomparator)

##### Creating a comparator

- [init(mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/greaterthancomparator/init(mappingtransform:))
- [init(mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/greaterthancomparator/init(mappingtransform:))
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/greaterthancomparator/init(withresolvers:mappingtransform:))
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/greaterthancomparator/init(withresolvers:mappingtransform:))
- [GreaterThanOrEqualToComparator](/documentation/appintents/greaterthanorequaltocomparator)

##### Creating a comparator

- [init(mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/greaterthanorequaltocomparator/init(mappingtransform:))
- [init(mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/greaterthanorequaltocomparator/init(mappingtransform:))
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/greaterthanorequaltocomparator/init(withresolvers:mappingtransform:))
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/greaterthanorequaltocomparator/init(withresolvers:mappingtransform:))
- [LessThanComparator](/documentation/appintents/lessthancomparator)

##### Creating a comparator

- [init(mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/lessthancomparator/init(mappingtransform:))
- [init(mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/lessthancomparator/init(mappingtransform:))
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/lessthancomparator/init(withresolvers:mappingtransform:))
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/lessthancomparator/init(withresolvers:mappingtransform:))
- [LessThanOrEqualToComparator](/documentation/appintents/lessthanorequaltocomparator)

##### Creating a comparator

- [init(mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/lessthanorequaltocomparator/init(mappingtransform:))
- [init(mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/lessthanorequaltocomparator/init(mappingtransform:))
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/lessthanorequaltocomparator/init(withresolvers:mappingtransform:))
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (PropertyType.UnwrappedType) -> ComparatorMappingType)](/documentation/appintents/lessthanorequaltocomparator/init(withresolvers:mappingtransform:))
- [IsBetweenComparator](/documentation/appintents/isbetweencomparator)

##### Initializers

- [init(mappingTransform: (InputType, InputType) -> ComparatorMappingType)](/documentation/appintents/isbetweencomparator/init(mappingtransform:))
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (InputType, InputType) -> ComparatorMappingType)](/documentation/appintents/isbetweencomparator/init(withresolvers:mappingtransform:))

#### String comparisons

- [HasPrefixComparator](/documentation/appintents/hasprefixcomparator)

##### Creating a comparator

- [init(mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/hasprefixcomparator/init(mappingtransform:)-4i1bf)
- [init(mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/hasprefixcomparator/init(mappingtransform:)-5kri6)
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/hasprefixcomparator/init(withresolvers:mappingtransform:)-2n67a)
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/hasprefixcomparator/init(withresolvers:mappingtransform:)-48o75)
- [HasSuffixComparator](/documentation/appintents/hassuffixcomparator)

##### Creating a comparator

- [init(mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/hassuffixcomparator/init(mappingtransform:)-4dp26)
- [init(mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/hassuffixcomparator/init(mappingtransform:)-5cmgi)
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/hassuffixcomparator/init(withresolvers:mappingtransform:)-5rtmw)
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/hassuffixcomparator/init(withresolvers:mappingtransform:)-7tdan)
- [StringComparisonOperator](/documentation/appintents/stringcomparisonoperator)

##### Enumeration Cases

- [case contains](/documentation/appintents/stringcomparisonoperator/contains)
- [case doesNotContain](/documentation/appintents/stringcomparisonoperator/doesnotcontain)
- [case hasPrefix](/documentation/appintents/stringcomparisonoperator/hasprefix)
- [case hasSuffix](/documentation/appintents/stringcomparisonoperator/hassuffix)

#### Containment comparisons

- [ContainsComparator](/documentation/appintents/containscomparator)

##### Creating a comparator

- [init(mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/containscomparator/init(mappingtransform:)-xvws)
- [init(mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/containscomparator/init(mappingtransform:)-3xuvt)
- [init(mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/containscomparator/init(mappingtransform:)-7rx55)
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/containscomparator/init(withresolvers:mappingtransform:)-4482k)

##### Initializers

- [init(mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/containscomparator/init(mappingtransform:)-7ya5)
- [init(mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/containscomparator/init(mappingtransform:)-9fn0e)
- [init(mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/containscomparator/init(mappingtransform:)-coon)
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/containscomparator/init(withresolvers:mappingtransform:)-3esov)
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/containscomparator/init(withresolvers:mappingtransform:)-5j3ie)
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/containscomparator/init(withresolvers:mappingtransform:)-7vx0d)
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/containscomparator/init(withresolvers:mappingtransform:)-83nih)
- [init<Spec>(withResolvers: () -> Spec, mappingTransform: (InputType) -> ComparatorMappingType)](/documentation/appintents/containscomparator/init(withresolvers:mappingtransform:)-wpei)
- [EntityQuerySortingOptions](/documentation/appintents/entityquerysortingoptions)

#### Creating the sorting options

- [init(content: () -> [EntityQuerySortableByProperty<Entity>])](/documentation/appintents/entityquerysortingoptions/init(content:))
- [EntityQuerySortingOptionsBuilder](/documentation/appintents/entityquerysortingoptionsbuilder)

##### Building sorting options

- [static func buildBlock(EntityQuerySortableByProperty<Entity>...) -> [EntityQuerySortableByProperty<Entity>]](/documentation/appintents/entityquerysortingoptionsbuilder/buildblock(_:))

##### Type Methods

- [static func buildExpression(EntityQuerySortableByProperty<Entity>) -> EntityQuerySortableByProperty<Entity>](/documentation/appintents/entityquerysortingoptionsbuilder/buildexpression(_:))

#### Getting the sorting options

- [subscript(Int) -> EntityQuerySortableByProperty<Entity>](/documentation/appintents/entityquerysortingoptions/subscript(_:))

#### Initializers

- [init()](/documentation/appintents/entityquerysortingoptions/init())
- [EntityQuerySortableByProperty](/documentation/appintents/entityquerysortablebyproperty)

#### Creating the sort option

- [init<Property>(KeyPath<Entity, Property>)](/documentation/appintents/entityquerysortablebyproperty/init(_:))
- [EntityQuerySort](/documentation/appintents/entityquerysort)

#### Getting the property details

- [let by: PartialKeyPath<Entity>](/documentation/appintents/entityquerysort/by)

#### Getting the sort order

- [let order: EntityQuerySort<Entity>.Ordering](/documentation/appintents/entityquerysort/order)
- [EntityQuerySort.Ordering](/documentation/appintents/entityquerysort/ordering)

##### Enumeration Cases

- [case ascending](/documentation/appintents/entityquerysort/ordering/ascending)
- [case descending](/documentation/appintents/entityquerysort/ordering/descending)

### Unique entity queries

- [UniqueAppEntityQuery](/documentation/appintents/uniqueappentityquery)

#### Associated Types

- [Unique](/documentation/appintents/uniqueappentityquery/unique)

#### Instance Methods

- [func uniqueEntity() async throws -> Self.Unique](/documentation/appintents/uniqueappentityquery/uniqueentity())
- [UniqueAppEntityProvider](/documentation/appintents/uniqueappentityprovider)

#### Initializers

- [init(() async throws -> Entity)](/documentation/appintents/uniqueappentityprovider/init(_:))
- [Resolvers](/documentation/appintents/resolvers)

### Integer resolution

- [IntFromDoubleResolver](/documentation/appintents/intfromdoubleresolver)

#### Creating the resolver

- [init(roundingRule: FloatingPointRoundingRule)](/documentation/appintents/intfromdoubleresolver/init(roundingrule:))

#### Getting the rounding rule

- [var roundingRule: FloatingPointRoundingRule](/documentation/appintents/intfromdoubleresolver/roundingrule)
- [IntFromStringResolver](/documentation/appintents/intfromstringresolver)

#### Creating the resolver

- [init(radix: Int)](/documentation/appintents/intfromstringresolver/init(radix:))

#### Getting the radix setting

- [var radix: Int](/documentation/appintents/intfromstringresolver/radix)
- [IntResolver](/documentation/appintents/intresolver)

### Floating-point resolution

- [DoubleFromIntResolver](/documentation/appintents/doublefromintresolver)
- [DoubleFromStringResolver](/documentation/appintents/doublefromstringresolver)
- [DoubleResolver](/documentation/appintents/doubleresolver)

### String resolution

- [AttributedStringFromStringResolver](/documentation/appintents/attributedstringfromstringresolver)
- [StringFromDoubleResolver](/documentation/appintents/stringfromdoubleresolver)
- [StringFromIntResolver](/documentation/appintents/stringfromintresolver)

### Boolean resolution

- [BoolFromStringResolver](/documentation/appintents/boolfromstringresolver)

### URL resolution

- [URLFromStringResolver](/documentation/appintents/urlfromstringresolver)

### Custom resolution

- [Resolver](/documentation/appintents/resolver)

#### Resolving the type

- [func resolve(from: Self.Input, context: IntentParameterContext<Self.Output>) async throws -> Self.Output?](/documentation/appintents/resolver/resolve(from:context:))
- [Input](/documentation/appintents/resolver/input)
- [Output](/documentation/appintents/resolver/output)

#### Managing the resolution process

- [ResolverSpecification](/documentation/appintents/resolverspecification)

##### Getting the value type

- [Output](/documentation/appintents/resolverspecification/output)
- [EmptyResolverSpecification](/documentation/appintents/emptyresolverspecification)

##### Creating the specification type

- [init()](/documentation/appintents/emptyresolverspecification/init())
- [StringSearchCriteriaFromStringResolverSpecificification](/documentation/appintents/stringsearchcriteriafromstringresolverspecificification)
- [ResolverSpecificationBuilder](/documentation/appintents/resolverspecificationbuilder)

##### Building the resolver specification

- [static func buildBlock() -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock())
- [static func buildBlock<R0>(R0) -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock(_:))
- [static func buildBlock<R0, R1>(R0, R1) -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock(_:_:))
- [static func buildBlock<R0, R1, R2>(R0, R1, R2) -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock(_:_:_:))
- [static func buildBlock<R0, R1, R2, R3>(R0, R1, R2, R3) -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock(_:_:_:_:))
- [static func buildBlock<R0, R1, R2, R3, R4>(R0, R1, R2, R3, R4) -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock(_:_:_:_:_:))
- [static func buildBlock<R0, R1, R2, R3, R4, R5>(R0, R1, R2, R3, R4, R5) -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock(_:_:_:_:_:_:))
- [static func buildBlock<R0, R1, R2, R3, R4, R5, R6>(R0, R1, R2, R3, R4, R5, R6) -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock(_:_:_:_:_:_:_:))
- [static func buildBlock<R0, R1, R2, R3, R4, R5, R6, R7>(R0, R1, R2, R3, R4, R5, R6, R7) -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:))
- [static func buildBlock<R0, R1, R2, R3, R4, R5, R6, R7, R8>(R0, R1, R2, R3, R4, R5, R6, R7, R8) -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:))

##### Structures

- [ResolverSpecificationBuilder.Specification](/documentation/appintents/resolverspecificationbuilder/specification)

##### Type Methods

- [static func buildBlock<R0, R1, R2, R3, R4, R5, R6, R7, R8, R9>(R0, R1, R2, R3, R4, R5, R6, R7, R8, R9) -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10) -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11) -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12) -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13>(R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13) -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildBlock<R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14>(R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14) -> some ResolverSpecification](/documentation/appintents/resolverspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))
- [static func buildExpression<ResolverType>(ResolverType) -> ResolverType](/documentation/appintents/resolverspecificationbuilder/buildexpression(_:))
- [static func buildPartialBlock<each Accumulated, R>(accumulated: ResolverSpecificationBuilder<Property>.Specification<Property, repeat each Accumulated>, next: R) -> ResolverSpecificationBuilder<Property>.Specification<Property, repeat each Accumulated, R>](/documentation/appintents/resolverspecificationbuilder/buildpartialblock(accumulated:next:))
- [static func buildPartialBlock<R>(first: R) -> ResolverSpecificationBuilder<Property>.Specification<Property, R>](/documentation/appintents/resolverspecificationbuilder/buildpartialblock(first:))

#### Type Aliases

- [Resolver.Context](/documentation/appintents/resolver/context)

### Range validation

- [RangeCheckingResolver](/documentation/appintents/rangecheckingresolver)

#### Checking the range of a parameter

- [func checkParameterRangeContains<Value>(value: Value, context: IntentParameterContext<Self.Output>) throws](/documentation/appintents/rangecheckingresolver/checkparameterrangecontains(value:context:))
- [RangeComparableProperty](/documentation/appintents/rangecomparableproperty)

## Utility types

- [Common types](/documentation/appintents/common-data-types)

### Contacts

- [IntentPerson](/documentation/appintents/intentperson)

#### Creating a contact

- [init(identifier: IntentPerson.Identifier, name: IntentPerson.Name, handle: IntentPerson.Handle?, aliases: [IntentPerson.Handle], isMe: Bool, image: DisplayRepresentation.Image?)](/documentation/appintents/intentperson/init(identifier:name:handle:aliases:isme:image:))

#### Getting the person’s name

- [var name: IntentPerson.Name](/documentation/appintents/intentperson/name-swift.property)
- [IntentPerson.Name](/documentation/appintents/intentperson/name-swift.enum)

##### Getting a displayable name

- [case displayName(String)](/documentation/appintents/intentperson/name-swift.enum/displayname(_:))

##### Getting the name components

- [case components(PersonNameComponents)](/documentation/appintents/intentperson/name-swift.enum/components(_:))

##### Enumeration Cases

- [case unknown](/documentation/appintents/intentperson/name-swift.enum/unknown)

#### Getting identifying information

- [var handle: IntentPerson.Handle?](/documentation/appintents/intentperson/handle-swift.property)
- [var aliases: [IntentPerson.Handle]](/documentation/appintents/intentperson/aliases)
- [var isMe: Bool](/documentation/appintents/intentperson/isme)
- [var image: DisplayRepresentation.Image?](/documentation/appintents/intentperson/image)
- [IntentPerson.Handle](/documentation/appintents/intentperson/handle-swift.struct)

##### Creating a handle

- [init(emailAddress: String, label: IntentPerson.Handle.Label)](/documentation/appintents/intentperson/handle-swift.struct/init(emailaddress:label:))
- [init(phoneNumber: String, label: IntentPerson.Handle.Label)](/documentation/appintents/intentperson/handle-swift.struct/init(phonenumber:label:))
- [init(identifier: IntentPerson.Identifier, name: IntentPerson.Name, handle: IntentPerson.Handle?, aliases: [IntentPerson.Handle], isMe: Bool, image: DisplayRepresentation.Image?)](/documentation/appintents/intentperson/init(identifier:name:handle:aliases:isme:image:))
- [init(handle: IntentPerson.Handle)](/documentation/appintents/intentperson/init(handle:))
- [init(IntentPerson.Handle.Value, label: IntentPerson.Handle.Label)](/documentation/appintents/intentperson/handle-swift.struct/init(_:label:))
- [init(applicationDefined: String, label: String?)](/documentation/appintents/intentperson/handle-swift.struct/init(applicationdefined:label:))

##### Getting the handle’s label

- [var label: IntentPerson.Handle.Label](/documentation/appintents/intentperson/handle-swift.struct/label-swift.property)
- [IntentPerson.Handle.Label](/documentation/appintents/intentperson/handle-swift.struct/label-swift.enum)

###### Getting the handle labels

- [case home](/documentation/appintents/intentperson/handle-swift.struct/label-swift.enum/home)
- [case homeFax](/documentation/appintents/intentperson/handle-swift.struct/label-swift.enum/homefax)
- [case iPhone](/documentation/appintents/intentperson/handle-swift.struct/label-swift.enum/iphone)
- [case main](/documentation/appintents/intentperson/handle-swift.struct/label-swift.enum/main)
- [case mobile](/documentation/appintents/intentperson/handle-swift.struct/label-swift.enum/mobile)
- [case other](/documentation/appintents/intentperson/handle-swift.struct/label-swift.enum/other)
- [case pager](/documentation/appintents/intentperson/handle-swift.struct/label-swift.enum/pager)
- [case school](/documentation/appintents/intentperson/handle-swift.struct/label-swift.enum/school)
- [case work](/documentation/appintents/intentperson/handle-swift.struct/label-swift.enum/work)
- [case workFax](/documentation/appintents/intentperson/handle-swift.struct/label-swift.enum/workfax)
- [case custom(String)](/documentation/appintents/intentperson/handle-swift.struct/label-swift.enum/custom(_:))

##### Getting the handle’s value

- [var value: IntentPerson.Handle.Value](/documentation/appintents/intentperson/handle-swift.struct/value-swift.property)
- [IntentPerson.Handle.Value](/documentation/appintents/intentperson/handle-swift.struct/value-swift.enum)

###### Enumeration Cases

- [case applicationDefined(String)](/documentation/appintents/intentperson/handle-swift.struct/value-swift.enum/applicationdefined(_:))
- [case emailAddress(String)](/documentation/appintents/intentperson/handle-swift.struct/value-swift.enum/emailaddress(_:))
- [case phoneNumber(String)](/documentation/appintents/intentperson/handle-swift.struct/value-swift.enum/phonenumber(_:))
- [IntentPerson.ParameterMode](/documentation/appintents/intentperson/parametermode)

##### Getting the interface type

- [case contact](/documentation/appintents/intentperson/parametermode/contact)
- [case email](/documentation/appintents/intentperson/parametermode/email)
- [case emailOrPhone](/documentation/appintents/intentperson/parametermode/emailorphone)
- [case phone](/documentation/appintents/intentperson/parametermode/phone)

#### Getting person-related identifiers

- [var identifier: IntentPerson.Identifier](/documentation/appintents/intentperson/identifier-swift.property)
- [IntentPerson.Identifier](/documentation/appintents/intentperson/identifier-swift.enum)

##### Getting the identifier types

- [case contact(String)](/documentation/appintents/intentperson/identifier-swift.enum/contact(_:))
- [case applicationDefined(String)](/documentation/appintents/intentperson/identifier-swift.enum/applicationdefined(_:))

##### Enumeration Cases

- [case unknown](/documentation/appintents/intentperson/identifier-swift.enum/unknown)

#### Initializers

- [init(handle: IntentPerson.Handle)](/documentation/appintents/intentperson/init(handle:))

#### Type Aliases

- [IntentPerson.Specification](/documentation/appintents/intentperson/specification)
- [IntentPerson.UnwrappedType](/documentation/appintents/intentperson/unwrappedtype)
- [IntentPerson.ValueType](/documentation/appintents/intentperson/valuetype)

#### Type Properties

- [static var defaultResolverSpecification: EmptyResolverSpecification<IntentPerson>](/documentation/appintents/intentperson/defaultresolverspecification)

### Files

- [IntentFile](/documentation/appintents/intentfile)

#### Creating a file

- [init(data: Data, filename: String, type: UTType?)](/documentation/appintents/intentfile/init(data:filename:type:))
- [init(fileURL: URL, filename: String?, type: UTType?)](/documentation/appintents/intentfile/init(fileurl:filename:type:))

#### Getting the file information

- [var filename: String](/documentation/appintents/intentfile/filename)
- [var fileURL: URL?](/documentation/appintents/intentfile/fileurl)
- [var type: UTType?](/documentation/appintents/intentfile/type)
- [var data: Data](/documentation/appintents/intentfile/data)
- [var removedOnCompletion: Bool](/documentation/appintents/intentfile/removedoncompletion)

#### Instance Properties

- [var availableContentTypes: [UTType]](/documentation/appintents/intentfile/availablecontenttypes)

#### Instance Methods

- [func data(contentType: UTType) async throws -> Data](/documentation/appintents/intentfile/data(contenttype:))
- [func file(contentType: UTType, destinationDirectory: URL?) async throws -> (fileURL: URL, openedInPlace: Bool)](/documentation/appintents/intentfile/file(contenttype:destinationdirectory:))
- [func withFile<Result>(contentType: UTType, allowOpenInPlace: Bool, fileHandler: (URL, Bool) async throws -> Result) async throws -> Result](/documentation/appintents/intentfile/withfile(contenttype:allowopeninplace:filehandler:))

#### Type Aliases

- [IntentFile.Specification](/documentation/appintents/intentfile/specification)
- [IntentFile.UnwrappedType](/documentation/appintents/intentfile/unwrappedtype)
- [IntentFile.ValueType](/documentation/appintents/intentfile/valuetype)

#### Type Properties

- [static var defaultResolverSpecification: EmptyResolverSpecification<IntentFile>](/documentation/appintents/intentfile/defaultresolverspecification)

#### Enumerations

- [IntentFile.IntentFileError](/documentation/appintents/intentfile/intentfileerror)

##### Enumeration Cases

- [case failedToLoadData](/documentation/appintents/intentfile/intentfileerror/failedtoloaddata)
- [case failedToLoadFile](/documentation/appintents/intentfile/intentfileerror/failedtoloadfile)

### Monetary types

- [IntentCurrencyAmount](/documentation/appintents/intentcurrencyamount)

#### Creating a currency type

- [init(amount: Decimal, currencyCode: String)](/documentation/appintents/intentcurrencyamount/init(amount:currencycode:))

#### Getting the currency details

- [let amount: Decimal](/documentation/appintents/intentcurrencyamount/amount)
- [let currencyCode: String](/documentation/appintents/intentcurrencyamount/currencycode)

#### Type Aliases

- [IntentCurrencyAmount.Specification](/documentation/appintents/intentcurrencyamount/specification)
- [IntentCurrencyAmount.UnwrappedType](/documentation/appintents/intentcurrencyamount/unwrappedtype)
- [IntentCurrencyAmount.ValueType](/documentation/appintents/intentcurrencyamount/valuetype)

#### Type Properties

- [static var defaultResolverSpecification: EmptyResolverSpecification<IntentCurrencyAmount>](/documentation/appintents/intentcurrencyamount/defaultresolverspecification)
- [IntentPaymentMethod](/documentation/appintents/intentpaymentmethod)

#### Creating a payment method

- [init(type: IntentPaymentMethod.PaymentType, name: LocalizedStringResource?, identificationHint: String?, icon: DisplayRepresentation.Image?)](/documentation/appintents/intentpaymentmethod/init(type:name:identificationhint:icon:))

#### Getting the payment details

- [var paymentType: IntentPaymentMethod.PaymentType](/documentation/appintents/intentpaymentmethod/paymenttype-swift.property)
- [var name: String?](/documentation/appintents/intentpaymentmethod/name)
- [var identificationHint: String?](/documentation/appintents/intentpaymentmethod/identificationhint)
- [var icon: DisplayRepresentation.Image?](/documentation/appintents/intentpaymentmethod/icon)
- [IntentPaymentMethod.PaymentType](/documentation/appintents/intentpaymentmethod/paymenttype-swift.enum)

##### Getting the payment options

- [case applePay](/documentation/appintents/intentpaymentmethod/paymenttype-swift.enum/applepay)
- [case brokerage](/documentation/appintents/intentpaymentmethod/paymenttype-swift.enum/brokerage)
- [case checking](/documentation/appintents/intentpaymentmethod/paymenttype-swift.enum/checking)
- [case credit](/documentation/appintents/intentpaymentmethod/paymenttype-swift.enum/credit)
- [case debit](/documentation/appintents/intentpaymentmethod/paymenttype-swift.enum/debit)
- [case prepaid](/documentation/appintents/intentpaymentmethod/paymenttype-swift.enum/prepaid)
- [case savings](/documentation/appintents/intentpaymentmethod/paymenttype-swift.enum/savings)
- [case store](/documentation/appintents/intentpaymentmethod/paymenttype-swift.enum/store)
- [case unknown](/documentation/appintents/intentpaymentmethod/paymenttype-swift.enum/unknown)

#### Type Aliases

- [IntentPaymentMethod.Specification](/documentation/appintents/intentpaymentmethod/specification)
- [IntentPaymentMethod.UnwrappedType](/documentation/appintents/intentpaymentmethod/unwrappedtype)
- [IntentPaymentMethod.ValueType](/documentation/appintents/intentpaymentmethod/valuetype)

#### Type Properties

- [static var defaultResolverSpecification: EmptyResolverSpecification<IntentPaymentMethod>](/documentation/appintents/intentpaymentmethod/defaultresolverspecification)

### Items and collections

- [IntentItem](/documentation/appintents/intentitem)

#### Initializers

- [init(Value)](/documentation/appintents/intentitem/init(_:))
- [init(Value, title: LocalizedStringResource, subtitle: LocalizedStringResource?, image: DisplayRepresentation.Image?)](/documentation/appintents/intentitem/init(_:title:subtitle:image:))

#### Instance Properties

- [var description: DisplayRepresentation](/documentation/appintents/intentitem/description)
- [var value: Value](/documentation/appintents/intentitem/value)

#### Enumerations

- [IntentItem.Builder](/documentation/appintents/intentitem/builder)

##### Type Methods

- [static func buildArray([[IntentItem<Value>]]) -> [IntentItem<Value>]](/documentation/appintents/intentitem/builder/buildarray(_:))
- [static func buildBlock() -> [Value]](/documentation/appintents/intentitem/builder/buildblock())
- [static func buildBlock(IntentItem<Value>...) -> [IntentItem<Value>]](/documentation/appintents/intentitem/builder/buildblock(_:)-9j0sn)
- [static func buildBlock([IntentItem<Value>]) -> [IntentItem<Value>]](/documentation/appintents/intentitem/builder/buildblock(_:)-pgo1)
- [static func buildExpression(Value) -> IntentItem<Value>](/documentation/appintents/intentitem/builder/buildexpression(_:)-202yw)
- [static func buildExpression<ExpressionValue>(IntentItem<ExpressionValue>) -> IntentItem<ExpressionValue>](/documentation/appintents/intentitem/builder/buildexpression(_:)-90pb0)
- [IntentItemCollection](/documentation/appintents/intentitemcollection)

#### Initializers

- [init(promptLabel: LocalizedStringResource?, usesIndexedCollation: Bool, items: [Result])](/documentation/appintents/intentitemcollection/init(promptlabel:usesindexedcollation:items:))
- [init(promptLabel: LocalizedStringResource?, usesIndexedCollation: Bool, sections: [IntentItemSection<Result>])](/documentation/appintents/intentitemcollection/init(promptlabel:usesindexedcollation:sections:))
- [init(promptLabel: LocalizedStringResource?, usesIndexedCollation: Bool, sectionsBuilder: () -> [IntentItemSection<Result>])](/documentation/appintents/intentitemcollection/init(promptlabel:usesindexedcollation:sectionsbuilder:))

#### Instance Properties

- [var items: [Result.ValueType]](/documentation/appintents/intentitemcollection/items)
- [var sections: [IntentItemSection<Result>]](/documentation/appintents/intentitemcollection/sections)

#### Type Properties

- [static var empty: IntentItemCollection<Result>](/documentation/appintents/intentitemcollection/empty)
- [IntentItemSection](/documentation/appintents/intentitemsection)

#### Initializers

- [init(LocalizedStringResource, items: [Result])](/documentation/appintents/intentitemsection/init(_:items:)-2frw8)
- [init(LocalizedStringResource, items: [IntentItem<Result>])](/documentation/appintents/intentitemsection/init(_:items:)-8p4y0)
- [init(LocalizedStringResource?, itemsBuilder: () -> [IntentItem<Result>])](/documentation/appintents/intentitemsection/init(_:itemsbuilder:))
- [init(LocalizedStringResource, subtitle: LocalizedStringResource?, image: DisplayRepresentation.Image?, itemsBuilder: () -> [IntentItem<Result>])](/documentation/appintents/intentitemsection/init(_:subtitle:image:itemsbuilder:))
- [init(items: [IntentItem<Result>])](/documentation/appintents/intentitemsection/init(items:))
- [init(title: LocalizedStringResource, items: [IntentItem<Result>])](/documentation/appintents/intentitemsection/init(title:items:))

#### Instance Properties

- [var description: DisplayRepresentation?](/documentation/appintents/intentitemsection/description)
- [var items: [IntentItem<Result>]](/documentation/appintents/intentitemsection/items)

#### Enumerations

- [IntentItemSection.Builder](/documentation/appintents/intentitemsection/builder)

##### Type Methods

- [static func buildBlock() -> [IntentItemSection<Result>]](/documentation/appintents/intentitemsection/builder/buildblock())
- [static func buildBlock(IntentItemSection<Result>...) -> [IntentItemSection<Result>]](/documentation/appintents/intentitemsection/builder/buildblock(_:)-4a4je)
- [static func buildBlock(IntentItem<Result>...) -> [IntentItemSection<Result>]](/documentation/appintents/intentitemsection/builder/buildblock(_:)-7uwpz)
- [IntentCollectionSize](/documentation/appintents/intentcollectionsize)

#### Initializers

- [init(exactly: Int)](/documentation/appintents/intentcollectionsize/init(exactly:))
- [init(min: Int, max: Int)](/documentation/appintents/intentcollectionsize/init(min:max:))

## Errors

- [AppIntentError](/documentation/appintents/appintenterror)

### Getting the error codes

- [static var restartPerform: AppIntentError](/documentation/appintents/appintenterror/restartperform)

### Enumerations

- [AppIntentError.PermissionRequired](/documentation/appintents/appintenterror/permissionrequired)

#### Type Properties

- [static let bluetooth: AppIntentError](/documentation/appintents/appintenterror/permissionrequired/bluetooth)
- [static let contacts: AppIntentError](/documentation/appintents/appintenterror/permissionrequired/contacts)
- [static let localNetwork: AppIntentError](/documentation/appintents/appintenterror/permissionrequired/localnetwork)
- [static let photos: AppIntentError](/documentation/appintents/appintenterror/permissionrequired/photos)
- [static let siri: AppIntentError](/documentation/appintents/appintenterror/permissionrequired/siri)

#### Type Methods

- [static func location(precise: Bool) -> AppIntentError](/documentation/appintents/appintenterror/permissionrequired/location(precise:))
- [AppIntentError.Unrecoverable](/documentation/appintents/appintenterror/unrecoverable)

#### Type Properties

- [static let entityNotFound: AppIntentError](/documentation/appintents/appintenterror/unrecoverable/entitynotfound)
- [static let featureCurrentlyRestricted: AppIntentError](/documentation/appintents/appintenterror/unrecoverable/featurecurrentlyrestricted)
- [static let networkFailure: AppIntentError](/documentation/appintents/appintenterror/unrecoverable/networkfailure)
- [static let notAllowed: AppIntentError](/documentation/appintents/appintenterror/unrecoverable/notallowed)
- [static let partialFailure: AppIntentError](/documentation/appintents/appintenterror/unrecoverable/partialfailure)
- [static let unknown: AppIntentError](/documentation/appintents/appintenterror/unrecoverable/unknown)
- [static let unsupportedOnDevice: AppIntentError](/documentation/appintents/appintenterror/unrecoverable/unsupportedondevice)
- [AppIntentError.UserActionRequired](/documentation/appintents/appintenterror/useractionrequired)

#### Type Properties

- [static let accountSetup: AppIntentError](/documentation/appintents/appintenterror/useractionrequired/accountsetup)
- [static let confirmation: AppIntentError](/documentation/appintents/appintenterror/useractionrequired/confirmation)
- [static let signin: AppIntentError](/documentation/appintents/appintenterror/useractionrequired/signin)

### Default Implementations

- [CustomLocalizedStringResourceConvertible Implementations](/documentation/appintents/appintenterror/customlocalizedstringresourceconvertible-implementations)

#### Instance Properties

- [var localizedStringResource: LocalizedStringResource](/documentation/appintents/appintenterror/localizedstringresource)

## Protocols

- [AppIntentSceneDelegate](/documentation/appintents/appintentscenedelegate)

### Instance Methods

- [func scene(UIScene, willPerformAppIntent: any UISceneAppIntent)](/documentation/appintents/appintentscenedelegate/scene(_:willperformappintent:))
- [AppShortcutsContent](/documentation/appintents/appshortcutscontent)

### Instance Properties

- [var appShortcuts: [AppShortcut]](/documentation/appintents/appshortcutscontent/appshortcuts)
- [CustomURLRepresentationParameterConvertible](/documentation/appintents/customurlrepresentationparameterconvertible)

### Instance Properties

- [var urlRepresentationParameter: String?](/documentation/appintents/customurlrepresentationparameterconvertible/urlrepresentationparameter)
- [ShowsSnippetIntent](/documentation/appintents/showssnippetintent)
- [TargetContentProvidingIntent](/documentation/appintents/targetcontentprovidingintent)

### Instance Properties

- [var contentIdentifier: String](/documentation/appintents/targetcontentprovidingintent/contentidentifier)
- [UISceneAppIntent](/documentation/appintents/uisceneappintent)

### Instance Properties

- [var uiScene: UIScene?](/documentation/appintents/uisceneappintent/uiscene)

### Instance Methods

- [func performNavigation(forScene: UIScene)](/documentation/appintents/uisceneappintent/performnavigation(forscene:))
- [UndoableIntent](/documentation/appintents/undoableintent)

### Instance Properties

- [var undoManager: UndoManager?](/documentation/appintents/undoableintent/undomanager)

## Structures

- [ConfirmationConditions](/documentation/appintents/confirmationconditions)

### Type Properties

- [static let lowConfidenceSource: ConfirmationConditions](/documentation/appintents/confirmationconditions/lowconfidencesource)
- [EntityPropertyModifiers](/documentation/appintents/entitypropertymodifiers)

### Type Properties

- [static let async: EntityPropertyModifiers](/documentation/appintents/entitypropertymodifiers/async)
- [static let readOnly: EntityPropertyModifiers](/documentation/appintents/entitypropertymodifiers/readonly)
- [EntityURLRepresentation](/documentation/appintents/entityurlrepresentation)

### Initializers

- [init(String)](/documentation/appintents/entityurlrepresentation/init(_:))
- [EnumURLRepresentation](/documentation/appintents/enumurlrepresentation)

### Structures

- [EnumURLRepresentation.EnumSingleURLRepresentation](/documentation/appintents/enumurlrepresentation/enumsingleurlrepresentation)

### Initializers

- [init([Enum : EnumURLRepresentation<Enum>.EnumSingleURLRepresentation])](/documentation/appintents/enumurlrepresentation/init(_:)-1odm)
- [init(String)](/documentation/appintents/enumurlrepresentation/init(_:)-6p999)
- [FileEntityIdentifier](/documentation/appintents/fileentityidentifier)

### Instance Properties

- [var draftIdentifier: String?](/documentation/appintents/fileentityidentifier/draftidentifier)
- [var fileURL: URL?](/documentation/appintents/fileentityidentifier/fileurl)
- [var isDraft: Bool](/documentation/appintents/fileentityidentifier/isdraft)

### Type Methods

- [static func draft(identifier: String) -> FileEntityIdentifier](/documentation/appintents/fileentityidentifier/draft(identifier:))
- [static func file(url: URL) throws -> FileEntityIdentifier](/documentation/appintents/fileentityidentifier/file(url:))
- [IntentChoiceOption](/documentation/appintents/intentchoiceoption)

### Structures

- [IntentChoiceOption.Style](/documentation/appintents/intentchoiceoption/style-swift.struct)

#### Type Properties

- [static var cancel: IntentChoiceOption.Style](/documentation/appintents/intentchoiceoption/style-swift.struct/cancel)
- [static var `default`: IntentChoiceOption.Style](/documentation/appintents/intentchoiceoption/style-swift.struct/default)
- [static var destructive: IntentChoiceOption.Style](/documentation/appintents/intentchoiceoption/style-swift.struct/destructive)

### Initializers

- [init(title: LocalizedStringResource, style: IntentChoiceOption.Style)](/documentation/appintents/intentchoiceoption/init(title:style:))

### Instance Properties

- [let style: IntentChoiceOption.Style](/documentation/appintents/intentchoiceoption/style-swift.property)
- [let title: LocalizedStringResource](/documentation/appintents/intentchoiceoption/title)

### Type Properties

- [static var cancel: IntentChoiceOption](/documentation/appintents/intentchoiceoption/cancel)
- [IntentModes](/documentation/appintents/intentmodes)

### Structures

- [IntentModes.Current](/documentation/appintents/intentmodes/current)

#### Instance Properties

- [var canContinueInForeground: Bool](/documentation/appintents/intentmodes/current/cancontinueinforeground)

#### Type Properties

- [static var background: IntentModes.Current](/documentation/appintents/intentmodes/current/background)
- [static var foreground: IntentModes.Current](/documentation/appintents/intentmodes/current/foreground)
- [IntentModes.ForegroundMode](/documentation/appintents/intentmodes/foregroundmode)

#### Type Properties

- [static var deferred: IntentModes.ForegroundMode](/documentation/appintents/intentmodes/foregroundmode/deferred)
- [static var dynamic: IntentModes.ForegroundMode](/documentation/appintents/intentmodes/foregroundmode/dynamic)
- [static var immediate: IntentModes.ForegroundMode](/documentation/appintents/intentmodes/foregroundmode/immediate)

### Type Properties

- [static var background: IntentModes](/documentation/appintents/intentmodes/background)
- [static var foreground: IntentModes](/documentation/appintents/intentmodes/foreground)

### Type Methods

- [static func foreground(IntentModes.ForegroundMode) -> IntentModes](/documentation/appintents/intentmodes/foreground(_:))
- [IntentURLRepresentation](/documentation/appintents/intenturlrepresentation)

### Initializers

- [init(String)](/documentation/appintents/intenturlrepresentation/init(_:))

## Macros

- [macro UnionValue()](/documentation/appintents/unionvalue())

## Enumerations

- [AppShortcutPhraseToken](/documentation/appintents/appshortcutphrasetoken)

### Getting the tokens

- [case applicationName](/documentation/appintents/appshortcutphrasetoken/applicationname)
- [VideoCategory](/documentation/appintents/videocategory)

### Enumeration Cases

- [case freeform](/documentation/appintents/videocategory/freeform)
- [case movies](/documentation/appintents/videocategory/movies)
- [case tv](/documentation/appintents/videocategory/tv)

### Type Aliases

- [VideoCategory.Specification](/documentation/appintents/videocategory/specification)
- [VideoCategory.UnwrappedType](/documentation/appintents/videocategory/unwrappedtype)
- [VideoCategory.ValueType](/documentation/appintents/videocategory/valuetype)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
