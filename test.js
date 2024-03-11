Base64 encode of hash hmac sha512 encryption merchant_id + req_time with public_key.
Ex: in php:

base64_encode(hash_hmac('sha512', request_body, public_key, true));
hash: (req_time + merchant_id)

Encrypt with: "CALL_C_hashHmac512('CURR_FIELD', 'fb629880e9a741dc9862a4ad260f6668');"