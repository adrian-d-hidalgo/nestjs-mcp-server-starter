import { Module } from '@nestjs/common';
import { McpModule } from '@nestjs-mcp/server';

import { DocumentationResolver } from './documentation.resolver';

@Module({
  imports: [McpModule.forFeature()],
  providers: [DocumentationResolver],
})
export class DocumentationModule {}
