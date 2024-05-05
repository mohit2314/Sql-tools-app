# Sql Query Runner App

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## FEATURES

1. Login Page
2. Actual authentication if time permits
3. Landing Page at last if all things done
4. Actual product layout a navbar on top with profile icon, notification bell, Upgrade message
5. On left side sticky column navbar with options for Workspaces, support, docs
6. Textarea for running sql query (Will try to use regex for syntax highlighting)
7. Table to show data for query result with export feature
8. History of queries ran - Utilize local storage
9. Select or upload datasets for which query needs to run
10. Ai assitance to build/fix query - Available in pro version
11. Query builder toolbox which lets build query with user inputs with options instead of writing actual query
12. Product Tour
13. Pricing page
14. Payment gateway integeration for pro version

# SQL Query ruuner Tool

1. option to select database
2. option to see available tables in that database
3. Show current Workspace & option to change current workspace
4. Code editor
5. Run query (based on query perform mocking of results & notification messages)
6. option to export result as csv
7. feature to compare result tables side by side (may be separate tool)
8. option to maximize result table
9. Graph builder for result table (Coming soon)
   10.option to save query in respective workspace
