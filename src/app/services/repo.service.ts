export class RepoService {
  public apiHost: string;
  
  /** @ngInject */
  constructor(private $log: angular.ILogService, 
              private $http: angular.IHttpService,
              public ENV: ENV) {
    this.apiHost = ENV.baseUrl;
  }
  
  errorHandler(error: any):any {
    this.$log.error('XHR Failed for getRepo.\n', error.data);
  }
  
  getRepo(name: string): angular.IPromise<any[]> {
    return this.$http.get(this.apiHost + '/repos/crabcanon/' + name)
      .then((response: any): any => {
        return response.data;
      })
      .catch(this.errorHandler);
  }
}