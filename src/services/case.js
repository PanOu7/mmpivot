import useAccountStore from "@/store/useAccountStore";

export const caseApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/customer-case`;


export const fetchCase = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  }).then((res) => res.json());


export const storeCase = (data) => {
  return fetch(caseApiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const destroyCase = (id) => {
  return fetch(`${caseApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const updateCase = (data, id) => {
  return fetch(`${caseApiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const updateCaseStatus = (id) => {
  return fetch(`${caseApiUrl}/${id}/update-is-publish`, {
    method: "PATCH",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};
