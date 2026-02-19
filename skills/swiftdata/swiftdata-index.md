---
title: SwiftData
source: https://developer.apple.com/documentation/swiftdata
timestamp: 2026-01-17T15:36:08.862Z
---

## Essentials

- [Preserving your app’s model data across launches](/documentation/swiftdata/preserving-your-apps-model-data-across-launches)
- [Adding and editing persistent data in your app](/documentation/swiftdata/adding-and-editing-persistent-data-in-your-app)
- [Adopting SwiftData for a Core Data app](/documentation/coredata/adopting-swiftdata-for-a-core-data-app)
- [SwiftData updates](/documentation/updates/swiftdata)
- [Adopting inheritance in SwiftData](/documentation/swiftdata/adopting-inheritance-in-swiftdata)

## Model definition

- [macro Model()](/documentation/swiftdata/model())
- [macro Attribute(Schema.Attribute.Option..., originalName: String?, hashModifier: String?)](/documentation/swiftdata/attribute(_:originalname:hashmodifier:))
- [macro Unique<T>([PartialKeyPath<T>]...)](/documentation/swiftdata/unique(_:))
- [macro Index<T>([PartialKeyPath<T>]...)](/documentation/swiftdata/index(_:)-74ia2)
- [macro Index<T>(Schema.Index<T>.Types<T>...)](/documentation/swiftdata/index(_:)-7d4z0)
- [Defining data relationships with enumerations and model classes](/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes)
- [macro Relationship(Schema.Relationship.Option..., deleteRule: Schema.Relationship.DeleteRule, minimumModelCount: Int?, maximumModelCount: Int?, originalName: String?, inverse: AnyKeyPath?, hashModifier: String?)](/documentation/swiftdata/relationship(_:deleterule:minimummodelcount:maximummodelcount:originalname:inverse:hashmodifier:))
- [macro Transient()](/documentation/swiftdata/transient())

## Model life cycle

- [ModelContainer](/documentation/swiftdata/modelcontainer)

### Creating a model container

- [init(for: Schema, migrationPlan: (any SchemaMigrationPlan.Type)?, configurations: [ModelConfiguration]) throws](/documentation/swiftdata/modelcontainer/init(for:migrationplan:configurations:)-1czix)
- [convenience init(for: any PersistentModel.Type..., migrationPlan: (any SchemaMigrationPlan.Type)?, configurations: ModelConfiguration...) throws](/documentation/swiftdata/modelcontainer/init(for:migrationplan:configurations:)-8s4ts)
- [convenience init(for: Schema, migrationPlan: (any SchemaMigrationPlan.Type)?, configurations: ModelConfiguration...) throws](/documentation/swiftdata/modelcontainer/init(for:migrationplan:configurations:)-qof9)
- [PersistentModel](/documentation/swiftdata/persistentmodel)

#### Creating a persistent model

- [init(backingData: any BackingData<Self>)](/documentation/swiftdata/persistentmodel/init(backingdata:))

#### Identifying the model instance

- [var persistentModelID: PersistentIdentifier](/documentation/swiftdata/persistentmodel/persistentmodelid)
- [PersistentIdentifier](/documentation/swiftdata/persistentidentifier)

##### Accessing identity information

- [let id: PersistentIdentifier.ID](/documentation/swiftdata/persistentidentifier/id-swift.property)
- [PersistentIdentifier.ID](/documentation/swiftdata/persistentidentifier/id-swift.struct)
- [var storeIdentifier: String?](/documentation/swiftdata/persistentidentifier/storeidentifier)
- [var entityName: String](/documentation/swiftdata/persistentidentifier/entityname)

##### Type Methods

- [static func identifier<T>(for: String, entityName: String, primaryKey: T) throws -> PersistentIdentifier](/documentation/swiftdata/persistentidentifier/identifier(for:entityname:primarykey:))
- [var modelContext: ModelContext?](/documentation/swiftdata/persistentmodel/modelcontext)

#### Accessing a value by key path

- [func getValue<Value, OtherModel>(forKey: KeyPath<Self, Value>) -> Value](/documentation/swiftdata/persistentmodel/getvalue(forkey:)-299oe)
- [func getValue<Value>(forKey: KeyPath<Self, Value>) -> Value](/documentation/swiftdata/persistentmodel/getvalue(forkey:)-3o59k)
- [func getValue<Value>(forKey: KeyPath<Self, Value>) -> Value](/documentation/swiftdata/persistentmodel/getvalue(forkey:)-4cs0c)
- [func getValue<Value, OtherModel>(forKey: KeyPath<Self, Value>) -> Value](/documentation/swiftdata/persistentmodel/getvalue(forkey:)-5m792)
- [func getValue<Value>(forKey: KeyPath<Self, Value?>) -> Value?](/documentation/swiftdata/persistentmodel/getvalue(forkey:)-998oq)
- [func getTransformableValue<Value>(forKey: KeyPath<Self, Value>) -> Value](/documentation/swiftdata/persistentmodel/gettransformablevalue(forkey:))

#### Modifying a value by key path

- [func setValue<Value, OtherModel>(forKey: KeyPath<Self, Value>, to: Value)](/documentation/swiftdata/persistentmodel/setvalue(forkey:to:)-18176)
- [func setValue<Value, OtherModel>(forKey: KeyPath<Self, Value>, to: Value)](/documentation/swiftdata/persistentmodel/setvalue(forkey:to:)-3mmp2)
- [func setValue<Value>(forKey: KeyPath<Self, Value?>, to: Value?)](/documentation/swiftdata/persistentmodel/setvalue(forkey:to:)-3uqwc)
- [func setValue<Value>(forKey: KeyPath<Self, Value>, to: Value)](/documentation/swiftdata/persistentmodel/setvalue(forkey:to:)-8wepb)
- [func setValue<Value>(forKey: KeyPath<Self, Value>, to: Value)](/documentation/swiftdata/persistentmodel/setvalue(forkey:to:)-xt24)
- [func setTransformableValue<Value>(forKey: KeyPath<Self, Value>, to: Value)](/documentation/swiftdata/persistentmodel/settransformablevalue(forkey:to:))

#### Accessing supplementary information

- [static var schemaMetadata: [Schema.PropertyMetadata]](/documentation/swiftdata/persistentmodel/schemametadata)
- [var persistentBackingData: any BackingData<Self>](/documentation/swiftdata/persistentmodel/persistentbackingdata)
- [var hasChanges: Bool](/documentation/swiftdata/persistentmodel/haschanges)
- [var isDeleted: Bool](/documentation/swiftdata/persistentmodel/isdeleted)

#### Internal

- [Internal symbols](/documentation/swiftdata/persistentmodelinternal)

##### Storage

- [BackingData](/documentation/swiftdata/backingdata)

###### Associated Types

- [Model](/documentation/swiftdata/backingdata/model)

###### Initializers

- [init(for: Self.Model.Type)](/documentation/swiftdata/backingdata/init(for:))

###### Instance Properties

- [var metadata: Any](/documentation/swiftdata/backingdata/metadata)
- [var persistentModelID: PersistentIdentifier?](/documentation/swiftdata/backingdata/persistentmodelid)

###### Instance Methods

- [func getTransformableValue<Value>(forKey: KeyPath<Self.Model, Value>) -> Value](/documentation/swiftdata/backingdata/gettransformablevalue(forkey:))
- [func getValue<Value>(forKey: KeyPath<Self.Model, Value>) -> Value](/documentation/swiftdata/backingdata/getvalue(forkey:)-1pric)
- [func getValue<Value, OtherModel>(forKey: KeyPath<Self.Model, Value>) -> Value](/documentation/swiftdata/backingdata/getvalue(forkey:)-209t6)
- [func getValue<Value>(forKey: KeyPath<Self.Model, Value>) -> Value](/documentation/swiftdata/backingdata/getvalue(forkey:)-5fis7)
- [func getValue<Value>(forKey: KeyPath<Self.Model, Value?>) -> Value?](/documentation/swiftdata/backingdata/getvalue(forkey:)-5fo8)
- [func getValue<Value, OtherModel>(forKey: KeyPath<Self.Model, Value>) -> Value](/documentation/swiftdata/backingdata/getvalue(forkey:)-8xj5n)
- [func setTransformableValue<Value>(forKey: KeyPath<Self.Model, Value>, to: Value)](/documentation/swiftdata/backingdata/settransformablevalue(forkey:to:))
- [func setValue<Value>(forKey: KeyPath<Self.Model, Value>, to: Value)](/documentation/swiftdata/backingdata/setvalue(forkey:to:)-1mr4x)
- [func setValue<Value, OtherModel>(forKey: KeyPath<Self.Model, Value>, to: Value)](/documentation/swiftdata/backingdata/setvalue(forkey:to:)-2idfg)
- [func setValue<Value>(forKey: KeyPath<Self.Model, Value>, to: Value)](/documentation/swiftdata/backingdata/setvalue(forkey:to:)-4d7yr)
- [func setValue<Value, OtherModel>(forKey: KeyPath<Self.Model, Value>, to: Value)](/documentation/swiftdata/backingdata/setvalue(forkey:to:)-992es)
- [func setValue<Value>(forKey: KeyPath<Self.Model, Value?>, to: Value?)](/documentation/swiftdata/backingdata/setvalue(forkey:to:)-rzi4)

#### Associated Types

- [Root](/documentation/swiftdata/persistentmodel/root)

#### Type Methods

- [static func createBackingData<P>() -> some BackingData<P>
](/documentation/swiftdata/persistentmodel/createbackingdata())

#### Default Implementations

- [Equatable Implementations](/documentation/swiftdata/persistentmodel/equatable-implementations)

##### Operators

- [static func == (Self, Self) -> Bool](/documentation/swiftdata/persistentmodel/==(_:_:))
- [Hashable Implementations](/documentation/swiftdata/persistentmodel/hashable-implementations)

##### Instance Methods

- [func hash(into: inout Hasher)](/documentation/swiftdata/persistentmodel/hash(into:))
- [ModelConfiguration](/documentation/swiftdata/modelconfiguration)

#### Creating a model configuration

- [init(isStoredInMemoryOnly: Bool)](/documentation/swiftdata/modelconfiguration/init(isstoredinmemoryonly:))
- [init(for: any PersistentModel.Type..., isStoredInMemoryOnly: Bool)](/documentation/swiftdata/modelconfiguration/init(for:isstoredinmemoryonly:))
- [init(String?, schema: Schema?, isStoredInMemoryOnly: Bool, allowsSave: Bool, groupContainer: ModelConfiguration.GroupContainer, cloudKitDatabase: ModelConfiguration.CloudKitDatabase)](/documentation/swiftdata/modelconfiguration/init(_:schema:isstoredinmemoryonly:allowssave:groupcontainer:cloudkitdatabase:))
- [init(String?, schema: Schema?, url: URL, allowsSave: Bool, cloudKitDatabase: ModelConfiguration.CloudKitDatabase)](/documentation/swiftdata/modelconfiguration/init(_:schema:url:allowssave:cloudkitdatabase:))

#### Accessing configuration details

- [let url: URL](/documentation/swiftdata/modelconfiguration/url)
- [let allowsSave: Bool](/documentation/swiftdata/modelconfiguration/allowssave)
- [let isStoredInMemoryOnly: Bool](/documentation/swiftdata/modelconfiguration/isstoredinmemoryonly)

#### Sharing and syncing the model store

