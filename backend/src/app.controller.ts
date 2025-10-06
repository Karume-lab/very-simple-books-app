import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Root')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Get a welcome message',
    description:
      'Returns a simple greeting message to confirm that the API is running.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successful response with a welcome message.',
    schema: {
      example: {
        message: 'Hello World!',
      },
    },
  })
  getHello(): { message: string } {
    return { message: this.appService.getHello() };
  }
}
