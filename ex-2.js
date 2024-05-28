// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;

hasPromotion = (!(!lastMonthPaidMoreThan4000) && !(!isWeekday) && !hasBoughtProductFromITCategory && !(!hasAttendedDiscountEvent)) || !isPlatinum

console.log(hasPromotion);
