import axios from "axios";

export const getVehiclesApi = () => {
  const url = `${process.env.NEXT_PUBLIC_HOST}/vehicles`;
  return axios.get(url);
};

export const getVehicleApi = (id) => {
  const url = process.env.NEXT_PUBLIC_HOST + "/vehicles/" + id;
  return axios.get(url);
};

export const getVehiclesPopularApi = () => {
  const url = process.env.NEXT_PUBLIC_HOST + "/history/popular";
  return axios.get(url);
};

export const getVehiclePopularIdApi = (id) => {
  const url = process.env.NEXT_PUBLIC_HOST + "/history/popular/" + id;
  return axios.get(url);
};

export const addVehicleApi = (body, token) => {
  const url = process.env.NEXT_PUBLIC_HOST + "/vehicles/";
  console.log(body);
  const config = {
    headers: {
      "x-access-token": token
    }
  };
  return axios.post(url, body, config);
};

export const updateVehicleApi = (body, token, id) => {
  const url = process.env.NEXT_PUBLIC_HOST + "/vehicles/" + id;
  const config = {
    headers: {
      "x-access-token": token
    }
  };
  return axios.patch(url, body, config);
};

export const deleteVehicleApi = (id, token) => {
  const url = process.env.NEXT_PUBLIC_HOST + /vehicles/ + id;
  const config = {
    headers: { "x-access-token": token }
  };
  return axios.delete(url, config);
};

export const getCategoryApi = () => {
  const url = process.env.NEXT_PUBLIC_HOST + "/category";
  return axios.get(url);
};

export const getStatusApi = () => {
  const url = process.env.NEXT_PUBLIC_HOST + "/status";
  return axios.get(url);
};

export const getLocationApi = () => {
  const url = process.env.NEXT_PUBLIC_HOST + "/location";
  return axios.get(url);
};

export const newCategory = (body, token) => {
  const url = process.env.NEXT_PUBLIC_HOST + "/category";
  const config = {
    headers: {
      "x-access-token": token
    }
  };
  return axios.post(url, body, config);
};

export const deleteCategoryApi = (id, token) => {
  const url = process.env.NEXT_PUBLIC_HOST + "/category/" + id;
  const config = {
    headers: {
      "x-access-token": token
    }
  };

  return axios.delete(url, config);
};

export const searchVehicleHomeApi = (
  keyword,
  filterLocation,
  filterCategory
) => {
  const url =
    process.env.NEXT_PUBLIC_HOST +
    `/vehicles?search=${keyword}&filterLocation=${filterLocation}&filterCategory=${filterCategory}`;
  return axios.get(url);
};
