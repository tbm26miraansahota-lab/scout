export interface PlayerMetrics {
  speed: number;
  stamina: number;
  passingAccuracy: number;
  shooting: number;
  dribbling: number;
  defending: number;
}

export interface MatchRecord {
  date: string;
  opponent: string;
  tournament: string;
  goals: number;
  assists: number;
  minutesPlayed: number;
  rating: number;
}

export interface Player {
  id: string;
  name: string;
  age: number;
  position: string;
  school: string;
  city: string;
  state: string;
  photo: string;
  metrics: PlayerMetrics;
  overallRating: number;
  verified: boolean;
  lastUpdated: string;
  matches: MatchRecord[];
  highlightTags: string[];
  height: number;
  weight: number;
  preferredFoot: 'Left' | 'Right' | 'Both';
  jerseyNumber: number;
}

const cities = [
  { city: 'Delhi', state: 'Delhi' },
  { city: 'Mumbai', state: 'Maharashtra' },
  { city: 'Kolkata', state: 'West Bengal' },
  { city: 'Bangalore', state: 'Karnataka' },
  { city: 'Goa', state: 'Goa' },
  { city: 'Pune', state: 'Maharashtra' },
  { city: 'Shillong', state: 'Meghalaya' },
  { city: 'Imphal', state: 'Manipur' },
  { city: 'Chennai', state: 'Tamil Nadu' },
  { city: 'Jamshedpur', state: 'Jharkhand' },
];

const schools = [
  'Modern School, Delhi',
  'St. Xavier\'s, Kolkata',
  'Don Bosco, Goa',
  'Ryan International, Mumbai',
  'Bishop Cotton, Bangalore',
  'Loyola School, Chennai',
  'SAI Academy, Shillong',
  'TFA Imphal',
  'Reliance Foundation School, Pune',
  'TATA Football Academy, Jamshedpur',
];

const tournaments = ['Subroto Cup', 'SGFI Nationals', 'U-17 State League', 'District Championship', 'Inter-School Cup'];

