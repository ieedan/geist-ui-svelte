# geist-ui-svelte Contributing Guide

## What you need

-   Basic understanding of Svelte
-   Basic understanding of TypeScript
-   Basic understanding of TailwindCSS

### Running in development

Fork this repo then run:

```bash
npm install
npm run dev
```

### PRs

PRs are welcome we just ask that you can communicate what you are doing before to make sure no one else is working on the same thing.

Before you open a PR make sure to run:

```bash
npm run format # prettier format
npm run lint # eslint check
npm run build # make sure build will pass
```

PRs will not be merged with failing checks.

Keep your changes to the point so that they can be easily reviewed.

### Creating a component

Add the component under `/src/lib/[mycomponent]`. Make sure you match the casing conventions of all lowercase characters for the file name and PascalCase for the component name.

When you have finished the component add it to `/src/lib/index.js` and create an export for it.

Ex:

```js
// /src/lib/index.js
export { default as MyComponent } from "./mycomponent/MyComponent.svelte";
```

You'll next want to add the components documentation so see next: Creating a docs page

### Creating a docs page

To create a docs page for a component go to `/src/routes/components` and add your components page such as it looks like `/src/routes/components/mycomponent/+page.svelte`.

Try your best to follow the style and whitespace of the rest of the documentation. A good boilerplate starting point is `/src/routes/components/spacer/+page.svelte`.
