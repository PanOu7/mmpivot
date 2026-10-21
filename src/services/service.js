import useAccountStore from "@/store/useAccountStore";

export const serviceApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/service`;


export const fetchService = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  }).then((res) => res.json());

export const storeService = (data) => {
  return fetch(serviceApiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const destroyService = (id) => {
  return fetch(`${serviceApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const updateService = (data, id) => {
  return fetch(`${serviceApiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const updateServiceStatus = (id) => {
  return fetch(`${serviceApiUrl}/${id}/update-is-publish`, {
    method: "PATCH",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};