function generateMatches(count: number): MatchRecord[] {
  const opponents = ['St. Mary\'s', 'DPS RK Puram', 'Army School', 'Cathedral School', 'Modern Academy', 'Ryan FC', 'Don Bosco XI', 'St. Xavier\'s XI'];
  return Array.from({ length: count }, (_, i) => ({
    date: `2024-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
    opponent: opponents[i % opponents.length],
    tournament: tournaments[Math.floor(Math.random() * tournaments.length)],
    goals: Math.floor(Math.random() * 3),
    assists: Math.floor(Math.random() * 3),
    minutesPlayed: 60 + Math.floor(Math.random() * 30),
    rating: +(6.0 + Math.random() * 3.5).toFixed(1),
  }));
}

export const players: Player[] = [
  {
    id: 'arjun-singh',
    name: 'Arjun Singh',
    age: 16,
    position: 'Striker',
    school: schools[0],
    ...cities[0],
    photo: '',
    metrics: { speed: 88, stamina: 82, passingAccuracy: 75, shooting: 91, dribbling: 85, defending: 40 },
    overallRating: 86,
    verified: true,
    lastUpdated: '2024-12-15',
    matches: generateMatches(8),
    highlightTags: ['Hat-trick vs St. Mary\'s', 'Tournament top scorer', 'Solo run goal'],
    height: 175,
    weight: 65,
    preferredFoot: 'Right',
    jerseyNumber: 9,
  },
  {
    id: 'ravi-kumar',
    name: 'Ravi Kumar',
    age: 15,
    position: 'Midfielder',
    school: schools[1],
    ...cities[2],
    photo: '',
    metrics: { speed: 78, stamina: 90, passingAccuracy: 88, shooting: 70, dribbling: 82, defending: 65 },
    overallRating: 82,
    verified: true,
    lastUpdated: '2024-12-10',
    matches: generateMatches(6),
    highlightTags: ['Match-winning assist', 'Captain\'s performance', 'Man of the Match'],
    height: 168,
    weight: 58,
    preferredFoot: 'Both',
    jerseyNumber: 10,
  },
  {
    id: 'sunil-deka',
    name: 'Sunil Deka',
    age: 17,
    position: 'Defender',
    school: schools[6],
    ...cities[6],
    photo: '',
    metrics: { speed: 72, stamina: 86, passingAccuracy: 74, shooting: 45, dribbling: 60, defending: 92 },
    overallRating: 78,
    verified: true,
    lastUpdated: '2024-11-28',
    matches: generateMatches(7),
    highlightTags: ['Clean sheet performance', 'Key defensive clearance', 'Captain\'s performance'],
    height: 182,
    weight: 72,
    preferredFoot: 'Left',
    jerseyNumber: 4,
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    age: 14,
    position: 'Forward',
    school: schools[5],
    ...cities[8],
    photo: '',
    metrics: { speed: 85, stamina: 78, passingAccuracy: 80, shooting: 82, dribbling: 88, defending: 35 },
    overallRating: 81,
    verified: true,
    lastUpdated: '2024-12-20',
    matches: generateMatches(5),
    highlightTags: ['Solo run goal', 'Man of the Match', 'Tournament top scorer'],
    height: 162,
    weight: 52,
    preferredFoot: 'Right',
    jerseyNumber: 11,
  },
  {
    id: 'thanglien-zou',
    name: 'Thanglien Zou',
    age: 16,
    position: 'Winger',
    school: schools[7],
    ...cities[7],
    photo: '',
    metrics: { speed: 92, stamina: 80, passingAccuracy: 72, shooting: 78, dribbling: 90, defending: 38 },
    overallRating: 84,
    verified: true,
    lastUpdated: '2024-12-18',
    matches: generateMatches(6),
    highlightTags: ['Solo run goal', 'Long-range free kick', 'Man of the Match'],
    height: 170,
    weight: 60,
    preferredFoot: 'Right',
    jerseyNumber: 7,
  },
  {
    id: 'amir-khan',
    name: 'Amir Khan',
    age: 15,
    position: 'Goalkeeper',
    school: schools[3],
    ...cities[1],
    photo: '',
    metrics: { speed: 55, stamina: 75, passingAccuracy: 68, shooting: 30, dribbling: 40, defending: 88 },
    overallRating: 76,
    verified: true,
    lastUpdated: '2024-12-05',
    matches: generateMatches(7),
    highlightTags: ['Penalty save', 'Clean sheet performance', 'Man of the Match'],
    height: 185,
    weight: 74,
    preferredFoot: 'Right',
    jerseyNumber: 1,
  },
  {
    id: 'vikram-das',
    name: 'Vikram Das',
    age: 17,
    position: 'Midfielder',
    school: schools[4],
    ...cities[3],
    photo: '',
    metrics: { speed: 80, stamina: 88, passingAccuracy: 85, shooting: 76, dribbling: 79, defending: 70 },
    overallRating: 83,
    verified: true,
    lastUpdated: '2024-12-22',
    matches: generateMatches(8),
    highlightTags: ['Match-winning assist', 'Long-range free kick', 'Captain\'s performance'],
    height: 176,
    weight: 67,
    preferredFoot: 'Right',
    jerseyNumber: 8,
  },
  {
    id: 'sanjay-patel',
    name: 'Sanjay Patel',
    age: 16,
    position: 'Striker',
    school: schools[8],
    ...cities[5],
    photo: '',
    metrics: { speed: 84, stamina: 76, passingAccuracy: 70, shooting: 88, dribbling: 83, defending: 42 },
    overallRating: 80,
    verified: false,
    lastUpdated: '2024-11-30',
    matches: generateMatches(5),
    highlightTags: ['Hat-trick vs St. Mary\'s', 'Solo run goal'],
    height: 178,
    weight: 68,
    preferredFoot: 'Left',
    jerseyNumber: 9,
  },
  {
    id: 'deepak-thapa',
    name: 'Deepak Thapa',
    age: 14,
    position: 'Defender',
    school: schools[9],
    ...cities[9],
    photo: '',
    metrics: { speed: 70, stamina: 82, passingAccuracy: 72, shooting: 50, dribbling: 55, defending: 85 },
    overallRating: 74,
    verified: true,
    lastUpdated: '2024-12-12',
    matches: generateMatches(6),
    highlightTags: ['Clean sheet performance', 'Key defensive clearance'],
    height: 174,
    weight: 63,
    preferredFoot: 'Right',
    jerseyNumber: 5,
  },
  {
    id: 'krishna-fernandes',
    name: 'Krishna Fernandes',
    age: 15,
    position: 'Winger',
    school: schools[2],
    ...cities[4],
    photo: '',
    metrics: { speed: 90, stamina: 82, passingAccuracy: 76, shooting: 80, dribbling: 87, defending: 35 },
    overallRating: 83,
    verified: true,
    lastUpdated: '2024-12-19',
    matches: generateMatches(7),
    highlightTags: ['Solo run goal', 'Match-winning assist', 'Man of the Match'],
    height: 167,
    weight: 57,
    preferredFoot: 'Both',
    jerseyNumber: 11,
  },
  {
    id: 'rohit-sharma',
    name: 'Rohit Sharma',
    age: 16,
    position: 'Forward',
    school: schools[0],
    ...cities[0],
    photo: '',
    metrics: { speed: 82, stamina: 79, passingAccuracy: 78, shooting: 85, dribbling: 80, defending: 45 },
    overallRating: 80,
    verified: true,
    lastUpdated: '2024-12-14',
    matches: generateMatches(6),
    highlightTags: ['Tournament top scorer', 'Man of the Match'],
    height: 173,
    weight: 64,
    preferredFoot: 'Right',
    jerseyNumber: 10,
  },
  {
    id: 'meena-lakshmi',
    name: 'Meena Lakshmi',
    age: 15,
    position: 'Midfielder',
    school: schools[5],
    ...cities[8],
    photo: '',
    metrics: { speed: 76, stamina: 88, passingAccuracy: 90, shooting: 68, dribbling: 78, defending: 60 },
    overallRating: 79,
    verified: true,
    lastUpdated: '2024-12-17',
    matches: generateMatches(5),
    highlightTags: ['Match-winning assist', 'Captain\'s performance'],
    height: 160,
    weight: 50,
    preferredFoot: 'Right',
    jerseyNumber: 6,
  },
  {
    id: 'bijoy-singha',
    name: 'Bijoy Singha',
    age: 17,
    position: 'Striker',
    school: schools[6],
    ...cities[6],
    photo: '',
    metrics: { speed: 86, stamina: 84, passingAccuracy: 72, shooting: 90, dribbling: 84, defending: 38 },
    overallRating: 85,
    verified: true,
    lastUpdated: '2024-12-21',
    matches: generateMatches(8),
    highlightTags: ['Hat-trick vs St. Mary\'s', 'Solo run goal', 'Tournament top scorer'],
    height: 179,
    weight: 70,
    preferredFoot: 'Right',
    jerseyNumber: 9,
  },
  {
    id: 'nikhil-george',
    name: 'Nikhil George',
    age: 16,
    position: 'Defender',
    school: schools[4],
    ...cities[3],
    photo: '',
    metrics: { speed: 68, stamina: 85, passingAccuracy: 77, shooting: 48, dribbling: 58, defending: 89 },
    overallRating: 77,
    verified: false,
    lastUpdated: '2024-11-25',
    matches: generateMatches(6),
    highlightTags: ['Clean sheet performance', 'Key defensive clearance', 'Captain\'s performance'],
    height: 180,
    weight: 71,
    preferredFoot: 'Right',
    jerseyNumber: 3,
  },
  {
    id: 'ankit-yadav',
    name: 'Ankit Yadav',
    age: 14,
    position: 'Midfielder',
    school: schools[3],
    ...cities[1],
    photo: '',
    metrics: { speed: 78, stamina: 80, passingAccuracy: 82, shooting: 72, dribbling: 85, defending: 55 },
    overallRating: 78,
    verified: true,
    lastUpdated: '2024-12-08',
    matches: generateMatches(5),
    highlightTags: ['Match-winning assist', 'Long-range free kick'],
    height: 165,
    weight: 55,
    preferredFoot: 'Left',
    jerseyNumber: 14,
  },
  {
    id: 'samuel-lalrinnunga',
    name: 'Samuel Lalrinnunga',
    age: 17,
    position: 'Goalkeeper',
    school: schools[7],
    ...cities[7],
    photo: '',
    metrics: { speed: 52, stamina: 78, passingAccuracy: 70, shooting: 25, dribbling: 35, defending: 90 },
    overallRating: 75,
    verified: true,
    lastUpdated: '2024-12-16',
    matches: generateMatches(7),
    highlightTags: ['Penalty save', 'Clean sheet performance'],
    height: 188,
    weight: 78,
    preferredFoot: 'Right',
    jerseyNumber: 1,
  },
];

export function getPlayerById(id: string): Player | undefined {
  return players.find(p => p.id === id);
}

export function getPlayersBySchool(school: string): Player[] {
  return players.filter(p => p.school === school);
}

export const allPositions = [...new Set(players.map(p => p.position))].sort();
export const allCities = [...new Set(players.map(p => p.city))].sort();
export const allStates = [...new Set(players.map(p => p.state))].sort();
export const allSchools = [...new Set(players.map(p => p.school))].sort();
export const ageRange = { min: 13, max: 18 };
