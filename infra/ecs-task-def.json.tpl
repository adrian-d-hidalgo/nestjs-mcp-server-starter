[
  {
    "name": "${app_name}",
    "image": "${image}",
    "portMappings": [
      {
        "containerPort": ${container_port},
        "protocol": "tcp"
      }
    ],
    "environment": [
      { "name": "API_KEY", "value": "${api_key}" },
      { "name": "MCP_BASE_URL", "value": "${mcp_base_url}" },
      { "name": "DEFAULT_MODEL", "value": "${default_model}" },
      { "name": "DATABASE_URL", "value": "${database_url}" },
      { "name": "LOG_LEVEL", "value": "${log_level}" },
      { "name": "SECRETS_ARN", "value": "${secrets_arn}" }
    ],
    "logConfiguration": {
      "logDriver": "awslogs",
      "options": {
        "awslogs-group": "${log_group}",
        "awslogs-region": "${region}",
        "awslogs-stream-prefix": "ecs"
      }
    }
  }
] 
