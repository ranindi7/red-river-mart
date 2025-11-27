// import "./signInComponent.css";
// import { SignInButton, SignUpButton } from "@clerk/clerk-react";
// export default function SignIn() {
//     return (
//         <section className="signInComponent">
//             <form>   
//                 <h1>Sign In</h1>
//                 <div className="emailContainer">
//                     <label htmlFor="email">Email: </label>
//                     <input type="email" placeholder="Enter Your Email"></input>
//                 </div>
//                 <div className="passwordContainer">
//                     <label htmlFor="password">Password: </label>
//                     <input type="password" placeholder="Enter Your Password"></input>
//                 </div>
//                 <div className="loginButtonContainer">
//                 <SignInButton />

//                 <SignUpButton mode="modal">
//                     <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
//                     Sign Up
//                     </button>
//                 </SignUpButton>
//                 </div>

//             </form>
//         </section>
//     )
// }

import "./signInComponent.css";
import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <section className="signInComponent">
      {/* <div className="signInCard">
        <p>Welcome to Red River Mart!</p>
        <p>Please sign in to view the Marketplace.</p> */}

        <SignIn routing="path" path="/sign-in" />

        {/* <SignInButton /> */}

        {/* <p>Don't have an account yet? Sign up now.</p> */}

        {/* <SignUpButton>
          <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Sign Up
          </button>
        </SignUpButton> */}
      {/* </div> */}
    </section>
  );
}
