import { Module } from '@nestjs/common';
import { McpModule } from '@nestjs-mcp/server';

@Module({
  imports: [
    McpModule.forRoot({
      // TODO: Replace with your custom MCP server name (must be unique)
      name: 'nestjs-mcp-starter',
      // TODO: Replace with your server version (e.g., '1.0.0')
      version: '1.0.0',
      // TODO: Add instructions that explain to the LLM how to use this server's tools and endpoints
      instructions:
        'This is nestjs mcp server starter to understand the MCP protocol using the NestJS framework',
    }),
  ],
})
export class CoreModule {}
