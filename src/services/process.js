import useAccountStore from "@/store/useAccountStore";

export const processApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/process`;


export const fetchProcess = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  }).then((res) => res.json());

export const storeProcess = (data) => {
  return fetch(processApiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const destroyProcess = (id) => {
  return fetch(`${processApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const updateProcess = (data, id) => {
  return fetch(`${processApiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

