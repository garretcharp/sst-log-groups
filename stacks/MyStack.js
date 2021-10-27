import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const api = new sst.Api(this, "Api");

    for (let i = 0; i < 50; i++) {
      api.addRoutes(this, {
          [`GET /lambda/${i}`]: 'src/index.handler'
      })
    }

    this.addOutputs({
      ApiEndpoint: api.url,
    });
  }
}
