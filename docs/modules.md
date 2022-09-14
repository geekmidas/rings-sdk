[liblab-rings-sdk - v0.0.11](README.md) / Exports

# liblab-rings-sdk - v0.0.11

## Table of contents

### Modules

- [&lt;internal\&gt;](modules/internal_.md)

### Functions

- [createClient](modules.md#createclient)

## Functions

### createClient

▸ **createClient**(`apiKey`): `Object`

Creates the client for the lord of the rings API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiKey` | `string` | The API Key |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `book` | [`BookClient`](interfaces/internal_.BookClient.md) |
| `chapter` | [`ChapterClient`](interfaces/internal_.ChapterClient.md) |
| `character` | [`CharacterClient`](interfaces/internal_.CharacterClient.md) |
| `movie` | [`MovieClient`](interfaces/internal_.MovieClient.md) |
| `quote` | [`QuoteClient`](interfaces/internal_.QuoteClient.md) |

#### Defined in

index.ts:12
