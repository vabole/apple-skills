---
title: Combine
source: https://developer.apple.com/documentation/combine
timestamp: 2026-01-17T15:36:08.181Z
---

## Essentials

- [Receiving and Handling Events with Combine](/documentation/combine/receiving-and-handling-events-with-combine)

## Publishers

- [Publisher](/documentation/combine/publisher)

### Declaring supporting types

- [Output](/documentation/combine/publisher/output)
- [Failure](/documentation/combine/publisher/failure)

### Working with subscribers

- [func receive<S>(subscriber: S)](/documentation/combine/publisher/receive(subscriber:))
- [func subscribe<S>(S)](/documentation/combine/publisher/subscribe(_:)-4u8kn)
- [func subscribe<S>(S) -> AnyCancellable](/documentation/combine/publisher/subscribe(_:)-3fk20)

### Mapping elements

- [func map<T>((Self.Output) -> T) -> Publishers.Map<Self, T>](/documentation/combine/publisher/map(_:)-99evh)
- [func tryMap<T>((Self.Output) throws -> T) -> Publishers.TryMap<Self, T>](/documentation/combine/publisher/trymap(_:))
- [func mapError<E>((Self.Failure) -> E) -> Publishers.MapError<Self, E>](/documentation/combine/publisher/maperror(_:))
- [func replaceNil<T>(with: T) -> Publishers.Map<Self, T>](/documentation/combine/publisher/replacenil(with:))
- [func scan<T>(T, (T, Self.Output) -> T) -> Publishers.Scan<Self, T>](/documentation/combine/publisher/scan(_:_:))
- [func tryScan<T>(T, (T, Self.Output) throws -> T) -> Publishers.TryScan<Self, T>](/documentation/combine/publisher/tryscan(_:_:))
- [func setFailureType<E>(to: E.Type) -> Publishers.SetFailureType<Self, E>](/documentation/combine/publisher/setfailuretype(to:))

### Filtering elements

- [func filter((Self.Output) -> Bool) -> Publishers.Filter<Self>](/documentation/combine/publisher/filter(_:))
- [func tryFilter((Self.Output) throws -> Bool) -> Publishers.TryFilter<Self>](/documentation/combine/publisher/tryfilter(_:))
- [func compactMap<T>((Self.Output) -> T?) -> Publishers.CompactMap<Self, T>](/documentation/combine/publisher/compactmap(_:))
- [func tryCompactMap<T>((Self.Output) throws -> T?) -> Publishers.TryCompactMap<Self, T>](/documentation/combine/publisher/trycompactmap(_:))
- [func removeDuplicates() -> Publishers.RemoveDuplicates<Self>](/documentation/combine/publisher/removeduplicates())
- [func removeDuplicates(by: (Self.Output, Self.Output) -> Bool) -> Publishers.RemoveDuplicates<Self>](/documentation/combine/publisher/removeduplicates(by:))
- [func tryRemoveDuplicates(by: (Self.Output, Self.Output) throws -> Bool) -> Publishers.TryRemoveDuplicates<Self>](/documentation/combine/publisher/tryremoveduplicates(by:))
- [func replaceEmpty(with: Self.Output) -> Publishers.ReplaceEmpty<Self>](/documentation/combine/publisher/replaceempty(with:))
- [func replaceError(with: Self.Output) -> Publishers.ReplaceError<Self>](/documentation/combine/publisher/replaceerror(with:))

### Reducing elements

- [func collect() -> Publishers.Collect<Self>](/documentation/combine/publisher/collect())
- [func collect(Int) -> Publishers.CollectByCount<Self>](/documentation/combine/publisher/collect(_:))
- [func collect<S>(Publishers.TimeGroupingStrategy<S>, options: S.SchedulerOptions?) -> Publishers.CollectByTime<Self, S>](/documentation/combine/publisher/collect(_:options:))
- [Publishers.TimeGroupingStrategy](/documentation/combine/publishers/timegroupingstrategy)

#### Time groupings

- [case byTime(Context, Context.SchedulerTimeType.Stride)](/documentation/combine/publishers/timegroupingstrategy/bytime(_:_:))
- [case byTimeOrCount(Context, Context.SchedulerTimeType.Stride, Int)](/documentation/combine/publishers/timegroupingstrategy/bytimeorcount(_:_:_:))
- [func ignoreOutput() -> Publishers.IgnoreOutput<Self>](/documentation/combine/publisher/ignoreoutput())
- [func reduce<T>(T, (T, Self.Output) -> T) -> Publishers.Reduce<Self, T>](/documentation/combine/publisher/reduce(_:_:))
- [func tryReduce<T>(T, (T, Self.Output) throws -> T) -> Publishers.TryReduce<Self, T>](/documentation/combine/publisher/tryreduce(_:_:))

### Applying mathematical operations on elements

- [func count() -> Publishers.Count<Self>](/documentation/combine/publisher/count())
- [func max() -> Publishers.Comparison<Self>](/documentation/combine/publisher/max())
- [func max(by: (Self.Output, Self.Output) -> Bool) -> Publishers.Comparison<Self>](/documentation/combine/publisher/max(by:))
- [func tryMax(by: (Self.Output, Self.Output) throws -> Bool) -> Publishers.TryComparison<Self>](/documentation/combine/publisher/trymax(by:))
- [func min() -> Publishers.Comparison<Self>](/documentation/combine/publisher/min())
- [func min(by: (Self.Output, Self.Output) -> Bool) -> Publishers.Comparison<Self>](/documentation/combine/publisher/min(by:))
- [func tryMin(by: (Self.Output, Self.Output) throws -> Bool) -> Publishers.TryComparison<Self>](/documentation/combine/publisher/trymin(by:))

### Applying matching criteria to elements

- [func contains(Self.Output) -> Publishers.Contains<Self>](/documentation/combine/publisher/contains(_:))
- [func contains(where: (Self.Output) -> Bool) -> Publishers.ContainsWhere<Self>](/documentation/combine/publisher/contains(where:))
- [func tryContains(where: (Self.Output) throws -> Bool) -> Publishers.TryContainsWhere<Self>](/documentation/combine/publisher/trycontains(where:))
- [func allSatisfy((Self.Output) -> Bool) -> Publishers.AllSatisfy<Self>](/documentation/combine/publisher/allsatisfy(_:))
- [func tryAllSatisfy((Self.Output) throws -> Bool) -> Publishers.TryAllSatisfy<Self>](/documentation/combine/publisher/tryallsatisfy(_:))

### Applying sequence operations to elements

- [func drop<P>(untilOutputFrom: P) -> Publishers.DropUntilOutput<Self, P>](/documentation/combine/publisher/drop(untiloutputfrom:))
- [func dropFirst(Int) -> Publishers.Drop<Self>](/documentation/combine/publisher/dropfirst(_:))
- [func drop(while: (Self.Output) -> Bool) -> Publishers.DropWhile<Self>](/documentation/combine/publisher/drop(while:))
- [func tryDrop(while: (Self.Output) throws -> Bool) -> Publishers.TryDropWhile<Self>](/documentation/combine/publisher/trydrop(while:))
- [func append(Self.Output...) -> Publishers.Concatenate<Self, Publishers.Sequence<[Self.Output], Self.Failure>>](/documentation/combine/publisher/append(_:)-1qb8d)
- [func append<S>(S) -> Publishers.Concatenate<Self, Publishers.Sequence<S, Self.Failure>>](/documentation/combine/publisher/append(_:)-69sdn)
- [func append<P>(P) -> Publishers.Concatenate<Self, P>](/documentation/combine/publisher/append(_:)-5yh02)
- [func prepend(Self.Output...) -> Publishers.Concatenate<Publishers.Sequence<[Self.Output], Self.Failure>, Self>](/documentation/combine/publisher/prepend(_:)-7wk5l)
- [func prepend<S>(S) -> Publishers.Concatenate<Publishers.Sequence<S, Self.Failure>, Self>](/documentation/combine/publisher/prepend(_:)-v9sb)
- [func prepend<P>(P) -> Publishers.Concatenate<P, Self>](/documentation/combine/publisher/prepend(_:)-5dj9c)
- [func prefix(Int) -> Publishers.Output<Self>](/documentation/combine/publisher/prefix(_:))
- [func prefix(while: (Self.Output) -> Bool) -> Publishers.PrefixWhile<Self>](/documentation/combine/publisher/prefix(while:))
- [func tryPrefix(while: (Self.Output) throws -> Bool) -> Publishers.TryPrefixWhile<Self>](/documentation/combine/publisher/tryprefix(while:))
- [func prefix<P>(untilOutputFrom: P) -> Publishers.PrefixUntilOutput<Self, P>](/documentation/combine/publisher/prefix(untiloutputfrom:))

### Selecting specific elements

- [func first() -> Publishers.First<Self>](/documentation/combine/publisher/first())
- [func first(where: (Self.Output) -> Bool) -> Publishers.FirstWhere<Self>](/documentation/combine/publisher/first(where:))
- [func tryFirst(where: (Self.Output) throws -> Bool) -> Publishers.TryFirstWhere<Self>](/documentation/combine/publisher/tryfirst(where:))
- [func last() -> Publishers.Last<Self>](/documentation/combine/publisher/last())
- [func last(where: (Self.Output) -> Bool) -> Publishers.LastWhere<Self>](/documentation/combine/publisher/last(where:))
- [func tryLast(where: (Self.Output) throws -> Bool) -> Publishers.TryLastWhere<Self>](/documentation/combine/publisher/trylast(where:))
- [func output(at: Int) -> Publishers.Output<Self>](/documentation/combine/publisher/output(at:))
- [func output<R>(in: R) -> Publishers.Output<Self>](/documentation/combine/publisher/output(in:))

### Collecting and republishing the latest elements from multiple publishers

- [func combineLatest<P, T>(P, (Self.Output, P.Output) -> T) -> Publishers.Map<Publishers.CombineLatest<Self, P>, T>](/documentation/combine/publisher/combinelatest(_:_:)-1n30g)
- [func combineLatest<P>(P) -> Publishers.CombineLatest<Self, P>](/documentation/combine/publisher/combinelatest(_:))
- [func combineLatest<P, Q, T>(P, Q, (Self.Output, P.Output, Q.Output) -> T) -> Publishers.Map<Publishers.CombineLatest3<Self, P, Q>, T>](/documentation/combine/publisher/combinelatest(_:_:_:)-6ekpz)
- [func combineLatest<P, Q>(P, Q) -> Publishers.CombineLatest3<Self, P, Q>](/documentation/combine/publisher/combinelatest(_:_:)-5crqg)
- [func combineLatest<P, Q, R, T>(P, Q, R, (Self.Output, P.Output, Q.Output, R.Output) -> T) -> Publishers.Map<Publishers.CombineLatest4<Self, P, Q, R>, T>](/documentation/combine/publisher/combinelatest(_:_:_:_:))
- [func combineLatest<P, Q, R>(P, Q, R) -> Publishers.CombineLatest4<Self, P, Q, R>](/documentation/combine/publisher/combinelatest(_:_:_:)-48buc)

### Republishing elements from multiple publishers as an interleaved stream

- [func merge(with: Self) -> Publishers.MergeMany<Self>](/documentation/combine/publisher/merge(with:)-7fk3a)
- [func merge<P>(with: P) -> Publishers.Merge<Self, P>](/documentation/combine/publisher/merge(with:)-7qt71)
- [func merge<B, C>(with: B, C) -> Publishers.Merge3<Self, B, C>](/documentation/combine/publisher/merge(with:_:))
- [func merge<B, C, D>(with: B, C, D) -> Publishers.Merge4<Self, B, C, D>](/documentation/combine/publisher/merge(with:_:_:))
- [func merge<B, C, D, E>(with: B, C, D, E) -> Publishers.Merge5<Self, B, C, D, E>](/documentation/combine/publisher/merge(with:_:_:_:))
- [func merge<B, C, D, E, F>(with: B, C, D, E, F) -> Publishers.Merge6<Self, B, C, D, E, F>](/documentation/combine/publisher/merge(with:_:_:_:_:))
- [func merge<B, C, D, E, F, G>(with: B, C, D, E, F, G) -> Publishers.Merge7<Self, B, C, D, E, F, G>](/documentation/combine/publisher/merge(with:_:_:_:_:_:))
- [func merge<B, C, D, E, F, G, H>(with: B, C, D, E, F, G, H) -> Publishers.Merge8<Self, B, C, D, E, F, G, H>](/documentation/combine/publisher/merge(with:_:_:_:_:_:_:))

### Collecting and republishing the oldest unconsumed elements from multiple publishers

- [func zip<P>(P) -> Publishers.Zip<Self, P>](/documentation/combine/publisher/zip(_:))
- [func zip<P, T>(P, (Self.Output, P.Output) -> T) -> Publishers.Map<Publishers.Zip<Self, P>, T>](/documentation/combine/publisher/zip(_:_:)-4xn21)
- [func zip<P, Q>(P, Q) -> Publishers.Zip3<Self, P, Q>](/documentation/combine/publisher/zip(_:_:)-8d7k7)
- [func zip<P, Q, T>(P, Q, (Self.Output, P.Output, Q.Output) -> T) -> Publishers.Map<Publishers.Zip3<Self, P, Q>, T>](/documentation/combine/publisher/zip(_:_:_:)-9yqi1)
- [func zip<P, Q, R>(P, Q, R) -> Publishers.Zip4<Self, P, Q, R>](/documentation/combine/publisher/zip(_:_:_:)-16rcy)
- [func zip<P, Q, R, T>(P, Q, R, (Self.Output, P.Output, Q.Output, R.Output) -> T) -> Publishers.Map<Publishers.Zip4<Self, P, Q, R>, T>](/documentation/combine/publisher/zip(_:_:_:_:))

### Republishing elements by subscribing to new publishers

- [func flatMap<T, P>(maxPublishers: Subscribers.Demand, (Self.Output) -> P) -> Publishers.FlatMap<P, Self>](/documentation/combine/publisher/flatmap(maxpublishers:_:)-3k7z5)
- [func flatMap<P>(maxPublishers: Subscribers.Demand, (Self.Output) -> P) -> Publishers.FlatMap<P, Publishers.SetFailureType<Self, P.Failure>>](/documentation/combine/publisher/flatmap(maxpublishers:_:)-qxf)
- [func flatMap<P>(maxPublishers: Subscribers.Demand, (Self.Output) -> P) -> Publishers.FlatMap<P, Self>](/documentation/combine/publisher/flatmap(maxpublishers:_:)-hyb0)
- [func flatMap<P>(maxPublishers: Subscribers.Demand, (Self.Output) -> P) -> Publishers.FlatMap<Publishers.SetFailureType<P, Self.Failure>, Self>](/documentation/combine/publisher/flatmap(maxpublishers:_:)-4of8w)
- [func switchToLatest() -> Publishers.SwitchToLatest<Self.Output, Self>](/documentation/combine/publisher/switchtolatest()-453ht)
- [func switchToLatest() -> Publishers.SwitchToLatest<Self.Output, Publishers.SetFailureType<Self, Self.Output.Failure>>](/documentation/combine/publisher/switchtolatest()-1c51y)
- [func switchToLatest() -> Publishers.SwitchToLatest<Publishers.SetFailureType<Self.Output, Self.Failure>, Publishers.Map<Self, Publishers.SetFailureType<Self.Output, Self.Failure>>>](/documentation/combine/publisher/switchtolatest()-20v3t)
- [func switchToLatest() -> Publishers.SwitchToLatest<Self.Output, Self>](/documentation/combine/publisher/switchtolatest()-9eb3r)

### Handling errors

- [func assertNoFailure(String, file: StaticString, line: UInt) -> Publishers.AssertNoFailure<Self>](/documentation/combine/publisher/assertnofailure(_:file:line:))
- [func `catch`<P>((Self.Failure) -> P) -> Publishers.Catch<Self, P>](/documentation/combine/publisher/catch(_:))
- [func tryCatch<P>((Self.Failure) throws -> P) -> Publishers.TryCatch<Self, P>](/documentation/combine/publisher/trycatch(_:))
- [func retry(Int) -> Publishers.Retry<Self>](/documentation/combine/publisher/retry(_:))

### Controlling timing

- [func measureInterval<S>(using: S, options: S.SchedulerOptions?) -> Publishers.MeasureInterval<Self, S>](/documentation/combine/publisher/measureinterval(using:options:))
- [func debounce<S>(for: S.SchedulerTimeType.Stride, scheduler: S, options: S.SchedulerOptions?) -> Publishers.Debounce<Self, S>](/documentation/combine/publisher/debounce(for:scheduler:options:))
- [func delay<S>(for: S.SchedulerTimeType.Stride, tolerance: S.SchedulerTimeType.Stride?, scheduler: S, options: S.SchedulerOptions?) -> Publishers.Delay<Self, S>](/documentation/combine/publisher/delay(for:tolerance:scheduler:options:))
- [func throttle<S>(for: S.SchedulerTimeType.Stride, scheduler: S, latest: Bool) -> Publishers.Throttle<Self, S>](/documentation/combine/publisher/throttle(for:scheduler:latest:))
- [func timeout<S>(S.SchedulerTimeType.Stride, scheduler: S, options: S.SchedulerOptions?, customError: (() -> Self.Failure)?) -> Publishers.Timeout<Self, S>](/documentation/combine/publisher/timeout(_:scheduler:options:customerror:))

### Encoding and decoding

- [func encode<Coder>(encoder: Coder) -> Publishers.Encode<Self, Coder>](/documentation/combine/publisher/encode(encoder:))
- [func decode<Item, Coder>(type: Item.Type, decoder: Coder) -> Publishers.Decode<Self, Item, Coder>](/documentation/combine/publisher/decode(type:decoder:))

### Identifying properties with key paths

- [func map<T>(KeyPath<Self.Output, T>) -> Publishers.MapKeyPath<Self, T>](/documentation/combine/publisher/map(_:)-6sm0a)
- [func map<T0, T1>(KeyPath<Self.Output, T0>, KeyPath<Self.Output, T1>) -> Publishers.MapKeyPath2<Self, T0, T1>](/documentation/combine/publisher/map(_:_:))
- [func map<T0, T1, T2>(KeyPath<Self.Output, T0>, KeyPath<Self.Output, T1>, KeyPath<Self.Output, T2>) -> Publishers.MapKeyPath3<Self, T0, T1, T2>](/documentation/combine/publisher/map(_:_:_:))

### Working with multiple subscribers

