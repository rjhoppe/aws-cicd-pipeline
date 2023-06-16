#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCicdPipelineStack } from '../lib/aws-cicd-pipeline-stack';

const app = new cdk.App();
new AwsCicdPipelineStack(app, 'AwsCicdPipelineStack', {
  env: {
    account: '149826487076',
    region: 'us-east-1'
  }
});

app.synth();