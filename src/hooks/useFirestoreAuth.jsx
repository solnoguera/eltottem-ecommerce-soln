import React from "react";
import { URL_AUTH_SIGN_IN } from "../firebase";

const useFirestoreAuth = () => {
  // const singIn = async(email, password) => {
  //     try {
  //       const response = await fetch(URL_AUTH_SIGN_IN, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email, password, returnSecureToken: true }),
  //       });
  //       const data = await response.json();
  //       const errorMessage = data?.error?.message;
  //       errorMessage
  //         ? dispatch({ type: AUTH_ERROR, errorMessage })
  //         : dispatch({
  //             type: SIGN_IN,
  //             token: data.idToken,
  //             userId: data.localId,
  //           });
  //     } catch (error) {
  //       console.log(error);
  //     }
  // }
  //   return { singIn}
};

export default useFirestoreAuth;
