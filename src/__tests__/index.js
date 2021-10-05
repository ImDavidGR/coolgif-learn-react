import React from "react"
import { screen, fireEvent, render } from "@testing-library/react"
import App from "App"

test("search form could be used", async () => {
  render(<App />)
  const input = await screen.findByRole("textbox")
  fireEvent.change(input, { target: { value: "fururama" } })

  const button = await screen.findByRole("button")
  fireEvent.click(button)
})
