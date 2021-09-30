const initialState = {
  selected: [],
  data: [
    [
      "1)Maximize the Beauty - fully channel the beauty with in. Maybe ask what makes this moment beautiful? See if beauty can be increased in every situation. MtB also could be taken as a use of reason and also a disciplining of the senses to focus on beauty (i.e. all the pretty flowers, all the pretty birds). (Update 3-16-21 -This is one of the first 4 points created because they were on the top of my mind when I first started this project. Maximize the Beauty and Full Expression still are some of the concepts I am most influenced by, create an ethos around, consider to be primary to my concept of virtue, and aim to implement as much as possible.)",
      "fun",
    ],
    [
      "2) Full Expression - it takes a lot of effort for one to understand who they are when they are comfortable and how to channel the most real expressions of themselves what holds people back? Shyness, distraction (inability to focus on that which they want express)",
      "deep",
    ],
    [
      "14) Buddhism - a) life is pleasant - most of the time really - gawd don’t be such a hater Buddha B) lets blaze - one of the few religions to be so explicitly anti- weed tho they all seem to be",
      "fun",
    ],
  ],
};

const ideasReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SelectCategory": {
      console.log(action);
      const result = state.data.filter((item) => item[1] == action.payload);
      return {
        ...state,
        selected: result[0],
      };
    }
    /*case "SelectCategory1": {
      const result = state.data.filter((item) => item[0] == action.payload);
      return {
        ...state,
        selected: result,
      };
    }*/
    default:
      return state;
  }
};

export default ideasReducer;
