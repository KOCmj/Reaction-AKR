import { useEffect, useState } from "react"
import { server_calls } from "../api/server"

export const useGetData = () => {
    const [contactData, setContactData] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setContactData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

  return {  contactData, getData: handleDataFetch }

}

