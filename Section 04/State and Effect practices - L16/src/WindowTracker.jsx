import React from "react"

export default function WindowTracker() {
    const [width, setWidth] = React.useState(window.innerWidth)

  
    React.useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => {
            console.log("Cleaning up")
            window.removeEventListener("resize", handleResize)
        } // cleanup function
    },[])
    return (
        <h1>Window width: {width}</h1>
    )
}