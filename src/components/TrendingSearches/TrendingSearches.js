import React, { useEffect, useState } from "react"
import getTrendingTermsSearches from "services/getTrendingTermsSearches"
import Category from "components/Category"

export default function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getTrendingTermsSearches().then(setTrends)
  }, [])

  return <Category name="Tendencias" options={trends} />
}
