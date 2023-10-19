// register directives
import directives from "../../../src/utils/directives";
import { forEach } from "lodash-es";
import { createRouter, createWebHistory } from "vue-router";

export const useDirective = (app)=>{
  if (typeof window === "undefined") return
  forEach(directives, (directive, name) => {
    app.directive(name, directive);
  });
}

export const useCreateRouter = (app)=>{
  if (typeof window === "undefined") return
  const router = createRouter({
    history: createWebHistory("/"),
    routes: []
  });
  app.use(router)
}
