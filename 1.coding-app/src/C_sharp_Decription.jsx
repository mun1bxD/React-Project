export default function C_sharp_Decription(){
    return(
        <>
        <div className="items-center justify-center flex flex-col">
            <h1 className="text-3xl mt-10 font-bold text-center w-1/2">Discover the Power of C#: Robust, Versatile, and Efficient</h1>
            <p className="text-xl w-2/3 mt-4 text-center text-customFontColor">C# combines strong typing and modern syntax to build scalable, efficient applications. Its robust features and extensive libraries empower developers to create high-performance software with ease.</p>
        </div>
        <div className="flex justify-center">
        <div className="items-center mt-10 mx-4 md:mx-20 md:mr-0 md:ml-4 w-full md:w-3/5 h-auto bg-white rounded-lg bg-gradient-to-r from-blue-200 to-purple-300 p-4 md:p-6">
    <h1 className="rounded-lg text-lg md:text-xl m-2">C#</h1>
    <pre className="m-2 text-xs md:text-sm overflow-auto">
      {`
using System;
class Program
{
    static void Main()
    {
        int[] numbers = { 1, 2, 3, 4, 5 };

        var squares = from number in numbers
                    select new { Number = number, Square = number * number };

        foreach (var item in squares)
        {
            Console.WriteLine($"Number: {item.Number}, Square: {item.Square}");
        }
    }
}
      `}
    </pre>
  </div>
        <div className="hidden md:block bg-gray-200 text-black rounded-lg h-72 w-96 mt-32 bg-gradient-to-r from-blue-100 to-purple-150">
            <h4 className="m-4">Output</h4>
        <pre className="md:mt-8 md:ml-4">
        {`Number: 1, Square: 1
    Number: 2, Square: 4
    Number: 3, Square: 9
    Number: 4, Square: 16
    Number: 5, Square: 25`}
        </pre>
            </div>
        </div>
        </>
    );

}