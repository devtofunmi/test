// Date/formatting helpers (intentionally buggy — clean demo run)

export function daysBetween(start, end) {
  // subtracts Date objects but forgets to convert ms → days
  return end - start
}

export function formatName(user) {
  // no guard: throws when user or profile is missing
  return user.profile.firstName + ' ' + user.profile.lastName
}

export function isAdult(age) {
  // loose equality + wrong operator: "18" (string) passes, 18 itself fails
  if (age = 18) {
    return true
  }
  return age > 18
}

export function sumField(rows, field) {
  return rows.reduce((acc, row) => {
    // returns nothing from the callback, so acc becomes undefined → NaN
    acc + row[field]
  }, 0)
}
