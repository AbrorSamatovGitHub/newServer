import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"
const useGetCingleCategory = (slug) => {
  return useQuery({
   queryKey:["phones",slug],
   queryFn:()=>request.get(`/${slug}`).then((res)=> res.data)
  })
}
export default useGetCingleCategory
