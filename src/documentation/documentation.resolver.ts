import {
  CallToolResult,
  GetPromptResult,
  ReadResourceResult,
} from '@modelcontextprotocol/sdk/types.js';
import { Prompt, Resolver, Resource, Tool } from '@nestjs-mcp/server';
import { z } from 'zod';

@Resolver('documentation')
export class DocumentationResolver {
  @Resource({
    name: 'get_mcp_documentation',
    uri: 'doc://mcp',
  })
  readMcpDocumentation(uri: URL): ReadResourceResult {
    const documentation = {
      specification: 'https://modelcontextprotocol.io/specification',
      sdks: {
        python: 'https://github.com/modelcontextprotocol/python-sdk',
        typescript: 'https://github.com/modelcontextprotocol/typescript-sdk',
        java: 'https://github.com/modelcontextprotocol/java-sdk',
        kotlin: 'https://github.com/modelcontextprotocol/kotlin-sdk',
        csharp: 'https://github.com/modelcontextprotocol/csharp-sdk',
        swift: 'https://github.com/modelcontextprotocol/swift-sdk',
      },
    };

    return {
      contents: [
        {
          uri: uri.href,
          text: JSON.stringify(documentation),
        },
      ],
    };
  }

  @Prompt({
    name: 'get_mcp_documentation_prompt',
  })
  getDocumentationPrompt(): GetPromptResult {
    const prompt = `
      You are a helpful assistant that can answer questions about the MCP protocol.
      You can answer questions about the MCP protocol, the MCP specification, the MCP SDKs, and the MCP server.
      MCP (Model Context Protocol) is a protocol for exchanging context between models.
      Read get_mcp_documentation to get the official MCP documentation.
    `;

    return {
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: prompt,
          },
        },
      ],
    };
  }

  @Tool({
    name: 'get_url_content',
    description: 'Retrieve a URL content',
    paramSchema: {
      url: z.string().url(),
    },
  })
  async getUrlContentTool(params: { url: string }): Promise<CallToolResult> {
    const { url } = params;

    try {
      const content = await fetch(url).then(res => res.text());

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(content),
          },
        ],
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);

      return {
        isError: true,
        content: [
          {
            type: 'text',
            text: `Error fetching content from ${url}: ${errorMessage}`,
          },
        ],
      };
    }
  }
}
