---
title: Swift Testing
source: https://developer.apple.com/documentation/testing
timestamp: 2026-02-19T07:52:17.745Z
---

## Essentials

- [Defining test functions](/documentation/testing/definingtests)
- [Organizing test functions with suite types](/documentation/testing/organizingtests)
- [Migrating a test from XCTest](/documentation/testing/migratingfromxctest)
- [macro Test(String?, any TestTrait...)](/documentation/testing/test(_:_:))
- [Test](/documentation/testing/test)

### Structures

- [Test.Case](/documentation/testing/test/case)

#### Instance Properties

- [var isParameterized: Bool](/documentation/testing/test/case/isparameterized)

#### Type Properties

- [static var current: Test.Case?](/documentation/testing/test/case/current)

### Instance Properties

- [var associatedBugs: [Bug]](/documentation/testing/test/associatedbugs)
- [var comments: [Comment]](/documentation/testing/test/comments)
- [var displayName: String?](/documentation/testing/test/displayname)
- [var isParameterized: Bool](/documentation/testing/test/isparameterized)
- [var isSuite: Bool](/documentation/testing/test/issuite)
- [var name: String](/documentation/testing/test/name)
- [var sourceLocation: SourceLocation](/documentation/testing/test/sourcelocation)
- [var tags: Set<Tag>](/documentation/testing/test/tags)
- [var timeLimit: Duration?](/documentation/testing/test/timelimit)
- [var traits: [any Trait]](/documentation/testing/test/traits)

### Type Properties

- [static var current: Test?](/documentation/testing/test/current)

### Type Methods

- [static func cancel(Comment?, sourceLocation: SourceLocation) throws -> Never](/documentation/testing/test/cancel(_:sourcelocation:))
- [macro Suite(String?, any SuiteTrait...)](/documentation/testing/suite(_:_:))

## Test parameterization

- [Implementing parameterized tests](/documentation/testing/parameterizedtesting)
- [macro Test<C>(String?, any TestTrait..., arguments: C)](/documentation/testing/test(_:_:arguments:)-8kn7a)
- [macro Test<C1, C2>(String?, any TestTrait..., arguments: C1, C2)](/documentation/testing/test(_:_:arguments:_:))
- [macro Test<C1, C2>(String?, any TestTrait..., arguments: Zip2Sequence<C1, C2>)](/documentation/testing/test(_:_:arguments:)-3rzok)
- [CustomTestArgumentEncodable](/documentation/testing/customtestargumentencodable)

### Instance Methods

- [func encodeTestArgument(to: some Encoder) throws](/documentation/testing/customtestargumentencodable/encodetestargument(to:))
- [Test.Case](/documentation/testing/test/case)

### Instance Properties

- [var isParameterized: Bool](/documentation/testing/test/case/isparameterized)

### Type Properties

- [static var current: Test.Case?](/documentation/testing/test/case/current)

## Behavior validation

- [Expectations and confirmations](/documentation/testing/expectations)

### Checking expectations

- [macro expect(Bool, @autoclosure () -> Comment?, sourceLocation: SourceLocation)](/documentation/testing/expect(_:_:sourcelocation:))
- [macro require(Bool, @autoclosure () -> Comment?, sourceLocation: SourceLocation)](/documentation/testing/require(_:_:sourcelocation:)-5l63q)
- [macro require<T>(T?, @autoclosure () -> Comment?, sourceLocation: SourceLocation) -> T](/documentation/testing/require(_:_:sourcelocation:)-6w9oo)

### Checking that errors are thrown

