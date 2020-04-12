using System;

namespace MadLib
{
    class Program
    {
        static void Main(string[] args)
        {
            // Let the user know that the program is starting:
            Console.WriteLine("Welcome to MadLibs!");

            // Give the Mad Lib a title:
            string title = "Mad Adventure...";

            Console.WriteLine(title);
            // Define user input and variables:
            Console.Write("Enter a name: ");
            string name = Console.ReadLine();
            string adj1 = "";
            string adj2 = "";
            string adj3 = "";
            for (int i = 0; i < 3; i++)
            {
                Console.Write("Enter an adjective: ");
                string adjInput = Console.ReadLine();
                switch (i)
                {
                    case 0:
                        adj1 = adjInput;
                        break;
                    case 1:
                        adj2 = adjInput;
                        break;
                    case 2:
                        adj3 = adjInput;
                        break;
                    default:
                        break;
                }
            }
            Console.Write("Enter a verb: ");
            string verb = Console.ReadLine();
            Console.Write("Enter a noun: ");
            string noun1 = Console.ReadLine();
            Console.Write("Enter a noun: ");
            string noun2 = Console.ReadLine();

            string animal = "";
            string food = "";
            string fruit = "";
            string superhero = "";
            string country = "";
            string dessert = "";
            string year = "";
            string[] itemList =
            {
        "animal", "food", "fruit", "superhero", "country", "dessert", "year"
       };
            for (int j = 0; j < itemList.Length; j++)
            {
                Console.Write($"Enter a {itemList[j]}: ");
                string itemInput = Console.ReadLine();
                switch (j)
                {
                    case 0:
                        animal = itemInput;
                        break;
                    case 1:
                        food = itemInput;
                        break;
                    case 2:
                        fruit = itemInput;
                        break;
                    case 3:
                        superhero = itemInput;
                        break;
                    case 4:
                        country = itemInput;
                        break;
                    case 5:
                        dessert = itemInput;
                        break;
                    case 6:
                        year = itemInput;
                        break;
                    default:
                        break;
                }
            }
            // The template for the story:

            string story = $"This morning {name} woke up feeling {adj1}. 'It is going to be a {adj2} day!'. Outside, a bunch of {animal}s were protesting to keep {food} in stores. They began to {verb} to the rhythm of the {noun1}, which made all the {fruit}s very {adj3}. Concerned, {name} texted {superhero}, who flew {name} to {country} and dropped {name} in a puddle of frozen {dessert}. {name} woke up in the year {year}, in a world where {noun2}s ruled the world.";


            // Print the story:
            Console.WriteLine(story);
        }
    }
}

