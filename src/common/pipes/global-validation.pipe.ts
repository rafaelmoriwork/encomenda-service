import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  ValidationPipe,
} from '@nestjs/common';

@Injectable()
export class GlobalValidationPipe implements PipeTransform {
  private readonly delegate: ValidationPipe;

  constructor() {
    this.delegate = new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: false,
      errorFormat: 'grouped',
    });
  }

  public transform(
    value: unknown,
    metadata: ArgumentMetadata,
  ): Promise<unknown> {
    return this.delegate.transform(value, metadata);
  }
}
