import React, { useCallback } from "react"
import { useLocation } from "wouter"
import ListOfGifs from "components/ListOfGifs"
import { useGifs } from "hooks/useGifs"
import TrendingSearches from "components/TrendingSearches"
import SearchForm from "components/SearchForm"

export default function Home() {
  const [path, pushLocation] = useLocation() // eslint-disable-line
  const { loading, gifs } = useGifs() // eslint-disable-line

  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`)
    },
    [pushLocation]
  )

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  )
}