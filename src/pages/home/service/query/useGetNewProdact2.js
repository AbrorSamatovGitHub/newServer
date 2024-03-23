import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";
export const useGetNewProduct2 = (slug) => {
  return useQuery({
    queryKey: ["newProdact", slug],
    queryFn: () =>
      request
        .get(`/${slug}`, { params: { _limit: 3 } })
        .then((res) => res.data),
  });
};
