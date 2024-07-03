import React from 'react'

export default function Header({ username }:{ username:string }) {
  return (
    <header>
      <nav className="p-5 border border-cyan-600">
        <h1 className="text-3xl text-cyan-100">Chore Manager Demo</h1>
        <p>Hello, {username}</p>
      </nav>
    </header>
  )
}
