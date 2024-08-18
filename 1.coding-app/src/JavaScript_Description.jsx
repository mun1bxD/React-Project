export default function JavaScript_Description() {
  return (
    <>
      <div className="items-center justify-center flex flex-col">
        <h1 className="text-3xl mt-10 font-bold text-center w-1/2">
          Explore the Versatility of JavaScript: The Language of the Web
        </h1>
        <p className="text-xl w-2/3 mt-4 text-center text-customFontColor">
          JavaScript is the cornerstone of web development, offering dynamic functionality and interactivity. Its flexibility and vast ecosystem empower developers to build everything from simple websites to complex web applications with ease and efficiency.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="items-center mt-10 mx-4 md:mx-20 md:mr-0 md:ml-4 w-full md:w-3/5 h-auto bg-white rounded-lg bg-gradient-to-r from-blue-200 to-purple-300 p-4 md:p-6">
          <h1 className="rounded-lg text-lg md:text-xl m-2">JavaScript</h1>
          <pre className="m-2 overflow-auto text-xs md:text-sm">
            {`
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}
try {
  let result = divide(4, 2);
  console.log(result);
} catch (error) {
  console.log('An error occurred:', error.message);
}
            `}
          </pre>
        </div>
        <div className="hidden md:block bg-gray-200 text-black rounded-lg h-72 w-96 mt-32 bg-gradient-to-r from-blue-100 to-purple-150">
          <h4 className="m-4">Output</h4>
          <pre className="md:mt-8 md:ml-4">
            {`Division result is: 2`}
          </pre>
        </div>
      </div>
    </>
  );
}
