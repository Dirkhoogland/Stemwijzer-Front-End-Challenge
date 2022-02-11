using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.JSInterop;

namespace Stemwijzer_Front_End_Challenge.Pages
{



    public class IndexModel : PageModel
    {


        public void OnGet()
        {
           
        }
        [JSInvokable]
        public void Bindend_referendum(string[] Antwoorden)
        {
            string antwoord = "test";
            Antwoorden.SetValue(antwoord, 0);
        }
        [JSInvokable]
        public void Maatschappelijke_dienstplicht(string[] Antwoorden)
        {
            string antwoord = "test";
            Antwoorden.SetValue(antwoord, 1);

        }
        [JSInvokable]
        public void Anoniem_solliciteren(string[] Antwoorden)
        {
            string antwoord = "test";
            Antwoorden.SetValue(antwoord, 2);

        }
        [JSInvokable]
        public void Groepsbelediging(string[] Antwoorden)
        {
            string antwoord = "test";
            Antwoorden.SetValue(antwoord, 3);

        }

        [JSInvokable]
        public  int Startvragen(int Nummer)
        {
            Nummer++;
            
            if (Nummer == 1 )
            {
                Bindend_referendum(Antwoorden);
            }
            if (Nummer == 2)
            {
                Maatschappelijke_dienstplicht(Antwoorden);
            }
            if (Nummer == 3)
            {
                Anoniem_solliciteren(Antwoorden);
            }
            if (Nummer == 4)
            {
                Groepsbelediging(Antwoorden);
            }

            else
            {
                
            }

            return (Nummer);

        }

        
        string[] Antwoorden = new string[] { "-", "-", "-", "-" };
        int Nummer = 0;
        [JSInvokable]
        public void Start()
        {
            Startvragen(Nummer);
        }

        public void Check()
        {
          string ant1 = (string)Antwoorden.GetValue(1);
            if (ant1 == "-") { Bindend_referendum(Antwoorden); }

            string ant2 = (string)Antwoorden.GetValue(2);
            if (ant2 == "-") { Maatschappelijke_dienstplicht(Antwoorden); }

            string ant3 = (string)Antwoorden.GetValue(3);
            if (ant3 == "-") { Anoniem_solliciteren(Antwoorden); }

            string ant4 = (string)Antwoorden.GetValue(4);
            if (ant4 == "-") { Anoniem_solliciteren(Antwoorden); }

            else
            {

            }
        }

        
    }
}
