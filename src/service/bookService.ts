import { Provide, Inject } from '@midwayjs/decorator';

@Provide()
export class BookService {

  @Inject()
  ctx;

  async getBookById() {
    return {
      data: 'hello world',
      query: this.ctx.query,
    }
  }
}