- [let cloudKitContainerIdentifier: String?](/documentation/swiftdata/modelconfiguration/cloudkitcontaineridentifier)
- [let cloudKitDatabase: ModelConfiguration.CloudKitDatabase](/documentation/swiftdata/modelconfiguration/cloudkitdatabase-swift.property)
- [ModelConfiguration.CloudKitDatabase](/documentation/swiftdata/modelconfiguration/cloudkitdatabase-swift.struct)

##### Getting discovery options

- [static var automatic: ModelConfiguration.CloudKitDatabase](/documentation/swiftdata/modelconfiguration/cloudkitdatabase-swift.struct/automatic)
- [static func `private`(String) -> ModelConfiguration.CloudKitDatabase](/documentation/swiftdata/modelconfiguration/cloudkitdatabase-swift.struct/private(_:))
- [static var none: ModelConfiguration.CloudKitDatabase](/documentation/swiftdata/modelconfiguration/cloudkitdatabase-swift.struct/none)
- [let groupAppContainerIdentifier: String?](/documentation/swiftdata/modelconfiguration/groupappcontaineridentifier)
- [let groupContainer: ModelConfiguration.GroupContainer](/documentation/swiftdata/modelconfiguration/groupcontainer-swift.property)
- [ModelConfiguration.GroupContainer](/documentation/swiftdata/modelconfiguration/groupcontainer-swift.struct)

##### Getting discovery options

- [static var automatic: ModelConfiguration.GroupContainer](/documentation/swiftdata/modelconfiguration/groupcontainer-swift.struct/automatic)
- [static func identifier(String) -> ModelConfiguration.GroupContainer](/documentation/swiftdata/modelconfiguration/groupcontainer-swift.struct/identifier(_:))
- [static var none: ModelConfiguration.GroupContainer](/documentation/swiftdata/modelconfiguration/groupcontainer-swift.struct/none)
- [Schema](/documentation/swiftdata/schema)

#### Creating a schema

- [init(Schema.Entity..., version: Schema.Version)](/documentation/swiftdata/schema/init(_:version:)-8el78)
- [init([any PersistentModel.Type], version: Schema.Version)](/documentation/swiftdata/schema/init(_:version:)-8jo9o)
- [convenience init(versionedSchema: any VersionedSchema.Type)](/documentation/swiftdata/schema/init(versionedschema:))
- [VersionedSchema](/documentation/swiftdata/versionedschema)

##### Describing the version

- [static var versionIdentifier: Schema.Version](/documentation/swiftdata/versionedschema/versionidentifier)

##### Specifying the included models

- [static var models: [any PersistentModel.Type]](/documentation/swiftdata/versionedschema/models)
- [init()](/documentation/swiftdata/schema/init())
- [Schema components](/documentation/swiftdata/schemacomponents)

##### Entities

- [Schema.Entity](/documentation/swiftdata/schema/entity)

###### Creating an entity

- [init(String)](/documentation/swiftdata/schema/entity/init(_:))
- [init(String, properties: any SchemaProperty...)](/documentation/swiftdata/schema/entity/init(_:properties:))
- [init(String, subentities: Schema.Entity..., properties: any SchemaProperty...)](/documentation/swiftdata/schema/entity/init(_:subentities:properties:))

###### Assigning identity

- [var name: String](/documentation/swiftdata/schema/entity/name)

###### Managing attributes

- [var attributes: Set<Schema.Attribute>](/documentation/swiftdata/schema/entity/attributes)
- [var attributesByName: [String : Schema.Attribute]](/documentation/swiftdata/schema/entity/attributesbyname)

###### Defining relationships

- [var relationships: Set<Schema.Relationship>](/documentation/swiftdata/schema/entity/relationships)
- [var relationshipsByName: [String : Schema.Relationship]](/documentation/swiftdata/schema/entity/relationshipsbyname)

###### Managing properties

- [var properties: [any SchemaProperty]](/documentation/swiftdata/schema/entity/properties)
- [var inheritedProperties: [any SchemaProperty]](/documentation/swiftdata/schema/entity/inheritedproperties)
- [var inheritedPropertiesByName: [String : any SchemaProperty]](/documentation/swiftdata/schema/entity/inheritedpropertiesbyname)
- [var storedProperties: [any SchemaProperty]](/documentation/swiftdata/schema/entity/storedproperties)
- [var storedPropertiesByName: [String : any SchemaProperty]](/documentation/swiftdata/schema/entity/storedpropertiesbyname)

###### Applying constraints

- [var uniquenessConstraints: [[String]]](/documentation/swiftdata/schema/entity/uniquenessconstraints)

###### Configuring the inheritance chain

- [var superentity: Schema.Entity?](/documentation/swiftdata/schema/entity/superentity)
- [var superentityName: String?](/documentation/swiftdata/schema/entity/superentityname)
- [var subentities: Set<Schema.Entity>](/documentation/swiftdata/schema/entity/subentities)

###### Instance Properties

- [var indices: [[String]]](/documentation/swiftdata/schema/entity/indices)

##### Attributes

- [Schema.Attribute](/documentation/swiftdata/schema/attribute)

###### Creating an attribute

- [init(Schema.Attribute.Option..., originalName: String?, hashModifier: String?)](/documentation/swiftdata/schema/attribute/init(_:originalname:hashmodifier:))
- [init(name: String, originalName: String?, options: [Schema.Attribute.Option], valueType: any Any.Type, defaultValue: Any?, hashModifier: String?)](/documentation/swiftdata/schema/attribute/init(name:originalname:options:valuetype:defaultvalue:hashmodifier:))

###### Specifying value information

- [var defaultValue: Any?](/documentation/swiftdata/schema/attribute/defaultvalue)

###### Determining behavior

- [var options: [Schema.Attribute.Option]](/documentation/swiftdata/schema/attribute/options)
- [var isTransformable: Bool](/documentation/swiftdata/schema/attribute/istransformable)

###### Versioning

- [var hashModifier: String?](/documentation/swiftdata/schema/attribute/hashmodifier)

###### Structures

- [Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option)

###### Accessing property options

- [static var allowsCloudEncryption: Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/allowscloudencryption)
- [static var externalStorage: Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/externalstorage)
- [static var preserveValueOnDeletion: Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/preservevalueondeletion)
- [static var spotlight: Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/spotlight)
- [static var unique: Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/unique)
- [static func transformable(by: ValueTransformer.Type) -> Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/transformable(by:)-9d4xh)
- [static func transformable(by: String) -> Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/transformable(by:)-lunz)

###### Type Properties

- [static var ephemeral: Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/ephemeral)
- [Schema.CompositeAttribute](/documentation/swiftdata/schema/compositeattribute)

###### Creating a composite attribute

- [init(name: String, originalName: String?, options: [Schema.Attribute.Option], valueType: any Any.Type, defaultValue: Any?, hashModifier: String?)](/documentation/swiftdata/schema/compositeattribute/init(name:originalname:options:valuetype:defaultvalue:hashmodifier:))

###### Composing attributes

- [var properties: [Schema.Attribute]](/documentation/swiftdata/schema/compositeattribute/properties)

###### Encoding and decoding

- [func encode(to: any Encoder) throws](/documentation/swiftdata/schema/compositeattribute/encode(to:))
- [init(from: any Decoder) throws](/documentation/swiftdata/schema/compositeattribute/init(from:))

###### Debugging

- [var debugDescription: String](/documentation/swiftdata/schema/compositeattribute/debugdescription)

###### Operators

- [static func == (Schema.CompositeAttribute, Schema.CompositeAttribute) -> Bool](/documentation/swiftdata/schema/compositeattribute/==(_:_:))

##### Relationships

- [Schema.Relationship](/documentation/swiftdata/schema/relationship)

###### Creating a relationship

- [init(Schema.Relationship.Option..., deleteRule: Schema.Relationship.DeleteRule, minimumModelCount: Int?, maximumModelCount: Int?, originalName: String?, inverse: AnyKeyPath?, hashModifier: String?)](/documentation/swiftdata/schema/relationship/init(_:deleterule:minimummodelcount:maximummodelcount:originalname:inverse:hashmodifier:))

###### Managing the configuration

- [var keypath: AnyKeyPath?](/documentation/swiftdata/schema/relationship/keypath)
- [var destination: String](/documentation/swiftdata/schema/relationship/destination)
- [var inverseName: String?](/documentation/swiftdata/schema/relationship/inversename)
- [var inverseKeyPath: AnyKeyPath?](/documentation/swiftdata/schema/relationship/inversekeypath)
- [var deleteRule: Schema.Relationship.DeleteRule](/documentation/swiftdata/schema/relationship/deleterule-swift.property)
- [Schema.Relationship.DeleteRule](/documentation/swiftdata/schema/relationship/deleterule-swift.enum)

###### Accessing delete rules

- [case cascade](/documentation/swiftdata/schema/relationship/deleterule-swift.enum/cascade)
- [case deny](/documentation/swiftdata/schema/relationship/deleterule-swift.enum/deny)
- [case noAction](/documentation/swiftdata/schema/relationship/deleterule-swift.enum/noaction)
- [case nullify](/documentation/swiftdata/schema/relationship/deleterule-swift.enum/nullify)
- [var isToOneRelationship: Bool](/documentation/swiftdata/schema/relationship/istoonerelationship)

###### Determining behavior

- [var options: [Schema.Relationship.Option]](/documentation/swiftdata/schema/relationship/options)

###### Versioning

- [var hashModifier: String?](/documentation/swiftdata/schema/relationship/hashmodifier)

###### Structures

- [Schema.Relationship.Option](/documentation/swiftdata/schema/relationship/option)

###### Type Properties

- [static var unique: Schema.Relationship.Option](/documentation/swiftdata/schema/relationship/option/unique)

###### Instance Properties

- [var maximumModelCount: Int?](/documentation/swiftdata/schema/relationship/maximummodelcount)
- [var minimumModelCount: Int?](/documentation/swiftdata/schema/relationship/minimummodelcount)

##### Internal

- [Internal symbols](/documentation/swiftdata/schemacomponentsinternal)

###### Properties

- [SchemaProperty](/documentation/swiftdata/schemaproperty)

###### Instance Properties

- [var isAttribute: Bool](/documentation/swiftdata/schemaproperty/isattribute)
- [var isOptional: Bool](/documentation/swiftdata/schemaproperty/isoptional)
- [var isRelationship: Bool](/documentation/swiftdata/schemaproperty/isrelationship)
- [var isTransient: Bool](/documentation/swiftdata/schemaproperty/istransient)
- [var isUnique: Bool](/documentation/swiftdata/schemaproperty/isunique)
- [var name: String](/documentation/swiftdata/schemaproperty/name)
- [var originalName: String](/documentation/swiftdata/schemaproperty/originalname)
- [var valueType: any Any.Type](/documentation/swiftdata/schemaproperty/valuetype)
- [RelationshipCollection](/documentation/swiftdata/relationshipcollection)

###### Associated Types

- [PersistentElement](/documentation/swiftdata/relationshipcollection/persistentelement)

#### Accessing entities

- [let entities: [Schema.Entity]](/documentation/swiftdata/schema/entities)
- [let entitiesByName: [String : Schema.Entity]](/documentation/swiftdata/schema/entitiesbyname)
- [Schema.Entity](/documentation/swiftdata/schema/entity)

##### Creating an entity

- [init(String)](/documentation/swiftdata/schema/entity/init(_:))
- [init(String, properties: any SchemaProperty...)](/documentation/swiftdata/schema/entity/init(_:properties:))
- [init(String, subentities: Schema.Entity..., properties: any SchemaProperty...)](/documentation/swiftdata/schema/entity/init(_:subentities:properties:))

