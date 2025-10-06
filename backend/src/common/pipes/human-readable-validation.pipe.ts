import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  ValidationPipe,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';

@Injectable()
export class HumanReadableValidationPipe extends ValidationPipe {
  constructor() {
    super({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      stopAtFirstError: false,
      exceptionFactory: (
        validationErrors: ValidationError[] = [],
      ): BadRequestException => {
        const errors: Record<string, string> = {};

        for (const err of validationErrors) {
          const error = err;
          if (error.constraints) {
            const field: string = error.property;
            const message: string = Object.values(error.constraints)[0];
            errors[field] = message.charAt(0).toUpperCase() + message.slice(1);
          }

          if (error.children && error.children.length > 0) {
            for (const child of error.children) {
              if (child.constraints) {
                const fieldName = `${error.property}.${child.property}`;
                const msg = Object.values(child.constraints)[0];
                errors[fieldName] = msg.charAt(0).toUpperCase() + msg.slice(1);
              }
            }
          }
        }

        return new BadRequestException({
          statusCode: 400,
          error: 'Bad Request',
          message: errors,
        });
      },
    });
  }

  override async transform(
    value: unknown,
    metadata: ArgumentMetadata,
  ): Promise<unknown> {
    return super.transform(value, metadata);
  }
}
