import { scheduleMostMeetings, scheduleMostTime } from "./ms";

describe("meeting scheduler", () => {
  it("schedules the most possible meetings", () => {
    expect(scheduleMostMeetings(2, [1, 1, 2]).sort()).toEqual([1, 1]);
    expect(scheduleMostMeetings(5, [1, 2, 1, 3, 5]).sort()).toEqual([1, 1, 2]);
    expect(scheduleMostMeetings(5, [1, 6, 7, 7, 6]).sort()).toEqual([1]);
  });
  xit("does not mutate the input", () => {
    const arr = [2, 3, 1];
    scheduleMostMeetings(3, arr);
    expect(arr).toEqual([2, 3, 1]);
  });
  xit("schedules as much time as possible", () => {
    expect(scheduleMostTime(2, [1, 1]).sort()).toEqual([1, 1]);
    expect(scheduleMostTime(3, [1, 1, 2]).sort()).toEqual([1, 2]);
    expect(scheduleMostTime(6, [1, 2, 2, 2]).sort()).toEqual([2, 2, 2]);
    expect(scheduleMostTime(8, [1, 2, 2, 2, 3]).sort()).toEqual([1, 2, 2, 3]);
    expect(
      scheduleMostTime(7, [2, 2, 2, 2, 2, 2, 4, 4, 4, 6, 6, 6, 7, 8, 8]).sort()
    ).toEqual([7]);
  });
});