##### Assigning identity

- [var name: String](/documentation/swiftdata/schema/entity/name)

##### Managing attributes

- [var attributes: Set<Schema.Attribute>](/documentation/swiftdata/schema/entity/attributes)
- [var attributesByName: [String : Schema.Attribute]](/documentation/swiftdata/schema/entity/attributesbyname)

##### Defining relationships

- [var relationships: Set<Schema.Relationship>](/documentation/swiftdata/schema/entity/relationships)
- [var relationshipsByName: [String : Schema.Relationship]](/documentation/swiftdata/schema/entity/relationshipsbyname)

##### Managing properties

- [var properties: [any SchemaProperty]](/documentation/swiftdata/schema/entity/properties)
- [var inheritedProperties: [any SchemaProperty]](/documentation/swiftdata/schema/entity/inheritedproperties)
- [var inheritedPropertiesByName: [String : any SchemaProperty]](/documentation/swiftdata/schema/entity/inheritedpropertiesbyname)
- [var storedProperties: [any SchemaProperty]](/documentation/swiftdata/schema/entity/storedproperties)
- [var storedPropertiesByName: [String : any SchemaProperty]](/documentation/swiftdata/schema/entity/storedpropertiesbyname)

##### Applying constraints

- [var uniquenessConstraints: [[String]]](/documentation/swiftdata/schema/entity/uniquenessconstraints)

##### Configuring the inheritance chain

- [var superentity: Schema.Entity?](/documentation/swiftdata/schema/entity/superentity)
- [var superentityName: String?](/documentation/swiftdata/schema/entity/superentityname)
- [var subentities: Set<Schema.Entity>](/documentation/swiftdata/schema/entity/subentities)

##### Instance Properties

- [var indices: [[String]]](/documentation/swiftdata/schema/entity/indices)

#### Accessing version details

- [static let schemaEncodingVersion: Schema.Version](/documentation/swiftdata/schema/schemaencodingversion)
- [let encodingVersion: Schema.Version](/documentation/swiftdata/schema/encodingversion)

#### Saving and loading

- [func save(to: URL) throws](/documentation/swiftdata/schema/save(to:))
- [static func load(from: URL) throws -> Schema](/documentation/swiftdata/schema/load(from:))

#### Classes

- [Schema.Index](/documentation/swiftdata/schema/index)

##### Initializers

- [init(Schema.Index<T>.Types<T>...)](/documentation/swiftdata/schema/index/init(_:)-4i37e)
- [init([PartialKeyPath<T>]...)](/documentation/swiftdata/schema/index/init(_:)-527in)

##### Instance Properties

- [let indices: [Schema.Index<T>.Types<T>]](/documentation/swiftdata/schema/index/indices)

##### Enumerations

- [Schema.Index.CodingKeys](/documentation/swiftdata/schema/index/codingkeys)

###### Enumeration Cases

- [case indices](/documentation/swiftdata/schema/index/codingkeys/indices)
- [Schema.Index.Types](/documentation/swiftdata/schema/index/types)

###### Enumeration Cases

- [case binary([PartialKeyPath<P>])](/documentation/swiftdata/schema/index/types/binary(_:))
- [case rtree([PartialKeyPath<P>])](/documentation/swiftdata/schema/index/types/rtree(_:))
- [Schema.Unique](/documentation/swiftdata/schema/unique)

##### Initializers

- [init([PartialKeyPath<T>]...)](/documentation/swiftdata/schema/unique/init(_:))

##### Instance Properties

- [let constraints: [[PartialKeyPath<T>]]](/documentation/swiftdata/schema/unique/constraints)

##### Enumerations

- [Schema.Unique.CodingKeys](/documentation/swiftdata/schema/unique/codingkeys)

###### Enumeration Cases

- [case constraints](/documentation/swiftdata/schema/unique/codingkeys/constraints)

#### Structures

- [Schema.PropertyMetadata](/documentation/swiftdata/schema/propertymetadata)

##### Initializers

- [init(name: String, keypath: AnyKeyPath, defaultValue: Any?, metadata: (any SchemaProperty)?)](/documentation/swiftdata/schema/propertymetadata/init(name:keypath:defaultvalue:metadata:))
- [Schema.Version](/documentation/swiftdata/schema/version-swift.struct)

##### Operators

- [static func == (Schema.Version, Schema.Version) -> Bool](/documentation/swiftdata/schema/version-swift.struct/==(_:_:))
- [static func < (Schema.Version, Schema.Version) -> Bool](/documentation/swiftdata/schema/version-swift.struct/_(_:_:))

##### Initializers

- [init(Int, Int, Int)](/documentation/swiftdata/schema/version-swift.struct/init(_:_:_:))

##### Instance Properties

- [var description: String](/documentation/swiftdata/schema/version-swift.struct/description)
- [let major: Int](/documentation/swiftdata/schema/version-swift.struct/major)
- [let minor: Int](/documentation/swiftdata/schema/version-swift.struct/minor)
- [let patch: Int](/documentation/swiftdata/schema/version-swift.struct/patch)

#### Initializers

- [convenience init(any PersistentModel.Type..., version: Schema.Version)](/documentation/swiftdata/schema/init(_:version:)-1aea5)

#### Instance Properties

- [let version: Schema.Version](/documentation/swiftdata/schema/version-swift.property)

#### Instance Methods

- [func entity<T>(for: T.Type) -> Schema.Entity?](/documentation/swiftdata/schema/entity(for:))

#### Type Methods

- [static func entityName<T>(for: T.Type) -> String](/documentation/swiftdata/schema/entityname(for:))
- [SchemaMigrationPlan](/documentation/swiftdata/schemamigrationplan)

#### Managing versioned schemas

- [static var schemas: [any VersionedSchema.Type]](/documentation/swiftdata/schemamigrationplan/schemas)
- [VersionedSchema](/documentation/swiftdata/versionedschema)

##### Describing the version

- [static var versionIdentifier: Schema.Version](/documentation/swiftdata/versionedschema/versionidentifier)

##### Specifying the included models

- [static var models: [any PersistentModel.Type]](/documentation/swiftdata/versionedschema/models)

#### Managing migration stages

- [static var stages: [MigrationStage]](/documentation/swiftdata/schemamigrationplan/stages)
- [MigrationStage](/documentation/swiftdata/migrationstage)

##### Migration stages

- [case lightweight(fromVersion: any VersionedSchema.Type, toVersion: any VersionedSchema.Type)](/documentation/swiftdata/migrationstage/lightweight(fromversion:toversion:))
- [case custom(fromVersion: any VersionedSchema.Type, toVersion: any VersionedSchema.Type, willMigrate: ((ModelContext) throws -> Void)?, didMigrate: ((ModelContext) throws -> Void)?)](/documentation/swiftdata/migrationstage/custom(fromversion:toversion:willmigrate:didmigrate:))

### Managing schema and configuration details

- [let schema: Schema](/documentation/swiftdata/modelcontainer/schema)
- [var configurations: Set<ModelConfiguration>](/documentation/swiftdata/modelcontainer/configurations)
- [let migrationPlan: (any SchemaMigrationPlan.Type)?](/documentation/swiftdata/modelcontainer/migrationplan)

### Accessing the context

- [var mainContext: ModelContext](/documentation/swiftdata/modelcontainer/maincontext)

### Deleting the container

- [func deleteAllData()](/documentation/swiftdata/modelcontainer/deletealldata())

### Initializers

- [convenience init(for: any PersistentModel.Type..., configurations: any DataStoreConfiguration...) throws](/documentation/swiftdata/modelcontainer/init(for:configurations:)-621ei)
- [init(for: Schema, configurations: [any DataStoreConfiguration]) throws](/documentation/swiftdata/modelcontainer/init(for:configurations:)-93ifi)

### Instance Methods

- [func erase() throws](/documentation/swiftdata/modelcontainer/erase())
- [ModelContext](/documentation/swiftdata/modelcontext)

### Creating a model context

- [init(ModelContainer)](/documentation/swiftdata/modelcontext/init(_:))
- [ModelContainer](/documentation/swiftdata/modelcontainer)

#### Creating a model container

- [init(for: Schema, migrationPlan: (any SchemaMigrationPlan.Type)?, configurations: [ModelConfiguration]) throws](/documentation/swiftdata/modelcontainer/init(for:migrationplan:configurations:)-1czix)
- [convenience init(for: any PersistentModel.Type..., migrationPlan: (any SchemaMigrationPlan.Type)?, configurations: ModelConfiguration...) throws](/documentation/swiftdata/modelcontainer/init(for:migrationplan:configurations:)-8s4ts)
- [convenience init(for: Schema, migrationPlan: (any SchemaMigrationPlan.Type)?, configurations: ModelConfiguration...) throws](/documentation/swiftdata/modelcontainer/init(for:migrationplan:configurations:)-qof9)
- [PersistentModel](/documentation/swiftdata/persistentmodel)

##### Creating a persistent model

- [init(backingData: any BackingData<Self>)](/documentation/swiftdata/persistentmodel/init(backingdata:))

##### Identifying the model instance

- [var persistentModelID: PersistentIdentifier](/documentation/swiftdata/persistentmodel/persistentmodelid)
- [PersistentIdentifier](/documentation/swiftdata/persistentidentifier)

###### Accessing identity information

- [let id: PersistentIdentifier.ID](/documentation/swiftdata/persistentidentifier/id-swift.property)
- [PersistentIdentifier.ID](/documentation/swiftdata/persistentidentifier/id-swift.struct)
- [var storeIdentifier: String?](/documentation/swiftdata/persistentidentifier/storeidentifier)
- [var entityName: String](/documentation/swiftdata/persistentidentifier/entityname)

###### Type Methods

- [static func identifier<T>(for: String, entityName: String, primaryKey: T) throws -> PersistentIdentifier](/documentation/swiftdata/persistentidentifier/identifier(for:entityname:primarykey:))
- [var modelContext: ModelContext?](/documentation/swiftdata/persistentmodel/modelcontext)

##### Accessing a value by key path

- [func getValue<Value, OtherModel>(forKey: KeyPath<Self, Value>) -> Value](/documentation/swiftdata/persistentmodel/getvalue(forkey:)-299oe)
- [func getValue<Value>(forKey: KeyPath<Self, Value>) -> Value](/documentation/swiftdata/persistentmodel/getvalue(forkey:)-3o59k)
- [func getValue<Value>(forKey: KeyPath<Self, Value>) -> Value](/documentation/swiftdata/persistentmodel/getvalue(forkey:)-4cs0c)
- [func getValue<Value, OtherModel>(forKey: KeyPath<Self, Value>) -> Value](/documentation/swiftdata/persistentmodel/getvalue(forkey:)-5m792)
- [func getValue<Value>(forKey: KeyPath<Self, Value?>) -> Value?](/documentation/swiftdata/persistentmodel/getvalue(forkey:)-998oq)
- [func getTransformableValue<Value>(forKey: KeyPath<Self, Value>) -> Value](/documentation/swiftdata/persistentmodel/gettransformablevalue(forkey:))

##### Modifying a value by key path

