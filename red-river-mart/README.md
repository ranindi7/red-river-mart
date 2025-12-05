# Red River Mart

## Team Name and Team Members
Three Marketeers

- Alex Carlos
- Heuone Castillo
- Nambukalu Ranindi Gunasekera

## Project Description
A marketplace for RRC to buy, sell and trade items/opportunities (electronics, books, clothes, roommates, gaming buddies etc.) 

This app is going to ensure authenticity by ensuring login is done solely with valid RRC student credentials. 

- As a seller I want to be able to sell items that are not of use to me anymore that could be beneficial to someone else.
- As a user I want to know that the person I am interacting with is legitimate.
- As developers, we want to be able to bring comfort and ease to users by providicing an internal, dedicated platform.

## Issues Worked On

### Sprint 2 Team Collaborated Issues
- S2(T.0): Project Structure
- S2(T.A.1): App Outlet Navigation
- S2(T.A.2): Navigation Interface

### Sprint 3 Team Collaborated Issues
- S3(T.B.1): Hook Definition(s)
- S3(T.B.2): Service Definition(s)

### Sprint 4 Team Collaborated Issues
- S4(T.1): Back-end App Initialization
- S4(T.2): Development SQL Database
- S4(T.3): Prisma Installation and Client Initialization
- S4(T.4): Back-end CORS Configuration


### Nambukalu Ranindi Gunasekera

#### Sprint 1
- T.1 : Set up Project Git Repository
- T.2 : Project Initialization
- I.1.C : Landing page footer - component for footer element
- I.1.G Sign In Component
- I.1.I User Profile Component 
- T.5 : App Stylesheet

#### Sprint 2
- S2(I.A.2): Editing user profile information
- S2(I.A.3): Profile wishlist removal

#### Sprint 3
- S3(I.B.1): Repository definition and integration for users' data
- S3(I.B.2): Test Data for 10 users
- S3(I.B.3): Refactored userAccount component to invoke the custom hook, service and repository methods
- S3(I.B.4): Architectural Layout Document

#### Sprint 4
- S4(I.1): Creating back end user resource endpoints
- S4(I.2): Creating user model and table in schema and migrating table into Database
- S4(I.3): Front-end repository sending request to back end when getting user to display and updating user info 
- S4(I.4): Data persistance in user account when details are changed


=======

### Alex Carlos

#### Sprint 1
- I.1.B : Landing page filter - component for a section in main for filtering products
- I.1.D. Item Page Component
- I.1.F Marketplace Page Component

#### Sprint 2
- S2(I.A.2): Uploading product listing feature
- S2(I.A.3): Filter Feature

#### Sprint 3
- S3(I.B.1): Repository definition and integration for item data
- S3(I.B.2): Test Data for 30 items
- S3(I.B.3): Refactored sellPage and marketplaceContainer component to invoke the custom hook, service and repository methods
- S3(I.B.4): Architectural Layout Document

#### Sprint 4
- S4(I.1): Creating back end item resource endpoints
- S4(I.2): Creating item model and table in schema and migrating table into Database
- S4(I.3): Front-end repository sending request to back end
- S4(I.4): Data persistance in sell page when displaying added products via sell form
=======

### Heuone Castillo

#### Sprint 1
- I.1.J Inbox Page Component
- I.1.H Product Info Component
- Landing page Header - component for our header element 

#### Sprint 2
- S2(I.A.2): Message request checkbox feature
- S2(I.A.3): Conversation removal feature

#### Sprint 3
- S3(I.B.1): Repository definition and integration for forum data
- S3(I.B.2): Test Data for 10 forum posts
- S3(I.B.3): Refactored makeForumPage and forumPageComponent component to invoke the custom hook, service and repository methods
- S3(I.B.4): Architectural Layout Document

#### Sprint 4
- S4(I.1): Creating back end user resource endpoints
- S4(I.2): Creating forum model and table in schema and migrating table into Database
- S4(I.3): Front-end repository sending request to back end  
- S4(I.4): Data persistance when displaying forums including newly created forums



### Local Setup Instructions Section

1. Environment Variables (env)
    - Before starting anything, make sure that you create a .env file in both frontend and backend folder.
    - Below are the provided environment variables that you will need to put in your .env file.
    - On line 125, make sure you edit the fields according to your postgresql username, password, port, and database_name
        - frontend folder
        VITE_API_BASE_URL=http://localhost:3000/
        VITE_CLERK_PUBLISHABLE_KEY=pk_test_bG9naWNhbC1zaGVlcC01NS5jbGVyay5hY2NvdW50cy5kZXYk
        - backend folder
        DATABASE_URL="postgresql://{username}:{password}@localhost:{port}/{database_name}?schema=public"
        FRONTEND_URL=http://localhost:5173/
        CLERK_SECRET_KEY=sk_test_sMMKxc8GFHyX2FseQPBQFbUHhU91d8UXApo9DLqytc
        CLERK_PUBLISHABLE_KEY=pk_test_bG9naWNhbC1zaGVlcC01NS5jbGVyay5hY2NvdW50cy5kZXYk

2. Installation Instructions
    - Now that we set up our environment variables we can move on to installing all the necessary packages
    and dependencies for this project. As this is a monorepository project structure, run these commands.
        - Make sure you that your in the project root directory before running these commnands.
            - cd .\red-river-mart\
        - npm install - This command should install everything for you with ease.

3. PostgresSQL Installation
    - You will need to have postgresql downloaded onto your machine as this projects uses the postgresql database.
    - Visit the postgresql website https://www.postgresql.org/download/
    - Choose your operating system and download the application.

4. Database and Prisma Setup Process
    - Before running our application, we must set up  our database first and this project uses Prisma,
    below will be the instruction of setting up Prisma
    - Prisma should have been installed by running npm install earlier but run it again just incase.
    - To set up our database and Prisma, we must first go into our backend directory
    - go into the backend directory, follow the following commands.
        1. cd apps
        2. cd backend
    - After running these commands, you should be on your backend directory, now we can start setting up our Prisma.
    - Make sure you are in the backend directory when you run the commands.
        1. npx prisma migrate reset (resets the database and recreates it)
            - Just in case it asks if you want to reset the migration, answer it with (y)
        2. npx prisma generate (generates the Prisma client for the backend to communicate to the database.
        3. npx prisma migrate dev --name init (creates the first initial migration to setup the database.
        4. npx ts-node prisma/seed.ts (runs the seed.ts file which generates mockdata for the database in postgresql.
    - After you run these commands, the backend and Prisma should be set up correctly now.
    - Safely go back into your main project directory. Follow this command.
        - cd ..
    - You will have to run the command twice to get to the main directory again.
    - OPTIONAL, you can run npx prisma studio if you want to see if the Prisma seed worked properly.
5. Start Application
    - Now that all set up is complete, we can safely run our application now!
        - npm run dev
    - This will start both backend and frontend
    - The application is now ready to use!
