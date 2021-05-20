export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Yamane',
  age: 28,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 28,
};

// friend.age++;

type YomitoriSEnyo<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriSEnyoProfile = YomitoriSEnyo<Profile>;