- [Testing for errors in Swift code](/documentation/testing/testing-for-errors-in-swift-code)
- [macro expect<E, R>(throws: E.Type, @autoclosure () -> Comment?, sourceLocation: SourceLocation, performing: () async throws -> R) -> E?](/documentation/testing/expect(throws:_:sourcelocation:performing:)-1hfms)
- [macro expect<E, R>(throws: E, @autoclosure () -> Comment?, sourceLocation: SourceLocation, performing: () async throws -> R) -> E?](/documentation/testing/expect(throws:_:sourcelocation:performing:)-7du1h)
- [macro expect<R>(@autoclosure () -> Comment?, sourceLocation: SourceLocation, performing: () async throws -> R, throws: (any Error) async throws -> Bool) -> (any Error)?](/documentation/testing/expect(_:sourcelocation:performing:throws:))
- [macro require<E, R>(throws: E.Type, @autoclosure () -> Comment?, sourceLocation: SourceLocation, performing: () async throws -> R) -> E](/documentation/testing/require(throws:_:sourcelocation:performing:)-7n34r)
- [macro require<E, R>(throws: E, @autoclosure () -> Comment?, sourceLocation: SourceLocation, performing: () async throws -> R) -> E](/documentation/testing/require(throws:_:sourcelocation:performing:)-4djuw)
- [macro require<R>(@autoclosure () -> Comment?, sourceLocation: SourceLocation, performing: () async throws -> R, throws: (any Error) async throws -> Bool) -> any Error](/documentation/testing/require(_:sourcelocation:performing:throws:))

### Checking how processes exit

- [Exit testing](/documentation/testing/exit-testing)
- [macro expect(processExitsWith: ExitTest.Condition, observing: [any PartialKeyPath<ExitTest.Result> & Sendable], @autoclosure () -> Comment?, sourceLocation: SourceLocation, performing: () async throws -> Void) -> ExitTest.Result?](/documentation/testing/expect(processexitswith:observing:_:sourcelocation:performing:))
- [macro require(processExitsWith: ExitTest.Condition, observing: [any PartialKeyPath<ExitTest.Result> & Sendable], @autoclosure () -> Comment?, sourceLocation: SourceLocation, performing: () async throws -> Void) -> ExitTest.Result](/documentation/testing/require(processexitswith:observing:_:sourcelocation:performing:))
- [ExitStatus](/documentation/testing/exitstatus)

#### Enumeration Cases

- [case exitCode(CInt)](/documentation/testing/exitstatus/exitcode(_:))
- [case signal(CInt)](/documentation/testing/exitstatus/signal(_:))
- [ExitTest](/documentation/testing/exittest)

#### Structures

- [ExitTest.Condition](/documentation/testing/exittest/condition)

##### Successful exit conditions

- [static var success: ExitTest.Condition](/documentation/testing/exittest/condition/success)

##### Failing exit conditions

- [static var failure: ExitTest.Condition](/documentation/testing/exittest/condition/failure)
- [static func exitCode(CInt) -> ExitTest.Condition](/documentation/testing/exittest/condition/exitcode(_:))
- [static func signal(CInt) -> ExitTest.Condition](/documentation/testing/exittest/condition/signal(_:))

##### Initializers

- [init(ExitStatus)](/documentation/testing/exittest/condition/init(_:))
- [ExitTest.Result](/documentation/testing/exittest/result)

##### Instance Properties

- [var exitStatus: ExitStatus](/documentation/testing/exittest/result/exitstatus)
- [var standardErrorContent: [UInt8]](/documentation/testing/exittest/result/standarderrorcontent)
- [var standardOutputContent: [UInt8]](/documentation/testing/exittest/result/standardoutputcontent)

#### Type Properties

- [static var current: ExitTest?](/documentation/testing/exittest/current)

### Confirming that asynchronous events occur

- [Testing asynchronous code](/documentation/testing/testing-asynchronous-code)
- [func confirmation<R>(Comment?, expectedCount: Int, isolation: isolated (any Actor)?, sourceLocation: SourceLocation, (Confirmation) async throws -> sending R) async rethrows -> R](/documentation/testing/confirmation(_:expectedcount:isolation:sourcelocation:_:)-5mqz2)
- [func confirmation<R>(Comment?, expectedCount: some RangeExpression<Int> & Sendable & Sequence<Int>, isolation: isolated (any Actor)?, sourceLocation: SourceLocation, (Confirmation) async throws -> sending R) async rethrows -> R](/documentation/testing/confirmation(_:expectedcount:isolation:sourcelocation:_:)-l3il)
- [Confirmation](/documentation/testing/confirmation)

#### Instance Methods

- [func callAsFunction(count: Int)](/documentation/testing/confirmation/callasfunction(count:))
- [func confirm(count: Int)](/documentation/testing/confirmation/confirm(count:))

### Retrieving information about checked expectations

- [Expectation](/documentation/testing/expectation)

#### Instance Properties