- [func setValue<Value, OtherModel>(forKey: KeyPath<Self, Value>, to: Value)](/documentation/swiftdata/persistentmodel/setvalue(forkey:to:)-18176)
- [func setValue<Value, OtherModel>(forKey: KeyPath<Self, Value>, to: Value)](/documentation/swiftdata/persistentmodel/setvalue(forkey:to:)-3mmp2)
- [func setValue<Value>(forKey: KeyPath<Self, Value?>, to: Value?)](/documentation/swiftdata/persistentmodel/setvalue(forkey:to:)-3uqwc)
- [func setValue<Value>(forKey: KeyPath<Self, Value>, to: Value)](/documentation/swiftdata/persistentmodel/setvalue(forkey:to:)-8wepb)
- [func setValue<Value>(forKey: KeyPath<Self, Value>, to: Value)](/documentation/swiftdata/persistentmodel/setvalue(forkey:to:)-xt24)
- [func setTransformableValue<Value>(forKey: KeyPath<Self, Value>, to: Value)](/documentation/swiftdata/persistentmodel/settransformablevalue(forkey:to:))

##### Accessing supplementary information

- [static var schemaMetadata: [Schema.PropertyMetadata]](/documentation/swiftdata/persistentmodel/schemametadata)
- [var persistentBackingData: any BackingData<Self>](/documentation/swiftdata/persistentmodel/persistentbackingdata)
- [var hasChanges: Bool](/documentation/swiftdata/persistentmodel/haschanges)
- [var isDeleted: Bool](/documentation/swiftdata/persistentmodel/isdeleted)

##### Internal

- [Internal symbols](/documentation/swiftdata/persistentmodelinternal)

###### Storage

- [BackingData](/documentation/swiftdata/backingdata)

###### Associated Types

- [Model](/documentation/swiftdata/backingdata/model)

###### Initializers

- [init(for: Self.Model.Type)](/documentation/swiftdata/backingdata/init(for:))

###### Instance Properties

- [var metadata: Any](/documentation/swiftdata/backingdata/metadata)
- [var persistentModelID: PersistentIdentifier?](/documentation/swiftdata/backingdata/persistentmodelid)

###### Instance Methods

- [func getTransformableValue<Value>(forKey: KeyPath<Self.Model, Value>) -> Value](/documentation/swiftdata/backingdata/gettransformablevalue(forkey:))
- [func getValue<Value>(forKey: KeyPath<Self.Model, Value>) -> Value](/documentation/swiftdata/backingdata/getvalue(forkey:)-1pric)
- [func getValue<Value, OtherModel>(forKey: KeyPath<Self.Model, Value>) -> Value](/documentation/swiftdata/backingdata/getvalue(forkey:)-209t6)
- [func getValue<Value>(forKey: KeyPath<Self.Model, Value>) -> Value](/documentation/swiftdata/backingdata/getvalue(forkey:)-5fis7)
- [func getValue<Value>(forKey: KeyPath<Self.Model, Value?>) -> Value?](/documentation/swiftdata/backingdata/getvalue(forkey:)-5fo8)
- [func getValue<Value, OtherModel>(forKey: KeyPath<Self.Model, Value>) -> Value](/documentation/swiftdata/backingdata/getvalue(forkey:)-8xj5n)
- [func setTransformableValue<Value>(forKey: KeyPath<Self.Model, Value>, to: Value)](/documentation/swiftdata/backingdata/settransformablevalue(forkey:to:))
- [func setValue<Value>(forKey: KeyPath<Self.Model, Value>, to: Value)](/documentation/swiftdata/backingdata/setvalue(forkey:to:)-1mr4x)
- [func setValue<Value, OtherModel>(forKey: KeyPath<Self.Model, Value>, to: Value)](/documentation/swiftdata/backingdata/setvalue(forkey:to:)-2idfg)
- [func setValue<Value>(forKey: KeyPath<Self.Model, Value>, to: Value)](/documentation/swiftdata/backingdata/setvalue(forkey:to:)-4d7yr)
- [func setValue<Value, OtherModel>(forKey: KeyPath<Self.Model, Value>, to: Value)](/documentation/swiftdata/backingdata/setvalue(forkey:to:)-992es)
- [func setValue<Value>(forKey: KeyPath<Self.Model, Value?>, to: Value?)](/documentation/swiftdata/backingdata/setvalue(forkey:to:)-rzi4)

##### Associated Types

- [Root](/documentation/swiftdata/persistentmodel/root)

##### Type Methods

- [static func createBackingData<P>() -> some BackingData<P>
](/documentation/swiftdata/persistentmodel/createbackingdata())

##### Default Implementations

- [Equatable Implementations](/documentation/swiftdata/persistentmodel/equatable-implementations)

###### Operators

- [static func == (Self, Self) -> Bool](/documentation/swiftdata/persistentmodel/==(_:_:))
- [Hashable Implementations](/documentation/swiftdata/persistentmodel/hashable-implementations)

###### Instance Methods

- [func hash(into: inout Hasher)](/documentation/swiftdata/persistentmodel/hash(into:))
- [ModelConfiguration](/documentation/swiftdata/modelconfiguration)

##### Creating a model configuration

- [init(isStoredInMemoryOnly: Bool)](/documentation/swiftdata/modelconfiguration/init(isstoredinmemoryonly:))
- [init(for: any PersistentModel.Type..., isStoredInMemoryOnly: Bool)](/documentation/swiftdata/modelconfiguration/init(for:isstoredinmemoryonly:))
- [init(String?, schema: Schema?, isStoredInMemoryOnly: Bool, allowsSave: Bool, groupContainer: ModelConfiguration.GroupContainer, cloudKitDatabase: ModelConfiguration.CloudKitDatabase)](/documentation/swiftdata/modelconfiguration/init(_:schema:isstoredinmemoryonly:allowssave:groupcontainer:cloudkitdatabase:))
- [init(String?, schema: Schema?, url: URL, allowsSave: Bool, cloudKitDatabase: ModelConfiguration.CloudKitDatabase)](/documentation/swiftdata/modelconfiguration/init(_:schema:url:allowssave:cloudkitdatabase:))

##### Accessing configuration details

- [let url: URL](/documentation/swiftdata/modelconfiguration/url)
- [let allowsSave: Bool](/documentation/swiftdata/modelconfiguration/allowssave)
- [let isStoredInMemoryOnly: Bool](/documentation/swiftdata/modelconfiguration/isstoredinmemoryonly)

##### Sharing and syncing the model store

- [let cloudKitContainerIdentifier: String?](/documentation/swiftdata/modelconfiguration/cloudkitcontaineridentifier)
- [let cloudKitDatabase: ModelConfiguration.CloudKitDatabase](/documentation/swiftdata/modelconfiguration/cloudkitdatabase-swift.property)
- [ModelConfiguration.CloudKitDatabase](/documentation/swiftdata/modelconfiguration/cloudkitdatabase-swift.struct)

###### Getting discovery options

- [static var automatic: ModelConfiguration.CloudKitDatabase](/documentation/swiftdata/modelconfiguration/cloudkitdatabase-swift.struct/automatic)
- [static func `private`(String) -> ModelConfiguration.CloudKitDatabase](/documentation/swiftdata/modelconfiguration/cloudkitdatabase-swift.struct/private(_:))
- [static var none: ModelConfiguration.CloudKitDatabase](/documentation/swiftdata/modelconfiguration/cloudkitdatabase-swift.struct/none)
- [let groupAppContainerIdentifier: String?](/documentation/swiftdata/modelconfiguration/groupappcontaineridentifier)
- [let groupContainer: ModelConfiguration.GroupContainer](/documentation/swiftdata/modelconfiguration/groupcontainer-swift.property)
- [ModelConfiguration.GroupContainer](/documentation/swiftdata/modelconfiguration/groupcontainer-swift.struct)

###### Getting discovery options

- [static var automatic: ModelConfiguration.GroupContainer](/documentation/swiftdata/modelconfiguration/groupcontainer-swift.struct/automatic)
- [static func identifier(String) -> ModelConfiguration.GroupContainer](/documentation/swiftdata/modelconfiguration/groupcontainer-swift.struct/identifier(_:))
- [static var none: ModelConfiguration.GroupContainer](/documentation/swiftdata/modelconfiguration/groupcontainer-swift.struct/none)
- [Schema](/documentation/swiftdata/schema)

##### Creating a schema

- [init(Schema.Entity..., version: Schema.Version)](/documentation/swiftdata/schema/init(_:version:)-8el78)
- [init([any PersistentModel.Type], version: Schema.Version)](/documentation/swiftdata/schema/init(_:version:)-8jo9o)
- [convenience init(versionedSchema: any VersionedSchema.Type)](/documentation/swiftdata/schema/init(versionedschema:))
- [VersionedSchema](/documentation/swiftdata/versionedschema)

###### Describing the version

- [static var versionIdentifier: Schema.Version](/documentation/swiftdata/versionedschema/versionidentifier)

###### Specifying the included models

- [static var models: [any PersistentModel.Type]](/documentation/swiftdata/versionedschema/models)
- [init()](/documentation/swiftdata/schema/init())
- [Schema components](/documentation/swiftdata/schemacomponents)

###### Entities

- [Schema.Entity](/documentation/swiftdata/schema/entity)

###### Creating an entity

- [init(String)](/documentation/swiftdata/schema/entity/init(_:))
- [init(String, properties: any SchemaProperty...)](/documentation/swiftdata/schema/entity/init(_:properties:))
- [init(String, subentities: Schema.Entity..., properties: any SchemaProperty...)](/documentation/swiftdata/schema/entity/init(_:subentities:properties:))

###### Assigning identity

- [var name: String](/documentation/swiftdata/schema/entity/name)

###### Managing attributes

- [var attributes: Set<Schema.Attribute>](/documentation/swiftdata/schema/entity/attributes)
- [var attributesByName: [String : Schema.Attribute]](/documentation/swiftdata/schema/entity/attributesbyname)

###### Defining relationships

- [var relationships: Set<Schema.Relationship>](/documentation/swiftdata/schema/entity/relationships)
- [var relationshipsByName: [String : Schema.Relationship]](/documentation/swiftdata/schema/entity/relationshipsbyname)

###### Managing properties

- [var properties: [any SchemaProperty]](/documentation/swiftdata/schema/entity/properties)
- [var inheritedProperties: [any SchemaProperty]](/documentation/swiftdata/schema/entity/inheritedproperties)
- [var inheritedPropertiesByName: [String : any SchemaProperty]](/documentation/swiftdata/schema/entity/inheritedpropertiesbyname)
- [var storedProperties: [any SchemaProperty]](/documentation/swiftdata/schema/entity/storedproperties)
- [var storedPropertiesByName: [String : any SchemaProperty]](/documentation/swiftdata/schema/entity/storedpropertiesbyname)

###### Applying constraints

- [var uniquenessConstraints: [[String]]](/documentation/swiftdata/schema/entity/uniquenessconstraints)

###### Configuring the inheritance chain

- [var superentity: Schema.Entity?](/documentation/swiftdata/schema/entity/superentity)
- [var superentityName: String?](/documentation/swiftdata/schema/entity/superentityname)
- [var subentities: Set<Schema.Entity>](/documentation/swiftdata/schema/entity/subentities)

###### Instance Properties

- [var indices: [[String]]](/documentation/swiftdata/schema/entity/indices)

###### Attributes

- [Schema.Attribute](/documentation/swiftdata/schema/attribute)

###### Creating an attribute

- [init(Schema.Attribute.Option..., originalName: String?, hashModifier: String?)](/documentation/swiftdata/schema/attribute/init(_:originalname:hashmodifier:))
- [init(name: String, originalName: String?, options: [Schema.Attribute.Option], valueType: any Any.Type, defaultValue: Any?, hashModifier: String?)](/documentation/swiftdata/schema/attribute/init(name:originalname:options:valuetype:defaultvalue:hashmodifier:))