- [func multicast<S>(() -> S) -> Publishers.Multicast<Self, S>](/documentation/combine/publisher/multicast(_:))
- [func multicast<S>(subject: S) -> Publishers.Multicast<Self, S>](/documentation/combine/publisher/multicast(subject:))
- [func share() -> Publishers.Share<Self>](/documentation/combine/publisher/share())

### Buffering elements

- [func buffer(size: Int, prefetch: Publishers.PrefetchStrategy, whenFull: Publishers.BufferingStrategy<Self.Failure>) -> Publishers.Buffer<Self>](/documentation/combine/publisher/buffer(size:prefetch:whenfull:))
- [Publishers.PrefetchStrategy](/documentation/combine/publishers/prefetchstrategy)

#### Prefetching strategies

- [case byRequest](/documentation/combine/publishers/prefetchstrategy/byrequest)
- [case keepFull](/documentation/combine/publishers/prefetchstrategy/keepfull)
- [Publishers.BufferingStrategy](/documentation/combine/publishers/bufferingstrategy)

#### Buffering strategies

- [case dropNewest](/documentation/combine/publishers/bufferingstrategy/dropnewest)
- [case dropOldest](/documentation/combine/publishers/bufferingstrategy/dropoldest)
- [case customError(() -> Failure)](/documentation/combine/publishers/bufferingstrategy/customerror(_:))

### Performing type erasure

- [func eraseToAnyPublisher() -> AnyPublisher<Self.Output, Self.Failure>](/documentation/combine/publisher/erasetoanypublisher())

### Specifying schedulers

- [func subscribe<S>(on: S, options: S.SchedulerOptions?) -> Publishers.SubscribeOn<Self, S>](/documentation/combine/publisher/subscribe(on:options:))
- [func receive<S>(on: S, options: S.SchedulerOptions?) -> Publishers.ReceiveOn<Self, S>](/documentation/combine/publisher/receive(on:options:))

### Adding explicit connectability

- [func makeConnectable() -> Publishers.MakeConnectable<Self>](/documentation/combine/publisher/makeconnectable())

### Connecting simple subscribers

- [func assign<Root>(to: ReferenceWritableKeyPath<Root, Self.Output>, on: Root) -> AnyCancellable](/documentation/combine/publisher/assign(to:on:))
- [func assign(to: inout Published<Self.Output>.Publisher)](/documentation/combine/publisher/assign(to:))
- [func sink(receiveCompletion: (Subscribers.Completion<Self.Failure>) -> Void, receiveValue: (Self.Output) -> Void) -> AnyCancellable](/documentation/combine/publisher/sink(receivecompletion:receivevalue:))
- [func sink(receiveValue: (Self.Output) -> Void) -> AnyCancellable](/documentation/combine/publisher/sink(receivevalue:))

### Accessing elements asynchronously

- [var values: AsyncPublisher<Self>](/documentation/combine/publisher/values-1dm9r)
- [var values: AsyncThrowingPublisher<Self>](/documentation/combine/publisher/values-v7nz)

### Debugging

- [func breakpoint(receiveSubscription: ((any Subscription) -> Bool)?, receiveOutput: ((Self.Output) -> Bool)?, receiveCompletion: ((Subscribers.Completion<Self.Failure>) -> Bool)?) -> Publishers.Breakpoint<Self>](/documentation/combine/publisher/breakpoint(receivesubscription:receiveoutput:receivecompletion:))
- [func breakpointOnError() -> Publishers.Breakpoint<Self>](/documentation/combine/publisher/breakpointonerror())
- [func handleEvents(receiveSubscription: ((any Subscription) -> Void)?, receiveOutput: ((Self.Output) -> Void)?, receiveCompletion: ((Subscribers.Completion<Self.Failure>) -> Void)?, receiveCancel: (() -> Void)?, receiveRequest: ((Subscribers.Demand) -> Void)?) -> Publishers.HandleEvents<Self>](/documentation/combine/publisher/handleevents(receivesubscription:receiveoutput:receivecompletion:receivecancel:receiverequest:))
- [func print(String, to: (any TextOutputStream)?) -> Publishers.Print<Self>](/documentation/combine/publisher/print(_:to:))
- [Publishers](/documentation/combine/publishers)

### Convenience publishers

- [Publishers.Sequence](/documentation/combine/publishers/sequence)

#### Creating a sequence publisher

- [init(sequence: Elements)](/documentation/combine/publishers/sequence/init(sequence:))

#### Declaring supporting types

- [Publishers.Output](/documentation/combine/publishers/output)

##### Creating an output publisher

- [init(upstream: Upstream, range: CountableRange<Int>)](/documentation/combine/publishers/output/init(upstream:range:))

##### Declaring supporting types

- [Publishers.Output.Output](/documentation/combine/publishers/output/output)
- [Publishers.Output.Failure](/documentation/combine/publishers/output/failure)

##### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/output/upstream)
- [let range: CountableRange<Int>](/documentation/combine/publishers/output/range)

##### Comparing publishers

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

##### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/output/equatable-implementations)

###### Operators

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

#### Inspecting publisher properties

- [let sequence: Elements](/documentation/combine/publishers/sequence/sequence)

#### Comparing publishers

- [static func == (Publishers.Sequence<Elements, Failure>, Publishers.Sequence<Elements, Failure>) -> Bool](/documentation/combine/publishers/sequence/==(_:_:))

#### Applying Operators

- [Publisher Operators](/documentation/combine/publishers-sequence-publisher-operators)

##### Mapping elements

- [func map<T>((Elements.Element) -> T) -> Publishers.Sequence<[T], Failure>](/documentation/combine/publishers/sequence/map(_:))
- [func scan<T>(T, (T, Publishers.Sequence<Elements, Failure>.Output) -> T) -> Publishers.Sequence<[T], Failure>](/documentation/combine/publishers/sequence/scan(_:_:))
- [func setFailureType<E>(to: E.Type) -> Publishers.Sequence<Elements, E>](/documentation/combine/publishers/sequence/setfailuretype(to:))
- [func replaceNil<T>(with: T) -> Publishers.Sequence<[Publishers.Sequence<Elements, Failure>.Output], Failure>](/documentation/combine/publishers/sequence/replacenil(with:))

##### Filtering elements

- [func filter((Publishers.Sequence<Elements, Failure>.Output) -> Bool) -> Publishers.Sequence<[Publishers.Sequence<Elements, Failure>.Output], Failure>](/documentation/combine/publishers/sequence/filter(_:))
- [func compactMap<T>((Publishers.Sequence<Elements, Failure>.Output) -> T?) -> Publishers.Sequence<[T], Failure>](/documentation/combine/publishers/sequence/compactmap(_:))
- [func removeDuplicates() -> Publishers.Sequence<[Publishers.Sequence<Elements, Failure>.Output], Failure>](/documentation/combine/publishers/sequence/removeduplicates())

##### Reducing elements

- [func collect() -> Result<[Publishers.Sequence<Elements, Failure>.Output], Failure>.Publisher](/documentation/combine/publishers/sequence/collect())
- [func ignoreOutput() -> Empty<Publishers.Sequence<Elements, Failure>.Output, Failure>](/documentation/combine/publishers/sequence/ignoreoutput())
- [func reduce<T>(T, (T, Publishers.Sequence<Elements, Failure>.Output) -> T) -> Result<T, Failure>.Publisher](/documentation/combine/publishers/sequence/reduce(_:_:))
- [func tryReduce<T>(T, (T, Publishers.Sequence<Elements, Failure>.Output) throws -> T) -> Result<T, any Error>.Publisher](/documentation/combine/publishers/sequence/tryreduce(_:_:))

##### Applying mathematical operations on elements

- [func count() -> Just<Int>](/documentation/combine/publishers/sequence/count()-5rrw2)
- [func count() -> Result<Int, Failure>.Publisher](/documentation/combine/publishers/sequence/count()-5hb52)
- [func count() -> Result<Int, Failure>.Publisher](/documentation/combine/publishers/sequence/count()-b8ct)
- [func max() -> Optional<Publishers.Sequence<Elements, Failure>.Output>.Publisher](/documentation/combine/publishers/sequence/max())
- [func max(by: (Publishers.Sequence<Elements, Failure>.Output, Publishers.Sequence<Elements, Failure>.Output) -> Bool) -> Optional<Publishers.Sequence<Elements, Failure>.Output>.Publisher](/documentation/combine/publishers/sequence/max(by:))
- [func min() -> Optional<Publishers.Sequence<Elements, Failure>.Output>.Publisher](/documentation/combine/publishers/sequence/min())
- [func min(by: (Publishers.Sequence<Elements, Failure>.Output, Publishers.Sequence<Elements, Failure>.Output) -> Bool) -> Optional<Publishers.Sequence<Elements, Failure>.Output>.Publisher](/documentation/combine/publishers/sequence/min(by:))

##### Applying matching criteria to elements

- [func contains(Elements.Element) -> Result<Bool, Failure>.Publisher](/documentation/combine/publishers/sequence/contains(_:))
- [func contains(where: (Publishers.Sequence<Elements, Failure>.Output) -> Bool) -> Result<Bool, Failure>.Publisher](/documentation/combine/publishers/sequence/contains(where:))
- [func tryContains(where: (Publishers.Sequence<Elements, Failure>.Output) throws -> Bool) -> Result<Bool, any Error>.Publisher](/documentation/combine/publishers/sequence/trycontains(where:))
- [func allSatisfy((Publishers.Sequence<Elements, Failure>.Output) -> Bool) -> Result<Bool, Failure>.Publisher](/documentation/combine/publishers/sequence/allsatisfy(_:))
- [func tryAllSatisfy((Publishers.Sequence<Elements, Failure>.Output) throws -> Bool) -> Result<Bool, any Error>.Publisher](/documentation/combine/publishers/sequence/tryallsatisfy(_:))

##### Applying sequence operations to elements

- [func dropFirst(Int) -> Publishers.Sequence<DropFirstSequence<Elements>, Failure>](/documentation/combine/publishers/sequence/dropfirst(_:))
- [func drop(while: (Elements.Element) -> Bool) -> Publishers.Sequence<DropWhileSequence<Elements>, Failure>](/documentation/combine/publishers/sequence/drop(while:))
- [func append<S>(S) -> Publishers.Sequence<Elements, Failure>](/documentation/combine/publishers/sequence/append(_:)-45rm8)
- [func append(Publishers.Sequence<Elements, Failure>) -> Publishers.Sequence<Elements, Failure>](/documentation/combine/publishers/sequence/append(_:)-3dj6k)
- [func append(Publishers.Sequence<Elements, Failure>.Output...) -> Publishers.Sequence<Elements, Failure>](/documentation/combine/publishers/sequence/append(_:)-2knh4)
- [func prepend<S>(S) -> Publishers.Sequence<Elements, Failure>](/documentation/combine/publishers/sequence/prepend(_:)-1r564)
- [func prepend(Publishers.Sequence<Elements, Failure>) -> Publishers.Sequence<Elements, Failure>](/documentation/combine/publishers/sequence/prepend(_:)-71f7p)
- [func prepend(Publishers.Sequence<Elements, Failure>.Output...) -> Publishers.Sequence<Elements, Failure>](/documentation/combine/publishers/sequence/prepend(_:)-2ros1)
- [func prefix(Int) -> Publishers.Sequence<PrefixSequence<Elements>, Failure>](/documentation/combine/publishers/sequence/prefix(_:))
- [func prefix(while: (Elements.Element) -> Bool) -> Publishers.Sequence<[Elements.Element], Failure>](/documentation/combine/publishers/sequence/prefix(while:))

##### Selecting specific elements

- [func first() -> Optional<Publishers.Sequence<Elements, Failure>.Output>.Publisher](/documentation/combine/publishers/sequence/first())
- [func first(where: (Publishers.Sequence<Elements, Failure>.Output) -> Bool) -> Optional<Publishers.Sequence<Elements, Failure>.Output>.Publisher](/documentation/combine/publishers/sequence/first(where:))
- [func last() -> Optional<Publishers.Sequence<Elements, Failure>.Output>.Publisher](/documentation/combine/publishers/sequence/last())
- [func last(where: (Publishers.Sequence<Elements, Failure>.Output) -> Bool) -> Optional<Publishers.Sequence<Elements, Failure>.Output>.Publisher](/documentation/combine/publishers/sequence/last(where:))
- [func output(at: Elements.Index) -> Optional<Publishers.Sequence<Elements, Failure>.Output>.Publisher](/documentation/combine/publishers/sequence/output(at:)-3r7zo)
- [func output(at: Elements.Index) -> Optional<Publishers.Sequence<Elements, Failure>.Output>.Publisher](/documentation/combine/publishers/sequence/output(at:)-9kto7)
- [func output(in: Range<Elements.Index>) -> Publishers.Sequence<[Publishers.Sequence<Elements, Failure>.Output], Failure>](/documentation/combine/publishers/sequence/output(in:)-6g2zc)
- [func output(in: Range<Elements.Index>) -> Publishers.Sequence<[Publishers.Sequence<Elements, Failure>.Output], Failure>](/documentation/combine/publishers/sequence/output(in:)-8l6yw)

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/sequence/equatable-implementations)

##### Operators

- [static func == (Publishers.Sequence<Elements, Failure>, Publishers.Sequence<Elements, Failure>) -> Bool](/documentation/combine/publishers/sequence/==(_:_:))
- [Publishers.Catch](/documentation/combine/publishers/catch)

#### Creating a catch publisher

- [init(upstream: Upstream, handler: (Upstream.Failure) -> NewPublisher)](/documentation/combine/publishers/catch/init(upstream:handler:))

#### Declaring supporting types

- [Publishers.Catch.Output](/documentation/combine/publishers/catch/output)
- [Publishers.Catch.Failure](/documentation/combine/publishers/catch/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/catch/upstream)
- [let handler: (Upstream.Failure) -> NewPublisher](/documentation/combine/publishers/catch/handler)

### Working with subscribers

- [Publishers.ReceiveOn](/documentation/combine/publishers/receiveon)

#### Creating a receive-on Publisher

- [init(upstream: Upstream, scheduler: Context, options: Context.SchedulerOptions?)](/documentation/combine/publishers/receiveon/init(upstream:scheduler:options:))

#### Declaring supporting types

- [Publishers.ReceiveOn.Output](/documentation/combine/publishers/receiveon/output)
- [Publishers.ReceiveOn.Failure](/documentation/combine/publishers/receiveon/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/receiveon/upstream)
- [let scheduler: Context](/documentation/combine/publishers/receiveon/scheduler)
- [let options: Context.SchedulerOptions?](/documentation/combine/publishers/receiveon/options)
- [Publishers.SubscribeOn](/documentation/combine/publishers/subscribeon)

#### Creating a subscribe-on publisher

- [init(upstream: Upstream, scheduler: Context, options: Context.SchedulerOptions?)](/documentation/combine/publishers/subscribeon/init(upstream:scheduler:options:))

#### Declaring supporting types

- [Publishers.SubscribeOn.Output](/documentation/combine/publishers/subscribeon/output)
- [Publishers.SubscribeOn.Failure](/documentation/combine/publishers/subscribeon/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/subscribeon/upstream)
- [let scheduler: Context](/documentation/combine/publishers/subscribeon/scheduler)
- [let options: Context.SchedulerOptions?](/documentation/combine/publishers/subscribeon/options)

### Mapping elements

- [Publishers.Map](/documentation/combine/publishers/map)

#### Creating a map publisher

- [init(upstream: Upstream, transform: (Upstream.Output) -> Output)](/documentation/combine/publishers/map/init(upstream:transform:))

#### Mapping elements

- [func map<T>((Output) -> T) -> Publishers.Map<Upstream, T>](/documentation/combine/publishers/map/map(_:))
- [func tryMap<T>((Output) throws -> T) -> Publishers.TryMap<Upstream, T>](/documentation/combine/publishers/map/trymap(_:))

#### Declaring supporting types

- [Publishers.Output](/documentation/combine/publishers/output)

##### Creating an output publisher

- [init(upstream: Upstream, range: CountableRange<Int>)](/documentation/combine/publishers/output/init(upstream:range:))

##### Declaring supporting types

- [Publishers.Output.Output](/documentation/combine/publishers/output/output)
- [Publishers.Output.Failure](/documentation/combine/publishers/output/failure)

##### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/output/upstream)
- [let range: CountableRange<Int>](/documentation/combine/publishers/output/range)

##### Comparing publishers

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

##### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/output/equatable-implementations)

###### Operators

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))
- [Publishers.Map.Failure](/documentation/combine/publishers/map/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/map/upstream)
- [let transform: (Upstream.Output) -> Output](/documentation/combine/publishers/map/transform)
- [Publishers.TryMap](/documentation/combine/publishers/trymap)

#### Creating a try-map publisher

- [init(upstream: Upstream, transform: (Upstream.Output) throws -> Output)](/documentation/combine/publishers/trymap/init(upstream:transform:))

#### Declaring supporting types

- [Publishers.Output](/documentation/combine/publishers/output)

##### Creating an output publisher

- [init(upstream: Upstream, range: CountableRange<Int>)](/documentation/combine/publishers/output/init(upstream:range:))

##### Declaring supporting types

- [Publishers.Output.Output](/documentation/combine/publishers/output/output)
- [Publishers.Output.Failure](/documentation/combine/publishers/output/failure)

##### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/output/upstream)
- [let range: CountableRange<Int>](/documentation/combine/publishers/output/range)

##### Comparing publishers

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

##### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/output/equatable-implementations)

###### Operators

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))
- [Publishers.TryMap.Failure](/documentation/combine/publishers/trymap/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/trymap/upstream)
- [let transform: (Upstream.Output) throws -> Output](/documentation/combine/publishers/trymap/transform)

#### Instance Methods

- [func map<T>((Output) -> T) -> Publishers.TryMap<Upstream, T>](/documentation/combine/publishers/trymap/map(_:))
- [func tryMap<T>((Output) throws -> T) -> Publishers.TryMap<Upstream, T>](/documentation/combine/publishers/trymap/trymap(_:))
- [Publishers.MapError](/documentation/combine/publishers/maperror)

#### Creating an error-mapping publisher

- [init(upstream: Upstream, (Upstream.Failure) -> Failure)](/documentation/combine/publishers/maperror/init(upstream:_:))
- [init(upstream: Upstream, transform: (Upstream.Failure) -> Failure)](/documentation/combine/publishers/maperror/init(upstream:transform:))

#### Declaring supporting types

