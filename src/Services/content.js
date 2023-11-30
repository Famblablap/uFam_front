import api from "./config";

export const createContent = async (contentData) => {
  const token = localStorage.getItem("token");
  return api.post("/content", contentData, {
    headers: {
      authorization: token,
    },
  });
};

export const getAllFamContent = async () => {
  const response = await api.get("/content", {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
  return response
};

export const getMyContent = async () => {
  const response = await api.get("/content/profile", {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
  return response;
}

export const getOneFamContent = async (id) => {
  const response = await api.get(`/content/${id}`, {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
  return response;
}