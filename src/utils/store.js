// cards contain an array of objects

const cards = [
  {
    id: 'card-1',
    title: 'Learning how to cook',
  },
  {
    id: 'card-2',
    title: 'Making sandwich',
  },
  {
    id: 'card-3',
    title: 'Taking the trash out',
  },
];
  // lists container
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'Todoooo',
        cards,
      },
      },
    listIds: ['list-1'],
  };
  
  export default data;