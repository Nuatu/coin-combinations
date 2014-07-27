describe('LEAST coinCombinations', function(){

 	it('takes the number 1 and returns the proper change', function(){
    coinCombinations(1)[0].should.equal("0 quarters, 0 dimes, 0 nickels, and 1 pennies");
  });

	it('takes the number 5 and returns the proper change', function(){
    coinCombinations(5)[0].should.equal("0 quarters, 0 dimes, 1 nickels, and 0 pennies");
  });

  it('takes the number 10 and returns the proper change', function(){
    coinCombinations(10)[0].should.equal("0 quarters, 1 dimes, 0 nickels, and 0 pennies");
  });

	it('takes the number 25 and returns the proper change', function(){
    coinCombinations(25)[0].should.equal("1 quarters, 0 dimes, 0 nickels, and 0 pennies");
  });

  it('takes the number 99 and returns the proper change', function(){
    coinCombinations(99)[0].should.equal("3 quarters, 2 dimes, 0 nickels, and 4 pennies");
  });

});

describe('RANDOM coinCombinations', function(){

  it('takes the number 1 and returns the proper change', function(){
    coinCombinations(1)[1].should.equal("0 quarters, 0 dimes, 0 nickels, and 1 pennies");
  });

  it('takes the number 5 and returns the proper change', function(){
    coinCombinations(5)[1].should.not.equal("0 quarters, 0 dimes, 1 nickels, and 0 pennies");
  });

  it('takes the number 10 and returns the proper change', function(){
    coinCombinations(10)[1].should.not.equal("0 quarters, 1 dimes, 0 nickels, and 0 pennies");
  });

  it('takes the number 25 and returns the proper change', function(){
    coinCombinations(25)[1].should.not.equal("1 quarters, 0 dimes, 0 nickels, and 0 pennies");
  });

  it('takes the number 99 and returns the proper change', function(){
    coinCombinations(99)[1].should.not.equal("3 quarters, 2 dimes, 0 nickels, and 4 pennies");
  });

});
