# PracticeUserApiClient.AuthApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1AuthLoginPost**](AuthApi.md#apiV1AuthLoginPost) | **POST** /api/v1/auth/login | User login



## apiV1AuthLoginPost

> ApiV1AuthLoginPost200Response apiV1AuthLoginPost(apiV1AuthLoginPostRequest)

User login

Authenticate a user and return a JWT token.

### Example

```javascript
import PracticeUserApiClient from 'practice-user-api-client';

let apiInstance = new PracticeUserApiClient.AuthApi();
let apiV1AuthLoginPostRequest = new PracticeUserApiClient.ApiV1AuthLoginPostRequest(); // ApiV1AuthLoginPostRequest | 
apiInstance.apiV1AuthLoginPost(apiV1AuthLoginPostRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiV1AuthLoginPostRequest** | [**ApiV1AuthLoginPostRequest**](ApiV1AuthLoginPostRequest.md)|  | 

### Return type

[**ApiV1AuthLoginPost200Response**](ApiV1AuthLoginPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

