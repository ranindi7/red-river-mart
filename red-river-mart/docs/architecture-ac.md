# Architectural Layout Document

## Repository: `itemRepo`

### 1. What It Does

This is basically our data layer. It handles all the CRUD (Create, Read, Update, Delete) operations for our items. If a component needs data, it talks to the repo, not directly to a fake database.

**Functions:**

* `getAllItems()`: Retrieves all items.
* `getItemById(id)`: Fetches a specific item by ID.
* `createItem(newItemData)`: Creates and stores a new item.
* `updateItem(updatedItem)`: Updates an existing item.
* `deleteItem(id)`: Removes an item from the collection.

### 2. Logic and Separation of Solution Concerns

The goal was to follow the Repository Pattern so we can easily swap our fake data with a real API or database later without having to touch the frontend components.

**Key Notes:**

* Used an in-memory object (`items`) to simulate data persistence for now.
* Managed auto-incrementing IDs via `nextId`.
* Returned new array copies (`[...items]`) where needed to prevent direct state mutation.


### 3. Where It’s Used

* Display marketplace items (`MarketplacePage/Container`)
* Create new listings (`SellPage`)

These pages call the repository’s exported functions to perform CRUD actions.

## Hook: `useFormInputs`

### 1. What It Does

This custom React hook is the brain for managing our forms. It tracks all the input values in one fields object, handles changes dynamically, and plugs into our validation service. I added the state for the errors object after Ranindi implemented the initial form logic.

**Returned Values:**

* `fields`: The current form state.
* `errors`: Validation error messages.
* `handleChange()`: Updates form fields dynamically.
* `validate()`: Runs input validation logic.

### 2. Logic and Separation of Concerns

It keeps our components clean! Instead of writing validation logic in the hook, we delegate it to the dedicated service.

**Implementation:**

* Utilized `useState` to manage both `fields` and `errors`.
* Implemented a dynamic input handler that supports text, select, and file inputs.
* Separated validation logic into its own module for reusability and testing.

### 3. Where It’s Used

Right now, mainly on the `SellPage` to manage the listing form. It takes the form structure and handles all the input logic, calling handleChange and validate.

## Service: `validationService`

### 1. What It Does

The `validationService` contains logic for client-side form validation. Its main function, `validateForm(fields)`, takes the form data and returns an object full of error messages for any fields that failed.

**Checks Performed:**

* Empty required fields
* Name/Description length requirements
* File presence
* Positive numeric prices

### 2. Logic and Separation of Concerns

It's all about the Single Responsibility Principle. By keeping all the rules here, we guarantee:

* The rules are reusable on any future form.
* The form hook (useFormInputs) only deals with state, not business logic.
* Our components stay free of validation clutter.

**Design**

* It's isolated so doesn't need to know anything about React or the UI
* Used dynamic validation on fields through iteration for efficiency.
* Error messages are written to be user-friendly.

### 3. Where It’s Used

It's imported and used inside the `useFormInputs` hook. This lets us run validation whenever we need it (like on submit) without repeating the logic in the component.