import React from 'react'
import { Navigate } from 'react-router-dom'
function PublicRoute({ isSignedIn, children }) {
  console.log('isSignedIn1', isSignedIn)
  if (isSignedIn) {
    return <Navigate to="/home" replace />
  }
  return children
}
export default PublicRoute