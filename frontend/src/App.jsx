import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

/**
 * Root application component that renders the page header and authentication controls.
 *
 * Displays a "Login" button when the user is signed out, a sign-out control when the user
 * is signed in, and a user menu button that reflects the current authentication state.
 * 
 * @returns {JSX.Element} The app's root JSX element containing the header and Clerk authentication UI.
 */
function App() {
 

  return (
    <>
    <h1>Welcome to app</h1>
    <SignedOut>
      <SignInButton  mode="modal">
        <button >
          Login
        </button>
      </SignInButton>
    </SignedOut>
    <SignedIn>
      <SignOutButton/>
    </SignedIn>
    <UserButton/> 
    </>
  )
}

export default App