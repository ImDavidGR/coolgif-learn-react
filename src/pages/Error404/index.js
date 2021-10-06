import React from "react"
import { Link } from "wouter"
import "./styles.css"

export default function Error404() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>

        <Link to="/">
          <a>Homepage</a>
        </Link>
      </div>
    </div>
  )
}
