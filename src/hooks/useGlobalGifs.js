import { useContext } from "react"
import GifsContext from "../context/GifsContext"

export default function useGloblaGifs() {
  const { gifs } = useContext(GifsContext)
  return gifs
}
