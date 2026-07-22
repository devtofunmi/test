// Date/formatting helpers (intentionally buggy — clean demo run)

export function daysBetween(start, end) {
  // subtracts Date objects but forgets to convert ms → days
  return (end - start) / (1000 * 60 * 60 * 24);
}

export function formatName(user) {
  // no guard: throws when user or profile is missing
  if (!user || !user.profile) {
    return '';
  }
  return user.profile.firstName + ' ' + user.profile.lastName;
}

export function isAdult(age) {
  // loose equality + wrong operator: "18" (string) passes, 18 itself fails
  return age >= 18;
}

export function sumField(rows, field) {
  return rows.reduce((acc, row) => {
    // returns nothing from the callback, so acc becomes undefined → NaN
    return acc + row[field];
  }, 0);
}