var hw = require('./hello_world.js')

describe('helloWorld', function(){
  it('returns "Hello World!"', function(){
    expect(hw.helloWorld()).toBe("Hello World!");
  });
});
