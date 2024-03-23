import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";
const useGetNewProduct = (slug) => {
  return useQuery({
    queryKey: ["newProdact", slug],
    queryFn: () => request.get(`/${slug}`).then((res) => res.data),
  });
};

export default useGetNewProduct;
