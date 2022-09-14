[liblab-rings-sdk - v0.0.11](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MovieClient

# Interface: MovieClient

[<internal>](../modules/internal_.md).MovieClient

## Table of contents

### Properties

- [getAll](internal_.MovieClient.md#getall)
- [getById](internal_.MovieClient.md#getbyid)
- [getQuotes](internal_.MovieClient.md#getquotes)

## Properties

### getAll

• **getAll**: [`ClientMethod`](../modules/internal_.md#clientmethod)<[`MovieRequestParams`](../modules/internal_.md#movierequestparams), [`IPaginatedResponse`](internal_.IPaginatedResponse.md)<[`Movie`](internal_.Movie.md)\>\>

* List of all "The Lord of the Rings" movies

#### Defined in

[resources/movie/configuration.ts:67](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/movie/configuration.ts#L67)

___

### getById

• **getById**: [`ClientMethodWithRequiredInput`](../modules/internal_.md#clientmethodwithrequiredinput)<`string`, [`Movie`](internal_.Movie.md)\>

Retrieves the movie the matches the provided id

#### Defined in

[resources/movie/configuration.ts:71](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/movie/configuration.ts#L71)

___

### getQuotes

• **getQuotes**: [`ClientMethodWithRequiredInput`](../modules/internal_.md#clientmethodwithrequiredinput)<[`MovieRequestParams`](../modules/internal_.md#movierequestparams) & { `id`: `string`  }, [`IPaginatedResponse`](internal_.IPaginatedResponse.md)<[`Quote`](internal_.Quote.md)\>\>

Request all quotes of one specific movie

#### Defined in

[resources/movie/configuration.ts:75](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/movie/configuration.ts#L75)
