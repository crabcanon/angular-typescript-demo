import { RepoService } from '../services/repo.service';

export class RepoController {
    public item: any;
    
    /* @ngInject */
    constructor (private $log: angular.ILogService,
                 private $state: angular.ui.IStateService, 
                 private $stateParams: angular.ui.IStateParamsService, 
                 private RepoService: RepoService) {
      this.item = {};
      this.getRepository(this.$stateParams.id);
    }
    
    /* @ngInject */
    getRepository(name: any) {
      return this.RepoService.getRepo(name)
        .then((data: any) => {
          this.item = data;
          return this.item;
        })
    }
    
    goBack() {
      return this.$state.go('repos');
    }
}