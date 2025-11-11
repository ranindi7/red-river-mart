import "./signInComponent.css";

export default function SignIn() {
    return (
        <section className="signInComponent">
            <form>   
                <h1>Sign In</h1>
                <div className="emailContainer">
                    <label htmlFor="email">Email: </label>
                    <input type="email" placeholder="Enter Your Email"></input>
                </div>
                <div className="passwordContainer">
                    <label htmlFor="password">Password: </label>
                    <input type="password" placeholder="Enter Your Password"></input>
                </div>
                <div className="loginButtonContainer">
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </section>
    )
}