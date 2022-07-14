// imports
var roleStaticHarvester = require('role.staticHarvester');

// Static vars
var cityCenter = 'Camor';

module.exports.loop = function () {
    // spawn some static harvesters
    var staticHarvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'staticHarvester');
    console.log('Harvesters: ' + staticHarvesters.length);

    if(staticHarvesters.length < 3 && Game.spawns[cityCenter].store.getUsedCapacity(RESOURCE_ENERGY) > 250) {
        var newName = 'staticHarvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns[cityCenter].spawnCreep([WORK,WORK,MOVE], newName, 
            {memory: {role: 'staticHarvester'}});
    }
    // do the thing
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'staticHarvester') {
            roleStaticHarvester.run(creep);
        }
    }
}