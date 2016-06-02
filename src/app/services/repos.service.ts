export class ReposService {
  public apiHost: string;
  
  /** @ngInject */
  constructor(private $log: angular.ILogService, 
              private $http: angular.IHttpService,
              public ENV: ENV) {
    this.apiHost = ENV.baseUrl + '/users/crabcanon/repos';
  }
  
  errorHandler(error: any):any {
    this.$log.error('XHR Failed for getRepos.\n', error.data);
  }
  
  getRepos(): angular.IPromise<any[]> {
    return this.$http.get(this.apiHost)
      .then((response: any): any => {
        return response.data;
      })
      .catch(this.errorHandler);
  }
}