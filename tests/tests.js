QUnit.test( "LearnToCount", function( assert ) {
  assert.equal( typeof(LearnToCount), 'object','app is an object')

})
QUnit.test('Current Number', function(assert){
  assert.equal( typeof(LearnToCount.currentNumber), 'string','Has a property called currentNumber which is a string')

})
QUnit.test('Pick Random', function(assert){
  assert.equal( typeof(LearnToCount.pickRandom), 'function','pickRandom is a function')

})
QUnit.test('Make Number', function(assert){
  assert.equal( typeof(LearnToCount.makeNumber), 'function','makeNumber is a function')

})
QUnit.test('Set Text', function(assert){
  assert.equal( typeof(LearnToCount.setText), 'function','setText is a function')

})
QUnit.test('Add Class By Id', function(assert){
  assert.equal( typeof(LearnToCount.addClassById), 'function','addClassById is a function')

})
QUnit.test('Get Length', function(assert){
  assert.equal( typeof(LearnToCount.getLength), 'function','getLength is a function')

})
QUnit.test('Next Number', function(assert){
  assert.equal( typeof(LearnToCount.nextNumber), 'function','next is a function')

})
QUnit.test('Check Number', function(assert){
  assert.equal( typeof(LearnToCount.checkNumber), 'function','check is a function')

})
