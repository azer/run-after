var after = require("after-time"),
    cp    = require("child_process");

module.exports = runAfter;

function runAfter(cmd, time){
  var name;

  name = cmd.splice(0,1)[0];

  after(time, function(){
    cp.spawn(name, cmd, { stdio: 'inherit' });
  });

}
