[liblab-rings-sdk - v0.0.11](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / BookClient

# Interface: BookClient

[<internal>](../modules/internal_.md).BookClient

## Table of contents

### Properties

- [getAll](internal_.BookClient.md#getall)
- [getById](internal_.BookClient.md#getbyid)
- [getChapters](internal_.BookClient.md#getchapters)

## Properties

### getAll

• **getAll**: [`ClientMethod`](../modules/internal_.md#clientmethod)<[`BookRequestParams`](../modules/internal_.md#bookrequestparams), [`IPaginatedResponse`](internal_.IPaginatedResponse.md)<[`Book`](internal_.Book.md)\>\>

* List of all "The Lord of the Rings" books

#### Defined in

[resources/book/configuration.ts:64](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/book/configuration.ts#L64)

___

### getById

• **getById**: [`ClientMethodWithRequiredInput`](../modules/internal_.md#clientmethodwithrequiredinput)<`string`, [`Book`](internal_.Book.md)\>

Retrieves the book the matches the provided id

#### Defined in

[resources/book/configuration.ts:68](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/book/configuration.ts#L68)

___

### getChapters

• **getChapters**: [`ClientMethodWithRequiredInput`](../modules/internal_.md#clientmethodwithrequiredinput)<[`BookRequestParams`](../modules/internal_.md#bookrequestparams) & { `id`: `string`  }, [`IPaginatedResponse`](internal_.IPaginatedResponse.md)<[`Chapter`](internal_.Chapter.md)\>\>

Request all chapters of one specific book

#### Defined in

[resources/book/configuration.ts:72](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/book/configuration.ts#L72)
