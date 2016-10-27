app.controller('ShakePageController', ['$scope',
function($scope) {


	// ------------------------------------------
	// Private
	// ------------------------------------------

	var SHAKE_LIMIT = 5;
	var SHAKE_RATE  = 100/SHAKE_LIMIT;


	/**
	 * 初期化処理
	 */
	var _init = function() {

		// イベント初期化
		_initEvents();
	};


	/**
	 * イベント初期化処理
	 */
	var _initEvents = function() {
	    document.addEventListener('deviceready', function(){
			$('#myevent').gShake(function() { 
				doShake(function(){

					// 振動
					navigator.notification.vibrate(4000);
					vibe();
				});
		    });
	    },false);
	};
	
	function doShake(callback){
		$scope.shakeCount++;
		$scope.$apply();
		if(SHAKE_LIMIT == $scope.shakeCount) {
			callback();
		}
	};


	// ------------------------------------------
	// Public
	// ------------------------------------------

	$scope.shakeLimit = SHAKE_LIMIT;	// シェイク回数上限
	$scope.shakeCount = 0;				// シェイク回数
	$scope.shakeRate  = SHAKE_RATE;

	// 初期化処理
	_init();
	
	$scope.restart = function() {
		$scope.shakeCount = 0;
	};

	var vibe = function() {
		// 振動アニメーション
		$('#myevent')
			.animate({'marginLeft': '20px'}, 20)
			.animate({'marginLeft':'-16px'}, 20)
			.animate({'marginLeft': '12px'}, 20)
			.animate({'marginLeft': '-8px'}, 20)
			.animate({'marginLeft':  '4px'}, 20)
			.animate({'marginLeft': '20px'}, 20)
			.animate({'marginLeft':'-16px'}, 20)
			.animate({'marginLeft': '12px'}, 20)
			.animate({'marginLeft': '-8px'}, 20)
			.animate({'marginLeft':  '4px'}, 20)
			.animate({'marginLeft':  '0px'}, 20)
			.animate({'marginLeft': '20px'}, 20)
			.animate({'marginLeft':'-16px'}, 20)
			.animate({'marginLeft': '12px'}, 20)
			.animate({'marginLeft': '-8px'}, 20)
			.animate({'marginLeft':  '4px'}, 20)
			.animate({'marginLeft': '20px'}, 20)
			.animate({'marginLeft':'-16px'}, 20)
			.animate({'marginLeft': '12px'}, 20)
			.animate({'marginLeft': '-8px'}, 20)
			.animate({'marginLeft':  '4px'}, 20)
			.animate({'marginLeft':  '0px'}, 20)
			;
	};

}]);
