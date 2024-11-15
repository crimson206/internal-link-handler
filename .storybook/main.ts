import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;