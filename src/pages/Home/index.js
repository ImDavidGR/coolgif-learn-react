import React, { useCallback } from "react"
import { useLocation } from "wouter"
import ListOfGifs from "components/ListOfGifs"
import { useGifs } from "hooks/useGifs"
import TrendingSearches from "components/TrendingSearches"
import SearchForm from "components/SearchForm"
import { Helmet } from "react-helmet"

export default function Home() {
  const [path, pushLocation] = useLocation() // eslint-disable-line
  const { loading, gifs } = useGifs() // eslint-disable-line

  const title = "Coolgif | Searching gifs"
  const description = `Gif searcher ${title}`

  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`)
    },
    [pushLocation]
  )

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Helmet>

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
