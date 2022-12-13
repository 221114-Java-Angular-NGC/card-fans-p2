To get a user
GET http://localhost:8080/api/users/{id}

Example http://localhost:8080/api/users/1


To register a user

POST http://localhost:8080/api/users/

BODY

{
	"userName":"abe",
	 "userFirstName":"user",
	"userLastName":"one",
	"userEmail":"random@gmail.com",
	"password":"secret",
    "addressLine1":"123 street st",
    "city":"city city",
    "zipCode":"234234",
    "state":"va"

}


