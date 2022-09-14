[liblab-rings-sdk - v0.0.11](../README.md) / [Exports](../modules.md) / <internal\>

# Module: <internal\>

## Table of contents

### Interfaces

- [Book](../interfaces/internal_.Book.md)
- [BookClient](../interfaces/internal_.BookClient.md)
- [Chapter](../interfaces/internal_.Chapter.md)
- [ChapterClient](../interfaces/internal_.ChapterClient.md)
- [Character](../interfaces/internal_.Character.md)
- [CharacterClient](../interfaces/internal_.CharacterClient.md)
- [IPaginatedResponse](../interfaces/internal_.IPaginatedResponse.md)
- [Movie](../interfaces/internal_.Movie.md)
- [MovieClient](../interfaces/internal_.MovieClient.md)
- [Quote](../interfaces/internal_.Quote.md)
- [QuoteClient](../interfaces/internal_.QuoteClient.md)
- [RequestParams](../interfaces/internal_.RequestParams.md)

### Type Aliases

- [BookRequestParams](internal_.md#bookrequestparams)
- [ChapterRequestParams](internal_.md#chapterrequestparams)
- [CharacterRequestParams](internal_.md#characterrequestparams)
- [ClientMethod](internal_.md#clientmethod)
- [ClientMethodWithRequiredInput](internal_.md#clientmethodwithrequiredinput)
- [KeysMatching](internal_.md#keysmatching)
- [MatchValue](internal_.md#matchvalue)
- [MovieRequestParams](internal_.md#movierequestparams)
- [NumericKeys](internal_.md#numerickeys)
- [QuoteRequestParams](internal_.md#quoterequestparams)

## Type Aliases

### BookRequestParams

Ƭ **BookRequestParams**: [`RequestParams`](../interfaces/internal_.RequestParams.md)<[`Book`](../interfaces/internal_.Book.md)\>

#### Defined in

[resources/book/configuration.ts:58](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/book/configuration.ts#L58)

___

### ChapterRequestParams

Ƭ **ChapterRequestParams**: [`RequestParams`](../interfaces/internal_.RequestParams.md)<[`Chapter`](../interfaces/internal_.Chapter.md)\>

#### Defined in

[resources/chapter/configuration.ts:59](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/chapter/configuration.ts#L59)

___

### CharacterRequestParams

Ƭ **CharacterRequestParams**: [`RequestParams`](../interfaces/internal_.RequestParams.md)<[`Character`](../interfaces/internal_.Character.md)\>

#### Defined in

[resources/character/configuration.ts:101](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/character/configuration.ts#L101)

___

### ClientMethod

Ƭ **ClientMethod**<`T`, `R`\>: (`data?`: `T`) => `Promise`<`R`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Type declaration

▸ (`data?`): `Promise`<`R`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `T` |

##### Returns

`Promise`<`R`\>

#### Defined in

[clients/ConfiguredClient.ts:155](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/clients/ConfiguredClient.ts#L155)

___

### ClientMethodWithRequiredInput

Ƭ **ClientMethodWithRequiredInput**<`T`, `R`\>: (`data`: `T`) => `Promise`<`R`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Type declaration

▸ (`data`): `Promise`<`R`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

##### Returns

`Promise`<`R`\>

#### Defined in

[clients/ConfiguredClient.ts:156](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/clients/ConfiguredClient.ts#L156)

___

### KeysMatching

Ƭ **KeysMatching**<`T`, `V`\>: { [K in keyof T]-?: T[K] extends V ? K : never }[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Defined in

[interface/types.ts:32](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/interface/types.ts#L32)

___

### MatchValue

Ƭ **MatchValue**: `string` \| `number` \| `RegExp`

#### Defined in

[interface/types.ts:29](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/interface/types.ts#L29)

___

### MovieRequestParams

Ƭ **MovieRequestParams**: [`RequestParams`](../interfaces/internal_.RequestParams.md)<[`Movie`](../interfaces/internal_.Movie.md)\>

#### Defined in

[resources/movie/configuration.ts:61](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/movie/configuration.ts#L61)

___

### NumericKeys

Ƭ **NumericKeys**<`T`\>: [`KeysMatching`](internal_.md#keysmatching)<`T`, `number`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[interface/types.ts:36](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/interface/types.ts#L36)

___

### QuoteRequestParams

Ƭ **QuoteRequestParams**: [`RequestParams`](../interfaces/internal_.RequestParams.md)<[`Quote`](../interfaces/internal_.Quote.md)\>

#### Defined in

[resources/quote/configuration.ts:62](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/quote/configuration.ts#L62)
