const { db } = require('../server/db/');
const Student = require('../server/db/student');
const Campus = require('../server/db/campus');

const rp = require('request-promise');

// remote data sites
const remoteNames = Promise.all([
  rp('http://deron.meranda.us/data/popular-female-first.txt'),
  rp('http://deron.meranda.us/data/popular-male-first.txt'),
  rp('http://deron.meranda.us/data/popular-last.txt'),
]);

// Hard coded data
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const campuses = [
  {
    name: 'Chicago',
    address: '123 Superior Ave.\nChicago, Illinois 60601',
    description: `Chicago is great.  ` + lorem,
  },
  {
    name: 'New York',
    address: '456 Avenue of the Americas\nNew York, New York 20031',
    description: `New York is OK to visit.  ` + lorem,
  },
  {
    name: 'Austin',
    address: '789 Main Street\nAustin, Texas 73301',
    description: `Never been to Austin.  ` + lorem,
  },
  {
    name: 'San Fransisco',
    address: '101112 Valley Road\nMountain View, California 94039',
    description:
      `San Fransisco used to be sweet before it got expensive.  ` + lorem,
  },
  {
    name: 'Remote',
    address: `https:\\\\remote.campus.io`,
    description:
      `Remote learning: Because real life is totally like this.  ` + lorem,
  },
];

// Data Generators
const femaleUrls = () =>
  `https://randomuser.me/api/portraits/women/${Math.round(
    Math.random() * 99
  )}.jpg`;

const maleUrls = () =>
  `https://randomuser.me/api/portraits/men/${Math.round(
    Math.random() * 99
  )}.jpg`;

const gpaGen = () => +(Math.random() + 3).toFixed(2);

const idGen = () => Math.round(Math.random() * (campuses.length - 1)) + 1;

const nameGen = nameArr =>
  nameArr[Math.round(Math.random() * (nameArr.length - 1)) + 1];

const createStudents = (males, females, surs) =>
  new Array(500).fill({}).map(() => {
    const male = Math.random() > 0.5;
    const [first, last] = [nameGen(male ? males : females), nameGen(surs)];
    return {
      firstName: first,
      lastName: last,
      email: `${first}.${last}@fakemail.net`,
      imageUrl: male ? maleUrls() : femaleUrls(),
      gpa: gpaGen(),
      campusId: idGen(),
    };
  });

const formatNames = names =>
  names.split('\n').map(name => name[0] + name.slice(1).toLowerCase());

const seed = students =>
  Promise.all(campuses.map(campus => Campus.create(campus))).then(() =>
    Promise.all(students.map(student => Student.create(student))));

const main = async () => {
  let femaleNames, maleNames, lastNames;

  try {
    console.log('Requesting remote data for seedfile...');
    [femaleNames, maleNames, lastNames] = (await remoteNames).map(formatNames);
  } catch (err) {
    console.error('Error while requesting remote resources, try again later.');
    console.error(err.stack);
  }
  console.log('Got remote data!');

  console.log('Generating random students from remote data...');
  const students = createStudents(femaleNames, maleNames, lastNames);
  console.log('Random students generated!');

  console.log('Syncing db...');

  db
    .sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed(students);
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
