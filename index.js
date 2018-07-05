const x = { val: 2 };

const x1 = x => Object.assign({}, x, { val: x.val + 1 });

const x2 = x => Object.assign({}, x, { val: x.val * 2 });

console.log(x1(x2(x)).val); // 5

const y = { val: 2 };

x2(y);
x1(y);

console.log(x1(x2(y)).val); // 5

const add = a => b => a + b;

const first = add(10);

console.log(first(20));

//Side Effects
let meetup = { name: "JS", isActive: true, members: 49 };

const scheduleMeetup = (date, place) => {
  meetup.date = date;
  meetup.place = place;
  if (meetup.members < 50) meetup.isActive = false;
};
const publishMeetup = () => {
  if (meetup.isActive) {
    meetup.publish = true;
  }
};
scheduleMeetup("today", "Bnagalore");
publishMeetup();
console.log(meetup);
