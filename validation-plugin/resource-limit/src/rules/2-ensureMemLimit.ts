import { defineRule } from "@monokle/plugin-toolkit";
import { isDeployment } from "../schemas/__generated__/deployment.apps.v1.js";



export const ensureMemLimit = defineRule({
  id: 2,
  description: "Please ensure mem limit is set to 1G for dev env deployments",
  help: "Value allowed is 1G",
  validate({ resources }, { report }) {
    resources.filter(isDeployment).forEach((deployment) => {
      const containers = deployment.spec?.template?.spec?.containers;
      if (containers) {
        for (const container of containers) {
            if( container.resources?.limits?.memory !== '1G' ){
              report(deployment, { path: "spec.template.spec.containers" });
           }
        }
      }
    });
  },
});