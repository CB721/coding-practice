using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            string name;
            int age;
            Console.WriteLine("Hello!");
            Console.WriteLine("Please enter your name");
            name = Console.ReadLine();
            Console.WriteLine("Please enter your age");
            age = Convert.ToInt32(Console.ReadLine());
            if (age > 18)
            {
                Console.WriteLine(name + ", you are free to enter");
            } else
            {
                Console.WriteLine("Sorry, " + name + ". You are not allowed in");
            }
        }
    }
}
