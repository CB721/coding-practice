using System;

namespace rockPaperScissors
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to Rock, Paper Scissors");
            string[] options = { "rock", "paper", "scissors" };
            int wins = 0;
            int ties = 0;
            int losses = 0;
            Console.WriteLine("How many rounds would you like to play?");
            string totalRoundsStr = Console.ReadLine();
            if (Int32.TryParse(totalRoundsStr, out int totalRounds))
            {
                for (int i = 0; i <= totalRounds; i++)
                {
                    if (i == totalRounds)
                    {
                        Console.WriteLine("You won " + wins + " rounds");
                        Console.WriteLine("You lost " + losses + " rounds");
                        Console.WriteLine("You tied in " + ties + "rounds");
                    }
                    else
                    {
                        Console.WriteLine("Round " + i);
                        Console.WriteLine("Type Your Move");
                        string move = Console.ReadLine().ToLower();
                        Console.WriteLine("You selected " + move);
                        if (move != "rock" && move != "paper" && move != "scissors")
                        {
                            Console.WriteLine("Invalid selection");
                        }
                        else
                        {
                            Random r = new Random();
                            int selection = r.Next(0, 3);
                            string compMove = options[selection];
                            Console.WriteLine("The computer selected " + compMove);

                            if (move == compMove)
                            {
                                ties++;
                                Console.WriteLine("Tie!");
                            }
                            if (move == "rock" && compMove == "scissors")
                            {
                                wins++;
                                Console.WriteLine("You won!");
                            }
                            if (move == "paper" && compMove == "rock")
                            {
                                wins++;
                                Console.WriteLine("You won!");
                            }
                            if (move == "scissors" && compMove == "paper")
                            {
                                wins++;
                                Console.WriteLine("You won!");
                            }

                            if (move == "scissors" && compMove == "rock")
                            {
                                losses++;
                                Console.WriteLine("You lost...");
                            }
                            if (move == "paper" && compMove == "scissors")
                            {
                                losses++;
                                Console.WriteLine("You lost...");
                            }
                            if (move == "rock" && compMove == "paper")
                            {
                                losses++;
                                Console.WriteLine("You lost...");
                            }
                        }
                    }

                }
            }
            else
            {
                Console.WriteLine("Enter a number next time...");
                Console.WriteLine("You lost...");
                losses++;
            }
        }
    }
}
