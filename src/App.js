import React from "react"
import { Link, Route } from "wouter"

import "./App.css"

import { GifsContextProvider } from "./context/GifsContext"
import StaticContext from "./context/StaticContext"

import Home from "./pages/Home"
import SearchResults from "./pages/SearchResults"
import Detail from "./pages/Detail"
import Error404 from "pages/Error404"

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

          <Route component={Error404} path="/404" />
        </section>
      </div>
    </StaticContext.Provider>
  )
}
