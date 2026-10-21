export const trackingApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/tracking`;

export const fetchTracking = (url) => fetch(url).then((res) => res.json());

export const uploadRequestFile = (formData) => {
  return fetch(`${trackingApiUrl}-file-upload`, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });
};
