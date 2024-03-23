import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"
const useGetBanner = () => {
  return useQuery({
   queryKey:["banner"],
   queryFn:()=>request.get("/banners").then((res)=> res.data)
  })
}

export default useGetBanner