- [var isPassing: Bool](/documentation/testing/expectation/ispassing)
- [var isRequired: Bool](/documentation/testing/expectation/isrequired)
- [var sourceLocation: SourceLocation](/documentation/testing/expectation/sourcelocation)
- [ExpectationFailedError](/documentation/testing/expectationfailederror)

#### Instance Properties

- [var expectation: Expectation](/documentation/testing/expectationfailederror/expectation)
- [CustomTestStringConvertible](/documentation/testing/customteststringconvertible)

#### Instance Properties

- [var testDescription: String](/documentation/testing/customteststringconvertible/testdescription)

### Representing source locations

- [SourceLocation](/documentation/testing/sourcelocation)

#### Initializers

- [init(fileID: String, filePath: String, line: Int, column: Int)](/documentation/testing/sourcelocation/init(fileid:filepath:line:column:))

#### Instance Properties

- [var column: Int](/documentation/testing/sourcelocation/column)
- [var fileID: String](/documentation/testing/sourcelocation/fileid)
- [var fileName: String](/documentation/testing/sourcelocation/filename)
- [var line: Int](/documentation/testing/sourcelocation/line)
- [var moduleName: String](/documentation/testing/sourcelocation/modulename)
- [Known issues](/documentation/testing/known-issues)

### Recording known issues in tests

- [func withKnownIssue(Comment?, isIntermittent: Bool, sourceLocation: SourceLocation, () throws -> Void)](/documentation/testing/withknownissue(_:isintermittent:sourcelocation:_:))
- [func withKnownIssue(Comment?, isIntermittent: Bool, isolation: isolated (any Actor)?, sourceLocation: SourceLocation, () async throws -> Void) async](/documentation/testing/withknownissue(_:isintermittent:isolation:sourcelocation:_:))
- [func withKnownIssue(Comment?, isIntermittent: Bool, sourceLocation: SourceLocation, () throws -> Void, when: () -> Bool, matching: KnownIssueMatcher) rethrows](/documentation/testing/withknownissue(_:isintermittent:sourcelocation:_:when:matching:))
- [func withKnownIssue(Comment?, isIntermittent: Bool, isolation: isolated (any Actor)?, sourceLocation: SourceLocation, () async throws -> Void, when: () async -> Bool, matching: KnownIssueMatcher) async rethrows](/documentation/testing/withknownissue(_:isintermittent:isolation:sourcelocation:_:when:matching:))
- [KnownIssueMatcher](/documentation/testing/knownissuematcher)

### Describing a failure or warning

- [Issue](/documentation/testing/issue)

#### Instance Properties

- [var comments: [Comment]](/documentation/testing/issue/comments)
- [var error: (any Error)?](/documentation/testing/issue/error)
- [var isFailure: Bool](/documentation/testing/issue/isfailure)
- [var kind: Issue.Kind](/documentation/testing/issue/kind-swift.property)
- [var severity: Issue.Severity](/documentation/testing/issue/severity-swift.property)
- [var sourceLocation: SourceLocation?](/documentation/testing/issue/sourcelocation)

#### Type Methods

- [static func record(any Error, Comment?, sourceLocation: SourceLocation) -> Issue](/documentation/testing/issue/record(_:_:sourcelocation:))
- [static func record(Comment?, severity: Issue.Severity, sourceLocation: SourceLocation) -> Issue](/documentation/testing/issue/record(_:severity:sourcelocation:))

#### Enumerations

- [Issue.Kind](/documentation/testing/issue/kind-swift.enum)

##### Enumeration Cases

- [case apiMisused](/documentation/testing/issue/kind-swift.enum/apimisused)
- [case confirmationMiscounted(actual: Int, expected: any RangeExpression & Sendable)](/documentation/testing/issue/kind-swift.enum/confirmationmiscounted(actual:expected:))
- [case errorCaught(any Error)](/documentation/testing/issue/kind-swift.enum/errorcaught(_:))
- [case expectationFailed(Expectation)](/documentation/testing/issue/kind-swift.enum/expectationfailed(_:))
- [case knownIssueNotRecorded](/documentation/testing/issue/kind-swift.enum/knownissuenotrecorded)
- [case system](/documentation/testing/issue/kind-swift.enum/system)
- [case timeLimitExceeded(timeLimitComponents: (seconds: Int64, attoseconds: Int64))](/documentation/testing/issue/kind-swift.enum/timelimitexceeded(timelimitcomponents:))
- [case unconditional](/documentation/testing/issue/kind-swift.enum/unconditional)
- [case valueAttachmentFailed(any Error)](/documentation/testing/issue/kind-swift.enum/valueattachmentfailed(_:))
- [Issue.Severity](/documentation/testing/issue/severity-swift.enum)

