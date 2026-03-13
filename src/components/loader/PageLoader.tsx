"use client"

import { useEffect, useState } from "react"
import RavenLoader from "./RavenLoader"

export default function PageLoader({
  children,
}: {
  children: React.ReactNode
}) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <RavenLoader />}

      {!loading && (
        <div className="animate-fade-in">
          {children}
        </div>
      )}
    </>
  )
}