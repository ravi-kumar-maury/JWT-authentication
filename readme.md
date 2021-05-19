JWT authentication is better than session based authentication as 
It is stateless , server has no need to store the user state in the memory as 
it generates a ACCESS Token which is stored with the client , Every time client 
makes request with the server , it always have the ACCESS_TOKEN which server can 
check anytime for making sure user authorization using the signature 
