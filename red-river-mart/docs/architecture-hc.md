# I.B.4 Architectural Layout Document

## Repository: "forumRepo.ts and mockForumRepo.ts"

### What it does:

At the moment this acts as our data layer temporarily. It handles the CRUD operations for the forums.
Once a component requires a data from a forum, instead of a jscon file instead, it communicates the database
from this repository.

**Functions**:


// This gets all the forums
getAllForums()
// Gets the specific forum by the forum id
getForumById(id)
// Creates a new forum and also stores the new created forum
createForum(newForumData)
// Updates any existing forum
updateForum(updatedForum)
// Deletes an existing forum by grabbing the forum id
deleteForum(id)

### Logic and Separation of Solution Concerns

This was built so we can seperate this data logic from the UI, by isolating the fake repository forum database, 
we can later on exchange it with a real back-end API without making any more changes on the logic as we have
already created a working one with the mock database.

Key Notes:

- Currently using forumData array to simulate the mock backend data
- nextId logic so that it auto-increments the forum IDs dynamically
- To ensure that we don't get any state mutation, cloned arrays are returned ([...forums])

Where it's Used:

Forum Page ("forumPageComponent.tsx)
Make Forum Page ("makeForumPage.tsx)

ForumPage: This grabs and displays all of the forums
MakeForum: This handles creatin a new forum post by form submission
- Both future points for backend API integration


## Custom Hook: "useFormInput"

### What it Does:

A React custom hook that manages our form submissions, it basically keeps track of the input values in
object fields. It also handles dynamic changes, and as well as where we put in our service validation.

** Returned Values:**

 "fields": The current form of the state
 "errors": Validation for the error messages
 "handleChange()": handles the update for the fields dynamically
 "validate()": Runs the service validation logic.

 ### Logic and Seperation of Concerns
 This custom hook allows us to keep our components rhobust, the hook only  tracks the input values
 and we allow the validation service to deal with actual validation and just be called into the hook, 
 hence achieving a cohesive product.

### Where It's Used
It is currently being used for the form submission in makeForumPage, where its suppose to be for creating
and posting a forum post. Using the hook here allows us to manage the individual input fields in the form.


## Custom Service: "validationService"

### What it does 
This validation service is what handles the user side of the validaiton. The main purpose of it is the 
validationForm takes the form data and the return the result  of the objects that failed. It also outputs
error messages once a field has failed.

**Checks Performed

Empty Required fields
Field Length Requirements
Positive numeric pricing 
Valid email checks 
Valid numeric phone number checks

### Logic and Seperation of Concerns

By keeping our input field validation in one reusable service, we achieve:
- Cleanliness in our Project, prevents our component to have manual validation for each of them
- Scalable validations, as we can keep adding new ones if we need any new type of validation
- this allows the form hook to only deal with presentation logic of the form and have the service manage the 
business logic

**Design**
-We also designed the validation service to be able to function without needing all required fields,
insteads it interates through the component and only handles the input field that needs the validation.

-We designed the validation service to be reusable for any type of form submission validation logic.
The code is written with an intention that we can keep adding new validation if we plan to add new features 
that may need a specific type of validation handling. 

-We also let teh validation service handle the UI side by
adding error messages so that users exactly know the reason their submission is not working and can 
change their inputs accordingly to the error messages.

### Where it's Used
 
The way its used is its called into our "useFormInputs" custom hook. So in this cased I have the custom hook
"hooked" to my makeforumPage and now that validationService is called in the custom hook, each input field
is now getting validated as well. In my case, for making/creating a forum post, its checking if the 
input field for "subject", "title" is empty, less than 3 characters, and not more than 20 characters.
While description has validation if field is empty, less than 3 characters, and specifically not allowing
for more than 200 characters this time around.