###### Specifying value information

- [var defaultValue: Any?](/documentation/swiftdata/schema/attribute/defaultvalue)

###### Determining behavior

- [var options: [Schema.Attribute.Option]](/documentation/swiftdata/schema/attribute/options)
- [var isTransformable: Bool](/documentation/swiftdata/schema/attribute/istransformable)

###### Versioning

- [var hashModifier: String?](/documentation/swiftdata/schema/attribute/hashmodifier)

###### Structures

- [Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option)

###### Accessing property options

- [static var allowsCloudEncryption: Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/allowscloudencryption)
- [static var externalStorage: Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/externalstorage)
- [static var preserveValueOnDeletion: Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/preservevalueondeletion)
- [static var spotlight: Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/spotlight)
- [static var unique: Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/unique)
- [static func transformable(by: ValueTransformer.Type) -> Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/transformable(by:)-9d4xh)
- [static func transformable(by: String) -> Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/transformable(by:)-lunz)

###### Type Properties

- [static var ephemeral: Schema.Attribute.Option](/documentation/swiftdata/schema/attribute/option/ephemeral)
- [Schema.CompositeAttribute](/documentation/swiftdata/schema/compositeattribute)

###### Creating a composite attribute

- [init(name: String, originalName: String?, options: [Schema.Attribute.Option], valueType: any Any.Type, defaultValue: Any?, hashModifier: String?)](/documentation/swiftdata/schema/compositeattribute/init(name:originalname:options:valuetype:defaultvalue:hashmodifier:))

###### Composing attributes

- [var properties: [Schema.Attribute]](/documentation/swiftdata/schema/compositeattribute/properties)

###### Encoding and decoding

- [func encode(to: any Encoder) throws](/documentation/swiftdata/schema/compositeattribute/encode(to:))
- [init(from: any Decoder) throws](/documentation/swiftdata/schema/compositeattribute/init(from:))

###### Debugging

- [var debugDescription: String](/documentation/swiftdata/schema/compositeattribute/debugdescription)

###### Operators

- [static func == (Schema.CompositeAttribute, Schema.CompositeAttribute) -> Bool](/documentation/swiftdata/schema/compositeattribute/==(_:_:))

###### Relationships

- [Schema.Relationship](/documentation/swiftdata/schema/relationship)

###### Creating a relationship

- [init(Schema.Relationship.Option..., deleteRule: Schema.Relationship.DeleteRule, minimumModelCount: Int?, maximumModelCount: Int?, originalName: String?, inverse: AnyKeyPath?, hashModifier: String?)](/documentation/swiftdata/schema/relationship/init(_:deleterule:minimummodelcount:maximummodelcount:originalname:inverse:hashmodifier:))

###### Managing the configuration

- [var keypath: AnyKeyPath?](/documentation/swiftdata/schema/relationship/keypath)
- [var destination: String](/documentation/swiftdata/schema/relationship/destination)
- [var inverseName: String?](/documentation/swiftdata/schema/relationship/inversename)
- [var inverseKeyPath: AnyKeyPath?](/documentation/swiftdata/schema/relationship/inversekeypath)
- [var deleteRule: Schema.Relationship.DeleteRule](/documentation/swiftdata/schema/relationship/deleterule-swift.property)
- [Schema.Relationship.DeleteRule](/documentation/swiftdata/schema/relationship/deleterule-swift.enum)

###### Accessing delete rules

- [case cascade](/documentation/swiftdata/schema/relationship/deleterule-swift.enum/cascade)
- [case deny](/documentation/swiftdata/schema/relationship/deleterule-swift.enum/deny)
- [case noAction](/documentation/swiftdata/schema/relationship/deleterule-swift.enum/noaction)
- [case nullify](/documentation/swiftdata/schema/relationship/deleterule-swift.enum/nullify)
- [var isToOneRelationship: Bool](/documentation/swiftdata/schema/relationship/istoonerelationship)

###### Determining behavior

- [var options: [Schema.Relationship.Option]](/documentation/swiftdata/schema/relationship/options)

###### Versioning

- [var hashModifier: String?](/documentation/swiftdata/schema/relationship/hashmodifier)

###### Structures

- [Schema.Relationship.Option](/documentation/swiftdata/schema/relationship/option)

###### Type Properties

- [static var unique: Schema.Relationship.Option](/documentation/swiftdata/schema/relationship/option/unique)

###### Instance Properties

- [var maximumModelCount: Int?](/documentation/swiftdata/schema/relationship/maximummodelcount)
- [var minimumModelCount: Int?](/documentation/swiftdata/schema/relationship/minimummodelcount)

###### Internal

- [Internal symbols](/documentation/swiftdata/schemacomponentsinternal)

###### Properties

- [SchemaProperty](/documentation/swiftdata/schemaproperty)

###### Instance Properties

- [var isAttribute: Bool](/documentation/swiftdata/schemaproperty/isattribute)
- [var isOptional: Bool](/documentation/swiftdata/schemaproperty/isoptional)
- [var isRelationship: Bool](/documentation/swiftdata/schemaproperty/isrelationship)
- [var isTransient: Bool](/documentation/swiftdata/schemaproperty/istransient)
- [var isUnique: Bool](/documentation/swiftdata/schemaproperty/isunique)
- [var name: String](/documentation/swiftdata/schemaproperty/name)
- [var originalName: String](/documentation/swiftdata/schemaproperty/originalname)
- [var valueType: any Any.Type](/documentation/swiftdata/schemaproperty/valuetype)
- [RelationshipCollection](/documentation/swiftdata/relationshipcollection)

###### Associated Types

- [PersistentElement](/documentation/swiftdata/relationshipcollection/persistentelement)

##### Accessing entities

- [let entities: [Schema.Entity]](/documentation/swiftdata/schema/entities)
- [let entitiesByName: [String : Schema.Entity]](/documentation/swiftdata/schema/entitiesbyname)
- [Schema.Entity](/documentation/swiftdata/schema/entity)

###### Creating an entity

- [init(String)](/documentation/swiftdata/schema/entity/init(_:))
- [init(String, properties: any SchemaProperty...)](/documentation/swiftdata/schema/entity/init(_:properties:))
- [init(String, subentities: Schema.Entity..., properties: any SchemaProperty...)](/documentation/swiftdata/schema/entity/init(_:subentities:properties:))

###### Assigning identity

- [var name: String](/documentation/swiftdata/schema/entity/name)

###### Managing attributes

- [var attributes: Set<Schema.Attribute>](/documentation/swiftdata/schema/entity/attributes)
- [var attributesByName: [String : Schema.Attribute]](/documentation/swiftdata/schema/entity/attributesbyname)

###### Defining relationships

- [var relationships: Set<Schema.Relationship>](/documentation/swiftdata/schema/entity/relationships)
- [var relationshipsByName: [String : Schema.Relationship]](/documentation/swiftdata/schema/entity/relationshipsbyname)

###### Managing properties

- [var properties: [any SchemaProperty]](/documentation/swiftdata/schema/entity/properties)
- [var inheritedProperties: [any SchemaProperty]](/documentation/swiftdata/schema/entity/inheritedproperties)
- [var inheritedPropertiesByName: [String : any SchemaProperty]](/documentation/swiftdata/schema/entity/inheritedpropertiesbyname)
- [var storedProperties: [any SchemaProperty]](/documentation/swiftdata/schema/entity/storedproperties)
- [var storedPropertiesByName: [String : any SchemaProperty]](/documentation/swiftdata/schema/entity/storedpropertiesbyname)

###### Applying constraints

- [var uniquenessConstraints: [[String]]](/documentation/swiftdata/schema/entity/uniquenessconstraints)

###### Configuring the inheritance chain

- [var superentity: Schema.Entity?](/documentation/swiftdata/schema/entity/superentity)
- [var superentityName: String?](/documentation/swiftdata/schema/entity/superentityname)
- [var subentities: Set<Schema.Entity>](/documentation/swiftdata/schema/entity/subentities)

###### Instance Properties

- [var indices: [[String]]](/documentation/swiftdata/schema/entity/indices)

##### Accessing version details

- [static let schemaEncodingVersion: Schema.Version](/documentation/swiftdata/schema/schemaencodingversion)
- [let encodingVersion: Schema.Version](/documentation/swiftdata/schema/encodingversion)

##### Saving and loading

- [func save(to: URL) throws](/documentation/swiftdata/schema/save(to:))
- [static func load(from: URL) throws -> Schema](/documentation/swiftdata/schema/load(from:))

##### Classes

- [Schema.Index](/documentation/swiftdata/schema/index)

###### Initializers

- [init(Schema.Index<T>.Types<T>...)](/documentation/swiftdata/schema/index/init(_:)-4i37e)
- [init([PartialKeyPath<T>]...)](/documentation/swiftdata/schema/index/init(_:)-527in)

###### Instance Properties

- [let indices: [Schema.Index<T>.Types<T>]](/documentation/swiftdata/schema/index/indices)

###### Enumerations

- [Schema.Index.CodingKeys](/documentation/swiftdata/schema/index/codingkeys)

###### Enumeration Cases

- [case indices](/documentation/swiftdata/schema/index/codingkeys/indices)
- [Schema.Index.Types](/documentation/swiftdata/schema/index/types)

###### Enumeration Cases

- [case binary([PartialKeyPath<P>])](/documentation/swiftdata/schema/index/types/binary(_:))
- [case rtree([PartialKeyPath<P>])](/documentation/swiftdata/schema/index/types/rtree(_:))
- [Schema.Unique](/documentation/swiftdata/schema/unique)

###### Initializers

- [init([PartialKeyPath<T>]...)](/documentation/swiftdata/schema/unique/init(_:))

###### Instance Properties

- [let constraints: [[PartialKeyPath<T>]]](/documentation/swiftdata/schema/unique/constraints)

###### Enumerations

- [Schema.Unique.CodingKeys](/documentation/swiftdata/schema/unique/codingkeys)

###### Enumeration Cases

- [case constraints](/documentation/swiftdata/schema/unique/codingkeys/constraints)

##### Structures

- [Schema.PropertyMetadata](/documentation/swiftdata/schema/propertymetadata)

###### Initializers

- [init(name: String, keypath: AnyKeyPath, defaultValue: Any?, metadata: (any SchemaProperty)?)](/documentation/swiftdata/schema/propertymetadata/init(name:keypath:defaultvalue:metadata:))
- [Schema.Version](/documentation/swiftdata/schema/version-swift.struct)

###### Operators

- [static func == (Schema.Version, Schema.Version) -> Bool](/documentation/swiftdata/schema/version-swift.struct/==(_:_:))
- [static func < (Schema.Version, Schema.Version) -> Bool](/documentation/swiftdata/schema/version-swift.struct/_(_:_:))

###### Initializers

- [init(Int, Int, Int)](/documentation/swiftdata/schema/version-swift.struct/init(_:_:_:))

###### Instance Properties

- [var description: String](/documentation/swiftdata/schema/version-swift.struct/description)
- [let major: Int](/documentation/swiftdata/schema/version-swift.struct/major)
- [let minor: Int](/documentation/swiftdata/schema/version-swift.struct/minor)
- [let patch: Int](/documentation/swiftdata/schema/version-swift.struct/patch)

##### Initializers

- [convenience init(any PersistentModel.Type..., version: Schema.Version)](/documentation/swiftdata/schema/init(_:version:)-1aea5)

