"use client"

import { signOut } from "aws-amplify/auth"

export default function App() {
  async function handleSignOut() {
    await signOut()
  }

  return (
    <button type="button" onClick={handleSignOut}>
      Sign out
    </button>
  )
}