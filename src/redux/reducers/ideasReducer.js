const initialState = {
  selected: [],
  data: [
    [
      "Maximize the Beauty - fully channel the beauty with in. Maybe ask what makes this moment beautiful? See if beauty can be increased in every situation. MtB also could be taken as a use of reason and also a disciplining of the senses to focus on beauty (i.e. all the pretty flowers, all the pretty birds). (Update 3-16-21 -This is one of the first 4 points created because they were on the top of my mind when I first started this project. Maximize the Beauty and Full Expression still are some of the concepts I am most influenced by, create an ethos around, consider to be primary to my concept of virtue, and aim to implement as much as possible.)",
      "fun",
    ],
    [
      "Full Expression - it takes a lot of effort for one to understand who they are when they are comfortable and how to channel the most real expressions of themselves what holds people back? Shyness, distraction (inability to focus on that which they want express",
      "deep",
    ],
  ],
};

const ideasReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SelectCategory": {
      const result = state.data.filter((item) => item[1] == action.payload);
      return {
        ...state,
        selected: result,
      };
    }
    case "SelectCategory1": {
      const result = state.data.filter((item) => item[0] == action.payload);
      return {
        ...state,
        selected: result,
      };
    }
    default:
      return state;
  }
};

export default ideasReducer;
