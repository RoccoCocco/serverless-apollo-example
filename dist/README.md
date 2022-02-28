### How to start

```
npm i
npm run dev
```

Visit playground: `http://localhost:3000/dev/graphql`

```graphql
query GetMePosts {
  getPost(id: 29) {
    __typename
    id
    userId
    title
    body
  }
}

mutation CreateMyPostPlease {
  createPost(id: 1) {
    userId
  }
}
```
