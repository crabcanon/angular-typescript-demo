import { ReposService } from '../services/repos.service';

export class ReposController {
    public items: any[];
    
    /* @ngInject */
    constructor (private $log: angular.ILogService,
                 private $state: angular.ui.IStateService, 
                 private ReposService: ReposService) {
      this.items = [];
      this.activate();
    }
    
    /* @ngInject */
    activate() {
      return this.getRepositories()
        .then(() => {
          this.$log.info('Initialize repos view.');
        });
    }
    
    getRepositories() {
      return this.ReposService.getRepos()
        .then((data: any) => {
          this.items = data;
          return this.items;
        })
    }
    
    goRepo(name: any) {
      return this.$state.go('repo', {id: name});
    }
}