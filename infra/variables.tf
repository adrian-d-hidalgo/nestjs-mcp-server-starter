variable "aws_region" { default = "us-east-1" }
variable "app_name"   { default = "nestjs-mcp-server" }
variable "container_port" { default = 3000 }
variable "desired_count"  { default = 2 }
variable "cpu"            { default = 512 }
variable "memory"         { default = 1024 }
variable "alb_listener_port" { default = 80 } 
