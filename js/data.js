const DESCRIPTIONS = [
  'Отпуск на море',
  'Городской пейзаж',
  'Природа весной',
  'Встреча заката',
  'Архитектурные достопримечательности',
  'Вкусный обед',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артём',
  'Мария',
  'Иван',
  'Екатерина',
  'Алексей',
  'Наталья',
  'Дмитрий',
  'Анна',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComments = () => ({
  id: `${getRandomInteger(1, 25)}`,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: `${getRandomArrayElement(MESSAGES)}`,
  name: `${getRandomArrayElement(NAMES)}`,
});

const createPhotos = () => ({
  id: `${getRandomInteger(1, 25)}`,
  photos: `photos/${getRandomInteger(1, 25)}.jpg`,
  likes: `${getRandomInteger(15, 200)}`,
  description: `${getRandomArrayElement(DESCRIPTIONS)}`,
  comment: Array.from({ length: getRandomInteger(0, 30) }, (_, index) => createComments(index + 1)),
});

export {createComments, createPhotos};

