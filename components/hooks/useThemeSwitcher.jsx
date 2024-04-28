import { useEffect, useState } from "react"


export default function useThemeSwitcher() {
  const preferDarkQuery = "(prefers-color-scheme: dark)"
  const [mode, setMode] = useState(() => {
    try {
      const userPref = window.localStorage.getItem("theme")
      if(userPref) {
        return userPref === "dark" ? "dark" : "false"
      }
      
      return window.matchMedia(preferDarkQuery).matches ? "dark" : "light"
    } catch (err) {
      console.error(err.message)
      return "light"
    }
  })
  
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userPref = window.localStorage.getItem("theme")
    
    
    const handleChange = () => {
      if(userPref) {
        let checkPref = userPref === "dark" ? "dark" : "light"
        setMode(checkPref)

        if(checkPref === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }

      } else {
        let checkPref = mediaQuery.matches ? "dark" : "light"
        setMode(checkPref)

        if(checkPref === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }

      }
    }

    handleChange()

    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)

  }, [])

  useEffect(() => {
    if(mode === "dark") {
      window.localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
    } else {
      window.localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
    }

  }, [mode])
  
  return [mode,setMode]
}


