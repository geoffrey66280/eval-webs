const students = [
    'maceo.basse@ynov.com',
    'jules.bloux@ynov.com',
    'ilan.chekroun@ynov.com',
    'mattis.crouzet@ynov.com',
    'clement.deguelle@ynov.com',
    'selmene.farhi@ynov.com',
    'hugo.flinois@ynov.com',
    'thomas.fourties@ynov.com',
    'adam.haouzi@ynov.com',
    'romain.huc@ynov.com',
    'renaud.husson@ynov.com',
    'arthur.lecompte@ynov.com',
    'florian.lejosne@ynov.com',
    'rachelle.libos@ynov.com',
    'brice.matias@ynov.com',
    'joris.pader@ynov.com',
    'pierre.tubert@ynov.com',
    'lucas.saintsupery@ynov.com',
    'geoffrey.servant@ynov.com',
    'cyprien.siaud@ynov.com',
    'lakhdar.tifour@ynov.com',
    'thomas.tiquet@ynov.com',
]
const groups = [];
// randomize the students per group of 2
const randomize = (students) => {
    const randomizedStudents = students.sort((a,b) => {
        return Math.random() - 0.5
    });
    const groups = [];
    for (let i = 0; i < randomizedStudents.length; i += 2) {
        groups.push(randomizedStudents.slice(i, i + 2));
    }
    return groups;
}

const randomizedStudents = randomize(students)
console.log(randomizedStudents);