- [Publishers.MapError.Output](/documentation/combine/publishers/maperror/output)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/maperror/upstream)
- [let transform: (Upstream.Failure) -> Failure](/documentation/combine/publishers/maperror/transform)
- [Publishers.Scan](/documentation/combine/publishers/scan)

#### Creating a scan publisher

- [init(upstream: Upstream, initialResult: Output, nextPartialResult: (Output, Upstream.Output) -> Output)](/documentation/combine/publishers/scan/init(upstream:initialresult:nextpartialresult:))

#### Declaring supporting types

- [Publishers.Output](/documentation/combine/publishers/output)

##### Creating an output publisher

- [init(upstream: Upstream, range: CountableRange<Int>)](/documentation/combine/publishers/output/init(upstream:range:))

##### Declaring supporting types

- [Publishers.Output.Output](/documentation/combine/publishers/output/output)
- [Publishers.Output.Failure](/documentation/combine/publishers/output/failure)

##### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/output/upstream)
- [let range: CountableRange<Int>](/documentation/combine/publishers/output/range)

##### Comparing publishers

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

##### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/output/equatable-implementations)

###### Operators

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))
- [Publishers.Scan.Failure](/documentation/combine/publishers/scan/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/scan/upstream)
- [let initialResult: Output](/documentation/combine/publishers/scan/initialresult)
- [let nextPartialResult: (Output, Upstream.Output) -> Output](/documentation/combine/publishers/scan/nextpartialresult)
- [Publishers.TryScan](/documentation/combine/publishers/tryscan)

#### Creating a try-scan publisher

- [init(upstream: Upstream, initialResult: Output, nextPartialResult: (Output, Upstream.Output) throws -> Output)](/documentation/combine/publishers/tryscan/init(upstream:initialresult:nextpartialresult:))

#### Declaring supporting types

- [Publishers.Output](/documentation/combine/publishers/output)

##### Creating an output publisher

- [init(upstream: Upstream, range: CountableRange<Int>)](/documentation/combine/publishers/output/init(upstream:range:))

##### Declaring supporting types

- [Publishers.Output.Output](/documentation/combine/publishers/output/output)
- [Publishers.Output.Failure](/documentation/combine/publishers/output/failure)

##### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/output/upstream)
- [let range: CountableRange<Int>](/documentation/combine/publishers/output/range)

##### Comparing publishers

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

##### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/output/equatable-implementations)

###### Operators

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))
- [Publishers.TryScan.Failure](/documentation/combine/publishers/tryscan/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/tryscan/upstream)
- [let initialResult: Output](/documentation/combine/publishers/tryscan/initialresult)
- [let nextPartialResult: (Output, Upstream.Output) throws -> Output](/documentation/combine/publishers/tryscan/nextpartialresult)
- [Publishers.SetFailureType](/documentation/combine/publishers/setfailuretype)

#### Creating a set failure type publisher

- [init(upstream: Upstream)](/documentation/combine/publishers/setfailuretype/init(upstream:))

#### Setting failure type

- [func setFailureType<E>(to: E.Type) -> Publishers.SetFailureType<Upstream, E>](/documentation/combine/publishers/setfailuretype/setfailuretype(to:))

#### Declaring supporting types

- [Publishers.SetFailureType.Output](/documentation/combine/publishers/setfailuretype/output)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/setfailuretype/upstream)

#### Comparing publishers

- [static func == (Publishers.SetFailureType<Upstream, Failure>, Publishers.SetFailureType<Upstream, Failure>) -> Bool](/documentation/combine/publishers/setfailuretype/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/setfailuretype/equatable-implementations)

##### Operators

- [static func == (Publishers.SetFailureType<Upstream, Failure>, Publishers.SetFailureType<Upstream, Failure>) -> Bool](/documentation/combine/publishers/setfailuretype/==(_:_:))

### Filtering elements

- [Publishers.Filter](/documentation/combine/publishers/filter)

#### Creating a filter publisher

- [init(upstream: Upstream, isIncluded: (Upstream.Output) -> Bool)](/documentation/combine/publishers/filter/init(upstream:isincluded:))

#### Filtering elements

- [func filter((Publishers.Filter<Upstream>.Output) -> Bool) -> Publishers.Filter<Upstream>](/documentation/combine/publishers/filter/filter(_:))
- [func tryFilter((Publishers.Filter<Upstream>.Output) throws -> Bool) -> Publishers.TryFilter<Upstream>](/documentation/combine/publishers/filter/tryfilter(_:))

#### Declaring supporting types

- [Publishers.Filter.Output](/documentation/combine/publishers/filter/output)
- [Publishers.Filter.Failure](/documentation/combine/publishers/filter/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/filter/upstream)
- [let isIncluded: (Upstream.Output) -> Bool](/documentation/combine/publishers/filter/isincluded)
- [Publishers.TryFilter](/documentation/combine/publishers/tryfilter)

#### Creating a try-filter publisher

- [init(upstream: Upstream, isIncluded: (Upstream.Output) throws -> Bool)](/documentation/combine/publishers/tryfilter/init(upstream:isincluded:))

#### Filtering elements

- [func filter((Publishers.TryFilter<Upstream>.Output) -> Bool) -> Publishers.TryFilter<Upstream>](/documentation/combine/publishers/tryfilter/filter(_:))
- [func tryFilter((Publishers.TryFilter<Upstream>.Output) throws -> Bool) -> Publishers.TryFilter<Upstream>](/documentation/combine/publishers/tryfilter/tryfilter(_:))

#### Declaring supporting types

- [Publishers.TryFilter.Output](/documentation/combine/publishers/tryfilter/output)
- [Publishers.TryFilter.Failure](/documentation/combine/publishers/tryfilter/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/tryfilter/upstream)
- [let isIncluded: (Upstream.Output) throws -> Bool](/documentation/combine/publishers/tryfilter/isincluded)
- [Publishers.CompactMap](/documentation/combine/publishers/compactmap)

#### Creating a compact map publisher

- [init(upstream: Upstream, transform: (Upstream.Output) -> Output?)](/documentation/combine/publishers/compactmap/init(upstream:transform:))

#### Declaring supporting types

- [Publishers.Output](/documentation/combine/publishers/output)

##### Creating an output publisher

- [init(upstream: Upstream, range: CountableRange<Int>)](/documentation/combine/publishers/output/init(upstream:range:))

##### Declaring supporting types

- [Publishers.Output.Output](/documentation/combine/publishers/output/output)
- [Publishers.Output.Failure](/documentation/combine/publishers/output/failure)

##### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/output/upstream)
- [let range: CountableRange<Int>](/documentation/combine/publishers/output/range)

##### Comparing publishers

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

##### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/output/equatable-implementations)

###### Operators

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))
- [Publishers.CompactMap.Failure](/documentation/combine/publishers/compactmap/failure)

#### Mapping elements

- [func map<T>((Output) -> T) -> Publishers.CompactMap<Upstream, T>](/documentation/combine/publishers/compactmap/map(_:))
- [func compactMap<T>((Output) -> T?) -> Publishers.CompactMap<Upstream, T>](/documentation/combine/publishers/compactmap/compactmap(_:))

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/compactmap/upstream)
- [let transform: (Upstream.Output) -> Output?](/documentation/combine/publishers/compactmap/transform)
- [Publishers.TryCompactMap](/documentation/combine/publishers/trycompactmap)

#### Creating a try-compact-map Publisher

- [init(upstream: Upstream, transform: (Upstream.Output) throws -> Output?)](/documentation/combine/publishers/trycompactmap/init(upstream:transform:))

#### Mapping elements

- [func compactMap<T>((Output) throws -> T?) -> Publishers.TryCompactMap<Upstream, T>](/documentation/combine/publishers/trycompactmap/compactmap(_:))

#### Declaring supporting types

- [Publishers.Output](/documentation/combine/publishers/output)

##### Creating an output publisher

- [init(upstream: Upstream, range: CountableRange<Int>)](/documentation/combine/publishers/output/init(upstream:range:))

##### Declaring supporting types

- [Publishers.Output.Output](/documentation/combine/publishers/output/output)
- [Publishers.Output.Failure](/documentation/combine/publishers/output/failure)

##### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/output/upstream)
- [let range: CountableRange<Int>](/documentation/combine/publishers/output/range)

##### Comparing publishers

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

##### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/output/equatable-implementations)

###### Operators

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))
- [Publishers.TryCompactMap.Failure](/documentation/combine/publishers/trycompactmap/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/trycompactmap/upstream)
- [let transform: (Upstream.Output) throws -> Output?](/documentation/combine/publishers/trycompactmap/transform)
- [Publishers.RemoveDuplicates](/documentation/combine/publishers/removeduplicates)

#### Creating a remove duplicates publisher

- [init(upstream: Upstream, predicate: (Publishers.RemoveDuplicates<Upstream>.Output, Publishers.RemoveDuplicates<Upstream>.Output) -> Bool)](/documentation/combine/publishers/removeduplicates/init(upstream:predicate:))

#### Declaring supporting types

- [Publishers.RemoveDuplicates.Output](/documentation/combine/publishers/removeduplicates/output)
- [Publishers.RemoveDuplicates.Failure](/documentation/combine/publishers/removeduplicates/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/removeduplicates/upstream)
- [let predicate: (Publishers.RemoveDuplicates<Upstream>.Output, Publishers.RemoveDuplicates<Upstream>.Output) -> Bool](/documentation/combine/publishers/removeduplicates/predicate)
- [Publishers.TryRemoveDuplicates](/documentation/combine/publishers/tryremoveduplicates)

#### Creating a try-remove-duplicates publisher

- [init(upstream: Upstream, predicate: (Publishers.TryRemoveDuplicates<Upstream>.Output, Publishers.TryRemoveDuplicates<Upstream>.Output) throws -> Bool)](/documentation/combine/publishers/tryremoveduplicates/init(upstream:predicate:))

#### Declaring supporting types

- [Publishers.Output](/documentation/combine/publishers/output)

##### Creating an output publisher

- [init(upstream: Upstream, range: CountableRange<Int>)](/documentation/combine/publishers/output/init(upstream:range:))

##### Declaring supporting types

- [Publishers.Output.Output](/documentation/combine/publishers/output/output)
- [Publishers.Output.Failure](/documentation/combine/publishers/output/failure)

##### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/output/upstream)
- [let range: CountableRange<Int>](/documentation/combine/publishers/output/range)

##### Comparing publishers

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

##### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/output/equatable-implementations)

###### Operators

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/tryremoveduplicates/upstream)
- [let predicate: (Publishers.TryRemoveDuplicates<Upstream>.Output, Publishers.TryRemoveDuplicates<Upstream>.Output) throws -> Bool](/documentation/combine/publishers/tryremoveduplicates/predicate)
- [Publishers.ReplaceEmpty](/documentation/combine/publishers/replaceempty)

#### Creating a replace empty publisher

- [init(upstream: Upstream, output: Publishers.ReplaceEmpty<Upstream>.Output)](/documentation/combine/publishers/replaceempty/init(upstream:output:))

#### Declaring supporting types

- [Publishers.ReplaceEmpty.Output](/documentation/combine/publishers/replaceempty/output-swift.typealias)
- [Publishers.ReplaceEmpty.Output](/documentation/combine/publishers/replaceempty/output-swift.typealias)
- [Publishers.ReplaceEmpty.Failure](/documentation/combine/publishers/replaceempty/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/replaceempty/upstream)
- [let output: Publishers.ReplaceEmpty<Upstream>.Output](/documentation/combine/publishers/replaceempty/output-swift.property)
- [let output: Publishers.ReplaceEmpty<Upstream>.Output](/documentation/combine/publishers/replaceempty/output-swift.property)

#### Comparing publishers

- [static func == (Publishers.ReplaceEmpty<Upstream>, Publishers.ReplaceEmpty<Upstream>) -> Bool](/documentation/combine/publishers/replaceempty/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/replaceempty/equatable-implementations)

##### Operators

- [static func == (Publishers.ReplaceEmpty<Upstream>, Publishers.ReplaceEmpty<Upstream>) -> Bool](/documentation/combine/publishers/replaceempty/==(_:_:))
- [Publishers.ReplaceError](/documentation/combine/publishers/replaceerror)

#### Creating a replace error Publisher

- [init(upstream: Upstream, output: Publishers.ReplaceError<Upstream>.Output)](/documentation/combine/publishers/replaceerror/init(upstream:output:))

#### Declaring supporting types

- [Publishers.ReplaceError.Output](/documentation/combine/publishers/replaceerror/output-swift.typealias)
- [Publishers.ReplaceError.Output](/documentation/combine/publishers/replaceerror/output-swift.typealias)
- [Publishers.ReplaceError.Failure](/documentation/combine/publishers/replaceerror/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/replaceerror/upstream)
- [let output: Publishers.ReplaceError<Upstream>.Output](/documentation/combine/publishers/replaceerror/output-swift.property)
- [let output: Publishers.ReplaceError<Upstream>.Output](/documentation/combine/publishers/replaceerror/output-swift.property)

#### Comparing publishers

- [static func == (Publishers.ReplaceError<Upstream>, Publishers.ReplaceError<Upstream>) -> Bool](/documentation/combine/publishers/replaceerror/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/replaceerror/equatable-implementations)

##### Operators

- [static func == (Publishers.ReplaceError<Upstream>, Publishers.ReplaceError<Upstream>) -> Bool](/documentation/combine/publishers/replaceerror/==(_:_:))

### Reducing elements

- [Publishers.Collect](/documentation/combine/publishers/collect)

#### Creating a collect publisher

- [init(upstream: Upstream)](/documentation/combine/publishers/collect/init(upstream:))

#### Declaring supporting types

- [Publishers.Collect.Output](/documentation/combine/publishers/collect/output)
- [Publishers.Collect.Failure](/documentation/combine/publishers/collect/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/collect/upstream)

#### Comparing publishers

- [static func == (Publishers.Collect<Upstream>, Publishers.Collect<Upstream>) -> Bool](/documentation/combine/publishers/collect/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/collect/equatable-implementations)

##### Operators

- [static func == (Publishers.Collect<Upstream>, Publishers.Collect<Upstream>) -> Bool](/documentation/combine/publishers/collect/==(_:_:))
- [Publishers.CollectByCount](/documentation/combine/publishers/collectbycount)

#### Creating a collect by count publisher

- [init(upstream: Upstream, count: Int)](/documentation/combine/publishers/collectbycount/init(upstream:count:))

#### Declaring supporting types

- [Publishers.CollectByCount.Output](/documentation/combine/publishers/collectbycount/output)
- [Publishers.CollectByCount.Failure](/documentation/combine/publishers/collectbycount/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/collectbycount/upstream)
- [let count: Int](/documentation/combine/publishers/collectbycount/count)

#### Comparing publishers

- [static func == (Publishers.CollectByCount<Upstream>, Publishers.CollectByCount<Upstream>) -> Bool](/documentation/combine/publishers/collectbycount/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/collectbycount/equatable-implementations)

##### Operators

- [static func == (Publishers.CollectByCount<Upstream>, Publishers.CollectByCount<Upstream>) -> Bool](/documentation/combine/publishers/collectbycount/==(_:_:))
- [Publishers.CollectByTime](/documentation/combine/publishers/collectbytime)

#### Creating a collect by time Publisher

- [init(upstream: Upstream, strategy: Publishers.TimeGroupingStrategy<Context>, options: Context.SchedulerOptions?)](/documentation/combine/publishers/collectbytime/init(upstream:strategy:options:))

#### Declaring supporting types

- [Publishers.CollectByTime.Output](/documentation/combine/publishers/collectbytime/output)
- [Publishers.CollectByTime.Failure](/documentation/combine/publishers/collectbytime/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/collectbytime/upstream)
- [let strategy: Publishers.TimeGroupingStrategy<Context>](/documentation/combine/publishers/collectbytime/strategy)
- [let options: Context.SchedulerOptions?](/documentation/combine/publishers/collectbytime/options)
- [Publishers.TimeGroupingStrategy](/documentation/combine/publishers/timegroupingstrategy)

#### Time groupings

- [case byTime(Context, Context.SchedulerTimeType.Stride)](/documentation/combine/publishers/timegroupingstrategy/bytime(_:_:))
- [case byTimeOrCount(Context, Context.SchedulerTimeType.Stride, Int)](/documentation/combine/publishers/timegroupingstrategy/bytimeorcount(_:_:_:))
- [Publishers.IgnoreOutput](/documentation/combine/publishers/ignoreoutput)

#### Creating an ignore output publisher

- [init(upstream: Upstream)](/documentation/combine/publishers/ignoreoutput/init(upstream:))

#### Declaring supporting types

- [Publishers.IgnoreOutput.Output](/documentation/combine/publishers/ignoreoutput/output)
- [Publishers.IgnoreOutput.Failure](/documentation/combine/publishers/ignoreoutput/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/ignoreoutput/upstream)

#### Comparing publishers

- [static func == (Publishers.IgnoreOutput<Upstream>, Publishers.IgnoreOutput<Upstream>) -> Bool](/documentation/combine/publishers/ignoreoutput/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/ignoreoutput/equatable-implementations)

##### Operators

- [static func == (Publishers.IgnoreOutput<Upstream>, Publishers.IgnoreOutput<Upstream>) -> Bool](/documentation/combine/publishers/ignoreoutput/==(_:_:))
- [Publishers.Reduce](/documentation/combine/publishers/reduce)

#### Creating a reduce publisher

- [init(upstream: Upstream, initial: Output, nextPartialResult: (Output, Upstream.Output) -> Output)](/documentation/combine/publishers/reduce/init(upstream:initial:nextpartialresult:))

#### Declaring supporting types

- [Publishers.Output](/documentation/combine/publishers/output)

##### Creating an output publisher

- [init(upstream: Upstream, range: CountableRange<Int>)](/documentation/combine/publishers/output/init(upstream:range:))

##### Declaring supporting types

- [Publishers.Output.Output](/documentation/combine/publishers/output/output)
- [Publishers.Output.Failure](/documentation/combine/publishers/output/failure)

##### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/output/upstream)
- [let range: CountableRange<Int>](/documentation/combine/publishers/output/range)

##### Comparing publishers

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

##### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/output/equatable-implementations)

###### Operators

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))
- [Publishers.Reduce.Failure](/documentation/combine/publishers/reduce/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/reduce/upstream)
- [let initial: Output](/documentation/combine/publishers/reduce/initial)
- [let nextPartialResult: (Output, Upstream.Output) -> Output](/documentation/combine/publishers/reduce/nextpartialresult)
- [Publishers.TryReduce](/documentation/combine/publishers/tryreduce)

