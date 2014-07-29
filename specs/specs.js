describe('LEAST coinCombinations', function(){
 	it('returns proper qty of pennies', function(){
    coinCombinations(1)[0].should.equal("0 quarters, 0 dimes, 0 nickels, and 1 pennies");
  });

	it('returns proper qty of nickels', function(){
    coinCombinations(5)[0].should.equal("0 quarters, 0 dimes, 1 nickels, and 0 pennies");
  });

  it('returns proper qty of dimes', function(){
    coinCombinations(10)[0].should.equal("0 quarters, 1 dimes, 0 nickels, and 0 pennies");
  });

	it('returns proper qty of quarters', function(){
    coinCombinations(25)[0].should.equal("1 quarters, 0 dimes, 0 nickels, and 0 pennies");
  });

  it('returns proper change', function(){
    coinCombinations(99)[0].should.equal("3 quarters, 2 dimes, 0 nickels, and 4 pennies");
  });
});

describe('RANDOM coinCombinations', function(){
  it('returns proper qty of pennies', function(){
    coinCombinations(1)[1].should.equal("0 quarters, 0 dimes, 0 nickels, and 1 pennies");
  });

  it('returns proper RANDOM qty of change equal to input', function(){
    coinCombinations(99)[1].should.not.equal("3 quarters, 2 dimes, 0 nickels, and 4 pennies");
  });
});
