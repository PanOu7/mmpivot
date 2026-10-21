import useAccountStore from "@/store/useAccountStore";

export const profileApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/user-profile`;


export const checkProfile = async (updateToken) => {
  return fetch(`${profileApiUrl}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${updateToken}`,
    },
  });
};

export const changeName = (data) => {
  return fetch(profileApiUrl + `/change-name`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const changePassword = (data) => {
  return fetch(profileApiUrl + `/change-password`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const changeImage = (formData) => {
  return fetch(
    process.env.NEXT_PUBLIC_API_URL + "/user-profile/change-profile-image",
    {
      method: "POST",
      body: formData,
      headers: {
        // Accept: "application/json",
        Authorization: `Bearer ${useAccountStore.getState().token}`, 
      },
    }
  );
};