#### Creating a try-reduce publisher

- [init(upstream: Upstream, initial: Output, nextPartialResult: (Output, Upstream.Output) throws -> Output)](/documentation/combine/publishers/tryreduce/init(upstream:initial:nextpartialresult:))

#### Declaring supporting types

- [Publishers.Output](/documentation/combine/publishers/output)

##### Creating an output publisher

- [init(upstream: Upstream, range: CountableRange<Int>)](/documentation/combine/publishers/output/init(upstream:range:))

##### Declaring supporting types

- [Publishers.Output.Output](/documentation/combine/publishers/output/output)
- [Publishers.Output.Failure](/documentation/combine/publishers/output/failure)

##### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/output/upstream)
- [let range: CountableRange<Int>](/documentation/combine/publishers/output/range)

##### Comparing publishers

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

##### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/output/equatable-implementations)

###### Operators

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))
- [Publishers.TryReduce.Failure](/documentation/combine/publishers/tryreduce/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/tryreduce/upstream)
- [let initial: Output](/documentation/combine/publishers/tryreduce/initial)
- [let nextPartialResult: (Output, Upstream.Output) throws -> Output](/documentation/combine/publishers/tryreduce/nextpartialresult)

### Applying mathematical operations on elements

- [Publishers.Count](/documentation/combine/publishers/count)

#### Creating a count Publisher

- [init(upstream: Upstream)](/documentation/combine/publishers/count/init(upstream:))

#### Declaring supporting types

- [Publishers.Count.Output](/documentation/combine/publishers/count/output)
- [Publishers.Count.Failure](/documentation/combine/publishers/count/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/count/upstream)

#### Comparing publishers

- [static func == (Publishers.Count<Upstream>, Publishers.Count<Upstream>) -> Bool](/documentation/combine/publishers/count/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/count/equatable-implementations)

##### Operators

- [static func == (Publishers.Count<Upstream>, Publishers.Count<Upstream>) -> Bool](/documentation/combine/publishers/count/==(_:_:))
- [Publishers.Comparison](/documentation/combine/publishers/comparison)

#### Creating a comparison publisher

- [init(upstream: Upstream, areInIncreasingOrder: (Upstream.Output, Upstream.Output) -> Bool)](/documentation/combine/publishers/comparison/init(upstream:areinincreasingorder:))

#### Declaring supporting types

- [Publishers.Comparison.Output](/documentation/combine/publishers/comparison/output)
- [Publishers.Comparison.Failure](/documentation/combine/publishers/comparison/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/comparison/upstream)
- [let areInIncreasingOrder: (Upstream.Output, Upstream.Output) -> Bool](/documentation/combine/publishers/comparison/areinincreasingorder)
- [Publishers.TryComparison](/documentation/combine/publishers/trycomparison)

#### Creating a try-comparison publisher

- [init(upstream: Upstream, areInIncreasingOrder: (Upstream.Output, Upstream.Output) throws -> Bool)](/documentation/combine/publishers/trycomparison/init(upstream:areinincreasingorder:))

#### Declaring supporting types

- [Publishers.TryComparison.Output](/documentation/combine/publishers/trycomparison/output)
- [Publishers.TryComparison.Failure](/documentation/combine/publishers/trycomparison/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/trycomparison/upstream)
- [let areInIncreasingOrder: (Upstream.Output, Upstream.Output) throws -> Bool](/documentation/combine/publishers/trycomparison/areinincreasingorder)

### Applying matching criteria to elements

- [Publishers.Contains](/documentation/combine/publishers/contains)

#### Creating a contains Publisher

- [init(upstream: Upstream, output: Upstream.Output)](/documentation/combine/publishers/contains/init(upstream:output:))

#### Declaring supporting types

- [Publishers.Contains.Output](/documentation/combine/publishers/contains/output-swift.typealias)
- [Publishers.Contains.Failure](/documentation/combine/publishers/contains/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/contains/upstream)
- [let output: Upstream.Output](/documentation/combine/publishers/contains/output-swift.property)

#### Comparing publishers

- [static func == (Publishers.Contains<Upstream>, Publishers.Contains<Upstream>) -> Bool](/documentation/combine/publishers/contains/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/contains/equatable-implementations)

##### Operators

- [static func == (Publishers.Contains<Upstream>, Publishers.Contains<Upstream>) -> Bool](/documentation/combine/publishers/contains/==(_:_:))
- [Publishers.ContainsWhere](/documentation/combine/publishers/containswhere)

#### Creating a contains where publisher

- [init(upstream: Upstream, predicate: (Upstream.Output) -> Bool)](/documentation/combine/publishers/containswhere/init(upstream:predicate:))

#### Declaring supporting types

- [Publishers.ContainsWhere.Output](/documentation/combine/publishers/containswhere/output)
- [Publishers.ContainsWhere.Failure](/documentation/combine/publishers/containswhere/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/containswhere/upstream)
- [let predicate: (Upstream.Output) -> Bool](/documentation/combine/publishers/containswhere/predicate)
- [Publishers.TryContainsWhere](/documentation/combine/publishers/trycontainswhere)

#### Creating a try-contains-where publisher

- [init(upstream: Upstream, predicate: (Upstream.Output) throws -> Bool)](/documentation/combine/publishers/trycontainswhere/init(upstream:predicate:))

#### Declaring supporting types

- [Publishers.TryContainsWhere.Output](/documentation/combine/publishers/trycontainswhere/output)
- [Publishers.TryContainsWhere.Failure](/documentation/combine/publishers/trycontainswhere/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/trycontainswhere/upstream)
- [let predicate: (Upstream.Output) throws -> Bool](/documentation/combine/publishers/trycontainswhere/predicate)
- [Publishers.AllSatisfy](/documentation/combine/publishers/allsatisfy)

#### Creating an all satisfy publisher

- [init(upstream: Upstream, predicate: (Upstream.Output) -> Bool)](/documentation/combine/publishers/allsatisfy/init(upstream:predicate:))

#### Declaring supporting types

- [Publishers.AllSatisfy.Output](/documentation/combine/publishers/allsatisfy/output)
- [Publishers.AllSatisfy.Failure](/documentation/combine/publishers/allsatisfy/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/allsatisfy/upstream)
- [let predicate: (Upstream.Output) -> Bool](/documentation/combine/publishers/allsatisfy/predicate)
- [Publishers.TryAllSatisfy](/documentation/combine/publishers/tryallsatisfy)

#### Creating a try-all-satisfy publisher

- [init(upstream: Upstream, predicate: (Upstream.Output) throws -> Bool)](/documentation/combine/publishers/tryallsatisfy/init(upstream:predicate:))

#### Declaring supporting types

- [Publishers.TryAllSatisfy.Output](/documentation/combine/publishers/tryallsatisfy/output)
- [Publishers.TryAllSatisfy.Failure](/documentation/combine/publishers/tryallsatisfy/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/tryallsatisfy/upstream)
- [let predicate: (Upstream.Output) throws -> Bool](/documentation/combine/publishers/tryallsatisfy/predicate)

### Applying sequence operations to elements

- [Publishers.DropUntilOutput](/documentation/combine/publishers/dropuntiloutput)

#### Creating a drop until output publisher

- [init(upstream: Upstream, other: Other)](/documentation/combine/publishers/dropuntiloutput/init(upstream:other:))

#### Declaring supporting types

- [Publishers.DropUntilOutput.Output](/documentation/combine/publishers/dropuntiloutput/output)
- [Publishers.DropUntilOutput.Failure](/documentation/combine/publishers/dropuntiloutput/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/dropuntiloutput/upstream)
- [let other: Other](/documentation/combine/publishers/dropuntiloutput/other)

#### Comparing publishers

- [static func == (Publishers.DropUntilOutput<Upstream, Other>, Publishers.DropUntilOutput<Upstream, Other>) -> Bool](/documentation/combine/publishers/dropuntiloutput/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/dropuntiloutput/equatable-implementations)

##### Operators

- [static func == (Publishers.DropUntilOutput<Upstream, Other>, Publishers.DropUntilOutput<Upstream, Other>) -> Bool](/documentation/combine/publishers/dropuntiloutput/==(_:_:))
- [Publishers.Drop](/documentation/combine/publishers/drop)

#### Creating a drop Publisher

- [init(upstream: Upstream, count: Int)](/documentation/combine/publishers/drop/init(upstream:count:))

#### Declaring supporting types

- [Publishers.Drop.Output](/documentation/combine/publishers/drop/output)
- [Publishers.Drop.Failure](/documentation/combine/publishers/drop/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/drop/upstream)
- [let count: Int](/documentation/combine/publishers/drop/count)

#### Comparing publishers

- [static func == (Publishers.Drop<Upstream>, Publishers.Drop<Upstream>) -> Bool](/documentation/combine/publishers/drop/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/drop/equatable-implementations)

##### Operators

- [static func == (Publishers.Drop<Upstream>, Publishers.Drop<Upstream>) -> Bool](/documentation/combine/publishers/drop/==(_:_:))
- [Publishers.DropWhile](/documentation/combine/publishers/dropwhile)

#### Creating a drop while publisher

- [init(upstream: Upstream, predicate: (Publishers.DropWhile<Upstream>.Output) -> Bool)](/documentation/combine/publishers/dropwhile/init(upstream:predicate:))

#### Declaring supporting types

- [Publishers.DropWhile.Output](/documentation/combine/publishers/dropwhile/output)
- [Publishers.DropWhile.Failure](/documentation/combine/publishers/dropwhile/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/dropwhile/upstream)
- [let predicate: (Publishers.DropWhile<Upstream>.Output) -> Bool](/documentation/combine/publishers/dropwhile/predicate)
- [Publishers.TryDropWhile](/documentation/combine/publishers/trydropwhile)

#### Creating a try-drop-while publisher

- [init(upstream: Upstream, predicate: (Publishers.TryDropWhile<Upstream>.Output) throws -> Bool)](/documentation/combine/publishers/trydropwhile/init(upstream:predicate:))

#### Declaring supporting types

- [Publishers.TryDropWhile.Output](/documentation/combine/publishers/trydropwhile/output)
- [Publishers.TryDropWhile.Failure](/documentation/combine/publishers/trydropwhile/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/trydropwhile/upstream)
- [let predicate: (Publishers.TryDropWhile<Upstream>.Output) throws -> Bool](/documentation/combine/publishers/trydropwhile/predicate)
- [Publishers.Concatenate](/documentation/combine/publishers/concatenate)

#### Creating a concatenate publisher

- [init(prefix: Prefix, suffix: Suffix)](/documentation/combine/publishers/concatenate/init(prefix:suffix:))

#### Declaring supporting types

- [Publishers.Concatenate.Output](/documentation/combine/publishers/concatenate/output)
- [Publishers.Concatenate.Failure](/documentation/combine/publishers/concatenate/failure)

#### Inspecting publisher properties

- [let prefix: Prefix](/documentation/combine/publishers/concatenate/prefix)
- [let suffix: Suffix](/documentation/combine/publishers/concatenate/suffix)

#### Comparing publishers

- [static func == (Publishers.Concatenate<Prefix, Suffix>, Publishers.Concatenate<Prefix, Suffix>) -> Bool](/documentation/combine/publishers/concatenate/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/concatenate/equatable-implementations)

##### Operators

- [static func == (Publishers.Concatenate<Prefix, Suffix>, Publishers.Concatenate<Prefix, Suffix>) -> Bool](/documentation/combine/publishers/concatenate/==(_:_:))
- [Publishers.PrefixWhile](/documentation/combine/publishers/prefixwhile)

#### Creating a prefix while publisher

- [init(upstream: Upstream, predicate: (Publishers.PrefixWhile<Upstream>.Output) -> Bool)](/documentation/combine/publishers/prefixwhile/init(upstream:predicate:))

#### Declaring supporting types

- [Publishers.PrefixWhile.Output](/documentation/combine/publishers/prefixwhile/output)
- [Publishers.PrefixWhile.Failure](/documentation/combine/publishers/prefixwhile/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/prefixwhile/upstream)
- [let predicate: (Publishers.PrefixWhile<Upstream>.Output) -> Bool](/documentation/combine/publishers/prefixwhile/predicate)
- [Publishers.TryPrefixWhile](/documentation/combine/publishers/tryprefixwhile)

#### Creating a try-prefix-while publisher

- [init(upstream: Upstream, predicate: (Publishers.TryPrefixWhile<Upstream>.Output) throws -> Bool)](/documentation/combine/publishers/tryprefixwhile/init(upstream:predicate:))

#### Declaring supporting types

- [Publishers.TryPrefixWhile.Output](/documentation/combine/publishers/tryprefixwhile/output)
- [Publishers.TryPrefixWhile.Failure](/documentation/combine/publishers/tryprefixwhile/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/tryprefixwhile/upstream)
- [let predicate: (Publishers.TryPrefixWhile<Upstream>.Output) throws -> Bool](/documentation/combine/publishers/tryprefixwhile/predicate)
- [Publishers.PrefixUntilOutput](/documentation/combine/publishers/prefixuntiloutput)

#### Creating a prefix until output publisher

- [init(upstream: Upstream, other: Other)](/documentation/combine/publishers/prefixuntiloutput/init(upstream:other:))

#### Declaring supporting types

- [Publishers.PrefixUntilOutput.Output](/documentation/combine/publishers/prefixuntiloutput/output)
- [Publishers.PrefixUntilOutput.Failure](/documentation/combine/publishers/prefixuntiloutput/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/prefixuntiloutput/upstream)
- [let other: Other](/documentation/combine/publishers/prefixuntiloutput/other)

### Selecting specific elements

- [Publishers.First](/documentation/combine/publishers/first)

#### Creating a first publisher

- [init(upstream: Upstream)](/documentation/combine/publishers/first/init(upstream:))

#### Declaring supporting types

- [Publishers.First.Output](/documentation/combine/publishers/first/output)
- [Publishers.First.Failure](/documentation/combine/publishers/first/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/first/upstream)

#### Comparing publishers

- [static func == (Publishers.First<Upstream>, Publishers.First<Upstream>) -> Bool](/documentation/combine/publishers/first/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/first/equatable-implementations)

##### Operators

- [static func == (Publishers.First<Upstream>, Publishers.First<Upstream>) -> Bool](/documentation/combine/publishers/first/==(_:_:))
- [Publishers.FirstWhere](/documentation/combine/publishers/firstwhere)

#### Creating a first-where publisher

- [init(upstream: Upstream, predicate: (Publishers.FirstWhere<Upstream>.Output) -> Bool)](/documentation/combine/publishers/firstwhere/init(upstream:predicate:))

#### Declaring supporting types

- [Publishers.FirstWhere.Output](/documentation/combine/publishers/firstwhere/output)
- [Publishers.FirstWhere.Failure](/documentation/combine/publishers/firstwhere/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/firstwhere/upstream)
- [let predicate: (Publishers.FirstWhere<Upstream>.Output) -> Bool](/documentation/combine/publishers/firstwhere/predicate)
- [Publishers.TryFirstWhere](/documentation/combine/publishers/tryfirstwhere)

#### Creating a try-first-where publisher

- [init(upstream: Upstream, predicate: (Publishers.TryFirstWhere<Upstream>.Output) throws -> Bool)](/documentation/combine/publishers/tryfirstwhere/init(upstream:predicate:))

#### Declaring supporting types

- [Publishers.TryFirstWhere.Output](/documentation/combine/publishers/tryfirstwhere/output)
- [Publishers.TryFirstWhere.Failure](/documentation/combine/publishers/tryfirstwhere/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/tryfirstwhere/upstream)
- [let predicate: (Publishers.TryFirstWhere<Upstream>.Output) throws -> Bool](/documentation/combine/publishers/tryfirstwhere/predicate)
- [Publishers.Last](/documentation/combine/publishers/last)

#### Creating a last publisher

- [init(upstream: Upstream)](/documentation/combine/publishers/last/init(upstream:))

#### Declaring supporting types

- [Publishers.Last.Output](/documentation/combine/publishers/last/output)
- [Publishers.Last.Failure](/documentation/combine/publishers/last/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/last/upstream)

#### Comparing publishers

- [static func == (Publishers.Last<Upstream>, Publishers.Last<Upstream>) -> Bool](/documentation/combine/publishers/last/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/last/equatable-implementations)

##### Operators

- [static func == (Publishers.Last<Upstream>, Publishers.Last<Upstream>) -> Bool](/documentation/combine/publishers/last/==(_:_:))
- [Publishers.LastWhere](/documentation/combine/publishers/lastwhere)

#### Creating a last-where Publisher

- [init(upstream: Upstream, predicate: (Publishers.LastWhere<Upstream>.Output) -> Bool)](/documentation/combine/publishers/lastwhere/init(upstream:predicate:))

#### Declaring supporting types

- [Publishers.LastWhere.Output](/documentation/combine/publishers/lastwhere/output)
- [Publishers.LastWhere.Failure](/documentation/combine/publishers/lastwhere/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/lastwhere/upstream)
- [let predicate: (Publishers.LastWhere<Upstream>.Output) -> Bool](/documentation/combine/publishers/lastwhere/predicate)
- [Publishers.TryLastWhere](/documentation/combine/publishers/trylastwhere)

#### Creating a try-last-where publisher

- [init(upstream: Upstream, predicate: (Publishers.TryLastWhere<Upstream>.Output) throws -> Bool)](/documentation/combine/publishers/trylastwhere/init(upstream:predicate:))

#### Declaring supporting types

- [Publishers.TryLastWhere.Output](/documentation/combine/publishers/trylastwhere/output)
- [Publishers.TryLastWhere.Failure](/documentation/combine/publishers/trylastwhere/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/trylastwhere/upstream)
- [let predicate: (Publishers.TryLastWhere<Upstream>.Output) throws -> Bool](/documentation/combine/publishers/trylastwhere/predicate)
- [Publishers.Output](/documentation/combine/publishers/output)

#### Creating an output publisher

- [init(upstream: Upstream, range: CountableRange<Int>)](/documentation/combine/publishers/output/init(upstream:range:))

#### Declaring supporting types

- [Publishers.Output.Output](/documentation/combine/publishers/output/output)
- [Publishers.Output.Failure](/documentation/combine/publishers/output/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/output/upstream)
- [let range: CountableRange<Int>](/documentation/combine/publishers/output/range)

#### Comparing publishers

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/output/equatable-implementations)

##### Operators

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

### Combining elements from multiple publishers

