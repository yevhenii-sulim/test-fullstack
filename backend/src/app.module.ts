import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { SnippetModule } from '~/snippet/snippet.module';

@Module({
  imports: [
    SnippetModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI as string),
  ],
})
export class AppModule {}
