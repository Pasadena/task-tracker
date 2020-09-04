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

resource "aws_instance" "web" {
  instance_type = "t2.micro"
  ami = "ami-674cbc1e"
  vpc_security_group_ids = [aws_security_group.instance.id]

  tags = {
    Name = "task-tracker-intance"
  }
}