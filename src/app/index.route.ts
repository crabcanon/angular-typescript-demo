/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
  $stateProvider
    .state('repos', {
      url: '/repos',
      templateUrl: 'app/repository/repos.html',
      controller: 'ReposController',
      controllerAs: 'repos'
    })
    .state('repo', {
      url: '/repos/:id',
      templateUrl: 'app/repository/repo.html',
      controller: 'RepoController',
      controllerAs: 'repo'
    });

  $urlRouterProvider.otherwise('/repos');
}
