import React, { useCallback, useRef, useEffect } from "react"
import Spinner from "components/Spinner"
import ListOfGifs from "components/ListOfGifs"
import { useGifs } from "hooks/useGifs"
import useNearScreen from "hooks/useNearScreen"
import debounce from "just-debounce-it"
import { Helmet } from "react-helmet"

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  })

  const title = gifs ? `Resultados de ${keyword}` : ""
  const description = `Searching gifs of ${keyword}`

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  )

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage()
    },
    [debounceHandleNextPage, isNearScreen]
  )

  return (
    <>
      <Helmet>
        <title>{title} | Coolgif</title>
        <meta name="description" content={description}></meta>
      </Helmet>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </>
  )
}
