Base64 encode of hash hmac sha512 encryption merchant_id + req_time with public_key.
Ex: in php:

base64_encode(hash_hmac('sha512', request_body, public_key, true));
hash: (req_time + merchant_id)

Encrypt with: "CALL_C_hashHmac512('CURR_FIELD', 'fb629880e9a741dc9862a4ad260f6668');"

// Calculate the hash hmac sha512 encryption
const req_time = new Date().getTime(); // Get the current timestamp
const merchant_id = 'YOUR_MERCHANT_ID'; // Replace 'YOUR_MERCHANT_ID' with the actual merchant ID
const public_key = 'YOUR_PUBLIC_KEY'; // Replace 'YOUR_PUBLIC_KEY' with the actual public key

const request_body = req_time + merchant_id;
const hash = CryptoJS.HmacSHA512(request_body, public_key);
const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

// Encrypt with CALL_C_hashHmac512
pm.variables.set('CURR_FIELD', hashInBase64);