##### Instance Properties

- [let version: Schema.Version](/documentation/swiftdata/schema/version-swift.property)

##### Instance Methods

- [func entity<T>(for: T.Type) -> Schema.Entity?](/documentation/swiftdata/schema/entity(for:))

##### Type Methods

- [static func entityName<T>(for: T.Type) -> String](/documentation/swiftdata/schema/entityname(for:))
- [SchemaMigrationPlan](/documentation/swiftdata/schemamigrationplan)

##### Managing versioned schemas

- [static var schemas: [any VersionedSchema.Type]](/documentation/swiftdata/schemamigrationplan/schemas)
- [VersionedSchema](/documentation/swiftdata/versionedschema)

###### Describing the version

- [static var versionIdentifier: Schema.Version](/documentation/swiftdata/versionedschema/versionidentifier)

###### Specifying the included models

- [static var models: [any PersistentModel.Type]](/documentation/swiftdata/versionedschema/models)

##### Managing migration stages

- [static var stages: [MigrationStage]](/documentation/swiftdata/schemamigrationplan/stages)
- [MigrationStage](/documentation/swiftdata/migrationstage)

###### Migration stages

- [case lightweight(fromVersion: any VersionedSchema.Type, toVersion: any VersionedSchema.Type)](/documentation/swiftdata/migrationstage/lightweight(fromversion:toversion:))
- [case custom(fromVersion: any VersionedSchema.Type, toVersion: any VersionedSchema.Type, willMigrate: ((ModelContext) throws -> Void)?, didMigrate: ((ModelContext) throws -> Void)?)](/documentation/swiftdata/migrationstage/custom(fromversion:toversion:willmigrate:didmigrate:))

#### Managing schema and configuration details

- [let schema: Schema](/documentation/swiftdata/modelcontainer/schema)
- [var configurations: Set<ModelConfiguration>](/documentation/swiftdata/modelcontainer/configurations)
- [let migrationPlan: (any SchemaMigrationPlan.Type)?](/documentation/swiftdata/modelcontainer/migrationplan)

#### Accessing the context

- [var mainContext: ModelContext](/documentation/swiftdata/modelcontainer/maincontext)

#### Deleting the container

- [func deleteAllData()](/documentation/swiftdata/modelcontainer/deletealldata())

#### Initializers

- [convenience init(for: any PersistentModel.Type..., configurations: any DataStoreConfiguration...) throws](/documentation/swiftdata/modelcontainer/init(for:configurations:)-621ei)
- [init(for: Schema, configurations: [any DataStoreConfiguration]) throws](/documentation/swiftdata/modelcontainer/init(for:configurations:)-93ifi)

#### Instance Methods

- [func erase() throws](/documentation/swiftdata/modelcontainer/erase())

### Fetching models

- [func fetch<T>(FetchDescriptor<T>) throws -> [T]](/documentation/swiftdata/modelcontext/fetch(_:))
- [func fetch<T>(FetchDescriptor<T>, batchSize: Int) throws -> FetchResultsCollection<T>](/documentation/swiftdata/modelcontext/fetch(_:batchsize:))
- [func fetchCount<T>(FetchDescriptor<T>) throws -> Int](/documentation/swiftdata/modelcontext/fetchcount(_:))
- [FetchDescriptor](/documentation/swiftdata/fetchdescriptor)

#### Creating a fetch descriptor

- [init(predicate: Predicate<T>?, sortBy: [SortDescriptor<T>])](/documentation/swiftdata/fetchdescriptor/init(predicate:sortby:))
- [Predicate](/documentation/foundation/predicate)
- [SortDescriptor](/documentation/foundation/sortdescriptor)

#### Constraining the fetch

- [var predicate: Predicate<T>?](/documentation/swiftdata/fetchdescriptor/predicate)
- [var sortBy: [SortDescriptor<T>]](/documentation/swiftdata/fetchdescriptor/sortby)
- [var fetchLimit: Int?](/documentation/swiftdata/fetchdescriptor/fetchlimit)
- [var fetchOffset: Int?](/documentation/swiftdata/fetchdescriptor/fetchoffset)
- [var includePendingChanges: Bool](/documentation/swiftdata/fetchdescriptor/includependingchanges)

#### Specifying the fetched attributes

- [var relationshipKeyPathsForPrefetching: [PartialKeyPath<T>]](/documentation/swiftdata/fetchdescriptor/relationshipkeypathsforprefetching)
- [var propertiesToFetch: [PartialKeyPath<T>]](/documentation/swiftdata/fetchdescriptor/propertiestofetch)
- [FetchResultsCollection](/documentation/swiftdata/fetchresultscollection)
- [func enumerate<T>(FetchDescriptor<T>, batchSize: Int, allowEscapingMutations: Bool, block: (T) throws -> Void) throws](/documentation/swiftdata/modelcontext/enumerate(_:batchsize:allowescapingmutations:block:))
- [func model(for: PersistentIdentifier) -> any PersistentModel](/documentation/swiftdata/modelcontext/model(for:))
- [func registeredModel<T>(for: PersistentIdentifier) -> T?](/documentation/swiftdata/modelcontext/registeredmodel(for:))

### Inserting models

- [var insertedModelsArray: [any PersistentModel]](/documentation/swiftdata/modelcontext/insertedmodelsarray)
- [func insert<T>(T)](/documentation/swiftdata/modelcontext/insert(_:))

### Modifying models

- [var hasChanges: Bool](/documentation/swiftdata/modelcontext/haschanges)
- [var changedModelsArray: [any PersistentModel]](/documentation/swiftdata/modelcontext/changedmodelsarray)

### Deleting models

- [var deletedModelsArray: [any PersistentModel]](/documentation/swiftdata/modelcontext/deletedmodelsarray)
- [func delete<T>(T)](/documentation/swiftdata/modelcontext/delete(_:))
- [func delete<T>(model: T.Type, where: Predicate<T>?, includeSubclasses: Bool) throws](/documentation/swiftdata/modelcontext/delete(model:where:includesubclasses:))

### Persisting unsaved changes

- [var autosaveEnabled: Bool](/documentation/swiftdata/modelcontext/autosaveenabled)
- [func save() throws](/documentation/swiftdata/modelcontext/save())
- [func transaction(block: () throws -> Void) throws](/documentation/swiftdata/modelcontext/transaction(block:))
- [func rollback()](/documentation/swiftdata/modelcontext/rollback())

### Fetching only persistent identifiers

- [func fetchIdentifiers<T>(FetchDescriptor<T>) throws -> [PersistentIdentifier]](/documentation/swiftdata/modelcontext/fetchidentifiers(_:))
- [func fetchIdentifiers<T>(FetchDescriptor<T>, batchSize: Int) throws -> FetchResultsCollection<PersistentIdentifier>](/documentation/swiftdata/modelcontext/fetchidentifiers(_:batchsize:))

### Accessing the container

- [var container: ModelContainer](/documentation/swiftdata/modelcontext/container)

### Performing undo and redo

- [func processPendingChanges()](/documentation/swiftdata/modelcontext/processpendingchanges())
- [var undoManager: UndoManager?](/documentation/swiftdata/modelcontext/undomanager)

### Registering for notifications

- [static let willSave: Notification.Name](/documentation/swiftdata/modelcontext/willsave)
- [static let didSave: Notification.Name](/documentation/swiftdata/modelcontext/didsave)
- [ModelContext.NotificationKey](/documentation/swiftdata/modelcontext/notificationkey)

#### Accessing notification keys

- [case deletedIdentifiers](/documentation/swiftdata/modelcontext/notificationkey/deletedidentifiers)
- [case insertedIdentifiers](/documentation/swiftdata/modelcontext/notificationkey/insertedidentifiers)
- [case invalidatedAllIdentifiers](/documentation/swiftdata/modelcontext/notificationkey/invalidatedallidentifiers)
- [case updatedIdentifiers](/documentation/swiftdata/modelcontext/notificationkey/updatedidentifiers)
- [case queryGeneration](/documentation/swiftdata/modelcontext/notificationkey/querygeneration)

### Debugging contexts

- [var debugDescription: String](/documentation/swiftdata/modelcontext/debugdescription)

### Instance Properties

- [var author: String?](/documentation/swiftdata/modelcontext/author)
- [var editingState: EditingState](/documentation/swiftdata/modelcontext/editingstate)

### Instance Methods

- [func deleteHistory<T>(HistoryDescriptor<T>) throws](/documentation/swiftdata/modelcontext/deletehistory(_:))
- [func fetchHistory<T>(HistoryDescriptor<T>) throws -> [T]](/documentation/swiftdata/modelcontext/fetchhistory(_:))
- [Fetching and filtering time-based model changes](/documentation/swiftdata/fetching-and-filtering-time-based-model-changes)
- [HistoryDescriptor](/documentation/swiftdata/historydescriptor)

### Creating a descriptor

- [init(predicate: Predicate<TransactionType>?)](/documentation/swiftdata/historydescriptor/init(predicate:))
- [init(predicate: Predicate<TransactionType>?, sortBy: [SortDescriptor<TransactionType>])](/documentation/swiftdata/historydescriptor/init(predicate:sortby:))

### Getting the descriptor configuration

- [var fetchLimit: UInt64](/documentation/swiftdata/historydescriptor/fetchlimit)
- [var predicate: Predicate<TransactionType>?](/documentation/swiftdata/historydescriptor/predicate)
- [var sortBy: [SortDescriptor<TransactionType>]](/documentation/swiftdata/historydescriptor/sortby)
- [Deleting persistent data from your app](/documentation/swiftdata/deleting-persistent-data-from-your-app)
- [Reverting data changes using the undo manager](/documentation/swiftdata/reverting-data-changes-using-the-undo-manager)
- [Syncing model data across a person’s devices](/documentation/swiftdata/syncing-model-data-across-a-persons-devices)
- [Concurrency support](/documentation/swiftdata/concurrencysupport)

### Model actors

- [macro ModelActor()](/documentation/swiftdata/modelactor())
- [ModelActor](/documentation/swiftdata/modelactor)

#### Accessing the container and context

- [var modelContainer: ModelContainer](/documentation/swiftdata/modelactor/modelcontainer)
- [var modelContext: ModelContext](/documentation/swiftdata/modelactor/modelcontext)

#### Accessing the executors

- [var modelExecutor: any ModelExecutor](/documentation/swiftdata/modelactor/modelexecutor)
- [var unownedExecutor: UnownedSerialExecutor](/documentation/swiftdata/modelactor/unownedexecutor)

#### Accessing specific models

- [subscript<T>(PersistentIdentifier, as _: T.Type) -> T?](/documentation/swiftdata/modelactor/subscript(_:as:))

### Model executors

- [DefaultSerialModelExecutor](/documentation/swiftdata/defaultserialmodelexecutor)

#### Creating a model executor

- [init(modelContext: ModelContext)](/documentation/swiftdata/defaultserialmodelexecutor/init(modelcontext:))
- [SerialModelExecutor](/documentation/swiftdata/serialmodelexecutor)
- [ModelExecutor](/documentation/swiftdata/modelexecutor)

#### Accessing the context

- [var modelContext: ModelContext](/documentation/swiftdata/modelexecutor/modelcontext)

## Model fetch

- [Filtering and sorting persistent data](/documentation/swiftdata/filtering-and-sorting-persistent-data)
- [macro Query()](/documentation/swiftdata/query())
- [Additional query macros](/documentation/swiftdata/additionalquerymacros)

