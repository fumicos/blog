export const freelanceAge = (): number => {
  const timeStamp = Date.now() - new Date('2018/8/1').getTime();
  // ミリ秒を年数に変換
  const elapsedYears = Math.floor( timeStamp / ( 86400000 * 365 ));
  return elapsedYears
}