##### Enumeration Cases

- [case error](/documentation/testing/issue/severity-swift.enum/error)
- [case warning](/documentation/testing/issue/severity-swift.enum/warning)

## Test customization

- [Traits](/documentation/testing/traits)

### Customizing runtime behaviors

- [Enabling and disabling tests](/documentation/testing/enablinganddisabling)
- [Limiting the running time of tests](/documentation/testing/limitingexecutiontime)
- [static func enabled(if: @autoclosure () throws -> Bool, Comment?, sourceLocation: SourceLocation) -> Self](/documentation/testing/trait/enabled(if:_:sourcelocation:))
- [static func enabled(Comment?, sourceLocation: SourceLocation, () async throws -> Bool) -> Self](/documentation/testing/trait/enabled(_:sourcelocation:_:))
- [static func disabled(Comment?, sourceLocation: SourceLocation) -> Self](/documentation/testing/trait/disabled(_:sourcelocation:))
- [static func disabled(if: @autoclosure () throws -> Bool, Comment?, sourceLocation: SourceLocation) -> Self](/documentation/testing/trait/disabled(if:_:sourcelocation:))
- [static func disabled(Comment?, sourceLocation: SourceLocation, () async throws -> Bool) -> Self](/documentation/testing/trait/disabled(_:sourcelocation:_:))
- [static func timeLimit(TimeLimitTrait.Duration) -> Self](/documentation/testing/trait/timelimit(_:))

### Running tests serially or in parallel

- [Running tests serially or in parallel](/documentation/testing/parallelization)
- [static var serialized: ParallelizationTrait](/documentation/testing/trait/serialized)

### Annotating tests

- [Adding tags to tests](/documentation/testing/addingtags)
- [Adding comments to tests](/documentation/testing/addingcomments)
- [Associating bugs with tests](/documentation/testing/associatingbugs)
- [Interpreting bug identifiers](/documentation/testing/bugidentifiers)
- [macro Tag()](/documentation/testing/tag())
- [static func bug(String, Comment?) -> Self](/documentation/testing/trait/bug(_:_:))
- [static func bug(String?, id: String, Comment?) -> Self](/documentation/testing/trait/bug(_:id:_:)-10yf5)
- [static func bug(String?, id: some Numeric, Comment?) -> Self](/documentation/testing/trait/bug(_:id:_:)-3vtpl)

### Handling issues

- [static func compactMapIssues((Issue) -> Issue?) -> Self](/documentation/testing/trait/compactmapissues(_:))
- [static func filterIssues((Issue) -> Bool) -> Self](/documentation/testing/trait/filterissues(_:))

### Creating custom traits

- [Trait](/documentation/testing/trait)

#### Enabling and disabling tests

- [static func enabled(if: @autoclosure () throws -> Bool, Comment?, sourceLocation: SourceLocation) -> Self](/documentation/testing/trait/enabled(if:_:sourcelocation:))
- [static func enabled(Comment?, sourceLocation: SourceLocation, () async throws -> Bool) -> Self](/documentation/testing/trait/enabled(_:sourcelocation:_:))
- [static func disabled(Comment?, sourceLocation: SourceLocation) -> Self](/documentation/testing/trait/disabled(_:sourcelocation:))
- [static func disabled(if: @autoclosure () throws -> Bool, Comment?, sourceLocation: SourceLocation) -> Self](/documentation/testing/trait/disabled(if:_:sourcelocation:))
- [static func disabled(Comment?, sourceLocation: SourceLocation, () async throws -> Bool) -> Self](/documentation/testing/trait/disabled(_:sourcelocation:_:))

#### Controlling how tests are run

- [static func timeLimit(TimeLimitTrait.Duration) -> Self](/documentation/testing/trait/timelimit(_:))
- [static var serialized: ParallelizationTrait](/documentation/testing/trait/serialized)

#### Categorizing tests and adding information

- [static func tags(Tag...) -> Self](/documentation/testing/trait/tags(_:))
- [var comments: [Comment]](/documentation/testing/trait/comments)

