import useAccountStore from "@/store/useAccountStore";

export const customerApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/customer`;


export const fetchCustomer = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  }).then((res) => res.json());

export const storeCustomer = (data) => {
  return fetch(customerApiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const destroyCustomer = (id) => {
  return fetch(`${customerApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const updateCustomer = (data, id) => {
  return fetch(`${customerApiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const updateCustomerStatus = (id) => {
  return fetch(`${customerApiUrl}/${id}/update-is-publish`, {
    method: "PATCH",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};
