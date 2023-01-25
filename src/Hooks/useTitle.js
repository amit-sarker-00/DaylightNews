import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} || DayLight-News`
    }, [title])
}
export default useTitle