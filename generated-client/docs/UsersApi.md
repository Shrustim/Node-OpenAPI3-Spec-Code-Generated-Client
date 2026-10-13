# PracticeUserApiClient.UsersApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1UsersMeGet**](UsersApi.md#apiV1UsersMeGet) | **GET** /api/v1/users/me | Get current user



## apiV1UsersMeGet

> ApiV1UsersMeGet200Response apiV1UsersMeGet()

Get current user

Retrieve the details of the currently authenticated user.

### Example

```javascript
import PracticeUserApiClient from 'practice-user-api-client';
let defaultClient = PracticeUserApiClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PracticeUserApiClient.UsersApi();
apiInstance.apiV1UsersMeGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiV1UsersMeGet200Response**](ApiV1UsersMeGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