#### Associating bugs

- [static func bug(String, Comment?) -> Self](/documentation/testing/trait/bug(_:_:))
- [static func bug(String?, id: String, Comment?) -> Self](/documentation/testing/trait/bug(_:id:_:)-10yf5)
- [static func bug(String?, id: some Numeric, Comment?) -> Self](/documentation/testing/trait/bug(_:id:_:)-3vtpl)

#### Running code before and after a test or suite

- [TestScoping](/documentation/testing/testscoping)

##### Instance Methods

- [func provideScope(for: Test, testCase: Test.Case?, performing: () async throws -> Void) async throws](/documentation/testing/testscoping/providescope(for:testcase:performing:))
- [func scopeProvider(for: Test, testCase: Test.Case?) -> Self.TestScopeProvider?](/documentation/testing/trait/scopeprovider(for:testcase:))
- [TestScopeProvider](/documentation/testing/trait/testscopeprovider)
- [func prepare(for: Test) async throws](/documentation/testing/trait/prepare(for:))

#### Type Methods

- [static func compactMapIssues((Issue) -> Issue?) -> Self](/documentation/testing/trait/compactmapissues(_:))
- [static func filterIssues((Issue) -> Bool) -> Self](/documentation/testing/trait/filterissues(_:))
- [TestTrait](/documentation/testing/testtrait)
- [SuiteTrait](/documentation/testing/suitetrait)

#### Instance Properties

- [var isRecursive: Bool](/documentation/testing/suitetrait/isrecursive)
- [TestScoping](/documentation/testing/testscoping)

#### Instance Methods

- [func provideScope(for: Test, testCase: Test.Case?, performing: () async throws -> Void) async throws](/documentation/testing/testscoping/providescope(for:testcase:performing:))

### Supporting types

- [Bug](/documentation/testing/bug)

#### Instance Properties

- [var id: String?](/documentation/testing/bug/id)
- [var title: Comment?](/documentation/testing/bug/title)
- [var url: String?](/documentation/testing/bug/url)
- [Comment](/documentation/testing/comment)

#### Instance Properties

- [var rawValue: String](/documentation/testing/comment/rawvalue)
- [ConditionTrait](/documentation/testing/conditiontrait)

#### Instance Properties

- [var sourceLocation: SourceLocation](/documentation/testing/conditiontrait/sourcelocation)

#### Instance Methods

- [func evaluate() async throws -> Bool](/documentation/testing/conditiontrait/evaluate())
- [IssueHandlingTrait](/documentation/testing/issuehandlingtrait)

#### Instance Methods

- [func handleIssue(Issue) -> Issue?](/documentation/testing/issuehandlingtrait/handleissue(_:))
- [ParallelizationTrait](/documentation/testing/parallelizationtrait)
- [Tag](/documentation/testing/tag)

#### Structures

- [Tag.List](/documentation/testing/tag/list)

##### Instance Properties

- [var tags: [Tag]](/documentation/testing/tag/list/tags)
- [Tag.List](/documentation/testing/tag/list)

#### Instance Properties

- [var tags: [Tag]](/documentation/testing/tag/list/tags)
- [TimeLimitTrait](/documentation/testing/timelimittrait)

#### Structures

- [TimeLimitTrait.Duration](/documentation/testing/timelimittrait/duration)

##### Type Methods

- [static func minutes(some BinaryInteger) -> TimeLimitTrait.Duration](/documentation/testing/timelimittrait/duration/minutes(_:))

#### Instance Properties

- [var timeLimit: Duration](/documentation/testing/timelimittrait/timelimit)

## Data collection

- [Attachments](/documentation/testing/attachments)

### Attaching values to tests

- [Attachment](/documentation/testing/attachment)

#### Initializers

- [init<T>(T, named: String?, as: AttachableImageFormat?, sourceLocation: SourceLocation)](/documentation/testing/attachment/init(_:named:as:sourcelocation:))
- [init(consuming AttachableValue, named: String?, sourceLocation: SourceLocation)](/documentation/testing/attachment/init(_:named:sourcelocation:))
- [init(contentsOf: URL, named: String?, sourceLocation: SourceLocation) async throws](/documentation/testing/attachment/init(contentsof:named:sourcelocation:))

#### Instance Properties

