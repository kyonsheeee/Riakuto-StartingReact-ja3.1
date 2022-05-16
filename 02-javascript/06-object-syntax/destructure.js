const [n, m] = [1, 4];
console.log(n, m);

const obj = { name: 'Kanae', age: 24 };
const { name, age } = obj;
console.log(name, age);

// const name = obj.name;  だと、分割代入を使えと怒られる