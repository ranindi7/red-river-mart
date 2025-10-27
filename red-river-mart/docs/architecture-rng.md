# Architectural Layout Document

## Repository: userRepo

### What it does?
It is basically a user data access layer. It handles the CRUD operations related to user data and communicates between the front end components and what is currently our mock data in the userMockRepo which will later be replaced with an actual database. 

**Functions:**
- `fetchUsers`: Returns all user objects in an array.
- `getUserById`: Finds and returns a specific user by ID.
- `updateUser`: Updates an existing users' data.
- `createUser`: Adds a new user to the dataset.
- `deleteUser`: Deletes a user with the given ID from the userData array.

### Logic and Separation of Solution Concerns
The logic behind including the CRUD operations was to handle the core interactions the user account component would have with the user data and keeping the code clean. It separates concerns by making the repository to be responsible for data access and changes and the components to mainly handle displaying and interacting with that data.

### Where The Implementation is Used
**User Account Page (userAccountComponent.tsx)**
- Uses the `getUserById()` method to load a specific user's information.
- Uses the `updateUser()` method to save any changes made to a specific users' account details (e.g bio, phone, email etc.).


## Hook: useFormInputs

### What it does?
It is a hook that deals with input functionality. It holds all input values in a singular state obejct which reduces repetition. It has a `handleChange` fucntion which deals with updating the fields automatically as the values are inputted into them as well as dynamically updating the field values. I created the hook to deal with this and later Alex created a service to be used for validation logic that was plugged into this hook and further used in our components.

**Returned Values:**
- `fields`: The current form state.
- `errors`: Validation error messages.
- `handleChange()`: Updates form fields dynamically.
- `validate()`: Runs input validation logic.

### Logic and Separation of Solution Concerns
The logic behind creating this specific hook was based off of thinking about what's common amongst multiple components and can be reusable amongst them. It correctly separates solution concerns by keeping form logic separate and validation separate since it is handled in the validationService and not directly in the hook.

### Where The Implementation is Used
**User Account Page (userAccountComponent.tsx)**
- Displays the current input values when a user is editing their details.
- Updates the values dynamically as the user types using the handleChange function.
- Shows validation errors.
- Validates the inputs before saving the details.


## Service: validationService
### What it does?
Its main function `validateForm(fields)` is responsible for checking the values of a form's fields against the predefined validation rules and returning any errors if a value does not pass the validation check. It takes the `fields` object and and returns an object containing error messages for invalid fields, or an empty object if all fields are valid.

**Checks Performed:**
- Empty Required Fields
- Field Length Requirements
- Positive Numeric Pricing
- Valid Email Checks (using regex expressions)
- Valid Numeric Phone Number Checks (using regex expressions)

### Logic and Seperation of Solution Concerns
The logic to include in this implementation was being able to check the values for each field against the predefined validation rules since we all had form components and running validations on those fields is necessary. Separation of solution concerns is done by keeping the service solely responsible for validation logic so it only checks the values, the hook calls on this service and checks validation against the field inputs handled by that hook and the hook is then called into the components respectively. So validation, state management and component responsibilities are kept separated.

### Where The Implementation is Used
**User Account Page (userAccountComponent.tsx)**
The service is mainly used in the hook whcih is then imported and implemented in specific components.
For the user account page it is used in validating:
- userName
    * Checked to ensure it is not empty.
    * Must be at least 3 characters.
    * Cannot exceed 20 characters.

- bio
    * Checked to ensure it is not empty.
    * Must be at least 3 characters.
    * Cannot exceed 200 characters.

- email
    * Checked to ensure it is not empty.
    * Validated using a regex pattern (/^\S+@\S+\.\S+$/) to ensure proper email format.

- phone
    * Checked to ensure it is not empty.
    * Validated using a regex (/^\d{10}$/) to ensure it is exactly 10 digits.

- preferredContact
    * Checked to ensure it is not empty.
    * Must be at least 3 characters.
    * Cannot exceed 20 characters.

