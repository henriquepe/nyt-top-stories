import axios from "axios";

const instance = axios.create({ timeout: 35000 });

export const httpRequestHandler = async ({
  method,
  url,
  headers = null,
  body = null,
  params = null,
}) => {
  try {
    const request = {
      method,
      url,
      headers,
      data: body,
      params,
    };

    const { data } = await instance(request);
    return data;
  } catch (error) {
    throw error.response;
  }
};
