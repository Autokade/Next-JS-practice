import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav>
    <h1>Dojo helpdesk</h1>
    <Link href = "/">Dashboard</Link>
    <Link href = "/tickets">Tickets</Link>
  </nav>
  )
}
