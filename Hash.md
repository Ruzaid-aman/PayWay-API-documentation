# Generate Hash

A hash is an encrypted value (checksum) that is sent by you in a payment request to ABA PayWay in the request payload. The hash is used to protect transactions against a “man-in-the-middle-attack.”

## Hash Generation Logic for Payment Request

ABA PayWay uses the SHA-512 hash function that belongs to the SHA-2 family of cryptographic functions to generate hash values.
and you base encode the filnal

### Mandatory Parameters

You need to generate a string using certain mandatory parameters and apply the SHA-512 algorithm to this string.

> **NOTE**
>> ensure you concatenate all parameters in sequence as they appear in the body request

The code sample below demonstrates the exact order of the parameters that must be followed when using the hash function:

python | java |  c#
---| --- | ---
python | asd| asdfr|
qre| opu| pqwer|
zxcv | oiwjroe| eopre

### Hashing scenarios for payment request

Here, we will discuss some payment request scenarios and see how hash calculation varies for each of them:

1. **Scenario 1:** When all the parameters are posted by the merchant, hash is calculated as:

2. **Scenario 2:** If only some of the non-mandatory parameters are posted . For example, if param1 and pram2 are posted and param3 pram5 pram6 are not, hash is calculated as:

3. **Scenario 3:** If none of the non-mandatory parameters are posted, hash is calculated as:

### Hashing scenarios for self onboarding requet

## How Hash values are computed?

Let us assume that you are posting the following parameters and their corresponding values in the payment request:

Variable| Value|
---|---|
Merchant Key* | C0Dr8m
Transaction ID: | 12345av-br3
Payment Amount|  $ 1,000
Product Info|  Shopping
First Name | Ruzaid
Email | <ruzaid@test.com>
sec*|  3sf0jURk

For the parameters mentioned above, the hash generation string will look like:

> ```sha512(C****m|12345|1000|Shopping|Vinay|vinay@test.com|||||||||||3********s*****k********h*****j)```

Now, we will hash the above mentioned string using SHA-512 message-digest algorithm to get the following hash value:

```ffcdbf04fa5beefdcc2dd476c18bc410f02b3968e7f4f54e8f43f1e1a310bb32e3b4dec9305232bb89db5b1d0c009a53bcace6f4bd8ec2f6```
