import useAccountStore from "@/store/useAccountStore";

export const attachmentApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/attachment`;


export const fetchAttachment = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  }).then((res) => res.json());

export const destroyAttachment = (id) => {
  return fetch(`${attachmentApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const uploadAttachment = (formData) => {
  return fetch(`${attachmentApiUrl}`, {
    method: "POST",
    body: formData,
    headers: {
      // "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};
