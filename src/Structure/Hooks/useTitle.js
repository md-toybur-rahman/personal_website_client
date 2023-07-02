import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `Toybur Rahman | ${title}`
    }, [title])
};

export default useTitle;