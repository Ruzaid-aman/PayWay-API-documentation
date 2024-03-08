## python example of calulating hash sha512


```
import  hashlib

def calculate_sha512(input_string):
    """
    This function takes a string as input and returns the SHA-512 hash of that string.
    
    :param input_string: The string to be hashed.
    :type input_string: str
    :return: The SHA-512 hash of the input string.
    :rtype: str
    """
    # Create an instance of the SHA-512 hashing algorithm
    sha512 = hashlib.sha512()
    
    # Feed the input string to the hasher object
    sha512.update(input_string.encode('utf-8'))
    
    # Get the hexadecimal representation of the hash
    hash_hex = sha512.hexdigest()
    
    return hash_hex

# Example usage
secret_password = "my_super_secure_password"
hashed_password = calculate_sha512(secret_password)
print("The SHA-512 hash of '{}' is: {}".format(secret_password, hashed_password))