- [Publishers.CombineLatest](/documentation/combine/publishers/combinelatest)

#### Creating a combine latest publisher

- [init(A, B)](/documentation/combine/publishers/combinelatest/init(_:_:))

#### Declaring supporting types

- [Publishers.CombineLatest.Output](/documentation/combine/publishers/combinelatest/output)
- [Publishers.CombineLatest.Failure](/documentation/combine/publishers/combinelatest/failure)

#### Inspecting publisher properties

- [let a: A](/documentation/combine/publishers/combinelatest/a)
- [let b: B](/documentation/combine/publishers/combinelatest/b)

#### Comparing publishers

- [static func == (Publishers.CombineLatest<A, B>, Publishers.CombineLatest<A, B>) -> Bool](/documentation/combine/publishers/combinelatest/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/combinelatest/equatable-implementations)

##### Operators

- [static func == (Publishers.CombineLatest<A, B>, Publishers.CombineLatest<A, B>) -> Bool](/documentation/combine/publishers/combinelatest/==(_:_:))
- [Publishers.CombineLatest3](/documentation/combine/publishers/combinelatest3)

#### Creating a combine latest-three publisher

- [init(A, B, C)](/documentation/combine/publishers/combinelatest3/init(_:_:_:))

#### Declaring supporting types

- [Publishers.CombineLatest3.Output](/documentation/combine/publishers/combinelatest3/output)
- [Publishers.CombineLatest3.Failure](/documentation/combine/publishers/combinelatest3/failure)

#### Inspecting publisher properties

- [let a: A](/documentation/combine/publishers/combinelatest3/a)
- [let b: B](/documentation/combine/publishers/combinelatest3/b)
- [let c: C](/documentation/combine/publishers/combinelatest3/c)
- [Publishers.CombineLatest4](/documentation/combine/publishers/combinelatest4)

#### Creating a combine latest-four publisher

- [init(A, B, C, D)](/documentation/combine/publishers/combinelatest4/init(_:_:_:_:))

#### Declaring supporting types

- [Publishers.CombineLatest4.Output](/documentation/combine/publishers/combinelatest4/output)
- [Publishers.CombineLatest4.Failure](/documentation/combine/publishers/combinelatest4/failure)

#### Inspecting publisher properties

- [let a: A](/documentation/combine/publishers/combinelatest4/a)
- [let b: B](/documentation/combine/publishers/combinelatest4/b)
- [let c: C](/documentation/combine/publishers/combinelatest4/c)
- [let d: D](/documentation/combine/publishers/combinelatest4/d)
- [Publishers.Merge](/documentation/combine/publishers/merge)

#### Creating a merge publisher

- [init(A, B)](/documentation/combine/publishers/merge/init(_:_:))

#### Merging elements

- [func merge<P>(with: P) -> Publishers.Merge3<A, B, P>](/documentation/combine/publishers/merge/merge(with:))
- [func merge<Z, Y>(with: Z, Y) -> Publishers.Merge4<A, B, Z, Y>](/documentation/combine/publishers/merge/merge(with:_:))
- [func merge<Z, Y, X>(with: Z, Y, X) -> Publishers.Merge5<A, B, Z, Y, X>](/documentation/combine/publishers/merge/merge(with:_:_:))
- [func merge<Z, Y, X, W>(with: Z, Y, X, W) -> Publishers.Merge6<A, B, Z, Y, X, W>](/documentation/combine/publishers/merge/merge(with:_:_:_:))
- [func merge<Z, Y, X, W, V>(with: Z, Y, X, W, V) -> Publishers.Merge7<A, B, Z, Y, X, W, V>](/documentation/combine/publishers/merge/merge(with:_:_:_:_:))
- [func merge<Z, Y, X, W, V, U>(with: Z, Y, X, W, V, U) -> Publishers.Merge8<A, B, Z, Y, X, W, V, U>](/documentation/combine/publishers/merge/merge(with:_:_:_:_:_:))

#### Declaring supporting types

- [Publishers.Merge.Output](/documentation/combine/publishers/merge/output)
- [Publishers.Merge.Failure](/documentation/combine/publishers/merge/failure)

#### Inspecting publisher properties

- [let a: A](/documentation/combine/publishers/merge/a)
- [let b: B](/documentation/combine/publishers/merge/b)

#### Comparing publishers

- [static func == (Publishers.Merge<A, B>, Publishers.Merge<A, B>) -> Bool](/documentation/combine/publishers/merge/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/merge/equatable-implementations)

##### Operators

- [static func == (Publishers.Merge<A, B>, Publishers.Merge<A, B>) -> Bool](/documentation/combine/publishers/merge/==(_:_:))
- [Publishers.Merge3](/documentation/combine/publishers/merge3)

#### Creating a merge-three publisher

- [init(A, B, C)](/documentation/combine/publishers/merge3/init(_:_:_:))

#### Merging elements

- [func merge<P>(with: P) -> Publishers.Merge4<A, B, C, P>](/documentation/combine/publishers/merge3/merge(with:))
- [func merge<Z, Y>(with: Z, Y) -> Publishers.Merge5<A, B, C, Z, Y>](/documentation/combine/publishers/merge3/merge(with:_:))
- [func merge<Z, Y, X>(with: Z, Y, X) -> Publishers.Merge6<A, B, C, Z, Y, X>](/documentation/combine/publishers/merge3/merge(with:_:_:))
- [func merge<Z, Y, X, W>(with: Z, Y, X, W) -> Publishers.Merge7<A, B, C, Z, Y, X, W>](/documentation/combine/publishers/merge3/merge(with:_:_:_:))
- [func merge<Z, Y, X, W, V>(with: Z, Y, X, W, V) -> Publishers.Merge8<A, B, C, Z, Y, X, W, V>](/documentation/combine/publishers/merge3/merge(with:_:_:_:_:))

#### Declaring supporting types

- [Publishers.Merge3.Output](/documentation/combine/publishers/merge3/output)
- [Publishers.Merge3.Failure](/documentation/combine/publishers/merge3/failure)

#### Inspecting publisher properties

- [let a: A](/documentation/combine/publishers/merge3/a)
- [let b: B](/documentation/combine/publishers/merge3/b)
- [let c: C](/documentation/combine/publishers/merge3/c)

#### Comparing publishers

- [static func == (Publishers.Merge3<A, B, C>, Publishers.Merge3<A, B, C>) -> Bool](/documentation/combine/publishers/merge3/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/merge3/equatable-implementations)

##### Operators

- [static func == (Publishers.Merge3<A, B, C>, Publishers.Merge3<A, B, C>) -> Bool](/documentation/combine/publishers/merge3/==(_:_:))
- [Publishers.Merge4](/documentation/combine/publishers/merge4)

#### Creating a merge-four publisher

- [init(A, B, C, D)](/documentation/combine/publishers/merge4/init(_:_:_:_:))

#### Merging elements

- [func merge<P>(with: P) -> Publishers.Merge5<A, B, C, D, P>](/documentation/combine/publishers/merge4/merge(with:))
- [func merge<Z, Y>(with: Z, Y) -> Publishers.Merge6<A, B, C, D, Z, Y>](/documentation/combine/publishers/merge4/merge(with:_:))
- [func merge<Z, Y, X>(with: Z, Y, X) -> Publishers.Merge7<A, B, C, D, Z, Y, X>](/documentation/combine/publishers/merge4/merge(with:_:_:))
- [func merge<Z, Y, X, W>(with: Z, Y, X, W) -> Publishers.Merge8<A, B, C, D, Z, Y, X, W>](/documentation/combine/publishers/merge4/merge(with:_:_:_:))

#### Declaring supporting types

- [Publishers.Merge4.Output](/documentation/combine/publishers/merge4/output)
- [Publishers.Merge4.Failure](/documentation/combine/publishers/merge4/failure)

#### Inspecting publisher properties

- [let a: A](/documentation/combine/publishers/merge4/a)
- [let b: B](/documentation/combine/publishers/merge4/b)
- [let c: C](/documentation/combine/publishers/merge4/c)
- [let d: D](/documentation/combine/publishers/merge4/d)

#### Comparing publishers

- [static func == (Publishers.Merge4<A, B, C, D>, Publishers.Merge4<A, B, C, D>) -> Bool](/documentation/combine/publishers/merge4/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/merge4/equatable-implementations)

##### Operators

- [static func == (Publishers.Merge4<A, B, C, D>, Publishers.Merge4<A, B, C, D>) -> Bool](/documentation/combine/publishers/merge4/==(_:_:))
- [Publishers.Merge5](/documentation/combine/publishers/merge5)

#### Creating a merge-five publisher

- [init(A, B, C, D, E)](/documentation/combine/publishers/merge5/init(_:_:_:_:_:))

#### Merging elements

- [func merge<P>(with: P) -> Publishers.Merge6<A, B, C, D, E, P>](/documentation/combine/publishers/merge5/merge(with:))
- [func merge<Z, Y>(with: Z, Y) -> Publishers.Merge7<A, B, C, D, E, Z, Y>](/documentation/combine/publishers/merge5/merge(with:_:))
- [func merge<Z, Y, X>(with: Z, Y, X) -> Publishers.Merge8<A, B, C, D, E, Z, Y, X>](/documentation/combine/publishers/merge5/merge(with:_:_:))

#### Declaring supporting types

- [Publishers.Merge5.Output](/documentation/combine/publishers/merge5/output)
- [Publishers.Merge5.Failure](/documentation/combine/publishers/merge5/failure)

#### Inspecting publisher properties

- [let a: A](/documentation/combine/publishers/merge5/a)
- [let b: B](/documentation/combine/publishers/merge5/b)
- [let c: C](/documentation/combine/publishers/merge5/c)
- [let d: D](/documentation/combine/publishers/merge5/d)
- [let e: E](/documentation/combine/publishers/merge5/e)

#### Comparing publishers

- [static func == (Publishers.Merge5<A, B, C, D, E>, Publishers.Merge5<A, B, C, D, E>) -> Bool](/documentation/combine/publishers/merge5/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/merge5/equatable-implementations)

##### Operators

- [static func == (Publishers.Merge5<A, B, C, D, E>, Publishers.Merge5<A, B, C, D, E>) -> Bool](/documentation/combine/publishers/merge5/==(_:_:))
- [Publishers.Merge6](/documentation/combine/publishers/merge6)

#### Creating a merge-six publisher

- [init(A, B, C, D, E, F)](/documentation/combine/publishers/merge6/init(_:_:_:_:_:_:))

#### Merging elements

- [func merge<P>(with: P) -> Publishers.Merge7<A, B, C, D, E, F, P>](/documentation/combine/publishers/merge6/merge(with:))
- [func merge<Z, Y>(with: Z, Y) -> Publishers.Merge8<A, B, C, D, E, F, Z, Y>](/documentation/combine/publishers/merge6/merge(with:_:))

#### Declaring supporting types

- [Publishers.Merge6.Output](/documentation/combine/publishers/merge6/output)
- [Publishers.Merge6.Failure](/documentation/combine/publishers/merge6/failure)

#### Inspecting publisher properties

- [let a: A](/documentation/combine/publishers/merge6/a)
- [let b: B](/documentation/combine/publishers/merge6/b)
- [let c: C](/documentation/combine/publishers/merge6/c)
- [let d: D](/documentation/combine/publishers/merge6/d)
- [let e: E](/documentation/combine/publishers/merge6/e)
- [let f: F](/documentation/combine/publishers/merge6/f)

#### Comparing publishers

- [static func == (Publishers.Merge6<A, B, C, D, E, F>, Publishers.Merge6<A, B, C, D, E, F>) -> Bool](/documentation/combine/publishers/merge6/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/merge6/equatable-implementations)

##### Operators

- [static func == (Publishers.Merge6<A, B, C, D, E, F>, Publishers.Merge6<A, B, C, D, E, F>) -> Bool](/documentation/combine/publishers/merge6/==(_:_:))
- [Publishers.Merge7](/documentation/combine/publishers/merge7)

#### Creating a merge-seven publisher

- [init(A, B, C, D, E, F, G)](/documentation/combine/publishers/merge7/init(_:_:_:_:_:_:_:))

#### Merging elements

- [func merge<P>(with: P) -> Publishers.Merge8<A, B, C, D, E, F, G, P>](/documentation/combine/publishers/merge7/merge(with:))

#### Declaring supporting types

- [Publishers.Merge7.Output](/documentation/combine/publishers/merge7/output)
- [Publishers.Merge7.Failure](/documentation/combine/publishers/merge7/failure)

#### Inspecting publisher properties

- [let a: A](/documentation/combine/publishers/merge7/a)
- [let b: B](/documentation/combine/publishers/merge7/b)
- [let c: C](/documentation/combine/publishers/merge7/c)
- [let d: D](/documentation/combine/publishers/merge7/d)
- [let e: E](/documentation/combine/publishers/merge7/e)
- [let f: F](/documentation/combine/publishers/merge7/f)
- [let g: G](/documentation/combine/publishers/merge7/g)

#### Comparing publishers

- [static func == (Publishers.Merge7<A, B, C, D, E, F, G>, Publishers.Merge7<A, B, C, D, E, F, G>) -> Bool](/documentation/combine/publishers/merge7/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/merge7/equatable-implementations)

##### Operators

- [static func == (Publishers.Merge7<A, B, C, D, E, F, G>, Publishers.Merge7<A, B, C, D, E, F, G>) -> Bool](/documentation/combine/publishers/merge7/==(_:_:))
- [Publishers.Merge8](/documentation/combine/publishers/merge8)

#### Creating a merge-eight publisher

- [init(A, B, C, D, E, F, G, H)](/documentation/combine/publishers/merge8/init(_:_:_:_:_:_:_:_:))

#### Declaring supporting types

- [Publishers.Merge8.Output](/documentation/combine/publishers/merge8/output)
- [Publishers.Merge8.Failure](/documentation/combine/publishers/merge8/failure)

#### Inspecting publisher properties

- [let a: A](/documentation/combine/publishers/merge8/a)
- [let b: B](/documentation/combine/publishers/merge8/b)
- [let c: C](/documentation/combine/publishers/merge8/c)
- [let d: D](/documentation/combine/publishers/merge8/d)
- [let e: E](/documentation/combine/publishers/merge8/e)
- [let f: F](/documentation/combine/publishers/merge8/f)
- [let g: G](/documentation/combine/publishers/merge8/g)
- [let h: H](/documentation/combine/publishers/merge8/h)

#### Comparing publishers

- [static func == (Publishers.Merge8<A, B, C, D, E, F, G, H>, Publishers.Merge8<A, B, C, D, E, F, G, H>) -> Bool](/documentation/combine/publishers/merge8/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/merge8/equatable-implementations)

##### Operators

- [static func == (Publishers.Merge8<A, B, C, D, E, F, G, H>, Publishers.Merge8<A, B, C, D, E, F, G, H>) -> Bool](/documentation/combine/publishers/merge8/==(_:_:))
- [Publishers.MergeMany](/documentation/combine/publishers/mergemany)

#### Creating a merge many publisher

- [init(Upstream...)](/documentation/combine/publishers/mergemany/init(_:)-1hsqd)
- [init<S>(S)](/documentation/combine/publishers/mergemany/init(_:)-3hrmo)

#### Merging elements

- [func merge(with: Upstream) -> Publishers.MergeMany<Upstream>](/documentation/combine/publishers/mergemany/merge(with:))

#### Declaring supporting types

- [Publishers.MergeMany.Output](/documentation/combine/publishers/mergemany/output)
- [Publishers.MergeMany.Failure](/documentation/combine/publishers/mergemany/failure)

#### Inspecting publisher properties

- [let publishers: [Upstream]](/documentation/combine/publishers/mergemany/publishers)

#### Comparing publishers

- [static func == (Publishers.MergeMany<Upstream>, Publishers.MergeMany<Upstream>) -> Bool](/documentation/combine/publishers/mergemany/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/mergemany/equatable-implementations)

##### Operators

- [static func == (Publishers.MergeMany<Upstream>, Publishers.MergeMany<Upstream>) -> Bool](/documentation/combine/publishers/mergemany/==(_:_:))
- [Publishers.Zip](/documentation/combine/publishers/zip)

#### Creating a zip publisher

- [init(A, B)](/documentation/combine/publishers/zip/init(_:_:))

#### Declaring supporting types

- [Publishers.Zip.Output](/documentation/combine/publishers/zip/output)
- [Publishers.Zip.Failure](/documentation/combine/publishers/zip/failure)

#### Inspecting publisher properties

- [let a: A](/documentation/combine/publishers/zip/a)
- [let b: B](/documentation/combine/publishers/zip/b)

#### Comparing publishers

- [static func == (Publishers.Zip<A, B>, Publishers.Zip<A, B>) -> Bool](/documentation/combine/publishers/zip/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/zip/equatable-implementations)

##### Operators

- [static func == (Publishers.Zip<A, B>, Publishers.Zip<A, B>) -> Bool](/documentation/combine/publishers/zip/==(_:_:))
- [Publishers.Zip3](/documentation/combine/publishers/zip3)

#### Creating a zip-three Publisher

- [init(A, B, C)](/documentation/combine/publishers/zip3/init(_:_:_:))

#### Declaring supporting types

- [Publishers.Zip3.Output](/documentation/combine/publishers/zip3/output)
- [Publishers.Zip3.Failure](/documentation/combine/publishers/zip3/failure)

#### Inspecting publisher properties

- [let a: A](/documentation/combine/publishers/zip3/a)
- [let b: B](/documentation/combine/publishers/zip3/b)
- [let c: C](/documentation/combine/publishers/zip3/c)

#### Comparing publishers

- [static func == (Publishers.Zip3<A, B, C>, Publishers.Zip3<A, B, C>) -> Bool](/documentation/combine/publishers/zip3/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/zip3/equatable-implementations)

##### Operators

- [static func == (Publishers.Zip3<A, B, C>, Publishers.Zip3<A, B, C>) -> Bool](/documentation/combine/publishers/zip3/==(_:_:))
- [Publishers.Zip4](/documentation/combine/publishers/zip4)

#### Creating a zip-four Publisher

- [init(A, B, C, D)](/documentation/combine/publishers/zip4/init(_:_:_:_:))

#### Declaring supporting types

- [Publishers.Zip4.Output](/documentation/combine/publishers/zip4/output)
- [Publishers.Zip4.Failure](/documentation/combine/publishers/zip4/failure)

#### Inspecting publisher properties

