import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "3c9fa59e74mshe510c00a802c4e2p1dd3f2jsnf48bce35bd5e",
    },
  });

  return data;
};
