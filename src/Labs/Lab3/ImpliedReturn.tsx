const multiply = (a: number, b: number) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);
const ImpliedReturn = () => {
return (
  <div id="wd-implied-return">
    <h4>Implied return</h4>
    fourTimesFive = {fourTimesFive}<br />
    multiply(4, 5) = {multiply(4, 5)} <hr />
  </div>
);};
export default ImpliedReturn;
