import { useEffect, useState } from "react"
import { useGifs } from "./useGifs"
import getSingleGif from "services/getSingleGif"

export default function useSingleGif({ id }) {
  const { gifs } = useGifs()
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id)
  const [gif, setGif] = useState(gifFromCache)

  useEffect(
    function () {
      if (!gif) {
        getSingleGif({ id }).then(setGif)
      }
    },
    [id, gif]
  )

  return { gif }
}
