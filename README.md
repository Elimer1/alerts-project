# alerts-project

# database

I dont believe there was a better or database to use here.
There were no obvious choice as there was no relational tables or need for flexible fields or nested data.
One thing that was potentially pointing to using sql was the data fields all being requiremnts and constants.
That wasnt compelling for me though as those fields are immediately validated with zod upon the fetch before the data even hit the database and I was just as easily able to set up a mongoose schema.
I ultimately used mongoose due to simplistic schema setup and connection with ease to MongoDB and becasue simply im more familiar with it.

# status codes

400 for zod errors as those fit under Bad Request
401 errors for failure to auhthenticate like wrong password
403 errors when trying to access data not meant for the one making the request
404 errors if the alert wasnt founf by id as 404 describes a Not Found Error
409 error for dupliacte data like trying to make 2 users with the same id or email
500 erro for fallbacks whcih will be hit in the catch and logged as a internal server error

# validation

I used zod for validation
Zod checked the data type for the create and update
if there was a zod error it was sent to the error midleware where a 400 response and zods messaging was sent
validation was also done on the frontend by converting the expected string inputes to string in a try/catch
