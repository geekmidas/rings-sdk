[liblab-rings-sdk - v0.0.11](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / RequestParams

# Interface: RequestParams<T, P, K\>

[<internal>](../modules/internal_.md).RequestParams

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `Omit`<`T`, ``"id"``\> = `Omit`<`T`, ``"id"``\> |
| `K` | extends `Exclude`<keyof `P`, `symbol`\> = `Exclude`<keyof `P`, `symbol`\> |

## Table of contents

### Properties

- [exists](internal_.RequestParams.md#exists)
- [limit](internal_.RequestParams.md#limit)
- [match](internal_.RequestParams.md#match)
- [notExists](internal_.RequestParams.md#notexists)
- [notMatch](internal_.RequestParams.md#notmatch)
- [numericFilters](internal_.RequestParams.md#numericfilters)
- [offset](internal_.RequestParams.md#offset)
- [page](internal_.RequestParams.md#page)
- [sort](internal_.RequestParams.md#sort)

## Properties

### exists

• `Optional` **exists**: `K`[]

Used when you want to retrieve records based on whether the supplied fields exist

#### Defined in

[interface/types.ts:81](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/interface/types.ts#L81)

___

### limit

• `Optional` **limit**: `number`

The number of records you want to retrieve from the API

#### Defined in

[interface/types.ts:57](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/interface/types.ts#L57)

___

### match

• `Optional` **match**: `Partial`<`Record`<`Extract`<keyof `P`, `string`\>, [`MatchValue`](../modules/internal_.md#matchvalue)\>\>

Used when you want to retrieve records based on the supplied fields

#### Defined in

[interface/types.ts:69](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/interface/types.ts#L69)

___

### notExists

• `Optional` **notExists**: `K`[]

Used when you want to retrieve records based on whether the supplied fields do not exist

#### Defined in

[interface/types.ts:85](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/interface/types.ts#L85)

___

### notMatch

• `Optional` **notMatch**: `Partial`<`Record`<`Extract`<keyof `P`, `string`\>, [`MatchValue`](../modules/internal_.md#matchvalue)\>\>

Used when you want to retrieve records based on the values that do not match the supplied values

#### Defined in

[interface/types.ts:73](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/interface/types.ts#L73)

___

### numericFilters

• `Optional` **numericFilters**: `Partial`<`Record`<\`${Exclude<NumericKeys<T\>, symbol\>}\>\` \| \`${Exclude<NumericKeys<T\>, symbol\>}<\` \| \`${Exclude<NumericKeys<T\>, symbol\>}\>=\`, `number`\>\>

Used on the numeric fields of T

#### Defined in

[interface/types.ts:89](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/interface/types.ts#L89)

___

### offset

• `Optional` **offset**: `number`

The number of records to skip for the query

#### Defined in

[interface/types.ts:65](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/interface/types.ts#L65)

___

### page

• `Optional` **page**: `number`

The page on which the request should start from

#### Defined in

[interface/types.ts:61](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/interface/types.ts#L61)

___

### sort

• `Optional` **sort**: \`${Extract<keyof P, string\>}:asc\` \| \`${Extract<keyof P, string\>}:desc\`

The sort expression

#### Defined in

[interface/types.ts:77](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/interface/types.ts#L77)
