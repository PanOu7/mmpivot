import useAccountStore from "@/store/useAccountStore";

export const clientFileApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/client-file`;


export const destroyClientFile = (id) => {
  return fetch(`${clientFileApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};