- [let a: A](/documentation/combine/publishers/zip4/a)
- [let b: B](/documentation/combine/publishers/zip4/b)
- [let c: C](/documentation/combine/publishers/zip4/c)
- [let d: D](/documentation/combine/publishers/zip4/d)

#### Comparing publishers

- [static func == (Publishers.Zip4<A, B, C, D>, Publishers.Zip4<A, B, C, D>) -> Bool](/documentation/combine/publishers/zip4/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/zip4/equatable-implementations)

##### Operators

- [static func == (Publishers.Zip4<A, B, C, D>, Publishers.Zip4<A, B, C, D>) -> Bool](/documentation/combine/publishers/zip4/==(_:_:))

### Republishing elements by subscribing to new publishers

- [Publishers.FlatMap](/documentation/combine/publishers/flatmap)

#### Creating a flat map Publisher

- [init(upstream: Upstream, maxPublishers: Subscribers.Demand, transform: (Upstream.Output) -> NewPublisher)](/documentation/combine/publishers/flatmap/init(upstream:maxpublishers:transform:))

#### Declaring supporting types

- [Publishers.FlatMap.Output](/documentation/combine/publishers/flatmap/output)
- [Publishers.FlatMap.Failure](/documentation/combine/publishers/flatmap/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/flatmap/upstream)
- [let maxPublishers: Subscribers.Demand](/documentation/combine/publishers/flatmap/maxpublishers)
- [let transform: (Upstream.Output) -> NewPublisher](/documentation/combine/publishers/flatmap/transform)
- [Publishers.SwitchToLatest](/documentation/combine/publishers/switchtolatest)

#### Creating a switch-to-latest Publisher

- [init(upstream: Upstream)](/documentation/combine/publishers/switchtolatest/init(upstream:))

#### Declaring supporting types

- [Publishers.SwitchToLatest.Output](/documentation/combine/publishers/switchtolatest/output)
- [Publishers.SwitchToLatest.Failure](/documentation/combine/publishers/switchtolatest/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/switchtolatest/upstream)

### Handling errors

- [Publishers.AssertNoFailure](/documentation/combine/publishers/assertnofailure)

#### Creating an assert no failure publisher

- [init(upstream: Upstream, prefix: String, file: StaticString, line: UInt)](/documentation/combine/publishers/assertnofailure/init(upstream:prefix:file:line:))

#### Declaring supporting types

- [Publishers.AssertNoFailure.Output](/documentation/combine/publishers/assertnofailure/output)
- [Publishers.AssertNoFailure.Failure](/documentation/combine/publishers/assertnofailure/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/assertnofailure/upstream)
- [let file: StaticString](/documentation/combine/publishers/assertnofailure/file)
- [let line: UInt](/documentation/combine/publishers/assertnofailure/line)
- [let prefix: String](/documentation/combine/publishers/assertnofailure/prefix)
- [Publishers.Catch](/documentation/combine/publishers/catch)

#### Creating a catch publisher

- [init(upstream: Upstream, handler: (Upstream.Failure) -> NewPublisher)](/documentation/combine/publishers/catch/init(upstream:handler:))

#### Declaring supporting types

- [Publishers.Catch.Output](/documentation/combine/publishers/catch/output)
- [Publishers.Catch.Failure](/documentation/combine/publishers/catch/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/catch/upstream)
- [let handler: (Upstream.Failure) -> NewPublisher](/documentation/combine/publishers/catch/handler)
- [Publishers.TryCatch](/documentation/combine/publishers/trycatch)

#### Creating a try-catch publisher

- [init(upstream: Upstream, handler: (Upstream.Failure) throws -> NewPublisher)](/documentation/combine/publishers/trycatch/init(upstream:handler:))

#### Declaring supporting types

- [Publishers.TryCatch.Output](/documentation/combine/publishers/trycatch/output)
- [Publishers.TryCatch.Failure](/documentation/combine/publishers/trycatch/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/trycatch/upstream)
- [let handler: (Upstream.Failure) throws -> NewPublisher](/documentation/combine/publishers/trycatch/handler)
- [Publishers.Retry](/documentation/combine/publishers/retry)

#### Creating a retry publisher

- [init(upstream: Upstream, retries: Int?)](/documentation/combine/publishers/retry/init(upstream:retries:))

#### Declaring supporting types

- [Publishers.Retry.Output](/documentation/combine/publishers/retry/output)
- [Publishers.Retry.Failure](/documentation/combine/publishers/retry/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/retry/upstream)
- [let retries: Int?](/documentation/combine/publishers/retry/retries)

#### Comparing publishers

- [static func == (Publishers.Retry<Upstream>, Publishers.Retry<Upstream>) -> Bool](/documentation/combine/publishers/retry/==(_:_:))

#### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/retry/equatable-implementations)

##### Operators

- [static func == (Publishers.Retry<Upstream>, Publishers.Retry<Upstream>) -> Bool](/documentation/combine/publishers/retry/==(_:_:))

### Controlling timing

- [Publishers.MeasureInterval](/documentation/combine/publishers/measureinterval)

#### Creating a measure interval publisher

- [init(upstream: Upstream, scheduler: Context)](/documentation/combine/publishers/measureinterval/init(upstream:scheduler:))

#### Declaring supporting types

- [Publishers.MeasureInterval.Output](/documentation/combine/publishers/measureinterval/output)
- [Publishers.MeasureInterval.Failure](/documentation/combine/publishers/measureinterval/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/measureinterval/upstream)
- [let scheduler: Context](/documentation/combine/publishers/measureinterval/scheduler)
- [Publishers.Debounce](/documentation/combine/publishers/debounce)

#### Creating a debounce publisher

- [init(upstream: Upstream, dueTime: Context.SchedulerTimeType.Stride, scheduler: Context, options: Context.SchedulerOptions?)](/documentation/combine/publishers/debounce/init(upstream:duetime:scheduler:options:))

#### Declaring supporting types

- [Publishers.Debounce.Output](/documentation/combine/publishers/debounce/output)
- [Publishers.Debounce.Failure](/documentation/combine/publishers/debounce/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/debounce/upstream)
- [let dueTime: Context.SchedulerTimeType.Stride](/documentation/combine/publishers/debounce/duetime)
- [let scheduler: Context](/documentation/combine/publishers/debounce/scheduler)
- [let options: Context.SchedulerOptions?](/documentation/combine/publishers/debounce/options)
- [Publishers.Delay](/documentation/combine/publishers/delay)

#### Creating a delay publisher

- [init(upstream: Upstream, interval: Context.SchedulerTimeType.Stride, tolerance: Context.SchedulerTimeType.Stride, scheduler: Context, options: Context.SchedulerOptions?)](/documentation/combine/publishers/delay/init(upstream:interval:tolerance:scheduler:options:))

#### Declaring supporting types

- [Publishers.Delay.Output](/documentation/combine/publishers/delay/output)
- [Publishers.Delay.Failure](/documentation/combine/publishers/delay/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/delay/upstream)
- [let interval: Context.SchedulerTimeType.Stride](/documentation/combine/publishers/delay/interval)
- [let tolerance: Context.SchedulerTimeType.Stride](/documentation/combine/publishers/delay/tolerance)
- [let scheduler: Context](/documentation/combine/publishers/delay/scheduler)
- [let options: Context.SchedulerOptions?](/documentation/combine/publishers/delay/options)
- [Publishers.Throttle](/documentation/combine/publishers/throttle)

#### Creating a throttle publisher

- [init(upstream: Upstream, interval: Context.SchedulerTimeType.Stride, scheduler: Context, latest: Bool)](/documentation/combine/publishers/throttle/init(upstream:interval:scheduler:latest:))

#### Declaring supporting types

- [Publishers.Throttle.Output](/documentation/combine/publishers/throttle/output)
- [Publishers.Throttle.Failure](/documentation/combine/publishers/throttle/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/throttle/upstream)
- [let interval: Context.SchedulerTimeType.Stride](/documentation/combine/publishers/throttle/interval)
- [let scheduler: Context](/documentation/combine/publishers/throttle/scheduler)
- [let latest: Bool](/documentation/combine/publishers/throttle/latest)
- [Publishers.Timeout](/documentation/combine/publishers/timeout)

#### Creating a timeout publisher

- [init(upstream: Upstream, interval: Context.SchedulerTimeType.Stride, scheduler: Context, options: Context.SchedulerOptions?, customError: (() -> Publishers.Timeout<Upstream, Context>.Failure)?)](/documentation/combine/publishers/timeout/init(upstream:interval:scheduler:options:customerror:))

#### Declaring supporting types

- [Publishers.Timeout.Output](/documentation/combine/publishers/timeout/output)
- [Publishers.Timeout.Failure](/documentation/combine/publishers/timeout/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/timeout/upstream)
- [let interval: Context.SchedulerTimeType.Stride](/documentation/combine/publishers/timeout/interval)
- [let scheduler: Context](/documentation/combine/publishers/timeout/scheduler)
- [let options: Context.SchedulerOptions?](/documentation/combine/publishers/timeout/options)
- [let customError: (() -> Publishers.Timeout<Upstream, Context>.Failure)?](/documentation/combine/publishers/timeout/customerror)

### Encoding and decoding

- [Publishers.Decode](/documentation/combine/publishers/decode)

#### Creating a decode publisher

- [init(upstream: Upstream, decoder: Coder)](/documentation/combine/publishers/decode/init(upstream:decoder:))

#### Declaring supporting types

- [Publishers.Output](/documentation/combine/publishers/output)

##### Creating an output publisher

- [init(upstream: Upstream, range: CountableRange<Int>)](/documentation/combine/publishers/output/init(upstream:range:))

##### Declaring supporting types

- [Publishers.Output.Output](/documentation/combine/publishers/output/output)
- [Publishers.Output.Failure](/documentation/combine/publishers/output/failure)

##### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/output/upstream)
- [let range: CountableRange<Int>](/documentation/combine/publishers/output/range)

##### Comparing publishers

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

##### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/output/equatable-implementations)

###### Operators

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))
- [Publishers.Decode.Failure](/documentation/combine/publishers/decode/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/decode/upstream)
- [Publishers.Encode](/documentation/combine/publishers/encode)

#### Creating a encode publisher

- [init(upstream: Upstream, encoder: Coder)](/documentation/combine/publishers/encode/init(upstream:encoder:))

#### Declaring supporting types

- [Publishers.Encode.Output](/documentation/combine/publishers/encode/output)
- [Publishers.Encode.Failure](/documentation/combine/publishers/encode/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/encode/upstream)

### Identifying properties with key paths

- [Publishers.MapKeyPath](/documentation/combine/publishers/mapkeypath)

#### Declaring supporting types

- [Publishers.Output](/documentation/combine/publishers/output)

##### Creating an output publisher

- [init(upstream: Upstream, range: CountableRange<Int>)](/documentation/combine/publishers/output/init(upstream:range:))

##### Declaring supporting types

- [Publishers.Output.Output](/documentation/combine/publishers/output/output)
- [Publishers.Output.Failure](/documentation/combine/publishers/output/failure)

##### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/output/upstream)
- [let range: CountableRange<Int>](/documentation/combine/publishers/output/range)

##### Comparing publishers

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))

##### Default Implementations

- [Equatable Implementations](/documentation/combine/publishers/output/equatable-implementations)

###### Operators

- [static func == (Publishers.Output<Upstream>, Publishers.Output<Upstream>) -> Bool](/documentation/combine/publishers/output/==(_:_:))
- [Publishers.MapKeyPath.Failure](/documentation/combine/publishers/mapkeypath/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/mapkeypath/upstream)
- [let keyPath: KeyPath<Upstream.Output, Output>](/documentation/combine/publishers/mapkeypath/keypath)
- [Publishers.MapKeyPath2](/documentation/combine/publishers/mapkeypath2)

#### Declaring supporting types

- [Publishers.MapKeyPath2.Output](/documentation/combine/publishers/mapkeypath2/output)
- [Publishers.MapKeyPath2.Failure](/documentation/combine/publishers/mapkeypath2/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/mapkeypath2/upstream)
- [let keyPath0: KeyPath<Upstream.Output, Output0>](/documentation/combine/publishers/mapkeypath2/keypath0)
- [let keyPath1: KeyPath<Upstream.Output, Output1>](/documentation/combine/publishers/mapkeypath2/keypath1)
- [Publishers.MapKeyPath3](/documentation/combine/publishers/mapkeypath3)

#### Declaring supporting types

- [Publishers.MapKeyPath3.Output](/documentation/combine/publishers/mapkeypath3/output)
- [Publishers.MapKeyPath3.Failure](/documentation/combine/publishers/mapkeypath3/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/mapkeypath3/upstream)
- [let keyPath0: KeyPath<Upstream.Output, Output0>](/documentation/combine/publishers/mapkeypath3/keypath0)
- [let keyPath1: KeyPath<Upstream.Output, Output1>](/documentation/combine/publishers/mapkeypath3/keypath1)
- [let keyPath2: KeyPath<Upstream.Output, Output2>](/documentation/combine/publishers/mapkeypath3/keypath2)

### Working with multiple subscribers

- [Publishers.Multicast](/documentation/combine/publishers/multicast)

#### Creating a multicast publisher

- [init(upstream: Upstream, createSubject: () -> SubjectType)](/documentation/combine/publishers/multicast/init(upstream:createsubject:))

#### Declaring supporting types

- [Publishers.Multicast.Output](/documentation/combine/publishers/multicast/output)
- [Publishers.Multicast.Failure](/documentation/combine/publishers/multicast/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/multicast/upstream)
- [let createSubject: () -> SubjectType](/documentation/combine/publishers/multicast/createsubject)
- [Publishers.Share](/documentation/combine/publishers/share)

#### Creating a share publisher

- [init(upstream: Upstream)](/documentation/combine/publishers/share/init(upstream:))

#### Declaring supporting types

- [Publishers.Share.Output](/documentation/combine/publishers/share/output)
- [Publishers.Share.Failure](/documentation/combine/publishers/share/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/share/upstream)

#### Comparing publishers

- [static func == (Publishers.Share<Upstream>, Publishers.Share<Upstream>) -> Bool](/documentation/combine/publishers/share/==(_:_:))

### Buffering elements

- [Publishers.Buffer](/documentation/combine/publishers/buffer)

#### Creating a buffer publisher

- [init(upstream: Upstream, size: Int, prefetch: Publishers.PrefetchStrategy, whenFull: Publishers.BufferingStrategy<Publishers.Buffer<Upstream>.Failure>)](/documentation/combine/publishers/buffer/init(upstream:size:prefetch:whenfull:))

#### Declaring supporting types

- [Publishers.Buffer.Output](/documentation/combine/publishers/buffer/output)
- [Publishers.Buffer.Failure](/documentation/combine/publishers/buffer/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/buffer/upstream)
- [let size: Int](/documentation/combine/publishers/buffer/size)
- [let prefetch: Publishers.PrefetchStrategy](/documentation/combine/publishers/buffer/prefetch)
- [let whenFull: Publishers.BufferingStrategy<Publishers.Buffer<Upstream>.Failure>](/documentation/combine/publishers/buffer/whenfull)
- [Publishers.BufferingStrategy](/documentation/combine/publishers/bufferingstrategy)

#### Buffering strategies

- [case dropNewest](/documentation/combine/publishers/bufferingstrategy/dropnewest)
- [case dropOldest](/documentation/combine/publishers/bufferingstrategy/dropoldest)
- [case customError(() -> Failure)](/documentation/combine/publishers/bufferingstrategy/customerror(_:))
- [Publishers.PrefetchStrategy](/documentation/combine/publishers/prefetchstrategy)

#### Prefetching strategies

- [case byRequest](/documentation/combine/publishers/prefetchstrategy/byrequest)
- [case keepFull](/documentation/combine/publishers/prefetchstrategy/keepfull)

### Using explicit publisher connections

- [Publishers.Autoconnect](/documentation/combine/publishers/autoconnect)

#### Creating an autoconnect publisher

- [init(upstream: Upstream)](/documentation/combine/publishers/autoconnect/init(upstream:))

#### Declaring supporting types

- [Publishers.Autoconnect.Output](/documentation/combine/publishers/autoconnect/output)
- [Publishers.Autoconnect.Failure](/documentation/combine/publishers/autoconnect/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/autoconnect/upstream)
- [Publishers.MakeConnectable](/documentation/combine/publishers/makeconnectable)

#### Creating a connectable publisher

- [init(upstream: Upstream)](/documentation/combine/publishers/makeconnectable/init(upstream:))

#### Declaring supporting types

- [Publishers.MakeConnectable.Output](/documentation/combine/publishers/makeconnectable/output)
- [Publishers.MakeConnectable.Failure](/documentation/combine/publishers/makeconnectable/failure)

### Debugging

- [Publishers.Breakpoint](/documentation/combine/publishers/breakpoint)

#### Creating a breakpoint publisher

- [init(upstream: Upstream, receiveSubscription: ((any Subscription) -> Bool)?, receiveOutput: ((Upstream.Output) -> Bool)?, receiveCompletion: ((Subscribers.Completion<Publishers.Breakpoint<Upstream>.Failure>) -> Bool)?)](/documentation/combine/publishers/breakpoint/init(upstream:receivesubscription:receiveoutput:receivecompletion:))

#### Declaring supporting types

- [Publishers.Breakpoint.Output](/documentation/combine/publishers/breakpoint/output)
- [Publishers.Breakpoint.Failure](/documentation/combine/publishers/breakpoint/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/breakpoint/upstream)
- [let receiveSubscription: ((any Subscription) -> Bool)?](/documentation/combine/publishers/breakpoint/receivesubscription)
- [let receiveOutput: ((Upstream.Output) -> Bool)?](/documentation/combine/publishers/breakpoint/receiveoutput)
- [let receiveCompletion: ((Subscribers.Completion<Publishers.Breakpoint<Upstream>.Failure>) -> Bool)?](/documentation/combine/publishers/breakpoint/receivecompletion)
- [Publishers.HandleEvents](/documentation/combine/publishers/handleevents)

#### Creating an event-handling publisher

- [init(upstream: Upstream, receiveSubscription: ((any Subscription) -> Void)?, receiveOutput: ((Publishers.HandleEvents<Upstream>.Output) -> Void)?, receiveCompletion: ((Subscribers.Completion<Publishers.HandleEvents<Upstream>.Failure>) -> Void)?, receiveCancel: (() -> Void)?, receiveRequest: ((Subscribers.Demand) -> Void)?)](/documentation/combine/publishers/handleevents/init(upstream:receivesubscription:receiveoutput:receivecompletion:receivecancel:receiverequest:))

