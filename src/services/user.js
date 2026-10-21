import useAccountStore from "@/store/useAccountStore";

export const userApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/user`;


export const fetchUser = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  }).then((res) => res.json());

export const storeUser = (data) => {
  return fetch(userApiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};
export const getUserDetail = (id) => {
  return fetch(`${userApiUrl}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const terminateUser = (id) => {
  return fetch(`${userApiUrl}/${id}/terminate`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const updateUser = (data, id) => {
  return fetch(`${userApiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};