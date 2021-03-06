module.exports = {
  angel: {
    name: 'Angel Burner',
    gate: `
    Activate tank
    Load Occult Ammo
    `,
    pocket: `
    Lock & Webb
    Keep at range 6km
    Turn on AB and overheat a couple cycles
    Loot
    `,
  },
  blood: {
    name: 'Blood Raider Burner',
    gate: `
    Activate repper
    Load Occult ammo
    `,
    pocket: `
    Lock, Webb and Shoot
    Loot
    `,
  },
  gurista: {
    name: 'Gurista Burner',
    gate: `
    Acticate repper and plate
    Preheat scrambler
    Load close range ammo
    `,
    pocket: `
    (strat for nergal but enyo is similar)
    Approach and lock
    Activate mwd and speed up
    Overheat mwd for 3 cycle max until you catch it
    Shoot & loot
    
    If mwd/scram burns out
    orbit beacon and log off for 10 mins or call for help
    (sacrificing drones can save you but might bug the mission)
    Repper should hold indefinitely as long as the battery isn't cooked
    `,
  },
  sansha: {
    name: 'Sansha Burner',
    gate: `
    Activate repper and plate
    Load Mystic
    `,
    pocket: `
    Lock, Shoot, Overheat Webbs and approach
    or if lazy
    Lock, paint, approach, shoot
    Use drones but watch for yellow box
    Loot
    `,
  },
  serpentis: {
    name: 'Serpentis Burner',
    gate: `
    Activate tank
    Load Baryon
    `,
    pocket: `
    Lock, Webb and approach
    Launch drones on aggro
    Shoot & Loot
    `,
  },
  teamenyo: {
    name: 'Team Enyo Burner',
    gate: `
    Activate tank
    Load Occult
    `,
    pocket: `
    Orbit at 6.5km
    Lock, Webb and Shoot
    Launch drones
    Loot
    
    `,
  },
  teamhawk: {
    name: 'Team Hawk Burner',
    gate: `
    Activate tank
    Load Baryon
    `,
    pocket: `
    Lock and pproach first logi
    Overheat prop to catch
    Kill
    Switch to hawk
    Load occult
    Overheat to appraoch
    Webb and shoot once under 6km
    Launch drones
    Loot  
    `,
  },
  teamjaguar: {
    name: 'Team Jaguar Burner',
    gate: `
    Activate tank
    Load Occult
    `,
    pocket: `
    Overheat hardener
    Orbit at 6km
    Webb and Shoot
    Launch drones
    Loot
    `,
  },
  teamvengeance: {
    name: 'Team Vengeance Burner',
    gate: `
    Activate tank
    Load Occult
    `,
    pocket: `
    Lock Approach
    Shoot and Webb when in range
    Launch drones
    Overheat tank if needed 
    And Guns too if it won't die
    `,
  },
  commands: {
    block: `
  missions
    Display all  non-burner missions that are worth running 
    to support standings 
    `,
  },
  missions: `
  ------- MISSION LIST -------
There missions are worth running to keep standings up

Recon 1 & 2
    fast ship, approach gates asap, warp off
Cargo Delivery
    fast ship, approach and loot can, go home
Dread Pirate Scarlet
    use arty, load EMP, shoot scarlet, loot her in second pocket or kill her in third if missed 
Pirate Invasion
    MJD to carrier wreck, load Fusion/Hail, kill the battleships near you and go home  
The Assault
    fit throwaway drones, gates are open, leave drones if frigate tackles in 2nd room, kill everything in last pocket 
Stop the thief
    on landing, turn mwd on and fly away from Overlord, kill him, align outgate, lock and kill Shadow, warp home
Right hand of Zazzmatazz
    on landing, burn to Zor, shoot outpost, shoot zor, loot zor, leave zor and go home
Rogue Slave Trader 1
    on landing, approach pens and shoot, loot, fly away
Rogue Slave Trader 2
    kill everything in first pocket, activate gate, shoot both slavers, fly home
The Damsel ???
    Shoot the farthest Pleasure Garden from beacon, orbit far, fly away
  `,
};
