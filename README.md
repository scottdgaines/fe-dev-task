This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Directions

Your goal is to build a website component in Next.js using a combination of JavaScript, HTML, and CSS.

1. Build a component consistent with the design (see screenshot and design below)
2. Retrieve the questions and answers from the `db.json` file located in the `_data` folder using the provided `json-server` package and `getData` function.
3. Use the included `id` to sort and number the questions in chronological order for display on the page
4. Your code should be able to handle additional FAQs added in the future
5. The answers should be hidden by default and revealed when the user clicks the question
6. Show off your CSS skills and include some animations if possible
7. Create a new branch, with your name as part of the branch name, and push your code to it at the end of the time limit

```bash
_Some baseline styles and brand colors have been provided as well as an SVG image from the design._
```

### Data Fetching

This project includes a json file in the `_data` folder. To use it install [`json-server`](https://www.npmjs.com/package/json-server) and run `npx json-server --watch --port 4000 ./_data/db.json`. There is a `getData` function already built that will get the data.

### The Design

![alt text](https://github.com/pelago-marketing/fe-dev-task/blob/6d599735185b34732a2dbd0554f89bd5cc412c45/public/img-faq-design.png)

The design file can be viewed here: https://www.figma.com/file/qM1evJc5mx2Pw6J6gkNnTk/Dev-Task-Design?type=design&node-id=1%3A7&mode=design&t=FDPoBROl4DgY9O8c-1

🤫 _Hint: Use Figma dev mode to get specifics on styles and colors_

### Rules

Use any resources at your disposal aside from AI tools. Google, Stackoverflow, and other web resources are all fair game. You can reach out to the interviewers with questions as well.

### Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
