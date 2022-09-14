[liblab-rings-sdk - v0.0.11](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CharacterClient

# Interface: CharacterClient

[<internal>](../modules/internal_.md).CharacterClient

## Table of contents

### Properties

- [getAll](internal_.CharacterClient.md#getall)
- [getById](internal_.CharacterClient.md#getbyid)
- [getQuotes](internal_.CharacterClient.md#getquotes)

## Properties

### getAll

• **getAll**: [`ClientMethod`](../modules/internal_.md#clientmethod)<[`CharacterRequestParams`](../modules/internal_.md#characterrequestparams), [`IPaginatedResponse`](internal_.IPaginatedResponse.md)<[`Character`](internal_.Character.md)\>\>

* List of all "The Lord of the Rings" characters

#### Defined in

[resources/character/configuration.ts:107](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/character/configuration.ts#L107)

___

### getById

• **getById**: [`ClientMethodWithRequiredInput`](../modules/internal_.md#clientmethodwithrequiredinput)<`string`, [`Character`](internal_.Character.md)\>

Retrieves the character that matches the provided id

#### Defined in

[resources/character/configuration.ts:111](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/character/configuration.ts#L111)

___

### getQuotes

• **getQuotes**: [`ClientMethodWithRequiredInput`](../modules/internal_.md#clientmethodwithrequiredinput)<[`CharacterRequestParams`](../modules/internal_.md#characterrequestparams) & { `id`: `string`  }, [`IPaginatedResponse`](internal_.IPaginatedResponse.md)<[`Quote`](internal_.Quote.md)\>\>

Request all quotes of a specific character

#### Defined in

[resources/character/configuration.ts:115](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/character/configuration.ts#L115)
