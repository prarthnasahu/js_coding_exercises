const {
    sumMultiples,
    isValidDNA,
   getComplementaryDNA,
   isItPrime,
   createMatrix,
   areWeCovered
  } = require("../challenges/exercise006");

      describe("sumMultiples", () => {
        test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
          const arr = [12, 15, 18, 35, 40, 45, 49, 56, 63];
          expect(sumMultiples(arr)).toBe(228);
        });

        describe("isValidDNA", () => {
            test("should return true/false depending on whether it is a valid DNA string", () => {
              expect(sumMultiples("GCTAT")).toBe(true);
            });


        describe("getComplementaryDNA", () => {
            test("This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs.", () => {
              expect(getComplementaryDNA("GCG")).toBe( [ [ "G", "C" ], [ "C", "G" ], [ "G", "C" ] ]);
            });


        describe("isItPrime", () => {
            test("This function should receive a number and return true/false depending on whether it is a prime number or not", () => {
              expect(isItPrime(7)).toBe(true);
            });


        describe("createMatrix", () => {
             test("This function should receive a number and return an array of n arrays, each filled with n items.", () => {
               expect(createMatrix(4, "good")).toBe([
                   ["good", "good", "good"],
                   ["good", "good", "good"],
                   ["good", "good", "good"]
                 ]);
            });


         describe("areWeCovered", () => {
            test("The function should return true/false depending on whether there are enough staff scheduled for the given day", () => {
                let staff =
                [
                   { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                   { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                   { name: "Isla", rota: ["Thursday", "Friday", "Sunday", "Monday"]},
                   { name: "Mia", rota: ["Tuesday", "Wednesday", "Friday","Saturday"]},
                   { name: "Sophia", rota: ["Sunday", "Monday", "Saturday","Wednesday","Saturday"]}
                 ];
                expect(areWeCovered(staff, "Monday")).toBe(true);
               });
        

    });
});
        });
    });
});
      });
