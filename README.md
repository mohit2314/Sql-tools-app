# Sql Query Runner App

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## Live Project Link

https://sqlite-ai.netlify.app/

## Tech Stack used

1. Vue3 with typescript - beacuse its very approachable, light weight & performant
2. PrimeVue UI libray - it is one of the most popular & fast growing library in vue ecosystem constantly brining cool features & currently lib with maximum number of components
3. Pinia For State management - It is super easy to use, based on the new Vue3 composition api architechture
5. Netilfy for hosting - Gets your app live in 2-3 clicks within 5mins without any  config required


## Overall App Feature Plan

1. Login Page (optional)
2. Actual authentication if time permits (optional)
3. Landing Page at last if all things done (optional)
4. Actual product layout a navbar on top with profile icon, notification bell, Upgrade message (optional)
5. On left side sticky column navbar with options for Workspaces, support, docs 
6. Textarea for running sql query (Will try to use regex for syntax highlighting)
7. Table to show data for query result with export feature
8. History of queries ran - Utilize local storage
9. Select or upload datasets for which query needs to run
10. Ai assitance to build/fix query - Available in pro version
11. Query builder toolbox which lets build query with user inputs with options instead of writing actual query
12. Product Tour (optional)
13. Pricing page (optional)
14. Payment gateway integeration for pro version (optional)

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

# CSV Chat Tool

1. Select table record which you want to interact
2. Or Upload csv file & see its tabular preview
3. On right side interact with chatbot with context to selected record


# Graph Builder Tool

1. Select table record for which you want some graphical insights
2. Select columns for which you want to plot graph
3. hit analyze & your graph will be ready for selected columns
4. Can change type of graph, download it, edit graph in realtime

# Optimizations

1. Tried to use svg as much possible for images
2. Build generic & Reusable components
