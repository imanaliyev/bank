
function splitter(pul, ay) {
  if (ay <= 0) {
    console.log("duzgun deyer daxil edin");
  }
  const ayliqpul = Math.floor(pul / ay)
  qaliq = pul % ay
  result = new Array(ay - 1).fill(ayliqpul)
  lastpayment = ayliqpul + qaliq
  result.push(Math.round(lastpayment))
  return result
}
console.log(splitter(1000, 3));



