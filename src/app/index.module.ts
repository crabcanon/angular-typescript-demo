import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { ReposController } from '../app/repository/repos.controller';
import { RepoController } from '../app/repository/repo.controller';
import { ReposService } from '../app/services/repos.service';
import { RepoService } from '../app/services/repo.service';

module tsAngular {
  'use strict';

  angular.module('tsAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'toastr'])
    .constant('ENV', {baseUrl: 'https://api.github.com'})
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('ReposService', ReposService)
    .service('RepoService', RepoService)
    .controller('ReposController', ReposController)
    .controller('RepoController', RepoController);
}
