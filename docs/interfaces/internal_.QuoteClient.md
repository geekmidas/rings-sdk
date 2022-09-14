[liblab-rings-sdk - v0.0.11](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / QuoteClient

# Interface: QuoteClient

[<internal>](../modules/internal_.md).QuoteClient

## Table of contents

### Properties

- [getAll](internal_.QuoteClient.md#getall)
- [getById](internal_.QuoteClient.md#getbyid)

## Properties

### getAll

• **getAll**: [`ClientMethod`](../modules/internal_.md#clientmethod)<[`QuoteRequestParams`](../modules/internal_.md#quoterequestparams), [`IPaginatedResponse`](internal_.IPaginatedResponse.md)<[`Quote`](internal_.Quote.md)\>\>

* List of all "The Lord of the Rings" quotes

#### Defined in

[resources/quote/configuration.ts:68](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/quote/configuration.ts#L68)

___

### getById

• **getById**: [`ClientMethodWithRequiredInput`](../modules/internal_.md#clientmethodwithrequiredinput)<`string`, [`Quote`](internal_.Quote.md)\>

Retrieves the quote the matches the provided id

#### Defined in

[resources/quote/configuration.ts:72](https://github.com/geekmidas/rings-sdk/blob/8b961bb/src/resources/quote/configuration.ts#L72)
