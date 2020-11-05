---
id: single-sign-on-user-module
title: Single Sign On User Module
---

<h2>Documentation of Messi Custom API Gateaway</h2>

## User

### Create User

> **POST /v1/sso/user**

<h3>Input:</h3>

**Request Header**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
|Authorization	| N	        | String  | Y	        | Access Token        | Access Token is obtain from Authentication result to keycloak|

**Request Params**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
|hashed	        | N	        | String  | Y	        | Hash value from body request using “ SHA-512 “  |This value is encoded using Urlencode(hashed)|


**Request Body**

Refer to UserRepresentation, **username & email** is encrypted using “ AES/CBC/PKCS5Padding “ with keysize 256.

<h3>Output:</h3>

**Request Body**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
|info	        | -	        | -       | -	        | -                   | - |
|status  	    | N	        | Integer | Y	        | HttpStatus value    | - |
|message	    | N	        | String  | Y	        | HttpStatus name     | - |
|detailmessage	| N	        | Object  | Y	        | Response message    | - |
|executiontime	| N	        | Integer | Y	        | Execution Time      | - |
|detailInfo	    | N	        | String  | Y	        | Httpstatus          | - |

---

### Search User

> GET /v1/sso/{clientid}/user

<h3>Input:</h3>

**Request Header**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
|Authorization	| N	        | String  | Y	        | Access Token        | Access Token is obtain from Authentication result to keycloak|

**Request Path**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
| app-id	    | N	        | String  | Y	        | IDClient            | ID Client that given when registered client on keycloak|

**Request Params**
 
| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
| email	        | N	        | String  | Y	        | Email User          | Search user using email user|
| username	    | N	        | String  | Y	        | Username            | Search user where username contains word from this field|
| mid	        | N	        | String  | Y	        | MerchantID          | Search user that have attribute with spesific mid ( **Multiple value allowed** ).Use delimiter ‘ # ‘ to perform multiple value, example : mid=1#2|
| cin	        | N	        | String  | Y	        | CIN                 | Search user that have attribute with spesific cin |

<h3>Output:</h3>

List UserRepresentation

---
 
### Change Password User
 
> PUT /v1/sso/user/{userid}/change-password

<h3>Input:</h3>

**Request Header**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
|Authorization	| N	        | String  | Y	        | Access Token        | Access Token is obtain from Authentication result to keycloak|

**Request Path**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
| userid	    | N	        | String  | Y	        | UserID              | User ID from the user |

**Request Params**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
| hashed	    | N	        | String  | Y	        | Hash value from body request using  “ SHA-512 “        | This value is encoded using Urlencode(hashed)|

**Request Body**
 
| Field	            | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:           | :-------: | :------:|:----------: | :------------------:|:-----: |
| current_password	| N	        | String  | Y	        | Current Password    | This field is encrypted using “AES/CBC/PKCS5Padding“   with keysize 256|
| new_password	    | N	        | String  | Y	        | New Password        | This field is encrypted using “AES/CBC/PKCS5Padding“ with keysize 256|
| app_id	        | N	        | String  | Y	        | ID Client           | ID Client that given when registered client on keycloak. This field is encrypted using “AES/CBC/PKCS5Padding“ with keysize 256|
| client_secret	    | N	        | String  | Y	        | Client Secret       | Client Credentials that provide when register the client on keycloak. |

<h3>Output:</h3>

**Request Body**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark  |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----:  |
|info	        | -	        | -       | -	        | -                   | -       |
|status	        | N	        | Integer | Y	        | HttpStatus value    | -       |
|message	    | N	        | String  | Y	        | HttpStatus name     | -       |
|detailmessage	| N	        | Object  | Y	        | Response message    | -       |
|executiontime	| N	        | Integer | Y	        | Execution Time      | -       |
|detailInfo	    | N	        | String  | Y	        | HttpStatus          | -       |

---

### Reset Password User

> PUT /v1/sso/user/reset-password

<h3>Input:</h3>

**Request Header**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
|Authorization	| N	        | String  | Y	        | Access Token        | Access Token is obtain from Authentication result to keycloak.|

**Request Path**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
| userid	    | N	        | String  | Y	        | UserID              | User ID from the user |

**Request Params**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
|hashed	| N	        | String  | Y	        | Hash value from body request using “ SHA-512 “         | This value is encoded using Urlencode(hashed)|

**Request Body**