#### Declaring supporting types

- [Publishers.HandleEvents.Output](/documentation/combine/publishers/handleevents/output)
- [Publishers.HandleEvents.Failure](/documentation/combine/publishers/handleevents/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/handleevents/upstream)
- [var receiveSubscription: ((any Subscription) -> Void)?](/documentation/combine/publishers/handleevents/receivesubscription)
- [var receiveOutput: ((Publishers.HandleEvents<Upstream>.Output) -> Void)?](/documentation/combine/publishers/handleevents/receiveoutput)
- [var receiveCompletion: ((Subscribers.Completion<Publishers.HandleEvents<Upstream>.Failure>) -> Void)?](/documentation/combine/publishers/handleevents/receivecompletion)
- [var receiveCancel: (() -> Void)?](/documentation/combine/publishers/handleevents/receivecancel)
- [var receiveRequest: ((Subscribers.Demand) -> Void)?](/documentation/combine/publishers/handleevents/receiverequest)
- [Publishers.Print](/documentation/combine/publishers/print)

#### Creating a print publisher

- [init(upstream: Upstream, prefix: String, to: (any TextOutputStream)?)](/documentation/combine/publishers/print/init(upstream:prefix:to:))

#### Declaring supporting types

- [Publishers.Print.Output](/documentation/combine/publishers/print/output)
- [Publishers.Print.Failure](/documentation/combine/publishers/print/failure)

#### Inspecting publisher properties

- [let upstream: Upstream](/documentation/combine/publishers/print/upstream)
- [let prefix: String](/documentation/combine/publishers/print/prefix)
- [let stream: (any TextOutputStream)?](/documentation/combine/publishers/print/stream)
- [AnyPublisher](/documentation/combine/anypublisher)

### Creating a type-erased publisher

- [init<P>(P)](/documentation/combine/anypublisher/init(_:))
- [Published](/documentation/combine/published)

### Creating a published instance

- [init(initialValue: Value)](/documentation/combine/published/init(initialvalue:))
- [init(wrappedValue: Value)](/documentation/combine/published/init(wrappedvalue:))

### Publishing the value

- [var projectedValue: Published<Value>.Publisher](/documentation/combine/published/projectedvalue)
- [Published.Publisher](/documentation/combine/published/publisher)
- [Cancellable](/documentation/combine/cancellable)

### Canceling actions

- [func cancel()](/documentation/combine/cancellable/cancel())

### Storing instances

- [func store<C>(in: inout C)](/documentation/combine/cancellable/store(in:)-35vnt)
- [func store(in: inout Set<AnyCancellable>)](/documentation/combine/cancellable/store(in:)-95sfl)

### Instance Methods

- [func storeWhileEntityActive(Entity)](/documentation/combine/cancellable/storewhileentityactive(_:))
- [AnyCancellable](/documentation/combine/anycancellable)

### Creating a type-erased cancellable

- [init(() -> Void)](/documentation/combine/anycancellable/init(_:)-3icn3)
- [init<C>(C)](/documentation/combine/anycancellable/init(_:)-48fh3)

### Storing instances

- [func store<C>(in: inout C)](/documentation/combine/anycancellable/store(in:)-6cr9i)
- [func store(in: inout Set<AnyCancellable>)](/documentation/combine/anycancellable/store(in:)-3hyxs)

### Operators

- [static func == (AnyCancellable, AnyCancellable) -> Bool](/documentation/combine/anycancellable/==(_:_:))

## Convenience Publishers

- [Future](/documentation/combine/future)

### Creating a future

- [init((Future<Output, Failure>.Promise) -> Void)](/documentation/combine/future/init(_:))
- [Future.Promise](/documentation/combine/future/promise)

### Accessing the value asynchronously

- [var value: Output](/documentation/combine/future/value-9iwjz)
- [var value: Output](/documentation/combine/future/value-5iprp)
- [Just](/documentation/combine/just)

### Creating a just ublisher

- [init(Output)](/documentation/combine/just/init(_:))

### Inspecting publisher properties

- [let output: Output](/documentation/combine/just/output)

### Comparing publishers

- [static func == (Just<Output>, Just<Output>) -> Bool](/documentation/combine/just/==(_:_:))

### Applying operators

- [Publisher Operators](/documentation/combine/just-publisher-operators)

#### Mapping elements

- [func map<T>((Output) -> T) -> Just<T>](/documentation/combine/just/map(_:))
- [func tryMap<T>((Output) throws -> T) -> Result<T, any Error>.Publisher](/documentation/combine/just/trymap(_:))
- [func mapError<E>((Just<Output>.Failure) -> E) -> Result<Output, E>.Publisher](/documentation/combine/just/maperror(_:))
- [func scan<T>(T, (T, Output) -> T) -> Result<T, Just<Output>.Failure>.Publisher](/documentation/combine/just/scan(_:_:))
- [func tryScan<T>(T, (T, Output) throws -> T) -> Result<T, any Error>.Publisher](/documentation/combine/just/tryscan(_:_:))
- [func setFailureType<E>(to: E.Type) -> Result<Output, E>.Publisher](/documentation/combine/just/setfailuretype(to:))

#### Filtering elements

- [func filter((Output) -> Bool) -> Optional<Output>.Publisher](/documentation/combine/just/filter(_:))
- [func compactMap<T>((Output) -> T?) -> Optional<T>.Publisher](/documentation/combine/just/compactmap(_:))
- [func removeDuplicates() -> Just<Output>](/documentation/combine/just/removeduplicates())
- [func removeDuplicates(by: (Output, Output) -> Bool) -> Just<Output>](/documentation/combine/just/removeduplicates(by:))
- [func tryRemoveDuplicates(by: (Output, Output) throws -> Bool) -> Result<Output, any Error>.Publisher](/documentation/combine/just/tryremoveduplicates(by:))
- [func replaceEmpty(with: Output) -> Just<Output>](/documentation/combine/just/replaceempty(with:))
- [func replaceError(with: Output) -> Just<Output>](/documentation/combine/just/replaceerror(with:))

#### Reducing elements

- [func collect() -> Just<[Output]>](/documentation/combine/just/collect())
- [func ignoreOutput() -> Empty<Output, Just<Output>.Failure>](/documentation/combine/just/ignoreoutput())
- [func reduce<T>(T, (T, Output) -> T) -> Result<T, Just<Output>.Failure>.Publisher](/documentation/combine/just/reduce(_:_:))
- [func tryReduce<T>(T, (T, Output) throws -> T) -> Result<T, any Error>.Publisher](/documentation/combine/just/tryreduce(_:_:))

#### Applying mathematical operations on elements

- [func count() -> Just<Int>](/documentation/combine/just/count())
- [func max() -> Just<Output>](/documentation/combine/just/max())
- [func max(by: (Output, Output) -> Bool) -> Just<Output>](/documentation/combine/just/max(by:))
- [func min() -> Just<Output>](/documentation/combine/just/min())
- [func min(by: (Output, Output) -> Bool) -> Just<Output>](/documentation/combine/just/min(by:))

#### Applying matching criteria to elements

- [func contains(Output) -> Just<Bool>](/documentation/combine/just/contains(_:))
- [func contains(where: (Output) -> Bool) -> Just<Bool>](/documentation/combine/just/contains(where:))
- [func tryContains(where: (Output) throws -> Bool) -> Result<Bool, any Error>.Publisher](/documentation/combine/just/trycontains(where:))
- [func allSatisfy((Output) -> Bool) -> Just<Bool>](/documentation/combine/just/allsatisfy(_:))
- [func tryAllSatisfy((Output) throws -> Bool) -> Result<Bool, any Error>.Publisher](/documentation/combine/just/tryallsatisfy(_:))

#### Applying sequence operations to elements

- [func dropFirst(Int) -> Optional<Output>.Publisher](/documentation/combine/just/dropfirst(_:))
- [func drop(while: (Output) -> Bool) -> Optional<Output>.Publisher](/documentation/combine/just/drop(while:))
- [func append(Output...) -> Publishers.Sequence<[Output], Just<Output>.Failure>](/documentation/combine/just/append(_:)-7eyqj)
- [func append<S>(S) -> Publishers.Sequence<[Output], Just<Output>.Failure>](/documentation/combine/just/append(_:)-7sxlu)
- [func prepend<S>(S) -> Publishers.Sequence<[Output], Just<Output>.Failure>](/documentation/combine/just/prepend(_:)-39e57)
- [func prepend(Output...) -> Publishers.Sequence<[Output], Just<Output>.Failure>](/documentation/combine/just/prepend(_:)-7fg73)
- [func prefix(Int) -> Optional<Output>.Publisher](/documentation/combine/just/prefix(_:))
- [func prefix(while: (Output) -> Bool) -> Optional<Output>.Publisher](/documentation/combine/just/prefix(while:))

#### Selecting specific elements

- [func first() -> Just<Output>](/documentation/combine/just/first())
- [func first(where: (Output) -> Bool) -> Optional<Output>.Publisher](/documentation/combine/just/first(where:))
- [func last() -> Just<Output>](/documentation/combine/just/last())
- [func last(where: (Output) -> Bool) -> Optional<Output>.Publisher](/documentation/combine/just/last(where:))
- [func output(at: Int) -> Optional<Output>.Publisher](/documentation/combine/just/output(at:))
- [func output<R>(in: R) -> Optional<Output>.Publisher](/documentation/combine/just/output(in:))

#### Handling errors

- [func retry(Int) -> Just<Output>](/documentation/combine/just/retry(_:))

### Default Implementations

- [Equatable Implementations](/documentation/combine/just/equatable-implementations)

#### Operators

- [static func == (Just<Output>, Just<Output>) -> Bool](/documentation/combine/just/==(_:_:))
- [Deferred](/documentation/combine/deferred)

### Creating a deferred publisher

- [init(createPublisher: () -> DeferredPublisher)](/documentation/combine/deferred/init(createpublisher:))

### Declaring supporting types

- [Deferred.Output](/documentation/combine/deferred/output)
- [Deferred.Failure](/documentation/combine/deferred/failure)

### Inspecting publisher properties

- [let createPublisher: () -> DeferredPublisher](/documentation/combine/deferred/createpublisher)
- [Empty](/documentation/combine/empty)

### Creating an empty publisher

- [init(completeImmediately: Bool)](/documentation/combine/empty/init(completeimmediately:))
- [init(completeImmediately: Bool, outputType: Output.Type, failureType: Failure.Type)](/documentation/combine/empty/init(completeimmediately:outputtype:failuretype:))

### Inspecting publisher properties

- [let completeImmediately: Bool](/documentation/combine/empty/completeimmediately)

### Comparing publishers

- [static func == (Empty<Output, Failure>, Empty<Output, Failure>) -> Bool](/documentation/combine/empty/==(_:_:))
- [Fail](/documentation/combine/fail)

### Creating a fail publisher

- [init(error: Failure)](/documentation/combine/fail/init(error:))
- [init(outputType: Output.Type, failure: Failure)](/documentation/combine/fail/init(outputtype:failure:))

### Inspecting publisher properties

- [let error: Failure](/documentation/combine/fail/error)

### Comparing publishers

- [static func == (Fail<Output, Failure>, Fail<Output, Failure>) -> Bool](/documentation/combine/fail/==(_:_:))

### Default Implementations

- [Equatable Implementations](/documentation/combine/fail/equatable-implementations)

#### Operators

- [static func == (Fail<Output, Failure>, Fail<Output, Failure>) -> Bool](/documentation/combine/fail/==(_:_:))
- [Record](/documentation/combine/record)

### Creating a record publisher

- [init(output: [Output], completion: Subscribers.Completion<Failure>)](/documentation/combine/record/init(output:completion:))
- [init(record: (inout Record<Output, Failure>.Recording) -> Void)](/documentation/combine/record/init(record:))
- [init(recording: Record<Output, Failure>.Recording)](/documentation/combine/record/init(recording:))

### Inspecting publisher properties

- [let recording: Record<Output, Failure>.Recording](/documentation/combine/record/recording-swift.property)
- [Record.Recording](/documentation/combine/record/recording-swift.struct)

#### Creating a recording

- [init()](/documentation/combine/record/recording-swift.struct/init())
- [init(output: [Output], completion: Subscribers.Completion<Failure>)](/documentation/combine/record/recording-swift.struct/init(output:completion:))

#### Receiving elements

- [func receive(Record<Output, Failure>.Recording.Input)](/documentation/combine/record/recording-swift.struct/receive(_:))

#### Receiving life cycle events

- [func receive(completion: Subscribers.Completion<Failure>)](/documentation/combine/record/recording-swift.struct/receive(completion:))

#### Encoding

- [func encode(into: any Encoder) throws](/documentation/combine/record/recording-swift.struct/encode(into:))

#### Inspecting publisher properties

- [var output: [Output]](/documentation/combine/record/recording-swift.struct/output)
- [var completion: Subscribers.Completion<Failure>](/documentation/combine/record/recording-swift.struct/completion)

#### Declaring supporting types

- [Record.Recording.Input](/documentation/combine/record/recording-swift.struct/input)

## Connectable Publishers

- [Controlling Publishing with Connectable Publishers](/documentation/combine/controlling-publishing-with-connectable-publishers)
- [ConnectablePublisher](/documentation/combine/connectablepublisher)

### Performing explicit connections

- [func connect() -> any Cancellable](/documentation/combine/connectablepublisher/connect())

### Connecting automatically

- [func autoconnect() -> Publishers.Autoconnect<Self>](/documentation/combine/connectablepublisher/autoconnect())

## Subscribers

- [Processing Published Elements with Subscribers](/documentation/combine/processing-published-elements-with-subscribers)
- [Subscriber](/documentation/combine/subscriber)

### Declaring supporting types

- [Input](/documentation/combine/subscriber/input)
- [Failure](/documentation/combine/subscriber/failure)

### Receiving elements

- [func receive(Self.Input) -> Subscribers.Demand](/documentation/combine/subscriber/receive(_:))
- [func receive() -> Subscribers.Demand](/documentation/combine/subscriber/receive())

### Receiving life cycle events

- [func receive(subscription: any Subscription)](/documentation/combine/subscriber/receive(subscription:))
- [func receive(completion: Subscribers.Completion<Self.Failure>)](/documentation/combine/subscriber/receive(completion:))
- [Subscribers.Completion](/documentation/combine/subscribers/completion)

#### Completion states

- [case finished](/documentation/combine/subscribers/completion/finished)
- [case failure(Failure)](/documentation/combine/subscribers/completion/failure(_:))
- [Subscribers](/documentation/combine/subscribers)

### Requesting elements

- [Subscribers.Demand](/documentation/combine/subscribers/demand)

#### Creating a demand instance

- [static func max(Int) -> Subscribers.Demand](/documentation/combine/subscribers/demand/max(_:))

#### Using special demands

- [static let unlimited: Subscribers.Demand](/documentation/combine/subscribers/demand/unlimited)
- [static let none: Subscribers.Demand](/documentation/combine/subscribers/demand/none)

#### Inspecing demand properties

- [var max: Int?](/documentation/combine/subscribers/demand/max)

#### Encoding and decoding

- [func encode(to: any Encoder) throws](/documentation/combine/subscribers/demand/encode(to:))
- [init(from: any Decoder) throws](/documentation/combine/subscribers/demand/init(from:))

#### Performing mathematical operations

