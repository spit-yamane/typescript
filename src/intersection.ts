export {};

type Pitcher1 = {
  throwingSpeeed: number;
};

type Batter1 = {
  batterAverage: number;
};

const DaimajinSsasaki: Pitcher1 = {
  throwingSpeeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  batterAverage: 0.367,
};

// type TwoWayPlayer = {
//   throwingSpeeed: number;
//   batterAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShohei: TwoWayPlayer = {
  throwingSpeeed: 165,
  batterAverage: 0.286,
};