| Field	        | Length	| Type	  | Mandatory	| Description	            | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:      |:-----: |
| app_id	    | N	        | String  | Y	        | ID Client                 | ID Client that given when registered client on keycloak. This field is encrypted using “AES/CBC/PKCS5Padding“ with keysize 256 |
| email	        | N	        | String  | Y	        | Email Address             | Email Address which password want to be reset. This field is encrypted using “AES/CBC/PKCS5Padding“ with keysize 256 |
| forgot_password_token	| N	| String  | Y	        | Token for Forgot Password | This token is gotten from the detailmessage field when successfully hit "verify OTP API" |
| new_password	| N	        | String  | Y	        | New Password              | This field is encrypted using “AES/CBC/PKCS5Padding“ with keysize 256 |

<h3>Output:</h3>

**Request Body**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark  |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----:  |
|info	        | -	        | -       | -	        | -                   | -       |
|status	        | N	        | Integer | Y	        | HttpStatus value    | -       |
|message	    | N	        | String  | Y	        | HttpStatus name     | -       |
|detailmessage	| N	        | Object  | Y	        | Response message    | -       |
|executiontime	| N	        | Integer | Y	        | Execution Time      | -       |
|detailInfo	    | N	        | String  | Y	        | HttpStatus          | -       |

---

## OTP

### GENERATE OTP 

> POST /v1/sso/otp/generate

<h3>Input:</h3>

**Request Header**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
|Authorization	| N	        | String  | Y	        | Access Token        | Access Token is obtain from Authentication result to keycloak|

**Request Params**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
|hashed	        | N	        | String  | Y	        | Hash value from body request using “ SHA-512 “         | This value is encoded using Urlencode(hashed)|

**Request Body**

| Field	        | Length	| Type	  | Mandatory	| Description	            | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:      |:-----: |
| email	        | N	        | String  | Y	        | Email User                | This field is encrypted using “AES/CBC/PKCS5Padding“ with keysize 256 |
| client_id	    | N	        | String  | Y	        | Client ID                 | Client ID that registered on keycloak |

<h3>Output:</h3>

**Request Body**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark  |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----:  |
|info	        | -	        | -       | -	        | -                   | -       |
|status	        | N	        | Integer | Y	        | HttpStatus value    | -       |
|message	    | N	        | String  | Y	        | HttpStatus name     | -       |
|detailmessage	| N	        | Object  | Y	        | Response message    | -       |
|executiontime	| N	        | Integer | Y	        | Execution Time      | -       |
|detailInfo	    | N	        | String  | Y	        | HttpStatus          | -       |


---

### VERIFY OTP

> POST /v1/sso/otp/verify

<h3>Input:</h3>

**Request Header**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
|Authorization	| N	        | String  | Y	        | Access Token        | Access Token is obtain from Authentication result to keycloak|

**Request Params**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----: |
|hashed	        | N	        | String  | Y	        | Hash value from body request using “ SHA-512 “         | This value is encoded using Urlencode(hashed)|

**Request Body**

| Field	        | Length	| Type	  | Mandatory	| Description	            | Remark |
| :-----:       | :-------: | :------:|:----------: | :------------------:      |:-----: |
| otpCode	    | N	        | String  | Y	        | OTP Code                  | OTP Code that given when generate OTP |
| email	        | N	        | String  | Y	        | Email User                | This field is encrypted using “AES/CBC/PKCS5Padding“ with keysize 256 |


<h3>Output:</h3>

**Request Body**

| Field	        | Length	| Type	  | Mandatory	| Description	      | Remark  |
| :-----:       | :-------: | :------:|:----------: | :------------------:|:-----:  |
|info	        | -	        | -       | -	        | -                   | -       |
|status	        | N	        | Integer | Y	        | HttpStatus value    | -       |
|message	    | N	        | String  | Y	        | HttpStatus name     | -       |
|detailmessage	| N	        | Object  | Y	        | Response message    | If status 200 ok, this field contains token to hit “Reset Password API“. Split value using “;;“ and get index 1 to get the token.       |
|executiontime	| N	        | Integer | Y	        | Execution Time      | -       |
|detailInfo	    | N	        | String  | Y	        | HttpStatus          | -       |

---

## User Representation Example

### Create User

<h3>Input</h3>

