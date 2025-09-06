import { baseUrlApi } from "@/redux/api/baseUrlApi";

interface SignUpResponse {
  message: string;
  success?: string;
}

interface SignUpRequest {
  message?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const authApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (userData) => ({
        url: "/users/register",
        method: "POST",
        body: userData,
      }),
    }),

    // role change
    RoleSetAndUpdate: build.mutation({
      query: (roleData) => ({
        url: "/users/update-role",
        method: "PATCH",
        body: roleData,
      }),
    }),

    // signIn
    signIn: build.mutation({
      query: (signInUserData) => ({
        url: "/auth/login",
        method: "POST",
        body: signInUserData,
      }),
    }),
    // google  signIn
    googleLogin: build.mutation({
      query: (tokon) => ({
        url: "/auth/google-login",
        method: "POST",
        body: tokon,
      }),
    }),
    // forgetPassword
    forgetPassword: build.mutation({
      query: (email) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: email,
      }),
    }),

    // reset Password
    resetPassword: build.mutation({
      query: (resetData) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: resetData,
      }),
    }),

    // user catch
    userInfo: build.query({
      query: ({ id }) => ({
        url: `/auth/${id}`,
        method: "get",
      }),
    }),
    // singin tracking api call
    getSinginTracking: build.query({
      query: (token) => ({
        url: `/auth/loginInfo`,
        method: "get",
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useRoleSetAndUpdateMutation,
  useUserInfoQuery,
  useGoogleLoginMutation,
  useGetSinginTrackingQuery,
} = authApi;
