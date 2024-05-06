import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import AppDashboard from "@/components/dashboard/AppDashboard.vue";
import SqlQueryRunner from "@/components/sql-query-runner/SqlQueryRunner.vue";
import SqlQueryBuilder from "@/components/sql-query-builder/ToolContainer.vue";
import WorkspaceDashboard from "@/components/workspaces/WorkspaceDashboard.vue";
import Faq from "@/components/faq/Faq.vue";
import ContactForm from "@/components/contactForm/ContactForm.vue";
import Plans from "@/components/plans/Plans.vue";
import AppContainer from "@/views/AppContainer.vue";
import CsvChatContainer from "@/components/csv-chatbot/CsvChatContainer.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/dashboard",
      name: "app container",
      component: AppContainer,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: AppDashboard,
        },
        {
          path: "/sql-query-runner",
          name: "Sql query runner",
          component: SqlQueryRunner,
        },
        {
          path: "/sql-query-builder",
          name: "Sql query builder",
          component: SqlQueryBuilder,
        },
        {
          path: "/csv-chat",
          name: "CSV Chat",
          component: CsvChatContainer,
        },
        {
          path: "/workspace-dashboard",
          name: "Workspace Dashboard",
          component: WorkspaceDashboard,
        },
        {
          path: "/contact-form",
          name: "Contact Form",
          component: ContactForm,
        },
        {
          path: "/faq",
          name: "FAQ",
          component: Faq,
        },
        {
          path: "/plans",
          name: "Plans",
          component: Plans,
        },
      ],
    },
  ],
});

export default router;