```
{
    "firstName": "TES3T",
    "lastName": "USER",
    "email": "pg11@dti.co.id", -> this field is encrypted
    "enabled": "true",
    "username": "pg11@dti.co.id", -> this field is encrypted
    "attributes": {
        "phone": [
            "123456789"
        ],
        "is_new" : [
            "Y"
        ]
    },
    "clientRoles": {
        "mcb": [
            "pemilik"
        ]
    },
    "realmRoles": [
        "admin", "user"
    ],
    "credentials" : [{
        "type" : "password",
        "temporary" : "false",
        "value" : "bcabca"
    }]
}
```

<h3>Output</h3>

```
{
    "info": {
        "status": 200,
        "message": "OK",
        "detailmessage": "User Created",
        "executiontime": 0,
        "detailInfo": "OK"
    }
}
```

### Get List User

```
[
    {
        "self": null,
        "id": "5af4fbea-2e8a-4cdd-9e7f-8310b081069b",
        "origin": null,
        "createdTimestamp": 1600166919961,
        "username": "pg10@dti.co.id",
        "enabled": true,
        "totp": false,
        "emailVerified": false,
        "firstName": "TES3T",
        "lastName": "USER",
        "email": "pg10@dti.co.id",
        "federationLink": null,
        "serviceAccountClientId": null,
        "attributes": {
            "phone": [
                "123456789"
            ],
            "is_new": [
                "Y"
            ]
        },
        "credentials": null,
        "disableableCredentialTypes": [],
        "requiredActions": [],
        "federatedIdentities": null,
        "realmRoles": null,
        "clientRoles": {
            "qrms": [
                "pemilik"
            ],
            "mcb": [
                "pemilik"
            ],
            "account": [
                "manage-account",
                "view-profile"
            ]
        },
        "clientConsents": null,
        "notBefore": 0,
        "applicationRoles": null,
        "socialLinks": null,
        "groups": null,
        "access": {
            "manageGroupMembership": true,
            "view": true,
            "mapRoles": true,
            "impersonate": true,
            "manage": true
        }
    },
    {
        "self": null,
        "id": "60724b39-6728-46af-a738-041d642e6722",
        "origin": null,
        "createdTimestamp": 1597228420443,
        "username": "api user",
        "enabled": true,
        "totp": false,
        "emailVerified": true,
        "firstName": null,
        "lastName": null,
        "email": null,
        "federationLink": null,
        "serviceAccountClientId": null,
        "attributes": {
            "phone": [
                "123456789"
            ],
            "mid": [
                "1",
                "2",
                "3"
            ]
        },
        "credentials": null,
        "disableableCredentialTypes": [],
        "requiredActions": [],
        "federatedIdentities": null,
        "realmRoles": null,
        "clientRoles": {
            "qrms": [
                "anggota"
            ],
            "admin-cli": [
                "pemilik"
            ],
            "account": [
                "manage-account",
                "view-profile"
            ]
        },
        "clientConsents": null,
        "notBefore": 0,
        "applicationRoles": null,
        "socialLinks": null,
        "groups": null,
        "access": {
            "manageGroupMembership": true,
            "view": true,
            "mapRoles": true,
            "impersonate": true,
            "manage": true
        }
    },
    {
        "self": null,
        "id": "d2fe8538-8818-473a-bdd8-40713aa0b9cd",
        "origin": null,
        "createdTimestamp": 1596005038054,
        "username": "angga",
        "enabled": true,
        "totp": false,
        "emailVerified": true,
        "firstName": "Angga99",
        "lastName": "Pratama",
        "email": "pg1@dti.co.id",
        "federationLink": null,
        "serviceAccountClientId": null,
        "attributes": {
            "address": [
                "abc"
            ],
            "phoneNumber": [
                "0857642323232"
            ],
            "phone": [
                "12345678"
            ],
            "mid": [
                "1",
                "2"
            ],
            "flag_otp": [
                "1"
            ]
        },
        "credentials": null,
        "disableableCredentialTypes": [],
        "requiredActions": [],
        "federatedIdentities": null,
        "realmRoles": null,
        "clientRoles": {
            "qrms": [
                "pemilik"
            ],
            "account": [
                "manage-account",
                "view-profile"
            ]
        },
        "clientConsents": null,
        "notBefore": 1600305799,
        "applicationRoles": null,
        "socialLinks": null,
        "groups": null,
        "access": {
            "manageGroupMembership": true,
            "view": true,
            "mapRoles": true,
            "impersonate": true,
            "manage": true
        }
    }
]
```
