import { InferResponseType } from "hono";
import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

interface useGetProjectAnalyticsProps {
  projectId: string;
}

export type ProjectAnalyticsResponseType = InferResponseType<
  (typeof client.api.projects)[":projectId"]["analytics"]["$get"],
  200
>;

export const useGetProjectAnalytics = ({
  projectId,
}: useGetProjectAnalyticsProps) => {
  const query = useQuery({
    queryKey: ["project-analytics", projectId],
    queryFn: async () => {
      const res = await client.api.projects[":projectId"]["analytics"].$get({
        param: {
          projectId,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch project analytics");

      const { data } = await res.json();

      return data;
    },
  });

  return query;
};
