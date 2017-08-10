import "isomorphic-fetch";

const SERVER = process.env.SERVER;

export const registerNewsLetter = (name, email, page, category) => {
  return fetch(`${SERVER}/newsletter`, {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      page,
      category,
    }),
  });
};

const checkStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    var error = new Error(res.statusText);
    error.res = res;
    throw error;
  }
};

