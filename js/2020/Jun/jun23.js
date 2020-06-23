// You and your friends have been battling it out with your Rock 'Em, Sock 'Em robots, but things have gotten a little boring. You've each decided to add some amazing new features to your robot and automate them to battle to the death.

// Each robot will be represented by an object. You will be given two robot objects, and an object of battle tactics and how much damage they produce. Each robot will have a name, hit points, speed, and then a list of battle tacitcs they are to perform in order. Whichever robot has the best speed, will attack first with one battle tactic.

// Rules

// A robot with the most speed attacks first. If they are tied, the first robot passed in attacks first.
// Robots alternate turns attacking. Tactics are used in order.
// A fight is over when a robot has 0 or less health or both robots have run out of tactics.
// A robot who has no tactics left does no more damage, but the other robot may use the rest of his tactics.
// If both robots run out of tactics, whoever has the most health wins. Return the message "{Name} has won the fight."
// If both robots run out of tactics and are tied for health, the fight is a draw. Return "The fight was a draw."

// function fight(robot1, robot2, tactics) {
//     let currPlayer = robot1.speed >= robot2.speed ? 1 : 2;
//     let winner = "";
//     let robot1Health = robot1.health;
//     let robot2Health = robot2.health;
//     let length = robot1.tactics.length > 0 ? robot1.tactics.length : robot2.tactics.length;
//     for (let i = 0; i < length; i++) {
//         if (currPlayer === 1) {
//             if (robot1.tactics && robot1.tactics[i]) {
//                 robot2Health -= tactics[robot1.tactics[i]];
//             }
//             if (robot2Health <= 0) {
//                 winner = robot1.name;
//                 break;
//             } else if(robot2.tactics && robot2.tactics[i]) {
//                 robot1Health -= tactics[robot2.tactics[i]];
//             }
//             if (robot1Health <= 0) {
//                 winner = robot2.name;
//                 break;
//             }
//             currPlayer = 2;
//         } else {
//             if (robot2.tactics && robot2.tactics[i]) {
//                 robot1Health -= tactics[robot2.tactics[i]];
//             }
//             if (robot1Health <= 0) {
//                 winner = robot2.name;
//                 break;
//             } else if(robot1.tactics && robot1.tactics[i]) {
//                 robot2Health -= tactics[robot1.tactics[i]];
//             }
//             if (robot2Health <= 0) {
//                 winner = robot1.name;
//                 break;
//             }
//             currPlayer = 1;
//         }
//     }
//     if (robot1Health > robot2Health) winner = robot1.name;
//     if (robot2Health > robot1Health) winner = robot2.name;
//     return winner ? `${winner} has won the fight.` : "The fight was a draw.";
// }
function fight(robot1, robot2, tactics) {
    // if the first robot's speed is less than the second
    if (robot1.speed < robot2.speed) {
        // switch their values
        [robot1, robot2] = [robot2, robot1];
    }
    // keep iterating until tactics from both robots has been used or a robot has been defeated
    while (robot1.tactics.length || robot2.tactics.length) {
        // since the order of the robots has been switched, we can always start on the first robot

        // if the first robot has any attacks left
        if (robot1.tactics.length) {
            // subtract from the second robots health and remove from first robots' tactics array
            robot2.health -= tactics[robot1.tactics.shift()];
        }

        // if the second robot doesn't have any health left, exit the loop
        if (robot2.health <= 0) break;

        // if the second robot has any attacks left
        if (robot2.tactics.length) {
            // subtract from the first robots health and remove from second robots' tactics array
            robot1.health -= tactics[robot2.tactics.shift()];
        }

        // if the second robot doesn't have any health left, exit the loop
        if (robot1.health <= 0) break;
    }
    let winner = ""
    if (robot1.health > robot2.health) winner = robot1.name;
    if (robot2.health > robot1.health) winner = robot2.name;
    return winner ? `${winner} has won the fight.` : "The fight was a draw.";
}

let robot1 = { "name": "Rocky", "health": 100, "speed": 20, "tactics": ["punch", "punch", "laser", "missile"] };
let robot2 = { "name": "Missile Bob", "health": 100, "speed": 21, "tactics": ["missile", "missile", "missile", "missile"] };
let tactics = { "punch": 20, "laser": 30, "missile": 35 };
console.log(fight(robot1, robot2, tactics)); // "Missile Bob has won the fight."

robot1 = { "name": "Rocky", "health": 200, "speed": 20, "tactics": ["punch", "punch", "laser", "missile"] };
robot2 = { "name": "Missile Bob", "health": 100, "speed": 21, "tactics": ["missile", "missile", "missile", "missile"] };
tactics = { "punch": 20, "laser": 30, "missile": 35 };
console.log(fight(robot1, robot2, tactics)); // "Rocky has won the fight."

robot1 = { "name": "Rocky", "health": 200, "speed": 15, "tactics": [] };
robot2 = { "name": "Missile Bob", "health": 100, "speed": 26, "tactics": ["missile", "missile", "missile", "missile"] };
tactics = { "punch": 20, "laser": 30, "missile": 35 };
console.log(fight(robot1, robot2, tactics)); // "Missile Bob has won the fight."

robot1 = { "name": "Knuckles", "health": 200, "speed": 15, "tactics": ["punch", "punch", "missle", "missle"] };
robot2 = { "name": "Laser Wisp", "health": 100, "speed": 26, "tactics": ["laser", "laser", "laser", "laser"] };
tactics = { "punch": 20, "laser": 25, "missile": 30 };
console.log(fight(robot1, robot2, tactics)); // "The fight was a draw."