- [var attachableValue: AttachableValue](/documentation/testing/attachment/attachablevalue-2tnj5)
- [var attachableValue: AttachableValue.Wrapped](/documentation/testing/attachment/attachablevalue-vkrw)
- [var imageFormat: AttachableImageFormat?](/documentation/testing/attachment/imageformat)
- [var preferredName: String](/documentation/testing/attachment/preferredname)

#### Instance Methods

- [func withUnsafeBytes<R>((UnsafeRawBufferPointer) throws -> R) throws -> R](/documentation/testing/attachment/withunsafebytes(_:))

#### Type Methods

- [static func record<T>(T, named: String?, as: AttachableImageFormat?, sourceLocation: SourceLocation)](/documentation/testing/attachment/record(_:named:as:sourcelocation:))
- [static func record(consuming AttachableValue, named: String?, sourceLocation: SourceLocation)](/documentation/testing/attachment/record(_:named:sourcelocation:))
- [static func record(consuming Attachment<AttachableValue>, sourceLocation: SourceLocation)](/documentation/testing/attachment/record(_:sourcelocation:))

#### Default Implementations

- [CustomStringConvertible Implementations](/documentation/testing/attachment/customstringconvertible-implementations)

##### Instance Properties

- [var description: String](/documentation/testing/attachment/description)
- [Attachable](/documentation/testing/attachable)

#### Instance Properties

- [var estimatedAttachmentByteCount: Int?](/documentation/testing/attachable/estimatedattachmentbytecount)

#### Instance Methods

- [func preferredName(for: borrowing Attachment<Self>, basedOn: String) -> String](/documentation/testing/attachable/preferredname(for:basedon:))
- [func withUnsafeBytes<R>(for: borrowing Attachment<Self>, (UnsafeRawBufferPointer) throws -> R) throws -> R](/documentation/testing/attachable/withunsafebytes(for:_:))
- [AttachableWrapper](/documentation/testing/attachablewrapper)

#### Associated Types

- [Wrapped](/documentation/testing/attachablewrapper/wrapped)

#### Instance Properties

- [var wrappedValue: Self.Wrapped](/documentation/testing/attachablewrapper/wrappedvalue)

### Attaching images to tests

- [AttachableAsImage](/documentation/testing/attachableasimage)

#### Instance Methods

- [func withUnsafeBytes<R>(as: AttachableImageFormat, (UnsafeRawBufferPointer) throws -> R) throws -> R](/documentation/testing/attachableasimage/withunsafebytes(as:_:))
- [AttachableImageFormat](/documentation/testing/attachableimageformat)

#### Initializers

- [init(contentType: UTType, encodingQuality: Float)](/documentation/testing/attachableimageformat/init(contenttype:encodingquality:))
- [init?(pathExtension: String, encodingQuality: Float)](/documentation/testing/attachableimageformat/init(pathextension:encodingquality:))

#### Instance Properties

- [var contentType: UTType](/documentation/testing/attachableimageformat/contenttype)
- [var encodingQuality: Float](/documentation/testing/attachableimageformat/encodingquality)

#### Type Properties

- [static var jpeg: AttachableImageFormat](/documentation/testing/attachableimageformat/jpeg)
- [static var png: AttachableImageFormat](/documentation/testing/attachableimageformat/png)

#### Type Methods

- [static func jpeg(withEncodingQuality: Float) -> AttachableImageFormat](/documentation/testing/attachableimageformat/jpeg(withencodingquality:))

#### Default Implementations

- [CustomDebugStringConvertible Implementations](/documentation/testing/attachableimageformat/customdebugstringconvertible-implementations)

##### Instance Properties

- [var debugDescription: String](/documentation/testing/attachableimageformat/debugdescription)
- [CustomStringConvertible Implementations](/documentation/testing/attachableimageformat/customstringconvertible-implementations)

##### Instance Properties

- [var description: String](/documentation/testing/attachableimageformat/description)
- [init<T>(T, named: String?, as: AttachableImageFormat?, sourceLocation: SourceLocation)](/documentation/testing/attachment/init(_:named:as:sourcelocation:))
- [static func record<T>(T, named: String?, as: AttachableImageFormat?, sourceLocation: SourceLocation)](/documentation/testing/attachment/record(_:named:as:sourcelocation:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
