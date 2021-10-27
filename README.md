# sst-log-groups

Repo to reproduce the conflicting operation error from [https://github.com/serverless-stack/serverless-stack/issues/953](https://github.com/serverless-stack/serverless-stack/issues/953)

Whenever you attempt to run `sst start` or `sst deploy` you will get an error stating `Error: Received response status [FAILED] from custom resource. Message returned: A conflicting operation is currently in progress against this resource. Please try again. (RequestId: 2b2cb69e-bea4-4d34-b276-e325f6510f2f)`
