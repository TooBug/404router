~function(location){
	var $404router = {};

	$404router._routerList = [];

	$404router.route = function(pattern,callback){
		var path = location.pathname,
			valPattern = new RegExp(pattern.replace(/:\w+(?=$|\/)/g,'(\\w+)').replace('\/','\\\/')),
			keyMatches,valMatches,result={};
		keyMatches = pattern.match(/:\w+(?=$|\/)/g);
		valMatches = path.match(valPattern).slice(1);
		if(keyMatches.length !== valMatches.length){
			this.error(404);
		}else{
			for(var i=keyMatches.length;i--;){
				result[keyMatches[i]] = valMatches[i];
			}
			callback(result);
		}
	};

	$404router.error(errCode){
		switch(errCode){
			case 404:
				console.log('404','Page Not Found');
				break;
		}
	}

}(location);