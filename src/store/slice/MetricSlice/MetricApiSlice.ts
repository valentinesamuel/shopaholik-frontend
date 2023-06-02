import { apiSlice } from '..';
import { Metrics } from '../../../Utils/Types';

export const metricApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMetrics: builder.query<Metrics, null>({
      query: () => '/metrics',
      providesTags: (result, error, _params) => {
        if (error || !result) {
          return ['Metric'];
        }

        // Generate tags for each metric using their ID
        const metricIds = Object.keys(result);
        return metricIds.map((metricId) => ({ type: 'Metric', id: metricId }));
      },
    }),
  }),
});
