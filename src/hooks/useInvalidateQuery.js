import { client } from "../config/query-cliend";
const useInvalidateQuery = () => {
 const invalidata = (key)=>{
  client.invalidateQueries({queryKey:[key]})
 }
  return {invalidata}
}

export default useInvalidateQuery
