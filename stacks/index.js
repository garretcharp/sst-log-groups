import MyStack from "./MyStack";
import * as cdk from '@aws-cdk/core'
import * as logs from '@aws-cdk/aws-logs'

export default function main(app) {
  app.setDefaultRemovalPolicy(cdk.RemovalPolicy.DESTROY)
  app.setDefaultFunctionProps({
    logRetention: logs.RetentionDays.ONE_WEEK,
    // logRetentionRetryOptions: {
    //   maxRetries: 10
    // }
  })

  new MyStack(app, "my-stack");
}
