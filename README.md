## Getting Started backend

First, run set the package.json and run:

```bash
npm i
npm start
npm run docker:start // to run docker for mongo
```

## To run a prod

npm run build
npm run start:prod

```
npm run docker:stop // to stop docker
```

## Breakpoints

baseURL = http://localhost:3030/

GET snippets/?limit,page,search,tags - to find all snippets
GET snippets/:id - to find one snippet by id
POST snippets - to create snippet
PATCH snippets/:id - to update snippet
DELETE snippets/:id - to delete snippet

---

## Getting Started frontend

First, run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
