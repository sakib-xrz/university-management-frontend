"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

import APIKit from "@/common/APIKit";
import HTTPKit from "@/common/HTTPKit";
import { AUTH_TOKEN_KEY } from "@/common/KeyChain";

import { selectUser, setUserData } from "@/redux/reducers/userSlice";

export const setJWTokenAndRedirect = (token, redirect = () => {}) => {
  const onSuccess = (client) => {
    let token = client.defaults.headers.common["Authorization"];
    token = token.replace("Bearer ", "");
    localStorage.setItem(AUTH_TOKEN_KEY, token);

    HTTPKit.defer.resolve(client);
    redirect();
  };
  return APIKit.setClientToken(token)
    .then(onSuccess)
    .catch((error) => console.log(error));
};

export default function AuthGuardHOC(props) {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      setJWTokenAndRedirect(token)
        .then(dispatch(setUserData(jwt_decode(token))))
        .catch((error) => {
          console.log(error?.response);
          router.push("/logout");
        });
    } else {
      const nextURL = { next: pathname };
      const queryParams = new URLSearchParams(nextURL).toString();
      router.push(`/login?${queryParams}`);
    }
  }, []);

  return user ? props.children : null;
}
