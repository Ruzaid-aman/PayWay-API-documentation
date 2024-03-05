

# Generate Hash
A hash is an encrypted value (checksum) that is sent by you in a payment request PayWay in the request payload. The hash is used to protect transactions against a “man-in-the-middle-attack.”


## Hash Generation Logic for Payment Request
PayU uses the SHA-512 hash function that belongs to the SHA-2 family of cryptographic functions to generate hash values.

### Mandatory Parameters
You need to generate a string using certain mandatory parameters and apply the SHA-512 algorithm to this string.