### Basic queries

- [macro Query(animation: Animation)](/documentation/swiftdata/query(animation:))
- [macro Query(transaction: Transaction)](/documentation/swiftdata/query(transaction:))

### Predicate-based queries

- [macro Query<Element>(filter: Predicate<Element>?, sort: [SortDescriptor<Element>], animation: Animation)](/documentation/swiftdata/query(filter:sort:animation:))
- [macro Query<Value, Element>(filter: Predicate<Element>?, sort: KeyPath<Element, Value>, order: SortOrder, animation: Animation)](/documentation/swiftdata/query(filter:sort:order:animation:)-80h6f)
- [macro Query<Value, Element>(filter: Predicate<Element>?, sort: KeyPath<Element, Value?>, order: SortOrder, animation: Animation)](/documentation/swiftdata/query(filter:sort:order:animation:)-pb15)
- [macro Query<Element>(filter: Predicate<Element>?, sort: [SortDescriptor<Element>], transaction: Transaction?)](/documentation/swiftdata/query(filter:sort:transaction:))
- [macro Query<Value, Element>(filter: Predicate<Element>?, sort: KeyPath<Element, Value>, order: SortOrder, transaction: Transaction?)](/documentation/swiftdata/query(filter:sort:order:transaction:)-6kkiu)
- [macro Query<Value, Element>(filter: Predicate<Element>?, sort: KeyPath<Element, Value?>, order: SortOrder, transaction: Transaction?)](/documentation/swiftdata/query(filter:sort:order:transaction:)-8tk8u)

### Descriptor-based queries

- [macro Query<Element>(FetchDescriptor<Element>, animation: Animation)](/documentation/swiftdata/query(_:animation:))
- [macro Query<Element>(FetchDescriptor<Element>, transaction: Transaction?)](/documentation/swiftdata/query(_:transaction:))
- [Query](/documentation/swiftdata/query)

### Creating a query

- [init(FetchDescriptor<Element>, animation: Animation)](/documentation/swiftdata/query/init(_:animation:))
- [init(filter: Predicate<Element>?, sort: [SortDescriptor<Element>], animation: Animation)](/documentation/swiftdata/query/init(filter:sort:animation:))
- [init<Value>(filter: Predicate<Element>?, sort: KeyPath<Element, Value?>, order: SortOrder, animation: Animation)](/documentation/swiftdata/query/init(filter:sort:order:animation:)-1qfoj)
- [init<Value>(filter: Predicate<Element>?, sort: KeyPath<Element, Value>, order: SortOrder, animation: Animation)](/documentation/swiftdata/query/init(filter:sort:order:animation:)-3qovd)
- [init(FetchDescriptor<Element>, transaction: Transaction?)](/documentation/swiftdata/query/init(_:transaction:))
- [init(filter: Predicate<Element>?, sort: [SortDescriptor<Element>], transaction: Transaction?)](/documentation/swiftdata/query/init(filter:sort:transaction:))
- [init<Value>(filter: Predicate<Element>?, sort: KeyPath<Element, Value>, order: SortOrder, transaction: Transaction?)](/documentation/swiftdata/query/init(filter:sort:order:transaction:)-2bx9a)
- [init<Value>(filter: Predicate<Element>?, sort: KeyPath<Element, Value?>, order: SortOrder, transaction: Transaction?)](/documentation/swiftdata/query/init(filter:sort:order:transaction:)-8q7vs)

### Getting query configuration

- [var modelContext: ModelContext](/documentation/swiftdata/query/modelcontext)
- [var fetchError: (any Error)?](/documentation/swiftdata/query/fetcherror)

### Accessing the value

- [var wrappedValue: Result](/documentation/swiftdata/query/wrappedvalue)
- [FetchDescriptor](/documentation/swiftdata/fetchdescriptor)

### Creating a fetch descriptor

- [init(predicate: Predicate<T>?, sortBy: [SortDescriptor<T>])](/documentation/swiftdata/fetchdescriptor/init(predicate:sortby:))
- [Predicate](/documentation/foundation/predicate)
- [SortDescriptor](/documentation/foundation/sortdescriptor)

### Constraining the fetch

- [var predicate: Predicate<T>?](/documentation/swiftdata/fetchdescriptor/predicate)
- [var sortBy: [SortDescriptor<T>]](/documentation/swiftdata/fetchdescriptor/sortby)
- [var fetchLimit: Int?](/documentation/swiftdata/fetchdescriptor/fetchlimit)
- [var fetchOffset: Int?](/documentation/swiftdata/fetchdescriptor/fetchoffset)
- [var includePendingChanges: Bool](/documentation/swiftdata/fetchdescriptor/includependingchanges)

### Specifying the fetched attributes

- [var relationshipKeyPathsForPrefetching: [PartialKeyPath<T>]](/documentation/swiftdata/fetchdescriptor/relationshipkeypathsforprefetching)
- [var propertiesToFetch: [PartialKeyPath<T>]](/documentation/swiftdata/fetchdescriptor/propertiestofetch)

## Model storage

- [Maintaining a local copy of server data](/documentation/swiftdata/maintaining-a-local-copy-of-server-data)
- [DefaultStore](/documentation/swiftdata/defaultstore)

### Accessing store information

- [let name: String](/documentation/swiftdata/defaultstore/name)

### Processing fetch requests

- [DefaultSnapshot](/documentation/swiftdata/defaultsnapshot)

### Managing model change history

- [DefaultStore.TokenType](/documentation/swiftdata/defaultstore/tokentype)
- [DataStore](/documentation/swiftdata/datastore)

### Creating a data store

- [init(Self.Configuration, migrationPlan: (any SchemaMigrationPlan.Type)?) throws](/documentation/swiftdata/datastore/init(_:migrationplan:))

### Accessing store information

- [var configuration: Self.Configuration](/documentation/swiftdata/datastore/configuration-swift.property)
- [Configuration](/documentation/swiftdata/datastore/configuration-swift.associatedtype)
- [DataStoreConfiguration](/documentation/swiftdata/datastoreconfiguration)

#### Associated Types

- [Store](/documentation/swiftdata/datastoreconfiguration/store)

#### Instance Properties

- [var name: String](/documentation/swiftdata/datastoreconfiguration/name)
- [var schema: Schema?](/documentation/swiftdata/datastoreconfiguration/schema)

#### Instance Methods

- [func validate() throws](/documentation/swiftdata/datastoreconfiguration/validate())
- [var identifier: String](/documentation/swiftdata/datastore/identifier)
- [var schema: Schema](/documentation/swiftdata/datastore/schema)

### Processing fetch requests

- [func fetch<T>(DataStoreFetchRequest<T>) throws -> DataStoreFetchResult<T, Self.Snapshot>](/documentation/swiftdata/datastore/fetch(_:))
- [DataStoreFetchRequest](/documentation/swiftdata/datastorefetchrequest)

#### Instance Properties

- [let descriptor: FetchDescriptor<T>](/documentation/swiftdata/datastorefetchrequest/descriptor)
- [let editingState: EditingState](/documentation/swiftdata/datastorefetchrequest/editingstate)
- [DataStoreFetchResult](/documentation/swiftdata/datastorefetchresult)

#### Initializers

- [init(descriptor: FetchDescriptor<ModelType>, fetchedSnapshots: [SnapshotType], relatedSnapshots: [PersistentIdentifier : SnapshotType])](/documentation/swiftdata/datastorefetchresult/init(descriptor:fetchedsnapshots:relatedsnapshots:))

#### Instance Properties

- [let descriptor: FetchDescriptor<ModelType>](/documentation/swiftdata/datastorefetchresult/descriptor)
- [let fetchedSnapshots: [SnapshotType]](/documentation/swiftdata/datastorefetchresult/fetchedsnapshots)
- [let relatedSnapshots: [PersistentIdentifier : SnapshotType]](/documentation/swiftdata/datastorefetchresult/relatedsnapshots)
- [Snapshot](/documentation/swiftdata/datastore/snapshot)
- [DataStoreSnapshot](/documentation/swiftdata/datastoresnapshot)

#### Initializers

- [init(from: any BackingData, relatedBackingDatas: inout [PersistentIdentifier : any BackingData])](/documentation/swiftdata/datastoresnapshot/init(from:relatedbackingdatas:))

#### Instance Properties

- [var persistentIdentifier: PersistentIdentifier](/documentation/swiftdata/datastoresnapshot/persistentidentifier)

#### Instance Methods

- [func copy(persistentIdentifier: PersistentIdentifier, remappedIdentifiers: [PersistentIdentifier : PersistentIdentifier]?) -> Self](/documentation/swiftdata/datastoresnapshot/copy(persistentidentifier:remappedidentifiers:))
- [DataStoreSnapshotValue](/documentation/swiftdata/datastoresnapshotvalue)
- [func fetchCount<T>(DataStoreFetchRequest<T>) throws -> Int](/documentation/swiftdata/datastore/fetchcount(_:))
- [func fetchIdentifiers<T>(DataStoreFetchRequest<T>) throws -> [PersistentIdentifier]](/documentation/swiftdata/datastore/fetchidentifiers(_:))

### Persisting model data

- [func save(DataStoreSaveChangesRequest<Self.Snapshot>) throws -> DataStoreSaveChangesResult<Self.Snapshot>](/documentation/swiftdata/datastore/save(_:))
- [DataStoreSaveChangesRequest](/documentation/swiftdata/datastoresavechangesrequest)

#### Instance Properties

- [let deleted: [SnapshotType]](/documentation/swiftdata/datastoresavechangesrequest/deleted)
- [let editingState: EditingState](/documentation/swiftdata/datastoresavechangesrequest/editingstate)
- [let inserted: [SnapshotType]](/documentation/swiftdata/datastoresavechangesrequest/inserted)
- [let updated: [SnapshotType]](/documentation/swiftdata/datastoresavechangesrequest/updated)
- [DataStoreSaveChangesResult](/documentation/swiftdata/datastoresavechangesresult)

#### Initializers

- [init(for: String, remappedIdentifiers: [PersistentIdentifier : PersistentIdentifier], snapshotsToReregister: [PersistentIdentifier : T])](/documentation/swiftdata/datastoresavechangesresult/init(for:remappedidentifiers:snapshotstoreregister:))

#### Instance Properties

- [let remappedIdentifiers: [PersistentIdentifier : PersistentIdentifier]](/documentation/swiftdata/datastoresavechangesresult/remappedidentifiers)
- [let snapshotsToReregister: [PersistentIdentifier : T]](/documentation/swiftdata/datastoresavechangesresult/snapshotstoreregister)
- [let storeIdentifier: String](/documentation/swiftdata/datastoresavechangesresult/storeidentifier)

### Removing all persisted model data

- [func erase() throws](/documentation/swiftdata/datastore/erase())

### Sharing cached data between model contexts

- [func initializeState(for: EditingState)](/documentation/swiftdata/datastore/initializestate(for:))
- [EditingState](/documentation/swiftdata/editingstate)

#### Instance Properties

- [var author: String?](/documentation/swiftdata/editingstate/author)
- [func cachedSnapshots(for: [PersistentIdentifier], editingState: EditingState) throws -> [PersistentIdentifier : Self.Snapshot]](/documentation/swiftdata/datastore/cachedsnapshots(for:editingstate:))
- [func invalidateState(for: EditingState)](/documentation/swiftdata/datastore/invalidatestate(for:))
- [DataStoreBatching](/documentation/swiftdata/datastorebatching)

