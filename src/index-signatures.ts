export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Yamane', underTwenty: false };

//How to write index signatues
//{ [index: typeForIndex ]: typeOFValue }

profile.name = 'Yamane';
profile.age = 28;
profile.nationality = 'Japan';
