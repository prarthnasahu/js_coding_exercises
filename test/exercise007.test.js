const {
    sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
  } = require("../challenges/exercise007");


  describe("sumDigits", () => {
    test("This function takes a number and returns sum of the digit given", () => {
      expect(sumDigits(123).toBe(6));
    });
});


describe("createRange", () => {
    test("This function creates a range of numbers as an array.", () => {
      expect(createRange(3, 11, 2)).toBe([3, 5, 7, 9, 11]);
    });
});


describe("getScreentimeAlertList", () => {
    test("The function should return an array of usernames of users who have used more than 100 minutes", () => {
      let users = [
         {
           username: "beth_1234",
           name: "Beth Smith",
           screenTime: [
                         { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                         { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                         { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                         { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                        ]
           },
           {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                         { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                         { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                         { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                        ]
           },
         ]
       expect(getScreentimeAlertList(users, "2019-05-04")).toBe(["beth_1234"]);
    
    });
});


describe("hexToRGB", () => {
    test("This function should transform the hex code into an RGB code", () => {
      expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    });
});


describe("findWinner", () => {
    test("return X or ) or null", () => {
      expect(findWinner([
          ["X", "0", null],
          ["X", null, "0"],
          ["X", null, "0"]
         ])).toBe("X");
    
    });
});