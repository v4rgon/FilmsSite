export const urls = {
  root: "/",
  register: "/register",
  confirmEmail: "/email/verify/:username/:token",
  resetPassword: "/password/reset/:username/:token",
  forgetPassword: "/password/forget",
  login: "/login",
  films: "/films",
  collection: "/collection",
  filmDetails: "/films/details/:id",

  admin: "/admin/films",
  adminEditFilm: "/admin/films/edit/:id",

  notFound: "/404"
};
