import { useState } from 'react';

const useFetchApiCall = () => {
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState();

  const apiCall = async (
    api,
    method = 'GET',
    body = null,
    customHeaders = {
      'Content-Type': 'application/json',
    }
  ) => {
    try {
      setLoading(true);
      const headers = new Headers(customHeaders);
      const options = {
        method,
        headers,
        credentials: 'include',
      };

      if (body !== null) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(process.env.REACT_APP_API + api, options);
      setLoading(false);

      const data = await response.json();
      if (data.success) {
        setTotal(response.headers.get("X-Total-Count"))
        return data;
      } else {
        return data;
      }
    } catch (err) {
      setLoading(false)
      return { message: err.message };
    }
  };

  return { loading, apiCall, total };
};

export default useFetchApiCall;
