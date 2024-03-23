import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../../config/request"
const useGetCatalog = () => {
  return useQuery({
   queryKey:["catalog"],
   queryFn:()=>request.get("/catalog").then((res)=> res.data)
  })
}

export default useGetCatalog
