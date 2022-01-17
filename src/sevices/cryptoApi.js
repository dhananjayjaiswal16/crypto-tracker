import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
}

const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
})
const createHistoryRequest = (url, timePeriod) => ({
  url,
  params: { timePeriod: timePeriod },
  headers: cryptoApiHeaders,
})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetail: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => createHistoryRequest(`/coin/${coinId}/history`, timePeriod)
    }),
    getExchanges: builder.query({
      query: () => createRequest(`/exchanges`)
    })
  })
})

export const { useGetCryptosQuery, useGetCryptoDetailQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;