import {
  CallHandler,
  ClassSerializerInterceptor,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalSerializerInterceptor implements NestInterceptor {
  private readonly delegate: ClassSerializerInterceptor;

  constructor(reflector: Reflector) {
    this.delegate = new ClassSerializerInterceptor(reflector, {
      excludeExtraneousValues: true,
    });
  }

  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<unknown>> {
    return this.delegate.intercept(context, next);
  }
}
