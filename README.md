# Rocket Application

Rocket  App

To run the development environment for this frontend you will need to have the following installed:

- VSCODE (optional but recommended) - <https://code.visualstudio.com/download>
- Yarn - <https://yarnpkg.com/lang/en/docs/install/>
- Git - <https://git-scm.com/downloads>
- Node - <https://nodejs.org/en/>

## Installation

- Clone this repo with git clone `https://github.com/ijeh-i/rocket-app.git`

```bash
#install project dependencies
yarn

#run project
yarn start

#run test
yarn test

#build project
yarn build

```

## Deployment on S3

Hosting the website on S3 is done in 3 stages:

1. Building and packaging source files and assets.
2. Storing the `build` folder generated in the [Packaging](#1-building-and-packaging) step in an S3 bucket that has website hosting enabled.
3. Creating a Cloudfront distribution to provide access to the website.

### Deployment Prerequisites

- AWS account credentials
- S3 bucket with website hosting enabled
- [Terraform](https://www.terraform.io/) (tested against v0.11.11)

### 1. Building and Packaging

    REACT_APP_ENVIRONMENT=production yarn build

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed!

### 2. Storing on S3

    S3_BUCKET=<bucket_name> yarn deploy

### 3. Creating a Cloudfront Distribution

This project uses [Terraform](https://www.terraform.io/) to automate the cloudfront distribution creation steps.
The terraform configuration can be found in the [deploy](./deploy) directory.

The terraform configuration assumes the user is deploying the website to a domain name and S3 bucket that have the same name.
For example, the user has a domain named `foobar.com` and a corresponding S3 bucket named `foobar.com`.

This terraform configuration deploys a static website to S3. It also stores the terraform state remotely in an S3 bucket.

Before running terraform commands, your AWS credentials must be configured or made available to terraform through environment variables.
See [terraform authentication docs](https://www.terraform.io/docs/providers/aws/#authentication) for more info.

Initialize Terraform:

```
terraform init
```

Create distribution:

```
terraform apply
```