### Deleting persisted model data

- [func delete<T>(DataStoreBatchDeleteRequest<T>) throws](/documentation/swiftdata/datastorebatching/delete(_:))
- [DataStoreBatchDeleteRequest](/documentation/swiftdata/datastorebatchdeleterequest)

#### Instance Properties

- [let editingState: EditingState](/documentation/swiftdata/datastorebatchdeleterequest/editingstate)
- [let includeSubclasses: Bool](/documentation/swiftdata/datastorebatchdeleterequest/includesubclasses)
- [let predicate: Predicate<T>?](/documentation/swiftdata/datastorebatchdeleterequest/predicate)
- [HistoryProviding](/documentation/swiftdata/historyproviding)

### Processing history fetch requests

- [func fetchHistory(HistoryDescriptor<Self.HistoryType>) throws -> [Self.HistoryType]](/documentation/swiftdata/historyproviding/fetchhistory(_:))

### Deleting history

- [func deleteHistory(HistoryDescriptor<Self.HistoryType>) throws](/documentation/swiftdata/historyproviding/deletehistory(_:))

### Getting the history transaction type

- [HistoryType](/documentation/swiftdata/historyproviding/historytype-swift.associatedtype)

### Type Properties

- [static var historyType: Self.HistoryType.Type](/documentation/swiftdata/historyproviding/historytype-swift.type.property)
- [Building a document-based app using SwiftData](/documentation/swiftui/building-a-document-based-app-using-swiftdata)
- [ModelDocument](/documentation/swiftdata/modeldocument)

## History life cycle

- [HistoryChange](/documentation/swiftdata/historychange)

### Operations

- [case delete(any HistoryDelete)](/documentation/swiftdata/historychange/delete(_:))
- [case insert(any HistoryInsert)](/documentation/swiftdata/historychange/insert(_:))
- [case update(any HistoryUpdate)](/documentation/swiftdata/historychange/update(_:))

### Getting information about a change

- [var changedPersistentIdentifier: PersistentIdentifier](/documentation/swiftdata/historychange/changedpersistentidentifier)
- [HistoryDelete](/documentation/swiftdata/historydelete)

### History deletion properites

- [var changeIdentifier: Self.ChangeIdentifier](/documentation/swiftdata/historydelete/changeidentifier-swift.property)
- [var changedPersistentIdentifier: PersistentIdentifier](/documentation/swiftdata/historydelete/changedpersistentidentifier)
- [var tombstone: HistoryTombstone<Self.Model>](/documentation/swiftdata/historydelete/tombstone)
- [var transactionIdentifier: Self.TransactionIdentifier](/documentation/swiftdata/historydelete/transactionidentifier-swift.property)

### Associated types

- [ChangeIdentifier](/documentation/swiftdata/historydelete/changeidentifier-swift.associatedtype)
- [Model](/documentation/swiftdata/historydelete/model)
- [TransactionIdentifier](/documentation/swiftdata/historydelete/transactionidentifier-swift.associatedtype)
- [HistoryInsert](/documentation/swiftdata/historyinsert)

### Associated Types

- [ChangeIdentifier](/documentation/swiftdata/historyinsert/changeidentifier-swift.associatedtype)
- [Model](/documentation/swiftdata/historyinsert/model)
- [TransactionIdentifier](/documentation/swiftdata/historyinsert/transactionidentifier-swift.associatedtype)

### Instance Properties

- [var changeIdentifier: Self.ChangeIdentifier](/documentation/swiftdata/historyinsert/changeidentifier-swift.property)
- [var changedPersistentIdentifier: PersistentIdentifier](/documentation/swiftdata/historyinsert/changedpersistentidentifier)
- [var transactionIdentifier: Self.TransactionIdentifier](/documentation/swiftdata/historyinsert/transactionidentifier-swift.property)
- [HistoryToken](/documentation/swiftdata/historytoken)

### Associated Types

- [TokenType](/documentation/swiftdata/historytoken/tokentype)

### Instance Properties

- [var tokenValue: Self.TokenType?](/documentation/swiftdata/historytoken/tokenvalue)
- [HistoryTransaction](/documentation/swiftdata/historytransaction)

### Associated Types

- [TokenType](/documentation/swiftdata/historytransaction/tokentype)
- [TransactionIdentifier](/documentation/swiftdata/historytransaction/transactionidentifier-swift.associatedtype)

### Instance Properties

- [var author: String?](/documentation/swiftdata/historytransaction/author)
- [var changes: [HistoryChange]](/documentation/swiftdata/historytransaction/changes)
- [var storeIdentifier: String](/documentation/swiftdata/historytransaction/storeidentifier)
- [var timestamp: Date](/documentation/swiftdata/historytransaction/timestamp)
- [var token: Self.TokenType](/documentation/swiftdata/historytransaction/token)
- [var transactionIdentifier: Self.TransactionIdentifier](/documentation/swiftdata/historytransaction/transactionidentifier-swift.property)
- [HistoryUpdate](/documentation/swiftdata/historyupdate)

### Associated Types

- [ChangeIdentifier](/documentation/swiftdata/historyupdate/changeidentifier-swift.associatedtype)
- [Model](/documentation/swiftdata/historyupdate/model)
- [TransactionIdentifier](/documentation/swiftdata/historyupdate/transactionidentifier-swift.associatedtype)

### Instance Properties

- [var changeIdentifier: Self.ChangeIdentifier](/documentation/swiftdata/historyupdate/changeidentifier-swift.property)
- [var changedPersistentIdentifier: PersistentIdentifier](/documentation/swiftdata/historyupdate/changedpersistentidentifier)
- [var transactionIdentifier: Self.TransactionIdentifier](/documentation/swiftdata/historyupdate/transactionidentifier-swift.property)
- [var updatedAttributes: [any PartialKeyPath<Self.Model> & Sendable]](/documentation/swiftdata/historyupdate/updatedattributes)

### Type Aliases

- [HistoryUpdate.PropertyUpdate](/documentation/swiftdata/historyupdate/propertyupdate)
- [HistoryTombstone](/documentation/swiftdata/historytombstone)

### Subscripts

- [subscript(PartialKeyPath<Model>) -> (any Sendable)?](/documentation/swiftdata/historytombstone/subscript(_:))
- [DefaultHistoryInsert](/documentation/swiftdata/defaulthistoryinsert)

### Operators

- [static func == (DefaultHistoryInsert<Model>, DefaultHistoryInsert<Model>) -> Bool](/documentation/swiftdata/defaulthistoryinsert/==(_:_:))

### Instance Methods

- [func hash(into: inout Hasher)](/documentation/swiftdata/defaulthistoryinsert/hash(into:))
- [DefaultHistoryUpdate](/documentation/swiftdata/defaulthistoryupdate)

### Operators

- [static func == (DefaultHistoryUpdate<Model>, DefaultHistoryUpdate<Model>) -> Bool](/documentation/swiftdata/defaulthistoryupdate/==(_:_:))

### Instance Methods

- [func hash(into: inout Hasher)](/documentation/swiftdata/defaulthistoryupdate/hash(into:))

### Type Aliases

- [DefaultHistoryUpdate.PropertyUpdate](/documentation/swiftdata/defaulthistoryupdate/propertyupdate)
- [DefaultHistoryDelete](/documentation/swiftdata/defaulthistorydelete)

### Operators

- [static func == (DefaultHistoryDelete<Model>, DefaultHistoryDelete<Model>) -> Bool](/documentation/swiftdata/defaulthistorydelete/==(_:_:))

### Instance Methods

- [func hash(into: inout Hasher)](/documentation/swiftdata/defaulthistorydelete/hash(into:))
- [DefaultHistoryToken](/documentation/swiftdata/defaulthistorytoken)
- [DefaultHistoryTransaction](/documentation/swiftdata/defaulthistorytransaction)

### Instance Properties

- [let bundleIdentifier: String](/documentation/swiftdata/defaulthistorytransaction/bundleidentifier)
- [let processIdentifier: String](/documentation/swiftdata/defaulthistorytransaction/processidentifier)

## Codeable support

- [DataStoreSnapshotCodingKey](/documentation/swiftdata/datastoresnapshotcodingkey)

### Values that describe coding keys

- [case persistentIdentifier](/documentation/swiftdata/datastoresnapshotcodingkey/persistentidentifier)

### Enumeration Cases

- [case modeledProperty(String)](/documentation/swiftdata/datastoresnapshotcodingkey/modeledproperty(_:))

## Errors

- [SwiftDataError](/documentation/swiftdata/swiftdataerror)

### Fetch errors

- [static let includePendingChangesWithBatchSize: SwiftDataError](/documentation/swiftdata/swiftdataerror/includependingchangeswithbatchsize)
- [static let sortingPendingChangesWithIdentifiers: SwiftDataError](/documentation/swiftdata/swiftdataerror/sortingpendingchangeswithidentifiers)
- [static let unsupportedKeyPath: SwiftDataError](/documentation/swiftdata/swiftdataerror/unsupportedkeypath)
- [static let unsupportedPredicate: SwiftDataError](/documentation/swiftdata/swiftdataerror/unsupportedpredicate)
- [static let unsupportedSortDescriptor: SwiftDataError](/documentation/swiftdata/swiftdataerror/unsupportedsortdescriptor)

### Configuration errors

- [static let configurationFileNameContainsInvalidCharacters: SwiftDataError](/documentation/swiftdata/swiftdataerror/configurationfilenamecontainsinvalidcharacters)
- [static let configurationFileNameTooLong: SwiftDataError](/documentation/swiftdata/swiftdataerror/configurationfilenametoolong)
- [static let configurationSchemaNotFoundInContainerSchema: SwiftDataError](/documentation/swiftdata/swiftdataerror/configurationschemanotfoundincontainerschema)
- [static let duplicateConfiguration: SwiftDataError](/documentation/swiftdata/swiftdataerror/duplicateconfiguration)

### Container errors

- [static let loadIssueModelContainer: SwiftDataError](/documentation/swiftdata/swiftdataerror/loadissuemodelcontainer)

### Context errors

- [static let modelValidationFailure: SwiftDataError](/documentation/swiftdata/swiftdataerror/modelvalidationfailure)
- [static let missingModelContext: SwiftDataError](/documentation/swiftdata/swiftdataerror/missingmodelcontext)

### Migration errors

- [static let backwardMigration: SwiftDataError](/documentation/swiftdata/swiftdataerror/backwardmigration)
- [static let unknownSchema: SwiftDataError](/documentation/swiftdata/swiftdataerror/unknownschema)

### Operators

- [static func ~= (SwiftDataError, any Error) -> Bool](/documentation/swiftdata/swiftdataerror/~=(_:_:))

### Type Properties

- [static let historyTokenExpired: SwiftDataError](/documentation/swiftdata/swiftdataerror/historytokenexpired)
- [static let invalidTransactionFetchRequest: SwiftDataError](/documentation/swiftdata/swiftdataerror/invalidtransactionfetchrequest)
- [DataStoreError](/documentation/swiftdata/datastoreerror)

### Getting error codes

- [case invalidPredicate](/documentation/swiftdata/datastoreerror/invalidpredicate)
- [case preferInMemoryFilter](/documentation/swiftdata/datastoreerror/preferinmemoryfilter)
- [case preferInMemorySort](/documentation/swiftdata/datastoreerror/preferinmemorysort)
- [case unsupportedFeature](/documentation/swiftdata/datastoreerror/unsupportedfeature)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*
