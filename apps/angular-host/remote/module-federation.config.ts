import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'remote',
  exposes: {
    './Routes': 'apps/angular-host/remote/src/app/remote-entry/entry.routes.ts',
    './Box': 'apps/angular-host/remote/src/app/box/box.component.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
