import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from "./pages/coaches/CoachDetail.vue";
import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestsReceived from "./pages/requests/RequestsReceived.vue";
import NotFound from "./pages/NotFound.vue";
import UserAuth from "./pages/auth/UserAuth.vue";
import store from "./store/index.js";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/" , redirect: "/find-coaches/coaches", },
    { path: "/find-coaches/" , redirect: "/find-coaches/coaches" },
    { path: "/find-coaches/coaches", component: CoachesList },
    {
      path: "/find-coaches/coaches/:id",
      component: CoachDetail,
      props: true,
      children: [
        { path: "contact", component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    {
      path: "/find-coaches/register",
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: "/find-coaches/requests",
      component: RequestsReceived,
      meta: { requiresAuth: true },
    },
    { path: "/find-coaches/auth", component: UserAuth, meta: { requiresUnAuth: true } },
    { path: "/find-coaches/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/find-coaches/auth");
  } else if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
    next("/find-coaches/coaches");
  } else {
    next();
  }
});

export default router;
