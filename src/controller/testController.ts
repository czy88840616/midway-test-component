import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';
import { BookService } from '../service/bookService';

@Provide()
@Controller('/test')
export class HomeController {
  @Inject()
  bookService: BookService;       // 这里直接注入了 book 这个作用域下的 bookService

  @Inject()
  ctx;

  @Get("/hello")
  async hello(){
    this.ctx.body = await this.bookService.getBookById();
  }

}