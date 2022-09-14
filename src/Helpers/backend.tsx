export interface ILogin {
  user: string;
  password: string;
}

export interface IUser {
  authorId: string;
}


export const configBackend: string = import.meta.env.VITE_API



export function signInEndpoint(
  user: string,
  password: string
): Promise<IUser> {
  return fetch(`${configBackend}sign-in`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user, password }),
  }).then(handleResponse);
}

export function signUpEndpoint(
  email: string,
  password: string
): Promise<IUser> {
  return fetch(`${configBackend}sign-up`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then(handleResponse);
}

export function signOutEndpoint(): Promise<IUser> {
  return fetch(`${configBackend}/logout`, {
    credentials: "include",
    method: "POST",
  }).then(handleResponse);
}


export function getFeeds(): Promise<void> {
  return fetch(`${configBackend}feeds`, {
    credentials: "include",
  }).then(handleResponse);
}

export function postFeed(
  content: string
): Promise<any> {
  return fetch(`${configBackend}feed`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  }).then(handleResponse);
}

export function postReaction(
  feedId : number,
  like : boolean,
  love : boolean
): Promise<any> {
  return fetch(`${configBackend}reaction`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ feedId, like, love }),
  }).then(handleResponse);
}

function handleResponse(resp: Response) {
  if (resp.ok) {
    return resp.json();
  } else {
    throw new Error(resp.statusText);
  }
}
