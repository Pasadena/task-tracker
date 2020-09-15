variable "aws_access_key" {}
variable "aws_secret_key" {}
variable "aws_region" {
  default="eu-west-1"
}

terraform {
  required_version = ">= 0.12"
  backend "remote" {
    organization = "spokos"

   workspaces {
     name = "task-tracker"
   }
 }
}

provider "aws" {
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  region = var.aws_region
}

resource "aws_security_group" "instance" {
  name = "task-tracker-instance-sg"
  ingress {
    from_port = 8080
    to_port = 8080
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_s3_bucket" "task-tracker-bucket" {
  bucket = "skoskinen-task-tracker"
  acl = "public-read"
  versioning {
    enabled = true
  }
  tags = {
    Name = "task-tracker"
  }
}

resource "aws_instance" "web" {
  instance_type = "t2.micro"
  ami = "ami-674cbc1e"
  vpc_security_group_ids = [aws_security_group.instance.id]

  tags = {
    Name = "task-tracker-intance"
  }
}