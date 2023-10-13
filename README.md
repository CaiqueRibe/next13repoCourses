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



---



### Timestamps <br>
0:00 - Intro <br>
2:32 - Setup & File Structure<br>
5:22 - Homepage & Clean Up<br>
7:12 - Routing System <br>
10:02 - Nested Routes <br>
11:04 - Layouts <br>
13:37 - Metadata API <br>
15:31 - next/font/google <br>
19:10 - Header Component <br>
21:19 - React Server Components <br>
23:26 - use client <br>
24:13 - Data Fetching <br>
28:05 - ReposPage Output <br>
31:47 - Custom Loading Page <br>
34:16 - Dynamic Routes <br>
35:30 - params Prop <br>
37:07 - Repo & RepoDir Component <br>
45:57 - Suspense Boundaries <br>
48:29 - Caching & Revalidating <br>
51:30 - API Route Handlers <br> 
53:49 - Serving Course Data <br>
56:00 - Fetching Course Data <br>
1:00:32 - Getting Search Params  <br>
1:06:00 - Getting Body Data <br>
1:10:00 - Refactor Server to Client Component <br>
1:16:30 - Search Component <br>