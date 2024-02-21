import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const api = axios.create({
  baseURL: SERVER_URL,
});

const userApi = {
  createUser: async (userData) => {
    try {
      const response = await api.post("/user", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  loginUser: async (loginData) => {
    try {
      const response = await api.post("/user/login", loginData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getCurrentUser: async (token) => {
    try {
      const response = await api.get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default userApi;
