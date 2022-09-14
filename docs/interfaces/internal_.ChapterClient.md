[liblab-rings-sdk - v0.0.11](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ChapterClient

# Interface: ChapterClient

[<internal>](../modules/internal_.md).ChapterClient

## Table of contents

### Properties

- [getAll](internal_.ChapterClient.md#getall)
- [getById](internal_.ChapterClient.md#getbyid)

## Properties

### getAll

• **getAll**: [`ClientMethod`](../modules/internal_.md#clientmethod)<[`ChapterRequestParams`](../modules/internal_.md#chapterrequestparams), [`IPaginatedResponse`](internal_.IPaginatedResponse.md)<[`Chapter`](internal_.Chapter.md)\>\>

* List of all "The Lord of the Rings" chapters

#### Defined in

[resources/chapter/configuration.ts:65](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/chapter/configuration.ts#L65)

___

### getById

• **getById**: [`ClientMethodWithRequiredInput`](../modules/internal_.md#clientmethodwithrequiredinput)<`string`, [`Chapter`](internal_.Chapter.md)\>

Retrieves the chapter the matches the provided id

#### Defined in

[resources/chapter/configuration.ts:69](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/chapter/configuration.ts#L69)
