const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.map((n) => n * 2))  // [2, 4, 6, 8, 10, 12, 14, 16, 18]
console.log(arr.filter((n) => n % 3 === 0));  // [3, 6, 9]
console.log(arr.find((n) => n > 4));  // 5
console.log(arr.findIndex((n) => n > 4));  // 4
console.log(arr.every((n) => n !== 0));  // true
console.log(arr.some((n) => n >= 10));  // false

/**
 * 
 * map() 対象の配列の要素1つ1つを任意に加工した新しい配列を返す
 * filter() 与えた条件に適合する要素だけを抽出した新しい配列を返す
 * find() 与えた条件に適合した最初の要素を返す。見つからない場合 undefined を返す
 * findIndex() 与えた条件に適合した最初の要素のインデックスを返す見つからなかった場合は-1を返す
 * every() 「与えた条件を全ての要素が満たすか」を真偽値で返す
 * some() 「与えた条件を満たす要素が1つでもあるかを真偽値で返す」
 * 
 */