- [static func * (Subscribers.Demand, Int) -> Subscribers.Demand](/documentation/combine/subscribers/demand/*(_:_:))
- [static func *= (inout Subscribers.Demand, Int)](/documentation/combine/subscribers/demand/*=(_:_:))
- [static func + (Subscribers.Demand, Subscribers.Demand) -> Subscribers.Demand](/documentation/combine/subscribers/demand/+(_:_:)-2hdad)
- [static func + (Subscribers.Demand, Int) -> Subscribers.Demand](/documentation/combine/subscribers/demand/+(_:_:)-902we)
- [static func += (inout Subscribers.Demand, Subscribers.Demand)](/documentation/combine/subscribers/demand/+=(_:_:)-20lis)
- [static func += (inout Subscribers.Demand, Int)](/documentation/combine/subscribers/demand/+=(_:_:)-3k1hv)
- [static func - (Subscribers.Demand, Subscribers.Demand) -> Subscribers.Demand](/documentation/combine/subscribers/demand/-(_:_:)-1r0gm)
- [static func - (Subscribers.Demand, Int) -> Subscribers.Demand](/documentation/combine/subscribers/demand/-(_:_:)-6mw4s)
- [static func -= (inout Subscribers.Demand, Subscribers.Demand)](/documentation/combine/subscribers/demand/-=(_:_:)-1d0m9)
- [static func -= (inout Subscribers.Demand, Int)](/documentation/combine/subscribers/demand/-=(_:_:)-9pwnc)

#### Comparing demands

- [static func == (Int, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/==(_:_:)-4oy8i)
- [static func == (Subscribers.Demand, Int) -> Bool](/documentation/combine/subscribers/demand/==(_:_:)-7246z)
- [static func != (Int, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/!=(_:_:)-3j2h8)
- [static func != (Subscribers.Demand, Int) -> Bool](/documentation/combine/subscribers/demand/!=(_:_:)-2dj1p)
- [static func < (Int, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_(_:_:)-1wuod)
- [static func < (Subscribers.Demand, Int) -> Bool](/documentation/combine/subscribers/demand/_(_:_:)-ciby)
- [static func < (Subscribers.Demand, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_(_:_:)-8nf1g)
- [static func <= (Int, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_=(_:_:)-5f62z)
- [static func <= (Subscribers.Demand, Int) -> Bool](/documentation/combine/subscribers/demand/_=(_:_:)-2otvi)
- [static func <= (Subscribers.Demand, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_=(_:_:)-9cywv)
- [static func > (Int, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_(_:_:)-35p6f)
- [static func > (Subscribers.Demand, Int) -> Bool](/documentation/combine/subscribers/demand/_(_:_:)-4k1xp)
- [static func > (Subscribers.Demand, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_(_:_:)-74yle)
- [static func >= (Int, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_=(_:_:)-6lv9s)
- [static func >= (Subscribers.Demand, Int) -> Bool](/documentation/combine/subscribers/demand/_=(_:_:)-28c1e)
- [static func >= (Subscribers.Demand, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_=(_:_:)-5xnt)

### Receiving life cycle events

- [Subscribers.Completion](/documentation/combine/subscribers/completion)

#### Completion states

- [case finished](/documentation/combine/subscribers/completion/finished)
- [case failure(Failure)](/documentation/combine/subscribers/completion/failure(_:))

### Using convenience subscribers

- [Subscribers.Sink](/documentation/combine/subscribers/sink)

#### Creating a sink subscriber

- [init(receiveCompletion: (Subscribers.Completion<Failure>) -> Void, receiveValue: (Input) -> Void)](/documentation/combine/subscribers/sink/init(receivecompletion:receivevalue:))

#### Inspecting subscriber properties

- [var receiveValue: (Input) -> Void](/documentation/combine/subscribers/sink/receivevalue)
- [var receiveCompletion: (Subscribers.Completion<Failure>) -> Void](/documentation/combine/subscribers/sink/receivecompletion)
- [Subscribers.Assign](/documentation/combine/subscribers/assign)

#### Creating an assign subscriber

- [init(object: Root, keyPath: ReferenceWritableKeyPath<Root, Input>)](/documentation/combine/subscribers/assign/init(object:keypath:))

#### Receiving elements

- [func receive(Input) -> Subscribers.Demand](/documentation/combine/subscribers/assign/receive(_:))

#### Receiving life cycle events

- [func receive(subscription: any Subscription)](/documentation/combine/subscribers/assign/receive(subscription:))
- [func receive(completion: Subscribers.Completion<Never>)](/documentation/combine/subscribers/assign/receive(completion:))

#### Inspecting the assigned property

- [var object: Root?](/documentation/combine/subscribers/assign/object)
- [let keyPath: ReferenceWritableKeyPath<Root, Input>](/documentation/combine/subscribers/assign/keypath)

#### Supporting Debugging

- [var customMirror: Mirror](/documentation/combine/subscribers/assign/custommirror)
- [var description: String](/documentation/combine/subscribers/assign/description)
- [var playgroundDescription: Any](/documentation/combine/subscribers/assign/playgrounddescription)

#### Instance Methods

- [func cancel()](/documentation/combine/subscribers/assign/cancel())
- [AnySubscriber](/documentation/combine/anysubscriber)

### Creating a type-erased subscriber

- [init<S>(S)](/documentation/combine/anysubscriber/init(_:)-2dbfs)
- [init<S>(S)](/documentation/combine/anysubscriber/init(_:)-3t3eh)
- [init(receiveSubscription: ((any Subscription) -> Void)?, receiveValue: ((Input) -> Subscribers.Demand)?, receiveCompletion: ((Subscribers.Completion<Failure>) -> Void)?)](/documentation/combine/anysubscriber/init(receivesubscription:receivevalue:receivecompletion:))
- [Subscription](/documentation/combine/subscription)

### Requesting elements

- [func request(Subscribers.Demand)](/documentation/combine/subscription/request(_:))
- [Subscribers.Demand](/documentation/combine/subscribers/demand)

#### Creating a demand instance

- [static func max(Int) -> Subscribers.Demand](/documentation/combine/subscribers/demand/max(_:))

#### Using special demands

- [static let unlimited: Subscribers.Demand](/documentation/combine/subscribers/demand/unlimited)
- [static let none: Subscribers.Demand](/documentation/combine/subscribers/demand/none)

#### Inspecing demand properties

- [var max: Int?](/documentation/combine/subscribers/demand/max)

#### Encoding and decoding

- [func encode(to: any Encoder) throws](/documentation/combine/subscribers/demand/encode(to:))
- [init(from: any Decoder) throws](/documentation/combine/subscribers/demand/init(from:))

#### Performing mathematical operations

- [static func * (Subscribers.Demand, Int) -> Subscribers.Demand](/documentation/combine/subscribers/demand/*(_:_:))
- [static func *= (inout Subscribers.Demand, Int)](/documentation/combine/subscribers/demand/*=(_:_:))
- [static func + (Subscribers.Demand, Subscribers.Demand) -> Subscribers.Demand](/documentation/combine/subscribers/demand/+(_:_:)-2hdad)
- [static func + (Subscribers.Demand, Int) -> Subscribers.Demand](/documentation/combine/subscribers/demand/+(_:_:)-902we)
- [static func += (inout Subscribers.Demand, Subscribers.Demand)](/documentation/combine/subscribers/demand/+=(_:_:)-20lis)
- [static func += (inout Subscribers.Demand, Int)](/documentation/combine/subscribers/demand/+=(_:_:)-3k1hv)
- [static func - (Subscribers.Demand, Subscribers.Demand) -> Subscribers.Demand](/documentation/combine/subscribers/demand/-(_:_:)-1r0gm)
- [static func - (Subscribers.Demand, Int) -> Subscribers.Demand](/documentation/combine/subscribers/demand/-(_:_:)-6mw4s)
- [static func -= (inout Subscribers.Demand, Subscribers.Demand)](/documentation/combine/subscribers/demand/-=(_:_:)-1d0m9)
- [static func -= (inout Subscribers.Demand, Int)](/documentation/combine/subscribers/demand/-=(_:_:)-9pwnc)

#### Comparing demands

- [static func == (Int, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/==(_:_:)-4oy8i)
- [static func == (Subscribers.Demand, Int) -> Bool](/documentation/combine/subscribers/demand/==(_:_:)-7246z)
- [static func != (Int, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/!=(_:_:)-3j2h8)
- [static func != (Subscribers.Demand, Int) -> Bool](/documentation/combine/subscribers/demand/!=(_:_:)-2dj1p)
- [static func < (Int, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_(_:_:)-1wuod)
- [static func < (Subscribers.Demand, Int) -> Bool](/documentation/combine/subscribers/demand/_(_:_:)-ciby)
- [static func < (Subscribers.Demand, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_(_:_:)-8nf1g)
- [static func <= (Int, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_=(_:_:)-5f62z)
- [static func <= (Subscribers.Demand, Int) -> Bool](/documentation/combine/subscribers/demand/_=(_:_:)-2otvi)
- [static func <= (Subscribers.Demand, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_=(_:_:)-9cywv)
- [static func > (Int, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_(_:_:)-35p6f)
- [static func > (Subscribers.Demand, Int) -> Bool](/documentation/combine/subscribers/demand/_(_:_:)-4k1xp)
- [static func > (Subscribers.Demand, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_(_:_:)-74yle)
- [static func >= (Int, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_=(_:_:)-6lv9s)
- [static func >= (Subscribers.Demand, Int) -> Bool](/documentation/combine/subscribers/demand/_=(_:_:)-28c1e)
- [static func >= (Subscribers.Demand, Subscribers.Demand) -> Bool](/documentation/combine/subscribers/demand/_=(_:_:)-5xnt)
- [Subscriptions](/documentation/combine/subscriptions)

### Using convenience subscriptions

- [static var empty: any Subscription](/documentation/combine/subscriptions/empty)

## Subjects

- [Subject](/documentation/combine/subject)

### Delivering elements to subscribers

- [func send(Self.Output)](/documentation/combine/subject/send(_:))
- [func send()](/documentation/combine/subject/send())

### Delivering life cycle events to subscribers

- [func send(subscription: any Subscription)](/documentation/combine/subject/send(subscription:))
- [func send(completion: Subscribers.Completion<Self.Failure>)](/documentation/combine/subject/send(completion:))
- [CurrentValueSubject](/documentation/combine/currentvaluesubject)

### Creating a current value subject

- [init(Output)](/documentation/combine/currentvaluesubject/init(_:))

### Accessing the current value

- [var value: Output](/documentation/combine/currentvaluesubject/value)
- [PassthroughSubject](/documentation/combine/passthroughsubject)

### Creating a passthrough subject

- [init()](/documentation/combine/passthroughsubject/init())

## Schedulers

- [Scheduler](/documentation/combine/scheduler)

### Declaring scheduler timekeeping and options

- [SchedulerTimeType](/documentation/combine/scheduler/schedulertimetype)
- [SchedulerOptions](/documentation/combine/scheduler/scheduleroptions)

### Accessing scheduler time properties

- [var minimumTolerance: Self.SchedulerTimeType.Stride](/documentation/combine/scheduler/minimumtolerance)
- [var now: Self.SchedulerTimeType](/documentation/combine/scheduler/now)

### Scheduling actions

- [func schedule(() -> Void)](/documentation/combine/scheduler/schedule(_:))
- [func schedule(after: Self.SchedulerTimeType, () -> Void)](/documentation/combine/scheduler/schedule(after:_:))
- [func schedule(after: Self.SchedulerTimeType, interval: Self.SchedulerTimeType.Stride, () -> Void) -> any Cancellable](/documentation/combine/scheduler/schedule(after:interval:_:))
- [func schedule(after: Self.SchedulerTimeType, interval: Self.SchedulerTimeType.Stride, tolerance: Self.SchedulerTimeType.Stride, () -> Void) -> any Cancellable](/documentation/combine/scheduler/schedule(after:interval:tolerance:_:))
- [func schedule(after: Self.SchedulerTimeType, interval: Self.SchedulerTimeType.Stride, tolerance: Self.SchedulerTimeType.Stride, options: Self.SchedulerOptions?, () -> Void) -> any Cancellable](/documentation/combine/scheduler/schedule(after:interval:tolerance:options:_:))
- [func schedule(after: Self.SchedulerTimeType, tolerance: Self.SchedulerTimeType.Stride, () -> Void)](/documentation/combine/scheduler/schedule(after:tolerance:_:))
- [func schedule(after: Self.SchedulerTimeType, tolerance: Self.SchedulerTimeType.Stride, options: Self.SchedulerOptions?, () -> Void)](/documentation/combine/scheduler/schedule(after:tolerance:options:_:))
- [func schedule(options: Self.SchedulerOptions?, () -> Void)](/documentation/combine/scheduler/schedule(options:_:))
- [ImmediateScheduler](/documentation/combine/immediatescheduler)

### Declaring scheduler timekeeping and options

- [ImmediateScheduler.SchedulerTimeType](/documentation/combine/immediatescheduler/schedulertimetype)

#### Declaring a scheduler timekeeping system

- [ImmediateScheduler.SchedulerTimeType.Stride](/documentation/combine/immediatescheduler/schedulertimetype/stride)

##### Creating Scheduler Time Strides

- [init(Int)](/documentation/combine/immediatescheduler/schedulertimetype/stride/init(_:))
- [init?<T>(exactly: T)](/documentation/combine/immediatescheduler/schedulertimetype/stride/init(exactly:))
- [init(floatLiteral: Double)](/documentation/combine/immediatescheduler/schedulertimetype/stride/init(floatliteral:))
- [init(integerLiteral: Int)](/documentation/combine/immediatescheduler/schedulertimetype/stride/init(integerliteral:))

##### Creating Scheduler Time Strides from Seconds

- [static func microseconds(Int) -> ImmediateScheduler.SchedulerTimeType.Stride](/documentation/combine/immediatescheduler/schedulertimetype/stride/microseconds(_:))
- [static func milliseconds(Int) -> ImmediateScheduler.SchedulerTimeType.Stride](/documentation/combine/immediatescheduler/schedulertimetype/stride/milliseconds(_:))
- [static func nanoseconds(Int) -> ImmediateScheduler.SchedulerTimeType.Stride](/documentation/combine/immediatescheduler/schedulertimetype/stride/nanoseconds(_:))
- [static func seconds(Double) -> ImmediateScheduler.SchedulerTimeType.Stride](/documentation/combine/immediatescheduler/schedulertimetype/stride/seconds(_:)-8lm65)
- [static func seconds(Int) -> ImmediateScheduler.SchedulerTimeType.Stride](/documentation/combine/immediatescheduler/schedulertimetype/stride/seconds(_:)-9uwki)

##### Declaring Timekeeping Types

- [ImmediateScheduler.SchedulerTimeType.Stride.FloatLiteralType](/documentation/combine/immediatescheduler/schedulertimetype/stride/floatliteraltype)
- [ImmediateScheduler.SchedulerTimeType.Stride.IntegerLiteralType](/documentation/combine/immediatescheduler/schedulertimetype/stride/integerliteraltype)
- [ImmediateScheduler.SchedulerTimeType.Stride.Magnitude](/documentation/combine/immediatescheduler/schedulertimetype/stride/magnitude-swift.typealias)

##### Expressing Scheduler Time Strides as Seconds

- [var magnitude: Int](/documentation/combine/immediatescheduler/schedulertimetype/stride/magnitude-swift.property)

#### Calculating time offsets

- [func advanced(by: ImmediateScheduler.SchedulerTimeType.Stride) -> ImmediateScheduler.SchedulerTimeType](/documentation/combine/immediatescheduler/schedulertimetype/advanced(by:))
- [func distance(to: ImmediateScheduler.SchedulerTimeType) -> ImmediateScheduler.SchedulerTimeType.Stride](/documentation/combine/immediatescheduler/schedulertimetype/distance(to:))
- [ImmediateScheduler.SchedulerOptions](/documentation/combine/immediatescheduler/scheduleroptions)

### Accessing scheduler time properties

- [var minimumTolerance: ImmediateScheduler.SchedulerTimeType.Stride](/documentation/combine/immediatescheduler/minimumtolerance)
- [var now: ImmediateScheduler.SchedulerTimeType](/documentation/combine/immediatescheduler/now)

### Using the shared scheduler

- [static let shared: ImmediateScheduler](/documentation/combine/immediatescheduler/shared)

### Scheduling actions

- [func schedule(after: ImmediateScheduler.SchedulerTimeType, interval: ImmediateScheduler.SchedulerTimeType.Stride, tolerance: ImmediateScheduler.SchedulerTimeType.Stride, options: ImmediateScheduler.SchedulerOptions?, () -> Void) -> any Cancellable](/documentation/combine/immediatescheduler/schedule(after:interval:tolerance:options:_:))
- [func schedule(after: ImmediateScheduler.SchedulerTimeType, tolerance: ImmediateScheduler.SchedulerTimeType.Stride, options: ImmediateScheduler.SchedulerOptions?, () -> Void)](/documentation/combine/immediatescheduler/schedule(after:tolerance:options:_:))
- [func schedule(options: ImmediateScheduler.SchedulerOptions?, () -> Void)](/documentation/combine/immediatescheduler/schedule(options:_:))
- [SchedulerTimeIntervalConvertible](/documentation/combine/schedulertimeintervalconvertible)

### Converting seconds to scheduler time intervals

- [static func microseconds(Int) -> Self](/documentation/combine/schedulertimeintervalconvertible/microseconds(_:))
- [static func milliseconds(Int) -> Self](/documentation/combine/schedulertimeintervalconvertible/milliseconds(_:))
- [static func nanoseconds(Int) -> Self](/documentation/combine/schedulertimeintervalconvertible/nanoseconds(_:))
- [static func seconds(Double) -> Self](/documentation/combine/schedulertimeintervalconvertible/seconds(_:)-2cv8t)
- [static func seconds(Int) -> Self](/documentation/combine/schedulertimeintervalconvertible/seconds(_:)-3g8ay)

## Combine Migration

- [Routing Notifications to Combine Subscribers](/documentation/combine/routing-notifications-to-combine-subscribers)
- [Replacing Foundation Timers with Timer Publishers](/documentation/combine/replacing-foundation-timers-with-timer-publishers)
- [Performing Key-Value Observing with Combine](/documentation/combine/performing-key-value-observing-with-combine)
- [Using Combine for Your App’s Asynchronous Code](/documentation/combine/using-combine-for-your-app-s-asynchronous-code)

## Observable Objects

- [ObservableObject](/documentation/combine/observableobject)

### Publishing changes

- [var objectWillChange: Self.ObjectWillChangePublisher](/documentation/combine/observableobject/objectwillchange)
- [ObjectWillChangePublisher](/documentation/combine/observableobject/objectwillchangepublisher)
- [ObservableObjectPublisher](/documentation/combine/observableobjectpublisher)

### Creating an observable object publisher

- [init()](/documentation/combine/observableobjectpublisher/init())

### Delivering elements to subscribers

- [func send()](/documentation/combine/observableobjectpublisher/send())

## Asynchronous Publishers

- [AsyncPublisher](/documentation/combine/asyncpublisher)

### Creating an asynchronous publisher

- [init(P)](/documentation/combine/asyncpublisher/init(_:))

### Creating an iterator

- [func makeAsyncIterator() -> AsyncPublisher<P>.Iterator](/documentation/combine/asyncpublisher/makeasynciterator())
- [AsyncPublisher.Iterator](/documentation/combine/asyncpublisher/iterator)

#### Iterating over elements

- [func next() async -> P.Output?](/documentation/combine/asyncpublisher/iterator/next())

### Supporting types

- [AsyncPublisher.Element](/documentation/combine/asyncpublisher/element)
- [AsyncThrowingPublisher](/documentation/combine/asyncthrowingpublisher)

### Creating an asynchronous publisher

- [init(P)](/documentation/combine/asyncthrowingpublisher/init(_:))

### Creating an iterator

- [func makeAsyncIterator() -> AsyncThrowingPublisher<P>.Iterator](/documentation/combine/asyncthrowingpublisher/makeasynciterator())
- [AsyncThrowingPublisher.Iterator](/documentation/combine/asyncthrowingpublisher/iterator)

#### Iterating over elements

- [func next() async throws -> P.Output?](/documentation/combine/asyncthrowingpublisher/iterator/next())

### Supporting types

- [AsyncThrowingPublisher.Element](/documentation/combine/asyncthrowingpublisher/element)

## Encoders and Decoders

- [TopLevelEncoder](/documentation/combine/toplevelencoder)

### Declaring supporting types

- [Output](/documentation/combine/toplevelencoder/output)

### Encoding

- [func encode<T>(T) throws -> Self.Output](/documentation/combine/toplevelencoder/encode(_:))
- [TopLevelDecoder](/documentation/combine/topleveldecoder)

### Declaring supporting types

- [Input](/documentation/combine/topleveldecoder/input)

### Decoding

- [func decode<T>(T.Type, from: Self.Input) throws -> T](/documentation/combine/topleveldecoder/decode(_:from:))

## Debugging Identifiers

- [CustomCombineIdentifierConvertible](/documentation/combine/customcombineidentifierconvertible)

### Identifying publisher streams

- [var combineIdentifier: CombineIdentifier](/documentation/combine/customcombineidentifierconvertible/combineidentifier)
- [CombineIdentifier](/documentation/combine/combineidentifier)

### Creating a Combine identifier

- [init()](/documentation/combine/combineidentifier/init())
- [init(AnyObject)](/documentation/combine/combineidentifier/init(_:))

### Providing a description

- [var description: String](/documentation/combine/combineidentifier/description)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
