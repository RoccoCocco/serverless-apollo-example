import axios, { AxiosInstance } from 'axios';
import { DataSource } from 'apollo-datasource';

import { Post } from '../generated/graphql';

export class PostProvider extends DataSource<{ test: any }> {
  private getClient(): AxiosInstance {
    return axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/',
    });
  }

  async getPost(id: number) {
    return this.getClient()
      .get<Post>(`posts/${id}`)
      .then(({ data }) => data);
  }

  async getPosts() {
    return this.getClient().get('posts');
  }
}
