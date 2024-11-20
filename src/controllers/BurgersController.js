import BaseController from "../utils/BaseController";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router.get('/test', this.getTest)
  }




  async getTest(request, response, next) {
    response.send('Testing Success')
  }



}