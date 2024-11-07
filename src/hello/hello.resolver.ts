import { Float, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {
  @Query(() => String, {
    description: 'Returns a greeting message.',
    name: 'hola',
  })
  hello(): string {
    return 'Hello World!';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }
}
