import Axios from "axios";

export const GET = async (endPoint: string): Promise<unknown> =>
  new Promise((resolve, reject) => {
    Axios.get(endPoint)
      .then((response) => {
        if (response) {
          resolve(response.data);
        }
      })
      .catch((error: Error) => {
        reject(error);
      });
  });
