(function () {
	'use strict';

	angular.module('eliteApp').controller('LeaguesCtrl', ['$state','eliteApi',LeaguesCtrl]);

	function LeaguesCtrl($state, eliteApi) {
		var vm = this;

		var leagues = eliteApi.getLeagues();
		//var leagueData = eliteApi.getLeagueData();
		vm.leagues = leagues;
		//console.log(leagues, leagueData);

		vm.selectLeague = function(leagueId){
			//TODO: select 

		};

	};
})();
