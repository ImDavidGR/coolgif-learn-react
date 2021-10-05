import React from "react"
import { Link, Route } from "wouter"

import "./App.css"

import Home from "./pages/Home"
import SearchResults from "./pages/SearchResults"
import Detail from "./pages/Detail"
import StaticContext from "./context/StaticContext"
import { GifsContextProvider } from "./context/GifsContext"

export default function App() {
  return (
    <StaticContext.Provider
      value={{
        name: "David",
        lastName: "Garcia",
      }}
    >
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt="Giffy logo" src="/logo.png" />
            </figure>
          </Link>

          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}
