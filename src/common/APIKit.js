import HTTPKit, { client } from "./HTTPKit";

const APIKit = {
  setClientToken: HTTPKit.setClientToken,

  auth: {
    login: (payload) => {
      const url = "/auth/login";
      return client.post(url, payload);
    },
  },
};

export default APIKit;
