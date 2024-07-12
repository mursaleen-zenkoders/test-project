// React Query Imports
import { useQuery, UseQueryResult } from "@tanstack/react-query";

// Service Imports
import { GET } from "@/service/axios-handler";

// URLS Imports
import { URLS } from "@/service/base-url";
import { UserT } from "@/types/user";

export const GetAllProductsHook = (
  id: number
): UseQueryResult<UserT, Error> => {
  const GetAllProductsFn = async (): Promise<unknown> => {
    const response = await GET(URLS.GET_USER(id));
    return response;
  };

  return useQuery({
    queryFn: GetAllProductsFn,
    queryKey: ["user", id],
  });
};
