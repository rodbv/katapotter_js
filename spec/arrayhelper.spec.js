var Helper = require('../lib/arrayhelper').ArrayHelper;

describe('Given an array', function(){
	it ('can find distinct elements in it', function(){
		 var original = [1, 2, 1, 3, 3, 5, 999];
		 var distinct = new Helper().distinct(original);
		 expect(distinct).toEqual([1, 2, 3, 5, 999]);
	});

	it('can subtract an array from another', function(){
		 var original = [1, 2, 1, 3, 3, 5, 999];
		 var smaller = [1, 2, 3];
		 var diff = new Helper().subtract(original, smaller);
		 expect(diff).toEqual([1, 3, 5, 999]);		
	});
});