<img src="image.png" alt="Alt text" width="600">

# Next.js 13 Crash Course | App Directory, React Server Components & More

https://www.youtube.com/watch?v=Y6KDk5iyrYE&ab_channel=TraversyMedia

> A complete crash course to NextJS version 13 and it's new features such as the app directory structure, routing, React Server Components vs client components, layouts and more.

Project --> **List from an API and list from DB** <br>
Channel --> **Traversy Media 2,15 mi de inscritos** <br>
Date Created --> **5 de abr. de 2023**

### Observations

-  created-with-next13js
-  react-icons
-  uuid
-  autoLoading page for RSC
-  Suspense component
-  api in nextjs
   -  route to searched courses

### Components

-  page.jsx (client)
   -  coursesSearch (server)
   -  courses (client)
-  loading.jsx (server)
   -  create/page (client)
   -  header (server)
   -  code
      -  ReposPage
         -  RepoPage[name] details
   -  about
      -  team
   -  api
      -  helloWorld
      -  courses
         -  search from url parameter

## Advantages of RSC (React ServerSide Components)

### By default in next.js components are created on serverSide unless you specify that they are client components

-  Load faster - Don't have to wait for the JavaScript to load
-  Smaller client bundle size
-  SEO friendly
-  Access to resources the client can't access
-  Hide sensitive data from the client
-  More secure against XSS attacks
-  Improved developer experience

### Just like with anything else, there are also disadvantages

-  Not as interactive
-  No component state. We can not use the `useState` hook.
-  No component lifecycle methods.
-  We can not use the `useEffect hook.

<br>
<br>

## Commits

### 1st commit

-  Routes
-  RSC
-  Suspense
-  Cache & revalidate

### 2nd commit

-  Params on URL
-  Client side component vs RSC
